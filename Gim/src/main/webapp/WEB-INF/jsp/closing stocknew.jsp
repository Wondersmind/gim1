select * from  aly_mst
delete from aly_mst where am_cmy_cd='10002'
select * from  aly_prcs_hdr
delete from aly_prcs_hdr where aph_cmy_cd='10002'
select * from  aly_prcs_hdr_dtl
delete from aly_prcs_hdr_dtl where aphd_cmy_cd='10002'
select * from  auth_mst
delete from auth_mst where auth_cmy_cd='10002'
select * from  bom_inhse_dtl
delete from bom_inhse_dtl where bid_cmy_cd='10002'
select * from  aly_prcs_hdr
delete from aly_prcs_hdr where  aph_cmy_cd='10002'
select * from  aly_prcs_hdr_dtl
delete from aly_prcs_hdr_dtl where aphd_cmy_cd='10002'
select * from  auth_mst
delete from auth_mst where auth_cmy_cd='10002'
select * from  bom_inhse_dtl
delete from bom_inhse_dtl where bid_cmy_cd='10002'
select * from  bom_iss_job_dtl
delete from bom_iss_job_dtl where bij_cmy_cd='10002'
select * from  bom_mst
delete from bom_mst where bm_cmy_cd='10002'
select * from  bom_stk
delete from bom_stk where bs_cmy_cd='10002'
select * from  carat_mst 
delete from carat_mst where  crtm_cmy_cd='10002'
select * from  cmy_mst 
delete from cmy_mst where cm_cmy_cd='10002'
select * from  cst_prcs_hdr
delete from cst_prcs_hdr where  cph_cmy_cd='10002'
select * from  cst_prcs_hdr_dtl
delete from cst_prcs_hdr_dtl where cphd_cmy_cd='10002'
select * from  daywise_prc_mst
delete from daywise_prc_mst where dw_pm_cmy_cd='10002'
select * from  dc_hdr 
delete from dc_hdr where dh_cmy_cd='10002'
select * from  dc_hdr_dtl
delete from dc_hdr_dtl where dhd_cmy_cd='10002'
select * from  dc_scrp_isd_dtl
select * from  dgn_bom_mst
delete from dgn_bom_mst where dbm_cmy_cd='10002'
select * from  dgn_cst_mst
delete from dgn_cst_mst where dcm_cmy_cd='10002'
select * from dgn_mold_mst
delete from dgn_mold_mst where dmm_cmy_cd='10002'
select * from dgn_mst
delete from dgn_mst where dm_cmy_cd='10002'
select * from dgn_stn_mst
delete from dgn_stn_mst where dsm_cmy_cd='10002'
select * from dpt_mst
delete from dpt_mst where dm_cmy_cd='10002';
select * from emp_mst
delete from emp_mst  where em_cmy_cd='10002';
select * from fnsh_pdt_dtl
delete from fnsh_pdt_dtl where fpd_cmy_cd='10002';
select * from fnsh_pdt_hdr
delete from fnsh_pdt_hdr where fph_cmy_cd='10002'
select * from intl_trf_hdr
delete from intl_trf_hdr  where ith_cmy_cd='10002';
select * from intl_trf_hdr_dtl
delete  from  intl_trf_hdr_dtl where ithd_cmy_cd='10002'
select * from itm_mv
delete itm_mv where im_cmy_cd='10002';
select * from iwd_hdr
delete from iwd_hdr where ih_cmy_cd='10002'
select * from iwd_hdr_dtl
delete from iwd_hdr_dtl where ihd_cmy_cd='10002'
select * from job_card_dtl
delete from job_card_dtl where jcd_cmy_cd='10002'
select * from job_card_stn_dtls
delete from job_card_stn_dtls where jcsd_cmy_cd='10002'
select * from job_ord_hdr
delete from job_ord_hdr where joh_cmy_cd='10002'

select * from job_ord_hdr_dtl
delete job_ord_hdr_dtl where johd_cmy_cd='10002'



select * from mn_prcs_hdr
delete from mn_prcs_hdr where mph_cmy_cd='10002'
select * from mn_prcs_hdr_dtl
delete from mn_prcs_hdr_dtl where mphd_cmy_cd='10002'
select * from 	mn_prcs_job_dtl
delete from mn_prcs_job_dtl where  mpjd_cmy_cd='10002'
select * from 	mn_prcs_job_hdr
delete from mn_prcs_job_hdr where mpjh_cmy_cd='10002'
select * from 	mn_prcs_tmp_dtl
delete from mn_prcs_tmp_dtl where mptd_cmy_cd='10002'
select * from 	mn_prcs_tmp_hdr
delete from mn_prcs_tmp_hdr where mpth_cmy_cd='10002'
select * from 	mold_mst
delete from mold_mst where mm_cmy_cd='10002'
select * from 	ord_hdr
delete from ord_hdr where oh_cmy_cd='10002'
select * from 	ord_hdr_dtl

delete from ord_hdr_dtl where ohd_cmy_cd='10002'
select * from 	prcs_mst
delete from prcs_mst where pm_cmy_cd='10002'
select * from 	raw_mtr_mst
delete from raw_mtr_mst where rm_mst_cmy_cd='10002'
select * from 	rcvd_doc_dtl
delete from rcvd_doc_dtl where rdd_cmy_cd='10002'

select * from 	rcvd_doc_hdr
delete from rcvd_doc_hdr where rdh_cmy_cd='10002'
select * from 	rcvy_emp_stk
delete from rcvy_emp_stk where res_cmy_cd='10002';

select * from 	rcvy_hdr
delete from rcvy_hdr where rh_cmy_cd='10002'
select * from 	rcvy_hdr_dtl
delete from rcvy_hdr_dtl where rhd_cmy_cd='10002'
select * from 	report_details 
delete from report_details where rd_cmy_cd='10002'
select * from 	spcl_stk_mst
delete from spcl_stk_mst where ssm_cmy_cd='10002'
select * from 	stk_mst
delete from stk_mst where stm_cmy_cd='10002'
select * from 	stn_mst
delete from stn_mst where sm_cmy_cd='10002'
select * from 	stone_stk
delete from stone_stk where ss_cmy_cd='10002'
select * from 	str_mst
delete from str_mst where sm_cmy_cd='10002'
select * from 	sub_melt_dtl
delete from sub_melt_dtl where smd_cmy_cd='10002'
select * from 	sub_prcs_hdr
delete from sub_prcs_hdr where sph_cmy_cd='10002'
select * from 	sub_prcs_hdr_dtl
delete from sub_prcs_hdr_dtl where sphd_cmy_cd='10002'
select * from 	test_samples

select * from 	tree_gen_hdr
delete from tree_gen_hdr where  tgh_cmy_cd='10002';
select * from 	tree_gen_hdr_dtl
delete from tree_gen_hdr_dtl where tghd_cmy_cd='10002';
select * from 	uom_mst
delete from uom_mst where um_cmy_cd='10002'
select * from 	user_permission
delete from user_permission 
select * from 	vn_ct_mst
delete from vn_ct_mst where vcm_cmy_cd='10002'
select * from 	wax_hdr
delete from wax_hdr where wh_cmy_cd='10002'
select * from 	wax_hdr_dtl
delete from wax_hdr_dtl where whd_cmy_cd='10002'

