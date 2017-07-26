/**
 * Created by Administrator on 2017/7/25.
 */

const songList = {
  state: {
    isShowSongList: false
  },
  mutations: {
    showSong (state) {
      state.isShowSongList = true
    },
    hideSong (state) {
      state.isShowSongList = false
    }
  },
  actions: {
    showSongList ({commit}) {
      commit('showSong')
    },
    hideSongList ({commit}) {
      commit('hideSong')
    }
  }
}

export default songList
