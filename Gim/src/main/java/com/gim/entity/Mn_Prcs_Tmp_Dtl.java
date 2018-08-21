package com.gim.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Index;
@Entity
@Table(name="mn_prcs_tmp_dtl")
public class Mn_Prcs_Tmp_Dtl implements Serializable{
private Long mptd_id;
private String mptd_doc_no;
private String mptd_ord_typ;
private String mptd_ord_qty;
private String mptd_frm_dpt;
private String mptd_cmy_cd;
private String mptd_prcs_typ;
private Double mptd_semi_bom;
private String mptd_wrk_cd;
private String mptd_shw_wgt_rcvd;
@Id
@GeneratedValue
public Long getMptd_id() {
	return mptd_id;
}

public void setMptd_id(Long mptd_id) {
	this.mptd_id = mptd_id;
}

public String getMptd_doc_no() {
	return mptd_doc_no;
}

public void setMptd_doc_no(String mptd_doc_no) {
	this.mptd_doc_no = mptd_doc_no;
}

public String getMptd_ord_typ() {
	return mptd_ord_typ;
}

public void setMptd_ord_typ(String mptd_ord_typ) {
	this.mptd_ord_typ = mptd_ord_typ;
}

public String getMptd_ord_qty() {
	return mptd_ord_qty;
}

public void setMptd_ord_qty(String mptd_ord_qty) {
	this.mptd_ord_qty = mptd_ord_qty;
}

public String getMptd_frm_dpt() {
	return mptd_frm_dpt;
}

public void setMptd_frm_dpt(String mptd_frm_dpt) {
	this.mptd_frm_dpt = mptd_frm_dpt;
}

public String getMptd_prcs_typ() {
	return mptd_prcs_typ;
}

public void setMptd_prcs_typ(String mptd_prcs_typ) {
	this.mptd_prcs_typ = mptd_prcs_typ;
}

public String getMptd_wrk_cd() {
	return mptd_wrk_cd;
}

public void setMptd_wrk_cd(String mptd_wrk_cd) {
	this.mptd_wrk_cd = mptd_wrk_cd;
}

public String getMptd_wrk_typ() {
	return mptd_wrk_typ;
}

public void setMptd_wrk_typ(String mptd_wrk_typ) {
	this.mptd_wrk_typ = mptd_wrk_typ;
}

public String getMptd_trgt_dt() {
	return mptd_trgt_dt;
}

public void setMptd_trgt_dt(String mptd_trgt_dt) {
	this.mptd_trgt_dt = mptd_trgt_dt;
}

public String getMptd_iss_doc_no() {
	return mptd_iss_doc_no;
}

public void setMptd_iss_doc_no(String mptd_iss_doc_no) {
	this.mptd_iss_doc_no = mptd_iss_doc_no;
}

public String getMptd_itm_cd() {
	return mptd_itm_cd;
}

public void setMptd_itm_cd(String mptd_itm_cd) {
	this.mptd_itm_cd = mptd_itm_cd;
}

public String getMptd_itm_typ() {
	return mptd_itm_typ;
}

public void setMptd_itm_typ(String mptd_itm_typ) {
	this.mptd_itm_typ = mptd_itm_typ;
}

public String getMptd_rqd_bom() {
	return mptd_rqd_bom;
}

public void setMptd_rqd_bom(String mptd_rqd_bom) {
	this.mptd_rqd_bom = mptd_rqd_bom;
}

public String getMptd_bom_wgt() {
	return mptd_bom_wgt;
}

public void setMptd_bom_wgt(String mptd_bom_wgt) {
	this.mptd_bom_wgt = mptd_bom_wgt;
}

public String getMptd_itm_prty() {
	return mptd_itm_prty;
}

public void setMptd_itm_prty(String mptd_itm_prty) {
	this.mptd_itm_prty = mptd_itm_prty;
}

public String getMptd_iss_wgt() {
	return mptd_iss_wgt;
}

public void setMptd_iss_wgt(String mptd_iss_wgt) {
	this.mptd_iss_wgt = mptd_iss_wgt;
}

public String getMptd_rtn_smi_fsh_pdt() {
	return mptd_rtn_smi_fsh_pdt;
}

public void setMptd_rtn_smi_fsh_pdt(String mptd_rtn_smi_fsh_pdt) {
	this.mptd_rtn_smi_fsh_pdt = mptd_rtn_smi_fsh_pdt;
}

public String getMptd_rtn_scrp_mtl() {
	return mptd_rtn_scrp_mtl;
}

public void setMptd_rtn_scrp_mtl(String mptd_rtn_scrp_mtl) {
	this.mptd_rtn_scrp_mtl = mptd_rtn_scrp_mtl;
}

public boolean isMptd_iss_auth() {
	return mptd_iss_auth;
}

public void setMptd_iss_auth(boolean mptd_iss_auth) {
	this.mptd_iss_auth = mptd_iss_auth;
}

public boolean isMptd_rcvd_auth() {
	return mptd_rcvd_auth;
}

public void setMptd_rcvd_auth(boolean mptd_rcvd_auth) {
	this.mptd_rcvd_auth = mptd_rcvd_auth;
}

public String getMptd_crt_id() {
	return mptd_crt_id;
}

public void setMptd_crt_id(String mptd_crt_id) {
	this.mptd_crt_id = mptd_crt_id;
}

public String getMptd_crt_dt() {
	return mptd_crt_dt;
}

public void setMptd_crt_dt(String mptd_crt_dt) {
	this.mptd_crt_dt = mptd_crt_dt;
}

public String getMptd_updt_id() {
	return mptd_updt_id;
}

public void setMptd_updt_id(String mptd_updt_id) {
	this.mptd_updt_id = mptd_updt_id;
}

public String getMptd_updt_dt() {
	return mptd_updt_dt;
}

public void setMptd_updt_dt(String mptd_updt_dt) {
	this.mptd_updt_dt = mptd_updt_dt;
}

public boolean isMptd_prcs_sts() {
	return mptd_prcs_sts;
}

public void setMptd_prcs_sts(boolean mptd_prcs_sts) {
	this.mptd_prcs_sts = mptd_prcs_sts;
}

private String mptd_wrk_typ;
private String mptd_trgt_dt;
private String mptd_iss_doc_no;
private String mptd_itm_cd;
private String mptd_itm_typ;
private String mptd_rqd_bom;
private String mptd_bom_wgt;
private String mptd_itm_prty;
private String mptd_iss_wgt;
private String mptd_rtn_smi_fsh_pdt;
private String mptd_rtn_scrp_mtl;
private String mptd_lst_fnsh_pdt;
private String mptd_lst_scrp_pdt;
private String mptd_lst_smi_pdt;
private String mptd_bal_wgt;
private boolean mptd_iss_auth;
private boolean mptd_rcvd_auth;
private String mptd_crt_id;
private String mptd_crt_dt;
private String mptd_updt_id;
private String mptd_updt_dt;
private boolean mptd_prcs_sts;
private String mptd_dc_isd_sts;
private String mptd_dc_rcvd_sts;
@Id
@GeneratedValue
public Long getmptd_id() {
	return mptd_id;
}

public void setmptd_id(Long mptd_id) {
	this.mptd_id = mptd_id;
}
public String getmptd_rqd_bom() {
	return mptd_rqd_bom;
}

public void setmptd_rqd_bom(String mptd_rqd_bom) {
	this.mptd_rqd_bom = mptd_rqd_bom;
}

public String getmptd_bom_wgt() {
	return mptd_bom_wgt;
}

public void setmptd_bom_wgt(String mptd_bom_wgt) {
	this.mptd_bom_wgt = mptd_bom_wgt;
}

@Index(name="doc_no_index")
public String getmptd_doc_no() {
	return mptd_doc_no;
}

public void setmptd_doc_no(String mptd_doc_no) {
	this.mptd_doc_no = mptd_doc_no;
}
@Index(name="dpt_index")
public String getmptd_frm_dpt() {
	return mptd_frm_dpt;
}

public void setmptd_frm_dpt(String mptd_frm_dpt) {
	this.mptd_frm_dpt = mptd_frm_dpt;
}

public String getmptd_prcs_typ() {
	return mptd_prcs_typ;
}

public void setmptd_prcs_typ(String mptd_prcs_typ) {
	this.mptd_prcs_typ = mptd_prcs_typ;
}
@Index(name="wrk_cd_index")
public String getmptd_wrk_cd() {
	return mptd_wrk_cd;
}

public void setmptd_wrk_cd(String mptd_wrk_cd) {
	this.mptd_wrk_cd = mptd_wrk_cd;
}

public String getmptd_wrk_typ() {
	return mptd_wrk_typ;
}

public void setmptd_wrk_typ(String mptd_wrk_typ) {
	this.mptd_wrk_typ = mptd_wrk_typ;
}

public String getmptd_trgt_dt() {
	return mptd_trgt_dt;
}

public void setmptd_trgt_dt(String mptd_trgt_dt) {
	this.mptd_trgt_dt = mptd_trgt_dt;
}
@Index(name="_iss_doc_no_index")
public String getmptd_iss_doc_no() {
	return mptd_iss_doc_no;
}

public void setmptd_iss_doc_no(String mptd_iss_doc_no) {
	this.mptd_iss_doc_no = mptd_iss_doc_no;
}


@Index(name="itm_cd_index")
public String getmptd_itm_cd() {
	return mptd_itm_cd;
}

public void setmptd_itm_cd(String mptd_itm_cd) {
	this.mptd_itm_cd = mptd_itm_cd;
}

public String getmptd_itm_typ() {
	return mptd_itm_typ;
}

public void setmptd_itm_typ(String mptd_itm_typ) {
	this.mptd_itm_typ = mptd_itm_typ;
}

public String getmptd_iss_wgt() {
	return mptd_iss_wgt;
}

public void setmptd_iss_wgt(String mptd_iss_wgt) {
	this.mptd_iss_wgt = mptd_iss_wgt;
}

public String getmptd_rtn_smi_fsh_pdt() {
	return mptd_rtn_smi_fsh_pdt;
}

public void setmptd_rtn_smi_fsh_pdt(String mptd_rtn_smi_fsh_pdt) {
	this.mptd_rtn_smi_fsh_pdt = mptd_rtn_smi_fsh_pdt;
}


public String getmptd_rtn_scrp_mtl() {
	return mptd_rtn_scrp_mtl;
}

public void setmptd_rtn_scrp_mtl(String mptd_rtn_scrp_mtl) {
	this.mptd_rtn_scrp_mtl = mptd_rtn_scrp_mtl;
}



public boolean ismptd_iss_auth() {
	return mptd_iss_auth;
}

public void setmptd_iss_auth(boolean mptd_iss_auth) {
	this.mptd_iss_auth = mptd_iss_auth;
}

public boolean ismptd_rcvd_auth() {
	return mptd_rcvd_auth;
}

public void setmptd_rcvd_auth(boolean mptd_rcvd_auth) {
	this.mptd_rcvd_auth = mptd_rcvd_auth;
}

public String getmptd_crt_id() {
	return mptd_crt_id;
}

public void setmptd_crt_id(String mptd_crt_id) {
	this.mptd_crt_id = mptd_crt_id;
}

public String getmptd_crt_dt() {
	return mptd_crt_dt;
}

public void setmptd_crt_dt(String mptd_crt_dt) {
	this.mptd_crt_dt = mptd_crt_dt;
}

public String getmptd_updt_id() {
	return mptd_updt_id;
}

public void setmptd_updt_id(String mptd_updt_id) {
	this.mptd_updt_id = mptd_updt_id;
}

public String getmptd_updt_dt() {
	return mptd_updt_dt;
}

public void setmptd_updt_dt(String mptd_updt_dt) {
	this.mptd_updt_dt = mptd_updt_dt;
}

public boolean ismptd_prcs_sts() {
	return mptd_prcs_sts;
}

public void setmptd_prcs_sts(boolean mptd_prcs_sts) {
	this.mptd_prcs_sts = mptd_prcs_sts;
}

@Override
public String toString() {
	return "Mn_Prcs_Tmp_Dtl [mptd_id=" + mptd_id + ", mptd_doc_no=" + mptd_doc_no + ", mptd_ord_typ=" + mptd_ord_typ
			+ ", mptd_ord_qty=" + mptd_ord_qty + ", mptd_frm_dpt=" + mptd_frm_dpt + ", mptd_cmy_cd=" + mptd_cmy_cd
			+ ", mptd_prcs_typ=" + mptd_prcs_typ + ", mptd_semi_bom=" + mptd_semi_bom + ", mptd_wrk_cd=" + mptd_wrk_cd
			+ ", mptd_shw_wgt_rcvd=" + mptd_shw_wgt_rcvd + ", mptd_wrk_typ=" + mptd_wrk_typ + ", mptd_trgt_dt="
			+ mptd_trgt_dt + ", mptd_iss_doc_no=" + mptd_iss_doc_no + ", mptd_itm_cd=" + mptd_itm_cd
			+ ", mptd_itm_typ=" + mptd_itm_typ + ", mptd_rqd_bom=" + mptd_rqd_bom + ", mptd_bom_wgt=" + mptd_bom_wgt
			+ ", mptd_itm_prty=" + mptd_itm_prty + ", mptd_iss_wgt=" + mptd_iss_wgt + ", mptd_rtn_smi_fsh_pdt="
			+ mptd_rtn_smi_fsh_pdt + ", mptd_rtn_scrp_mtl=" + mptd_rtn_scrp_mtl + ", mptd_lst_fnsh_pdt="
			+ mptd_lst_fnsh_pdt + ", mptd_lst_scrp_pdt=" + mptd_lst_scrp_pdt + ", mptd_lst_smi_pdt=" + mptd_lst_smi_pdt
			+ ", mptd_bal_wgt=" + mptd_bal_wgt + ", mptd_iss_auth=" + mptd_iss_auth + ", mptd_rcvd_auth="
			+ mptd_rcvd_auth + ", mptd_crt_id=" + mptd_crt_id + ", mptd_crt_dt=" + mptd_crt_dt + ", mptd_updt_id="
			+ mptd_updt_id + ", mptd_updt_dt=" + mptd_updt_dt + ", mptd_prcs_sts=" + mptd_prcs_sts
			+ ", mptd_dc_isd_sts=" + mptd_dc_isd_sts + ", mptd_dc_rcvd_sts=" + mptd_dc_rcvd_sts + "]";
}

public String getmptd_itm_prty() {
	return mptd_itm_prty;
}

public void setmptd_itm_prty(String mptd_itm_prty) {
	this.mptd_itm_prty = mptd_itm_prty;
}

public String getmptd_bal_wgt() {
	return mptd_bal_wgt;
}

public void setmptd_bal_wgt(String mptd_bal_wgt) {
	this.mptd_bal_wgt = mptd_bal_wgt;
}

public String getMptd_shw_wgt_rcvd() {
	return mptd_shw_wgt_rcvd;
}

public void setMptd_shw_wgt_rcvd(String mptd_shw_wgt_rcvd) {
	this.mptd_shw_wgt_rcvd = mptd_shw_wgt_rcvd;
}

public String getMptd_bal_wgt() {
	return mptd_bal_wgt;
}

public void setMptd_bal_wgt(String mptd_bal_wgt) {
	this.mptd_bal_wgt = mptd_bal_wgt;
}

public String getMptd_dc_isd_sts() {
	return mptd_dc_isd_sts;
}

public void setMptd_dc_isd_sts(String mptd_dc_isd_sts) {
	this.mptd_dc_isd_sts = mptd_dc_isd_sts;
}

public String getMptd_dc_rcvd_sts() {
	return mptd_dc_rcvd_sts;
}

public void setMptd_dc_rcvd_sts(String mptd_dc_rcvd_sts) {
	this.mptd_dc_rcvd_sts = mptd_dc_rcvd_sts;
}

public Double getMptd_semi_bom() {
	return mptd_semi_bom;
}

public void setMptd_semi_bom(Double mptd_semi_bom) {
	this.mptd_semi_bom = mptd_semi_bom;
}

public String getMptd_lst_fnsh_pdt() {
	return mptd_lst_fnsh_pdt;
}

public void setMptd_lst_fnsh_pdt(String mptd_lst_fnsh_pdt) {
	this.mptd_lst_fnsh_pdt = mptd_lst_fnsh_pdt;
}

public String getMptd_lst_scrp_pdt() {
	return mptd_lst_scrp_pdt;
}

public void setMptd_lst_scrp_pdt(String mptd_lst_scrp_pdt) {
	this.mptd_lst_scrp_pdt = mptd_lst_scrp_pdt;
}

public String getMptd_lst_smi_pdt() {
	return mptd_lst_smi_pdt;
}

public void setMptd_lst_smi_pdt(String mptd_lst_smi_pdt) {
	this.mptd_lst_smi_pdt = mptd_lst_smi_pdt;
}

public String getMptd_cmy_cd() {
	return mptd_cmy_cd;
}

public void setMptd_cmy_cd(String mptd_cmy_cd) {
	this.mptd_cmy_cd = mptd_cmy_cd;
}



}
