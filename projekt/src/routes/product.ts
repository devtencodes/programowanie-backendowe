import { Router } from "express";
import * as productController from "../controllers/product";
const router = Router();

router.post("/addProduct", productController.postAddProduct);
router.post("/deleteProduct/:productId", productController.postDeleteProduct);
router.get("/", productController.getProducts);
router.get("/:productId", productController.getProduct);

export default router;
