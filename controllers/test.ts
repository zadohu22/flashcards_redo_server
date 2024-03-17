import prisma from '../db.js'; // Adjust the import path based on where your db.js file is located

export async function createUser(req) {
	const newUser = await prisma.user.create({
		data: {
			email: req.email,
			password: req.password,
			confirmPassword: req.confirmPassword,
		},
	});
	console.log('New user created:', newUser);
	return newUser;
}

export async function verifyUserCreation(email) {
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});
	console.log(user);
	return user;
}
