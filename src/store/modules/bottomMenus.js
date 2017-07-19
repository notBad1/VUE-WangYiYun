/**
 * Created by Administrator on 2017/7/17.
 */
// 底部菜单显示效果

// 显示底部菜单
const SHOW_BOTTOMMENU = true
// 隐藏底部菜单
const HIDE_BOTTOMMENU = false

const bottomMenu = {
  // 状态
  state: {
    isShowBottomMenu: false
  },
  // 改变状态
  mutations: {
    showBottomMenu (state) {
      state.isShowBottomMenu = SHOW_BOTTOMMENU
    },
    hideBottomMenu (state) {
      state.isShowBottomMenu = HIDE_BOTTOMMENU
    }
  },
  // 提交mutations
  actions: {
    showBottomMenus ({commit}) {
      commit('showBottomMenu')
    },
    hideBottomMenus ({commit}) {
      commit('hideBottomMenu')
    }
  },
  // store 的计算属性
  getters: {
    isShowBottomMenuMethod () {
      return this.state.isShowBottomMenu
    }
  }
}

export default bottomMenu
