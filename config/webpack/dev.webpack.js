const {merge} = require("webpack-merge");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const common = require("./base.webpack.js");
const helpers = require('./helpers');

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        stats: "errors-only",
        historyApiFallback: true,
    },
    output: {
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[path][name]__[local]",
                                localIdentContext: helpers.resolveFromRootPath("src"),
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, "./dev.env"),
        }),
    ],
});
