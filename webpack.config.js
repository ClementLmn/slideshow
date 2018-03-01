const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [ new HtmlWebpackPlugin({ template: 'src/index.html' })];
// plugins.push(new UglifyJsPlugin());

module.exports = {
    entry: './src/main.js',
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    node: {
        fs: "empty"
    },
    plugins,
    devServer : {
        host: '0.0.0.0',
        port: 9000
    }
};