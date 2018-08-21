package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="user_permission")
public class User_Permission implements Serializable{
private Long up_id;
private String up_pg_nm;
private String up_pg_trn_typ;
private String up_pg_fun;
private String up_dpt_cd;
@Id
@GeneratedValue
public Long getUp_id() {
	return up_id;
}
public void setUp_id(Long up_id) {
	this.up_id = up_id;
}
@Index(name="pgnm")
public String getUp_pg_nm() {
	return up_pg_nm;
}
public void setUp_pg_nm(String up_pg_nm) {
	this.up_pg_nm = up_pg_nm;
}
public String getUp_pg_trn_typ() {
	return up_pg_trn_typ;
}
public void setUp_pg_trn_typ(String up_pg_trn_typ) {
	this.up_pg_trn_typ = up_pg_trn_typ;
}
public String getUp_pg_fun() {
	return up_pg_fun;
}
public void setUp_pg_fun(String up_pg_fun) {
	this.up_pg_fun = up_pg_fun;
}
@Index(name="dpt_cd")
public String getUp_dpt_cd() {
	return up_dpt_cd;
}
public void setUp_dpt_cd(String up_dpt_cd) {
	this.up_dpt_cd = up_dpt_cd;
}
@Override
public String toString() {
	return "User_Permission [up_id=" + up_id + ", up_pg_nm=" + up_pg_nm + ", up_pg_trn_typ=" + up_pg_trn_typ
			+ ", up_pg_fun=" + up_pg_fun + ", up_dpt_cd=" + up_dpt_cd + "]";
}

}
