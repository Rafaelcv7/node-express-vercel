"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
const controller_1 = require("./controller");
const PersonEngine_1 = require("../Engines/PersonEngine");
let TestController = class TestController extends controller_1.Controller {
    async testing(req, res, next) {
        const engine = this.BusinessEngineFactory.GetEngine(PersonEngine_1.PersonEngine);
        res.send({ TotalOrders: await engine.AllPersons() });
    }
    async testingMiddleware(req, res, next) {
        res.send('Hey this is my API running 🥳');
    }
};
__decorate([
    (0, decorators_1.Get)('/testing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "testing", null);
__decorate([
    (0, decorators_1.Get)('/testingMid'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "testingMiddleware", null);
TestController = __decorate([
    (0, decorators_1.HttpRoute)('test')
], TestController);
exports.default = TestController;
