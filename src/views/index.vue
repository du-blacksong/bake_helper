<template>
  <!-- 首页 -->
  <div class="home">
    <!--    顶部搜索栏-->
    <div class="topSearch">
      <i class="iconfont icon-jia"></i>
      <div class="text" @click="toSearch">
        <span><i class="iconfont icon-sousuo"></i>搜索食谱/食材，烘焙/家常菜一应俱全</span>
      </div>
      <i class="iconfont icon-lingdang"></i>
    </div>

    <!--  顶部导航栏-->
    <div class="topNavContent">
      <div class="topNav" v-if="navList.length">

        <router-link to="baike" class="navTapItem">
          <img :src="navList[0].image"></img>
          <span>{{navList[0].title}}</span>
        </router-link>
        <router-link to="university" class="navTapItem">
          <img :src="navList[1].image"></img>
          <span>{{navList[1].title}}</span>
        </router-link>
        <router-link to="/lessonSeries?contentId=10533" class="navTapItem">
          <img :src="navList[2].image"></img>
          <span>{{navList[2].title}}</span>
        </router-link>
        <router-link to="classify" class="navTapItem">
          <img :src="navList[3].image"></img>
          <span>{{navList[3].title}}</span>
        </router-link>
      </div>
    </div>

    <!--    主体内容-->
    <div class="main">
      <!--      推荐课程-->
      <div class="recommend">
        <div class="title">推荐课程</div>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="item in recommendList" :key="item.contentId">
              <img :src="item.coverImage">
              <div class="itemTitle">{{item.coverTitle}}</div>
            </li>
          </ul>
        </div>
      </div>

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
              <div class="itemTitle">{{item.shareTitle}}</div>
            </li>
          </ul>
        </div>
      </div>


      <!--底部版权说明-->
      <div class="footer">
        <div>Copyright © hongbeibang.com 粤ICP备14090926号-1</div>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060602001356">
          <img src="../static/images/guohui.jpg">
          <span>粤公网安备 44060602001356号</span>
        </a>
      </div>
    </div>

  </div>

</template>

<script>
import BetterScroll from 'better-scroll'
import router from "@/router";

export default {
  name: "index",
  data() {
    return {
      navList: [],
      recommendList:[], // 推荐
      indexMemuList:[] //主页展示的菜单

    }
  },
  async mounted() {
    //获取顶部导航数据
    const {data} = await this.$axios('/index/get')
    const navList = data.data.category[0].item
    this.navList = navList

    //获取推荐课程列表
    const recommendList = await this.$axios('/recommend/getRandContent?&type=3&pageSize=10')
    // console.log(recommendList.data.data.data)
    this.recommendList = recommendList.data.data.data

    //获取主页菜单列表
    const indexMemuList = await this.$axios('/education/getIndexByWeb')
    // console.log(indexMemuList.data.data.category.slice(1,10))
    this.indexMemuList = indexMemuList.data.data.category.slice(1,10)

    // // 滚动
    this.$nextTick(() => {
      let wrapper = document.querySelectorAll('.pic-wrapper')
      console.log(wrapper[0])
      for(let i=0;i<wrapper.length;i++){
        new BetterScroll(wrapper[i], {click: true, scrollX: true ,eventPassthrough: 'vertical'})
      }
      // new BetterScroll(wrapper[1], {click: true, scrollX: true});
    })

  },
  methods:{
    //点击搜索框跳转到搜索页面
    toSearch(){
      router.push('/search')
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  overflow: hidden;

  .topSearch {
    z-index: 999;
    background-color: white;
    top: 0;
    position: fixed;
    height: 88px;
    line-height: 88px;
    display: flex;
    justify-content: space-around;
    text-align: center;

    i {
      width: 136px;
      font-size: 44px;
      color: #333333;
    }

    .text {
      flex: 1;
      height: 70px;
      line-height: 60px;
      margin-top: 9px;
      width: 478px;
      padding: 0 20px;
      background-color: #f5f7f9;
      overflow: hidden;
      color: #999999;
      overflow: hidden;
      word-break: keep-all;
      white-space: nowrap;
      text-overflow: ellipsis;

      span {
        i {
          font-size: 36px;
          margin: 10px;
        }

        font-size: 24px;
      }
    }
  }

  .topNavContent {
    margin-top: 108px;

    .topNav {

      display: flex;
      justify-content: space-around;

      .navTapItem {
        display: flex;
        flex-direction: column;
        text-align: center;

      }

      img {
        width: 90px;
        height: 90px;
        margin-bottom: 5px;
      }

      span {
        font-size: 24px;
        color: #4A4945;;
      }
    }
  }

  .main {
    margin-top: 60px;
    padding-bottom: 98px;
    .clearfix::before,.clearfix::after{
      content: '';
      display: table;
      clear: both;
    }

    .recommend {
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
            display: inline-block;
            margin-right: 20px;
            img{
              width: 320px;
              height: 450px;
              border-radius: 8px;
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

    .footer{
      height: 138px;
      background-color: #f5f7f9;
      font-size: 26px;
      color: #939393;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px 40px;
      div{
        height: 40px;
      }
      a{
        height: 40px;
        color: #939393;
      }
    }

  }



}
</style>
