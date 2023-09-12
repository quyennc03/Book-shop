import express from 'express'
import { create, getAll, getOne, remove, update } from "../controllers/Product"
import { checkPermission } from "../middleware/checkpermission"
const router = express.Router()

router.post("/products", checkPermission, create)
router.get("/products", getAll)
router.get("/products/:id", getOne)
router.delete("/products/:id", checkPermission, remove)
router.put("/products/:id", checkPermission, update)
router.patch("/products/:id", checkPermission, update)
export default router