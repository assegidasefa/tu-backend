import express from 'express'
import universityRouter from './UniversityRoute'
const app = express.Router()

app.use('/university', universityRouter)

