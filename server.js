import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import querystring from "querystring";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API Configuration
const BASE_URL = "https://proxy.duegate.com/staging";
const AUTH_CREDENTIALS = {
  username: "a.miladinov@radioactive.bg",
  password: "0:y5g5NBv)$zy0<",
};

// Get authentication token
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
    console.error(
      "Authentication error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to authenticate");
  }
};

// Redis or DB could be used here instead of in-memory store for production
const redemptionEntries = [];

const redeemCard = async (payload) => {
  try {
    // Get fresh token before making the redemption request
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
    console.log("Stored redemption data:", data);
  } catch (error) {
    console.error("Error storing redemption data:", error);
  }
};

// Initialize Express app
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));

// Define routes directly without using app.route()
app.post("/api/webhooks/zoho-forms", function (req, res) {
  try {
    const { tiktokUsername, cardSerialNumber, cvv } = req.body;
    console.log("Received webhook request:", req.body);

    redeemCard({
      tiktokUsername,
      data: {
        number: cardSerialNumber,
        cvv,
      },
    })
      .then((result) => {
        console.log("Redeem result:", result);
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        console.error("Webhook handler error:", err);
        res.status(200).json({ success: false, error: err.message });
      });
  } catch (err) {
    console.error("Request processing error:", err);
    res.status(200).json({ success: false, error: err.message });
  }
});

app.get("/api/redemptions", function (req, res) {
  res.json(redemptionEntries);
});

// Single route for all frontend routes - placed last
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`⚡️ Server listening on port ${PORT}`);
});
