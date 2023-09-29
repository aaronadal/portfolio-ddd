import { StringValueObject } from './StringValueObject';
import { EmptyStringError } from './EmptyStringError';

export class NotEmptyStringValueObject extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureValueIsNotEmpty(value);
    }

    private ensureValueIsNotEmpty(value: string) {
        if (value === '') {
            throw new EmptyStringError(`Value must not be an empty string`);
        }
    }
}
