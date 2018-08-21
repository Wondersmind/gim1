package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="iwd_hdr_dtl")
public class Iwd_Hdr_Dtl implements Serializable{
private Long ihd_id;
private String ihd_doc_no;
private String ihd_cmy_cd;
private String ihd_str_cd;
private String ihd_iwd_typ;
private String ihd_vndr_cd;
private String ihd_vndr_inc_no;
private String ihd_vndr_inc_dt;
private String ihd_dpt_cd;
private String ihd_pdt_cd;
private String ihd_pdt_qty;
private String ihd_mtl_wgt;
private String ihd_dc_isd;
private String ihd_rcvd_prty;
private String ihd_doc_val;
private String ihd_pgm_cal;
private String ihd_pure_gld_wgt;
private String ihd_crt_dt;
private String ihd_crt_id;
private String ihd_updt_dt;
private String ihd_updt_id;
private boolean ihd_iwd_sts;
private boolean ihd_iss_auth;
@Id
@GeneratedValue
public Long getIhd_id() {
	return ihd_id;
}
public void setIhd_id(Long ihd_id) {
	this.ihd_id = ihd_id;
}
@Index(name="doc_no_index")
public String getIhd_doc_no() {
	return ihd_doc_no;
}
public void setIhd_doc_no(String ihd_doc_no) {
	this.ihd_doc_no = ihd_doc_no;
}
public String getIhd_cmy_cd() {
	return ihd_cmy_cd;
}
public void setIhd_cmy_cd(String ihd_cmy_cd) {
	this.ihd_cmy_cd = ihd_cmy_cd;
}
public String getIhd_str_cd() {
	return ihd_str_cd;
}
public void setIhd_str_cd(String ihd_str_cd) {
	this.ihd_str_cd = ihd_str_cd;
}
public String getIhd_iwd_typ() {
	return ihd_iwd_typ;
}
public void setIhd_iwd_typ(String ihd_iwd_typ) {
	this.ihd_iwd_typ = ihd_iwd_typ;
}
public String getIhd_vndr_cd() {
	return ihd_vndr_cd;
}
public void setIhd_vndr_cd(String ihd_vndr_cd) {
	this.ihd_vndr_cd = ihd_vndr_cd;
}
public String getIhd_vndr_inc_no() {
	return ihd_vndr_inc_no;
}
public void setIhd_vndr_inc_no(String ihd_vndr_inc_no) {
	this.ihd_vndr_inc_no = ihd_vndr_inc_no;
}
public String getIhd_vndr_inc_dt() {
	return ihd_vndr_inc_dt;
}
public void setIhd_vndr_inc_dt(String ihd_vndr_inc_dt) {
	this.ihd_vndr_inc_dt = ihd_vndr_inc_dt;
}
public String getIhd_dpt_cd() {
	return ihd_dpt_cd;
}
public void setIhd_dpt_cd(String ihd_dpt_cd) {
	this.ihd_dpt_cd = ihd_dpt_cd;
}
@Index(name="pdt_cd_index")
public String getIhd_pdt_cd() {
	return ihd_pdt_cd;
}
public void setIhd_pdt_cd(String ihd_pdt_cd) {
	this.ihd_pdt_cd = ihd_pdt_cd;
}
public String getIhd_mtl_wgt() {
	return ihd_mtl_wgt;
}
public void setIhd_mtl_wgt(String ihd_mtl_wgt) {
	this.ihd_mtl_wgt = ihd_mtl_wgt;
}
public String getIhd_rcvd_prty() {
	return ihd_rcvd_prty;
}
public void setIhd_rcvd_prty(String ihd_rcvd_prty) {
	this.ihd_rcvd_prty = ihd_rcvd_prty;
}
public String getIhd_doc_val() {
	return ihd_doc_val;
}
public void setIhd_doc_val(String ihd_doc_val) {
	this.ihd_doc_val = ihd_doc_val;
}
public String getIhd_pgm_cal() {
	return ihd_pgm_cal;
}
public void setIhd_pgm_cal(String ihd_pgm_cal) {
	this.ihd_pgm_cal = ihd_pgm_cal;
}
public String getIhd_pure_gld_wgt() {
	return ihd_pure_gld_wgt;
}
public void setIhd_pure_gld_wgt(String ihd_pure_gld_wgt) {
	this.ihd_pure_gld_wgt = ihd_pure_gld_wgt;
}
public String getIhd_crt_dt() {
	return ihd_crt_dt;
}
public void setIhd_crt_dt(String ihd_crt_dt) {
	this.ihd_crt_dt = ihd_crt_dt;
}
public String getIhd_crt_id() {
	return ihd_crt_id;
}
public void setIhd_crt_id(String ihd_crt_id) {
	this.ihd_crt_id = ihd_crt_id;
}
public String getIhd_updt_dt() {
	return ihd_updt_dt;
}
public void setIhd_updt_dt(String ihd_updt_dt) {
	this.ihd_updt_dt = ihd_updt_dt;
}
public String getIhd_updt_id() {
	return ihd_updt_id;
}
public void setIhd_updt_id(String ihd_updt_id) {
	this.ihd_updt_id = ihd_updt_id;
}
public boolean isIhd_iwd_sts() {
	return ihd_iwd_sts;
}
public void setIhd_iwd_sts(boolean ihd_iwd_sts) {
	this.ihd_iwd_sts = ihd_iwd_sts;
}
@Override
public String toString() {
	return "Iwd_Hdr_Dtl [ihd_id=" + ihd_id + ", ihd_doc_no=" + ihd_doc_no + ", ihd_cmy_cd=" + ihd_cmy_cd
			+ ", ihd_str_cd=" + ihd_str_cd + ", ihd_iwd_typ=" + ihd_iwd_typ + ", ihd_vndr_cd=" + ihd_vndr_cd
			+ ", ihd_vndr_inc_no=" + ihd_vndr_inc_no + ", ihd_vndr_inc_dt=" + ihd_vndr_inc_dt + ", ihd_dpt_cd="
			+ ihd_dpt_cd + ", ihd_pdt_cd=" + ihd_pdt_cd + ", ihd_pdt_qty=" + ihd_pdt_qty + ", ihd_mtl_wgt="
			+ ihd_mtl_wgt + ", ihd_dc_isd=" + ihd_dc_isd + ", ihd_rcvd_prty=" + ihd_rcvd_prty + ", ihd_doc_val="
			+ ihd_doc_val + ", ihd_pgm_cal=" + ihd_pgm_cal + ", ihd_pure_gld_wgt=" + ihd_pure_gld_wgt + ", ihd_crt_dt="
			+ ihd_crt_dt + ", ihd_crt_id=" + ihd_crt_id + ", ihd_updt_dt=" + ihd_updt_dt + ", ihd_updt_id="
			+ ihd_updt_id + ", ihd_iwd_sts=" + ihd_iwd_sts + ", ihd_iss_auth=" + ihd_iss_auth + "]";
}
public boolean isIhd_iss_auth() {
	return ihd_iss_auth;
}
public void setIhd_iss_auth(boolean ihd_iss_auth) {
	this.ihd_iss_auth = ihd_iss_auth;
}
public String getIhd_pdt_qty() {
	return ihd_pdt_qty;
}
public void setIhd_pdt_qty(String ihd_pdt_qty) {
	this.ihd_pdt_qty = ihd_pdt_qty;
}
public String getIhd_dc_isd() {
	return ihd_dc_isd;
}
public void setIhd_dc_isd(String ihd_dc_isd) {
	this.ihd_dc_isd = ihd_dc_isd;
}

}
