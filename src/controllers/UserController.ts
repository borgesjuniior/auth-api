import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';


class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const emailAlreadyUsed = await repository.findOne({ where: { email } });

    if (emailAlreadyUsed) {
      res.status(409).json({message: 'E-mail already used.'});
    }

    const hashPassword = await hash(password, 8); //Encripta a senha digitada

    const user = repository.create({ email, password: hashPassword});
    await repository.save(user);

    return res.json(user);

  };
}

export default new UserController;
