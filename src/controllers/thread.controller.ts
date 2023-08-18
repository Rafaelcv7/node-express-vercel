import {Controller} from "./controller";
import {Get, HttpRoute} from "./decorators";
import {NextFunction, Request, Response} from "express";
const { Worker, parentPort } = require("worker_threads");

@HttpRoute('thread')
export default class ThreadController extends Controller{
	@Get('/nonblocking')
	async NonBlocking(req: Request, res: Response, next: NextFunction) {
		await res.status(200).send('Non blocking page.');
	}

	@Get('/blocking')
	async Blocking(req: Request, res: Response, next: NextFunction) {

		res.status(200).send(`result is `);
	}
}
