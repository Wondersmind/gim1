package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="vn_ct_mst")
public class Vn_Ct_Mst implements Serializable{
private Long vcm_id;
private String vcm_vnct_cd;
private String vcm_cmy_cd;
private String vcm_str_cd;
private String vcm_dpt_cd;
private String vcm_vnct_typ;
private String vcm_vnct_nm;
private String vcm_vnct_rgst_nm1;
private String vcm_vnct_rgst_nm2;
private String vcm_vnct_rgst_nm3;
private String vcm_vnct_alt_rgst_nm1;
private String vcm_vnct_alt_rgst_nm2;
private String vcm_vnct_alt_rgst_nm3;
private String vcm_vnct_ads1;
private String vcm_vnct_ads2;
private String vcm_vnct_cty;
private String vcm_vnct_st;
private String vcm_vnct_cy;
private String vcm_vnct_cny;
private String vcm_vnct_pin_cd;
private String vcm_alw_qty;
private String vcm_vnct_ph_no;
private String vcm_vnct_mob_no;
private String vcm_vnct_eml;
private String vcm_vnct_web;
private String vcm_vnct_pym_trm;
private String vcm_vnct_crt_dt;
private String vcm_vnct_crt_id;
private String vcm_vnct_updt_dt;
private String vcm_vnct_updt_id;
private boolean vcm_vnct_sts;
@Id
@GeneratedValue
public Long getVcm_id() {
	return vcm_id;
}

public void setVcm_id(Long vcm_id) {
	this.vcm_id = vcm_id;
}
@Index(name="vnct_cd_index")
public String getVcm_vnct_cd() {
	return vcm_vnct_cd;
}

public void setVcm_vnct_cd(String vcm_vnct_cd) {
	this.vcm_vnct_cd = vcm_vnct_cd;
}

public String getVcm_cmy_cd() {
	return vcm_cmy_cd;
}

public void setVcm_cmy_cd(String vcm_cmy_cd) {
	this.vcm_cmy_cd = vcm_cmy_cd;
}

public String getVcm_str_cd() {
	return vcm_str_cd;
}

public void setVcm_str_cd(String vcm_str_cd) {
	this.vcm_str_cd = vcm_str_cd;
}

public String getVcm_vnct_typ() {
	return vcm_vnct_typ;
}

public void setVcm_vnct_typ(String vcm_vnct_typ) {
	this.vcm_vnct_typ = vcm_vnct_typ;
}

public String getVcm_vnct_nm() {
	return vcm_vnct_nm;
}

public void setVcm_vnct_nm(String vcm_vnct_nm) {
	this.vcm_vnct_nm = vcm_vnct_nm;
}

public String getVcm_vnct_rgst_nm1() {
	return vcm_vnct_rgst_nm1;
}

public void setVcm_vnct_rgst_nm1(String vcm_vnct_rgst_nm1) {
	this.vcm_vnct_rgst_nm1 = vcm_vnct_rgst_nm1;
}

public String getVcm_vnct_rgst_nm2() {
	return vcm_vnct_rgst_nm2;
}

public void setVcm_vnct_rgst_nm2(String vcm_vnct_rgst_nm2) {
	this.vcm_vnct_rgst_nm2 = vcm_vnct_rgst_nm2;
}

public String getVcm_vnct_rgst_nm3() {
	return vcm_vnct_rgst_nm3;
}

public void setVcm_vnct_rgst_nm3(String vcm_vnct_rgst_nm3) {
	this.vcm_vnct_rgst_nm3 = vcm_vnct_rgst_nm3;
}

public String getVcm_vnct_alt_rgst_nm1() {
	return vcm_vnct_alt_rgst_nm1;
}

public void setVcm_vnct_alt_rgst_nm1(String vcm_vnct_alt_rgst_nm1) {
	this.vcm_vnct_alt_rgst_nm1 = vcm_vnct_alt_rgst_nm1;
}

public String getVcm_vnct_alt_rgst_nm2() {
	return vcm_vnct_alt_rgst_nm2;
}

public void setVcm_vnct_alt_rgst_nm2(String vcm_vnct_alt_rgst_nm2) {
	this.vcm_vnct_alt_rgst_nm2 = vcm_vnct_alt_rgst_nm2;
}

public String getVcm_vnct_alt_rgst_nm3() {
	return vcm_vnct_alt_rgst_nm3;
}

public void setVcm_vnct_alt_rgst_nm3(String vcm_vnct_alt_rgst_nm3) {
	this.vcm_vnct_alt_rgst_nm3 = vcm_vnct_alt_rgst_nm3;
}

public String getVcm_vnct_ads1() {
	return vcm_vnct_ads1;
}

public void setVcm_vnct_ads1(String vcm_vnct_ads1) {
	this.vcm_vnct_ads1 = vcm_vnct_ads1;
}

public String getVcm_vnct_ads2() {
	return vcm_vnct_ads2;
}

public void setVcm_vnct_ads2(String vcm_vnct_ads2) {
	this.vcm_vnct_ads2 = vcm_vnct_ads2;
}

public String getVcm_vnct_cty() {
	return vcm_vnct_cty;
}

public void setVcm_vnct_cty(String vcm_vnct_cty) {
	this.vcm_vnct_cty = vcm_vnct_cty;
}

public String getVcm_vnct_st() {
	return vcm_vnct_st;
}

public void setVcm_vnct_st(String vcm_vnct_st) {
	this.vcm_vnct_st = vcm_vnct_st;
}

public String getVcm_vnct_cy() {
	return vcm_vnct_cy;
}

public void setVcm_vnct_cy(String vcm_vnct_cy) {
	this.vcm_vnct_cy = vcm_vnct_cy;
}

public String getVcm_vnct_cny() {
	return vcm_vnct_cny;
}

public void setVcm_vnct_cny(String vcm_vnct_cny) {
	this.vcm_vnct_cny = vcm_vnct_cny;
}

public String getVcm_vnct_pin_cd() {
	return vcm_vnct_pin_cd;
}

public void setVcm_vnct_pin_cd(String vcm_vnct_pin_cd) {
	this.vcm_vnct_pin_cd = vcm_vnct_pin_cd;
}

public String getVcm_vnct_ph_no() {
	return vcm_vnct_ph_no;
}

public void setVcm_vnct_ph_no(String vcm_vnct_ph_no) {
	this.vcm_vnct_ph_no = vcm_vnct_ph_no;
}

public String getVcm_vnct_mob_no() {
	return vcm_vnct_mob_no;
}

public void setVcm_vnct_mob_no(String vcm_vnct_mob_no) {
	this.vcm_vnct_mob_no = vcm_vnct_mob_no;
}

public String getVcm_vnct_eml() {
	return vcm_vnct_eml;
}

public void setVcm_vnct_eml(String vcm_vnct_eml) {
	this.vcm_vnct_eml = vcm_vnct_eml;
}

public String getVcm_vnct_web() {
	return vcm_vnct_web;
}

public void setVcm_vnct_web(String vcm_vnct_web) {
	this.vcm_vnct_web = vcm_vnct_web;
}

public String getVcm_vnct_pym_trm() {
	return vcm_vnct_pym_trm;
}

public void setVcm_vnct_pym_trm(String vcm_vnct_pym_trm) {
	this.vcm_vnct_pym_trm = vcm_vnct_pym_trm;
}

public String getVcm_vnct_crt_dt() {
	return vcm_vnct_crt_dt;
}

public void setVcm_vnct_crt_dt(String vcm_vnct_crt_dt) {
	this.vcm_vnct_crt_dt = vcm_vnct_crt_dt;
}

public String getVcm_vnct_crt_id() {
	return vcm_vnct_crt_id;
}

public void setVcm_vnct_crt_id(String vcm_vnct_crt_id) {
	this.vcm_vnct_crt_id = vcm_vnct_crt_id;
}

public String getVcm_vnct_updt_dt() {
	return vcm_vnct_updt_dt;
}

public void setVcm_vnct_updt_dt(String vcm_vnct_updt_dt) {
	this.vcm_vnct_updt_dt = vcm_vnct_updt_dt;
}

public String getVcm_vnct_updt_id() {
	return vcm_vnct_updt_id;
}

public void setVcm_vnct_updt_id(String vcm_vnct_updt_id) {
	this.vcm_vnct_updt_id = vcm_vnct_updt_id;
}

public boolean isVcm_vnct_sts() {
	return vcm_vnct_sts;
}

public void setVcm_vnct_sts(boolean vcm_vnct_sts) {
	this.vcm_vnct_sts = vcm_vnct_sts;
}

@Override
public String toString() {
	return "Vn_Ct_Mst [vcm_id=" + vcm_id + ", vcm_vnct_cd=" + vcm_vnct_cd + ", vcm_cmy_cd=" + vcm_cmy_cd
			+ ", vcm_str_cd=" + vcm_str_cd + ", vcm_dpt_cd=" + vcm_dpt_cd + ", vcm_vnct_typ=" + vcm_vnct_typ
			+ ", vcm_vnct_nm=" + vcm_vnct_nm + ", vcm_vnct_rgst_nm1=" + vcm_vnct_rgst_nm1 + ", vcm_vnct_rgst_nm2="
			+ vcm_vnct_rgst_nm2 + ", vcm_vnct_rgst_nm3=" + vcm_vnct_rgst_nm3 + ", vcm_vnct_alt_rgst_nm1="
			+ vcm_vnct_alt_rgst_nm1 + ", vcm_vnct_alt_rgst_nm2=" + vcm_vnct_alt_rgst_nm2 + ", vcm_vnct_alt_rgst_nm3="
			+ vcm_vnct_alt_rgst_nm3 + ", vcm_vnct_ads1=" + vcm_vnct_ads1 + ", vcm_vnct_ads2=" + vcm_vnct_ads2
			+ ", vcm_vnct_cty=" + vcm_vnct_cty + ", vcm_vnct_st=" + vcm_vnct_st + ", vcm_vnct_cy=" + vcm_vnct_cy
			+ ", vcm_vnct_cny=" + vcm_vnct_cny + ", vcm_vnct_pin_cd=" + vcm_vnct_pin_cd + ", vcm_alw_qty="
			+ vcm_alw_qty + ", vcm_vnct_ph_no=" + vcm_vnct_ph_no + ", vcm_vnct_mob_no=" + vcm_vnct_mob_no
			+ ", vcm_vnct_eml=" + vcm_vnct_eml + ", vcm_vnct_web=" + vcm_vnct_web + ", vcm_vnct_pym_trm="
			+ vcm_vnct_pym_trm + ", vcm_vnct_crt_dt=" + vcm_vnct_crt_dt + ", vcm_vnct_crt_id=" + vcm_vnct_crt_id
			+ ", vcm_vnct_updt_dt=" + vcm_vnct_updt_dt + ", vcm_vnct_updt_id=" + vcm_vnct_updt_id + ", vcm_vnct_sts="
			+ vcm_vnct_sts + "]";
}

public String getVcm_dpt_cd() {
	return vcm_dpt_cd;
}

public void setVcm_dpt_cd(String vcm_dpt_cd) {
	this.vcm_dpt_cd = vcm_dpt_cd;
}

public String getVcm_alw_qty() {
	return vcm_alw_qty;
}

public void setVcm_alw_qty(String vcm_alw_qty) {
	this.vcm_alw_qty = vcm_alw_qty;
}

}
