"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class PDataSource {
    _db;
    Connect() {
        this._db = new client_1.PrismaClient();
    }
    get DB() {
        return this._db;
    }
    async DestroyInstance() {
        await this._db.$disconnect();
    }
    RetryConnection() {
        return false;
    }
    isConnected() {
        return true;
    }
}
const pDataSource = new PDataSource();
pDataSource.Connect();
exports.default = pDataSource;
