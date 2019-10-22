import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
import webpack from 'webpack';


const webpackConfig: webpack.Configuration = {
entry:{
    index: './src/index.tsx'
},
output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    chunkFilename:'[name].chunk.js'
},
resolve: {
extensions:[".ts",".tsx",".js",".jsx"]
},
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: "react-webpack",
        template:'./public/index.html'
    })
],
module:{
    rules:[
        {
            test: /\.(ts|tsx)$/,
            use:[
                "ts-loader"
            ]
        }
    ]
}
}

export default webpackConfig;