import mongoose from "mongoose";
const commentSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    userName : {
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})
const postSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    comments: [commentSchema],
    timestamp: {
        type: Date,
        default: Date.now()
    }
},
    { timestamps: true }
)
export const Post = mongoose.model('Post', postSchema);