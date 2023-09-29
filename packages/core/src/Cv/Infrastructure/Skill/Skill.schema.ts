import { EntitySchema } from 'typeorm';
import { Skill } from '../../Domain/Skill/Skill';
import { Uuid } from '../../../Shared/Domain/Uuid';
import { SkillName } from '../../Domain/Skill/SkillName';
import { SkillLevel } from '../../Domain/Skill/SkillLevel';
import { ValueObjectTransformer } from '../../../Shared/Infrastructure/TypeOrm/ValueObjectTransformer';

export const SkillSchema = new EntitySchema<Skill>({
    name: 'Skill',
    tableName: 'skills',
    target: Skill,
    columns: {
        id: {
            type: String,
            primary: true,
            transformer: ValueObjectTransformer(Uuid),
        },
        name: {
            type: String,
            transformer: ValueObjectTransformer(SkillName),
        },
        level: {
            type: Number,
            transformer: ValueObjectTransformer(SkillLevel),
        },
    },
});
