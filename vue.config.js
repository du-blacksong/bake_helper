// vue.config.js
module.exports = {
  //移动端适配（以750设计图为标准）
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 设计稿宽度的1/10，一般为75
          require('postcss-px2rem')({remUnit: 75}),
        ]
      }
    }
  },
  lintOnSave: false, // 关闭ESLint的规则检查
  devServer: {
    proxy: {
      "/api": {
        //只对请求路由以/api开头的请求进行代理转发
        target: "https://api.hongbeibang.com", // 转发的目标url
        changeOrigin: true, // 支持跨域
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
