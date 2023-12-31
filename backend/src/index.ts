import express,{ Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import cookieParser from 'cookie-parser'
import { log } from 'console';
import path from 'path';
import {v2 as cloudinary} from 'cloudinary'
import myHotelRoutes from './routes/my-hotel'
import HotelRoutes from './routes/hotels'
import BookingRoutes from './routes/my-bookings'
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
        // .then( () =>
        //      console.log("Connected to database: ",
        //      process.env.MONGODB_CONNECTION_STRING
             
        //      ))

const app=express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))
let PORT=5000

app.use(express.static(path.join(__dirname,"../../frontend/dist")))
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/my-hotels',myHotelRoutes)
app.use('/api/hotels',HotelRoutes)
app.use('/api/my-bookings',BookingRoutes)

app.get("*",(req: Request , res:Response)=>{
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
})


app.listen(PORT,()=>{
    console.log(`server is Running on localhost:${PORT} `);
    
})