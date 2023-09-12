import express from "express"
import { create, getAll, getById, getByUser, update } from "../controllers/Order"
// import { checkPermission } from "../middleware/checkpermission"
const router = express.Router()

router.post("/orders", create)
router.get("/orders", getAll)
router.get("/user_orders/:id", getByUser)
router.get("/orders/:id", getById)
router.patch("/orders/:id", update)
export default router