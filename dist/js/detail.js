/*
* @Author: CoronetLiu
* @Date:   2017-09-22 17:06:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-24 13:31:52
*/

// 'use strict';

$(function(){

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

    //***************** 放大镜 ******************//
    function Magnifier(){
        this.position = $(".position").get(0);
        this.mark = $(".mark").get(0);
        this.big = $(".big").get(0);
        this.init();
    }
    Magnifier.prototype.init = function(){
        var that = this;
        this.mark.onmouseover = function(){
            $(".position").css({
                display:"block"
            });
            $(".big").css({
                display:"block"
            });
            that.mark.onmousemove = function(event){
                var e = event || window.event;
                that.offsetX = e.offsetX;
                that.offsetY = e.offsetY;
                that.move(e);
            }
        }
        this.mark.onmouseout = function(){
            $(".position").css({
                display:"none"
            });
            $(".big").css({
                display:"none"
            })
        }
    }
    Magnifier.prototype.move = function(e){
        var left = this.offsetX - (this.position.offsetWidth) / 2;
        var top = this.offsetY - (this.position.offsetHeight) / 2;
        left = left < 0 ? 0 : left;
        left = left > (this.mark.offsetWidth - this.position.offsetWidth) ? this.mark.offsetWidth - this.position.offsetWidth : left;
        top = top < 0 ? 0 : top;
        top = top > (this.mark.offsetHeight - this.position.offsetHeight) ? this.mark.offsetHeight - this.position.offsetHeight : top;
        $(".position").css({
            left:left,
            top:top
        });
        var proX = left / this.mark.offsetWidth;
        var proY = top / this.mark.offsetHeight;
        var positionX = 675 * proX;
        var positionY = 675 * proY ;
        this.big.style.backgroundPosition = -positionX + "px " + -positionY + "px";
    }

    new Magnifier();

    //更换图片
    $(".small").on("click","button",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        // console.log($(this).index());
        if($(this).index() == 0){
            $(".middle img").attr("src","http://www.jufengshang.com/upload/goods_img_bak/back_JaquetDrozgallery/2179721777548893.jpg");
            $(".big").get(0).style.backgroundImage = 'url("../img/35.png")'
        };
        if($(this).index() == 1){
            $(".middle img").attr("src","http://www.jufengshang.com/upload/goods_img_bak/back_JaquetDrozgallery/218012606952165.jpg")
            $(".big").get(0).style.backgroundImage = 'url("../img/36.png")'
        };

    })

    //***************** 购买数量 ************************//
    $("#add").on("click",function(){
        // console.log($("#sum").val());
        var sum = parseInt($("#sum").val());
        $("#sum").attr("value",sum + 1);
    })
    $("#minus").on("click",function(){
        // console.log($("#sum").val());
        var sum = parseInt($("#sum").val()) - 1;
        if(sum < 1){
            sum = 1;
        }
        $("#sum").attr("value",sum);
    })

    //******************猜你喜欢********************//
    $(".bottom_header").children("li").on("click",function(){
        // console.log(this);
        $(this).addClass('cur').siblings('li').removeClass('cur');
        // console.log($(this).index());
        $(".bottom_list").eq($(this).index()).css({
            display:"block"
        }).siblings(".bottom_list").css({
            display:"none"
        })
    })

    //***************** dl hover **********************//
    $(".bottom_list ").on("mouseenter","dl",function(){
        // console.log(this);
        $(this).css({
            background:"#ddd"
        });
        $(this).children("dd").children("a").eq(0).css({
            display:"inline-block"
        })
    })
    $(".bottom_list ").on("mouseleave","dl",function(){
        // console.log(this);
        $(this).css({
            background:""
        });
        $(this).children("dd").children("a").eq(0).css({
            display:"none"
        })
    })

    //*************bottom扫码*******************//
    $(".bottom_right ul").children("li").eq(2).hover(function(){
        $(".saoma").stop().fadeIn();
    },function(){
        $(".saoma").stop().fadeOut();
    })

})//