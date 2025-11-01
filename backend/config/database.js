import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectDb = async ()=>{
    console.log('connecting to mongodb at : ', process.env.MONGODB_URI);
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS:30000,
            socketTimeoutMS:45000
        });
        console.log('mongodb connected');
    }catch(error){
        console.log('mongodb connection error : ', error);
        process.exit(1);
    }
}
export default connectDb;