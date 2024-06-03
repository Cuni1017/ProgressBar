const path = require("path");

module.exports = {
  entry: "./js/App.js",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname, "lib"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
