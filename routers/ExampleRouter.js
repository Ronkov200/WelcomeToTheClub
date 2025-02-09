import ExampleController from '../controllers/ExampleController.js'

import { Router } from 'express';


const router = new Router();


router.post('/login', ExampleController.login);
router.post('/logout', ExampleController.logout);
router.post('/signup', ExampleController.signup);
router.post('/refresh', ExampleController.refresh);
router.post('/register', ExampleController.register);
router.post('/deleteUser', ExampleController.deleteUser);

export default router;