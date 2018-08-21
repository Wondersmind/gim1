package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="fnsh_pdt_dtl")
public class Fnsh_Pdt_Dtl implements Serializable{
	private Long fpd_id;
	private String fpd_doc_no;
	private String fpd_mov_doc_no;
	private String fpd_cmy_cd;
	private String fpd_str_cd;
	private String fpd_dpt_cd;
	private String fpd_wrk_cd;
	private String fpd_wrk_typ;
	private String fpd_acpt_rjct;
	private String fpd_acpt_rjct_wgt;
	private String fpd_cross_wgt;
	private String fpd_non_gold_wgt;
	private String fpd_rmrk;
	private String fpd_tgt_dt;
	private String fpd_jo_no;
	private String fpd_pdt_cd;
	private String fpd_jbcd_no;
	private String fpd_btch_no;
	private String fpd_ord_typ;
	private String fpd_ord_ctgy;
	private String fpd_ord_prty;
	private String fpd_ord_qty;
	private String fpd_crt_dt;
	private String fpd_updt_dt;
	private String fpd_crt_id;
	private String fpd_pdt_mvd;
	private String fpd_chld_primid;
	private String fpd_ord_prm_id;
	private String fpd_ord_crnt_sts;
	private boolean fpd_sts;
	private boolean fpd_iss_auth;
	private boolean fpd_rcvd_auth;
	@Override
	public String toString() {
		return "Fnsh_Pdt_Dtl [fpd_id=" + fpd_id + ", fpd_doc_no=" + fpd_doc_no + ", fpd_mov_doc_no=" + fpd_mov_doc_no
				+ ", fpd_cmy_cd=" + fpd_cmy_cd + ", fpd_str_cd=" + fpd_str_cd + ", fpd_dpt_cd=" + fpd_dpt_cd
				+ ", fpd_wrk_cd=" + fpd_wrk_cd + ", fpd_wrk_typ=" + fpd_wrk_typ + ", fpd_acpt_rjct=" + fpd_acpt_rjct
				+ ", fpd_acpt_rjct_wgt=" + fpd_acpt_rjct_wgt + ", fpd_cross_wgt=" + fpd_cross_wgt
				+ ", fpd_non_gold_wgt=" + fpd_non_gold_wgt + ", fpd_rmrk=" + fpd_rmrk + ", fpd_tgt_dt=" + fpd_tgt_dt
				+ ", fpd_jo_no=" + fpd_jo_no + ", fpd_pdt_cd=" + fpd_pdt_cd + ", fpd_jbcd_no=" + fpd_jbcd_no
				+ ", fpd_btch_no=" + fpd_btch_no + ", fpd_ord_typ=" + fpd_ord_typ + ", fpd_ord_ctgy=" + fpd_ord_ctgy
				+ ", fpd_ord_prty=" + fpd_ord_prty + ", fpd_ord_qty=" + fpd_ord_qty + ", fpd_crt_dt=" + fpd_crt_dt
				+ ", fpd_updt_dt=" + fpd_updt_dt + ", fpd_crt_id=" + fpd_crt_id + ", fpd_pdt_mvd=" + fpd_pdt_mvd
				+ ", fpd_chld_primid=" + fpd_chld_primid + ", fpd_ord_prm_id=" + fpd_ord_prm_id + ", fpd_ord_crnt_sts="
				+ fpd_ord_crnt_sts + ", fpd_sts=" + fpd_sts + ", fpd_iss_auth=" + fpd_iss_auth + ", fpd_rcvd_auth="
				+ fpd_rcvd_auth + "]";
	}
	@Id
	@GeneratedValue
	public Long getFpd_id() {
		return fpd_id;
	}
	public void setFpd_id(Long fpd_id) {
		this.fpd_id = fpd_id;
	}
	public String getFpd_doc_no() {
		return fpd_doc_no;
	}
	public void setFpd_doc_no(String fpd_doc_no) {
		this.fpd_doc_no = fpd_doc_no;
	}
	public String getFpd_cmy_cd() {
		return fpd_cmy_cd;
	}
	public void setFpd_cmy_cd(String fpd_cmy_cd) {
		this.fpd_cmy_cd = fpd_cmy_cd;
	}
	public String getFpd_str_cd() {
		return fpd_str_cd;
	}
	public void setFpd_str_cd(String fpd_str_cd) {
		this.fpd_str_cd = fpd_str_cd;
	}
	@Index(name="fpd_dpt_cd")
	public String getFpd_dpt_cd() {
		return fpd_dpt_cd;
	}
	public void setFpd_dpt_cd(String fpd_dpt_cd) {
		this.fpd_dpt_cd = fpd_dpt_cd;
	}
	@Index(name="fpd_wrk_cd")
	public String getFpd_wrk_cd() {
		return fpd_wrk_cd;
	}
	
	public void setFpd_wrk_cd(String fpd_wrk_cd) {
		this.fpd_wrk_cd = fpd_wrk_cd;
	}
	
	public String getFpd_ord_prm_id() {
		return fpd_ord_prm_id;
	}
	public void setFpd_ord_prm_id(String fpd_ord_prm_id) {
		this.fpd_ord_prm_id = fpd_ord_prm_id;
	}
	public String getFpd_ord_crnt_sts() {
		return fpd_ord_crnt_sts;
	}
	public void setFpd_ord_crnt_sts(String fpd_ord_crnt_sts) {
		this.fpd_ord_crnt_sts = fpd_ord_crnt_sts;
	}
	public String getFpd_acpt_rjct() {
		return fpd_acpt_rjct;
	}
	public void setFpd_acpt_rjct(String fpd_acpt_rjct) {
		this.fpd_acpt_rjct = fpd_acpt_rjct;
	}
	public String getFpd_acpt_rjct_wgt() {
		return fpd_acpt_rjct_wgt;
	}
	public void setFpd_acpt_rjct_wgt(String fpd_acpt_rjct_wgt) {
		this.fpd_acpt_rjct_wgt = fpd_acpt_rjct_wgt;
	}
	public String getFpd_rmrk() {
		return fpd_rmrk;
	}
	@Index(name="fpd_rmk")
	public void setFpd_rmrk(String fpd_rmrk) {
		this.fpd_rmrk = fpd_rmrk;
	}
	public String getFpd_tgt_dt() {
		return fpd_tgt_dt;
	}
	public void setFpd_tgt_dt(String fpd_tgt_dt) {
		this.fpd_tgt_dt = fpd_tgt_dt;
	}
	public String getFpd_jo_no() {
		return fpd_jo_no;
	}
	public void setFpd_jo_no(String fpd_jo_no) {
		this.fpd_jo_no = fpd_jo_no;
	}
	@Index(name="fpd_pdt")
	public String getFpd_pdt_cd() {
		return fpd_pdt_cd;
	}
	public void setFpd_pdt_cd(String fpd_pdt_cd) {
		this.fpd_pdt_cd = fpd_pdt_cd;
	}
	@Index(name="fpd_jbcd")
	public String getFpd_jbcd_no() {
		return fpd_jbcd_no;
	}
	public void setFpd_jbcd_no(String fpd_jbcd_no) {
		this.fpd_jbcd_no = fpd_jbcd_no;
	}
	public String getFpd_ord_typ() {
		return fpd_ord_typ;
	}
	public void setFpd_ord_typ(String fpd_ord_typ) {
		this.fpd_ord_typ = fpd_ord_typ;
	}
	public String getFpd_ord_ctgy() {
		return fpd_ord_ctgy;
	}
	public void setFpd_ord_ctgy(String fpd_ord_ctgy) {
		this.fpd_ord_ctgy = fpd_ord_ctgy;
	}
	public String getFpd_ord_prty() {
		return fpd_ord_prty;
	}
	public void setFpd_ord_prty(String fpd_ord_prty) {
		this.fpd_ord_prty = fpd_ord_prty;
	}
	public String getFpd_ord_qty() {
		return fpd_ord_qty;
	}
	public void setFpd_ord_qty(String fpd_ord_qty) {
		this.fpd_ord_qty = fpd_ord_qty;
	}
	public String getFpd_crt_dt() {
		return fpd_crt_dt;
	}
	public void setFpd_crt_dt(String fpd_crt_dt) {
		this.fpd_crt_dt = fpd_crt_dt;
	}
	public String getFpd_updt_dt() {
		return fpd_updt_dt;
	}
	public void setFpd_updt_dt(String fpd_updt_dt) {
		this.fpd_updt_dt = fpd_updt_dt;
	}
	public String getFpd_crt_id() {
		return fpd_crt_id;
	}
	public void setFpd_crt_id(String fpd_crt_id) {
		this.fpd_crt_id = fpd_crt_id;
	}
	public boolean isFpd_sts() {
		return fpd_sts;
	}
	public void setFpd_sts(boolean fpd_sts) {
		this.fpd_sts = fpd_sts;
	}
	public boolean isFpd_iss_auth() {
		return fpd_iss_auth;
	}
	public void setFpd_iss_auth(boolean fpd_iss_auth) {
		this.fpd_iss_auth = fpd_iss_auth;
	}
	public boolean isFpd_rcvd_auth() {
		return fpd_rcvd_auth;
	}
	public void setFpd_rcvd_auth(boolean fpd_rcvd_auth) {
		this.fpd_rcvd_auth = fpd_rcvd_auth;
	}
	public String getFpd_chld_primid() {
		return fpd_chld_primid;
	}
	public void setFpd_chld_primid(String fpd_chld_primid) {
		this.fpd_chld_primid = fpd_chld_primid;
	}
	public String getFpd_cross_wgt() {
		return fpd_cross_wgt;
	}
	public void setFpd_cross_wgt(String fpd_cross_wgt) {
		this.fpd_cross_wgt = fpd_cross_wgt;
	}
	public String getFpd_non_gold_wgt() {
		return fpd_non_gold_wgt;
	}
	public void setFpd_non_gold_wgt(String fpd_non_gold_wgt) {
		this.fpd_non_gold_wgt = fpd_non_gold_wgt;
	}
	public String getFpd_wrk_typ() {
		return fpd_wrk_typ;
	}
	public void setFpd_wrk_typ(String fpd_wrk_typ) {
		this.fpd_wrk_typ = fpd_wrk_typ;
	}
	public String getFpd_btch_no() {
		return fpd_btch_no;
	}
	public void setFpd_btch_no(String fpd_btch_no) {
		this.fpd_btch_no = fpd_btch_no;
	}
	public String getFpd_pdt_mvd() {
		return fpd_pdt_mvd;
	}
	public void setFpd_pdt_mvd(String fpd_pdt_mvd) {
		this.fpd_pdt_mvd = fpd_pdt_mvd;
	}
	public String getFpd_mov_doc_no() {
		return fpd_mov_doc_no;
	}
	public void setFpd_mov_doc_no(String fpd_mov_doc_no) {
		this.fpd_mov_doc_no = fpd_mov_doc_no;
	}
	
}
