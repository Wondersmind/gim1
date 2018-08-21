package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="prcs_mst")
public class Prcs_Mst implements Serializable{
private Long pm_id;
private String pm_prcs_cd;
private String pm_cmy_cd;
private String pm_prcs_typ;
private String pm_prcs_nm;
private String pm_dpt_cd;
private String pm_prcs_dscr;
private String pm_prcs_crt_dt;
private String pm_prcs_crt_id;
private String pm_prcs_updt_dt;
private String pm_prcs_updt_id;
private boolean pm_prcs_sts;
@Id
@GeneratedValue
public Long getPm_id() {
	return pm_id;
}
public void setPm_id(Long pm_id) {
	this.pm_id = pm_id;
}
@Index(name="prcs_cd_index")
public String getPm_prcs_cd() {
	return pm_prcs_cd;
}
public void setPm_prcs_cd(String pm_prcs_cd) {
	this.pm_prcs_cd = pm_prcs_cd;
}
public String getPm_cmy_cd() {
	return pm_cmy_cd;
}
public void setPm_cmy_cd(String pm_cmy_cd) {
	this.pm_cmy_cd = pm_cmy_cd;
}
public String getPm_prcs_nm() {
	return pm_prcs_nm;
}
public void setPm_prcs_nm(String pm_prcs_nm) {
	this.pm_prcs_nm = pm_prcs_nm;
}
public String getPm_dpt_cd() {
	return pm_dpt_cd;
}
public void setPm_dpt_cd(String pm_dpt_cd) {
	this.pm_dpt_cd = pm_dpt_cd;
}
@Column(columnDefinition="TEXT")
public String getPm_prcs_dscr() {
	return pm_prcs_dscr;
}
public void setPm_prcs_dscr(String pm_prcs_dscr) {
	this.pm_prcs_dscr = pm_prcs_dscr;
}
public String getPm_prcs_crt_dt() {
	return pm_prcs_crt_dt;
}
public void setPm_prcs_crt_dt(String pm_prcs_crt_dt) {
	this.pm_prcs_crt_dt = pm_prcs_crt_dt;
}
public String getPm_prcs_crt_id() {
	return pm_prcs_crt_id;
}
public void setPm_prcs_crt_id(String pm_prcs_crt_id) {
	this.pm_prcs_crt_id = pm_prcs_crt_id;
}
public String getPm_prcs_updt_dt() {
	return pm_prcs_updt_dt;
}
public void setPm_prcs_updt_dt(String pm_prcs_updt_dt) {
	this.pm_prcs_updt_dt = pm_prcs_updt_dt;
}
public String getPm_prcs_updt_id() {
	return pm_prcs_updt_id;
}
public void setPm_prcs_updt_id(String pm_prcs_updt_id) {
	this.pm_prcs_updt_id = pm_prcs_updt_id;
}
public boolean isPm_prcs_sts() {
	return pm_prcs_sts;
}
public void setPm_prcs_sts(boolean pm_prcs_sts) {
	this.pm_prcs_sts = pm_prcs_sts;
}
@Override
public String toString() {
	return "Prcs_Mst [pm_id=" + pm_id + ", pm_prcs_cd=" + pm_prcs_cd + ", pm_cmy_cd=" + pm_cmy_cd + ", pm_prcs_typ="
			+ pm_prcs_typ + ", pm_prcs_nm=" + pm_prcs_nm + ", pm_dpt_cd=" + pm_dpt_cd + ", pm_prcs_dscr="
			+ pm_prcs_dscr + ", pm_prcs_crt_dt=" + pm_prcs_crt_dt + ", pm_prcs_crt_id=" + pm_prcs_crt_id
			+ ", pm_prcs_updt_dt=" + pm_prcs_updt_dt + ", pm_prcs_updt_id=" + pm_prcs_updt_id + ", pm_prcs_sts="
			+ pm_prcs_sts + "]";
}
public String getPm_prcs_typ() {
	return pm_prcs_typ;
}
public void setPm_prcs_typ(String pm_prcs_typ) {
	this.pm_prcs_typ = pm_prcs_typ;
}

}
