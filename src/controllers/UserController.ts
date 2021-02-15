import { Request, Response } from 'express';

class UserController {
  store(req: Request, res: Response) {
    res.json({message: 'UserController'});
  };
}

export default new UserController;
