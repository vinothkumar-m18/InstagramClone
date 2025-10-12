import express from 'express';
import cors from 'cors';
import {logger} from './middlewares/logger.js';
import postRoutes from './routes/postRoutes.js';
import storyRoutes from './routes/storyRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import suggestionRoutes from './routes/suggestionRoutes.js';
import followingRoutes from './routes/followingRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(logger);

// routes 
app.use('/posts', postRoutes);
app.use('/stories', storyRoutes);
app.use('/profile', profileRoutes);
app.use('/suggestions', suggestionRoutes);
app.use('/following', followingRoutes);

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`);
});
