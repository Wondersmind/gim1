package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
/**
 * @author admin
 *
 */
@Entity
@Table(name="ord_hdr_dtl")
public class Ord_Hdr_Dtl implements Serializable{
private Long ohd_id;
private String ohd_cmy_cd;
private String ohd_ord_img;
private String ohd_str_cd;
private String ohd_cst_cd;
private String ohd_ord_typ;
private String ohd_ord_qty;
private String ohd_ord_bch_no;
private String ohd_ord_jn_no;
private String ohd_ord_jn_dt;
private String ohd_ord_std_wt;
private String ohd_ord_carat;
private String ohd_ord_rmk;
private String ohd_ord_no;
private String ohd_ord_dt;
private String ohd_ord_trgt_dt;
private String ohd_ord_pdt_cd;
private String ohd_ord_crt_dt;
private String ohd_ord_crt_id;
private String ohd_ord_updt_dt;
private String ohd_ord_updt_id;
private String ohd_wax_sts; 
private String ohd_crnt_wrk; 
private String ohd_crnt_wrk_typ;
private String ohd_crnt_prcs; 
private boolean ohd_is_alw_job_ord;
private boolean ohd_alw_inhse_bm_mk;
private String ohd_job_ord_prcs;
private String ohd_iss_bom_mk_prcs;
private boolean ohd_ord_sts;
private String ohd_iss_ruse;
private boolean ohd_iss_auth;
@Id
@GeneratedValue
public Long getOhd_id() {
	return ohd_id;
}
public void setOhd_id(Long ohd_id) {
	this.ohd_id = ohd_id;
}
public String getOhd_cmy_cd() {
	return ohd_cmy_cd;
}
public void setOhd_cmy_cd(String ohd_cmy_cd) {
	this.ohd_cmy_cd = ohd_cmy_cd;
}
public String getOhd_str_cd() {
	return ohd_str_cd;
}
public void setOhd_str_cd(String ohd_str_cd) {
	this.ohd_str_cd = ohd_str_cd;
}
public String getOhd_cst_cd() {
	return ohd_cst_cd;
}
public void setOhd_cst_cd(String ohd_cst_cd) {
	this.ohd_cst_cd = ohd_cst_cd;
}
public String getOhd_ord_typ() {
	return ohd_ord_typ;
}
public void setOhd_ord_typ(String ohd_ord_typ) {
	this.ohd_ord_typ = ohd_ord_typ;
}
public String getOhd_ord_qty() {
	return ohd_ord_qty;
}
public void setOhd_ord_qty(String ohd_ord_qty) {
	this.ohd_ord_qty = ohd_ord_qty;
}
@Index(name="ord_bch_no_index")
public String getOhd_ord_bch_no() {
	return ohd_ord_bch_no;
}
public void setOhd_ord_bch_no(String ohd_ord_bch_no) {
	this.ohd_ord_bch_no = ohd_ord_bch_no;
}
public String getOhd_ord_jn_no() {
	return ohd_ord_jn_no;
}
public void setOhd_ord_jn_no(String ohd_ord_jn_no) {
	this.ohd_ord_jn_no = ohd_ord_jn_no;
}
public String getOhd_ord_jn_dt() {
	return ohd_ord_jn_dt;
}
public void setOhd_ord_jn_dt(String ohd_ord_jn_dt) {
	this.ohd_ord_jn_dt = ohd_ord_jn_dt;
}
public String getOhd_ord_std_wt() {
	return ohd_ord_std_wt;
}
public void setOhd_ord_std_wt(String ohd_ord_std_wt) {
	this.ohd_ord_std_wt = ohd_ord_std_wt;
}
public String getOhd_ord_carat() {
	return ohd_ord_carat;
}
public void setOhd_ord_carat(String ohd_ord_carat) {
	this.ohd_ord_carat = ohd_ord_carat;
}
public String getOhd_ord_rmk() {
	return ohd_ord_rmk;
}
public void setOhd_ord_rmk(String ohd_ord_rmk) {
	this.ohd_ord_rmk = ohd_ord_rmk;
}
@Index(name="ord_no_index")
public String getOhd_ord_no() {
	return ohd_ord_no;
}
public void setOhd_ord_no(String ohd_ord_no) {
	this.ohd_ord_no = ohd_ord_no;
}
public String getOhd_ord_dt() {
	return ohd_ord_dt;
}
public void setOhd_ord_dt(String ohd_ord_dt) {
	this.ohd_ord_dt = ohd_ord_dt;
}
public String getOhd_ord_trgt_dt() {
	return ohd_ord_trgt_dt;
}
public void setOhd_ord_trgt_dt(String ohd_ord_trgt_dt) {
	this.ohd_ord_trgt_dt = ohd_ord_trgt_dt;
}
@Index(name="ord_pdt_cd_index")
public String getOhd_ord_pdt_cd() {
	return ohd_ord_pdt_cd;
}
public void setOhd_ord_pdt_cd(String ohd_ord_pdt_cd) {
	this.ohd_ord_pdt_cd = ohd_ord_pdt_cd;
}
public String getOhd_ord_crt_dt() {
	return ohd_ord_crt_dt;
}
public void setOhd_ord_crt_dt(String ohd_ord_crt_dt) {
	this.ohd_ord_crt_dt = ohd_ord_crt_dt;
}
public String getOhd_ord_crt_id() {
	return ohd_ord_crt_id;
}
public void setOhd_ord_crt_id(String ohd_ord_crt_id) {
	this.ohd_ord_crt_id = ohd_ord_crt_id;
}
public String getOhd_ord_updt_dt() {
	return ohd_ord_updt_dt;
}
public void setOhd_ord_updt_dt(String ohd_ord_updt_dt) {
	this.ohd_ord_updt_dt = ohd_ord_updt_dt;
}
public String getOhd_ord_updt_id() {
	return ohd_ord_updt_id;
}
public void setOhd_ord_updt_id(String ohd_ord_updt_id) {
	this.ohd_ord_updt_id = ohd_ord_updt_id;
}
public boolean isOhd_ord_sts() {
	return ohd_ord_sts;
}
public void setOhd_ord_sts(boolean ohd_ord_sts) {
	this.ohd_ord_sts = ohd_ord_sts;
}


public String getOhd_crnt_wrk() {
	return ohd_crnt_wrk;
}
public void setOhd_crnt_wrk(String ohd_crnt_wrk) {
	this.ohd_crnt_wrk = ohd_crnt_wrk;
}
public String getOhd_crnt_prcs() {
	return ohd_crnt_prcs;
}

public void setOhd_crnt_prcs(String ohd_crnt_prcs) {
	this.ohd_crnt_prcs = ohd_crnt_prcs;
}
public boolean isOhd_is_alw_job_ord() {
	return ohd_is_alw_job_ord;
}
public void setOhd_is_alw_job_ord(boolean ohd_is_alw_job_ord) {
	this.ohd_is_alw_job_ord = ohd_is_alw_job_ord;
}
public String getOhd_job_ord_prcs() {
	return ohd_job_ord_prcs;
}
public void setOhd_job_ord_prcs(String ohd_job_ord_prcs) {
	this.ohd_job_ord_prcs = ohd_job_ord_prcs;
}
@Override
public String toString() {
	return "Ord_Hdr_Dtl [ohd_id=" + ohd_id + ", ohd_cmy_cd=" + ohd_cmy_cd + ", ohd_ord_img=" + ohd_ord_img
			+ ", ohd_str_cd=" + ohd_str_cd + ", ohd_cst_cd=" + ohd_cst_cd + ", ohd_ord_typ=" + ohd_ord_typ
			+ ", ohd_ord_qty=" + ohd_ord_qty + ", ohd_ord_bch_no=" + ohd_ord_bch_no + ", ohd_ord_jn_no="
			+ ohd_ord_jn_no + ", ohd_ord_jn_dt=" + ohd_ord_jn_dt + ", ohd_ord_std_wt=" + ohd_ord_std_wt
			+ ", ohd_ord_carat=" + ohd_ord_carat + ", ohd_ord_rmk=" + ohd_ord_rmk + ", ohd_ord_no=" + ohd_ord_no
			+ ", ohd_ord_dt=" + ohd_ord_dt + ", ohd_ord_trgt_dt=" + ohd_ord_trgt_dt + ", ohd_ord_pdt_cd="
			+ ohd_ord_pdt_cd + ", ohd_ord_crt_dt=" + ohd_ord_crt_dt + ", ohd_ord_crt_id=" + ohd_ord_crt_id
			+ ", ohd_ord_updt_dt=" + ohd_ord_updt_dt + ", ohd_ord_updt_id=" + ohd_ord_updt_id + ", ohd_wax_sts="
			+ ohd_wax_sts + ", ohd_crnt_wrk=" + ohd_crnt_wrk + ", ohd_crnt_wrk_typ=" + ohd_crnt_wrk_typ
			+ ", ohd_crnt_prcs=" + ohd_crnt_prcs + ", ohd_is_alw_job_ord=" + ohd_is_alw_job_ord
			+ ", ohd_alw_inhse_bm_mk=" + ohd_alw_inhse_bm_mk + ", ohd_job_ord_prcs=" + ohd_job_ord_prcs
			+ ", ohd_iss_bom_mk_prcs=" + ohd_iss_bom_mk_prcs + ", ohd_ord_sts=" + ohd_ord_sts + ", ohd_iss_ruse="
			+ ohd_iss_ruse + ", ohd_iss_auth=" + ohd_iss_auth + "]";
}
public String getOhd_wax_sts() {
	return ohd_wax_sts;
}
public void setOhd_wax_sts(String ohd_wax_sts) {
	this.ohd_wax_sts = ohd_wax_sts;
}
public boolean isOhd_iss_auth() {
	return ohd_iss_auth;
}
public void setOhd_iss_auth(boolean ohd_iss_auth) {
	this.ohd_iss_auth = ohd_iss_auth;
}
public String getOhd_ord_img() {
	return ohd_ord_img;
}
public void setOhd_ord_img(String ohd_ord_img) {
	this.ohd_ord_img = ohd_ord_img;
}
public String getOhd_iss_bom_mk_prcs() {
	return ohd_iss_bom_mk_prcs;
}
public void setOhd_iss_bom_mk_prcs(String ohd_iss_bom_mk_prcs) {
	this.ohd_iss_bom_mk_prcs = ohd_iss_bom_mk_prcs;
}
public boolean isOhd_alw_inhse_bm_mk() {
	return ohd_alw_inhse_bm_mk;
}
public void setOhd_alw_inhse_bm_mk(boolean ohd_alw_inhse_bm_mk) {
	this.ohd_alw_inhse_bm_mk = ohd_alw_inhse_bm_mk;
}
public String getOhd_iss_ruse() {
	return ohd_iss_ruse;
}
public void setOhd_iss_ruse(String ohd_iss_ruse) {
	this.ohd_iss_ruse = ohd_iss_ruse;
}
public String getOhd_crnt_wrk_typ() {
	return ohd_crnt_wrk_typ;
}
public void setOhd_crnt_wrk_typ(String ohd_crnt_wrk_typ) {
	this.ohd_crnt_wrk_typ = ohd_crnt_wrk_typ;
}

}
