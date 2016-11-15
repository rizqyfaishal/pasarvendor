var path = require('path');
var yargs = require('yargs').argv;

var nodeServerFile = './bin/www';
var watchesFiles = [
    'app.js','./controllers/','./models/','./routes/','./middlewares/','!./assets/','./config/'
];


var bower = {
    json: './bower.json',
    directory: './bower_components/',
    ignorePath: '../..'
};

var jsDest = './public/javascripts/';


module.exports = {
    serve: {
        delay: 1,
        script: nodeServerFile,
        env: {
            'PORT' : 3000,
            'NODE_ENV' : yargs.dev ? 'dev' : 'build'
        },
        watch: watchesFiles
    },
    js: {
        src: [
            './assets/javascripts/**/*.js'
        ],
        dest: jsDest,
        inject: [
            path.join(jsDest,'**','*.js'),
            '!' + path.join(jsDest,'**','*test.js'),
            './public/**/*.css'
        ]
    },
    sass: {
        target: ['./assets/stylesheets/**/*.scss'],
        destination: path.join('./', 'public', 'stylesheets')
    },
    html: {
        src: ['./public/**/*.html'],
        dest: './public/',
        inject: {
            relative: true,
            empty: true
        }
    },
    wiredep: {
        options: {
            json: bower.json,
            directory: bower.directory,
            ignorePath: bower.ignorePath
        }
    },
    bower: bower
};