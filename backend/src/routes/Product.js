import express from 'express'
import { create, getAll, getOne, remove, update } from "../controllers/Product"
import { checkPermission } from "../middleware/checkpermission"
const router = express.Router()

router.post("/products", create)
router.get("/products", getAll)
router.get("/products/:id", getOne)
router.delete("/products/:id", remove)
router.put("/products/:id", update)
router.patch("/products/:id", update)
export default router