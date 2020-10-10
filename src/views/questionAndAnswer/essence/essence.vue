<template>
  <div class="contentWrap">
    <div class="itemWrap">
      <div class="questionItem" v-for="item in essenceList">
        <div class="user">
          <img :src="item.clientImage" />
          <img class="vip" src="../../../static/images/vip.png" v-if="item.isMaster===1">
          <div class="username">{{item.clientName}}</div>
        </div>
        <div class="title">{{item.coverTitle}}</div>
        <div class="content">{{item.coverSummary}}</div>
        <div class="like">{{item.hotNum}}个赞</div>
      </div>
    </div>
    <div id="flag">
      <img src="../../../static/images/loading1.gif">
      加载中...
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "essence",
  data() {
    return {
      essenceList: [], //精华问答
      pageIndex: 0, //当前页码
      // 请求评论开关防止重复请求
      flag: true,
      pageSize: 10
    };
  },
  async mounted() {
    await this.getEssenceList();
     this.$nextTick(() => {
        let wrapper = document.querySelector(".contentWrap");
        this.scroll = new BScroll(wrapper, {
          click: true,
          scrollY: true,
          probeType: 2,
            pullUpLoad: {
            threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
            }
        });
        //console.log(this.scroll)
        // this.scroll.on("scroll", position => {
        //   console.log(position);

        //   if (-position.y > 1200) {
        //     if (!this.flag) return
        //     this.getEssenceList();
        //   }
        // });
      this.scroll.on('pullingUp', () => {
      this.getEssenceList()
      this.scroll.finishPullUp();
      })
    });
  },
  methods: {
    /* 请求精华问答数据 */
    async getEssenceList() {
      if (!this.flag) return;
      this.flag = false;
      let { data } = await this.$axios(`question/getEssence?pageIndex=${this.pageIndex}&pageSize=10`);
      this.pageIndex += this.pageSize;
      this.flag = true;
      console.log(data.data.content.data)
      this.essenceList.push(...data.data.content.data);
      this.scroll&&this.scroll.refresh()
    }

    /* 下拉继续加载 */
    /*  handleScroll(e){
      const flag=document.querySelector('#flag')
      console.log(11);
      
      console.log(flag.getBoundingClientRect().top)
      if ((flag.getBoundingClientRect().top)<1100){
      
        this.getEssenceList()
      }
    } */
  }
};
</script>

<style lang="scss" scoped>
.contentWrap{
   background: #fff;
   height: 1000px;
   .itemWrap{
     padding: 30px;
    .questionItem {
      border-bottom: 1px #eee solid;
      .user {
        display: flex;
        margin: 20px 0;
        .vip{
          margin-left: 15px;
        }
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        .username {
          color: #4a4945;
          font-size: 24px;
          height: 80px;
          line-height: 80px;
          margin-left: 24px;
        }
      }
      .title {
        line-height: 50px;
        font-size: 36px;
        font-weight: bold;
        color: #4a4945;
        margin-bottom: 10px;
      }
      .content {
        // height: 120px;
        font-size: 28px;
        color: #4a4945;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .like {
        height: 60px;
        font-size: 28px;
        line-height: 28px;
        color: #999;
        margin-top: 20px;
      }
}
   }

}

#flag {
  width: 100%;
  height: 63px;
  line-height: 63px;
  text-align: center;
  font-size: 32px;
  padding-top:20px;
  img{
    width: 40px;
    height: 40px;
  }
}
</style>

