const path = require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: ['whatwg-fetch', path.join(__dirname,'src/index.js')],
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'[name].js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_moudles/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                use: [
                    "style-loader",
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    devServer: {
        host: "localhost",
        port: 8888,
        hot: true,
        open: true,
        historyApiFallback: true,
        quiet: false,
        noInfo: false,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
        })
    ],
}

