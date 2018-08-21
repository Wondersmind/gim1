package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="report_details")
public class Report_Details implements Serializable{
private Long rd_id;
private String rd_rpt_nm;
private String rd_chld_rpt_nm;
private String rd_bnd_state;
private String rd_cmy_cd;
private String rd_othr;

@Id
@GeneratedValue
public Long getRd_id() {
	return rd_id;
}
public void setRd_id(Long rd_id) {
	this.rd_id = rd_id;
}

public String getRd_rpt_nm() {
	return rd_rpt_nm;
}
@Index(name="rpt_nm")
public void setRd_rpt_nm(String rd_rpt_nm) {
	this.rd_rpt_nm = rd_rpt_nm;
}
public String getRd_chld_rpt_nm() {
	return rd_chld_rpt_nm;
}
public void setRd_chld_rpt_nm(String rd_chld_rpt_nm) {
	this.rd_chld_rpt_nm = rd_chld_rpt_nm;
}
@Column(columnDefinition="TEXT")
public String getRd_bnd_state() {
	return rd_bnd_state;
}
public void setRd_bnd_state(String rd_bnd_state) {
	this.rd_bnd_state = rd_bnd_state;
}
public String getRd_cmy_cd() {
	return rd_cmy_cd;
}
public void setRd_cmy_cd(String rd_cmy_cd) {
	this.rd_cmy_cd = rd_cmy_cd;
}
@Column(columnDefinition="TEXT")
public String getRd_othr() {
	return rd_othr;
}
public void setRd_othr(String rd_othr) {
	this.rd_othr = rd_othr;
}
@Override
public String toString() {
	return "Report_Details [rd_id=" + rd_id + ", rd_rpt_nm=" + rd_rpt_nm + ", rd_chld_rpt_nm=" + rd_chld_rpt_nm
			+ ", rd_bnd_state=" + rd_bnd_state + ", rd_cmy_cd=" + rd_cmy_cd + ", rd_othr=" + rd_othr + "]";
}

}
