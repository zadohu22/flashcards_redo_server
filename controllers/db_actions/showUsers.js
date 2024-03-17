import prisma from '../../db.js';

export const showUsers = async (req, res) => {
	const users = await prisma.user.findMany();
	console.log(users, 'these are the users from prisma');
	res.status(201).json(users);
};
