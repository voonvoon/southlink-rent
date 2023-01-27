const express = require('express');
const userController = require('../controllers/user.controller')
const router = express.Router();

const auth = require('../middleware/auth');

//bla.com/api/users/profile
router.route('/profile')
.get(auth('readOwn', 'profile'), userController.profile)
.patch(auth('updateOwn','profile'), userController.updataProfile)

//create a separate one for change email purposes.
router.patch('/email',auth('updateOwn','profile'), userController.updateEmail )
router.get('/verify',userController.verifyAccount);

module.exports = router;

