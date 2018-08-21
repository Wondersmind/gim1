package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="dgn_cst_mst")
public class Dgn_Cst_Mst implements Serializable{
private Long cm_id;
private String cm_dgn_no;
private String cm_lbr_chg;
private String cm_stn_chg;
private String cm_dvpt_chg;
private String cm_cst_crt_dt;
private String cm_cst_crt_id;
private String cm_cst_updt_dt;
private String dcm_cmy_cd;
private String cm_cst_updt_id;
private boolean cm_cst_sts;
@Id
@GeneratedValue
public Long getCm_id() {
	return cm_id;
}

public void setCm_id(Long cm_id) {
	this.cm_id = cm_id;
}

public String getCm_lbr_chg() {
	return cm_lbr_chg;
}

public void setCm_lbr_chg(String cm_lbr_chg) {
	this.cm_lbr_chg = cm_lbr_chg;
}

public String getCm_stn_chg() {
	return cm_stn_chg;
}

public void setCm_stn_chg(String cm_stn_chg) {
	this.cm_stn_chg = cm_stn_chg;
}

public String getCm_dvpt_chg() {
	return cm_dvpt_chg;
}

public void setCm_dvpt_chg(String cm_dvpt_chg) {
	this.cm_dvpt_chg = cm_dvpt_chg;
}


public String getCm_cst_crt_dt() {
	return cm_cst_crt_dt;
}

public void setCm_cst_crt_dt(String cm_cst_crt_dt) {
	this.cm_cst_crt_dt = cm_cst_crt_dt;
}

public String getCm_cst_crt_id() {
	return cm_cst_crt_id;
}

public void setCm_cst_crt_id(String cm_cst_crt_id) {
	this.cm_cst_crt_id = cm_cst_crt_id;
}

public String getCm_cst_updt_dt() {
	return cm_cst_updt_dt;
}

public void setCm_cst_updt_dt(String cm_cst_updt_dt) {
	this.cm_cst_updt_dt = cm_cst_updt_dt;
}

public String getCm_cst_updt_id() {
	return cm_cst_updt_id;
}

public void setCm_cst_updt_id(String cm_cst_updt_id) {
	this.cm_cst_updt_id = cm_cst_updt_id;
}

public boolean isCm_cst_sts() {
	return cm_cst_sts;
}

public void setCm_cst_sts(boolean cm_cst_sts) {
	this.cm_cst_sts = cm_cst_sts;
}

@Override
public String toString() {
	return "Dgn_Cst_Mst [cm_id=" + cm_id + ", cm_dgn_no=" + cm_dgn_no + ", cm_lbr_chg=" + cm_lbr_chg + ", cm_stn_chg="
			+ cm_stn_chg + ", cm_dvpt_chg=" + cm_dvpt_chg + ", cm_cst_crt_dt=" + cm_cst_crt_dt + ", cm_cst_crt_id="
			+ cm_cst_crt_id + ", cm_cst_updt_dt=" + cm_cst_updt_dt + ", dcm_cmy_cd=" + dcm_cmy_cd + ", cm_cst_updt_id="
			+ cm_cst_updt_id + ", cm_cst_sts=" + cm_cst_sts + "]";
}
@Index(name="dgn_no_index")
public String getCm_dgn_no() {
	return cm_dgn_no;
}

public void setCm_dgn_no(String cm_dgn_no) {
	this.cm_dgn_no = cm_dgn_no;
}

public String getDcm_cmy_cd() {
	return dcm_cmy_cd;
}

public void setDcm_cmy_cd(String dcm_cmy_cd) {
	this.dcm_cmy_cd = dcm_cmy_cd;
}

}
