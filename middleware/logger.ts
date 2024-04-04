import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
	try {
		const timeOptions: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true,
		};
		const time = new Intl.DateTimeFormat('en-US', timeOptions).format(
			new Date()
		);
		console.log(`${req.method} ${req.url} - ${time}`);
		next();
	} catch (error) {
		console.error(error);
	}
};

export default logger;
