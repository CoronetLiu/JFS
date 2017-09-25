/*
* @Author: CoronetLiu
* @Date:   2017-09-23 18:31:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-25 20:25:18
*/

// 'use strict';
$(function(){
    //加载html
    $("#top").load("http://10.9.171.178/work/JFS/dist/html/top.html",function(){
        $("#code").mouseover(function(){
            // console.log(this)
            $(".code").stop().slideDown();
        })
        $("#code").mouseout(function(){
            $(".code").stop().slideUp();
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
    if($.cookie("goods")){
        var aCookie = JSON.parse($.cookie("goods"));
        var html = "";
        for(var i = 0; i < aCookie.length;i ++){
            html += `<tr>
                        <td><a href="" class="del">删除</a></td>
                        <td><a href=""><img src="${}"/></a></td>
                        <td><a href="">雅克德罗Bird Repeater系列J031033200男士手动机械表（Jaquet Droz）全球限量8只</a></td>
                        <td>￥3800000</td>
                        <td>￥3230000.00</td>
                        <td>￥570000</td>
                        <td>￥3230000.00</td>
                        <td>
                            <select name="" id="num">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </td>
                    </tr>`
        }
    }

})//