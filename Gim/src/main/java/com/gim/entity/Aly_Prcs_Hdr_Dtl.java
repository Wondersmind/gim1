package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="aly_prcs_hdr_dtl")
public class Aly_Prcs_Hdr_Dtl implements Serializable{
private Long aphd_id;
private String aphd_cmy_cd;
private String aphd_str_cd;
private String aphd_aly_typ;
private String aphd_aly_no;
private String aphd_dpt_cd;
private String aphd_wrk_cd;
private String aphd_pdt_cd;
private String aphd_pdt_typ;
private String aphd_prty_ls;
private String aphd_cvt_prty;
private String aphd_iss_wgt;
private String aphd_dst_mtl;
private String aphd_iss_aly;
private String aphd_rcvd_wgt;
private String aphd_tst_smp1;
private String aphd_tst_smp2;
private String aphd_tst_smp3;
private String aphd_tst_smp4;
private String aphd_tot_tst_smp;
private String aphd_isd_tst_smp;
private String aphd_mtl_wgt;
private String aphd_mtl_prty;
private String aphd_expt_prty;
private String aphd_bal_wgt;
private String aphd_rcvd_prty;
private String aphd_smpl_rcvd_prty;
private String aphd_am_aly_typ_cd;
private String aphd_crt_dt;
private String aphd_crt_id;
private String aphd_updt_dt;
private String aphd_updt_id;
private boolean aphd_iss_auth;
private boolean aphd_rcvd_auth;
private boolean aphd_aly_sts;
@Id
@GeneratedValue
public Long getAphd_id() {
	return aphd_id;
}
public void setAphd_id(Long aphd_id) {
	this.aphd_id = aphd_id;
}

public String getAphd_tst_smp1() {
	return aphd_tst_smp1;
}
public void setAphd_tst_smp1(String aphd_tst_smp1) {
	this.aphd_tst_smp1 = aphd_tst_smp1;
}
public String getAphd_tst_smp2() {
	return aphd_tst_smp2;
}
public void setAphd_tst_smp2(String aphd_tst_smp2) {
	this.aphd_tst_smp2 = aphd_tst_smp2;
}
public String getAphd_tst_smp3() {
	return aphd_tst_smp3;
}
public void setAphd_tst_smp3(String aphd_tst_smp3) {
	this.aphd_tst_smp3 = aphd_tst_smp3;
}
public String getAphd_tst_smp4() {
	return aphd_tst_smp4;
}
public void setAphd_tst_smp4(String aphd_tst_smp4) {
	this.aphd_tst_smp4 = aphd_tst_smp4;
}
public String getAphd_cmy_cd() {
	return aphd_cmy_cd;
}
public void setAphd_cmy_cd(String aphd_cmy_cd) {
	this.aphd_cmy_cd = aphd_cmy_cd;
}
public String getAphd_str_cd() {
	return aphd_str_cd;
}
public void setAphd_str_cd(String aphd_str_cd) {
	this.aphd_str_cd = aphd_str_cd;
}
public String getAphd_aly_typ() {
	return aphd_aly_typ;
}
public void setAphd_aly_typ(String aphd_aly_typ) {
	this.aphd_aly_typ = aphd_aly_typ;
}
@Index(name="aly_no_index")
public String getAphd_aly_no() {
	return aphd_aly_no;
}
public void setAphd_aly_no(String aphd_aly_no) {
	this.aphd_aly_no = aphd_aly_no;
}
public String getAphd_dpt_cd() {
	return aphd_dpt_cd;
}
public void setAphd_dpt_cd(String aphd_dpt_cd) {
	this.aphd_dpt_cd = aphd_dpt_cd;
}
public String getAphd_wrk_cd() {
	return aphd_wrk_cd;
}
public void setAphd_wrk_cd(String aphd_wrk_cd) {
	this.aphd_wrk_cd = aphd_wrk_cd;
}
@Index(name="pdt_cd_index")
public String getAphd_pdt_cd() {
	return aphd_pdt_cd;
}
public void setAphd_pdt_cd(String aphd_pdt_cd) {
	this.aphd_pdt_cd = aphd_pdt_cd;
}
@Index(name="pdt_typ_index")
public String getAphd_pdt_typ() {
	return aphd_pdt_typ;
}
public void setAphd_pdt_typ(String aphd_pdt_typ) {
	this.aphd_pdt_typ = aphd_pdt_typ;
}
public String getAphd_prty_ls() {
	return aphd_prty_ls;
}
public void setAphd_prty_ls(String aphd_prty_ls) {
	this.aphd_prty_ls = aphd_prty_ls;
}
public String getAphd_cvt_prty() {
	return aphd_cvt_prty;
}
public void setAphd_cvt_prty(String aphd_cvt_prty) {
	this.aphd_cvt_prty = aphd_cvt_prty;
}
public String getAphd_iss_wgt() {
	return aphd_iss_wgt;
}
public void setAphd_iss_wgt(String aphd_iss_wgt) {
	this.aphd_iss_wgt = aphd_iss_wgt;
}
public String getAphd_rcvd_wgt() {
	return aphd_rcvd_wgt;
}
public void setAphd_rcvd_wgt(String aphd_rcvd_wgt) {
	this.aphd_rcvd_wgt = aphd_rcvd_wgt;
}
public String getAphd_bal_wgt() {
	return aphd_bal_wgt;
}
public void setAphd_bal_wgt(String aphd_bal_wgt) {
	this.aphd_bal_wgt = aphd_bal_wgt;
}
public String getAphd_rcvd_prty() {
	return aphd_rcvd_prty;
}
public void setAphd_rcvd_prty(String aphd_rcvd_prty) {
	this.aphd_rcvd_prty = aphd_rcvd_prty;
}

public String getAphd_crt_dt() {
	return aphd_crt_dt;
}
public void setAphd_crt_dt(String aphd_crt_dt) {
	this.aphd_crt_dt = aphd_crt_dt;
}
public String getAphd_crt_id() {
	return aphd_crt_id;
}
public void setAphd_crt_id(String aphd_crt_id) {
	this.aphd_crt_id = aphd_crt_id;
}
public String getAphd_updt_dt() {
	return aphd_updt_dt;
}
public void setAphd_updt_dt(String aphd_updt_dt) {
	this.aphd_updt_dt = aphd_updt_dt;
}
public String getAphd_updt_id() {
	return aphd_updt_id;
}
public void setAphd_updt_id(String aphd_updt_id) {
	this.aphd_updt_id = aphd_updt_id;
}

@Index(name="pdt_typ_cd_index")
public String getAphd_am_aly_typ_cd() {
	return aphd_am_aly_typ_cd;
}
public void setAphd_am_aly_typ_cd(String aphd_am_aly_typ_cd) {
	this.aphd_am_aly_typ_cd = aphd_am_aly_typ_cd;
}
public boolean isAphd_iss_auth() {
	return aphd_iss_auth;
}
public void setAphd_iss_auth(boolean aphd_iss_auth) {
	this.aphd_iss_auth = aphd_iss_auth;
}
public boolean isAphd_rcvd_auth() {
	return aphd_rcvd_auth;
}
public void setAphd_rcvd_auth(boolean aphd_rcvd_auth) {
	this.aphd_rcvd_auth = aphd_rcvd_auth;
}
public boolean isAphd_aly_sts() {
	return aphd_aly_sts;
}
public void setAphd_aly_sts(boolean aphd_aly_sts) {
	this.aphd_aly_sts = aphd_aly_sts;
}
@Override
public String toString() {
	return "Aly_Prcs_Hdr_Dtl [aphd_id=" + aphd_id + ", aphd_cmy_cd=" + aphd_cmy_cd + ", aphd_str_cd=" + aphd_str_cd
			+ ", aphd_aly_typ=" + aphd_aly_typ + ", aphd_aly_no=" + aphd_aly_no + ", aphd_dpt_cd=" + aphd_dpt_cd
			+ ", aphd_wrk_cd=" + aphd_wrk_cd + ", aphd_pdt_cd=" + aphd_pdt_cd + ", aphd_pdt_typ=" + aphd_pdt_typ
			+ ", aphd_prty_ls=" + aphd_prty_ls + ", aphd_cvt_prty=" + aphd_cvt_prty + ", aphd_iss_wgt=" + aphd_iss_wgt
			+ ", aphd_dst_mtl=" + aphd_dst_mtl + ", aphd_iss_aly=" + aphd_iss_aly + ", aphd_rcvd_wgt=" + aphd_rcvd_wgt
			+ ", aphd_tst_smp1=" + aphd_tst_smp1 + ", aphd_tst_smp2=" + aphd_tst_smp2 + ", aphd_tst_smp3="
			+ aphd_tst_smp3 + ", aphd_tst_smp4=" + aphd_tst_smp4 + ", aphd_tot_tst_smp=" + aphd_tot_tst_smp
			+ ", aphd_isd_tst_smp=" + aphd_isd_tst_smp + ", aphd_mtl_wgt=" + aphd_mtl_wgt + ", aphd_mtl_prty="
			+ aphd_mtl_prty + ", aphd_expt_prty=" + aphd_expt_prty + ", aphd_bal_wgt=" + aphd_bal_wgt
			+ ", aphd_rcvd_prty=" + aphd_rcvd_prty + ", aphd_smpl_rcvd_prty=" + aphd_smpl_rcvd_prty
			+ ", aphd_am_aly_typ_cd=" + aphd_am_aly_typ_cd + ", aphd_crt_dt=" + aphd_crt_dt + ", aphd_crt_id="
			+ aphd_crt_id + ", aphd_updt_dt=" + aphd_updt_dt + ", aphd_updt_id=" + aphd_updt_id + ", aphd_iss_auth="
			+ aphd_iss_auth + ", aphd_rcvd_auth=" + aphd_rcvd_auth + ", aphd_aly_sts=" + aphd_aly_sts + "]";
}
public String getAphd_expt_prty() {
	return aphd_expt_prty;
}
public String getAphd_mtl_wgt() {
	return aphd_mtl_wgt;
}
public void setAphd_mtl_wgt(String aphd_mtl_wgt) {
	this.aphd_mtl_wgt = aphd_mtl_wgt;
}
public String getAphd_mtl_prty() {
	return aphd_mtl_prty;
}
public void setAphd_mtl_prty(String aphd_mtl_prty) {
	this.aphd_mtl_prty = aphd_mtl_prty;
}
public void setAphd_expt_prty(String aphd_expt_prty) {
	this.aphd_expt_prty = aphd_expt_prty;
}
public String getAphd_tot_tst_smp() {
	return aphd_tot_tst_smp;
}
public void setAphd_tot_tst_smp(String aphd_tot_tst_smp) {
	this.aphd_tot_tst_smp = aphd_tot_tst_smp;
}
public String getAphd_iss_aly() {
	return aphd_iss_aly;
}
public void setAphd_iss_aly(String aphd_iss_aly) {
	this.aphd_iss_aly = aphd_iss_aly;
}
public String getAphd_dst_mtl() {
	return aphd_dst_mtl;
}
public void setAphd_dst_mtl(String aphd_dst_mtl) {
	this.aphd_dst_mtl = aphd_dst_mtl;
}
public String getAphd_smpl_rcvd_prty() {
	return aphd_smpl_rcvd_prty;
}
public void setAphd_smpl_rcvd_prty(String aphd_smpl_rcvd_prty) {
	this.aphd_smpl_rcvd_prty = aphd_smpl_rcvd_prty;
}
public String getAphd_isd_tst_smp() {
	return aphd_isd_tst_smp;
}
public void setAphd_isd_tst_smp(String aphd_isd_tst_smp) {
	this.aphd_isd_tst_smp = aphd_isd_tst_smp;
}

}
