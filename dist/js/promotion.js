/*
* @Author: CoronetLiu
* @Date:   2017-09-24 10:58:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-26 18:10:30
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

    //******************国庆倒计时**************//
    function countDown(){
        var timer = null;
        timer = setInterval(function(){
            var d = new Date();
            var aim = new Date(2017,9,1);
            var times = aim - d.getTime();
            var day = parseInt(times / (1000 * 3600 * 24));
            // console.log(day);
            var hour = parseInt((times - (day * 1000 * 3600 * 24)) / (1000 * 3600)) ;
            // console.log(hour);
            if(hour < 10){
                hour = "0" + hour;
            }
            var minute = parseInt((times - (day * 1000 * 3600 * 24) - (hour * 1000 * 3600)) / (1000 * 60));
            // console.log(minute);
            if(minute < 10){
                minute = "0" + minute;
            }
            var second = parseInt((times - (day * 1000 * 3600 * 24) - (hour * 1000 * 3600) - (minute * 1000 * 60)) / 1000);
            // console.log(second);
            if(second < 10){
                second = "0" + second;
            }
            $(".day").html(day);
            $(".hour").html(hour);
            $(".minute").html(minute);
            $(".second").html(second);
        },1000)
    }
    new countDown();
    $("#countdown").on("click",function(){
        console.log(this);
        this.remove();
    })

})//