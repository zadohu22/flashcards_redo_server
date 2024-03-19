import prisma from '../../db.ts';
import createToken from '../../utilities/createToken.ts';
import { Request, Response } from 'express';

const login = async (req: Request, res: Response) => {
	const { email, password, confirmPassword } = req.body;
};
