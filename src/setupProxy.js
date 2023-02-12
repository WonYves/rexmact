const { createProxyMiddleware } = require("http-proxy-middleware")

// 设置代理的JS文件
module.exports = function(app){
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin:true,
    })
  )
}