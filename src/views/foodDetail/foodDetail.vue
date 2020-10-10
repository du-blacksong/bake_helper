<template>
  <div class="foodDetailWrap">
      <div class="foodDetailHeader">
          <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="">
          <div class="foodDetailCollect">收藏</div>
      </div>
      <img :src="recipe.coverImage" alt="">
      <div class="foodDetailComment">
          <div class="foodDetailTitle">{{recipe.coverTitle}}</div>
          <div class="foodDetailContent">
              <div>
              <img :src="recipe.clientImage" alt="">
              </div>
              <div class="foodDetailContentRight">
                <div class="foodDetailName">{{recipe.clientName}}</div>
                <div class="addFocus">+关注</div>
              </div>
          </div>
          <p>{{recipe.coverSummary}}</p>
          <div class="foodStep">
              <div calss="foodStepUser" style="margin-bottom:20px">食材用料</div>
              <div class="foodCount">
                  <div class="foodDic">
                    <i>-</i>
                  </div>
                  <input type="text" placeholder="8">
                  <div class="foodAdd">
                      <i>+</i>
                 </div>
                  <span>(份量/</span>
                  <span>{{recipe.unit}})</span>
              </div>
              <div class="foodStepCount" v-for="(item, index) in recipe.material" :key="index">
                  <div>{{item.name}}</div>
                  <div>{{item.weight}}</div>
              </div>
              <div calss="foodStepDetail" v-for="(item,index) in recipe.step" :key="item.contentRecipeStepId">
                  <div class="step" style="margin:20px 0;">步骤{{1 + index++}}</div>
                  <img :src="item.image" alt="">
                  <p>{{item.text}}</p>
              </div>
          </div>
          <div class="foodTip">
              <div class="tip" style="font-size:18px;">小贴士</div>
              <p>{{recipe.tip}}</p>
          </div>
          <div class="foodHomework">
              <div calss="homeWork" style="font-size:18px;font-weight: bold; margin-right:230px">作业</div>
              <div class="watchAll" style="font-size:15px;color:#999">查看全部</div>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "foodDetail",
  data(){
     return{
      contentId:0,
      recipe:{}
     }
  },
  mounted () {
   this.contentId=this.$route.query.contentId
   console.log(this.contentId)
   this.getQuestionDetail(this.contentId)
  },
  methods:{
      async getQuestionDetail(contentId){
          console.log(contentId)
    //   this.contentId=contentId
      const {data} =await this.$axios(`/recipe/get?contentId=${contentId}`)
      this.recipe=data.data.recipe
      console.log(this.recipe.coverSummary.split('↵↵'))
    //   this.recipe=data.recipe
    //   console.log(this.recipe)
  }
 }
}
</script>
<style scoped lang="scss">
.foodDetailWrap{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 36px;
    .foodDetailHeader{
     background: #FFFFFF;
     height: 88px;
     z-index: 6;
     position: relative;
     top: 0;
     left: 0;
     right: 0;
     padding: 0 36px;
     margin: 0 auto;
     max-width: 1200px;
     box-sizing: border-box;
        img{
         width: 54px;
         height: 54px;
         margin: 19px 0;
        }
        .foodDetailCollect{
         color: #E98B71;
         border: 2px solid;
         border-color: #E98B71;
         border-radius: 8px;
        position: absolute;
        right: 20px;
        top: 20px;
        border-radius: 40px;
        box-sizing: border-box;
        margin: 0;
        text-align: center;
        font-size: 24px;
        line-height: 56px;
        width: 100px;
        height: 60px;
        cursor: pointer;
        }
    }
    .foodDetailComment{
      .foodDetailTitle{
       color: #4A4945;
       line-height: 75px;
       font-size: 52px;
       font-weight: bold;
       word-wrap: break-word;
       position: relative;
       margin: 32px 0;

      }
     p{
          color: #313131;
    line-height: 54px;
    font-weight: 200;
    font-size: 34px;
    word-break: break-all;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    word-wrap: break-word;
      }
      .foodDetailContent{
       border-top: 2px solid #F1F1F1;
       padding-top: 30px;
    //    margin-bottom:30px;
       display: flex;
       img{
           width:70px;
           height: 70px;
           border-radius: 50%;
       }
       .foodDetailContentRight{
           display: flex;
           flex: 1;
           margin-left:25px;
           justify-content:space-between;
            .foodDetailName{
                font-size: 28px;
                height: 80px;
                line-height: 80px;
                color: #4A4945;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .addFocus{
                background-color: #E98B71;
                color: #ffff;
                border: 1px solid;
                border-color: #E98B71;
                border-radius: 8px;
                border-radius: 40px;
                box-sizing: border-box;
                margin: 0;
                text-align: center;
                font-size: 28px;
                line-height: 60px;
                width: 130px;
                height: 60px;
                cursor: pointer
            }
       }
      }
      .foodStep{
          padding-top: 30px;
          font-size: 32px;
          line-height: 45px;
          color: #313131;
          font-weight: bold;
        .foodStepCount{
            display: flex;
            margin-top: 40px;
            div{
                flex: 1;
                justify-content:center;
                margin-right: 30px;
                font-size: 34px;
                line-height: 54px;
                color: #313131;
                font-weight: 200;
            }
        }
        .foodStepUser{
           zoom: 1;
           margin-bottom: 40px;
          }
        .foodCount{
            display:flex;
            span{
                color: #999;
                font-size:26px;
                font-weight: normal
            }
            input{
                line-height: 56px;
                border: 0;
                border-radius: 0;
                text-align: center;
                display: inline-block;
                box-sizing: border-box;
                outline: none;
                vertical-align: middle;
                margin-left: 10px;
                margin-right: 10px;
                width: 70px;
                padding: 0 15px;
                height: 70px;
                border-radius: 8px;
                font-size: 34px;
                font-weight: bold;
                color: #313131;
                background-color: #F5F7F9;
                border-style: none;
                border-bottom-style: solid;
                border-bottom-width: thin;
                border-bottom-color: #4a4640;
            }
            .foodDic{
             font-size: 20px;
             height: 70px;
             width: 70px;
             text-align: center;
             border-radius: 8px;
             background-color: #F5F7F9;
             padding: 10px;
             display: inline-block;
             vertical-align: middle;
             box-sizing: border-box;
             position: relative;
             margin-right: 10px;
             i{
                 color:#999;
                 
             }
            }
            .foodAdd{
             font-size: 20px;
             height: 70px;
             width: 70px;
             text-align: center;
             border-radius: 8px;
             background-color: #F5F7F9;
             padding: 10px;
             display: inline-block;
             vertical-align: middle;
             box-sizing: border-box;
             position: relative;
             margin-right: 10px;
             i{
                 color:#999;
                 
             }
            }
        }
        .foodStepDetail{
           margin-top:100px
        }
      }
      .foodHomework{
          display:flex;
          .homeWork{
              flex: 1;
          }
          .watchAll{
            zoom: 1;
          }
      }
    }
}
</style>
