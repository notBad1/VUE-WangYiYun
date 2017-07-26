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
    // 是否显示底部菜单
    isShowBottomMenu: false,
    // 底部菜单的标题
    bottomMenuTitle: '',
    // 是否显示创建新歌单选项
    isShowCreat: false,
    // 是否显示歌单管理选项
    isShoWmanage: false,
    // 是否显示 歌单二字
    isShowpoint: false,
    // 是否显示下载，分享选项
    isShowOption: false,
    // 是否显示删除选项
    isShowDelete: false
  },
  // 改变状态
  mutations: {
    showBottomMenu (state, title) {
      state.isShowBottomMenu = SHOW_BOTTOMMENU
      state.bottomMenuTitle = title
    },
    hideBottomMenu (state) {
      state.isShowBottomMenu = HIDE_BOTTOMMENU
    }
  },
  // 提交mutations
  actions: {
    showBottomMenus ({commit}, tilte) {
      commit('showBottomMenu', tilte)
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
