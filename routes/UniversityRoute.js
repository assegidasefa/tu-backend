import express from 'express'
const universityRouter = express.Router()

import { createUniversity } from '../controllers/universityController.js'

universityRouter.post("/university",createUniversity)

export default universityRouter