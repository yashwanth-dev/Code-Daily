import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import webpack from 'webpack';

const webpackCommonConfig: webpack.Configuration = {
plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title:'react webpack setup',
        template:'./public/index.html'
    })
],
resolve:{
    extensions:[".ts",".tsx",".js",".jsx"]
},
module:{
    rules:[
        {
            test:/\.(ts|tsx)$/,
            use: [
                "ts-loader"
            ]
        }
    ]
}
}

export default webpackCommonConfig;