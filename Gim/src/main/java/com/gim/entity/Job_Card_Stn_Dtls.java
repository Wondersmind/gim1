package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="job_card_stn_dtls")
public class Job_Card_Stn_Dtls implements Serializable{

	private Long jcsd_id;
	private String jcsd_jbcd_no;
	private Double jcsd_isd_stn;
	private Double jcsd_rqrd_stn;
	private Double jcsd_bal_stn;
	private String jcsd_iss_auth;
	private String jcsd_isd_wgt;
	private String jcsd_stn_cd;
	private String jcsd_cmy_cd;
	private String jcsd_dpt_cd;
	private String jcsd_isd_dt;
	@Id
	@GeneratedValue
	public Long getJcsd_id() {
		return jcsd_id;
	}

	public void setJcsd_id(Long jcsd_id) {
		this.jcsd_id = jcsd_id;
	}

	public String getJcsd_jbcd_no() {
		return jcsd_jbcd_no;
	}

	public void setJcsd_jbcd_no(String jcsd_jbcd_no) {
		this.jcsd_jbcd_no = jcsd_jbcd_no;
	}

	

	public Double getJcsd_isd_stn() {
		return jcsd_isd_stn;
	}

	public void setJcsd_isd_stn(Double jcsd_isd_stn) {
		this.jcsd_isd_stn = jcsd_isd_stn;
	}

	public Double getJcsd_rqrd_stn() {
		return jcsd_rqrd_stn;
	}

	public void setJcsd_rqrd_stn(Double jcsd_rqrd_stn) {
		this.jcsd_rqrd_stn = jcsd_rqrd_stn;
	}

	public Double getJcsd_bal_stn() {
		return jcsd_bal_stn;
	}

	public void setJcsd_bal_stn(Double jcsd_bal_stn) {
		this.jcsd_bal_stn = jcsd_bal_stn;
	}

	public String getJcsd_isd_wgt() {
		return jcsd_isd_wgt;
	}

	public void setJcsd_isd_wgt(String jcsd_isd_wgt) {
		this.jcsd_isd_wgt = jcsd_isd_wgt;
	}

	public String getJcsd_stn_cd() {
		return jcsd_stn_cd;
	}

	public void setJcsd_stn_cd(String jcsd_stn_cd) {
		this.jcsd_stn_cd = jcsd_stn_cd;
	}

	public String getJcsd_cmy_cd() {
		return jcsd_cmy_cd;
	}

	public void setJcsd_cmy_cd(String jcsd_cmy_cd) {
		this.jcsd_cmy_cd = jcsd_cmy_cd;
	}

	public String getJcsd_dpt_cd() {
		return jcsd_dpt_cd;
	}

	public void setJcsd_dpt_cd(String jcsd_dpt_cd) {
		this.jcsd_dpt_cd = jcsd_dpt_cd;
	}

	public String getJcsd_isd_dt() {
		return jcsd_isd_dt;
	}

	public void setJcsd_isd_dt(String jcsd_isd_dt) {
		this.jcsd_isd_dt = jcsd_isd_dt;
	}

	@Override
	public String toString() {
		return "Job_Card_Stn_Dtls [jcsd_id=" + jcsd_id + ", jcsd_jbcd_no=" + jcsd_jbcd_no + ", jcsd_isd_stn="
				+ jcsd_isd_stn + ", jcsd_rqrd_stn=" + jcsd_rqrd_stn + ", jcsd_bal_stn=" + jcsd_bal_stn
				+ ", jcsd_iss_auth=" + jcsd_iss_auth + ", jcsd_isd_wgt=" + jcsd_isd_wgt + ", jcsd_stn_cd="
				+ jcsd_stn_cd + ", jcsd_cmy_cd=" + jcsd_cmy_cd + ", jcsd_dpt_cd=" + jcsd_dpt_cd + ", jcsd_isd_dt="
				+ jcsd_isd_dt + "]";
	}

	public String getJcsd_iss_auth() {
		return jcsd_iss_auth;
	}

	public void setJcsd_iss_auth(String jcsd_iss_auth) {
		this.jcsd_iss_auth = jcsd_iss_auth;
	}
	
}
