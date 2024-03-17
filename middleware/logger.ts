import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
	// console.log(`${req.method} ${req.url}`);
	console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
	next();
};
