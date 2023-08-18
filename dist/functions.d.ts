import { NextFunction, Request, Response } from "express";
export declare function ErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): void;
export declare function RequestLogger(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function Authorize(req: Request, res: Response, next: NextFunction): void;
