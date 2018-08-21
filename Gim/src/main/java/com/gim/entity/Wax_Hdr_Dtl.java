package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="wax_hdr_dtl")
public class Wax_Hdr_Dtl implements Serializable{
private Long whd_id;
private String whd_doc_no;
private String whd_cmy_cd;
private String whd_str_cd;
private String whd_dpt_cd;
private String whd_wrkr_cd;
private String whd_trgt_dt;
private String whd_ord_no;
private String whd_ord_prm_id;
private String whd_iss_ruse_ord;
private String whd_ord_typ;
private String whd_pdt_cd;
private String whd_pdt_qty;
private String whd_tree_gntr_sts;
private String whd_crt_id;
private String whd_crt_dt;
private String whd_updt_id;
private String whd_updt_dt;
private boolean whd_wax_sts;
private boolean whd_iss_auth;
@Id
@GeneratedValue
public Long getWhd_id() {
	return whd_id;
}

public void setWhd_id(Long whd_id) {
	this.whd_id = whd_id;
}
@Index(name="doc_no_index")
public String getWhd_doc_no() {
	return whd_doc_no;
}

public void setWhd_doc_no(String whd_doc_no) {
	this.whd_doc_no = whd_doc_no;
}

public String getWhd_cmy_cd() {
	return whd_cmy_cd;
}

public void setWhd_cmy_cd(String whd_cmy_cd) {
	this.whd_cmy_cd = whd_cmy_cd;
}

public String getWhd_str_cd() {
	return whd_str_cd;
}

public void setWhd_str_cd(String whd_str_cd) {
	this.whd_str_cd = whd_str_cd;
}

public String getWhd_dpt_cd() {
	return whd_dpt_cd;
}

public void setWhd_dpt_cd(String whd_dpt_cd) {
	this.whd_dpt_cd = whd_dpt_cd;
}

public String getWhd_wrkr_cd() {
	return whd_wrkr_cd;
}

public void setWhd_wrkr_cd(String whd_wrkr_cd) {
	this.whd_wrkr_cd = whd_wrkr_cd;
}

public String getWhd_trgt_dt() {
	return whd_trgt_dt;
}

public void setWhd_trgt_dt(String whd_trgt_dt) {
	this.whd_trgt_dt = whd_trgt_dt;
}
@Index(name="ord_no_index")
public String getWhd_ord_no() {
	return whd_ord_no;
}

public void setWhd_ord_no(String whd_ord_no) {
	this.whd_ord_no = whd_ord_no;
}

public String getWhd_tree_gntr_sts() {
	return whd_tree_gntr_sts;
}

public void setWhd_tree_gntr_sts(String whd_tree_gntr_sts) {
	this.whd_tree_gntr_sts = whd_tree_gntr_sts;
}

public String getWhd_crt_id() {
	return whd_crt_id;
}

public void setWhd_crt_id(String whd_crt_id) {
	this.whd_crt_id = whd_crt_id;
}

public String getWhd_crt_dt() {
	return whd_crt_dt;
}

public void setWhd_crt_dt(String whd_crt_dt) {
	this.whd_crt_dt = whd_crt_dt;
}

public String getWhd_updt_id() {
	return whd_updt_id;
}

public void setWhd_updt_id(String whd_updt_id) {
	this.whd_updt_id = whd_updt_id;
}

public String getWhd_updt_dt() {
	return whd_updt_dt;
}

public void setWhd_updt_dt(String whd_updt_dt) {
	this.whd_updt_dt = whd_updt_dt;
}

public boolean isWhd_wax_sts() {
	return whd_wax_sts;
}

public void setWhd_wax_sts(boolean whd_wax_sts) {
	this.whd_wax_sts = whd_wax_sts;
}

@Override
public String toString() {
	return "Wax_Hdr_Dtl [whd_id=" + whd_id + ", whd_doc_no=" + whd_doc_no + ", whd_cmy_cd=" + whd_cmy_cd
			+ ", whd_str_cd=" + whd_str_cd + ", whd_dpt_cd=" + whd_dpt_cd + ", whd_wrkr_cd=" + whd_wrkr_cd
			+ ", whd_trgt_dt=" + whd_trgt_dt + ", whd_ord_no=" + whd_ord_no + ", whd_ord_prm_id=" + whd_ord_prm_id
			+ ", whd_iss_ruse_ord=" + whd_iss_ruse_ord + ", whd_ord_typ=" + whd_ord_typ + ", whd_pdt_cd=" + whd_pdt_cd
			+ ", whd_pdt_qty=" + whd_pdt_qty + ", whd_tree_gntr_sts=" + whd_tree_gntr_sts + ", whd_crt_id="
			+ whd_crt_id + ", whd_crt_dt=" + whd_crt_dt + ", whd_updt_id=" + whd_updt_id + ", whd_updt_dt="
			+ whd_updt_dt + ", whd_wax_sts=" + whd_wax_sts + ", whd_iss_auth=" + whd_iss_auth + "]";
}

public String getWhd_pdt_cd() {
	return whd_pdt_cd;
}

public void setWhd_pdt_cd(String whd_pdt_cd) {
	this.whd_pdt_cd = whd_pdt_cd;
}

public String getWhd_pdt_qty() {
	return whd_pdt_qty;
}

public void setWhd_pdt_qty(String whd_pdt_qty) {
	this.whd_pdt_qty = whd_pdt_qty;
}

public boolean isWhd_iss_auth() {
	return whd_iss_auth;
}

public void setWhd_iss_auth(boolean whd_iss_auth) {
	this.whd_iss_auth = whd_iss_auth;
}

public String getWhd_ord_typ() {
	return whd_ord_typ;
}

public void setWhd_ord_typ(String whd_ord_typ) {
	this.whd_ord_typ = whd_ord_typ;
}

public String getWhd_iss_ruse_ord() {
	return whd_iss_ruse_ord;
}

public void setWhd_iss_ruse_ord(String whd_iss_ruse_ord) {
	this.whd_iss_ruse_ord = whd_iss_ruse_ord;
}

public String getWhd_ord_prm_id() {
	return whd_ord_prm_id;
}

public void setWhd_ord_prm_id(String whd_ord_prm_id) {
	this.whd_ord_prm_id = whd_ord_prm_id;
}

}
