import { NextFunction, Request, Response } from 'express';

const orderValidations = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });
  
  if (Object.prototype.toString.call(productsIds) !== '[object Array]') {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  
  // if (productsIds.some((i: number) => typeof i !== 'number')) {
  //   return res.status(422).json({ message: '"productsIds" must include only numbers' }); 
  // }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

export default orderValidations;