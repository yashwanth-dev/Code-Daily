import webpack from "webpack";
import webpackMerge from "webpack-merge";
import webpackConfig from "./webpack.common";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const webpackProdConfig : webpack.Configuration = {
mode:'production',
output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    chunkFilename:'[name].chunk.js'
},
module:{
    rules:[
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        }
    ]
},
plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css',
      chunkFilename: '[id].css'
    })
]
}

export default webpackMerge(webpackConfig,webpackProdConfig);