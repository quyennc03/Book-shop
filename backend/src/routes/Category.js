import express from 'express'
import { create, getAll, getOne, remove, update } from '../controllers/Category'
const router = express.Router()

router.post("/categories", create)
router.get("/categories/:id", getOne)
router.delete("/categories/:id", remove)
router.put("/categories/:id", update)
router.get("/categories", getAll)
export default router