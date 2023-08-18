import { Engine } from "./Engine";
import { Person } from '@prisma/client';
export declare class PersonEngine extends Engine {
    AllPersons(): Promise<Person[]>;
}
