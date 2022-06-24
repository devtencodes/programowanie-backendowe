import { Router } from "express";
import * as orderController from "../controllers/order";
const router = Router();

router.post("/", orderController.getOrder);
router.post("/", orderController.getOrders);

export default router;
