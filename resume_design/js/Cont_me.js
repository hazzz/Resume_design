/* Created by haoaho on 2014/12/22.*/


/* 置顶功能的动画效果*/
$(function(){
        $(".top").click(function(){
            $('html body').stop(true).animate({scrollTop:'0px'}, 1400);
        })
    }
)

/*鼠标移动过去后的链接效果*/
$(function(){
        $(".link").mouseover(function(){
            $(this).find("div").fadeIn(700);
        }).mouseout(function(){
                $(this).find("div").stop(true).hide();
            }
        )
}
)
