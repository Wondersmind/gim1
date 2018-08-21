package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="cst_prcs_hdr_dtl")
public class Cst_Prcs_Hdr_Dtl implements Serializable{
private Long cphd_id;
private String cphd_cst_no;
private String cphd_cmy_cd;
private String cphd_str_cd;
private String cphd_tght_dt;
private String cphd_tree_no;
private String cphd_cst_typ;
private String cphd_dpt_cd;
private String cphd_wrk_cd;
private String cphd_pdt_ctgy;
private String cphd_pdt_cd;
private String cphd_pdt_dpt_cd;
private String cphd_pdt_qty;
private String cphd_iss_wgt;
private String cphd_pdt_wgt;
private String cphd_run_wgt;
private String cphd_tst_smp;
private String cphd_isd_tst_smp;
private String cphd_tst_smp_prty;
private String cphd_iss_cmpl_dust;
private String cphd_pwd_mtl;
private String cphd_tree_prty;
private String cphd_crt_dt;
private String cphd_crt_id;
private String cphd_updt_dt;
private String cphd_updt_id;
private String cphd_iss_carat;
private String cphd_prty_all_rcvd;
private String cphd_iss_dmgd;
private String cphd_rqre_wgt;
private String cphd_tst_smpl_jsn;
private boolean cphd_iss_auth;
private boolean cphd_rcvd_auth;
private boolean cphd_cst_sts;
@Id
@GeneratedValue
public Long getCphd_id() {
	return cphd_id;
}
public void setCphd_id(Long cphd_id) {
	this.cphd_id = cphd_id;
}
@Index(name="cst_no_indx")
public String getCphd_cst_no() {
	return cphd_cst_no;
}
public void setCphd_cst_no(String cphd_cst_no) {
	this.cphd_cst_no = cphd_cst_no;
}
public String getCphd_cmy_cd() {
	return cphd_cmy_cd;
}
public void setCphd_cmy_cd(String cphd_cmy_cd) {
	this.cphd_cmy_cd = cphd_cmy_cd;
}
public String getCphd_str_cd() {
	return cphd_str_cd;
}
public void setCphd_str_cd(String cphd_str_cd) {
	this.cphd_str_cd = cphd_str_cd;
}
public String getCphd_tght_dt() {
	return cphd_tght_dt;
}
public void setCphd_tght_dt(String cphd_tght_dt) {
	this.cphd_tght_dt = cphd_tght_dt;
}
@Index(name="tree_no_index")
public String getCphd_tree_no() {
	return cphd_tree_no;
}
public void setCphd_tree_no(String cphd_tree_no) {
	this.cphd_tree_no = cphd_tree_no;
}
public String getCphd_cst_typ() {
	return cphd_cst_typ;
}
public void setCphd_cst_typ(String cphd_cst_typ) {
	this.cphd_cst_typ = cphd_cst_typ;
}
public String getCphd_dpt_cd() {
	return cphd_dpt_cd;
}
public void setCphd_dpt_cd(String cphd_dpt_cd) {
	this.cphd_dpt_cd = cphd_dpt_cd;
}
public String getCphd_wrk_cd() {
	return cphd_wrk_cd;
}
public void setCphd_wrk_cd(String cphd_wrk_cd) {
	this.cphd_wrk_cd = cphd_wrk_cd;
}
public String getCphd_pdt_ctgy() {
	return cphd_pdt_ctgy;
}
public void setCphd_pdt_ctgy(String cphd_pdt_ctgy) {
	this.cphd_pdt_ctgy = cphd_pdt_ctgy;
}
@Index(name="pdt_cd_index")
public String getCphd_pdt_cd() {
	return cphd_pdt_cd;
}
public void setCphd_pdt_cd(String cphd_pdt_cd) {
	this.cphd_pdt_cd = cphd_pdt_cd;
}
public String getCphd_pdt_qty() {
	return cphd_pdt_qty;
}
public void setCphd_pdt_qty(String cphd_pdt_qty) {
	this.cphd_pdt_qty = cphd_pdt_qty;
}
public String getCphd_iss_wgt() {
	return cphd_iss_wgt;
}
public void setCphd_iss_wgt(String cphd_iss_wgt) {
	this.cphd_iss_wgt = cphd_iss_wgt;
}
public String getCphd_pdt_wgt() {
	return cphd_pdt_wgt;
}
public void setCphd_pdt_wgt(String cphd_pdt_wgt) {
	this.cphd_pdt_wgt = cphd_pdt_wgt;
}
public String getCphd_run_wgt() {
	return cphd_run_wgt;
}
public void setCphd_run_wgt(String cphd_run_wgt) {
	this.cphd_run_wgt = cphd_run_wgt;
}
public String getCphd_tst_smp() {
	return cphd_tst_smp;
}
public void setCphd_tst_smp(String cphd_tst_smp) {
	this.cphd_tst_smp = cphd_tst_smp;
}
public String getCphd_pwd_mtl() {
	return cphd_pwd_mtl;
}
public void setCphd_pwd_mtl(String cphd_pwd_mtl) {
	this.cphd_pwd_mtl = cphd_pwd_mtl;
}
public String getCphd_tree_prty() {
	return cphd_tree_prty;
}
public void setCphd_tree_prty(String cphd_tree_prty) {
	this.cphd_tree_prty = cphd_tree_prty;
}
public boolean isCphd_iss_auth() {
	return cphd_iss_auth;
}
public void setCphd_iss_auth(boolean cphd_iss_auth) {
	this.cphd_iss_auth = cphd_iss_auth;
}
public boolean isCphd_cst_sts() {
	return cphd_cst_sts;
}
public void setCphd_cst_sts(boolean cphd_cst_sts) {
	this.cphd_cst_sts = cphd_cst_sts;
}
public String getCphd_crt_dt() {
	return cphd_crt_dt;
}
public void setCphd_crt_dt(String cphd_crt_dt) {
	this.cphd_crt_dt = cphd_crt_dt;
}
public String getCphd_crt_id() {
	return cphd_crt_id;
}
public void setCphd_crt_id(String cphd_crt_id) {
	this.cphd_crt_id = cphd_crt_id;
}
public String getCphd_updt_dt() {
	return cphd_updt_dt;
}
public void setCphd_updt_dt(String cphd_updt_dt) {
	this.cphd_updt_dt = cphd_updt_dt;
}
public String getCphd_updt_id() {
	return cphd_updt_id;
}
public void setCphd_updt_id(String cphd_updt_id) {
	this.cphd_updt_id = cphd_updt_id;
}
@Override
public String toString() {
	return "Cst_Prcs_Hdr_Dtl [cphd_id=" + cphd_id + ", cphd_cst_no=" + cphd_cst_no + ", cphd_cmy_cd=" + cphd_cmy_cd
			+ ", cphd_str_cd=" + cphd_str_cd + ", cphd_tght_dt=" + cphd_tght_dt + ", cphd_tree_no=" + cphd_tree_no
			+ ", cphd_cst_typ=" + cphd_cst_typ + ", cphd_dpt_cd=" + cphd_dpt_cd + ", cphd_wrk_cd=" + cphd_wrk_cd
			+ ", cphd_pdt_ctgy=" + cphd_pdt_ctgy + ", cphd_pdt_cd=" + cphd_pdt_cd + ", cphd_pdt_dpt_cd="
			+ cphd_pdt_dpt_cd + ", cphd_pdt_qty=" + cphd_pdt_qty + ", cphd_iss_wgt=" + cphd_iss_wgt + ", cphd_pdt_wgt="
			+ cphd_pdt_wgt + ", cphd_run_wgt=" + cphd_run_wgt + ", cphd_tst_smp=" + cphd_tst_smp
			+ ", cphd_isd_tst_smp=" + cphd_isd_tst_smp + ", cphd_tst_smp_prty=" + cphd_tst_smp_prty
			+ ", cphd_iss_cmpl_dust=" + cphd_iss_cmpl_dust + ", cphd_pwd_mtl=" + cphd_pwd_mtl + ", cphd_tree_prty="
			+ cphd_tree_prty + ", cphd_crt_dt=" + cphd_crt_dt + ", cphd_crt_id=" + cphd_crt_id + ", cphd_updt_dt="
			+ cphd_updt_dt + ", cphd_updt_id=" + cphd_updt_id + ", cphd_iss_carat=" + cphd_iss_carat
			+ ", cphd_prty_all_rcvd=" + cphd_prty_all_rcvd + ", cphd_iss_dmgd=" + cphd_iss_dmgd + ", cphd_rqre_wgt="
			+ cphd_rqre_wgt + ", cphd_tst_smpl_jsn=" + cphd_tst_smpl_jsn + ", cphd_iss_auth=" + cphd_iss_auth
			+ ", cphd_rcvd_auth=" + cphd_rcvd_auth + ", cphd_cst_sts=" + cphd_cst_sts + "]";
}
public boolean isCphd_rcvd_auth() {
	return cphd_rcvd_auth;
}
public void setCphd_rcvd_auth(boolean cphd_rcvd_auth) {
	this.cphd_rcvd_auth = cphd_rcvd_auth;
}
public String getCphd_iss_carat() {
	return cphd_iss_carat;
}
public void setCphd_iss_carat(String cphd_iss_carat) {
	this.cphd_iss_carat = cphd_iss_carat;
}
public String getCphd_rqre_wgt() {
	return cphd_rqre_wgt;
}
public void setCphd_rqre_wgt(String cphd_rqre_wgt) {
	this.cphd_rqre_wgt = cphd_rqre_wgt;
}
public String getCphd_tst_smpl_jsn() {
	return cphd_tst_smpl_jsn;
}
public void setCphd_tst_smpl_jsn(String cphd_tst_smpl_jsn) {
	this.cphd_tst_smpl_jsn = cphd_tst_smpl_jsn;
}
public String getCphd_isd_tst_smp() {
	return cphd_isd_tst_smp;
}
public void setCphd_isd_tst_smp(String cphd_isd_tst_smp) {
	this.cphd_isd_tst_smp = cphd_isd_tst_smp;
}
public String getCphd_tst_smp_prty() {
	return cphd_tst_smp_prty;
}
public void setCphd_tst_smp_prty(String cphd_tst_smp_prty) {
	this.cphd_tst_smp_prty = cphd_tst_smp_prty;
}
public String getCphd_iss_cmpl_dust() {
	return cphd_iss_cmpl_dust;
}
public void setCphd_iss_cmpl_dust(String cphd_iss_cmpl_dust) {
	this.cphd_iss_cmpl_dust = cphd_iss_cmpl_dust;
}
public String getCphd_prty_all_rcvd() {
	return cphd_prty_all_rcvd;
}
public void setCphd_prty_all_rcvd(String cphd_prty_all_rcvd) {
	this.cphd_prty_all_rcvd = cphd_prty_all_rcvd;
}
public String getCphd_iss_dmgd() {
	return cphd_iss_dmgd;
}
public void setCphd_iss_dmgd(String cphd_iss_dmgd) {
	this.cphd_iss_dmgd = cphd_iss_dmgd;
}
public String getCphd_pdt_dpt_cd() {
	return cphd_pdt_dpt_cd;
}
public void setCphd_pdt_dpt_cd(String cphd_pdt_dpt_cd) {
	this.cphd_pdt_dpt_cd = cphd_pdt_dpt_cd;
}

}
