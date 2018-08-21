package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.Index;
@Entity
@Table(name = "cmy_mst")
public class Cmy_Mst implements Serializable{
private Long cm_id;
private String cm_cmy_cd;
private String cm_cmy_nm;
private String cm_alt_cmy_nm;
private String cm_rgst_nm1;
private String cm_rgst_nm2;
private String cm_rgst_nm3;
private String cm_alt_rgst_nm1;
private String cm_alt_rgst_nm2;
private String cm_alt_rgst_nm3;
private String cm_cmy_ads1;
private String cm_cmy_ads2;
private String cm_cmy_cty;
private String cm_cmy_st;
private String cm_cmy_cy;
private String cm_cmy_cny;
private String cm_cmy_pin_cd;
private String cm_cmy_ph_no;
private String cm_cmy_mob_no;
private String cm_cmy_eml;
private String cm_cmy_web;
private String cm_cmy_crt_dt;
private String cm_cmy_crt_id;
private String cm_cmy_updt_dt;
private String cm_cmy_updt_id;
private boolean cm_cmy_sts;
@Id
@GeneratedValue
public Long getCm_id() {
	return cm_id;
}
public void setCm_id(Long cm_id) {
	this.cm_id = cm_id;
}
@Index(name="cmy_cd_index")
public String getCm_cmy_cd() {
	return cm_cmy_cd;
}
public void setCm_cmy_cd(String cm_cmy_cd) {
	this.cm_cmy_cd = cm_cmy_cd;
}
public String getCm_cmy_nm() {
	return cm_cmy_nm;
}
public void setCm_cmy_nm(String cm_cmy_nm) {
	this.cm_cmy_nm = cm_cmy_nm;
}
public String getCm_alt_cmy_nm() {
	return cm_alt_cmy_nm;
}
public void setCm_alt_cmy_nm(String cm_alt_cmy_nm) {
	this.cm_alt_cmy_nm = cm_alt_cmy_nm;
}
public String getCm_rgst_nm1() {
	return cm_rgst_nm1;
}
public void setCm_rgst_nm1(String cm_rgst_nm1) {
	this.cm_rgst_nm1 = cm_rgst_nm1;
}
public String getCm_rgst_nm2() {
	return cm_rgst_nm2;
}
public void setCm_rgst_nm2(String cm_rgst_nm2) {
	this.cm_rgst_nm2 = cm_rgst_nm2;
}
public String getCm_rgst_nm3() {
	return cm_rgst_nm3;
}
public void setCm_rgst_nm3(String cm_rgst_nm3) {
	this.cm_rgst_nm3 = cm_rgst_nm3;
}
public String getCm_alt_rgst_nm1() {
	return cm_alt_rgst_nm1;
}
public void setCm_alt_rgst_nm1(String cm_alt_rgst_nm1) {
	this.cm_alt_rgst_nm1 = cm_alt_rgst_nm1;
}
public String getCm_alt_rgst_nm2() {
	return cm_alt_rgst_nm2;
}
public void setCm_alt_rgst_nm2(String cm_alt_rgst_nm2) {
	this.cm_alt_rgst_nm2 = cm_alt_rgst_nm2;
}
public String getCm_alt_rgst_nm3() {
	return cm_alt_rgst_nm3;
}
public void setCm_alt_rgst_nm3(String cm_alt_rgst_nm3) {
	this.cm_alt_rgst_nm3 = cm_alt_rgst_nm3;
}
public String getCm_cmy_ads1() {
	return cm_cmy_ads1;
}
public void setCm_cmy_ads1(String cm_cmy_ads1) {
	this.cm_cmy_ads1 = cm_cmy_ads1;
}
public String getCm_cmy_ads2() {
	return cm_cmy_ads2;
}
public void setCm_cmy_ads2(String cm_cmy_ads2) {
	this.cm_cmy_ads2 = cm_cmy_ads2;
}
public String getCm_cmy_cty() {
	return cm_cmy_cty;
}
public void setCm_cmy_cty(String cm_cmy_cty) {
	this.cm_cmy_cty = cm_cmy_cty;
}
public String getCm_cmy_st() {
	return cm_cmy_st;
}
public void setCm_cmy_st(String cm_cmy_st) {
	this.cm_cmy_st = cm_cmy_st;
}
public String getCm_cmy_cy() {
	return cm_cmy_cy;
}
public void setCm_cmy_cy(String cm_cmy_cy) {
	this.cm_cmy_cy = cm_cmy_cy;
}
public String getCm_cmy_cny() {
	return cm_cmy_cny;
}
public void setCm_cmy_cny(String cm_cmy_cny) {
	this.cm_cmy_cny = cm_cmy_cny;
}
public String getCm_cmy_pin_cd() {
	return cm_cmy_pin_cd;
}
public void setCm_cmy_pin_cd(String cm_cmy_pin_cd) {
	this.cm_cmy_pin_cd = cm_cmy_pin_cd;
}
public String getCm_cmy_ph_no() {
	return cm_cmy_ph_no;
}
public void setCm_cmy_ph_no(String cm_cmy_ph_no) {
	this.cm_cmy_ph_no = cm_cmy_ph_no;
}
public String getCm_cmy_mob_no() {
	return cm_cmy_mob_no;
}
public void setCm_cmy_mob_no(String cm_cmy_mob_no) {
	this.cm_cmy_mob_no = cm_cmy_mob_no;
}
public String getCm_cmy_eml() {
	return cm_cmy_eml;
}
public void setCm_cmy_eml(String cm_cmy_eml) {
	this.cm_cmy_eml = cm_cmy_eml;
}
public String getCm_cmy_web() {
	return cm_cmy_web;
}
public void setCm_cmy_web(String cm_cmy_web) {
	this.cm_cmy_web = cm_cmy_web;
}
public String getCm_cmy_crt_dt() {
	return cm_cmy_crt_dt;
}
public void setCm_cmy_crt_dt(String cm_cmy_crt_dt) {
	this.cm_cmy_crt_dt = cm_cmy_crt_dt;
}
public String getCm_cmy_crt_id() {
	return cm_cmy_crt_id;
}
public void setCm_cmy_crt_id(String cm_cmy_crt_id) {
	this.cm_cmy_crt_id = cm_cmy_crt_id;
}
public String getCm_cmy_updt_dt() {
	return cm_cmy_updt_dt;
}
public void setCm_cmy_updt_dt(String cm_cmy_updt_dt) {
	this.cm_cmy_updt_dt = cm_cmy_updt_dt;
}
public String getCm_cmy_updt_id() {
	return cm_cmy_updt_id;
}
public void setCm_cmy_updt_id(String cm_cmy_updt_id) {
	this.cm_cmy_updt_id = cm_cmy_updt_id;
}
public boolean isCm_cmy_sts() {
	return cm_cmy_sts;
}
public void setCm_cmy_sts(boolean cm_cmy_sts) {
	this.cm_cmy_sts = cm_cmy_sts;
}

@Override
public String toString() {
	return "Cmy_Mst [cm_id=" + cm_id + ", cm_cmy_cd=" + cm_cmy_cd + ", cm_cmy_nm=" + cm_cmy_nm + ", cm_alt_cmy_nm="
			+ cm_alt_cmy_nm + ", cm_rgst_nm1=" + cm_rgst_nm1 + ", cm_rgst_nm2=" + cm_rgst_nm2 + ", cm_rgst_nm3="
			+ cm_rgst_nm3 + ", cm_alt_rgst_nm1=" + cm_alt_rgst_nm1 + ", cm_alt_rgst_nm2=" + cm_alt_rgst_nm2
			+ ", cm_alt_rgst_nm3=" + cm_alt_rgst_nm3 + ", cm_cmy_ads1=" + cm_cmy_ads1 + ", cm_cmy_ads2=" + cm_cmy_ads2
			+ ", cm_cmy_cty=" + cm_cmy_cty + ", cm_cmy_st=" + cm_cmy_st + ", cm_cmy_cy=" + cm_cmy_cy + ", cm_cmy_cny="
			+ cm_cmy_cny + ", cm_cmy_pin_cd=" + cm_cmy_pin_cd + ", cm_cmy_ph_no=" + cm_cmy_ph_no + ", cm_cmy_mob_no="
			+ cm_cmy_mob_no + ", cm_cmy_eml=" + cm_cmy_eml + ", cm_cmy_web=" + cm_cmy_web + ", cm_cmy_crt_dt="
			+ cm_cmy_crt_dt + ", cm_cmy_crt_id=" + cm_cmy_crt_id + ", cm_cmy_updt_dt=" + cm_cmy_updt_dt
			+ ", cm_cmy_updt_id=" + cm_cmy_updt_id + ", cm_cmy_sts=" + cm_cmy_sts + "]";
}


}
