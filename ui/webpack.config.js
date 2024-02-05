const config = require('./.config/main')
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dev = process.env.NODE_ENV !== "production";

console.log("> Starting ui...")
console.log("> Debug:", dev)

const output = {
    filename: `vuelt_bundle.js`,
    path: path.join(__dirname, "dist"),
};

module.exports = {
    mode: dev ? "development" : "production",
    entry: path.join(__dirname, 'src', 'ts', 'index.tsx'),

    // module: {
    //   rules: [
    //     {
    //         test: /\.(png|woff|woff2|eot|ttf|gif)$/,
    //         loader: 'file-loader',
    //     },
    //   ]
    // },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.template.ejs',
            title: 'Vuelt'
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'assets'),
        },
        host: config.devServerHost,
        port: config.devServerPort,
    }
}
