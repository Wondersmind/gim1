package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="dgn_stn_mst")
public class Dgn_Stn_Mst implements Serializable{
private Long dsm_id;
private String dsm_dgn_no;
private String dsm_stn_cd;
private String dsm_stn_pcs;
private String dsm_crt_dt;
private String dsm_crt_id;
private String dsm_updt_dt;
private String dsm_cmy_cd;
private String dsm_updt_id;
private boolean dsm_dgn_sts;
@Id
@GeneratedValue
public Long getDsm_id() {
	return dsm_id;
}
public void setDsm_id(Long dsm_id) {
	this.dsm_id = dsm_id;
}
@Index(name="dgn_no_index")
public String getDsm_dgn_no() {
	return dsm_dgn_no;
}
public void setDsm_dgn_no(String dsm_dgn_no) {
	this.dsm_dgn_no = dsm_dgn_no;
}
@Index(name="stn_cd_index")
public String getDsm_stn_cd() {
	return dsm_stn_cd;
}
public void setDsm_stn_cd(String dsm_stn_cd) {
	this.dsm_stn_cd = dsm_stn_cd;
}
public String getDsm_stn_pcs() {
	return dsm_stn_pcs;
}
public void setDsm_stn_pcs(String dsm_stn_pcs) {
	this.dsm_stn_pcs = dsm_stn_pcs;
}
public String getDsm_crt_dt() {
	return dsm_crt_dt;
}
public void setDsm_crt_dt(String dsm_crt_dt) {
	this.dsm_crt_dt = dsm_crt_dt;
}
public String getDsm_crt_id() {
	return dsm_crt_id;
}
public void setDsm_crt_id(String dsm_crt_id) {
	this.dsm_crt_id = dsm_crt_id;
}
public String getDsm_updt_dt() {
	return dsm_updt_dt;
}
public void setDsm_updt_dt(String dsm_updt_dt) {
	this.dsm_updt_dt = dsm_updt_dt;
}
public String getDsm_updt_id() {
	return dsm_updt_id;
}
public void setDsm_updt_id(String dsm_updt_id) {
	this.dsm_updt_id = dsm_updt_id;
}

@Override
public String toString() {
	return "Dgn_Stn_Mst [dsm_id=" + dsm_id + ", dsm_dgn_no=" + dsm_dgn_no + ", dsm_stn_cd=" + dsm_stn_cd
			+ ", dsm_stn_pcs=" + dsm_stn_pcs + ", dsm_crt_dt=" + dsm_crt_dt + ", dsm_crt_id=" + dsm_crt_id
			+ ", dsm_updt_dt=" + dsm_updt_dt + ", dsm_cmy_cd=" + dsm_cmy_cd + ", dsm_updt_id=" + dsm_updt_id
			+ ", dsm_dgn_sts=" + dsm_dgn_sts + "]";
}
public boolean isDsm_dgn_sts() {
	return dsm_dgn_sts;
}
public void setDsm_dgn_sts(boolean dsm_dgn_sts) {
	this.dsm_dgn_sts = dsm_dgn_sts;
}
public String getDsm_cmy_cd() {
	return dsm_cmy_cd;
}
public void setDsm_cmy_cd(String dsm_cmy_cd) {
	this.dsm_cmy_cd = dsm_cmy_cd;
}

}
