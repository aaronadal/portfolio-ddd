import { Uuid } from '../../../src/Shared/Domain/Uuid';

export class UuidMother {
    static random(): Uuid {
        return Uuid.generate();
    }
}
