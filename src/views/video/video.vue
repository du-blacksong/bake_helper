<template>
  <div class="outer">
    <video :poster="image"  controls v-if="videoInfo.videoUrl">
      <source :src="videoInfo.videoUrl"/>
      <source :src="videoInfo.videoUrl2"/>
    </video>
    <div class="title">
      {{NewbieIntroduces.title}}
    </div>
    <div class="introduce" v-html="NewbieIntroduces.introduce"></div>
    <video-scroll title="推荐课程" :recommend-list="recommendList"/>
  </div>
</template>

<script>
import videoScroll from "@/components/videoScroll"
export default {
  name: "newbievideo",
  data () {
    return {
      //课程介绍
      NewbieIntroduces: {},
      //视频信息
      videoInfo: {},
    //  视频封面
      image:'',
    //  推荐课程
      recommendList:[]
    }
  },
  methods:{
    async getStartClassByNewbie(){
      const {data} = await this.$axios.get(`/education/getStartClassByNewbie?educationCourseId=${this.$route.query.contentId}`)
      this.NewbieIntroduces = data.data.introduces[0]
      this.videoInfo = data.data.step[0]
      this.image=data.data.image
    },
    async getRandContent(){
      const {data} = await this.$axios.get(`/recommend/getRandContent?type=3&pageSize=10`)
      let recommendList=data.data.data
      this.recommendList=recommendList.map(item=>{
        return {
          title:item.coverTitle,
          image:item.coverImage,
          courseId:item.courseId
        }
      })
    }
  },
   beforeMount () {
    this.getStartClassByNewbie()
    this.getRandContent()

  },
  components:{
    "videoScroll":videoScroll
  }
}
</script>

<style scoped lang="scss">
.outer {
  box-sizing: content-box;
  overflow: hidden;
  margin-bottom: 100px;
  video{
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: white;
  }
  .title {
    padding: 30px 30px 20px;
    font-size: 36px;
    line-height: 50px;
    font-weight: bold;
  }
  .introduce{
    //margin: 24px 20px 20px 0;
    margin-top: 24px;
    margin-left: 20px;
    margin-right: 20px;
  }
}

</style>