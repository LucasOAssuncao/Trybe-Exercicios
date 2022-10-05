import { Router } from 'express';
import UserController from '../controller/user.controller';
import validationUser from '../middlewares/user.middleware'

const router = Router();
const userController = new UserController();

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getById);

router.post('/user/', validationUser, userController.update);

router.put('/user/:id', validationUser, userController.update);

router.delete('/user/:id', userController.remove);

export default router;