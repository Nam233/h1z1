require(["config"], function(){
	require(["load"],function(){	
		require(["jquery", "template", "cookie"], function($, template){
			$("#_return").click(function(){
				location.href="/html/list.html";
			});
			check();
			$.cookie.json = true;
			var _products = $.cookie("products") || [];
			/* 将购物车中保存的商品渲染显示到页面中 */
			var html = template("list_template", {products: _products});
			$(".com-table tbody").html(html);
			calcTotal();
			//删除按钮
			$(".com-table tbody").on('click','.del',function(){
				check();
				if (confirm("确认删除？")){
				// 当前“删除”链接所在行
				var _row = $(this).parents("tr");
				// 获取当前删除商品的 title
				var _title = _row.children(".title").text();
				// 当前删除商品在所有数组元素中的下标
				var index = exist(_title, _products);
				// 删除数组中对应下标处元素
				_products.splice(index, 1);
				// 保存回 cookie 中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 从页面删除DOM元素
				_row.remove();	
				calcTotal();
			}
			
		});
			//加减号点击事件
			$(".com-table tbody").on('click','tr td .count,.add',function(){
				check();
				var _row = $(this).parents("tr");
				var _num = _row.find('.num').text();
				if($(this).is(".count")){
					_num--;
					if(_num < 1){
						_num = 1;
						alert("最少购买一件哦！");
					}
				}else{
					_num++;
				}
				var _title = _row.children(".title").text();
				// 当前删除商品在所有数组元素中的下标
				var index = exist(_title, _products);
				// 当前行所对应的商品对象
				var _prod = _products[index];
				_prod.amount = _num;
				// 保存回 cookie 中
				$.cookie("products", _products, {expires:7, path:"/"});
				_row.find('.num').text(_num);
				_row.children('.green').text('￥'+(_num*_prod.price).toFixed(2));
				calcTotal();
			});
			//支付按钮
			$("#pay_btn").click(function(event) {
				/* Act on the event */
				check();
			});

		/************************************************************/
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
		/* 计算合计 */
		function calcTotal() {
			// 获取所有选中的商品行前的复选框
			var sum = 0;
			var piece = 0;
			$(".com-table tbody tr").each(function(index,e){
				sum += Number($(this).children('.green').text().substr(1));
				piece += Number($(this).find('.num').text());
			});
			$(".cart_money").text('￥'+sum.toFixed(2));
			$(".cart_sx").text('￥'+(sum*0.005).toFixed(2));
			$(".cart_money_all").text('￥'+(sum*1.005).toFixed(2));
			$(".cart_num").text(piece);
		}
		function check(){
			if($(".exit").length == 0){
				alert("请先登录!!");
				window.location.href="/html/login.html";
			}
		}
		});
	});
});