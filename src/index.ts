import dotenv from 'dotenv'
dotenv.config()
import './initDB'
import 'reflect-metadata'
import express from 'express'
import router from './routes'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(router)

const port = process.env.PORT || 3000
app.listen(port, () => console.info(`Liste'N Like server listening on port ${port}`))
