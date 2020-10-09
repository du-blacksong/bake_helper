<!--烘焙圈-->
<template>
  <div class="container">
    <!-- 头部导航 -->
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
    <!-- 关注详情 -->
    <div class="subscription" v-show="subscriptionDetail">
      <div class="subscriptionDetail">暂无关注</div>
    </div>
    <!-- 第一个滑屏 -->
    <div class="headerNav" v-show="latestDetail">
      <div class="headerNavList">
        <div class="imgbox" v-for="(detail,index) in swrapImage.item" :key="index">
          <img :src="detail.image">
        </div>
      </div>
    </div>
    <!-- 第二个滑屏 -->
    <div class="labelList">
      <div class="labelContent">
        <div class="labelItem" v-for="item in swrapText" :key="item.communityId">
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="consumerDetail">
      我是消费者详情
    </div>
    <!-- 达人详情 -->
    <div class="super" v-show="superManDetail">
      <div>达人详情</div>
    </div>
  </div>
  


  

</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name: "show",
    data() {
      return {
        subscriptionDetail: false,
        latestDetail: true,
        superManDetail: false,
        swrapImage: [],
        pageIndex: 0,
        pageSize: 99,
        swrapText: [],
      }
    },
    async mounted() {
      // 获得第一个滑屏的数据
      const req = await this.$axios.get("feed/getCategory")
      // console.log(req.data.data.category[0])
      this.swrapImage = req.data.data.category[0]
      // 获得第二个滑屏的数据
      const result = await this.$axios.get(
        `community/getByLimit?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&all=true&isShow=4&timestamp=160222693453`
        )
      console.log(result.data.data.data)
      this.swrapText = result.data.data.data
    },
    methods: {
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
      }
    }


  }
</script>

<style scoped lang="scss">
  .container {
    position: relative;
  }

  // 头部的样式
  .header {
    display: flex;
    background: #FFFFFF;
    height: 88px;
    width: 100%;
    // z-index: 6;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
  .headerNav{
      margin-top:100px;
      background: #fff;
      width: 100%;
      height: 202px;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding: 5px 0 10px;
      border-bottom: 1px solid #E7E2E5;
      .headerNavList{
        background: #fff;
        margin-left: 15px;
        width: 1240px;
        height: 170px;
        display: flex;
          .imgbox{
            margin-right: 8px;
            img{
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
</style>