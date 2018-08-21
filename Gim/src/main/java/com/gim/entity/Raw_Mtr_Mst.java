package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Columns;
import org.hibernate.annotations.Index;

@Entity
@Table(name="raw_mtr_mst")
public class Raw_Mtr_Mst implements Serializable{
private Long rm_mst_id;
private String rm_mst_cmy_cd;
private String rm_mst_pdt_id;
private String rm_mst_pdt_nm;
private String rm_mst_pdt_pty;
private String rm_mst_crt_id;
private String rm_mst_crt_dt;
private String rm_mst_updt_id;
private String rm_mst_updt_dt;
private boolean rm_mst_sts;
@Id
@GeneratedValue
public Long getRm_mst_id() {
	return rm_mst_id;
}
public void setRm_mst_id(Long rm_mst_id) {
	this.rm_mst_id = rm_mst_id;
}

@Index(name="pdt_id_index")
public String getRm_mst_pdt_id() {
	return rm_mst_pdt_id;
}
public void setRm_mst_pdt_id(String rm_mst_pdt_id) {
	this.rm_mst_pdt_id = rm_mst_pdt_id;
}
public String getRm_mst_pdt_nm() {
	return rm_mst_pdt_nm;
}
public void setRm_mst_pdt_nm(String rm_mst_pdt_nm) {
	this.rm_mst_pdt_nm = rm_mst_pdt_nm;
}
public String getRm_mst_pdt_pty() {
	return rm_mst_pdt_pty;
}
public void setRm_mst_pdt_pty(String rm_mst_pdt_pty) {
	this.rm_mst_pdt_pty = rm_mst_pdt_pty;
}
public String getRm_mst_crt_id() {
	return rm_mst_crt_id;
}
public void setRm_mst_crt_id(String rm_mst_crt_id) {
	this.rm_mst_crt_id = rm_mst_crt_id;
}
public String getRm_mst_crt_dt() {
	return rm_mst_crt_dt;
}
public void setRm_mst_crt_dt(String rm_mst_crt_dt) {
	this.rm_mst_crt_dt = rm_mst_crt_dt;
}
public String getRm_mst_updt_id() {
	return rm_mst_updt_id;
}
public void setRm_mst_updt_id(String rm_mst_updt_id) {
	this.rm_mst_updt_id = rm_mst_updt_id;
}
public String getRm_mst_updt_dt() {
	return rm_mst_updt_dt;
}
public void setRm_mst_updt_dt(String rm_mst_updt_dt) {
	this.rm_mst_updt_dt = rm_mst_updt_dt;
}
public boolean isRm_mst_sts() {
	return rm_mst_sts;
}
public void setRm_mst_sts(boolean rm_mst_sts) {
	this.rm_mst_sts = rm_mst_sts;
}
@Override
public String toString() {
	return "Raw_Mtr_Mst [rm_mst_id=" + rm_mst_id + ", rm_mst_pdt_id="
			+ rm_mst_pdt_id + ", rm_mst_pdt_nm=" + rm_mst_pdt_nm + ", rm_mst_pdt_pty=" + rm_mst_pdt_pty
			+ ", rm_mst_crt_id=" + rm_mst_crt_id + ", rm_mst_crt_dt=" + rm_mst_crt_dt + ", rm_mst_updt_id="
			+ rm_mst_updt_id + ", rm_mst_updt_dt=" + rm_mst_updt_dt + ", rm_mst_sts=" + rm_mst_sts + "]";
}
public String getRm_mst_cmy_cd() {
	return rm_mst_cmy_cd;
}
public void setRm_mst_cmy_cd(String rm_mst_cmy_cd) {
	this.rm_mst_cmy_cd = rm_mst_cmy_cd;
}

}
