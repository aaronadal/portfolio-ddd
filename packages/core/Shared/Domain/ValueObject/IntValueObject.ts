import {NumberValueObject} from "./NumberValueObject";
import {InvalidValueError} from "./InvalidValueError";

export class IntValueObject extends NumberValueObject {
    constructor(value: number) {
        super(value);
        this.ensureValueIsInt(value);
    }

    private ensureValueIsInt(value: number) {
        if(!Number.isInteger(value)) {
            throw new InvalidValueError('Value must be integer!');
        }
    }
}
