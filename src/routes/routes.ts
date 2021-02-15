import { Router } from 'express';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import authMidleware from '../middlewares/auth';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.execute);
router.get('/private', authMidleware, (req, res) => {
  res.json({ message: 'private'});
});

export default router;


