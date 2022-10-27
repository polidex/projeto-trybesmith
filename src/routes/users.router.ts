import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import usernameValidation from '../middleware/usernameValidation';
import classeValidation from '../middleware/classeValidation';
import levelValidation from '../middleware/levelValidation';
import passwordValidation from '../middleware/passwordValidation';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/',
  usernameValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
  usersController.create,
);

export default usersRouter;