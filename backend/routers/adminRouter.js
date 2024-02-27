const Router = require ('express');
const router = new Router();
const adminController = require('../controllers/adminController');


router.get('/get-users', adminController.getUsers)

module.exports = router;