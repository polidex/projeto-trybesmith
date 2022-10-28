import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { tokenize } from '../utilities/tokenize';

class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  userLogin = async (req: Request, res: Response) => {
    const login = req.body;

    const result = await this.loginService.userLogin(login);
    
    if (result === false) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const logintoken = tokenize(result);
    return res.status(200).json({ token: logintoken });
  };
}

export default LoginController;