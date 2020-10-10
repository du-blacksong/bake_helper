<template>
  <div class="OutstandingCourseContent" >
    <div class="courseContentitem" v-for="(item,index) in OutstandingContent" :key="index">
      <img v-lazy="item.image[0]" alt="">
      <div class="itemmain">
        <div class="userinfo">
          <img :src="item.clientImage" alt="">
          <div class="name">{{item.clientName}}</div>
        </div>
        <div class="desc">{{item.introduce ? item.introduce : '新手烘焙专题：从入门到精通'}}</div>
      </div>
      <div class="evaluation">
        <span class="iconfont icon-dianzan"></span>
        <span class="favonum">{{item.likeNum}}</span>
      </div>
    </div>
    <div id="flag"></div>
  </div>
</template>

<script>
export default {
name: "homeWork",
  props:{
    OutstandingContent:{
      type:Array,
      required:true
    },
    method:Function
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll)
  },
  methods:{
    //  无限滚动的回调
    handleScroll (e) {
      const flag = document.querySelector('#flag')
      // console.log("top",top)
      // console.log("bottom",flag.getBoundingClientRect().bottom)
      //    元素底部距离视口顶部的距离
      if (~~(flag.getBoundingClientRect().top) < 1050) {
        this.method()
      }
    },
  },
  // 离开页面销毁监听事件；
  destroyed () {
    window.removeEventListener("scroll", this.handleScroll, false);
  },
}
</script>

<style scoped lang="scss">
//  学院作业样式
.OutstandingCourseContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 38px 20px 140px;

  .courseContentitem {
    width: 330px;
    margin: 10px;
    border: 1px solid #F5F7F9;

    img {
      width: 330px;
      height: 330px;
      border-radius: 8px;
    }

    .itemmain {
      padding-left: 16px;

      .userinfo {
        display: flex;
        margin: 16px 8px 10px;

        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;
        }

        .name {
          font-size: 24px;
          height: 40px;
          line-height: 40px;
        }
      }

      .desc {
        font-size: 24px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //文本行数
      }

    }

    .evaluation {
      flex: 1;
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: 14px;
      margin-bottom: 28px;

      .iconfont {
        font-size: 50px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 9px;
        color: rgba(153, 153, 153, .8);
      }

      .favonum {
        font-size: 21px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        vertical-align: middle;
        color: #686868;
      }
    }
  }

  #flag {
    width: 100%;
    height: 63px;
    text-align: center;
    font-size: 32px;
  }
}
</style>