import { ValueObject } from './ValueObject';

export abstract class EnumValueObject<E> extends ValueObject<E> {
    constructor(
        value: E,
        private readonly allowedValues: E[],
    ) {
        super(value);
        this.ensureValueIsInAllowedValues(value);
    }

    private ensureValueIsInAllowedValues(value: E) {
        if (!this.allowedValues.includes(value)) {
            this.throwErrorForNotAllowedValue(value);
        }
    }

    protected abstract throwErrorForNotAllowedValue(value: E): void;
}
