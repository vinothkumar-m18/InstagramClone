import mongoose from "mongoose";

const suggestionSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    userId:{
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
export const Suggestion = mongoose.model('Suggestion', suggestionSchema);