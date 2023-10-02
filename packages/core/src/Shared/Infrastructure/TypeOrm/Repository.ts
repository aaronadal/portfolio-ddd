import { AggregateRoot } from '../../Domain/AggregateRoot';
import {DataSource, EntityTarget} from "typeorm";

export abstract class Repository<T extends AggregateRoot<any>> {
    constructor(
        private readonly dataSource: DataSource,
    ) {
    }

    protected getRepo(target: EntityTarget<T>) {
        return this.dataSource.getRepository(target);
    }
}
