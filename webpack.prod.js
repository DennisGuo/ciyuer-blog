const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common,{
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new BundleAnalyzerPlugin()
    ],
    // optimization:{
    //     splitChunks: {
    //         chunks: "all",
    //         name:false
    //     }
    // },
    recordsOutputPath: path.join(__dirname, "dist", "records.json")
});