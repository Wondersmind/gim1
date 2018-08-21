package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Table(name="carat_mst")
@Entity
public class Carat_Mst implements Serializable{
private Long crtm_id;
private String crtm_carat_nm;
private String crtm_carat_clr;
private String crtm_carat_cd;
private String crtm_carat_prty;
private String crtm_carat_wgt;
private String crtm_cmy_cd;
private  boolean crtm_carat_sts;
private String crtm_crt_dt;
private String crtm_crt_id;
private String crtm_updt_dt;
private String crtm_updt_id;
@Id
@GeneratedValue
public Long getCrtm_id() {
	return crtm_id;
}

public void setCrtm_id(Long crtm_id) {
	this.crtm_id = crtm_id;
}
@Index(name="name_index")
public String getCrtm_carat_nm() {
	return crtm_carat_nm;
}

public void setCrtm_carat_nm(String crtm_carat_nm) {
	this.crtm_carat_nm = crtm_carat_nm;
}

public String getCrtm_carat_cd() {
	return crtm_carat_cd;
}

public void setCrtm_carat_cd(String crtm_carat_cd) {
	this.crtm_carat_cd = crtm_carat_cd;
}

public String getCrtm_carat_prty() {
	return crtm_carat_prty;
}

public void setCrtm_carat_prty(String crtm_carat_prty) {
	this.crtm_carat_prty = crtm_carat_prty;
}

public String getCrtm_carat_wgt() {
	return crtm_carat_wgt;
}

public void setCrtm_carat_wgt(String crtm_carat_wgt) {
	this.crtm_carat_wgt = crtm_carat_wgt;
}

public boolean isCrtm_carat_sts() {
	return crtm_carat_sts;
}

public void setCrtm_carat_sts(boolean crtm_carat_sts) {
	this.crtm_carat_sts = crtm_carat_sts;
}

public String getCrtm_crt_dt() {
	return crtm_crt_dt;
}

public void setCrtm_crt_dt(String crtm_crt_dt) {
	this.crtm_crt_dt = crtm_crt_dt;
}

public String getCrtm_crt_id() {
	return crtm_crt_id;
}

public void setCrtm_crt_id(String crtm_crt_id) {
	this.crtm_crt_id = crtm_crt_id;
}

public String getCrtm_updt_dt() {
	return crtm_updt_dt;
}

public void setCrtm_updt_dt(String crtm_updt_dt) {
	this.crtm_updt_dt = crtm_updt_dt;
}

public String getCrtm_updt_id() {
	return crtm_updt_id;
}

public void setCrtm_updt_id(String crtm_updt_id) {
	this.crtm_updt_id = crtm_updt_id;
}

@Override
public String toString() {
	return "Carat_Mst [crtm_id=" + crtm_id + ", crtm_carat_nm=" + crtm_carat_nm + ", crtm_carat_clr=" + crtm_carat_clr
			+ ", crtm_carat_cd=" + crtm_carat_cd + ", crtm_carat_prty=" + crtm_carat_prty + ", crtm_carat_wgt="
			+ crtm_carat_wgt + ", crtm_cmy_cd=" + crtm_cmy_cd + ", crtm_carat_sts=" + crtm_carat_sts + ", crtm_crt_dt="
			+ crtm_crt_dt + ", crtm_crt_id=" + crtm_crt_id + ", crtm_updt_dt=" + crtm_updt_dt + ", crtm_updt_id="
			+ crtm_updt_id + "]";
}

public String getCrtm_carat_clr() {
	return crtm_carat_clr;
}

public void setCrtm_carat_clr(String crtm_carat_clr) {
	this.crtm_carat_clr = crtm_carat_clr;
}

public String getCrtm_cmy_cd() {
	return crtm_cmy_cd;
}

public void setCrtm_cmy_cd(String crtm_cmy_cd) {
	this.crtm_cmy_cd = crtm_cmy_cd;
}

}
