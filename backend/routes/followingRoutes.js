import express from 'express';
import {getFollowings, updateFollowing, deleteFollowing} from '../controllers/followingController.js';
const router = express.Router();

router.get('/', getFollowings);
router.post('/', updateFollowing);
router.delete('/:id', deleteFollowing);
export default router;
