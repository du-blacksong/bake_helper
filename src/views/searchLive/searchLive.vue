<template>
  <div class="wrap">
    <div class="headerWrap">
    <!-- 搜索框 -->
      <div class="search">
         <img @click="toBack" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="">
        <div class="searchInput">
          <input v-model="keyword" :placeholder="keyword"/>
          <i class="iconfont icon-sousuo fangda"></i>
          <img src="../../static/images/del.jpg" class="del" v-show="keyword" @click="delkey">
        </div>
      </div>
    </div>

    <!-- 搜索到的课程内容 -->
    <div class="content">
      <div class="item" v-for="item in lessonList">
        <img :src="item.verticalImages[0]">
        <span class="buy" v-if="item.buyNum>1000">1000+人参与</span>
        <span class="buy" v-else>{{item.buyNum}}人参与</span>
        <span class="title">{{item.shareTitle}}</span>
      </div>
    </div>

    <div class="tj" v-if="recommendList.length>0">
      <img  src="https://image.hongbeibang.com/Group3%20%281%29.png?imageMogr2/strip/thumbnail/640x640" >
    </div>

    <!-- 帮友推荐 -->
    <div class="content">
      <div class="item" v-for="item in recommendList">
        <img :src="item.coverImage">
        <span class="buy" v-if="item.buyNum>1000">1000+人参与</span>
        <span class="buy" v-else>{{item.buyNum}}人参与</span>
        <span class="title">{{item.coverTitle}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll"
export default {
  name: 'searchLive',
  data(){
    return {
      keyword:'',//输入框的关键字
      lessonList:[],//课程详情
      recommendList:[],//帮友推荐
    }
  },
  async mounted () {
    /* 根据搜索关键词发请求获取数据 */
    let keyword=this.$route.query.keyword
    console.log(keyword)
    let {data}=await this.$axios(`search/getMoreCourse?pageIndex=0&pageSize=10&keyword=${keyword}`)
    this.lessonList=data.data.search.list.course.data
    this.keyword=keyword
    //console.log(data.data.search.list.course.data)

    // 帮友推荐数据
    let res=await this.$axios(`recommend/getRandContent?type=5&pageSize=50`)
    console.log(res.data.data.data)
    this.recommendList=res.data.data.data
  },
  methods: {
    /* 回退 */
    toBack(){
      this.$router.back(-1)
    },
    /* 点击×删除搜索框内容 */
    delkey(){
      this.keyword = ''
    },
    
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
  background: #F5F7F9;
      /* 头部搜索 */
  .headerWrap {

  width: 100%;
  position: fixed;
  margin-bottom: 10px;
  background: #fff;
  z-index: 999;
  .search{
    height: 88px;
    line-height: 88px;
    text-align: center;
    margin: 20px 40px;
    display: flex;
    img{
        width: 60px;
      height: 60px;
      margin: 10px 0;
    }
    .searchInput{
      position: relative;
      flex: 1;
      height: 70px;
      line-height: 70px;
      text-align: center;
      border-radius: 8px;
      background-color: #F5F7F9;
      margin: 0 40px;
      padding: 0 10px;
      box-sizing: border-box;
      overflow: hidden;
      cursor: pointer;
      input{
        width: 100%;
        height: 100%;
        font-size: 28px;
        color: #4A4945;
        border: none;
        padding-left:60px;
        background: none;
      }
      .del{
        position: absolute;
        right: 50px;
        top:-5px;
        width: 70px;
        height: 70px;
        }
      i{
        position: absolute;
        left: 20px;
        top: 5px;
        font-size: 32px;
       
        }

    }
    .right{
      margin: -8px 0;
      font-size: 32px;
      color:#4A4945
    }
  }

}
.tj{
  margin:40px;
  img{
    width: 370px;
    margin:0 50px 0 130px;
  }

}
  .content{
    padding: 0 0 0 40px;
    overflow: hidden;
    position: relative;
    padding-top: 110px;
    background: #fff;
    .item{
      width: 324px;
      height: 610px;
      overflow: hidden;
      display: inline-block;
      vertical-align: top;
      padding-bottom: 48px;
      box-sizing: border-box;
      margin-right: 22px;
      position: relative;
      img{
        width: 324px;
        height: 450px;
        background-position: center;
        border-radius:8px;
      }
      .buy{
        display: block;
        background-color: white;
        top: 400px;
        left: 20px;
        position: absolute;
        font-size: 22px;
        color: #4A4945;
        width: 160px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 10px;
      }
      .title{
        margin-top: 10px;
        color: #4A4945;
        font-weight: bold;
        font-size: 30px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: normal;
        width: 324px;
        height: 85px;
      }
    }
  }

}

</style>
