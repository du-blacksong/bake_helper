<template>
  <div class="questionItem">
    <div class="user">
      <img src="./img/avatar.png" alt="">
      <div class="username">考拉</div>
    </div>
    <div class="title">马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下</div>
    <div class="content">马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下马芬，戚风，舒芙蕾，海绵蛋糕，它们的区别在哪？哪个达人能总结一下</div>
    <div class="like">487个赞</div>
  </div>
</template>

<script>
export default {
  name: 'essence',
  data(){
    return {
      essenceList:[], //精华问答
      pageIndex:0, //当前页码
    }
  },
  mounted () {
    
  },
  methods: {
    getEssenceList(){
      // const {data}=await $axios(`question/getEssence?pageIndex=${pageIndex}&pageSize=10`)

    }
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
</style>

