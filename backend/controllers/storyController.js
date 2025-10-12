import { readDatabase } from "../utils/dbHelper.js";
export const getStories = (req, res)=>{
    const db = readDatabase();
    res.json(db.stories);
};
export const getStory = (req, res)=>{   
    const db = readDatabase();
    const storyId = parseInt(req.params.id);
    const story = db.stories.find(story => story.id === storyId);
    res.json(story);
};
