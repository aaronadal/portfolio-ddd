import { Server } from './Server';
import { container } from './DependencyInjection';

try {
    new Server(3000).listen();
} catch (e) {
    console.log(e);
    process.exit(1);
}

process.on('uncaughtException', (err) => {
    console.log('uncaughtException', err);
    process.exit(1);
});

container;
