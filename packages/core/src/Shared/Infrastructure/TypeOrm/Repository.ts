import {DataSource} from "typeorm";

export abstract class Repository {
    constructor(
        protected readonly dataSource: Promise<DataSource>,
    ) {
    }
}
