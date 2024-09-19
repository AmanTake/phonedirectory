const express = require('express')
const {Signup,Login} = require('../Controllers/UserController');

const router = express.Router();

router.route('/Signup') 
.post(Signup);

router.route('/Login') 
.post(Login);


module.exports = router;