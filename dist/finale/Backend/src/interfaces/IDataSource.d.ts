export interface IDataSource {
    Connect(): void;
    get DB(): any;
    isConnected(): boolean;
    RetryConnection(): boolean;
    DestroyInstance(): void;
}
