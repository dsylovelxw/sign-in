<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<title>layout 管理系统大布局 - Layui</title>
<script src="/ceshi/admin/lib/jquery-3.4.1/jquery-3.4.1.min.js"></script>
<link href="/ceshi/admin/lib/layui-v2.5.5/css/layui.css" rel="stylesheet">
</head>
<!-- <body class="layui-layout-body">
	<button class="layui-btn layui-btn-radius layui-btn-normal">提示按钮</button> -->
<div class="layui-layout layui-layout-admin">
	<div class="layui-header">	
		<div class="layui-logo">layui 管理布局</div>
		<!-- 头部区域（可配合layui已有的水平导航） -->
		<ul class="layui-nav layui-layout-left">
			<li class="layui-nav-item"><a href="">控制台</a></li>
			<li class="layui-nav-item"><a href="">商品管理</a></li>
			<li class="layui-nav-item"><a href="">用户</a></li>
			<li class="layui-nav-item"><a href="javascript:;">其它系统</a>
				<dl class="layui-nav-child">
					<dd>
						<a href="">邮件管理</a>
					</dd>
					<dd>
						<a href="">消息管理</a>
					</dd>
					<dd>
						<a href="">授权管理</a>
					</dd>
				</dl></li>
		</ul>
		<ul class="layui-nav layui-layout-right">
			<li class="layui-nav-item"><a href="javascript:;"> <img
					src="http://t.cn/RCzsdCq" class="layui-nav-img">贤心</a>
				<dl class="layui-nav-child">
					<dd>
						<a href="">基本资料</a>
					</dd>
					<dd>
						<a href="">安全设置</a>
					</dd>
				</dl></li>
			<li class="layui-nav-item"><a href="">退了</a></li>
		</ul>
	</div>
	<div class="layui-side layui-bg-black">
		<div class="layui-side-scroll">
			<!-- 左侧导航区域（可配合layui已有的垂直导航） -->
			<ul class="layui-nav layui-nav-tree"  lay-filter="test">
              <li class="layui-nav-item layui-nav-itemed">
				<c:forEach var="list" items="${menus}">
						<dl class="layui-nav-child">
									<dd>
										<a href="javascript:;" onclick="clickLefttt('${list.xinurl}','${list.id}','${list.jsurl}')">${list.mname }</a>
									</dd>
						</dl>
				</c:forEach></li>
				<li class="layui-nav-item"><a href="">云市场</a></li>
				<li class="layui-nav-item"><a href="">发布商品</a></li>
			</ul>
		</div>
	</div>
	<!-- 内容主体区域 -->
	<div class="dd"></div>
	<div class="layui-footer">
		<!-- 底部固定区域 -->
		© layui.com - 底部固定区域
	</div>
</div>
<script src="/ceshi/admin/lib/layui-v2.5.5/layui.js"></script>
<script type="text/javascript">

function clickLefttt(url,quanid,jsurl) {
	$(".dd").load(url+"&quanid="+quanid,function(event){
		var sc=document.createElement("script");
		sc.src=jsurl;
		$(".layui-body").append(sc);
	});
}
</script>
</body>
<div style="height: 400px;overflow: auto;display: none;" id="dtree1">
				<ul id="dataTree3" class="dtree" data-id="0"></ul>
			</div>
</html>
