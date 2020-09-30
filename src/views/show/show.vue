<!--烘焙圈-->
<template>
  <div class="container">
    <!-- 头部导航 -->
    <div class="header">
      <div class="plus">
        <span class="icon iconfont">&#xe641;</span>
      </div>
      <div class="text">
        <div><span>关注</span></div>
        <div><span>最新</span></div>
        <div><span>达人</span></div>
      </div>
      <div class="lingdang">
        <span class="icon iconfont">&#xe600;</span>
      </div>
    </div>
    <!-- 头部下方的红线 -->
    <div class="line">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "show"
  }
</script>

<style scoped lang="scss">
  // 头部的样式
  .header {
    display: flex;
    background: #FFFFFF;
    height: 88px;
    z-index: 6;
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
    }
  }
  // 头部的线
  .container .line {
    position: relative;
  }
  .container .line .line1 {
    width: 40px;
    height: 4px;
    margin: 10px ;
    background-color: #E98B71;
    position:absolute;
    right: 210px;
    top:70px;
    z-index: 99;
  }
  .container .line .line2 {
    width: 40px;
    height: 4px;
    margin: 10px ;
    background-color: #E98B71;
    position:absolute;
    left:350px;
    top:70px;
    z-index: 99;
  }
  .container .line .line3 {
    width: 40px;
    height: 4px;
    margin: 10px ;
    background-color: #E98B71;
    position:absolute;
    left:220px;
    top:70px;
    z-index: 99;
  }
  
</style>