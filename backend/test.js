import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
console.log('URI:', process.env.MONGODB_URI);
mongoose.connect('mongodb://localhost:27017/instagram_clone').
then(()=> console.log('test connected')).
catch(error => console.log('test failed ', error.message))
