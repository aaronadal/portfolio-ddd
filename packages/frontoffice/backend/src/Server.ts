import express from 'express';

export class Server {
    private readonly express: express.Express;

    get env(): string {
        return this.express?.get('env') || 'dev';
    }

    constructor(private readonly port: number) {
        this.express = express();
    }

    async listen(): Promise<void> {
        return new Promise((resolve) => {
            this.express.listen(this.port, () => {
                this.showServerUpFeedback();
                resolve();
            });
        });
    }

    private showServerUpFeedback() {
        console.log(`  [FRONTOFFICE] Backend server running on port ${this.port} in ${this.env} mode.`);
        console.log('  Press CTRL-C to stop\n');
    }
}
