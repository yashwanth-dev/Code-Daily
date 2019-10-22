import webpackConfig from './webpack.common';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

const webpackDevConfig: webpack.Configuration = {
mode:'development',
devServer:{
    hot:true
},
devtool: "source-map"
}


export default webpackMerge(webpackConfig, webpackDevConfig);