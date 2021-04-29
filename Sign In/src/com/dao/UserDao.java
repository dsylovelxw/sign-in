package com.dao;

import java.util.List;

import com.entity.User;

public interface UserDao {
	/**
	 * 查询所有用户
	 * @return
	 */
	List<User> UserList();
}
