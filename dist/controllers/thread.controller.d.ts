import { Controller } from "./controller";
import { NextFunction, Request, Response } from "express";
export default class ThreadController extends Controller {
    NonBlocking(req: Request, res: Response, next: NextFunction): Promise<void>;
    Blocking(req: Request, res: Response, next: NextFunction): Promise<void>;
}
