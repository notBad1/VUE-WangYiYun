/**
 * Created by Administrator on 2017/7/20.
 */

const User = {
  state: {
    user: {
      name: '',
      src: '',
      srcBg: '../../static/img/146.jpg',
      grade: ''
    }
  },
  mutations: {
    // 注册
    register (state, user) {
      state.user = user
    }
  },
  actions: {
    // 添加用户
    adduser ({commit}) {
      commit('register')
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  }
}

export default User
