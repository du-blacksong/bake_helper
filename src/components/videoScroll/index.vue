<!--
横向滚动功能
参数:title
recommendList:{
title,用来描述当前视频的内容
image，封面
courseId,课程id，对应请求数据中的courseid，也可能是其他值(educationCourseId)，通常类似10632
}
-->
<template>
  <div class="recommend">
    <div class="title">{{title}}</div>
    <div class="pic-wrapper" ref="wrapper">
      <div class="pic-list">
        <div @click="goToLesson(item.courseId)" class="pic-item" v-for="item in recommendList" :key="item.courseId">
          <img :src="item.image">
          <div class="learnNum">1000+在学</div>
          <div class="itemTitle">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
name: "index",
  methods:{
    goToLesson(courseId){
      this.$router.push(`/lesson?contentId=${courseId}`)
    }
  },
  props:{
  title:{
    type:String,
    required:true
  },
    recommendList:{
      type:Array,
      required:true
    }
  },
  beforeMount () {
    this.$nextTick(()=>{
      new BScroll(this.$refs.wrapper,{
        click:true,
        scrollX:true,
      })
    })
  }
}
</script>

<style scoped lang="scss">
//  推荐课程
.recommend {
  background-color: white;
  padding-bottom: 30px;
  .title {
    padding: 30px 30px 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: bold;
  }

  .pic-wrapper {
    width: 100%;
    margin:0 30px;
    overflow: hidden;
    .pic-list{
      display: flex;
      width: 3400px;
      padding-right: 30px;
      .pic-item{
        width: 320px;
        height: 540px;
        margin-right: 20px;
        position: relative;
        img{
          width: 320px;
          height: 450px;
          border-radius: 8px;
        }
        .learnNum{
          position: absolute;
          left: 0;
          bottom: 107px;
          font-size: 22px;
          margin: 0 20px;
          padding: 4px 8px;
          border-radius: 8px;
          color: #4A4945;
          background-color: #fff;

        }
        .itemTitle{
          font-size: 30px;
          line-height: 40px;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; //文本行数
        }

      }

    }
  }
}
</style>