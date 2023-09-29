import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

export const container = new ContainerBuilder();

const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV || 'development';

loader.load(`${__dirname}/services_${env}.yaml`);
