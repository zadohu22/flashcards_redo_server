import express from 'express';
import { createUser, verifyUserCreation } from '../controllers/test.js';

const router = express.Router();
router.use(express.json());

// Correct way to define the route
router.get('/create', async (req, res) => {
	const newUser = await createUser('test', 'test', 'test');
	res.send(newUser); // Send the new user back as a response
});

router.post('/create-from-client', async (req, res) => {
	const newUser = await createUser(
		req.body.email,
		req.body.password,
		req.body.confirmPassword
	);
	console.log(newUser);
	res.send(newUser); // Send the new user back as a response
});

router.get('/verify', async (req, res) => {
	const user = await verifyUserCreation('test');
	res.send(user); // Send the user back as a response
});

export default router;
