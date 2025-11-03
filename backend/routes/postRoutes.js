import express from 'express';
import {createPost, getPosts, likePost} from '../controllers/postController.js';
import upload from '../middlewares/postUpload.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/', upload.single('media'), createPost);
router.post('/:id/like', likePost);
export default router;