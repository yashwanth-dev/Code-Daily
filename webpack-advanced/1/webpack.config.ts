import webpack from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: webpack.Configuration = {
    mode:'development',
output:{
filename:'[name].bundle.js',
path:path.resolve(__dirname,'dist')
},
entry:{
index:'./src/index.ts',
print:'./src/print.ts'
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