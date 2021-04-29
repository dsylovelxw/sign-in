
function quan(rsUrl,id,js) { 
	  var itme={	 
			  "id":id  
	  } 
	  $(".layui-body").load( rsUrl,itme,function(){
          var sc =  document.createElement("script");
          sc.src=js;  //是你数据表格的js
          $("body").append(sc);
       }); 
}