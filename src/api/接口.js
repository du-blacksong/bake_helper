//这里放每个人找到的接口，并按如下格式注释
/*
 https://api.hongbeibang.com/education/getNewbieGuide?type=1
 method:GET
 参数:type  1-8
 * */


//http://localhost:8080/api/index/get
//method:GET
//获得首页导航信息


// https://api.hongbeibang.com/recommend/getRandContent?&type=3&pageSize=10
// method:GET
//获取推荐课程列表


// https://api.hongbeibang.com/education/getIndexByWeb
// method:GET
//获取主页菜单列表

// https://api.hongbeibang.com/index/getByType?type=11
// method:GET
// 视频学堂顶部导航数据

// https://api.hongbeibang.com/index/getIndexItem?&categoryId=10163
// method:GET
// 点击视频学堂顶部导航其他
/*
 https://api.hongbeibang.com/education/getCourse?educationCourseId=10534
 method:GET
 参数:educationCourseId(课程courseId)
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
新手教程 ==> 学院作业
 https://api.hongbeibang.com/dish/getOutstandingCourseContent?pageIndex=30&pageSize=10&educationCourseId=10533
 method:GET
 参数:pageIndex=0(页码) 0/10/20/30...   pageSize(每页数量)10  educationCourseId(课程id)
* */

/*
食谱分类(推荐)
https://api.hongbeibang.com/classify/getRecommend
method:GET
参数:无
* */

/*
 食谱分类(总)
 https://api.hongbeibang.com/classify/getRecommend
 method:GET
 参数:无
 * */

/*
技巧百科==>video
 https://api.hongbeibang.com/education/getStartClassByNewbie?educationCourseId=10347
 method:GET
 参数:educationCourseId(地址的query参数contentId,其实是courseId)
* */

/*
技巧百科==>video==>推荐课程
 https://api.hongbeibang.com/recommend/getRandContent?type=3&pageSize=10
 method:GET
 参数:pageSize(每页数量)10 type 1-8
* */

/*
课程信息==>导师的其他课程
 https://api.hongbeibang.com/course/getClientOtherCourse?pageIndex=0&pageSize=10&clientId=176757&educationCourseId=10179
 method:GET
 参数:pageIndex=0(页码) 0/10/20/30...   pageSize(每页数量)10  educationCourseId(课程CourseId) clientId(应该是导师的id)
* */

/*
最新问题==>news
 https://api.hongbeibang.com/question/getNew?pageIndex=0&pageSize=10
 method:GET
 参数:pageIndex=0(页码) 0/10/20/30...   pageSize(每页数量)10 
* */
/*
最热问题==>hot
 https://api.hongbeibang.com/question/getHot?pageIndex=0&pageSize=10
 method:GET
 参数:pageIndex=0(页码) 0/10/20/30...   pageSize(每页数量)10
* */



/*
 获得 烘焙圈 ==> 最新第一个滑屏 获得烘焙圈轮播图的请求
https://api.hongbeibang.com/feed/getCategory
method:GET
* */

/*
 获得 烘焙圈 ==> 最新第二个滑屏
 https://api.hongbeibang.com/community/getByLimit?pageIndex=0&pageSize=99
 method:GET
 参数:pageIndex=0(页码)   pageSize(每页数量)99 
* */

/*
获得 烘焙圈 ==> 最新的详情
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
>>>>>>> 8f7edb7c96d8930a8365c2059d27b623906359d3
