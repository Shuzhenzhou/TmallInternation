"use strict";$(function(){$(".zhanghao").click(function(){$("#login1").css("display","none"),$("#login2").css("display","block")}),$(".erweima").click(function(){$("#login2").css("display","none"),$("#login1").css("display","block")}),$("#loginName").focusout(function(){0==$("#loginName").val().length?$("#alert2").css("display","block"):$("#alert2").css("display","none")}),$("#loginPassword").focusout(function(){0==$("#loginPassword").val().length?$("#alert3").css("display","block"):$("#alert3").css("display","none")}),$("#loginName").focus(function(){$("#alert2").css("display","none"),$("#alert1").css("display","none"),$("#alert4").css("display","none")}),$("#loginPassword").focus(function(){$("#alert3").css("display","none"),$("#alert1").css("display","none"),$("#alert4").css("display","none")}),$("#btn").click(function(){var s=$("#loginName").val(),n=$("#loginPassword").val();$("#alert3").css("display","none"),$("#alert2").css("display","none"),0!=s.length&&0!=n.length?$.post("http://47.104.244.134:8080/userlogin.do",{name:s,password:n},function(s){0==s.code?($.cookie("token",s.data.token,{expires:9}),location.href="index.html"):$("#alert4").css("display","block")}):$("#alert1").css("display","block")})});