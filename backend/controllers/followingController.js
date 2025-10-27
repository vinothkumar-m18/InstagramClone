import {Following} from '../models/Following.js';

export const getFollowings = async (req, res)=>{
    try{
        const followings = await Following.find();
        if(!followings) return res.status(404).json({message:'following data not found'});
        res.json(followings);
    }catch(error){
        res.status(500).json({message:'mongodb server error'});
    }
};

export const updateFollowing = async (req, res)=>{
    try{
        const {id, userId} = req.body;
        const toUpdate = {id, userId};
        const newFollowing = new Following(toUpdate);
        await newFollowing.save();
    }catch(error){
        res.status(400).json({message:'invalid data'});
    }
};

export const deleteFollowing = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const result = await Following.findOneAndDelete({id});
        if(!result) return res.status(404).json({message:'following not found'});
        res.json({message:'unfollowed'});
    }catch(error){
        res.status(400).json({message:'invalid request'});
    }
};

