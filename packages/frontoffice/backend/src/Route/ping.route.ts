import {Router} from 'express';
import {container} from "../DependencyInjection";
import {Controller} from "../Controller/Controller";

export default (router: Router) => {
    router.get('/ping', (request, response) => {
        const controller = container.get<Controller>('app.controller.ping');

        controller.run(request, response)
    });
};
