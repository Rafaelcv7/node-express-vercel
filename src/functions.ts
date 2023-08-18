import { NextFunction, Request, Response} from "express";

export function ErrorHandler(err: Error,req: Request, res: Response, next: NextFunction) {
	console.log(err.message)
	res.send(err.message)
}

export async function RequestLogger(req: Request, res: Response, next: NextFunction) {
	const start = Date.now();
	await next();
	const delta = Date.now() - start;
	console.log(`[${req.method}] ${req.url} - ${convertMilliseconds(delta)}`)
}

function convertMilliseconds(ms: number) {
	let returnable = ms + 'ms';
	if(ms > 1000) {
		const toSeconds = Math.floor(ms/ 1000)
		returnable = toSeconds + 's';
		if(toSeconds > 60) {
			const toMinutes = Math.floor(toSeconds/ 60)
			returnable = toMinutes + 'm'

		}
	}
	return returnable;
}

export function Authorize(req: Request, res: Response, next: NextFunction) {
	const pass: number = 1234
	if(pass === 12345) {
		next()
	}
	else {
		res.status(403)
		throw new Error('User not authorized')
	}
}
