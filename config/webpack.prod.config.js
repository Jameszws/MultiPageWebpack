/*
* webpack 配置
*/
var webpack = require("webpack");
var path = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fileVersion = new Date().getTime();

module.exports = {    

    entry:{
        indexController:['./src/controllers/indexController.js'],
        detailController:['./src/controllers/detailController.js'],        
    }, //多页应用，多个入口文件
    
    output: {
        publicPath:"/",
        path: path.resolve(__dirname, '..', 'dist'), //打包后的文件存放的地方
        filename: '[name].js' //打包后输出文件的文件名
    },

     resolve: { 
        extensions: ['.js'],
        alias: {
            bootstrap:  path.resolve(__dirname, '..', 'node_modules/bootstrap/dist/css/bootstrap.min.css')
        }
    },

    module: {
        loaders: [
            { test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/ },
            { test: /\.css$/,loaders: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|jpeg|gif)$/,loader: 'url-loader?limit=8192&name=images/[name].[ext]'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=images/[name].[ext]" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000&name=images/[name].[ext]" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=images/[name].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]" },
        ]
    },

    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new webpack.LoaderOptionsPlugin({
            options:{
                babel: {
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }
            }
        }),
        
        new commonsPlugin('common'),

        new HtmlWebpackPlugin({
            filename: 'views/index.html',
            template: 'src/views/index.html',
            inject: 'body',
            hash: true,
            chunks: ['index','common.js'],   // 这个模板对应上面那个节点
            minify: { //压缩HTML文件    
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'views/detail.html',
            template: 'src/views/detail.html',
            inject: 'body',
            hash: true,
            chunks: ['detail','common.js'],   // 这个模板对应上面那个节点
            minify: { //压缩HTML文件    
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        
        //压缩配置
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: false
            },
            output: {
                comments: false
            },
            mangle:{
                except:['$super','$','exports','require']
            }
        }),        

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV':  JSON.stringify(process.env.NODE_ENV)
            },
            fileVersion:fileVersion //文件版本
        }),
        
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin()
    ]

}
