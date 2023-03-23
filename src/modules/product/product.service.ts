import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Product from './product.model';
import ApiError from '../errors/ApiError';
import { IOptions, QueryResult } from '../paginate/paginate';
import { IProductDoc, NewCreatedProduct, UpdateProductBody } from './product.interfaces';

export const createProduct = async (productBody: NewCreatedProduct): Promise<IProductDoc> => {
  return Product.create(productBody);
};

export const queryProducts = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {
  const products = await Product.paginate(filter, options);
  return products;
};

export const getProductById = async (id: mongoose.Types.ObjectId): Promise<IProductDoc | null> => Product.findById(id);

export const getProductByEmail = async (email: string): Promise<IProductDoc | null> => Product.findOne({ email });

export const updateProductById = async (
  productId: mongoose.Types.ObjectId,
  updateBody: UpdateProductBody
): Promise<IProductDoc | null> => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

export const deleteProductById = async (productId: mongoose.Types.ObjectId): Promise<IProductDoc | null> => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.deleteOne();
  return product;
};
