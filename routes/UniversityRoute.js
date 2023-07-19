import express from 'express'
const universityRouter = express.Router()

import { createUniversity } from '../controllers/universityController.js'

authRouter.post("/university",createUniversity)

export default universityRouter