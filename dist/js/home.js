/*
* @Author: CoronetLiu
* @Date:   2017-09-14 22:51:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-24 15:16:05
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

})//