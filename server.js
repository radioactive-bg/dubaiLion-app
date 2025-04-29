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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0NiIsImp0aSI6IjZkZjFmMzAyNjhhNDYwMDVhZWY5MmNmNjExZTIxMTY4Yzk0YzI1ODYzN2Q5YTM0ZDEyMmRlZWUyZjEzMzdiMDUzYTgxMzZiNGJlNjgxYjdlIiwiaWF0IjoxNzQ1NTczMjcyLjUzODkxNSwibmJmIjoxNzQ1NTczMjcyLjUzODkxOSwiZXhwIjoxNzc3MTA5MjcyLjUyNTUsInN1YiI6IjgzOSIsInNjb3BlcyI6W119.1dtJ5eppMZAbcvBpT0LfT5VNEnAzq_J2yi3vZHbU6E9Z0iXMR-7edjb9e250X-fPL_BYRlfrvNd5C2FHPda6fpb9EPQb7oTufNhe9wrkjfJQLK_TxA6jJihSLCsFgzZg3leh0FHc9iQXjpMOL13pPNPhh50Qpw1rZ4WufimhqQ_8xwP1AanztqqE3HOCCpdW64b1vGjrCQgNz5x44bATTIoZHV9DAkPD4EtsLG-BpqOc2J6DELp75Ltft0tlhzdPS7ZeRj-E26zHYATnhgkJ--hviQ_EUO3AHUpnLeQ5Qkmv7m5b1dQhj4l5fdQhQqzNq9-hfkDH3TFYyrhFzDMgm0y4EUnasw2_t9lusQCCnePNKZteo0SerV65x745PQ0FtTS1VNrKmgzNxZ6OBBp2EiYap6mjGhXAL3eK4NvBHfTkAiRBnKLEtIGZJ478xO9PtQBbTzm2A4xCMGLyWUtCYIY-o4b2XfU2G7M6Zc2NIXiNIzkOpaA-Jf66KnN1UE-W6iTTYa_rA-iTmqG6kYaNWJChpckHm3naWVsRwnTmciYgIxiYEqZQ9dEuQnilO28lYcztOe-N5PKdeXZ2KL2DNzGeJEQTSHUbjLtMLrTOE1eJvOh5Nd8wsfrAjvE01-WIZqV6C7qJwVBd9l5a2XDE5r1TTlp1ELoIQ6XY-yHu72k";

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
app.post("/api/webhooks/zoho-forms", async (req, res) => {
  try {
    const { tiktokUsername, cardSerialNumber, cvv } = req.body;
    console.log("Received webhook request:", req.body);

    const result = await redeemCard({
      tiktokUsername,
      data: {
        number: cardSerialNumber,
        cvv,
      },
    });

    console.log("Redeem result:", result);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    // return 200 so Zoho marks it "delivered"
    return res.status(200).json({ success: false, error: err.message });
  }
});

app.get("/api/redemptions", (req, res) => {
  res.json(redemptionEntries);
});

// Single route for all frontend routes - placed last
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`⚡️ Server listening on port ${PORT}`));
