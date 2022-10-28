import { NextFunction, Request, Response } from 'express';
import { untokenize } from '../utilities/tokenize';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    untokenize(authorization);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default tokenValidation;