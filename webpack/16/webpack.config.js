let path = require('path');
// let cleanWebpackplugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    optimization:{
        usedExports: true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title:'tree shaking'
        })
    ]
}