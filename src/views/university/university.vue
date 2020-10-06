<!--视频学堂-->
<template>
  <div class="university">
<!--    顶部导航-->
    <div class="top">
      <i class="iconfont icon-sousuo"></i>
      <div class="topNav" ref="topNav">
        <ul class="scrollWrapper" >
          <li v-for="item in topNav" :key="item.categoryId"
              :class="item.categoryId===nowId?'scrollItem active':'scrollItem'"
              @click="nowId=item.categoryId" >
            {{item.title}}
            <div class="border" v-show="item.categoryId===nowId"/>
          </li>

        </ul>
      </div>
    </div>
<!--    视频学堂推荐页面-->
    <div class="main">
      <!--轮播图-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipeList" :key="index">
          <img :src="item.image">
        </van-swipe-item>

      </van-swipe>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: "university",
  data() {
    return {
      topNav: [],//顶部导航
      nowId: 0, //当前所在的分类id
      swipeList: [], //轮播图
    }
  },
  async mounted() {

    //获取视频学堂顶部导航
    const topNav = await this.$axios('/index/getByType?type=11')
    // this.topNav = topNav.data.data
    this.topNav = [{categoryId: 0, title: '推荐'}, ...topNav.data.data]

    //顶部导航滚动
    this.$nextTick(() => {
      new BetterScroll(this.$refs.topNav, {click: true, scrollX: true});
    })


    //轮播图
    const swipeList = await this.$axios('/education/getIndexByWeb')
    this.swipeList = swipeList.data.data.category[0].item
    console.log(this.swipeList)
  }
}
</script>

<style scoped lang="scss">
.university{
  ul {
    list-style: none
  }
  .top{
    position: fixed;
    width: 750px;

    .iconfont{
      width: 80px;
      z-index: 999;
      background-color: #ffffff;
      font-size: 50px;
      right: -10px;
      top: 32px;
      position: absolute;
    }
    .topNav{
      height: 100px;
      top: 0px;
      width: 750px;

      .scrollWrapper{
        height: 100px;
        display: inline-flex;
        width: 960px;
        .scrollItem{
          color: #979797;
          flex-shrink:0;
          font-size: 30px;
          padding-left: 20px;
          padding-right: 20px;
          margin-top: 32px;
          height: 56px;
          justify-content: center;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          .border{
            margin-top: 8px;
            height: 6px;
            width: 40px;
            background-color: #e98b71;
          }
          &.active{
            color: #313131;
            font-weight: bold;
          }
        }

      }
    }
  }
  .main{
    width: 100%;
    padding-top: 100px;
    overflow: hidden;
    .my-swipe .van-swipe-item {
      color: #fff;
      height: 380px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

}
</style>
