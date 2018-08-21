package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="str_mst")
public class Str_Mst implements Serializable{
private Long sm_id;
private String sm_str_cd;
private String sm_cmy_cd;
private String sm_str_nm;
private String sm_alt_str_nm;
private String sm_rgst_nm1;
private String sm_rgst_nm2;
private String sm_rgst_nm3;
private String sm_alt_rgst_nm1;
private String sm_alt_rgst_nm2;
private String sm_alt_rgst_nm3;
private String sm_str_ads1;
private String sm_str_ads2;
private String sm_str_cty;
private String sm_str_st;
private String sm_str_cy;
private String sm_str_cny;
private String sm_str_pin_cd;
private String sm_str_ph_no;
private String sm_str_mob_no;
private String sm_str_eml;
private String sm_str_web;
private String sm_str_crt_dt;
private String sm_str_crt_id;
private String sm_str_updt_dt;
private String sm_str_updt_id;
private boolean sm_str_sts;
@Id
@GeneratedValue
public Long getSm_id() {
	return sm_id;
}
public void setSm_id(Long sm_id) {
	this.sm_id = sm_id;
}
@Index(name="str_cd_index")
public String getSm_str_cd() {
	return sm_str_cd;
}
public void setSm_str_cd(String sm_str_cd) {
	this.sm_str_cd = sm_str_cd;
}
public String getSm_cmy_cd() {
	return sm_cmy_cd;
}
public void setSm_cmy_cd(String sm_cmy_cd) {
	this.sm_cmy_cd = sm_cmy_cd;
}
public String getSm_str_nm() {
	return sm_str_nm;
}
public void setSm_str_nm(String sm_str_nm) {
	this.sm_str_nm = sm_str_nm;
}
public String getSm_alt_str_nm() {
	return sm_alt_str_nm;
}
public void setSm_alt_str_nm(String sm_alt_str_nm) {
	this.sm_alt_str_nm = sm_alt_str_nm;
}
public String getSm_rgst_nm1() {
	return sm_rgst_nm1;
}
public void setSm_rgst_nm1(String sm_rgst_nm1) {
	this.sm_rgst_nm1 = sm_rgst_nm1;
}
public String getSm_rgst_nm2() {
	return sm_rgst_nm2;
}
public void setSm_rgst_nm2(String sm_rgst_nm2) {
	this.sm_rgst_nm2 = sm_rgst_nm2;
}
public String getSm_rgst_nm3() {
	return sm_rgst_nm3;
}
public void setSm_rgst_nm3(String sm_rgst_nm3) {
	this.sm_rgst_nm3 = sm_rgst_nm3;
}
public String getSm_alt_rgst_nm1() {
	return sm_alt_rgst_nm1;
}
public void setSm_alt_rgst_nm1(String sm_alt_rgst_nm1) {
	this.sm_alt_rgst_nm1 = sm_alt_rgst_nm1;
}
public String getSm_alt_rgst_nm2() {
	return sm_alt_rgst_nm2;
}
public void setSm_alt_rgst_nm2(String sm_alt_rgst_nm2) {
	this.sm_alt_rgst_nm2 = sm_alt_rgst_nm2;
}
public String getSm_alt_rgst_nm3() {
	return sm_alt_rgst_nm3;
}
public void setSm_alt_rgst_nm3(String sm_alt_rgst_nm3) {
	this.sm_alt_rgst_nm3 = sm_alt_rgst_nm3;
}
public String getSm_str_ads1() {
	return sm_str_ads1;
}
public void setSm_str_ads1(String sm_str_ads1) {
	this.sm_str_ads1 = sm_str_ads1;
}
public String getSm_str_ads2() {
	return sm_str_ads2;
}
public void setSm_str_ads2(String sm_str_ads2) {
	this.sm_str_ads2 = sm_str_ads2;
}
public String getSm_str_cty() {
	return sm_str_cty;
}
public void setSm_str_cty(String sm_str_cty) {
	this.sm_str_cty = sm_str_cty;
}
public String getSm_str_st() {
	return sm_str_st;
}
public void setSm_str_st(String sm_str_st) {
	this.sm_str_st = sm_str_st;
}
public String getSm_str_cy() {
	return sm_str_cy;
}
public void setSm_str_cy(String sm_str_cy) {
	this.sm_str_cy = sm_str_cy;
}
public String getSm_str_cny() {
	return sm_str_cny;
}
public void setSm_str_cny(String sm_str_cny) {
	this.sm_str_cny = sm_str_cny;
}
public String getSm_str_pin_cd() {
	return sm_str_pin_cd;
}
public void setSm_str_pin_cd(String sm_str_pin_cd) {
	this.sm_str_pin_cd = sm_str_pin_cd;
}
public String getSm_str_ph_no() {
	return sm_str_ph_no;
}
public void setSm_str_ph_no(String sm_str_ph_no) {
	this.sm_str_ph_no = sm_str_ph_no;
}
public String getSm_str_mob_no() {
	return sm_str_mob_no;
}
public void setSm_str_mob_no(String sm_str_mob_no) {
	this.sm_str_mob_no = sm_str_mob_no;
}
public String getSm_str_eml() {
	return sm_str_eml;
}
public void setSm_str_eml(String sm_str_eml) {
	this.sm_str_eml = sm_str_eml;
}
public String getSm_str_web() {
	return sm_str_web;
}
public void setSm_str_web(String sm_str_web) {
	this.sm_str_web = sm_str_web;
}
public String getSm_str_crt_dt() {
	return sm_str_crt_dt;
}
public void setSm_str_crt_dt(String sm_str_crt_dt) {
	this.sm_str_crt_dt = sm_str_crt_dt;
}
public String getSm_str_crt_id() {
	return sm_str_crt_id;
}
public void setSm_str_crt_id(String sm_str_crt_id) {
	this.sm_str_crt_id = sm_str_crt_id;
}
public String getSm_str_updt_dt() {
	return sm_str_updt_dt;
}
public void setSm_str_updt_dt(String sm_str_updt_dt) {
	this.sm_str_updt_dt = sm_str_updt_dt;
}
public String getSm_str_updt_id() {
	return sm_str_updt_id;
}
public void setSm_str_updt_id(String sm_str_updt_id) {
	this.sm_str_updt_id = sm_str_updt_id;
}
public boolean isSm_str_sts() {
	return sm_str_sts;
}
public void setSm_str_sts(boolean sm_str_sts) {
	this.sm_str_sts = sm_str_sts;
}
@Override
public String toString() {
	return "Str_Mst [sm_id=" + sm_id + ", sm_str_cd=" + sm_str_cd + ", sm_cmy_cd=" + sm_cmy_cd + ", sm_str_nm="
			+ sm_str_nm + ", sm_alt_str_nm=" + sm_alt_str_nm + ", sm_rgst_nm1=" + sm_rgst_nm1 + ", sm_rgst_nm2="
			+ sm_rgst_nm2 + ", sm_rgst_nm3=" + sm_rgst_nm3 + ", sm_alt_rgst_nm1=" + sm_alt_rgst_nm1
			+ ", sm_alt_rgst_nm2=" + sm_alt_rgst_nm2 + ", sm_alt_rgst_nm3=" + sm_alt_rgst_nm3 + ", sm_str_ads1="
			+ sm_str_ads1 + ", sm_str_ads2=" + sm_str_ads2 + ", sm_str_cty=" + sm_str_cty + ", sm_str_st=" + sm_str_st
			+ ", sm_str_cy=" + sm_str_cy + ", sm_str_cny=" + sm_str_cny + ", sm_str_pin_cd=" + sm_str_pin_cd
			+ ", sm_str_ph_no=" + sm_str_ph_no + ", sm_str_mob_no=" + sm_str_mob_no + ", sm_str_eml=" + sm_str_eml
			+ ", sm_str_web=" + sm_str_web + ", sm_str_crt_dt=" + sm_str_crt_dt + ", sm_str_crt_id=" + sm_str_crt_id
			+ ", sm_str_updt_dt=" + sm_str_updt_dt + ", sm_str_updt_id=" + sm_str_updt_id + ", sm_str_sts="
			+ sm_str_sts + "]";
}

}
