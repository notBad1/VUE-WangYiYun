<template>
  <div class="recommendList">
    <div class="recommendList-title">
      <div><span>{{title}}</span></div>
      <i class="icon-RightArrow recommendList-arrow"></i>
    </div>
    <ul class="recommendList-content" v-bind:class="{ 'recommendList-content-s': show }">
      <li v-for="(item,i) in items" v-bind:key="i">
        <img v-bind:src="item.picUrl">
        <p>{{item.name}}</p>

        <div class="recommendList-playCount" v-if="item.playCount">
          <i class="icon-Headset recommendList-headset"></i>
          <span>{{ item.playCount | playCountFilter }}万</span>
        </div>

        <div class="recommendList-cir" v-if="item.type === 24">
          <i class="icon-Video"></i>
        </div>
        <div class="recommendList-cir" v-else-if="item.type === 19">
          <i class="icon-Link"></i>
        </div>
        <div class="recommendList-cir" v-else-if="item.type === 6">
          <i class="icon-Wenzhang"></i>
        </div>
        <div class="recommendList-cir-none" v-else>
        </div>


      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      },
      items: {
        type: Array
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    computed: {
      show () {
        let n = 3
        this.isShow = n === this.items.length ? 1 : 0
        return this.isShow
      }
    },
    methods: {
    },
    filters: {
      playCountFilter: function (num) {
        let count = parseInt(num).toString()
        let a = count.length - 4
        return count.slice(0, a)
      }
    }
  }
</script>
<style>
  .recommendList-title {
    height: 40px;
    width: 100%;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .recommendList-title span {
    padding-left: 10px;
    border-left: 2px solid #D33A31;
  }

  .recommendList-arrow {
    color: #919293;
    font-size: 17px;
    padding: 2px 0;
    margin-left: 3px;
  }

  .recommendList-content, .recommendList1-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 12px;
  }

  .recommendList-content li, .recommendList1-content li {
    width: 33%;
    margin-bottom: 10px;
    position: relative;
  }

  .recommendList-content-s li {
    width: 49.7%;
  }

  .recommendList-content-s li:last-child {
    width: 100%;
  }

  .recommendList-content li img, .recommendList1-content li img {
    width: 100%;
    min-height: 80px;
  }

  .recommendList-content li p {
    margin: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .recommendList-headset {
    font-size: 16px;
  }

  .recommendList-playCount {
    position: absolute;
    top: 0;
    right: 5px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }

  .recommendList-cir{
    position: absolute;
    left:5px;
    top:5px;
    width:20px;
    height: 20px;
    border:1px solid #fff;
    border-radius: 50%;
    background-color: rgba(0,0,0,.3);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .recommendList-cir i{
    color: #fff;
    font-size: 13px;
  }
  .recommendList-cir-none{
    display: none;
  }
</style>
