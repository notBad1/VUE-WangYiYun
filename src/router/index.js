import Vue from 'vue'
import Router from 'vue-router'

import TobBar from '../components/tobBar.vue'
import MyMusic from '../components/myMusic.vue'
import Recommend from '../components/recommend/recommend.vue'
import Topic from '../components/topic/topic.vue'

import TypeDetail from '../components/typeDetail.vue'
import LocalMusicSingle from '../components/localMusicSingle.vue'
import LocalMusicSinger from '../components/localMusicSinger.vue'
import LocalMusicAlbum from '../components/localMusicAlbum.vue'
import LocalMusicFolder from '../components/localMusicFolder.vue'

// 推荐页面路由
// 个人推荐
import Recommendation from '../components/recommend/recommendation.vue'
// 歌单
import RecommendSongSheet from '../components/recommend/recommendSongSheet.vue'
// 主播电台
import RecommendAnchorStation from '../components/recommend/recommendAnchorStation.vue'
// 排行榜
import RecommendRankingList from '../components/recommend/recommendRankingList.vue'

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
          redirect: 'recommend'
        },
        // 我的音乐
        {
          path: 'myMusic',
          component: MyMusic
        },
        // 推荐
        {
          path: 'recommend',
          component: Recommend,
          children: [
            {
              path: '/recommend',
              redirect: 'recommendation'
            },
            {
              path: 'recommendation',
              component: Recommendation
            },
            {
              path: 'recommendSongSheet',
              component: RecommendSongSheet
            },
            {
              path: 'recommendAnchorStation',
              component: RecommendAnchorStation
            },
            {
              path: 'recommendRankingList',
              component: RecommendRankingList
            }
          ]
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
