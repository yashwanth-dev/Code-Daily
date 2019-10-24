import webpack from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: webpack.Configuration = {
output:{
filename:'[name].bundle.js',
path: path.resolve(__dirname,'dist'),
chunkFilename:'[name].bundle.js'
},
entry:{
index:'./src/index.ts'
},
module:{
    rules:[{
        test:/\.(ts|tsx)$/,
        use: [
            "ts-loader"
        ]
    }]
},
resolve:{
    extensions: ['.ts','.tsx','.js','.jsx']
},
plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'webpack-code-splitting'
    })
]
}

export default config;