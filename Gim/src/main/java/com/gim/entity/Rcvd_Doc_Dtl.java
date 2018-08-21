package com.gim.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="rcvd_doc_dtl")
public class Rcvd_Doc_Dtl {
	private Long rdd_id;
	private String rdd_isd_doc_no;
	private String rdd_rcvd_doc_no;
	private String rdd_trf_typ;
	private String rdd_dpt_cd;
	private String rdd_cmy_cd;
	private String rdd_str_cd;
	private String rdd_dc_rcvd;
	private String rdd_itm_cd;
	private String rdd_isd_prim_id;
	private String rdd_itm_typ;
	private String rdd_itm_prty;
	private String rdd_itm_rcvd_wgt;
	private String rdd_itm_semi_wgt;
	private String rdd_itm_dst_wgt;
	private String rdd_tot_rcvd_wgt;
	private String rdd_crt_id;
	private String rdd_crt_dt;
	private String rdd_upt_dt;
	private String rdd_upt_id;
	@Id
	@GeneratedValue
	public Long getRdd_id() {
		return rdd_id;
	}

	public void setRdd_id(Long rdd_id) {
		this.rdd_id = rdd_id;
	}
@Index(name="iss_doc_no")
	public String getRdd_isd_doc_no() {
		return rdd_isd_doc_no;
	}

	public void setRdd_isd_doc_no(String rdd_isd_doc_no) {
		this.rdd_isd_doc_no = rdd_isd_doc_no;
	}
	@Index(name="rcvd_doc_no")
	public String getRdd_rcvd_doc_no() {
		return rdd_rcvd_doc_no;
	}

	public void setRdd_rcvd_doc_no(String rdd_rcvd_doc_no) {
		this.rdd_rcvd_doc_no = rdd_rcvd_doc_no;
	}

	public String getRdd_trf_typ() {
		return rdd_trf_typ;
	}

	public void setRdd_trf_typ(String rdd_trf_typ) {
		this.rdd_trf_typ = rdd_trf_typ;
	}

	public String getRdd_dpt_cd() {
		return rdd_dpt_cd;
	}

	public void setRdd_dpt_cd(String rdd_dpt_cd) {
		this.rdd_dpt_cd = rdd_dpt_cd;
	}

	public String getRdd_itm_dst_wgt() {
		return rdd_itm_dst_wgt;
	}

	public void setRdd_itm_dst_wgt(String rdd_itm_dst_wgt) {
		this.rdd_itm_dst_wgt = rdd_itm_dst_wgt;
	}

	public String getRdd_tot_rcvd_wgt() {
		return rdd_tot_rcvd_wgt;
	}

	public void setRdd_tot_rcvd_wgt(String rdd_tot_rcvd_wgt) {
		this.rdd_tot_rcvd_wgt = rdd_tot_rcvd_wgt;
	}

	public String getRdd_cmy_cd() {
		return rdd_cmy_cd;
	}

	public void setRdd_cmy_cd(String rdd_cmy_cd) {
		this.rdd_cmy_cd = rdd_cmy_cd;
	}

	public String getRdd_str_cd() {
		return rdd_str_cd;
	}

	public void setRdd_str_cd(String rdd_str_cd) {
		this.rdd_str_cd = rdd_str_cd;
	}
	@Index(name="itm_cd")
	public String getRdd_itm_cd() {
		return rdd_itm_cd;
	}

	public void setRdd_itm_cd(String rdd_itm_cd) {
		this.rdd_itm_cd = rdd_itm_cd;
	}

	public String getRdd_itm_prty() {
		return rdd_itm_prty;
	}

	public void setRdd_itm_prty(String rdd_itm_prty) {
		this.rdd_itm_prty = rdd_itm_prty;
	}

	public String getRdd_itm_rcvd_wgt() {
		return rdd_itm_rcvd_wgt;
	}

	public void setRdd_itm_rcvd_wgt(String rdd_itm_rcvd_wgt) {
		this.rdd_itm_rcvd_wgt = rdd_itm_rcvd_wgt;
	}

	public String getRdd_crt_id() {
		return rdd_crt_id;
	}

	public void setRdd_crt_id(String rdd_crt_id) {
		this.rdd_crt_id = rdd_crt_id;
	}

	public String getRdd_crt_dt() {
		return rdd_crt_dt;
	}

	public void setRdd_crt_dt(String rdd_crt_dt) {
		this.rdd_crt_dt = rdd_crt_dt;
	}

	public String getRdd_upt_dt() {
		return rdd_upt_dt;
	}

	public void setRdd_upt_dt(String rdd_upt_dt) {
		this.rdd_upt_dt = rdd_upt_dt;
	}

	public String getRdd_upt_id() {
		return rdd_upt_id;
	}

	public void setRdd_upt_id(String rdd_upt_id) {
		this.rdd_upt_id = rdd_upt_id;
	}

	@Override
	public String toString() {
		return "Rcvd_Doc_Dtl [rdd_id=" + rdd_id + ", rdd_isd_doc_no=" + rdd_isd_doc_no + ", rdd_rcvd_doc_no="
				+ rdd_rcvd_doc_no + ", rdd_trf_typ=" + rdd_trf_typ + ", rdd_dpt_cd=" + rdd_dpt_cd + ", rdd_cmy_cd="
				+ rdd_cmy_cd + ", rdd_str_cd=" + rdd_str_cd + ", rdd_dc_rcvd=" + rdd_dc_rcvd + ", rdd_itm_cd="
				+ rdd_itm_cd + ", rdd_isd_prim_id=" + rdd_isd_prim_id + ", rdd_itm_typ=" + rdd_itm_typ
				+ ", rdd_itm_prty=" + rdd_itm_prty + ", rdd_itm_rcvd_wgt=" + rdd_itm_rcvd_wgt + ", rdd_itm_semi_wgt="
				+ rdd_itm_semi_wgt + ", rdd_itm_dst_wgt=" + rdd_itm_dst_wgt + ", rdd_tot_rcvd_wgt=" + rdd_tot_rcvd_wgt
				+ ", rdd_crt_id=" + rdd_crt_id + ", rdd_crt_dt=" + rdd_crt_dt + ", rdd_upt_dt=" + rdd_upt_dt
				+ ", rdd_upt_id=" + rdd_upt_id + "]";
	}

	public String getRdd_itm_typ() {
		return rdd_itm_typ;
	}

	public void setRdd_itm_typ(String rdd_itm_typ) {
		this.rdd_itm_typ = rdd_itm_typ;
	}

	public String getRdd_itm_semi_wgt() {
		return rdd_itm_semi_wgt;
	}

	public void setRdd_itm_semi_wgt(String rdd_itm_semi_wgt) {
		this.rdd_itm_semi_wgt = rdd_itm_semi_wgt;
	}

	public String getRdd_dc_rcvd() {
		return rdd_dc_rcvd;
	}

	public void setRdd_dc_rcvd(String rdd_dc_rcvd) {
		this.rdd_dc_rcvd = rdd_dc_rcvd;
	}

	public String getRdd_isd_prim_id() {
		return rdd_isd_prim_id;
	}

	public void setRdd_isd_prim_id(String rdd_isd_prim_id) {
		this.rdd_isd_prim_id = rdd_isd_prim_id;
	}
	

}
