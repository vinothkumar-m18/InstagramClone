import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
export const Profile = mongoose.model('Profile', profileSchema);