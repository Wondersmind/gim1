package com.gim.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="test_samples")
public class Test_Samples {
private Long ts_id;
private String ts_smp_no;
private String ts_smp_wgt;
private String ts_cst_doc_no;
private String ts_trf_typ;
private String ts_tree_no;
private String ts_smp_isd;
private String ts_smp_dc_isd;
private String ts_smp_dc_rcvd;
private String ts_isd_prty;
private String ts_rcvd_wgt1;
private String ts_rcvd_wgt2;
private String ts_tot_wgt;
private String ts_rcvd_prty1;
private String ts_rcvd_prty2;
private String ts_chld_isd_wgt;
private String ts_chld_primid;
@Override
public String toString() {
	return "Test_Samples [ts_id=" + ts_id + ", ts_smp_no=" + ts_smp_no + ", ts_smp_wgt=" + ts_smp_wgt
			+ ", ts_cst_doc_no=" + ts_cst_doc_no + ", ts_trf_typ=" + ts_trf_typ + ", ts_tree_no=" + ts_tree_no
			+ ", ts_smp_isd=" + ts_smp_isd + ", ts_smp_dc_isd=" + ts_smp_dc_isd + ", ts_smp_dc_rcvd=" + ts_smp_dc_rcvd
			+ ", ts_isd_prty=" + ts_isd_prty + ", ts_rcvd_wgt1=" + ts_rcvd_wgt1 + ", ts_rcvd_wgt2=" + ts_rcvd_wgt2
			+ ", ts_tot_wgt=" + ts_tot_wgt + ", ts_rcvd_prty1=" + ts_rcvd_prty1 + ", ts_rcvd_prty2=" + ts_rcvd_prty2
			+ ", ts_chld_isd_wgt=" + ts_chld_isd_wgt + ", ts_chld_primid=" + ts_chld_primid + "]";
}
@Id
@GeneratedValue
public Long getTs_id() {
	return ts_id;
}
public void setTs_id(Long ts_id) {
	this.ts_id = ts_id;
}
public String getTs_smp_wgt() {
	return ts_smp_wgt;
}
public void setTs_smp_wgt(String ts_smp_wgt) {
	this.ts_smp_wgt = ts_smp_wgt;
}
public String getTs_cst_doc_no() {
	return ts_cst_doc_no;
}
public void setTs_cst_doc_no(String ts_cst_doc_no) {
	this.ts_cst_doc_no = ts_cst_doc_no;
}
public String getTs_tree_no() {
	return ts_tree_no;
}
public void setTs_tree_no(String ts_tree_no) {
	this.ts_tree_no = ts_tree_no;
}
public String getTs_smp_isd() {
	return ts_smp_isd;
}
public void setTs_smp_isd(String ts_smp_isd) {
	this.ts_smp_isd = ts_smp_isd;
}

public String getTs_isd_prty() {
	return ts_isd_prty;
}
public void setTs_isd_prty(String ts_isd_prty) {
	this.ts_isd_prty = ts_isd_prty;
}
public String getTs_rcvd_wgt1() {
	return ts_rcvd_wgt1;
}
public void setTs_rcvd_wgt1(String ts_rcvd_wgt1) {
	this.ts_rcvd_wgt1 = ts_rcvd_wgt1;
}
public String getTs_rcvd_wgt2() {
	return ts_rcvd_wgt2;
}
public void setTs_rcvd_wgt2(String ts_rcvd_wgt2) {
	this.ts_rcvd_wgt2 = ts_rcvd_wgt2;
}
public String getTs_tot_wgt() {
	return ts_tot_wgt;
}
public void setTs_tot_wgt(String ts_tot_wgt) {
	this.ts_tot_wgt = ts_tot_wgt;
}
public String getTs_rcvd_prty1() {
	return ts_rcvd_prty1;
}
public void setTs_rcvd_prty1(String ts_rcvd_prty1) {
	this.ts_rcvd_prty1 = ts_rcvd_prty1;
}
public String getTs_rcvd_prty2() {
	return ts_rcvd_prty2;
}
public void setTs_rcvd_prty2(String ts_rcvd_prty2) {
	this.ts_rcvd_prty2 = ts_rcvd_prty2;
}
public String getTs_smp_dc_isd() {
	return ts_smp_dc_isd;
}
public void setTs_smp_dc_isd(String ts_smp_dc_isd) {
	this.ts_smp_dc_isd = ts_smp_dc_isd;
}
public String getTs_smp_dc_rcvd() {
	return ts_smp_dc_rcvd;
}
public void setTs_smp_dc_rcvd(String ts_smp_dc_rcvd) {
	this.ts_smp_dc_rcvd = ts_smp_dc_rcvd;
}
public String getTs_smp_no() {
	return ts_smp_no;
}
public void setTs_smp_no(String ts_smp_no) {
	this.ts_smp_no = ts_smp_no;
}
public String getTs_trf_typ() {
	return ts_trf_typ;
}
public void setTs_trf_typ(String ts_trf_typ) {
	this.ts_trf_typ = ts_trf_typ;
}
public String getTs_chld_primid() {
	return ts_chld_primid;
}
public void setTs_chld_primid(String ts_chld_primid) {
	this.ts_chld_primid = ts_chld_primid;
}
public String getTs_chld_isd_wgt() {
	return ts_chld_isd_wgt;
}
public void setTs_chld_isd_wgt(String ts_chld_isd_wgt) {
	this.ts_chld_isd_wgt = ts_chld_isd_wgt;
}

}
