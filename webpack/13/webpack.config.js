let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry:{
    index:'./src/index.js'
},
output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].bundle.js',
    chunkFilename:'[name].bundle.js'
},
plugins:[
    new htmlWebpackPlugin({
        title:'lazy loading'
    })
]
}