/*
* @Author: Marte
* @Date:   2017-09-15 13:23:40
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-15 13:25:57
*/

// 'use strict';

$(function(){

    $("#code").mouseover(function(){
        $(".code").stop().slideDown();
    })
    $("#code").mouseout(function(){
        $(".code").stop().slideUp();
    })
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
    $(".weixin").mouseover(function(){
        $(".erweima").stop().fadeIn();
    })
    $(".weixin").mouseout(function(){
        $(".erweima").stop().fadeOut();
    })


})