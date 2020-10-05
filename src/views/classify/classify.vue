<!--食谱分类-->
<template>
  <div class="outer">
    <div class="top">
      <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="">
      <div class="search">搜索食谱/食材，烘焙/家常菜一应俱全</div>
    </div>
    <div class="main">
      <div class="left" ref="left">
        <div class="contain">
          <div @click="active(item.classifyId)" class="item" v-for="(item,index) in recommendnav" :key="item.classifyId" :class="{active:classifyid===item.classifyId}">
            {{item.name}}</div>
        </div>
      </div>
      <div class="right">
        <div class="item" v-for="(item,index) in recommendlist" :key="item.classifyId">
          <div class="title">{{item.name}}</div>
          <div class="imglist">
            <div class="imgitem" v-for="img in item.list" :key="img.classifyId">
              <img :src="img.image"
                   alt="">
              <div class="name">{{img.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: "classify",
  data(){
    return{
      //  选中的classifyid
      classifyid:0,
      //  右侧要展示的列表
      recommendlist:{}
    }

  },
  computed:{
    ...mapState({
      classify:state => state.classify.classify
    }),
    ...mapGetters(['recommendnav'])
  },
  methods:{
    active(id){
      this.classifyid=id
      this.recommendlist=this.classify.filter(item=>{
        return this.classifyid===item.classifyId
      })[0].list
    }
  },
  async beforeMount () {
    await this.$store.dispatch('recommend')
    await this.$store.dispatch('all')
    this.recommendlist=this.classify[0].list
    this.$nextTick(()=>{
      console.log(this)
      const bs=new BScroll(this.$refs.left,{
        click:true,
        scrollY:true,
      })
    })
  }
}
</script>

<style scoped lang="scss">
.outer {
  box-sizing:content-box;
  .top {
    height: 88px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 9px 36px;
    line-height: 88px;
    display: flex;
    background-color: white;
    z-index: 9;

    img {
      width: 54px;
      height: 54px;
      margin: 10px 0;
    }

    .search {
      width: 448px;
      height: 70px;
      line-height: 70px;
      padding: 0 20px;
      font-size: 28px;
      color: #4A4945;
      background-color: #F5F7F9;
      border-radius: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 9px auto;
    }
  }

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 88px;

    .left {
      width: 170px;
      position: fixed;
      left: 0;
      background-color: rgb(245,247,249);
      height: 100%;
      .contain {
        height: 1500px;
        .item {
          width: 170px;
          height: 100px;
          font-size: 26px;
          color: #4A4945;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active {
            background-color: #FFFFFF;
            border-left: 6px solid #E98B71;
          }
        }
      }


    }

    .right {
      position: absolute;
      top: 0;
      left: 170px;
      .item{
        .title{
          height: 42px;
          padding: 19px 0 19px 32px;
          font-size: 24px;
          font-weight: bold;
          color: #313131;
          line-height: 42px;
        }
        .imglist{
          padding: 0 30px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          .imgitem{
            width: 160px;
            height: 200px;
            padding-bottom: 20px;
            margin: 0 6px;
            img{
              width: 160px;
              height: 160px;
              border-radius: 8px;
            }
            .name{
              font-size: 24px;
              color: #313131;
              margin-top: 5px;
              text-align: center;
            }
          }
        }
      }
    }
  }

}


</style>
