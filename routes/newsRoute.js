import express from 'express'
const newsRouter = express.Router()

import { createNews, getNews, updateNews } from '../controllers/newsController.js'

newsRouter.post("/",createNews)
newsRouter.get("/:id",getNews)
newsRouter.put("/:id",updateNews)



export default newsRouter