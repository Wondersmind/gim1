package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="cst_prcs_hdr")
public class Cst_Prcs_Hdr implements Serializable{
private Long cph_id;
private String cph_cst_no;
private String cph_cst_dt;
private String cph_tot_iss_wgt;
private String cph_tot_pdt_wgt;
private String cph_tot_run_wgt;
private String cph_tot_bal_wgt;
private String cph_crt_dt;
private String cph_crt_id;
private String cph_updt_dt;
private String cph_updt_id;
private boolean cph_iss_auth;
private boolean cph_rcvd_auth;
private boolean cph_cst_sts;
private boolean cph_iss_job_card;
private String cph_prty_all_rcvd;
private String cph_iss_dmgd;
private String cph_iss_cncld;
private String cph_cmy_cd;
private String cph_dpt_cd;
private String cph_wrk_cd;
@Id
@GeneratedValue
public Long getCph_id() {
	return cph_id;
}
public void setCph_id(Long cph_id) {
	this.cph_id = cph_id;
}
@Index(name="cst_no_index")
public String getCph_cst_no() {
	return cph_cst_no;
}
public void setCph_cst_no(String cph_cst_no) {
	this.cph_cst_no = cph_cst_no;
}
public String getCph_tot_iss_wgt() {
	return cph_tot_iss_wgt;
}
public void setCph_tot_iss_wgt(String cph_tot_iss_wgt) {
	this.cph_tot_iss_wgt = cph_tot_iss_wgt;
}
public String getCph_tot_pdt_wgt() {
	return cph_tot_pdt_wgt;
}
public void setCph_tot_pdt_wgt(String cph_tot_pdt_wgt) {
	this.cph_tot_pdt_wgt = cph_tot_pdt_wgt;
}
public String getCph_tot_run_wgt() {
	return cph_tot_run_wgt;
}
public void setCph_tot_run_wgt(String cph_tot_run_wgt) {
	this.cph_tot_run_wgt = cph_tot_run_wgt;
}
public String getCph_tot_bal_wgt() {
	return cph_tot_bal_wgt;
}
public void setCph_tot_bal_wgt(String cph_tot_bal_wgt) {
	this.cph_tot_bal_wgt = cph_tot_bal_wgt;
}
public String getCph_crt_dt() {
	return cph_crt_dt;
}
public void setCph_crt_dt(String cph_crt_dt) {
	this.cph_crt_dt = cph_crt_dt;
}
public String getCph_crt_id() {
	return cph_crt_id;
}
public void setCph_crt_id(String cph_crt_id) {
	this.cph_crt_id = cph_crt_id;
}
public String getCph_updt_dt() {
	return cph_updt_dt;
}
public void setCph_updt_dt(String cph_updt_dt) {
	this.cph_updt_dt = cph_updt_dt;
}
public String getCph_updt_id() {
	return cph_updt_id;
}
public void setCph_updt_id(String cph_updt_id) {
	this.cph_updt_id = cph_updt_id;
}
public boolean isCph_iss_auth() {
	return cph_iss_auth;
}
public void setCph_iss_auth(boolean cph_iss_auth) {
	this.cph_iss_auth = cph_iss_auth;
}
public boolean isCph_cst_sts() {
	return cph_cst_sts;
}
public void setCph_cst_sts(boolean cph_cst_sts) {
	this.cph_cst_sts = cph_cst_sts;
}
@Override
public String toString() {
	return "Cst_Prcs_Hdr [cph_id=" + cph_id + ", cph_cst_no=" + cph_cst_no + ", cph_cst_dt=" + cph_cst_dt
			+ ", cph_tot_iss_wgt=" + cph_tot_iss_wgt + ", cph_tot_pdt_wgt=" + cph_tot_pdt_wgt + ", cph_tot_run_wgt="
			+ cph_tot_run_wgt + ", cph_tot_bal_wgt=" + cph_tot_bal_wgt + ", cph_crt_dt=" + cph_crt_dt + ", cph_crt_id="
			+ cph_crt_id + ", cph_updt_dt=" + cph_updt_dt + ", cph_updt_id=" + cph_updt_id + ", cph_iss_auth="
			+ cph_iss_auth + ", cph_rcvd_auth=" + cph_rcvd_auth + ", cph_cst_sts=" + cph_cst_sts
			+ ", cph_iss_job_card=" + cph_iss_job_card + ", cph_prty_all_rcvd=" + cph_prty_all_rcvd + ", cph_iss_dmgd="
			+ cph_iss_dmgd + ", cph_iss_cncld=" + cph_iss_cncld + ", cph_cmy_cd=" + cph_cmy_cd + ", cph_dpt_cd="
			+ cph_dpt_cd + ", cph_wrk_cd=" + cph_wrk_cd + "]";
}
public boolean isCph_rcvd_auth() {
	return cph_rcvd_auth;
}
public void setCph_rcvd_auth(boolean cph_rcvd_auth) {
	this.cph_rcvd_auth = cph_rcvd_auth;
}
public boolean isCph_iss_job_card() {
	return cph_iss_job_card;
}
public void setCph_iss_job_card(boolean cph_iss_job_card) {
	this.cph_iss_job_card = cph_iss_job_card;
}
public String getCph_prty_all_rcvd() {
	return cph_prty_all_rcvd;
}
public String getCph_cmy_cd() {
	return cph_cmy_cd;
}
public void setCph_cmy_cd(String cph_cmy_cd) {
	this.cph_cmy_cd = cph_cmy_cd;
}
@Index(name="dptcd")
public String getCph_dpt_cd() {
	return cph_dpt_cd;
}
public void setCph_dpt_cd(String cph_dpt_cd) {
	this.cph_dpt_cd = cph_dpt_cd;
}
@Index(name="wrkcd")
public String getCph_wrk_cd() {
	return cph_wrk_cd;
}
public void setCph_wrk_cd(String cph_wrk_cd) {
	this.cph_wrk_cd = cph_wrk_cd;
}
public void setCph_prty_all_rcvd(String cph_prty_all_rcvd) {
	this.cph_prty_all_rcvd = cph_prty_all_rcvd;
}
public String getCph_iss_dmgd() {
	return cph_iss_dmgd;
}
public void setCph_iss_dmgd(String cph_iss_dmgd) {
	this.cph_iss_dmgd = cph_iss_dmgd;
}
public String getCph_iss_cncld() {
	return cph_iss_cncld;
}
public void setCph_iss_cncld(String cph_iss_cncld) {
	this.cph_iss_cncld = cph_iss_cncld;
}
public String getCph_cst_dt() {
	return cph_cst_dt;
}
public void setCph_cst_dt(String cph_cst_dt) {
	this.cph_cst_dt = cph_cst_dt;
}


}
