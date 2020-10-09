<!--小窝-->
<template>
  <div class="login">
    <div class="top">
      <img src="../../static/images/back.jpg" @click="back">
      <span>登录</span>
    </div>

    <img src="../../static/images/hbblogo.jpg" class="login">

    <form>
      <div class="item">
        <span>账号：</span><input type="text"></input>
      </div>
      <div class="item">
        <span>密码：</span><input type="password"></input>
      </div>
    </form>

    <div class="explain">登录即代表阅读并同意<span>服务条款</span></div>
  </div>
</template>

<script>
export default {
  name: "my",
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    text-align: center;
    .top{
      text-align: center;
      img{
        position: absolute;
        left: 40px;
        top: 20px;
        width: 20px;
        height: 34px;
      }
      span{
        font-size: 36px;
        height: 88px;
        line-height: 88px;
        font-weight: bold;
      }
    }
    .login{
      margin-top:250px;
      padding: 0 75px;
    }
    form{
      padding: 40px;
      .item{
        margin: 20px;
        span{
          font-size: 30px;
        }
        input{
          width: 70%;
          height: 60px;
          background-color: #f4fcea;
        }
      }
    }
    .explain{
      font-size: 24px;
      color: #999999;
      span{
        color: #E98B71;
      }
    }
  }
</style>
