import express from "express";

import { requireAuth } from "../middleware/auth.js";
import { requireBoardAccess } from "../middleware/boardAccess.js";

import { addMember, createBoard, deleteBoard, getActivity, getBoard, listBoards, removeMember, updateBoard } from "../controllers/boardController.js";
import { createColumn, updateColumn, deleteColumn } from "../controllers/columnController.js";
import { listTasks, createTask, updateTask, moveTask, deleteTask } from "../controllers/taskController.js";
import { breakdownTask, generateTasks, summarizeBoard } from "../controllers/aiController.js";

const router = express.Router();

router.use(requireAuth);

router.get("/", listBoards);
router.post("/", createBoard);

router.get("/:boardId", requireBoardAccess, getBoard);
router.patch("/:boardId", requireBoardAccess, updateBoard);
router.delete("/:boardId", requireBoardAccess, deleteBoard);

router.get("/:boardId/activity", requireBoardAccess, getActivity);

router.post("/:boardId/members", requireBoardAccess, addMember);
router.delete("/:boardId/members/:userId", requireBoardAccess, removeMember);

router.post("/:boardId/columns", requireBoardAccess, createColumn);
router.patch("/:boardId/columns/:columnId", requireBoardAccess, updateColumn);
router.delete("/:boardId/columns/:columnId", requireBoardAccess, deleteColumn);

router.get("/:boardId/tasks", requireBoardAccess, listTasks);
router.post("/:boardId/tasks", requireBoardAccess, createTask);
router.patch("/:boardId/tasks/:taskId", requireBoardAccess, updateTask);
router.patch("/:boardId/tasks/:taskId/move", requireBoardAccess, moveTask);
router.delete("/:boardId/tasks/:taskId", requireBoardAccess, deleteTask);

router.post("/:boardId/ai/generate-tasks", requireBoardAccess, generateTasks);
router.post("/:boardId/ai/breakdown", requireBoardAccess, breakdownTask);
router.post("/:boardId/ai/summary", requireBoardAccess, summarizeBoard);

export default router;
