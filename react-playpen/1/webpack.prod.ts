import webpack = require("webpack");
import webpackMerge = require("webpack-merge");
import webpackCommonConfig from "./webpack.common";

const webpackProdConfig: webpack.Configuration = {
mode:'production'
}

export default webpackMerge(webpackCommonConfig,webpackProdConfig);