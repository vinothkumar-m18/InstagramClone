import express from 'express';
import {createPost, getPosts} from '../controllers/postController.js';
import upload from '../middlewares/postUpload.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/', upload.single('media'), createPost);
export default router;