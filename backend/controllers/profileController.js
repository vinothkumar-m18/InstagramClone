import {Profile} from '../models/Profile.js';

export const getProfile = async (req, res)=>{
    try{
        const profile = await Profile.findOne();
        if(!profile) return res.status(404).json({message:'profile not found'});
        res.json(profile);
    }catch(error){
        res.status(500).json({message:'mongodb server error'});
    }
};
export const updateProfile = async (req, res)=>{
    try{
        const updatedProfile = req.body;
        const profile = await Profile.findOneAndUpdate({
            id:updatedProfile.id            
        },
        updatedProfile,
        {
            new:true,
            upsert:true
        }
        )
        res.status(201).json(profile);
    }catch(error){
        res.status(500).json({message:'invalid data'});
    }
};

