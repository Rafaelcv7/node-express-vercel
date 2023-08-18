import 'reflect-metadata';
import {Router} from 'express';
import {Controller} from "./controller";

interface ControllerRouterType extends Router {
	[key: string]: any;
}

export function HttpRoute(name: string) {
	return function <T extends { new (...args: any[]): Controller }>(constructor: T) {
		return class extends constructor {
			constructor(...args: any[]) {
				super();

				for (const key of Object.getOwnPropertyNames(constructor.prototype)) {
					if (key === 'constructor') continue;

					const method: any = this[key as keyof this];
					const endpoint = Reflect.getMetadata('endpoint', method);
					const requestMethod: string = Reflect.getMetadata('method', method);
					const middleware = Reflect.getMetadata('middleware', method);

					const routes = this.Routes as ControllerRouterType
					routes[requestMethod.toLowerCase()](
						`/${name}${endpoint}`,
						...(middleware ? [middleware, method.bind(this)] : [method.bind(this)]));
				}
				console.log(`${name} mounted on App Successfully`);
			}
		};
	};
}

export function Get(endpoint: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		Reflect.defineMetadata('method', Get.name, descriptor.value);
		Reflect.defineMetadata('endpoint', endpoint, descriptor.value);
		return descriptor;
	};
}

export function Post(endpoint: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		Reflect.defineMetadata('method', Post.name, descriptor.value);
		Reflect.defineMetadata('endpoint', endpoint, descriptor.value);
		return descriptor;
	};
}

export function Middleware(middleware: Function) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const middlewares: Function[] = Reflect.getMetadata('middleware', descriptor.value) || [];
		Reflect.defineMetadata('middleware', [...middlewares, middleware], descriptor.value);
		return descriptor;
	};
}
