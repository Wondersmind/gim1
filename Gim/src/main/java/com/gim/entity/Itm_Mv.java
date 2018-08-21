package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="itm_mv")
public class Itm_Mv implements Serializable{
	private Long im_id;
	private String im_cmy_cd;
	private String im_str_cd;
	private String im_trn_typ;
	private String im_trn_nmb;
	private String im_itm_cd;
	private String im_itm_wgt;
	private String im_itm_prty;
	private String im_itm_pure_gld_wgt;
	private String im_itm_typ;
	private String im_crt_dt;
	private String im_crt_id;
	private String im_dpt_cd;
	@Id
	@GeneratedValue
	public Long getIm_id() {
		return im_id;
	}
	public void setIm_id(Long im_id) {
		this.im_id = im_id;
	}
	public String getIm_cmy_cd() {
		return im_cmy_cd;
	}
	public void setIm_cmy_cd(String im_cmy_cd) {
		this.im_cmy_cd = im_cmy_cd;
	}
	public String getIm_str_cd() {
		return im_str_cd;
	}
	public void setIm_str_cd(String im_str_cd) {
		this.im_str_cd = im_str_cd;
	}
	public String getIm_trn_typ() {
		return im_trn_typ;
	}
	public void setIm_trn_typ(String im_trn_typ) {
		this.im_trn_typ = im_trn_typ;
	}
	@Index(name="trn_nmb_index")
	public String getIm_trn_nmb() {
		return im_trn_nmb;
	}
	public void setIm_trn_nmb(String im_trn_nmb) {
		this.im_trn_nmb = im_trn_nmb;
	}
	@Index(name="itm_cd_index")
	public String getIm_itm_cd() {
		return im_itm_cd;
	}
	public void setIm_itm_cd(String im_itm_cd) {
		this.im_itm_cd = im_itm_cd;
	}
	public String getIm_itm_wgt() {
		return im_itm_wgt;
	}
	public void setIm_itm_wgt(String im_itm_wgt) {
		this.im_itm_wgt = im_itm_wgt;
	}
	public String getIm_itm_prty() {
		return im_itm_prty;
	}
	public void setIm_itm_prty(String im_itm_prty) {
		this.im_itm_prty = im_itm_prty;
	}
	public String getIm_itm_pure_gld_wgt() {
		return im_itm_pure_gld_wgt;
	}
	public void setIm_itm_pure_gld_wgt(String im_itm_pure_gld_wgt) {
		this.im_itm_pure_gld_wgt = im_itm_pure_gld_wgt;
	}
	public String getIm_crt_dt() {
		return im_crt_dt;
	}
	public void setIm_crt_dt(String im_crt_dt) {
		this.im_crt_dt = im_crt_dt;
	}
	public String getIm_crt_id() {
		return im_crt_id;
	}
	public void setIm_crt_id(String im_crt_id) {
		this.im_crt_id = im_crt_id;
	}
	@Override
	public String toString() {
		return "Itm_Mv [im_id=" + im_id + ", im_cmy_cd=" + im_cmy_cd + ", im_str_cd=" + im_str_cd + ", im_trn_typ="
				+ im_trn_typ + ", im_trn_nmb=" + im_trn_nmb + ", im_itm_cd=" + im_itm_cd + ", im_itm_wgt=" + im_itm_wgt
				+ ", im_itm_prty=" + im_itm_prty + ", im_itm_pure_gld_wgt=" + im_itm_pure_gld_wgt + ", im_itm_typ="
				+ im_itm_typ + ", im_crt_dt=" + im_crt_dt + ", im_crt_id=" + im_crt_id + ", im_dpt_cd=" + im_dpt_cd
				+ "]";
	}
	public String getIm_itm_typ() {
		return im_itm_typ;
	}
	public void setIm_itm_typ(String im_itm_typ) {
		this.im_itm_typ = im_itm_typ;
	}
	public String getIm_dpt_cd() {
		return im_dpt_cd;
	}
	public void setIm_dpt_cd(String im_dpt_cd) {
		this.im_dpt_cd = im_dpt_cd;
	}
	
}
