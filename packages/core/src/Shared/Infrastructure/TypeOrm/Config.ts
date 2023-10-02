export interface Config {
    type: 'mysql' | 'postgres';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}
