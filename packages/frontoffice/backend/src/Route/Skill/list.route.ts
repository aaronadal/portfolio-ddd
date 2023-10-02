import {Router} from 'express';
import {container} from "../../DependencyInjection";
import {Controller} from "../../Controller/Controller";

export default (router: Router) => {
    router.get('/skills', (request, response) => {
        const controller = container.get<Controller>('app.controller.skill.list');

        controller.run(request, response)
    });
};
