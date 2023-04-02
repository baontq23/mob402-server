import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { auth } from '../../modules/auth';
import { userController, userValidation } from '../../modules/user';
import { storage } from '../../modules/utils';

const router: Router = express.Router();

router
  .route('/')
  .post(
    auth('manageUsers'),
    storage.avatarUpload.single('avatar'),
    validate(userValidation.createUser),
    userController.createUser
  )
  .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

router
  .route('/:userId')
  .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
  .patch(auth(), storage.avatarUpload.single('avatar'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

export default router;
