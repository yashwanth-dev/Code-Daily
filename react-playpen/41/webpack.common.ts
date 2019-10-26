import webpack from 'webpack';
import HtmlWebpacPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const webpackCommonConfig: webpack.Configuration = {
module:{
    rules:[
        {
            test: /\.(ts|tsx)/,
            use: [
                "ts-loader"
            ]
        }
    ]
},
plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpacPlugin({
        title: 'React-webpack-Redux',
        template: './public/index.html'
    })
],
resolve: {
    extensions: [".ts",".tsx",".js",".jsx"]
}
}

export default webpackCommonConfig;