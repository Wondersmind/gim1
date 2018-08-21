package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="stk_mst")
public class Stk_Mst implements Serializable{
	private Long stm_id;
	private String stm_str_cd;
	private String stm_cmy_cd;
	private String stm_dpt_cd;
	private String stm_itm_cd;
	private String stm_stk_trn_typ;
	private String stm_stk_itm_typ;
	private String stm_rcvd_stk_wgt;
	private String stm_rcvd_stk_prty;
	private String stm_stk_pure_gld_wgt;
	private String stm_stk_pure_doc_val;
	private String stm_stk_pure_pgm_cal;
	private String stm_stk_crt_dt;
	private String stm_stk_crt_id;
	private String stm_stk_updt_dt;
	private String stm_stk_updt_id;
	@Id
	@GeneratedValue
	public Long getStm_id() {
		return stm_id;
	}
	public void setStm_id(Long stm_id) {
		this.stm_id = stm_id;
	}
	public String getStm_str_cd() {
		return stm_str_cd;
	}
	public void setStm_str_cd(String stm_str_cd) {
		this.stm_str_cd = stm_str_cd;
	}
	public String getStm_cmy_cd() {
		return stm_cmy_cd;
	}
	public void setStm_cmy_cd(String stm_cmy_cd) {
		this.stm_cmy_cd = stm_cmy_cd;
	}
	@Index(name="itm_cd_index")
	public String getStm_itm_cd() {
		return stm_itm_cd;
	}
	public void setStm_itm_cd(String stm_itm_cd) {
		this.stm_itm_cd = stm_itm_cd;
	}

	public String getStm_rcvd_stk_wgt() {
		return stm_rcvd_stk_wgt;
	}
	public void setStm_rcvd_stk_wgt(String stm_rcvd_stk_wgt) {
		this.stm_rcvd_stk_wgt = stm_rcvd_stk_wgt;
	}
	public String getStm_rcvd_stk_prty() {
		return stm_rcvd_stk_prty;
	}
	public void setStm_rcvd_stk_prty(String stm_rcvd_stk_prty) {
		this.stm_rcvd_stk_prty = stm_rcvd_stk_prty;
	}
	public String getStm_stk_pure_gld_wgt() {
		return stm_stk_pure_gld_wgt;
	}
	public void setStm_stk_pure_gld_wgt(String stm_stk_pure_gld_wgt) {
		this.stm_stk_pure_gld_wgt = stm_stk_pure_gld_wgt;
	}
	public String getStm_stk_pure_doc_val() {
		return stm_stk_pure_doc_val;
	}
	public void setStm_stk_pure_doc_val(String stm_stk_pure_doc_val) {
		this.stm_stk_pure_doc_val = stm_stk_pure_doc_val;
	}
	public String getStm_stk_pure_pgm_cal() {
		return stm_stk_pure_pgm_cal;
	}
	public void setStm_stk_pure_pgm_cal(String stm_stk_pure_pgm_cal) {
		this.stm_stk_pure_pgm_cal = stm_stk_pure_pgm_cal;
	}
	public String getStm_stk_crt_dt() {
		return stm_stk_crt_dt;
	}
	public void setStm_stk_crt_dt(String stm_stk_crt_dt) {
		this.stm_stk_crt_dt = stm_stk_crt_dt;
	}
	public String getStm_stk_crt_id() {
		return stm_stk_crt_id;
	}
	public void setStm_stk_crt_id(String stm_stk_crt_id) {
		this.stm_stk_crt_id = stm_stk_crt_id;
	}
	public String getStm_stk_updt_dt() {
		return stm_stk_updt_dt;
	}
	public void setStm_stk_updt_dt(String stm_stk_updt_dt) {
		this.stm_stk_updt_dt = stm_stk_updt_dt;
	}
	public String getStm_stk_updt_id() {
		return stm_stk_updt_id;
	}
	public void setStm_stk_updt_id(String stm_stk_updt_id) {
		this.stm_stk_updt_id = stm_stk_updt_id;
	}
	public String getStm_stk_trn_typ() {
		return stm_stk_trn_typ;
	}
	public void setStm_stk_trn_typ(String stm_stk_trn_typ) {
		this.stm_stk_trn_typ = stm_stk_trn_typ;
	}
	public String getStm_stk_itm_typ() {
		return stm_stk_itm_typ;
	}
	public void setStm_stk_itm_typ(String stm_stk_itm_typ) {
		this.stm_stk_itm_typ = stm_stk_itm_typ;
	}
	@Override
	public String toString() {
		return "Stk_Mst [stm_id=" + stm_id + ", stm_str_cd=" + stm_str_cd + ", stm_cmy_cd=" + stm_cmy_cd
				+ ", stm_dpt_cd=" + stm_dpt_cd + ", stm_itm_cd=" + stm_itm_cd + ", stm_stk_trn_typ=" + stm_stk_trn_typ
				+ ", stm_stk_itm_typ=" + stm_stk_itm_typ + ", stm_rcvd_stk_wgt=" + stm_rcvd_stk_wgt
				+ ", stm_rcvd_stk_prty=" + stm_rcvd_stk_prty + ", stm_stk_pure_gld_wgt=" + stm_stk_pure_gld_wgt
				+ ", stm_stk_pure_doc_val=" + stm_stk_pure_doc_val + ", stm_stk_pure_pgm_cal=" + stm_stk_pure_pgm_cal
				+ ", stm_stk_crt_dt=" + stm_stk_crt_dt + ", stm_stk_crt_id=" + stm_stk_crt_id + ", stm_stk_updt_dt="
				+ stm_stk_updt_dt + ", stm_stk_updt_id=" + stm_stk_updt_id + "]";
	}
	public String getStm_dpt_cd() {
		return stm_dpt_cd;
	}
	public void setStm_dpt_cd(String stm_dpt_cd) {
		this.stm_dpt_cd = stm_dpt_cd;
	}
	
}
