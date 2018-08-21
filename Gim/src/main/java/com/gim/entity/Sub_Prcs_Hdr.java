package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="sub_prcs_hdr")
public class Sub_Prcs_Hdr implements Serializable{
private Long sph_id;
private String sph_prcs_no;
private String sph_prcs_dt;
private String sph_cmy_cd;
private String sph_str_cd;
private String sph_frm_dpt;
private String sph_prcs_typ;
private String sph_wrk_cd;
private String sph_wrk_typ;
private String sph_iss_wgt;
private String sph_rcvd_wgt;
private String sph_crt_id;
private String sph_crt_dt;
private String sph_updt_id;
private String sph_updt_dt;
private String sph_bal_wgt;
private boolean sph_prcs_sts;
private boolean sph_iss_auth;
private boolean sph_rcvd_auth;
@Id
@GeneratedValue
public Long getSph_id() {
	return sph_id;
}
public void setSph_id(Long sph_id) {
	this.sph_id = sph_id;
}
@Index(name="prcs_no_index")
public String getSph_prcs_no() {
	return sph_prcs_no;
}
public void setSph_prcs_no(String sph_prcs_no) {
	this.sph_prcs_no = sph_prcs_no;
}
@Index(name="dpt_index")
public String getSph_frm_dpt() {
	return sph_frm_dpt;
}
public void setSph_frm_dpt(String sph_frm_dpt) {
	this.sph_frm_dpt = sph_frm_dpt;
}
public String getSph_prcs_typ() {
	return sph_prcs_typ;
}
public void setSph_prcs_typ(String sph_prcs_typ) {
	this.sph_prcs_typ = sph_prcs_typ;
}
@Index(name="wrk_index")
public String getSph_wrk_cd() {
	return sph_wrk_cd;
}
public void setSph_wrk_cd(String sph_wrk_cd) {
	this.sph_wrk_cd = sph_wrk_cd;
}
public String getSph_iss_wgt() {
	return sph_iss_wgt;
}
public void setSph_iss_wgt(String sph_iss_wgt) {
	this.sph_iss_wgt = sph_iss_wgt;
}
public String getSph_rcvd_wgt() {
	return sph_rcvd_wgt;
}
public void setSph_rcvd_wgt(String sph_rcvd_wgt) {
	this.sph_rcvd_wgt = sph_rcvd_wgt;
}
public String getSph_crt_id() {
	return sph_crt_id;
}
public void setSph_crt_id(String sph_crt_id) {
	this.sph_crt_id = sph_crt_id;
}
public String getSph_crt_dt() {
	return sph_crt_dt;
}
public void setSph_crt_dt(String sph_crt_dt) {
	this.sph_crt_dt = sph_crt_dt;
}
public String getSph_updt_id() {
	return sph_updt_id;
}
public void setSph_updt_id(String sph_updt_id) {
	this.sph_updt_id = sph_updt_id;
}
public String getSph_updt_dt() {
	return sph_updt_dt;
}
public void setSph_updt_dt(String sph_updt_dt) {
	this.sph_updt_dt = sph_updt_dt;
}
public boolean isSph_prcs_sts() {
	return sph_prcs_sts;
}
public void setSph_prcs_sts(boolean sph_prcs_sts) {
	this.sph_prcs_sts = sph_prcs_sts;
}
public boolean isSph_iss_auth() {
	return sph_iss_auth;
}
public void setSph_iss_auth(boolean sph_iss_auth) {
	this.sph_iss_auth = sph_iss_auth;
}
public boolean isSph_rcvd_auth() {
	return sph_rcvd_auth;
}
public void setSph_rcvd_auth(boolean sph_rcvd_auth) {
	this.sph_rcvd_auth = sph_rcvd_auth;
}
@Override
public String toString() {
	return "Sub_Prcs_Hdr [sph_id=" + sph_id + ", sph_prcs_no=" + sph_prcs_no + ", sph_prcs_dt=" + sph_prcs_dt
			+ ", sph_cmy_cd=" + sph_cmy_cd + ", sph_str_cd=" + sph_str_cd + ", sph_frm_dpt=" + sph_frm_dpt
			+ ", sph_prcs_typ=" + sph_prcs_typ + ", sph_wrk_cd=" + sph_wrk_cd + ", sph_wrk_typ=" + sph_wrk_typ
			+ ", sph_iss_wgt=" + sph_iss_wgt + ", sph_rcvd_wgt=" + sph_rcvd_wgt + ", sph_crt_id=" + sph_crt_id
			+ ", sph_crt_dt=" + sph_crt_dt + ", sph_updt_id=" + sph_updt_id + ", sph_updt_dt=" + sph_updt_dt
			+ ", sph_bal_wgt=" + sph_bal_wgt + ", sph_prcs_sts=" + sph_prcs_sts + ", sph_iss_auth=" + sph_iss_auth
			+ ", sph_rcvd_auth=" + sph_rcvd_auth + "]";
}
public String getSph_bal_wgt() {
	return sph_bal_wgt;
}
public void setSph_bal_wgt(String sph_bal_wgt) {
	this.sph_bal_wgt = sph_bal_wgt;
}
public String getSph_wrk_typ() {
	return sph_wrk_typ;
}
public void setSph_wrk_typ(String sph_wrk_typ) {
	this.sph_wrk_typ = sph_wrk_typ;
}
public String getSph_cmy_cd() {
	return sph_cmy_cd;
}
public void setSph_cmy_cd(String sph_cmy_cd) {
	this.sph_cmy_cd = sph_cmy_cd;
}
public String getSph_str_cd() {
	return sph_str_cd;
}
public void setSph_str_cd(String sph_str_cd) {
	this.sph_str_cd = sph_str_cd;
}
public String getSph_prcs_dt() {
	return sph_prcs_dt;
}
public void setSph_prcs_dt(String sph_prcs_dt) {
	this.sph_prcs_dt = sph_prcs_dt;
}

}
