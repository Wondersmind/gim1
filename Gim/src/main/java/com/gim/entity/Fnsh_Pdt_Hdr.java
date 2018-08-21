package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="fnsh_pdt_hdr")
public class Fnsh_Pdt_Hdr implements Serializable{
private Long fph_id;
private String fph_doc_no;
private String fph_doc_dt;
private String fph_cmy_cd;
private String fph_str_cd;
private String fph_dpt_cd;
private String fph_wrk_typ;
private String fph_wrk_cd;
private Long fph_tot_rjct;
private Long fph_tot_acpt;
private Double fph_tot_qty;
private String fph_trn_typ;
private String fph_frm_btch;
private String fph_dc_isd;
private String fph_to_btch;
private String fph_to_prcs_mvd;
private String fph_to_ord_primid;
private String fph_from_ord_primid;
private Double fph_tot_wgt;
private String fph_crt_dt;
private String fph_updt_dt;
private String fph_crt_id;
private boolean fph_sts;
private boolean fph_iss_auth;
private boolean fph_rcvd_auth;
@Override
public String toString() {
	return "Fnsh_Pdt_Hdr [fph_id=" + fph_id + ", fph_doc_no=" + fph_doc_no + ", fph_cmy_cd=" + fph_cmy_cd
			+ ", fph_str_cd=" + fph_str_cd + ", fph_dpt_cd=" + fph_dpt_cd + ", fph_wrk_typ=" + fph_wrk_typ
			+ ", fph_wrk_cd=" + fph_wrk_cd + ", fph_tot_rjct=" + fph_tot_rjct + ", fph_tot_acpt=" + fph_tot_acpt
			+ ", fph_tot_qty=" + fph_tot_qty + ", fph_trn_typ=" + fph_trn_typ + ", fph_frm_btch=" + fph_frm_btch
			+ ", fph_dc_isd=" + fph_dc_isd + ", fph_to_btch=" + fph_to_btch + ", fph_to_prcs_mvd=" + fph_to_prcs_mvd
			+ ", fph_to_ord_primid=" + fph_to_ord_primid + ", fph_from_ord_primid=" + fph_from_ord_primid
			+ ", fph_tot_wgt=" + fph_tot_wgt + ", fph_crt_dt=" + fph_crt_dt + ", fph_updt_dt=" + fph_updt_dt
			+ ", fph_crt_id=" + fph_crt_id + ", fph_sts=" + fph_sts + ", fph_iss_auth=" + fph_iss_auth
			+ ", fph_rcvd_auth=" + fph_rcvd_auth + "]";
}

@Id
@GeneratedValue
public Long getFph_id() {
	return fph_id;
}
public void setFph_id(Long fph_id) {
	this.fph_id = fph_id;
}
public String getFph_doc_no() {
	return fph_doc_no;
}
public void setFph_doc_no(String fph_doc_no) {
	this.fph_doc_no = fph_doc_no;
}
public String getFph_cmy_cd() {
	return fph_cmy_cd;
}
public void setFph_cmy_cd(String fph_cmy_cd) {
	this.fph_cmy_cd = fph_cmy_cd;
}
public String getFph_str_cd() {
	return fph_str_cd;
}
public void setFph_str_cd(String fph_str_cd) {
	this.fph_str_cd = fph_str_cd;
}
@Index(name="dpt")
public String getFph_dpt_cd() {
	return fph_dpt_cd;
}
public void setFph_dpt_cd(String fph_dpt_cd) {
	this.fph_dpt_cd = fph_dpt_cd;
}
@Index(name="wrk")
public String getFph_wrk_cd() {
	return fph_wrk_cd;
}
public void setFph_wrk_cd(String fph_wrk_cd) {
	this.fph_wrk_cd = fph_wrk_cd;
}
public Double getFph_tot_qty() {
	return fph_tot_qty;
}
public void setFph_tot_qty(Double fph_tot_qty) {
	this.fph_tot_qty = fph_tot_qty;
}
public Double getFph_tot_wgt() {
	return fph_tot_wgt;
}
public void setFph_tot_wgt(Double fph_tot_wgt) {
	this.fph_tot_wgt = fph_tot_wgt;
}
public String getFph_crt_dt() {
	return fph_crt_dt;
}
public void setFph_crt_dt(String fph_crt_dt) {
	this.fph_crt_dt = fph_crt_dt;
}
public String getFph_updt_dt() {
	return fph_updt_dt;
}
public void setFph_updt_dt(String fph_updt_dt) {
	this.fph_updt_dt = fph_updt_dt;
}
public String getFph_crt_id() {
	return fph_crt_id;
}
public void setFph_crt_id(String fph_crt_id) {
	this.fph_crt_id = fph_crt_id;
}
public boolean isFph_sts() {
	return fph_sts;
}
public void setFph_sts(boolean fph_sts) {
	this.fph_sts = fph_sts;
}
public boolean isFph_iss_auth() {
	return fph_iss_auth;
}
public void setFph_iss_auth(boolean fph_iss_auth) {
	this.fph_iss_auth = fph_iss_auth;
}
public boolean isFph_rcvd_auth() {
	return fph_rcvd_auth;
}
public void setFph_rcvd_auth(boolean fph_rcvd_auth) {
	this.fph_rcvd_auth = fph_rcvd_auth;
}

public Long getFph_tot_rjct() {
	return fph_tot_rjct;
}

public void setFph_tot_rjct(Long fph_tot_rjct) {
	this.fph_tot_rjct = fph_tot_rjct;
}

public Long getFph_tot_acpt() {
	return fph_tot_acpt;
}

public void setFph_tot_acpt(Long fph_tot_acpt) {
	this.fph_tot_acpt = fph_tot_acpt;
}

public String getFph_wrk_typ() {
	return fph_wrk_typ;
}

public void setFph_wrk_typ(String fph_wrk_typ) {
	this.fph_wrk_typ = fph_wrk_typ;
}

public String getFph_trn_typ() {
	return fph_trn_typ;
}

public void setFph_trn_typ(String fph_trn_typ) {
	this.fph_trn_typ = fph_trn_typ;
}

public String getFph_frm_btch() {
	return fph_frm_btch;
}

public void setFph_frm_btch(String fph_frm_btch) {
	this.fph_frm_btch = fph_frm_btch;
}

public String getFph_to_btch() {
	return fph_to_btch;
}

public void setFph_to_btch(String fph_to_btch) {
	this.fph_to_btch = fph_to_btch;
}

public String getFph_to_prcs_mvd() {
	return fph_to_prcs_mvd;
}

public void setFph_to_prcs_mvd(String fph_to_prcs_mvd) {
	this.fph_to_prcs_mvd = fph_to_prcs_mvd;
}

public String getFph_to_ord_primid() {
	return fph_to_ord_primid;
}

public void setFph_to_ord_primid(String fph_to_ord_primid) {
	this.fph_to_ord_primid = fph_to_ord_primid;
}

public String getFph_from_ord_primid() {
	return fph_from_ord_primid;
}

public void setFph_from_ord_primid(String fph_from_ord_primid) {
	this.fph_from_ord_primid = fph_from_ord_primid;
}

public String getFph_dc_isd() {
	return fph_dc_isd;
}

public void setFph_dc_isd(String fph_dc_isd) {
	this.fph_dc_isd = fph_dc_isd;
}

public String getFph_doc_dt() {
	return fph_doc_dt;
}

public void setFph_doc_dt(String fph_doc_dt) {
	this.fph_doc_dt = fph_doc_dt;
}

}
