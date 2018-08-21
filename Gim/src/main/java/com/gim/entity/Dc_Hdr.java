package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="dc_hdr")
public class Dc_Hdr implements Serializable{
private Long dh_id;
private String dh_cmy_cd;
private String dh_str_cd;
private String dh_dpt_cd;
private String dh_wrk_cd;
private String dh_wrk_typ;
private String dh_trf_typ;
private String dh_isd_doc_no;
private String dh_isd_doc_dt;
private String dh_rcvd_doc_no;
private Double dh_scrp_wgt;
private Double dh_fnsh_wgt;
private Double dh_rcvd_wgt;
private Double dh_isd_wgt;
private Double dh_bal_wgt;
private String dh_crt_dt;
private String dh_upd_dt;
private String dh_crt_id;
private boolean dh_iss_auth;
private boolean dh_rcvd_auth;
public boolean isDh_iss_auth() {
	return dh_iss_auth;
}
public void setDh_iss_auth(boolean dh_iss_auth) {
	this.dh_iss_auth = dh_iss_auth;
}
public boolean isDh_rcvd_auth() {
	return dh_rcvd_auth;
}
public void setDh_rcvd_auth(boolean dh_rcvd_auth) {
	this.dh_rcvd_auth = dh_rcvd_auth;
}
private boolean dh_sts;
@Override
public String toString() {
	return "Dc_Hdr [dh_id=" + dh_id + ", dh_cmy_cd=" + dh_cmy_cd + ", dh_str_cd=" + dh_str_cd + ", dh_dpt_cd="
			+ dh_dpt_cd + ", dh_wrk_cd=" + dh_wrk_cd + ", dh_wrk_typ=" + dh_wrk_typ + ", dh_trf_typ=" + dh_trf_typ
			+ ", dh_isd_doc_no=" + dh_isd_doc_no + ", dh_isd_doc_dt=" + dh_isd_doc_dt + ", dh_rcvd_doc_no="
			+ dh_rcvd_doc_no + ", dh_scrp_wgt=" + dh_scrp_wgt + ", dh_fnsh_wgt=" + dh_fnsh_wgt + ", dh_rcvd_wgt="
			+ dh_rcvd_wgt + ", dh_isd_wgt=" + dh_isd_wgt + ", dh_bal_wgt=" + dh_bal_wgt + ", dh_crt_dt=" + dh_crt_dt
			+ ", dh_upd_dt=" + dh_upd_dt + ", dh_crt_id=" + dh_crt_id + ", dh_iss_auth=" + dh_iss_auth
			+ ", dh_rcvd_auth=" + dh_rcvd_auth + ", dh_sts=" + dh_sts + "]";
}
@Id
@GeneratedValue
public Long getDh_id() {
	return dh_id;
}
public void setDh_id(Long dh_id) {
	this.dh_id = dh_id;
}
@Index(name="cmycd")
public String getDh_cmy_cd() {
	return dh_cmy_cd;
}
public void setDh_cmy_cd(String dh_cmy_cd) {
	this.dh_cmy_cd = dh_cmy_cd;
}
public String getDh_str_cd() {
	return dh_str_cd;
}
public void setDh_str_cd(String dh_str_cd) {
	this.dh_str_cd = dh_str_cd;
}
@Index(name="dpt")
public String getDh_dpt_cd() {
	return dh_dpt_cd;
}
public void setDh_dpt_cd(String dh_dpt_cd) {
	this.dh_dpt_cd = dh_dpt_cd;
}
@Index(name="wrk")
public String getDh_wrk_cd() {
	return dh_wrk_cd;
}
public void setDh_wrk_cd(String dh_wrk_cd) {
	this.dh_wrk_cd = dh_wrk_cd;
}
public String getDh_trf_typ() {
	return dh_trf_typ;
}
public void setDh_trf_typ(String dh_trf_typ) {
	this.dh_trf_typ = dh_trf_typ;
}
public String getDh_isd_doc_no() {
	return dh_isd_doc_no;
}
public void setDh_isd_doc_no(String dh_isd_doc_no) {
	this.dh_isd_doc_no = dh_isd_doc_no;
}
public String getDh_rcvd_doc_no() {
	return dh_rcvd_doc_no;
}
public void setDh_rcvd_doc_no(String dh_rcvd_doc_no) {
	this.dh_rcvd_doc_no = dh_rcvd_doc_no;
}
public Double getDh_rcvd_wgt() {
	return dh_rcvd_wgt;
}
public void setDh_rcvd_wgt(Double dh_rcvd_wgt) {
	this.dh_rcvd_wgt = dh_rcvd_wgt;
}
public Double getDh_isd_wgt() {
	return dh_isd_wgt;
}
public void setDh_isd_wgt(Double dh_isd_wgt) {
	this.dh_isd_wgt = dh_isd_wgt;
}
public Double getDh_bal_wgt() {
	return dh_bal_wgt;
}
public void setDh_bal_wgt(Double dh_bal_wgt) {
	this.dh_bal_wgt = dh_bal_wgt;
}
public String getDh_crt_dt() {
	return dh_crt_dt;
}
public void setDh_crt_dt(String dh_crt_dt) {
	this.dh_crt_dt = dh_crt_dt;
}
public String getDh_upd_dt() {
	return dh_upd_dt;
}
public void setDh_upd_dt(String dh_upd_dt) {
	this.dh_upd_dt = dh_upd_dt;
}
public String getDh_crt_id() {
	return dh_crt_id;
}
public void setDh_crt_id(String dh_crt_id) {
	this.dh_crt_id = dh_crt_id;
}
public boolean isDh_sts() {
	return dh_sts;
}
public void setDh_sts(boolean dh_sts) {
	this.dh_sts = dh_sts;
}
public String getDh_wrk_typ() {
	return dh_wrk_typ;
}
public void setDh_wrk_typ(String dh_wrk_typ) {
	this.dh_wrk_typ = dh_wrk_typ;
}
public Double getDh_scrp_wgt() {
	return dh_scrp_wgt;
}
public void setDh_scrp_wgt(Double dh_scrp_wgt) {
	this.dh_scrp_wgt = dh_scrp_wgt;
}
public Double getDh_fnsh_wgt() {
	return dh_fnsh_wgt;
}
public void setDh_fnsh_wgt(Double dh_fnsh_wgt) {
	this.dh_fnsh_wgt = dh_fnsh_wgt;
}
public String getDh_isd_doc_dt() {
	return dh_isd_doc_dt;
}
public void setDh_isd_doc_dt(String dh_isd_doc_dt) {
	this.dh_isd_doc_dt = dh_isd_doc_dt;
}

}
