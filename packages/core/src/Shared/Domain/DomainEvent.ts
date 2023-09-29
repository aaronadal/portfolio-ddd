import { Uuid } from './Uuid';
import { AtLeast } from './Type/AtLeast';

export interface DomainEventParams {
    id: string;
    aggregateId: string;
    launchedAt: Date;
}

export type DomainEventCreateParams<T extends DomainEventParams> = AtLeast<T, 'aggregateId'>;

export abstract class DomainEvent<T extends DomainEventParams> {
    static readonly NAME: string;

    protected readonly id: string;
    protected readonly aggregateId: string;
    protected readonly launchedAt: Date;

    protected constructor(
        protected readonly name: string,
        params: AtLeast<T, 'aggregateId'>,
    ) {
        const { id, aggregateId, launchedAt } = params;

        this.id = id || Uuid.generate().value;
        this.aggregateId = aggregateId;
        this.launchedAt = launchedAt || new Date();
    }

    abstract toPayload(): T;
}
