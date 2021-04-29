package com.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.entity.User;
import com.serviceImpl.LoginServiceImpl;
import com.utils.ReturnResult;
import com.utils.SecurityUtils;
import com.web.AbstractServlet;

/*
 * 登录访问层
 */
@SuppressWarnings("serial")
@WebServlet("/LoginServlet")
public class LoginServlet extends AbstractServlet{

	 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	        doPost(request, response);
	    }
	 /*
	  * 登录
	  */
	 public ReturnResult login(HttpServletRequest request, HttpServletResponse response) throws Exception {
			ReturnResult result = new ReturnResult();
			// 获取用户输入的数据！
			String name = request.getParameter("name");
			int password =Integer.parseInt(request.getParameter("pwd"));
			// 调用三层方法！
			User easybuyUserLogin = new LoginServiceImpl().Login(name, password);
			// 判断是否有数据！
			if (easybuyUserLogin == null) {
				// 判断该用户是否注册！！
				return result.returnFail("用户不存在");
			} else {
				// 注册了判断用户是否输入正确密码！
				if (easybuyUserLogin.getUserCode().equals(name) && easybuyUserLogin.getUserPassword()==password) {
				/*
				 * List<Menu> menus = new MenuServiceImpl().getMenus(easybuyUserLogin.getId());
				 */
					// 登陆成功！账号密码匹配！！
					request.getSession().setAttribute("easybuyUserLogin", easybuyUserLogin);
				/* request.getSession().setAttribute("role", easybuyUserLogin.getRoleid()); */
				/* request.getSession().setAttribute("menus", menus); */
					  return result.returnSuccess("登录成功！");
				} else {
					return result.returnFail("输入的用户名或密码错误！");
				}
			}
		}
	@Override
	public Class getServletClass() {
		// TODO Auto-generated method stub
		return LoginServlet.class;
	}

}
