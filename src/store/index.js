/**
 * Created by Administrator on 2017/7/14.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import Sidebar from './modules/sideBar'
import BottomMenu from './modules/bottomMenus'
import User from './modules/user'
import SongSheet from './modules/songSheet'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sideBar: Sidebar,
    bottomMenu: BottomMenu,
    user: User,
    songSheet: SongSheet
  }
})

export default store
