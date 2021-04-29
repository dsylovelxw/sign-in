package com.serviceImpl;

import java.sql.Connection;

import org.apache.log4j.Logger;

import com.dao.BaseDao;
import com.daoImpl.LoginDaoImpl;
import com.entity.User;
import com.service.LoginService;
import com.utils.DataBaseUtil;

public class LoginServiceImpl implements LoginService {

	private static final Logger LOGGER = Logger.getLogger(BaseDao.class.getName());

	/**
	 * 登录
	 */
	@Override
	public User Login(String loginName, int password) {
		// TODO Auto-generated method stub
		User user = null;
		try {
			// 获取连接对象
			Connection conn = DataBaseUtil.getConnection();
			user = new LoginDaoImpl(conn).Login(loginName, password);
		} catch (Exception e) {
			// TODO: handle exception
			LOGGER.error(e.getMessage());
		}
		return user;
	}

}
