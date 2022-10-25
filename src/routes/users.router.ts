import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', usersController.create);

// usersRouter.get('/', usersController.read);

export default usersRouter;