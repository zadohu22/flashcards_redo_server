import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../../db.ts';

const saltRounds = 10;

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email, password, confirmPassword } = req.body;

	if (!req.body) {
		const error = new Error('Request body is missing');
		return next(error);
	}

	if (password !== confirmPassword) {
		return res.status(400).json({ error: 'Passwords do not match' });
	}

	try {
		const hash = await bcrypt.hash(password, saltRounds);

		const existingUser = await prisma.user.findUnique({
			where: { email: email },
		});
		if (existingUser) {
			return res.status(400).json({ error: 'Email already exists' });
		}

		const newUser = await prisma.user.create({
			data: {
				email: email,
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
