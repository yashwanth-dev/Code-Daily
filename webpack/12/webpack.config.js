let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        anotherModule: './src/another_module.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'wp code splitting'
        })
    ]
}