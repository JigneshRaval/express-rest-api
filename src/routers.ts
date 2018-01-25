import { Router, Request, Response } from 'express';

export let carRouter: Router = Router();

// http://localhost:3000/cars/brands
carRouter.get('/brands', (req: Request, res: Response) => {
    res.send('Audi, BMW, Mercedes');
});

// http://localhost:3000/cars/models
carRouter.get('/models', (req: Request, res: Response) => {
    res.send({ 'name': 'Anudi Q5' });
});
