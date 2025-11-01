import mongoose from "mongoose";
const commentSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    userName : {
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },    
},{
    timestamps:true
})
const postSchema = mongoose.Schema({        
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },    
    media: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    likes: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
    ,
    comments: [commentSchema],    
    isReel:{
        type:Boolean,
        default:false
    }
},
    { timestamps: true }
)
const Post = mongoose.model('Post', postSchema);
export default Post;