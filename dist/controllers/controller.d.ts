import express from "express";
import BusinessEngineFactory from "../Engines/BusinessEngineFactory";
export declare abstract class Controller {
    Routes: express.Router;
    BusinessEngineFactory: typeof BusinessEngineFactory;
    constructor();
}
