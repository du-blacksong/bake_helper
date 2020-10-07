<template>
  <div class="footer">
    <div class="left" @click="goTouniversity">
      <img src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640" alt="">
      <div>更多课程</div>
    </div>
    <div class="center">
      <img src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640" alt="">
      <div>咨询</div>
    </div>
    <div class="right">
      <del v-if="oldPrice!==0">￥{{oldPrice}}</del>
      <div>￥{{newPrice}}</div>
      <div>购买专栏</div>
    </div>
  </div>
</template>

<script>
export default {
name: "LessonBottom",
  props:['oldPrice','newPrice'],
  methods:{
    //跳转到university
    goTouniversity(){
      this.$router.push('/university')
    },
  }
}
</script>

<style scoped lang="scss">
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
    font-weight: bold;

    del {
      color: rgb(246, 208, 198);
    }
  }
}
</style>