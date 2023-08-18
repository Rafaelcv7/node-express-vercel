"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessEngineFactory {
    constructor() { }
    static instance;
    static GetInstance() {
        return !BusinessEngineFactory.instance
            ? (BusinessEngineFactory.instance = new BusinessEngineFactory())
            : BusinessEngineFactory.instance;
    }
    GetEngine(type) {
        return new type();
    }
}
exports.default = BusinessEngineFactory.GetInstance();
