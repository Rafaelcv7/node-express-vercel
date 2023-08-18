"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = exports.Post = exports.Get = exports.HttpRoute = void 0;
require("reflect-metadata");
function HttpRoute(name) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super();
                for (const key of Object.getOwnPropertyNames(constructor.prototype)) {
                    if (key === 'constructor')
                        continue;
                    const method = this[key];
                    const endpoint = Reflect.getMetadata('endpoint', method);
                    const requestMethod = Reflect.getMetadata('method', method);
                    const middleware = Reflect.getMetadata('middleware', method);
                    const routes = this.Routes;
                    routes[requestMethod.toLowerCase()](`/${name}${endpoint}`, ...(middleware ? [middleware, method.bind(this)] : [method.bind(this)]));
                }
                console.log(`${name} mounted on App Successfully`);
            }
        };
    };
}
exports.HttpRoute = HttpRoute;
function Get(endpoint) {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata('method', Get.name, descriptor.value);
        Reflect.defineMetadata('endpoint', endpoint, descriptor.value);
        return descriptor;
    };
}
exports.Get = Get;
function Post(endpoint) {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata('method', Post.name, descriptor.value);
        Reflect.defineMetadata('endpoint', endpoint, descriptor.value);
        return descriptor;
    };
}
exports.Post = Post;
function Middleware(middleware) {
    return function (target, propertyKey, descriptor) {
        const middlewares = Reflect.getMetadata('middleware', descriptor.value) || [];
        Reflect.defineMetadata('middleware', [...middlewares, middleware], descriptor.value);
        return descriptor;
    };
}
exports.Middleware = Middleware;
