import express from 'express'
import universityRouter from './UniversityRoute.js'
const app = express.Router()

app.use('/university', universityRouter)


export default app

