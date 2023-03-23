import { Model, Document, Types } from 'mongoose';
import { QueryResult } from '../paginate/paginate';

export interface IProduct {
  name: string;
  price: number;
  image: string;
  color: string;
  type: string;
  user: Types.ObjectId;
}

export interface IProductDoc extends IProduct, Document {}
export type NewCreatedProduct = Partial<IProduct>;
export type UpdateProductBody = Omit<IProduct, 'user'>;
export interface IProductModel extends Model<IProductDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}
