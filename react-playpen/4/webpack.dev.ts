import webpack = require("webpack");
import webpackMerge = require("webpack-merge");
import webpackCommonConfig from "./webpack.common";

const webpackDevConfig: webpack.Configuration = {
    mode: 'development'
}

export default webpackMerge(webpackCommonConfig,webpackDevConfig);