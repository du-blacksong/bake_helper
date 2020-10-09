//最新问题和最热问题共用组件封装
<template>
  <div class="questionsWrap">
      <div>
          <a class="questionTitle" href="">这个厨房用纸是什么纸啦，不懂，可以不用厨房用纸吗</a>
      </div>
      <div class='questionsContent'>
          <img src="https://image.hongbeibang.com/FkpcYcxGZV8WTrOFNGiy-6_eHv5d?912X600&imageView2/1/w/70/h/70" alt="">
          <div class="rightContent">
              <div class='contentTitle'>鲜奶肉松包</div>
              <div class="author">在第12个步骤提问</div>
          </div>
      </div>
      <div class='questionsBottom'>
          <div class='answerNumber'>暂无回答</div>
          <img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt="">
          <div class='answerWrite'>写答案</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Question',
}
</script>
<style scoped lang="scss">
.questionsWrap{
      position: relative;
      overflow: hidden;
      zoom: 1;
      background-color: #FFFFFF;
      border-bottom: 2px solid;
      border-bottom-color: #E7E2E5;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 30px 0 20px 0;
    .questionTitle{
      font-size:36px;
      color: #4A4945;
      text-decoration: none;
    }
    .questionsContent{
      position: relative;
      overflow: hidden;
      zoom: 1;
      background-color: #F5F7F9;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
    }
    .rightContent{
      display: inline-flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      margin-left: 30px;
      .contentTitle{
        font-size: 28px;
        color: #313131;
        font-weight: bold;
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
      .author{
        margin-top: 10px;
        font-size: 26px;
        color: #999;
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
    }
    .questionsBottom{
      display: flex;
      overflow: hidden;
      font-size: 28px;
      line-height: 20px;
      color: #999999;
      box-sizing: border-box;
      margin-top: 20px;
      .answerNumber{
          color: #498DD0;
          margin-top: 15px;
          margin-bottom:15px;
          flex:1
      }
      img{
       width: 38px;
       height: 38px;
       display: inline-block;
       vertical-align: middle;
       margin-right: 10px;
       font-size: 0;
      }
      .answerWrite{
        font-size: 28px;
        line-height: 40px;
        vertical-align: middle;
        display: inline-block;
        color: #E98B71;
      }
    }

}
</style>