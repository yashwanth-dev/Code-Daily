import webpack = require("webpack");
import webpackMerge = require("webpack-merge");
import webpackCommonConfig from "./webpack.common";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpackProdConfig: webpack.Configuration = {
    mode: 'production',
    module:{
        rules: [
            {
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ]
            }
        ]
    }
}

export default webpackMerge(webpackCommonConfig,webpackProdConfig);