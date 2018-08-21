package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="rcvy_hdr_dtl")
public class Rcvy_Hdr_Dtl implements Serializable{
	private Long rhd_id;
	private String rhd_cmy_cd;
	private String rhd_str_cd;
	private String rhd_doc_no;
	private String rhd_dpt_cd;
	private String rhd_wrk_cd;
	private String rhd_wrk_typ;
	private String rhd_dscr;
	private String rhd_rm_frm_rcvy;
	private String rhd_rcvy_bal;
	private String rhd_dc_isd;
	private String rhd_dc_rcvd;
	private Double rhd_pure_gold_wgt;
	private String rhd_pg_rcvd;
	public String getRhd_pg_rcvd() {
		return rhd_pg_rcvd;
	}


	public void setRhd_pg_rcvd(String rhd_pg_rcvd) {
		this.rhd_pg_rcvd = rhd_pg_rcvd;
	}


	public String getRhd_pg_bal() {
		return rhd_pg_bal;
	}


	public void setRhd_pg_bal(String rhd_pg_bal) {
		this.rhd_pg_bal = rhd_pg_bal;
	}


	private String rhd_pg_bal;
	private String rhd_rqd_prty;
	private String rhd_strt_dt;
	private String rhd_end_dt;
	private String rhd_rcvy;
	private String rhd_rcvy_mtl;
	private String rhd_mtl_prty;
	private String rhd_cnvt_rqd_pty;
	private String rhd_bal;
	private String rhd_rmrk;
	private String rhd_crt_dt;
	private String rhd_updt_dt;
	private String rhd_crt_id;
	private boolean rhd_sts;
	private boolean rhd_iss_auth;
	private boolean rhd_rcvd_auth;
	
	@Id
	@GeneratedValue
	public Long getRhd_id() {
		return rhd_id;
	}


	public void setRhd_id(Long rhd_id) {
		this.rhd_id = rhd_id;
	}


	public String getRhd_cmy_cd() {
		return rhd_cmy_cd;
	}


	public void setRhd_cmy_cd(String rhd_cmy_cd) {
		this.rhd_cmy_cd = rhd_cmy_cd;
	}


	public String getRhd_str_cd() {
		return rhd_str_cd;
	}


	public void setRhd_str_cd(String rhd_str_cd) {
		this.rhd_str_cd = rhd_str_cd;
	}

	@Index(name="doc_no")
	public String getRhd_doc_no() {
		return rhd_doc_no;
	}


	public void setRhd_doc_no(String rhd_doc_no) {
		this.rhd_doc_no = rhd_doc_no;
	}

@Index(name="dpt_cd")
	public String getRhd_dpt_cd() {
		return rhd_dpt_cd;
	}


	public void setRhd_dpt_cd(String rhd_dpt_cd) {
		this.rhd_dpt_cd = rhd_dpt_cd;
	}

@Index(name="wrk_cd")
	public String getRhd_wrk_cd() {
		return rhd_wrk_cd;
	}


	public void setRhd_wrk_cd(String rhd_wrk_cd) {
		this.rhd_wrk_cd = rhd_wrk_cd;
	}

	public String getRhd_dscr() {
		return rhd_dscr;
	}


	public void setRhd_dscr(String rhd_dscr) {
		this.rhd_dscr = rhd_dscr;
	}


	public String getRhd_rcvy_bal() {
		return rhd_rcvy_bal;
	}


	public void setRhd_rcvy_bal(String rhd_rcvy_bal) {
		this.rhd_rcvy_bal = rhd_rcvy_bal;
	}


	public String getRhd_rqd_prty() {
		return rhd_rqd_prty;
	}


	public void setRhd_rqd_prty(String rhd_rqd_prty) {
		this.rhd_rqd_prty = rhd_rqd_prty;
	}


	public String getRhd_strt_dt() {
		return rhd_strt_dt;
	}


	public void setRhd_strt_dt(String rhd_strt_dt) {
		this.rhd_strt_dt = rhd_strt_dt;
	}


	public String getRhd_end_dt() {
		return rhd_end_dt;
	}


	public void setRhd_end_dt(String rhd_end_dt) {
		this.rhd_end_dt = rhd_end_dt;
	}


	public String getRhd_rcvy() {
		return rhd_rcvy;
	}


	public void setRhd_rcvy(String rhd_rcvy) {
		this.rhd_rcvy = rhd_rcvy;
	}


	public String getRhd_rcvy_mtl() {
		return rhd_rcvy_mtl;
	}


	public void setRhd_rcvy_mtl(String rhd_rcvy_mtl) {
		this.rhd_rcvy_mtl = rhd_rcvy_mtl;
	}


	public String getRhd_mtl_prty() {
		return rhd_mtl_prty;
	}


	public void setRhd_mtl_prty(String rhd_mtl_prty) {
		this.rhd_mtl_prty = rhd_mtl_prty;
	}


	public String getRhd_cnvt_rqd_pty() {
		return rhd_cnvt_rqd_pty;
	}


	public void setRhd_cnvt_rqd_pty(String rhd_cnvt_rqd_pty) {
		this.rhd_cnvt_rqd_pty = rhd_cnvt_rqd_pty;
	}


	public String getRhd_bal() {
		return rhd_bal;
	}


	public void setRhd_bal(String rhd_bal) {
		this.rhd_bal = rhd_bal;
	}

	public String getRhd_rmrk() {
		return rhd_rmrk;
	}


	public void setRhd_rmrk(String rhd_rmrk) {
		this.rhd_rmrk = rhd_rmrk;
	}


	public String getRhd_crt_dt() {
		return rhd_crt_dt;
	}


	public void setRhd_crt_dt(String rhd_crt_dt) {
		this.rhd_crt_dt = rhd_crt_dt;
	}


	public String getRhd_updt_dt() {
		return rhd_updt_dt;
	}


	public void setRhd_updt_dt(String rhd_updt_dt) {
		this.rhd_updt_dt = rhd_updt_dt;
	}


	public String getRhd_crt_id() {
		return rhd_crt_id;
	}


	public void setRhd_crt_id(String rhd_crt_id) {
		this.rhd_crt_id = rhd_crt_id;
	}


	public boolean isRhd_sts() {
		return rhd_sts;
	}


	public void setRhd_sts(boolean rhd_sts) {
		this.rhd_sts = rhd_sts;
	}


	public boolean isRhd_iss_auth() {
		return rhd_iss_auth;
	}


	public void setRhd_iss_auth(boolean rhd_iss_auth) {
		this.rhd_iss_auth = rhd_iss_auth;
	}


	public boolean isRhd_rcvd_auth() {
		return rhd_rcvd_auth;
	}


	public void setRhd_rcvd_auth(boolean rhd_rcvd_auth) {
		this.rhd_rcvd_auth = rhd_rcvd_auth;
	}


	@Override
	public String toString() {
		return "Rcvy_Hdr_Dtl [rhd_id=" + rhd_id + ", rhd_cmy_cd=" + rhd_cmy_cd + ", rhd_str_cd=" + rhd_str_cd
				+ ", rhd_doc_no=" + rhd_doc_no + ", rhd_dpt_cd=" + rhd_dpt_cd + ", rhd_wrk_cd=" + rhd_wrk_cd
				+ ", rhd_wrk_typ=" + rhd_wrk_typ + ", rhd_dscr=" + rhd_dscr + ", rhd_rm_frm_rcvy=" + rhd_rm_frm_rcvy
				+ ", rhd_rcvy_bal=" + rhd_rcvy_bal + ", rhd_dc_isd=" + rhd_dc_isd + ", rhd_dc_rcvd=" + rhd_dc_rcvd
				+ ", rhd_pure_gold_wgt=" + rhd_pure_gold_wgt + ", rhd_pg_rcvd=" + rhd_pg_rcvd + ", rhd_pg_bal="
				+ rhd_pg_bal + ", rhd_rqd_prty=" + rhd_rqd_prty + ", rhd_strt_dt=" + rhd_strt_dt + ", rhd_end_dt="
				+ rhd_end_dt + ", rhd_rcvy=" + rhd_rcvy + ", rhd_rcvy_mtl=" + rhd_rcvy_mtl + ", rhd_mtl_prty="
				+ rhd_mtl_prty + ", rhd_cnvt_rqd_pty=" + rhd_cnvt_rqd_pty + ", rhd_bal=" + rhd_bal + ", rhd_rmrk="
				+ rhd_rmrk + ", rhd_crt_dt=" + rhd_crt_dt + ", rhd_updt_dt=" + rhd_updt_dt + ", rhd_crt_id="
				+ rhd_crt_id + ", rhd_sts=" + rhd_sts + ", rhd_iss_auth=" + rhd_iss_auth + ", rhd_rcvd_auth="
				+ rhd_rcvd_auth + "]";
	}


	public Double getRhd_pure_gold_wgt() {
		return rhd_pure_gold_wgt;
	}


	public void setRhd_pure_gold_wgt(Double rhd_pure_gold_wgt) {
		this.rhd_pure_gold_wgt = rhd_pure_gold_wgt;
	}


	public String getRhd_rm_frm_rcvy() {
		return rhd_rm_frm_rcvy;
	}


	public void setRhd_rm_frm_rcvy(String rhd_rm_frm_rcvy) {
		this.rhd_rm_frm_rcvy = rhd_rm_frm_rcvy;
	}


	public String getRhd_wrk_typ() {
		return rhd_wrk_typ;
	}


	public void setRhd_wrk_typ(String rhd_wrk_typ) {
		this.rhd_wrk_typ = rhd_wrk_typ;
	}


	public String getRhd_dc_isd() {
		return rhd_dc_isd;
	}


	public void setRhd_dc_isd(String rhd_dc_isd) {
		this.rhd_dc_isd = rhd_dc_isd;
	}


	public String getRhd_dc_rcvd() {
		return rhd_dc_rcvd;
	}


	public void setRhd_dc_rcvd(String rhd_dc_rcvd) {
		this.rhd_dc_rcvd = rhd_dc_rcvd;
	}
	
}
