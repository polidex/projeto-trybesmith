import ILogin from '../interfaces/login.interface';
import connection from '../models/connection';
import LoginModel from '../models/login.model';

class LoginService {
  loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  userLogin = async (login: ILogin) => {
    const result = await this.loginModel.userLogin(login);
    console.log('-------------------------------->', result);
    return result;
  };
}

export default LoginService;