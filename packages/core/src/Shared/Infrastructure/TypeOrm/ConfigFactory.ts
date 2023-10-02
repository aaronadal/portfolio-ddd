import config from "../Config";
import {Config} from "./Config";

export class ConfigFactory {
    static create(): Config {
        return config.get('orm');
    }
}
