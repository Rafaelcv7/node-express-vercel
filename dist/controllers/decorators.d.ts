import 'reflect-metadata';
import { Router } from 'express';
import { Controller } from "./controller";
export declare function HttpRoute(name: string): <T extends new (...args: any[]) => Controller>(constructor: T) => {
    new (...args: any[]): {
        Routes: Router;
        BusinessEngineFactory: {
            GetEngine<T_1>(type: new () => T_1): T_1;
        };
    };
} & T;
export declare function Get(endpoint: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare function Post(endpoint: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare function Middleware(middleware: Function): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
