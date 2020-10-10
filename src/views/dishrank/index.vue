<template>
  <div class="outer">
    <Loading v-if="OutstandingCourseContent.length===0"/>
    <template v-else>
      <div class="top">
        <div class="back" @click="back">
          <img
              src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48|imageView2/1/w/48/h/48"
              alt="">
        </div>
        <div class="nav">
          <div class="item" @click="active(0)" :class="{active:activeId===0}">学霸榜</div>
          <div class="item" @click="active(1)" :class="{active:activeId===1}">最新</div>
        </div>
      </div>
      <div class="main">
        <home-work v-if="activeId===0" :method="getOutstandingCourseContent" :OutstandingContent="OutstandingCourseContent" />
        <home-work v-else-if="activeId===1" :method="getCourseContent" :OutstandingContent="CourseContent" />
      </div>
    </template>

  </div>
</template>

<script>
import homeWork from '@/components/homeWork'
import Loading from '@/components/Loading/Loading'
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
      flag:true,
    //  学霸作业的页数
      xbindex:0,
    //  学员作业页数
      stuindex:0,
      pageSize:10
    }
  },
  methods:{
    //返回
    back(){
      this.$router.back()
    },
    //切换作业
    active(id){
      this.activeId=id
    },
    //  获得学霸作业
    async getOutstandingCourseContent () {
      if (!this.flag) return
      this.flag = false
      const {data} = await this.$axios.get(`/dish/getOutstandingCourseContent?pageIndex=${this.xbindex}&pageSize=${this.pageSize}&educationCourseId=${this.$route.query.contentId}`)
      this.xbindex += this.pageSize
      this.flag = true
      this.OutstandingCourseContent.push(...data.data.content.data)
    },
    //  获得学霸作业
    async getCourseContent () {
      console.log(11)
      if (!this.flag) return
      this.flag = false
      const {data} = await this.$axios.get(`/dish/getCourseContent?pageIndex=${this.stuindex}&pageSize=${this.pageSize}&educationCourseId=${this.$route.query.contentId}`)
      this.stuindex += this.pageSize
      this.flag = true
      this.CourseContent.push(...data.data.content.data)
    },
  },
  async beforeMount () {
    await this.getOutstandingCourseContent()
    await this.getCourseContent()
  },
  components:{
    "homeWork":homeWork,
    Loading
  },
  destroyed () {
    this.OutstandingCourseContent=[]
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