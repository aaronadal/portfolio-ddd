import { IntMother } from '../../../Shared/domain/IntMother';
import { SkillLevel } from '../../../../src/Cv/Domain/Skill/SkillLevel';

export class SkillLevelMother {
    static random() {
        return new SkillLevel(IntMother.random(100, 25));
    }
}
