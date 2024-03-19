import prisma from '../../db.js';
import { Request, Response } from 'express';

export const showAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();
		console.log(users); // Log the users to check if they are retrieved correctly
		res.status(200).json(users); // Use status 200 for successful responses
	} catch (error) {
		console.error('Error fetching users:', error);
		res.status(500).json({ error: 'Internal Server Error in showUsers' });
	}
};
