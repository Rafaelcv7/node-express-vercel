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
const controller_1 = require("./controller");
const decorators_1 = require("./decorators");
const { Worker, parentPort } = require("worker_threads");
let ThreadController = class ThreadController extends controller_1.Controller {
    async NonBlocking(req, res, next) {
        await res.status(200).send('Non blocking page.');
    }
    async Blocking(req, res, next) {
        res.status(200).send(`result is `);
    }
};
__decorate([
    (0, decorators_1.Get)('/nonblocking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ThreadController.prototype, "NonBlocking", null);
__decorate([
    (0, decorators_1.Get)('/blocking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ThreadController.prototype, "Blocking", null);
ThreadController = __decorate([
    (0, decorators_1.HttpRoute)('thread')
], ThreadController);
exports.default = ThreadController;
