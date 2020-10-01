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
 https://api.hongbeibang.com/education/getCourse?educationCourseId=10534
 method:GET
 参数:educationCourseId(课程id)
* */


/* 
  获得问答页面的精华问答信息
  https://api.hongbeibang.com/question/getEssence?pageIndex=0&pageSize=10
  method:GET
  参数:pageIndex(页码)0/10/20/30...    pageSize(每页数量)10
*/


/*
* https://api.hongbeibang.com/education/getSeriesCourse?educationCourseId=10533
* method:GET
* 参数educationCourseId(跳转到该页面时的query参数)
* 获取新手教程课程目录
* */

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

/*
新手教程 ==> 学院作业
 https://api.hongbeibang.com/dish/getOutstandingCourseContent?pageIndex=30&pageSize=10&educationCourseId=10533
 method:GET
 参数:pageIndex=0(页码) 0/10/20/30...   pageSize(每页数量)10  educationCourseId(课程id)
* */