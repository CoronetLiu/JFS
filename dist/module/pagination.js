define(function(){
    class Pagination{
        constructor(){
        }
        init(res){
            Pagination.res = res;
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
                                    <a href="" class="put" id="${Pagination.res[i].id}">加入购物车</a>
                                </dd>
                            </dl>
                            `
                }
            }
            $(".list").html(html);
        }
    }
    return new Pagination();
})