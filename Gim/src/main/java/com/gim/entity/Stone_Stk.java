package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="stone_stk")
public class Stone_Stk implements Serializable{
	private Long ss_id;
	private String ss_stn_cd;
	private Double ss_stn_qty;
	private String ss_stn_prty;
	private String ss_cmy_cd;
	private String ss_dpt_cd;
	private Double ss_stn_wgt;
	private String ss_crt_dt;
	private String ss_updt_dt;
	@Id
	@GeneratedValue
	public Long getSs_id() {
		return ss_id;
	}
	public void setSs_id(Long ss_id) {
		this.ss_id = ss_id;
	}
	@Index(name="stn_cd")
	public String getSs_stn_cd() {
		return ss_stn_cd;
	}
	public void setSs_stn_cd(String ss_stn_cd) {
		this.ss_stn_cd = ss_stn_cd;
	}
	public Double getSs_stn_qty() {
		return ss_stn_qty;
	}
	public void setSs_stn_qty(Double ss_stn_qty) {
		this.ss_stn_qty = ss_stn_qty;
	}
	public String getSs_stn_prty() {
		return ss_stn_prty;
	}
	public void setSs_stn_prty(String ss_stn_prty) {
		this.ss_stn_prty = ss_stn_prty;
	}
	public String getSs_cmy_cd() {
		return ss_cmy_cd;
	}
	public void setSs_cmy_cd(String ss_cmy_cd) {
		this.ss_cmy_cd = ss_cmy_cd;
	}
	@Index(name="dpt_cd")
	public String getSs_dpt_cd() {
		return ss_dpt_cd;
	}
	public void setSs_dpt_cd(String ss_dpt_cd) {
		this.ss_dpt_cd = ss_dpt_cd;
	}
	public Double getSs_stn_wgt() {
		return ss_stn_wgt;
	}
	public void setSs_stn_wgt(Double ss_stn_wgt) {
		this.ss_stn_wgt = ss_stn_wgt;
	}
	public String getSs_crt_dt() {
		return ss_crt_dt;
	}
	public void setSs_crt_dt(String ss_crt_dt) {
		this.ss_crt_dt = ss_crt_dt;
	}
	public String getSs_updt_dt() {
		return ss_updt_dt;
	}
	public void setSs_updt_dt(String ss_updt_dt) {
		this.ss_updt_dt = ss_updt_dt;
	}
	@Override
	public String toString() {
		return "Stone_Stk [ss_id=" + ss_id + ", ss_stn_cd=" + ss_stn_cd + ", ss_stn_qty=" + ss_stn_qty
				+ ", ss_stn_prty=" + ss_stn_prty + ", ss_cmy_cd=" + ss_cmy_cd + ", ss_dpt_cd=" + ss_dpt_cd
				+ ", ss_stn_wgt=" + ss_stn_wgt + ", ss_crt_dt=" + ss_crt_dt + ", ss_updt_dt=" + ss_updt_dt + "]";
	}
	
}
