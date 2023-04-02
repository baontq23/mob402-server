import express, { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import productRoute from './product.route';
import adminProductRoute from './admin.product.route';
import adminUserRoute from './admin.user.route';

const router = express.Router();

interface IRoute {
  path: string;
  route: Router;
}

const defaultIRoute: IRoute[] = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/admin/products',
    route: adminProductRoute,
  },
  {
    path: '/admin/users',
    route: adminUserRoute,
  },
];

defaultIRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
