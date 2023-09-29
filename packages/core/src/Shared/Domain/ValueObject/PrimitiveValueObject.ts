import { ValueObject } from './ValueObject';

export type Primitive = string | number | boolean | Date;

export abstract class PrimitiveValueObject<T extends Primitive> extends ValueObject<T> {
    constructor(value: T) {
        super(value);
    }
}
