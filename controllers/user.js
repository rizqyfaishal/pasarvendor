var User = require('../models/user');

module.exports = {
  create: function(req,res) {
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
  },
  doCreate: function(){

  }
}
