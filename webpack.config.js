const path = require('path');

module.exports = {
    entry: {
        'homePage': path.resolve(__dirname, 'resources/js/homePage.js'),
        'savedImagesPage': path.resolve(__dirname, 'resources/js/savedImagesPage.js'),
        'searchResultsPage': path.resolve(__dirname, 'resources/js/searchResultsPage.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
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
                    'style-loader',
                    {
                        loader: 'css-loader',
                    }
                ],
            },
        ]
    }
}