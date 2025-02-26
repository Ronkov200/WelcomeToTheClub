import "./load-env.js"
console.log(process.env.SMTP_HOST)

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import router from '../server/router/index.js'

const port = process.env.PORT || 5000;
const app = express();
console.log('SMTP_HOST:', process.env.SMTP_HOST);
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router)

const start = async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
        app.listen(port, () => console.log(`Server started on PORT = ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()