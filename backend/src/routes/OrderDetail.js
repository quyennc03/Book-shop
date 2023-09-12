import express from "express"
import { create, getById } from "../controllers/OrderDetail"
// import { checkPermission } from "../middleware/checkpermission"
const router = express.Router()

router.post("/orderDetail", create)
router.get("/orderDetail/:id", getById)
export default router