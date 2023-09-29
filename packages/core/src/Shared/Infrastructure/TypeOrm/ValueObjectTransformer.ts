import { ValueObject } from '../../Domain/ValueObject/ValueObject';
import { Constructable } from '../../Domain/Type/Constructable';

export const ValueObjectTransformer = <T>(ValueObject: Constructable<ValueObject<any>>) => {
    return {
        to: (value: ValueObject<T>): T => value.value,
        from: (value: T): ValueObject<T> => new ValueObject(value),
    };
};
