import { faker } from '@faker-js/faker';

export class WordMother {
    static random(maxLength: number = 20, minLength: number = 5) {
        return faker.lorem.word({
            length: {
                min: minLength,
                max: maxLength,
            },
        });
    }
}
