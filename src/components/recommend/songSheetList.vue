<template>
  <div class="songSheetList">
    <ul class="songSheetList-content">
      <li v-for="(item,i) in items" v-bind:key="i">
        <div class="songSheetList-img">
          <img v-bind:src="item.coverImgUrl">

          <div class="songSheetList-mask"></div>

          <div class="songSheetList-playCount" v-if="item.playCount">
            <i class="icon-Headset songSheetList-headset"></i>
            <span>{{ item.playCount | playCountFilter }}</span>
          </div>

          <div class="songSheetList-user">
            <i class="icon-Me1"></i>
            <span>{{item.creator.nickname}}</span>
          </div>
        </div>
        <p>{{item.name}}</p>

      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      items: {
        type: Array
      }
    },
//    data() {
//      return {}
//    },
    filters: {
      playCountFilter: function (num) {
        let count = parseInt(num).toString()
        if (count.length < 6) {
          return count
        } else {
          let a = count.length - 4
          return count.slice(0, a) + '万'
        }
      }
    }
  }
</script>
<style>
  .songSheetList-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 12px;
  }
  .songSheetList-content li{
    width: 49.7%;
    margin-bottom: 10px;
  }
  .songSheetList-img{
    width:100%;
    position: relative;
  }
  .songSheetList-img img{
    display: block;
    width:100%;
  }
  .songSheetList-mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .1);
    z-index: 1;
  }

  .songSheetList-content li p{
    margin: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .songSheetList-playCount{
    position: absolute;
    top: 5px;
    right: 5px;
    color: #ffffff;
    display: flex;
    align-items: center;
    z-index: 100;
  }
  .songSheetList-playCount i{
    font-size: 18px;
  }
  .songSheetList-user{
    position: absolute;
    bottom: 5px;
    left:5px;
    color: #ffffff;
    display: flex;
    align-items: center;
    z-index: 100;
  }
  .songSheetList-user i{
    font-size: 16px;
    margin-right: 3px;
  }

</style>
