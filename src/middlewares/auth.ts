import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload{
  id: string;
  iat: number;
  exp: number;
}

export default function authMidleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.json({message: 'jwt is missing'})
  }

  const [, token] = authHeader.split(' ');

  try {

    const decoded = verify(token, 'secret');
    const { id } = decoded as TokenPayload;

    req.userId = id;

    return next()
  } catch (error) {
    res.json({ message: 'Server error'})
  }
  next()
}
