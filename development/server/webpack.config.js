const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
module.exports = {
    entry: ["@babel/polyfill", './src/index.js'],
        output: {
            path: path.join(__dirname, '../../production'),
            publicPath: '/',
            filename: 'index.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    }
}