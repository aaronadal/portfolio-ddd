import { AggregateRoot } from '../../Domain/AggregateRoot';

class Repository<T extends AggregateRoot<any>> {}
