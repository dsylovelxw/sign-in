package com.entity;



public class User {

private int id;//主键ID
private String userName;//用户名称
private String userCode;//用户编码

private int   userPassword;//用户密码
private int   gender;//  性别（1:女、 2:男）
private String   birthday;// 出生日期
private String  phone;//手机
private String  address;//地址
private String  bumeng_id;//部门

private int  age;//年龄
private String  zhicheng_id;//职务
private String  lode_id;// 角色
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getUserCode() {
	return userCode;
}
public void setUserCode(String userCode) {
	this.userCode = userCode;
}
public int getUserPassword() {
	return userPassword;
}
public void setUserPassword(int userPassword) {
	this.userPassword = userPassword;
}
public int getGender() {
	return gender;
}
public void setGender(int gender) {
	this.gender = gender;
}
public String getBirthday() {
	return birthday;
}
public void setBirthday(String birthday) {
	this.birthday = birthday;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String  getBumeng_id() {
	return bumeng_id;
}
public void setBumeng_id(String  bumeng_id) {
	this.bumeng_id = bumeng_id;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
public String getZhicheng_id() {
	return zhicheng_id;
}
public void setZhicheng_id(String zhicheng_id) {
	this.zhicheng_id = zhicheng_id;
}
public String getLode_id() {
	return lode_id;
}
public void setLode_id(String lode_id) {
	this.lode_id = lode_id;
}


}
