import express from 'express'
import { checkPermission } from "../middleware/checkpermission"
import { create, getAll, update } from '../controllers/UserVoucher'
const router = express.Router()

router.post("/userVouchers", checkPermission, create)
router.get("/userVouchers", getAll)
router.patch("/userVouchers/:id", checkPermission, update)
export default router