import {Suggestion} from '../models/Suggestion.js';

export const getSuggestions = async (req, res)=>{
    try{
        const suggestions = await Suggestion.find();
        if(!suggestions) return res.status(404).json({message:'suggestion data not found'});
        res.json(suggestions);
    }catch(error){
        res.status(500).json({message:'mongodb server error'});
    }
};