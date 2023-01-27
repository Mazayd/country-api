import { Router } from 'express';
import { UserController } from '../controller/user.controller.mjs';
import { check } from 'express-validator'
import { usermMiddlewaree } from '../middlewaree/user.middlewaree.mjs';
import { adminMiddlewaree } from '../middlewaree/admin.middlewaree.mjs';

const usersRouter = new Router();
const userController = new UserController();

usersRouter.post('/registraion', [
    check('username', "Username cannot be empty").notEmpty(),
    check('password', "Password cannot be empty").notEmpty(),
    check('password', "Password cannot be less than 4 or more than 10 characters").isLength({min:4, max:10})
], userController.registration.bind(userController));

usersRouter.post('/login', userController.login.bind(userController));

usersRouter.get('/users', adminMiddlewaree(['USER']), userController.getUsers.bind(userController));

export { usersRouter };