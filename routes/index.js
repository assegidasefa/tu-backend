import express from 'express'
import universityRouter from './UniversityRoute.js'
import newsRouter from './newsRoute.js'
import userRouter from './userRoute.js'
import auth from '../middleware/authentication.js'
import role from '../helpers/role.js'
import authorize from '../helpers/authorize.js'



const app = express.Router()


const adminRole = [role.ADMIN]
const allRole = [role.ADMIN, role.USER]
const userRole = [role.USER]

app.use("/user",userRouter)
app.use('/university',auth,authorize(allRole), universityRouter)
app.use('/news',auth,authorize(allRole), newsRouter)



export default app

