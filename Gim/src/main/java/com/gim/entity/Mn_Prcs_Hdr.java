package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="mn_prcs_hdr")
public class Mn_Prcs_Hdr implements Serializable{
private Long mph_id;
private String mph_doc_no;
private String mph_doc_dt;
private String mph_frm_dpt;
private String mph_cmy_cd;
private String mph_str_cd;
private String mph_trgt_dt;
private String mph_prcs_typ;
private String mph_wrk_cd;
private String mph_wrk_typ;
private Double mph_mtl_wgt;
private Double mph_rcvd_wgt;
private Double mph_bal_wgt;
private Double mph_smi_fnsh_wgt;
private Double mph_scrp_mtl_wgt;
private String mph_mtl_prty;
private String mph_crt_id;
private String mph_crt_dt;
private String mph_updt_id;
private String mph_updt_dt;
private boolean mph_iss_auth;
private boolean mph_rcvd_auth;
private boolean mph_prcs_sts;
@Id
@GeneratedValue
public Long getMph_id() {
	return mph_id;
}

public void setMph_id(Long mph_id) {
	this.mph_id = mph_id;
}
@Index(name="doc_no_index")
public String getMph_doc_no() {
	return mph_doc_no;
}

public void setMph_doc_no(String mph_doc_no) {
	this.mph_doc_no = mph_doc_no;
}
@Index(name="dpt_index")
public String getMph_frm_dpt() {
	return mph_frm_dpt;
}

public void setMph_frm_dpt(String mph_frm_dpt) {
	this.mph_frm_dpt = mph_frm_dpt;
}

public String getMph_trgt_dt() {
	return mph_trgt_dt;
}

public void setMph_trgt_dt(String mph_trgt_dt) {
	this.mph_trgt_dt = mph_trgt_dt;
}

public String getMph_prcs_typ() {
	return mph_prcs_typ;
}

public void setMph_prcs_typ(String mph_prcs_typ) {
	this.mph_prcs_typ = mph_prcs_typ;
}
@Index(name="dpt_index")
public String getMph_wrk_cd() {
	return mph_wrk_cd;
}

public void setMph_wrk_cd(String mph_wrk_cd) {
	this.mph_wrk_cd = mph_wrk_cd;
}

public String getMph_wrk_typ() {
	return mph_wrk_typ;
}

public void setMph_wrk_typ(String mph_wrk_typ) {
	this.mph_wrk_typ = mph_wrk_typ;
}

public Double getMph_mtl_wgt() {
	return mph_mtl_wgt;
}

public void setMph_mtl_wgt(Double mph_mtl_wgt) {
	this.mph_mtl_wgt = mph_mtl_wgt;
}

public String getMph_mtl_prty() {
	return mph_mtl_prty;
}

public void setMph_mtl_prty(String mph_mtl_prty) {
	this.mph_mtl_prty = mph_mtl_prty;
}

public String getMph_crt_id() {
	return mph_crt_id;
}

public void setMph_crt_id(String mph_crt_id) {
	this.mph_crt_id = mph_crt_id;
}

public String getMph_crt_dt() {
	return mph_crt_dt;
}

public void setMph_crt_dt(String mph_crt_dt) {
	this.mph_crt_dt = mph_crt_dt;
}

public String getMph_updt_id() {
	return mph_updt_id;
}

public void setMph_updt_id(String mph_updt_id) {
	this.mph_updt_id = mph_updt_id;
}

public String getMph_updt_dt() {
	return mph_updt_dt;
}

public void setMph_updt_dt(String mph_updt_dt) {
	this.mph_updt_dt = mph_updt_dt;
}

public boolean isMph_iss_auth() {
	return mph_iss_auth;
}

public void setMph_iss_auth(boolean mph_iss_auth) {
	this.mph_iss_auth = mph_iss_auth;
}

public boolean isMph_rcvd_auth() {
	return mph_rcvd_auth;
}

public void setMph_rcvd_auth(boolean mph_rcvd_auth) {
	this.mph_rcvd_auth = mph_rcvd_auth;
}

public boolean isMph_prcs_sts() {
	return mph_prcs_sts;
}

public void setMph_prcs_sts(boolean mph_prcs_sts) {
	this.mph_prcs_sts = mph_prcs_sts;
}

@Override
public String toString() {
	return "Mn_Prcs_Hdr [mph_id=" + mph_id + ", mph_doc_no=" + mph_doc_no + ", mph_doc_dt=" + mph_doc_dt
			+ ", mph_frm_dpt=" + mph_frm_dpt + ", mph_cmy_cd=" + mph_cmy_cd + ", mph_str_cd=" + mph_str_cd
			+ ", mph_trgt_dt=" + mph_trgt_dt + ", mph_prcs_typ=" + mph_prcs_typ + ", mph_wrk_cd=" + mph_wrk_cd
			+ ", mph_wrk_typ=" + mph_wrk_typ + ", mph_mtl_wgt=" + mph_mtl_wgt + ", mph_rcvd_wgt=" + mph_rcvd_wgt
			+ ", mph_bal_wgt=" + mph_bal_wgt + ", mph_smi_fnsh_wgt=" + mph_smi_fnsh_wgt + ", mph_scrp_mtl_wgt="
			+ mph_scrp_mtl_wgt + ", mph_mtl_prty=" + mph_mtl_prty + ", mph_crt_id=" + mph_crt_id + ", mph_crt_dt="
			+ mph_crt_dt + ", mph_updt_id=" + mph_updt_id + ", mph_updt_dt=" + mph_updt_dt + ", mph_iss_auth="
			+ mph_iss_auth + ", mph_rcvd_auth=" + mph_rcvd_auth + ", mph_prcs_sts=" + mph_prcs_sts + "]";
}

public String getMph_cmy_cd() {
	return mph_cmy_cd;
}

public void setMph_cmy_cd(String mph_cmy_cd) {
	this.mph_cmy_cd = mph_cmy_cd;
}

public Double getMph_rcvd_wgt() {
	return mph_rcvd_wgt;
}

public void setMph_rcvd_wgt(Double mph_rcvd_wgt) {
	this.mph_rcvd_wgt = mph_rcvd_wgt;
}

public Double getMph_bal_wgt() {
	return mph_bal_wgt;
}

public void setMph_bal_wgt(Double mph_bal_wgt) {
	this.mph_bal_wgt = mph_bal_wgt;
}

public Double getMph_smi_fnsh_wgt() {
	return mph_smi_fnsh_wgt;
}

public void setMph_smi_fnsh_wgt(Double mph_smi_fnsh_wgt) {
	this.mph_smi_fnsh_wgt = mph_smi_fnsh_wgt;
}

public Double getMph_scrp_mtl_wgt() {
	return mph_scrp_mtl_wgt;
}

public void setMph_scrp_mtl_wgt(Double mph_scrp_mtl_wgt) {
	this.mph_scrp_mtl_wgt = mph_scrp_mtl_wgt;
}

public String getMph_str_cd() {
	return mph_str_cd;
}

public void setMph_str_cd(String mph_str_cd) {
	this.mph_str_cd = mph_str_cd;
}

public String getMph_doc_dt() {
	return mph_doc_dt;
}

public void setMph_doc_dt(String mph_doc_dt) {
	this.mph_doc_dt = mph_doc_dt;
}

}
