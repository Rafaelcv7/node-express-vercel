"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
const PDataSource_1 = __importDefault(require("../../../finale/Backend/src/PDataSource"));
class Engine {
    DB;
    constructor() {
        this.DB = PDataSource_1.default.DB;
    }
}
exports.Engine = Engine;
