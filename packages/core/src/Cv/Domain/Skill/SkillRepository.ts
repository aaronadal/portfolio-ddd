import { Skill } from './Skill';
import { Criteria } from '../../../Shared/Domain/Criteria/Criteria';

export interface SkillRepository {
    save(skill: Skill): Promise<void>;
    matching(criteria: Criteria): Promise<Skill[]>;
}
