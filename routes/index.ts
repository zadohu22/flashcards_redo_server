import express from 'express';
import { createUser } from '../controllers/db_actions/signup.ts';
import { showUsers } from '../controllers/db_actions/getAllUsers.ts';
import logger from '../middleware/logger.ts';
import createToken from '../middleware/createToken.ts';
import verifyToken from '../middleware/verifyToken.ts';

const router = express.Router();
router.use(express.json());

router.post('/create-user', logger, createToken, createUser);
router.post('/login', logger, verifyToken);
router.get('/get-all-users', logger, showUsers);

export default router;
