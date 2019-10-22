let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
entry:{
    index:'./src/index.js'
},
output:{
    path:path.resolve(__dirname,'dist'),
    // filename:'[name].bundle.js',
    filename:'[name].[contenthash].js',
    chunkFilename:'[name].[contenthash].js'
},
plugins:[
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
        title:'caching'
    })
],
optimization:{
    runtimeChunk:'single',
    splitChunks:{
        cacheGroups:{
            vendor: {
                test:/[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
}
}