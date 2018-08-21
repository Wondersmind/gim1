package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="emp_mst")
public class Emp_Mst implements Serializable{
private Long em_id;
private String em_cmy_cd;
private String em_str_cd;
private String em_dpt_cd;
private String em_emp_nm;
private String em_emp_id;
private String em_emp_mob;
private String em_emp_eml;
private String em_emp_login_nm;
private String em_emp_login_pwd;
private String em_emp_typ;
private String em_emp_alw_qty;
private String em_emp_crt_dt;
private String em_emp_crt_id;
private String em_emp_updt_dt;
private String em_emp_updt_id;
private boolean em_emp_sts;
@Id
@GeneratedValue
public Long getEm_id() {
	return em_id;
}

public void setEm_id(Long em_id) {
	this.em_id = em_id;
}

public String getEm_cmy_cd() {
	return em_cmy_cd;
}

public void setEm_cmy_cd(String em_cmy_cd) {
	this.em_cmy_cd = em_cmy_cd;
}

public String getEm_str_cd() {
	return em_str_cd;
}

public void setEm_str_cd(String em_str_cd) {
	this.em_str_cd = em_str_cd;
}

public String getEm_dpt_cd() {
	return em_dpt_cd;
}

public void setEm_dpt_cd(String em_dpt_cd) {
	this.em_dpt_cd = em_dpt_cd;
}

public String getEm_emp_nm() {
	return em_emp_nm;
}

public void setEm_emp_nm(String em_emp_nm) {
	this.em_emp_nm = em_emp_nm;
}

public String getEm_emp_mob() {
	return em_emp_mob;
}

public void setEm_emp_mob(String em_emp_mob) {
	this.em_emp_mob = em_emp_mob;
}

public String getEm_emp_eml() {
	return em_emp_eml;
}

public void setEm_emp_eml(String em_emp_eml) {
	this.em_emp_eml = em_emp_eml;
}

public String getEm_emp_login_nm() {
	return em_emp_login_nm;
}

public void setEm_emp_login_nm(String em_emp_login_nm) {
	this.em_emp_login_nm = em_emp_login_nm;
}

public String getEm_emp_login_pwd() {
	return em_emp_login_pwd;
}

public void setEm_emp_login_pwd(String em_emp_login_pwd) {
	this.em_emp_login_pwd = em_emp_login_pwd;
}

public String getEm_emp_typ() {
	return em_emp_typ;
}

public void setEm_emp_typ(String em_emp_typ) {
	this.em_emp_typ = em_emp_typ;
}

public String getEm_emp_alw_qty() {
	return em_emp_alw_qty;
}

public void setEm_emp_alw_qty(String em_emp_alw_qty) {
	this.em_emp_alw_qty = em_emp_alw_qty;
}

public String getEm_emp_crt_dt() {
	return em_emp_crt_dt;
}

public void setEm_emp_crt_dt(String em_emp_crt_dt) {
	this.em_emp_crt_dt = em_emp_crt_dt;
}

public String getEm_emp_crt_id() {
	return em_emp_crt_id;
}

public void setEm_emp_crt_id(String em_emp_crt_id) {
	this.em_emp_crt_id = em_emp_crt_id;
}

public String getEm_emp_updt_dt() {
	return em_emp_updt_dt;
}

public void setEm_emp_updt_dt(String em_emp_updt_dt) {
	this.em_emp_updt_dt = em_emp_updt_dt;
}

public String getEm_emp_updt_id() {
	return em_emp_updt_id;
}

public void setEm_emp_updt_id(String em_emp_updt_id) {
	this.em_emp_updt_id = em_emp_updt_id;
}

public boolean isEm_emp_sts() {
	return em_emp_sts;
}

public void setEm_emp_sts(boolean em_emp_sts) {
	this.em_emp_sts = em_emp_sts;
}

@Override
public String toString() {
	return "Emp_Mst [em_id=" + em_id + ", em_cmy_cd=" + em_cmy_cd + ", em_str_cd=" + em_str_cd + ", em_dpt_cd="
			+ em_dpt_cd + ", em_emp_nm=" + em_emp_nm + ", em_emp_id=" + em_emp_id + ", em_emp_mob=" + em_emp_mob
			+ ", em_emp_eml=" + em_emp_eml + ", em_emp_login_nm=" + em_emp_login_nm + ", em_emp_login_pwd="
			+ em_emp_login_pwd + ", em_emp_typ=" + em_emp_typ + ", em_emp_alw_qty=" + em_emp_alw_qty
			+ ", em_emp_crt_dt=" + em_emp_crt_dt + ", em_emp_crt_id=" + em_emp_crt_id + ", em_emp_updt_dt="
			+ em_emp_updt_dt + ", em_emp_updt_id=" + em_emp_updt_id + ", em_emp_sts=" + em_emp_sts + ", getEm_id()="
			+ getEm_id() + ", getEm_cmy_cd()=" + getEm_cmy_cd() + ", getEm_str_cd()=" + getEm_str_cd()
			+ ", getEm_dpt_cd()=" + getEm_dpt_cd() + ", getEm_emp_nm()=" + getEm_emp_nm() + ", getEm_emp_mob()="
			+ getEm_emp_mob() + ", getEm_emp_eml()=" + getEm_emp_eml() + ", getEm_emp_login_nm()="
			+ getEm_emp_login_nm() + ", getEm_emp_login_pwd()=" + getEm_emp_login_pwd() + ", getEm_emp_typ()="
			+ getEm_emp_typ() + ", getEm_emp_alw_qty()=" + getEm_emp_alw_qty() + ", getEm_emp_crt_dt()="
			+ getEm_emp_crt_dt() + ", getEm_emp_crt_id()=" + getEm_emp_crt_id() + ", getEm_emp_updt_dt()="
			+ getEm_emp_updt_dt() + ", getEm_emp_updt_id()=" + getEm_emp_updt_id() + ", isEm_emp_sts()="
			+ isEm_emp_sts() + ", getEm_emp_id()=" + getEm_emp_id() + ", getClass()=" + getClass() + ", hashCode()="
			+ hashCode() + ", toString()=" + super.toString() + "]";
}
@Index(name="emp_id_index")
public String getEm_emp_id() {
	return em_emp_id;
}

public void setEm_emp_id(String em_emp_id) {
	this.em_emp_id = em_emp_id;
}

}
