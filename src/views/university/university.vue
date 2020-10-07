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
              @click="clickNav(item.categoryId)" >
            {{item.title}}
            <div class="border" v-show="item.categoryId===nowId"/>
          </li>

        </ul>
      </div>
    </div>
<!--    视频学堂推荐页面-->
    <div class="main1" v-show="!showOther">
      <!--轮播图-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipeList" :key="index">
          <img :src="item.image">
        </van-swipe-item>
      </van-swipe>

<!--分类展示列表-->
      <div class="recommend" v-for="item in indexMemuList" :key="item.categoryId">
        <div class="title">
          {{item.title}}
          <span class="all">查看全部</span>
        </div>

        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="item in item.item" :key="item.categoryItemId">
              <img :src="item.image">
              <span class="buy" v-if="item.buyNum>1000">1000+在学</span>
              <span class="buy" v-else>{{item.buyNum}}在学</span>
              <div class="itemTitle">{{item.shareTitle}}</div>
            </li>
          </ul>
        </div>
      </div>


    </div>

    <div class="main2" v-show="showOther">

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
      indexMemuList:[], //推荐页展示的菜单
      otherList:[], //其他页展示的菜单
      showOther: false //当前显示的是否是其他页面

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
    // console.log(this.swipeList)


    //获取主页菜单列表
    const indexMemuList = await this.$axios('/education/getIndexByWeb')
    // console.log(indexMemuList.data.data.category.slice(1,10))
    this.indexMemuList = indexMemuList.data.data.category.slice(1,10)

    //滚动
    this.$nextTick(() => {
      let wrapper = document.querySelectorAll('.pic-wrapper')
      // console.log(wrapper[0])
      for(let i=0;i<wrapper.length;i++){
        new BetterScroll(wrapper[i], {click: true, scrollX: true ,eventPassthrough: 'vertical'})
      }
      // new BetterScroll(wrapper[1], {click: true, scrollX: true});
    })
  },
  methods:{
    clickNav(categoryId){
      // console.log(categoryId)
      this.nowId=categoryId
      if(categoryId===0){
        this.showOther = false
      }else {
        this.showOther = true
      }
    }
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
    z-index: 999;
    background-color: white;
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
  .main1{
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

    .recommend {
      margin-top: 40px;
      margin-left: 30px;
      margin-bottom: 30px;
      .title {
        font-size: 34px;
        line-height: 48px;
        color: #313131;
        vertical-align: middle;
        display: inline-block;
        font-weight: bold;
        position: relative;
        .all{
          font-size: 28px;
          color: #999999;
          line-height: 48px;
          position: absolute;
          right: -560px;
        }
      }


      .pic-wrapper {
        margin-top: 20px;
        width: 100%;
        overflow: hidden;
        height: 540px;
        white-space: nowrap;
        .pic-list{
          display :inline-block;
          font-size: 0;
          .pic-item{
            position: relative;
            display: inline-block;
            margin-right: 20px;
            img{
              width: 320px;
              height: 450px;
              border-radius: 8px;
            }
            .buy{
              display: block;
              background-color: white;
              top: 400px;
              left: 20px;
              position: absolute;
              font-size: 22px;
              color: #4A4945;
              width: 140px;
              height: 40px;
              line-height: 40px;
              text-align: center;
            }
            .itemTitle{
              height: 80px;
              width: 320px;
              margin-top: 10px;
              color: #4A4945;
              font-weight: bold;
              font-size: 30px;
              line-height: 40.5px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              word-break: break-all;
              text-overflow: ellipsis;
              white-space: normal;
            }

          }

        }
      }
    }
  }

}
</style>
