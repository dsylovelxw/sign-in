package com.dao;

import java.util.List;

import com.entity.User;

public interface UserDao {
	/**
	 * 查询所有用户
	 * @return
	 */
	public List<User> UserList ();
	/**
	 * 查询个数
	 * @return
	 */
	int UserCount();
	/**
	 * 新增用户
	 * @return
	 */
	int UserAdd(User user);
	/**
	 * 修改用户
	 * @return
	 */
	int UserModify(User user);
	/**
	 * 查询修改的用户信息
	 * @return
	 */
	User UserQuery(int id);
	/**
	 * 删除用户
	 * @return
	 */
	int UserRemove(int id);
	
}
