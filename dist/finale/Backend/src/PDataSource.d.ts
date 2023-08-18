import { IDataSource } from "./interfaces/IDataSource";
import { PrismaClient } from "@prisma/client";
declare class PDataSource implements IDataSource {
    private _db;
    Connect(): void;
    get DB(): PrismaClient;
    DestroyInstance(): Promise<void>;
    RetryConnection(): boolean;
    isConnected(): boolean;
}
declare const pDataSource: PDataSource;
export default pDataSource;
