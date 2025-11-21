import express from 'express';
import cors from 'cors';
import {logger} from './middlewares/logger.js';
import postRoutes from './routes/postRoutes.js';
import storyRoutes from './routes/storyRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import suggestionRoutes from './routes/suggestionRoutes.js';
import followingRoutes from './routes/followingRoutes.js';
import connectDb from './config/database.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use((req, res, next)=>{
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
})
app.use(cors());
// app.use(cors({
//     origin:'http://localhost:5173',
//     credentials:true,
//     methods:['GET', 'PUT', 'POST', 'DELETE']
// }));

app.use(express.json());
app.use(logger);

// routes 
app.use('/api/posts', postRoutes);
app.use('/stories', storyRoutes);
app.use('/profile', profileRoutes);
app.use('/suggestions', suggestionRoutes);
app.use('/following', followingRoutes);

const startServer = async ()=>{
    await connectDb();
    app.listen(PORT, ()=>{
        console.log(`server is listening at ${PORT}`);
    });
};
startServer();
