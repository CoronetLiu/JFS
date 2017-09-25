define(function(){
    class Cart{
        constructor(){
        }
        init(res){
            this.res = res;
            this.howMany();
            this.rendring();
            var that = this;
            $(".list").on("click",".put",function(){
                // console.log(1);
                that.id = $(this).attr("id");
                that.storage(that.id);
                return false;
            })
            $("#acart").on("click",".del",function(){
                that.del(this);
                return false;
            })
        }
        storage(id){//储存cookie
            var that = this;
            if(!$.cookie("goods")){//创建数据结构
                $.cookie("goods",'[{"id":'+id+',"num":1}]');
            }else{
                var cookie = $.cookie("goods");
                var aCookie = JSON.parse(cookie);
                var same = false;
                for(var i = 0;i < aCookie.length;i ++){
                    if(aCookie[i].id == id){
                        aCookie[i].num ++;
                        same = true;
                        break;
                    }
                }
                if(same == false){
                    var obj = {
                        id:id,
                        num:1
                    }
                    aCookie.push(obj);
                }
                cookie = JSON.stringify(aCookie);
                $.cookie("goods",cookie);
                // console.log($.cookie("goods"));
            };
            this.howMany();
            this.rendring();
        }
        del(obj){//删除cookie
            // console.log($(this).attr("id"))
            var id = $(obj).attr("id");
            var cookie = $.cookie("goods");
            var aCookie = JSON.parse(cookie);
            // console.log(aCookie);
            for(var i = 0;i < aCookie.length;i ++){
                if(aCookie[i].id == id){
                    aCookie.splice(i,1);
                    // console.log(aCookie);
                    break;
                }
            }
            cookie = JSON.stringify(aCookie);
            $.cookie("goods",cookie);
            this.howMany();
            this.rendring();
            return false;
        }
        rendring(){//拼接字符串
            if($.cookie("goods")){
                var aCookie = JSON.parse($.cookie("goods"));
                var html = "";
                for(var i = 0;i < aCookie.length; i ++){
                    html += `<li>
                                <img src="${this.res[aCookie[i].id].img}"/>
                                <a href="">${this.res[aCookie[i].id].name}</a>
                                <p><span>${this.res[aCookie[i].id].price}</span> × <span>${aCookie[i].num}</span></p>
                                <a href="" class="del" id="${aCookie[i].id}">删除</a>
                            </li>`
                }
                $(".mincart ul").html(html);
            }
        }
        howMany(){//拼接数量、价格
            if($.cookie("goods")){
                var aCookie = JSON.parse($.cookie("goods"));
                var num = 0;
                var price = 0;
                // console.log(this.res[aCookie[0].id].price.split("￥")[1])
                for(var i = 0; i < aCookie.length;i ++){
                    num += aCookie[i].num;
                    price += aCookie[i].num * parseInt(this.res[aCookie[i].id].price.split("￥")[1]);
                }
                $(".totalnum").html(num);
                $(".totalprice").html("￥" + price);
            }
        }
    }
    return new Cart();
})