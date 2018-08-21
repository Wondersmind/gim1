package com.gim.Service;

import java.util.List;
import java.util.UUID;

























































































































































































































































































































































































































































































































import com.gim.entity.Aly_Mst;
import com.gim.entity.Aly_Prcs_Hdr;
import com.gim.entity.Aly_Prcs_Hdr_Dtl;
import com.gim.entity.Auth_Mst;
import com.gim.entity.Bom_Iss_Job_Dtl;
import com.gim.entity.Bom_Mst;
import com.gim.entity.Carat_Mst;
import com.gim.entity.Cmy_Mst;
import com.gim.entity.Cst_Prcs_Hdr;
import com.gim.entity.Cst_Prcs_Hdr_Dtl;
import com.gim.entity.DayWise_Prc_Mst;
import com.gim.entity.Dc_Hdr;
import com.gim.entity.Dgn_Bom_Mst;
import com.gim.entity.Dgn_Cst_Mst;
import com.gim.entity.Dgn_Mold_Mst;
import com.gim.entity.Dgn_Mst;
import com.gim.entity.Dgn_Stn_Mst;
import com.gim.entity.Dpt_Mst;
import com.gim.entity.Emp_Mst;
import com.gim.entity.Fnsh_Pdt_Hdr;
import com.gim.entity.Intl_Trf_Hdr;
import com.gim.entity.Intl_Trf_Hdr_Dtl;
import com.gim.entity.Itm_Mv;
import com.gim.entity.Iwd_Hdr;
import com.gim.entity.Iwd_Hdr_Dtl;
import com.gim.entity.Job_Ord_Hdr;
import com.gim.entity.Job_Ord_Hdr_Dtl;
import com.gim.entity.Mn_Prcs_Hdr;
import com.gim.entity.Mn_Prcs_Hdr_Dtl;
import com.gim.entity.Mn_Prcs_Job_Dtl;
import com.gim.entity.Mn_Prcs_Job_Hdr;
import com.gim.entity.Mn_Prcs_Tmp_Dtl;
import com.gim.entity.Mn_Prcs_Tmp_Hdr;
import com.gim.entity.Mold_Mst;
import com.gim.entity.Ord_Hdr;
import com.gim.entity.Ord_Hdr_Dtl;
import com.gim.entity.Prcs_Mst;
import com.gim.entity.Raw_Mtr_Mst;
import com.gim.entity.Rcvd_Doc_Dtl;
import com.gim.entity.Rcvd_Doc_Hdr;
import com.gim.entity.Rcvy_Hdr;
import com.gim.entity.Report_Details;
import com.gim.entity.Spcl_Stk_Mst;
import com.gim.entity.Stk_Mst;
import com.gim.entity.Stn_Mst;
import com.gim.entity.Str_Mst;
import com.gim.entity.Sub_Prcs_Hdr;
import com.gim.entity.Sub_Prcs_Hdr_Dtl;
import com.gim.entity.Tree_Gen_Hdr;
import com.gim.entity.Tree_Gen_Hdr_Dtl;
import com.gim.entity.Uom_Mst;
import com.gim.entity.User;
import com.gim.entity.Vn_Ct_Mst;
import com.gim.entity.Wax_Hdr;
import com.gim.entity.Wax_Hdr_Dtl;


/**
 * @author s6
 *
 */
/**
 * @author s6
 *
 */
public interface GimManager {

	public User getUser();


	// ************************************************************************

	public String getExistingPrimaryIdOfMainTempProcess() ;
	public User getUser(String username);


	public void saveCompanyDetail(Cmy_Mst companyDetail);


	public List<Cmy_Mst> getExistAddedCompany();


	public void saveDepartMentDetail(Dpt_Mst dptDetail);


	public List<Object[]> getExistDepartmentDetail();


	public void saveBomDetail(Bom_Mst bomDetail);


	public List<Object[]> getExistBomDetail();


	public void delCompanyMstRecImpl(Long id);


	public void delDepartmentMstRecImpl(Long id);


	public void delBomMstRecImpl(Long id);


	public void saveStoreDetail(Str_Mst storeDetail);


	public List<Object[]> getExistStoreDetail();


	public void delStoreMstRecImpl(Long id);


	public void saveUomDetail(Uom_Mst uomDetail);


	public List<Object[]> getExistingUomDetail();


	public void delUomMstRecImpl(Long id);


	public void saveProcessDetail(Prcs_Mst prcDetail);


	public List<Dpt_Mst> getDepMntDetailInProcessPage();


	public List<Object[]> getExistProcessDetail();


	public void delProcessMstRecImpl(Long id);


	public void saveProcessDetail(Stn_Mst stnDetail);


	public void delStoneMstRecImpl(Long id);


	public List<Object[]> getExistStoneDetail();


	public void saveMoldDetail(Mold_Mst mldDetail);


	public List<Object[]> getExistMoldDetail();


	public void delMoldMstRecImpl(Long id);


	public void saveRawMaterialDetail(Raw_Mtr_Mst rawDetail);


	public List<Object[]> getExistRawMaterialDetail();


	public void delRawMstRecImpl(Long id);


	public void delDayMstRecImpl(Long id);


	public void saveDayMaterialDetail(DayWise_Prc_Mst dayDetail);


	public List<Object[]> getExistDayWiseDetail();


	public List<Str_Mst> getStrDetailInProcessPage();


	public void delEmpMstRecImpl(Long id);


	public String getEmpIdForSavingDetail();


	public void saveEmpMaterialDetail(Emp_Mst empDetail);


	public List<Object[]> getExistEmpDetails();


	public void delVendorMstRecImpl(Long id);


	public void saveVendorMaterialDetail(Vn_Ct_Mst vcmDetail);


	public List<Object[]> getExistVendorDetails();


	public List<Object[]> getAllNonGoldProductSrchImpl(String id);


	public List<Object[]> getAllBomProductSrchImpl(String id);


	public  List<Object[]> getAllMoldProductSrchImpl(String id);


	public Stn_Mst getOneStoneProductDetImpl(String id);


	public Bom_Mst getOneBomProductDetImpl(String id);


	Mold_Mst getOneMoldProductDetImpl(String id);


	public List<Uom_Mst> getUomDetailInProcessPage();


	public List<Vn_Ct_Mst> getVnCtDetailInProcessPage();


	public void saveStoneDetail(Stn_Mst stnDetail);


	public void saveDesignStoneMstListDeatil(List<Dgn_Stn_Mst> listDsm);


	public void saveDesignBomMstListDeatil(List<Dgn_Bom_Mst> listDbm);


	public void saveDesignMoldMstListDeatil(List<Dgn_Mold_Mst> listDmm);


	public void saveDesignMstDetail(Dgn_Mst clicks);


	public void saveDesignCastMstDetail(Dgn_Cst_Mst dcstMst);


	public List<Object[]> getExistDesignDetails();


	public void delDesignMstRecImpl(Long id);


	public Cmy_Mst getExistCmyDetailForEdit(Long cmyId);


	public void saveCompanyDetailEdit(Cmy_Mst companyDetail);


	public Dpt_Mst getExistDeptMentDetailForEdit(Long dptId);


	public void saveDepartMentDetailEdit(Dpt_Mst dptDetail);


	public Emp_Mst getExistEmpDetailForEdit(Long empId);


	public void saveEmpMaterialDetailEdit(Emp_Mst empDetail);


	public Bom_Mst getExistBomDetailForEdit(Long bomId);


	public void saveBomDetailEdit(Bom_Mst bomDetail);


	public Uom_Mst getExistUomDetailForEdit(Long uomId);


	public void saveUomDetailEdit(Uom_Mst uomDetail);


	public DayWise_Prc_Mst getExistDayDetailEdit(Long dayId);


	public void saveDayMaterialDetailEdit(DayWise_Prc_Mst dayDetail);


	public Str_Mst getExistStrDetailForEdit(Long strId);


	public void saveStoreDetailEdit(Str_Mst storeDetail);


	public Prcs_Mst getExistProcessDetailForEdit(Long prcsId);


	public void saveProcessDetailEdit(Prcs_Mst prcDetail);


	public Vn_Ct_Mst getExistVntCstDetailForEdit(Long vntId);


	public void saveVendorMaterialDetailEdit(Vn_Ct_Mst vcmDetail);


	public Stn_Mst getExistStoneDetailForEdit(Long stnId);


	public void saveStoneDetailEdit(Stn_Mst stnDetail);


	public Mold_Mst getExistMoldDetailForEdit(Long mldId);


	public void saveMoldDetailEdit(Mold_Mst mldDetail);


	public Raw_Mtr_Mst getExistRawDetailForEdit(Long rawId);


	public void saveRawMaterialDetailEdit(Raw_Mtr_Mst rawDetail);


	public Dgn_Mst getExistDgnDetailForEdit(Long dgnId);


	public List<Object[]> getExistDgnStnWithDesignId(Long dgnId);


	public List<Object[]> getExistDgnBomWithDesignId(Long dgnId);


	public List<Object[]> getExistDgnMoldWithDesignId(Long dgnId);


	public Object getExistDgnCstWithDesignId(Long dgnId);


	public void delExistNonGoldfromDgnAjaxImpl(Long id);


	public void delExistBomfromDgnAjaxImpl(Long id);


	public void delExistMoldfromDgnAjaxImpl(Long id);


	public void delExistCastfromDgnAjaxImpl(Long id);


	public Dgn_Stn_Mst checkStoneWithDgnNoForAddAjaxImpl(String stnId, String degId);


	public Dgn_Bom_Mst checkBomDetailForAddDesignAjaxImpl(String id, String degId);


	public Dgn_Mold_Mst checkMoldDetailForAddDesignAjaxImpl(String id, String degId);


	public void saveDesignMstDetailEdit(Dgn_Mst clicks);


	public void setStatusDisableInDgnCstMstForDgnID(String dm_dgn_no);


	public void updateQtyInDgnStnExistAjaxImpl(Long id, String qty);


	public void updateQtyInDgnBomExistAjaxImpl(Long id, String qty);


	public void updateQtyInDgnMoldExistAjaxImpl(Long id, String qty);


	public String takeAutGenIdForComyCd();


	public String chkThisCmyCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForDptCd();


	public String chkThisDptCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForBomCd();


	public String chkThisBomCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForUomCd();


	public String chkThisUomCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForStrCd();


	public String chkThisStrCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForPrcsCd();


	public String chkThisPrcsCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForVnCtCd();


	public String chkThisVnCtCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForStnCd();


	public String chkThisStnCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForMoldCd();


	public String chkThisMoldCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForrwMtrlCd();


	public String chkThisRwMtrCdAlrdyPrsntOrNotImpl(String id);


	public String takeAutGenIdForDgnPdtCd();


	public String chkThisDgnPdtCdAlrdyPrsntOrNotImpl(String id);


	public String checkEmailandPasswordGIMLoginImp(String userName, String password);


	public Emp_Mst getEmplyeeDetailByEmail(String usEml);


	public Dpt_Mst getDepCdFromDepNmImp(String dm_dgn_dpt);


	public void saveImportedDesignDetailList(List<Dgn_Mst> dgMst);


	public Stn_Mst getStoneCdByStoneNameImp(String sm_stn_nm, String string, String string2, String string3);


	public Bom_Mst getBomCdByBomNameImp(String bm_bom_nm, String string, String string2, String string3);


	public List<Cmy_Mst> getExistCompanyDetailByEmpId(String em_emp_id);


	public List<Str_Mst> getExistStroeDetailByEmpId(String em_emp_id);


	public List<Vn_Ct_Mst> getExistVnCtDetailByEmpId(String em_emp_id);


	public Ord_Hdr checkOrderNoIsPrsntOrNot(String string);


	public void saveImportOrderDetail(List<Ord_Hdr_Dtl> ordMst);


	public List<Object[]> getAllDesignProductSrchImpl(String id);


	public String takeAutGenIdForOrderCd();


	public Object getDgnProDetailForAddOrderAjaxImpl(String pdtCd);


	public void saveImportOrderHdrOnlyDetail(List<Ord_Hdr> ordHdrMst);


	public List<Object[]> getExistOrderDetail(String string);


	public Ord_Hdr_Dtl eckOrderNoWihtPdtCdIsPrsentOrNotImpl(String pdtCd, String ordNo);


	public void delOrderHdrRecAjaxImpl(Long id);


	public Object getExistOrderHdrDetailForEdit(Long ohdId);


	public Object getExistOrderHdrTableForTakingSum(Long ohdId);


	public List<Object[]> getAllOrderHderDetalsFor(Long ohdId);


	public void removeExistOrderMultilpeImpl(String join, String noOf, String qty, String stdSum, String odNo);


	public void updateOrHdrAndOrdHdrDetailBothImpl(String rowCnt, String sumOfStd, String sumQty, String ordNo, String auth);


	public String takeAutGenIdForWaxDocNo();


	public List<Object[]> getNeededProductAndOrderDetailForWax(String em_emp_id);


	public List<Emp_Mst> getExistWorkerDetailByEmpId(String em_emp_id);


	public List<Object[]> getNeededOrdNoDetailForWax(String em_emp_id);


	public List<Object[]> performSearchBasedOnTrgtAndOdrNoImpl(String trgtDt, String odNo,String dpt, String string, String ordType, String cmycd, String ctgy, String reuse,String carat);


	public void saveWaxHdrDataOnlyImpl(Wax_Hdr wxHdr);


	public void saveWaxHdrDetailImpl(List<Wax_Hdr_Dtl> wxHdtls);


	public void updateOrderHdrDetailRecFromPendingWaxTo(String join, String string);


	public List<Object[]> getAllExistWaxDetailForUser(String em_emp_id);


	public List<Object[]> performSearchBasedOnDptCodeImpl(String dptC, String em_emp_id, String ordType, String cmycd, String ctgy, String reuse,String carat);


	public List<Object[]> editForWaxHdrDetailById(Long waxId);


	public List<Object[]> getNeededOrdNoDetailForWaxEdit(Long waxId);


	public List<Object[]> getNeededDeptDetailForWaxEdit(Long waxId);


	public Object editWaxHdrRecById(Long waxId);


	public void delWaxRelatedRecFromDataBase(Long id, String docNo);


	public void updateWaxHdrDataOnlyImpl(Wax_Hdr wxHdr);


	public void delExistWaxHdrFromEditWaxInAjaxImpl(String join);


	public List<Wax_Hdr> getExistWaxNoDetailByEmpId(String em_emp_id);


	public List<Object[]> getExistWaxHdrDetailForAddTree(String em_emp_id);


	public List<Object[]> getExistCategoryInWaxHDrDtl();


	public String takeAutGenIdForTreeDocNo();


	public List<Object[]> getsearchForWaxHdrRecInTreeImpl(String tgtDt, String string2, String string3, String string4, String string, String cmycd, String wrkcd, String jo, String ordtp,String carat);


	public List<String> findDubOrdNoWithProCdImpl();


	public List<String> getProCdForFindDubInImportOrder();


	public void saveTreeGenHdrDetailInImpl(List<Tree_Gen_Hdr_Dtl> trGenHdrDtl);


	public void saveTreeGenHdrOnlyInImpl(Tree_Gen_Hdr trGenHdr);


	public void updateWaxHdrDetailRecInImpl(String join);


	public List<Object[]> getExistTreeGenratorHdrOnly(String em_emp_id);


	public List<Object[]> getExistTreeHdrDetailForEdit(Long tghId);


	public Object getExistTreeHdrOnlyForEdit(Long tghId);


	public List<String> getExistCateGoryForTreeHdrDetail(Long tghId);


	public List<String> getExistDptForTreeHdrDetail(Long tghId);


	public List<String> getExistWaxForTreeHdrDetail(Long tghId);


	public List<String> getProDptNamForFindDubInImportOrder();


	public void removeRecOfTreeHdrdetailFromDb(String join);


	public List<Raw_Mtr_Mst> getSearchRawMeterialResultImpl(String id);


	public List<Raw_Mtr_Mst> getAllExistRawMeterialProId();


	public List<Bom_Mst> getExistBomProIdForAddInwrd();


	public String takeAutGenIdForInwardCd();


	public void saveInwardHdrOnlyImpl(Iwd_Hdr iwHdr);


	public void saveItemMoventDetailFromInward(List<Itm_Mv> itmMvDtlList);


	public void saveStkMstDetailFromInward(List<Stk_Mst> stkDtlList);


	public void saveIwdHdrDetailToDb(List<Iwd_Hdr_Dtl> iwdDtlList);


	public List<Object[]> getAllExistInwardDetail(String em_emp_id);


	public Ord_Hdr checkOrdAuthById(Long ohdId);


	public void updateOnlyAuthInOrdHdr(String auth, String auth2);


	public void delExistTreeHdrRecOnly(Long id);


	public List<Object[]> getExistInwardHdrDetail(Long iwd_id);


	public Object[] getExistInwardHdrOnly(Long iwd_id);


	public void delExistInwardHdrDetRecordInImpl(String join);


	public String getAutoGnAlyMstCd();


	public void saveAlloyMstDetInImpl(Aly_Mst aly);


	public List<Aly_Mst> getAllExistAlyMstDetail();


	public Aly_Mst getExistAlyDetailOnlyById(Long alyCd);


	public void delAlloyMstRecFromDbImpl(Long id);


	public String getAutoGenIdOfAlyHdr();


	public List<Object[]> getInwardRecForAddAlloyImpl(String qry);


	public void deleteInwardRecAjaxImpl(Long id, String docNo);


	public List<Object[]> seacrhBasedOnDptAndDateImpl(String dpt, String dt, String cmyCd);


	public void saveAlyPrcsHdrOnlyImpl(Aly_Prcs_Hdr alyOnly);


	public void saveAlyPrcsHdrDetlImpl(List<Aly_Prcs_Hdr_Dtl> alyPrcDet);


	public List<Stk_Mst> getExistDetailOfStkForUpdate(String join);


	public List<Object[]> getAllExistAlyPrcHdrDetail();


	public Object[] getExistAlyPrcsHtrAndDtls(Long alyId);


	public List<Object[]> getExistAlyPrcsItmsDetl(Long alyId);


	public List<Stk_Mst> getExistAlyInPrcssForStk(String string);


	public List<Stk_Mst> getExistAlyInRecvdForStk(String string);


	public List<Object[]> getExistAlyPrcsItmsDetlWithoutAuth(Long alyId);


	public List<Tree_Gen_Hdr_Dtl> getExistTreeGenHdrDtlForUpdate(String object);


	public void deleteAlyHdrRecInImpl(Long id);


	public List<Tree_Gen_Hdr> getExistTreeHdrRecOnlyAuth();


	public List<Object[]> getExistTreeHdrDetailNeedForCast();


	public List<String> getExistDptCdForAlyEdit(Long alyId);


	public String getAutoGenIdOfCastHdr();


	public List<Object[]> srchInAddCastingDtlInImpl(String string,String tghtDt, String ctgy, String exprty);


	public List<Stk_Mst> getAllStackTotWeigtBasedOnCmpltPrcs(String string);


	public List<String> checkExistDocNoInCasting();


	public void saveCastHdrDtlListToDataBase(List<Cst_Prcs_Hdr_Dtl> cstHdrDtlList);


	public void saveCstHdrOnlyImpl(Cst_Prcs_Hdr cstHdrOnly);


	public void updateTreeGtrHdrDtlStsChangeInCstSent(String join, String string);


	public List<Object[]> getAllExistCstHdrDetailList();


	public Object[] getExsitCstHdrOnlyByIdInImpl(Long cstId);


	public List<Object[]> getExsitCstHdrDtlsByIdInImpl(Long cstId);


	public List<String> getExsitDptFrmCstHdrDtlsByIdImpl(Long cstId);


	public List<String> getExsitTreNoFrmCstHdrDtlsByIdImpl(Long cstId);


	public List<Stk_Mst> getExistStkDetailInCstIssd(String string);


	public List<Cst_Prcs_Hdr_Dtl> getExistCstDetailForUpdte(String docNo);


	public List<Tree_Gen_Hdr_Dtl> getAllTreeInCstPrcsSts();


	public void deleteExstCstDtlRec(String join);


	public void delCstHdrRecDtlAjaxImpl(Long id);


	public List<Object[]> filterJobOrderAddInAjaxImpl(String ctgyTy,String ordNo,String pdtTyp,String pdtdptCd,String tgtDt,String cmycd, String waxNo, String prcsType,String bomqry, String waxtyp, String treeno,String ordtyp, String ordprty);


	public String takeAutGenIdForJobOrdDocNo();


	public List<String> getAllExistJobOrdDocNoForCheck();


	public void saveJobOrderHdrOnly(Job_Ord_Hdr jbOnly);


	public void saveAllJobOrdHdrDetailImpl(List<Job_Ord_Hdr_Dtl> jbDtl);


	public List<Object[]> getAllExsitJobOrdeHdrRec();


	public void updateJobOrdStsInOrderTableTrue(String join, String string);


	public List<Object[]> getAllExistJobHdrDetailForEdit(String id, String string);


	public Object[] getExistJobOrdHdrDetOnlyIn(Long jobOrdId);


	public List<String> getOrdNoInJobOrdHdrDet(Long jobOrdId);


	public List<String> getExsitOrdTypFromJobHdrDtl(Long jobOrdId);


	public void delExistJobHdrDetailRecImpl(String join);


	public void delJobOrdHdrRecDtlImpl(String id, String typ);


	public void jobOrderIssueINCstHdrRecDtlAjax(String ordNo);
	  public void jobOrderIssueINCstHdrRecDtlAjaxCastingafter(Long id, String ordno);

	public List<Object[]> getAddInternalTransferDataImpl(String dptCd, String trType, String cmyCd,String qryJn, String dpt, String filterDoc);


	public List<Object[]> getAddInternalTransferDataBasedOrdNo(String dptCd, String trType, String join,String doc, String qryTyp);


	public String takeAutGenIdForintlTrfCd();


	public List<String> getAllExistIntrlTrfCd();


	public void saveItnlHdrRecOnlyToDb(Intl_Trf_Hdr itlHrOnly);


	public void saveItnlHderDetailToDb(List<Intl_Trf_Hdr_Dtl> itlHdrDetList);


	public List<Stk_Mst> getAllStakForAddInternTrf(String string);


	public void updateStatusOfJobOrdHderDetail(String join);


	public List<Object[]> getAllExistIntrnlTrfHdrDetail();


	public List<Object[]> getAllExistIntrlHdrDetRecFor(String docNo, String trfTyp);


	public Object getExistIntrlHdrOnly(String docNo);


	public Intl_Trf_Hdr getInternalTrfHdrRecById(Long itnlId);


	public void delExstIntrnlHdrDetalRecByid(String join);


	public void stsChangeInJobHdrDetailById(String join);


	public List<Intl_Trf_Hdr_Dtl> getAllExsitIntrlHdrDetailRecByImpl(String docNo);


	public void deleteIntlTrfRecDtlImpl(Long id, String docno, String typ);


	public void updateWaxHdrDetailRecFromPendingWaxTo(String exstWax);


	public void updateWaxHdrOnlyRecFromPendingWaxTo(String docNo);


	public List<String> getAllExistEmployeeMoblie();


	public List<String> getAllExistEmployeeEmail();


	public List<String> getAllExistVendorMoblie();


	public List<String> getAllExistVendorEmail();


	public void updateOrderHdrDetailComAndStrChange(String ohd_cmy_cd, String ohd_cst_cd, String ohd_str_cd,
			String ohd_ord_typ, String ordNo);


	public void updateOrderHdrDetailListAuthUpdate(String priIdOfHdrDtl);


	public List<Iwd_Hdr_Dtl> getAllExistInwdHdrDetailById(String string);


	public List<String> getAllExistActiveBacthNo();


	public List<Job_Ord_Hdr_Dtl> getAllExstJobOrdDetByDocNo(String string);


	public List<Stk_Mst> getExistStkDetailInward(String em_emp_id);


	public String getStkOfEmpl(String em_emp_id);


	public List<Ord_Hdr_Dtl> getExsitingOrderHdrDtlById(String oh_ord_no);


	public void updatercvdWgtOfCastingImpl(String prty, Long id, String treeNo);


	public void updateRcvdPrtyOfAlyPrcsImpl(String qry);


	public void updateOrdHderJobStsChangeDetail(String orderPriIds);


	public List<Stk_Mst> getAllExsitJobRcvdForTransfer();


	public List<Stk_Mst> getAllExsitJobCardRecvedList();


	public List<Stk_Mst> getAllExsitJobCardIsueGreaterThenZeroList();


	public String getExistingPrimaryIdOfSubProcess();


	public List<Prcs_Mst> getExistProcessDetailInSubPrcs();


	public List<Job_Ord_Hdr> getExistJobOrderNoInAddsubPrcs();


	public List<Tree_Gen_Hdr> getAllExstTreeNoHder();


	public List<Object[]> getExistingJobAndtreeDetail(String string);


	public List<Object[]> filterInJobCardAndTreeForImpl(String trgtDt, String jbCardNo, String treNo, String cmyCd, String dptCd);


	public List<Stk_Mst> getAllExsitStkIssSubPrcsList();


	public void saveSupPrcsHdrDtalTODb(List<Sub_Prcs_Hdr_Dtl> sbPrcsHdrDtlList);


	public void saveSupPrcsHdOnlyTODb(Sub_Prcs_Hdr sbPrcsHdr);


	public List<Object[]> getExstSubProcessHderDetalForShow();


	public Object[] getSubPrcsHderForEdit(Long sph_id);


	public List<Object[]> getSubPrcsHdrDtlForEdit(String sph_doc_no,String trnTyp, boolean ismelt);


	public List<Stk_Mst> getAllExstStkRcvdInSubPrcsList();


	public void deletesubprcshdrDtlImpl(Long id, String docNo);


	public String getExistingPrimaryIdOfMainProcess();


	public List<Object[]> getExistingJobAndtreeDetailMnPrcs();


	public void saveMainPrcsHdrDtalTODb(List<Mn_Prcs_Hdr_Dtl> sbPrcsHdrDtlList);


	public void saveMainPrcsHdOnlyTODb(Mn_Prcs_Hdr sbPrcsHdr);


	public List<Object[]> getAllMainPrcsHdrDetail();


	public Mn_Prcs_Hdr getAllExstMnHdrForEdit(Long docNo);




	List<Object[]> getExsitMAinPrcsHdrDetailForEdit(String docNo, Long primid);


	public void deleteExstMainHdrWithDetImpl(String doc);


	public List<Stk_Mst> getAllExsitStkIssMainPrcsList();


	public List<Stk_Mst> getAllExstStkRcvdInMainPrcsList();


	public List<Object[]> searchBasedOnDptAndJbCdInMainPrcsInmp(String dpt, String jbCrd, String trgtDt);


	public List<Object[]> getAllInwardedItemForMainPrcsStkImpl(String val);


	public List<Stk_Mst> getAllExsitInwardRecvedList();


	public void saveMainPrcsHdrTmpDtalTODb(List<Mn_Prcs_Tmp_Dtl> sbPrcsHdrDtlList);


	public void saveMainPrcsTempHdOnlyTODb(Mn_Prcs_Tmp_Hdr sbPrcsHdr);


	public List<Object[]> getAllMainPrcsHdrTempDetail();


	public Mn_Prcs_Tmp_Hdr getAllExstMnHdrTempForEdit(String docNo);


	public List<Object[]> getExsitMAinPrcsTempHdrDetailForEdit(String docNo, String prcsType, boolean ismpth_iss_auth);


	public List<Object[]> getDeptWiseInternalProcessIssuedImpl(String qry);


	public List<Stk_Mst> getAllExsitInternalProcessRecvedList();


	public List<Stk_Mst> getAllExsitInternalTransfer();


	public String checkTheInternalDocNOImpl(String docNo);


	public String checkMainPrcsTempDocNoinOImpl(String docNo);


	public String getExistingPrimaryIdRcvdDocOfMainProcess();


	public String checkRcvdDocumentNoInMainPrcsImpl(String docNo);


	public void saveRcvdDocumtDetailToDb(List<Rcvd_Doc_Dtl> rcvdhdrDtail);


	public Rcvd_Doc_Hdr chkRcvdDocuMntHdrByIsdDocNo(String rdh_isd_doc_no);


	public Object[] getExistRcvdDocuDetail(String rdh_isd_doc_no, String string);


	public void saveOrUpdateRcvdDocHdr(Rcvd_Doc_Hdr rcvdHDrChk);


	public List<Object[]> getExstingRcvdAllDocumentsImpl(String dptCd);


	public boolean chkIsRcvdAuthrisedOrNot(String getmpth_doc_no);


	public List<Object[]> getwaxDetailForPrintImpl(String qry);


	public String takeAutGenIdForCarattCd();


	public void saveCartDetail(Carat_Mst caratDetail);


	public Carat_Mst getDetailsOfCaratMst(Long carat_id);


	public List<Carat_Mst> getExistCaratMasterdetail();


	public void deleteCaratMasterRecImpl(Long id);


	public String getTreeGenratorOfThreeItem();


	public List<Object[]> getAllInOutBomHouseDetial();


	public List<Stk_Mst> getStockBasedOnDeptMntInCastingImpl(String dptCd, String trftyp);


	public List<Spcl_Stk_Mst> getSpclStockOfEmployee();


	public void saveOrUpdateSpclStkInDb(List<Spcl_Stk_Mst> spcStkList);


	public List<Stk_Mst> getExistStkDetailInCstRcvd();


	public List<String> getAllExstOrderType();


	public List<String> getWaxNoForAddjobrderDetailInProcessPage();


	public List<Object[]> getBomDataByProductIdImpl(String pdtcd);


	public void saveJobCardInBomDetail(List<Bom_Iss_Job_Dtl> bominjobcdlist);


	public List<Stk_Mst> getCastingStackStakForAddInternTrf(String em_emp_id);


	public List<Stk_Mst> getIsuedJobCardMakingStackForAddInternTrf();


	public List<Bom_Iss_Job_Dtl> getExstBomIssedjobDetail();


	public List<Object[]> getAllPdtDeptInJobIssPending();


	public List<Object[]> searchBasedOnDptAndCmyCdInMainPrcsInmp(String dpt);


	public List<Object[]> getrequiredBomDetailOfJobCardImpl(String joNo, String dpt);


	public List<String> getPendingJobCardFromJobOrdHdr(String dpt, String cmy);


	public List<Object[]> getPendingJobCardForMainPrcsImpl(String qry);


	public boolean checkIfJobCardDocNoIsPresentOrNotImpl(String docNo);


	public List<Object[]> searchBasedOnDptAndCmyCdAndOtherFilterInMainPrcsImpl(String dpt, String cmy, String trgtDt,
			String jbCard);


	public void changeTheInternalTrfHdrDetailWithStatus(String primrIdOfItfh);


	public List<Object[]> getAllMainPrcsHdrDetailNewByRam();


	public List<Object[]> getrequiredBomDetailOfJobCardWrkerWiseImpl(String jobcrdno, String cmycd, String wrkcd,
			String dptCd,String mnprcsDocNo);


	public void saveAllTheMnPrccJobDetailWithWorker(List<Mn_Prcs_Job_Dtl> mnPrcsJobList);


	public void saveAllTheMnPrccJobHeaderWithWorker(List<Mn_Prcs_Job_Hdr> mnPrcsJobList);


	public void deleteMainPrcsJobHdrRecMatch(String qry);


	public void sabeTheAlowdPrtyOfAlloyImpl(Long id, String isdPrty, String[] testsmpqry);


	public List<Object[]> getAddInternalTransferDataJobMakedImpl(String qry);


	public void saveTheCastdPrtyOfEditImpl(Long id, String isdPrty, String[] testsmlqry);


	public void updateRcvdPrtyOfCastingPrcsImpl(String prty, String prtySmple, Long id, boolean isfilled,String isdmgd, String[] qryUpdate);


	public void updatecastprcssDustAuthsts(String qry);


	public List<Prcs_Mst> getExistProcessDetailInSubPrcsNotMain();


	public void saveAllBalanceBomWithJobCard(String join);


	public List<Object[]> getPendingJobCardForWrkWithDptImpl(String qry);


	public void saveSubProcessRelatedDatas(String join);


	public List<Object[]> runDynamicQueriesFromJavaScriptImpl(String qery);


	public String getExistingPrimaryIdOfDcProcess();


	public List<Object[]> getDcProcessDetail();


	public List<Object[]> getExsistDcForEdit(String dcdocno);


	public Dc_Hdr getExsistDcHeaderForEdit(String dcdocno);


	public void deletedcprcshdrDtlAjax(String qry);


	public List<Object[]> getDataForFinishPdt(String em_cmy_cd);


	public List<Object[]> getSearchedRemarksForFinshImpl(String srch);


	public void saveFinshPdtPrcsHdrDetailByAjaxImpl(String join);


	public String getExistingPrimaryIdOfFnshProcess();


	public List<Object[]> getAllExistFinishPdtDetail();


	public void deletefnshprcshdrDtlAjaxImpl(String qry);


	public List<Object[]> getExistFinishPdtDetail(String docno);


	public Fnsh_Pdt_Hdr getExistFinishPdtHeadr(String docno);


	public void updateMainProcessDetailForEditImpl(String qry);


	public void upddateMainProcessHderDetailStatusImpl(String qry);


	public List<Object[]> getSearchedRemarksForRecoveryImpl(String srch);


	public String takeAutGenIdForRecoveryCd();


	public void saveRcveyPrcsHdrDetailByAjaxImpl(String join);


	public List<Object[]> getDateAndDescWiseFilterRecverImpl(String qry);


	public List<Object[]> getDptandWrkcdWiseFilterRecverImpl(String qry);


	public List<Object[]> getSearchedDescrptionForRecoveryImpl(String srch);


	public List<Object[]> getRecoveryProcessDetail();


	public List<Object[]> getRecoverExstDataForEdit(String docno);


	public Rcvy_Hdr getRecoverHdrDataForEdit(String docno);


	public List<Object[]> getExistAuthenticationDetail();


	public void saveorupdatetheAuthDetail(Auth_Mst auth);


	public Auth_Mst getExstAuthForEdit(Long id);


	public Auth_Mst getAuthenticationChekerImpl(String email, String pwd, String cmycd);


	public void delAuthMstRecImpl(Long id);


	public List<Object[]> getDashBordData(String em_cmy_cd);


	public List<Object[]> getDashBordDataForTable(String em_cmy_cd);


	public List<Object[]> getDataForPintoutJOBCARDImpl(String qry);


	public void updateStkDetailFromTempMainnProcess(String join);


	public void updateStkDetailFromInternalTrnsferProcess(String join);


	public void updateStkDetailFromAlloyProcess(String join);


	public void updateStkMagerFormInward(String join);


	public void updateSpclStkQryInDb(String join);


	public void updateStkMangeQryFromCasting(String join);


	public void InsertBidDetailInHouseMaking(String join);


	public List<Object[]> getNonIsdJobCardTreeNo();


	public List<Object[]> getCompletedBomForIntrnalTransferImpl(String qry);


	public void updateCancelledtreeProductstsImpl(String qry);


	public String getImagePath(String pdtcd);


	public List<Object[]> getProductDetailImpl(String qry);


	public List<Object[]> getDepartmentWiseWorker(String em_dpt_cd, String string);


	public List<Object[]> getDepartmentWisePrcs(String em_dpt_cd, String em_emp_typ,String prcstyp);


	public List<Object[]> getDepartmentWiseVndr(String em_dpt_cd, String em_emp_typ);


	public  boolean isAllow(String page);


	public List<Object[]> getUserPermissionList();


	public String checkFnshPdtDocNoInDbImpl(String docno);


	public String checkMainProcessDocNoInDbImpl(String docno);


	public String checkSubProcessDocNoInDbImpl(String docno);


	public String checkDocNoInDcFromDbImpl(String docno);


	public String checkrecvryPrcsDocInDbImpl(String docno);


	public String checkInwardDocNOInDbImpl(String docno);


	public String checkAlloyDocNoInDbImpl(String docno);


	public String checkCastingDocNoInDbImpl(String docno);


	public String checkJobcardNoInDbImpl(String docno);


	public String checkWaxNoInDbImpl(String docno);


	public String checkTreeDocNoInDbImpl(String docno);


	public List<String> getexstTreeForAlwJobCrd();


	public List<Object[]> getExstDprtmentForSolveMltplDptNm();


	public List<Object[]> getStockCalculationInFrontEndImp(String qry);


	public List<Object[]> getExstStkOfCstWithEmployeeImp(String qry);


	public List<Object[]> checkDcbalStockImp(String qry);


	public List<Object[]> getBomDetailByPdtCdForFnshPdtImpl(String qry);


	public String saveStoneDataInJobCardImpl(String join);


	public List<Stn_Mst> getExistStoneProIdForAddInwrd();


	public List<Object[]> getDataForMeltingProcessImpl(String qry);


	public List<Object[]> getDetailOfDocumenBySearchImpl(String qry);


	public List<String> gettodayPrice();


	public List<Object[]> getBomStkOfCmyandDpt(String em_cmy_cd, String string, String string2, String string3,
			String string4);


	public List<Object[]> getDptStkWithPrtyOfCmyandDpt(String em_cmy_cd, String string, String string2, String string3,
			String string4);


	public List<Object[]> getDptStkWithOutPrtyOfCmyandDpt(String em_cmy_cd, String string, String string2,
			String string3, String string4);


	public List<Object[]> getCmyWrkStkWithPrtyOfCmyandDpt(String em_cmy_cd, String string, String string2,
			String string3, String string4);


	public List<Object[]> getOutSideWrkStkWithPrtyOfCmyandDpt(String em_cmy_cd, String string, String string2,
			String string3, String string4);


	public List<Object[]> getWrkStkNonPrtyOfCmyandDpt(String em_cmy_cd, String string, String string2, String string3,
			String string4);


	public List<Object[]> getLossStkOfCmyandDpt(String em_cmy_cd, String string, String string2, String string3,
			String string4);


	public List<Object[]> getDptCloseStkOfCmyandDpt(String em_cmy_cd, String string, String string2, String string3,
			String string4);


	public List<Object[]> getPurityDetailBy();


	public List<Object[]> getFilteredClosingStockImpl(String qry);


	public List<Report_Details> getExstReportDetail(String string);


	public void delTransactionBasedStockRecAjax(String qry);


	public List<Object[]> getInwardReport(String cmycd, String qry);


	public List<Object[]> getWorkerWiseReport(String cmycd, String qry);


	public List<Object[]> getPurityLossDeptWise(String qry);


	public List<Object[]> getClosingStockReports(String qry);



}
