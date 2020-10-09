<!--课程标题组件
参数:title(如果是试看视频应传入trySeeTitle的值，其他应传入title的值即可)
imageUrl:图片地址,
videoUrl:视频地址
注:trySeeTitle前应拼上"试看步骤:"，图片与视频传一个即可
-->
<template>
<div>
  <div class="top">
    <img v-if="imageUrl" :src="imageUrl"/>
    <video v-else :src="videoUrl" controls></video>
    <div class="title">
      <div class="desc">{{title}}</div>
      <div class="buyNum">
        <img alt="" title=""
             src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&amp;imageView2/1/w/54/h/54">
        <span class="numitem"><span class="num">1000+</span><span>人在学</span></span>
      </div>
    </div>
  </div>
  <div class="service">
    <div style="padding-top:1px;"></div>
    <div class="servicemain">
      <div>
        <div class="serviceitem">
          <div class="servicepoint"></div>
          <div class="pointdesc">永久回看</div>
          <div class="servicepoint"></div>
          <div class="pointdesc">报名即学</div>
          <div class="servicepoint"></div>
          <div class="pointdesc">自营课程</div>
          <div class="servicepoint"></div>
          <div class="pointdesc">高效学习体验</div>
        </div>
        <div class="serviceitem" style="margin-top:5px;">
          <div class="servicepoint"></div>
          <div class="pointdesc">分步骤学</div>
          <div class="servicepoint"></div>
          <div class="pointdesc">唯一品类</div>
          <div class="servicepoint"></div>
          <div class="pointdesc">图片下载</div>
          <div class="servicepoint"></div>
          <div class="pointdesc">工具材料参考</div>
        </div>
      </div>
      <div class="arrow">
        <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "LessonTitle",
  props:{
  title:{
    type:String,
    required:true,
    default:''
  },
    imageUrl:{
      type:String,
      default:''
    },
    videoUrl:{
      type:String,
      default:''
    },
  }
}
</script>

<style scoped lang="scss">
.top {
  img {
    width: 750px;
    height: 420px;
  }
  video {
    width: 750px;
    height: 420px;
  }
  .title {
    padding: 24px 40px 30px 40px;
    background-color: #fff;

    .desc {
      font-weight: bold;
      font-size: 40px;
      line-height: 56px;
      color: #313131;
    }

    .buyNum {
      margin-top: 30px;
      position: relative;
      height: 54px;
      line-height: 54px;

      img {
        vertical-align: top;
        width: 54px;
        height: 54px;
      }

      .numitem {
        display: inline-block;
        font-size: 26px;
        height: 54px;
        vertical-align: bottom;
        color: #313131;

        .num {
          color: #E98B71;
        }
      }
    }
  }
}
.service {
  margin-top: 20px;
  background-color: white;
  margin-bottom: 10px;
  padding: 0 40px 20px 40px;

  .servicemain {
    margin-top: 20px;
    background-color: #FFFFFF;
    color: #676767;
    font-size: 26px;
    display: flex;

    .serviceitem {
      display: flex;
      align-items: center;

      .servicepoint {
        align-items: center;
        justify-content: center;
        display: inline-flex;
        height: 6px;
        width: 6px;
        border-radius: 3px;
        background-color: #E98B71;
      }

      .pointdesc {
        color: #676767;
        font-weight: 200;
        font-size: 26px;
        margin-left: 10px;
        margin-right: 30px;
        line-height: 37px;
      }
    }

    .arrow {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      margin-left: 0px;

      img {
        width: 13.5px;
        height: 23px;
      }
    }
  }
}
</style>