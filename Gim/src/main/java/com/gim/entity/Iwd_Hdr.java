package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="iwd_hdr")
public class Iwd_Hdr implements Serializable{
private Long ih_id;
private String ih_doc_no;
private String ih_cmy_cd;
private String ih_vndr_inc_no;
private String ih_vndr_inc_dt;
private String ih_tot_rcvd_wgt;
private String ih_tot_rcvd_prty;
private String ih_tot_pure_gld_wgt;
private String ih_tot_doc_val;
private String ih_tot_pgm_cal;
private String ih_crt_dt;
private String ih_crt_id;
private String ih_updt_dt;
private String ih_updt_id;
private boolean ih_iss_auth;
private boolean ih_iwd_sts;
@Id
@GeneratedValue
public Long getIh_id() {
	return ih_id;
}
public void setIh_id(Long ih_id) {
	this.ih_id = ih_id;
}

public String getIh_vndr_inc_no() {
	return ih_vndr_inc_no;
}
public void setIh_vndr_inc_no(String ih_vndr_inc_no) {
	this.ih_vndr_inc_no = ih_vndr_inc_no;
}
public String getIh_tot_rcvd_wgt() {
	return ih_tot_rcvd_wgt;
}
public void setIh_tot_rcvd_wgt(String ih_tot_rcvd_wgt) {
	this.ih_tot_rcvd_wgt = ih_tot_rcvd_wgt;
}
public String getIh_tot_rcvd_prty() {
	return ih_tot_rcvd_prty;
}
public void setIh_tot_rcvd_prty(String ih_tot_rcvd_prty) {
	this.ih_tot_rcvd_prty = ih_tot_rcvd_prty;
}
public String getIh_tot_pure_gld_wgt() {
	return ih_tot_pure_gld_wgt;
}
public void setIh_tot_pure_gld_wgt(String ih_tot_pure_gld_wgt) {
	this.ih_tot_pure_gld_wgt = ih_tot_pure_gld_wgt;
}
public String getIh_tot_doc_val() {
	return ih_tot_doc_val;
}
public void setIh_tot_doc_val(String ih_tot_doc_val) {
	this.ih_tot_doc_val = ih_tot_doc_val;
}
public String getIh_tot_pgm_cal() {
	return ih_tot_pgm_cal;
}
public void setIh_tot_pgm_cal(String ih_tot_pgm_cal) {
	this.ih_tot_pgm_cal = ih_tot_pgm_cal;
}
public String getIh_crt_dt() {
	return ih_crt_dt;
}
public void setIh_crt_dt(String ih_crt_dt) {
	this.ih_crt_dt = ih_crt_dt;
}
public String getIh_crt_id() {
	return ih_crt_id;
}
public void setIh_crt_id(String ih_crt_id) {
	this.ih_crt_id = ih_crt_id;
}
public String getIh_updt_dt() {
	return ih_updt_dt;
}
public void setIh_updt_dt(String ih_updt_dt) {
	this.ih_updt_dt = ih_updt_dt;
}
public String getIh_updt_id() {
	return ih_updt_id;
}
public void setIh_updt_id(String ih_updt_id) {
	this.ih_updt_id = ih_updt_id;
}
public boolean isIh_iwd_sts() {
	return ih_iwd_sts;
}
public void setIh_iwd_sts(boolean ih_iwd_sts) {
	this.ih_iwd_sts = ih_iwd_sts;
}
@Override
public String toString() {
	return "Iwd_Hdr [ih_id=" + ih_id + ", ih_doc_no=" + ih_doc_no + ", ih_cmy_cd=" + ih_cmy_cd + ", ih_vndr_inc_no="
			+ ih_vndr_inc_no + ", ih_vndr_inc_dt=" + ih_vndr_inc_dt + ", ih_tot_rcvd_wgt=" + ih_tot_rcvd_wgt
			+ ", ih_tot_rcvd_prty=" + ih_tot_rcvd_prty + ", ih_tot_pure_gld_wgt=" + ih_tot_pure_gld_wgt
			+ ", ih_tot_doc_val=" + ih_tot_doc_val + ", ih_tot_pgm_cal=" + ih_tot_pgm_cal + ", ih_crt_dt=" + ih_crt_dt
			+ ", ih_crt_id=" + ih_crt_id + ", ih_updt_dt=" + ih_updt_dt + ", ih_updt_id=" + ih_updt_id
			+ ", ih_iss_auth=" + ih_iss_auth + ", ih_iwd_sts=" + ih_iwd_sts + "]";
}
@Index(name="doc_no_index")
public String getIh_doc_no() {
	return ih_doc_no;
}
public void setIh_doc_no(String ih_doc_no) {
	this.ih_doc_no = ih_doc_no;
}
public String getIh_vndr_inc_dt() {
	return ih_vndr_inc_dt;
}
public void setIh_vndr_inc_dt(String ih_vndr_inc_dt) {
	this.ih_vndr_inc_dt = ih_vndr_inc_dt;
}
public boolean isIh_iss_auth() {
	return ih_iss_auth;
}
public void setIh_iss_auth(boolean ih_iss_auth) {
	this.ih_iss_auth = ih_iss_auth;
}
public String getIh_cmy_cd() {
	return ih_cmy_cd;
}
public void setIh_cmy_cd(String ih_cmy_cd) {
	this.ih_cmy_cd = ih_cmy_cd;
}

}
