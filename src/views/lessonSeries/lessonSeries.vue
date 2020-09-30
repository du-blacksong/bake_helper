<!--新手教程-->
<template>
  <div class="outer">
    <div class="top">
      <img :src="getCourse.image" alt="">
      <div class="title">
        <div class="desc">{{getCourse.title}}</div>
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
    <div class="main">
      <div class="nav" ref="nav">
        <div @click="active(0)" class="item" :class="{active:activeindex===0}">
          课程介绍
          <div v-show="activeindex===0"></div>
        </div>
        <div @click="active(1)" class="item" :class="{active:activeindex===1}">
          课程目录
          <div v-show="activeindex===1"></div>
        </div>
        <div @click="active(2)" class="item" :class="{active:activeindex===2}">
          学员作业
          <div v-show="activeindex===2"></div>
        </div>
      </div>
      <div ref="placehold"></div>
      <div class="coursedesc" v-show="activeindex===0">
        <div class="item">
          <div class="title">{{getCourse.introduces && getCourse.introduces[0].title}}</div>
          <div class="desc" v-html="getCourse.introduces&&getCourse.introduces[0].introduce"></div>
        </div>
        <div class="item">
          <div class="title">{{getCourse.introduces && getCourse.introduces[1].title}}</div>
          <div class="desc" v-html="getCourse.introduces&&getCourse.introduces[1].introduce"></div>
        </div>
        <div class="item last">
          <div class="bottom">
            <img alt="" title=""
                 src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&amp;imageView2/1/w/551/h/242"
                 style="width: 130px; height: 57.2px; background: none;">
            <div class="bottomdesc">
              烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！
            </div>
            <div class="bottomicon">
              <div class="iconitem">
                <img alt="" title=""
                     src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&amp;imageView2/1/w/100/h/116"
                     style="width: 50px; height: 58px; background: none;">
                <div class="iconitemdesc">蛋糕</div>
              </div>
              <div class="iconitem">
                <img alt="" title=""
                     src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&amp;imageView2/1/w/100/h/116"
                     style="width: 50px; height: 58px; background: none;">
                <div class="iconitemdesc">甜点</div>
              </div>
              <div class="iconitem">
                <img alt="" title=""
                     src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&amp;imageView2/1/w/100/h/116"
                     style="width: 50px; height: 58px; background: none;">
                <div class="iconitemdesc">面包</div>
              </div>
              <div class="iconitem">
                <img alt="" title=""
                     src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&amp;imageView2/1/w/100/h/116"
                     style="width: 50px; height: 58px; background: none;">
                <div class="iconitemdesc">中式点心</div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="left">
            <img src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640" alt="">
            <div>更多课程</div>
          </div>
          <div class="center">
            <img src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640" alt="">
            <div>咨询</div>
          </div>
          <div class="right">
            <del>￥{{getCourse.originPrice}}</del>
            <div>￥{{getCourse.preDiscountPrice}}</div>
            <div>购买专栏</div>
          </div>
        </div>
      </div>
      <div class="coursedesc" v-show="activeindex===1">课程目录</div>
      <div class="coursedesc" v-show="activeindex===2">学员作业</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lessonSeries",
  data () {
    return {
      //导航栏选中索引
      activeindex: 0,
      //存放课程信息
      getCourse: {},
    }
  },
  mounted () {
    window.addEventListener("scroll",  (e) =>{
      const top=document.body.scrollTop || document.documentElement.scrollTop
      if (top>400){
        this.$refs.nav.style.position='fixed';
        this.$refs.nav.style.top='0';
        this.$refs.placehold.style.height='44px';
      }else {
        this.$refs.nav.style.position='';
        this.$refs.nav.style.top='';
        this.$refs.placehold.style.height='0';

      }
      console.log(top)
    })

  },
  methods: {
    active (index) {
      this.activeindex = index

    }
  },
  async beforeMount () {
    const {data} = await this.$axios.get(`/education/getCourse?educationCourseId=${this.$route.query.contentId}`)
    const {image, introduces, title, buyNum, originPrice, preDiscountPrice} = data.data
    this.getCourse = {
      image, introduces, title, buyNum, originPrice, preDiscountPrice
    }

  }
}
</script>

<style scoped lang="scss">


.outer {
  background-color: #F5F7F9;

  .top {
    img {
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

  .main {
    margin-top: 20px;
    background-color: white;

    .nav {
      height: 88px;
      line-height: 88px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #F8FAFB;
      background-color: white;
      .item {
        padding: 0 60px;
        height: 88px;
        align-items: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 30px;
        color: #686868;
      }

      .item.active {
        font-weight: bold;
        color: #313131;

        div {
          margin-top: 8px;
          height: 6px;
          width: 40px;
          border-radius: 3px;
          background-color: #E98B71;
        }

      }
    }

    .coursedesc {
      color: #313131;
      text-indent: 0;
      margin: 0 0 20px;
      font-size: 32px;
      line-height: 51px;
      letter-spacing: 1px;
      padding: 40px 35px 40px;

      .item.last {
        padding-bottom: 100px;
      }

      .item {

        padding: 40px 0;

        .title {
          font-weight: bold;
          font-size: 34px;
          line-height: 48px;
          color: #313131;
          margin-bottom: 20px
        }

        .bottom {
          background-color: #fff;

          .bottomdesc {
            font-weight: 300;
            font-size: 28px;
            line-height: 44px;
            color: #313131;
          }

          .bottomicon {
            display: flex;
            flex-direction: row;
            margin-top: 30px;

            .iconitem {
              flex: 1;
              justify-content: center;
              align-items: center;
              display: flex;
              flex-direction: column;
              cursor: pointer;

              .iconitemdesc {
                font-size: 24px;
                color: #313131
              }
            }
          }
        }
      }

    }
  }

  .footer {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100px;
    font-size: 24px;
    left: 0;
    bottom: 0;
    background-color: white;

    img {
      width: 40px;
      height: 40px;
    }

    .left {
      width: 140px;
      height: 100%;
      text-align: center;
      vertical-align: center;
    }

    .center {
      width: 140px;
      height: 100%;
      text-align: center;

    }

    .right {
      flex: 1;
      display: flex;
      justify-content: center;
      height: 98px;
      line-height: 98px;
      background-color: #E98B71;
      color: #fff;
      font-size: 30px;
      font-weight: bold
    }
  }

}

</style>
