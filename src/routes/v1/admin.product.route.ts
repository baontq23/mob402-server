import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { auth } from '../../modules/auth';
import { productController, productValidation } from '../../modules/product';

const router: Router = express.Router();

router
  .route('/')
  .post(auth('AdminManageProducts'), validate(productValidation.createProduct), productController.createProduct)
  .get(auth('AdminGetProducts'), validate(productValidation.getProducts), productController.getProducts);

router
  .route('/:productId')
  .get(auth('AdminGetProducts'), validate(productValidation.getProduct), productController.getProduct)
  .patch(auth('AdminManageProducts'), validate(productValidation.updateProduct), productController.updateProduct)
  .delete(auth('AdminManageProducts'), validate(productValidation.deleteProduct), productController.deleteProduct);

export default router;
