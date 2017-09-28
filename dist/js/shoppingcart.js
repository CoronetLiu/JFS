/*
* @Author: CoronetLiu
* @Date:   2017-09-23 18:31:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-28 09:39:27
*/

// 'use strict';
$(function(){
    //加载html
    $("#top").load("http://localhost/work/JFS/dist/html/top.html",function(){
        $("#code").mouseover(function(){
            // console.log(this)
            $(".code").stop().slideDown();
        })
        $("#code").mouseout(function(){
            $(".code").stop().slideUp();
        })
    });
    $("#section").load("http://localhost/work/JFS/dist/html/section.html",{data:new Date().getTime()},function(){
        $(".weixin").mouseover(function(){
            $(".erweima").stop().fadeIn();
        })
        $(".weixin").mouseout(function(){
            $(".erweima").stop().fadeOut();
        })
        $("#section").children("li").eq(2).on("click",function(){
            document.documentElement.scrollTop = 0;
        })
    });
})//