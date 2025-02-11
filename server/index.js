import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const start = async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
        app.listen(port, () => console.log(`Server started on PORT = ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()