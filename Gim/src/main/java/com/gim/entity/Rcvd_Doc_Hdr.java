package com.gim.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="rcvd_doc_hdr")
public class Rcvd_Doc_Hdr {
private Long rdh_id;
private String rdh_isd_doc_no;
private String rdh_dpt_cd;
private String rdh_cmy_cd;
private String rdh_str_cd;
private String rdh_crt_id;
private String rdh_crt_dt;
private String rdh_upt_id;
private String rdh_updt_dt;
private String rdh_rcvd_doc_cnt;
private String rdh_iss_wgt;
private String rdh_rcvd_wgt;
private String rdh_bal_wgt;
private String rdh_trf_typ;

@Id
@GeneratedValue
public Long getRdh_id() {
	return rdh_id;
}


public void setRdh_id(Long rdh_id) {
	this.rdh_id = rdh_id;
}

@Index(name="isd_doc_no")
public String getRdh_isd_doc_no() {
	return rdh_isd_doc_no;
}


public void setRdh_isd_doc_no(String rdh_isd_doc_no) {
	this.rdh_isd_doc_no = rdh_isd_doc_no;
}

@Index(name="dpt_cd")
public String getRdh_dpt_cd() {
	return rdh_dpt_cd;
}


public void setRdh_dpt_cd(String rdh_dpt_cd) {
	this.rdh_dpt_cd = rdh_dpt_cd;
}


public String getRdh_cmy_cd() {
	return rdh_cmy_cd;
}


public void setRdh_cmy_cd(String rdh_cmy_cd) {
	this.rdh_cmy_cd = rdh_cmy_cd;
}


public String getRdh_str_cd() {
	return rdh_str_cd;
}


public void setRdh_str_cd(String rdh_str_cd) {
	this.rdh_str_cd = rdh_str_cd;
}


public String getRdh_crt_id() {
	return rdh_crt_id;
}


public String getRdh_upt_id() {
	return rdh_upt_id;
}


public void setRdh_upt_id(String rdh_upt_id) {
	this.rdh_upt_id = rdh_upt_id;
}


public String getRdh_updt_dt() {
	return rdh_updt_dt;
}


public void setRdh_updt_dt(String rdh_updt_dt) {
	this.rdh_updt_dt = rdh_updt_dt;
}


public void setRdh_crt_id(String rdh_crt_id) {
	this.rdh_crt_id = rdh_crt_id;
}


public String getRdh_crt_dt() {
	return rdh_crt_dt;
}


public void setRdh_crt_dt(String rdh_crt_dt) {
	this.rdh_crt_dt = rdh_crt_dt;
}


public String getRdh_rcvd_doc_cnt() {
	return rdh_rcvd_doc_cnt;
}


public void setRdh_rcvd_doc_cnt(String rdh_rcvd_doc_cnt) {
	this.rdh_rcvd_doc_cnt = rdh_rcvd_doc_cnt;
}


public String getRdh_trf_typ() {
	return rdh_trf_typ;
}


public void setRdh_trf_typ(String rdh_trf_typ) {
	this.rdh_trf_typ = rdh_trf_typ;
}


public String getRdh_iss_wgt() {
	return rdh_iss_wgt;
}


public void setRdh_iss_wgt(String rdh_iss_wgt) {
	this.rdh_iss_wgt = rdh_iss_wgt;
}


public String getRdh_rcvd_wgt() {
	return rdh_rcvd_wgt;
}


public void setRdh_rcvd_wgt(String rdh_rcvd_wgt) {
	this.rdh_rcvd_wgt = rdh_rcvd_wgt;
}


public String getRdh_bal_wgt() {
	return rdh_bal_wgt;
}


public void setRdh_bal_wgt(String rdh_bal_wgt) {
	this.rdh_bal_wgt = rdh_bal_wgt;
}


@Override
public String toString() {
	return "Rcvd_Doc_Hdr [rdh_id=" + rdh_id + ", rdh_isd_doc_no=" + rdh_isd_doc_no + ", rdh_dpt_cd=" + rdh_dpt_cd
			+ ", rdh_cmy_cd=" + rdh_cmy_cd + ", rdh_str_cd=" + rdh_str_cd + ", rdh_crt_id=" + rdh_crt_id
			+ ", rdh_crt_dt=" + rdh_crt_dt + ", rdh_upt_id=" + rdh_upt_id + ", rdh_updt_dt=" + rdh_updt_dt
			+ ", rdh_rcvd_doc_cnt=" + rdh_rcvd_doc_cnt + ", rdh_iss_wgt=" + rdh_iss_wgt + ", rdh_rcvd_wgt="
			+ rdh_rcvd_wgt + ", rdh_bal_wgt=" + rdh_bal_wgt + ", rdh_trf_typ=" + rdh_trf_typ + "]";
}

}
