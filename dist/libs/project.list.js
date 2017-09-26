/*
* @Author: CoronetLiu
* @Date:   2017-09-25 21:07:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-26 16:07:59
*/

// 'use strict';
define(["../module/jquery.banner","../module/pagination","../module/cart"],function(res,pagination,cart){
    console.log(1);
    new Banner($(".pic")[0],$(".indicator")[0]);
    class Project{
        constructor(){
            if(Project.res){
                this.init();
            }else{
                this.load();
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
                // Pagination.res = res;
                // console.log(Pagination.res.length);
                that.init(res);
            },function(){
                alert("服务器故障！")
            })
        }
        init(res){
            pagination.init(res);
            cart.init(res);
        }
    }
    new Project();
})