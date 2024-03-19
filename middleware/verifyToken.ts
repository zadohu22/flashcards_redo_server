import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
	user?: string | JwtPayload | undefined; // Define the user property on the Request object
}

const verifyToken = (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401); // If there's no token, return 401 Unauthorized

	jwt.verify(token, process.env.TOKEN_SECRET as string, (err, user) => {
		if (err) return res.sendStatus(403); // If token is invalid, return 403 Forbidden
		req.user = user;
		next(); // Proceed to the next middleware or route handler
	});
};

export default verifyToken;
