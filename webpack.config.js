const path = require("path");
var webpack=require("webpack");
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={

    mode: "development",
    entry:[
        './app/index.js',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname,'app/index.js')
    ],
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    devtool: "eval-source-map",
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.tpl.html',
            inject:'body',
            filename:'./index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development')
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_moudles/,
                loader:"babel-loader",
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    }
}

