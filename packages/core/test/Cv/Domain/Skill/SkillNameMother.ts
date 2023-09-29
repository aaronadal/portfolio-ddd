import { WordMother } from '../../../Shared/domain/WordMother';
import { SkillName } from '../../../../src/Cv/Domain/Skill/SkillName';

export class SkillNameMother {
    static random() {
        return new SkillName(WordMother.random());
    }
}
