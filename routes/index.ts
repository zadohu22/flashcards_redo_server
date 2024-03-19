import express from 'express';
import { createUser } from '../controllers/db_actions/signup.ts';
import { showAllUsers } from '../controllers/db_actions/showAllUsers.ts';
import logger from '../middleware/logger.ts';
import verifyToken from '../middleware/verifyToken.ts';

const router = express.Router();
router.use(express.json());

router.post('/create-user', logger, createUser);
router.post('/login', logger, verifyToken);
router.get('/show-all-users', logger, showAllUsers);

export default router;
