<template>
  <!-- 首页 -->
  <div class="home">
    <!--    顶部搜索栏-->
    <div class="topSearch">
      <i class="iconfont icon-jia"></i>
      <div class="text">
        <span><i class="iconfont icon-sousuo"></i>搜索食谱/食材，烘焙/家常菜一应俱全</span>
      </div>
      <i class="iconfont icon-lingdang"></i>
    </div>
    <!--  顶部导航栏-->
    <div class="homeContent">
      <div class="topNav" v-if="navList.length">

        <router-link to="baike"  class="navTapItem" >
          <img :src="navList[0].image"></img>
          <span>{{navList[0].title}}</span>
        </router-link>
        <router-link to="university"  class="navTapItem" >
          <img :src="navList[1].image"></img>
          <span>{{navList[1].title}}</span>
        </router-link>
        <router-link to="/lessonSeries?contentId=10533"  class="navTapItem" >
          <img :src="navList[2].image"></img>
          <span>{{navList[2].title}}</span>
        </router-link>
        <router-link to="classify"  class="navTapItem" >
          <img :src="navList[3].image"></img>
          <span>{{navList[3].title}}</span>
        </router-link>


        <!--        <router-link to="baike">技巧百科</router-link>-->
        <!--        <router-link to="university">视频学堂</router-link>-->
        <!--        <router-link to="lessonSeries?contentId=10533">新手教程</router-link>-->
        <!--        <router-link to="classify">食谱分类</router-link>-->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "index",
  data() {
    return {
      navList: []
    }
  },
  async mounted() {
    //获取顶部导航数据
    const {data} = await this.$axios('/index/get')
    const navList = data.data.category[0].item
    this.navList = navList
  }
}
</script>

<style scoped lang="scss">
.home {
  .topSearch {
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

  .homeContent {
    margin-top: 108px;

    .topNav {

      display: flex;
      justify-content: space-around;
      .navTapItem{
        display: flex;
        flex-direction: column;
        text-align: center;

      }
      img{
        width: 90px;
        height: 90px;
        margin-bottom: 5px;
      }
      span{
        font-size: 24px;
        color: #4A4945;;
      }
    }
  }
}
</style>
