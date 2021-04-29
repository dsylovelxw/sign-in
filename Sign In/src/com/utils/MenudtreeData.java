package com.utils;

public class MenudtreeData {
	private int id;
	private int parentId;
	private String title;
	private String checkArr ;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getParentId() {
		return parentId;
	}
	public void setParentId(int parentId) {
		this.parentId = parentId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCheckArr() {
		return checkArr;
	}
	public void setCheckArr(String checkArr) {
		this.checkArr = checkArr;
	}
	
}
