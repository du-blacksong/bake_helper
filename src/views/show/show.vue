<!--烘焙圈-->
<template>
  <div class="container">
    <!-- 头部导航 -->
    <div class="header">
      <div class="plus">
        <span class="icon iconfont">&#xe641;</span>
      </div>
      <div class="text">
        <div>
          <span>关注</span>
        </div>
        <div>
          <span>最新</span>
        </div>
        <div>
          <span>达人</span>
        </div>
      </div>
      <div class="lingdang">
        <span class="icon iconfont">&#xe600;</span>
      </div>
    </div>
    <!-- 关注详情 -->
    <div class="subscription">
      <div class="subscriptionDetail">暂无关注</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "show",
    data(){
      return {
        showSubscription:ture
      }
    },
  }
</script>

<style scoped lang="scss">
  .container {
    position: relative;
  }
  // 头部的样式
  .header {
    display: flex;
    background: #FFFFFF;
    height: 88px;
    // z-index: 6;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // padding: 0 36px;
    margin: 17px auto;
    max-width: 600px;
    box-sizing: border-box;
    text-align: center;
    .plus .iconfont{
      font-size:44px;
      cursor: pointer;
      text-align: center;
      color: #999999;
    }
    .lingdang .iconfont{
      font-size:44px;
      cursor: pointer;
      text-align: center;
      color: #999999;
    }
    .text {
      display: flex;
      line-height:80px;
      height: 80px;
      margin: -10px 65px; 
    }
    .text div{
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    width: 130px;
    line-height: 88px;
    height: 88px;
    font-size: 32px;
    color: #999999;
    }
    .text span{
      font-size:32px;
      font-weight:bold;
      text-align: center;
      cursor: pointer;
      border-bottom:5px solid #E98B71;
      display: inline-block;
      margin-bottom:5px;
      padding:0 4px;
      border-radius:3px;
    }
  }
//  关注详情
.subscription{
  position: absolute;
  height: 1124px;
  width: 100%;
  background-color:rgb(242, 245,248);
  top:110px;
  .subscriptionDetail{
    font-size: 28px;
    line-height: 40px;
    color: #999999;
    margin: 40px auto;
    text-align: center;
  }
}
  
  
  
</style>