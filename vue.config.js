const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: '/mytripVue',
  outputDir: 'docs' // build 저장 파일 위치
});
chainWebpack: (config) => {
  config.plugins.delete('prefetch')
}
