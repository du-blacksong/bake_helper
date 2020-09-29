<!--问答-->
<template>
<div class="wrap">
  <div class="headerWrap">
    <div class="search">
      <span class="left">提问</span>
      <input type="text" placeholder="搜索问题"/>
      <span class="iconfont icon-lingdang"></span>
    </div>
    <div class="tabTitle">
      <a>精华问答</a>
      <a>最新问题</a>
      <a>最热问题</a>
    </div>
  </div>
  <div class="questionWrap">
    <div class="questionItem">
      <div class="user">
        <img src="./img/avatar.png" alt="">
        <div class="username">考拉</div>
      </div>
      <div class="title">马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下</div>
      <div class="content">马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下</div>
      <div class="like">487个赞</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "questionAndAnswer"
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
      input{
        flex: 1;
        height: 80px;
        border-radius: 8px;
        background-color: #F5F7F9;
        margin: 0 40px;
        padding: 0 20px;
        border: none;
        box-sizing: border-box;
        cursor: pointer;
      }
      .icon-lingdang{
        font-size: 44px;
      
      }
    }
    .tabTitle{
      display: flex;
      justify-content: space-around;
      a{
        font-size: 28px;
        color: #999;
      }
  }
  }
}


  
/* 问答区 */
  .questionWrap{
    margin-top: 160px;
    padding: 30px 30px;
    .questionItem{

      border-bottom: 1px #eee solid;
      .user{
        display: flex;
        margin:20px 0;
        img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        .username{
          font-size: 24px;
          height: 80px;
          line-height: 80px;
          margin-left: 24px;
        }
      }
      .title{
        line-height: 50px;
        font-size: 36px;
        font-weight: bold;
        color:#4A4945;
        margin-bottom: 10px;
      }
      .content{
        height: 120px;
        font-size: 28px;
        color:#4A4945;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .like{
        height: 60px;
        font-size: 28px;
        line-height: 28px;
        color: #999;
        margin-top:20px;
      }
    }
  }
</style>
