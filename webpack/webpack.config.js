const path = require("path");
const webpack = require("webpack");
const htmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "http://127.0.0.1:8081/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use:["style-loader","css-loader"]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 500,
              outputPath: "./images/"
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/i,
        loader: "html-withimg-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlPlugin({
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.html"
    }),
    new ExtractTextPlugin("./css/index.css")
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "127.0.0.1",
    compress: true,
    port: "8081",
    hot: true
  }
};
