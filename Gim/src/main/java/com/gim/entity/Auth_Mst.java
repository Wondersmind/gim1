package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="auth_mst")
public class Auth_Mst implements Serializable{
private Long auth_id;
private String auth_cmy_cd;
private String auth_usr_nm;
private String auth_usr_pwd;
private boolean auth_sts;
@Override
public String toString() {
	return "Auth_Mst [auth_id=" + auth_id + ", auth_cmy_cd=" + auth_cmy_cd + ", auth_usr_nm=" + auth_usr_nm
			+ ", auth_usr_pwd=" + auth_usr_pwd + ", auth_sts=" + auth_sts + "]";
}
@Id
@GeneratedValue
public Long getAuth_id() {
	return auth_id;
}
public void setAuth_id(Long auth_id) {
	this.auth_id = auth_id;
}
public String getAuth_cmy_cd() {
	return auth_cmy_cd;
}
public void setAuth_cmy_cd(String auth_cmy_cd) {
	this.auth_cmy_cd = auth_cmy_cd;
}
public String getAuth_usr_nm() {
	return auth_usr_nm;
}
public void setAuth_usr_nm(String auth_usr_nm) {
	this.auth_usr_nm = auth_usr_nm;
}
public String getAuth_usr_pwd() {
	return auth_usr_pwd;
}
public void setAuth_usr_pwd(String auth_usr_pwd) {
	this.auth_usr_pwd = auth_usr_pwd;
}
public boolean isAuth_sts() {
	return auth_sts;
}
public void setAuth_sts(boolean auth_sts) {
	this.auth_sts = auth_sts;
}

}
