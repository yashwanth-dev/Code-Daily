import webpack from "webpack";
import webpackMerge from "webpack-merge";
import webpackConfig from "./webpack.common";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpackProdConfig : webpack.Configuration = {
mode:'production',
// devtool:''
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