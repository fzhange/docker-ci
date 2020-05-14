
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        main:"./index.js"
    },
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            template: "./index.html",
            title: 'Output Management'
        }),
        new webpack.DefinePlugin({
            TWO:2
        })
    ]
}