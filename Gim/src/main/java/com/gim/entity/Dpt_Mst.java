package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="dpt_mst")
public class Dpt_Mst implements Serializable{
private Long dm_id;
private String dm_dpt_cd;
private String dm_cmy_cd;
private String dm_dpt_nm;
private String dm_dscr;
private String dm_crt_dt;
private String dm_iss_outwd;
private String dm_crt_id;
private String dm_updt_id;
private String dm_updt_dt;
private boolean dm_sts;
private boolean dm_is_fns;
@Id
@GeneratedValue
public Long getDm_id() {
	return dm_id;
}
public void setDm_id(Long dm_id) {
	this.dm_id = dm_id;
}
@Index(name="dpt_cd_index")
public String getDm_dpt_cd() {
	return dm_dpt_cd;
}
public void setDm_dpt_cd(String dm_dpt_cd) {
	this.dm_dpt_cd = dm_dpt_cd;
}
public String getDm_cmy_cd() {
	return dm_cmy_cd;
}
public void setDm_cmy_cd(String dm_cmy_cd) {
	this.dm_cmy_cd = dm_cmy_cd;
}
public String getDm_dpt_nm() {
	return dm_dpt_nm;
}
public void setDm_dpt_nm(String dm_dpt_nm) {
	this.dm_dpt_nm = dm_dpt_nm;
}
@Column(columnDefinition="TEXT")
public String getDm_dscr() {
	return dm_dscr;
}
public void setDm_dscr(String dm_dscr) {
	this.dm_dscr = dm_dscr;
}
public String getDm_crt_dt() {
	return dm_crt_dt;
}
public void setDm_crt_dt(String dm_crt_dt) {
	this.dm_crt_dt = dm_crt_dt;
}
public String getDm_crt_id() {
	return dm_crt_id;
}
public void setDm_crt_id(String dm_crt_id) {
	this.dm_crt_id = dm_crt_id;
}
public String getDm_updt_id() {
	return dm_updt_id;
}
public void setDm_updt_id(String dm_updt_id) {
	this.dm_updt_id = dm_updt_id;
}
public String getDm_updt_dt() {
	return dm_updt_dt;
}
public void setDm_updt_dt(String dm_updt_dt) {
	this.dm_updt_dt = dm_updt_dt;
}
public boolean isDm_sts() {
	return dm_sts;
}
public void setDm_sts(boolean dm_sts) {
	this.dm_sts = dm_sts;
}
public boolean isDm_is_fns() {
	return dm_is_fns;
}
public void setDm_is_fns(boolean dm_is_fns) {
	this.dm_is_fns = dm_is_fns;
}
@Override
public String toString() {
	return "Dpt_Mst [dm_id=" + dm_id + ", dm_dpt_cd=" + dm_dpt_cd + ", dm_cmy_cd=" + dm_cmy_cd + ", dm_dpt_nm="
			+ dm_dpt_nm + ", dm_dscr=" + dm_dscr + ", dm_crt_dt=" + dm_crt_dt + ", dm_iss_outwd=" + dm_iss_outwd
			+ ", dm_crt_id=" + dm_crt_id + ", dm_updt_id=" + dm_updt_id + ", dm_updt_dt=" + dm_updt_dt + ", dm_sts="
			+ dm_sts + ", dm_is_fns=" + dm_is_fns + "]";
}
public String getDm_iss_outwd() {
	return dm_iss_outwd;
}
public void setDm_iss_outwd(String dm_iss_outwd) {
	this.dm_iss_outwd = dm_iss_outwd;
}

}
