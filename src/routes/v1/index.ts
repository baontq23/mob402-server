import express, { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import productRoute from './product.route';
import adminProductRoute from './admin.product.route';

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
];

defaultIRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
