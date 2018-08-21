package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="mn_prcs_hdr_dtl")
public class Mn_Prcs_Hdr_Dtl implements Serializable{
private Long mphd_id;
private String mphd_doc_no;
private String mphd_frm_dpt;
private String mphd_prcs_typ;
private String mphd_wrk_cd;
private String mphd_pdt_prty;
private String mphd_cmy_cd;
private String mphd_wrk_typ;
private String mphd_trgt_dt;
private String mphd_iss_doc_no;
private String mphd_iss_doc_ctgy;
private String mphd_iss_doc_qty;
private String mphd_iss_doc_wgt;
private String mphd_rqd_bom;
private String mphd_pndg_bom;
private String mphd_bom_wgt;
private String mphd_iss_wgt;
private String mphd_rtn_smi_fsh_pdt;
private Double mphd_tot_smi_sub_rcvd;
private Double mphd_tot_isd_sub_isd;
private String mphd_rtn_scrp_mtl;
private String mpdh_bal_wgt;
private String mphd_sub_prcs_cd;
private String mphd_sub_iss_wgt;
private String mphd_sub_rcvd_wgt;
private boolean mphd_iss_auth;
private boolean mphd_rcvd_auth;
private String mphd_crt_id;
private String mphd_crt_dt;
private String mphd_updt_id;
private String mphd_updt_dt;
private boolean mphd_prcs_sts;
private String mphd_dc_isd_sts;
private String mphd_dc_rcvd_sts;
@Id
@GeneratedValue
public Long getMphd_id() {
	return mphd_id;
}
public void setMphd_id(Long mphd_id) {
	this.mphd_id = mphd_id;
}
public String getMphd_doc_no() {
	return mphd_doc_no;
}
public void setMphd_doc_no(String mphd_doc_no) {
	this.mphd_doc_no = mphd_doc_no;
}
@Index(name="frm_dpt")
public String getMphd_frm_dpt() {
	return mphd_frm_dpt;
}
public void setMphd_frm_dpt(String mphd_frm_dpt) {
	this.mphd_frm_dpt = mphd_frm_dpt;
}
public String getMphd_prcs_typ() {
	return mphd_prcs_typ;
}
public void setMphd_prcs_typ(String mphd_prcs_typ) {
	this.mphd_prcs_typ = mphd_prcs_typ;
}
public String getMphd_wrk_cd() {
	return mphd_wrk_cd;
}
public void setMphd_wrk_cd(String mphd_wrk_cd) {
	this.mphd_wrk_cd = mphd_wrk_cd;
}
public String getMphd_cmy_cd() {
	return mphd_cmy_cd;
}
public void setMphd_cmy_cd(String mphd_cmy_cd) {
	this.mphd_cmy_cd = mphd_cmy_cd;
}
public String getMphd_wrk_typ() {
	return mphd_wrk_typ;
}
public void setMphd_wrk_typ(String mphd_wrk_typ) {
	this.mphd_wrk_typ = mphd_wrk_typ;
}
public String getMphd_trgt_dt() {
	return mphd_trgt_dt;
}
public void setMphd_trgt_dt(String mphd_trgt_dt) {
	this.mphd_trgt_dt = mphd_trgt_dt;
}
@Index(name="jb_cd_no")
public String getMphd_iss_doc_no() {
	return mphd_iss_doc_no;
}
public void setMphd_iss_doc_no(String mphd_iss_doc_no) {
	this.mphd_iss_doc_no = mphd_iss_doc_no;
}
public String getMphd_iss_doc_ctgy() {
	return mphd_iss_doc_ctgy;
}
public void setMphd_iss_doc_ctgy(String mphd_iss_doc_ctgy) {
	this.mphd_iss_doc_ctgy = mphd_iss_doc_ctgy;
}
public String getMphd_iss_doc_qty() {
	return mphd_iss_doc_qty;
}
public void setMphd_iss_doc_qty(String mphd_iss_doc_qty) {
	this.mphd_iss_doc_qty = mphd_iss_doc_qty;
}
public String getMphd_iss_doc_wgt() {
	return mphd_iss_doc_wgt;
}
public void setMphd_iss_doc_wgt(String mphd_iss_doc_wgt) {
	this.mphd_iss_doc_wgt = mphd_iss_doc_wgt;
}
public String getMphd_rqd_bom() {
	return mphd_rqd_bom;
}
public void setMphd_rqd_bom(String mphd_rqd_bom) {
	this.mphd_rqd_bom = mphd_rqd_bom;
}
public String getMphd_bom_wgt() {
	return mphd_bom_wgt;
}
public void setMphd_bom_wgt(String mphd_bom_wgt) {
	this.mphd_bom_wgt = mphd_bom_wgt;
}
public String getMphd_iss_wgt() {
	return mphd_iss_wgt;
}
public void setMphd_iss_wgt(String mphd_iss_wgt) {
	this.mphd_iss_wgt = mphd_iss_wgt;
}
public String getMphd_rtn_smi_fsh_pdt() {
	return mphd_rtn_smi_fsh_pdt;
}
public void setMphd_rtn_smi_fsh_pdt(String mphd_rtn_smi_fsh_pdt) {
	this.mphd_rtn_smi_fsh_pdt = mphd_rtn_smi_fsh_pdt;
}
public String getMphd_rtn_scrp_mtl() {
	return mphd_rtn_scrp_mtl;
}
public void setMphd_rtn_scrp_mtl(String mphd_rtn_scrp_mtl) {
	this.mphd_rtn_scrp_mtl = mphd_rtn_scrp_mtl;
}
public String getMpdh_bal_wgt() {
	return mpdh_bal_wgt;
}
public void setMpdh_bal_wgt(String mpdh_bal_wgt) {
	this.mpdh_bal_wgt = mpdh_bal_wgt;
}
public boolean isMphd_iss_auth() {
	return mphd_iss_auth;
}
public void setMphd_iss_auth(boolean mphd_iss_auth) {
	this.mphd_iss_auth = mphd_iss_auth;
}
public boolean isMphd_rcvd_auth() {
	return mphd_rcvd_auth;
}
public void setMphd_rcvd_auth(boolean mphd_rcvd_auth) {
	this.mphd_rcvd_auth = mphd_rcvd_auth;
}
public String getMphd_crt_id() {
	return mphd_crt_id;
}
public void setMphd_crt_id(String mphd_crt_id) {
	this.mphd_crt_id = mphd_crt_id;
}
public String getMphd_crt_dt() {
	return mphd_crt_dt;
}
public void setMphd_crt_dt(String mphd_crt_dt) {
	this.mphd_crt_dt = mphd_crt_dt;
}
public String getMphd_updt_id() {
	return mphd_updt_id;
}
public void setMphd_updt_id(String mphd_updt_id) {
	this.mphd_updt_id = mphd_updt_id;
}
public String getMphd_updt_dt() {
	return mphd_updt_dt;
}
public void setMphd_updt_dt(String mphd_updt_dt) {
	this.mphd_updt_dt = mphd_updt_dt;
}
public boolean isMphd_prcs_sts() {
	return mphd_prcs_sts;
}
public void setMphd_prcs_sts(boolean mphd_prcs_sts) {
	this.mphd_prcs_sts = mphd_prcs_sts;
}
@Override
public String toString() {
	return "Mn_Prcs_Hdr_Dtl [mphd_id=" + mphd_id + ", mphd_doc_no=" + mphd_doc_no + ", mphd_frm_dpt=" + mphd_frm_dpt
			+ ", mphd_prcs_typ=" + mphd_prcs_typ + ", mphd_wrk_cd=" + mphd_wrk_cd + ", mphd_pdt_prty=" + mphd_pdt_prty
			+ ", mphd_cmy_cd=" + mphd_cmy_cd + ", mphd_wrk_typ=" + mphd_wrk_typ + ", mphd_trgt_dt=" + mphd_trgt_dt
			+ ", mphd_iss_doc_no=" + mphd_iss_doc_no + ", mphd_iss_doc_ctgy=" + mphd_iss_doc_ctgy
			+ ", mphd_iss_doc_qty=" + mphd_iss_doc_qty + ", mphd_iss_doc_wgt=" + mphd_iss_doc_wgt + ", mphd_rqd_bom="
			+ mphd_rqd_bom + ", mphd_pndg_bom=" + mphd_pndg_bom + ", mphd_bom_wgt=" + mphd_bom_wgt + ", mphd_iss_wgt="
			+ mphd_iss_wgt + ", mphd_rtn_smi_fsh_pdt=" + mphd_rtn_smi_fsh_pdt + ", mphd_tot_smi_sub_rcvd="
			+ mphd_tot_smi_sub_rcvd + ", mphd_tot_isd_sub_isd=" + mphd_tot_isd_sub_isd + ", mphd_rtn_scrp_mtl="
			+ mphd_rtn_scrp_mtl + ", mpdh_bal_wgt=" + mpdh_bal_wgt + ", mphd_sub_prcs_cd=" + mphd_sub_prcs_cd
			+ ", mphd_sub_iss_wgt=" + mphd_sub_iss_wgt + ", mphd_sub_rcvd_wgt=" + mphd_sub_rcvd_wgt
			+ ", mphd_iss_auth=" + mphd_iss_auth + ", mphd_rcvd_auth=" + mphd_rcvd_auth + ", mphd_crt_id="
			+ mphd_crt_id + ", mphd_crt_dt=" + mphd_crt_dt + ", mphd_updt_id=" + mphd_updt_id + ", mphd_updt_dt="
			+ mphd_updt_dt + ", mphd_prcs_sts=" + mphd_prcs_sts + ", mphd_dc_isd_sts=" + mphd_dc_isd_sts
			+ ", mphd_dc_rcvd_sts=" + mphd_dc_rcvd_sts + "]";
}
public String getMphd_pndg_bom() {
	return mphd_pndg_bom;
}
public void setMphd_pndg_bom(String mphd_pndg_bom) {
	this.mphd_pndg_bom = mphd_pndg_bom;
}
public String getMphd_sub_prcs_cd() {
	return mphd_sub_prcs_cd;
}
public void setMphd_sub_prcs_cd(String mphd_sub_prcs_cd) {
	this.mphd_sub_prcs_cd = mphd_sub_prcs_cd;
}
public String getMphd_sub_iss_wgt() {
	return mphd_sub_iss_wgt;
}
public void setMphd_sub_iss_wgt(String mphd_sub_iss_wgt) {
	this.mphd_sub_iss_wgt = mphd_sub_iss_wgt;
}
public String getMphd_sub_rcvd_wgt() {
	return mphd_sub_rcvd_wgt;
}
public void setMphd_sub_rcvd_wgt(String mphd_sub_rcvd_wgt) {
	this.mphd_sub_rcvd_wgt = mphd_sub_rcvd_wgt;
}
public Double getMphd_tot_smi_sub_rcvd() {
	return mphd_tot_smi_sub_rcvd;
}
public void setMphd_tot_smi_sub_rcvd(Double mphd_tot_smi_sub_rcvd) {
	this.mphd_tot_smi_sub_rcvd = mphd_tot_smi_sub_rcvd;
}
public Double getMphd_tot_isd_sub_isd() {
	return mphd_tot_isd_sub_isd;
}
public void setMphd_tot_isd_sub_isd(Double mphd_tot_isd_sub_isd) {
	this.mphd_tot_isd_sub_isd = mphd_tot_isd_sub_isd;
}
public String getMphd_dc_isd_sts() {
	return mphd_dc_isd_sts;
}
public void setMphd_dc_isd_sts(String mphd_dc_isd_sts) {
	this.mphd_dc_isd_sts = mphd_dc_isd_sts;
}
public String getMphd_dc_rcvd_sts() {
	return mphd_dc_rcvd_sts;
}
public void setMphd_dc_rcvd_sts(String mphd_dc_rcvd_sts) {
	this.mphd_dc_rcvd_sts = mphd_dc_rcvd_sts;
}
public String getMphd_pdt_prty() {
	return mphd_pdt_prty;
}
public void setMphd_pdt_prty(String mphd_pdt_prty) {
	this.mphd_pdt_prty = mphd_pdt_prty;
}


}
