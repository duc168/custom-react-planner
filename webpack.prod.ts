import path from "path";
import { merge } from 'webpack-merge';
import common from './webpack.common';
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config = merge(common, {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});

export default config;