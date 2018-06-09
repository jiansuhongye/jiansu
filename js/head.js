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
  ' <img src="../images/shenqi.png" alt=""> 申请' +
  "</a>" +
  "<span>|</span>" +
  '<a href="##">' +
  '  <img src="../images/huifu.png" style="width:30px;height:30px;margin-top:0" alt="">回复' +
  "</a>" +
  "<span>|</span>" +
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
'<div class="login" style="height:380px">'+
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
    $(".head ul li a").css({
      color: "#333",
      "border-top": "2px solid transparent"
    });
    $(this)
      .find("a")
      .css({ color: "#44b790", "border-top": "2px solid #44b790" });
  },
  function() {}
);

$(".go_top").click(function() {
  $("html,body").animate({ scrollTop: "0px" }, 1000);
});

$(".logonin").on("click", function() {
  $(".login").eq(0).css({ display: "block" });
});

$(".login_text button").eq(1).on("click", function() {
    $(".login").eq(0).css({ display: "none" });
    $(".login").eq(1).css({ display: "block" });
});
$(".login_text button").eq(2).on("click", function() {
    $(".login").eq(0).css({ display: "block" });
    $(".login").eq(1).css({ display: "none" });
});
$(".login_text button").eq(0).on("click", function() {
    $(".login").eq(0).css({ display: "none" });
    $(".login").eq(1).css({ display: "none" });
});
