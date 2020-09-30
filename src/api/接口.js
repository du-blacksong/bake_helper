//这里放每个人找到的接口，并按如下格式注释
/*
 https://api.hongbeibang.com/education/getNewbieGuide?type=1
 method:GET
 参数:type  1-8
 * */


//http://localhost:8080/api/index/get
//method:GET
//获得首页导航信息

/* 
  获得问答页面的精华问答信息
  https://api.hongbeibang.com/question/getEssence?pageIndex=0&pageSize=10
  method:GET
  参数:pageIndex(页码)0/10/20/30...    pageSize(每页数量)10
*/

/* 
获得 烘焙圈 ==> 最新
https://api.hongbeibang.com/v2/feed/getNew?pageIndex=0&pageSize=10
method:GET
参数:pageIndex=0(页码) 0/10/20/30...   pageSize(每页数量)10
*/


/* 
获得 烘焙圈 ==> 达人
https://api.hongbeibang.com/v2/feed/getMasterNew?pageIndex=0&pageSize=10
method:GET
参数:pageIndex=0(页码) 0/10/20/30...   pageSize(每页数量)10
*/