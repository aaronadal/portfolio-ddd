import { SkillDomainEvent, SkillDomainEventParams } from './SkillDomainEvent';
import { DomainEventCreateParams } from '../../../Shared/Domain/DomainEvent';

export interface SkillCreatedDomainEventParams extends SkillDomainEventParams {}

export class SkillCreatedDomainEvent extends SkillDomainEvent<SkillCreatedDomainEventParams> {
    static readonly NAME = 'cv.skill.created';

    static create(params: DomainEventCreateParams<SkillCreatedDomainEventParams>) {
        return new this(this.NAME, params);
    }

    toPayload(): SkillCreatedDomainEventParams {
        return {
            id: this.id,
            launchedAt: this.launchedAt,
            aggregateId: this.aggregateId,
        };
    }
}
