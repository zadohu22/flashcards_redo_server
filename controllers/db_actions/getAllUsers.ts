import prisma from '../../db.js';
import { Request, Response } from 'express';

export const showUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	// console.log(users, 'these are the users from prisma');
	res.status(201).json(users);
};
