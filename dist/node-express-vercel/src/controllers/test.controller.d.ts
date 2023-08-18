import { NextFunction, Request, Response } from "express";
import { Controller } from "./controller";
declare class TestController extends Controller {
    testing(req: Request, res: Response, next: NextFunction): Promise<void>;
    testingMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default TestController;
