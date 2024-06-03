const path = require("path");

module.exports = {
  entry: "./jsx/main.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "js"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
