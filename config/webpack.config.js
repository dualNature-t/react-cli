const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].chunk.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
    splitChunks: {
      chunks: "all",
      // minSize: 30,
      // cacheGroups: {
      //   default: {
      //     name: "common",
      //     chunks: "initial",
      //     minChunks: 2,
      //     priority: -20,
      //   },
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: "vendors",
      //     chunks: "initial",
      //     priority: -10,
      //   },
      // },
    },
  },

  plugins: [new webpack.ProgressPlugin()],

  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
};
