import {Router} from 'express'
import * as authCtrl from '../controllers/auth.controller'
import {authJwt, verifySignUp} from '../middlewares'

const router = Router()

router.post('/signup', [
     verifySignUp.checkDuplicateUsernameOrEmail,
     verifySignUp.checkRolesExisted,
], authCtrl.signUp)
router.post('/signin', authCtrl.signIn)


export default router;