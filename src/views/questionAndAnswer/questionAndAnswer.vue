<!--问答-->
<template>
<div class="wrap">
  <!-- 头部 -->
  <div class="headerWrap">
    <!-- 搜索框 -->
    <div class="search">
      <span class="left">提问</span>
      <div class="searchInput">
        <span>搜索问题</span>
      </div>
      <span class="iconfont icon-lingdang"></span>
    </div>
    <!-- 点击的标题 -->
    <div class="tabTitle">
      <a class="tab" :class="{active:ShowEssence}" @click="Show('essence')">精华问答</a>
      <a class="tab" :class="{active:ShowNews}" @click="Show('news')">最新问题</a>
      <a class="tab" :class="{active:ShowHot}" @click="Show('hot')">最热问题</a>
    </div>
  </div>
  <!-- 内容部分 -->
  <div class="scrollWrap" ref="scrollWrap">

        <!-- 精华问答 -->
        <Essence class="questionWrap" v-if="ShowEssence"/>
        <!-- 最新问题 -->
        <News class="questionWrap" v-if="ShowNews"/>
        <!-- 最热问题 -->
        <Hot  class="questionWrap" v-if="ShowHot"/>

  </div>
</div>
</template>

<script>
import Essence from '../questionAndAnswer/essence/essence'
import Hot from "../questionAndAnswer/hot/hot.vue"
import News from "../questionAndAnswer/news/news.vue"
import BScroll from 'better-scroll'
export default {
  name: "questionAndAnswer",
  data(){
    return {
      ShowEssence:true, //显示精华
      ShowNews:false, //显示最新
      ShowHot:false //显示最热
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.scrollWrap,{click: true,scrollY:true})
    //   console.log(this.scroll)
    // })

  },
  methods: {
    /* 点击显示对应的内容 */
    Show(flag){
      if(flag==='essence'){
        this.ShowEssence=true
        this.ShowNews=false
        this.ShowHot=false
      }else if(flag==='news'){
        this.ShowEssence=false
        this.ShowNews=true
        this.ShowHot=false
      }else if(flag==='hot'){
        this.ShowEssence=false
        this.ShowNews=false
        this.ShowHot=true
      }

    }
  },
  components: {
    Essence,
    Hot,
    News
  }
}
</script>

<style lang="scss" scoped>
/* 头部 */
.wrap{
  position: relative;
    .headerWrap {
      z-index: 999;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    margin-bottom: 10px;
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
      .tab.active{
          color: #4A4945;
          font-weight: bold;;
          border-bottom: 4px solid  #E98B71;
        }
  }
  }
}



/* 问答区 */
.scrollWrap{
  margin-top: 170px;
  width: 100%;
  overflow: hidden;
  // height:1100px;
.questionWrap{
   
    padding: 30px 30px;
   
  }
}

</style>
