package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="stn_mst")
public class Stn_Mst implements Serializable{
private Long sm_id;
private String sm_stn_cd;
private String sm_cmy_cd;
private String sm_stn_nm;
private String sm_stn_shpe;
private String sm_stn_clr;
private String sm_stn_sz;
private String sm_stn_qty;
private String sm_stn_wgt;
private String sm_stn_crt_dt;
private String sm_stn_crt_id;
private String sm_stn_updt_dt;
private String sm_stn_updt_id;
private boolean sm_stn_sts;

@Id
@GeneratedValue
public Long getSm_id() {
	return sm_id;
}
public void setSm_id(Long sm_id) {
	this.sm_id = sm_id;
}
@Index(name="stn_cd_index")
public String getSm_stn_cd() {
	return sm_stn_cd;
}
public void setSm_stn_cd(String sm_stn_cd) {
	this.sm_stn_cd = sm_stn_cd;
}
public String getSm_cmy_cd() {
	return sm_cmy_cd;
}
public void setSm_cmy_cd(String sm_cmy_cd) {
	this.sm_cmy_cd = sm_cmy_cd;
}
@Index(name="stn_nm_index")
public String getSm_stn_nm() {
	return sm_stn_nm;
}
public void setSm_stn_nm(String sm_stn_nm) {
	this.sm_stn_nm = sm_stn_nm;
}
public String getSm_stn_shpe() {
	return sm_stn_shpe;
}
public void setSm_stn_shpe(String sm_stn_shpe) {
	this.sm_stn_shpe = sm_stn_shpe;
}
public String getSm_stn_clr() {
	return sm_stn_clr;
}
public void setSm_stn_clr(String sm_stn_clr) {
	this.sm_stn_clr = sm_stn_clr;
}
public String getSm_stn_sz() {
	return sm_stn_sz;
}
public void setSm_stn_sz(String sm_stn_sz) {
	this.sm_stn_sz = sm_stn_sz;
}
public String getSm_stn_crt_dt() {
	return sm_stn_crt_dt;
}
public void setSm_stn_crt_dt(String sm_stn_crt_dt) {
	this.sm_stn_crt_dt = sm_stn_crt_dt;
}
public String getSm_stn_crt_id() {
	return sm_stn_crt_id;
}
public void setSm_stn_crt_id(String sm_stn_crt_id) {
	this.sm_stn_crt_id = sm_stn_crt_id;
}
public String getSm_stn_updt_dt() {
	return sm_stn_updt_dt;
}
public void setSm_stn_updt_dt(String sm_stn_updt_dt) {
	this.sm_stn_updt_dt = sm_stn_updt_dt;
}
public String getSm_stn_updt_id() {
	return sm_stn_updt_id;
}
public void setSm_stn_updt_id(String sm_stn_updt_id) {
	this.sm_stn_updt_id = sm_stn_updt_id;
}
public boolean isSm_stn_sts() {
	return sm_stn_sts;
}
public void setSm_stn_sts(boolean sm_stn_sts) {
	this.sm_stn_sts = sm_stn_sts;
}

public String getSm_stn_qty() {
	return sm_stn_qty;
}
public void setSm_stn_qty(String sm_stn_qty) {
	this.sm_stn_qty = sm_stn_qty;
}
public String getSm_stn_wgt() {
	return sm_stn_wgt;
}
public void setSm_stn_wgt(String sm_stn_wgt) {
	this.sm_stn_wgt = sm_stn_wgt;
}
@Override
public String toString() {
	return "Stn_Mst [sm_id=" + sm_id + ", sm_stn_cd=" + sm_stn_cd + ", sm_cmy_cd=" + sm_cmy_cd + ", sm_stn_nm="
			+ sm_stn_nm + ", sm_stn_shpe=" + sm_stn_shpe + ", sm_stn_clr=" + sm_stn_clr + ", sm_stn_sz=" + sm_stn_sz
			+ ", sm_stn_qty=" + sm_stn_qty + ", sm_stn_wgt=" + sm_stn_wgt + ", sm_stn_crt_dt=" + sm_stn_crt_dt
			+ ", sm_stn_crt_id=" + sm_stn_crt_id + ", sm_stn_updt_dt=" + sm_stn_updt_dt + ", sm_stn_updt_id="
			+ sm_stn_updt_id + ", sm_stn_sts=" + sm_stn_sts + "]";
}

}
