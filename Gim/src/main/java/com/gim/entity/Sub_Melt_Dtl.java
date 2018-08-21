package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="sub_melt_dtl")
public class Sub_Melt_Dtl implements Serializable{
private Long smd_id;
private String smd_doc_no;
private String smd_prcs_no;
private String smd_trf_typ;
private String smd_mtl_prty;
private String smd_exst_mtl_wgt;
private String smd_isd_mtl_wgt;
private String smd_rcvd_mtl_wgt;
private String smd_test_smp_wgt;
private String smd_test_smps_jsn;
private String smd_rcvd_prty;
private String smd_rcvd_prty_jsn;
private String smd_dust_mtl;
private String smd_dust_auth;
private String smd_wrk_cd;
private String smd_wrk_typ;
private String smd_cmy_cd;
private String smd_bal_wgt;
private String smd_dpt_cd;
private boolean smd_isd_auth;
private boolean smd_rcvd_auth;
private String smd_crt_dt;
private String smd_updt_dt;
private String smd_crt_id;
private String smd_dc_isd;
private String smd_dc_rcvd;
private boolean smd_mlt_sts;
@Id
@GeneratedValue
public Long getSmd_id() {
	return smd_id;
}

public void setSmd_id(Long smd_id) {
	this.smd_id = smd_id;
}

public String getSmd_doc_no() {
	return smd_doc_no;
}

public void setSmd_doc_no(String smd_doc_no) {
	this.smd_doc_no = smd_doc_no;
}
@Index(name="prcs_no")
public String getSmd_prcs_no() {
	return smd_prcs_no;
}

public void setSmd_prcs_no(String smd_prcs_no) {
	this.smd_prcs_no = smd_prcs_no;
}

public String getSmd_trf_typ() {
	return smd_trf_typ;
}

public void setSmd_trf_typ(String smd_trf_typ) {
	this.smd_trf_typ = smd_trf_typ;
}

public String getSmd_mtl_prty() {
	return smd_mtl_prty;
}

public void setSmd_mtl_prty(String smd_mtl_prty) {
	this.smd_mtl_prty = smd_mtl_prty;
}

public String getSmd_exst_mtl_wgt() {
	return smd_exst_mtl_wgt;
}

public void setSmd_exst_mtl_wgt(String smd_exst_mtl_wgt) {
	this.smd_exst_mtl_wgt = smd_exst_mtl_wgt;
}

public String getSmd_isd_mtl_wgt() {
	return smd_isd_mtl_wgt;
}

public void setSmd_isd_mtl_wgt(String smd_isd_mtl_wgt) {
	this.smd_isd_mtl_wgt = smd_isd_mtl_wgt;
}

public String getSmd_rcvd_mtl_wgt() {
	return smd_rcvd_mtl_wgt;
}

public void setSmd_rcvd_mtl_wgt(String smd_rcvd_mtl_wgt) {
	this.smd_rcvd_mtl_wgt = smd_rcvd_mtl_wgt;
}

public String getSmd_test_smp_wgt() {
	return smd_test_smp_wgt;
}

public void setSmd_test_smp_wgt(String smd_test_smp_wgt) {
	this.smd_test_smp_wgt = smd_test_smp_wgt;
}

public String getSmd_test_smps_jsn() {
	return smd_test_smps_jsn;
}

public void setSmd_test_smps_jsn(String smd_test_smps_jsn) {
	this.smd_test_smps_jsn = smd_test_smps_jsn;
}

public String getSmd_rcvd_prty() {
	return smd_rcvd_prty;
}

public void setSmd_rcvd_prty(String smd_rcvd_prty) {
	this.smd_rcvd_prty = smd_rcvd_prty;
}

public String getSmd_rcvd_prty_jsn() {
	return smd_rcvd_prty_jsn;
}

public void setSmd_rcvd_prty_jsn(String smd_rcvd_prty_jsn) {
	this.smd_rcvd_prty_jsn = smd_rcvd_prty_jsn;
}

public String getSmd_dust_mtl() {
	return smd_dust_mtl;
}

public void setSmd_dust_mtl(String smd_dust_mtl) {
	this.smd_dust_mtl = smd_dust_mtl;
}

public String getSmd_dust_auth() {
	return smd_dust_auth;
}

public void setSmd_dust_auth(String smd_dust_auth) {
	this.smd_dust_auth = smd_dust_auth;
}
@Index(name="wrk_cd")
public String getSmd_wrk_cd() {
	return smd_wrk_cd;
}

public void setSmd_wrk_cd(String smd_wrk_cd) {
	this.smd_wrk_cd = smd_wrk_cd;
}

public String getSmd_wrk_typ() {
	return smd_wrk_typ;
}

public void setSmd_wrk_typ(String smd_wrk_typ) {
	this.smd_wrk_typ = smd_wrk_typ;
}
@Index(name="cmy_cd")
public String getSmd_cmy_cd() {
	return smd_cmy_cd;
}

public void setSmd_cmy_cd(String smd_cmy_cd) {
	this.smd_cmy_cd = smd_cmy_cd;
}
@Index(name="dpt_cd")
public String getSmd_dpt_cd() {
	return smd_dpt_cd;
}

public void setSmd_dpt_cd(String smd_dpt_cd) {
	this.smd_dpt_cd = smd_dpt_cd;
}

public boolean isSmd_isd_auth() {
	return smd_isd_auth;
}

public void setSmd_isd_auth(boolean smd_isd_auth) {
	this.smd_isd_auth = smd_isd_auth;
}

public boolean isSmd_rcvd_auth() {
	return smd_rcvd_auth;
}

public void setSmd_rcvd_auth(boolean smd_rcvd_auth) {
	this.smd_rcvd_auth = smd_rcvd_auth;
}

public String getSmd_crt_dt() {
	return smd_crt_dt;
}

public void setSmd_crt_dt(String smd_crt_dt) {
	this.smd_crt_dt = smd_crt_dt;
}

public String getSmd_updt_dt() {
	return smd_updt_dt;
}

public void setSmd_updt_dt(String smd_updt_dt) {
	this.smd_updt_dt = smd_updt_dt;
}

public String getSmd_crt_id() {
	return smd_crt_id;
}

public void setSmd_crt_id(String smd_crt_id) {
	this.smd_crt_id = smd_crt_id;
}

public String getSmd_dc_isd() {
	return smd_dc_isd;
}

public void setSmd_dc_isd(String smd_dc_isd) {
	this.smd_dc_isd = smd_dc_isd;
}

public String getSmd_dc_rcvd() {
	return smd_dc_rcvd;
}

public void setSmd_dc_rcvd(String smd_dc_rcvd) {
	this.smd_dc_rcvd = smd_dc_rcvd;
}

public boolean isSmd_mlt_sts() {
	return smd_mlt_sts;
}

public void setSmd_mlt_sts(boolean smd_mlt_sts) {
	this.smd_mlt_sts = smd_mlt_sts;
}

@Override
public String toString() {
	return "Sub_Melt_Dtl [smd_id=" + smd_id + ", smd_doc_no=" + smd_doc_no + ", smd_prcs_no=" + smd_prcs_no
			+ ", smd_trf_typ=" + smd_trf_typ + ", smd_mtl_prty=" + smd_mtl_prty + ", smd_exst_mtl_wgt="
			+ smd_exst_mtl_wgt + ", smd_isd_mtl_wgt=" + smd_isd_mtl_wgt + ", smd_rcvd_mtl_wgt=" + smd_rcvd_mtl_wgt
			+ ", smd_test_smp_wgt=" + smd_test_smp_wgt + ", smd_test_smps_jsn=" + smd_test_smps_jsn
			+ ", smd_rcvd_prty=" + smd_rcvd_prty + ", smd_rcvd_prty_jsn=" + smd_rcvd_prty_jsn + ", smd_dust_mtl="
			+ smd_dust_mtl + ", smd_dust_auth=" + smd_dust_auth + ", smd_wrk_cd=" + smd_wrk_cd + ", smd_wrk_typ="
			+ smd_wrk_typ + ", smd_cmy_cd=" + smd_cmy_cd + ", smd_bal_wgt=" + smd_bal_wgt + ", smd_dpt_cd="
			+ smd_dpt_cd + ", smd_isd_auth=" + smd_isd_auth + ", smd_rcvd_auth=" + smd_rcvd_auth + ", smd_crt_dt="
			+ smd_crt_dt + ", smd_updt_dt=" + smd_updt_dt + ", smd_crt_id=" + smd_crt_id + ", smd_dc_isd=" + smd_dc_isd
			+ ", smd_dc_rcvd=" + smd_dc_rcvd + ", smd_mlt_sts=" + smd_mlt_sts + "]";
}

public String getSmd_bal_wgt() {
	return smd_bal_wgt;
}

public void setSmd_bal_wgt(String smd_bal_wgt) {
	this.smd_bal_wgt = smd_bal_wgt;
}

}