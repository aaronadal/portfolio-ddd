import { Uuid } from './Shared/Domain/Uuid';
import { Skill } from './Cv/Domain/Skill/Skill';
import { SkillName } from './Cv/Domain/Skill/SkillName';
import { SkillLevel } from './Cv/Domain/Skill/SkillLevel';

const skill = Skill.create(Uuid.generate(), new SkillName('Skill de prueba'), new SkillLevel(108));

console.log(skill.id.value);
console.log(skill.level.value);
console.log(skill.pullEvents());
