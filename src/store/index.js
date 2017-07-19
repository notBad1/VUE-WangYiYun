/**
 * Created by Administrator on 2017/7/14.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import Sidebar from './modules/sideBar'
import BottomMenu from './modules/bottomMenus'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sideBar: Sidebar,
    bottomMenu: BottomMenu
  }
})

export default store
