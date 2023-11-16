import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({ errors: err.serializeErrors() })
    } else {
        res.status(500).json({
            errors: [{
                message: "unknown error "
            }]
        })
    }



}