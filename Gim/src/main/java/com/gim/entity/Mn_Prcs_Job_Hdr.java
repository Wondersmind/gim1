package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="mn_prcs_job_hdr")
public class Mn_Prcs_Job_Hdr implements Serializable{
private Long mpjh_id;
private String mpjh_job_crd_no;
private Double mpjh_isd_wgt;
private Double mpjh_rcvd_wgt;
private String mphd_sub_prcs_cd;
private String mpjh_cmy_cd;
private String mpjh_dpt_cd;
private String mpjh_wrk_cd;
private String mpjh_mnprcs_doc_no;
@Id
@GeneratedValue
public Long getMpjh_id() {
	return mpjh_id;
}
public void setMpjh_id(Long mpjh_id) {
	this.mpjh_id = mpjh_id;
}
@Index(name="jb_cd_no")
public String getMpjh_job_crd_no() {
	return mpjh_job_crd_no;
}
public void setMpjh_job_crd_no(String mpjh_job_crd_no) {
	this.mpjh_job_crd_no = mpjh_job_crd_no;
}
public String getMpjh_cmy_cd() {
	return mpjh_cmy_cd;
}
public void setMpjh_cmy_cd(String mpjh_cmy_cd) {
	this.mpjh_cmy_cd = mpjh_cmy_cd;
}
public String getMpjh_dpt_cd() {
	return mpjh_dpt_cd;
}
public void setMpjh_dpt_cd(String mpjh_dpt_cd) {
	this.mpjh_dpt_cd = mpjh_dpt_cd;
}
@Index(name="wrk_cd")
public String getMpjh_wrk_cd() {
	return mpjh_wrk_cd;
}
public void setMpjh_wrk_cd(String mpjh_wrk_cd) {
	this.mpjh_wrk_cd = mpjh_wrk_cd;
}
public String getMpjh_mnprcs_doc_no() {
	return mpjh_mnprcs_doc_no;
}
public void setMpjh_mnprcs_doc_no(String mpjh_mnprcs_doc_no) {
	this.mpjh_mnprcs_doc_no = mpjh_mnprcs_doc_no;
}
@Override
public String toString() {
	return "Mn_Prcs_Job_Hdr [mpjh_id=" + mpjh_id + ", mpjh_job_crd_no=" + mpjh_job_crd_no + ", mpjh_isd_wgt="
			+ mpjh_isd_wgt + ", mpjh_rcvd_wgt=" + mpjh_rcvd_wgt + ", mphd_sub_prcs_cd=" + mphd_sub_prcs_cd
			+ ", mpjh_cmy_cd=" + mpjh_cmy_cd + ", mpjh_dpt_cd=" + mpjh_dpt_cd + ", mpjh_wrk_cd=" + mpjh_wrk_cd
			+ ", mpjh_mnprcs_doc_no=" + mpjh_mnprcs_doc_no + "]";
}
public Double getMpjh_isd_wgt() {
	return mpjh_isd_wgt;
}
public void setMpjh_isd_wgt(Double mpjh_isd_wgt) {
	this.mpjh_isd_wgt = mpjh_isd_wgt;
}
public Double getMpjh_rcvd_wgt() {
	return mpjh_rcvd_wgt;
}
public void setMpjh_rcvd_wgt(Double mpjh_rcvd_wgt) {
	this.mpjh_rcvd_wgt = mpjh_rcvd_wgt;
}
public String getMphd_sub_prcs_cd() {
	return mphd_sub_prcs_cd;
}
public void setMphd_sub_prcs_cd(String mphd_sub_prcs_cd) {
	this.mphd_sub_prcs_cd = mphd_sub_prcs_cd;
}

}
