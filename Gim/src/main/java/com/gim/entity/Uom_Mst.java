package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="uom_mst")
public class Uom_Mst implements Serializable{
private Long um_id;
private String um_uom_cd;
private String um_cmy_cd;
private String um_uom_nm;
private String um_uom_dscr;
private boolean um_uom_sts;
private String um_uom_crt_dt;
private String um_uom_crt_id;
private String um_uom_updt_dt;
private String um_uom_updt_id;
@Id
@GeneratedValue
public Long getUm_id() {
	return um_id;
}
public void setUm_id(Long um_id) {
	this.um_id = um_id;
}
@Index(name="uom_cd_index")
public String getUm_uom_cd() {
	return um_uom_cd;
}
public void setUm_uom_cd(String um_uom_cd) {
	this.um_uom_cd = um_uom_cd;
}
public String getUm_cmy_cd() {
	return um_cmy_cd;
}
public void setUm_cmy_cd(String um_cmy_cd) {
	this.um_cmy_cd = um_cmy_cd;
}
public String getUm_uom_nm() {
	return um_uom_nm;
}
public void setUm_uom_nm(String um_uom_nm) {
	this.um_uom_nm = um_uom_nm;
}
@Column(columnDefinition="TEXT")
public String getUm_uom_dscr() {
	return um_uom_dscr;
}
public void setUm_uom_dscr(String um_uom_dscr) {
	this.um_uom_dscr = um_uom_dscr;
}
public boolean isUm_uom_sts() {
	return um_uom_sts;
}
public void setUm_uom_sts(boolean um_uom_sts) {
	this.um_uom_sts = um_uom_sts;
}
public String getUm_uom_crt_dt() {
	return um_uom_crt_dt;
}
public void setUm_uom_crt_dt(String um_uom_crt_dt) {
	this.um_uom_crt_dt = um_uom_crt_dt;
}
public String getUm_uom_crt_id() {
	return um_uom_crt_id;
}
public void setUm_uom_crt_id(String um_uom_crt_id) {
	this.um_uom_crt_id = um_uom_crt_id;
}
public String getUm_uom_updt_dt() {
	return um_uom_updt_dt;
}
public void setUm_uom_updt_dt(String um_uom_updt_dt) {
	this.um_uom_updt_dt = um_uom_updt_dt;
}
public String getUm_uom_updt_id() {
	return um_uom_updt_id;
}
public void setUm_uom_updt_id(String um_uom_updt_id) {
	this.um_uom_updt_id = um_uom_updt_id;
}
@Override
public String toString() {
	return "Uom_Mst [um_id=" + um_id + ", um_uom_cd=" + um_uom_cd + ", um_cmy_cd=" + um_cmy_cd + ", um_uom_nm="
			+ um_uom_nm + ", um_uom_dscr=" + um_uom_dscr + ", um_uom_sts=" + um_uom_sts + ", um_uom_crt_dt="
			+ um_uom_crt_dt + ", um_uom_crt_id=" + um_uom_crt_id + ", um_uom_updt_dt=" + um_uom_updt_dt
			+ ", um_uom_updt_id=" + um_uom_updt_id + "]";
}

}
