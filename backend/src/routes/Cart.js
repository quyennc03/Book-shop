import express from "express"
import { create, getAll, getById, getByUser, remove } from "../controllers/Cart"
// import { checkPermission } from "../middleware/checkpermission"
const router = express.Router()

router.post("/carts", create)
router.get("/carts", getAll)
router.get("/carts/:id", getById)
router.get("/getByUser/:id", getByUser)
router.delete("/carts/:id", remove)
export default router