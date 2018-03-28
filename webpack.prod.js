const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common,{
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        })
    ],
    // optimization:{
    //     splitChunks: {
    //         chunks: "all",
    //         name:false
    //     }
    // },
    recordsOutputPath: path.join(__dirname, "dist", "records.json")
});