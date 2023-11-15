import { Router } from 'express'
import { currentUserController, logoutController, signinController, signupController } from '../controllers'
import { signinValidation } from '../validations/signin.validator'
const prefix = '/api/users'
const signinRoute = { url: `${prefix}/signin`, controller: signinController, validation: signinValidation }
const authRoutes = {
    currentUserRoute: { url: `${prefix}/currentUser` },
    signupRoute: `${prefix}/signup`,
    logoutRoute: `${prefix}/logout`

}
const router = Router()


router.get(authRoutes.currentUserRoute.url, currentUserController)
router.post(signinRoute.url, signinRoute.validation, signinRoute.controller)
router.post(authRoutes.signupRoute, signupController)
router.post(authRoutes.logoutRoute, logoutController)





export { router as authRouter }