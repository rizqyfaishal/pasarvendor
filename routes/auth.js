var express = require('express');
var passport = require('passport');
var router = express.Router;


router.get('/login',function (req, res) {
    res.render('login',{
        title: 'Login'
    });
});

