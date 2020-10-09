<!--烘焙圈-->
<template>
  <div class="container">
    <!-- 头部导航 -->
    <div class="headerWrapper">
      <div class="header">
        <div class="plus">
          <span class="icon iconfont">&#xe641;</span>
        </div>
        <div class="text">
          <div @click="subscription">
            <span>关注</span>
          </div>
          <div>
            <span @click="attention">最新</span>
          </div>
          <div>
            <span @click="superMan">达人</span>
          </div>
        </div>
        <div class="lingdang">
          <span class="icon iconfont">&#xe600;</span>
        </div>
      </div>
    </div>
    <!-- 关注详情 -->
    <div class="subscription" v-show="subscriptionDetail">
      <div class="subscriptionDetail">暂无关注</div>
    </div>
    <!-- 最新 -->
    <div class="latest">
      <!-- 第一个滑屏 -->
      <div class="headerNav" v-show="latestDetail">
        <div class="headerNavList">
          <div class="imgbox" v-for="(detail,index) in swrapImage.item" :key="index">
            <img :src="detail.image">
          </div>
        </div>
      </div>
      <!-- 第二个滑屏 -->
      <div class="labelList" v-show="latestDetail">
        <div class="labelContent">
          <div class="labelItem" v-for="item in swrapText" :key="item.communityId">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 消费者作品展示 -->
      <div class="show" v-for="(item,index) in context" :key="index" v-show="latestDetail">
        <div class="showTop">
          <div class="headPortrait">
            <img :src="item.clientImage" alt="">
          </div>
          <div class="showContent">
            <div class="showName">{{item.clientName}}</div>
            <span class="showTime">{{item.createTime}} {{item.coverTitle}}</span>
          </div>
        </div>
        <div class="showImg">
          <div class="describe">
            <span class="describe1">{{item.communityName}}</span>
            <span>{{item.introduce}}</span>
          </div>
          <img :src="item.image" alt="">
        </div>

        <div class="showBotton" v-if="item.recipe.clientId !== 0">
          <div class="showBottonImg">
            <img :src="item.recipe.image" alt="">
          </div>
          <div class="showBottonRight">
            <div class="showBottonName">{{item.recipe.title}}</div>
            <div class="showBottonAuthor">作者：{{item.recipe.clientName}}</div>
          </div>
        </div>
        <!-- 评价 -->
        <div class="evaluate">
          <div class="evaluateItem">
            <div><img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38"
                alt=""><span>{{item.likeNum ===0 ? `点赞` : item.likeNum}}</span></div>
            <div><img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38"
                alt=""><span>{{item.rewardNum === 0 ? `打赏` : item.rewardNum}}</span></div>
            <div><img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38"
                alt=""><span>评论</span></div>
          </div>
        </div>
      </div>
      <div id="flag">loading...</div>
    </div>

    <!-- 达人详情 -->
    <div class="content" v-show="superManDetail">
      <div class="show" v-for="(item,index) in content" :key="index">
        <div class="showTop">
          <div class="headPortrait">
            <img :src="item.clientImage" alt="">
          </div>
          <div class="showContent">
            <div class="showName"><img
                src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80">{{item.clientName}}
            </div>
            <span class="showTime">{{item.createTime}} {{item.coverTitle}}</span>
          </div>
        </div>
        <div class="showImg">
          <div class="describe">
            <span class="describe1">{{item.communityName}}</span>
            <span>{{item.introduce}}</span>
          </div>
          <img :src="item.image" alt="">
        </div>
        <div class="showBotton" v-if="item.recipe.clientId !== 0">
          <div class="showBottonImg">
            <img :src="item.recipe.image" alt="">
          </div>
          <div class="showBottonRight">
            <div class="showBottonName">{{item.recipe.title}}</div>
            <div class="showBottonAuthor">作者：{{item.recipe.clientName}}</div>
          </div>
        </div>
        <div class="evaluate">
          <div class="evaluateItem">
            <div><img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38"
                alt=""><span>点赞</span></div>
            <div><img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38"
                alt=""><span>打赏</span></div>
            <div><img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38"
                alt=""><span>评论</span></div>
          </div>
        </div>
      </div>
    </div>
    <div id="littleFlag">loading...</div>
  </div>
</template>

<script>
  // import BetterScroll from 'better-scroll'
  export default {
    name: "show",
    data() {
      return {
        subscriptionDetail: false,
        latestDetail: true,
        superManDetail: false,
        swrapImage: [],
        pageIndex: 0,
        pageSize: 10,
        swrapText: [],
        context: [],
        flag: true,
        content: [],
        littleFlag:true,


      }
    },
    async mounted() {
      // 获得第一个滑屏的数据
      const req = await this.$axios.get("feed/getCategory")
      // console.log(req.data.data.category[0])
      this.swrapImage = req.data.data.category[0]
      // 获得第二个滑屏的数据
      const result = await this.$axios.get(
        `community/getByLimit?pageIndex=0&pageSize=99&all=true&isShow=4&timestamp=160222693453`
      )
      this.swrapText = result.data.data.data
      // 消费者作品展示的数据
      this.getConsumerProduct()
      // const reqs = await this.$axios.get("v2/feed/getNew?&pageIndex=0&pageSize=10")
      // this.context = reqs.data.data.content
      console.log(this.context)
      //
      window.addEventListener("scroll", this.handleScroll)

      // 获得达人页面的数据
      this.getSuperMan()
      window.addEventListener("scroll", this.handleLittleScroll)
      // const resultSuperMan = await this.$axios.get(`v2/feed/getMasterNew?pageIndex=0&pageSize=10`)
      // console.log(resultSuperMan.data.data.content)
      // this.content = resultSuperMan.data.data.content
    },
    methods: {
      //获得达人页面的数据
      async getSuperMan(){
        if (!littleFlag) return
        this.littleFlag = false
        const resultSuperMan = await this.$axios.get(`v2/feed/getMasterNew?pageIndex=0&pageSize=${this.pageSize}`)
        this.littleFlag = true
        this.content.push(...resultSuperMan.data.data.content)
        this.pageIndex += 10
      },
      //消费者作品展示的数据
      async getConsumerProduct() {
        if (!flag) return
        this.flag = false
        const reqs = await this.$axios.get(`v2/feed/getNew?pageIndex=${this.pageIndex}&pageSize=10`)
        this.flag = true
        this.context.push(...reqs.data.data.content)
        this.pageIndex = this.pageIndex + 10
      },
      subscription() {
        this.subscriptionDetail = true
        this.latestDetail = false
        this.superManDetail = false
      },
      attention() {
        this.subscriptionDetail = false
        this.latestDetail = true
        this.superManDetail = false
      },
      superMan() {
        this.subscriptionDetail = false
        this.latestDetail = false
        this.superManDetail = true
      },
      //  无限滚动的回调
      handleScroll(e) {
        const flag = document.querySelector('#flag')
        // console.log("top",top)
        // console.log("bottom",flag.getBoundingClientRect().bottom)
        //    元素底部距离视口顶部的距离
        // console.log(flag.getBoundingClientRect().top)
        if (~~(flag.getBoundingClientRect().top) < 877) {
          if (!this.flag) return
          this.getConsumerProduct()
        }
      },
      // 达人页面的无限滚动的回调
      handleLittleScroll(e){
        const littleFlag = document.querySelector('#littleFlag')
          // console.log(littleFlag.getBoundingClientRect().top)
        if(~~(littleFlag.getBoundingClientRect().top) < 4272){
          if(!this.littleFlag) return
          this.getSuperMan()
        }
      }
    },



  }
</script>

<style scoped lang="scss">
  .container {
    position: relative;

    .headerWrapper {
      width: 100%;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      .header {
        display: flex;
        background: #FFFFFF;
        height: 88px;
        width: 100%;
        // z-index: 6;
        // position: fixed;
        // top: 0;
        // left: 0;
        // right: 0;
        // padding: 0 36px;
        margin: 17px auto;
        max-width: 600px;
        box-sizing: border-box;
        text-align: center;

        .plus .iconfont {
          font-size: 44px;
          cursor: pointer;
          text-align: center;
          color: #999999;
        }

        .lingdang .iconfont {
          font-size: 44px;
          cursor: pointer;
          text-align: center;
          color: #999999;
        }

        .text {
          display: flex;
          line-height: 80px;
          height: 80px;
          margin: -10px 65px;
        }

        .text div {
          text-align: center;
          cursor: pointer;
          box-sizing: border-box;
          width: 130px;
          line-height: 88px;
          height: 88px;
          font-size: 32px;
          color: #999999;
        }

        .text span {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          cursor: pointer;
          border-bottom: 5px solid #E98B71;
          display: inline-block;
          margin-bottom: 5px;
          padding: 0 4px;
          border-radius: 3px;
        }
      }
    }

  }

  //  关注详情
  .subscription {
    position: absolute;
    height: 1124px;
    width: 100%;
    background-color: rgb(242, 245, 248);
    top: 110px;

    .subscriptionDetail {
      font-size: 28px;
      line-height: 40px;
      color: #999999;
      margin: 40px auto;
      text-align: center;
    }
  }

  //第一个滑屏
  .headerNav {
    margin-top: 100px;
    background: #fff;
    width: 100%;
    height: 202px;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding: 5px 0 10px;
    border-bottom: 1px solid #E7E2E5;

    .headerNavList {
      background: #fff;
      margin-left: 15px;
      width: 1240px;
      height: 170px;
      display: flex;

      .imgbox {
        margin-right: 8px;

        img {
          width: 300px;
          height: 170px;
        }
      }
    }
  }

  // 第二个滑屏的样式
  .labelList {
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    // height: 55px;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding: 20px 0;

    .labelContent {
      margin-left: 30px;
      width: 1000px;

      .labelItem {
        height: 70px;
        font-size: 30px;
        line-height: 55px;
        text-align: center;
        // position: relative;
        margin-right: 8px;
        border-radius: 4px;
        padding: 7px 10px;
        display: inline-block;
        // vertical-align: middle;
        overflow: hidden;
        box-sizing: border-box;
        color: #fff;

        &:nth-child(1) {
          background: #94BFBB;
        }

        &:nth-child(2) {
          background: #927472;
        }

        &:nth-child(3) {
          background: #E5AA9C;
        }

        &:nth-child(4) {
          background: #5BADA6;
        }

        &:nth-child(5) {
          background: #b78b9f;
        }

        &:nth-child(6) {
          background: #acbcc9;
        }

        &:nth-child(7) {
          background: #8f7671;
        }

        &:nth-child(8) {
          background: #acb99b;
        }

        &:nth-child(9) {
          background: #aca6bb;
        }

        &:nth-child(10) {
          background: #c3d0ad;
        }
      }
    }
  }

  //消费者作品的样式
  .show {
    background: #fff;
    width: 100%;
    // height: 409px;
    margin-top: 10px;

    .showTop {
      width: 690px;
      height: 88px;
      margin: 10px 15px;
      display: flex;

      .headPortrait {
        img {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          margin: 5px 10px 0 0;
        }
      }

      .showContent {
        display: flex;
        flex-flow: column;

        .showName {
          height: 40px;
          line-height: 40px;
          font-size: 26px;
          color: #4a4945;
          margin-top: 6px;
        }

        .showTime {
          height: 32px;
          line-height: 32px;
          font-size: 24px;
          color: #999;
          margin-top: 10px;
        }
      }
    }

    .showImg {
      margin-bottom: 22px;

      .describe {
        margin: 20px 30px 22px;

        span {
          font-size: 28px;
          color: #4a4945;
        }

        .describe1 {
          color: #498dd0;
        }
      }

      img {
        max-width: 710px;
        max-height: 220px;
        margin-left: 30px;
      }
    }

    .showBotton {
      background: #F5F7F9;
      width: 690px;
      height: 140px;
      display: flex;
      margin-left: 30px;
      margin-bottom: 30px;

      .showBottonImg {
        img {
          width: 140px;
          height: 140px;
          border-radius: 5px;
        }
      }

      .showBottonRight {
        display: flex;
        flex-flow: column;
        margin-left: 30px;

        .showBottonName {
          font-size: 28px;
          color: #313131;
          font-weight: bold;
          margin-top: 30px;
        }

        .showBottonAuthor {
          font-size: 26px;
          color: #999;
          margin-top: 10px;
        }
      }
    }

    .evaluate {
      width: 100%;
      height: 60px;
      border-top: 2px solid #e7e2e5;

      .evaluateItem {
        margin: 0 30px;
        display: flex;

        div {
          display: flex;
          width: 246px;
          height: 40px;
          margin: 8px 0 0;
          font-size: 24px;
          color: #999;
          justify-content: center;

          &:nth-child(2) {
            border-left: 2px solid #e7e2e5;
            border-right: 2px solid #e7e2e5;
          }

          span {
            height: 40px;
            line-height: 40px;
          }

          img {
            width: 38px;
            height: 38px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  // 达人页面的样式
  .content {
    background: #F5F7F9;
    margin-top: 40px;

    .show {
      background: #fff;
      width: 100%;

      // height: 409px;
      .showTop {
        width: 690px;
        height: 88px;
        margin: 30px 30px;
        display: flex;

        .headPortrait {
          img {
            width: 76px;
            height: 76px;
            border-radius: 50%;
            margin: 20px 20px 0 0;
          }
        }

        .showContent {
          display: flex;
          flex-flow: column;

          .showName {
            display: flex;
            height: 80px;
            line-height: 80px;
            font-size: 26px;
            color: #4a4945;
            margin-top: 6px;

            img {
              width: 80px;
              height: 80px;
              margin-right: 10px;
            }
          }

          .showTime {
            height: 20px;
            line-height: 2px;
            font-size: 24px;
            color: #999;
          }
        }
      }

      .showImg {
        margin-bottom: 22px;

        .describe {
          margin: 20px 30px 22px;

          span {
            font-size: 28px;
            color: #4a4945;
          }

          .describe1 {
            color: #498dd0;
          }
        }

        img {
          max-width: 710px;
          max-height: 220px;
          margin-left: 30px;
        }
      }

      .showBotton {
        background: #F5F7F9;
        width: 690px;
        height: 140px;
        display: flex;
        margin-left: 30px;
        margin-bottom: 30px;

        .showBottonImg {
          img {
            width: 140px;
            height: 140px;
            border-radius: 10px;
          }
        }

        .showBottonRight {
          display: flex;
          flex-flow: column;
          margin-left: 30px;

          .showBottonName {
            font-size: 28px;
            color: #313131;
            font-weight: bold;
            margin-top: 30px;
          }

          .showBottonAuthor {
            font-size: 26px;
            color: #999;
            margin-top: 10px;
          }
        }
      }

      .evaluate {
        width: 100%;
        height: 60px;
        border-top: 1px solid #e7e2e5;

        .evaluateItem {
          margin: 0 30px;
          display: flex;

          div {
            display: flex;
            width: 246px;
            height: 40px;
            margin: 8px 0 0;
            font-size: 24px;
            color: #999;
            justify-content: center;

            &:nth-child(2) {
              border-left: 1px solid #e7e2e5;
              border-right: 1px solid #e7e2e5;
            }

            span {
              height: 40px;
              line-height: 40px;
            }

            img {
              width: 38px;
              height: 38px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
</style>