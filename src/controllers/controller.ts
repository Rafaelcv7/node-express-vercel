import express from "express";
import BusinessEngineFactory from "../Engines/BusinessEngineFactory";

export abstract class Controller {
	Routes: express.Router
	BusinessEngineFactory: typeof BusinessEngineFactory
	constructor() {
		this.Routes = express.Router();
		this.BusinessEngineFactory = BusinessEngineFactory;
	}
}
