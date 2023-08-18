import {Get, HttpRoute, Middleware} from "./decorators";
import {NextFunction, Request, Response} from "express";
import {Controller} from "./controller";
import {Authorize} from "../functions";
import {PersonEngine} from "../Engines/PersonEngine";

@HttpRoute('test')
class TestController extends Controller{

	@Get('/testing')
	async testing(req: Request, res: Response, next: NextFunction) {

		const engine = this.BusinessEngineFactory.GetEngine(PersonEngine)
		res.send({ TotalOrders: await engine.AllPersons()})
	}

	@Get('/testingMid')
	async testingMiddleware(req: Request, res: Response, next: NextFunction) {
		res.send('Hey this is my API running 🥳')
	}
}

export default TestController
