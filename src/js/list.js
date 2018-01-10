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
				/* Act on the event */
				window.location.href="/html/cart.html";
			});
			$("#product_list").on('click','img',function(event) {
				/* Act on the event */
				window.location.href="/html/detail.html";
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
