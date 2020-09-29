<template>
  <div class="bottomBar">
    <router-link to="/" class="navItme">
      <i class="iconfont icon-chushimao"></i>
      <span>学烘焙</span>
    </router-link>
    <router-link to="show" class="navItme">
      <i class="iconfont icon-tiantianquan"></i>
      <span>烘焙圈</span>
    </router-link>
    <router-link to="questionAndAnswer" class="navItme">
      <i class="iconfont icon-qa"></i>
      <span>问答</span>
    </router-link>
    <router-link to="my" class="navItme">
      <i class="iconfont icon-personal"></i>
      <span>小窝</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottomBar{
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  height: 98px;
  .navItme{
    opacity: 0.6;
    text-align: center;
    color: #313131;
    display: flex;
    flex-direction: column;
    .iconfont{
      font-size: 50px;
    }
    span{
      font-size: 22px;
      margin-top:5px;
    }

  }
  .router-link-exact-active {
    opacity: 1;
    color: black;
  }
}
</style>
