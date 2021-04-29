package com.service;

import com.entity.User;

/*
 * 登录数据业务层
 */
public interface LoginService {
	/*
	 * 登录
	 */
	public User Login(String loginName, int pwd);
}
