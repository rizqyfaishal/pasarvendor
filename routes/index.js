var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login',function(req,res){
  res.render('login',{
    title: 'Login'
  })
});

router.get('/test',function (req,res) {
    res.status(200);
    res.send('Testing....123');
});

router.post('/login',function(req,res) {
  var body = req.body;
  
});
module.exports = router;
