package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="job_ord_hdr")
public class Job_Ord_Hdr implements Serializable{
private Long joh_id;
private String joh_doc_no;
private String joh_doc_dt;
private String joh_cmy_cd;
private String joh_pdt_typ;
private String joh_tot_wgt;
private String joh_tot_prty;
private String joh_iss_wgt;
private String joh_iss_prty;
private String joh_mold_typ;
private String joh_mn_prcs_sts;
private String joh_crt_dt;
private String joh_crt_id;
private String joh_dpt_cd;
private String joh_iss_pdng;
private String joh_intf_prcs_sts;
private String joh_updt_dt;
private String joh_updt_id;
private boolean joh_sts;
private boolean joh_iss_auth;
@Id
@GeneratedValue
public Long getJoh_id() {
	return joh_id;
}
public void setJoh_id(Long joh_id) {
	this.joh_id = joh_id;
}
@Index(name="doc_no_index")
public String getJoh_doc_no() {
	return joh_doc_no;
}
public void setJoh_doc_no(String joh_doc_no) {
	this.joh_doc_no = joh_doc_no;
}
public String getJoh_tot_wgt() {
	return joh_tot_wgt;
}
public void setJoh_tot_wgt(String joh_tot_wgt) {
	this.joh_tot_wgt = joh_tot_wgt;
}
public String getJoh_tot_prty() {
	return joh_tot_prty;
}
public void setJoh_tot_prty(String joh_tot_prty) {
	this.joh_tot_prty = joh_tot_prty;
}
public String getJoh_iss_wgt() {
	return joh_iss_wgt;
}
public void setJoh_iss_wgt(String joh_iss_wgt) {
	this.joh_iss_wgt = joh_iss_wgt;
}
public String getJoh_iss_prty() {
	return joh_iss_prty;
}
public void setJoh_iss_prty(String joh_iss_prty) {
	this.joh_iss_prty = joh_iss_prty;
}
public String getJoh_crt_dt() {
	return joh_crt_dt;
}
public void setJoh_crt_dt(String joh_crt_dt) {
	this.joh_crt_dt = joh_crt_dt;
}
public String getJoh_crt_id() {
	return joh_crt_id;
}
public void setJoh_crt_id(String joh_crt_id) {
	this.joh_crt_id = joh_crt_id;
}
public String getJoh_updt_dt() {
	return joh_updt_dt;
}
public void setJoh_updt_dt(String joh_updt_dt) {
	this.joh_updt_dt = joh_updt_dt;
}
public String getJoh_updt_id() {
	return joh_updt_id;
}
public void setJoh_updt_id(String joh_updt_id) {
	this.joh_updt_id = joh_updt_id;
}
public boolean isJoh_sts() {
	return joh_sts;
}
public void setJoh_sts(boolean joh_sts) {
	this.joh_sts = joh_sts;
}
public boolean isJoh_iss_auth() {
	return joh_iss_auth;
}
public void setJoh_iss_auth(boolean joh_iss_auth) {
	this.joh_iss_auth = joh_iss_auth;
}
@Override
public String toString() {
	return "Job_Ord_Hdr [joh_id=" + joh_id + ", joh_doc_no=" + joh_doc_no + ", joh_doc_dt=" + joh_doc_dt
			+ ", joh_cmy_cd=" + joh_cmy_cd + ", joh_pdt_typ=" + joh_pdt_typ + ", joh_tot_wgt=" + joh_tot_wgt
			+ ", joh_tot_prty=" + joh_tot_prty + ", joh_iss_wgt=" + joh_iss_wgt + ", joh_iss_prty=" + joh_iss_prty
			+ ", joh_mold_typ=" + joh_mold_typ + ", joh_mn_prcs_sts=" + joh_mn_prcs_sts + ", joh_crt_dt=" + joh_crt_dt
			+ ", joh_crt_id=" + joh_crt_id + ", joh_dpt_cd=" + joh_dpt_cd + ", joh_iss_pdng=" + joh_iss_pdng
			+ ", joh_intf_prcs_sts=" + joh_intf_prcs_sts + ", joh_updt_dt=" + joh_updt_dt + ", joh_updt_id="
			+ joh_updt_id + ", joh_sts=" + joh_sts + ", joh_iss_auth=" + joh_iss_auth + "]";
}
public String getJoh_pdt_typ() {
	return joh_pdt_typ;
}
public void setJoh_pdt_typ(String joh_pdt_typ) {
	this.joh_pdt_typ = joh_pdt_typ;
}
public String getJoh_cmy_cd() {
	return joh_cmy_cd;
}
public void setJoh_cmy_cd(String joh_cmy_cd) {
	this.joh_cmy_cd = joh_cmy_cd;
}
public String getJoh_mold_typ() {
	return joh_mold_typ;
}
public void setJoh_mold_typ(String joh_mold_typ) {
	this.joh_mold_typ = joh_mold_typ;
}
public String getJoh_dpt_cd() {
	return joh_dpt_cd;
}
public void setJoh_dpt_cd(String joh_dpt_cd) {
	this.joh_dpt_cd = joh_dpt_cd;
}
public String getJoh_iss_pdng() {
	return joh_iss_pdng;
}
public void setJoh_iss_pdng(String joh_iss_pdng) {
	this.joh_iss_pdng = joh_iss_pdng;
}
public String getJoh_intf_prcs_sts() {
	return joh_intf_prcs_sts;
}
public void setJoh_intf_prcs_sts(String joh_intf_prcs_sts) {
	this.joh_intf_prcs_sts = joh_intf_prcs_sts;
}
public String getJoh_mn_prcs_sts() {
	return joh_mn_prcs_sts;
}
public void setJoh_mn_prcs_sts(String joh_mn_prcs_sts) {
	this.joh_mn_prcs_sts = joh_mn_prcs_sts;
}
public String getJoh_doc_dt() {
	return joh_doc_dt;
}
public void setJoh_doc_dt(String joh_doc_dt) {
	this.joh_doc_dt = joh_doc_dt;
}
}
