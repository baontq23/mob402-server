import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { auth } from '../../modules/auth';
import { productController, productValidation } from '../../modules/product';
import storage from '../../modules/utils/storage';

const router: Router = express.Router();

router
  .route('/')
  .post(
    auth('manageProducts'),
    storage.productImageUpload.single('image'),
    validate(productValidation.createProduct),
    productController.createProduct
  )
  .get(auth('getProducts'), validate(productValidation.getProductsByUser), productController.getProductsByUser);

router
  .route('/:productId')
  .get(auth('getProducts'), validate(productValidation.getProduct), productController.getProduct)
  .patch(
    auth('manageProducts'),
    storage.productImageUpload.single('image'),
    validate(productValidation.updateProduct),
    productController.updateProduct
  )
  .delete(auth('manageProducts'), validate(productValidation.deleteProduct), productController.deleteProduct);

export default router;
