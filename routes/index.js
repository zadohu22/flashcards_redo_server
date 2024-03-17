import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { showUsers } from '../controllers/db_actions/showUsers.js';
import prisma from '../db.js';

const router = express.Router();
router.use(express.json());

router.post('/create-user', createUser);
router.get('/get-all-users', showUsers);

export default router;
