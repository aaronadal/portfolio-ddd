import { Skill } from '../../../../src/Cv/Domain/Skill/Skill';
import { UuidMother } from '../../../Shared/domain/UuidMother';
import { SkillNameMother } from './SkillNameMother';
import { SkillLevelMother } from './SkillLevelMother';

export class SkillMother {
    static random(): Skill {
        return Skill.load(UuidMother.random(), SkillNameMother.random(), SkillLevelMother.random());
    }
}
