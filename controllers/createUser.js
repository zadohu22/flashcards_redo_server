// userController.js
// import prisma from '../db.js';
import prisma from '../db.js';
// import asyncHandler from 'express-async-handler';

// Define the createUser action

export const createUser = async (req, res) => {
	console.log(req.body);
	const newUser = await prisma.user.create({
		data: {
			email: req.body.email,
			password: req.body.password,
			confirmPassword: req.body.confirmPassword,
		},
	});
	console.log('New user created:', newUser);
	res.status(201).json(newUser);
};

// export const createUser = asyncHandler(async (req, res) => {
// 	console.log(req.body);
// 	const newUser = await prisma.user.create({
// 		data: {
// 			email: req.body.email,
// 			password: req.body.password,
// 			confirmPassword: req.body.confirmPassword,
// 		},
// 	});
// 	console.log('New user created:', newUser);
// 	res.status(201).json(newUser); // Send the new user back as a response
// });
