package com.daoImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.dao.BaseDao;
import com.dao.LoginDao;
import com.entity.User;

public class LoginDaoImpl extends BaseDao implements LoginDao {

	private static final Logger LOGGER = Logger.getLogger(BaseDao.class.getName());

	public LoginDaoImpl(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}

	/**
	 * 登录
	 */
	@Override
	public User Login(String loginName, int pwd) {
		// TODO Auto-generated method stub
		// 创建连接字符
		ResultSet rs = null;
		User user = new User();
		String sql = "SELECT `id`,`userCode`,`userName`,`userPassword` FROM `lr_user` WHERE `userCode` =? AND `userPassword`=?";
		Object[] objects = { loginName, pwd };
		rs = excuteQuery(sql, objects);
		if (rs != null) {
			try {
				while (rs.next()) {
					int id = rs.getInt(1);
					String userCode = rs.getString(2);
					String userName = rs.getString(3);
					int pwd1 = rs.getInt(4);
					user.setUserCode(userCode);
					user.setUserName(userName);
					user.setUserPassword(pwd1);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				LOGGER.error(e.getMessage());
			}
		}

		return user;
	}

}
