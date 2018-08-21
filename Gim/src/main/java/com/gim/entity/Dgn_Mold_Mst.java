package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="dgn_mold_mst")
public class Dgn_Mold_Mst implements Serializable{
	private Long dmm_id;
	private String dmm_dgn_no;
	private String dmm_mold_no;
	private String dmm_mold_pcs;
	private String dmm_crt_dt;
	private String dmm_crt_id;
	private String dmm_cmy_cd;
	private String dmm_updt_dt;
	private String dmm_updt_id;
	private boolean dmm_dgn_sts;
	@Id
	@GeneratedValue
	public Long getDmm_id() {
		return dmm_id;
	}
	public void setDmm_id(Long dmm_id) {
		this.dmm_id = dmm_id;
	}
	@Index(name="dgn_no_index")
	public String getDmm_dgn_no() {
		return dmm_dgn_no;
	}
	public void setDmm_dgn_no(String dmm_dgn_no) {
		this.dmm_dgn_no = dmm_dgn_no;
	}
	@Index(name="mold_no_index")
	public String getDmm_mold_no() {
		return dmm_mold_no;
	}
	public void setDmm_mold_no(String dmm_mold_no) {
		this.dmm_mold_no = dmm_mold_no;
	}
	public String getDmm_mold_pcs() {
		return dmm_mold_pcs;
	}
	public void setDmm_mold_pcs(String dmm_mold_pcs) {
		this.dmm_mold_pcs = dmm_mold_pcs;
	}
	public String getDmm_crt_dt() {
		return dmm_crt_dt;
	}
	public void setDmm_crt_dt(String dmm_crt_dt) {
		this.dmm_crt_dt = dmm_crt_dt;
	}
	public String getDmm_crt_id() {
		return dmm_crt_id;
	}
	public void setDmm_crt_id(String dmm_crt_id) {
		this.dmm_crt_id = dmm_crt_id;
	}
	public String getDmm_updt_dt() {
		return dmm_updt_dt;
	}
	public void setDmm_updt_dt(String dmm_updt_dt) {
		this.dmm_updt_dt = dmm_updt_dt;
	}
	public String getDmm_updt_id() {
		return dmm_updt_id;
	}
	public void setDmm_updt_id(String dmm_updt_id) {
		this.dmm_updt_id = dmm_updt_id;
	}

	@Override
	public String toString() {
		return "Dgn_Mold_Mst [dmm_id=" + dmm_id + ", dmm_dgn_no=" + dmm_dgn_no + ", dmm_mold_no=" + dmm_mold_no
				+ ", dmm_mold_pcs=" + dmm_mold_pcs + ", dmm_crt_dt=" + dmm_crt_dt + ", dmm_crt_id=" + dmm_crt_id
				+ ", dmm_cmy_cd=" + dmm_cmy_cd + ", dmm_updt_dt=" + dmm_updt_dt + ", dmm_updt_id=" + dmm_updt_id
				+ ", dmm_dgn_sts=" + dmm_dgn_sts + "]";
	}
	public boolean isDmm_dgn_sts() {
		return dmm_dgn_sts;
	}
	public void setDmm_dgn_sts(boolean dmm_dgn_sts) {
		this.dmm_dgn_sts = dmm_dgn_sts;
	}
	public String getDmm_cmy_cd() {
		return dmm_cmy_cd;
	}
	public void setDmm_cmy_cd(String dmm_cmy_cd) {
		this.dmm_cmy_cd = dmm_cmy_cd;
	}
	
}
