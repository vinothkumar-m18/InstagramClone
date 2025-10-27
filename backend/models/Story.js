import mongoose from "mongoose";

const storySchema = mongoose.Schema({
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
    },
    storyImage:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
export const Story = mongoose.model('Story', storySchema);
