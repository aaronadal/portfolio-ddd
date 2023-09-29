import { SkillRepository } from '../../Domain/Skill/SkillRepository';
import { Criteria } from '../../../Shared/Domain/Criteria/Criteria';
import { Skill } from '../../Domain/Skill/Skill';

export class TypeOrmSkillRepository implements SkillRepository {
    matching(criteria: Criteria): Promise<Skill[]> {
        return Promise.resolve([]);
    }

    save(skill: Skill): Promise<void> {
        return Promise.resolve(undefined);
    }
}
