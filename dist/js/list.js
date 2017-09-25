/*
* @Author: CoronetLiu
* @Date:   2017-09-21 18:03:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-25 22:29:57
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

    //***************cart *************//
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

    //****************** list ******************//
    // class Pagination{
    //     constructor(){
    //         if(!Pagination.res){
    //             this.load();
    //         }else{
    //             this.init();
    //         }
    //     }
    //     load(){
    //         var that = this;
    //         $.ajax({
    //             url:"http://10.9.171.178/work/JFS/dist/data/list.php",
    //             // data:{"data":123},
    //             dataType:"json"
    //         })
    //         .then(function(res){
    //             // console.log(res);
    //             Pagination.res = res;
    //             // console.log(Pagination.res.length);
    //             that.init();
    //         },function(){
    //             alert("服务器故障！")
    //         })
    //     }
    //     init(){
    //         var that = this;
    //         $(".pagination").pagination(Pagination.res.length,{
    //             items_per_page:20, //一页显示多少条;
    //             callback:function(index){
    //                 that.index = index; //当前显示的页数;
    //                 that.rendring();
    //                 $(".pagination").children("a").attr("href","##")
    //             }
    //         })
    //     }
    //     rendring(){
    //         var html = "";
    //         for(var i = this.index * 20;i < (this.index + 1) * 20;i ++){
    //             if(i < Pagination.res.length){
    //                 html += `
    //                         <dl>
    //                             <dt><a href="detail.html"><img src='${Pagination.res[i].img}'/></a></dt>
    //                             <dd>
    //                                 <p>${Pagination.res[i].name}</p>
    //                                 <h2>${Pagination.res[i].price}<span>${Pagination.res[i].oldprice}</span></h2>
    //                                 <a href="" class="put" id="${Pagination.res[i].id}">加入购物车</a>
    //                             </dd>
    //                         </dl>
    //                         `
    //             }
    //         }
    //         $(".list").html(html);
    //         new Cart(Pagination.res).init();
    //     }
    // }
    // new Pagination();


    // class Cart{
    //     constructor(res){
    //         this.res = res;
    //         this.howMany();
    //         this.rendring();
    //     }
    //     init(){
    //         var that = this;
    //         $(".list").on("click",".put",function(){
    //             // console.log(1);
    //             that.id = $(this).attr("id");
    //             that.storage(that.id);
    //             return false;
    //         })
    //         $("#acart").on("click",".del",function(){
    //             that.del(this);
    //         })
    //     }
    //     storage(id){//储存cookie
    //         var that = this;
    //         if(!$.cookie("goods")){//创建数据结构
    //             $.cookie("goods",'[{"id":'+id+',"num":1}]');
    //         }else{
    //             var cookie = $.cookie("goods");
    //             var aCookie = JSON.parse(cookie);
    //             var same = false;
    //             for(var i = 0;i < aCookie.length;i ++){
    //                 if(aCookie[i].id == id){
    //                     aCookie[i].num ++;
    //                     same = true;
    //                     break;
    //                 }
    //             }
    //             if(same == false){
    //                 var obj = {
    //                     id:id,
    //                     num:1
    //                 }
    //                 aCookie.push(obj);
    //             }
    //             cookie = JSON.stringify(aCookie);
    //             $.cookie("goods",cookie);
    //             // console.log($.cookie("goods"));
    //         };
    //         this.howMany();
    //         this.rendring();
    //     }
    //     del(obj){//删除cookie
    //         // $(this).parent("li").remove();
    //         // console.log($(this).attr("id"))
    //         var id = $(obj).attr("id");
    //         var cookie = $.cookie("goods");
    //         var aCookie = JSON.parse(cookie);
    //         // console.log(aCookie);
    //         for(var i = 0;i < aCookie.length;i ++){
    //             if(aCookie[i].id == id){
    //                 aCookie.splice(i,1);
    //                 // console.log(aCookie);
    //                 break;
    //             }
    //         }
    //         cookie = JSON.stringify(aCookie);
    //         $.cookie("goods",cookie);

    //         this.howMany();
    //         this.rendring();

    //         return false;
    //     }
    //     rendring(){//拼接字符串
    //         if($.cookie("goods")){
    //             var aCookie = JSON.parse($.cookie("goods"));
    //             var html = "";
    //             for(var i = 0;i < aCookie.length; i ++){
    //                 html += `<li>
    //                             <img src="${this.res[aCookie[i].id].img}"/>
    //                             <a href="">${this.res[aCookie[i].id].name}</a>
    //                             <p><span>${this.res[aCookie[i].id].price}</span> × <span>${aCookie[i].num}</span></p>
    //                             <a href="" class="del" id="${aCookie[i].id}">删除</a>
    //                         </li>`
    //             }
    //             $(".mincart ul").html(html);
    //         }
    //     }
    //     howMany(){//拼接数量、价格
    //         if($.cookie("goods")){
    //             var aCookie = JSON.parse($.cookie("goods"));
    //             var num = 0;
    //             var price = 0;
    //             // console.log(this.res[aCookie[0].id].price.split("￥")[1])
    //             for(var i = 0; i < aCookie.length;i ++){
    //                 num += aCookie[i].num;
    //                 price += aCookie[i].num * parseInt(this.res[aCookie[i].id].price.split("￥")[1]);
    //             }
    //             $(".totalnum").html(num);
    //             $(".totalprice").html("￥" + price);
    //         }
    //     }
    // }


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