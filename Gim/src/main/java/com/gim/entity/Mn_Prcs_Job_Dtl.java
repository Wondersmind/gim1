package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="mn_prcs_job_dtl")
public class Mn_Prcs_Job_Dtl implements Serializable{
private Long mpjd_id;
private String mpjd_job_crd_no;
private Double mpjh_isd_wgt;
private String mpjd_dc_isd;
private String mpjd_dc_rcvd;
private String mphd_trn_typ;
private String mphd_sub_prcs_cd;
private String mpjd_cmy_cd;
private String mpjd_dpt_cd;
private String mpjd_wrk_cd;
private String mpjd_mnprcs_doc_no;
private String mpjd_crt_dt;
@Id
@GeneratedValue
public Long getMpjd_id() {
	return mpjd_id;
}
public void setMpjd_id(Long mpjd_id) {
	this.mpjd_id = mpjd_id;
}
@Index(name="jbcd_no")
public String getMpjd_job_crd_no() {
	return mpjd_job_crd_no;
}

public String getMpjd_cmy_cd() {
	return mpjd_cmy_cd;
}
public void setMpjd_cmy_cd(String mpjd_cmy_cd) {
	this.mpjd_cmy_cd = mpjd_cmy_cd;
}
public String getMpjd_dpt_cd() {
	return mpjd_dpt_cd;
}
public void setMpjd_dpt_cd(String mpjd_dpt_cd) {
	this.mpjd_dpt_cd = mpjd_dpt_cd;
}
@Index(name="wrk_cd")
public String getMpjd_wrk_cd() {
	return mpjd_wrk_cd;
}
public void setMpjd_wrk_cd(String mpjd_wrk_cd) {
	this.mpjd_wrk_cd = mpjd_wrk_cd;
}
public String getMpjd_mnprcs_doc_no() {
	return mpjd_mnprcs_doc_no;
}
public void setMpjd_mnprcs_doc_no(String mpjd_mnprcs_doc_no) {
	this.mpjd_mnprcs_doc_no = mpjd_mnprcs_doc_no;
}
@Override
public String toString() {
	return "Mn_Prcs_Job_Dtl [mpjd_id=" + mpjd_id + ", mpjd_job_crd_no=" + mpjd_job_crd_no + ", mpjh_isd_wgt="
			+ mpjh_isd_wgt + ", mpjd_dc_isd=" + mpjd_dc_isd + ", mpjd_dc_rcvd=" + mpjd_dc_rcvd + ", mphd_trn_typ="
			+ mphd_trn_typ + ", mphd_sub_prcs_cd=" + mphd_sub_prcs_cd + ", mpjd_cmy_cd=" + mpjd_cmy_cd
			+ ", mpjd_dpt_cd=" + mpjd_dpt_cd + ", mpjd_wrk_cd=" + mpjd_wrk_cd + ", mpjd_mnprcs_doc_no="
			+ mpjd_mnprcs_doc_no + ", mpjd_crt_dt=" + mpjd_crt_dt + "]";
}
public Double getMpjh_isd_wgt() {
	return mpjh_isd_wgt;
}
public void setMpjh_isd_wgt(Double mpjh_isd_wgt) {
	this.mpjh_isd_wgt = mpjh_isd_wgt;
}

public String getMphd_sub_prcs_cd() {
	return mphd_sub_prcs_cd;
}
public void setMphd_sub_prcs_cd(String mphd_sub_prcs_cd) {
	this.mphd_sub_prcs_cd = mphd_sub_prcs_cd;
}
public String getMpjd_crt_dt() {
	return mpjd_crt_dt;
}
public void setMpjd_crt_dt(String mpjd_crt_dt) {
	this.mpjd_crt_dt = mpjd_crt_dt;
}

public void setMpjd_job_crd_no(String mpjd_job_crd_no) {
	this.mpjd_job_crd_no = mpjd_job_crd_no;
}
public String getMpjd_dc_isd() {
	return mpjd_dc_isd;
}
public void setMpjd_dc_isd(String mpjd_dc_isd) {
	this.mpjd_dc_isd = mpjd_dc_isd;
}
public String getMpjd_dc_rcvd() {
	return mpjd_dc_rcvd;
}
public void setMpjd_dc_rcvd(String mpjd_dc_rcvd) {
	this.mpjd_dc_rcvd = mpjd_dc_rcvd;
}
public String getMphd_trn_typ() {
	return mphd_trn_typ;
}
public void setMphd_trn_typ(String mphd_trn_typ) {
	this.mphd_trn_typ = mphd_trn_typ;
}

}
