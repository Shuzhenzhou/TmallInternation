"use strict";$(function(){$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2},function(e){for(var l="",n=0;n<e.length;n++)l+='\n\t\t\t<a href="detail.html?id='+e[n].id+'">'+e[n].name+"</a>";$(".banner-box .erji").html(l)});var e=0,l=0,n=null;function t(){7==++e&&($(".pic").css("left","0"),e=1),$(".pic").stop().animate({left:-750*e+"px"},"slow"),$(".box-middle .nav li").eq(l).addClass("select").siblings().removeClass("select"),6==++l&&(l=0)}n=setInterval(t,2e3),$(".box-middle").hover(function(){clearInterval(n),$(".box-middle .nav li").on("click mouseover",function(){$(this).addClass("select").siblings().removeClass("select");var e=$(this).index();console.log(e),l=e,t()})},function(){clearInterval(n),n=setInterval(t,2e3)}),$(window).scroll(function(){300<=$(this).scrollTop()?$(".xuanfuNav").stop().show():$(".xuanfuNav").stop().hide()});for(var o=0;o<$("banner-box li").length;o++);console.log($("banner-box li").length)});