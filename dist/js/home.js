/*
* @Author: CoronetLiu
* @Date:   2017-09-14 22:51:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-26 16:45:24
*/

// 'use strict';
$(function(){
    // console.log(1)
    //加载html
    $("#footer").load("http://10.9.171.178/work/JFS/dist/html/footer.html",{data:new Date().getTime()},function(){
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
    $("#section").load("http://10.9.171.178/work/JFS/dist/html/section.html",{data:new Date().getTime()},function(){
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

    //************promotion************//
    $("#close").on("click",function(){
        $("#promotion").get(0).remove();
    })

    //**********top二维码*********//
    // console.log($(".code"));
    $(".acode").hover(function(){
        $(".code").stop().fadeIn();
    },function(){
        $(".code").stop().fadeOut();
    })

    //***************cart****************//
    $("#acart").on("mouseenter",function(){
        // console.log(1);
        $(".mincart").css({
            display:"block"
        })
    })
    $("#acart").on("mouseleave",function(){
        // console.log(1);
        $(".mincart").css({
            display:"none"
        })
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

    //**********topbrands********//
    $(".topmin ul").children("li").on("click",function(){
        $(this).addClass("active").siblings().removeClass('active');
        // console.log($(".topbig"));
        $(".topbig").eq($(this).index()).addClass('cur').siblings('.topbig').removeClass('cur');
    })
    //*********probrands**********//
    $(".promin ul").children("li").on("click",function(){
        $(this).addClass("active").siblings().removeClass('active');
        // console.log($(".topbig"));
        $(".probig").eq($(this).index()).addClass('cur').siblings('.probig').removeClass('cur');
    })

    //***************资讯轮播************//
    class zxBanner{
        constructor(pic,indicator){
            this.pic = pic;
            this.indicator = indicator;
            this.index = 0;
        }
        autoplay(){
            var that = this;
            this.timer = setInterval(function(){
                that.change();
                if(that.index == that.pic.children.length - 1){
                    that.index = 0;
                }else{
                    that.index ++;
                }
            },1000);
            this.indicator.onclick = function(event){
                var e = event || window.event;
                var src = e.srcElement || e.target;
                for(var i = 0;i < that.pic.children.length;i ++){
                    if(src == that.indicator.children[i]){
                        that.index = i;
                        that.change();
                    }
                }
            }
        }
        change(){
            $(this.pic).children("li").eq(this.index).css({
                opacity:1
            }).siblings("li").css({
                opacity:0
            })
            $(this.indicator).children("span").eq(this.index).addClass('cur').siblings().removeClass('cur');
            $(".zx_left").children("div").eq(this.index).addClass('cur').siblings('div').removeClass('cur');
        }

    }

    new zxBanner($(".zx_left ul").get(0),$(".zx_left ul div").get(0)).autoplay();

    //*************bottom扫码*******************//
    $(".bottom_right ul").children("li").eq(2).hover(function(){
        $(".saoma").stop().fadeIn();
    },function(){
        $(".saoma").stop().fadeOut();
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