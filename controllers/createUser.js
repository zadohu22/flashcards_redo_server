import prisma from '../db.js';
import bcrypt from 'bcryptjs';

const saltRounds = 10;

export const createUser = async (req, res) => {
	try {
		// Hash the password using bcrypt
		const hash = await bcrypt.hash(req.body.password, saltRounds);

		// Create a new user with the hashed password
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
		res
			.status(500)
			.json({ error: 'An error occurred while creating the user.' });
	}
};
