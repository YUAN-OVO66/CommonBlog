const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //反向代理
  devServer:{
    proxy:{
      "/users":{
        target:"http://localhost:3000", 
        changeOrigin:true,    
      }
    }
  }
})
