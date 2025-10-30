import Post from '../models/Post.js';
import cloudinary from '../config/cloudinary.js';

export const createPost = async (req, res)=>{
    try{
        const {caption} = req.body;
        if(!req.file) return res.status(400).json({message:'image or video required'});
        
    }catch(error){
        
    }
}
export const getPosts = async (req, res)=>{
    try{
        const posts = await Post.find()
            .populate('user', 'userId userName profilePic')
            .sort({createdAt:-1});
        res.json(posts);
    }catch(error){
        res.status(500).json({message:'mongodb server error'});
    }
}

