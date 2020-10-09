<template>
  <div class="outer">
    <div class="top">
      <div class="back">
        <img
            src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48|imageView2/1/w/48/h/48"
            alt="">
      </div>
      <div class="nav">
        <div class="item" :class="{active:activeId===0}">学霸榜</div>
        <div class="item" :class="{active:activeId===1}">最新</div>
      </div>
    </div>
    <div class="main">
      <home-work :OutstandingContent="activeId?CourseContent:OutstandingCourseContent"/>
    </div>
  </div>
</template>

<script>
import homeWork from '@/components/homeWork'
export default {
  name: "dishrank",

  data () {
    return {
      activeId: 0,
    //  学员作业中最新作业
      CourseContent:[],
    //  学霸的作业
      OutstandingCourseContent:[],
    //  请求开关，防止重复请求
      flag:true
    }
  },
  methods:{
    //  获得学员作业
    async getOutstandingCourseContent () {
      if (!this.flag) return
      this.flag = false
      const {data} = await this.$axios.get(`/dish/getOutstandingCourseContent?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&educationCourseId=${this.contentId}`)
      this.pageIndex += this.pageSize
      this.flag = true
      this.OutstandingContent.push(...data.data.content.data)
    },
  },
  beforeMount () {
    this.getOutstandingCourseContent()
  },
  components:{
    "homeWork":homeWork
  }
}
</script>

<style scoped lang="scss">
.outer {
  .top {
    display: flex;
    padding: 0 36px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;

    .back {
      img {
        width: 54px;
        height: 54px;
        margin: 19px 0;
      }
    }

    .nav {
      width: 260px;
      height: 88px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      font-size: 32px;

      .item {
        color: #999999;

        &.active {
          color: #4A4945;
          font-weight: bold;
        }
      }
    }
  }
  .main{
    margin-top: 88px;
  }
}
</style>