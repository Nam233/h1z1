require(["config"], function(){
	require(["jquery","load"], function($){
		$.getJSON("/mock/user_info.json", function(data){
					arr = data.data;
					allow = true;
				});
		$("#h1z1_li").click(function(){
			location.href="/html/list.html";
		});
		$("#_btn").click(function(event) {
			/* Act on the event */
			var username = $("#user_txt").val();
			var password = $("#psw_txt").val();
			var pswagain = $("#psw_again").val();
			if(username == ""||password == ""||pswagain == ""){
				alert("请输入必填选项");
			}else{
				arr.forEach(function(curr){
					if(curr.username == username){
						allow = false;
					}
				});
				var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
				if (reg.test (password)){
					if(password == pswagain){
						if(allow){
							alert("注册成功！！");
							$.cookie('username', username, { expires: 7, path: '/' });
							 location.href = "/index.html";
						}else{
							alert("用户名已存在！！");
							$("#user_txt").val("");
							$("#psw_txt").val("");
							$("#psw_again").val("");
							allow = true;
						}
					}else{
						alert("两次输入密码请一致！");
						$("#psw_txt").val("");
						$("#psw_again").val("");
					}
				}else{
					alert("密码需包含字母和数字！！");
				}
			}
		});
	});
});