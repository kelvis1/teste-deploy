import express from "express";
import serverless from "serverless-http";

const app = express();

// Endpoint GET /
app.get("/", (req, res) => {
  res.json({
    status: "API ONLINE",
    hora: new Date().toISOString()
  });
});

// Exporta como função serverless (obrigatório na Vercel)
export default serverless(app)

