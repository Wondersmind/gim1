package com.gim.entity;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="mold_mst")
public class Mold_Mst implements Serializable{
private Long mm_id;
private String mm_cmy_cd;
private String mm_mold_no;
private String mm_mold_un_rq;
private String mm_mold_qty;
private String mm_mold_dscr;
private String mm_mold_img;
private String mm_mold_othr1;
private String mm_mold_othr2;
private String mm_mold_crt_dt;
private String mm_mold_crt_id;
private String mm_mold_updt_dt;
private String mm_mold_updt_id;
private boolean mm_mold_sts;
@Id
@GeneratedValue
public Long getMm_id() {
	return mm_id;
}
public void setMm_id(Long mm_id) {
	this.mm_id = mm_id;
}
public String getMm_cmy_cd() {
	return mm_cmy_cd;
}
public void setMm_cmy_cd(String mm_cmy_cd) {
	this.mm_cmy_cd = mm_cmy_cd;
}
@Index(name="mld_no_index")
public String getMm_mold_no() {
	return mm_mold_no;
}
public void setMm_mold_no(String mm_mold_no) {
	this.mm_mold_no = mm_mold_no;
}
@Column(columnDefinition="TEXT")
public String getMm_mold_dscr() {
	return mm_mold_dscr;
}
public void setMm_mold_dscr(String mm_mold_dscr) {
	this.mm_mold_dscr = mm_mold_dscr;
}

public String getMm_mold_othr1() {
	return mm_mold_othr1;
}
public void setMm_mold_othr1(String mm_mold_othr1) {
	this.mm_mold_othr1 = mm_mold_othr1;
}
public String getMm_mold_othr2() {
	return mm_mold_othr2;
}
public void setMm_mold_othr2(String mm_mold_othr2) {
	this.mm_mold_othr2 = mm_mold_othr2;
}
public String getMm_mold_crt_dt() {
	return mm_mold_crt_dt;
}
public void setMm_mold_crt_dt(String mm_mold_crt_dt) {
	this.mm_mold_crt_dt = mm_mold_crt_dt;
}
public String getMm_mold_crt_id() {
	return mm_mold_crt_id;
}
public void setMm_mold_crt_id(String mm_mold_crt_id) {
	this.mm_mold_crt_id = mm_mold_crt_id;
}
public String getMm_mold_updt_dt() {
	return mm_mold_updt_dt;
}
public void setMm_mold_updt_dt(String mm_mold_updt_dt) {
	this.mm_mold_updt_dt = mm_mold_updt_dt;
}
public String getMm_mold_updt_id() {
	return mm_mold_updt_id;
}
public void setMm_mold_updt_id(String mm_mold_updt_id) {
	this.mm_mold_updt_id = mm_mold_updt_id;
}
public boolean isMm_mold_sts() {
	return mm_mold_sts;
}
public void setMm_mold_sts(boolean mm_mold_sts) {
	this.mm_mold_sts = mm_mold_sts;
}

public String getMm_mold_qty() {
	return mm_mold_qty;
}
public void setMm_mold_qty(String mm_mold_qty) {
	this.mm_mold_qty = mm_mold_qty;
}

@Override
public String toString() {
	return "Mold_Mst [mm_id=" + mm_id + ", mm_cmy_cd=" + mm_cmy_cd + ", mm_mold_no=" + mm_mold_no + ", mm_mold_un_rq="
			+ mm_mold_un_rq + ", mm_mold_qty=" + mm_mold_qty + ", mm_mold_dscr=" + mm_mold_dscr + ", mm_mold_img="
			+ mm_mold_img + ", mm_mold_othr1=" + mm_mold_othr1 + ", mm_mold_othr2=" + mm_mold_othr2
			+ ", mm_mold_crt_dt=" + mm_mold_crt_dt + ", mm_mold_crt_id=" + mm_mold_crt_id + ", mm_mold_updt_dt="
			+ mm_mold_updt_dt + ", mm_mold_updt_id=" + mm_mold_updt_id + ", mm_mold_sts=" + mm_mold_sts + "]";
}
public String getMm_mold_img() {
	return mm_mold_img;
}
public void setMm_mold_img(String mm_mold_img) {
	this.mm_mold_img = mm_mold_img;
}
public String getMm_mold_un_rq() {
	return mm_mold_un_rq;
}
public void setMm_mold_un_rq(String mm_mold_un_rq) {
	this.mm_mold_un_rq = mm_mold_un_rq;
}

}
