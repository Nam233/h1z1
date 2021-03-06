// 定义模块，加载头部、尾部资源
define(["jquery", "cookie"], function($){
	// 将 header.html 加载显示，绑定交互效果
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
		$("#go_cart").click(function(event) {
			/* Act on the event */
			window.location.href="/html/cart.html";
		});
	}).done(function(){
		// 如果有用户登录成功，则显示欢迎信息
		var user = $.cookie("username");
		if (user && user!= "null")
			$(".login_reg").html("欢迎你：<a href='#'> "+ user +" </a> <a  class='exit'>  &nbsp;退出登录</a>");
		else
			$(".login_reg").html("<a href='/html/login.html'>请登录</a> <a href='/html/register.html'>免费注册</a>");
	}).done(function(){
			$(".login_reg").on('click','.exit',function(){
				$.cookie('username',null, { expires: 7, path: '/' }); 
				$(".login_reg").html("<a href='/html/login.html'>请登录</a> <a href='/html/register.html'>免费注册</a>");
			});
		});
	// 将 footer.html 加载显示到 div.footer 中
	$(".footer").load("/html/include/footer.html");
});
// .done(function(){
// 		// 绑定查找的键盘按键事件
// 		$(".search .word").keyup(function(){
// 			var url = "https://suggest.taobao.com/sug?code=utf-8&q="+ $(this).val() +"&callback=?";
// 			$.getJSON(url, function(data){
// 				var html = "";
// 				data.result.forEach(function(curr){
// 					html += "<div>"+ curr[0] +"</div>"
// 				});

// 				$(".search .info").html(html);
// 			});
// 		});
// 	})