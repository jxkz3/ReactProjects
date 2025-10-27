// Import packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

// Load .env file
dotenv.config();

// Initialize express app
const app = express();

// Enable CORS (so React can call backend)
app.use(cors());

// Simple route to test
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Route to fetch data from Gemini API
app.post("/api/gemini", express.json(), async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ Gemini API error:", error);
    res.status(500).json({ error: "Gemini request failed" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
