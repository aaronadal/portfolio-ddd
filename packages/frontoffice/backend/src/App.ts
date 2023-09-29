import { Server } from './Server';

export class App {
    private server: Server | null = null;

    get http() {
        return this.server?.http;
    }

    async start() {
        const port = parseInt(process.env.APP_PORT || '3033');
        this.server = new Server(port);

        return this.server.listen();
    }

    async stop() {
        if(this.server === null) {
            return Promise.resolve();
        }

        return this.server.close();
    }
}
