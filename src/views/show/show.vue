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
    <!-- 最新详情 -->
    <div class="latest" v-show="latestDetail">
        <div class="firstScroll" ref="firstScroll">
          <ul class="scrollWrapper">
            <li class="liWrapper" v-for="(detail,index) in swrapImage.item" :key="index">
              <img :src="detail.image">
            </li>
          </ul>
        </div>
        <div class="secondScroll">
          <ul class="scrollWrapper" ref="secondScroll">
            <li v-for="(item,index) in swrapText.content" :key="index">

            </li>
          </ul>
        </div>
        <div class="consumerDetail"></div>
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
    data(){
      return {
        subscriptionDetail:false,
        latestDetail:true,
        superManDetail:false,
        swrapImage:[],
        pageIndex:0,
        pageSize:99,
        swrapText:[],
      }
    },
    async mounted(){
      // 获得第一个滑屏的数据
      const req = await this.$axios.get("feed/getCategory")
      // console.log(req.data.data.category[0])
      this.swrapImage = req.data.data.category[0]
      // 第一个导航滚动
      this.$nextTick(() => {
        new BetterScroll(this.$refs.firstScroll,{click: true, scrollX: true})
      })
      // 获得第二个滑屏的数据
      const result = await this.$axios.get(`community/getByLimit?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
      console.log(result)
      // this.swrapText = result.data.data
    },
    methods:{
      subscription(){
        this.subscriptionDetail = true
        this.latestDetail = false
        this.superManDetail = false
      },
      attention(){
        this.subscriptionDetail = false
        this.latestDetail = true
        this.superManDetail = false
      },
      superMan(){
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
    .plus .iconfont{
      font-size:44px;
      cursor: pointer;
      text-align: center;
      color: #999999;
    }
    .lingdang .iconfont{
      font-size:44px;
      cursor: pointer;
      text-align: center;
      color: #999999;
    }
    .text {
      display: flex;
      line-height:80px;
      height: 80px;
      margin: -10px 65px; 
    }
    .text div{
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    width: 130px;
    line-height: 88px;
    height: 88px;
    font-size: 32px;
    color: #999999;
    }
    .text span{
      font-size:32px;
      font-weight:bold;
      text-align: center;
      cursor: pointer;
      border-bottom:5px solid #E98B71;
      display: inline-block;
      margin-bottom:5px;
      padding:0 4px;
      border-radius:3px;
    }
  }
//  关注详情
.subscription{
  position: absolute;
  height: 1124px;
  width: 100%;
  background-color:rgb(242, 245,248);
  top:110px;
  .subscriptionDetail{
    font-size: 28px;
    line-height: 40px;
    color: #999999;
    margin: 40px auto;
    text-align: center;
  }
}
//最新的详情
.latest {
  margin-top:88px;
  // height: 750px;
  .firstScroll{
    width: 750px;
    margin-top:120px;
    // height: 300px;
    overflow: hidden;
    .scrollWrapper{
      // height: 300px;
      width:1260px;
      display:flex;
      .liWrapper{
        margin-right:20px;
        width:300px;
        height:171px;
        img{
          max-width: none;
          width:300px;
          height:171px;
          border-radius: 4px;
        }
       
      }
    }
  }

}
  
  
</style>