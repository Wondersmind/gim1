package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="rcvy_emp_stk")
public class Rcvy_Emp_Stk implements Serializable{

	private Long res_id;
	private String res_cmy_cd;
	private String res_str_cd;
	private String res_dpt_cd;
	private String res_wrk_cd;
	private String res_wrk_typ;
	private String res_dscr;
	private String res_rcvy_bal;
	private String res_rm_frm_rcvy;
	private Double res_pure_gold_wgt;
	private String  res_pg_rcvd;
	private String  res_pg_bal;
	private String res_rqd_prty;
	private String res_strt_dt;
	private String res_end_dt;
	private String res_rcvy;
	private String res_rcvy_mtl;
	private String res_mtl_prty;
	private String res_cnvt_rqd_pty;
	private String res_bal;
	private String res_rmrk;
	private String res_crt_dt;
	private String res_updt_dt;
	private String res_crt_id;
	@Id
	@GeneratedValue
	public Long getRes_id() {
		return res_id;
	}
	public void setRes_id(Long res_id) {
		this.res_id = res_id;
	}
	public String getRes_cmy_cd() {
		return res_cmy_cd;
	}
	public void setRes_cmy_cd(String res_cmy_cd) {
		this.res_cmy_cd = res_cmy_cd;
	}
	public String getRes_str_cd() {
		return res_str_cd;
	}
	public void setRes_str_cd(String res_str_cd) {
		this.res_str_cd = res_str_cd;
	}
	
	@Index(name="dpt_cd")
	public String getRes_dpt_cd() {
		return res_dpt_cd;
	}
	public void setRes_dpt_cd(String res_dpt_cd) {
		this.res_dpt_cd = res_dpt_cd;
	}
	@Index(name="wrk_cd")
	public String getRes_wrk_cd() {
		return res_wrk_cd;
	}
	public void setRes_wrk_cd(String res_wrk_cd) {
		this.res_wrk_cd = res_wrk_cd;
	}
	public String getRes_dscr() {
		return res_dscr;
	}
	public void setRes_dscr(String res_dscr) {
		this.res_dscr = res_dscr;
	}
	public String getRes_rcvy_bal() {
		return res_rcvy_bal;
	}
	public void setRes_rcvy_bal(String res_rcvy_bal) {
		this.res_rcvy_bal = res_rcvy_bal;
	}
	public Double getRes_pure_gold_wgt() {
		return res_pure_gold_wgt;
	}
	public void setRes_pure_gold_wgt(Double res_pure_gold_wgt) {
		this.res_pure_gold_wgt = res_pure_gold_wgt;
	}
	public String getRes_rqd_prty() {
		return res_rqd_prty;
	}
	public void setRes_rqd_prty(String res_rqd_prty) {
		this.res_rqd_prty = res_rqd_prty;
	}
	public String getRes_strt_dt() {
		return res_strt_dt;
	}
	public void setRes_strt_dt(String res_strt_dt) {
		this.res_strt_dt = res_strt_dt;
	}
	public String getRes_end_dt() {
		return res_end_dt;
	}
	public void setRes_end_dt(String res_end_dt) {
		this.res_end_dt = res_end_dt;
	}
	public String getRes_rcvy() {
		return res_rcvy;
	}
	public void setRes_rcvy(String res_rcvy) {
		this.res_rcvy = res_rcvy;
	}
	public String getRes_rcvy_mtl() {
		return res_rcvy_mtl;
	}
	public void setRes_rcvy_mtl(String res_rcvy_mtl) {
		this.res_rcvy_mtl = res_rcvy_mtl;
	}
	public String getRes_mtl_prty() {
		return res_mtl_prty;
	}
	public void setRes_mtl_prty(String res_mtl_prty) {
		this.res_mtl_prty = res_mtl_prty;
	}
	public String getRes_cnvt_rqd_pty() {
		return res_cnvt_rqd_pty;
	}
	public void setRes_cnvt_rqd_pty(String res_cnvt_rqd_pty) {
		this.res_cnvt_rqd_pty = res_cnvt_rqd_pty;
	}
	public String getRes_bal() {
		return res_bal;
	}
	public void setRes_bal(String res_bal) {
		this.res_bal = res_bal;
	}
	public String getRes_rmrk() {
		return res_rmrk;
	}
	public void setRes_rmrk(String res_rmrk) {
		this.res_rmrk = res_rmrk;
	}
	public String getRes_crt_dt() {
		return res_crt_dt;
	}
	public void setRes_crt_dt(String res_crt_dt) {
		this.res_crt_dt = res_crt_dt;
	}
	public String getRes_updt_dt() {
		return res_updt_dt;
	}
	public void setRes_updt_dt(String res_updt_dt) {
		this.res_updt_dt = res_updt_dt;
	}
	public String getRes_crt_id() {
		return res_crt_id;
	}
	public void setRes_crt_id(String res_crt_id) {
		this.res_crt_id = res_crt_id;
	}
	@Override
	public String toString() {
		return "Rcvy_Emp_Stk [res_id=" + res_id + ", res_cmy_cd=" + res_cmy_cd + ", res_str_cd=" + res_str_cd
				+ ", res_dpt_cd=" + res_dpt_cd + ", res_wrk_cd=" + res_wrk_cd + ", res_wrk_typ=" + res_wrk_typ
				+ ", res_dscr=" + res_dscr + ", res_rcvy_bal=" + res_rcvy_bal + ", res_rm_frm_rcvy=" + res_rm_frm_rcvy
				+ ", res_pure_gold_wgt=" + res_pure_gold_wgt + ", res_pg_rcvd=" + res_pg_rcvd + ", res_pg_bal="
				+ res_pg_bal + ", res_rqd_prty=" + res_rqd_prty + ", res_strt_dt=" + res_strt_dt + ", res_end_dt="
				+ res_end_dt + ", res_rcvy=" + res_rcvy + ", res_rcvy_mtl=" + res_rcvy_mtl + ", res_mtl_prty="
				+ res_mtl_prty + ", res_cnvt_rqd_pty=" + res_cnvt_rqd_pty + ", res_bal=" + res_bal + ", res_rmrk="
				+ res_rmrk + ", res_crt_dt=" + res_crt_dt + ", res_updt_dt=" + res_updt_dt + ", res_crt_id="
				+ res_crt_id + "]";
	}
	public String getRes_rm_frm_rcvy() {
		return res_rm_frm_rcvy;
	}
	public void setRes_rm_frm_rcvy(String res_rm_frm_rcvy) {
		this.res_rm_frm_rcvy = res_rm_frm_rcvy;
	}
	public String getRes_pg_rcvd() {
		return res_pg_rcvd;
	}
	public void setRes_pg_rcvd(String res_pg_rcvd) {
		this.res_pg_rcvd = res_pg_rcvd;
	}
	public String getRes_pg_bal() {
		return res_pg_bal;
	}
	public void setRes_pg_bal(String res_pg_bal) {
		this.res_pg_bal = res_pg_bal;
	}
	public String getRes_wrk_typ() {
		return res_wrk_typ;
	}
	public void setRes_wrk_typ(String res_wrk_typ) {
		this.res_wrk_typ = res_wrk_typ;
	}
	
	

}
