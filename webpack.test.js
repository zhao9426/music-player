const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.join(__dirname, 'src/mobx2.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moudles/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            "@babel/plugin-syntax-class-properties",
                            ["@babel/plugin-proposal-decorators", {"legacy": true}],
                            ["@babel/plugin-proposal-class-properties",{"loose": true }]
                        ]
                    }
                }
            }]
    }
}

