/*
* webpack 配置
*/
var webpack = require("webpack");
var path = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    devtool: 'source-map',

    entry:{
        indexController:['./src/controllers/indexController.js'],
        detailController:['./src/controllers/detailController.js'],
    }, //多页应用，多个入口文件
    
    output: {
        publicPath:"/dev/",
        path: path.resolve(__dirname, '..', 'dist'), //打包后的文件存放的地方
        filename: '[name].js' //打包后输出文件的文件名
    },
    
    resolve: { 
        extensions: ['.js'],
        alias: {
            jquery:  path.resolve(__dirname, '..', 'node_modules/jquery/dist/jquery.min.js'),
            bootstrap:  path.resolve(__dirname, '..', 'node_modules/bootstrap/dist/css/bootstrap.min.css')
        }
    },
    
    module: {
        loaders: [
            { test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/ },
            { test: /\.css$/,loaders: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|jpeg|gif)$/,loader: 'url-loader?limit=8192&name=images/[name].[ext]'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
        ]
    },

    plugins: [

        new webpack.LoaderOptionsPlugin({
            options:{                
                babel: {
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }
            }
        }),
        
        new commonsPlugin('common'),
        
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
        
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin()
    ]

}
