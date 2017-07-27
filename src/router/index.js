import Vue from 'vue'
import Router from 'vue-router'

import TobBar from '../components/tobBar.vue'
import MyMusic from '../components/myMusic.vue'
import Recommend from '../components/recommend.vue'
import Topic from '../components/topic.vue'
import TypeDetail from '../components/typeDetail.vue'
import LocalMusicSingle from '../components/localMusicSingle.vue'
import LocalMusicSinger from '../components/localMusicSinger.vue'
import LocalMusicAlbum from '../components/localMusicAlbum.vue'
import LocalMusicFolder from '../components/localMusicFolder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TobBar,
      children: [
        {
          // 首页
          path: '/',
          redirect: 'myMusic'
        },
        // 我的音乐
        {
          path: 'myMusic',
          component: MyMusic
        },
        // 推荐
        {
          path: 'recommend',
          component: Recommend
        },
        // 话题
        {
          path: 'topic',
          component: Topic
        }
      ]
    },
    {
      path: '/typeDetail',
      component: TypeDetail,
      children: [
        {
          path: '/',
          redirect: 'localMusicSingle'
        },
        {
          path: 'localMusicSingle',
          component: LocalMusicSingle
        },
        {
          path: 'localMusicSinger',
          component: LocalMusicSinger
        },
        {
          path: 'localMusicAlbum',
          component: LocalMusicAlbum
        },
        {
          path: 'localMusicFolder',
          component: LocalMusicFolder
        }
      ]
    }
  ]
})
