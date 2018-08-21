package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="dc_hdr_dtl")
public class Dc_Hdr_Dtl implements Serializable {
	private Long dhd_id;
	private String dhd_cmy_cd;
	private String dhd_str_cd;
	private String dhd_dpt_cd;
	private String dhd_wrk_cd;
	private String dhd_wrk_typ;
	private String dhd_trf_typ;
	private String dhd_chld_id;
	private String dhd_tst_smp_primid;
	private String dhd_tst_smp_rcvd_wgt;
	private String dhd_isd_prty;
	private String dhd_rcvd_prty1;
	private String dhd_rcvd_prty2;
	private String dhd_rcvd_wgt1;
	private String dhd_rcvd_wgt2;
	private String dhd_isd_trgt_dt;
	private String dhd_isd_job_cd;
	private String dhd_isd_itm_cd;
	private String dhd_isd_qty;
	private String dhd_isd_exst_wgt;
	private String dhd_isd_rqd_bom;
	private String dhd_isd_bom_wgt;
	private String dhd_isd_doc_no;
	private String dhd_rcvd_doc_no;
	private Double dhd_scrp_wgt;
	private Double dhd_fnsh_wgt;
	private Double dhd_rcvd_wgt;
	private Double dhd_isd_wgt;
	private String dhd_smpl_jsn;
	private Double dhd_bal_wgt;
	private String dhd_crt_dt;
	private String dhd_upd_dt;
	private String dhd_crt_id;
	private boolean dhd_iss_auth;
	private boolean dhd_rcvd_auth;
	private boolean dhs_sts;
	
	@Id
	@GeneratedValue
	public Long getDhd_id() {
		return dhd_id;
	}
	public void setDhd_id(Long dhd_id) {
		this.dhd_id = dhd_id;
	}
	public String getDhd_cmy_cd() {
		return dhd_cmy_cd;
	}
	public void setDhd_cmy_cd(String dhd_cmy_cd) {
		this.dhd_cmy_cd = dhd_cmy_cd;
	}
	public String getDhd_str_cd() {
		return dhd_str_cd;
	}
	public void setDhd_str_cd(String dhd_str_cd) {
		this.dhd_str_cd = dhd_str_cd;
	}
	@Index(name="dpt")
	public String getDhd_dpt_cd() {
		return dhd_dpt_cd;
	}
	public void setDhd_dpt_cd(String dhd_dpt_cd) {
		this.dhd_dpt_cd = dhd_dpt_cd;
	}
	@Index(name="wrkcd")
	public String getDhd_wrk_cd() {
		return dhd_wrk_cd;
	}
	
	public void setDhd_wrk_cd(String dhd_wrk_cd) {
		this.dhd_wrk_cd = dhd_wrk_cd;
	}
	public String getDhd_trf_typ() {
		return dhd_trf_typ;
	}
	public void setDhd_trf_typ(String dhd_trf_typ) {
		this.dhd_trf_typ = dhd_trf_typ;
	}
	@Index(name="chldid")
	public String getDhd_chld_id() {
		return dhd_chld_id;
	}
	public void setDhd_chld_id(String dhd_chld_id) {
		this.dhd_chld_id = dhd_chld_id;
	}
	public String getDhd_isd_doc_no() {
		return dhd_isd_doc_no;
	}
	public void setDhd_isd_doc_no(String dhd_isd_doc_no) {
		this.dhd_isd_doc_no = dhd_isd_doc_no;
	}
	public String getDhd_rcvd_doc_no() {
		return dhd_rcvd_doc_no;
	}
	public void setDhd_rcvd_doc_no(String dhd_rcvd_doc_no) {
		this.dhd_rcvd_doc_no = dhd_rcvd_doc_no;
	}
	public Double getDhd_rcvd_wgt() {
		return dhd_rcvd_wgt;
	}
	public void setDhd_rcvd_wgt(Double dhd_rcvd_wgt) {
		this.dhd_rcvd_wgt = dhd_rcvd_wgt;
	}
	public Double getDhd_isd_wgt() {
		return dhd_isd_wgt;
	}
	public void setDhd_isd_wgt(Double dhd_isd_wgt) {
		this.dhd_isd_wgt = dhd_isd_wgt;
	}
	public Double getDhd_bal_wgt() {
		return dhd_bal_wgt;
	}
	public void setDhd_bal_wgt(Double dhd_bal_wgt) {
		this.dhd_bal_wgt = dhd_bal_wgt;
	}
	public String getDhd_crt_dt() {
		return dhd_crt_dt;
	}
	public void setDhd_crt_dt(String dhd_crt_dt) {
		this.dhd_crt_dt = dhd_crt_dt;
	}
	public String getDhd_upd_dt() {
		return dhd_upd_dt;
	}
	public void setDhd_upd_dt(String dhd_upd_dt) {
		this.dhd_upd_dt = dhd_upd_dt;
	}
	public String getDhd_crt_id() {
		return dhd_crt_id;
	}
	public void setDhd_crt_id(String dhd_crt_id) {
		this.dhd_crt_id = dhd_crt_id;
	}
	public boolean isDhd_iss_auth() {
		return dhd_iss_auth;
	}
	public void setDhd_iss_auth(boolean dhd_iss_auth) {
		this.dhd_iss_auth = dhd_iss_auth;
	}
	public boolean isDhd_rcvd_auth() {
		return dhd_rcvd_auth;
	}
	public void setDhd_rcvd_auth(boolean dhd_rcvd_auth) {
		this.dhd_rcvd_auth = dhd_rcvd_auth;
	}
	public boolean isDhs_sts() {
		return dhs_sts;
	}
	public void setDhs_sts(boolean dhs_sts) {
		this.dhs_sts = dhs_sts;
	}
	@Override
	public String toString() {
		return "Dc_Hdr_Dtl [dhd_id=" + dhd_id + ", dhd_cmy_cd=" + dhd_cmy_cd + ", dhd_str_cd=" + dhd_str_cd
				+ ", dhd_dpt_cd=" + dhd_dpt_cd + ", dhd_wrk_cd=" + dhd_wrk_cd + ", dhd_wrk_typ=" + dhd_wrk_typ
				+ ", dhd_trf_typ=" + dhd_trf_typ + ", dhd_chld_id=" + dhd_chld_id + ", dhd_tst_smp_primid="
				+ dhd_tst_smp_primid + ", dhd_tst_smp_rcvd_wgt=" + dhd_tst_smp_rcvd_wgt + ", dhd_isd_prty="
				+ dhd_isd_prty + ", dhd_rcvd_prty1=" + dhd_rcvd_prty1 + ", dhd_rcvd_prty2=" + dhd_rcvd_prty2
				+ ", dhd_rcvd_wgt1=" + dhd_rcvd_wgt1 + ", dhd_rcvd_wgt2=" + dhd_rcvd_wgt2 + ", dhd_isd_trgt_dt="
				+ dhd_isd_trgt_dt + ", dhd_isd_job_cd=" + dhd_isd_job_cd + ", dhd_isd_itm_cd=" + dhd_isd_itm_cd
				+ ", dhd_isd_qty=" + dhd_isd_qty + ", dhd_isd_exst_wgt=" + dhd_isd_exst_wgt + ", dhd_isd_rqd_bom="
				+ dhd_isd_rqd_bom + ", dhd_isd_bom_wgt=" + dhd_isd_bom_wgt + ", dhd_isd_doc_no=" + dhd_isd_doc_no
				+ ", dhd_rcvd_doc_no=" + dhd_rcvd_doc_no + ", dhd_scrp_wgt=" + dhd_scrp_wgt + ", dhd_fnsh_wgt="
				+ dhd_fnsh_wgt + ", dhd_rcvd_wgt=" + dhd_rcvd_wgt + ", dhd_isd_wgt=" + dhd_isd_wgt + ", dhd_smpl_jsn="
				+ dhd_smpl_jsn + ", dhd_bal_wgt=" + dhd_bal_wgt + ", dhd_crt_dt=" + dhd_crt_dt + ", dhd_upd_dt="
				+ dhd_upd_dt + ", dhd_crt_id=" + dhd_crt_id + ", dhd_iss_auth=" + dhd_iss_auth + ", dhd_rcvd_auth="
				+ dhd_rcvd_auth + ", dhs_sts=" + dhs_sts + "]";
	}
	public String getDhd_isd_trgt_dt() {
		return dhd_isd_trgt_dt;
	}
	public void setDhd_isd_trgt_dt(String dhd_isd_trgt_dt) {
		this.dhd_isd_trgt_dt = dhd_isd_trgt_dt;
	}
	public String getDhd_isd_job_cd() {
		return dhd_isd_job_cd;
	}
	public void setDhd_isd_job_cd(String dhd_isd_job_cd) {
		this.dhd_isd_job_cd = dhd_isd_job_cd;
	}
	public String getDhd_isd_itm_cd() {
		return dhd_isd_itm_cd;
	}
	public void setDhd_isd_itm_cd(String dhd_isd_itm_cd) {
		this.dhd_isd_itm_cd = dhd_isd_itm_cd;
	}
	public String getDhd_isd_qty() {
		return dhd_isd_qty;
	}
	public void setDhd_isd_qty(String dhd_isd_qty) {
		this.dhd_isd_qty = dhd_isd_qty;
	}
	public String getDhd_isd_exst_wgt() {
		return dhd_isd_exst_wgt;
	}
	public void setDhd_isd_exst_wgt(String dhd_isd_exst_wgt) {
		this.dhd_isd_exst_wgt = dhd_isd_exst_wgt;
	}
	public String getDhd_isd_rqd_bom() {
		return dhd_isd_rqd_bom;
	}
	public void setDhd_isd_rqd_bom(String dhd_isd_rqd_bom) {
		this.dhd_isd_rqd_bom = dhd_isd_rqd_bom;
	}
	public String getDhd_isd_bom_wgt() {
		return dhd_isd_bom_wgt;
	}
	public void setDhd_isd_bom_wgt(String dhd_isd_bom_wgt) {
		this.dhd_isd_bom_wgt = dhd_isd_bom_wgt;
	}
	public String getDhd_wrk_typ() {
		return dhd_wrk_typ;
	}
	public void setDhd_wrk_typ(String dhd_wrk_typ) {
		this.dhd_wrk_typ = dhd_wrk_typ;
	}
	public Double getDhd_scrp_wgt() {
		return dhd_scrp_wgt;
	}
	public void setDhd_scrp_wgt(Double dhd_scrp_wgt) {
		this.dhd_scrp_wgt = dhd_scrp_wgt;
	}
	public Double getDhd_fnsh_wgt() {
		return dhd_fnsh_wgt;
	}
	public void setDhd_fnsh_wgt(Double dhd_fnsh_wgt) {
		this.dhd_fnsh_wgt = dhd_fnsh_wgt;
	}
	public String getDhd_isd_prty() {
		return dhd_isd_prty;
	}
	public void setDhd_isd_prty(String dhd_isd_prty) {
		this.dhd_isd_prty = dhd_isd_prty;
	}
	public String getDhd_rcvd_prty1() {
		return dhd_rcvd_prty1;
	}
	public void setDhd_rcvd_prty1(String dhd_rcvd_prty1) {
		this.dhd_rcvd_prty1 = dhd_rcvd_prty1;
	}
	public String getDhd_rcvd_prty2() {
		return dhd_rcvd_prty2;
	}
	public void setDhd_rcvd_prty2(String dhd_rcvd_prty2) {
		this.dhd_rcvd_prty2 = dhd_rcvd_prty2;
	}
	public String getDhd_rcvd_wgt1() {
		return dhd_rcvd_wgt1;
	}
	public void setDhd_rcvd_wgt1(String dhd_rcvd_wgt1) {
		this.dhd_rcvd_wgt1 = dhd_rcvd_wgt1;
	}
	public String getDhd_rcvd_wgt2() {
		return dhd_rcvd_wgt2;
	}
	public void setDhd_rcvd_wgt2(String dhd_rcvd_wgt2) {
		this.dhd_rcvd_wgt2 = dhd_rcvd_wgt2;
	}
	public String getDhd_smpl_jsn() {
		return dhd_smpl_jsn;
	}
	public void setDhd_smpl_jsn(String dhd_smpl_jsn) {
		this.dhd_smpl_jsn = dhd_smpl_jsn;
	}
	public String getDhd_tst_smp_primid() {
		return dhd_tst_smp_primid;
	}
	public void setDhd_tst_smp_primid(String dhd_tst_smp_primid) {
		this.dhd_tst_smp_primid = dhd_tst_smp_primid;
	}
	public String getDhd_tst_smp_rcvd_wgt() {
		return dhd_tst_smp_rcvd_wgt;
	}
	public void setDhd_tst_smp_rcvd_wgt(String dhd_tst_smp_rcvd_wgt) {
		this.dhd_tst_smp_rcvd_wgt = dhd_tst_smp_rcvd_wgt;
	}
	
}
