import convict from 'convict';

const config = convict({
    env: {
        doc: 'The application environment',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    orm: {
        type: {
            doc: 'The DBMS to be used.',
            format: ['mysql', 'postgres'],
            env: 'APP_ORM_TYPE',
            default: 'postgres' as 'mysql' | 'postgres',
        },
        host: {
            doc: 'The database host.',
            format: String,
            env: 'APP_ORM_HOST',
            default: '',
        },
        port: {
            doc: 'The database port.',
            format: Number,
            env: 'APP_ORM_PORT',
            default: 5432,
        },
        username: {
            doc: 'The database user.',
            format: String,
            env: 'APP_ORM_USER',
            default: '',
        },
        password: {
            doc: 'The database password.',
            format: String,
            env: 'APP_ORM_PASS',
            default: '',
        },
        database: {
            doc: 'The database name.',
            format: String,
            env: 'APP_ORM_DATABASE',
            default: '',
        },
    },
});

config.loadFile([__dirname + '/' + config.get('env') + '.json']);

export default config;
