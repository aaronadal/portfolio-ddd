import { Controller } from './Controller';
import { Request, Response } from 'express';

export class PingController implements Controller {
    async run(_: Request, response: Response): Promise<void> {
        response.status(200).send();
    }
}
