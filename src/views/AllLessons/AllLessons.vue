<template>

  <div class="main">
    <div class="item" v-for="item in showList" :key="item.educationCourseId"
         @click="goToLesson(item.educationCourseId)">
      <img :src="item.verticalImages[0]">
      <span class="buy" v-if="item.buyNum>1000">1000+人参与</span>
      <span class="buy" v-else>{{item.buyNum}}人参与</span>
      <span class="title">{{item.title}}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "AllLessons",
  async mounted() {
    console.log(this.$router.history.current.query.categoryId)
    const showList = await this.$axios(`/index/getIndexItem?&categoryId=${this.$router.history.current.query.categoryId}`)
    this.showList = showList.data.data
  },
  data(){
    return {
      showList:[] //其他页展示的菜单
    }
  },
  methods:{
    goToLesson(courseId){
      console.log(courseId)
      this.$router.push(`/lesson?contentId=${courseId}`)
    }
  }
}
</script>

<style scoped lang="scss">
.main{
  margin: 0 0 0 40px;
  overflow: hidden;
  position: relative;
  padding-top: 30px;
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
</style>
