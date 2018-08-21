package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="ord_hdr")
public class Ord_Hdr implements Serializable{
private Long oh_id;
private String oh_ord_no;
private String oh_ord_dt;
private String oh_no_itm;
private String oh_cmy_cd;
private String oh_tot_qty;
private String oh_tot_std_wgt;
private String oh_ord_crt_id;
private String oh_ord_updt_id;
private String oh_ord_updt_dt;
private String oh_ord_crt_dt;
private boolean oh_is_alw_job_ord;
private String oh_job_ord_prcs;
private boolean oh_ord_sts;
private boolean oh_iss_auth;
@Id
@GeneratedValue
public Long getOh_id() {
	return oh_id;
}

public void setOh_id(Long oh_id) {
	this.oh_id = oh_id;
}
@Index(name="ord_no_index")
public String getOh_ord_no() {
	return oh_ord_no;
}

public void setOh_ord_no(String oh_ord_no) {
	this.oh_ord_no = oh_ord_no;
}

public String getOh_no_itm() {
	return oh_no_itm;
}

public void setOh_no_itm(String oh_no_itm) {
	this.oh_no_itm = oh_no_itm;
}

public String getOh_tot_qty() {
	return oh_tot_qty;
}

public void setOh_tot_qty(String oh_tot_qty) {
	this.oh_tot_qty = oh_tot_qty;
}

public String getOh_ord_crt_id() {
	return oh_ord_crt_id;
}

public void setOh_ord_crt_id(String oh_ord_crt_id) {
	this.oh_ord_crt_id = oh_ord_crt_id;
}

public String getOh_ord_updt_id() {
	return oh_ord_updt_id;
}

public void setOh_ord_updt_id(String oh_ord_updt_id) {
	this.oh_ord_updt_id = oh_ord_updt_id;
}

public String getOh_ord_updt_dt() {
	return oh_ord_updt_dt;
}

public void setOh_ord_updt_dt(String oh_ord_updt_dt) {
	this.oh_ord_updt_dt = oh_ord_updt_dt;
}

public String getOh_ord_crt_dt() {
	return oh_ord_crt_dt;
}

public boolean isOh_is_alw_job_ord() {
	return oh_is_alw_job_ord;
}

public void setOh_is_alw_job_ord(boolean oh_is_alw_job_ord) {
	this.oh_is_alw_job_ord = oh_is_alw_job_ord;
}

public String getOh_job_ord_prcs() {
	return oh_job_ord_prcs;
}

public void setOh_job_ord_prcs(String oh_job_ord_prcs) {
	this.oh_job_ord_prcs = oh_job_ord_prcs;
}

public void setOh_ord_crt_dt(String oh_ord_crt_dt) {
	this.oh_ord_crt_dt = oh_ord_crt_dt;
}

public boolean isOh_ord_sts() {
	return oh_ord_sts;
}

public void setOh_ord_sts(boolean oh_ord_sts) {
	this.oh_ord_sts = oh_ord_sts;
}

@Override
public String toString() {
	return "Ord_Hdr [oh_id=" + oh_id + ", oh_ord_no=" + oh_ord_no + ", oh_ord_dt=" + oh_ord_dt + ", oh_no_itm="
			+ oh_no_itm + ", oh_cmy_cd=" + oh_cmy_cd + ", oh_tot_qty=" + oh_tot_qty + ", oh_tot_std_wgt="
			+ oh_tot_std_wgt + ", oh_ord_crt_id=" + oh_ord_crt_id + ", oh_ord_updt_id=" + oh_ord_updt_id
			+ ", oh_ord_updt_dt=" + oh_ord_updt_dt + ", oh_ord_crt_dt=" + oh_ord_crt_dt + ", oh_is_alw_job_ord="
			+ oh_is_alw_job_ord + ", oh_job_ord_prcs=" + oh_job_ord_prcs + ", oh_ord_sts=" + oh_ord_sts
			+ ", oh_iss_auth=" + oh_iss_auth + "]";
}

public String getOh_tot_std_wgt() {
	return oh_tot_std_wgt;
}

public void setOh_tot_std_wgt(String oh_tot_std_wgt) {
	this.oh_tot_std_wgt = oh_tot_std_wgt;
}

public boolean isOh_iss_auth() {
	return oh_iss_auth;
}

public void setOh_iss_auth(boolean oh_iss_auth) {
	this.oh_iss_auth = oh_iss_auth;
}

public String getOh_cmy_cd() {
	return oh_cmy_cd;
}

public void setOh_cmy_cd(String oh_cmy_cd) {
	this.oh_cmy_cd = oh_cmy_cd;
}

public String getOh_ord_dt() {
	return oh_ord_dt;
}

public void setOh_ord_dt(String oh_ord_dt) {
	this.oh_ord_dt = oh_ord_dt;
}

}
