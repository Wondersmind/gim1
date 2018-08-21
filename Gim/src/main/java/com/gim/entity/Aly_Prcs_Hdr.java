package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="aly_prcs_hdr")
public class Aly_Prcs_Hdr implements Serializable{
private Long aph_id;
private String aph_aly_no;
private String aph_aly_dt;
private String aph_tot_rcvd_wgt;
private String aph_tot_isd_wgt;
private String aph_tot_bal_wgt;
private String aph_cnvt_prty;
private String aph_expt_prty;
private String aph_tot_rcvd_prty;
private String aph_crt_dt;
private String aph_crt_id;
private String aph_updt_dt;
private String aph_updt_id;
private boolean aph_iss_auth;
private boolean aph_rcvd_auth;
private boolean aph_aly_sts;
private String aph_cmy_cd;
private String aph_str_cd;
private String aph_aly_typ;
private String aph_iss_dmgd;
@Id
@GeneratedValue
public Long getAph_id() {
	return aph_id;
}
public void setAph_id(Long aph_id) {
	this.aph_id = aph_id;
}
@Index(name="aly_no_index")
public String getAph_aly_no() {
	return aph_aly_no;
}
public void setAph_aly_no(String aph_aly_no) {
	this.aph_aly_no = aph_aly_no;
}

public String getAph_crt_dt() {
	return aph_crt_dt;
}
public void setAph_crt_dt(String aph_crt_dt) {
	this.aph_crt_dt = aph_crt_dt;
}
public String getAph_crt_id() {
	return aph_crt_id;
}
public void setAph_crt_id(String aph_crt_id) {
	this.aph_crt_id = aph_crt_id;
}
public String getAph_updt_dt() {
	return aph_updt_dt;
}
public void setAph_updt_dt(String aph_updt_dt) {
	this.aph_updt_dt = aph_updt_dt;
}
public String getAph_updt_id() {
	return aph_updt_id;
}
public void setAph_updt_id(String aph_updt_id) {
	this.aph_updt_id = aph_updt_id;
}

public boolean isAph_aly_sts() {
	return aph_aly_sts;
}
public void setAph_aly_sts(boolean aph_aly_sts) {
	this.aph_aly_sts = aph_aly_sts;
}
public String getAph_tot_rcvd_wgt() {
	return aph_tot_rcvd_wgt;
}
public void setAph_tot_rcvd_wgt(String aph_tot_rcvd_wgt) {
	this.aph_tot_rcvd_wgt = aph_tot_rcvd_wgt;
}
public String getAph_tot_rcvd_prty() {
	return aph_tot_rcvd_prty;
}
public void setAph_tot_rcvd_prty(String aph_tot_rcvd_prty) {
	this.aph_tot_rcvd_prty = aph_tot_rcvd_prty;
}

public String getAph_tot_isd_wgt() {
	return aph_tot_isd_wgt;
}
public void setAph_tot_isd_wgt(String aph_tot_isd_wgt) {
	this.aph_tot_isd_wgt = aph_tot_isd_wgt;
}
public String getAph_tot_bal_wgt() {
	return aph_tot_bal_wgt;
}
public void setAph_tot_bal_wgt(String aph_tot_bal_wgt) {
	this.aph_tot_bal_wgt = aph_tot_bal_wgt;
}
public String getAph_cnvt_prty() {
	return aph_cnvt_prty;
}
public void setAph_cnvt_prty(String aph_cnvt_prty) {
	this.aph_cnvt_prty = aph_cnvt_prty;
}
public String getAph_expt_prty() {
	return aph_expt_prty;
}
public void setAph_expt_prty(String aph_expt_prty) {
	this.aph_expt_prty = aph_expt_prty;
}
public String getAph_cmy_cd() {
	return aph_cmy_cd;
}
public void setAph_cmy_cd(String aph_cmy_cd) {
	this.aph_cmy_cd = aph_cmy_cd;
}
public String getAph_str_cd() {
	return aph_str_cd;
}
public void setAph_str_cd(String aph_str_cd) {
	this.aph_str_cd = aph_str_cd;
}
public String getAph_aly_typ() {
	return aph_aly_typ;
}
public void setAph_aly_typ(String aph_aly_typ) {
	this.aph_aly_typ = aph_aly_typ;
}
public boolean isAph_iss_auth() {
	return aph_iss_auth;
}
public void setAph_iss_auth(boolean aph_iss_auth) {
	this.aph_iss_auth = aph_iss_auth;
}
public boolean isAph_rcvd_auth() {
	return aph_rcvd_auth;
}
public void setAph_rcvd_auth(boolean aph_rcvd_auth) {
	this.aph_rcvd_auth = aph_rcvd_auth;
}
@Override
public String toString() {
	return "Aly_Prcs_Hdr [aph_id=" + aph_id + ", aph_aly_no=" + aph_aly_no + ", aph_aly_dt=" + aph_aly_dt
			+ ", aph_tot_rcvd_wgt=" + aph_tot_rcvd_wgt + ", aph_tot_isd_wgt=" + aph_tot_isd_wgt + ", aph_tot_bal_wgt="
			+ aph_tot_bal_wgt + ", aph_cnvt_prty=" + aph_cnvt_prty + ", aph_expt_prty=" + aph_expt_prty
			+ ", aph_tot_rcvd_prty=" + aph_tot_rcvd_prty + ", aph_crt_dt=" + aph_crt_dt + ", aph_crt_id=" + aph_crt_id
			+ ", aph_updt_dt=" + aph_updt_dt + ", aph_updt_id=" + aph_updt_id + ", aph_iss_auth=" + aph_iss_auth
			+ ", aph_rcvd_auth=" + aph_rcvd_auth + ", aph_aly_sts=" + aph_aly_sts + ", aph_cmy_cd=" + aph_cmy_cd
			+ ", aph_str_cd=" + aph_str_cd + ", aph_aly_typ=" + aph_aly_typ + ", aph_iss_dmgd=" + aph_iss_dmgd + "]";
}
public String getAph_iss_dmgd() {
	return aph_iss_dmgd;
}
public void setAph_iss_dmgd(String aph_iss_dmgd) {
	this.aph_iss_dmgd = aph_iss_dmgd;
}
public String getAph_aly_dt() {
	return aph_aly_dt;
}
public void setAph_aly_dt(String aph_aly_dt) {
	this.aph_aly_dt = aph_aly_dt;
}

}
