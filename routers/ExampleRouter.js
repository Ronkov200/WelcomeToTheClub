import ExampleController from '../controllers/ExampleController.js'


router.post('/login', ExampleController.login);
router.post('/logout', ExampleController.logout);
router.post('/signup', ExampleController.signup);
router.post('/refresh', ExampleController.refresh);