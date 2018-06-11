var str =
  ' <header class="ngh_head">' +
  '<div class="head">' +
  '<img src="../images/logo.jpg" alt="">' +
  "<ul>" +
  "  <li>" +
  '<a href="./index.html">首页</a>' +
  "</li>" +
  "<li>" +
  ' <a href="##">法库</a>' +
  " </li>" +
  "<li>" +
  ' <a href="../pages/tabpage.html">观点</a>' +
  " </li>" +
  "<li>" +
  ' <a href="./say.html">说说</a>' +
  " </li>" +
  "<li>" +
  ' <a href="./video.html">法学院</a>' +
  " </li>" +
  "<li>" +
  ' <a href="##">APP</a>' +
  " </li>" +
  " </ul>" +
  ' <div class="ngh_gn">' +
  '    <a href="##">' +
  ' <img src="../images/shenqi.png" alt="">我的申请' +
  "</a>" +
  
  '<a href="##">' +
  '  <img src="../images/huifu.png" style="width:30px;height:30px;margin-top:0" alt="">我的回复' +
  "</a>" +
 
  '<a href="##" style="margin-left:10px;" class="logonin">' +
  " 登录" +
  "</a>" +
  "</div>" +
  "</div>" +
  "</header>"
  
var loginstr = '<div class="login">'+
'<h6>加入我们</h6>'+
'<h3>JOIN US</h3>'+
'<div class="ngh_g"></div>'+
'<div class="login_text">'+
   ' <input type="text" placeholder="邮箱/手机号">'+
'</div>'+
'<div class="login_text">'+
    '<input type="password" placeholder="密码">'+
'</div>'+
'<div class="login_text" style="background:transparent">'+
    '<button>登录简诉</button>'+
    '<button style="float:right;background:#fda158">注册账号</button>'+
'</div>'+
'</div>'+
'<div class="login" style="height:430px">'+
  '  <h6>加入我们</h6>'+
    '<h3>JOIN US</h3>'+
    '<div class="ngh_g"></div>'+
    '<div class="login_text">'+
        '<input type="text" placeholder="邮箱/手机号">'+
   ' </div>'+
    '<div class="login_text">'+
       ' <input type="password" placeholder="密码">'+
    '</div>'+
    '<div class="login_text">'+
            '<input type="password" placeholder="再次输入密码">'+
    '</div>'+
    '<div class="login_text">'+
        '<input type="text" placeholder="请输入昵称">'+
   ' </div>'+
    '<div class="login_text" style="background:transparent">'+
        '<button>登录简诉</button>'+
        '<button style="float:right;background:#fda158">注册账号</button>'+
    '</div>'+
'</div>'

$('body').append(loginstr)
var strfoot =
  "<footer>" +
  '<div class="foot_contain">' +
  '<div class="go_top">' +
  ' <img src="../images/top.png" alt="">' +
  "</div>" +
  ' <img src="../images/logo1.png" alt="">' +
  "<ul>" +
  " <li>关于我们</li>" +
  "<li>联系我们</li>" +
  "<li>商业合作</li>" +
  "<li>免责声明</li>" +
  "</ul>" +
  '<div class="bq">' +
  '<div class="bq-top">COPYRIGHT 2017 - 泰安市检查技术研究所</div>' +
  '<div class="bq-bottom">中国地区</div>' +
  "</div>" +
  "</div>" +
  "</footer>";

$("body").prepend(str);
$("body").append(strfoot);

$(".head ul li").hover(
  function() {
    $(".head ul li a").css({'color': "#333","border-top": "2px solid transparent"});
    $(this).find("a") .css({ 'color': "#44b790", "border-top": "2px solid #44b790" });
  },
  function() {}
);

//返回顶部
$(".go_top").click(function() {
  $("html,body").animate({ scrollTop: "0px" }, 1000);
});
//提示信息
function Alert(str){
  showMessage(str,3000,true,'bounceInUp-hastrans','bounceOutDown-hastrans');
}
//登录注册对接
var flag = false;   //初始值  false 为未登录过
var url = 'http://116.62.16.146:8080';   //后台地址
//初始化判断登录状态
if(localStorage.getItem('username')&&localStorage.getItem('password')){
  flag = true;
  $.ajax({
      url:url+'/user/login',
      type:'post',
      data:{
      username:localStorage.getItem('username'),
      password:localStorage.getItem('password')
      },
      success:function(data){
      
      $('.logonin').html('您好，'+data.data.nickname);
      Alert('欢迎您，'+data.data.nickname)
          
      }
  })
}

//登录
  

$(".logonin").on("click", function(e) {
  if(flag == false){
    $(".login").eq(0).css({ display: "block" });
  }
  
});


$(".login_text button").eq(0).on("click", function() {
    $.ajax({
      url:url+'/user/login',
      type:'post',
      data:{
        username:$('.login_text input').eq(0).val(),
        password:$('.login_text input').eq(1).val()
      },
      success:function(data){
        console.log(data)
         flag = true
          if(data.code == 500){
            Alert('用户名或密码错误')
            $('.login_text input').eq(0).val('')
            $('.login_text input').eq(1).val('')
          }else{
            $('.logonin').html('您好，'+data.data.nickname);
            Alert('欢迎您，'+data.data.nickname)
            flag = true
            localStorage.setItem('username',$('.login_text input').eq(0).val());
            localStorage.setItem('password',$('.login_text input').eq(1).val());
            $(".login").eq(0).css({ display: "none" });
            $(".login").eq(1).css({ display: "none" });
            
          }
      }
    })
    
});
//注册
$(".login_text button").eq(1).on("click", function() {
  $(".login").eq(0).css({ display: "none" });
  $(".login").eq(1).css({ display: "block" });
});
$(".login_text button").eq(2).on("click", function() {
  $(".login").eq(0).css({ display: "block" });
  $(".login").eq(1).css({ display: "none" });
});
$(".login_text button").eq(3).on("click", function() {
  $.ajax({
    url:url+'/user/register',
    type:'post',
    data:{
      username: $('.login_text input').eq(2).val(),
      password: $('.login_text input').eq(3).val(),
      nickname: $('.login_text input').eq(5).val()
    },
    success:function(data){
      if(data.code == 200){
        Alert('注册成功');
        $(".login").eq(0).css({ display: "block" });
        $(".login").eq(1).css({ display: "none" });
      }else{
        Alert('用户名已存在')
      }
    }
  })
  
});
