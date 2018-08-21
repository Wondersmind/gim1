package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="dgn_bom_mst")
public class Dgn_Bom_Mst implements Serializable{
private Long dbm_id;
private String dbm_dgn_no;
private String dbm_bom_cd;
private String dbm_cmy_cd;
private String dbm_bom_pcs;
private String dbm_crt_dt;
private String dbm_crt_id;
private String dbm_updt_dt;
private String dbm_updt_id;
private boolean dbm_dgn_sts;
@Id
@GeneratedValue
public Long getDbm_id() {
	return dbm_id;
}
public void setDbm_id(Long dbm_id) {
	this.dbm_id = dbm_id;
}
@Index(name="dgn_no_index")
public String getDbm_dgn_no() {
	return dbm_dgn_no;
}
public void setDbm_dgn_no(String dbm_dgn_no) {
	this.dbm_dgn_no = dbm_dgn_no;
}
@Index(name="bom_cd_index")
public String getDbm_bom_cd() {
	return dbm_bom_cd;
}
public void setDbm_bom_cd(String dbm_bom_cd) {
	this.dbm_bom_cd = dbm_bom_cd;
}
public String getDbm_bom_pcs() {
	return dbm_bom_pcs;
}
public void setDbm_bom_pcs(String dbm_bom_pcs) {
	this.dbm_bom_pcs = dbm_bom_pcs;
}
public String getDbm_crt_dt() {
	return dbm_crt_dt;
}
public void setDbm_crt_dt(String dbm_crt_dt) {
	this.dbm_crt_dt = dbm_crt_dt;
}
public String getDbm_crt_id() {
	return dbm_crt_id;
}
public void setDbm_crt_id(String dbm_crt_id) {
	this.dbm_crt_id = dbm_crt_id;
}
public String getDbm_updt_dt() {
	return dbm_updt_dt;
}
public void setDbm_updt_dt(String dbm_updt_dt) {
	this.dbm_updt_dt = dbm_updt_dt;
}
public String getDbm_updt_id() {
	return dbm_updt_id;
}
public void setDbm_updt_id(String dbm_updt_id) {
	this.dbm_updt_id = dbm_updt_id;
}

@Override
public String toString() {
	return "Dgn_Bom_Mst [dbm_id=" + dbm_id + ", dbm_dgn_no=" + dbm_dgn_no + ", dbm_bom_cd=" + dbm_bom_cd
			+ ", dbm_cmy_cd=" + dbm_cmy_cd + ", dbm_bom_pcs=" + dbm_bom_pcs + ", dbm_crt_dt=" + dbm_crt_dt
			+ ", dbm_crt_id=" + dbm_crt_id + ", dbm_updt_dt=" + dbm_updt_dt + ", dbm_updt_id=" + dbm_updt_id
			+ ", dbm_dgn_sts=" + dbm_dgn_sts + "]";
}
public boolean isDbm_dgn_sts() {
	return dbm_dgn_sts;
}
public void setDbm_dgn_sts(boolean dbm_dgn_sts) {
	this.dbm_dgn_sts = dbm_dgn_sts;
}
public String getDbm_cmy_cd() {
	return dbm_cmy_cd;
}
public void setDbm_cmy_cd(String dbm_cmy_cd) {
	this.dbm_cmy_cd = dbm_cmy_cd;
}

}
