import {readDatabase} from '../utils/dbHelper.js';
export const getSuggestions = (req, res)=>{
    const db = readDatabase();
    res.json(db.suggestions);
};