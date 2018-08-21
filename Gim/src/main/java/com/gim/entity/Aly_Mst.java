package com.gim.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="aly_mst")
public class Aly_Mst {
private Long am_id;
private String am_aly_cd;
private String am_cmy_cd;
private String am_aly_nm;
private String am_aly_des;
private String am_aly_ctgy1;
private String am_aly_ctgy2;
private String am_aly_ctgy3;
private String am_aly_ctgy4;
private String am_aly_ctgy5;
private String am_aly_ctgy6;
private String am_aly_ctgy7;
private String am_aly_val1;
private String am_aly_val2;
private String am_aly_val3;
private String am_aly_val4;
private String am_aly_val5;
private String am_aly_val6;
private String am_aly_val7;
private String am_aly_crt_id;
private String am_aly_crt_dt;
private String am_aly_updt_id;
private String am_aly_updt_dt;
private boolean am_aly_sts;
@Id
@GeneratedValue
public Long getAm_id() {
	return am_id;
}

public void setAm_id(Long am_id) {
	this.am_id = am_id;
}
@Index(name="aly_cd_indx")
public String getAm_aly_cd() {
	return am_aly_cd;
}

public void setAm_aly_cd(String am_aly_cd) {
	this.am_aly_cd = am_aly_cd;
}

public String getAm_aly_nm() {
	return am_aly_nm;
}

public void setAm_aly_nm(String am_aly_nm) {
	this.am_aly_nm = am_aly_nm;
}
@Column(columnDefinition="TEXT")
public String getAm_aly_des() {
	return am_aly_des;
}

public void setAm_aly_des(String am_aly_des) {
	this.am_aly_des = am_aly_des;
}

public String getAm_aly_ctgy1() {
	return am_aly_ctgy1;
}

public void setAm_aly_ctgy1(String am_aly_ctgy1) {
	this.am_aly_ctgy1 = am_aly_ctgy1;
}

public String getAm_aly_ctgy2() {
	return am_aly_ctgy2;
}

public void setAm_aly_ctgy2(String am_aly_ctgy2) {
	this.am_aly_ctgy2 = am_aly_ctgy2;
}

public String getAm_aly_ctgy3() {
	return am_aly_ctgy3;
}

public void setAm_aly_ctgy3(String am_aly_ctgy3) {
	this.am_aly_ctgy3 = am_aly_ctgy3;
}

public String getAm_aly_ctgy4() {
	return am_aly_ctgy4;
}

public void setAm_aly_ctgy4(String am_aly_ctgy4) {
	this.am_aly_ctgy4 = am_aly_ctgy4;
}

public String getAm_aly_ctgy5() {
	return am_aly_ctgy5;
}

public void setAm_aly_ctgy5(String am_aly_ctgy5) {
	this.am_aly_ctgy5 = am_aly_ctgy5;
}

public String getAm_aly_ctgy6() {
	return am_aly_ctgy6;
}

public void setAm_aly_ctgy6(String am_aly_ctgy6) {
	this.am_aly_ctgy6 = am_aly_ctgy6;
}

public String getAm_aly_ctgy7() {
	return am_aly_ctgy7;
}

public void setAm_aly_ctgy7(String am_aly_ctgy7) {
	this.am_aly_ctgy7 = am_aly_ctgy7;
}

public String getAm_aly_val1() {
	return am_aly_val1;
}

public void setAm_aly_val1(String am_aly_val1) {
	this.am_aly_val1 = am_aly_val1;
}

public String getAm_aly_val2() {
	return am_aly_val2;
}

public void setAm_aly_val2(String am_aly_val2) {
	this.am_aly_val2 = am_aly_val2;
}

public String getAm_aly_val3() {
	return am_aly_val3;
}

public void setAm_aly_val3(String am_aly_val3) {
	this.am_aly_val3 = am_aly_val3;
}

public String getAm_aly_val4() {
	return am_aly_val4;
}

public void setAm_aly_val4(String am_aly_val4) {
	this.am_aly_val4 = am_aly_val4;
}

public String getAm_aly_val5() {
	return am_aly_val5;
}

public void setAm_aly_val5(String am_aly_val5) {
	this.am_aly_val5 = am_aly_val5;
}

public String getAm_aly_val6() {
	return am_aly_val6;
}

public void setAm_aly_val6(String am_aly_val6) {
	this.am_aly_val6 = am_aly_val6;
}

public String getAm_aly_val7() {
	return am_aly_val7;
}

public void setAm_aly_val7(String am_aly_val7) {
	this.am_aly_val7 = am_aly_val7;
}

public String getAm_aly_crt_id() {
	return am_aly_crt_id;
}

public void setAm_aly_crt_id(String am_aly_crt_id) {
	this.am_aly_crt_id = am_aly_crt_id;
}

public String getAm_aly_crt_dt() {
	return am_aly_crt_dt;
}

public void setAm_aly_crt_dt(String am_aly_crt_dt) {
	this.am_aly_crt_dt = am_aly_crt_dt;
}

public String getAm_aly_updt_id() {
	return am_aly_updt_id;
}

public void setAm_aly_updt_id(String am_aly_updt_id) {
	this.am_aly_updt_id = am_aly_updt_id;
}

public String getAm_aly_updt_dt() {
	return am_aly_updt_dt;
}

public void setAm_aly_updt_dt(String am_aly_updt_dt) {
	this.am_aly_updt_dt = am_aly_updt_dt;
}

public boolean isAm_aly_sts() {
	return am_aly_sts;
}

public void setAm_aly_sts(boolean am_aly_sts) {
	this.am_aly_sts = am_aly_sts;
}

@Override
public String toString() {
	return "Aly_Mst [am_id=" + am_id + ", am_aly_cd=" + am_aly_cd + ", am_cmy_cd=" + am_cmy_cd + ", am_aly_nm="
			+ am_aly_nm + ", am_aly_des=" + am_aly_des + ", am_aly_ctgy1=" + am_aly_ctgy1 + ", am_aly_ctgy2="
			+ am_aly_ctgy2 + ", am_aly_ctgy3=" + am_aly_ctgy3 + ", am_aly_ctgy4=" + am_aly_ctgy4 + ", am_aly_ctgy5="
			+ am_aly_ctgy5 + ", am_aly_ctgy6=" + am_aly_ctgy6 + ", am_aly_ctgy7=" + am_aly_ctgy7 + ", am_aly_val1="
			+ am_aly_val1 + ", am_aly_val2=" + am_aly_val2 + ", am_aly_val3=" + am_aly_val3 + ", am_aly_val4="
			+ am_aly_val4 + ", am_aly_val5=" + am_aly_val5 + ", am_aly_val6=" + am_aly_val6 + ", am_aly_val7="
			+ am_aly_val7 + ", am_aly_crt_id=" + am_aly_crt_id + ", am_aly_crt_dt=" + am_aly_crt_dt
			+ ", am_aly_updt_id=" + am_aly_updt_id + ", am_aly_updt_dt=" + am_aly_updt_dt + ", am_aly_sts="
			+ am_aly_sts + "]";
}

public String getAm_cmy_cd() {
	return am_cmy_cd;
}

public void setAm_cmy_cd(String am_cmy_cd) {
	this.am_cmy_cd = am_cmy_cd;
}

}
