/*
* @Author: CoronetLiu
* @Date:   2017-09-21 18:03:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-24 13:32:46
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

    //****************** list ******************//
    class Pagination{
        constructor(){
            if(!Pagination.res){
                this.load();
            }else{
                this.init();
            }
        }
        load(){
            var that = this;
            $.ajax({
                url:"http://10.9.171.178/work/JFS/dist/data/list.php",
                // data:{"data":123},
                dataType:"json"
            })
            .then(function(res){
                // console.log(res);
                Pagination.res = res;
                // console.log(Pagination.res.length);
                that.init();
            },function(){
                alert("服务器故障！")
            })
        }
        init(){
            var that = this;
            $(".pagination").pagination(Pagination.res.length,{
                items_per_page:20, //一页显示多少条;
                callback:function(index){
                    that.index = index; //当前显示的页数;
                    that.rendring();
                    $(".pagination").children("a").attr("href","##")
                }
            })
        }
        rendring(){
            var html = "";
            for(var i = this.index * 20;i < (this.index + 1) * 20;i ++){
                if(i < Pagination.res.length){
                    html += `
                            <dl>
                                <dt><a href="detail.html"><img src='${Pagination.res[i].img}'/></a></dt>
                                <dd>
                                    <p>${Pagination.res[i].name}</p>
                                    <h2>${Pagination.res[i].price}<span>${Pagination.res[i].oldprice}</span></h2>
                                    <a href="">加入购物车</a>
                                </dd>
                            </dl>
                            `
                }
            }
            $(".list").html(html)
        }
    }

    new Pagination();

    //**************** dl hover ****************//

    $(".list").on("mouseenter","dl",function(){
        // console.log(this);
        $(this).css({
            background:"#ddd"
        });
        $(this).children("dd").children("a").eq(0).css({
            display:"inline-block"
        })
    })
    $(".list").on("mouseleave","dl",function(){
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



})