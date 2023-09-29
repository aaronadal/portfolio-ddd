import { faker } from '@faker-js/faker';

export class IntMother {
    static random(max?: number, min: number = 0) {
        return faker.number.int({
            min,
            max,
        });
    }
}
