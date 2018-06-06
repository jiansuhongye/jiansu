
var str = ' <header class="ngh_head">'+
'<div class="head">'+
    '<img src="./images/logo.jpg" alt="">'+
    '<ul>'+
      '  <li>'+
            '<a href="##" style="color:#47b791;border-top:2px solid #47b791;">首页</a>'+
        '</li>'+
        '<li>'+
           ' <a href="##">法库</a>'+
       ' </li>'+
       '<li>'+
       ' <a href="##">观点</a>'+
   ' </li>'+
   '<li>'+
           ' <a href="##">说说</a>'+
       ' </li>'+
       '<li>'+
           ' <a href="##">法学院</a>'+
       ' </li>'+
       '<li>'+
           ' <a href="##">APP</a>'+
       ' </li>'+
   ' </ul>'+
   ' <div class="ngh_go">'+
       ' <input type="text" placeholder="搜索">'+
    '    <img src="./images/ss.png" alt="">'+
   ' </div>'+
   ' <div class="ngh_gn">'+
    '    <a href="##">'+
           ' <img src="./images/shenqi.png" alt=""> 申请'+
        '</a>'+
        '<span>|</span>'+
        '<a href="##">'+
          '  <img src="./images/huifu.png" style="width:30px;height:30px;margin-top:0" alt="">回复'+
        '</a>'+
    '</div>'+
'</div>'+
'</header>'

$('body').prepend(str);