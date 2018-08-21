package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="intl_trf_hdr")
public class Intl_Trf_Hdr implements Serializable{
private Long ith_id;
private String ith_doc_no;
private String ith_doc_dt;
private String ith_frm_dpt_cd;
private String ith_cmy_cd;
private String ith_to_dpt_cd;
private String ith_cstr_cd;
private String ith_trf_typ;
private String ith_bom_isd_wgt;
private String ith_tot_rcvd_wgt;
private String ith_tot_rcvd_qty;
private String ith_tot_iss_wgt;
private boolean ith_iss_auth;
private boolean ith_trf_sts;
private String ith_crt_id;
private String ith_crt_dt;
private String ith_updt_id;
private String ith_updt_dt;
@Id
@GeneratedValue
public Long getIth_id() {
	return ith_id;
}
public void setIth_id(Long ith_id) {
	this.ith_id = ith_id;
}
@Index(name="doc_no_index")
public String getIth_doc_no() {
	return ith_doc_no;
}
public void setIth_doc_no(String ith_doc_no) {
	this.ith_doc_no = ith_doc_no;
}
@Index(name="frm_dpt_index")
public String getIth_frm_dpt_cd() {
	return ith_frm_dpt_cd;
}
public void setIth_frm_dpt_cd(String ith_frm_dpt_cd) {
	this.ith_frm_dpt_cd = ith_frm_dpt_cd;
}
@Index(name="to_dpt_index")
public String getIth_to_dpt_cd() {
	return ith_to_dpt_cd;
}
public void setIth_to_dpt_cd(String ith_to_dpt_cd) {
	this.ith_to_dpt_cd = ith_to_dpt_cd;
}
public String getIth_trf_typ() {
	return ith_trf_typ;
}
public void setIth_trf_typ(String ith_trf_typ) {
	this.ith_trf_typ = ith_trf_typ;
}
public String getIth_tot_rcvd_wgt() {
	return ith_tot_rcvd_wgt;
}
public void setIth_tot_rcvd_wgt(String ith_tot_rcvd_wgt) {
	this.ith_tot_rcvd_wgt = ith_tot_rcvd_wgt;
}
public String getIth_tot_iss_wgt() {
	return ith_tot_iss_wgt;
}
public void setIth_tot_iss_wgt(String ith_tot_iss_wgt) {
	this.ith_tot_iss_wgt = ith_tot_iss_wgt;
}
public boolean isIth_iss_auth() {
	return ith_iss_auth;
}
public void setIth_iss_auth(boolean ith_iss_auth) {
	this.ith_iss_auth = ith_iss_auth;
}
public boolean isIth_trf_sts() {
	return ith_trf_sts;
}
public void setIth_trf_sts(boolean ith_trf_sts) {
	this.ith_trf_sts = ith_trf_sts;
}
public String getIth_crt_id() {
	return ith_crt_id;
}
public void setIth_crt_id(String ith_crt_id) {
	this.ith_crt_id = ith_crt_id;
}
public String getIth_crt_dt() {
	return ith_crt_dt;
}
public void setIth_crt_dt(String ith_crt_dt) {
	this.ith_crt_dt = ith_crt_dt;
}
public String getIth_updt_id() {
	return ith_updt_id;
}
public void setIth_updt_id(String ith_updt_id) {
	this.ith_updt_id = ith_updt_id;
}
public String getIth_updt_dt() {
	return ith_updt_dt;
}
public void setIth_updt_dt(String ith_updt_dt) {
	this.ith_updt_dt = ith_updt_dt;
}
@Override
public String toString() {
	return "Intl_Trf_Hdr [ith_id=" + ith_id + ", ith_doc_no=" + ith_doc_no + ", ith_doc_dt=" + ith_doc_dt
			+ ", ith_frm_dpt_cd=" + ith_frm_dpt_cd + ", ith_cmy_cd=" + ith_cmy_cd + ", ith_to_dpt_cd=" + ith_to_dpt_cd
			+ ", ith_cstr_cd=" + ith_cstr_cd + ", ith_trf_typ=" + ith_trf_typ + ", ith_bom_isd_wgt=" + ith_bom_isd_wgt
			+ ", ith_tot_rcvd_wgt=" + ith_tot_rcvd_wgt + ", ith_tot_rcvd_qty=" + ith_tot_rcvd_qty
			+ ", ith_tot_iss_wgt=" + ith_tot_iss_wgt + ", ith_iss_auth=" + ith_iss_auth + ", ith_trf_sts="
			+ ith_trf_sts + ", ith_crt_id=" + ith_crt_id + ", ith_crt_dt=" + ith_crt_dt + ", ith_updt_id="
			+ ith_updt_id + ", ith_updt_dt=" + ith_updt_dt + "]";
}
public String getIth_bom_isd_wgt() {
	return ith_bom_isd_wgt;
}
public void setIth_bom_isd_wgt(String ith_bom_isd_wgt) {
	this.ith_bom_isd_wgt = ith_bom_isd_wgt;
}
public String getIth_cmy_cd() {
	return ith_cmy_cd;
}
public void setIth_cmy_cd(String ith_cmy_cd) {
	this.ith_cmy_cd = ith_cmy_cd;
}
public String getIth_cstr_cd() {
	return ith_cstr_cd;
}
public void setIth_cstr_cd(String ith_cstr_cd) {
	this.ith_cstr_cd = ith_cstr_cd;
}
public String getIth_doc_dt() {
	return ith_doc_dt;
}
public void setIth_doc_dt(String ith_doc_dt) {
	this.ith_doc_dt = ith_doc_dt;
}
public String getIth_tot_rcvd_qty() {
	return ith_tot_rcvd_qty;
}
public void setIth_tot_rcvd_qty(String ith_tot_rcvd_qty) {
	this.ith_tot_rcvd_qty = ith_tot_rcvd_qty;
}

}
