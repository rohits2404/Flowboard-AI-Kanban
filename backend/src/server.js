import "dotenv/config"
import express from "express";
import cors from "cors";
import http from "http";

import apiRoutes from "../src/routes/index.js";
import {
  errorHandler,
  notFoundHandler,
} from "../src/middleware/errorHandler.js";
import { initSocket } from "./socket/index.js";

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}));

app.use(express.json({ limit: "1mb" }));

app.get("/", (_req, res) => {
    res.json({
        name: "AI Kanban Board API",
        status: "running",
    });
});

app.use("/api", apiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const server = http.createServer(app)
initSocket(server)

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
    console.log(`🚀 API Listening On http://localhost:${PORT}`);
});

export default app
