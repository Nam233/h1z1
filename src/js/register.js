require(["config"], function(){
	require(["jquery","load"], function($){
		$.getJSON("/mock/user_info.json", function(data){
					arr = data.data;
					allow = true;
				});
		$("#h1z1_li").click(function(){
			location.href="/html/list.html";
		});
		console.log($("#_btn"));
		$("#_btn").click(function(event) {
			/* Act on the event */
			var username = $("#user_txt").val();
			arr.forEach(function(curr){
				if(curr.username == username){
					allow = false;
				}
			});
			if(allow){
				alert("注册成功！！");
				location.href = "/index.html";
			}else{
				alert("用户名已存在！！");
				allow = true;
			}
		});
	});
});