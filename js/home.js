/*
* @Author: Marte
* @Date:   2017-09-14 22:51:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-21 12:32:12
*/

// 'use strict';
$(function(){
    // console.log(1)
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
    //*********nav***********//
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



    //**********轮播图********//
    function Banner(pic,indicator){
        this.pic = pic;
        this.indicator = indicator;
        this.index = 0;
        this.autoplay();
    }
    Banner.prototype.autoplay = function(){
        var that = this;
        this.timer = setInterval(function(){
            that.change();
            if(that.index == that.pic.children.length - 1){
                that.index = 0;
            }else{
                that.index ++;
            }

        },3000);
        this.indicator.onmouseover = function(event){
            clearInterval(that.timer);
            var e = event || window.event;
            var src = e.srcElement || e.target;
            for(var i = 0;i < that.pic.children.length;i ++){
                if(src == that.indicator.children[i]){
                    that.index = i;
                    that.change();
                }
            }
        }
        this.indicator.onmouseout = function(){
            that.timer = setInterval(function(){
                that.change();
                if(that.index == that.pic.children.length - 1){
                    that.index = 0;
                }else{
                    that.index ++;
                }

            },3000);
        }
    }
    Banner.prototype.change = function(){
        for(var i = 0;i < this.pic.children.length;i ++){
            this.pic.children[i].style.opacity = 0;
            this.indicator.children[i].className = "";
        }
        this.pic.children[this.index].style.opacity = 1;
        this.indicator.children[this.index].className = "active";
    }

    new Banner($(".pic")[0],$(".indicator")[0]);


})//