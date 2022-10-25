import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUsertoken from '../interfaces/usertoken.interface';

dotenv.config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const tokenize = (user: IUsertoken) => {
  const token = jwt
    .sign({ ...user }, process.env.JWT_SECRET as Secret, jwtConfig as SignOptions);
  return token;
};

export const untokenize = (token: string) => {
  const decode = jwt.verify(token, process.env.JWT_SECRET as Secret);
  return decode as JwtPayload;
};