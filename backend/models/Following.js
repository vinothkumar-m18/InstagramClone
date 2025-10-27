import mongoose from "mongoose";

const followingSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});
export const Following = mongoose.model('Following', followingSchema);