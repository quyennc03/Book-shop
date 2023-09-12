import express from "express"
import { create } from "../controllers/Cart"
// import { checkPermission } from "../middleware/checkpermission"
const router = express.Router()

router.post("/carts", create)
export default router