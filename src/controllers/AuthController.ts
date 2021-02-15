
import { compare } from 'bcryptjs';
import { Request, Response } from  'express';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import User from '../models/User';


class AuthController {
  async execute(req: Request, res: Response) {
    const respository = getRepository(User);

    const { email, password } = req.body;



    const user = await respository.findOne({ where: { email }});

    if (!user) {
      return res.json({message: 'Incorrect E-mail combination.'});
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched) {
      return res.json({message: 'Incorrect password combination.'});
    }

    const token = sign({ id: user.id}, 'secret', {
      expiresIn: '1d',
    })

    return res.json({
      user,
      token
    })

  }
}

export default new AuthController;
