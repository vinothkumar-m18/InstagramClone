import {readDatabase, writeDatabase} from '../utils/dbHelper.js';

export const getProfile = (req, res)=>{
    const db = readDatabase();
    res.json(db.profile);
};
export const updateProfile = (req, res)=>{
    const db = readDatabase();
    const updatedProfile = req.body;
    db.profile = updatedProfile;
    writeDatabase(db);
    res.status(201).json(db.profile);
};

