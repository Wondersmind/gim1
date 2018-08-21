package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="sub_prcs_hdr_dtl")
public class Sub_Prcs_Hdr_Dtl implements Serializable{
private Long sphd_id;
private String sphd_prcs_no;
private String sphd_dpt_cd;
private String sphd_prcs_typ;
private String sphd_cmy_cd;
private String sphd_str_cd;
private String sphd_wrk_cd;
private String sphd_wrk_typ;
private String sphd_iwd_ref_id;
private String sphd_trgt_dt;
private String sphd_iss_doc_no;
private String sphd_iss_doc_typ;
private String sphd_itm_typ;
private String sphd_itm_cd;
private String sphd_iss_stk_prty;
private String sphd_iss_stk_wgt;
private String sphd_rcvd_stk_wgt;
private String sphd_bal_wgt;
private boolean sphd_iss_auth;
private boolean sphd_rcvd_auth;
private boolean sphd_prcs_sts;
private String sphd_crt_dt;
private String sphd_crt_id;
private String sphd_updt_dt;
private String sphd_updt_id;
private String sphd_dc_isd_sts;
private String sphd_dc_rcvd_sts;
@Id
@GeneratedValue
public Long getSphd_id() {
	return sphd_id;
}
public void setSphd_id(Long sphd_id) {
	this.sphd_id = sphd_id;
}
@Index(name="prcs_no_index")
public String getSphd_prcs_no() {
	return sphd_prcs_no;
}
public void setSphd_prcs_no(String sphd_prcs_no) {
	this.sphd_prcs_no = sphd_prcs_no;
}
public String getSphd_dpt_cd() {
	return sphd_dpt_cd;
}
public void setSphd_dpt_cd(String sphd_dpt_cd) {
	this.sphd_dpt_cd = sphd_dpt_cd;
}
public String getSphd_prcs_typ() {
	return sphd_prcs_typ;
}
public void setSphd_prcs_typ(String sphd_prcs_typ) {
	this.sphd_prcs_typ = sphd_prcs_typ;
}
public String getSphd_wrk_cd() {
	return sphd_wrk_cd;
}
public void setSphd_wrk_cd(String sphd_wrk_cd) {
	this.sphd_wrk_cd = sphd_wrk_cd;
}
public String getSphd_trgt_dt() {
	return sphd_trgt_dt;
}
public void setSphd_trgt_dt(String sphd_trgt_dt) {
	this.sphd_trgt_dt = sphd_trgt_dt;
}
@Index(name="iss_doc_no_index")
public String getSphd_iss_doc_no() {
	return sphd_iss_doc_no;
}
public void setSphd_iss_doc_no(String sphd_iss_doc_no) {
	this.sphd_iss_doc_no = sphd_iss_doc_no;
}
public String getSphd_iss_doc_typ() {
	return sphd_iss_doc_typ;
}
public void setSphd_iss_doc_typ(String sphd_iss_doc_typ) {
	this.sphd_iss_doc_typ = sphd_iss_doc_typ;
}
public String getSphd_itm_typ() {
	return sphd_itm_typ;
}
public void setSphd_itm_typ(String sphd_itm_typ) {
	this.sphd_itm_typ = sphd_itm_typ;
}
@Index(name="itm_cd_index")
public String getSphd_itm_cd() {
	return sphd_itm_cd;
}
public void setSphd_itm_cd(String sphd_itm_cd) {
	this.sphd_itm_cd = sphd_itm_cd;
}
public String getSphd_iss_stk_wgt() {
	return sphd_iss_stk_wgt;
}
public void setSphd_iss_stk_wgt(String sphd_iss_stk_wgt) {
	this.sphd_iss_stk_wgt = sphd_iss_stk_wgt;
}
public String getSphd_rcvd_stk_wgt() {
	return sphd_rcvd_stk_wgt;
}
public void setSphd_rcvd_stk_wgt(String sphd_rcvd_stk_wgt) {
	this.sphd_rcvd_stk_wgt = sphd_rcvd_stk_wgt;
}
public String getSphd_bal_wgt() {
	return sphd_bal_wgt;
}
public void setSphd_bal_wgt(String sphd_bal_wgt) {
	this.sphd_bal_wgt = sphd_bal_wgt;
}
public boolean isSphd_iss_auth() {
	return sphd_iss_auth;
}
public void setSphd_iss_auth(boolean sphd_iss_auth) {
	this.sphd_iss_auth = sphd_iss_auth;
}
public boolean isSphd_rcvd_auth() {
	return sphd_rcvd_auth;
}
public void setSphd_rcvd_auth(boolean sphd_rcvd_auth) {
	this.sphd_rcvd_auth = sphd_rcvd_auth;
}
public boolean isSphd_prcs_sts() {
	return sphd_prcs_sts;
}
public void setSphd_prcs_sts(boolean sphd_prcs_sts) {
	this.sphd_prcs_sts = sphd_prcs_sts;
}
public String getSphd_crt_dt() {
	return sphd_crt_dt;
}
public void setSphd_crt_dt(String sphd_crt_dt) {
	this.sphd_crt_dt = sphd_crt_dt;
}
public String getSphd_crt_id() {
	return sphd_crt_id;
}
public void setSphd_crt_id(String sphd_crt_id) {
	this.sphd_crt_id = sphd_crt_id;
}
public String getSphd_updt_dt() {
	return sphd_updt_dt;
}
public void setSphd_updt_dt(String sphd_updt_dt) {
	this.sphd_updt_dt = sphd_updt_dt;
}
public String getSphd_updt_id() {
	return sphd_updt_id;
}
public void setSphd_updt_id(String sphd_updt_id) {
	this.sphd_updt_id = sphd_updt_id;
}


public String getSphd_cmy_cd() {
	return sphd_cmy_cd;
}
public void setSphd_cmy_cd(String sphd_cmy_cd) {
	this.sphd_cmy_cd = sphd_cmy_cd;
}
public String getSphd_str_cd() {
	return sphd_str_cd;
}
public void setSphd_str_cd(String sphd_str_cd) {
	this.sphd_str_cd = sphd_str_cd;
}
@Override
public String toString() {
	return "Sub_Prcs_Hdr_Dtl [sphd_id=" + sphd_id + ", sphd_prcs_no=" + sphd_prcs_no + ", sphd_dpt_cd=" + sphd_dpt_cd
			+ ", sphd_prcs_typ=" + sphd_prcs_typ + ", sphd_cmy_cd=" + sphd_cmy_cd + ", sphd_str_cd=" + sphd_str_cd
			+ ", sphd_wrk_cd=" + sphd_wrk_cd + ", sphd_wrk_typ=" + sphd_wrk_typ + ", sphd_trgt_dt=" + sphd_trgt_dt
			+ ", sphd_iss_doc_no=" + sphd_iss_doc_no + ", sphd_iss_doc_typ=" + sphd_iss_doc_typ + ", sphd_itm_typ="
			+ sphd_itm_typ + ", sphd_itm_cd=" + sphd_itm_cd + ", sphd_iss_stk_prty=" + sphd_iss_stk_prty
			+ ", sphd_iss_stk_wgt=" + sphd_iss_stk_wgt + ", sphd_rcvd_stk_wgt=" + sphd_rcvd_stk_wgt + ", sphd_bal_wgt="
			+ sphd_bal_wgt + ", sphd_iss_auth=" + sphd_iss_auth + ", sphd_rcvd_auth=" + sphd_rcvd_auth
			+ ", sphd_prcs_sts=" + sphd_prcs_sts + ", sphd_crt_dt=" + sphd_crt_dt + ", sphd_crt_id=" + sphd_crt_id
			+ ", sphd_updt_dt=" + sphd_updt_dt + ", sphd_updt_id=" + sphd_updt_id + ", sphd_dc_isd_sts="
			+ sphd_dc_isd_sts + ", sphd_dc_rcvd_sts=" + sphd_dc_rcvd_sts + "]";
}
public String getSphd_iss_stk_prty() {
	return sphd_iss_stk_prty;
}
public void setSphd_iss_stk_prty(String sphd_iss_stk_prty) {
	this.sphd_iss_stk_prty = sphd_iss_stk_prty;
}
public String getSphd_dc_isd_sts() {
	return sphd_dc_isd_sts;
}
public void setSphd_dc_isd_sts(String sphd_dc_isd_sts) {
	this.sphd_dc_isd_sts = sphd_dc_isd_sts;
}
public String getSphd_dc_rcvd_sts() {
	return sphd_dc_rcvd_sts;
}
public void setSphd_dc_rcvd_sts(String sphd_dc_rcvd_sts) {
	this.sphd_dc_rcvd_sts = sphd_dc_rcvd_sts;
}
public String getSphd_wrk_typ() {
	return sphd_wrk_typ;
}
public void setSphd_wrk_typ(String sphd_wrk_typ) {
	this.sphd_wrk_typ = sphd_wrk_typ;
}
public String getSphd_iwd_ref_id() {
	return sphd_iwd_ref_id;
}
public void setSphd_iwd_ref_id(String sphd_iwd_ref_id) {
	this.sphd_iwd_ref_id = sphd_iwd_ref_id;
}

}
