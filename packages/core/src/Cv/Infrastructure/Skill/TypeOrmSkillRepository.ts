import { SkillRepository } from '../../Domain/Skill/SkillRepository';
import { Criteria } from '../../../Shared/Domain/Criteria/Criteria';
import { Skill } from '../../Domain/Skill/Skill';
import {Repository} from "../../../Shared/Infrastructure/TypeOrm/Repository";

export class TypeOrmSkillRepository extends Repository<Skill> implements SkillRepository {
    matching(criteria: Criteria): Promise<Skill[]> {
        const repo = this.getRepo(Skill);

        return repo.find();
    }

    save(skill: Skill): Promise<void> {
        const repo = this.getRepo(Skill);

        return repo.save([skill])
            .then(() => undefined);
    }
}
