import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { showUsers } from '../controllers/db_actions/getAllUsers.ts';
import { logger } from '../middleware/logger.ts';

const router = express.Router();
router.use(express.json());

router.post('/create-user', logger, createUser);
router.get('/get-all-users', logger, showUsers);

export default router;
