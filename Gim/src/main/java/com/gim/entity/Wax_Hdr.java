package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="wax_hdr")
public class Wax_Hdr implements Serializable{
private Long wh_id;
private String wh_doc_no;
private String wh_doc_dt;
private String wh_no_of_odr;
private String wh_tot_qty;
private String wh_cmy_cd;
private String wh_tot_std_wgt;
private String wh_no_of_pdt;
private String wh_crt_dt;
private String wh_crt_id;
private String wh_updt_dt;
private String wh_wrkr_cd;
private String wh_updt_id;
private boolean wh_iss_auth;
private boolean wh_wax_sts;
private boolean wh_iss_job_cd;
@Id
@GeneratedValue
public Long getWh_id() {
	return wh_id;
}
public void setWh_id(Long wh_id) {
	this.wh_id = wh_id;
}
@Index(name="dco_no_index")
public String getWh_doc_no() {
	return wh_doc_no;
}
public void setWh_doc_no(String wh_doc_no) {
	this.wh_doc_no = wh_doc_no;
}
public String getWh_no_of_odr() {
	return wh_no_of_odr;
}
public void setWh_no_of_odr(String wh_no_of_odr) {
	this.wh_no_of_odr = wh_no_of_odr;
}
public String getWh_tot_qty() {
	return wh_tot_qty;
}
public void setWh_tot_qty(String wh_tot_qty) {
	this.wh_tot_qty = wh_tot_qty;
}
public String getWh_tot_std_wgt() {
	return wh_tot_std_wgt;
}
public void setWh_tot_std_wgt(String wh_tot_std_wgt) {
	this.wh_tot_std_wgt = wh_tot_std_wgt;
}
public String getWh_no_of_pdt() {
	return wh_no_of_pdt;
}
public void setWh_no_of_pdt(String wh_no_of_pdt) {
	this.wh_no_of_pdt = wh_no_of_pdt;
}
public String getWh_crt_dt() {
	return wh_crt_dt;
}
public void setWh_crt_dt(String wh_crt_dt) {
	this.wh_crt_dt = wh_crt_dt;
}
public String getWh_crt_id() {
	return wh_crt_id;
}
public void setWh_crt_id(String wh_crt_id) {
	this.wh_crt_id = wh_crt_id;
}
public String getWh_updt_dt() {
	return wh_updt_dt;
}
public void setWh_updt_dt(String wh_updt_dt) {
	this.wh_updt_dt = wh_updt_dt;
}
public String getWh_updt_id() {
	return wh_updt_id;
}
public void setWh_updt_id(String wh_updt_id) {
	this.wh_updt_id = wh_updt_id;
}
public boolean isWh_wax_sts() {
	return wh_wax_sts;
}
public void setWh_wax_sts(boolean wh_wax_sts) {
	this.wh_wax_sts = wh_wax_sts;
}
@Override
public String toString() {
	return "Wax_Hdr [wh_id=" + wh_id + ", wh_doc_no=" + wh_doc_no + ", wh_doc_dt=" + wh_doc_dt + ", wh_no_of_odr="
			+ wh_no_of_odr + ", wh_tot_qty=" + wh_tot_qty + ", wh_cmy_cd=" + wh_cmy_cd + ", wh_tot_std_wgt="
			+ wh_tot_std_wgt + ", wh_no_of_pdt=" + wh_no_of_pdt + ", wh_crt_dt=" + wh_crt_dt + ", wh_crt_id="
			+ wh_crt_id + ", wh_updt_dt=" + wh_updt_dt + ", wh_wrkr_cd=" + wh_wrkr_cd + ", wh_updt_id=" + wh_updt_id
			+ ", wh_iss_auth=" + wh_iss_auth + ", wh_wax_sts=" + wh_wax_sts + ", wh_iss_job_cd=" + wh_iss_job_cd + "]";
}
public boolean isWh_iss_auth() {
	return wh_iss_auth;
}
public void setWh_iss_auth(boolean wh_iss_auth) {
	this.wh_iss_auth = wh_iss_auth;
}
@Index(name="wrk_cd")
public String getWh_wrkr_cd() {
	return wh_wrkr_cd;
}
public void setWh_wrkr_cd(String wh_wrkr_cd) {
	this.wh_wrkr_cd = wh_wrkr_cd;
}
public boolean isWh_iss_job_cd() {
	return wh_iss_job_cd;
}
public void setWh_iss_job_cd(boolean wh_iss_job_cd) {
	this.wh_iss_job_cd = wh_iss_job_cd;
}
public String getWh_cmy_cd() {
	return wh_cmy_cd;
}
public void setWh_cmy_cd(String wh_cmy_cd) {
	this.wh_cmy_cd = wh_cmy_cd;
}
public String getWh_doc_dt() {
	return wh_doc_dt;
}
public void setWh_doc_dt(String wh_doc_dt) {
	this.wh_doc_dt = wh_doc_dt;
}


}
