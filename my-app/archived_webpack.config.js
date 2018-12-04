var path    = require('path');
var hwp     = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },{
            test: /\min.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/public/index.html')}),
        new webpack.ProvidePlugin({ grapesjs: "grapesjs" })
    ]
}