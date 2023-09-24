import express from 'express'
import { addFeedBack, deleteFeedBack, getAll, updateFeedBack } from '../controllers/FeedBack'
const router = express.Router()

router.get("/feedBack", getAll)
router.delete("/feedBack/:id", deleteFeedBack)
router.patch("/feedBack/:id", updateFeedBack)
router.post("/feedBack", addFeedBack)
export default router