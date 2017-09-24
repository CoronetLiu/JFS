/*
* @Author: CoronetLiu
* @Date:   2017-09-24 10:58:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-24 22:11:45
*/

// 'use strict';
$(function(){

    //**********top二维码*********//
    // console.log($(".code"));
    $(".acode").hover(function(){
        $(".code").stop().fadeIn();
    },function(){
        $(".code").stop().fadeOut();
    })
    //*********nav a***********//
    // console.log($(".nav"))
    $(".nav").children("li").hover(function(){
        // console.log(this);
        $(this).children("a").css({
            background:"#1f1f1f"
        });
        $(this).children("a").hover(function(){
            $(this).css({
                color:"#fff"
            })
        },function(){
            $(this).css({
                color:""
            })
        })
    },function(){
        $(this).children("a").css({
            background:""
        })
    })

    //**************section 回到顶部 *****************//
    $(".weixin").mouseover(function(){
        $(".erweima").stop().fadeIn();
    })
    $(".weixin").mouseout(function(){
        $(".erweima").stop().fadeOut();
    })
    $("#section").children("li").eq(2).on("click",function(){
        document.documentElement.scrollTop = 0;
    })

})//