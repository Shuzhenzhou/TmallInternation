$(function(){
$(".zhanghao").click(function(){
	$("#login1").css("display","none");
	$("#login2").css("display","block");
});
$(".erweima").click(function(){
	$("#login2").css("display","none");
	$("#login1").css("display","block");
});
$("#loginName").focusout(function(){
	var username = $("#loginName").val();
	if(username.length == 0){
		$("#alert2").css("display","block");
	}else{
		$("#alert2").css("display","none");
	}
});

$("#loginPassword").focusout(function(){
	var username = $("#loginPassword").val();
	if(username.length == 0){
		$("#alert3").css("display","block");
	}else{
		$("#alert3").css("display","none");
	}
});

$("#loginName").focus(function(){
	$("#alert2").css("display","none");
	$("#alert1").css("display","none");
	$("#alert4").css("display","none");
});
$("#loginPassword").focus(function(){
	$("#alert3").css("display","none");
	$("#alert1").css("display","none");
	$("#alert4").css("display","none");
});
$("#btn").click(function(){
	var username = $("#loginName").val();
	var passwordVal = $("#loginPassword").val();
	$("#alert3").css("display","none");
	$("#alert2").css("display","none");
	if(username.length !=0 && passwordVal.length !=0){
		
		$.post("http://47.104.244.134:8080/userlogin.do",{"name":username,"password":passwordVal},function(data){
		
					if(data.code==0){
						$.cookie("token",data.data.token,{expires:9});
						location.href = "index.html";
					}else{
						$("#alert4").css("display","block");
					}
		});
	}else{
		$("#alert1").css("display","block");
	}
});
	
	
	
})