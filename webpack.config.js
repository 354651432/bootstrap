const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                        reloadAll: true,
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    'less-loader'
                ]
            }, {
                test: /\.(svg|woff2|woff|ttf|eot)$/,
                use: "file-loader"
            }
        ]
    }, plugins: [
        new HtmlWebpackPlugin({ title: "webpack bootstrap css demo", template: "./src/index.html" }),
        new MiniCssExtractPlugin({ filename: "bootstrap.css" }),
    ]
};