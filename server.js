import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import querystring from "querystring";
import winston from "winston";
import fs from "fs";
import basicAuth from "basic-auth";

// Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logDir = path.join(__dirname, "logs");

// Ensure log directory exists
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

// Winston Logger Setup (rotate after 50MB)
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message }) =>
        `[${timestamp}] ${level.toUpperCase()}: ${message}`
    )
  ),
  transports: [
    new winston.transports.File({
      filename: path.join(logDir, "activity.log"),
      maxsize: 50 * 1024 * 1024, // 50MB
      maxFiles: 5,
      tailable: true,
    }),
    new winston.transports.Console(),
  ],
});

// Basic Auth Credentials for /api/logs
const LOG_AUTH = {
  username: "admin",
  password: "Zxc!23", // Change this to a secure password
};

const authenticate = (req, res, next) => {
  const user = basicAuth(req);

  if (
    !user ||
    user.name !== LOG_AUTH.username ||
    user.pass !== LOG_AUTH.password
  ) {
    res.set("WWW-Authenticate", 'Basic realm="Logs Area"');
    return res.status(401).send("Authentication required.");
  }

  next();
};

// API Configuration
const BASE_URL = "https://proxy.duegate.com/staging";
const AUTH_CREDENTIALS = {
  username: "a.miladinov@radioactive.bg",
  password: "0:y5g5NBv)$zy0<",
};

const getAuthToken = async () => {
  try {
    const data = querystring.stringify({
      grant_type: "password",
      username: AUTH_CREDENTIALS.username,
      password: AUTH_CREDENTIALS.password,
    });

    const response = await axios.post(`${BASE_URL}/oauth/token`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const { token_type, access_token } = response.data;
    if (!access_token) {
      throw new Error("No access token received");
    }

    return `${token_type} ${access_token}`;
  } catch (error) {
    logger.error(
      "Authentication error: " + (error.response?.data?.error || error.message)
    );
    throw new Error("Failed to authenticate");
  }
};

const redemptionEntries = [];

const redeemCard = async (payload) => {
  try {
    const accessToken = await getAuthToken();

    const response = await axios.post(
      `${BASE_URL}/distributor-crm/v1/wallets/1/credit`,
      {
        type: "redeem_card",
        data: {
          number: payload.data.number,
          cvv: payload.data.cvv,
        },
      },
      {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    );

    await storeRedemptionData({
      tiktokUsername: payload.tiktokUsername || "unknown",
      cardNumber: payload.data.number,
      cvv: payload.data.cvv,
      timestamp: new Date().toISOString(),
      status: "success",
    });

    return {
      success: true,
      message: "Card redeemed successfully",
      data: response.data,
    };
  } catch (error) {
    await storeRedemptionData({
      tiktokUsername: payload.tiktokUsername || "unknown",
      cardNumber: payload.data.number,
      cvv: payload.data.cvv,
      timestamp: new Date().toISOString(),
      status: "failed",
      error: error.message || "Unknown error",
    });

    logger.error("Redemption failed: " + (error.message || "Unknown error"));

    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to redeem card",
    };
  }
};

const storeRedemptionData = async (data) => {
  try {
    redemptionEntries.push({
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      ...data,
    });
    logger.info("Stored redemption data: " + JSON.stringify(data));
  } catch (error) {
    logger.error("Error storing redemption data: " + error.message);
  }
};

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));

// Webhook route
app.post("/api/webhooks/zoho-forms", function (req, res) {
  try {
    const { tiktokUsername, cardSerialNumber, cvv } = req.body;
    logger.info("Received webhook request: " + JSON.stringify(req.body));

    redeemCard({
      tiktokUsername,
      data: {
        number: cardSerialNumber,
        cvv,
      },
    })
      .then((result) => {
        logger.info("Redeem result: " + JSON.stringify(result));
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        logger.error("Webhook handler error: " + err.message);
        res.status(200).json({ success: false, error: err.message });
      });
  } catch (err) {
    logger.error("Request processing error: " + err.message);
    res.status(200).json({ success: false, error: err.message });
  }
});

// Endpoint to view redemption history in memory
app.get("/api/redemptions", function (req, res) {
  res.json(redemptionEntries);
});

// Serve logs (protected)
app.get("/api/logs", authenticate, (req, res) => {
  const logPath = path.join(logDir, "activity.log");
  fs.readFile(logPath, "utf8", (err, data) => {
    if (err) {
      logger.error("Failed to read log file: " + err.message);
      return res.status(500).send("Error reading logs.");
    }
    res.setHeader("Content-Type", "text/plain");
    res.send(data);
  });
});

// Catch-all route
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  logger.info(`⚡️ Server listening on port ${PORT}`);
});
