package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="bom_inhse_dtl")
public class Bom_InHse_Dtl implements Serializable{
private Long bid_id;
private String bid_bom_cd;
private String bid_cmy_cd;
private String bid_dpt_cd;
private String bid_job_crd_no;
private Double bid_tot_wgt;
private Double bid_iss_wgt;
private Double bid_bal_wgt;
private String bid_rcvd_bom_wgt;
private String bid_bal_prcs_typ;

@Id
@GeneratedValue
public Long getBid_id() {
	return bid_id;
}
public void setBid_id(Long bid_id) {
	this.bid_id = bid_id;
}
@Index(name="bmcd")
public String getBid_bom_cd() {
	return bid_bom_cd;
}
public void setBid_bom_cd(String bid_bom_cd) {
	this.bid_bom_cd = bid_bom_cd;
}
public String getBid_cmy_cd() {
	return bid_cmy_cd;
}
public void setBid_cmy_cd(String bid_cmy_cd) {
	this.bid_cmy_cd = bid_cmy_cd;
}
public String getBid_dpt_cd() {
	return bid_dpt_cd;
}
public void setBid_dpt_cd(String bid_dpt_cd) {
	this.bid_dpt_cd = bid_dpt_cd;
}
@Index(name="jbcrd")
public String getBid_job_crd_no() {
	return bid_job_crd_no;
}
public void setBid_job_crd_no(String bid_job_crd_no) {
	this.bid_job_crd_no = bid_job_crd_no;
}
public Double getBid_tot_wgt() {
	return bid_tot_wgt;
}
public void setBid_tot_wgt(Double bid_tot_wgt) {
	this.bid_tot_wgt = bid_tot_wgt;
}
public Double getBid_iss_wgt() {
	return bid_iss_wgt;
}
public void setBid_iss_wgt(Double bid_iss_wgt) {
	this.bid_iss_wgt = bid_iss_wgt;
}
public Double getBid_bal_wgt() {
	return bid_bal_wgt;
}
public void setBid_bal_wgt(Double bid_bal_wgt) {
	this.bid_bal_wgt = bid_bal_wgt;
}
public String getBid_rcvd_bom_wgt() {
	return bid_rcvd_bom_wgt;
}
public void setBid_rcvd_bom_wgt(String bid_rcvd_bom_wgt) {
	this.bid_rcvd_bom_wgt = bid_rcvd_bom_wgt;
}
public String getBid_bal_prcs_typ() {
	return bid_bal_prcs_typ;
}
public void setBid_bal_prcs_typ(String bid_bal_prcs_typ) {
	this.bid_bal_prcs_typ = bid_bal_prcs_typ;
}
@Override
public String toString() {
	return "Bom_InHse_Dtl [bid_id=" + bid_id + ", bid_bom_cd=" + bid_bom_cd + ", bid_cmy_cd=" + bid_cmy_cd
			+ ", bid_dpt_cd=" + bid_dpt_cd + ", bid_job_crd_no=" + bid_job_crd_no + ", bid_tot_wgt=" + bid_tot_wgt
			+ ", bid_iss_wgt=" + bid_iss_wgt + ", bid_bal_wgt=" + bid_bal_wgt + ", bid_rcvd_bom_wgt="
			+ bid_rcvd_bom_wgt + ", bid_bal_prcs_typ=" + bid_bal_prcs_typ + "]";
}

}
