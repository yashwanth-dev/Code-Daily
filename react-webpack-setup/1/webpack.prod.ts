import webpack from "webpack";
import webpackMerge from "webpack-merge";
import webpackConfig from "./webpack.common";


const webpackProdConfig : webpack.Configuration = {
mode:'production'
}

export default webpackMerge(webpackConfig,webpackProdConfig);