<!--从lessonSeries跳转过来要带上isHideBottom-->
<template>
  <div class="outer">

    <LessonTitle :title="$route.query.isHideBottom==='1'?'试看步骤: '+Course.trySeeTitle:Course.title" :videoUrl="Course.trySeeUrl?Course.trySeeUrl:Course.playURL"/>
    <div class="stuWork" @click="goTodishrank">
      <div class="head">
        <div class="title">学生作业</div>
        <div class="seeMore">查看更多</div>
      </div>
      <div class="imglist">
        <img v-for="item in stuwork" :key="item.contentId" :src="item.image[0]" alt="">
      </div>
    </div>
    <div class="introduce" v-if="Course.introduces">
      <div class="title">{{Course.introduces[0].title}}</div>
      <div class="desc" v-html="Course.introduces[0].introduce"></div>
      <div class="title">{{Course.introduces[1].title}}</div>
      <div class="desc" v-html="Course.introduces[1].introduce"></div>
    </div>
    <div class="teacherIntroduce">
      <div class="title">导师介绍</div>
      <div class="teacher">
        <img :src="Course.teacherImage" alt="">
        <div class="name">{{Course.teacherName}}</div>
      </div>
      <div class="desc" v-html="Course.teacherIntroduce"></div>
    </div>
    <videoScroll v-if="Course.clientId"  title="导师的其他课程" :recommend-list="ClientOtherCourse" :clientid="Course.clientId"/>
    <div class="hpbdesc">
      <hpbDesc/>
    </div>
<LessonBottom v-if="$route.query.isHideBottom!=='1'" :old-price="Course.originPrice" :new-price="Course.price"/>
  </div>
</template>

<script>
import LessonTitle from '@/components/LessonTitle'
import videoScroll from "@/components/videoScroll";
import hpbDesc from "@/components/hpbDesc";
import LessonBottom from "@/components/LessonBottom";

export default {
  name: "lesson",
  data () {
    return {
      //课程信息
      Course: {},
      //  学生作业
      stuwork: [],
      //  导师其他课程
      ClientOtherCourse: []
    }
  },
  methods: {
    //去学生作业页面
    goTodishrank(){
      this.$router.push('/dishrank?contentId='+this.$route.query.contentId)
    },
    //获取课程信息
    async getCourse () {
      const {data} = await this.$axios.get(`/education/getCourse?educationCourseId=${this.$route.query.contentId}`)
      this.Course = data.data
    },
    //  获取学生作业
    async getOutstandingCourseContent () {
      const {data} = await this.$axios.get(`/dish/getOutstandingCourseContent?pageIndex=0&pageSize=4&educationCourseId=${this.$route.query.contentId}`)
      this.stuwork = data.data.content.data
    },
    //  获取导师其他课程
    async getClientOtherCourse () {
      const {data} = await this.$axios.get(`/course/getClientOtherCourse?pageIndex=0&pageSize=10&clientId=${this.Course.clientId}&educationCourseId=${this.$route.query.contentId}`)
      this.ClientOtherCourse = data.data.data.map(item => {
        return {
          title: item.title,
          image: item.image,
          courseId: item.educationCourseId
        }
      })
      console.log(data.data.data)
    }
  },
  async beforeMount () {
    await this.getCourse()
    this.getOutstandingCourseContent()
    this.getClientOtherCourse()
  },

  watch: {
    '$route' (to, from) {
      // 路由发生变化页面刷新
      this.$router.go(0);
    }
  },
  components: {
    "LessonTitle": LessonTitle,
    "videoScroll": videoScroll,
    "hpbDesc": hpbDesc,
    "LessonBottom": LessonBottom,
  }
}
</script>

<style scoped lang="scss">
.outer {
  background-color: #F5F7F9;
  overflow: hidden;
  //学生作业
  .stuWork {
    background-color: white;
    margin-top: 20px;
    padding: 30px 35px 40px 40px;

    .head {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      padding-bottom: 24px;

      .title {
        font-size: 34px;
        line-height: 48px;
        color: #313131;
        vertical-align: middle;
        font-weight: bold;
      }

      .seeMore {
        font-size: 30px;
        color: #999;
        line-height: 30px;
        font-weight: normal;
      }
    }

    .imglist {
      display: flex;
      justify-content: space-between;

      img {
        width: 164px;
        height: 164px;
        border-radius: 8px;
      }
    }
  }

  //课程介绍
  .introduce {
    background-color: white;

    .title {
      font-size: 34px;
      line-height: 48px;
      margin-left: 40px;
      font-weight: bold;
    }

    .desc {
      font-size: 28px !important;
      line-height: 50px !important;
      padding-bottom: 80px;
    }
  }

  //导师介绍
  .teacherIntroduce {
    background-color: white;
    padding-bottom: 50px;
    .title {
      font-weight: bold;
      font-size: 34px;
      line-height: 48px;
      color: #313131;
      margin-bottom: 20px;
      margin-left: 40px;
    }

    .teacher {
      display: flex;
      margin: 30px 0 13px 40px;

      img {
        width: 100px;
        height: 100px;
      }

      .name {
        font-size: 34px;
        color: #313131;
        display: inline-block;
        margin-left: 24px;
        line-height: 100px;
      }
    }

    .desc {
      line-height: 50px;
    }
  }

  .hpbdesc {
    margin-top: 20px;
    margin-bottom: 100px;
    padding: 40px 35px 40px 40px;
    background-color: white;
  }
}

</style>