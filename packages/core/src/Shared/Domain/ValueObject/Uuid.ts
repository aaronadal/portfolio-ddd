import { uuidv7obj } from 'uuidv7';
import { encode, valid } from 'uuid-base58';
import { InvalidValueError } from './InvalidValueError';
import { StringValueObject } from './StringValueObject';

export class Uuid extends StringValueObject {
    static generate(): Uuid {
        const uuid = uuidv7obj().toHex();
        const base58 = encode(uuid);

        return new Uuid(base58);
    }

    constructor(value: string) {
        super(value);
        this.ensureIsValidUuid(value);
    }

    private ensureIsValidUuid(value: string) {
        if (!valid(value)) {
            throw new InvalidValueError('Must be a base-58 UUID!');
        }
    }
}
