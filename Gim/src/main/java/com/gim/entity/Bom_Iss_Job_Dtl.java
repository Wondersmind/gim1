package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.ws.rs.DefaultValue;

import org.hibernate.annotations.Index;

@Entity
@Table(name="bom_iss_job_dtl")
public class Bom_Iss_Job_Dtl implements Serializable{
private Long bij_id;
private String bij_bom_cd;
private String bij_pdt_prty;
private String bij_cmy_cd;
private String bij_dpt_cd;
private String bij_job_crd_no;
private Double bij_tot_wgt;
private Double bij_iss_wgt;
private Double bij_bal_wgt;
private String bij_rcvd_bom_wgt;
private String bij_bal_prcs_typ;
@Id
@GeneratedValue
public Long getBij_id() {
	return bij_id;
}
public void setBij_id(Long bij_id) {
	this.bij_id = bij_id;
}
@Index(name="bmcd")
public String getBij_bom_cd() {
	return bij_bom_cd;
}
public void setBij_bom_cd(String bij_bom_cd) {
	this.bij_bom_cd = bij_bom_cd;
}
public String getBij_cmy_cd() {
	return bij_cmy_cd;
}
public void setBij_cmy_cd(String bij_cmy_cd) {
	this.bij_cmy_cd = bij_cmy_cd;
}
public String getBij_dpt_cd() {
	return bij_dpt_cd;
}
public void setBij_dpt_cd(String bij_dpt_cd) {
	this.bij_dpt_cd = bij_dpt_cd;
}
@Index(name="jobcdno")
public String getBij_job_crd_no() {
	return bij_job_crd_no;
}
public void setBij_job_crd_no(String bij_job_crd_no) {
	this.bij_job_crd_no = bij_job_crd_no;
}
@DefaultValue(value="0.0")
public Double getBij_tot_wgt() {
	return bij_tot_wgt;
}
public void setBij_tot_wgt(Double bij_tot_wgt) {
	this.bij_tot_wgt = bij_tot_wgt;
}
@DefaultValue(value="0.0")
public Double getBij_iss_wgt() {
	return bij_iss_wgt;
}
public void setBij_iss_wgt(Double bij_iss_wgt) {
	this.bij_iss_wgt = bij_iss_wgt;
}
@DefaultValue(value="0.0")
public Double getBij_bal_wgt() {
	return bij_bal_wgt;
}
public void setBij_bal_wgt(Double bij_bal_wgt) {
	this.bij_bal_wgt = bij_bal_wgt;
}
@Override
public String toString() {
	return "Bom_Iss_Job_Dtl [bij_id=" + bij_id + ", bij_bom_cd=" + bij_bom_cd + ", bij_pdt_prty=" + bij_pdt_prty
			+ ", bij_cmy_cd=" + bij_cmy_cd + ", bij_dpt_cd=" + bij_dpt_cd + ", bij_job_crd_no=" + bij_job_crd_no
			+ ", bij_tot_wgt=" + bij_tot_wgt + ", bij_iss_wgt=" + bij_iss_wgt + ", bij_bal_wgt=" + bij_bal_wgt
			+ ", bij_rcvd_bom_wgt=" + bij_rcvd_bom_wgt + ", bij_bal_prcs_typ=" + bij_bal_prcs_typ + "]";
}
public String getBij_bal_prcs_typ() {
	return bij_bal_prcs_typ;
}
public void setBij_bal_prcs_typ(String bij_bal_prcs_typ) {
	this.bij_bal_prcs_typ = bij_bal_prcs_typ;
}
public String getBij_rcvd_bom_wgt() {
	return bij_rcvd_bom_wgt;
}
public void setBij_rcvd_bom_wgt(String bij_rcvd_bom_wgt) {
	this.bij_rcvd_bom_wgt = bij_rcvd_bom_wgt;
}
public String getBij_pdt_prty() {
	return bij_pdt_prty;
}
public void setBij_pdt_prty(String bij_pdt_prty) {
	this.bij_pdt_prty = bij_pdt_prty;
}

}
