const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.mp4$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "video"
                    }     
                },
            },
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module.css$/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@types': path.resolve(__dirname, 'src/types'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@entities': path.resolve(__dirname, 'src/entities'),
            '@tiffany': path.resolve(__dirname, 'src/tiffany.js'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })  
    ],
    devServer: {
        historyApiFallback: true
    }
};
