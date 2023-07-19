import express from 'express'
const universityRouter = express.Router()

import { createUniversity, getUniversity, updateUniversity } from '../controllers/universityController.js'

universityRouter.post("/",createUniversity)
universityRouter.get("/:id",getUniversity)
universityRouter.put("/:id",updateUniversity)



export default universityRouter