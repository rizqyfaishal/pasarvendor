var mongoose = require('mongoose');


module.exports = {
  primary: {
    connection: mongoose.connect('mongodb://localhost/pasarvendor')
  }
}
