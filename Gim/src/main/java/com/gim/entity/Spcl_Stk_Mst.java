package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="spcl_stk_mst")
public class Spcl_Stk_Mst implements Serializable{
private long ssm_id;
private Double ssm_rn_wgt;
private Double ssm_dust_mtl;
private String ssm_dpt_cd;
private String ssm_mtl_prty;
private String ssm_cmy_cd;
private String ssm_crt_id;
private String ssm_updt_id;
@Id
@GeneratedValue
public long getSsm_id() {
	return ssm_id;
}
public void setSsm_id(long ssm_id) {
	this.ssm_id = ssm_id;
}
public Double getSsm_rn_wgt() {
	return ssm_rn_wgt;
}
public void setSsm_rn_wgt(Double ssm_rn_wgt) {
	this.ssm_rn_wgt = ssm_rn_wgt;
}
public Double getSsm_dust_mtl() {
	return ssm_dust_mtl;
}
public void setSsm_dust_mtl(Double ssm_dust_mtl) {
	this.ssm_dust_mtl = ssm_dust_mtl;
}
@Index(name="dptmnt")
public String getSsm_dpt_cd() {
	return ssm_dpt_cd;
}
public void setSsm_dpt_cd(String ssm_dpt_cd) {
	this.ssm_dpt_cd = ssm_dpt_cd;
}
public String getSsm_cmy_cd() {
	return ssm_cmy_cd;
}
public void setSsm_cmy_cd(String ssm_cmy_cd) {
	this.ssm_cmy_cd = ssm_cmy_cd;
}
public String getSsm_crt_id() {
	return ssm_crt_id;
}
public void setSsm_crt_id(String ssm_crt_id) {
	this.ssm_crt_id = ssm_crt_id;
}
public String getSsm_updt_id() {
	return ssm_updt_id;
}
public void setSsm_updt_id(String ssm_updt_id) {
	this.ssm_updt_id = ssm_updt_id;
}
@Override
public String toString() {
	return "Spcl_Stk_Mst [ssm_id=" + ssm_id + ", ssm_rn_wgt=" + ssm_rn_wgt + ", ssm_dust_mtl=" + ssm_dust_mtl
			+ ", ssm_dpt_cd=" + ssm_dpt_cd + ", ssm_mtl_prty=" + ssm_mtl_prty + ", ssm_cmy_cd=" + ssm_cmy_cd
			+ ", ssm_crt_id=" + ssm_crt_id + ", ssm_updt_id=" + ssm_updt_id + "]";
}
public String getSsm_mtl_prty() {
	return ssm_mtl_prty;
}
public void setSsm_mtl_prty(String ssm_mtl_prty) {
	this.ssm_mtl_prty = ssm_mtl_prty;
}

}
