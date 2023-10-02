import {SkillRepository} from '../../Domain/Skill/SkillRepository';
import {Criteria} from '../../../Shared/Domain/Criteria/Criteria';
import {Skill} from '../../Domain/Skill/Skill';
import {Repository} from "../../../Shared/Infrastructure/TypeOrm/Repository";

export class TypeOrmSkillRepository extends Repository implements SkillRepository {
    private async getRepo() {
        return (await this.dataSource).getRepository(Skill);
    }

    async matching(_: Criteria): Promise<Skill[]> {
        const repo = await this.getRepo();

        return repo.find();
    }

    async save(skill: Skill): Promise<void> {
        const repo = await this.getRepo();

        return repo.save([skill])
            .then(() => undefined);
    }
}
