package com.entity;

import java.util.Date;

public class Sign {
private int id;//签到id
private String  signName;//签到人
private Date  signTime;//签到时间
private int signId;//是否签到 
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getSignName() {
	return signName;
}
public void setSignName(String signName) {
	this.signName = signName;
}
public Date getSignTime() {
	return signTime;
}
public void setSignTime(Date signTime) {
	this.signTime = signTime;
}
public int getSignId() {
	return signId;
}
public void setSignId(int signId) {
	this.signId = signId;
}

}
