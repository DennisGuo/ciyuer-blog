const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    devtool:'inline-source-map',
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port:8002
    }
});