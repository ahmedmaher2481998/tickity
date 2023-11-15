import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
export function signinController(req: Request, res: Response, next: NextFunction) {
    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
        throw new Error('invalid email or password ')
    } else {
        next(new Error('database error connecting'))
    }


    res.end('good request')

}