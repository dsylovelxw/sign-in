package com.dao;

import java.util.List;

import com.entity.User;

public interface UserDao {
	/**
	 * ��ѯ�����û�
	 * @return
	 */
	public List<User> UserList ();
	/**
	 * ��ѯ����
	 * @return
	 */
	int UserCount();
	/**
	 * �����û�
	 * @return
	 */
	int UserAdd(User user);
	/**
	 * �޸��û�
	 * @return
	 */
	int UserModify(User user);
	/**
	 * ��ѯ�޸ĵ��û���Ϣ
	 * @return
	 */
	User UserQuery(int id);
	/**
	 * ɾ���û�
	 * @return
	 */
	int UserRemove(int id);
	
}
