/*
* webpack 配置
*/
var webpack = require("webpack");
var path = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    

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
            jquery:  path.resolve(__dirname, '..', 'node_modules/jquery/dist/jquery.min.js')
        }
    },

    module: {
        loaders: [
            {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/},
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
                drop_console: true
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
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
        
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin()
    ]

}
