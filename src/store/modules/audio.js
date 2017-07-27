/**
 * Created by Administrator on 2017/7/26.
 */

const audio = {
  // 状态
  state: {
    // 本地音乐
    localMusic: []
  },
  // 改变状态
  mutations: {
    // 添加本地音乐
    addLocalMusic (state, obj) {
      state.localMusic.push(obj)
    },
    // 删除本地音乐
    removeLocalMusic (state, obj) {
      state.localMusic.splice(state.localMusic.indexOf(obj), 1)
    },
    // 初始化本地音乐
    initLocalMusic (state, obj) {
      state.localMusic = obj
    }
  },
  // 提交mutations
  actions: {
    // 初始化本地音乐
    init_LocalMusic ({commit}, obj) {
      commit('initLocalMusic', obj)
    }
  }
  // store 的计算属性
  // getters: {
  // }
}

export default audio
