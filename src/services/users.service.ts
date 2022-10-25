import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

class UsersService {
  usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel(connection);
  }

  create = async (user: IUser) => {
    const result = await this.usersModel.create(user);
    return result;
  };
}

export default UsersService;