const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main : path.join(__dirname, "./src/index.js"),
    contact : path.join(__dirname, "./src/assets/js/contact.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // EJS
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
        options: {
          esModule: false
        }
      },
      // CSS / SASS
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader",
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        {
          from : "./src/assets/images",
          to : "./assets/images",
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename : "index.html",
      template: path.resolve(__dirname, "src/index.ejs"),
      chunks: "main"
    }),
    new HtmlWebpackPlugin({
      filename : "contact.html",
      template: path.resolve(__dirname, "src/contact.ejs"),
      chunks: "contact"
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 4000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};