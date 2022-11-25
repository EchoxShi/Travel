import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
// 建议使用localStorege时在外边加一个try catch ,因为有些浏览器 或者用户开启隐身模式就拿不到了
import state  from "./state"
import actions from "./actions"
import mutations from "./mutations"
export default new Vuex.Store({
    state: state,
    actions: actions,
    mutations: mutations
})

  