import {readDatabase, writeDatabase} from '../utils/dbHelper.js';

export const getFollowings = (req, res)=>{
    const db = readDatabase();
    res.json(db.following);
};
export const updateFollowing = (req, res)=>{
    const db = readDatabase();
    const {id, userId} = req.body;
    const newFollowing = {id, userId};
    db.following.push(newFollowing);
    writeDatabase(db);
    res.status(201).json({msg:"followed successfully"});
};
export const deleteFollowing = (req, res)=>{
    const db = readDatabase();
    const id = parseInt(req.params.id);
    db.following = db.following.filter(following => following.id !== id);
    writeDatabase(db);
    res.json({msg:"unfollowed"});
};

