/**
 * Created by Administrator on 2017/7/14.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    count : 0
  },
  mutations : {
    increment(state){
      state.count++
    }
  }
});
