import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    userId : {
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"https://randomuser.me/api/portraits/lego/1.jpg"
    },
    bio:{
        type:String,
        default:" "
    },
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
},
{
    timestamps:true
});
export const User = mongoose.model('User', userSchema);