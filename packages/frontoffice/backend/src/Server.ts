import express, { Router } from 'express';
import { Server as HttpServer } from 'http';
import { registerRoutes } from './Route';

export class Server {
    private readonly express: express.Express;
    private _http: HttpServer | null = null;

    get env(): string {
        return this.express?.get('env') || 'dev';
    }

    get http() {
        return this?._http || null;
    }

    constructor(private readonly port: number) {
        this.express = express();

        const router = Router();
        this.express.use(router);

        registerRoutes(router);
    }

    async listen(): Promise<void> {
        return new Promise((resolve) => {
            this._http = this.express.listen(this.port, () => {
                this.showServerUpFeedback();
                resolve();
            });
        });
    }

    async close(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.http !== null) {
                this.http.close((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve();
                });
            }

            return resolve();
        });
    }

    private showServerUpFeedback() {
        console.log(`  [FRONTOFFICE] Backend server running on port ${this.port} in ${this.env} mode.`);
        console.log('  Press CTRL-C to stop\n');
    }
}
