const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports= {
    watch: true,

    mode: 'development',
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          }
        ]
      },
      devServer: {
        static: './src',
       hot: true,
      },

    entry: './src/index.js',

output: {
    path: path.resolve(__dirname, "build"),
    publicPath:'',
    filename:'main.js'
  },
  
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
  
   
}



