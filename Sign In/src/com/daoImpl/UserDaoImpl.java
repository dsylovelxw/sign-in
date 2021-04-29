package com.daoImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.dao.BaseDao;
import com.dao.UserDao;
import com.entity.User;

public class UserDaoImpl extends BaseDao implements UserDao {

	public UserDaoImpl(Connection conn) {
		super(conn);
		// TODO Auto-generated constructor stub
	}
	/**
	 * 查询所有用户
	 */
	@Override
	public List<User> UserList() {
		List<User> list = new ArrayList<>();
		ResultSet rs = null;
		User user = null;
		String sql = "SELECT user.id,userCode,userName,userPassword,sex,birthday,phone,address,age,classid,class.`className` FROM `lr_user` USER,`lr_class` class WHERE user.`classid`=class.`id`";
		Object[] parms = {};
		try {
			rs = super.excuteQuery(sql, parms);
			while (rs.next()) {
				user = new User();
				user.setId(rs.getInt(1));
				user.setUserCode(rs.getString(2));
				user.setUserName(rs.getString(3));
				user.setUserPassword(rs.getInt(4));
				
				
				
				
				list.add(user);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}

}
