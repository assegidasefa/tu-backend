import express from 'express'
const userRouter = express.Router()

import { createUser } from '../controllers/userController.js'

userRouter.post("/",createUser)




export default userRouter