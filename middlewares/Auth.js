var passport = require('passport'),
    User = require('../models/User'),
    bcrypt = require('bcrypt-nodejs'),
    JWTStrategy = require('passport-jwt').Strategy,
    ExtractJWT = require('passport').ExtractJwt,
    FacebookSrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-auth').Strategy,
    LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(function (username,password,done) {
    User.findOne({username: username},function (err,user) {
        if(err) return done(err);
        if(!user){
            return done(null, false, {message: 'Invalid user'});
        }

        var validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword){
            return done(null, false, {message: 'Invalid password'});
        }
        return done(null, user);
    })
}));


passport.use(new FacebookSrategy({

}));

passport.use(new GoogleStrategy({
    
}));

module.exports = passport;