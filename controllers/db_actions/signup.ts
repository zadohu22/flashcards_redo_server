import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../../db.ts';

const saltRounds = 10;

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.body) {
		const error = new Error('Request body is missing');
		return next(error);
	}

	try {
		const hash = await bcrypt.hash(req.body.password, saltRounds);

		// query the database to check if the email already exists
		const existingUser = await prisma.user.findUnique({
			where: { email: req.body.email },
		});
		if (existingUser) {
			return res.status(400).json({ error: 'Email already exists' });
		}

		const newUser = await prisma.user.create({
			data: {
				email: req.body.email,
				password: hash,
			},
		});
		console.log('New user created:', newUser);
		res.status(201).json(newUser);
	} catch (error) {
		console.error(error);
		next(error);
	}
};