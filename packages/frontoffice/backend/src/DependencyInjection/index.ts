import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import * as path from "path";

const packagesDir = path.join(__dirname, '..', '..', '..', '..');
export const container = new ContainerBuilder(false, packagesDir);

const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV || 'development';

export const loadPromise = loader.load(`${__dirname}/services_${env}.yaml`);
