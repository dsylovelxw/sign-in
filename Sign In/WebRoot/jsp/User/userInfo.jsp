<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>新增用户</title>
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="telephone=no">
	  <link rel="stylesheet" href="<%=basePath %>/css/layui.css" media="all" />
	 
	<link rel="stylesheet" href="<%=basePath %>/css/public.css" media="all" />
</head>
<body class="childrenBody">
<form class="layui-form layui-form-pane" action="Javascript:void(0)">
  <div class="layui-form-item">
    <label class="layui-form-label">用户编号</label>
    <div class="layui-input-inline">
      <input type="text" name="uid" id="uid" lay-verify="required" disabled="" placeholder="用户编号" autocomplete="off" class="layui-input">
    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">登录名</label>
    <div class="layui-input-inline">
    	<input type="text" name="uname2" id="uname2" style="display:none" lay-verify="required" placeholder="请输入登录名"  autocomplete="off" class="layui-input">
      <input type="text" name="uname" id="uname" lay-verify="required" placeholder="请输入登录名" autocomplete="off" class="layui-input">
    </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">密码</label>
    <div class="layui-input-inline">
      <input type="text" name="password" id="password" placeholder="默认密码123456"  value="123456" autocomplete="off" class="layui-input">
    </div>
  </div>
  
   <div class="layui-form-item">
    <label class="layui-form-label">用户名</label>
    <div class="layui-input-inline">
      <input type="text" name="realName" id="realName" lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
    </div>
  </div>
  
  <div class="layui-form-item" pane="">
    <label class="layui-form-label">性别</label>
    <div class="layui-input-block">
      <input type="radio" name="st_Sex" id="sex1" value="1" title="男">
      <input type="radio" name="st_Sex" id="sex2" value="2" title="女">
    </div>
  </div>
  
 
  
  <div class="layui-form-item">
    <label class="layui-form-label">手机号</label>
    <div class="layui-input-inline">
      <input type="text" name="phone" id="phone" lay-verify="required" placeholder="请输入手机号" autocomplete="off" class="layui-input">
    </div>
  </div>
  
    <div class="layui-form-item">
    <label class="layui-form-label">年龄</label>
    <div class="layui-input-inline">
      <input type="text" name="age" id="age" lay-verify="required" placeholder="请输入年龄" autocomplete="off" class="layui-input">
    </div>
  </div>
  
  
  <div class="layui-form-item">
    <label class="layui-form-label">角色</label>
    <div class="layui-input-inline">
      <select name="role1" id="role1" lay-filter="role1">
		
      </select>
   </div>
  </div>

 
    <div class="layui-form-item">
    <label class="layui-form-label">部门</label>
    <div class="layui-input-inline">
      <select name="bumeng" id="bumeng" lay-filter="bumeng">
      	
      </select>
   </div>
  </div>
    <div class="layui-form-item">
    <label class="layui-form-label">职称</label>
    <div class="layui-input-inline">
      <select name="zhicheng" id="zhicheng" lay-filter="zhicheng">
      	
      </select>
   </div>
  </div>
  
 
  
  <div class="layui-form-item">
    <button class="layui-btn layui-btn-fluid" id="xiugai" lay-filter="addUser">修改用户</button>
  </div>
</form>
 <script src="<%=basePath %>/jquery-3.4.1/jquery-3.4.1.min.js"></script> 

   <script src="<%=basePath %>/jsp/yonghu/layui-v2.5.5/layui.js"></script>
  <script type="text/javascript" src="<%=basePath %>/js/yonghu/userInfo.js"></script>
  

</body>
</html>