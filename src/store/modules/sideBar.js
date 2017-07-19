/**
 * Created by Administrator on 2017/7/19.
 */
// 侧面滑动菜单效果

// 显示侧边栏
const SHOW_SIDEBAR = true
// 隐藏侧边栏
const HIDE_SIDEBAR = false

const sideBar = {
  // 状态
  state: {
    isShow: false
  },
  // 改变状态
  mutations: {
    showBar (state) {
      state.isShow = SHOW_SIDEBAR
    },
    hideBar (state) {
      state.isShow = HIDE_SIDEBAR
    }
  },
  // 提交mutations
  actions: {
    showSideBar ({commit}) {
      commit('showBar')
    },
    hideSideBar ({commit}) {
      commit('hideBar')
    }
  },
  // store 的计算属性
  getters: {
    isShowMethod () {
      return this.state.isShow
    }
  }
}

export default sideBar

