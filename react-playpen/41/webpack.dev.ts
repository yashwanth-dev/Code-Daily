import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import webpackCommonConfig from './webpack.common';

const webpackDevConfig: webpack.Configuration = {
mode:'development',
module:{
    rules: [
        {
            test:/\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }
    ]
}
}

export default webpackMerge(webpackCommonConfig,webpackDevConfig);