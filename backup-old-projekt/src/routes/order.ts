import { Router } from "express";
import * as orderController from "../controllers/order";
const router = Router();

router.get("/:orderId", orderController.getOrder);
router.get("/", orderController.getOrders);

export default router;
