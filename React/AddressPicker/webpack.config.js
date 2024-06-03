const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV == "production";

module.exports = {
  entry: {
    //需要轉譯的檔案
    App: ["./src/js/main.js", "./src/scss/main.scss"],
  },
  output: {
    filename: "./[name].js", //輸出檔案名 [name]表entry填的
    path: path.resolve(__dirname, "public"), //輸出檔案地址
  },
  mode: "development", //or production
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "../css/main.css", //CSS產生路徑，沒寫的話就會在output的path產生
    }),
  ], //壓縮CSS
  module: {
    rules: [
      {
        test: /\.m?jsx?$/, //抓.jsx或.js
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(s[ac]ss)$/, //sass或scss
        exclude: /node_modules/,
        //由下至上 sass-loader -> css->loader -> MinMiniCssExtractPlugin.loader 或 style-loader
        use: [
          devMode
            ? {
                loader: "style-loader",
                options: {
                  injectType: "linkTag",
                },
              }
            : MiniCssExtractPlugin.loader, // 壓縮CSS或JS檔，當mode是production才會壓縮
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
