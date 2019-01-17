 $(function(){
	var id = location.search.split("=")[1];
				$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
					var str = "";
					str = `<div class="left">				
				<img src="${data.picurl}"/>
			</div>
			<div class="right">
				<span>${data.name}</span>
				<p>￥${data.price}</p>
				
				<button class="cartBtn">加入购物车</button>
			</div>`
					$(".xiangqingArea").html(str);
					
					$(".cartBtn").click(function(){
						var token = $.cookie("token");
						$.get("http://47.104.244.134:8080/cartsave.do",	{
							gid:id,
							token:token
						},function(data){
							if(data.code==0){
								alert('已加入购物车');
							}
						})
					})
				})

})