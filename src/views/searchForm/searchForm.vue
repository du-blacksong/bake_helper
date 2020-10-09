<template>
  <div>
    <div class="top">
      <div class="topsearch">
        <img src="../../static/images/back.jpg" @click="$router.push('/search')" class="back">
        <img src="../../static/images/del.jpg" class="del" v-show="keyword" @click="delkey">
        <input class="input" v-model="keyword" @change="changekey"/>
        <span class="shipu">食谱</span>
        <img src="../../static/images/more.jpg" class="more">
      </div>

      <div class="nav">
        <div class="navItem" @click="click1">
          <span :class="sort===''?'active':''">综合排序</span>
          <div class="border" v-show="sort===''" ></div>
        </div>
        <div class="navItem" @click="click2">
          <span :class="sort==='dishNum'?'active':''">做过最多</span>
          <div class="border" v-show="sort==='dishNum'"></div>
        </div>
        <div class="navItem" @click="click3">
          <span :class="sort==='master'?'active':''">达人食谱</span>
          <div class="border" v-show="sort==='master'"></div>
        </div>
      </div>
    </div>


    <div class="mainContainer">

      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          class="main">
        <div v-for="(item,index) in showList" :key="index" class="mainItem">
          <img :src="item.coverImage">
          <div class="content">
            <div class="title">{{item.coverTitle}}</div>
            <div class="author">{{item.clientName}}</div>
            <div class="join">
              <span class="collect">{{item.collectNum}}收藏</span>
              <span>{{item.dishNum}}做过</span>
            </div>
          </div>
        </div>
      </van-list>

<!--      <div >-->
<!--        <div class="mainItem" v-for="item in showList" :key="item.contentRecipeId">-->
<!--          -->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "searchForm",
  data(){
    return{
      keyword:'',
      sort:'',
      showList:[],
      pageIndex:-10,
      pageSize:10,
      loading: false,
      finished: false,
    }
  },
  mounted() {
    // this.getShowList()
    this.keyword = this.$route.query.keyword
  },
  methods:{
    click1(){
      this.sort=''
      this.showList=[]
      this.getShowList()
    },
    click2(){
      this.sort='dishNum'
      this.showList=[]
      this.getShowList()
    },
    click3(){
      this.sort='master'
      this.showList=[]
      this.getShowList()
    },
    delkey(){
      this.keyword = ''
    },
    changekey(){
      this.$router.push(`/searchForm?keyword=${this.keyword}`)
      this.showList=[]
      this.getShowList()
    },
    //https://api.hongbeibang.com/search/getMoreRecipe?pageIndex=0&pageSize=10&keyword=%25E9%25A4%2590%25E5%258C%2585&sort=
    async getShowList(){
      const showList = await this.$axios(`/search/getMoreRecipe?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&keyword=${this.keyword}&sort=${this.sort}`)
      // console.log(showList.data.data.search.list.recipe.data)
      this.showList=[...this.showList,...showList.data.data.search.list.recipe.data]
      this.loading = false;
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.pageIndex+=this.pageSize
      this.getShowList()
    },
  }
}
</script>

<style scoped lang="scss">
.top{
  height: 180px;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  .topsearch {
    position: relative;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    height: 88px;
    line-height: 88px;
    .del{
      position: absolute;
      width: 66px;
      height: 66px;
      left: 90px;
      top: 2px;
    }
    .back{
      margin-top: 20px;
      width: 26px;
      height: 40px;
    }
    .input {
      display: block;
      border: none;
      font-size: 28px;
      padding-left: 60px;
      height: 70px;
      width: 60%;
      background-color: #F5F7F9;
    }
    .more{
      margin-top: 25px;
      width: 40px;
      height: 40px;
    }

    .shipu {
      font-size: 28px;
      color: #E98B71;
    }
  }

  .nav {
    position: relative;
    display: flex;
    justify-content: space-around;

    span {
      font-size: 28px;
      color: #999999;
      &.active{
        color: #333333;
        font-weight: bold;
      }
    }
    .border{
      position: absolute;
      width: 110px;
      height: 3px;
      background-color: #E98B71;
      margin-top: 10px;
    }
  }
}
.mainContainer{
  margin-top: 190px;
  padding: 0 30px;
  .main{
    .mainItem{
      margin:20px 0;
      display: flex;
      img{
        width: 250px;
        height: 180px;
        margin-right: 20px;
        border-radius: 10px;
      }
      .content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .title{
          letter-spacing: 1px;
          line-height: 49px;
          font-size: 36px;
          font-weight: bold;
          color: #4A4945;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .author{
          margin-top: 6px;
          font-size: 22px;
          color: #999999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .join{
          font-size: 11px;
          color: #4A4945;
          white-space: nowrap;
          .collect{
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
