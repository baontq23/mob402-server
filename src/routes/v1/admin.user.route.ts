import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { auth } from '../../modules/auth';
import { userController, userValidation } from '../../modules/user';
import { storage } from '../../modules/utils';

const router: Router = express.Router();

router
  .route('/:userId')
  .patch(
    auth('manageUsers'),
    storage.avatarUpload.single('avatar'),
    validate(userValidation.adminUpdateUser),
    userController.updateUser
  );

export default router;
