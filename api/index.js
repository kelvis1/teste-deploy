import express from "express";

const app = express();

// Endpoint GET /
app.get("/", (req, res) => {
  res.json({
    status: "API ONLINE tesste",
    hora: new Date().toISOString()
  });
});

// Exporta como função serverless (obrigatório na Vercel)
export default app;

