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
      filename: path.join(logDir, "error.log"),
      level: "error",
      maxsize: 50 * 1024 * 1024, // 50MB
      maxFiles: 5,
      tailable: true,
    }),
    new winston.transports.File({
      filename: path.join(logDir, "activity.log"),
      maxsize: 50 * 1024 * 1024, // 50MB
      maxFiles: 5,
      tailable: true,
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

// Capture uncaught exceptions and unhandled rejections
process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception:", error);
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Override console methods to use our logger
const originalConsole = {
  log: console.log,
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};

console.log = (...args) => {
  originalConsole.log(...args);
  logger.info(args.join(" "));
};

console.error = (...args) => {
  originalConsole.error(...args);
  logger.error(args.join(" "));
};

console.warn = (...args) => {
  originalConsole.warn(...args);
  logger.warn(args.join(" "));
};

console.info = (...args) => {
  originalConsole.info(...args);
  logger.info(args.join(" "));
};

console.debug = (...args) => {
  originalConsole.debug(...args);
  logger.debug(args.join(" "));
};

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
      `${BASE_URL}/distributor-crm/v1/wallets/67/credit`,

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

// Add this before the /api/logs endpoint
app.post("/api/logs/clear", authenticate, (req, res) => {
  try {
    // Clear both log files
    fs.writeFileSync(path.join(logDir, "error.log"), "");
    fs.writeFileSync(path.join(logDir, "activity.log"), "");
    logger.info("Logs cleared by admin");
    res.json({ success: true, message: "Logs cleared successfully" });
  } catch (error) {
    logger.error("Failed to clear logs: " + error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update the /api/logs endpoint HTML
app.get("/api/logs", authenticate, (req, res) => {
  const activityLogPath = path.join(logDir, "activity.log");
  const errorLogPath = path.join(logDir, "error.log");

  Promise.all([
    new Promise((resolve, reject) => {
      fs.readFile(activityLogPath, "utf8", (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),
    new Promise((resolve, reject) => {
      fs.readFile(errorLogPath, "utf8", (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),
  ])
    .then(([activityLogs, errorLogs]) => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Application Logs</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background: #f5f5f5;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .header {
                    background: #2c3e50;
                    color: white;
                    padding: 20px;
                    border-radius: 8px 8px 0 0;
                    margin-bottom: 20px;
                }
                .log-section {
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    margin-bottom: 20px;
                    overflow: hidden;
                }
                .log-header {
                    background: #34495e;
                    color: white;
                    padding: 10px 20px;
                    font-weight: bold;
                }
                .log-content {
                    padding: 20px;
                    max-height: 500px;
                    overflow-y: auto;
                    font-family: 'Consolas', 'Monaco', monospace;
                    font-size: 14px;
                    line-height: 1.5;
                    white-space: pre-wrap;
                }
                .error-log .log-header {
                    background: #c0392b;
                }
                .timestamp {
                    color: #7f8c8d;
                    font-size: 0.9em;
                    margin-bottom: 10px;
                }
                .button-group {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 20px;
                }
                .btn {
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                }
                .btn:hover {
                    background: #2980b9;
                }
                .btn-danger {
                    background: #e74c3c;
                }
                .btn-danger:hover {
                    background: #c0392b;
                }
                .log-entry {
                    margin-bottom: 8px;
                    padding: 4px 8px;
                    border-radius: 4px;
                }
                .log-entry.error {
                    background: #ffebee;
                    color: #c62828;
                }
                .log-entry.warn {
                    background: #fff3e0;
                    color: #ef6c00;
                }
                .log-entry.info {
                    background: #e3f2fd;
                    color: #1565c0;
                }
                .modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    justify-content: center;
                    align-items: center;
                }
                .modal-content {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    max-width: 400px;
                    width: 90%;
                }
                .modal-buttons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Application Logs</h1>
                    <div class="timestamp">Last updated: ${new Date().toLocaleString()}</div>
                    <div class="button-group">
                        <button class="btn" onclick="location.reload()">Refresh Logs</button>
                        <button class="btn btn-danger" onclick="showClearConfirmation()">Clear Logs</button>
                    </div>
                </div>
                
                <div class="log-section error-log">
                    <div class="log-header">Error Logs</div>
                    <div class="log-content">
                        ${errorLogs
          ? errorLogs
            .split("\n")
            .map((line) => {
              if (line.includes("ERROR")) {
                return `<div class="log-entry error">${line}</div>`;
              }
              return `<div class="log-entry">${line}</div>`;
            })
            .join("")
          : "No error logs found"
        }
                    </div>
                </div>

                <div class="log-section">
                    <div class="log-header">Activity Logs</div>
                    <div class="log-content">
                        ${activityLogs
          ? activityLogs
            .split("\n")
            .map((line) => {
              if (line.includes("ERROR")) {
                return `<div class="log-entry error">${line}</div>`;
              } else if (line.includes("WARN")) {
                return `<div class="log-entry warn">${line}</div>`;
              } else if (line.includes("INFO")) {
                return `<div class="log-entry info">${line}</div>`;
              }
              return `<div class="log-entry">${line}</div>`;
            })
            .join("")
          : "No activity logs found"
        }
                    </div>
                </div>
            </div>

            <div id="clearConfirmation" class="modal">
                <div class="modal-content">
                    <h2>Clear Logs</h2>
                    <p>Are you sure you want to clear all logs? This action cannot be undone.</p>
                    <div class="modal-buttons">
                        <button class="btn" onclick="hideClearConfirmation()">Cancel</button>
                        <button class="btn btn-danger" onclick="clearLogs()">Clear Logs</button>
                    </div>
                </div>
            </div>

            <script>
                function showClearConfirmation() {
                    document.getElementById('clearConfirmation').style.display = 'flex';
                }

                function hideClearConfirmation() {
                    document.getElementById('clearConfirmation').style.display = 'none';
                }

                function clearLogs() {
                    fetch('/api/logs/clear', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            location.reload();
                        } else {
                            alert('Failed to clear logs: ' + data.message);
                        }
                    })
                    .catch(error => {
                        alert('Error clearing logs: ' + error.message);
                    })
                    .finally(() => {
                        hideClearConfirmation();
                    });
                }
            </script>
        </body>
        </html>
      `;

      res.setHeader("Content-Type", "text/html");
      res.send(html);
    })
    .catch((err) => {
      logger.error("Failed to read log files: " + err.message);
      res.status(500).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: sans-serif; padding: 20px; }
                .error { color: red; }
            </style>
        </head>
        <body>
            <h1 class="error">Error Reading Logs</h1>
            <p>${err.message}</p>
        </body>
        </html>
      `);
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
