import express, { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(321).send(`${err.message}`);
    } catch (error) {
        res.status(404).send("Ima Yarin Zona");
    }
}

export default errorMiddleware;