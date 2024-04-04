import prisma from '../../db.ts';
import createToken from '../../utilities/createToken.ts';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: 'Email and password are required' });
		}

		const user = await prisma.user.findUnique({ where: { email } });
		console.log('User found:', user);

		if (!user) {
			return res.status(400).json({ error: 'Invalid email' });
		}

		const passwordsMatch = await bcrypt.compare(password, user.password);
		if (!passwordsMatch) {
			return res.status(400).json({ error: 'Invalid password' });
		}

		const token = await createToken(user.id);
		res.status(200).json({
			token,
			message: 'Login successful',
			user: { id: user.id, email: user.email },
		});
		console.log('User logged in:', user);
		console.log('Token:', token);
	} catch (error) {
		console.error('Error during login:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
};
