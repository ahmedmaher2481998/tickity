import { Request, Response, NextFunction } from 'express'
export function currentUserController(req: Request, res: Response, next: NextFunction) {


    console.log(' a Current user  ');

    res.send("Hi there from currentUser ")

}