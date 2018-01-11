require(["config"], function(){
	require(["jquery", "template", "load","cookie"], function($, template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/list.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
			// 渲染数据
			var html = template("list_template", renderData);
			$("#product_list").html(html);
		});
			// 查找 id 所表示的商品在 products 中位置
			function exist(title, products) {
				var idx = -1;
				$.each(products, function(index, elemenet){
					if (elemenet.title == title) {
						idx = index;
						return false;
					}
				});
				return idx;
			}
			$("#product_list").delegate('.btn','click',function(event) {
				// 当前“加入购物车”父级元素
				$.cookie.json = true;
				var _box = $(this).parent();
				// 将当前选购商品的信息保存到对象中
				var prod = {
					title:_box.children(".title").text(),
					price:_box.children(".price").text().substr(4),
					amount:1,
					img:_box.children("img").attr("src")
				};
				// 查找 cookie 中已有购物车结构
				var _products = $.cookie("products") || [];
				var index = exist(prod.title, _products);
				if (index === -1) {
					// 将当前选购商品保存到数组中
					_products.push(prod);					
				} else {
					// 将已选购商品的数量自增
					_products[index].amount++;
				}
				// 将数组存回 cookie 中
				$.cookie("products", _products, {expires:7, path:"/"});
				window.location.href="/html/cart.html";
			});
			$("#product_list").on('click','img',function(event) {
				/* Act on the event */
				/* 商品名称   图片路径  在售数量  起价 */
				var name = this.parentNode.childNodes[1].innerText,
					img  = this.parentNode.childNodes[3].src,
					num  = this.parentNode.childNodes[5].childNodes[1].innerText,
					price= this.parentNode.childNodes[7].childNodes[1].innerText;
				window.location.href="/html/detail.html?name="+name+"&src="+img+"&num="+num+"&price="+price;
			});
			$("#product_list").on('click','.title',function(event) {
				/* Act on the event */
				/* 商品名称   图片路径  在售数量  起价 */
				var name = this.parentNode.childNodes[1].innerText,
					img  = this.parentNode.childNodes[3].src,
					num  = this.parentNode.childNodes[5].childNodes[1].innerText,
					price= this.parentNode.childNodes[7].childNodes[1].innerText;
				window.location.href="/html/detail.html?name="+name+"&src="+img+"&num="+num+"&price="+price;
			});

			// $(".main .list img").click(function(){
			// 	location.href = "/html/detail.html";
			// });
			// $(".main .list .title").click(function(){
			// 	location.href = "/html/detail.html";
			// });

	});
});
