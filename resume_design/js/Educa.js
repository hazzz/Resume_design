/**du_birth
 * Created by haoaho on 2014/12/19.
 */


/*educa的鼠标滑过效果*/
$(function(){
        $(".strike").mouseover(function(){
            $(this).find("div").stop(true).fadeIn(600);
        }).mouseout(function(){
               $(this).find("div").stop(true).fadeOut(600);
            }
        )
    }
)

/*弹出框得到图片效果*/
$(function(){
        $(".fea_cont_del").mouseover(function(){
            var pho_del = $(this).find("a").attr("href");
            $(".pop_box").css("background-image","url("+pho_del+")");
            var clck=$(this).find(".masking").show();
            clck.click(function(){
                $(".pop_box").fadeIn(600);
                var hegit_page= $(document).height();
                $("#grey").css("height",hegit_page);
                $("#grey").show();
            })
            $(this).find(".fea_describe").show();
        }).mouseout(function(){
            $(this).find(".masking").hide();
            $(this).find(".fea_describe").hide();
        })

        $(".close").click(function(){
            $(".pop_box").stop(true).fadeOut(800);
            $("#grey").hide();

        })
    }
)

/*弹出框跳转新页面效果*/
$(function(){
        $(".fea_cont_del0").mouseover(function(){
            var clck1=$(this).find(".masking").show();
//            var pho_del1 = $(this).find("a").attr("href");
//            clck1.click(function(){
//                window.open(pho_del1);
//            })
            $(this).find(".fea_describe").stop(true).show();
        }).mouseout(function(){
            $(this).find(".masking").hide();
            $(this).find(".fea_describe").hide();
        })
    }
)