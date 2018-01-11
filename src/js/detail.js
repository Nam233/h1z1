require(["config"], function(){
	require(["load"], function(){
		$("#h1z1_li").on('click','li',function(){
			location.href="/html/list.html";
		});
		$("#alert_info").click(function(){
			alert("暂不支持批量购买");
		});
		var arg = GetUrlParms();
		//索引栏商品名
		$(".main .title span")[0].innerText = arg["name"];
		//展示栏商品名
		$(".main .con .txt .title")[0].innerText = arg["name"];
		//商品数量
		$(".main .con .txt .blue")[0].innerText = arg["num"];
		//起价
		$(".main .con .txt .green")[0].innerText = arg["price"].substr(2);
		//图片路径
		$(".main .con .img ")[0].innerHTML = `<img src="${arg["src"]}" alt="${arg["name"]}">`;
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
		$("#go_to_cart").click(function(){
			$.cookie.json = true;
			var prod = {
					title:arg["name"],
					price:arg["price"].substr(3),
					amount:1,
					img:arg["src"]
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

	});
});
function GetUrlParms()
  {
      var args=new Object();
      var query=location.search.substring(1);//获取查询串
      var pairs=query.split("&");//在逗号处断开
      for(var   i=0;i<pairs.length;i++)
      {
          var pos=pairs[i].indexOf('=');//查找name=value
          if(pos==-1)   continue;//如果没有找到就跳过
          var argname=pairs[i].substring(0,pos);//提取name
          var value=pairs[i].substring(pos+1);//提取value
          args[argname]=unescape(value);//存为属性
      }
      return args;
  }