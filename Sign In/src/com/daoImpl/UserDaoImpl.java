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
		String sql = "SELECT user.id,userCode,userName,userPassword,sex,birthday,phone,address,age,class.`className` FROM `lr_user` USER,`lr_class` class WHERE user.`classid`=class.`id`";
		Object[] parms = {};
		try {
			rs = super.excuteQuery(sql, parms);
			while (rs.next()) {
				user = new User();
				user.setId(rs.getInt(1));
				user.setUserCode(rs.getString(2));
				user.setUserName(rs.getString(3));
				user.setUserPassword(rs.getInt(4));
				user.setGender(rs.getInt(5));
				user.setBirthday(rs.getString(6));
				user.setPhone(rs.getString(7));
				user.setAddress(rs.getString(8));
				user.setAge(rs.getInt(9));
				user.setClassName(rs.getString(10));
				list.add(user);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	/**
	 * 查询个数
	 */
	@Override
	public int UserCount() {
		ResultSet rs = null;
		int count=0;
		String sql = "SELECT COUNT(*) FROM `lr_user`";
		Object[] parms = {};
		try {
			rs = super.excuteQuery(sql, parms);
			while (rs.next()) {
				count=rs.getInt(1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	/**
	 * 新增用户
	 */
	@Override
	public int UserAdd(User user) {
		String sql="";
		Object[] parms = {};
		return this.excuteUpdate(sql, parms);
	}
	/**
	 * 修改用户
	 */
	@Override
	public int UserModify(User user) {
		// TODO Auto-generated method stub
		return 0;
	}
	/**
	 * 查询修改的用户信息
	 */
	@Override
	public User UserQuery(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	/**
	 * 删除用户
	 */
	@Override
	public int UserRemove(int id) {
		// TODO Auto-generated method stub
		return 0;
	}

}
