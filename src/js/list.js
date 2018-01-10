require(["config"], function(){
	require(["jquery", "template", "load"], function($, template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/list.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
			// 渲染数据
			var html = template("list_template", renderData);
			$("#product_list").html(html);
		});
			$("#product_list").on('click','.btn',function(event) {
				/* 商品名称   图片路径  在售数量  起价 */
				var name = this.parentNode.childNodes[1].innerText,
					img  = this.parentNode.childNodes[3].src,
					num  = this.parentNode.childNodes[5].childNodes[1].innerText,
					price= this.parentNode.childNodes[7].childNodes[1].innerText;
				window.location.href="/html/cart.html?name="+name+"&src="+img+"&num="+num+"&price="+price;
			});
			$("#product_list").on('click','img',function(event) {
				/* Act on the event */
				var name = this.parentNode.childNodes[1].innerText,
					img  = this.parentNode.childNodes[3].src,
					num  = this.parentNode.childNodes[5].childNodes[1].innerText,
					price= this.parentNode.childNodes[7].childNodes[1].innerText;
				window.location.href="/html/detail.html?name="+name+"&src="+img+"&num="+num+"&price="+price;
			});
			$("#product_list").on('click','.title',function(event) {
				/* Act on the event */
				window.location.href="/html/detail.html";
			});

			// $(".main .list img").click(function(){
			// 	location.href = "/html/detail.html";
			// });
			// $(".main .list .title").click(function(){
			// 	location.href = "/html/detail.html";
			// });
	});
});
