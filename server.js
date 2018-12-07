const webpackDevServer=require('webpack-dev-server');
const config=require('./webpack.config');
const webpack=require('webpack');

const server = new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
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
});

server.listen(3000,'localhost',function(err){
    if(err){
        console.error(err);
    }
    console.log('Listening at localhost:3000');
});