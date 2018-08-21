package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@SuppressWarnings("serial")
@Entity
@Table(name="btw_mst")
public class Btw_Mst implements Serializable{
	private Long btw_id;
	private String btw_cmy_cd;
	private String btw_dept;
	private String btw_doc_no;
	private String btw_scrn;
	private String btw_prcs_typ;
	private String btw_str_cd;
	private String btw_doc_dt;
	private String btw_emp_cd;
	private String btw_itm_typ;
	private String btw_trf_typ;
	private String btw_itm_cd;
	private String btw_iss_prty;
	private String btw_iss_wgt;
	private String btw_iss_pg;
	private String btw_rcv_prty;
	private String btw_rcv_wgt;
	private String btw_rcv_pg;
	private String btw_expt_prty;
	private String btw_expt_wt;
	private String btw_fnsh_pdt;
	private String btw_scrp_mtl;
	private String btw_rcvy_wgt;
	private String btw_rmve_rcvy_wgt;
	private String btw_semi_pdt;
	private String btw_pwdr_mtl;
	private String btw_tree_no;
	private String btw_tree_wgt;
	private String btw_aly_typ;
	private String btw_cnvt_prty;
	private String btw_prty_los;
	private String btw_iss_aly;
	private String btw_smpl_no;
	private String btw_smpl_wgt;
	private String btw_bom_wgt;
	private String btw_wrkr_cd;
	private String btw_rnr_wgt;
	private String btw_pdt_wgt;
	@GeneratedValue
	@Id
	public Long getBtw_id() {
		return btw_id;
	}
	public void setBtw_id(Long btw_id) {
		this.btw_id = btw_id;
	}
	public String getBtw_cmy_cd() {
		return btw_cmy_cd;
	}
	public void setBtw_cmy_cd(String btw_cmy_cd) {
		this.btw_cmy_cd = btw_cmy_cd;
	}
	public String getBtw_dept() {
		return btw_dept;
	}
	public void setBtw_dept(String btw_dept) {
		this.btw_dept = btw_dept;
	}
	public String getBtw_doc_no() {
		return btw_doc_no;
	}
	public void setBtw_doc_no(String btw_doc_no) {
		this.btw_doc_no = btw_doc_no;
	}
	public String getBtw_scrn() {
		return btw_scrn;
	}
	public void setBtw_scrn(String btw_scrn) {
		this.btw_scrn = btw_scrn;
	}
	public String getBtw_prcs_typ() {
		return btw_prcs_typ;
	}
	public void setBtw_prcs_typ(String btw_prcs_typ) {
		this.btw_prcs_typ = btw_prcs_typ;
	}
	public String getBtw_str_cd() {
		return btw_str_cd;
	}
	public void setBtw_str_cd(String btw_str_cd) {
		this.btw_str_cd = btw_str_cd;
	}
	public String getBtw_doc_dt() {
		return btw_doc_dt;
	}
	public void setBtw_doc_dt(String btw_doc_dt) {
		this.btw_doc_dt = btw_doc_dt;
	}
	public String getBtw_emp_cd() {
		return btw_emp_cd;
	}
	public void setBtw_emp_cd(String btw_emp_cd) {
		this.btw_emp_cd = btw_emp_cd;
	}
	public String getBtw_itm_typ() {
		return btw_itm_typ;
	}
	public void setBtw_itm_typ(String btw_itm_typ) {
		this.btw_itm_typ = btw_itm_typ;
	}
	public String getBtw_trf_typ() {
		return btw_trf_typ;
	}
	public void setBtw_trf_typ(String btw_trf_typ) {
		this.btw_trf_typ = btw_trf_typ;
	}
	public String getBtw_itm_cd() {
		return btw_itm_cd;
	}
	public void setBtw_itm_cd(String btw_itm_cd) {
		this.btw_itm_cd = btw_itm_cd;
	}
	public String getBtw_iss_prty() {
		return btw_iss_prty;
	}
	public void setBtw_iss_prty(String btw_iss_prty) {
		this.btw_iss_prty = btw_iss_prty;
	}
	public String getBtw_iss_wgt() {
		return btw_iss_wgt;
	}
	public void setBtw_iss_wgt(String btw_iss_wgt) {
		this.btw_iss_wgt = btw_iss_wgt;
	}
	public String getBtw_iss_pg() {
		return btw_iss_pg;
	}
	public void setBtw_iss_pg(String btw_iss_pg) {
		this.btw_iss_pg = btw_iss_pg;
	}
	public String getBtw_rcv_prty() {
		return btw_rcv_prty;
	}
	public void setBtw_rcv_prty(String btw_rcv_prty) {
		this.btw_rcv_prty = btw_rcv_prty;
	}
	public String getBtw_rcv_wgt() {
		return btw_rcv_wgt;
	}
	public void setBtw_rcv_wgt(String btw_rcv_wgt) {
		this.btw_rcv_wgt = btw_rcv_wgt;
	}
	public String getBtw_rcv_pg() {
		return btw_rcv_pg;
	}
	public void setBtw_rcv_pg(String btw_rcv_pg) {
		this.btw_rcv_pg = btw_rcv_pg;
	}
	public String getBtw_expt_prty() {
		return btw_expt_prty;
	}
	public void setBtw_expt_prty(String btw_expt_prty) {
		this.btw_expt_prty = btw_expt_prty;
	}
	public String getBtw_expt_wt() {
		return btw_expt_wt;
	}
	public void setBtw_expt_wt(String btw_expt_wt) {
		this.btw_expt_wt = btw_expt_wt;
	}
	public String getBtw_fnsh_pdt() {
		return btw_fnsh_pdt;
	}
	public void setBtw_fnsh_pdt(String btw_fnsh_pdt) {
		this.btw_fnsh_pdt = btw_fnsh_pdt;
	}
	public String getBtw_scrp_mtl() {
		return btw_scrp_mtl;
	}
	public void setBtw_scrp_mtl(String btw_scrp_mtl) {
		this.btw_scrp_mtl = btw_scrp_mtl;
	}
	public String getBtw_rcvy_wgt() {
		return btw_rcvy_wgt;
	}
	public void setBtw_rcvy_wgt(String btw_rcvy_wgt) {
		this.btw_rcvy_wgt = btw_rcvy_wgt;
	}
	public String getBtw_rmve_rcvy_wgt() {
		return btw_rmve_rcvy_wgt;
	}
	public void setBtw_rmve_rcvy_wgt(String btw_rmve_rcvy_wgt) {
		this.btw_rmve_rcvy_wgt = btw_rmve_rcvy_wgt;
	}
	public String getBtw_semi_pdt() {
		return btw_semi_pdt;
	}
	public void setBtw_semi_pdt(String btw_semi_pdt) {
		this.btw_semi_pdt = btw_semi_pdt;
	}
	public String getBtw_pwdr_mtl() {
		return btw_pwdr_mtl;
	}
	public void setBtw_pwdr_mtl(String btw_pwdr_mtl) {
		this.btw_pwdr_mtl = btw_pwdr_mtl;
	}
	public String getBtw_tree_no() {
		return btw_tree_no;
	}
	public void setBtw_tree_no(String btw_tree_no) {
		this.btw_tree_no = btw_tree_no;
	}
	public String getBtw_aly_typ() {
		return btw_aly_typ;
	}
	public void setBtw_aly_typ(String btw_aly_typ) {
		this.btw_aly_typ = btw_aly_typ;
	}
	public String getBtw_cnvt_prty() {
		return btw_cnvt_prty;
	}
	public void setBtw_cnvt_prty(String btw_cnvt_prty) {
		this.btw_cnvt_prty = btw_cnvt_prty;
	}
	public String getBtw_prty_los() {
		return btw_prty_los;
	}
	public void setBtw_prty_los(String btw_prty_los) {
		this.btw_prty_los = btw_prty_los;
	}
	public String getBtw_iss_aly() {
		return btw_iss_aly;
	}
	public void setBtw_iss_aly(String btw_iss_aly) {
		this.btw_iss_aly = btw_iss_aly;
	}
	public String getBtw_smpl_no() {
		return btw_smpl_no;
	}
	public void setBtw_smpl_no(String btw_smpl_no) {
		this.btw_smpl_no = btw_smpl_no;
	}
	public String getBtw_tree_wgt() {
		return btw_tree_wgt;
	}
	public void setBtw_tree_wgt(String btw_tree_wgt) {
		this.btw_tree_wgt = btw_tree_wgt;
	}
	
	public String getBtw_smpl_wgt() {
		return btw_smpl_wgt;
	}
	public void setBtw_smpl_wgt(String btw_smpl_wgt) {
		this.btw_smpl_wgt = btw_smpl_wgt;
	}
	public String getBtw_bom_wgt() {
		return btw_bom_wgt;
	}
	public void setBtw_bom_wgt(String btw_bom_wgt) {
		this.btw_bom_wgt = btw_bom_wgt;
	}
	
	public String getBtw_wrkr_cd() {
		return btw_wrkr_cd;
	}
	public void setBtw_wrkr_cd(String btw_wrkr_cd) {
		this.btw_wrkr_cd = btw_wrkr_cd;
	}
	public String getBtw_rnr_wgt() {
		return btw_rnr_wgt;
	}
	public void setBtw_rnr_wgt(String btw_rnr_wgt) {
		this.btw_rnr_wgt = btw_rnr_wgt;
	}
	public String getBtw_pdt_wgt() {
		return btw_pdt_wgt;
	}
	public void setBtw_pdt_wgt(String btw_pdt_wgt) {
		this.btw_pdt_wgt = btw_pdt_wgt;
	}
	@Override
	public String toString() {
		return "Btw_Mst [btw_id=" + btw_id + ", btw_cmy_cd=" + btw_cmy_cd + ", btw_dept=" + btw_dept + ", btw_doc_no="
				+ btw_doc_no + ", btw_scrn=" + btw_scrn + ", btw_prcs_typ=" + btw_prcs_typ + ", btw_str_cd="
				+ btw_str_cd + ", btw_doc_dt=" + btw_doc_dt + ", btw_emp_cd=" + btw_emp_cd + ", btw_itm_typ="
				+ btw_itm_typ + ", btw_trf_typ=" + btw_trf_typ + ", btw_itm_cd=" + btw_itm_cd + ", btw_iss_prty="
				+ btw_iss_prty + ", btw_iss_wgt=" + btw_iss_wgt + ", btw_iss_pg=" + btw_iss_pg + ", btw_rcv_prty="
				+ btw_rcv_prty + ", btw_rcv_wgt=" + btw_rcv_wgt + ", btw_rcv_pg=" + btw_rcv_pg + ", btw_expt_prty="
				+ btw_expt_prty + ", btw_expt_wt=" + btw_expt_wt + ", btw_fnsh_pdt=" + btw_fnsh_pdt + ", btw_scrp_mtl="
				+ btw_scrp_mtl + ", btw_rcvy_wgt=" + btw_rcvy_wgt + ", btw_rmve_rcvy_wgt=" + btw_rmve_rcvy_wgt
				+ ", btw_semi_pdt=" + btw_semi_pdt + ", btw_pwdr_mtl=" + btw_pwdr_mtl + ", btw_tree_no=" + btw_tree_no
				+ ", btw_tree_wgt=" + btw_tree_wgt + ", btw_aly_typ=" + btw_aly_typ + ", btw_cnvt_prty="
				+ btw_cnvt_prty + ", btw_prty_los=" + btw_prty_los + ", btw_iss_aly=" + btw_iss_aly + ", btw_smpl_no="
				+ btw_smpl_no + ", btw_smpl_wgt=" + btw_smpl_wgt + ", btw_bom_wgt=" + btw_bom_wgt + ", btw_wrkr_cd="
				+ btw_wrkr_cd + ", btw_rnr_wgt=" + btw_rnr_wgt + ", btw_pdt_wgt=" + btw_pdt_wgt + "]";
	}
	
	
}
