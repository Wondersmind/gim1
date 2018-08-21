package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="job_ord_hdr_dtl")
public class Job_Ord_Hdr_Dtl implements Serializable{
private Long johd_id;
private String johd_doc_no;
private String johd_dpt_cd;
private String johd_trgt_dt;
private String johd_ord_typ;
private String johd_ord_no;
private String johd_cmy_cd;
private String johd_ord_prim_id;
private String johd_ord_wgt;
private String johd_ord_prty;
private String johd_pdt_typ;
private String johd_pdt_cd;
private String johd_pdt_dpt_cd;
private String johd_pdt_btch_no;
private String johd_bom_cd;
private String johd_pdt_ctgy;
private String johd_dgn_no;
private String johd_ord_qty;
private boolean johd_iss_auth;
private boolean johd_job_sts;
private String johd_itnl_prcs_sts;
private String johd_tree_no;
private String johd_fnsh_pdt_sts;
private String johd_crt_dt;
private String johd_crt_id;
private String johd_updt_dt;
private String johd_updt_id;
@Id
@GeneratedValue
public Long getJohd_id() {
	return johd_id;
}
public void setJohd_id(Long johd_id) {
	this.johd_id = johd_id;
}
@Index(name="doc_no_index")
public String getJohd_doc_no() {
	return johd_doc_no;
}
public void setJohd_doc_no(String johd_doc_no) {
	this.johd_doc_no = johd_doc_no;
}
public String getJohd_dpt_cd() {
	return johd_dpt_cd;
}
public String getJohd_ord_wgt() {
	return johd_ord_wgt;
}
public void setJohd_ord_wgt(String johd_ord_wgt) {
	this.johd_ord_wgt = johd_ord_wgt;
}
public String getJohd_ord_prty() {
	return johd_ord_prty;
}
public void setJohd_ord_prty(String johd_ord_prty) {
	this.johd_ord_prty = johd_ord_prty;
}
public void setJohd_dpt_cd(String johd_dpt_cd) {
	this.johd_dpt_cd = johd_dpt_cd;
}
public String getJohd_trgt_dt() {
	return johd_trgt_dt;
}
public void setJohd_trgt_dt(String johd_trgt_dt) {
	this.johd_trgt_dt = johd_trgt_dt;
}
public String getJohd_ord_typ() {
	return johd_ord_typ;
}
public void setJohd_ord_typ(String johd_ord_typ) {
	this.johd_ord_typ = johd_ord_typ;
}
@Index(name="ord_no_index")
public String getJohd_ord_no() {
	return johd_ord_no;
}
public void setJohd_ord_no(String johd_ord_no) {
	this.johd_ord_no = johd_ord_no;
}
public String getJohd_pdt_typ() {
	return johd_pdt_typ;
}
public void setJohd_pdt_typ(String johd_pdt_typ) {
	this.johd_pdt_typ = johd_pdt_typ;
}
@Index(name="pdt_cd_index")
public String getJohd_pdt_cd() {
	return johd_pdt_cd;
}
public void setJohd_pdt_cd(String johd_pdt_cd) {
	this.johd_pdt_cd = johd_pdt_cd;
}
public String getJohd_pdt_ctgy() {
	return johd_pdt_ctgy;
}
public void setJohd_pdt_ctgy(String johd_pdt_ctgy) {
	this.johd_pdt_ctgy = johd_pdt_ctgy;
}
public String getJohd_dgn_no() {
	return johd_dgn_no;
}
public void setJohd_dgn_no(String johd_dgn_no) {
	this.johd_dgn_no = johd_dgn_no;
}
public String getJohd_ord_qty() {
	return johd_ord_qty;
}
public void setJohd_ord_qty(String johd_ord_qty) {
	this.johd_ord_qty = johd_ord_qty;
}
public boolean isJohd_iss_auth() {
	return johd_iss_auth;
}
public void setJohd_iss_auth(boolean johd_iss_auth) {
	this.johd_iss_auth = johd_iss_auth;
}
public boolean isJohd_job_sts() {
	return johd_job_sts;
}
public void setJohd_job_sts(boolean johd_job_sts) {
	this.johd_job_sts = johd_job_sts;
}
public String getJohd_crt_dt() {
	return johd_crt_dt;
}
public void setJohd_crt_dt(String johd_crt_dt) {
	this.johd_crt_dt = johd_crt_dt;
}
public String getJohd_crt_id() {
	return johd_crt_id;
}
public void setJohd_crt_id(String johd_crt_id) {
	this.johd_crt_id = johd_crt_id;
}
public String getJohd_updt_dt() {
	return johd_updt_dt;
}
public void setJohd_updt_dt(String johd_updt_dt) {
	this.johd_updt_dt = johd_updt_dt;
}
public String getJohd_updt_id() {
	return johd_updt_id;
}
public void setJohd_updt_id(String johd_updt_id) {
	this.johd_updt_id = johd_updt_id;
}
@Override
public String toString() {
	return "Job_Ord_Hdr_Dtl [johd_id=" + johd_id + ", johd_doc_no=" + johd_doc_no + ", johd_dpt_cd=" + johd_dpt_cd
			+ ", johd_trgt_dt=" + johd_trgt_dt + ", johd_ord_typ=" + johd_ord_typ + ", johd_ord_no=" + johd_ord_no
			+ ", johd_cmy_cd=" + johd_cmy_cd + ", johd_ord_prim_id=" + johd_ord_prim_id + ", johd_ord_wgt="
			+ johd_ord_wgt + ", johd_ord_prty=" + johd_ord_prty + ", johd_pdt_typ=" + johd_pdt_typ + ", johd_pdt_cd="
			+ johd_pdt_cd + ", johd_pdt_dpt_cd=" + johd_pdt_dpt_cd + ", johd_pdt_btch_no=" + johd_pdt_btch_no
			+ ", johd_bom_cd=" + johd_bom_cd + ", johd_pdt_ctgy=" + johd_pdt_ctgy + ", johd_dgn_no=" + johd_dgn_no
			+ ", johd_ord_qty=" + johd_ord_qty + ", johd_iss_auth=" + johd_iss_auth + ", johd_job_sts=" + johd_job_sts
			+ ", johd_itnl_prcs_sts=" + johd_itnl_prcs_sts + ", johd_tree_no=" + johd_tree_no + ", johd_fnsh_pdt_sts="
			+ johd_fnsh_pdt_sts + ", johd_crt_dt=" + johd_crt_dt + ", johd_crt_id=" + johd_crt_id + ", johd_updt_dt="
			+ johd_updt_dt + ", johd_updt_id=" + johd_updt_id + "]";
}
public String getJohd_itnl_prcs_sts() {
	return johd_itnl_prcs_sts;
}
public void setJohd_itnl_prcs_sts(String johd_itnl_prcs_sts) {
	this.johd_itnl_prcs_sts = johd_itnl_prcs_sts;
}
public String getJohd_bom_cd() {
	return johd_bom_cd;
}
public void setJohd_bom_cd(String johd_bom_cd) {
	this.johd_bom_cd = johd_bom_cd;
}
@Index(name="pdt_dpt_cd")
public String getJohd_pdt_dpt_cd() {
	return johd_pdt_dpt_cd;
}
public void setJohd_pdt_dpt_cd(String johd_pdt_dpt_cd) {
	this.johd_pdt_dpt_cd = johd_pdt_dpt_cd;
}
public String getJohd_fnsh_pdt_sts() {
	return johd_fnsh_pdt_sts;
}
public void setJohd_fnsh_pdt_sts(String johd_fnsh_pdt_sts) {
	this.johd_fnsh_pdt_sts = johd_fnsh_pdt_sts;
}
public String getJohd_pdt_btch_no() {
	return johd_pdt_btch_no;
}
public void setJohd_pdt_btch_no(String johd_pdt_btch_no) {
	this.johd_pdt_btch_no = johd_pdt_btch_no;
}
public String getJohd_tree_no() {
	return johd_tree_no;
}
public void setJohd_tree_no(String johd_tree_no) {
	this.johd_tree_no = johd_tree_no;
}
public String getJohd_ord_prim_id() {
	return johd_ord_prim_id;
}
public void setJohd_ord_prim_id(String johd_ord_prim_id) {
	this.johd_ord_prim_id = johd_ord_prim_id;
}
public String getJohd_cmy_cd() {
	return johd_cmy_cd;
}
public void setJohd_cmy_cd(String johd_cmy_cd) {
	this.johd_cmy_cd = johd_cmy_cd;
}
}
