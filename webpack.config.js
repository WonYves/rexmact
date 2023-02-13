// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    // ...省略其他代码
    plugins: [
        new HtmlWebpackPlugin({
            // 以此为基准生成打包后html文件
            template: './public/index.html' 
        })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.less$/i,
          use: ["style-loader", "css-loader", "less-loader"],
        },
      ],
    },
}