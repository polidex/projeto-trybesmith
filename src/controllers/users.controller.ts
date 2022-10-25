import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import { tokenize } from '../utilities/tokenize';

class UsersController {
  usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  create = async (req: Request, res: Response) => {
    const newUser = req.body;

    const result = await this.usersService.create(newUser);
    const registerToken = tokenize({ id: result.id, username: result.username });
    return res.status(201).json({ token: registerToken });
  };
}

export default UsersController;