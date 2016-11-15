var gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    yargs = require('yargs').argv,
    config = require('./tasks/config'),
    wiredep = require('wiredep').stream,
    $ = require('gulp-load-plugins')({ lazy: true});

gulp.task('vet', function () {
    log('Analizing code with jshint and jscs');
    return gulp
        .src(config.js.src)
        .pipe($.if(yargs.verbose,$.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});


gulp.task('compile-sass',['clean-styles'],function () {
    log('Compile SASS -> CSS');
    return gulp
        .src(config.sass.target)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer({browsers: ['last 2 version','>5%']}))
        .pipe(gulp.dest(config.sass.destination));
});

gulp.task('clean-styles',function () {
    clean(path.join(config.sass.destination,'**','*'));
});

gulp.task('sass-watcher',function () {
    gulp.watch(config.sass.target,['compile-sass']);
});

gulp.task('html-inject',function () {
    gulp
        .src(config.html.src)
        .pipe(wiredep(config.wiredep.options))
        .pipe($.inject(gulp.src(config.js.inject), config.html.inject))
        .pipe(gulp.dest(config.html.dest));
});

gulp.task('serve',['compile-sass'],function () {
    return $.nodemon(config.serve)
        .on('start',['vet'],function (ev) {
            log('Server Started')
        })
        .on('restart',function (ev) {
            log('Server Restarted')
        })
        .on('exit',function (ev) {
            log('Exit')
        })
        .on('crash',function (ev) {
            log('Crashed on : ' + ev)
        });
});


function clean(path) {
    log('Cleaning path: ' + path);
    del(path);
}

function errorLogger(error) {
    log('******Error*******');
    log(error);
    log('******Error*******');
}


function log(message) {
    if (typeof  message === 'object') {
        for (var item in message) {
            if (message.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(message[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(message));
    }
}