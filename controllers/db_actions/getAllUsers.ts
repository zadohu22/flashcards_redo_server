import prisma from '../../db.js';
import { Request, Response } from 'express';

export const showUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	res.status(201).json(users);
};
