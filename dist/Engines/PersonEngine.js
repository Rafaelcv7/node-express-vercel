"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonEngine = void 0;
const Engine_1 = require("./Engine");
class PersonEngine extends Engine_1.Engine {
    async AllPersons() {
        return await this.DB.person.findMany();
    }
}
exports.PersonEngine = PersonEngine;
