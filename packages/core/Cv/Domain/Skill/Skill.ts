import {AggregateRoot} from "../../../Shared/Domain/AggregateRoot";
import {SkillCreatedDomainEvent, SkillCreatedDomainEventParams} from "./SkillCreatedDomainEvent";
import {Uuid} from "../../../Shared/Domain/ValueObject/Uuid";
import {SkillLevel} from "./SkillLevel";
import {SkillName} from "./SkillName";

export class Skill extends AggregateRoot<SkillCreatedDomainEventParams> {
    static create(
        id: Uuid,
        name: SkillName,
        level: SkillLevel,
    ): Skill {
        const skill = this.load(id, name, level)

        skill.record(SkillCreatedDomainEvent.create({
            aggregateId: skill.id.value,
        }))

        return skill;
    }

    static load(
        id: Uuid,
        name: SkillName,
        level: SkillLevel,
    ): Skill {
        return new this(id, name, level)
    }

    private constructor(
        id: Uuid,
        readonly name: SkillName,
        readonly level: SkillLevel,
    ) {
        super(id);
    }
}
