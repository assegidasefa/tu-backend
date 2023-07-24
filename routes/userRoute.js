import express from 'express'
const userRouter = express.Router()

import { createUser } from '../controllers/userController.js'
import { login } from '../controllers/authController.js'

userRouter.post("/",createUser)
userRouter.post("/login",login)




export default userRouter