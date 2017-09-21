/*
* @Author: Marte
* @Date:   2017-09-14 22:54:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-21 12:33:47
*/

// 'use strict';

$(function(){

    //加载html
    $("#top").load("http://10.9.171.178/work/JFS/html/top.html",function(){
        $("#code").mouseover(function(){
            // console.log(this)
            $(".code").stop().slideDown();
        })
        $("#code").mouseout(function(){
            $(".code").stop().slideUp();
        })
    });
    $("#footer").load("http://10.9.171.178/work/JFS/html/footer.html",function(){
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
    $("#section").load("http://10.9.171.178/work/JFS/html/section.html",function(){
        $(".weixin").mouseover(function(){
            $(".erweima").stop().fadeIn();
        })
        $(".weixin").mouseout(function(){
            $(".erweima").stop().fadeOut();
        })
    });

    //*******************注册**********************//

    $(document).ajaxStart(function(){
        $("#btn").attr("value","注册中...")
    })
    var index = 0;
    $("#btn").on("click",function(){
        $("form").validate();
        var user = $("input[name=user]").val();
        var password = $("input[name=password]").val();
        if(index == 0){//第一次点击
            index = 1;
            console.log($("input").hasClass("error"),0);
            if($("input").hasClass("error")){//如果有错填项
                console.log(1);
                $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    data:{
                        status:"register",
                        userID:user,
                        password:password
                    },
                    type:"POST"
                })
                .then(function(res){
                    console.log(res)
                    $("#btn").attr("value","注册");
                    switch(res){
                        case "0":
                                $("label[for=user]").css({
                                    display:"block"
                                }).html("用户名已注册")
                                break;
                        case "1":
                                $("label[for=user]").css({
                                    display:"none"
                                }).html("");
                                $("#loading").css({
                                    display:"block"
                                });
                                setTimeout(function(){
                                    window.location.href = "../html/home.html";
                                },3000)
                                break;
                        case "2":$("#loading").html("服务器炸了！");
                                break;
                    }
                },function(a,b,c){
                    alert("未知错误！")
                })//ajax 结束
                return false;
            }
        }else{//不是第一次点击
            console.log(!$("input").hasClass("error"),1);
            if(!$("input").hasClass("error")){//如果全部正确
                console.log(2);
                $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    data:{
                        status:"register",
                        userID:user,
                        password:password
                    },
                    type:"POST"
                })
                .then(function(res){
                    console.log(res)
                    $("#btn").attr("value","注册");
                    switch(res){
                        case "0":
                                $("label[for=user]").css({
                                    display:"block"
                                }).html("用户名已注册")
                                break;
                        case "1":
                                $("label[for=user]").css({
                                    display:"none"
                                }).html("");
                                $("#loading").css({
                                    display:"block"
                                });
                                setTimeout(function(){
                                    window.location.href = "../html/home.html";
                                },3000)
                                break;
                        case "2":$("#loading").html("服务器炸了！");
                                break;
                    }
                },function(a,b,c){
                    alert("未知错误！")
                })//ajax 结束
                return false;
            }
        }//index 判断
    })

    //随机验证码
    function codeRandom(){
        var rcode = "";
        var str = "1234567890";
        for(var i = 0;i < 4;i ++){
            rcode += str[Math.round(Math.random() * (str.length - 1))];
        }
        return rcode;
    }
    $("#field").attr("value",codeRandom());
    $("i").on("click",function(){
        // console.log(1);
        $("#field").attr("value",codeRandom());
    })

})