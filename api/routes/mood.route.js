
import express from 'express';
import { getMoods, createMood } from '../controllers/mood.controller.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getMoods);
router.post('/', verifyToken, createMood);

export default router;
