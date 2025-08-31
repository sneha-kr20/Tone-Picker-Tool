import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// ✅ Allow frontend from Render (update this if needed)
app.use(cors({
  origin: ["http://localhost:3000", "https://tone-picker-tool-frontend.onrender.com"],
  credentials: true
}));

app.use(express.json());

// ✅ Root route to confirm backend is running
app.get("/", (req, res) => {
  res.send("Tone Picker API is running");
});

// ✅ Health check route
app.get("/status", (req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

const toneInstructions = {
  formal: "Rewrite the text to sound formal and professional.",
  casual: "Make the text relaxed and conversational.",
  friendly: "Make the text warm and approachable.",
  angry: "Rewrite the text to express frustration or anger.",
  excited: "Make the text enthusiastic and energetic.",
  empathetic: "Make the text caring and emotionally supportive.",
};

// ✅ Main rewrite endpoint
app.post("/api/rewrite", async (req, res) => {
  const { text, tone } = req.body;

  if (!toneInstructions[tone]) {
    return res.status(400).json({ error: "Unsupported tone selected" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          { role: "system", content: toneInstructions[tone] },
          { role: "user", content: text },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    res.json({ output: data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});