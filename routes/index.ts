import express from 'express';
import { signup } from '../controllers/db_actions/signup.ts';
import { showAllUsers } from '../controllers/db_actions/showAllUsers.ts';
import { login } from '../controllers/db_actions/login.ts';
import logger from '../middleware/logger.ts';
import verifyToken from '../middleware/verifyToken.ts';

const router = express.Router();
router.use(express.json());

router.post('/signup', logger, signup);
router.post('/login', logger, login);
router.get('/show-all-users', logger, showAllUsers);

export default router;
