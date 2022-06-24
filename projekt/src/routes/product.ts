import { Router } from "express";
import * as productController from "../controllers/product";
const router = Router();

router.post("/", productController.postAddProduct);
router.post("/", productController.postDeleteProduct);
router.get("/", productController.getProducts);
router.get("/", productController.getProduct);

export default router;
