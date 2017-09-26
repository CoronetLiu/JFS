define(function(){
    class Cart{
        constructor(){
        }
        init(res){
            this.res = res;
            this.rendring();
            this.howMany();
            var that = this;
            $(".list").on("click",".put",function(){
                // console.log(1);
                that.id = $(this).attr("id");
                that.storage(that.id);
                return false;
            })
            $("#acart").on("click",".del",function(){
                // console.log(this);
                that.del(this);
                return false;
            })
            $(".tb").on("change",".num",function(){
                // console.log(this);
                that.change(this);
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
            this.rendring();
            this.howMany();
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
            this.rendring();
            this.howMany();
            return false;
        }
        rendring(){//拼接字符串
            if($.cookie("goods")){
                var aCookie = JSON.parse($.cookie("goods"));
                if($(".mincart ul")){
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
                if($(".tb")){
                    //购物车拼接字符串
                    $(".tip").css({
                        display:"none"
                    })
                    $(".getinfo").css({
                        display:"block"
                    })
                    $(".balance").css({
                        display:"block"
                    })
                    var htmlcart = "";
                    for(var i = 0; i < aCookie.length;i ++){
                        var old = parseInt(this.res[aCookie[i].id].oldprice.split("￥")[1]);
                        var now = parseInt(this.res[aCookie[i].id].price.split("￥")[1]);
                        var price = 0;
                        // if($(".num")){
                        //     console.log($(".num").eq(i).val())
                        //     price = parseInt($(".num").eq(i).val()) * now;
                        // }else{
                            price = aCookie[i].num * now;
                        // }
                        htmlcart += `<tr>
                                        <td><a href="" class="del" id="${aCookie[i].id}">删除</a></td>
                                        <td><a href=""><img src="${this.res[aCookie[i].id].img}"/></a></td>
                                        <td><a href=""></a>${this.res[aCookie[i].id].name}</td>
                                        <td>${this.res[aCookie[i].id].oldprice}</td>
                                        <td>${this.res[aCookie[i].id].price}</td>
                                        <td>￥${old-now}</td>
                                        <td class="change">￥${price}</td>
                                        <td>
                                            <select class="num" data-id="${aCookie[i].id}">
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
                    $(".tb").html(htmlcart);
                    if(JSON.parse($.cookie("goods")).length == 0){
                        //购物车拼接字符串
                        $(".tip").css({
                            display:"block"
                        })
                        $(".getinfo").css({
                            display:"none"
                        })
                        $(".balance").css({
                            display:"none"
                        })
                    }
                }
            }
        }
        howMany(){//拼接数量、价格
            if($.cookie("goods")){
                var aCookie = JSON.parse($.cookie("goods"));
                if($(".totalnum")){
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
                if($(".startprice")){
                    var price = 0;
                    for(var i = 0; i < aCookie.length;i ++){
                        price += aCookie[i].num * parseInt(this.res[aCookie[i].id].price.split("￥")[1]);
                        // console.log($(".tb").find(".num").eq(i));
                        $(".tb").find(".num").eq(i).val(aCookie[i].num)
                    }
                    $(".startprice").html("￥" + price);
                    $(".endprice").html("￥" + price);
                }
            }
        }//howMany
        change(obj){
            if($.cookie("goods")){
                var aCookie = JSON.parse($.cookie("goods"));
                // console.log($(obj).val());
                // console.log($(obj).attr("data-id"));
                var id = $(obj).attr("data-id");
                var val = $(obj).val();
                for(var i = 0;i < aCookie.length;i ++){
                    if(aCookie[i].id == id){
                        aCookie[i].num = val;
                    }
                }
                var cookie = JSON.stringify(aCookie);
                $.cookie("goods",cookie);
                this.rendring();
                this.howMany();
            }
        }
    }
    return new Cart();
})