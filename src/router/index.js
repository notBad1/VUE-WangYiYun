import Vue from 'vue'
import Router from 'vue-router'

import MyMusic from '../components/myMusic.vue'
import Recommend from '../components/recommend.vue'
import Topic from '../components/topic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      redirect: '/myMusic'
    },
    // 我的音乐
    {
      path: '/myMusic',
      component: MyMusic
    },
    // 推荐
    {
      path: '/recommend',
      component: Recommend
    },
    // 话题
    {
      path: '/topic',
      component: Topic
    }
  ]
})
