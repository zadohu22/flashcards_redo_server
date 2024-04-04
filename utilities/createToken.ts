import jwt from 'jsonwebtoken';
import prisma from '../db.ts';

const createToken = async (userId: number) => {
	try {
		// Fetch user from the database
		const user = await prisma.user.findUnique({
			where: { id: userId },
		});

		// Handle scenario where user is not found
		if (!user) {
			throw new Error('User not found');
		}

		// Generate JWT token with user ID payload
		const token = jwt.sign({ userId }, process.env.TOKEN_SECRET!, {
			expiresIn: '12h', // Token expiry time
		});

		return token;
	} catch (error) {
		// Handle any errors that occur during token creation
		console.error('Error creating token:', error);
		throw new Error('Failed to create token');
	}
};

export default createToken;
