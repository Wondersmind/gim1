package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="job_card_dtl")
public class Job_Card_Dtl implements Serializable{
	private Long jcd_id;
	private String jcd_doc_no;
	private String jcd_cmy_cd;
	private String jcd_dpt_cd;
	private String jcd_bom_wgt;
	private String joh_tree1_no;
	private String joh_tree2_no;
	private String joh_tree3_no;
	private String jcd_pdt_prty;
	private String joh_tree1_wgt;
	private String joh_tree2_wgt;
	private String joh_tree3_wgt;
	private String joh_tot_wgt;
	private String joh_isd_wgt;
	private String joh_bal_wgt;
	private String joh_wrk_cd;
	private String joh_wrk_typ;
	private String joh_prcs_typ;
//	private String joh_is_doc_prcs;
	@Id
	@GeneratedValue
	public Long getJcd_id() {
		return jcd_id;
	}

	public void setJcd_id(Long jcd_id) {
		this.jcd_id = jcd_id;
	}
	@Index(name="jbcdno")
	public String getJcd_doc_no() {
		return jcd_doc_no;
	}

	public void setJcd_doc_no(String jcd_doc_no) {
		this.jcd_doc_no = jcd_doc_no;
	}

	public String getJcd_cmy_cd() {
		return jcd_cmy_cd;
	}

	public void setJcd_cmy_cd(String jcd_cmy_cd) {
		this.jcd_cmy_cd = jcd_cmy_cd;
	}
	@Index(name="dptcd")
	public String getJcd_dpt_cd() {
		return jcd_dpt_cd;
	}

	public void setJcd_dpt_cd(String jcd_dpt_cd) {
		this.jcd_dpt_cd = jcd_dpt_cd;
	}

	public String getJcd_bom_wgt() {
		return jcd_bom_wgt;
	}

	public void setJcd_bom_wgt(String jcd_bom_wgt) {
		this.jcd_bom_wgt = jcd_bom_wgt;
	}

	public String getJoh_tree1_wgt() {
		return joh_tree1_wgt;
	}

	public void setJoh_tree1_wgt(String joh_tree1_wgt) {
		this.joh_tree1_wgt = joh_tree1_wgt;
	}

	public String getJoh_tree1_no() {
		return joh_tree1_no;
	}

	public void setJoh_tree1_no(String joh_tree1_no) {
		this.joh_tree1_no = joh_tree1_no;
	}

	public String getJoh_tree2_no() {
		return joh_tree2_no;
	}

	public void setJoh_tree2_no(String joh_tree2_no) {
		this.joh_tree2_no = joh_tree2_no;
	}

	public String getJoh_tree3_no() {
		return joh_tree3_no;
	}

	public void setJoh_tree3_no(String joh_tree3_no) {
		this.joh_tree3_no = joh_tree3_no;
	}

	public String getJoh_tree2_wgt() {
		return joh_tree2_wgt;
	}

	public void setJoh_tree2_wgt(String joh_tree2_wgt) {
		this.joh_tree2_wgt = joh_tree2_wgt;
	}

	public String getJoh_tree3_wgt() {
		return joh_tree3_wgt;
	}

	public void setJoh_tree3_wgt(String joh_tree3_wgt) {
		this.joh_tree3_wgt = joh_tree3_wgt;
	}

	public String getJoh_tot_wgt() {
		return joh_tot_wgt;
	}

	public void setJoh_tot_wgt(String joh_tot_wgt) {
		this.joh_tot_wgt = joh_tot_wgt;
	}

	public String getJoh_wrk_cd() {
		return joh_wrk_cd;
	}

	public void setJoh_wrk_cd(String joh_wrk_cd) {
		this.joh_wrk_cd = joh_wrk_cd;
	}

	@Override
	public String toString() {
		return "Job_Card_Dtl [jcd_id=" + jcd_id + ", jcd_doc_no=" + jcd_doc_no + ", jcd_cmy_cd=" + jcd_cmy_cd
				+ ", jcd_dpt_cd=" + jcd_dpt_cd + ", jcd_bom_wgt=" + jcd_bom_wgt + ", joh_tree1_no=" + joh_tree1_no
				+ ", joh_tree2_no=" + joh_tree2_no + ", joh_tree3_no=" + joh_tree3_no + ", jcd_pdt_prty="
				+ jcd_pdt_prty + ", joh_tree1_wgt=" + joh_tree1_wgt + ", joh_tree2_wgt=" + joh_tree2_wgt
				+ ", joh_tree3_wgt=" + joh_tree3_wgt + ", joh_tot_wgt=" + joh_tot_wgt + ", joh_isd_wgt=" + joh_isd_wgt
				+ ", joh_bal_wgt=" + joh_bal_wgt + ", joh_wrk_cd=" + joh_wrk_cd + ", joh_wrk_typ=" + joh_wrk_typ
				+ ", joh_prcs_typ=" + joh_prcs_typ + "]";
	}

	public String getJoh_wrk_typ() {
		return joh_wrk_typ;
	}

	public void setJoh_wrk_typ(String joh_wrk_typ) {
		this.joh_wrk_typ = joh_wrk_typ;
	}

	public String getJoh_prcs_typ() {
		return joh_prcs_typ;
	}

	public void setJoh_prcs_typ(String joh_prcs_typ) {
		this.joh_prcs_typ = joh_prcs_typ;
	}

	public String getJoh_bal_wgt() {
		return joh_bal_wgt;
	}

	public void setJoh_bal_wgt(String joh_bal_wgt) {
		this.joh_bal_wgt = joh_bal_wgt;
	}

	public String getJoh_isd_wgt() {
		return joh_isd_wgt;
	}

	public void setJoh_isd_wgt(String joh_isd_wgt) {
		this.joh_isd_wgt = joh_isd_wgt;
	}

	public String getJcd_pdt_prty() {
		return jcd_pdt_prty;
	}

	public void setJcd_pdt_prty(String jcd_pdt_prty) {
		this.jcd_pdt_prty = jcd_pdt_prty;
	}

	/*public String getJoh_is_doc_prcs() {
		return joh_is_doc_prcs;
	}

	public void setJoh_is_doc_prcs(String joh_is_doc_prcs) {
		this.joh_is_doc_prcs = joh_is_doc_prcs;
	}*/
	
}
