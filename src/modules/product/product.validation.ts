import Joi from 'joi';
import { objectId } from '../validate/custom.validation';

export const createProduct = {
  body: Joi.object().keys({
    name: Joi.string(),
    image: Joi.string(),
    price: Joi.number(),
    color: Joi.string(),
    type: Joi.string(),
  }),
};

export const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    populate: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getProductsByUser = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

export const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      image: Joi.string(),
      price: Joi.number(),
      color: Joi.string(),
      type: Joi.string(),
    })
    .min(1),
};

export const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};
