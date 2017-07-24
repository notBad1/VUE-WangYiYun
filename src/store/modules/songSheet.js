/**
 * Created by Administrator on 2017/7/20.
 */
  // 歌单
const songSheet = {
  state: {
    songSheets: []
  },
  getters: {
  },
  mutations: {
    // 初始化歌单数据
    initSongSheet (state, obj) {
      state.songSheets = obj
    },
    // 添加歌单
    addSongSheet (state, songSheet) {
      state.songSheets.push(songSheet)
    },
    // 删除歌单
    deleteSongSheet (state, songSheet) {
      state.songSheets.splice(state.songSheets.indexOf(songSheet),1)
    }
  },
  actions: {
    // 初始化歌单数据
    init_SongSheet ({commit}, obj) {
      commit('initSongSheet', obj)
    }
  }
}
export default songSheet
