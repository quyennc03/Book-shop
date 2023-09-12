import express from 'express'
import { checkPermission } from "../middleware/checkpermission"
import { create, getAll, update } from '../controllers/Voucher'
const router = express.Router()

router.post("/vouchers", checkPermission, create)
router.get("/vouchers", getAll)
router.patch("/vouchers/:id", checkPermission, update)
export default router