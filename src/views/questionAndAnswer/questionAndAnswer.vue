<!--问答-->
<template>
<div class="wrap">
  <div class="headerWrap">
    <div class="search">
      <span class="left">提问</span>
      <div class="searchInput">
        <span>搜索问题</span>
      </div>
      <span class="iconfont icon-lingdang"></span>
    </div>
    <div class="tabTitle">
      <router-link class="tab" active-class="active" to="/questionAndAnswer">精华问答</router-link>
      <router-link class="tab" active-class="active" to="/questionAndAnswer/news">最新问题</router-link>
      <router-link class="tab" active-class="active" to="/questionAndAnswer/hot">最热问题</router-link>
    </div>
  </div>
  <div class="questionWrap">
   <router-view></router-view>
  </div>
  
</div>
</template>

<script>
export default {
  name: "questionAndAnswer",

}
</script>

<style lang="scss" scoped>
/* 头部 */
.wrap{
  position: relative;
    .headerWrap {
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    .search{
      height: 88px;
      line-height: 88px;
      text-align: center;
      margin: 20px 40px;
      display: flex;
      .left{
        font-size: 32px;
        color: #E98B71;
      }
      .searchInput{
        flex: 1;
        height: 80px;
        line-height: 70px;
        text-align: center;
        border-radius: 8px;
        background-color: #F5F7F9;
        margin: 0 40px;
        padding: 0 20px;
        box-sizing: border-box;
        cursor: pointer;
        span{
          font-size: 28px;

          color: #4A4945;
        }
      }
      .icon-lingdang{
        font-size: 44px;
      
      }
    }
    .tabTitle{
      display: flex;
      justify-content: space-around;
      .tab{
        font-size: 28px;
        padding-bottom: 8px;
        color: #999;
       
      }
      .tab.exactActive{
          color: #4A4945;
          font-weight: bold;;
          border-bottom: 4px solid  #E98B71;
        }
  }
  }
}


  
/* 问答区 */
  .questionWrap{
    margin-top: 160px;
    padding: 30px 30px;

  }
</style>
