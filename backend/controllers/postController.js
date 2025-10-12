import {readDatabase} from '../utils/dbHelper.js'
export const getPosts = (req, res)=>{
    const db = readDatabase();
    res.json(db.posts);
}
