import jwt from 'jsonwebtoken';
import prisma from '../db.ts';
import errorHandler from './errorHandler.ts';

const createToken = async (userId: number) => {
	const user = await prisma.user.findUnique({
		where: { id: userId },
	});
	if (!user) {
		throw new Error('User not found');
	}

	return jwt.sign({ userId }, process.env.TOKEN_SECRET!, {
		expiresIn: '1h',
	});
};

export default createToken;
