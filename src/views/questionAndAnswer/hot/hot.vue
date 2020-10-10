<template>
<div class="outer">
  <Question :method='getHot' :news="news"></Question>
</div>
  
</template>

<script>
import Question from '../../../components/Question/Question'
export default {
  name: 'hot',
  components: {Question},
  data(){
    return {
       news:[],//最新问题
       pageIndex:0, //当前页码
       pageSize:10,//每页数量
      //  自动加载的开关
      flag:true,
    }
  },
  mounted () {
    this.getHot()
  },
  methods: {
    /* 请求精华问答数据 */
    async getHot(){
      if (!this.flag) return
      this.flag=false
      const {data}=await this.$axios(`question/getHot?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
      this.pageIndex+=this.pageSize
      this.flag=true
      //console.log(data.data.content.data)
      this.news.push(...data.data.content.data)
      console.log(this.news)

      // this.$nextTick(() => {
      //   let wrapper = document.querySelector('.scrollWrap')
      //   this.scroll = new BScroll(wrapper,{click: true,scrollY:true})
      // })
    },
  }
}
</script>

<style lang="scss" scoped>
  .outer{
    padding: 0 15px 15px 15px;
    background: #fff;
  }
</style>
