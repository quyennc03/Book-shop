import express from 'express'
import { getAll, getOneUser, signin, signup } from '../controllers/Auth'
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/users", getAll)
router.get("/users/:id", getOneUser)

export default router