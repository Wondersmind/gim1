package com.gim.entity;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="dgn_mst")
public class Dgn_Mst implements Serializable{
private Long dm_id;
private String dm_cmy_cd;
private String dm_pdt_cd;
private String dm_pdt_nm;
private String dm_dgn_no;
private String dm_dgn_ctgy;
private String dm_dgn_dpt;
private String dm_dgn_typ;
private String dm_dgn_sz;
private String dm_dgn_uom;
private String dm_dgn_std_wt;
private String dm_dgn_min_wt;
private String dm_dgn_max_wt;
private String dm_dgn_vn;
private String dm_dgn_cust_cd;
private String dm_dgn_img;
private String dm_dgn_carat;
private String dm_oth1;
private String dm_oth2;
private boolean dm_is_stn;
private boolean dm_is_bom;
private boolean dm_is_mold;
private String dm_dgn_crt_dt;
private String dm_dgn_crt_id;
private String dm_dgn_updt_dt;
private String dm_dgn_updt_id;
private boolean dm_dgn_sts;
@Id
@GeneratedValue
public Long getDm_id() {
	return dm_id;
}
public void setDm_id(Long dm_id) {
	this.dm_id = dm_id;
}
public String getDm_cmy_cd() {
	return dm_cmy_cd;
}
public void setDm_cmy_cd(String dm_cmy_cd) {
	this.dm_cmy_cd = dm_cmy_cd;
}
@Index(name="pdt_cd_index")
public String getDm_pdt_cd() {
	return dm_pdt_cd;
}
public void setDm_pdt_cd(String dm_pdt_cd) {
	this.dm_pdt_cd = dm_pdt_cd;
}
@Index(name="pdt_nm_index")
public String getDm_pdt_nm() {
	return dm_pdt_nm;
}
public void setDm_pdt_nm(String dm_pdt_nm) {
	this.dm_pdt_nm = dm_pdt_nm;
}
@Index(name="dgn_no_index")
public String getDm_dgn_no() {
	return dm_dgn_no;
}
public void setDm_dgn_no(String dm_dgn_no) {
	this.dm_dgn_no = dm_dgn_no;
}
public String getDm_dgn_ctgy() {
	return dm_dgn_ctgy;
}
public void setDm_dgn_ctgy(String dm_dgn_ctgy) {
	this.dm_dgn_ctgy = dm_dgn_ctgy;
}
public String getDm_dgn_dpt() {
	return dm_dgn_dpt;
}
public void setDm_dgn_dpt(String dm_dgn_dpt) {
	this.dm_dgn_dpt = dm_dgn_dpt;
}
public String getDm_dgn_typ() {
	return dm_dgn_typ;
}
public void setDm_dgn_typ(String dm_dgn_typ) {
	this.dm_dgn_typ = dm_dgn_typ;
}
public String getDm_dgn_sz() {
	return dm_dgn_sz;
}
public void setDm_dgn_sz(String dm_dgn_sz) {
	this.dm_dgn_sz = dm_dgn_sz;
}
public String getDm_dgn_uom() {
	return dm_dgn_uom;
}
public void setDm_dgn_uom(String dm_dgn_uom) {
	this.dm_dgn_uom = dm_dgn_uom;
}
public String getDm_dgn_std_wt() {
	return dm_dgn_std_wt;
}
public void setDm_dgn_std_wt(String dm_dgn_std_wt) {
	this.dm_dgn_std_wt = dm_dgn_std_wt;
}
public String getDm_dgn_min_wt() {
	return dm_dgn_min_wt;
}
public void setDm_dgn_min_wt(String dm_dgn_min_wt) {
	this.dm_dgn_min_wt = dm_dgn_min_wt;
}
public String getDm_dgn_max_wt() {
	return dm_dgn_max_wt;
}
public void setDm_dgn_max_wt(String dm_dgn_max_wt) {
	this.dm_dgn_max_wt = dm_dgn_max_wt;
}

public String getDm_dgn_vn() {
	return dm_dgn_vn;
}
public void setDm_dgn_vn(String dm_dgn_vn) {
	this.dm_dgn_vn = dm_dgn_vn;
}
public String getDm_oth1() {
	return dm_oth1;
}
public void setDm_oth1(String dm_oth1) {
	this.dm_oth1 = dm_oth1;
}
public String getDm_oth2() {
	return dm_oth2;
}
public void setDm_oth2(String dm_oth2) {
	this.dm_oth2 = dm_oth2;
}
public boolean isDm_is_stn() {
	return dm_is_stn;
}
public void setDm_is_stn(boolean dm_is_stn) {
	this.dm_is_stn = dm_is_stn;
}
public boolean isDm_is_bom() {
	return dm_is_bom;
}
public void setDm_is_bom(boolean dm_is_bom) {
	this.dm_is_bom = dm_is_bom;
}
public boolean isDm_is_mold() {
	return dm_is_mold;
}
public void setDm_is_mold(boolean dm_is_mold) {
	this.dm_is_mold = dm_is_mold;
}
public String getDm_dgn_crt_dt() {
	return dm_dgn_crt_dt;
}
public void setDm_dgn_crt_dt(String dm_dgn_crt_dt) {
	this.dm_dgn_crt_dt = dm_dgn_crt_dt;
}
public String getDm_dgn_crt_id() {
	return dm_dgn_crt_id;
}
public void setDm_dgn_crt_id(String dm_dgn_crt_id) {
	this.dm_dgn_crt_id = dm_dgn_crt_id;
}
public String getDm_dgn_updt_dt() {
	return dm_dgn_updt_dt;
}
public void setDm_dgn_updt_dt(String dm_dgn_updt_dt) {
	this.dm_dgn_updt_dt = dm_dgn_updt_dt;
}
public String getDm_dgn_updt_id() {
	return dm_dgn_updt_id;
}
public void setDm_dgn_updt_id(String dm_dgn_updt_id) {
	this.dm_dgn_updt_id = dm_dgn_updt_id;
}
public boolean isDm_dgn_sts() {
	return dm_dgn_sts;
}
public void setDm_dgn_sts(boolean dm_dgn_sts) {
	this.dm_dgn_sts = dm_dgn_sts;
}

public String getDm_dgn_cust_cd() {
	return dm_dgn_cust_cd;
}
public void setDm_dgn_cust_cd(String dm_dgn_cust_cd) {
	this.dm_dgn_cust_cd = dm_dgn_cust_cd;
}

@Override
public String toString() {
	return "Dgn_Mst [dm_id=" + dm_id + ", dm_cmy_cd=" + dm_cmy_cd + ", dm_pdt_cd=" + dm_pdt_cd + ", dm_pdt_nm="
			+ dm_pdt_nm + ", dm_dgn_no=" + dm_dgn_no + ", dm_dgn_ctgy=" + dm_dgn_ctgy + ", dm_dgn_dpt=" + dm_dgn_dpt
			+ ", dm_dgn_typ=" + dm_dgn_typ + ", dm_dgn_sz=" + dm_dgn_sz + ", dm_dgn_uom=" + dm_dgn_uom
			+ ", dm_dgn_std_wt=" + dm_dgn_std_wt + ", dm_dgn_min_wt=" + dm_dgn_min_wt + ", dm_dgn_max_wt="
			+ dm_dgn_max_wt + ", dm_dgn_vn=" + dm_dgn_vn + ", dm_dgn_cust_cd=" + dm_dgn_cust_cd + ", dm_dgn_img="
			+ dm_dgn_img + ", dm_dgn_carat=" + dm_dgn_carat + ", dm_oth1=" + dm_oth1 + ", dm_oth2=" + dm_oth2
			+ ", dm_is_stn=" + dm_is_stn + ", dm_is_bom=" + dm_is_bom + ", dm_is_mold=" + dm_is_mold
			+ ", dm_dgn_crt_dt=" + dm_dgn_crt_dt + ", dm_dgn_crt_id=" + dm_dgn_crt_id + ", dm_dgn_updt_dt="
			+ dm_dgn_updt_dt + ", dm_dgn_updt_id=" + dm_dgn_updt_id + ", dm_dgn_sts=" + dm_dgn_sts + "]";
}
public String getDm_dgn_carat() {
	return dm_dgn_carat;
}
public void setDm_dgn_carat(String dm_dgn_carat) {
	this.dm_dgn_carat = dm_dgn_carat;
}
public String getDm_dgn_img() {
	return dm_dgn_img;
}
public void setDm_dgn_img(String dm_dgn_img) {
	this.dm_dgn_img = dm_dgn_img;
}

}
