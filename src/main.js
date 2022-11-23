// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' //第一步引入

// 清除原始样式
import './assets/styles/reset.css'
// 解决在高分辨率屏幕上，1px显示成2px的问题
import './assets/styles/border.css'
// npm install fastclick --save 说明这个包在生产和开发都要使用，把它保存在package.json的依赖中。（是node相关的知识）
// fastclick 用于解决在一些移动端浏览器 click事件 300ms 延迟的问题 https://cloud.tencent.com/developer/article/1668429

Vue.config.productionTip = false
fastclick.attach(document.body) //第二步使用它的attach方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
