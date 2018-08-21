package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="bom_mst")
public class Bom_Mst implements Serializable{
private Long bm_id;
private String bm_bom_cd;
private String bm_cmy_cd;
private String bm_bom_nm;
private String bm_bom_wip_typ;
private String bm_bom_qty;
private String bm_bom_wgt;
private String bm_bom_sz;
private String bm_is_rdy_bom;
private String bm_bom_typ;
private String bm_bom_updt_id;
private String bm_bom_updt_dt;
private String bm_bom_crt_id;
private String bm_bom_crt_dt;
private boolean bm_bom_sts;
@Id
@GeneratedValue
public Long getBm_id() {
	return bm_id;
}

public void setBm_id(Long bm_id) {
	this.bm_id = bm_id;
}
@Index(name="bom_cd_index")
public String getBm_bom_cd() {
	return bm_bom_cd;
}

public void setBm_bom_cd(String bm_bom_cd) {
	this.bm_bom_cd = bm_bom_cd;
}

public String getBm_cmy_cd() {
	return bm_cmy_cd;
}

public void setBm_cmy_cd(String bm_cmy_cd) {
	this.bm_cmy_cd = bm_cmy_cd;
}
@Index(name="bom_nm_index")
public String getBm_bom_nm() {
	return bm_bom_nm;
}

public void setBm_bom_nm(String bm_bom_nm) {
	this.bm_bom_nm = bm_bom_nm;
}

public String getBm_bom_wip_typ() {
	return bm_bom_wip_typ;
}

public void setBm_bom_wip_typ(String bm_bom_wip_typ) {
	this.bm_bom_wip_typ = bm_bom_wip_typ;
}

public String getBm_bom_sz() {
	return bm_bom_sz;
}

public void setBm_bom_sz(String bm_bom_sz) {
	this.bm_bom_sz = bm_bom_sz;
}

public String getBm_bom_typ() {
	return bm_bom_typ;
}

public void setBm_bom_typ(String bm_bom_typ) {
	this.bm_bom_typ = bm_bom_typ;
}

public String getBm_bom_updt_id() {
	return bm_bom_updt_id;
}

public void setBm_bom_updt_id(String bm_bom_updt_id) {
	this.bm_bom_updt_id = bm_bom_updt_id;
}

public String getBm_bom_updt_dt() {
	return bm_bom_updt_dt;
}

public void setBm_bom_updt_dt(String bm_bom_updt_dt) {
	this.bm_bom_updt_dt = bm_bom_updt_dt;
}

public String getBm_bom_crt_id() {
	return bm_bom_crt_id;
}

public void setBm_bom_crt_id(String bm_bom_crt_id) {
	this.bm_bom_crt_id = bm_bom_crt_id;
}

public String getBm_bom_crt_dt() {
	return bm_bom_crt_dt;
}

public void setBm_bom_crt_dt(String bm_bom_crt_dt) {
	this.bm_bom_crt_dt = bm_bom_crt_dt;
}


public String getBm_bom_qty() {
	return bm_bom_qty;
}

public void setBm_bom_qty(String bm_bom_qty) {
	this.bm_bom_qty = bm_bom_qty;
}

public String getBm_bom_wgt() {
	return bm_bom_wgt;
}

public void setBm_bom_wgt(String bm_bom_wgt) {
	this.bm_bom_wgt = bm_bom_wgt;
}

@Override
public String toString() {
	return "Bom_Mst [bm_id=" + bm_id + ", bm_bom_cd=" + bm_bom_cd + ", bm_cmy_cd=" + bm_cmy_cd + ", bm_bom_nm="
			+ bm_bom_nm + ", bm_bom_wip_typ=" + bm_bom_wip_typ + ", bm_bom_qty=" + bm_bom_qty + ", bm_bom_wgt="
			+ bm_bom_wgt + ", bm_bom_sz=" + bm_bom_sz + ", bm_is_rdy_bom=" + bm_is_rdy_bom + ", bm_bom_typ="
			+ bm_bom_typ + ", bm_bom_updt_id=" + bm_bom_updt_id + ", bm_bom_updt_dt=" + bm_bom_updt_dt
			+ ", bm_bom_crt_id=" + bm_bom_crt_id + ", bm_bom_crt_dt=" + bm_bom_crt_dt + ", bm_bom_sts=" + bm_bom_sts
			+ "]";
}

public boolean isBm_bom_sts() {
	return bm_bom_sts;
}

public void setBm_bom_sts(boolean bm_bom_sts) {
	this.bm_bom_sts = bm_bom_sts;
}

public String getBm_is_rdy_bom() {
	return bm_is_rdy_bom;
}

public void setBm_is_rdy_bom(String bm_is_rdy_bom) {
	this.bm_is_rdy_bom = bm_is_rdy_bom;
}

}
