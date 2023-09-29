import { InvalidValueError } from './InvalidValueError';

export abstract class ValueObject<T> {
    private readonly _value: T;

    constructor(value: T) {
        this.ensureValueIsDefined(value);
        this._value = value;
    }

    private ensureValueIsDefined(value: T): void {
        if (value === null || value === undefined) {
            throw new InvalidValueError('Value must be defined!');
        }
    }

    get value(): T {
        return this._value;
    }

    equals(other: ValueObject<never>): boolean {
        return this.constructor.prototype === other.constructor.prototype && other.value === this.value;
    }

    toString(): string {
        if (this.value && typeof this.value === 'object' && 'toString' in this.value) {
            return this.value.toString();
        }

        return `${this.value}`;
    }
}
