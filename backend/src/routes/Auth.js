import express from 'express'
import { getAll, signin, signup } from '../controllers/Auth'
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/users", getAll)

export default router