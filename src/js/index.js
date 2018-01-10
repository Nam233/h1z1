require(["config"], function(){
	require(["load"], function(){
		$("#h1z1_li").on('click','li',function(){
			location.href="/html/list.html";
		});
		$(".main .product .kind .title").on('click','span',function(){
			location.href="/html/list.html";
		});
		$(".main .product .kind ul li").on('click','img',function(){
			location.href="/html/list.html";
		});
		$(".main .product .kind ul li").on('click','.titie',function(){
			location.href="/html/list.html";
		});
		$(".main .product .kind ul li").on('click','.btn',function(){
			location.href="/html/list.html";
		});
		var hhh = 0;
		var lis = $(".banner ul li"),
			len = lis.length,
			ul = $("banner ul"),
			duration = 6000,
			circles,
			currentIndex = 0,
			nextIndex = 1;
			var html = "";
			for(var i = 0;i < len;i++){
				html +="<i></i>";
			}
			$(".banner .circle")[0].innerHTML += html;
			circles = $("i",$(".banner")[0]);
			circles[0].className = "current";
		var move = (function(){
			clearInterval(timer);
			hhh = -1 *nextIndex * 660;
			if(hhh <= -660 * len)
				hhh = 0;
			console.log(hhh);
			// $(".banner ul").css("marginTop" , hhh + 'px');
			$(".banner ul").animate({marginTop:  hhh + 'px'}, 600);

			// 小圆点样式
			circles[currentIndex].className = "";
			if(nextIndex < len){
				circles[nextIndex].className = "current";
				currentIndex = nextIndex;
				nextIndex++;
			}
			else{
				circles[0].className = "current";
				currentIndex = 0;
				nextIndex = 1;
			}
		});
		console.log($(".banner")[0]);
		var timer = setInterval(move, duration);
		$(".banner ul").mouseenter(function(){
			clearInterval(timer);
		});
		$(".banner ul").mouseleave(function(){
			timer = setInterval(move,duration);
		});
		for(let i = 0;i < len;i++){
			circles[i].onclick = function(){
				if(currentIndex === i)
					return;
				nextIndex = i;
				move();
			}
		}
	});
});
