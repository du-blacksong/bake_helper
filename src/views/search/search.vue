<template>
  <div class="wrap">
    <div class="headerWrap">
    <!-- 搜索框 -->
      <div class="search">
         <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="">
        <div class="searchInput">
          <input v-model="keyword" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全"></input>
        </div>
        <span @click="toSearch" class="right">搜索</span>
      </div>
    </div>
    <!-- 搜索的标签 -->
    <div class="hotSearch">
      <span>热门搜索</span>
    </div>
    <div class="keywordWrap">
      <span @click="toSearchForm(item.keyword)" class="keyword" v-for="item in popularSearch">{{item.keyword}}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "search",
  data(){
    return {
      popularSearch:[],//搜索的标签
      keyword:""
    }
  },
  async mounted () {
    let {data}=await this.$axios('https://api.hongbeibang.com/keyword/detail')
    //console.log("111",data)
    this.popularSearch=data.data.popularSearch
  },
  methods: {
    /* 点击跳转到serch路由 */
    toSearch(){
      router.push(`/searchForm/?keyword=${this.keyword}`)
    },
    toSearchForm(e){
      router.push(`/searchForm/?keyword=${e}`)
    }
  }
};
</script>

<style lang="scss" scoped>
  .wrap{

  /* 头部搜索 */
    .headerWrap {

    margin-bottom: 10px;
    .search{
      height: 88px;
      line-height: 88px;
      text-align: center;
      margin: 20px 40px;
      display: flex;
      img{
         width: 60px;
        height: 60px;
        margin: 10px 0;
      }
      .left{
        font-size: 32px;

      }
      .searchInput{
        flex: 1;
        height: 70px;
        line-height: 70px;
        text-align: center;
        border-radius: 8px;
        background-color: #F5F7F9;
        margin: 0 40px;
        padding: 0 10px;
        box-sizing: border-box;
        overflow: hidden;
        cursor: pointer;
        input{
          width: 100%;
          height: 100%;
          font-size: 28px;
          color: #4A4945;
          border: none;
          background: none;
        }
      }
      .right{
        margin: -8px 0;
        font-size: 32px;
        color:#4A4945
      }

    }

 
  }
  /* 热门搜索标签 */
    .hotSearch{
      margin:30px 40px;
      span{
        font-size: 28px;
        line-height: 40px;
        color: #999;

      }
 
    }
  /* 搜索的小标签 */
    .keywordWrap{
      padding:0 60px;
      .keyword{
      height:64px;
      line-height:64px;
      font-size:32px;
      padding:0 20px;
      text-align:center;
      margin-right:20px;
      margin-bottom:20px;
      border-radius:20px;
      box-sizing:border-box;
      color: #4A4945;
      background-color: #F5F7F9;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
        }
      
    }

}
</style>
