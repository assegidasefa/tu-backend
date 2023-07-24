import express from 'express'
const userRouter = express.Router()

import { changePassword, createUser, deleteUserById, getAllUser, getUserById, updateUserById } from '../controllers/userController.js'
import { login } from '../controllers/authController.js'

userRouter.post("/",createUser)
userRouter.post("/login",login)
userRouter.post("/change-password",changePassword)
userRouter.get("/:id",getUserById)
userRouter.get("/",getAllUser)
userRouter.put("/:id",updateUserById)
userRouter.delete("/:id",deleteUserById)







export default userRouter