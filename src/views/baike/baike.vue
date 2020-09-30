<!--百科-->
<template>
  <div class="outer">
    <div class="top">
      <span @click="backToindex">
        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="">
      </span>

    </div>
    <div class="imglist">
      <div class="item" v-for="(item,index) in baikeList" :key="item.courseId">
        <img :src="item.image">
        <div class="desc">{{item.title}}</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "baike",
  data(){
    return{
      baikeList:[]
    }
  },
  async beforeMount () {
    const {data}=await this.$axios.get(`/education/getNewbieGuide?type=${this.random()}`)
    this.baikeList=data.data.courseGuide
  },
  methods:{
    random(){
      return Math.floor(Math.random()*8 + 1)
    },
    backToindex(){
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.outer {
  .top {
    width: 100%;
    top: 0;
    padding: 0 36px;
    position: fixed;
    background-color: white;
    z-index: 9;
    span {
      img {
        width: 54px;
        height: 54px;
        margin: 19px 0;
      }
    }
  }

  .imglist {
    margin-top: 108px;
    .item{
      &:first-child {
        border-top-color: #FFF;
      }
      padding: 30px 0;
      margin: 0 30px;
      display: flex;
      height: 224px;
      border-top: 1px solid #F5F7F9;
      img{
        width: 260px;
        height: 160px;
      }
      .desc{
        width: 400px;
        height: 150px;
        margin-left: 30px;
        margin-top: 10px;
        font-size: 32px;
        line-height: 45px;
        color: #313131;
      }
    }
  }
}
</style>
