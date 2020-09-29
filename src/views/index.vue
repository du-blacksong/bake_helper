
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
      <div>
        <router-link to="baike">技巧百科</router-link>
        <router-link to="university">视频学堂</router-link>
        <router-link to="lessonSeries?contentId=10533">新手教程</router-link>
        <router-link to="classify">食谱分类</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "index",
  data(){
    return{
      navList:[]
    }
  },
  mounted() {
    this.$axios('/index/get')
  }
}
</script>

<style scoped lang="scss">
.home{

  .topSearch{
    top: 0;
    position: fixed;
    height: 88px;
    line-height: 88px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    i{
      width: 136px;
      font-size: 44px;
      color: #333333;
    }
    .text{
      flex: 1;
      height: 70px;
      line-height: 60px;
      margin-top: 9px;
      width: 478px;
      padding: 0 20px;
      background-color: #f5f7f9;
      overflow: hidden;
      color: #999999;
      overflow:hidden;
      word-break:keep-all;
      white-space:nowrap;
      text-overflow:ellipsis;
      span{
        i{
          font-size: 36px;
          margin: 10px;
        }
        font-size: 24px;
      }
    }
  }
  .homeContent{
    margin-top: 88px;
  }
}
</style>
