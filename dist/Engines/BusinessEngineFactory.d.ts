declare class BusinessEngineFactory {
    private constructor();
    private static instance;
    static GetInstance(): BusinessEngineFactory;
    GetEngine<T>(type: new () => T): T;
}
declare const _default: BusinessEngineFactory;
export default _default;
