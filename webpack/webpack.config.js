const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.ts",
    mode:"development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },
    stats:"none",
    resolve:{
        extensions:['.ts','.js'],
        alias:{
            '@':path.resolve(__dirname,'./src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    devServer: {
        port: 1998,
        proxy: {}
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}