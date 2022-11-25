// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' //第一步引入
// 使用Vuex
import store from './store/index.js'
// 清除原始样式,注意这里的styles 是别名
import 'styles/reset.css'
// 解决在高分辨率屏幕上，1px显示成2px的问题
import 'styles/border.css'
// npm install fastclick --save 说明这个包在生产和开发都要使用，把它保存在package.json的依赖中。（是node相关的知识）
// fastclick 用于解决在一些移动端浏览器 click事件 300ms 延迟的问题 https://cloud.tencent.com/developer/article/1668429
import 'styles/iconfont.css'
// 使用github上一个轮播图插件，快速构建轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 版本问题不要按官方文档那样写，在issue里有人讨论这个问题
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
fastclick.attach(document.body) //第二步使用它的attach方法

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//把store传给Vue实例
  components: { App },
  template: '<App/>'
})
