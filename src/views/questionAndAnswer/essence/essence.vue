<template>
  <div>
    <div class="questionItem" v-for="item in essenceList">
      <div class="user">
        <img :src="item.clientImage" alt="">
        <div class="username">{{item.clientName}}</div>
      </div>
      <div class="title">{{item.coverTitle}}</div>
      <div class="content">{{item.coverSummary}}</div>
      <div class="like">{{item.hotNum}}个赞</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: 'essence',
  data(){
    return {
      essenceList:[], //精华问答
      pageIndex:0, //当前页码
    }
  },
  mounted () {
    this.getEssenceList()
  },
  methods: {
    /* 请求精华问答数据 */
    async getEssenceList(){
      const {data}=await this.$axios(`question/getEssence?pageIndex=${this.pageIndex}&pageSize=10`)
      //console.log(data.data.content.data)
      this.essenceList=data.data.content.data

      this.$nextTick(() => {
        let wrapper = document.querySelector('.scrollWrap')
        this.scroll = new BScroll(wrapper,{click: true,scrollY:true})
        console.log(this.scroll)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
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
        color:#4A4945;
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
      // height: 120px;
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
</style>

