/*
* @Author: CoronetLiu
* @Date:   2017-09-21 18:03:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-21 19:08:15
*/

// 'use strict';
$(function(){

     //加载html
    $("#footer").load("http://10.9.171.178/work/JFS/html/footer.html",{data:new Date().getTime()},function(){
        $(".info").mouseover(function(){
            $(this).stop().animate({
                width:590,
            })
        })
        $(".info").mouseout(function(){
            $(this).stop().animate({
                width:108,
            })
        })
    });
    $("#section").load("http://10.9.171.178/work/JFS/html/section.html",{data:new Date().getTime()},function(){
        $(".weixin").mouseover(function(){
            $(".erweima").stop().fadeIn();
        })
        $(".weixin").mouseout(function(){
            $(".erweima").stop().fadeOut();
        })
    });
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








    //*************bottom扫码*******************//
    $(".bottom_right ul").children("li").eq(2).hover(function(){
        $(".saoma").stop().fadeIn();
    },function(){
        $(".saoma").stop().fadeOut();
    })



})