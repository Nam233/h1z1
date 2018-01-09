require(["config"], function(){
	require(["jquery","load"], function($){
		$.getJSON("/mock/user_info.json", function(data){
					arr = data.data;
					allow = false;
				});
		$("#h1z1_li").click(function(){
		console.log("ok");
		// location.href="/html/list.html";
		});
		$("#login_btn").click(function(){
			if($("#check").is(':checked')){
				var username = $("#uesr_txt").val();
				var password = $("#psw_txt").val();
				arr.forEach(function(curr){
						if(curr.username == username && curr.password == password){
							allow = true;
						}
					});
				if(allow){
					alert("登录成功");
					location.href="/index.html";
				}	
				else{
					alert("用户名密码错误！！");
				}
				allow = false;
			}
			else{
				alert("请先勾选阅读网络服务协议");
			}
		});
	});
});
