import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { App } from '../../src/App';

let app: App;

BeforeAll(async () => {
    app = new App();
    await app.start();
});

AfterAll(async () => {
    await app.stop();
});

export { app };
