import express from 'express'
const app = express.Router()

app.use('/users', UserRoute)

