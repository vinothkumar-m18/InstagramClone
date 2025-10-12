import { getStories, getStory} from "../controllers/storyController.js";
import express from 'express';
const router = express.Router();

router.get('/', getStories);
router.get('/:id', getStory);
export default router;
