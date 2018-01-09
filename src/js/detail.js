require(["config"], function(){
	require(["load"], function(){
		$("#h1z1_li").click(function(){
			location.href="/html/list.html";
		});
		$("#go_to_cart").click(function(){
			location.href="/html/cart.html";
		})
	})
});