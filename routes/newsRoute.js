import express from 'express'
const newsRouter = express.Router()

import { createNews, deleteNews, getNews, updateNews } from '../controllers/newsController.js'

newsRouter.post("/",createNews)
newsRouter.get("/:id",getNews)
newsRouter.put("/:id",updateNews)
newsRouter.delete("/:id",deleteNews)



export default newsRouter