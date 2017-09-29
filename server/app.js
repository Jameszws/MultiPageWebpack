var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var NODE_ENV = process.env.NODE_ENV || 'production';
var webpackConfig = NODE_ENV =="production"? require('../config/webpack.prod.config.js'):require('../config/webpack.dev.config.js');

app.use('/src', express.static(path.resolve(__dirname, "..","src")));
app.set('port', 8090);
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//设置页面路径
app.set('views', path.resolve(__dirname, '..'));

if(NODE_ENV === 'development'){
    
    Object.keys(webpackConfig.entry).forEach(function(key){
    	webpackConfig.entry[key].unshift('webpack-hot-middleware/client?reload=true');    
    });
    
    var compiler = webpack(webpackConfig);
	app.use(webpackDevMiddleware(compiler, {
	    publicPath: webpackConfig.output.publicPath,
	    noInfo: true,
	    stats: {
	        colors: true
	    }
	}));
	app.use(webpackHotMiddleware(compiler));

    //*
    router.get('/index', function(req, res){
        res.render('src/views/index.html', {
            env: NODE_ENV
        });
    });

    router.get('/detail', function(req, res){
        res.render('src/views/detail.html', {
            env: NODE_ENV
        });
    });

     router.get('/dist/index', function(req, res){
        res.render('../dist/views/index.html', {
            env: NODE_ENV
        });
    });

    router.get('/dist/detail', function(req, res){
        res.render('../dist/views/detail.html', {
            env: NODE_ENV
        });
    });

    app.use(router);
}

//*/
var server = app.listen(app.get('port'), function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("express server listening on %s %s", host, port);
});
