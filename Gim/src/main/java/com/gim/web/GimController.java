

package com.gim.web;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.gim.Service.GimManager;
import com.gim.entity.Aly_Mst;
import com.gim.entity.Auth_Mst;
import com.gim.entity.Bom_Mst;
import com.gim.entity.Carat_Mst;
import com.gim.entity.Cmy_Mst;
import com.gim.entity.Cst_Prcs_Hdr_Dtl;
import com.gim.entity.DayWise_Prc_Mst;
import com.gim.entity.Dc_Hdr;
import com.gim.entity.Dgn_Mst;
import com.gim.entity.Dpt_Mst;
import com.gim.entity.Emp_Mst;
import com.gim.entity.Fnsh_Pdt_Hdr;
import com.gim.entity.Intl_Trf_Hdr;
import com.gim.entity.Intl_Trf_Hdr_Dtl;
import com.gim.entity.Iwd_Hdr_Dtl;
import com.gim.entity.Job_Ord_Hdr_Dtl;
import com.gim.entity.Mn_Prcs_Hdr;
import com.gim.entity.Mn_Prcs_Tmp_Hdr;
import com.gim.entity.Mold_Mst;
import com.gim.entity.Ord_Hdr;
import com.gim.entity.Ord_Hdr_Dtl;
import com.gim.entity.Prcs_Mst;
import com.gim.entity.Raw_Mtr_Mst;
import com.gim.entity.Rcvy_Hdr;
import com.gim.entity.Report_Details;
import com.gim.entity.Spcl_Stk_Mst;
import com.gim.entity.Stn_Mst;
import com.gim.entity.Str_Mst;
import com.gim.entity.Tree_Gen_Hdr;
import com.gim.entity.Tree_Gen_Hdr_Dtl;
import com.gim.entity.Uom_Mst;
import com.gim.entity.Vn_Ct_Mst;
import com.gim.util.MailManager;
import com.google.gson.Gson;

/**
 * @author s6
 *
 */
/**
 * @author s6
 *
 */
@Controller
public class GimController {
	private Logger LOG = Logger.getLogger(GimManager.class);
	@Autowired
	GimManager GimManager;
	@Autowired
	AjaxController ajaxController;

	@Autowired
	MailManager mailManager;

	@Autowired
	AdminController adminController;

	@Autowired(required = false)
	AuthenticationManager authManager;

	@Autowired
	private HttpSession session;

	@RequestMapping(value = "/login.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doLogin(ModelMap model, HttpServletRequest request, HttpSession session) {
	
	return null;
	}
	@RequestMapping(value = "/importdesign.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doImportDesign(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId("");
		if(vnctExist!=null&&!vnctExist.isEmpty()){
			model.addAttribute("ExistCstDet",vnctExist);
		}
		return null;
	}
	
	@RequestMapping(value = "/importorder.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doImportOrder(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId(empDtls.getEm_emp_id());
		if(vnctExist!=null&&!vnctExist.isEmpty()){
			model.addAttribute("ExistCstDet",vnctExist);
		}
		
			return null;
	}
	
	
	@RequestMapping(value = "/closingstock.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doclosingstock(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Gson gsn=new Gson();
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Report_Details> exst=GimManager.getExstReportDetail("CLOSING_STOCK");
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ReportDtlJSON", gsn.toJson(exst));
		}
		List<Object[]> exstPrtyStock=GimManager.getPurityDetailBy();
		if(exstPrtyStock!=null&&!exstPrtyStock.isEmpty()){
			model.addAttribute("prtyListJson",  gsn.toJson(exstPrtyStock));
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}

		List<Object[]> exstTable=GimManager.getDashBordDataForTable(empDtls.getEm_cmy_cd());
		if(exstTable!=null&&!exstTable.isEmpty()){
			model.addAttribute("DashBoadDataTableJSON", gsn.toJson(exstTable));
		}
		List<Object[]> exstbomStk=GimManager.getBomStkOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","BOM");
		if(exstbomStk!=null&&!exstbomStk.isEmpty()){
			model.addAttribute("exstbomStkTableJSON", gsn.toJson(exstbomStk));
		}
		List<Object[]> exstDptStkWithPrty=GimManager.getDptStkWithPrtyOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","STKWITHPRTY");
		if(exstDptStkWithPrty!=null&&!exstDptStkWithPrty.isEmpty()){
			model.addAttribute("exstDptStkWithPrtyTableJSON", gsn.toJson(exstDptStkWithPrty));
		}
		List<Object[]> exstDptStkWOPrty=GimManager.getDptStkWithOutPrtyOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","STKWITHOUTPRTY");
		if(exstDptStkWOPrty!=null&&!exstDptStkWOPrty.isEmpty()){
			model.addAttribute("exstDptStkWithOutPrtyTableJSON", gsn.toJson(exstDptStkWOPrty));
		}
		List<Object[]> exstCmyWrkStkPrty=GimManager.getCmyWrkStkWithPrtyOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","CMYWRKSTCK");
		if(exstCmyWrkStkPrty!=null&&!exstCmyWrkStkPrty.isEmpty()){
			model.addAttribute("exstCmyWrkWithPrtyTableJSON", gsn.toJson(exstCmyWrkStkPrty));
		}
		List<Object[]> exstOutSdeWrkStkPrty=GimManager.getOutSideWrkStkWithPrtyOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","OUTSIDEWRKSTCK");
		if(exstOutSdeWrkStkPrty!=null&&!exstOutSdeWrkStkPrty.isEmpty()){
			model.addAttribute("exstOutSideWrkWithPrtyTableJSON", gsn.toJson(exstOutSdeWrkStkPrty));
		}
		List<Object[]> exstWrkStkNonPrty=GimManager.getWrkStkNonPrtyOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","WRKSTCKNONPRTY");
		if(exstWrkStkNonPrty!=null&&!exstWrkStkNonPrty.isEmpty()){
			model.addAttribute("exstWrkNonPrtyTableJSON", gsn.toJson(exstWrkStkNonPrty));
		}
		List<Object[]> exstLossStkDtl=GimManager.getLossStkOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","LOSSSTOK");
		if(exstLossStkDtl!=null&&!exstLossStkDtl.isEmpty()){
			model.addAttribute("exstLossStkTableJSON",gsn.toJson(exstLossStkDtl));
		}
		List<Object[]> exstDptCloseStkDtl=GimManager.getDptCloseStkOfCmyandDpt(empDtls.getEm_cmy_cd(),"","","","DPTCLOSESTK");
		if(exstDptCloseStkDtl!=null&&!exstDptCloseStkDtl.isEmpty()){
			model.addAttribute("exstDptClseStkTableJSON",gsn.toJson(exstDptCloseStkDtl));
		}
		return null;
	}
		
	
	@RequestMapping(value = "/closing stocknew.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doclosingstocknew(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	   model.addAttribute("cmycd", empDtls.getEm_cmy_cd());
		return null;
	}
	@RequestMapping(value = "/dashboard.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dodashboard(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		List<Object[]> exst=GimManager.getDashBordData(empDtls.getEm_cmy_cd());
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("DashBoadDataJSON", new Gson().toJson(exst));
			model.addAttribute("DashBoadData",exst);
		}
		List<Object[]> exstTable=GimManager.getDashBordDataForTable(empDtls.getEm_cmy_cd());
		if(exstTable!=null&&!exstTable.isEmpty()){
			model.addAttribute("DashBoadDataTableJSON", new Gson().toJson(exstTable));
			model.addAttribute("DashBoadDataTable",exstTable);
		}
		return null;
	}
	
	@RequestMapping(value = "/inoutbom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doInoutbom(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		List<Object[]> exstBomHouse=GimManager.getAllInOutBomHouseDetial(); 
		if(exstBomHouse!=null&&!exstBomHouse.isEmpty()){
			model.addAttribute("exstBomdetal", new Gson().toJson(exstBomHouse));
		}
		return null;
	}
	
	
	@RequestMapping(value = "/addalloying.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddalloying(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		try{
			String alyNo=GimManager.getAutoGenIdOfAlyHdr();
			model.addAttribute("AutoIdOfAly", alyNo);
			Gson gsn=new Gson();
			List<Aly_Mst> alyMst=GimManager.getAllExistAlyMstDetail();
			/*List<Stk_Mst> StkIsExist=GimManager.getExistAlyInPrcssForStk(empDtls.getEm_emp_id());
			List<Stk_Mst> StkRcvExst=GimManager.getExistAlyInRecvdForStk(empDtls.getEm_emp_id());
			if(StkRcvExst!=null&&!StkRcvExst.isEmpty()){
				model.addAttribute("ExstAlyRcvdStk", gsn.toJson(StkRcvExst));
			}*/
		/*	List<Stk_Mst> stkInIwd=GimManager.getExistStkDetailInward(empDtls.getEm_emp_id());
			if(stkInIwd!=null&&!stkInIwd.isEmpty()){
				model.addAttribute("ExstStkInInward", gsn.toJson(stkInIwd));
			}
			if(StkIsExist!=null&&!StkIsExist.isEmpty()){
				model.addAttribute("ExstAlyIsdStk", gsn.toJson(StkIsExist));
			}*/
			if(alyMst!=null&&!alyMst.isEmpty()){
				String alyStr=gsn.toJson(alyMst);
				model.addAttribute("ExistAlyMst", alyStr);
				}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
		/*	List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}*/
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
			if(wrkExist!=null&&!wrkExist.isEmpty()){
				model.addAttribute("ExistWrkDet",wrkExist);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value = "/editalloyprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditalloying(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="aly_prcs_id") Long alyId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		model.addAttribute("AdminName", empDtls.getEm_emp_crt_id());
		try{
			Gson gsn=new Gson();
			if(alyId!=null){
				List<String> exstDptEdit=GimManager.getExistDptCdForAlyEdit(alyId);
				if(exstDptEdit!=null&&!exstDptEdit.isEmpty()){
					model.addAttribute("ExtDptForEdt", gsn.toJson(exstDptEdit));
				}
				Object[] exstEdit=GimManager.getExistAlyPrcsHtrAndDtls(alyId);
				if(exstEdit!=null){
				model.addAttribute("ExstAlyHdrOnly", exstEdit);
				if(exstEdit[4]!=null&&exstEdit[4].toString().equalsIgnoreCase("1")){
				List<Object[]>exstAlyDtl=GimManager.getExistAlyPrcsItmsDetl(alyId);
				if(exstAlyDtl!=null&&!exstAlyDtl.isEmpty())
					model.addAttribute("ExstAlyHdrDetlsEdit", exstAlyDtl);
				}
				else{
					List<Object[]>exstAlyDtl=GimManager.getExistAlyPrcsItmsDetlWithoutAuth(alyId);
					if(exstAlyDtl!=null&&!exstAlyDtl.isEmpty())
						model.addAttribute("ExstAlyHdrDetlsEdit", exstAlyDtl);
					}	
				}
			}
			List<Aly_Mst> alyMst=GimManager.getAllExistAlyMstDetail();
			
			if(alyMst!=null&&!alyMst.isEmpty()){
				model.addAttribute("ExstAlyDetForShw", alyMst);
				String alyStr=gsn.toJson(alyMst);
				model.addAttribute("ExistAlyMst", alyStr);
				}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
			if(wrkExist!=null&&!wrkExist.isEmpty()){
				model.addAttribute("ExistWrkDet",wrkExist);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	
		return null;
	}
	
	
	@RequestMapping(value = "/alloying.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAlloying(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveSucResultAly", session.getAttribute("saveSucAlyRes"));
		session.removeAttribute("saveSucAlyRes");
		try{
			List<Object[]>exst=GimManager.getAllExistAlyPrcHdrDetail();
			if(exst!=null&&!exst.isEmpty())
				model.addAttribute("ExstAlyPrcDtl",new Gson().toJson(exst) );
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/addbom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddbom(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveBomResult", session.getAttribute("SaveDetailOfBom"));
		session.removeAttribute("SaveDetailOfBom");
		try{
			String bomCd=GimManager.takeAutGenIdForBomCd();
			model.addAttribute("bomAutoGnId", bomCd);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/editbom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditbom(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="bomId") Long bomId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(bomId!=null){
				Bom_Mst bm=GimManager.getExistBomDetailForEdit(bomId);
				if(bm!=null){
					model.addAttribute("ExistBomEdit", bm);
				}
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/addcasting.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddcasting(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		String cstCd=GimManager.getAutoGenIdOfCastHdr();
		if(cstCd!=null){
		model.addAttribute("AutoIdOfCstCd", cstCd);	
		}
		Gson gsn=new Gson();
		List<Spcl_Stk_Mst> spclStk=GimManager.getSpclStockOfEmployee();
		if(spclStk!=null&&!spclStk.isEmpty()){
			model.addAttribute("SpclStkObjString", gsn.toJson(spclStk));
		}
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
		if(estStr!=null&&!estStr.isEmpty()){
			model.addAttribute("ExistStrDet", estStr);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		List<Object[]> exstTrDtl=GimManager.getExistTreeHdrDetailNeedForCast();
		if(exstTrDtl!=null&&!exstTrDtl.isEmpty()){
			model.addAttribute("ExistTreHdrDtl", exstTrDtl);
		}
		List<String> exsitDocNo=GimManager.checkExistDocNoInCasting();
		if(exsitDocNo!=null&&!exsitDocNo.isEmpty()){
			model.addAttribute("docNoExst", gsn.toJson(exsitDocNo));
		}
	
		return null;
	}
	@RequestMapping(value = "/editcasting.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditcasting(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="cst_hdr_id") Long cstId,@RequestParam(value="cst_doc_no") String docNo) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		model.addAttribute("AdminId", empDtls.getEm_emp_id());
		Gson gsn=new Gson();
		if(cstId!=null){
			if(docNo!=null){
			List<Cst_Prcs_Hdr_Dtl> CstHdrDtl=GimManager.getExistCstDetailForUpdte(docNo);
				if(CstHdrDtl!=null&&!CstHdrDtl.isEmpty()){
					model.addAttribute("exstCstHdrDtl", gsn.toJson(CstHdrDtl));
				}
			}
			Object[] cst=GimManager.getExsitCstHdrOnlyByIdInImpl(cstId);
			if(cst!=null){
				model.addAttribute("CstExstHdrOnlyEdt", cst);
				/*if(cst[12]!=null){
				try{
					String stklmtOfEmp=GimManager.getStkOfEmpl(cst[12].toString()); 
					model.addAttribute("StkLmtOfEMployee", stklmtOfEmp);
				}catch(Exception e){
					e.printStackTrace();
				}}*/
			}
			List<Object[]> exstEditCstDtl=GimManager.getExsitCstHdrDtlsByIdInImpl(cstId);
			if(exstEditCstDtl!=null&&!exstEditCstDtl.isEmpty()){
				model.addAttribute("CstExstHdrDtlEdt", exstEditCstDtl);
			}
			/*List<String> exstDp=GimManager.getExsitDptFrmCstHdrDtlsByIdImpl(cstId);
			if(exstDp!=null&&!exstDp.isEmpty()){
				model.addAttribute("CstDptExstHdrDtlEdt", gsn.toJson(exstDp));	
			}*/
			List<Spcl_Stk_Mst> spclStk=GimManager.getSpclStockOfEmployee();
			if(spclStk!=null&&!spclStk.isEmpty()){
				model.addAttribute("SpclStkObjString", gsn.toJson(spclStk));
			}
			List<String> exstTreNo=GimManager.getExsitTreNoFrmCstHdrDtlsByIdImpl(cstId);
			if(exstTreNo!=null&&!exstTreNo.isEmpty()){
				model.addAttribute("CstTreNoExstHdrDtlEdt", gsn.toJson(exstTreNo));	
			}
		/*	List<Stk_Mst> stkCstIsud=GimManager.getExistStkDetailInCstIssd(empDtls.getEm_emp_id());
			if(stkCstIsud!=null&&!stkCstIsud.isEmpty()){
				model.addAttribute("exstStkIssCst", gsn.toJson(stkCstIsud));
			}
			List<Stk_Mst> stkCstRcvd=GimManager.getExistStkDetailInCstRcvd();
			if(stkCstRcvd!=null&&!stkCstRcvd.isEmpty()){
				model.addAttribute("exstStkRcvdCst", gsn.toJson(stkCstRcvd));
			}*/
			List<Tree_Gen_Hdr_Dtl> treExst=GimManager.getAllTreeInCstPrcsSts();
			if(treExst!=null&&!treExst.isEmpty()){
				model.addAttribute("ExstTreeDtl", gsn.toJson(treExst));
			}
		}
		List<Object[]>cate=GimManager.getExistCategoryInWaxHDrDtl();
		if(cate!=null&&!cate.isEmpty()){
			model.addAttribute("exsitCateCary", cate);
		}
		/*List<Stk_Mst> stkForIswgt=GimManager.getAllStackTotWeigtBasedOnCmpltPrcs(empDtls.getEm_emp_id());
		if(stkForIswgt!=null&&!stkForIswgt.isEmpty()){
			model.addAttribute("stkForIswgtDtl", stkForIswgt);
			model.addAttribute("stkForIswgtDtlString", gsn.toJson(stkForIswgt));
		}*/
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
		if(estStr!=null&&!estStr.isEmpty()){
			model.addAttribute("ExistStrDet", estStr);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		List<Tree_Gen_Hdr> treeExst=GimManager.getExistTreeHdrRecOnlyAuth(); 
		if(treeExst!=null&&!treeExst.isEmpty()){
			model.addAttribute("ExistTreeNos",treeExst);
		}
		List<Object[]> exstTrDtl=GimManager.getExistTreeHdrDetailNeedForCast();
		if(exstTrDtl!=null&&!exstTrDtl.isEmpty()){
			model.addAttribute("ExistTreHdrDtl", exstTrDtl);
		}
		
		return null;
	}
	@RequestMapping(value = "/alloymaster.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddalloymaster(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveAlyMstResult", session.getAttribute("savedResOfAlyMst"));
		session.removeAttribute("savedResOfAlyMst");
		model.addAttribute("UpdtAlyMstResult", session.getAttribute("updatedResOfAlyMst"));
		session.removeAttribute("updatedResOfAlyMst");
		String alycd=GimManager.getAutoGnAlyMstCd();
		model.addAttribute("AlyCdDet", alycd);
		List<Aly_Mst> alyexst=GimManager.getAllExistAlyMstDetail();
		if(alyexst!=null&&!alyexst.isEmpty()){
			model.addAttribute("ExsitAloyMstDetail", new Gson().toJson(alyexst));
		}
		return null;
	}
	
	@RequestMapping(value = "/editalloymaster.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditalloymaster(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="aly_cd") Long alyCd) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		if(alyCd!=null){
			Aly_Mst alyExst=GimManager.getExistAlyDetailOnlyById(alyCd);
			if(alyExst!=null){
				model.addAttribute("ExistAlyOnly", alyExst);
			}
		}
		return null;
	}
	
	
	@RequestMapping(value = "/addcompany.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddcompany(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveCompanyResult", session.getAttribute("SaveDetailOfCompany"));
		session.removeAttribute("SaveDetailOfCompany");
		String cmyCd=GimManager.takeAutGenIdForComyCd();
		model.addAttribute("cmyAutoGnId", cmyCd);
		return null;
	}
	@RequestMapping(value = "/editcompany.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditcompany(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="cmyId") Long cmyId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		if(cmyId!=null){
			Cmy_Mst cm=GimManager.getExistCmyDetailForEdit(cmyId);
			if(cm!=null){
				model.addAttribute("ExistCmyDtl",cm);
			}
		}
		return null;
	}
	
	@RequestMapping(value = "/addcustomer.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddcustomer(ModelMap model, HttpServletRequest request, HttpSession session) {
	return null;
	}
	
	@RequestMapping(value = "/adddaywiseprice.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAdddaywiseprice(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveDayResult", session.getAttribute("SaveDetailOfDay"));
		session.removeAttribute("SaveDetailOfDay");
		try{
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/editdaywiseprice.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditdaywiseprice(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="dayId") Long dayId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(dayId!=null){
				DayWise_Prc_Mst dwm=GimManager.getExistDayDetailEdit(dayId);
				if(dwm!=null){
					model.addAttribute("ExistDayEdit", dwm);
				}
			}
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/adddepartment.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAdddepartment(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
	model.addAttribute("SaveDptmntResult", session.getAttribute("SaveDetailOfdepartMent"));
	session.removeAttribute("SaveDetailOfdepartMent");
	try{
		String depCd=GimManager.takeAutGenIdForDptCd();
		model.addAttribute("dptAutoGnId", depCd);
	List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
	if(exist!=null&&!exist.isEmpty()){
		model.addAttribute("ExistComDet", exist);
	}
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
	}
	
	@RequestMapping(value = "/editdepartment.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditdepartment(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="dptId") Long dptId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
	try{
		if(dptId!=null){
			Dpt_Mst dm=GimManager.getExistDeptMentDetailForEdit(dptId);
			if(dm!=null){
				model.addAttribute("ExistDptDtl",dm);
			}
		}
	List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
	if(exist!=null&&!exist.isEmpty()){
		model.addAttribute("ExistComDet", exist);
	}
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
	}
	
	@RequestMapping(value = "/adddesign.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAdddesign(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
	try{
		String dgnPdtCd=GimManager.takeAutGenIdForDgnPdtCd();
		model.addAttribute("DgnPdtCdAutoGnId", dgnPdtCd);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Uom_Mst> estUom=GimManager.getUomDetailInProcessPage();
			if(estUom!=null&&!estUom.isEmpty()){
				model.addAttribute("ExistUomDet", estUom);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId("");
			if(vnctExist!=null&&!vnctExist.isEmpty()){
				model.addAttribute("ExistCstDet",vnctExist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}
	@RequestMapping(value = "/editdesign.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditdesign(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="dgnId") Long dgnId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(dgnId!=null){
				Dgn_Mst dm=GimManager.getExistDgnDetailForEdit(dgnId);
				if(dm!=null){
					model.addAttribute("ExsitDgnEdit", dm);
				}
				List<Object[]> dstnmst=GimManager.getExistDgnStnWithDesignId(dgnId);
				if(dstnmst!=null&&!dstnmst.isEmpty()){
					model.addAttribute("ExistDgnStn", dstnmst);
				}
				List<Object[]> dbmst=GimManager.getExistDgnBomWithDesignId(dgnId);
				if(dbmst!=null&&!dbmst.isEmpty()){
					model.addAttribute("ExistDgnBom", dbmst);
				}
				List<Object[]> dmldmst=GimManager.getExistDgnMoldWithDesignId(dgnId);
				if(dmldmst!=null&&!dmldmst.isEmpty()){
					model.addAttribute("ExistDgnMold", dmldmst);
				}
				Object dcmst=GimManager.getExistDgnCstWithDesignId(dgnId);
				if(dcmst!=null){
					model.addAttribute("ExistDgnCst", dcmst);
				}
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId("");
			if(vnctExist!=null&&!vnctExist.isEmpty()){
				model.addAttribute("ExistCstDet",vnctExist);
			}
			List<Uom_Mst> estUom=GimManager.getUomDetailInProcessPage();
			if(estUom!=null&&!estUom.isEmpty()){
				model.addAttribute("ExistUomDet", estUom);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}
	@RequestMapping(value = "/addemployee.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddemployee(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveEmpResult", session.getAttribute("SaveDetailOfEmp"));
		session.removeAttribute("SaveDetailOfEmp");
		try{
			Gson gsn=new Gson();
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<String> empMob=GimManager.getAllExistEmployeeMoblie();
			if(empMob!=null&&!empMob.isEmpty()){
				model.addAttribute("ExstMobNoEmp", gsn.toJson(empMob));
			}
			List<String> empEmail=GimManager.getAllExistEmployeeEmail();
			if(empEmail!=null&&!empEmail.isEmpty()){
				model.addAttribute("ExstEmlNoEmp", gsn.toJson(empEmail));
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}
	
	@RequestMapping(value = "/editemployee.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditemployee(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="empId") Long empId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			Gson gsn=new Gson();
			if(empId!=null){
				Emp_Mst em=GimManager.getExistEmpDetailForEdit(empId);
				if(em!=null){
					model.addAttribute("ExistEmpDtl",em);
				}
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<String> empMob=GimManager.getAllExistEmployeeMoblie();
			if(empMob!=null&&!empMob.isEmpty()){
				model.addAttribute("ExstMobNoEmp", gsn.toJson(empMob));
			}
			List<String> empEmail=GimManager.getAllExistEmployeeEmail();
			if(empEmail!=null&&!empEmail.isEmpty()){
				model.addAttribute("ExstEmlNoEmp", gsn.toJson(empEmail));
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}
	
	@RequestMapping(value = "/editinternaltransfer.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditinternaltransfer(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="itnl_hdr_id")Long itnlId,@RequestParam(value="trf_typ")String trfTyp,@RequestParam(value="itnl_doc_no")String docNo) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Gson gsn=new Gson();
		model.addAttribute("EmployeDet", empDtls);
		try{
		if(itnlId!=null&&trfTyp!=null&&docNo!=null){
			Intl_Trf_Hdr itl=GimManager.getInternalTrfHdrRecById(itnlId);
			if(itl!=null){
				model.addAttribute("ExxstIntlObj", gsn.toJson(itl));
			}
			List<Object[]> itlHdrDetls=GimManager.getAllExistIntrlHdrDetRecFor(docNo,trfTyp);
			if(itlHdrDetls!=null&&!itlHdrDetls.isEmpty()){
				model.addAttribute("ExstitnlTrfmHdrDtlEdit", itlHdrDetls);
			}
			Object itnlHdrOnly=GimManager.getExistIntrlHdrOnly(docNo);
			if(itnlHdrOnly!=null){
				model.addAttribute("ExstitnlfmHdrOnlyEdt", itnlHdrOnly);	
			}
			List<Intl_Trf_Hdr_Dtl> intlDet=GimManager.getAllExsitIntrlHdrDetailRecByImpl(docNo);
			if(intlDet!=null&&!intlDet.isEmpty()){
				model.addAttribute("ExstIntlDetJson", gsn.toJson(intlDet));
			}
		}
	/*	List<Stk_Mst> stkInIwd=GimManager.getExistStkDetailInward(empDtls.getEm_emp_id());
		if(stkInIwd!=null&&!stkInIwd.isEmpty()){
			model.addAttribute("ExstStkInInward", gsn.toJson(stkInIwd));
		}*/
		List<String> exstDocNoTrfCd=GimManager.getAllExistIntrlTrfCd();
		if(exstDocNoTrfCd!=null&&!exstDocNoTrfCd.isEmpty()){
			model.addAttribute("ExstDocTrfCd", gsn.toJson(exstDocNoTrfCd));
		}
		
		List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId(empDtls.getEm_emp_id());
		if(vnctExist!=null&&!vnctExist.isEmpty()){
			model.addAttribute("ExistCstDet",vnctExist);
		}
		
		/*
		 * 
		 * List<Stk_Mst> stkForEdit=GimManager.getAllStakForAddInternTrf(empDtls.getEm_emp_id());
		if(stkForEdit!=null&&!stkForEdit.isEmpty()){
			model.addAttribute("stkForIswgtDtl", stkForEdit);
		}
		 * List<Stk_Mst> CstingstkForEdit=GimManager.getCastingStackStakForAddInternTrf(empDtls.getEm_emp_id());
		if(CstingstkForEdit!=null&&!CstingstkForEdit.isEmpty()){
			model.addAttribute("CstingstkForEdit", gsn.toJson(CstingstkForEdit));
		}
		List<Stk_Mst> IsuedJobCardMakingForEdit=GimManager.getIsuedJobCardMakingStackForAddInternTrf();
		if(IsuedJobCardMakingForEdit!=null&&!IsuedJobCardMakingForEdit.isEmpty()){
			model.addAttribute("IsuedJobCardMakingForEdit", gsn.toJson(IsuedJobCardMakingForEdit));
		}*/
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
		if(estStr!=null&&!estStr.isEmpty()){
			model.addAttribute("ExistStrDet", estStr);
		}
		/*
		List<Stk_Mst> stkForIsuedIntTrf=GimManager.getAllExsitInternalTransfer();
		if(stkForIsuedIntTrf!=null&&!stkForIsuedIntTrf.isEmpty()){
			model.addAttribute("stkForIsuedIntTrf", gsn.toJson(stkForIsuedIntTrf));
		}*/
		List<Object[]> pdtdptInJbcd=GimManager.getAllPdtDeptInJobIssPending();
		if(pdtdptInJbcd!=null&&!pdtdptInJbcd.isEmpty()){
			model.addAttribute("pdtdptInJbcd", pdtdptInJbcd);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	
	@RequestMapping(value = "/addinternaltransfer.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddinternaltransfer(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Gson gsn=new Gson();
		model.addAttribute("EmployeDet", empDtls);
		try{
		List<String> exstDocNoTrfCd=GimManager.getAllExistIntrlTrfCd();
		if(exstDocNoTrfCd!=null&&!exstDocNoTrfCd.isEmpty()){
			model.addAttribute("ExstDocTrfCd", gsn.toJson(exstDocNoTrfCd));
		}
		
		List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId(empDtls.getEm_emp_id());
		if(vnctExist!=null&&!vnctExist.isEmpty()){
			model.addAttribute("ExistCstDet",vnctExist);
		}
		/*
		 * List<Stk_Mst> stkForEdit=GimManager.getAllStakForAddInternTrf(empDtls.getEm_emp_id());
		if(stkForEdit!=null&&!stkForEdit.isEmpty()){
		model.addAttribute("stkForIswgtDtl", stkForEdit);
		}
		 * List<Stk_Mst> CstingstkForEdit=GimManager.getCastingStackStakForAddInternTrf(empDtls.getEm_emp_id());
		if(CstingstkForEdit!=null&&!CstingstkForEdit.isEmpty()){
			model.addAttribute("CstingstkForEdit", gsn.toJson(CstingstkForEdit));
		}
		List<Stk_Mst> IsuedJobCardMakingForEdit=GimManager.getIsuedJobCardMakingStackForAddInternTrf();
		if(IsuedJobCardMakingForEdit!=null&&!IsuedJobCardMakingForEdit.isEmpty()){
			model.addAttribute("IsuedJobCardMakingForEdit", gsn.toJson(IsuedJobCardMakingForEdit));
		}
		List<Stk_Mst> stkInIwd=GimManager.getExistStkDetailInward(empDtls.getEm_emp_id());
		if(stkInIwd!=null&&!stkInIwd.isEmpty()){
			model.addAttribute("ExstStkInInward", gsn.toJson(stkInIwd));
		}
		List<Stk_Mst> stkForJobCardIsue=GimManager.getAllExsitJobRcvdForTransfer();
		if(stkForJobCardIsue!=null&&!stkForJobCardIsue.isEmpty()){
			model.addAttribute("ExstStkInJobCrdIseStr", gsn.toJson(stkForJobCardIsue));
		}

		List<Stk_Mst> stkForIsuedIntTrf=GimManager.getAllExsitInternalTransfer();
		if(stkForIsuedIntTrf!=null&&!stkForIsuedIntTrf.isEmpty()){
			model.addAttribute("stkForIsuedIntTrf", gsn.toJson(stkForIsuedIntTrf));
		}
*/		String intTrfCd=GimManager.takeAutGenIdForintlTrfCd();
		model.addAttribute("intlTrfCdAutoGnId", intTrfCd);	
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
		if(estStr!=null&&!estStr.isEmpty()){
			model.addAttribute("ExistStrDet", estStr);
		}
		List<Object[]> pdtdptInJbcd=GimManager.getAllPdtDeptInJobIssPending();
		if(pdtdptInJbcd!=null&&!pdtdptInJbcd.isEmpty()){
			model.addAttribute("pdtdptInJbcd", pdtdptInJbcd);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/addinward.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddinward(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		model.addAttribute("AdminDtl",empDtls.getEm_emp_id()+"*"+startDate);
		
		try{
			String iwdid=GimManager.takeAutGenIdForInwardCd();
			model.addAttribute("ExistIwdId", iwdid);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			List<String> todayPrc=GimManager.gettodayPrice();
			if(todayPrc!=null&&!todayPrc.isEmpty()){
				model.addAttribute("todyPrcs",new Gson().toJson(todayPrc));
			}
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			Gson gsn=new Gson();
			List<Raw_Mtr_Mst> rwMst=GimManager.getAllExistRawMeterialProId();
			if(rwMst!=null&&!rwMst.isEmpty()){
				String rawS=gsn.toJson(rwMst);
				model.addAttribute("ExistRawMtrPro", rawS);
			}
			List<Bom_Mst> bmMst=GimManager.getExistBomProIdForAddInwrd();
			if(bmMst!=null&&!bmMst.isEmpty()){
				String bmS=gsn.toJson(bmMst);
				model.addAttribute("ExistBomMtrPro", bmS);
			}
			List<Stn_Mst> stnMst=GimManager.getExistStoneProIdForAddInwrd();
			if(stnMst!=null&&!stnMst.isEmpty()){
				String bmS=gsn.toJson(stnMst);
				model.addAttribute("ExistStnMtrPro", bmS);
			}
		/*	List<Stk_Mst> stkInIwd=GimManager.getExistStkDetailInward(empDtls.getEm_emp_id());
			if(stkInIwd!=null&&!stkInIwd.isEmpty()){
				model.addAttribute("ExstStkInInward", gsn.toJson(stkInIwd));
			}*/
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/editinward.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditinward(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="iwd_id")Long iwd_id) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		model.addAttribute("AdminDtl",empDtls.getEm_emp_id()+"*"+startDate);
		try{
			Gson gsn=new Gson();
			if(iwd_id!=null){
				List<Object[]> exst=GimManager.getExistInwardHdrDetail(iwd_id);
				if(exst!=null&&!exst.isEmpty())
					model.addAttribute("exstIwdHdrDet", exst);
				Object extOnly[]=GimManager.getExistInwardHdrOnly(iwd_id);
				if(extOnly!=null){
					model.addAttribute("extIwdHdrOnly", extOnly);
					if(extOnly[7]!=null){
						List<Iwd_Hdr_Dtl> exstGsn=GimManager.getAllExistInwdHdrDetailById(extOnly[7].toString());
						if(exstGsn!=null&&!exstGsn.isEmpty()){
							model.addAttribute("ExstGsonInwdDtl", gsn.toJson(exstGsn));
						}
					}
				}
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
	
			List<Raw_Mtr_Mst> rwMst=GimManager.getAllExistRawMeterialProId();
			if(rwMst!=null&&!rwMst.isEmpty()){
				String rawS=gsn.toJson(rwMst);
				model.addAttribute("ExistRawMtrPro", rawS);
			}
			List<Bom_Mst> bmMst=GimManager.getExistBomProIdForAddInwrd();
			if(bmMst!=null&&!bmMst.isEmpty()){
				String bmS=gsn.toJson(bmMst);
				model.addAttribute("ExistBomMtrPro", bmS);
			}
			/*List<Stk_Mst> stkInIwd=GimManager.getExistStkDetailInward(empDtls.getEm_emp_id());
			if(stkInIwd!=null&&!stkInIwd.isEmpty()){
				model.addAttribute("ExstStkInInward", gsn.toJson(stkInIwd));
			}*/
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/addjoborder.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddjoborder(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		model.addAttribute("employee", empDtls.getEm_emp_id());
		String jobCd=GimManager.takeAutGenIdForJobOrdDocNo();
		model.addAttribute("jobCdAutoGnId", jobCd);
		
		Gson gsn=new Gson();
		/*List<Bom_Iss_Job_Dtl> isdbm=GimManager.getExstBomIssedjobDetail();
		if(isdbm!=null&&!isdbm.isEmpty())
			model.addAttribute("ExstBomDetailbyStr",gsn.toJson(isdbm));
		List<Object[]>OrdDetl=GimManager.getNeededOrdNoDetailForWax("");
		if(OrdDetl!=null&&!OrdDetl.isEmpty()){
			model.addAttribute("addOrdDet", OrdDetl);
			model.addAttribute("OrdTrgtDtStr", new Gson().toJson(OrdDetl));
			}*/
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Object[]> exstTreeNotIsdJobCrd=GimManager.getNonIsdJobCardTreeNo();
		if(exstTreeNotIsdJobCrd!=null&&!exstTreeNotIsdJobCrd.isEmpty()){
			model.addAttribute("ExstTree", new Gson().toJson(exstTreeNotIsdJobCrd));
		}
		List<String> exstTreeAlwJobCrd=GimManager.getexstTreeForAlwJobCrd();
		if(exstTreeAlwJobCrd!=null&&!exstTreeAlwJobCrd.isEmpty()){
			model.addAttribute("AlwOfTreeinJob", new Gson().toJson(exstTreeAlwJobCrd));
		}
		List<Object[]> trnUsrpmsn=GimManager.getUserPermissionList();
		if(trnUsrpmsn!=null&&!trnUsrpmsn.isEmpty()){
			model.addAttribute("trnTypList",  new Gson().toJson(trnUsrpmsn));
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<String> estWaxNo=GimManager.getWaxNoForAddjobrderDetailInProcessPage();
			if(estWaxNo!=null&&!estWaxNo.isEmpty()){
				model.addAttribute("ExistWaxNoDet", estWaxNo);
			}
		
			/*	try{
			List<String> exstOrdTyp=GimManager.getAllExstOrderType();
			if(!(exstOrdTyp!=null&&!exstOrdTyp.isEmpty())){
				exstOrdTyp=new ArrayList<String>();
				exstOrdTyp.add("MTBI");exstOrdTyp.add("MTO");
			}
			model.addAttribute("ExstOrderType", exstOrdTyp);
		}
		catch(Exception e){
			e.printStackTrace();
		}*/
			/*	List<String>exstJobCd=GimManager.getAllExistJobOrdDocNoForCheck();
			if(exstJobCd!=null&&!exstJobCd.isEmpty()){
				model.addAttribute("ExstJobNoChk", exstJobCd);
			}
			List<Stk_Mst> stkForJobCardIsue=GimManager.getAllExsitJobCardIsueGreaterThenZeroList();
			if(stkForJobCardIsue!=null&&!stkForJobCardIsue.isEmpty()){
				model.addAttribute("ExstStkInJobCrdIseStr", gsn.toJson(stkForJobCardIsue));
			}
			List<Stk_Mst> stkForJobCardRcvd=GimManager.getAllExsitJobCardRecvedList();
			if(stkForJobCardRcvd!=null&&!stkForJobCardRcvd.isEmpty()){
				model.addAttribute("ExstStkInJobCrdRcvdStr", gsn.toJson(stkForJobCardRcvd));
			}*/
		return null;
	}
	
	@RequestMapping(value = "/editjoborder.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditjoborder(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="jb_hdr_id")Long jobOrdId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}Gson gsn=new Gson();
		/*List<Bom_Iss_Job_Dtl> isdbm=GimManager.getExstBomIssedjobDetail();
		if(isdbm!=null&&!isdbm.isEmpty())
			model.addAttribute("ExstBomDetailbyStr",gsn.toJson(isdbm));*/
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		/*try{
			List<String> exstOrdTyp=GimManager.getAllExstOrderType();
			if(!(exstOrdTyp!=null&&!exstOrdTyp.isEmpty())){
				exstOrdTyp=new ArrayList<String>();
				exstOrdTyp.add("MTBI");exstOrdTyp.add("MTO");
			}
			model.addAttribute("ExstOrderType", exstOrdTyp);
		}
		catch(Exception e){
			e.printStackTrace();
		}*/
		Object editJobHdrOnly[]=GimManager.getExistJobOrdHdrDetOnlyIn(jobOrdId);
		if(editJobHdrOnly!=null){
			model.addAttribute("ExstJobHdrEdit", editJobHdrOnly);
			if(editJobHdrOnly[0]!=null){
				List<Job_Ord_Hdr_Dtl> edtjbHdrDtl=GimManager.getAllExstJobOrdDetByDocNo(editJobHdrOnly[0].toString());
				if(edtjbHdrDtl!=null&&!edtjbHdrDtl.isEmpty()){
					model.addAttribute("ExstJbOrdHdrDtlStr", gsn.toJson(edtjbHdrDtl));
				}
			}
		}
		if(editJobHdrOnly!=null){
		List<Object[]>	editJobOrd=GimManager.getAllExistJobHdrDetailForEdit(""+editJobHdrOnly[0],""+editJobHdrOnly[2]);
		if(editJobOrd!=null&&!editJobOrd.isEmpty()){
			model.addAttribute("ExsitJobDetEdit", editJobOrd);
		}	
		}
		
		List<Object[]>OrdDetl=GimManager.getNeededOrdNoDetailForWax("");
		if(OrdDetl!=null&&!OrdDetl.isEmpty()){
			model.addAttribute("addOrdDet", OrdDetl);
			model.addAttribute("OrdTrgtDtStr", new Gson().toJson(OrdDetl));
			}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<String>exstJobCd=GimManager.getAllExistJobOrdDocNoForCheck();
			if(exstJobCd!=null&&!exstJobCd.isEmpty()){
				model.addAttribute("ExstJobNoChk", exstJobCd);
			}
		return null;
	}
	@RequestMapping(value = "/addmainprocesstemp.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddmainprocessTemp(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		Gson gsn=new Gson();
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		
		String primCd=GimManager.getExistingPrimaryIdOfMainTempProcess();
		model.addAttribute("AutoIdForSubPrcs", primCd);
		model.addAttribute("CompanyStoreDet", empDtls.getEm_cmy_cd()+"-"+empDtls.getEm_str_cd());
		model.addAttribute("dptOfUserLogin", empDtls.getEm_dpt_cd().split(","));
		try{
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}	
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Prcs_Mst>exst=GimManager.getExistProcessDetailInSubPrcs();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExstPrcsDet",exst);
		}
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		
		
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/editmainprocesstemp.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditdmainprocessTemp(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam("docNo") String docNo,@RequestParam("prcsType") String prcsType) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		Gson gsn=new Gson();
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		
		String primCd=GimManager.getExistingPrimaryIdRcvdDocOfMainProcess();
		model.addAttribute("AutoIdForRcvdDocNo", primCd);
		model.addAttribute("CompanyStoreDet", empDtls.getEm_cmy_cd()+"-"+empDtls.getEm_str_cd());
		model.addAttribute("dptOfUserLogin", empDtls.getEm_dpt_cd().split(","));
		try{
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Prcs_Mst>exst=GimManager.getExistProcessDetailInSubPrcs();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExstPrcsDet",exst);
		}
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		
		
		
		if(docNo!=null){
			Mn_Prcs_Tmp_Hdr mnExstEdit=GimManager.getAllExstMnHdrTempForEdit(docNo);
			if(mnExstEdit!=null){
				model.addAttribute("ExstMnHdrEdt", mnExstEdit);
			}
			if(mnExstEdit!=null){
			List<Object[]> exstMainP=GimManager.getExsitMAinPrcsTempHdrDetailForEdit(docNo,prcsType,mnExstEdit.ismpth_iss_auth());
			if(exstMainP!=null&&!exstMainP.isEmpty()){
				model.addAttribute("ExstMainPrcsHdrDtlEdt", exstMainP);
			}
			}
		}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/addmainprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddmainprocess(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		
		String primCd=GimManager.getExistingPrimaryIdOfMainProcess();
		model.addAttribute("AutoIdForSubPrcs", primCd);
		model.addAttribute("CompanyStoreDet", empDtls.getEm_cmy_cd()+"-"+empDtls.getEm_str_cd());
		Format formatter = new SimpleDateFormat("dd-MMM-yy hh:mm:ss");
		model.addAttribute("dptOfUserLogin", empDtls.getEm_dpt_cd().split(","));
		try{
			List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
			if(strExist!=null&&!strExist.isEmpty()){
				model.addAttribute("ExistStrDet",strExist);
			}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Prcs_Mst>exst=GimManager.getExistProcessDetailInSubPrcs();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExstPrcsDet",exst);
		}
		List<Prcs_Mst>exstSub=GimManager.getExistProcessDetailInSubPrcsNotMain();
		if(exstSub!=null&&!exstSub.isEmpty()){
			model.addAttribute("ExstSubPrcsDet",new Gson().toJson(exstSub));
		}
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/editmainprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditmainprocess(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam("docNo") String docNo,@RequestParam("primid") Long primid) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		Gson gsn=new Gson();
		try{
			List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId("");
			if(strExist!=null&&!strExist.isEmpty()){
				model.addAttribute("ExistStrDet",strExist);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
			if(cmyExist!=null&&!cmyExist.isEmpty()){
				model.addAttribute("ExistCmyDet",cmyExist);
			}
			List<Prcs_Mst>exst=GimManager.getExistProcessDetailInSubPrcs();
			if(exst!=null&&!exst.isEmpty()){
				model.addAttribute("ExstPrcsDet",exst);
			}
			List<Prcs_Mst>exstSub=GimManager.getExistProcessDetailInSubPrcsNotMain();
			if(exstSub!=null&&!exstSub.isEmpty()){
				model.addAttribute("ExstSubPrcsDet",new Gson().toJson(exstSub));
			}
			
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
			if(wrkExist!=null&&!wrkExist.isEmpty()){
				model.addAttribute("ExistWrkDet",wrkExist);
			}
		
		if(primid!=null){
			Mn_Prcs_Hdr mnExstEdit=GimManager.getAllExstMnHdrForEdit(primid);
			if(mnExstEdit!=null){
				model.addAttribute("ExstMnHdrEdt", mnExstEdit);
			}
			if(mnExstEdit!=null){
			List<Object[]> exstMainP=GimManager.getExsitMAinPrcsHdrDetailForEdit(docNo,primid);
			if(exstMainP!=null&&!exstMainP.isEmpty()){
				model.addAttribute("ExstMainPrcsHdrDtlEdt", exstMainP);
			}
			}
		}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/addsubprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddsubprocess(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		Gson gsn=new Gson();
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		String primCd=GimManager.getExistingPrimaryIdOfSubProcess();
		model.addAttribute("empDtls", empDtls);
		model.addAttribute("AutoIdForSubPrcs", primCd);
		model.addAttribute("dptOfUserLogin", empDtls.getEm_dpt_cd().split(","));
		try{
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Prcs_Mst>exst=GimManager.getExistProcessDetailInSubPrcsNotMain();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExstPrcsDet",exst);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		List<Object[]> exstJobTree=GimManager.getExistingJobAndtreeDetail(empDtls.getEm_cmy_cd());
		if(exstJobTree!=null&&!exstJobTree.isEmpty()){
			model.addAttribute("ExstJobTreeBoth", exstJobTree);
		}
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
	return null;
	}
	
	@RequestMapping(value = "/editsubprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditsubprocess(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="sph_id")Long sph_id,@RequestParam(value="sph_doc_no")String sph_doc_no,@RequestParam(value="sph_trn_typ") String trntyp) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		Gson gsn=new Gson();
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		model.addAttribute("empDtls", empDtls);
		if(sph_id!=null){
		Object[] subprcsHdr=GimManager.getSubPrcsHderForEdit(sph_id);
		if(subprcsHdr!=null){
			model.addAttribute("SubPrcsHderInfo", subprcsHdr);
		}
		}
		if(sph_doc_no!=null&&!sph_doc_no.equalsIgnoreCase("")){
		boolean ismelt=false;
		if(StringUtils.isNotBlank(trntyp)){
			ismelt=trntyp.toLowerCase().contains("melt");
		}
		List<Object[]> subPrcsHdrDtl=GimManager.getSubPrcsHdrDtlForEdit(sph_doc_no,"",ismelt);
		if(subPrcsHdrDtl!=null&&!subPrcsHdrDtl.isEmpty()){
			model.addAttribute("SubPrcsHderDtlInfo", subPrcsHdrDtl);	
		}
		model.addAttribute("IsMelting", ismelt);
		}
		try{
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		List<Prcs_Mst>exst=GimManager.getExistProcessDetailInSubPrcsNotMain();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExstPrcsDet",exst);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
	return null;
	}
	
	@RequestMapping(value = "/subprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doSubprocess(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		model.addAttribute("savedResOfSupPrcsShow", session.getAttribute("savedResOfSupPrcs"));
		session.removeAttribute("savedResOfSupPrcs");
		try{
			List<Object[]> exstSubPrcs=GimManager.getExstSubProcessHderDetalForShow();
			if(exstSubPrcs!=null&&!exstSubPrcs.isEmpty()){
				model.addAttribute("ExstSubPrcsDet", new Gson().toJson(exstSubPrcs));
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/addmold.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddmold(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
	model.addAttribute("SaveMoldResult", session.getAttribute("SaveDetailOfMold"));
		session.removeAttribute("SaveDetailOfMold");
		try{
			String moldCd=GimManager.takeAutGenIdForMoldCd();
			model.addAttribute("moldCdAutoGnId", moldCd);
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/editmold.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditmold(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="mldId")Long mldId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(mldId!=null){
				Mold_Mst mm=GimManager.getExistMoldDetailForEdit(mldId);
				if(mm!=null){
					model.addAttribute("ExistMldEdit", mm);
				}
			}
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/addorder.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddorder(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		try{
			model.addAttribute("CompanyStoreDet", empDtls.getEm_cmy_cd()+"-"+empDtls.getEm_str_cd());
			List<String> exstOrdTyp=GimManager.getAllExstOrderType();
			if(!(exstOrdTyp!=null&&!exstOrdTyp.isEmpty())){
				exstOrdTyp=new ArrayList<String>();
				exstOrdTyp.add("MTBI");exstOrdTyp.add("MTO");
			}
			else{
				if(!exstOrdTyp.contains("MTBI"))
					exstOrdTyp.add("MTBI");
					if(!exstOrdTyp.contains("MTO"))
						exstOrdTyp.add("MTO");
			}
			model.addAttribute("ExstOrderType", exstOrdTyp);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		try{
			
		String ordid=GimManager.takeAutGenIdForOrderCd();
		model.addAttribute("ExistOrdId", ordid);
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId(empDtls.getEm_emp_id());
		if(vnctExist!=null&&!vnctExist.isEmpty()){
			model.addAttribute("ExistCstDet",vnctExist);
		}
		
		}
		catch(Exception e){
			e.printStackTrace();
		}
			return null; 
	}
	
	@RequestMapping(value = "/editorder.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditorder(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="ord_hdrId")Long ohdId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		try{
			List<String> exstOrdTyp=GimManager.getAllExstOrderType();
			if(!(exstOrdTyp!=null&&!exstOrdTyp.isEmpty())){
				exstOrdTyp=new ArrayList<String>();
				exstOrdTyp.add("MTBI");exstOrdTyp.add("MTO");
			}
			else{
				if(!exstOrdTyp.contains("MTBI"))
					exstOrdTyp.add("MTBI");
					if(!exstOrdTyp.contains("MTO"))
						exstOrdTyp.add("MTO");
			}
			model.addAttribute("ExstOrderType", exstOrdTyp);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		try{Gson gsn=new Gson();
			List<String> dbfind=GimManager.findDubOrdNoWithProCdImpl();
			if(dbfind!=null&&!dbfind.isEmpty()){
				String json = gsn.toJson(dbfind);
			model.addAttribute("CompareUseProWthOrd", json);
			}
		if(ohdId!=null){
		Ord_Hdr stsAuth= GimManager.checkOrdAuthById(ohdId);
		if(stsAuth!=null){
		model.addAttribute("authChk",stsAuth);	
		model.addAttribute("ExstOrdHdrStr", gsn.toJson(stsAuth));
		List<Ord_Hdr_Dtl> exstOrdHdrDtl=GimManager.getExsitingOrderHdrDtlById(stsAuth.getOh_ord_no());
		if(exstOrdHdrDtl!=null&&!exstOrdHdrDtl.isEmpty()){
			model.addAttribute("ExstOrdHdrDetSt", gsn.toJson(exstOrdHdrDtl));
		}
		}
		Object ohd=GimManager.getExistOrderHdrDetailForEdit(ohdId);
		if(ohd!=null)
		model.addAttribute("ExistOrdDet", ohd);
		Object sumOrd=GimManager.getExistOrderHdrTableForTakingSum(ohdId);
		List<Object[]>exstOrdDet=GimManager.getAllOrderHderDetalsFor(ohdId);
		if(exstOrdDet!=null&&!exstOrdDet.isEmpty())
			model.addAttribute("ExistOrdList", exstOrdDet);
		if(sumOrd!=null)
			model.addAttribute("ExistSumOrd", sumOrd);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		List<Vn_Ct_Mst> vnctExist=GimManager.getExistVnCtDetailByEmpId(empDtls.getEm_emp_id());
		if(vnctExist!=null&&!vnctExist.isEmpty()){
			model.addAttribute("ExistCstDet",vnctExist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
			return null; 
	}
	
	
	@RequestMapping(value = "/addprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddprocess(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveProcessResult", session.getAttribute("SaveDetailOfProcess"));
		session.removeAttribute("SaveDetailOfProcess");
		try{
			String prcsCd=GimManager.takeAutGenIdForPrcsCd();
			model.addAttribute("prcsAutoGnId", prcsCd);
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
		}
	
	@RequestMapping(value = "/editprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditprocess(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="prcsId") Long prcsId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(prcsId!=null){
				Prcs_Mst pm=GimManager.getExistProcessDetailForEdit(prcsId);
				if(pm!=null){
					model.addAttribute("ExistPrcsEdit", pm);
				}
			}
		List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
		if(exist!=null&&!exist.isEmpty()){
			model.addAttribute("ExistComDet", exist);
		}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
		}
	
	@RequestMapping(value = "/addrawmetrial.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddrawmetrial(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveRawResult", session.getAttribute("SaveDetailOfRaw"));
		session.removeAttribute("SaveDetailOfRaw");
		try{
			String rwMtrlCd=GimManager.takeAutGenIdForrwMtrlCd();
			model.addAttribute("rwMtrlCdAutoGnId", rwMtrlCd);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/editrawmetrial.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditrawmetrial(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="rawId") Long rawId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(rawId!=null){
				Raw_Mtr_Mst rmm=GimManager.getExistRawDetailForEdit(rawId);
				if(rmm!=null){
				model.addAttribute("ExistRwEdit", rmm);	
				}
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/addstone.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddstone(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveStoneResult", session.getAttribute("SaveDetailOfStone"));
		session.removeAttribute("SaveDetailOfStone");
		try{
			String stnCd=GimManager.takeAutGenIdForStnCd();
			model.addAttribute("stnCdAutoGnId", stnCd);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/editstone.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditstone(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="stnId") Long stnId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(stnId!=null){
				Stn_Mst sm=GimManager.getExistStoneDetailForEdit(stnId);
				if(sm!=null){
					model.addAttribute("ExistStnEdit", sm);
				}
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/addstore.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddstore(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveStoreResult", session.getAttribute("SaveDetailOfStore"));
		session.removeAttribute("SaveDetailOfStore");
		try{
			String strCd=GimManager.takeAutGenIdForStrCd();
			model.addAttribute("strAutoGnId", strCd);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/editstore.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditstore(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="strId") Long strId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(strId!=null){
				Str_Mst sm=GimManager.getExistStrDetailForEdit(strId);
				if(sm!=null){
					model.addAttribute("ExistStrEdit", sm);
				}
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/addtreegenerator.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddtreegenerator(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		try{
		String treeid=GimManager.takeAutGenIdForTreeDocNo();
		model.addAttribute("TreeDocNo", treeid);
		String treeNoOfThree=GimManager.getTreeGenratorOfThreeItem();
		model.addAttribute("treeNoOfThree", treeNoOfThree);
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		/*List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}*/
		/*List<Wax_Hdr> wxHdrAdd=GimManager.getExistWaxNoDetailByEmpId(empDtls.getEm_emp_id());
		if(wxHdrAdd!=null&&!wxHdrAdd.isEmpty()){
			model.addAttribute("wxHdrOrdNoExist", wxHdrAdd);
		}*/
		List<Object[]>waxRecFortree=GimManager.getExistWaxHdrDetailForAddTree(empDtls.getEm_emp_id());
		if(waxRecFortree!=null&&!waxRecFortree.isEmpty()){
			model.addAttribute("waxForAddTree", waxRecFortree);
		}
		/*List<Object[]>cate=GimManager.getExistCategoryInWaxHDrDtl();
		if(cate!=null&&!cate.isEmpty()){
			model.addAttribute("exsitCateCary", cate);
		}*/
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/edittreegenerator.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAEdittreegenerator(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="tgh_id")Long tghId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		try{
			Gson gson=new Gson();
			if(tghId!=null){
			List<Object[]> editTreHdr=GimManager.getExistTreeHdrDetailForEdit(tghId);
			if(editTreHdr!=null&&!editTreHdr.isEmpty()){
				try{
				Object[] obj=editTreHdr.get(0);
				List<Tree_Gen_Hdr_Dtl> trsHdrDtl=GimManager.getExistTreeGenHdrDtlForUpdate(obj[7].toString());
				model.addAttribute("ExstGsonTreeDtl", gson.toJson(trsHdrDtl));
				}
				catch(Exception e){
				e.printStackTrace();
				}
				model.addAttribute("ExistTreeHdrDtl", editTreHdr);
			}
			Object tghDet=GimManager.getExistTreeHdrOnlyForEdit(tghId);
			if(tghDet!=null){
				model.addAttribute("ExistTreeHdrOnly", tghDet);
				//
			
			}
			/*List<String> exstCtgyEdit=GimManager.getExistCateGoryForTreeHdrDetail(tghId);
			if(exstCtgyEdit!=null&&!exstCtgyEdit.isEmpty()){
				String extCtgy1=gson.toJson(exstCtgyEdit);
				model.addAttribute("EditCtyCdSel", extCtgy1);
			}*/
		/*	List<String> exstDptEdit=GimManager.getExistDptForTreeHdrDetail(tghId);
			if(exstDptEdit!=null&&!exstDptEdit.isEmpty()){
				String extDp1=gson.toJson(exstDptEdit);
				model.addAttribute("EditDptCdSel", extDp1);
			}
			List<String> exstWaxEdit=GimManager.getExistWaxForTreeHdrDetail(tghId);
			if(exstWaxEdit!=null&&!exstWaxEdit.isEmpty()){
				String extWxNo1=gson.toJson(exstWaxEdit);
				model.addAttribute("EditWaxCdSel", extWxNo1);
			}*/
			}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		/*List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Wax_Hdr> wxHdrAdd=GimManager.getExistWaxNoDetailByEmpId(empDtls.getEm_emp_id());
		if(wxHdrAdd!=null&&!wxHdrAdd.isEmpty()){
			model.addAttribute("wxHdrOrdNoExist", wxHdrAdd);
		}*/
		List<Object[]>waxRecFortree=GimManager.getExistWaxHdrDetailForAddTree(empDtls.getEm_emp_id());
		if(waxRecFortree!=null&&!waxRecFortree.isEmpty()){
			model.addAttribute("waxForAddTree", waxRecFortree);
		}
		/*List<Object[]>cate=GimManager.getExistCategoryInWaxHDrDtl();
		if(cate!=null&&!cate.isEmpty()){
			model.addAttribute("exsitCateCary", cate);
		}*/
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/adduom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAadduom(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveUomResult", session.getAttribute("SaveDetailOfUom"));
		session.removeAttribute("SaveDetailOfUom");
		try{
			String uomCd=GimManager.takeAutGenIdForUomCd();
			model.addAttribute("uomAutoGnId", uomCd);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/edituom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEdituom(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="uomId") Long uomId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
	try{
		if(uomId!=null){
			Uom_Mst um=GimManager.getExistUomDetailForEdit(uomId);
			if(um!=null){
				model.addAttribute("ExsitUomEdit", um);
			}
		}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/addvendor.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddvendor(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveVendorResult", session.getAttribute("SaveDetailOfVendor"));
		session.removeAttribute("SaveDetailOfVendor");
		try{
			Gson gsn=new Gson();
			String vnCd=GimManager.takeAutGenIdForVnCtCd();
			model.addAttribute("vnctAutoGnId", vnCd);
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<String> vntMob=GimManager.getAllExistVendorMoblie();
			if(vntMob!=null&&!vntMob.isEmpty()){
				model.addAttribute("ExstMobNoVnt", gsn.toJson(vntMob));
			}
			List<String> vntEmail=GimManager.getAllExistVendorEmail();
			if(vntEmail!=null&&!vntEmail.isEmpty()){
				model.addAttribute("ExstEmlNoVnt", gsn.toJson(vntEmail));
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/editvendor.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditvendor(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="vntId") Long vntId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			Gson gsn=new Gson();
			if(vntId!=null){
				Vn_Ct_Mst vcm=GimManager.getExistVntCstDetailForEdit(vntId);
				if(vcm!=null){
					model.addAttribute("ExistVntEdit", vcm);
				}
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", exist);
			}
			List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
			if(estStr!=null&&!estStr.isEmpty()){
				model.addAttribute("ExistStrDet", estStr);
			}
			List<String> vntMob=GimManager.getAllExistVendorMoblie();
			if(vntMob!=null&&!vntMob.isEmpty()){
				model.addAttribute("ExstMobNoVnt", gsn.toJson(vntMob));
			}
			List<String> vntEmail=GimManager.getAllExistVendorEmail();
			if(vntEmail!=null&&!vntEmail.isEmpty()){
				model.addAttribute("ExstEmlNoVnt", gsn.toJson(vntEmail));
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/addwax.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAaddwax(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	
		try{
			model.addAttribute("CompanyStoreDet", empDtls.getEm_cmy_cd()+"-"+empDtls.getEm_str_cd());
		String ordid=GimManager.takeAutGenIdForWaxDocNo();
		model.addAttribute("ExistWaxDcoNo", ordid);
		List<Object[]> addwax=GimManager.getNeededProductAndOrderDetailForWax(empDtls.getEm_emp_id());
		if(addwax!=null&&!addwax.isEmpty())
			model.addAttribute("addWaxOrdDet", addwax);
	/*	List<Object[]>OrdNo=GimManager.getNeededOrdNoDetailForWax(empDtls.getEm_emp_id());
		if(OrdNo!=null&&!OrdNo.isEmpty())
			model.addAttribute("addOrdNoDet", OrdNo);*/
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		/*List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}*/
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/editwax.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditwax(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam (value="wax_hdr_id")Long waxId) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		try{
		if(waxId!=null){
			List<Object[]> exstWax=GimManager.editForWaxHdrDetailById(waxId);
			if(exstWax!=null&&!exstWax.isEmpty()){
				model.addAttribute("exstWaxForEdit", exstWax);
			}
			Object waxhdrRec=GimManager.editWaxHdrRecById(waxId);
			if(waxhdrRec!=null)
			model.addAttribute("edtWaxFulDet", waxhdrRec);	
		}
		List<Object[]> addwax=GimManager.getNeededProductAndOrderDetailForWax(empDtls.getEm_emp_id());
		if(addwax!=null&&!addwax.isEmpty())
			model.addAttribute("addWaxOrdDet", addwax);
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_emp_id());
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId(empDtls.getEm_emp_id());
		if(strExist!=null&&!strExist.isEmpty()){
			model.addAttribute("ExistStrDet",strExist);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId(empDtls.getEm_emp_id());
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/bom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doBbom(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveBomEditResult", session.getAttribute("SaveDetailOfBomEdit"));
		session.removeAttribute("SaveDetailOfBomEdit");
		
		List<Object[]> exst=GimManager.getExistBomDetail();
	if(exst!=null&&!exst.isEmpty()){
		model.addAttribute("exstBomdetal", new Gson().toJson(exst));
	}
	return null;
	}
	
	@RequestMapping(value = "/casting.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doCcasting(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("saveResOFCstDtlShow", session.getAttribute("saveResOFCstDtl"));
		session.removeAttribute("saveResOFCstDtl");
		List<Object[]> exstCstDtl=GimManager.getAllExistCstHdrDetailList();
		if(exstCstDtl!=null&&!exstCstDtl.isEmpty()){
			model.addAttribute("ExsitCstDtl", new Gson().toJson(exstCstDtl));
		}
	return null;
	}
	
	@RequestMapping(value = "/authentication.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAuth(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveAuthEditResult", session.getAttribute("SaveAuthResult"));
		session.removeAttribute("SaveAuthResult");
		try{
			List<Object[]> exist=GimManager.getExistAuthenticationDetail();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistAuthDet", new Gson().toJson(exist));
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/addauthentication.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddAuth(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
			if(cmyExist!=null&&!cmyExist.isEmpty()){
				model.addAttribute("ExistCmyDet",cmyExist);
			}}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	@RequestMapping(value = "/editauthentication.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditAuth(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam("authid") Long id) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(id!=null){
				Auth_Mst am=GimManager.getExstAuthForEdit(id);
				if(am!=null){
					model.addAttribute("ExistAmHdr",am);
				}
			}
			List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
			if(cmyExist!=null&&!cmyExist.isEmpty()){
				model.addAttribute("ExistCmyDet",cmyExist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/saveauthentication.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doSaveAuth(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("depart") Auth_Mst auth) {
	try{
		if(auth!=null){
			auth.setAuth_sts(true);
		GimManager.saveorupdatetheAuthDetail(auth);	
		session.setAttribute("SaveAuthResult",true);
		}
		}
		catch(Exception e){
			e.printStackTrace();
			}
		return "redirect:authentication.mm";
	}
	
	@RequestMapping(value = "/company.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doCcompany(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveCompanyEditResult", session.getAttribute("SaveDetailOfCompanyEdit"));
		session.removeAttribute("SaveDetailOfCompanyEdit");
		try{
			List<Cmy_Mst> exist=GimManager.getExistAddedCompany();
			if(exist!=null&&!exist.isEmpty()){
				model.addAttribute("ExistComDet", new Gson().toJson(exist));
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
	return null;
	}
	
	@RequestMapping(value = "/customer.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doCcustomer(ModelMap model, HttpServletRequest request, HttpSession session) {
	return null;
	}
	
	@RequestMapping(value = "/daywiseprice.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doDdaywiseprice(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveDayEditResult", session.getAttribute("SaveDetailOfDayEdit"));
		session.removeAttribute("SaveDetailOfDayEdit");
		
		List<Object[]> exst=GimManager.getExistDayWiseDetail();
	if(exst!=null&&!exst.isEmpty()){
		model.addAttribute("ExsitDaydetail", new Gson().toJson(exst));
	}
		return null;
	}
	
	@RequestMapping(value = "/department.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doDdepartment(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveDptmntEditResult", session.getAttribute("SaveDetailOfdepartMentEdit"));
		session.removeAttribute("SaveDetailOfdepartMentEdit");
	List<Object[]> exist=GimManager.getExistDepartmentDetail();
	if(exist!=null&&!exist.isEmpty()){
	model.addAttribute("existDepDetls", new Gson().toJson(exist));	
	}
	return null;
	}
	
	@RequestMapping(value = "/design.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doDdesign(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveDesignEditResult", session.getAttribute("SaveDetailOfDesignEdit"));
		session.removeAttribute("SaveDetailOfDesignEdit");
		
		List<Object[]> exst=GimManager.getExistDesignDetails();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExistDesignDetail", new Gson().toJson(exst));
		}
			return null;
		}
	
	@RequestMapping(value = "/employeemaster.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEemployeemaster(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveEmpEditResult", session.getAttribute("SaveDetailOfEmpEdit"));
		session.removeAttribute("SaveDetailOfEmpEdit");
	List<Object[]> exstDpt=GimManager.getExstDprtmentForSolveMltplDptNm();	
	if(exstDpt!=null&&!exstDpt.isEmpty()){
		model.addAttribute("ExstDptNmVsCd",new Gson().toJson(exstDpt));
	}
	List<Object[]> exst=GimManager.getExistEmpDetails();
	if(exst!=null&&!exst.isEmpty()){
		model.addAttribute("ExistEmpDetail", new Gson().toJson(exst));
	}
		return null;
	}
	
	@RequestMapping(value = "/internaltransfer.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doIinternaltransfer(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("saveSucIntlTrfRes", session.getAttribute("SaveResOfItlHdrDet"));
		session.removeAttribute("SaveResOfItlHdrDet");	
		List<Object[]> exst=GimManager.getAllExistIntrnlTrfHdrDetail();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExstIntlTrfHdrJSON", new Gson().toJson(exst));
		}
		return null;
	}
	
	@RequestMapping(value = "/finishproducts.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doFinishproducts(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("saveSucFinshPrcs", session.getAttribute("savedResOfFnshPrcs"));
		session.removeAttribute("savedResOfFnshPrcs");	
		List<Object[]> exst=GimManager.getAllExistFinishPdtDetail();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("ExstFnshHdrJSON", new Gson().toJson(exst));
		}
		return null;
	}
	
	@RequestMapping(value = "/addfinishproduct.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddFinishproducts(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String primCd=GimManager.getExistingPrimaryIdOfFnshProcess();
		model.addAttribute("AutoIdForSubPrcs", primCd);
		try{
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
			if(wrkExist!=null&&!wrkExist.isEmpty()){
				model.addAttribute("ExistWrkDet",wrkExist);
			}
			List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
			if(cmyExist!=null&&!cmyExist.isEmpty()){
				model.addAttribute("ExistCmyDet",cmyExist);
			}
			List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId("");
			if(strExist!=null&&!strExist.isEmpty()){
				model.addAttribute("ExistStrDet",strExist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/editfinishproduct.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditFinishproducts(ModelMap model, HttpServletRequest request, HttpSession session,@RequestParam("fph_dco_no") String docno) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			if(StringUtils.isNotBlank(docno)){
			List<Object[]>list=GimManager.getExistFinishPdtDetail(docno);
			if(list!=null&&!list.isEmpty()){
				model.addAttribute("listForFnsh", list);
			}
			Fnsh_Pdt_Hdr hdr=GimManager.getExistFinishPdtHeadr(docno);
			if(hdr!=null){
				model.addAttribute("hdrForFnsh", hdr);
			}
			}
			List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
			if(estDpt!=null&&!estDpt.isEmpty()){
				model.addAttribute("ExistDptDet", estDpt);
			}
			List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
			if(wrkExist!=null&&!wrkExist.isEmpty()){
				model.addAttribute("ExistWrkDet",wrkExist);
			}
			List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
			if(cmyExist!=null&&!cmyExist.isEmpty()){
				model.addAttribute("ExistCmyDet",cmyExist);
			}
			List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
			if(vnUom!=null&&!vnUom.isEmpty()){
				model.addAttribute("ExistVnDet", vnUom);
			}
			List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId("");
			if(strExist!=null&&!strExist.isEmpty()){
				model.addAttribute("ExistStrDet",strExist);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}
	
	@RequestMapping(value = "/inward.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doIinward(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("saveSucIwdRes", session.getAttribute("saveResOfIwdHdrDt"));
		session.removeAttribute("saveResOfIwdHdrDt");	
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		try{
		List<Object[]> exstInw=GimManager.getAllExistInwardDetail(empDtls.getEm_emp_id());	
		if(exstInw!=null&&!exstInw.isEmpty()){
			model.addAttribute("exsitInwrdDet", new Gson().toJson(exstInw));
		}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/joborder.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doJjoborder(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveJobHdrResult", session.getAttribute("SaveJobOrdHdrRes"));
		session.removeAttribute("SaveJobOrdHdrRes");
		List<Object[]> exstJobOrd=GimManager.getAllExsitJobOrdeHdrRec();
		if(exstJobOrd!=null&&!exstJobOrd.isEmpty()){
			model.addAttribute("ExstJobOrdHdr", new Gson().toJson(exstJobOrd));
		}
		return null;
	}
	
	@RequestMapping(value = "/dc.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doDc(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("savedResOfDcPrcsShow", session.getAttribute("savedResOfDcPrcs"));
		session.removeAttribute("savedResOfDcPrcs");
		List<Object[]> exts=GimManager.getDcProcessDetail();
		if(exts!=null&&!exts.isEmpty()){
			model.addAttribute("ExstDcProcess", new Gson().toJson(exts));
		}
		return null;
	}
	
	@RequestMapping(value = "/recover.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doRecovery(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("savedResOfRvcyPrcsShow", session.getAttribute("savedResOfRcvyPrcs"));
		session.removeAttribute("savedResOfRcvyPrcs");
		List<Object[]> exts=GimManager.getRecoveryProcessDetail();
		if(exts!=null&&!exts.isEmpty()){
			model.addAttribute("ExstRcvyProcess", new Gson().toJson(exts));
		}
		return null;
	}
	
	@RequestMapping(value = "/adddc.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddDc(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		model.addAttribute("loginempcd", empDtls.getEm_emp_id());
		String primCd=GimManager.getExistingPrimaryIdOfDcProcess();
		model.addAttribute("AutoIdForSubPrcs", primCd);
		try{
			List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId("");
			if(strExist!=null&&!strExist.isEmpty()){
				model.addAttribute("ExistStrDet",strExist);
			}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}

	@RequestMapping(value = "/editdc.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditDc(ModelMap model, HttpServletRequest request, HttpSession session,@RequestParam("dc_dco_no")String dcdocno) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String primCd=GimManager.getExistingPrimaryIdOfDcProcess();
		model.addAttribute("AutoIdForSubPrcs", primCd);
		try{
			if(StringUtils.isNotBlank(dcdocno)){
			List<Object[]> exst=GimManager.getExsistDcForEdit(dcdocno);
			if(exst!=null&&!exst.isEmpty()){
				model.addAttribute("ExstDcDetail", exst);
			}
			Dc_Hdr dcHdr=GimManager.getExsistDcHeaderForEdit(dcdocno);
			if(dcHdr!=null){
				model.addAttribute("ExstDcHdr", dcHdr);
			}
			}
			List<Str_Mst> strExist=GimManager.getExistStroeDetailByEmpId("");
			if(strExist!=null&&!strExist.isEmpty()){
				model.addAttribute("ExistStrDet",strExist);
			}
		List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
		if(estDpt!=null&&!estDpt.isEmpty()){
			model.addAttribute("ExistDptDet", estDpt);
		}
		List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
		if(cmyExist!=null&&!cmyExist.isEmpty()){
			model.addAttribute("ExistCmyDet",cmyExist);
		}
		List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
		if(wrkExist!=null&&!wrkExist.isEmpty()){
			model.addAttribute("ExistWrkDet",wrkExist);
		}
		List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
		if(vnUom!=null&&!vnUom.isEmpty()){
			model.addAttribute("ExistVnDet", vnUom);
		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/mainprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doMmainprocess(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("savedResOfMainPrcsShow", session.getAttribute("savedResOfMainPrcs"));
		session.removeAttribute("savedResOfMainPrcs");
		//List<Object[]> mainPrcsDt=GimManager.getAllMainPrcsHdrDetail();
		List<Object[]> mainPrcsDt=GimManager.getAllMainPrcsHdrDetailNewByRam();
		if(mainPrcsDt!=null&&!mainPrcsDt.isEmpty()){
			model.addAttribute("exsitMAinPrcsDet",new Gson().toJson(mainPrcsDt) );
		}
		return null;
	}
	@RequestMapping(value = "/directmainprocess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doDirectmainprocess(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("savedResOfMainPrcsShow", session.getAttribute("savedResOfMainPrcs"));
		session.removeAttribute("savedResOfMainPrcs");
		List<Object[]> mainPrcsDt=GimManager.getAllMainPrcsHdrTempDetail();
		if(mainPrcsDt!=null&&!mainPrcsDt.isEmpty()){
			model.addAttribute("exsitMAinPrcsDet", new Gson().toJson(mainPrcsDt));
		}
		return null;
	}
	
	@RequestMapping(value = "/mold.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doMmold(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveMoldEditResult", session.getAttribute("SaveDetailOfMoldEdit"));
		session.removeAttribute("SaveDetailOfMoldEdit");
	
	List<Object[]> mold=GimManager.getExistMoldDetail();
	if(mold!=null&&!mold.isEmpty()){
		model.addAttribute("ExistMoldDet",new Gson().toJson(mold) );
	}
		return null;
	}
	
	@RequestMapping(value = "/order.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doOorder(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		
		List<Object[]> extOrd=GimManager.getExistOrderDetail(empDtls.getEm_emp_id());
		if(extOrd!=null&&!extOrd.isEmpty()){
			model.addAttribute("exstOrdDet", new Gson().toJson(extOrd));
		}
		return null;
	}
	
	@RequestMapping(value = "/process.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doPprocess(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveProcessEditResult", session.getAttribute("SaveDetailOfProcessEdit"));
		session.removeAttribute("SaveDetailOfProcessEdit");
		List<Object[]> exstDpt=GimManager.getExstDprtmentForSolveMltplDptNm();	
		if(exstDpt!=null&&!exstDpt.isEmpty()){
			model.addAttribute("ExstDptNmVsCd",new Gson().toJson(exstDpt));
		}
		List<Object[]> extPrc=GimManager.getExistProcessDetail();
	if(extPrc!=null&&!extPrc.isEmpty()){
		model.addAttribute("exstPrcsDet", new Gson().toJson(extPrc));
	}
	return null;
	}
	
	@RequestMapping(value = "/rawmetrial.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doRrawmetrial(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveRawEditResult", session.getAttribute("SaveDetailOfRawEdit"));
		session.removeAttribute("SaveDetailOfRawEdit");
		
		List<Object[]> exst=GimManager.getExistRawMaterialDetail();
		if(exst!=null&&!exst.isEmpty()){
			model.addAttribute("existRawDetail", new Gson().toJson(exst));
		}
		return null;
	}
	
	@RequestMapping(value = "/slsls.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doSslsls(ModelMap model, HttpServletRequest request, HttpSession session) {
	return null;
	}
	
	@RequestMapping(value = "/stone.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doSstone(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveStoneEditResult", session.getAttribute("SaveDetailOfStoneEdit"));
		session.removeAttribute("SaveDetailOfStoneEdit");
		
	List<Object[]> exst=GimManager.getExistStoneDetail();
	if(exst!=null&&!exst.isEmpty()){
		model.addAttribute("existStoneDetail", new Gson().toJson(exst));
	}
		return null;
	}
	
	@RequestMapping(value = "/store.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doSstore(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveStoreEditResult", session.getAttribute("SaveDetailOfStoreEdit"));
		session.removeAttribute("SaveDetailOfStoreEdit");
		
	List<Object[]> exist=GimManager.getExistStoreDetail();
	if(exist!=null&&!exist.isEmpty()){
		model.addAttribute("existStroeDet", new Gson().toJson(exist));
	}
	return null;
	}
	
	@RequestMapping(value = "/treegenerator.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doTtreegenerator(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("sucResOfTreeGen", session.getAttribute("saveResOfTreeGen"));
		session.removeAttribute("saveResOfTreeGen");
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		List<Object[]> existTreDetail=GimManager.getExistTreeGenratorHdrOnly(empDtls.getEm_emp_id());
	if(existTreDetail!=null&&!existTreDetail.isEmpty()){
		model.addAttribute("ExsiTreeHdrDet", new Gson().toJson(existTreDetail));
	}
		return null;
	}
	
	@RequestMapping(value = "/uom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doUuom(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveUomEditResult", session.getAttribute("SaveDetailOfUomEdit"));
		session.removeAttribute("SaveDetailOfUomEdit");
		
	List<Object[]> ab=GimManager.getExistingUomDetail();
	if(ab!=null&&!ab.isEmpty()){
		model.addAttribute("existUomDet", new Gson().toJson(ab));
		}
		return null;
	}
	
	@RequestMapping(value = "/vendor.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doVvendor(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("SaveVendorEditResult", session.getAttribute("SaveDetailOfVendorEdit"));
		session.removeAttribute("SaveDetailOfVendorEdit");
		List<Object[]> exstDpt=GimManager.getExstDprtmentForSolveMltplDptNm();	
		if(exstDpt!=null&&!exstDpt.isEmpty()){
			model.addAttribute("ExstDptNmVsCd",new Gson().toJson(exstDpt));
		}
	List<Object[]> des=GimManager.getExistVendorDetails();
	if(des!=null&&!des.isEmpty()){
		model.addAttribute("exstVendorDetail", new Gson().toJson(des));
	}
		return null;
	}
	
	@RequestMapping(value = "/wax.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doWwax(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		model.addAttribute("WaxSaveRes", session.getAttribute("savedResultWax"));
	session.removeAttribute("savedResultWax");
	model.addAttribute("WaxUpdateRes", session.getAttribute("updatedResultWax"));
	session.removeAttribute("updatedResultWax");
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	List<Object[]> wax=GimManager.getAllExistWaxDetailForUser(empDtls.getEm_emp_id());
	if(wax!=null&&!wax.isEmpty()){
		model.addAttribute("exsitWaxDet", new Gson().toJson(wax));
	}
		return null;
	}
	
	
	
	
	/////////Saving Master detail/////////////
	
	@RequestMapping(value = "/savecompany.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doSsavecompany(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("company") Cmy_Mst companyDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(companyDetail!=null){
			companyDetail.setCm_cmy_updt_dt(startDate);
			companyDetail.setCm_cmy_updt_id(empDtls.getEm_emp_id());
			companyDetail.setCm_cmy_crt_dt(startDate);
			companyDetail.setCm_cmy_crt_id(empDtls.getEm_emp_id());
			companyDetail.setCm_cmy_sts(true);
			try{
			GimManager.saveCompanyDetail(companyDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfCompany", true);
		return "redirect:addcompany.mm";
	}
	
	@RequestMapping(value = "/savecompanyEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doSsavecompanyEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("company") Cmy_Mst companyDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(companyDetail!=null){
			companyDetail.setCm_cmy_updt_dt(startDate);
			companyDetail.setCm_cmy_updt_id(empDtls.getEm_emp_id());
			companyDetail.setCm_cmy_sts(true);
			try{
			GimManager.saveCompanyDetailEdit(companyDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfCompanyEdit", true);
		return "redirect:company.mm";
	}
	
	@RequestMapping(value = "/saveDepartment.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveDepartment(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("depart") Dpt_Mst dptDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(dptDetail!=null){
			dptDetail.setDm_updt_dt(startDate);
			dptDetail.setDm_updt_id(empDtls.getEm_emp_id());
			dptDetail.setDm_crt_dt(startDate);
			dptDetail.setDm_crt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveDepartMentDetail(dptDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfdepartMent", true);
		return "redirect:adddepartment.mm";
	}
	
	@RequestMapping(value = "/saveDepartmentEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveDepartmentEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("depart") Dpt_Mst dptDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(dptDetail!=null){
			dptDetail.setDm_updt_dt(startDate);
			dptDetail.setDm_updt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveDepartMentDetailEdit(dptDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfdepartMentEdit", true);
		return "redirect:department.mm";
	}
	
	@RequestMapping(value = "/saveBom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveBom(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("bom") Bom_Mst bomDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(bomDetail!=null){
			bomDetail.setBm_bom_updt_dt(startDate);
			bomDetail.setBm_bom_updt_id(empDtls.getEm_emp_id());
			bomDetail.setBm_bom_crt_dt(startDate);
			bomDetail.setBm_bom_crt_id(empDtls.getEm_emp_id());
			bomDetail.setBm_bom_sts(true);
			try{
			GimManager.saveBomDetail(bomDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfBom", true);
		return "redirect:addbom.mm";
	}
	
	@RequestMapping(value = "/saveBomEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveBomEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("bom") Bom_Mst bomDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(bomDetail!=null){
			bomDetail.setBm_bom_updt_dt(startDate);
			bomDetail.setBm_bom_updt_id(empDtls.getEm_emp_id());
			bomDetail.setBm_bom_sts(true);
			try{
			GimManager.saveBomDetailEdit(bomDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfBomEdit", true);
		return "redirect:bom.mm";
	}
	@RequestMapping(value = "/saveStore.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveStore(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("store") Str_Mst storeDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(storeDetail!=null){
			storeDetail.setSm_str_updt_dt(startDate);
			storeDetail.setSm_str_updt_id(empDtls.getEm_emp_id());
			storeDetail.setSm_str_crt_dt(startDate);
			storeDetail.setSm_str_crt_id(empDtls.getEm_emp_id());
			storeDetail.setSm_str_sts(true);
			try{
			GimManager.saveStoreDetail(storeDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfStore", true);
		return "redirect:addstore.mm";
	}
	@RequestMapping(value = "/saveStoreEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveStoreEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("store") Str_Mst storeDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(storeDetail!=null){
			storeDetail.setSm_str_updt_dt(startDate);
			storeDetail.setSm_str_updt_id(empDtls.getEm_emp_id());
			storeDetail.setSm_str_sts(true);
			try{
			GimManager.saveStoreDetailEdit(storeDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfStoreEdit", true);
		return "redirect:store.mm";
	}
	@RequestMapping(value = "/saveUom.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveUom(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("uom") Uom_Mst uomDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(uomDetail!=null){
			uomDetail.setUm_uom_updt_dt(startDate);
			uomDetail.setUm_uom_updt_id(empDtls.getEm_emp_id());
			uomDetail.setUm_uom_crt_dt(startDate);
			uomDetail.setUm_uom_crt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveUomDetail(uomDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfUom", true);
		return "redirect:adduom.mm";
	}
	
	@RequestMapping(value = "/saveUomEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveUomEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("uom") Uom_Mst uomDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(uomDetail!=null){
			uomDetail.setUm_uom_updt_dt(startDate);
			uomDetail.setUm_uom_updt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveUomDetailEdit(uomDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfUomEdit", true);
		return "redirect:uom.mm";
	}
	@RequestMapping(value = "/saveProcess.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveProcess(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("proces") Prcs_Mst prcDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(prcDetail!=null){
			prcDetail.setPm_prcs_updt_dt(startDate);
			prcDetail.setPm_prcs_updt_id(empDtls.getEm_emp_id());
			prcDetail.setPm_prcs_crt_dt(startDate);
			prcDetail.setPm_prcs_crt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveProcessDetail(prcDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfProcess", true);
		return "redirect:addprocess.mm";
	}
	@RequestMapping(value = "/saveProcessEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveProcessEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("proces") Prcs_Mst prcDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(prcDetail!=null){
			prcDetail.setPm_prcs_updt_dt(startDate);
			prcDetail.setPm_prcs_updt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveProcessDetailEdit(prcDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfProcessEdit", true);
		return "redirect:process.mm";
	}
	@RequestMapping(value = "/saveStone.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveStone(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("stone") Stn_Mst stnDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(stnDetail!=null){
			stnDetail.setSm_stn_updt_dt(startDate);
			stnDetail.setSm_stn_updt_id(empDtls.getEm_emp_id());
			stnDetail.setSm_stn_crt_dt(startDate);
			stnDetail.setSm_stn_crt_id(empDtls.getEm_emp_id());
			stnDetail.setSm_stn_sts(true);
			try{
			GimManager.saveStoneDetail(stnDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfStone", true);
		return "redirect:addstone.mm";
	}
	@RequestMapping(value = "/saveStoneEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveStoneEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("stone") Stn_Mst stnDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(stnDetail!=null){
			stnDetail.setSm_stn_updt_dt(startDate);
			stnDetail.setSm_stn_updt_id(empDtls.getEm_emp_id());
			stnDetail.setSm_stn_sts(true);
			try{
			GimManager.saveStoneDetailEdit(stnDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfStoneEdit", true);
		return "redirect:stone.mm";
	}
	@RequestMapping(value = "/saveMold.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveMold(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("mold") Mold_Mst mldDetail,@RequestParam (value="mm_file",required=false)MultipartFile file) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(mldDetail!=null){
			if(file!=null){
				try {
					String imgPa=saveImagePath(file.getBytes(),request);
					mldDetail.setMm_mold_img(imgPa);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			mldDetail.setMm_mold_updt_dt(startDate);
			mldDetail.setMm_mold_updt_id(empDtls.getEm_emp_id());
			mldDetail.setMm_mold_crt_dt(startDate);
			mldDetail.setMm_mold_crt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveMoldDetail(mldDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfMold", true);
		return "redirect:addmold.mm";
	}
	
	@RequestMapping(value = "/saveMoldEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveMoldEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("mold") Mold_Mst mldDetail,@RequestParam (value="mm_file",required=false)MultipartFile file,
			@RequestParam("imagePeth")String imgPth) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(mldDetail!=null){
			if(file!=null){
				try {
					String imgPa=saveImagePath(file.getBytes(),request);
					if(!imgPa.equalsIgnoreCase(""))
					mldDetail.setMm_mold_img(imgPa);
					else{
						if(imgPth!=null)
						mldDetail.setMm_mold_img(imgPth);	
						else
							mldDetail.setMm_mold_img("");	
					}
					
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			mldDetail.setMm_mold_updt_dt(startDate);
			mldDetail.setMm_mold_updt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveMoldDetailEdit(mldDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfMoldEdit", true);
		return "redirect:mold.mm";
	}
	
	@RequestMapping(value = "/saveRawMaterial.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveRaw(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("raw") Raw_Mtr_Mst rawDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(rawDetail!=null){
			rawDetail.setRm_mst_updt_dt(startDate);
			rawDetail.setRm_mst_updt_id(empDtls.getEm_emp_id());
			rawDetail.setRm_mst_crt_dt(startDate);
			rawDetail.setRm_mst_crt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveRawMaterialDetail(rawDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfRaw", true);
		return "redirect:addrawmetrial.mm";
	}
	

	@RequestMapping(value = "/saveRawMaterialEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveRawEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("raw") Raw_Mtr_Mst rawDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(rawDetail!=null){
			rawDetail.setRm_mst_updt_dt(startDate);
			rawDetail.setRm_mst_updt_id(empDtls.getEm_emp_id());
			try{
			GimManager.saveRawMaterialDetailEdit(rawDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfRawEdit", true);
		return "redirect:rawmetrial.mm";
	}
	@RequestMapping(value = "/saveDayWise.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveDay(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("day") DayWise_Prc_Mst dayDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(dayDetail!=null){
			dayDetail.setDw_pm_updt_dt(startDate);
			dayDetail.setDw_pm_updt_id(empDtls.getEm_emp_id());
			dayDetail.setDw_pm_crt_dt(startDate);
			dayDetail.setDw_pm_crt_id(empDtls.getEm_emp_id());
			dayDetail.setDw_pm_sts(true);
			try{
			GimManager.saveDayMaterialDetail(dayDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfDay", true);
		return "redirect:adddaywiseprice.mm";
	}
	
	@RequestMapping(value = "/saveDayWiseEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveDayEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("day") DayWise_Prc_Mst dayDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(dayDetail!=null){
			dayDetail.setDw_pm_updt_dt(startDate);
			dayDetail.setDw_pm_updt_id(empDtls.getEm_emp_id());
			dayDetail.setDw_pm_sts(true);
			try{
			GimManager.saveDayMaterialDetailEdit(dayDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfDayEdit", true);
		return "redirect:daywiseprice.mm";
	}
	@RequestMapping(value = "/saveEmp.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveEmp(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("emp") Emp_Mst empDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		String empId=GimManager.getEmpIdForSavingDetail();
		if(empDetail!=null){
			empDetail.setEm_emp_updt_dt(startDate);
			empDetail.setEm_emp_updt_id(empDtls.getEm_emp_id());
			empDetail.setEm_emp_crt_dt(startDate);
			empDetail.setEm_emp_crt_id(empDtls.getEm_emp_id());
			empDetail.setEm_emp_id(empId);
			empDetail.setEm_emp_sts(true);
			try{
			GimManager.saveEmpMaterialDetail(empDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfEmp", true);
		return "redirect:addemployee.mm";
	}
	
	@RequestMapping(value = "/saveEmpEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveEmpEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("emp") Emp_Mst empDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		String empId=GimManager.getEmpIdForSavingDetail();
		if(empDetail!=null){
			empDetail.setEm_emp_updt_dt(startDate);
			empDetail.setEm_emp_updt_id(empDtls.getEm_emp_id());
			empDetail.setEm_emp_sts(true);
			try{
			GimManager.saveEmpMaterialDetailEdit(empDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfEmpEdit", true);
		return "redirect:employeemaster.mm";
	}
	
	@RequestMapping(value = "/saveVendor.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveVendor(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("Vendor") Vn_Ct_Mst vcmDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(vcmDetail!=null){
			vcmDetail.setVcm_vnct_updt_dt(startDate);
			vcmDetail.setVcm_vnct_updt_id(empDtls.getEm_emp_id());
			vcmDetail.setVcm_vnct_crt_dt(startDate);
			vcmDetail.setVcm_vnct_crt_id(empDtls.getEm_emp_id());
			vcmDetail.setVcm_vnct_sts(true);
			try{
			GimManager.saveVendorMaterialDetail(vcmDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfVendor", true);
		return "redirect:addvendor.mm";
	}
	
	@RequestMapping(value = "/saveVendorEdit.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveVendorEdit(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("Vendor") Vn_Ct_Mst vcmDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(vcmDetail!=null){
			vcmDetail.setVcm_vnct_updt_dt(startDate);
			vcmDetail.setVcm_vnct_updt_id(empDtls.getEm_emp_id());
			vcmDetail.setVcm_vnct_sts(true);
			try{
			GimManager.saveVendorMaterialDetailEdit(vcmDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfVendorEdit", true);
		return "redirect:vendor.mm";
	}
	///////////end//////////////////////////
	
	public String filepath="";
	@RequestMapping(value = "/fileSender.mm",method = { RequestMethod.GET, RequestMethod.POST })
	public @ResponseBody String uploadFile(@RequestParam("file") MultipartFile multipartFile,HttpServletRequest request) throws IllegalStateException, IOException {
		if(multipartFile!=null){
			filepath=saveImagePath(multipartFile.getBytes(),request);
			}
		return "";
	
	}
	@RequestMapping(value = "/filePathFinder.mm",method = { RequestMethod.GET, RequestMethod.POST })
	public @ResponseBody String filePathFinder(@RequestParam("file") MultipartFile multipartFile,HttpServletRequest request) throws IllegalStateException, IOException {
		if(multipartFile!=null){
			return saveImagePath(multipartFile.getBytes(),request);
			}
		return "";
	
	}
	
	
	public String saveImagePath(byte[] imageBytes, HttpServletRequest request) {
		Long returnId = (long) (int) (Math.random() * 9000) + 1000;
		String nmb = String.valueOf(returnId);
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		String path=mailManager.getPathImg();
		try {
			BufferedImage image = null;
			ByteArrayInputStream bis = new ByteArrayInputStream(imageBytes);
			image = ImageIO.read(bis);
			bis.close();
			if (image != null) {
				File outputfile = new File(path + File.separator + name + nmb + ".jpg");
				outputfile.mkdirs();
				ImageIO.write(image, "jpg", outputfile);
				String dom = request.getServerName();
				int port = request.getServerPort();

				String[] paths = path.split("webapps");
				String paths1 = paths[1];
				String filepath = "http://" + dom + ":" + port+ paths1 + "/" + name + nmb + ".jpg";
				return filepath;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}


	@RequestMapping(value = "/carat.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doCarat(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		List<Carat_Mst> est=GimManager.getExistCaratMasterdetail();
		if(est!=null&&!est.isEmpty()){
			model.addAttribute("ExstCaratMstDtl", new Gson().toJson(est));
		}
		return null;
	}
	
	@RequestMapping(value = "/addcarat.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doAddCarat(ModelMap model, HttpServletRequest request, HttpSession session) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		try{
			String bomCd=GimManager.takeAutGenIdForCarattCd();
			model.addAttribute("bomAutoGnId", bomCd);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		model.addAttribute("SaveBomResult", session.getAttribute("SaveDetailOfCarat"));
		session.removeAttribute("SaveDetailOfCarat");
		return null;
	}
	
	@RequestMapping(value = "/saveCarat.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String dosaveCarat(ModelMap model, HttpServletRequest request, HttpSession session,
			@ModelAttribute("carat") Carat_Mst caratDetail) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		boolean editpage=false;
		if(caratDetail!=null){
			if(caratDetail.getCrtm_id()!=null)editpage=true;
			caratDetail.setCrtm_updt_dt(startDate);
			caratDetail.setCrtm_updt_id(empDtls.getEm_emp_id());
			caratDetail.setCrtm_crt_dt(startDate);
			caratDetail.setCrtm_crt_id(empDtls.getEm_emp_id());
			caratDetail.setCrtm_cmy_cd(empDtls.getEm_cmy_cd());
			caratDetail.setCrtm_carat_sts(true);
			try{
			GimManager.saveCartDetail(caratDetail);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		session.setAttribute("SaveDetailOfCarat", true);
		if(editpage==false)
		return "redirect:addcarat.mm";
		else
			return "redirect:carat.mm";
	}
	
	@RequestMapping(value = "/editcarat.mm", method = { RequestMethod.GET, RequestMethod.POST })
	public String doEditCarat(ModelMap model, HttpServletRequest request, HttpSession session,
			@RequestParam("carat_id") Long carat_id) {
		if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
				|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			return "redirect:login.mm";
		}
		if(carat_id!=null){
		Carat_Mst exst=GimManager.getDetailsOfCaratMst(carat_id);
		model.addAttribute("exstCarat_Mst", exst);
		}
		model.addAttribute("SaveBomResult", session.getAttribute("SaveDetailOfCarat"));
		session.removeAttribute("SaveDetailOfCarat");
		return null;
	}
@ModelAttribute
public void getLoginCompayandStore(ModelMap model){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	if(StringUtils.isNotBlank(usEml)&&!usEml.equalsIgnoreCase("anonymousUser")){
	
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy hh:mm:ss");
		String startDate = formatter.format(date);
		model.addAttribute("CurrentDate", startDate);
		
	try{
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	model.addAttribute("CompanyStoreByUsr", empDtls.getEm_cmy_cd()+"-"+empDtls.getEm_str_cd()+"-"+empDtls.getEm_dpt_cd());
	List<Object[]> DptWrker=GimManager.getDepartmentWiseWorker(empDtls.getEm_dpt_cd(),empDtls.getEm_emp_typ());
	List<Object[]> DptMnPrcs=GimManager.getDepartmentWisePrcs(empDtls.getEm_dpt_cd(),empDtls.getEm_emp_typ(),"mainprocess");
	List<Object[]> DptSubPrcs=GimManager.getDepartmentWisePrcs(empDtls.getEm_dpt_cd(),empDtls.getEm_emp_typ(),"subprocess");
	List<Object[]> DptVndr=GimManager.getDepartmentWiseVndr(empDtls.getEm_dpt_cd(),empDtls.getEm_emp_typ());
	List<Cmy_Mst> cmydtl=GimManager.getExistCompanyDetailByEmpId(empDtls.getEm_cmy_cd());
	List<Carat_Mst>caratList=GimManager.getExistCaratMasterdetail();
	if(caratList!=null&&!caratList.isEmpty()){
		model.addAttribute("caratList", new Gson().toJson(caratList));
	}
	
	if(DptWrker!=null&&!DptWrker.isEmpty()){
		model.addAttribute("DeptWrker", DptWrker);
	}
	if(DptMnPrcs!=null&&!DptMnPrcs.isEmpty()){
		model.addAttribute("DeptMnPrcs", DptMnPrcs);
	}
	if(DptSubPrcs!=null&&!DptSubPrcs.isEmpty()){
		model.addAttribute("DptSubPrcs", DptSubPrcs);
		model.addAttribute("DptSubPrcsJS", new Gson().toJson(DptSubPrcs));
	}
	if(DptVndr!=null&&!DptVndr.isEmpty()){
		model.addAttribute("DeptVndr", DptVndr);
	}
	model.addAttribute("LoginDet", empDtls);
	if(cmydtl !=null && !cmydtl.isEmpty())
	model.addAttribute("cmyDtl",new Gson().toJson(cmydtl.get(0)));
	model.addAttribute("empDtl",new Gson().toJson(empDtls));
	}
	catch(Exception e){
		e.printStackTrace();
	}
	}
}


@RequestMapping(value = "/addrecover.mm", method = { RequestMethod.GET, RequestMethod.POST })
public String doRecoverPage(ModelMap model, HttpServletRequest request, HttpSession session) {
	if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
			|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
		return "redirect:login.mm";
	}
	String rcvycd=GimManager.takeAutGenIdForRecoveryCd();
	model.addAttribute("AutoIdForRcvyPrcs", rcvycd);
	try{
		List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
		if(estStr!=null&&!estStr.isEmpty()){
			model.addAttribute("ExistStrDet", estStr);
		}	
	List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
	if(estDpt!=null&&!estDpt.isEmpty()){
		model.addAttribute("ExistDptDet", estDpt);
	}
	List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
	if(cmyExist!=null&&!cmyExist.isEmpty()){
		model.addAttribute("ExistCmyDet",cmyExist);
	}
	List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
	if(vnUom!=null&&!vnUom.isEmpty()){
		model.addAttribute("ExistVnDet", vnUom);
	}
	List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
	if(wrkExist!=null&&!wrkExist.isEmpty()){
		model.addAttribute("ExistWrkDet",wrkExist);
	}
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RequestMapping(value = "/editrecover.mm", method = { RequestMethod.GET, RequestMethod.POST })
public String doEditRecoverPage(ModelMap model, HttpServletRequest request, HttpSession session,
		@RequestParam("rh_doc_nm") String docno) {
	if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
			|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
		return "redirect:login.mm";
	}
	try{
		if(StringUtils.isNotBlank(docno)){
			List<Object[]> exts=GimManager.getRecoverExstDataForEdit(docno);
			if(exts!=null&&!exts.isEmpty()){
				model.addAttribute("ListOffRecvor", exts);
			}
			Rcvy_Hdr rh=GimManager.getRecoverHdrDataForEdit(docno);
			if(rh!=null){
				model.addAttribute("rhHdr", rh);
			}
		}
		List<Str_Mst> estStr=GimManager.getStrDetailInProcessPage();
		if(estStr!=null&&!estStr.isEmpty()){
			model.addAttribute("ExistStrDet", estStr);
		}	
	List<Dpt_Mst> estDpt=GimManager.getDepMntDetailInProcessPage();
	if(estDpt!=null&&!estDpt.isEmpty()){
		model.addAttribute("ExistDptDet", estDpt);
	}
	List<Vn_Ct_Mst> vnUom=GimManager.getVnCtDetailInProcessPage();
	if(vnUom!=null&&!vnUom.isEmpty()){
		model.addAttribute("ExistVnDet", vnUom);
	}
	List<Cmy_Mst> cmyExist=GimManager.getExistCompanyDetailByEmpId("");
	if(cmyExist!=null&&!cmyExist.isEmpty()){
		model.addAttribute("ExistCmyDet",cmyExist);
	}
	List<Emp_Mst> wrkExist=GimManager.getExistWorkerDetailByEmpId("");
	if(wrkExist!=null&&!wrkExist.isEmpty()){
		model.addAttribute("ExistWrkDet",wrkExist);
	}
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RequestMapping(value = "/showImageUrl.mm", method = { RequestMethod.GET, RequestMethod.POST })
protected void doImageUrl(HttpServletRequest request, HttpServletResponse response,
                @RequestParam(value = "path", required = false) String path) throws ServletException, IOException {
        String uName = SecurityContextHolder.getContext().getAuthentication().getName();
       if (path != null && !path.equalsIgnoreCase("") ) {
             	String req = null;
             	File image = new File(req, URLDecoder.decode(path, "UTF-8"));
                        if (!image.exists()) {
                                response.sendError(HttpServletResponse.SC_NOT_FOUND); // 404.
                                return;
                        }

                        response.reset();
                        response.setContentType("image/jpeg, image/jpg, image/png, image/gif");
                        response.setHeader("Content-Length", String.valueOf(image.length()));

                        Files.copy(image.toPath(), response.getOutputStream());
        }
}

@RequestMapping(value = "/pagenotallowed.mm", method = { RequestMethod.GET, RequestMethod.POST })
public String doPageNotAllowed(ModelMap model, HttpServletRequest request, HttpSession session) {
	if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null)
			|| SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
		return "redirect:login.mm";
	}
	return null;
}
@RequestMapping(value = "/getallreports.mm", method = { RequestMethod.GET, RequestMethod.POST })
public String getallreports(ModelMap model, HttpServletRequest request, HttpSession session) {
	if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null) || SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
		return "redirect:login.mm";
	}
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	model.addAttribute("cmycd", empDtls.getEm_cmy_cd());
	return null;
}
@RequestMapping(value = "/exportLocakerStock.mm", method = { RequestMethod.GET, RequestMethod.POST })
public String exportLocakerStock(ModelMap model, HttpServletRequest request, HttpSession session, @RequestParam(value = "query", required = false) String query) {
	if (SecurityContextHolder.getContext().getAuthentication().getName().equals(null) || SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
		return "redirect:login.mm";
	}
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	model.addAttribute("cmycd", empDtls.getEm_cmy_cd());
	System.out.println(query);
	List<Object[]> list=GimManager.getInwardReport(empDtls.getEm_cmy_cd(), query);
	/*		Workbook wb = new XSSFWorkbook();
			Sheet sheet = wb.createSheet("LockerStock.xlsx");
			Row header = sheet.createRow(0);
			header.createCell(2).setCellValue("CurrentStock");
			header = sheet.createRow(2);
			header.createCell(0).setCellValue("Exported Date");
			header.createCell(1).setCellValue(str);
			header = sheet.createRow(4);
			header.createCell(0).setCellValue("Company Code");
			header.createCell(1).setCellValue("Part Code");
			header.createCell(2).setCellValue("Part Name");
			header.createCell(3).setCellValue("Current Stock");
			int rowCount = 5;
			for (StockMaster stk : list) {
				Row data = sheet.createRow(rowCount++);
				data.createCell(0).setCellValue(stk.getStk_cmy_cd());
				data.createCell(1).setCellValue(stk.getStk_part_cd());
				data.createCell(2).setCellValue(stk.getStk_part_nm());
				data.createCell(3).setCellValue(stk.getStk_qty());
			}
			response.setContentType("application/vnd.ms-excel");
			response.addHeader("Content-disposition", "attachment; filename=" + "CurrentStock.xlsx");
			
			try {
				wb.write(response.getOutputStream());
				wb.close();
			} catch (IOException e) {
				System.err.println("Inside Catch");
				e.printStackTrace();
			}
	}*/
	return null;
}

}
