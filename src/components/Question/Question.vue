//最新问题和最热问题共用组件封装
<template>
<div class="outer">
  <div class="questionsWrap" v-for="(item, index) in news" :key="index">
      <div>
          <a class="questionTitle" href="">{{item.coverTitle}}</a>
      </div>
      <div @click="toFoodDetail(item.recipeContentId)" class='questionsContent'>
          <img :src="item.recipe.image" alt="" class='imgWrap'>
          <div class="rightContent">
              <div class='contentTitle'>{{item.recipe.title}}</div>
              <div class="author">作者：{{item.recipe.clientName}}</div>
          </div>
      </div>
      <div class='questionsBottom'>
            <div class='answerNumber'>{{item.answerNum ===0? `暂无回答 ` :item.answerNum+'个回答'}}</div>
          <img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt="">
          <div class='answerWrite'>写答案</div>
      </div>
  </div>
  <div id="flag">
    <img src="../../static/images/loding.gif">
      加载中...
  </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
import router from "../../router"
export default {
    name: 'Question',
    props:{
        news:{
            type:Array
        },
        method:{
            type:Function
        }
    },
    mounted () {
    window.addEventListener("scroll",this.handleScroll)
    },
    methods: {
          //  无限滚动的回调
    handleScroll(e) {
  const flag=document.querySelector('#flag')
      // console.log("top",top)
      // console.log("bottom",flag.getBoundingClientRect().bottom)
  //    元素底部距离视口顶部的距离
//   console.log(~~(flag.getBoundingClientRect().top));
  if (~~(flag.getBoundingClientRect().top)<725){
    this.method()
  }
},
toFoodDetail(contentId){
    this.$router.push(`/foodDetail?contentId=${contentId}`)
    console.log(111)
}
    },
    // 离开页面销毁监听事件；
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, false);
  },
}
</script>
<style scoped lang="scss">
.outer{
    padding-bottom :100px;
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
     font-weight: bold;
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
      margin-bottom: 10px;
      margin-top: 10px;

      .imgWrap{
          width: 140px;
          height: 140px;
          border-radius: 8px;
      }
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
  #flag {
  width: 100%;
  height: 63px;
  line-height: 63px;
  text-align: center;
  font-size: 32px;
  background: #F5F7F9;
  img{
    width: 40px;
    height: 40px;
  }
} 
}
</style>