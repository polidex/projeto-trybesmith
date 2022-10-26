import { Pool, RowDataPacket } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  userLogin = async (login: ILogin) => {
    const { username, password } = login;

    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [[result]] = await this.connection.execute<RowDataPacket[]>(query, [username,
      password]);
    // const newLogin = { username: result.username, password: result.password };
    return result;
  };
}

export default LoginModel;