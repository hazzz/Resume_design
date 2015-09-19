/**
 * Created by haoaho on 2015/1/28.
 */

//加载时获得屏幕的宽度，赋值给slidediv
//window.onload=function(){
//    var srceen_width= $(document).width();
//    $("#slidediv").css("width",srceen_width);
////    $(".slide_cont").css("z-index",0);
//}

//slide模块鼠标滑过的方法
$(function(){
//        $(".slide_cont").css("z-index",0);
        $(".slide_but").mouseover(function () {
        $(".slide_cont").slideToggle();
        }
        )
}
)