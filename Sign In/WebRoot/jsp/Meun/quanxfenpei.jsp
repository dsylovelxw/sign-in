<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.entity.Meun"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
   
 <html>
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
   <title>后台系统管理</title>
   
   <link  rel="stylesheet" href="/EMentTet/layui-v2.5.5/css/layui.css" >
    <link rel="stylesheet" href="/EMentTet/layui-v2.5.5/lay/layui_ext/dtree/dtree.css"  />
   <link rel="stylesheet" href="/EMentTet/layui-v2.5.5/lay/layui_ext/dtree/font/dtreefont.css"> 
   <link rel="stylesheet" href="/EMentTet/css/public.css" />
 </head>
 <body class="layui-layout-body">
 <div class="layui-layout layui-layout-admin">
   <div class="layui-header">
     <div class="layui-logo">后台系统管理</div>
     <!-- 头部区域（可配合layui已有的水平导航） -->
     <ul class="layui-nav layui-layout-left">
       <li class="layui-nav-item"><a href="">控制台</a></li>
       
     </ul>
     <ul class="layui-nav layui-layout-right">
       <li class="layui-nav-item">
         <a href="javascript:;">
           <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
           贤心
         </a>
         <dl class="layui-nav-child">
           <dd><a href="">基本资料</a></dd>
           <dd><a href="">安全设置</a></dd>
         </dl>
       </li>
       <li class="layui-nav-item"><a href="">退了</a></li>
     </ul>
   </div>
   
   <div class="layui-side layui-bg-black">
     <div class="layui-side-scroll">
       <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
       <ul class="layui-nav layui-nav-tree"  lay-filter="test"> 
        <c:forEach   var="list" items="${sessionScope.de }" >
         <li class="layui-nav-item layui-nav-itemed">
               <c:if test="${list.type==1}">
          <a class="" href="javascript:;">${ list.mben }</a>
              
          <c:forEach   var="list1" items="${sessionScope.de }">
		      	  <c:if test="${list.id == list1.fatherid }">    	
		      	   <dl class="layui-nav-child">  
		      	 	<dd>${ list1.mben } 	 	 		
		  	 	 	</dd> 
        </dl>
		      	 </c:if>	      	
		      	</c:forEach>	       
		      	 </c:if>           
           </li>
         </c:forEach>      
         <li class="layui-nav-item"><a href="">云市场</a></li>
         <li class="layui-nav-item"><a href="">发布商品</a></li>
       </ul>
     </div>
   </div>
   <div class="layui-body">
     <!-- 内容主体区域 -->
     
		 

<div class="layuimini-container">
	<div class="layuimini-main">
		 <blockquote class="layui-elem-quote quoteBox">
		<div class="layui-inline">
				<div class="layui-input-inline">
					<input type="text" name="uname" id="likename" class="layui-input" placeholder="请输入查找的登录名" />
				</div>
			</div>
			<div class="layui-inline">
				<button type="button" class="layui-btn" lay-filter="doSubmit" id="doSubmit">
		            <i class="layui-icon layui-icon-search layui-icon-normal"></i>搜索
				</button>
			</div> 
			<input type="text" id="loginName" value="${user.id }" style="display:none"/>
		</blockquote> 
		 <script type="text/html" id="toolbarDemo">
       <c:forEach var="List" items="${meunq }"> 
             ${List.mben}  
       </c:forEach>
</script>
		        <!-- 内容主体区域 -->
     <div style="padding: 15px;">	
     
     内容主体区域
		 <table id="demmmm" lay-filter="test"></table>
	 </div>
      
 
</div>
	
</div>
		  
	 </div>
   
   
   <div class="layui-footer">
     <!-- 底部固定区域 -->
     © layui.com - 底部固定区域
   </div>
 </div>
   <script src="/EMentTet/layui-v2.5.5/layui.js"></script>  
    <script src="/EMentTet/jsp/quanxian/treeTable.js"></script> 
 <script src="/EMentTet/jquery-3.4.1/jquery-3.4.1.min.js"></script> 
 
  
 
    <script src="/EMentTet/js/quan/userList.js"></script> 
  
	
 <script>
 //JavaScript代码区域
 layui.use('element', function(){
   var element = layui.element;
   
 });
 </script>
 </body>
  
	
 </html>
 