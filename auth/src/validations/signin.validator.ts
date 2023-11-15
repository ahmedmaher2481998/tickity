import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
export const signinValidation = [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({
        max: 25, min: 4
    }).withMessage('password must be between 4 and 25 chars '),
    // (req: Request, res: Response, next: NextFunction) => {
    //     console.log('validating body ');
    //     const result = validationResult(req)
    //     if (!result.isEmpty()) {
    //         res.status(400).json({
    //             error: result.array()
    //         })
    //     } else { next() }
    // }

]
