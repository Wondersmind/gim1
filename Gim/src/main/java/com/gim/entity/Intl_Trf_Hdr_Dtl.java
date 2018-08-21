package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="intl_trf_hdr_dtl")
public class Intl_Trf_Hdr_Dtl implements Serializable{
	private Long ithd_id;
	private String ithd_doc_no;
	private String ithd_cmy_cd;
	private String ithd_str_cd;
	private String ithd_frm_dpt_cd;
	private String ithd_to_dpt_cd;
	private String ithd_trf_typ;
	private Long ithd_job_prmy_id;
	private String ithd_cstr_cd;
	private String ithd_ord_no;
	private String ithd_tree_no;
	private String ithd_pdt_qty;
	private String ithd_pdt_ctgy;
	private String ithd_ord_typ;
	private String ithd_trgt_dt;
	private String ithd_itm_cd;
	private String ithd_itm_rcvd_wgt;
	private String ithd_itm_iss_wgt;
	private String ithd_itm_prty;
	private String ithd_itm_typ;
	private String ithd_itm_trn_typ;
	private boolean ithd_iss_auth;
	private boolean ithd_trf_sts;
	private String ithd_crt_id;
	private String ithd_crt_dt;
	private String ithd_updt_id;
	private String ithd_updt_dt;
	private String ithd_mn_prcs_sts;
	@Id
	@GeneratedValue
	public Long getIthd_id() {
		return ithd_id;
	}
	public void setIthd_id(Long ithd_id) {
		this.ithd_id = ithd_id;
	}
	@Index(name="doc_no_index")
	public String getIthd_doc_no() {
		return ithd_doc_no;
	}
	public void setIthd_doc_no(String ithd_doc_no) {
		this.ithd_doc_no = ithd_doc_no;
	}
	public String getIthd_cmy_cd() {
		return ithd_cmy_cd;
	}
	public String getIthd_pdt_qty() {
		return ithd_pdt_qty;
	}
	public void setIthd_pdt_qty(String ithd_pdt_qty) {
		this.ithd_pdt_qty = ithd_pdt_qty;
	}
	public String getIthd_pdt_ctgy() {
		return ithd_pdt_ctgy;
	}
	public void setIthd_pdt_ctgy(String ithd_pdt_ctgy) {
		this.ithd_pdt_ctgy = ithd_pdt_ctgy;
	}
	public String getIthd_ord_typ() {
		return ithd_ord_typ;
	}
	public void setIthd_ord_typ(String ithd_ord_typ) {
		this.ithd_ord_typ = ithd_ord_typ;
	}
	public String getIthd_trgt_dt() {
		return ithd_trgt_dt;
	}
	public void setIthd_trgt_dt(String ithd_trgt_dt) {
		this.ithd_trgt_dt = ithd_trgt_dt;
	}
	public void setIthd_cmy_cd(String ithd_cmy_cd) {
		this.ithd_cmy_cd = ithd_cmy_cd;
	}
	public String getIthd_str_cd() {
		return ithd_str_cd;
	}
	public void setIthd_str_cd(String ithd_str_cd) {
		this.ithd_str_cd = ithd_str_cd;
	}
	@Index(name="frm_dpt_index")
	public String getIthd_frm_dpt_cd() {
		return ithd_frm_dpt_cd;
	}
	public void setIthd_frm_dpt_cd(String ithd_frm_dpt_cd) {
		this.ithd_frm_dpt_cd = ithd_frm_dpt_cd;
	}
	@Index(name="to_dpt_index")
	public String getIthd_to_dpt_cd() {
		return ithd_to_dpt_cd;
	}
	public void setIthd_to_dpt_cd(String ithd_to_dpt_cd) {
		this.ithd_to_dpt_cd = ithd_to_dpt_cd;
	}
	
	public String getIthd_trf_typ() {
		return ithd_trf_typ;
	}
	public void setIthd_trf_typ(String ithd_trf_typ) {
		this.ithd_trf_typ = ithd_trf_typ;
	}

	@Index(name="itm_cd_index")
	public String getIthd_itm_cd() {
		return ithd_itm_cd;
	}
	public void setIthd_itm_cd(String ithd_itm_cd) {
		this.ithd_itm_cd = ithd_itm_cd;
	}
	public String getIthd_itm_iss_wgt() {
		return ithd_itm_iss_wgt;
	}
	public void setIthd_itm_iss_wgt(String ithd_itm_iss_wgt) {
		this.ithd_itm_iss_wgt = ithd_itm_iss_wgt;
	}
	public boolean isIthd_iss_auth() {
		return ithd_iss_auth;
	}
	public void setIthd_iss_auth(boolean ithd_iss_auth) {
		this.ithd_iss_auth = ithd_iss_auth;
	}
	public boolean isIthd_trf_sts() {
		return ithd_trf_sts;
	}
	public void setIthd_trf_sts(boolean ithd_trf_sts) {
		this.ithd_trf_sts = ithd_trf_sts;
	}
	public String getIthd_crt_id() {
		return ithd_crt_id;
	}
	public void setIthd_crt_id(String ithd_crt_id) {
		this.ithd_crt_id = ithd_crt_id;
	}
	public String getIthd_crt_dt() {
		return ithd_crt_dt;
	}
	public void setIthd_crt_dt(String ithd_crt_dt) {
		this.ithd_crt_dt = ithd_crt_dt;
	}
	public String getIthd_updt_id() {
		return ithd_updt_id;
	}
	public void setIthd_updt_id(String ithd_updt_id) {
		this.ithd_updt_id = ithd_updt_id;
	}
	public String getIthd_updt_dt() {
		return ithd_updt_dt;
	}
	public void setIthd_updt_dt(String ithd_updt_dt) {
		this.ithd_updt_dt = ithd_updt_dt;
	}
	@Index(name="ord_no_index")
	public String getIthd_ord_no() {
		return ithd_ord_no;
	}
	public void setIthd_ord_no(String ithd_ord_no) {
		this.ithd_ord_no = ithd_ord_no;
	}
	@Index(name="tree_no_index")
	public String getIthd_tree_no() {
		return ithd_tree_no;
	}
	public void setIthd_tree_no(String ithd_tree_no) {
		this.ithd_tree_no = ithd_tree_no;
	}
	@Override
	public String toString() {
		return "Intl_Trf_Hdr_Dtl [ithd_id=" + ithd_id + ", ithd_doc_no=" + ithd_doc_no + ", ithd_cmy_cd=" + ithd_cmy_cd
				+ ", ithd_str_cd=" + ithd_str_cd + ", ithd_frm_dpt_cd=" + ithd_frm_dpt_cd + ", ithd_to_dpt_cd="
				+ ithd_to_dpt_cd + ", ithd_trf_typ=" + ithd_trf_typ + ", ithd_job_prmy_id=" + ithd_job_prmy_id
				+ ", ithd_cstr_cd=" + ithd_cstr_cd + ", ithd_ord_no=" + ithd_ord_no + ", ithd_tree_no=" + ithd_tree_no
				+ ", ithd_pdt_qty=" + ithd_pdt_qty + ", ithd_pdt_ctgy=" + ithd_pdt_ctgy + ", ithd_ord_typ="
				+ ithd_ord_typ + ", ithd_trgt_dt=" + ithd_trgt_dt + ", ithd_itm_cd=" + ithd_itm_cd
				+ ", ithd_itm_rcvd_wgt=" + ithd_itm_rcvd_wgt + ", ithd_itm_iss_wgt=" + ithd_itm_iss_wgt
				+ ", ithd_itm_prty=" + ithd_itm_prty + ", ithd_itm_typ=" + ithd_itm_typ + ", ithd_itm_trn_typ="
				+ ithd_itm_trn_typ + ", ithd_iss_auth=" + ithd_iss_auth + ", ithd_trf_sts=" + ithd_trf_sts
				+ ", ithd_crt_id=" + ithd_crt_id + ", ithd_crt_dt=" + ithd_crt_dt + ", ithd_updt_id=" + ithd_updt_id
				+ ", ithd_updt_dt=" + ithd_updt_dt + ", ithd_mn_prcs_sts=" + ithd_mn_prcs_sts + "]";
	}
	public String getIthd_itm_typ() {
		return ithd_itm_typ;
	}
	public void setIthd_itm_typ(String ithd_itm_typ) {
		this.ithd_itm_typ = ithd_itm_typ;
	}
	public String getIthd_itm_trn_typ() {
		return ithd_itm_trn_typ;
	}
	public void setIthd_itm_trn_typ(String ithd_itm_trn_typ) {
		this.ithd_itm_trn_typ = ithd_itm_trn_typ;
	}
	public String getIthd_itm_rcvd_wgt() {
		return ithd_itm_rcvd_wgt;
	}
	public void setIthd_itm_rcvd_wgt(String ithd_itm_rcvd_wgt) {
		this.ithd_itm_rcvd_wgt = ithd_itm_rcvd_wgt;
	}
	public Long getIthd_job_prmy_id() {
		return ithd_job_prmy_id;
	}
	public void setIthd_job_prmy_id(Long ithd_job_prmy_id) {
		this.ithd_job_prmy_id = ithd_job_prmy_id;
	}
	public String getIthd_itm_prty() {
		return ithd_itm_prty;
	}
	public void setIthd_itm_prty(String ithd_itm_prty) {
		this.ithd_itm_prty = ithd_itm_prty;
	}
	public String getIthd_mn_prcs_sts() {
		return ithd_mn_prcs_sts;
	}
	public void setIthd_mn_prcs_sts(String ithd_mn_prcs_sts) {
		this.ithd_mn_prcs_sts = ithd_mn_prcs_sts;
	}
	public String getIthd_cstr_cd() {
		return ithd_cstr_cd;
	}
	public void setIthd_cstr_cd(String ithd_cstr_cd) {
		this.ithd_cstr_cd = ithd_cstr_cd;
	}

}
