$(function(){

	/*var sskuang = document.getElementsByClassName("sousuoK")[0];
	sskuang.oninput = function(){
		var sskValue = sskuang.value;
		console.log(sskValue);
	}*/
	$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2},function(data){
		//console.log(data);
		var str = '';
		for(let i = 0;i < data.length;i++){
			str += `
			<a href="detail.html?id=${data[i].id}">${data[i].name}</a>`
		}
		$(".banner-box .erji").html(str);
	});
	
	
	
	
	
	
	var count = 0;
	var nums = 0
	var timer = null;

	function time1(){
		count ++;
		
		if(count == 7){
			$(".pic").css("left","0");
			count = 1;			
		}
	
		
		$(".pic").stop().animate({
			left:count*-750 + "px"
		},"slow");
		$(".box-middle .nav li").eq(nums).addClass("select").siblings().removeClass("select");
		nums ++;
		if(nums == 6){
			nums = 0;
		}
	};
	timer = setInterval(time1,2000);

	$(".box-middle").hover(function(){
		clearInterval(timer);
		$(".box-middle .nav li").on("click mouseover",function(){
			
			$(this).addClass("select").siblings().removeClass("select");
			var inde =  $(this).index();
			console.log(inde);
			nums = inde;
			time1();
		});
		
	},function(){
		clearInterval(timer);
		
		timer = setInterval(time1,2000);
	});

	
	
	/*悬浮导航*/
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		//console.log(scroll);
		if(scroll >= 300){
			$(".xuanfuNav").stop().show();
		}else{
			$(".xuanfuNav").stop().hide();
		}
	});
	
	for(let i = 0;i < $("banner-box li").length;i++){
		
	}
	console.log($("banner-box li").length);
	
	
		
	
	
})