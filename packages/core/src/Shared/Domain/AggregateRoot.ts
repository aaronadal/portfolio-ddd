import { DomainEvent, DomainEventParams } from './DomainEvent';
import { Uuid } from './Uuid';

export abstract class AggregateRoot<P extends DomainEventParams, E extends DomainEvent<P> = DomainEvent<P>> {
    private events: E[];

    constructor(readonly id: Uuid) {
        this.events = [];
    }

    pullEvents(): E[] {
        const events = [...this.events];
        this.events = [];

        return events;
    }

    record(event: E): void {
        this.events.push(event);
    }
}
