package com.dao;
/*
 * 登录数据访问层
 */

import com.entity.User;

public interface LoginDao {
	/*
	 * 登录
	 */
	public User Login(String loginName,int pwd);
}
