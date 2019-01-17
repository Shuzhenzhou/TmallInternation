$(function(){
	$.get("http://47.104.244.134:8080/goodsbytid.do",{
		tid:13,
		page:1,
		limit:10
	},function(data){
		var listData = data.data;
		var str = "";
		
		
		for(var i = 0; i < listData.length; i++){
			
			str +=`<li>
			<a href="detail.html?id=${listData[i].id}"><img src="${listData[i].picurl}" alt="" /></a>
			<p>￥${listData[i].price}</p>
			<span>${listData[i].name}</span>
			<a href="detail.html?id=${listData[i].id}" class="qianggou">立即抢购</a>
			</li>`;
		}		
		$(".listArea ul").html(str);
	
	})
})