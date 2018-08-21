package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name="dc_scrp_isd_dtl")
public class Dc_Scrp_Isd_Dtl implements Serializable{
	private Long dsid_id;
	private String dsid_dc_no;
	private String dsid_trf_typ;
	private String dsid_isd_doc_no;
	private String dsid_wrk_nm;
	private String dsid_qty;
	private String dsid_isd_prty;
	private String dsid_isd_wgt;
	private String dsid_isd_exst_wgt;
	private String dsid_smpl_no;
	private String dsid_smpl_isd_mtl_wgt;
	private String dsid_smpl_isd_wgt;
	private String dsid_smpl_rcvd_wgt;
	private String dsid_smpl_rcvd_prty;
	@Override
	public String toString() {
		return "Dc_Scrp_Isd_Dtl [dsid_id=" + dsid_id + ", dsid_dc_no=" + dsid_dc_no + ", dsid_trf_typ=" + dsid_trf_typ
				+ ", dsid_isd_doc_no=" + dsid_isd_doc_no + ", dsid_wrk_nm=" + dsid_wrk_nm + ", dsid_qty=" + dsid_qty
				+ ", dsid_isd_prty=" + dsid_isd_prty + ", dsid_isd_wgt=" + dsid_isd_wgt + ", dsid_isd_exst_wgt="
				+ dsid_isd_exst_wgt + ", dsid_smpl_no=" + dsid_smpl_no + ", dsid_smpl_isd_mtl_wgt="
				+ dsid_smpl_isd_mtl_wgt + ", dsid_smpl_isd_wgt=" + dsid_smpl_isd_wgt + ", dsid_smpl_rcvd_wgt="
				+ dsid_smpl_rcvd_wgt + ", dsid_smpl_rcvd_prty=" + dsid_smpl_rcvd_prty + "]";
	}
	@Id
	@GeneratedValue
	public Long getDsid_id() {
		return dsid_id;
	}
	public void setDsid_id(Long dsid_id) {
		this.dsid_id = dsid_id;
	}
	@Index(name="dc_no")
	public String getDsid_dc_no() {
		return dsid_dc_no;
	}
	public void setDsid_dc_no(String dsid_dc_no) {
		this.dsid_dc_no = dsid_dc_no;
	}
	public String getDsid_trf_typ() {
		return dsid_trf_typ;
	}
	public void setDsid_trf_typ(String dsid_trf_typ) {
		this.dsid_trf_typ = dsid_trf_typ;
	}
	public String getDsid_isd_doc_no() {
		return dsid_isd_doc_no;
	}
	public void setDsid_isd_doc_no(String dsid_isd_doc_no) {
		this.dsid_isd_doc_no = dsid_isd_doc_no;
	}
	public String getDsid_wrk_nm() {
		return dsid_wrk_nm;
	}
	public void setDsid_wrk_nm(String dsid_wrk_nm) {
		this.dsid_wrk_nm = dsid_wrk_nm;
	}
	public String getDsid_qty() {
		return dsid_qty;
	}
	public void setDsid_qty(String dsid_qty) {
		this.dsid_qty = dsid_qty;
	}
	public String getDsid_isd_prty() {
		return dsid_isd_prty;
	}
	public void setDsid_isd_prty(String dsid_isd_prty) {
		this.dsid_isd_prty = dsid_isd_prty;
	}
	public String getDsid_isd_wgt() {
		return dsid_isd_wgt;
	}
	public void setDsid_isd_wgt(String dsid_isd_wgt) {
		this.dsid_isd_wgt = dsid_isd_wgt;
	}
	public String getDsid_isd_exst_wgt() {
		return dsid_isd_exst_wgt;
	}
	public void setDsid_isd_exst_wgt(String dsid_isd_exst_wgt) {
		this.dsid_isd_exst_wgt = dsid_isd_exst_wgt;
	}
	public String getDsid_smpl_no() {
		return dsid_smpl_no;
	}
	public void setDsid_smpl_no(String dsid_smpl_no) {
		this.dsid_smpl_no = dsid_smpl_no;
	}
	public String getDsid_smpl_isd_mtl_wgt() {
		return dsid_smpl_isd_mtl_wgt;
	}
	public void setDsid_smpl_isd_mtl_wgt(String dsid_smpl_isd_mtl_wgt) {
		this.dsid_smpl_isd_mtl_wgt = dsid_smpl_isd_mtl_wgt;
	}
	public String getDsid_smpl_isd_wgt() {
		return dsid_smpl_isd_wgt;
	}
	public void setDsid_smpl_isd_wgt(String dsid_smpl_isd_wgt) {
		this.dsid_smpl_isd_wgt = dsid_smpl_isd_wgt;
	}
	public String getDsid_smpl_rcvd_wgt() {
		return dsid_smpl_rcvd_wgt;
	}
	public void setDsid_smpl_rcvd_wgt(String dsid_smpl_rcvd_wgt) {
		this.dsid_smpl_rcvd_wgt = dsid_smpl_rcvd_wgt;
	}
	public String getDsid_smpl_rcvd_prty() {
		return dsid_smpl_rcvd_prty;
	}
	public void setDsid_smpl_rcvd_prty(String dsid_smpl_rcvd_prty) {
		this.dsid_smpl_rcvd_prty = dsid_smpl_rcvd_prty;
	}
	
}
