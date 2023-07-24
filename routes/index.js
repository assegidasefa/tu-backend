import express from 'express'
import universityRouter from './UniversityRoute.js'
import newsRouter from './newsRoute.js'
const app = express.Router()

app.use('/university', universityRouter)
app.use('/news', newsRouter)



export default app

