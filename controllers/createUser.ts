import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../db.ts';

const saltRounds = 10;

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Check if req.body is present
	if (!req.body) {
		const error = new Error('Request body is missing');
		return next(error); // Pass the error to the next middleware
	}

	try {
		const hash = await bcrypt.hash(req.body.password, saltRounds);
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
		next(error); // Pass the error to the next middleware
	}
};

// Custom error handling middleware
export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err);
	res.status(500).send({ errors: [{ message: err.message }] });
};
