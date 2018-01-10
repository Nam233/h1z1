require(["config"], function(){
	require(["load"], function(){
		$("#h1z1_li").on('click','li',function(){
			location.href="/html/list.html";
		});
		$("#go_to_cart").click(function(){
			location.href="/html/cart.html";
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
	})
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