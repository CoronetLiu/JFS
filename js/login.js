/*
* @Author: Marte
* @Date:   2017-09-14 17:30:55
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-21 12:34:03
*/

// 'use strict';
$(function(){
    // console.log(1);

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


    //*******************登录********************//
    $(document).ajaxStart(function(){
        $("#btn").html("登录中...");
    })
    $("#btn").click(function(event){
        var user = $("input[name=user]").val();
        var password = $("input[name=password").val();
        if(user == ""){
            $(".tips")[0].innerHTML = "用户名不能为空！";
            $("input[name=user]").css({
                borderColor:"red"
            })
        }else if(password == ""){
            $(".tips")[0].innerHTML = "";
            $("input[name=user]").css({
                borderColor:""
            });
            $(".tips")[1].innerHTML = "请输入密码！";
            $("input[name=password]").css({
                borderColor:"red"
            })
        }else{
            $(".tips")[1].innerHTML = "";
            $("input[name=password]").css({
                borderColor:""
            });

            $.ajax({
                url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                type:"POST",
                data:{
                    status:"login",
                    userID:user,
                    password:password
                }
            })
            .then(function(res){
                $("#btn").html("登录");
                switch(res){
                    case "0":$(".tips")[0].innerHTML = "用户不存在！";
                            $("input[name=user]").css({
                                borderColor:"red"
                            });
                            $(".tips")[1].innerHTML = "";
                            $("input[name=password]").css({
                                borderColor:""
                            });
                            break;
                    case "2":$(".tips")[1].innerHTML = "密码错误！";
                            $("input[name=password]").css({
                                borderColor:"red"
                            });
                            $(".tips")[0].innerHTML = "";
                            $("input[name=user]").css({
                                borderColor:""
                            });
                            break;
                    default:
                            $(".tips")[0].innerHTML = "";
                            $("input[name=user]").css({
                                borderColor:""
                            });
                            $(".tips")[1].innerHTML = "";
                            $("input[name=password]").css({
                                borderColor:""
                            });
                            $("#loading").css({
                                display:"block"
                            })
                            setTimeout(function(){
                                window.location.href = "../html/home.html";
                            },3000)
                }
            },function(){
                alert("未知错误");
            })

        }
        //阻止默认事件
        var e = event || window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue = false;
        }

    })

})