<template>
  <!--歌手-->
    <div class="localMusicSinger" v-on:touchmove="isShowLetter" v-on:touchend="hiddenLetter">
      <div v-for="(item, i) in items">
        <singerList v-bind:name="item" v-bind:count="i"></singerList>
      </div>
      <!--字母排序-->
      <transition name="opacity">
        <div v-show="showLetter" class="letterSort">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
          <span>L</span>
          <span>I</span>
          <span>G</span>
          <span>K</span>
          <span>L</span>
          <span>M</span>
          <span>N</span>
          <span>O</span>
          <span>P</span>
          <span>Q</span>
          <span>R</span>
          <span>S</span>
          <span>T</span>
          <span>U</span>
          <span>V</span>
          <span>W</span>
          <span>X</span>
          <span>Y</span>
          <span>Z</span>
          <span>*</span>
        </div>
      </transition>
      <!--放大的字母-->
      <div class="bigLetter">A</div>
    </div>
</template>
<script>
    import singerList from './singerList.vue'
    import store from '../store'
    export default {
      components: {
        singerList: singerList
      },
      data () {
        return {
          showLetter: false
        }
      },
      methods: {
        isShowLetter () {
          this.showLetter = true
        },
        hiddenLetter () {
          this.showLetter = false
        }
      },
      computed: {
        items () {
          var musics = store.state.audio.localMusic
          var singer = []
          var singers = []
          musics.filter(function (n, i) {
            if (!singers[n.singer]) {
              singer.push(n.singer)
              singers[n.singer] = 1
            } else {
              singers[n.singer] += 1
            }
          })
          return singers
        }
      }
    }
</script>
<style>
  .localMusicSinger {
    position: fixed;
    top: 90px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: auto;
  }
  .letterSort{
    position: fixed;
    top: 90px;
    bottom: 50px;
    right:0;
    padding: 5px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 10px;
    color: #ffffff;
    background-color: #AAABAB;
  }
  .letterSort span{
    flex: 1;
    align-items: center;
  }

  .opacity-enter-active{
    transition: all .5s
  }

  .opacity-leave-active {
    transition: all 2s
  }

  .opacity-enter, .opacity-leave-to {
    opacity: 0
  }

  /*放大的字母*/
  .bigLetter{
    position: absolute;
    left:50%;
    top:50%;
    width:50px;
    height: 60px;
    margin-left: -25px;
    margin-top: -30px;
    background-color:rgba(0,0,0,.7);
    color: #fff;
    font-weight: 900;
    border-radius: 5px;
    text-align: center;
    line-height: 60px;
    font-size: 40px;
    box-shadow: 0 0 5px 0 #000;
    display: none;
  }
</style>
