$(function(){
	var zcflagNum = false;
	var zcflagHua = false;
	var reg1 = /^1\d{10}/;
	$(".reg1ion").click(function(){
		
		$(".areaList").toggle();
		
		
	}).find("li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var bText = $(this).find("b").text();
		var strongText = $(this).find("strong").text();
		$(".reg1ion").find("i").html(bText);
		$(".reg1ion").find("em").html(strongText);	
		
	});
	$(".reg1ion li").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	});
	$("input").focusout(function(){

		var tex = Number($(this).val())

		if($(this).val().length != 11 ){
			$(".content p").css({"display":"block"});
		}else{
			if(reg1.test(tex) == false){
			$(".content p").css({"display":"block"});				
			}else{
			$(".content p").css({"display":"none"});
			zcflagNum = true;
			if(zcflagNum && zcflagHua){
				$(".btnzc1-1").css("background","#f00");
			}
			}
		}

});
$(".huakuai i").mousedown(function(event){
	var offX = event.offsetX;
	var lef = $(".huakuai i").offset().left;

	$(document).mousemove(function(event){
		var wo = event.clientX - lef - offX;
		if(wo < 0){
			wo = 0;
		};
		if(wo >= 260){
			wo = 260;
		}
		var oI = $(".huakuai i")[0];
		oI.style.left = wo + "px";
		return false;
	});
});
$(document).mouseup(function(event){
	var lef = $(".huakuai i").offset().left;
	var left1 = parseInt($(".huakuai i").css("left"));
	var width = $(".huakuai i").width();
	event.stopPropagation();
	$(document).off("mousemove");
	if(left1 < 260){
		$(".huakuai i").animate({
			left:0
		});
	}
	if(left1 >= 260){
			$(".huakuai i").attr({
				position:"static"
			});
			$(".huakuai").css("background","aqua");
			zcflagHua = true;
			if(zcflagNum && zcflagHua){
				$(".btnzc1-1").css("background","#f00");
			}
	}
});

var timer = setInterval(function(){
	$(".liang").css("left","0");
	$(".liang").animate({
		left:"139px"
	});
},1001);

if(zcflagNum && zcflagHua){
	$(".btnzc1-1").css("background","#f00");
}

$(".btnzc1-1").click(function(){
	
	if(zcflagNum && zcflagHua){		
		$(".content").css("display","none");
		$(".sjyz").css("display","block");
		var phoneName =$(".phonename").val(); 
		$(".phonename-1").html(phoneName);
	}
	
});
//注册页面-手机验证
var reg2 = /\d{6}/;
$(".yanzheng button").click(function(){
	
	var Txt = $(".yz-2-1 input").val();
	if(reg2.test(Txt) == true){
		$(".sjyz").css("display","none");
		$(".tianxieXX").css("display","block");
		$(".box1 li").eq(1).addClass("active").siblings().removeClass("active");
	}else{
		alert("验证吗输入不正确");
	}
});
//填写用户资料
$("#username").focusout(function(){
	var name = $("#username").val();
	console.log($(this).val());
	if($(this).val().length != 0){
		$.get("http://47.104.244.134:8080/username.do",{username:name},function(data){
		if(data.code == 0){			
			$(".yizhuce").css("display","block");
			$(".keyiyong").css("display","none");
		}else{
			$(".keyiyong").css("display","block");
			$(".yizhuce").css("display","none");
		}
	});	
	
	}else{
		$(this).next("span").css("display","block");
		
	}
	
});


$("#email").focusout(function(){
	var email = $("#email").val();
	console.log($(this).val());
	console.log(email);
	if($(this).val().length != 0){
		$.get("http://47.104.244.134:8080/useremail.do",{email:email},function(data){
		if(data.code == 0){			
			$(".youxiangyizhuce").css("display","block");
			$(".youxiangkeyiyong").css("display","none");
		}else{
			$(".youxiangkeyiyong").css("display","block");
			$(".youxiangyizhuce").css("display","none");
		}
	});	
	
	}else{
		$(this).next("span").css("display","block");
		
	}
	
});
$(".tianxieXX input").focusout(function(){
	if($(this).val().length == 0){
		$(this).next("span").css("display","block");
	}else{
		$(this).next("span").css("display","none");
	}
});

$(".tianxieXX button").click(function(){
	var nameT = $("#username").val();
	var psw = $("#password").val();
	var ema = $("#email").val();
	var sexVal = $(".sexBox input[name='sex']:checked").val();
	var reg=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;

	$.get("http://47.104.244.134:8080/username.do",{username:nameT},function(data){
		
		if(data.code != 0 && psw.length !=0 && reg.test(ema) ==true && sexVal){
			console.log("aa",sexVal);
			$.post("http://47.104.244.134:8080/usersave.do",{"username":nameT,"password":psw,"email":ema,"sex":sexVal},function(data){
			})
		}
		$(".tianxieXX").css("display","none");
		$(".zhuceOk").css("display","block");
		$(".box1 li").eq(3).addClass("active").siblings().removeClass("active");
	});

})

})
