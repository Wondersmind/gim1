package com.gim.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="daywise_prc_mst")
public class DayWise_Prc_Mst {
private Long dw_pm_id;
private String dw_pm_cmy_cd;
private String dw_pm_tdy_dt;
private String dw_pm_gld_carat;
private String dw_pm_pty;
private String dw_pm_prc;
private String dw_pm_crt_dt;
private String dw_pm_crt_id;
private String dw_pm_updt_dt;
private String dw_pm_updt_id;
private boolean dw_pm_sts;
@Id
@GeneratedValue
public Long getDw_pm_id() {
	return dw_pm_id;
}
public void setDw_pm_id(Long dw_pm_id) {
	this.dw_pm_id = dw_pm_id;
}
public String getDw_pm_cmy_cd() {
	return dw_pm_cmy_cd;
}
public void setDw_pm_cmy_cd(String dw_pm_cmy_cd) {
	this.dw_pm_cmy_cd = dw_pm_cmy_cd;
}
public String getDw_pm_pty() {
	return dw_pm_pty;
}
public void setDw_pm_pty(String dw_pm_pty) {
	this.dw_pm_pty = dw_pm_pty;
}
public String getDw_pm_prc() {
	return dw_pm_prc;
}
public void setDw_pm_prc(String dw_pm_prc) {
	this.dw_pm_prc = dw_pm_prc;
}
public String getDw_pm_crt_dt() {
	return dw_pm_crt_dt;
}
public void setDw_pm_crt_dt(String dw_pm_crt_dt) {
	this.dw_pm_crt_dt = dw_pm_crt_dt;
}
public String getDw_pm_crt_id() {
	return dw_pm_crt_id;
}
public void setDw_pm_crt_id(String dw_pm_crt_id) {
	this.dw_pm_crt_id = dw_pm_crt_id;
}
public String getDw_pm_updt_dt() {
	return dw_pm_updt_dt;
}
public void setDw_pm_updt_dt(String dw_pm_updt_dt) {
	this.dw_pm_updt_dt = dw_pm_updt_dt;
}
public String getDw_pm_updt_id() {
	return dw_pm_updt_id;
}
public void setDw_pm_updt_id(String dw_pm_updt_id) {
	this.dw_pm_updt_id = dw_pm_updt_id;
}
public boolean isDw_pm_sts() {
	return dw_pm_sts;
}
public void setDw_pm_sts(boolean dw_pm_sts) {
	this.dw_pm_sts = dw_pm_sts;
}

public String getDw_pm_tdy_dt() {
	return dw_pm_tdy_dt;
}
public void setDw_pm_tdy_dt(String dw_pm_tdy_dt) {
	this.dw_pm_tdy_dt = dw_pm_tdy_dt;
}
public String getDw_pm_gld_carat() {
	return dw_pm_gld_carat;
}
public void setDw_pm_gld_carat(String dw_pm_gld_carat) {
	this.dw_pm_gld_carat = dw_pm_gld_carat;
}
@Override
public String toString() {
	return "DayWise_Prc_Mst [dw_pm_id=" + dw_pm_id + ", dw_pm_cmy_cd=" + dw_pm_cmy_cd + ", dw_pm_tdy_dt="
			+ dw_pm_tdy_dt + ", dw_pm_gld_carat=" + dw_pm_gld_carat + ", dw_pm_pty=" + dw_pm_pty + ", dw_pm_prc="
			+ dw_pm_prc + ", dw_pm_crt_dt=" + dw_pm_crt_dt + ", dw_pm_crt_id=" + dw_pm_crt_id + ", dw_pm_updt_dt="
			+ dw_pm_updt_dt + ", dw_pm_updt_id=" + dw_pm_updt_id + ", dw_pm_sts=" + dw_pm_sts + "]";
}

}
