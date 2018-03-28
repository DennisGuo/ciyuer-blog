const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/js/App.jsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js",
        // chunkFilename:'js/[name].[chunkhash].js',
        publicPath: '/'
    },
    externals:{
        'react':'React',
        'react-dom':'ReactDOM',
        'codemirror':'CodeMirror'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /(\.less|\.css)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }
        ]
    },
    plugins: [        
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon:'./src/favicon.ico',
            filename: './index.html'
        }),
    ],
}