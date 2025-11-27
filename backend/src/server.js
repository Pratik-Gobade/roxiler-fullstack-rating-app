import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactionRoutes.js"; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check API
app.get("/health", (req, res) => {
  res.json({ status: "Backend is working!" });
});

// ==========================
//   API ROUTES CONNECT
// ==========================
app.use("/api", transactionRoutes);

// ==========================
//   START SERVER
// ==========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});