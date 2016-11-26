var express = require('express');
var router = express.Router();
var User = require('../models/User');
var UserController = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function (req,res) {
});
router.post('/post',UserController.create);

module.exports = router;
