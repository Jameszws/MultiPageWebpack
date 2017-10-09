const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');//http-proxy的express中间件
const querystring = require('querystring'); //querystring用来字符串化对象或解析字符串
const bodyParser = require('body-parser');  //bodyParser中间件用来解析http请求体
const proxyConfig = require('./proxy.config.js');

var NODE_ENV = process.env.NODE_ENV || 'production';
var webpackConfig = NODE_ENV =="production"? require('../config/webpack.prod.config.js'):require('../config/webpack.dev.config.js');

app.use('/src', express.static(path.resolve(__dirname, "..","src")));
app.set('port', 8090);
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.set('views', path.resolve(__dirname, '..'));    //设置页面路径

app.use(bodyParser.json()); // 解析 application/json

app.use(bodyParser.urlencoded({ extended: false }));  // 解析 application/x-www-form-urlencoded

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

    router.get('/index', function(req, res){
        res.render('src/views/index.html', {
            env: NODE_ENV
        });
    });

    router.get('/index/1', function(req, res){
        res.render('src/views/detail.html', {
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

    proxyConfig.forEach(function (item) {
        app.use(item.url, proxy(createProxySetting(item.target)));
    });
    
}

var server = app.listen(app.get('port'), function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("express server listening on %s %s", host, port);
});

function createProxySetting(url) {
    return {
      target: url,
      changeOrigin: true,
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Cookies': 'mersea-session=50aa083b-b6a1-4e9f-bfd8-9e4a160e49e9'
      },
      onProxyReq: function (proxyReq, req) {
            if (req.method === 'POST' && req.body) {
                const bodyData = querystring.stringify(req.body);
                proxyReq.write(bodyData);
            }
        }
    }
}