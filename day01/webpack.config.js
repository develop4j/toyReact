module.exports = {
  // 入口
  entry: "./main.js",
  mode: 'development',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "ToyReact.createElement" }
              ],
            ],
          },
        },
      },
    ],
  },
//   devServer: {
//     open: true,
//     compress: false,
//     contentBase: './'
// }
  // 输出
  // output: {
  //     path: path.resolve(path.dirname, 'dist'),
  //     filename: 'main.js'
  //   }
};
