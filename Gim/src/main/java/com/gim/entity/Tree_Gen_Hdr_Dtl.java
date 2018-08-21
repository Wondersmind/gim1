package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity

@Table(name="tree_gen_hdr_dtl")
public class Tree_Gen_Hdr_Dtl implements Serializable{
private Long tghd_id;
private String tghd_doc_no;
private String tghd_cmy_cd;
private String tghd_str_cd;
private String tghd_dpt_cd;
private String tghd_wrk_cd;
private String tghd_wax_no;
private String tghd_pdt_cd;
private String tghd_pdt_qty;
private String tghd_ctgy_cd;
private String tghd_ord_jo_no;
private String tghd_ord_typ;
private String tghd_trgt_dt;
private String tghd_crt_dt;
private String tghd_crt_id;
private String tghd_ord_no;
private String tghd_ord_prm_id;
private String tghd_updt_dt;
private String tghd_updt_id;
private boolean tghd_tree_sts;
private boolean tghd_cst_prcs_sts;
private boolean tghd_iss_auth;
@Id
@GeneratedValue
public Long getTghd_id() {
	return tghd_id;
}
public void setTghd_id(Long tghd_id) {
	this.tghd_id = tghd_id;
}
@Index(name="doc_no_index")
public String getTghd_doc_no() {
	return tghd_doc_no;
}
public void setTghd_doc_no(String tghd_doc_no) {
	this.tghd_doc_no = tghd_doc_no;
}
public String getTghd_cmy_cd() {
	return tghd_cmy_cd;
}
public void setTghd_cmy_cd(String tghd_cmy_cd) {
	this.tghd_cmy_cd = tghd_cmy_cd;
}
public String getTghd_str_cd() {
	return tghd_str_cd;
}
public void setTghd_str_cd(String tghd_str_cd) {
	this.tghd_str_cd = tghd_str_cd;
}
@Index(name="dpt_cd_index")
public String getTghd_dpt_cd() {
	return tghd_dpt_cd;
}
public void setTghd_dpt_cd(String tghd_dpt_cd) {
	this.tghd_dpt_cd = tghd_dpt_cd;
}
public String getTghd_wrk_cd() {
	return tghd_wrk_cd;
}
public void setTghd_wrk_cd(String tghd_wrk_cd) {
	this.tghd_wrk_cd = tghd_wrk_cd;
}
@Index(name="wax_no_index")
public String getTghd_wax_no() {
	return tghd_wax_no;
}
public void setTghd_wax_no(String tghd_wax_no) {
	this.tghd_wax_no = tghd_wax_no;
}
@Index(name="pdt_cd_index")
public String getTghd_pdt_cd() {
	return tghd_pdt_cd;
}
public void setTghd_pdt_cd(String tghd_pdt_cd) {
	this.tghd_pdt_cd = tghd_pdt_cd;
}
public String getTghd_pdt_qty() {
	return tghd_pdt_qty;
}
public void setTghd_pdt_qty(String tghd_pdt_qty) {
	this.tghd_pdt_qty = tghd_pdt_qty;
}
@Index(name="ctgy_cd_index")
public String getTghd_ctgy_cd() {
	return tghd_ctgy_cd;
}
public void setTghd_ctgy_cd(String tghd_ctgy_cd) {
	this.tghd_ctgy_cd = tghd_ctgy_cd;
}
public String getTghd_trgt_dt() {
	return tghd_trgt_dt;
}
public void setTghd_trgt_dt(String tghd_trgt_dt) {
	this.tghd_trgt_dt = tghd_trgt_dt;
}
public String getTghd_crt_dt() {
	return tghd_crt_dt;
}
public void setTghd_crt_dt(String tghd_crt_dt) {
	this.tghd_crt_dt = tghd_crt_dt;
}
public String getTghd_crt_id() {
	return tghd_crt_id;
}
public void setTghd_crt_id(String tghd_crt_id) {
	this.tghd_crt_id = tghd_crt_id;
}
public String getTghd_updt_dt() {
	return tghd_updt_dt;
}
public void setTghd_updt_dt(String tghd_updt_dt) {
	this.tghd_updt_dt = tghd_updt_dt;
}
public String getTghd_updt_id() {
	return tghd_updt_id;
}
public void setTghd_updt_id(String tghd_updt_id) {
	this.tghd_updt_id = tghd_updt_id;
}
public boolean isTghd_tree_sts() {
	return tghd_tree_sts;
}
public void setTghd_tree_sts(boolean tghd_tree_sts) {
	this.tghd_tree_sts = tghd_tree_sts;
}
@Override
public String toString() {
	return "Tree_Gen_Hdr_Dtl [tghd_id=" + tghd_id + ", tghd_doc_no=" + tghd_doc_no + ", tghd_cmy_cd=" + tghd_cmy_cd
			+ ", tghd_str_cd=" + tghd_str_cd + ", tghd_dpt_cd=" + tghd_dpt_cd + ", tghd_wrk_cd=" + tghd_wrk_cd
			+ ", tghd_wax_no=" + tghd_wax_no + ", tghd_pdt_cd=" + tghd_pdt_cd + ", tghd_pdt_qty=" + tghd_pdt_qty
			+ ", tghd_ctgy_cd=" + tghd_ctgy_cd + ", tghd_ord_jo_no=" + tghd_ord_jo_no + ", tghd_ord_typ="
			+ tghd_ord_typ + ", tghd_trgt_dt=" + tghd_trgt_dt + ", tghd_crt_dt=" + tghd_crt_dt + ", tghd_crt_id="
			+ tghd_crt_id + ", tghd_ord_no=" + tghd_ord_no + ", tghd_ord_prm_id=" + tghd_ord_prm_id + ", tghd_updt_dt="
			+ tghd_updt_dt + ", tghd_updt_id=" + tghd_updt_id + ", tghd_tree_sts=" + tghd_tree_sts
			+ ", tghd_cst_prcs_sts=" + tghd_cst_prcs_sts + ", tghd_iss_auth=" + tghd_iss_auth + "]";
}
public boolean isTghd_iss_auth() {
	return tghd_iss_auth;
}
public void setTghd_iss_auth(boolean tghd_iss_auth) {
	this.tghd_iss_auth = tghd_iss_auth;
}
public boolean isTghd_cst_prcs_sts() {
	return tghd_cst_prcs_sts;
}
public void setTghd_cst_prcs_sts(boolean tghd_cst_prcs_sts) {
	this.tghd_cst_prcs_sts = tghd_cst_prcs_sts;
}
public String getTghd_ord_jo_no() {
	return tghd_ord_jo_no;
}
public void setTghd_ord_jo_no(String tghd_ord_jo_no) {
	this.tghd_ord_jo_no = tghd_ord_jo_no;
}
public String getTghd_ord_typ() {
	return tghd_ord_typ;
}
public void setTghd_ord_typ(String tghd_ord_typ) {
	this.tghd_ord_typ = tghd_ord_typ;
}
public String getTghd_ord_no() {
	return tghd_ord_no;
}
public void setTghd_ord_no(String tghd_ord_no) {
	this.tghd_ord_no = tghd_ord_no;
}
public String getTghd_ord_prm_id() {
	return tghd_ord_prm_id;
}
public void setTghd_ord_prm_id(String tghd_ord_prm_id) {
	this.tghd_ord_prm_id = tghd_ord_prm_id;
}

}
