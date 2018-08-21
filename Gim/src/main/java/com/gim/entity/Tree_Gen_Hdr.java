package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;

@Entity
@Table(name = "tree_gen_hdr")
public class Tree_Gen_Hdr implements Serializable {
	private Long tgh_id;
	private String tgh_doc_no;
	private String tgh_doc_dt;
	private String tgh_no_of_pdt;
	private String tgh_tot_std_wgt;
	private String tgh_no_of_tree;
	private String tgh_tree1_doc_no;
	private String tgh_tree2_doc_no;
	private String tgh_tree3_doc_no;
	private String tgh_tree1_iss_jobcrd;
	private String tgh_tree2_iss_jobcrd;
	private String tgh_tree3_iss_jobcrd;
	private boolean tgh_tree1_iss_cast;
	private boolean tgh_tree2_iss_cast;
	private boolean tgh_tree3_iss_cast;
	private String tgh_tree1_bse_wgt;
	private String tgh_tree2_bse_wgt;
	private String tgh_tree3_bse_wgt;
	private String tgh_tree1_bse_std_wgt;
	private String tgh_tree2_bse_std_wgt;
	private String tgh_tree3_bse_std_wgt;
	private String tgh_tree_tot_bse_std_wgt;
	private String tgh_crt_dt;
	private String tgh_crt_id;
	private String tgh_cmy_cd;
	private String tgh_updt_dt;
	private String tgh_updt_id;
	private boolean tgh_tree_sts;
	private boolean tgh_iss_auth;
	private String tgh_iss_carat;

	@Id
	@GeneratedValue
	public Long getTgh_id() {
		return tgh_id;
	}

	public void setTgh_id(Long tgh_id) {
		this.tgh_id = tgh_id;
	}

	@Index(name = "doc_no_index")
	public String getTgh_doc_no() {
		return tgh_doc_no;
	}

	public void setTgh_doc_no(String tgh_doc_no) {
		this.tgh_doc_no = tgh_doc_no;
	}

	public String getTgh_no_of_pdt() {
		return tgh_no_of_pdt;
	}

	public void setTgh_no_of_pdt(String tgh_no_of_pdt) {
		this.tgh_no_of_pdt = tgh_no_of_pdt;
	}

	public String getTgh_tot_std_wgt() {
		return tgh_tot_std_wgt;
	}

	public void setTgh_tot_std_wgt(String tgh_tot_std_wgt) {
		this.tgh_tot_std_wgt = tgh_tot_std_wgt;
	}

	public String getTgh_no_of_tree() {
		return tgh_no_of_tree;
	}

	public void setTgh_no_of_tree(String tgh_no_of_tree) {
		this.tgh_no_of_tree = tgh_no_of_tree;
	}

	public String getTgh_tree1_bse_wgt() {
		return tgh_tree1_bse_wgt;
	}

	public void setTgh_tree1_bse_wgt(String tgh_tree1_bse_wgt) {
		this.tgh_tree1_bse_wgt = tgh_tree1_bse_wgt;
	}

	public String getTgh_tree2_bse_wgt() {
		return tgh_tree2_bse_wgt;
	}

	public void setTgh_tree2_bse_wgt(String tgh_tree2_bse_wgt) {
		this.tgh_tree2_bse_wgt = tgh_tree2_bse_wgt;
	}

	public String getTgh_tree3_bse_wgt() {
		return tgh_tree3_bse_wgt;
	}

	public void setTgh_tree3_bse_wgt(String tgh_tree3_bse_wgt) {
		this.tgh_tree3_bse_wgt = tgh_tree3_bse_wgt;
	}

	public String getTgh_tree1_bse_std_wgt() {
		return tgh_tree1_bse_std_wgt;
	}

	public void setTgh_tree1_bse_std_wgt(String tgh_tree1_bse_std_wgt) {
		this.tgh_tree1_bse_std_wgt = tgh_tree1_bse_std_wgt;
	}

	public String getTgh_tree2_bse_std_wgt() {
		return tgh_tree2_bse_std_wgt;
	}

	public void setTgh_tree2_bse_std_wgt(String tgh_tree2_bse_std_wgt) {
		this.tgh_tree2_bse_std_wgt = tgh_tree2_bse_std_wgt;
	}

	public String getTgh_tree3_bse_std_wgt() {
		return tgh_tree3_bse_std_wgt;
	}

	public void setTgh_tree3_bse_std_wgt(String tgh_tree3_bse_std_wgt) {
		this.tgh_tree3_bse_std_wgt = tgh_tree3_bse_std_wgt;
	}

	public String getTgh_crt_dt() {
		return tgh_crt_dt;
	}

	public void setTgh_crt_dt(String tgh_crt_dt) {
		this.tgh_crt_dt = tgh_crt_dt;
	}

	public String getTgh_crt_id() {
		return tgh_crt_id;
	}

	public void setTgh_crt_id(String tgh_crt_id) {
		this.tgh_crt_id = tgh_crt_id;
	}

	public String getTgh_updt_dt() {
		return tgh_updt_dt;
	}

	public void setTgh_updt_dt(String tgh_updt_dt) {
		this.tgh_updt_dt = tgh_updt_dt;
	}

	public String getTgh_updt_id() {
		return tgh_updt_id;
	}

	public void setTgh_updt_id(String tgh_updt_id) {
		this.tgh_updt_id = tgh_updt_id;
	}

	public boolean isTgh_tree_sts() {
		return tgh_tree_sts;
	}

	public void setTgh_tree_sts(boolean tgh_tree_sts) {
		this.tgh_tree_sts = tgh_tree_sts;
	}

	@Index(name = "tree1_docno")
	public String getTgh_tree1_doc_no() {
		return tgh_tree1_doc_no;
	}

	public void setTgh_tree1_doc_no(String tgh_tree1_doc_no) {
		this.tgh_tree1_doc_no = tgh_tree1_doc_no;
	}

	@Index(name = "tree2_docno")
	public String getTgh_tree2_doc_no() {
		return tgh_tree2_doc_no;
	}

	public void setTgh_tree2_doc_no(String tgh_tree2_doc_no) {
		this.tgh_tree2_doc_no = tgh_tree2_doc_no;
	}

	@Index(name = "tree3_docno")
	public String getTgh_tree3_doc_no() {
		return tgh_tree3_doc_no;
	}

	public void setTgh_tree3_doc_no(String tgh_tree3_doc_no) {
		this.tgh_tree3_doc_no = tgh_tree3_doc_no;
	}

	@Override
	public String toString() {
		return "Tree_Gen_Hdr [tgh_id=" + tgh_id + ", tgh_doc_no=" + tgh_doc_no + ", tgh_doc_dt=" + tgh_doc_dt
				+ ", tgh_no_of_pdt=" + tgh_no_of_pdt + ", tgh_tot_std_wgt=" + tgh_tot_std_wgt + ", tgh_no_of_tree="
				+ tgh_no_of_tree + ", tgh_tree1_doc_no=" + tgh_tree1_doc_no + ", tgh_tree2_doc_no=" + tgh_tree2_doc_no
				+ ", tgh_tree3_doc_no=" + tgh_tree3_doc_no + ", tgh_tree1_iss_jobcrd=" + tgh_tree1_iss_jobcrd
				+ ", tgh_tree2_iss_jobcrd=" + tgh_tree2_iss_jobcrd + ", tgh_tree3_iss_jobcrd=" + tgh_tree3_iss_jobcrd
				+ ", tgh_tree1_iss_cast=" + tgh_tree1_iss_cast + ", tgh_tree2_iss_cast=" + tgh_tree2_iss_cast
				+ ", tgh_tree3_iss_cast=" + tgh_tree3_iss_cast + ", tgh_tree1_bse_wgt=" + tgh_tree1_bse_wgt
				+ ", tgh_tree2_bse_wgt=" + tgh_tree2_bse_wgt + ", tgh_tree3_bse_wgt=" + tgh_tree3_bse_wgt
				+ ", tgh_tree1_bse_std_wgt=" + tgh_tree1_bse_std_wgt + ", tgh_tree2_bse_std_wgt="
				+ tgh_tree2_bse_std_wgt + ", tgh_tree3_bse_std_wgt=" + tgh_tree3_bse_std_wgt
				+ ", tgh_tree_tot_bse_std_wgt=" + tgh_tree_tot_bse_std_wgt + ", tgh_crt_dt=" + tgh_crt_dt
				+ ", tgh_crt_id=" + tgh_crt_id + ", tgh_cmy_cd=" + tgh_cmy_cd + ", tgh_updt_dt=" + tgh_updt_dt
				+ ", tgh_updt_id=" + tgh_updt_id + ", tgh_tree_sts=" + tgh_tree_sts + ", tgh_iss_auth=" + tgh_iss_auth
				+ ", tgh_iss_carat=" + tgh_iss_carat + "]";
	}

	public boolean isTgh_iss_auth() {
		return tgh_iss_auth;
	}

	public void setTgh_iss_auth(boolean tgh_iss_auth) {
		this.tgh_iss_auth = tgh_iss_auth;
	}

	public String getTgh_tree_tot_bse_std_wgt() {
		return tgh_tree_tot_bse_std_wgt;
	}

	public void setTgh_tree_tot_bse_std_wgt(String tgh_tree_tot_bse_std_wgt) {
		this.tgh_tree_tot_bse_std_wgt = tgh_tree_tot_bse_std_wgt;
	}

	public String getTgh_iss_carat() {
		return tgh_iss_carat;
	}

	public void setTgh_iss_carat(String tgh_iss_carat) {
		this.tgh_iss_carat = tgh_iss_carat;
	}

	public boolean isTgh_tree1_iss_cast() {
		return tgh_tree1_iss_cast;
	}

	public void setTgh_tree1_iss_cast(boolean tgh_tree1_iss_cast) {
		this.tgh_tree1_iss_cast = tgh_tree1_iss_cast;
	}

	public boolean isTgh_tree2_iss_cast() {
		return tgh_tree2_iss_cast;
	}

	public void setTgh_tree2_iss_cast(boolean tgh_tree2_iss_cast) {
		this.tgh_tree2_iss_cast = tgh_tree2_iss_cast;
	}

	public String getTgh_tree1_iss_jobcrd() {
		return tgh_tree1_iss_jobcrd;
	}

	public void setTgh_tree1_iss_jobcrd(String tgh_tree1_iss_jobcrd) {
		this.tgh_tree1_iss_jobcrd = tgh_tree1_iss_jobcrd;
	}

	public String getTgh_tree2_iss_jobcrd() {
		return tgh_tree2_iss_jobcrd;
	}

	public void setTgh_tree2_iss_jobcrd(String tgh_tree2_iss_jobcrd) {
		this.tgh_tree2_iss_jobcrd = tgh_tree2_iss_jobcrd;
	}

	public String getTgh_tree3_iss_jobcrd() {
		return tgh_tree3_iss_jobcrd;
	}

	public void setTgh_tree3_iss_jobcrd(String tgh_tree3_iss_jobcrd) {
		this.tgh_tree3_iss_jobcrd = tgh_tree3_iss_jobcrd;
	}

	public boolean isTgh_tree3_iss_cast() {
		return tgh_tree3_iss_cast;
	}

	public void setTgh_tree3_iss_cast(boolean tgh_tree3_iss_cast) {
		this.tgh_tree3_iss_cast = tgh_tree3_iss_cast;
	}

	public String getTgh_cmy_cd() {
		return tgh_cmy_cd;
	}

	public void setTgh_cmy_cd(String tgh_cmy_cd) {
		this.tgh_cmy_cd = tgh_cmy_cd;
	}

	public String getTgh_doc_dt() {
		return tgh_doc_dt;
	}

	public void setTgh_doc_dt(String tgh_doc_dt) {
		this.tgh_doc_dt = tgh_doc_dt;
	}

}
