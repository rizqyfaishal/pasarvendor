var express = require('express');
var User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/post',function(req,res) {
  var body = req.body;
  User.create(body,function(err,doc) {
    if(err) {
      res.status(500);
      res.render('error',{
        message: err.message,
        error: err
      })
    } else {
      res.send(doc);
    }

  })
});

module.exports = router;
