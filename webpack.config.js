const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        'resources/js/homePage': path.resolve(__dirname, 'resources/js/homePage.js'),
        'resources/js/savedImagesPage': path.resolve(__dirname, 'resources/js/savedImagesPage.js'),
        'resources/js/searchResultsPage': path.resolve(__dirname, 'resources/js/searchResultsPage.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './resources/ejs/index.ejs',
            chunks: ['resources/js/homePage']
        }),
        new HtmlWebpackPlugin({
            filename: 'search-result.html',
            template: './resources/ejs/search-result.ejs',
            chunks: ['resources/js/searchResultsPage']
        }),
        new HtmlWebpackPlugin({
            filename: 'saved-images.html',
            template: './resources/ejs/saved-images.ejs',
            chunks: ['resources/js/savedImagesPage']
        }),
        new MiniCssExtractPlugin({
            filename: 'resources/css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '/resources/images',
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ],  
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    }
                ],
            },
        ]
    }
}