layui.extend({
    dtree: '{/}layui-v2.5.5/lay/layui_ext/dtree/dtree'   // {/}的意思即代表采用自有路径，即不跟随 base 路径
}).use(['form','layer','laydate','table','laytpl','dtree'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        laytpl = layui.laytpl,
        table = layui.table;
    	var dtree = layui.dtree, layer = layui.layer, $ = layui.jquery;
    


    /*------------- 加载用户数据 --------------------------------*/
    var tableIns = table.render({
        elem: '#demmmm',
        url : '/EMentTet/UserServlet?action=EasybuyUserList',
        toolbar: '#toolbarDemo',
        page : true,
        height: 'full-145',
        limit : 10,
        limits : [10,15,20,25],
        cols : [[
        	{fixed:"left",type: "checkbox", width:50},
            {field: 'id', title: '用户名',  align:'center'},
            {field: 'userCode', title: '登录名', minWidth:100, align:"center"},
            {field: 'userName', title: '姓名',  align:'center'},
            {field: 'gender', title: '用户性别', align:'center',templet:function(d){
                return d.sex == "1" ? "男" : "女";
            }},
            {field: 'birthday', title: '身份证号',  align:'center'},
            {field: 'address', title: '邮箱', minWidth:150, align:'center'},
            {field: 'phone', title: '手机号', align:'center'},
            {field: 'bumeng_id', title: '部门',  align:'center'},
            {field: 'age', title: '年龄',  align:'center'},
            {field: 'zhicheng_id', title: '职位',  align:'center'},
            {field: 'lode_id', title: '角色',  align:'center'}
            
           
        ]]
    });
    /*------------- 加载用户数据 --end------------------------------*/
  //触发行单击事件
   // table.on('row(test)', function(obj){
   //    console.log(obj.tr) //得到当前行元素对象
    //  console.log(obj.data) //得到当前行数据
    //obj.del(); //删除当前行
    
   // });
     
    //触发行双击事件
    table.on('rowDouble(test)', function(obj){
    	obj.update(upUser(obj.data.id)) //修改当前行数据
    });
         
  //工具栏事件
	  table.on('toolbar(demmmm)', function(obj){
	    var checkStatus = table.checkStatus(obj.config.id);
	    var data = checkStatus.data;
	    var userid = '';
	    for(i=0;i<data.length;i++){
	    	userid = data[i].id;
	    	
	    }
	    alert(userid);
	    switch(obj.event){
	      case 'fenFunc':	//分配权限
				if(data.length == 0 || data.length > 1){
					layer.msg("请选择一行数据进行操作fen")
					return ;
				}else{
					hairMenu(userid);
				}
	      break;
	      
	      case 'addFunc':	//新增用户
	    	  
	    	  addUser();
	      break;
	      
	      
	      
	      case 'editFun':	//修改用户信息
	    	  if(data.length == 0 || data.length > 1){
	    		  
					layer.msg("请选择一行数据进行操作xiu")
					return ;
				}else{
					upUser(userid);
				}
	      break;
		        
	      case 'delFunc':	//删除用户
	    	  if(data.length == 0 || data.length > 1){
					layer.msg("请选择一行数据进行操作shan")
					return ;
				}else{
					layer.confirm('确定删除用户吗', {icon: 3, title:'提示'}, function(index){
						var loginName = $("#loginName").val();
						if(userid == loginName){
							layer.msg("你正在登录当前账号,无法删除")
						}else{
							delUser(userid);
							layer.close(index);
						}
		            });
				}
	      break;
	    };
	  });
	  //修改用户
	    function upUser(userid){
	    	layui.layer.open({
	    		title : "修改用户信息",
	    		type : 2,
	    		content : "jsp/yonghu/userInfo.jsp",
	    		area:['400px','540px'],
	    		success:function(layero, index){
	    			$.ajax({
	    				url:"/EMentTet/UserServlet?action=allUserByUserid",
	    				type:"post",
	    				data:{"userid":userid},
	    				success:function(data){
	    					
	    					var info = eval('(' + data + ')');
	          				var body = layui.layer.getChildFrame('body', index);
	          				body.find("#uid").val(info.id);          				
	    					body.find("#uname2").val(info.userCode);
	    					body.find("#uname").val(info.userCode);
	    					body.find("#password").val(info.userPassword);
	    					body.find("#realName").val(info.userName);
	    					body.find("#age").val(info.age);
	    					body.find("#phone").val(info.phone);
	    					//性别(单选)
	    					var sex2 = info.gender;
	    					if(sex2 == 1){
	    						body.find("#sex1").prop("checked",true);
	    					}else{
	    						body.find("#sex2").prop("checked",true);
	    					}
	    					 
	    				 
	    					

	    	    			/*------下拉框赋值--------*/
	    					$.ajax({
	    						  url:"/EMentTet/JueseServlet?action=allRole",
	    						  type:"post",
	    						  success:function(data){	
	    							 
	    							  var info = eval("("+data+")");
	    							  var row = info;
	    							 alert(row);
	    							 var body = layui.layer.getChildFrame('body', index);
	    							  var role = body.find("#role1");
	    							  var html = '';
	    	    							  $.each(row,function(index,item){
	    	    								  html += '<option value="'+item.id+'">'+item.lodName+'</option>';
	    	    								  
	    	    							  })
	    	    							  role.html(html);
	    	    							//获取新窗口对象
	    			                        var iframeWindow = layero.find('iframe')[0].contentWindow;
	    			                        //重新渲染
	    			                        iframeWindow.layui.form.render();
	    								  }
	    							  })
	    							  
	    							  	$.ajax({
	    						  url:"/EMentTet/JueseServlet?action=allBumeng",
	    						  type:"post",
	    						  success:function(data){		 
	    							  var info = eval("("+data+")");
	    							  var row = info;
	    							 
	    							  var html = '';
	    							  var body = layui.layer.getChildFrame('body', index);
	    							  var role = body.find("#bumeng");
	    							 
	    	    							  $.each(row,function(index,item){
	    	    								  html += '<option value="'+item.id+'">'+item.meng_name+'</option>';
	    	    							  })
	    	    							  role.html(html);
	    	    							//获取新窗口对象
	    			                        var iframeWindow = layero.find('iframe')[0].contentWindow;
	    			                        //重新渲染
	    			                        iframeWindow.layui.form.render();
	    								  }
	    							  })
	    							  	$.ajax({
	    						  url:"/EMentTet/JueseServlet?action=allZhicheng",
	    						  type:"post",
	    						  success:function(data){		 
	    							  var info = eval("("+data+")");
	    							  var row = info;
	    							 
	    							  var html = '';
	    							  var body = layui.layer.getChildFrame('body', index);
	    							  var role = body.find("#zhicheng");
	    						 
	    							 /* var role = body.find("#zhicheng");*/
	    	    							  $.each(row,function(index,item){
	    	    								  html += '<option value="'+item.id+'">'+item.zhi_name+'</option>';
	    	    								 
	    	    							  })
	    	    							  role.html(html);
	    	    							//获取新窗口对象
	    			                        var iframeWindow = layero.find('iframe')[0].contentWindow;
	    			                        //重新渲染
	    			                        iframeWindow.layui.form.render();
	    								  }
	    							  })
	    						  
	    				
	    					/*  ------下拉框赋值--------*/
	    					//赋值后选中
	    				/*	$.ajax({
	    						url:"/denglu/LodeSerlvet?action=allRoleUserid",
	    						type:"post",
	    						data:{"userid":userid},
	    						success:function(data){
	    							alert(data)
	    							var info2 = eval("("+data+")")
	    							if(info2 == 0){
	    								var select = 'dd[lay-value="0"]';
	        							body.find("#role1").siblings("div.layui-form-select").find('dl').find(select).click();	//菜单样式
	    							}else{
	    								var select = 'dd[lay-value='+info2.data.id+']';
	    								alert(info2.data.id)
	        							body.find("#role1").siblings("div.layui-form-select").find('dl').find(select).click();	//菜单样式
	    							}
	    						}
	    					})*/
	                        //获取新窗口对象
	                        var iframeWindow = layero.find('iframe')[0].contentWindow;
	                        //重新渲染
	                        iframeWindow.layui.form.render();
	    				}
	    			})
	    		}
	    	})
	    }
	    //新增用户
	    function addUser(){
	    	layui.layer.open({
	    		title : "添加用户",
	    		type : 2,
	    		content : "/EMentTet/jsp/yonghu/userAdd.jsp",
	    		area:['400px','490px'],
	    		success:function(layero, index){
	    			/*------下拉框赋值--------*/
					$.ajax({
						  url:"/EMentTet/JueseServlet?action=allRole",
						  type:"post",
						  success:function(data){	
							 
							  var info = eval("("+data+")");
							  var row = info;
							 alert(row);
							 var body = layui.layer.getChildFrame('body', index);
							  var role = body.find("#role1");
							  var html = '';
	    							  $.each(row,function(index,item){
	    								  html += '<option value="'+item.id+'">'+item.lodName+'</option>';
	    								  
	    							  })
	    							  role.html(html);
	    							//获取新窗口对象
			                        var iframeWindow = layero.find('iframe')[0].contentWindow;
			                        //重新渲染
			                        iframeWindow.layui.form.render();
								  }
							  })
							  
							  	$.ajax({
						  url:"/EMentTet/JueseServlet?action=allBumeng",
						  type:"post",
						  success:function(data){		 
							  var info = eval("("+data+")");
							  var row = info;
							 
							  var html = '';
							  var body = layui.layer.getChildFrame('body', index);
							  var role = body.find("#bumeng");
							 
	    							  $.each(row,function(index,item){
	    								  html += '<option value="'+item.id+'">'+item.meng_name+'</option>';
	    							  })
	    							  role.html(html);
	    							//获取新窗口对象
			                        var iframeWindow = layero.find('iframe')[0].contentWindow;
			                        //重新渲染
			                        iframeWindow.layui.form.render();
								  }
							  })
							  	$.ajax({
						  url:"/EMentTet/JueseServlet?action=allZhicheng",
						  type:"post",
						  success:function(data){		 
							  var info = eval("("+data+")");
							  var row = info;
							 
							  var html = '';
							  var body = layui.layer.getChildFrame('body', index);
							  var role = body.find("#zhicheng");
						 
							 /* var role = body.find("#zhicheng");*/
	    							  $.each(row,function(index,item){
	    								  html += '<option value="'+item.id+'">'+item.zhi_name+'</option>';
	    								 
	    							  })
	    							  role.html(html);
	    							//获取新窗口对象
			                        var iframeWindow = layero.find('iframe')[0].contentWindow;
			                        //重新渲染
			                        iframeWindow.layui.form.render();
								  }
							  })
						  }
					  })
	    		}
	    	 
	  
	    //删除用户
	    function delUser(userid){
	    	$.ajax({
	    		url:"UserServlet?action=DeleteUser",
	    		data:{"userid":userid},
	    		type:"post",
	    		success:function(data){
	    			  var info = eval("("+data+")");
	    			if(data == 1){
	    				layer.msg("删除成功")
	    				tableIns.reload("#newsList");
	    			}
	    		}
	    	})
	    }

	    
	    //分配权限
	    function hairMenu(userid){
	    	 alert(userid)
	    	layui.layer.open({
	    		title : "分配权限",
	    		type : 1,
	    		content : $('#dtree1'),
	    		area:['300px','500px'],
	    		success:function(){
	    		    //给dtree树加载数据
	    			
	    			dtree.render({
					  elem: "#dataTree3",
					  url: "/denglu/QuanServletInterface?action=allMenuDtree",
					  dataStyle: "layuiStyle",  //使用layui风格的数据格式
 				  dataFormat: "list",  //配置data的风格为list
					  response:{message:"msg",statusCode:0},  //修改response中返回数据的定义
					  checkbar:true,
					  line: true,  // 显示树线
					  done: function(res, $ul, first){
						  
						  $.ajax({
							  url:"/denglu/QuanServletInterface?action=menuByUseridType1",
							  type:"post",
							  data:{"userid":userid},
							  success:function(res){
								  
								  var cs = eval('(' + res + ')');
								  $.each(cs,function(index,row){
									dtree.chooseDataInit("dataTree3",[row.id]); // 初始化选中
								  })
							  }
						  })
	  		    	  }
	    			});
	    		} ,
	    	 btn:['分配权限'],
	    		yes: function(index, layero){
	    			var params = dtree.getCheckbarNodesParam("dataTree3");
	    			var infos = JSON.stringify(params);
	    			var cs = eval('(' + infos + ')');
	    			var menuidList = new Array();	//所有选中值的权限id
	    			//alert(menuidList.length);
	    			$.each(cs,function(index,row){
						menuidList[index] = row.nodeId;
	    			})
	    			$.ajax({
	    				url:"/denglu/QuanSerlvet?action=menuByUserid",
	    				data:{"array":menuidList,"userid":userid},
	    				type:"post",
	    				traditional:true,
	    				success:function(data){
	    					var demo = eval('(' + data + ')');
	    					if(demo.status == 1){
	    						layer.msg(demo.message);
	    						layer.close(index)	//关闭
	    					}else{
	    						layer.msg("分配失败");
	    					}
	    				}
	    			})
	    		}  
	    	})
	    }
  /*  -------- 搜索用户 ----------------------------
    $("#doSubmit").click(function(){
    	var like = $("#likename").val()
    	 tableIns.reload({
	      url:"http://localhost:8723/EEDemo/Interfaces?action=allUser&uname="+like,
	      page: {
	        curr: 1 //重新从第 1 页开始
	      }
	    });
    })
    
     
    
   
    


    //分配角色
    function HairRole(userid){
    	layer.open({
    		type:1,
    		title:"分配角色",
    		area:['200px','100px'],
    		content:$('#hairRole'),
    		success:function(){
    			//查询全部角色
    	    	$.ajax({
    	    		url:"/MenuTest/RoleServlet?action=hairRole",
    	    		type:"post",
    	    		dataType:"json",
    	    		success:function(data){
    	    			
    	    		}
    	    	})
    		}
    	})
    }
    
   
    */
     

})