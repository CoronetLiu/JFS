/*
* @Author: Marte
* @Date:   2017-09-14 22:51:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-18 21:51:44
*/

// 'use strict';
$(function(){
    // console.log(1)
    //加载html
    $("#footer").load("http://10.9.171.178/work/jfs/footer.html",{data:new Date().getTime()},function(){
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
    $("#section").load("http://10.9.171.178/work/jfs/section.html",function(){
        $(".weixin").mouseover(function(){
            $(".erweima").stop().fadeIn();
        })
        $(".weixin").mouseout(function(){
            $(".erweima").stop().fadeOut();
        })
    });

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


    $.ajax({
        url:"http://10.9.171.178/work/jfs/home/1.php",
        data:new Date().getTime()
    }).then(function(res){
        console.log(res);
    })

})//