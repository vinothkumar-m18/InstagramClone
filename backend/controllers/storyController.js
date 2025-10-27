import {Story} from '../models/Story.js';

export const getStories = async (req, res)=>{
    try{
        const stories = await Story.find();
        if(!stories.length) return res.status(404).json({message:'stories not found'});
        res.json(stories);
    }catch(error){
        res.status(500).json({message:'mongodb server error'});
    }
};
export const getStory = async (req, res)=>{   
    try{
        const storyId = parseInt(req.params.id);
        const story = await Story.findOne({id:storyId});
        if(!story) return res.status(404).json({message:'story not found'});
        res.json(story);        
    }catch(error){
        res.status(500).json({message:'mongodb server error'});
    }
};
