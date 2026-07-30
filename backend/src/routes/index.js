import express from "express";
import authRoute from "../routes/authRoutes.js"
import boardRoute from "../routes/boardRoutes.js"
import userRoute from "../routes/userRoutes.js"

const router = express.Router();

router.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});
router.use("/auth", authRoute)
router.use("/boards", boardRoute)
router.use("/users", userRoute)

export default router;
