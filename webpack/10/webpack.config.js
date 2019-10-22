let path = require('path');
console.log('..reached path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
console.log('..reached path-2');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('..reached path-3');
module.exports = {
    entry:{
        app:'./src/index.js',
        print: './src/print.js'
    },
    output:{
        filename: '[name].bindle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
}