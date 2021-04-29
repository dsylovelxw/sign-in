layui.use(['layer','table', 'treeTable'], function () {
        var $ = layui.jquery;
        var table = layui.table;
        var treeTable = layui.treeTable;
        var layer = layui.layer;

    /*------------- 加载用户数据 --------------------------------*/
    var insTb = treeTable.render({
        elem: '#demmmm',
        url : '/EMentTet/MeunSerlvet?action=QuanUserList',
        toolbar: '#toolbarDemo',
        page : true,
        height: 'full-145',
        limit : 10,
        limits : [10,15,20,25],
        tree: {
            iconIndex: 2,           // 折叠图标显示在第几列
            isPidData: true,        // 是否是id、pid形式数据
            idName: 'id',  // id字段名称
            pidName: 'fatherid'     // pid字段名称
        },
        cols : [[
        	{fixed:"left",type: "checkbox", width:50},
            {field: 'id', title: 'id',  align:'center'},
            {field: 'mName', title: '权限名称', minWidth:100, align:"center"},
            {field: 'fatherid', title: 'fatherid',  align:'center'},
            
            {field: 'type', title: '权限等级',  align:'center'},
            {field: 'mben', title: '权限内容', minWidth:150, align:'center'},
            {field: 'resUrl', title: '权限Url', align:'center'},
            {field: 'js', title: 'js', align:'center'},
            {field: 'ishide', title: 'ishide', align:'center',templet:function(d){
                return d.type == "0" ? "<span class='layui-badge layui-bg-green'>正常</span>" : "<span class='layui-badge layui-bg-red'>冻结</span>";
            }}
        ]]
    });
    /*------------- 加载用户数据 --end------------------------------*/

   
    
  //监听工具栏
  		treeTable.on('toolbar(demmmm)', function(obj){
  				
  		    switch(obj.event){
  		      case 'btn-expand':	//全部展开
  		    	  insTb.expandAll('#demoTreeTb');
  		      break;
  		      
  		      case 'btn-fold':	//全部折叠
  		    	  insTb.foldAll('#demoTreeTb');
  		      break;
  		      
  		      case 'addFunc'://新增权限
  		     
  		    	  layer.open({
  		        		title : "添加权限",
  		        		type : 2,
  		        		content : "/EMentTet/jsp/quanxian/menuAdd.jsp",
  		        		area:['800px','700px'],
  		    	  })
  		      break;
  		      
  		      case 'editFun':	//修改权限
  					updataMenu();
  		      break;
  			        
  		      case 'delFunc':	//删除权限
  		    	  layer.confirm('确定删除此权限吗?', {icon: 3, title:'提示'}, function(index){
  						delMenu();
  						layer.close(index);
  		            });
  		      break;
  		    };
  		 });
  		
  	   //---------删除权限-------
  		function delMenu(){
  	    	var menuid = '';
  	    	JSON.stringify(insTb.checkStatus().map(function (d) {
  	    		menuid = d.id;
  	        }));
  	    	if(menuid == null || menuid == ""){
  	    		layer.msg("请选中一个节点进行删除");
  	    	}else{
  	    		$.ajax({
  	    			url:"MeunSerlvet?action=delMenu",
  	    			data:{"menuid":menuid},
  	    			type:"post",
  	    			dataType:"json",
  	    			success:function(data){
  	    				var info = eval("("+data+")");
  	    				if(data == 1){
  	    					layer.msg("删除成功");
  	    					insTb.reload();
  	    				}else{
  	    					layer.msg("删除失败");
  	    				}
  	    			}
  	    		})
  	    	}
  	    }

         /*---------修改权限------*/
          function updataMenu(){
          	var authorityId = '';
          	JSON.stringify(insTb.checkStatus().map(function (d) {
          		
  				 authorityId = d.id;
  				  
              }));
          	 
          	if(authorityId == null || authorityId==""){
          		layer.msg('请选择一个进行修改');
          	}else{
          		layer.open({
                		 type:2,
                		 title:"修改权限",
                		 area:['800px','700px'],
                		 content:"/EMentTet/jsp/quanxian/menuInfo.jsp",
                		 success:function(layero, index){
                			 $.post("MeunSerlvet?action=allMenuById",{"menuid":authorityId},function(data){
                				var info = eval('(' + data + ')')
                				alert(info);
                				var body = layui.layer.getChildFrame('body', index);
                				body.find("#mid").val(info.id);
                				body.find("#mname").val(info.mName);  //权限名
                				body.find("#mfunction").val(info.mfunction);	//请求路径
                				var select = 'dd[lay-value='+info.type+']';
                				body.find("#type2").siblings("div.layui-form-select").find('dl').find(select).click();	//菜单样式
                				body.find("#mbtn").val(info.mben);		//按钮代码
                				body.find("#icon").val(info.icon);		//icon图标
                				var menuid3 = info.fatherid;
                				//上级的下拉框
                   			 $.post("/EMentTet/MeunSerlvet?action=allMenuById",{"menuid":menuid3},function(res){
               					var cs = eval('(' + res + ')');
       		                    body.find("#fatherType2").val(cs.mname);
                   			 })
                   			 
                			 })
                  	}
            	    })
          	}
          };

})