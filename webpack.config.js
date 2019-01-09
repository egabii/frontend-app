const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/', // specifies what directory the bundle should go in, and also tells webpack-dev-server where to serve files from.
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // tells webpack that should watch files with format js or jsx
                include:[
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'] // which extensions will be resolved
    },
    devServer: { // serve localhost for development mode
        contentBase: path.join(__dirname, 'public/'),
        port: 3001,
        publicPath: 'http://localhost:3001/dist/', // It specifies the public URL of the the directory in order to serve files (wrong setting would cause 404 error)
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // avoid to refresh to see our changes.
    ]
};