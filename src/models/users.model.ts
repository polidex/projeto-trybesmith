import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (user: IUser) => {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?,?,?,?)`;
    const result = await this.connection.execute<ResultSetHeader>(query, [username,
      classe, level, password]);
    const newUser = { id: result[0].insertId, ...user };
    return newUser;
  };

  // read = async () => {
  //   const query = 'SELECT * FROM Trybesmith.Products';
  //   const result = await this.connection.execute<ResultSetHeader>(query);
  //   return result[0];
  // };
}

export default UsersModel;