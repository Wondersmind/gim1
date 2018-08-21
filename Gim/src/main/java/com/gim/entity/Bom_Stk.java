package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="bom_stk")
public class Bom_Stk implements Serializable{
private Long bs_id;
private String bs_bom_cd;
private Double bs_bom_qty;
private String bs_bom_prty;
private String bs_cmy_cd;
private String bs_dpt_cd;
private Double bs_bom_wgt;
private String bs_crt_dt;
private String bs_updt_dt;
@Id
@GeneratedValue
public Long getBs_id() {
	return bs_id;
}
public void setBs_id(Long bs_id) {
	this.bs_id = bs_id;
}
@Index(name="bm_cd")
public String getBs_bom_cd() {
	return bs_bom_cd;
}
public void setBs_bom_cd(String bs_bom_cd) {
	this.bs_bom_cd = bs_bom_cd;
}
public Double getBs_bom_qty() {
	return bs_bom_qty;
}
public void setBs_bom_qty(Double bs_bom_qty) {
	this.bs_bom_qty = bs_bom_qty;
}
public String getBs_bom_prty() {
	return bs_bom_prty;
}
public void setBs_bom_prty(String bs_bom_prty) {
	this.bs_bom_prty = bs_bom_prty;
}
public String getBs_cmy_cd() {
	return bs_cmy_cd;
}
public void setBs_cmy_cd(String bs_cmy_cd) {
	this.bs_cmy_cd = bs_cmy_cd;
}
@Index(name="dpt_cd")
public String getBs_dpt_cd() {
	return bs_dpt_cd;
}
public void setBs_dpt_cd(String bs_dpt_cd) {
	this.bs_dpt_cd = bs_dpt_cd;
}
public Double getBs_bom_wgt() {
	return bs_bom_wgt;
}
public void setBs_bom_wgt(Double bs_bom_wgt) {
	this.bs_bom_wgt = bs_bom_wgt;
}
public String getBs_crt_dt() {
	return bs_crt_dt;
}
public void setBs_crt_dt(String bs_crt_dt) {
	this.bs_crt_dt = bs_crt_dt;
}
public String getBs_updt_dt() {
	return bs_updt_dt;
}
public void setBs_updt_dt(String bs_updt_dt) {
	this.bs_updt_dt = bs_updt_dt;
}
@Override
public String toString() {
	return "Bom_Stock [bs_id=" + bs_id + ", bs_bom_cd=" + bs_bom_cd + ", bs_bom_qty=" + bs_bom_qty + ", bs_bom_prty="
			+ bs_bom_prty + ", bs_cmy_cd=" + bs_cmy_cd + ", bs_dpt_cd=" + bs_dpt_cd + ", bs_bom_wgt=" + bs_bom_wgt
			+ ", bs_crt_dt=" + bs_crt_dt + ", bs_updt_dt=" + bs_updt_dt + "]";
}

}
