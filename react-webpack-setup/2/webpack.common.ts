import HtmlWebpackPlugin from 'html-webpack-plugin';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
import webpack from 'webpack';


const webpackConfig: webpack.Configuration = {
entry:{
    index: './src/index.tsx'
},
resolve: {
extensions:[".ts",".tsx",".js",".jsx"]
},
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: "react-webpack",
        template:'./public/index.html'
    })
],
module:{
    rules:[
        {
            test: /\.(ts|tsx)$/,
            use:[
                "ts-loader"
            ]
        }
    ]
},
optimization:{
    splitChunks:{
        chunks:'all'
    }
}
}

export default webpackConfig;