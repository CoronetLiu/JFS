/*
* @Author: CoronetLiu
* @Date:   2017-09-21 14:11:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-21 17:44:49
*/

// 'use strict';

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

        },2000);
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

            },2000);
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

