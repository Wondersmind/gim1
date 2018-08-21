package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="rcvy_hdr")
public class Rcvy_Hdr implements Serializable{
private Long rh_id;
private String rh_cmy_cd;
private String rh_str_cd;
private String rh_doc_no;
private String rh_doc_dt;
private String rh_dpt_cd;
private String rh_is_tkn_by_gc;
private String rh_wrk_cd;
private String rh_wrk_typ;
private Double rh_bal_stk;
private Double rh_tot_rcvy_mtl;
private Double rh_tot_cnvt_wgt;
private Double rh_tot_rcvy_wr;
private Double rh_tot_rcvy_bal;
private String rh_crt_dt;
private String rh_updt_dt;
private String rh_crt_id;
private boolean rh_sts;
private boolean rh_iss_auth;
private boolean rh_rcvd_auth;
@Id
@GeneratedValue
public Long getRh_id() {
	return rh_id;
}

public void setRh_id(Long rh_id) {
	this.rh_id = rh_id;
}

public String getRh_cmy_cd() {
	return rh_cmy_cd;
}

public void setRh_cmy_cd(String rh_cmy_cd) {
	this.rh_cmy_cd = rh_cmy_cd;
}

public String getRh_str_cd() {
	return rh_str_cd;
}

public void setRh_str_cd(String rh_str_cd) {
	this.rh_str_cd = rh_str_cd;
}
@Index(name="doc_no")
public String getRh_doc_no() {
	return rh_doc_no;
}

public void setRh_doc_no(String rh_doc_no) {
	this.rh_doc_no = rh_doc_no;
}
@Index(name="dpt_cd")
public String getRh_dpt_cd() {
	return rh_dpt_cd;
}

public void setRh_dpt_cd(String rh_dpt_cd) {
	this.rh_dpt_cd = rh_dpt_cd;
}
@Index(name="wrk_cd")
public String getRh_wrk_cd() {
	return rh_wrk_cd;
}

public void setRh_wrk_cd(String rh_wrk_cd) {
	this.rh_wrk_cd = rh_wrk_cd;
}

public Double getRh_bal_stk() {
	return rh_bal_stk;
}

public void setRh_bal_stk(Double rh_bal_stk) {
	this.rh_bal_stk = rh_bal_stk;
}

public Double getRh_tot_rcvy_mtl() {
	return rh_tot_rcvy_mtl;
}

public void setRh_tot_rcvy_mtl(Double rh_tot_rcvy_mtl) {
	this.rh_tot_rcvy_mtl = rh_tot_rcvy_mtl;
}

public Double getRh_tot_cnvt_wgt() {
	return rh_tot_cnvt_wgt;
}

public void setRh_tot_cnvt_wgt(Double rh_tot_cnvt_wgt) {
	this.rh_tot_cnvt_wgt = rh_tot_cnvt_wgt;
}

public Double getRh_tot_rcvy_wr() {
	return rh_tot_rcvy_wr;
}

public void setRh_tot_rcvy_wr(Double rh_tot_rcvy_wr) {
	this.rh_tot_rcvy_wr = rh_tot_rcvy_wr;
}

public Double getRh_tot_rcvy_bal() {
	return rh_tot_rcvy_bal;
}

public void setRh_tot_rcvy_bal(Double rh_tot_rcvy_bal) {
	this.rh_tot_rcvy_bal = rh_tot_rcvy_bal;
}

public String getRh_crt_dt() {
	return rh_crt_dt;
}

public void setRh_crt_dt(String rh_crt_dt) {
	this.rh_crt_dt = rh_crt_dt;
}

public String getRh_updt_dt() {
	return rh_updt_dt;
}

public void setRh_updt_dt(String rh_updt_dt) {
	this.rh_updt_dt = rh_updt_dt;
}

public String getRh_crt_id() {
	return rh_crt_id;
}

public void setRh_crt_id(String rh_crt_id) {
	this.rh_crt_id = rh_crt_id;
}

public boolean isRh_sts() {
	return rh_sts;
}

public void setRh_sts(boolean rh_sts) {
	this.rh_sts = rh_sts;
}

public boolean isRh_iss_auth() {
	return rh_iss_auth;
}

public void setRh_iss_auth(boolean rh_iss_auth) {
	this.rh_iss_auth = rh_iss_auth;
}

public boolean isRh_rcvd_auth() {
	return rh_rcvd_auth;
}

public void setRh_rcvd_auth(boolean rh_rcvd_auth) {
	this.rh_rcvd_auth = rh_rcvd_auth;
}

@Override
public String toString() {
	return "Rcvy_Hdr [rh_id=" + rh_id + ", rh_cmy_cd=" + rh_cmy_cd + ", rh_str_cd=" + rh_str_cd + ", rh_doc_no="
			+ rh_doc_no + ", rh_doc_dt=" + rh_doc_dt + ", rh_dpt_cd=" + rh_dpt_cd + ", rh_is_tkn_by_gc="
			+ rh_is_tkn_by_gc + ", rh_wrk_cd=" + rh_wrk_cd + ", rh_wrk_typ=" + rh_wrk_typ + ", rh_bal_stk="
			+ rh_bal_stk + ", rh_tot_rcvy_mtl=" + rh_tot_rcvy_mtl + ", rh_tot_cnvt_wgt=" + rh_tot_cnvt_wgt
			+ ", rh_tot_rcvy_wr=" + rh_tot_rcvy_wr + ", rh_tot_rcvy_bal=" + rh_tot_rcvy_bal + ", rh_crt_dt="
			+ rh_crt_dt + ", rh_updt_dt=" + rh_updt_dt + ", rh_crt_id=" + rh_crt_id + ", rh_sts=" + rh_sts
			+ ", rh_iss_auth=" + rh_iss_auth + ", rh_rcvd_auth=" + rh_rcvd_auth + "]";
}

public String getRh_wrk_typ() {
	return rh_wrk_typ;
}

public void setRh_wrk_typ(String rh_wrk_typ) {
	this.rh_wrk_typ = rh_wrk_typ;
}

public String getRh_is_tkn_by_gc() {
	return rh_is_tkn_by_gc;
}

public void setRh_is_tkn_by_gc(String rh_is_tkn_by_gc) {
	this.rh_is_tkn_by_gc = rh_is_tkn_by_gc;
}

public String getRh_doc_dt() {
	return rh_doc_dt;
}

public void setRh_doc_dt(String rh_doc_dt) {
	this.rh_doc_dt = rh_doc_dt;
}

}
