import prisma from '../../db.js';
import { Request, Response } from 'express';

export const showAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();
		console.log(users);
		res.status(200).json(users);
	} catch (error) {
		console.error('Error fetching users:', error);
		res.status(500).json({ error: 'Internal Server Error in showUsers' });
	}
};
