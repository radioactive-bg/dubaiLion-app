import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Card redemption function adapted from api.ts
const API_URL =
  "https://proxy.duegate.com/staging/distributor-crm/v1/wallets/1/credit";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0NiIsImp0aSI6IjQ1NzMwMWY5MTQyOGMzMjdiNDNjZjBkNjk3MTg5ZDQ2MWI0YWExZTcwN2E0MWFjZTEwY2Y5ZGE2ZTYzNjhhZTk1ZDUwZTkwNTY2Njg3NDg5IiwiaWF0IjoxNzQ2MDAwMzkwLjUwOTM2OCwibmJmIjoxNzQ2MDAwMzkwLjUwOTM3MSwiZXhwIjoxNzc3NTM2MzkwLjQ5NjcxOSwic3ViIjoiODI0Iiwic2NvcGVzIjpbXX0.IPymXH8dzt9mIxIrkjKbh0_9X8Cla38-3Q1Wv8KPq1Dles0VKCGeocZS2a-iNRVXmPx5qAr-L1_xGb3KXPPmiqL-a8C0Q6DjumV5DUhsJ88yKnzHXPl9RtXlrHEG6XjNzOiXMnk-JMBYezkuDaDiuSTzrCSx7Gs5mHewSPo3Cptw-qma8X24hKSNMwWSppJd4R7PLYRkIPdkg3ChS8oV7TbhE-9JExh7LIek6VyZjdVdVitC9eVHhKuKgRc6wXrIr9LeI39Ihz4UpujHR0Q-7g9ykKVI8cL7dc7Gtp3MfD6UftnFAOrMPP_KXpcsA9j0jLe0tGYsZ1mYmINMW9P4ybj-if__LLWrVIiaRsMNqdkroPUbLUJYIXBLyUGKuqiDUA0F77oUss3ljpecDOF73Qlf2cNG9jTi57nI3tYMBZwHwF5qwv9fR2rzgYpj67eyw6IjbJMOp4iji_jPGSQqZvlh1nqXimehU5s9zjKE61FeTv3fOxwHWMUsebxXBHXl5-uwv6DXGtvfGU0Ieg1isPv1EfjYxCTKxmcFQZhxbKp8Dsdhnqs7Efh5PfOo42ac536QlNP-7eFg-mYBeuvbOnseDOdGJ0fLw3p41HK2SXCejLkZE2wpj9MEtyCFaMrJd_ZcMGGKsV9ObZxsY959A8WiuZu8Op8i0dsRLWrei0E";

// Redis or DB could be used here instead of in-memory store for production
const redemptionEntries = [];

const redeemCard = async (payload) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        type: "redeem_card",
        data: {
          number: payload.data.number,
          cvv: payload.data.cvv,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
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
