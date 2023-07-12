const packageJson = require("./package.json");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    module: {
        rules: [
            {
                test: /\.js|jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            },
            {
                test: /\.s[ac]ss?$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html?$/i,
                loader: "html-loader"
            },
            {
                test: /\.svg|png$/i,
                loader: "url-loader"
            }

        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "UserComponent",
            filename: "remoteEntry.js",
            exposes: {
                "./UserList": "./src/components/UserList/UserList"
            },
            shared: {
                ...packageJson.dependencies,
                ...packageJson.peerDependencies,
                ...packageJson.devDependencies
            }
        }),
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./public/favicon.ico"
        })
    ]
}