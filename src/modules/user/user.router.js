import { Router } from 'express'
import multer from 'multer'
import { auth } from '../../middlewear/auth.js'
import { fileValidation, HME, myMulter } from '../../services/multer.js'
import * as PC from './controller/profile.js'
import { endPoint } from './user.endPoint.js'
const router = Router()




router.get('/profile', auth(endPoint.profile), PC.getProfile)
router.post('/profile/pic',
    auth(endPoint.profile),
    myMulter(fileValidation.image).single('image'),
    HME('/user/profile'), PC.profilePic)



export default router