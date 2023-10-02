import { Config } from './Config';
import { DataSource } from 'typeorm';
import {ConfigFactory} from "./ConfigFactory";

export class DataSourceFactory {
    static async fromConfig() {
        const config = ConfigFactory.create();

        return this.create(config);
    }

    static async create(config: Config) {
        const dataSource = new DataSource({
            type: config.type,
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password,
            database: config.database,
            entities: [__dirname + '/../../../../../**/*.schema.ts'],
            synchronize: true,
            logging: false,
        });

        return dataSource.initialize();
    }
}
