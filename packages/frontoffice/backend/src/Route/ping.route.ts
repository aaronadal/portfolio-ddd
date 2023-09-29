import { Router } from 'express';
import { PingController } from '../Controller/PingController';

export default (router: Router) => {
    const controller = new PingController();
    router.get('/ping', (req, res) => controller.run(req, res));
};
