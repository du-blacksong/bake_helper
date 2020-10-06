<template>
  <div class="outer">
    <LessonTitle :title="'试看步骤: '+Course.trySeeTitle" :videoUrl="Course.trySeeUrl"/>
    <div class="stuWork">
      <div class="head">
        <div class="title">学生作业</div>
        <div class="seeMore">查看更多</div>
      </div>
      <div class="imglist">
        <img v-for="item in stuwork" :key="item.contentId" :src="item.image[0]" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import LessonTitle from '@/components/LessonTitle'

export default {
  name: "lesson",
  data () {
    return {
      //课程信息
      Course: {},
    //  学生作业
      stuwork:[]
    }
  },
  methods: {
    //获取课程信息
    async getCourse(){
      const {data} = await this.$axios.get(`/education/getCourse?educationCourseId=${this.$route.query.contentId}`)
      this.Course = data.data
    },
  //  获取学生作业
    async getOutstandingCourseContent(){
      const {data} = await this.$axios.get(`/dish/getOutstandingCourseContent?pageIndex=0&pageSize=4&educationCourseId=${this.$route.query.contentId}`)
      this.stuwork = data.data.content.data
    }
  },
   beforeMount () {
    this.getCourse()
     this.getOutstandingCourseContent()

  },
  components: {
    "LessonTitle": LessonTitle
  }
}
</script>

<style scoped lang="scss">
.outer {
  background-color: #F5F7F9;

  .stuWork {
    background-color: white;
    .head{
      .title{}
      .seeMore{}
    }
    .imglist{
      img{}
    }
  }
}

</style>