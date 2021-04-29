layui.use(['form','layer','jquery'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer
        $ = layui.jquery;

    $(".loginBody .seraph").click(function(){
        layer.msg("这只是做个样式，至于功能，你见过哪个后台能这样登录的？还是老老实实的找管理员去注册吧",{
            time:5000
        });
    })

    //登录按钮
    form.on("submit(login)",function(data){
    	   data = data.field;
        $(this).text("登录中...").addClass("layui-disabled");
        var username=$("#userName").val();
        var pwd=$("#password").val();
        if (username == '') {
            layer.msg('用户名不能为空');
            return false;
        }
        if (pwd == '') {
            layer.msg('密码不能为空');
            return false;
        }
        //var index = top.layer.msg('正在验证身份，请稍候',{icon: 16,time:false,shade:0.8});
     	   $.ajax({
            	url:"LoginServlet?action=login",
            	type:"post",
            	data:{
            		"name":username,
            		"pwd":pwd,
            	},
            	dataType:"json",
           		success:function(data){
           			if(1 == data.status){
           				layer.msg(data.message);
           				setTimeout(function(){
            	            //top.layer.close(index);
            	            window.location = '/Sign In/jsp/index/index.jsp';
        	        	},1000);
           			}else{
           				layer.msg(data.message);
           			}
           		}
            })
        return false;
    })

    //表单输入效果
    $(".loginBody .input-item").click(function(e){
        e.stopPropagation();
        $(this).addClass("layui-input-focus").find(".layui-input").focus();
    })
    $(".loginBody .layui-form-item .layui-input").focus(function(){
        $(this).parent().addClass("layui-input-focus");
    })
    $(".loginBody .layui-form-item .layui-input").blur(function(){
        $(this).parent().removeClass("layui-input-focus");
        if($(this).val() != ''){
            $(this).parent().addClass("layui-input-active");
        }else{
            $(this).parent().removeClass("layui-input-active");
        }
    })
})
