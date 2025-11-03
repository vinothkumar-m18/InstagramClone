import Post from '../models/Post.js';
import cloudinary from '../config/cloudinary.js';
import User from '../models/User.js';
const TEST_USER_ID = "ram_kumar";

export const createPost = async (req, res) => {
    try {
        let user = await User.findOne({ userId: TEST_USER_ID });
        if (!user) {
            user = await User.create({
                userId: TEST_USER_ID,
                userName: "ramkumar",
                email: "ramkumar123@gmail.com",
                password: "ram1234",
                profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
            });
        }

        const { caption } = req.body;
        if (!req.file) return res.status(400).json({ message: 'image or video required' });

        // upload file to cloudinary stream
        const uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({
                resource_type: req.file.mimetype.startsWith("video") ? "video" : "image",
                folder: "instagram-clone"
            },
                (error, result) => (error ? reject(error) : resolve(result))
            );
            stream.end(req.file.buffer);
        });
        const post = await Post.create({
            user: user._id,
            media: uploadResult.secure_url,
            caption: caption || ' ',
            isReel: req.file.mimetype.startsWith("video"),
        });
        res.status(201).json(post);
    } catch (error) {
        console.log('detailed backend error : ', error);
        res.status(500).json({ message: error.message })
    }
}
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('user', 'userId userName profilePic')
            .populate('comments.userId', 'userId userName')
            
            .sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'mongodb server error' });
    }
}
export const likePost = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({message:'post not found'});
        post.likes += 1;
        post.save();
        res.json({likes:post.likes});
    }catch(error){
        console.log(error);
        res.status(500).json({error:'inside likepost ', error});
    }
};
