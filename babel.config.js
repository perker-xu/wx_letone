module.exports = {
  presets: ["@vue/app"],
  // 引入mint-ui样式
  plugins:[
      [
        "component",
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]
  ]
};
