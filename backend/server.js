import express from 'express';
import cors from 'cors';
import db from './db.json' with {type:'json'};
import fs from 'fs';
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
const getDatabase = (req, res)=>{
    const data = fs.readFileSync('./db.json','utf-8');
    return JSON.parse(data);
}
app.get('/posts', (req, res)=>{
    const db = getDatabase();
    res.json(db.posts);
});
app.get('/stories', (req, res)=>{
    const db = getDatabase();
    res.json(db.stories);
});
app.get('/profile', (req, res)=>{
    const db = getDatabase();
    res.json(db.profile);
});
app.delete('/following/:id', (req, res)=>{
    const db = getDatabase();
    const profileId = parseInt(req.params.id);
    db.following = db.following.filter(profile => profile.id !== profileId);
    fs.writeFileSync('./db.json', JSON.stringify(db, null ,2));
    res.json({msg:"unfollowed"});
});
app.get('/suggestions', (req, res)=>{
    const db = getDatabase();
    res.json(db.suggestions);
});
app.get('/following', (req, res)=>{
    const db = getDatabase();
    res.json(db.following);
});
app.post('/following', (req, res)=>{
    const db = getDatabase();
    const {id, userId} = req.body;
    const newFollow = {id, userId};
    db.following.push(newFollow);
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    res.status(201).json({msg:"followed successfully"});
});
app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`);
})
