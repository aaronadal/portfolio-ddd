import { Request, Response } from 'express';

export interface Controller {
    run(request: Request, response: Response): Promise<void>;
}
