import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import requiredFields from '../middleware/requiredFields';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', requiredFields, loginController.userLogin);

export default loginRouter;