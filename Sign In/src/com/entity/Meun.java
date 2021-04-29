package com.entity;

public class Meun {
		private  int id;//权限id
		private String mName;//权限名称
		private int type;//权限等级
		private int fatherid;//父级id
		private  String mben ;//权限跳转连接
		private String resUrl;//权限url
		private int ishide;
		private String js;
		
		public String getJs() {
			return js;
		}
		public void setJs(String js) {
			this.js = js;
		}
		public String getResUrl() {
			return resUrl;
		}
		public void setResUrl(String resUrl) {
			this.resUrl = resUrl;
		}
		public int getIshide() {
			return ishide;
		}
		public void setIshide(int ishide) {
			this.ishide = ishide;
		}
		public int getType() {
			return type;
		}
		public void setType(int type) {
			this.type = type;
		}
		public int getFatherid() {
			return fatherid;
		}
		public void setFatherid(int fatherid) {
			this.fatherid = fatherid;
		}
		public String getMben() {
			return mben;
		}
		public void setMben(String mben) {
			this.mben = mben;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getmName() {
			return mName;
		}
		public void setmName(String mName) {
			this.mName = mName;
		}
 
	
}
