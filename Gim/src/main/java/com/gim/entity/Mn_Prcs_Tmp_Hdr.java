package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="mn_prcs_tmp_hdr")
public class Mn_Prcs_Tmp_Hdr implements Serializable{
private Long mpth_id;
private String mpth_doc_no;
private String mpth_doc_dt;
private String mpth_cmy_cd;
private String mpth_str_cd;
private String mpth_frm_dpt;
private String mpth_trgt_dt;
private String mpth_prcs_typ;
private String mpth_wrk_cd;
private String mpth_rcvd_doc_no;
private String mpth_wrk_typ;
private String mpth_mtl_wgt;
private String mpth_mtl_prty;
private String mpth_crt_id;
private String mpth_crt_dt;
private String mpth_updt_id;
private String mpth_updt_dt;
private boolean mpth_iss_auth;
private boolean mpth_rcvd_auth;
private boolean mpth_prcs_sts;
private boolean mphd_iss_rtn_prcs;
@Id
@GeneratedValue
public Long getmpth_id() {
	return mpth_id;
}

public void setmpth_id(Long mpth_id) {
	this.mpth_id = mpth_id;
}
@Index(name="doc_no_index")
public String getmpth_doc_no() {
	return mpth_doc_no;
}

public void setmpth_doc_no(String mpth_doc_no) {
	this.mpth_doc_no = mpth_doc_no;
}
@Index(name="dpt_index")
public String getmpth_frm_dpt() {
	return mpth_frm_dpt;
}

public void setmpth_frm_dpt(String mpth_frm_dpt) {
	this.mpth_frm_dpt = mpth_frm_dpt;
}

public String getmpth_trgt_dt() {
	return mpth_trgt_dt;
}

public void setmpth_trgt_dt(String mpth_trgt_dt) {
	this.mpth_trgt_dt = mpth_trgt_dt;
}

public String getmpth_prcs_typ() {
	return mpth_prcs_typ;
}

public void setmpth_prcs_typ(String mpth_prcs_typ) {
	this.mpth_prcs_typ = mpth_prcs_typ;
}
@Index(name="dpt_index")
public String getmpth_wrk_cd() {
	return mpth_wrk_cd;
}

public void setmpth_wrk_cd(String mpth_wrk_cd) {
	this.mpth_wrk_cd = mpth_wrk_cd;
}

public String getmpth_wrk_typ() {
	return mpth_wrk_typ;
}

public void setmpth_wrk_typ(String mpth_wrk_typ) {
	this.mpth_wrk_typ = mpth_wrk_typ;
}

public String getmpth_mtl_wgt() {
	return mpth_mtl_wgt;
}

public void setmpth_mtl_wgt(String mpth_mtl_wgt) {
	this.mpth_mtl_wgt = mpth_mtl_wgt;
}

public String getmpth_mtl_prty() {
	return mpth_mtl_prty;
}

public void setmpth_mtl_prty(String mpth_mtl_prty) {
	this.mpth_mtl_prty = mpth_mtl_prty;
}

public String getmpth_crt_id() {
	return mpth_crt_id;
}

public void setmpth_crt_id(String mpth_crt_id) {
	this.mpth_crt_id = mpth_crt_id;
}

public String getmpth_crt_dt() {
	return mpth_crt_dt;
}

public void setmpth_crt_dt(String mpth_crt_dt) {
	this.mpth_crt_dt = mpth_crt_dt;
}

public String getmpth_updt_id() {
	return mpth_updt_id;
}

public void setmpth_updt_id(String mpth_updt_id) {
	this.mpth_updt_id = mpth_updt_id;
}

public String getmpth_updt_dt() {
	return mpth_updt_dt;
}

public void setmpth_updt_dt(String mpth_updt_dt) {
	this.mpth_updt_dt = mpth_updt_dt;
}

public boolean ismpth_iss_auth() {
	return mpth_iss_auth;
}

public void setmpth_iss_auth(boolean mpth_iss_auth) {
	this.mpth_iss_auth = mpth_iss_auth;
}

public boolean ismpth_rcvd_auth() {
	return mpth_rcvd_auth;
}

public void setmpth_rcvd_auth(boolean mpth_rcvd_auth) {
	this.mpth_rcvd_auth = mpth_rcvd_auth;
}

public boolean ismpth_prcs_sts() {
	return mpth_prcs_sts;
}

public void setmpth_prcs_sts(boolean mpth_prcs_sts) {
	this.mpth_prcs_sts = mpth_prcs_sts;
}

@Override
public String toString() {
	return "Mn_Prcs_Tmp_Hdr [mpth_id=" + mpth_id + ", mpth_doc_no=" + mpth_doc_no + ", mpth_doc_dt=" + mpth_doc_dt
			+ ", mpth_cmy_cd=" + mpth_cmy_cd + ", mpth_str_cd=" + mpth_str_cd + ", mpth_frm_dpt=" + mpth_frm_dpt
			+ ", mpth_trgt_dt=" + mpth_trgt_dt + ", mpth_prcs_typ=" + mpth_prcs_typ + ", mpth_wrk_cd=" + mpth_wrk_cd
			+ ", mpth_rcvd_doc_no=" + mpth_rcvd_doc_no + ", mpth_wrk_typ=" + mpth_wrk_typ + ", mpth_mtl_wgt="
			+ mpth_mtl_wgt + ", mpth_mtl_prty=" + mpth_mtl_prty + ", mpth_crt_id=" + mpth_crt_id + ", mpth_crt_dt="
			+ mpth_crt_dt + ", mpth_updt_id=" + mpth_updt_id + ", mpth_updt_dt=" + mpth_updt_dt + ", mpth_iss_auth="
			+ mpth_iss_auth + ", mpth_rcvd_auth=" + mpth_rcvd_auth + ", mpth_prcs_sts=" + mpth_prcs_sts
			+ ", mphd_iss_rtn_prcs=" + mphd_iss_rtn_prcs + "]";
}

public boolean isMphd_iss_rtn_prcs() {
	return mphd_iss_rtn_prcs;
}

public void setMphd_iss_rtn_prcs(boolean mphd_iss_rtn_prcs) {
	this.mphd_iss_rtn_prcs = mphd_iss_rtn_prcs;
}

public String getMpth_rcvd_doc_no() {
	return mpth_rcvd_doc_no;
}

public void setMpth_rcvd_doc_no(String mpth_rcvd_doc_no) {
	this.mpth_rcvd_doc_no = mpth_rcvd_doc_no;
}

public String getMpth_cmy_cd() {
	return mpth_cmy_cd;
}

public void setMpth_cmy_cd(String mpth_cmy_cd) {
	this.mpth_cmy_cd = mpth_cmy_cd;
}

public String getMpth_str_cd() {
	return mpth_str_cd;
}

public void setMpth_str_cd(String mpth_str_cd) {
	this.mpth_str_cd = mpth_str_cd;
}

public String getMpth_doc_dt() {
	return mpth_doc_dt;
}

public void setMpth_doc_dt(String mpth_doc_dt) {
	this.mpth_doc_dt = mpth_doc_dt;
}


}
