import { Config } from './Config';
import { DataSource } from 'typeorm';

export class DataSourceFactory {
    async create(config: Config) {
        const dataSource = new DataSource({
            type: 'postgres',
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
