import path from "path";
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
    mode: "development",
    output: {
        publicPath: "/",
    },
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "build"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true
    }
});

export default config;