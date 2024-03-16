import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { showUsers } from '../controllers/showUsers.js';
import prisma from '../db.js';

const router = express.Router();
router.use(express.json());

router.post('/create-from-client', createUser);
router.get('/get-all', showUsers);

// Correct way to define the route
// router.get('/create', async (req, res) => {
// 	const newUser = await createUser('test', 'test', 'test');
// 	res.send(newUser); // Send the new user back as a response
// });

// router.post('/create-from-client', async (req, res) => {
// 	console.log('request received');
// 	console.log(req.body);
// 	const newUser = await prisma.user.create({
// 		data: {
// 			email: req.body.email,
// 			password: req.body.password,
// 			confirmPassword: req.body.confirmPassword,
// 		},
// 	});
// 	console.log('New user created:', newUser);

// 	// console.log(newUser);
// 	res.send(newUser); // Send the new user back as a response
// });

// router.get('/show-all', async (req, res) => {
// 	const users = await prisma.user.findMany();
// 	res.send(users); // Send the users back as a response
// });

export default router;
