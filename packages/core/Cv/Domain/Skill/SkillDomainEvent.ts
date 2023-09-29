import {DomainEvent, DomainEventParams} from "../../../Shared/Domain/DomainEvent";

export interface SkillDomainEventParams extends DomainEventParams {

}

export abstract class SkillDomainEvent<T extends SkillDomainEventParams> extends DomainEvent<T> {
}
