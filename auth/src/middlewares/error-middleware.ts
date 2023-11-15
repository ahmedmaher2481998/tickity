import { NextFunction, Request, Response } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    console.log('Error:', err);

    res.status(400).json({
        message: "Something went wrong", err: err.message
    })





}