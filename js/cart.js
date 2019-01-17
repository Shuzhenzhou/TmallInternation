$(function(){
	console.log($("#totalPrice span"));
	function zongJia(){
				var sum = 0;
				$(".cartBox input:checked").siblings(".jieshao").find(".perTotle").find("em").each(function(){
					sum += parseInt($(this).html());
				});
				$("#totalPrice span").html(sum);
		}
	
	$.get("http://47.104.244.134:8080/cartlist.do",{token:$.cookie("token")},function(data){
		
		var str = "";
		for(var i = 0; i < data.length; i++){
			str += `<li>
					<input type="checkbox">
					<div class="cartImg">
						<img src="${data[i].goods.picurl}"/>
					</div>
					<div class="jieshao">
						<p>${data[i].goods.name}</p>
						<span class="danjia"><i>单价:</i><em>${data[i].goods.price}</em></span>
						<span class="perTotle"><i>总价:</i><em>${data[i].count*data[i].goods.price}</em></span>
					</div>
					<div class="shuliang">
						<p>数量：&nbsp;&nbsp;&nbsp;<i>${data[i].count}</i></p>
						<button class="add" data-id="${data[i].id}" data-gid="${data[i].gid}">+</button>
						<button class="minus" data-id="${data[i].id}" data-gid="${data[i].gid}">-</button>
						<button class = "delete" data-id="${data[i].id}" data-gid="${data[i].gid}">删除商品</button>
					</div>					
				</li>`
		}
		
		$(".cartBox ul").html(str);
		$(".cartBox input").prop("checked",true);
		zongJia();
		for(let i=0; i < $(".cartBox li").length;i++){
			 $(".cartBox li").eq(i).find(".add").click(function(){
			 	var _this = $(this);
			 	var id = $(this).attr("data-id");
			 	var gid = $(this).attr("data-gid");
			 	var token = $.cookie("token");	 	
			 	$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:gid,num:1,token:token},function(data){
					if(data.code == 0){
						var thisNum = $(_this).siblings("p").find("i").html();
						$(_this).siblings("p").find("i").html(++thisNum);						
						var price = $(_this).parent().siblings(".jieshao").find(".danjia").find("em").html()*thisNum;
						$(_this).parent().siblings(".jieshao").find(".perTotle").find("em").html(price)
					}
					zongJia();
			 	});
			});
			
			$(".cartBox li").eq(i).find(".minus").click(function(){
			 	var _this = $(this);
			 	var id = $(this).attr("data-id");
			 	var gid = $(this).attr("data-gid");
			 	var token = $.cookie("token");	 	
			 	$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:gid,num:-1,token:token},function(data){
					if(data.code == 0){		
						var thisNum = $(_this).siblings("p").find("i").html();
						$(_this).siblings("p").find("i").html(--thisNum);						
						var price = $(_this).parent().siblings(".jieshao").find(".danjia").find("em").html()*thisNum;
						$(_this).parent().siblings(".jieshao").find(".perTotle").find("em").html(price);						
						if(thisNum == 0){
							$(_this).parent().parent().remove();
							$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:gid,num:0,token:token},function(data){
			 				});		 				
						}
					}
					zongJia();
			 	});
			 	
			});			
			
			$(".cartBox li").eq(i).find(".delete").click(function(){
			 	var _this = $(this);
			 	var id = $(this).attr("data-id");
			 	var gid = $(this).attr("data-gid");
			 	var token = $.cookie("token");
			 	
			 	$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:gid,num:0,token:token},function(data){
					if(data.code == 0){						
						$(_this).parent().parent().remove();
					}
					zongJia();
			 	});
			 	
			});
			$(".cartBox input").click(function(){
				zongJia();
			});
		}
		
	})
})