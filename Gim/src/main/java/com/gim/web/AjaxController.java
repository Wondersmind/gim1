package com.gim.web;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CookieValue;

import com.gim.Service.GimManager;
import com.gim.Service.GimManagerImpl;
import com.gim.entity.Aly_Mst;
import com.gim.entity.Aly_Prcs_Hdr;
import com.gim.entity.Aly_Prcs_Hdr_Dtl;
import com.gim.entity.Auth_Mst;
import com.gim.entity.Bom_Iss_Job_Dtl;
import com.gim.entity.Bom_Mst;
import com.gim.entity.Cst_Prcs_Hdr;
import com.gim.entity.Cst_Prcs_Hdr_Dtl;
import com.gim.entity.Dgn_Bom_Mst;
import com.gim.entity.Dgn_Cst_Mst;
import com.gim.entity.Dgn_Mold_Mst;
import com.gim.entity.Dgn_Mst;
import com.gim.entity.Dgn_Stn_Mst;
import com.gim.entity.Dpt_Mst;
import com.gim.entity.Emp_Mst;
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
import com.gim.entity.Ord_Hdr_Dtl;
import com.gim.entity.Raw_Mtr_Mst;
import com.gim.entity.Rcvd_Doc_Dtl;
import com.gim.entity.Rcvd_Doc_Hdr;
import com.gim.entity.Stk_Mst;
import com.gim.entity.Stn_Mst;
import com.gim.entity.Tree_Gen_Hdr;
import com.gim.entity.Tree_Gen_Hdr_Dtl;
import com.gim.entity.Wax_Hdr;
import com.gim.entity.Wax_Hdr_Dtl;
import com.gim.util.MailManager;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

/**
 * This class is a controller to handle the Ajax requests from the Admin UI. It
 * leverages Direct Web Remoting (DWR) to simplify the Ajax coding.
 * 
 * @param <shoppingCartItems>
 */

@Service
@RemoteProxy(name = "AjaxController")
public class AjaxController<shoppingCartItems> {
	private static final Logger logger = Logger.getLogger(GimController.class.getName());
	
	@Autowired
	private GimManager GimManager;
	@Autowired
	private GimManagerImpl GimManagerImpl;
	@Autowired
	private GimController gimController;


	@Autowired
	private MailManager mailManager;
	@Autowired(required = false)
	AuthenticationManager authManager;

	/////////////////////////////////Login Work/////////////////////
	@RemoteMethod
	public String getUserLoginCookie(HttpServletRequest request) {
		Cookie[] cookies = null;
		cookies = request.getCookies();
		String value = "";
		if (cookies != null) {
			for (Cookie c : cookies) {
				if (c.getName().equals("cookieName")) {
					value = c.getValue();
						return value;
				}
			}
		}
		return null;

	}
	


	@RemoteMethod
	public String checkEmailandPasswordGIMLogin(String userName, String password) {
	
		String details = GimManager.checkEmailandPasswordGIMLoginImp(userName,password);
		if (details.equalsIgnoreCase("success")) {
			try{
			isAuthenticated(userName, password);
			}catch(Exception e){
				e.printStackTrace();
			}
				return "success";
				} 
			else if(details.equalsIgnoreCase("notActive")){
				return "notActive";
			}
			else{
				return "error";
			}
	}
	
	private boolean isAuthenticated(String userName, String password) {

		Authentication request = new UsernamePasswordAuthenticationToken(userName, password);
		Authentication result = authManager.authenticate(request);
		SecurityContextHolder.getContext().setAuthentication(result);
		return result.isAuthenticated();
	}
	
	@RemoteMethod
	public void userLoginWithcookie(@CookieValue(value = "userName", defaultValue = "0") String userName,
			@CookieValue(value = "password", defaultValue = "0") String password, HttpServletResponse response,
			HttpServletRequest request) {
		Cookie con = new Cookie("cookieName", userName);
		System.out.println("cookie is " + con.toString());
		con.setMaxAge(600 * 600);
		con.setPath("/");
		response.addCookie(con);
	}
	
	@RemoteMethod
	public void userRemovecookie(String userName, String password, HttpServletRequest request,
			HttpServletResponse response) {
		Cookie[] cookies = null;
		 cookies = request.getCookies();
		@SuppressWarnings("unused")
		String value = "";
		if (cookies != null) {
			for (Cookie c : cookies) {
				if (c.getName().equals("cookieName")) {
					value = c.getValue();
					c.setMaxAge(0);
					c.setPath("/");
					response.addCookie(c);
				}

			}
		}
	}
	
	////////////////////end////////////////////////////////////////
	@RemoteMethod
	public String delCompanyMstRecAjax(Long id){
		try{
		GimManager.delCompanyMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public String checkFnshPdtDocNoInDb(String docno){
		try{
		return GimManager.checkFnshPdtDocNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	@RemoteMethod
	public String checkMainProcessDocNoInDb(String docno){
		try{
		return GimManager.checkMainProcessDocNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	@RemoteMethod
	public String checkSubProcessDocNoInDb(String docno){
		try{
		return GimManager.checkSubProcessDocNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	@RemoteMethod
	public String checkDocNoInDcFromDb(String docno){
		try{
		return GimManager.checkDocNoInDcFromDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	@RemoteMethod
	public String checkrecvryPrcsDocInDb(String docno){
		try{
		return GimManager.checkrecvryPrcsDocInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	@RemoteMethod
	public String checkInwardDocNOInDb(String docno){
		try{
		return GimManager.checkInwardDocNOInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	
	@RemoteMethod
	public String checkAlloyDocNoInDb(String docno){
		try{
		return GimManager.checkAlloyDocNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	@RemoteMethod
	public String checkCastingDocNoInDb(String docno){
		try{
		return GimManager.checkCastingDocNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	@RemoteMethod
	public String checkJobcardNoInDb(String docno){
		try{
		return GimManager.checkJobcardNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	
	@RemoteMethod
	public String checkWaxNoInDb(String docno){
		try{
		return GimManager.checkWaxNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	

	@RemoteMethod
	public String checkTreeDocNoInDb(String docno){
		try{
		return GimManager.checkTreeDocNoInDbImpl(docno);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return "Error";
	}
	
	
	@RemoteMethod
	public String delDepartmentMstRecAjax(Long id){
		try{
		GimManager.delDepartmentMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public String delBomMstRecAjax(Long id){
		try{
		GimManager.delBomMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public String delStoreMstRecAjax(Long id){
		try{
		GimManager.delStoreMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public String delUomMstRecAjax(Long id){
		try{
		GimManager.delUomMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public String delProcessMstRecAjax(Long id){
		try{
		GimManager.delProcessMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public String delStoneMstRecAjax(Long id){
		try{
		GimManager.delStoneMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public String delMoldMstRecAjax(Long id){
		try{
		GimManager.delMoldMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public String delRawMstRecAjax(Long id){
		try{
		GimManager.delRawMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public String delDayMstRecAjax(Long id){
		try{
		GimManager.delDayMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public String delEmpMstRecAjax(Long id){
		try{
		GimManager.delEmpMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public String delVendorMstRecAjax(Long id){
		try{
		GimManager.delVendorMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public String delDesignMstRecAjax(Long id){
		try{
		GimManager.delDesignMstRecImpl(id);
		return "success";
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public List<Object[]> getAllNonGoldProductSrchAjax(String id){
		try{
		
		return GimManager.getAllNonGoldProductSrchImpl(id);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public  List<Object[]> getAllBomProductSrchAjax(String id){
		try{
		
		return GimManager.getAllBomProductSrchImpl(id);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public List<Raw_Mtr_Mst> getSearchRawMeterialResultAjax(String id){
		try{
		
		return GimManager.getSearchRawMeterialResultImpl(id);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public List<Object[]> getAllMoldProductSrchAjax(String id){
		try{
		
		return GimManager.getAllMoldProductSrchImpl(id);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public Stn_Mst getNonGOldDetailForAddDesignAjax(String id){
		try{
		
		return GimManager.getOneStoneProductDetImpl(id);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public Bom_Mst getBomDetailForAddDesignAjax(String id){
		try{
		
		return GimManager.getOneBomProductDetImpl(id);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	@RemoteMethod
	public Mold_Mst getMoldDetailForAddDesignAjax(String id){
		try{
		
		return GimManager.getOneMoldProductDetImpl(id);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@RemoteMethod
	public String saveDesignProductsAjax(String NgProd,String BmProd,String MdProd,String clsStn,String castCls,HttpSession session){
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Gson gson = new Gson();
		Dgn_Mst clicks = gson.fromJson(clsStn, Dgn_Mst.class);
		List<Stn_Mst> stn= gson.fromJson(NgProd, new TypeToken<List<Stn_Mst>>(){}.getType());
		List<Bom_Mst> bom= gson.fromJson(BmProd, new TypeToken<List<Bom_Mst>>(){}.getType());
		List<Mold_Mst> mold= gson.fromJson(MdProd, new TypeToken<List<Mold_Mst>>(){}.getType());
		Dgn_Cst_Mst  dcstMst=null;
		if(!castCls.equalsIgnoreCase("{}"))
		dcstMst=gson.fromJson(castCls, Dgn_Cst_Mst.class);
		//////////////////design Master and Related Table Data Save  Data Save  ///////////////
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
			String startDate = formatter.format(date);
			if(dcstMst!=null){
				dcstMst.setCm_cst_crt_dt(startDate);
				dcstMst.setCm_cst_updt_dt(startDate);
				dcstMst.setCm_cst_crt_id(empDtls.getEm_emp_id());
				dcstMst.setCm_cst_updt_id(empDtls.getEm_emp_id());
				dcstMst.setCm_dgn_no(clicks.getDm_pdt_cd());
				dcstMst.setCm_cst_sts(true);
				try{
				GimManager.saveDesignCastMstDetail(dcstMst);
				}catch(Exception e){
					e.printStackTrace();
				}
			}
			
			if(stn!=null&&!stn.isEmpty()){
			clicks.setDm_is_stn(true);
			List<Dgn_Stn_Mst> listDsm=new ArrayList<Dgn_Stn_Mst>();
			for(Stn_Mst sn:stn){
				Dgn_Stn_Mst dsm=new Dgn_Stn_Mst();
				dsm.setDsm_dgn_no(clicks.getDm_pdt_cd());
				dsm.setDsm_stn_cd(sn.getSm_stn_cd());
				dsm.setDsm_stn_pcs(sn.getSm_stn_crt_dt());
				dsm.setDsm_crt_dt(startDate);
				dsm.setDsm_updt_dt(startDate);
				dsm.setDsm_crt_id(empDtls.getEm_emp_id());
				dsm.setDsm_updt_id(empDtls.getEm_emp_id());
				dsm.setDsm_dgn_sts(true);
				listDsm.add(dsm);
			}
			try{
			GimManager.saveDesignStoneMstListDeatil(listDsm);	
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		if(bom!=null&&!bom.isEmpty()){
			clicks.setDm_is_bom(true);
			List<Dgn_Bom_Mst> listDbm=new ArrayList<Dgn_Bom_Mst>();
			for(Bom_Mst bm:bom){
				Dgn_Bom_Mst dbm=new Dgn_Bom_Mst();
				dbm.setDbm_bom_cd(bm.getBm_bom_cd());
				dbm.setDbm_bom_pcs(bm.getBm_bom_crt_dt());
				dbm.setDbm_dgn_no(clicks.getDm_pdt_cd());
				dbm.setDbm_crt_dt(startDate);
				dbm.setDbm_updt_dt(startDate);
				dbm.setDbm_crt_id(empDtls.getEm_emp_id());
				dbm.setDbm_updt_id(empDtls.getEm_emp_id());
				dbm.setDbm_dgn_sts(true);
				listDbm.add(dbm);
			}
			try{
				GimManager.saveDesignBomMstListDeatil(listDbm);	
				}catch(Exception e){
					e.printStackTrace();
				}
		}
		if(mold!=null&&!mold.isEmpty()){
			clicks.setDm_is_mold(true);
			List<Dgn_Mold_Mst> listDmm=new ArrayList<Dgn_Mold_Mst>();
			for(Mold_Mst mm:mold){
				Dgn_Mold_Mst dmm=new Dgn_Mold_Mst();
				dmm.setDmm_dgn_no(mm.getMm_mold_no());
				dmm.setDmm_mold_pcs(mm.getMm_mold_crt_dt());
				dmm.setDmm_mold_no(clicks.getDm_pdt_cd());
				dmm.setDmm_crt_dt(startDate);
				dmm.setDmm_updt_dt(startDate);
				dmm.setDmm_crt_id(empDtls.getEm_emp_id());
				dmm.setDmm_updt_id(empDtls.getEm_emp_id());
				dmm.setDmm_dgn_sts(true);
				listDmm.add(dmm);
			}
			try{
				GimManager.saveDesignMoldMstListDeatil(listDmm);	
				}catch(Exception e){
					e.printStackTrace();
				}
		}
		
		if(!gimController.filepath.equalsIgnoreCase(""))
		{
			clicks.setDm_dgn_img(gimController.filepath);	
			gimController.filepath="";
		}
		try{

			clicks.setDm_dgn_crt_dt(startDate);
			clicks.setDm_dgn_crt_id(empDtls.getEm_emp_id());
			clicks.setDm_dgn_updt_dt(startDate);
			clicks.setDm_dgn_updt_id(empDtls.getEm_emp_id());
			clicks.setDm_dgn_sts(true);
			GimManager.saveDesignMstDetail(clicks);
		}catch(Exception e){
			e.printStackTrace();
		}
		////////////////// end ///////////////
		try{
		for(Stn_Mst sm:stn){
			Stn_Mst smExist=GimManager.getOneStoneProductDetImpl(sm.getSm_stn_cd());
		if(smExist==null){
			sm.setSm_stn_sts(true);
			sm.setSm_stn_crt_dt(startDate);
			sm.setSm_stn_crt_id(empDtls.getEm_emp_id());
			sm.setSm_stn_updt_dt(startDate);
			sm.setSm_stn_updt_id(empDtls.getEm_emp_id());
			sm.setSm_cmy_cd(empDtls.getEm_cmy_cd());
			GimManager.saveStoneDetail(sm);
		}
		}
		for(Bom_Mst bm:bom){
			Bom_Mst bmExist=GimManager.getOneBomProductDetImpl(bm.getBm_bom_cd());
		if(bmExist==null){
			bm.setBm_bom_sts(true);
			bm.setBm_bom_crt_dt(startDate);
			bm.setBm_bom_crt_id(empDtls.getEm_emp_id());
			bm.setBm_bom_updt_dt(startDate);
			bm.setBm_bom_updt_id(empDtls.getEm_emp_id());
			bm.setBm_cmy_cd(empDtls.getEm_cmy_cd());
			GimManager.saveBomDetail(bm);
		}
		}
		for(Mold_Mst mm:mold){
			Mold_Mst mmExist=GimManager.getOneMoldProductDetImpl(mm.getMm_mold_no());
		if(mmExist==null){
			mm.setMm_mold_sts(true);
			mm.setMm_mold_crt_dt(startDate);
			mm.setMm_mold_crt_id(empDtls.getEm_emp_id());
			mm.setMm_mold_updt_dt(startDate);
			mm.setMm_mold_updt_id(empDtls.getEm_emp_id());
			mm.setMm_cmy_cd(empDtls.getEm_cmy_cd());
			GimManager.saveMoldDetail(mm);
		}
		}
		}catch(Exception e){
			e.printStackTrace();
		}
		session.setAttribute("SaveDetailOfDesign", true);
		return "success";
	}


///////////////////////////////////////Deleted Added Design Product In Edit Design Page/////////////////////
@RemoteMethod
public String delExistNonGoldfromDgnAjax(Long id){
	try{
	GimManager.delExistNonGoldfromDgnAjaxImpl(id);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public String delExistBomfromDgnAjax(Long id){
	try{
	GimManager.delExistBomfromDgnAjaxImpl(id);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public String delExistMoldfromDgnAjax(Long id){
	try{
	GimManager.delExistMoldfromDgnAjaxImpl(id);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public String delExistCastfromDgnAjax(Long id){
	try{
	GimManager.delExistCastfromDgnAjaxImpl(id);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

///////////////////////////////////////End/////////////////////
///////////////////////Check Product are Already Added Or Not In data Base In EditDesign Jsp////////////

@RemoteMethod
public Dgn_Stn_Mst checkStoneWithDgnNoForAddAjax(String stnId,String degId){
	try{
	
	return GimManager.checkStoneWithDgnNoForAddAjaxImpl(stnId,degId);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public Dgn_Bom_Mst checkBomWithDgnNoForAddAjax(String bomId,String degId){
	try{
	
	return GimManager.checkBomDetailForAddDesignAjaxImpl(bomId,degId);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public Dgn_Mold_Mst checkMoldWithDgnNoForAddAjax(String moldId,String degId){
	try{
	
	return GimManager.checkMoldDetailForAddDesignAjaxImpl(moldId,degId);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

/////////////////////////end////////////////////////////////////////////////
////////////////////////save Edited Design Product in editDesign In Page/////////////////////

@RemoteMethod
public String saveDesignProductsAjaxEdit(String NgProd,String BmProd,String MdProd,String clsStn,String castCls,HttpSession session){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Gson gson = new Gson();
	Dgn_Mst clicks = gson.fromJson(clsStn, Dgn_Mst.class);
	List<Stn_Mst> stn= gson.fromJson(NgProd, new TypeToken<List<Stn_Mst>>(){}.getType());
	List<Bom_Mst> bom= gson.fromJson(BmProd, new TypeToken<List<Bom_Mst>>(){}.getType());
	List<Mold_Mst> mold= gson.fromJson(MdProd, new TypeToken<List<Mold_Mst>>(){}.getType());
	Dgn_Cst_Mst  dcstMst=null;
	if(!castCls.equalsIgnoreCase("{}"))
	dcstMst=gson.fromJson(castCls, Dgn_Cst_Mst.class);
	//////////////////design Master and Related Table Data Save  Data Save  ///////////////
Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		if(dcstMst!=null){
			GimManager.setStatusDisableInDgnCstMstForDgnID(clicks.getDm_pdt_cd());
			dcstMst.setCm_cst_crt_dt(startDate);
			dcstMst.setCm_cst_updt_dt(startDate);
			dcstMst.setCm_cst_crt_id(empDtls.getEm_emp_id());
			dcstMst.setCm_cst_updt_id(empDtls.getEm_emp_id());
			dcstMst.setCm_dgn_no(clicks.getDm_pdt_cd());
			dcstMst.setDcm_cmy_cd(empDtls.getEm_cmy_cd());
			dcstMst.setCm_cst_sts(true);
			try{
			GimManager.saveDesignCastMstDetail(dcstMst);
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		
		if(stn!=null&&!stn.isEmpty()){
		clicks.setDm_is_stn(true);
		List<Dgn_Stn_Mst> listDsm=new ArrayList<Dgn_Stn_Mst>();
		for(Stn_Mst sn:stn){
			Stn_Mst sm=GimManager.getStoneCdByStoneNameImp(sn.getSm_stn_nm(),sn.getSm_stn_shpe(),sn.getSm_stn_clr(),sn.getSm_stn_sz());
			Dgn_Stn_Mst dsm=new Dgn_Stn_Mst();
			sn.setSm_stn_cd(sm.getSm_stn_cd());
			dsm.setDsm_dgn_no(clicks.getDm_pdt_cd());
			dsm.setDsm_stn_cd(sm.getSm_stn_cd());
			dsm.setDsm_stn_pcs(sn.getSm_stn_crt_dt());
			dsm.setDsm_crt_dt(startDate);
			dsm.setDsm_updt_dt(startDate);
			dsm.setDsm_crt_id(empDtls.getEm_emp_id());
			dsm.setDsm_updt_id(empDtls.getEm_emp_id());
			dsm.setDsm_dgn_sts(true);
			dsm.setDsm_cmy_cd(empDtls.getEm_cmy_cd());
			listDsm.add(dsm);
		}
		try{
		GimManager.saveDesignStoneMstListDeatil(listDsm);	
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(bom!=null&&!bom.isEmpty()){
		clicks.setDm_is_bom(true);
		List<Dgn_Bom_Mst> listDbm=new ArrayList<Dgn_Bom_Mst>();
		for(Bom_Mst bm:bom){
			Bom_Mst bms=GimManager.getBomCdByBomNameImp(bm.getBm_bom_nm(),bm.getBm_bom_sz(),bm.getBm_bom_typ(),bm.getBm_bom_wip_typ()); 
			Dgn_Bom_Mst dbm=new Dgn_Bom_Mst();
			bm.setBm_bom_cd(bms.getBm_bom_cd());
			dbm.setDbm_bom_cd(bms.getBm_bom_cd());
			dbm.setDbm_bom_pcs(bm.getBm_bom_crt_dt());
			dbm.setDbm_dgn_no(clicks.getDm_pdt_cd());
			dbm.setDbm_crt_dt(startDate);
			dbm.setDbm_updt_dt(startDate);
			dbm.setDbm_crt_id(empDtls.getEm_emp_id());
			dbm.setDbm_updt_id(empDtls.getEm_emp_id());
			dbm.setDbm_cmy_cd(empDtls.getEm_cmy_cd());
			dbm.setDbm_dgn_sts(true);
			listDbm.add(dbm);
		}
		try{
			GimManager.saveDesignBomMstListDeatil(listDbm);	
			}catch(Exception e){
				e.printStackTrace();
			}
	}
	if(mold!=null&&!mold.isEmpty()){
		clicks.setDm_is_mold(true);
		List<Dgn_Mold_Mst> listDmm=new ArrayList<Dgn_Mold_Mst>();
		for(Mold_Mst mm:mold){
			Dgn_Mold_Mst dmm=new Dgn_Mold_Mst();
			dmm.setDmm_dgn_no(clicks.getDm_pdt_cd());
			dmm.setDmm_mold_pcs(mm.getMm_mold_crt_dt());
			dmm.setDmm_mold_no(mm.getMm_mold_no());
			dmm.setDmm_crt_dt(startDate);
			dmm.setDmm_updt_dt(startDate);
			dmm.setDmm_crt_id(empDtls.getEm_emp_id());
			dmm.setDmm_updt_id(empDtls.getEm_emp_id());
			dmm.setDmm_dgn_sts(true);
			dmm.setDmm_cmy_cd(empDtls.getEm_cmy_cd());
			listDmm.add(dmm);
		}
		try{
			GimManager.saveDesignMoldMstListDeatil(listDmm);	
			}catch(Exception e){
				e.printStackTrace();
			}
	}
	
	if(!gimController.filepath.equalsIgnoreCase(""))
	{
		clicks.setDm_dgn_img(gimController.filepath);	
		gimController.filepath="";
	}
	try{
		clicks.setDm_dgn_sts(true);
		clicks.setDm_dgn_updt_dt(startDate);
		clicks.setDm_dgn_updt_id(empDtls.getEm_emp_id());
		clicks.setDm_is_bom(true);
		clicks.setDm_is_mold(true);
		clicks.setDm_is_stn(true);
		
		GimManager.saveDesignMstDetailEdit(clicks);
	}catch(Exception e){
		e.printStackTrace();
	}
	////////////////// end ///////////////
	try{
	for(Stn_Mst sm:stn){
		Stn_Mst smExist=GimManager.getOneStoneProductDetImpl(sm.getSm_stn_cd());
	if(smExist==null){
		sm.setSm_stn_sts(true);
		sm.setSm_stn_crt_dt(startDate);
		sm.setSm_stn_crt_id(empDtls.getEm_emp_id());
		sm.setSm_stn_updt_dt(startDate);
		sm.setSm_stn_updt_id(empDtls.getEm_emp_id());
		sm.setSm_cmy_cd(empDtls.getEm_cmy_cd());
		GimManager.saveStoneDetail(sm);
	}
	}
	for(Bom_Mst bm:bom){
		Bom_Mst bmExist=GimManager.getOneBomProductDetImpl(bm.getBm_bom_cd());
	if(bmExist==null){
		bm.setBm_bom_sts(true);
		bm.setBm_bom_crt_dt(startDate);
		bm.setBm_bom_crt_id(empDtls.getEm_emp_id());
		bm.setBm_bom_updt_dt(startDate);
		bm.setBm_bom_updt_id(empDtls.getEm_emp_id());
		bm.setBm_cmy_cd(empDtls.getEm_cmy_cd());
		GimManager.saveBomDetail(bm);
	}
	}
	for(Mold_Mst mm:mold){
		Mold_Mst mmExist=GimManager.getOneMoldProductDetImpl(mm.getMm_mold_no());
	if(mmExist==null){
		mm.setMm_mold_sts(true);
		mm.setMm_mold_crt_dt(startDate);
		mm.setMm_mold_crt_id(empDtls.getEm_emp_id());
		mm.setMm_mold_updt_dt(startDate);
		mm.setMm_mold_updt_id(empDtls.getEm_emp_id());
		mm.setMm_cmy_cd(empDtls.getEm_cmy_cd());
		GimManager.saveMoldDetail(mm);
	}
	}
	}catch(Exception e){
		e.printStackTrace();
	}
	session.setAttribute("SaveDetailOfDesignEdit", true);
	return "success";
}

////////////////////end/////////////////

////////////////updateQtyForDgnStnExsit in EditDesign Jsp//////////////

@RemoteMethod
public String updateQtyInDgnStnExistAjax(Long id,String Qty){
	try{
	GimManager.updateQtyInDgnStnExistAjaxImpl(id,Qty);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public String updateQtyInDgnBomExistAjax(Long id,String Qty){
	try{
	GimManager.updateQtyInDgnBomExistAjaxImpl(id,Qty);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public String updateQtyInDgnMoldExistAjax(Long id,String Qty){
	try{
	GimManager.updateQtyInDgnMoldExistAjaxImpl(id,Qty);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
/////////////////end ///////////////////////

//////////////////////////////Check All PrimaryKey Is Dub Or Not//////////////////
@RemoteMethod
public String chkThisCmyCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisCmyCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}

@RemoteMethod
public String chkThisDptCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisDptCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}
@RemoteMethod
public String chkThisBomCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisBomCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}
@RemoteMethod
public String chkThisUomCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisUomCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}

@RemoteMethod
public String chkThisStrCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisStrCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}

@RemoteMethod
public String chkThisPrcsCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisPrcsCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}

@RemoteMethod
public String chkThisVnCtCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisVnCtCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}

@RemoteMethod
public String chkThisStnCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisStnCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}

@RemoteMethod
public String chkThisMoldCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisMoldCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}


@RemoteMethod
public String chkThisRwMtrCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisRwMtrCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}

@RemoteMethod
public String chkThisDgnPdtCdAlrdyPrsntOrNot(String id){
	String sts="allow";
	try{
		sts=GimManager.chkThisDgnPdtCdAlrdyPrsntOrNotImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return sts;
}
/////////////////////////////////////////////////////Import Design Pro Save /////////////
@RemoteMethod
public String saveImportDesignProAjax(String stonPro,String BmProd,String MdProd,String designPro){
	Gson gson = new Gson();
	List<Stn_Mst> stn= gson.fromJson(stonPro, new TypeToken<List<Stn_Mst>>(){}.getType());
	List<Bom_Mst> bom= gson.fromJson(BmProd, new TypeToken<List<Bom_Mst>>(){}.getType());
	List<Mold_Mst> mold= gson.fromJson(MdProd, new TypeToken<List<Mold_Mst>>(){}.getType());
	List<Dgn_Mst> dgProd=gson.fromJson(designPro, new TypeToken<List<Dgn_Mst>>(){}.getType());
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	if(dgProd!=null&&!dgProd.isEmpty()){
		Set findDubPro=new HashSet<String>();
		Set finDepPro=new HashSet<String>();
		for(Dgn_Mst dg:dgProd){
			findDubPro.add(dg.getDm_pdt_cd());finDepPro.add(dg.getDm_dgn_dpt());
		}
		if(findDubPro.size()!=dgProd.size()){
			return "Dublicate ProductCode Are Present In Imported Sheet";
		}
		List<String> pdtChkDb=GimManager.getProCdForFindDubInImportOrder();
		if(pdtChkDb!=null&&!pdtChkDb.isEmpty()){
		List<String> pdtJs=new LinkedList<String>(findDubPro);
		int cont=pdtJs.size();
		try{
			pdtJs.removeAll(pdtChkDb);}
		catch(Exception e){
			e.printStackTrace();
		}
		if(pdtJs.size()!=cont){
		return "Some ProductCode Already Present In DataBase ";		
		}
		}
		List<String> pdtDptChkDb=GimManager.getProDptNamForFindDubInImportOrder();
		if(pdtDptChkDb!=null&&!pdtDptChkDb.isEmpty()){
		List<String> pdtDptJs=new LinkedList<String>(finDepPro);
		try{
			pdtDptJs.removeAll(pdtDptChkDb);}
		catch(Exception e){
			e.printStackTrace();
		}
		if(pdtDptJs.size()!=0){
			if(pdtDptJs.size()>0)
			return ""+pdtDptJs.get(0)+"-> DepartMent Not In DataBase ";	
			else
			return " DepartMents Are Not In DataBase ";		
		}
		}
		else{
			return " DepartMents Are Not In DataBase ";		
		}
	}
	List<Dgn_Mold_Mst> listDmm=null;
	List<Dgn_Stn_Mst> stMst=null;
	List<Dgn_Bom_Mst> listDbm=null;
	if(stn!=null&&!stn.isEmpty()){
		stMst=new ArrayList<Dgn_Stn_Mst>();
		Map stnNmMp=null;
		for(Stn_Mst st:stn){
			Dgn_Stn_Mst dsm=new Dgn_Stn_Mst();
			String stnKey=st.getSm_stn_nm()+""+st.getSm_stn_shpe()+""+st.getSm_stn_clr()+""+st.getSm_stn_sz();
			if(stnNmMp!=null&&!stnNmMp.toString().equalsIgnoreCase("{}")&&stnNmMp.get(stnKey)==null){
				Stn_Mst stnDet=GimManager.getStoneCdByStoneNameImp(st.getSm_stn_nm(),st.getSm_stn_shpe(),st.getSm_stn_clr(),st.getSm_stn_sz());
				stnNmMp.put(stnKey,stnDet.getSm_stn_cd());	
			}
			if(stnNmMp==null){
			Stn_Mst stnDet=GimManager.getStoneCdByStoneNameImp(st.getSm_stn_nm(),st.getSm_stn_shpe(),st.getSm_stn_clr(),st.getSm_stn_sz());
			stnNmMp=new HashMap<String, String>();
			stnNmMp.put(stnKey,stnDet.getSm_stn_cd());
			}
			
			dsm.setDsm_stn_cd(stnNmMp.get(stnKey).toString());
			dsm.setDsm_dgn_no(st.getSm_stn_cd());
			dsm.setDsm_stn_pcs(st.getSm_stn_crt_dt());
			dsm.setDsm_crt_dt(startDate);
			dsm.setDsm_updt_dt(startDate);
			dsm.setDsm_crt_id(empDtls.getEm_emp_id());
			dsm.setDsm_updt_id(empDtls.getEm_emp_id());
			dsm.setDsm_dgn_sts(true);	
			dsm.setDsm_cmy_cd(empDtls.getEm_cmy_cd());
			st.setSm_stn_cd(stnNmMp.get(stnKey).toString());
			stMst.add(dsm);
		}
		try{
			GimManager.saveDesignStoneMstListDeatil(stMst);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	if(mold!=null&&!mold.isEmpty()){
	listDmm=new ArrayList<Dgn_Mold_Mst>();
	for(Mold_Mst mm:mold){
			Dgn_Mold_Mst dmm=new Dgn_Mold_Mst();
			dmm.setDmm_dgn_no(mm.getMm_mold_updt_id());
			dmm.setDmm_mold_pcs(mm.getMm_mold_crt_dt());
			dmm.setDmm_mold_no(mm.getMm_mold_no());
			dmm.setDmm_crt_dt(startDate);
			dmm.setDmm_updt_dt(startDate);
			dmm.setDmm_crt_id(empDtls.getEm_emp_id());
			dmm.setDmm_updt_id(empDtls.getEm_emp_id());
			dmm.setDmm_cmy_cd(empDtls.getEm_cmy_cd());
			dmm.setDmm_dgn_sts(true);
			listDmm.add(dmm);
		}
		try{
			GimManager.saveDesignMoldMstListDeatil(listDmm);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	if(bom!=null&&!bom.isEmpty()){
		listDbm=new ArrayList<Dgn_Bom_Mst>();
		Map bomNmMp=null;
		for(Bom_Mst bm:bom){
			Dgn_Bom_Mst dbm=new Dgn_Bom_Mst();
			String bomkey=bm.getBm_bom_nm()+""+bm.getBm_bom_sz()+""+bm.getBm_bom_typ()+""+bm.getBm_bom_wip_typ();
			if(bomNmMp!=null&&!bomNmMp.toString().equalsIgnoreCase("{}")&&bomNmMp.get(bomkey)==null){
				Bom_Mst stnDet=GimManager.getBomCdByBomNameImp(bm.getBm_bom_nm(),bm.getBm_bom_sz(),bm.getBm_bom_typ(),bm.getBm_bom_wip_typ());
				bomNmMp.put(bomkey,stnDet.getBm_bom_cd());	
			}
			if(bomNmMp==null){
				Bom_Mst stnDet=GimManager.getBomCdByBomNameImp(bm.getBm_bom_nm(),bm.getBm_bom_sz(),bm.getBm_bom_typ(),bm.getBm_bom_wip_typ());
				bomNmMp=new HashMap<String, String>();
			bomNmMp.put(bomkey,stnDet.getBm_bom_cd());
			}
			dbm.setDbm_bom_cd(bomNmMp.get(bomkey).toString());
			dbm.setDbm_bom_pcs(bm.getBm_bom_crt_dt());
			dbm.setDbm_dgn_no(bm.getBm_bom_cd());
			dbm.setDbm_crt_dt(startDate);
			dbm.setDbm_updt_dt(startDate);
			dbm.setDbm_crt_id(empDtls.getEm_emp_id());
			dbm.setDbm_updt_id(empDtls.getEm_emp_id());
			dbm.setDbm_dgn_sts(true);
			dbm.setDbm_cmy_cd(empDtls.getEm_cmy_cd());
			bm.setBm_bom_cd(bomNmMp.get(bomkey).toString());
			listDbm.add(dbm);
		}	
		try{
			GimManager.saveDesignBomMstListDeatil(listDbm);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	if(dgProd!=null&&!dgProd.isEmpty()){
	List<Dgn_Mst> dgMst=new ArrayList<Dgn_Mst>();
		for(Dgn_Mst dg:dgProd){
		Dpt_Mst dptCd=GimManager.getDepCdFromDepNmImp(dg.getDm_dgn_dpt());
		if(dptCd!=null){
			Dgn_Mst dgm=new Dgn_Mst();
			dgm=dg;
			dgm.setDm_dgn_dpt(dptCd.getDm_dpt_cd());
			dgm.setDm_dgn_crt_dt(startDate);
			dgm.setDm_dgn_crt_id(empDtls.getEm_emp_id());
			dgm.setDm_dgn_updt_dt(startDate);
			dgm.setDm_dgn_updt_id(empDtls.getEm_emp_id());
			dgm.setDm_cmy_cd(empDtls.getEm_cmy_cd());
			dgMst.add(dgm);
		}
	}
		try{
			GimManager.saveImportedDesignDetailList(dgMst);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	try{
	for(Stn_Mst sm:stn){
		Stn_Mst smExist=GimManager.getOneStoneProductDetImpl(sm.getSm_stn_cd());
	if(smExist==null){
		sm.setSm_stn_sts(true);
		sm.setSm_stn_crt_dt(startDate);
		sm.setSm_stn_crt_id(empDtls.getEm_emp_id());
		sm.setSm_stn_updt_dt(startDate);
		sm.setSm_stn_updt_id(empDtls.getEm_emp_id());
		sm.setSm_cmy_cd(empDtls.getEm_cmy_cd());
		GimManager.saveStoneDetail(sm);
	}
	}
	for(Bom_Mst bm:bom){
		Bom_Mst bmExist=GimManager.getOneBomProductDetImpl(bm.getBm_bom_cd());
	if(bmExist==null){
		bm.setBm_bom_sts(true);
		bm.setBm_bom_crt_dt(startDate);
		bm.setBm_bom_crt_id(empDtls.getEm_emp_id());
		bm.setBm_bom_updt_dt(startDate);
		bm.setBm_bom_updt_id(empDtls.getEm_emp_id());
		bm.setBm_cmy_cd(empDtls.getEm_cmy_cd());
		GimManager.saveBomDetail(bm);
	}
	}
	for(Mold_Mst mm:mold){
		Mold_Mst mmExist=GimManager.getOneMoldProductDetImpl(mm.getMm_mold_no());
	if(mmExist==null){
		mm.setMm_mold_sts(true);
		mm.setMm_mold_crt_dt(startDate);
		mm.setMm_mold_crt_id(empDtls.getEm_emp_id());
		mm.setMm_mold_updt_dt(startDate);
		mm.setMm_mold_updt_id(empDtls.getEm_emp_id());
		mm.setMm_cmy_cd(empDtls.getEm_cmy_cd());
		GimManager.saveMoldDetail(mm);
	}
	}
	}catch(Exception e){
		e.printStackTrace();
	}
	GimManagerImpl.countBomDub=(long)0;
	GimManagerImpl.countStnDub=(long)0;
	return "success";
}
/////////////////////////////////////////////////////////End////////////////////////////

//////////////////////////////////Import Order Detail save///////////////////////////
@RemoteMethod
public String saveImportOrderDetail(String orderPro,boolean chek,String []ordProCmp,String[] pdtCd,boolean chkPdt){
	Gson gson=new Gson();
	List<Ord_Hdr_Dtl> ordMst=gson.fromJson(orderPro,new TypeToken<List<Ord_Hdr_Dtl>>(){}.getType());
	if(ordMst!=null&&!ordMst.isEmpty()){
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		int adrrDbCnt=0;boolean isDubBtch=false;
		List<String> exstBtchNo=GimManager.getAllExistActiveBacthNo();
		if(exstBtchNo!=null&&!exstBtchNo.isEmpty()){
			if(ordProCmp!=null&&ordProCmp.length>0){
				List<String>btchList=new ArrayList(Arrays.asList(ordProCmp));
				btchList.removeAll(exstBtchNo);
				if(ordProCmp.length!=btchList.size())isDubBtch=true;
			}
			
		}
		if(isDubBtch==true){
			return "Batch No Already Used In DataBase ";		
		}
		if(chek==true){
		if(chkPdt==false){
				List<String> pdtChkDb=GimManager.getProCdForFindDubInImportOrder();
			if(pdtChkDb!=null&&!pdtChkDb.isEmpty()){
			List<String> pdtJs=new LinkedList<String>(Arrays.asList(pdtCd));
			try{
				pdtJs.removeAll(pdtChkDb);}
			catch(Exception e){
				e.printStackTrace();
			}
			if(pdtJs.size()!=0){
				return ""+pdtJs.toString()+"-> ProductCodes Are Not In DataBase ";		
			}
			}
			else{
				return "ProductCodes Are Not In DataBase ";	
			}
			
		}
		}
		for(Ord_Hdr_Dtl oM:ordMst){
			oM.setOhd_ord_updt_dt(startDate);
			oM.setOhd_ord_updt_id(empDtls.getEm_emp_id());
			oM.setOhd_ord_crt_id(empDtls.getEm_emp_id());
			oM.setOhd_ord_crt_dt(startDate);
			if(chek==true){
				oM.setOhd_ord_dt(startDate);
			oM.setOhd_cmy_cd(empDtls.getEm_cmy_cd());
			oM.setOhd_str_cd(empDtls.getEm_str_cd());
			}
		}
		try{
		GimManager.saveImportOrderDetail(ordMst);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	return "success";
}
//////////////////////////////////////end/////////////////////////////////////////////
//////////////////////////////////Edit Order Page////////////////////////////////////
@RemoteMethod
public String saveImportOrderDetailEdit(String orderPro,String rowCnt,String sumOfStd,String sumQty,String ordNo,String auth,String ordHdrDetal,String priIdOfHdrDtl){
	Gson gson=new Gson();
	List<Ord_Hdr_Dtl> ordMst=gson.fromJson(orderPro,new TypeToken<List<Ord_Hdr_Dtl>>(){}.getType());
	Ord_Hdr_Dtl ordHdrDetalRec=gson.fromJson(ordHdrDetal,Ord_Hdr_Dtl.class);
	if(ordMst!=null&&!ordMst.isEmpty()){
		String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		for(Ord_Hdr_Dtl oM:ordMst){
			oM.setOhd_ord_updt_dt(startDate);
			oM.setOhd_ord_updt_id(empDtls.getEm_emp_id());
			if(oM.getOhd_ord_crt_id()==null)
			oM.setOhd_ord_crt_id(empDtls.getEm_emp_id());
			if(oM.getOhd_ord_crt_dt()==null)
			oM.setOhd_ord_crt_dt(startDate);
		}
		try{
		GimManager.saveImportOrderDetail(ordMst);
		GimManager.updateOrHdrAndOrdHdrDetailBothImpl(rowCnt,sumOfStd,sumQty,ordNo,auth);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	if(ordHdrDetalRec!=null){
	try{
		GimManager.updateOrderHdrDetailComAndStrChange(ordHdrDetalRec.getOhd_cmy_cd(),ordHdrDetalRec.getOhd_cst_cd(),ordHdrDetalRec.getOhd_str_cd(),ordHdrDetalRec.getOhd_ord_typ(),ordNo);
	}catch(Exception e){
		e.printStackTrace();
	}
	}
	GimManager.updateOnlyAuthInOrdHdr(ordNo,auth);
	if(!priIdOfHdrDtl.equalsIgnoreCase("")){
		try{
		GimManager.updateOrderHdrDetailListAuthUpdate(priIdOfHdrDtl);	
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	return "success";
}
/////////////////////////////////////end///////////////////////////////////////
/////////////////////////Search In AutoComlete Data Recovery in Add Order Page///////////////////

@RemoteMethod
public List<Object[]> getAllDesignProductSrchAjax(String id){
	try{
	
	return GimManager.getAllDesignProductSrchImpl(id);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public Object getDgnProDetailForAddOrderAjax(String pdtCd){
	try{
		
		return GimManager.getDgnProDetailForAddOrderAjaxImpl(pdtCd);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
}
//////////////////////////end//////////////////////////////////////////////////////

////////////////////////Check ProId with OrderNo Is Present Or Not////////////////
@RemoteMethod
public Ord_Hdr_Dtl checkOrderNoWihtPdtCdIsPrsentOrNot(String pdtCd,String ordNo){
	try{
		
		return GimManager.eckOrderNoWihtPdtCdIsPrsentOrNotImpl(pdtCd,ordNo);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
}


//////////////////////////////end.////////////////////////////////////////////
/////////////////////////////////////delete ordHdr Rec from ///////////////////////////////////////////////
@RemoteMethod
public String delOrderHdrRecAjax(Long id){
	try{
	GimManager.delOrderHdrRecAjaxImpl(id);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public String removeExistOrderMultilpe(String[] id,String noOf,String qty,String stdSum,String odNo){
	try{
	GimManager.removeExistOrderMultilpeImpl(String.join(",",id),noOf,qty,stdSum,odNo);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

////////////////////////////////////////////end///////////////////////////////////

////////////////////////////Search For Add Wax Page////////////////////////////////
@RemoteMethod
public List<Object[]> performSearchBasedOnTrgtAndOdrNo(String trgtDt,String[] odNo,String DptCd,String ordType,String cmycd,String ctgy,String reuse,String carat){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	try{
		String st="";String dptC="";
		if(odNo!=null){
			String []a=new String[odNo.length];
			int count=0;
			for(String od:odNo){
				a[count]=("'"+od+"'");
				count++;
			}
			st=String.join(",", a);
		}
		
	return GimManager.performSearchBasedOnTrgtAndOdrNoImpl(trgtDt,st,DptCd,empDtls.getEm_emp_id(),ordType,cmycd,ctgy,reuse,carat);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public List<Object[]> performSearchBasedOnDptCode(String DptCd,String ordType,String cmycd,String ctgy,String reuse,String carat){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	try{
	return GimManager.performSearchBasedOnDptCodeImpl(DptCd,empDtls.getEm_emp_id(),ordType,cmycd,ctgy,reuse,carat);
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public String saveWaxDetailForAdd(String waxHdr,String waxHdrDtls,String[] ordId,HttpSession session){
	Gson gson=new Gson();
	Wax_Hdr wxHdr=gson.fromJson(waxHdr,Wax_Hdr.class); 
	List<Wax_Hdr_Dtl> wxHdtls=gson.fromJson(waxHdrDtls, new TypeToken<List<Wax_Hdr_Dtl>>(){}.getType()); 
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	if(!waxHdr.equalsIgnoreCase("{}")){
		wxHdr.setWh_crt_dt(startDate);
		wxHdr.setWh_crt_id(empDtls.getEm_emp_id());
		wxHdr.setWh_updt_dt(startDate);
		wxHdr.setWh_updt_id(empDtls.getEm_emp_id());
	try{
		GimManager.saveWaxHdrDataOnlyImpl(wxHdr);
	}catch(Exception e){
		e.printStackTrace();
	}
	}
	if(wxHdtls!=null&&!wxHdtls.isEmpty()){
		for(Wax_Hdr_Dtl wx:wxHdtls){
			wx.setWhd_crt_dt(startDate);
			wx.setWhd_crt_id(empDtls.getEm_emp_id());
			wx.setWhd_updt_dt(startDate);
			wx.setWhd_updt_id(empDtls.getEm_emp_id());
		}
		try{
			GimManager.saveWaxHdrDetailImpl(wxHdtls);
			GimManager.updateOrderHdrDetailRecFromPendingWaxTo(String.join(",", ordId),wxHdr.getWh_wrkr_cd());
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	session.setAttribute("savedResultWax", true);
	return "success";
}
//////////////////////////////////end/////////////////////////////////////////////

///////////////////////////delete rec of wax from table///////////////////////////
@RemoteMethod
public String delWaxRecFromTableAjax(Long id,String docNo){
	GimManager.delWaxRelatedRecFromDataBase(id,docNo);
	return "success";
}
@RemoteMethod
public String delExistWaxHdrFromEditWaxInAjax(String[] ids,String waxHdr){
	Gson gson=new Gson();
	Wax_Hdr wxHdr=gson.fromJson(waxHdr,Wax_Hdr.class); 
	try{
		GimManager.updateWaxHdrDataOnlyImpl(wxHdr);
	}catch(Exception e){
		e.printStackTrace();
	}
	try{
	GimManager.delExistWaxHdrFromEditWaxInAjaxImpl(String.join(",",ids));
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}

///////////////////////////end/////////////////////////

////////////////////////////Edit Wax Hdr Detail ////////////////////////

@RemoteMethod
public String updateWaxDetailForAddAjax(String waxHdr,String waxHdrDtls,String[] ordId,String exstWax,boolean auth,String docNo,HttpSession session){
	Gson gson=new Gson();Wax_Hdr wxHdr=null;
	if(!waxHdr.equalsIgnoreCase("{}"))
	wxHdr=gson.fromJson(waxHdr,Wax_Hdr.class); 
	List<Wax_Hdr_Dtl> wxHdtls=gson.fromJson(waxHdrDtls, new TypeToken<List<Wax_Hdr_Dtl>>(){}.getType()); 
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	if(wxHdr!=null){
	try{
		GimManager.updateWaxHdrDataOnlyImpl(wxHdr);
	}catch(Exception e){
		e.printStackTrace();
	}
	}
	if(wxHdtls!=null&&!wxHdtls.isEmpty()){
		for(Wax_Hdr_Dtl wx:wxHdtls){
			wx.setWhd_crt_dt(startDate);
			wx.setWhd_crt_id(empDtls.getEm_emp_id());
			wx.setWhd_updt_dt(startDate);
			wx.setWhd_updt_id(empDtls.getEm_emp_id());
		}
		try{
			GimManager.saveWaxHdrDetailImpl(wxHdtls);
			GimManager.updateOrderHdrDetailRecFromPendingWaxTo(String.join(",", ordId),wxHdr.getWh_wrkr_cd());
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(exstWax!=null&&!exstWax.isEmpty()){
		try{
			GimManager.updateWaxHdrDetailRecFromPendingWaxTo(exstWax);
		}catch(Exception e){
			e.printStackTrace();
		}	
	}
	if(auth==true){
		try{
			GimManager.updateWaxHdrOnlyRecFromPendingWaxTo(docNo);
		}catch(Exception e){
			e.printStackTrace();
		}	
	}
	session.setAttribute("updatedResultWax", true);
	return "success";
}
///////////////////////////End//////////////////////////////////////////
////////////////////////////Search In WaxHdrDetail For Add Tree Page/////
@RemoteMethod
public List<Object[]>searchForWaxHdrRecInTreeAjax(String tgtDt,String[] dpt,String[] wax,String[] ctgy,String cmycd,String wrkcd,String jo,String ordtp,String carat){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	try{
		return GimManager.getsearchForWaxHdrRecInTreeImpl(tgtDt,String.join(",", dpt),String.join(",", wax),String.join(",", ctgy),empDtls.getEm_emp_id(),cmycd,wrkcd,jo,ordtp,carat);
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
//////////////////////////////End ///////////////////////////////

/////////////////////////////Save Tree Gen Hdr and Dtl ////////////////////////
@RemoteMethod
public String savetreeGenHdrAndDtlInAjax(String trGnDtl,String trGen,String[] waxIds,boolean edit,HttpSession session){
	Gson gson=new Gson();
	List<Tree_Gen_Hdr_Dtl>trGenHdrDtl=gson.fromJson(trGnDtl, new TypeToken<List<Tree_Gen_Hdr_Dtl>>(){}.getType());
	Tree_Gen_Hdr trGenHdr=gson.fromJson(trGen, Tree_Gen_Hdr.class);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	if(trGenHdrDtl!=null&&!trGenHdrDtl.isEmpty()){
		for(Tree_Gen_Hdr_Dtl tghd:trGenHdrDtl){
			if(tghd.getTghd_crt_dt()==null)
			tghd.setTghd_crt_dt(startDate);
			if(tghd.getTghd_crt_id()==null)
			tghd.setTghd_crt_id(empDtls.getEm_emp_id());
			tghd.setTghd_updt_dt(startDate);
			tghd.setTghd_updt_id(empDtls.getEm_emp_id());
		}
		try{
			GimManager.saveTreeGenHdrDetailInImpl(trGenHdrDtl);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(trGenHdr!=null){
		if(edit==false){
		trGenHdr.setTgh_crt_dt(startDate);
		trGenHdr.setTgh_crt_id(empDtls.getEm_emp_id());
		trGenHdr.setTgh_updt_dt(startDate);
		trGenHdr.setTgh_updt_id(empDtls.getEm_emp_id());
		}
		else{
			trGenHdr.setTgh_updt_dt(startDate);
			trGenHdr.setTgh_updt_id(empDtls.getEm_emp_id());	
		}
		try{
			GimManager.saveTreeGenHdrOnlyInImpl(trGenHdr);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(waxIds.length>0){
		try{
			GimManager.updateWaxHdrDetailRecInImpl(String.join(",", waxIds));
		}catch(Exception e){
			e.printStackTrace();
		}	
	}
	session.setAttribute("saveResOfTreeGen", true);
	return "success";
}
///////////////////// end /////////////////////////////////////////////////////

///////////////////////delete of Existing Tree Hdr Detail From Db/////////////////
@RemoteMethod
public String delRecFromTreeHdrDetailInAjax(String treehdr,String[] treeId){
	Gson gson=new Gson();
	Tree_Gen_Hdr trGenHdr=gson.fromJson(treehdr, Tree_Gen_Hdr.class);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	if(trGenHdr!=null){
			trGenHdr.setTgh_updt_dt(startDate);
			trGenHdr.setTgh_updt_id(empDtls.getEm_emp_id());	
		try{
			GimManager.saveTreeGenHdrOnlyInImpl(trGenHdr);
			GimManager.removeRecOfTreeHdrdetailFromDb(String.join(",", treeId));
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	return "success";
}
//////////////////////////////end/////////////////////////////////////////////////
/////////////////////////// Save Inward HdrDetail Record in Db////////////////////
@RemoteMethod
public String saveInwardAddProductInAjax(String iwdHdrDtl,String[] StkManager,String iwdHdrOnly,boolean editSts,HttpSession session){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	Gson gsn=new Gson();
	List<Iwd_Hdr_Dtl> iwdDtlList=gsn.fromJson(iwdHdrDtl,new TypeToken<List<Iwd_Hdr_Dtl>>(){}.getType());
	Iwd_Hdr iwHdr= gsn.fromJson(iwdHdrOnly, Iwd_Hdr.class);
	try{
		if(iwdDtlList!=null&&!iwdDtlList.isEmpty()){
			for(Iwd_Hdr_Dtl iwd:iwdDtlList){
				iwd.setIhd_updt_id(empDtls.getEm_emp_id());
				iwd.setIhd_updt_dt(startDate);
				iwd.setIhd_crt_id(empDtls.getEm_emp_id());
				iwd.setIhd_crt_dt(startDate);
			}
		GimManager.saveIwdHdrDetailToDb(iwdDtlList);
		}
		
		if(iwHdr!=null){
			if(editSts==false){
			iwHdr.setIh_updt_dt(startDate);	
			iwHdr.setIh_crt_dt(startDate);	
			iwHdr.setIh_crt_id(empDtls.getEm_emp_id());	
			iwHdr.setIh_updt_id(empDtls.getEm_emp_id());
			}
			else{
				iwHdr.setIh_updt_id(empDtls.getEm_emp_id());
				iwHdr.setIh_updt_dt(startDate);		
			}
		GimManager.saveInwardHdrOnlyImpl(iwHdr);	
		}
	}catch(Exception e){
		e.printStackTrace();
	}
	if(StkManager!=null&&StkManager.length>0){
	try{
		GimManager.updateStkMagerFormInward(String.join(" ", StkManager));
	}
	catch(Exception e){
		e.printStackTrace();
	}
	}
	session.setAttribute("saveResOfIwdHdrDt", true);
	return "success";
}
///////////////////////////// end ////////////////////////////////////////////////
/////////////////////// tree gen rec delete ///////////////////////////////////////
@RemoteMethod
public String delTreeRecFromTableAjax(Long id){
	try{
	GimManager.delExistTreeHdrRecOnly(id);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
////////////////////// end /////////////////////////////////////////////////////
/////////////delete inward hdr detail rec //////////////////////////////////////
@RemoteMethod
public String delExistInwardHdrDetRecordInAjax(String[] ids){
	try{
	GimManager.delExistInwardHdrDetRecordInImpl(String.join(",", ids));
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
/////////////////////////end///////////////////////////////////////////////////
///////////////////Save AlloyMatser Result Save//////////////////////////////
@RemoteMethod
public String saveAlloyMsaterDtailsinAjax(String alyMst,boolean sts,HttpSession session){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	try{
		Gson gson=new Gson();
		Aly_Mst aly=gson.fromJson(alyMst, Aly_Mst.class);
		if(sts==false){
		aly.setAm_aly_crt_dt(startDate);
		aly.setAm_aly_crt_id(empDtls.getEm_emp_id());}
		aly.setAm_aly_updt_dt(startDate);
		aly.setAm_aly_updt_id(empDtls.getEm_emp_id());
		GimManager.saveAlloyMstDetInImpl(aly);
		}catch(Exception e){
			e.printStackTrace();
		}
	if(sts==false)
	session.setAttribute("savedResOfAlyMst", true);
	else
		session.setAttribute("updatedResOfAlyMst", true);
		return "success";
}
///////////////////////////end/////////////////////////////////////////////////

//////////////////////////////delete AllyMst Rec//////////////////////////////
@RemoteMethod
public String delAlloyMstRecFromDbAjax(Long id){
	try{
	GimManager.	delAlloyMstRecFromDbImpl(id);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
//////////////////////end/////////////////////////////////////////////////////
//////////////////////////////delete InwrdhDrRec Db//////////////////////////////
@RemoteMethod
public String deleteInwardRecAjax(Long id,String docNo){
	try{
		GimManager.deleteInwardRecAjaxImpl(id,docNo);
		}catch(Exception e){
			e.printStackTrace();
		}
		return "success";
}
///////////////////////end ///////////////////////////////////////////////////////
//////////////////add inward for alloy //////////////////////////////////////////
@RemoteMethod
public List<Object[]> getInwardRecForAddAlloyAjax(String qry){
	try{
		return	GimManager.getInwardRecForAddAlloyImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
		return null;
	}
}
////////////////////////////// filter in AlloyBasedOnInwardDetail////////////////////////
@RemoteMethod
public List<Object[]>seacrhBasedOnDptAndDateAjax(String[] dpt,String dt,String cmyCd){
	try{
		
		return	GimManager.seacrhBasedOnDptAndDateImpl(String.join(",", dpt),dt,cmyCd);
	}catch(Exception e){
		e.printStackTrace();
		return null;
	}
}
////////////////////////end///////////////////////////////////////////////////////////////
//////////////////////////// Save AlloyPrcsHdrDetail //////////////////////////////////////
@RemoteMethod
public String saveAlyPrcsHdrDetInAjax(String aphDtls,String aphOnly,String[] stkMangeQry,boolean sts,HttpSession session){
	Gson gsn=new Gson();
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	List<Aly_Prcs_Hdr_Dtl> alyPrcDet=gsn.fromJson(aphDtls, new TypeToken<List<Aly_Prcs_Hdr_Dtl>>(){}.getType());
	Aly_Prcs_Hdr alyOnly=gsn.fromJson(aphOnly, Aly_Prcs_Hdr.class);
		/*
		 * try{
		 if (sts == false) {
			if (priId.length > 0) {
				List<Stk_Mst> stkDtl = GimManager.getExistDetailOfStkForUpdate(String.join(",", priId));
				if (stkDtl != null && !stkDtl.isEmpty()&&pdtstkDtlList!=null&&!pdtstkDtlList.isEmpty()) {
					int i = 0;
					for (Stk_Mst smUp : stkDtl) {
						smUp.setStm_rcvd_stk_wgt(pdtstkDtlList.get(i).getStm_rcvd_stk_wgt());
						i++;
					}
					GimManager.saveStkMstDetailFromInward(stkDtl);
				}
			}
		}*/
	if(alyPrcDet!=null&&!alyPrcDet.isEmpty()){
		for(Aly_Prcs_Hdr_Dtl apdt:alyPrcDet){
			if(apdt.getAphd_crt_dt()==null)
			apdt.setAphd_crt_dt(startDate);
			if(apdt.getAphd_crt_id()==null)
			apdt.setAphd_crt_id(empDtls.getEm_emp_crt_id());
			apdt.setAphd_updt_dt(startDate);
			apdt.setAphd_updt_id(empDtls.getEm_emp_crt_id());
		}
		try{
			GimManager.saveAlyPrcsHdrDetlImpl(alyPrcDet);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	if(alyOnly!=null){
		try{
		alyOnly.setAph_updt_dt(startDate);
		if(alyOnly.getAph_updt_id()==null)
		alyOnly.setAph_updt_id(empDtls.getEm_emp_id());
		if(alyOnly.getAph_crt_dt()==null)
		alyOnly.setAph_crt_dt(startDate);
		if(alyOnly.getAph_crt_id()==null)
		alyOnly.setAph_crt_id(empDtls.getEm_emp_id());
		GimManager.saveAlyPrcsHdrOnlyImpl(alyOnly);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(stkMangeQry!=null&&stkMangeQry.length>0){
		try{
		GimManager.updateStkDetailFromAlloyProcess(String.join(" ",stkMangeQry));
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	session.setAttribute("saveSucAlyRes", true);
	return "success";
}
//////////////////////////end//////////////////////////////////////////////////////////////
////////////////delete AlyHdrRec In Db/////////////////////////////////////////////////////
@RemoteMethod
public String deleteAlyHdrRecAjax(Long id){
	try{
		GimManager.deleteAlyHdrRecInImpl(id);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
//////////////////////////////end//////////////////////////////////////////////////////////

///////////////////// get Search List In Tree Casting For AddCasting...........////////////
@RemoteMethod
public List<Object[]> srchInAddCastingDtlInAjax(String tree,String tghtDt,String ctgy,String exprty){
	try{
	return GimManager.srchInAddCastingDtlInImpl(tree,tghtDt,ctgy,exprty);
	}catch(Exception e){
		e.printStackTrace();
		return null;
	}
}
/////////////end///////////////////////////////////////////////////////////////////////////

/////////////////////////////Save CASTING Hdr Detail In DataBase////////////////////////////
@RemoteMethod
public String saveFinalPdtInCastingHdrDtlAjax(String cstHdrDtl,String cstHdr,String[] stkManageQry,String[] treeOfPri,String[] spcStkQry,HttpSession session){
	Gson gsn =new Gson();
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	List<Cst_Prcs_Hdr_Dtl> cstHdrDtlList=gsn.fromJson(cstHdrDtl, new TypeToken<List<Cst_Prcs_Hdr_Dtl>>(){}.getType());
	Cst_Prcs_Hdr cstHdrOnly=gsn.fromJson(cstHdr, Cst_Prcs_Hdr.class);
	if(cstHdrDtlList!=null&&!cstHdrDtlList.isEmpty())
	{
		for(Cst_Prcs_Hdr_Dtl cstHdList:cstHdrDtlList){
			cstHdList.setCphd_updt_dt(startDate);
			cstHdList.setCphd_updt_id(empDtls.getEm_emp_id());
		if(cstHdList.getCphd_crt_dt()==null)
			cstHdList.setCphd_crt_dt(startDate);
		if(cstHdList.getCphd_crt_id()==null)
			cstHdList.setCphd_crt_id(empDtls.getEm_emp_id());
		}
		try{
		GimManager.saveCastHdrDtlListToDataBase(cstHdrDtlList);
		}catch(Exception e)
		{
			e.printStackTrace();
		}
}
	if(cstHdrOnly!=null){
		if(cstHdrOnly.getCph_crt_dt()==null)
		cstHdrOnly.setCph_crt_dt(startDate);
		if(cstHdrOnly.getCph_crt_id()==null)
		cstHdrOnly.setCph_crt_id(empDtls.getEm_emp_id());
		cstHdrOnly.setCph_updt_dt(startDate);
		cstHdrOnly.setCph_updt_id(empDtls.getEm_emp_id());
		try{
		GimManager.saveCstHdrOnlyImpl(cstHdrOnly);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	if(stkManageQry!=null&&stkManageQry.length>0){
		try{
			GimManager.updateStkMangeQryFromCasting(String.join(" ",stkManageQry));
			}
			catch(Exception e){
				e.printStackTrace();
			}
	}
	if(spcStkQry!=null&&spcStkQry.length>0){
		try{
		GimManager.updateSpclStkQryInDb(String.join(" ",spcStkQry));
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	if(treeOfPri.length>0){
		GimManager.updateTreeGtrHdrDtlStsChangeInCstSent(String.join(",",treeOfPri),cstHdrDtlList.get(0).getCphd_wrk_cd());
	}
	session.setAttribute("saveResOFCstDtl", true);	
	return "success";
}
///////////////////////////////end /////////////////////////////////////////////////////////

//////////////////////////////////delete tree hdr dtl record from casting ///////////////////
@RemoteMethod
public String updateTreeGenHdrDtlListSts(String treDtl,String cstHdr,String[] cstPriId){
	Gson gsn=new Gson();
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	try{
		Cst_Prcs_Hdr cstHdrObj=gsn.fromJson(cstHdr, Cst_Prcs_Hdr.class);
		if(cstHdrObj!=null){
			cstHdrObj.setCph_updt_dt(startDate);	
			cstHdrObj.setCph_updt_id(empDtls.getEm_emp_id());	
		}
	List<Tree_Gen_Hdr_Dtl>trGenHdrDtl=gsn.fromJson(treDtl, new TypeToken<List<Tree_Gen_Hdr_Dtl>>(){}.getType());
	GimManager.saveTreeGenHdrDetailInImpl(trGenHdrDtl);
	GimManager.saveCstHdrOnlyImpl(cstHdrObj);
	GimManager.deleteExstCstDtlRec(String.join(",", cstPriId));
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}

/////////////////// delete EXist Casting Hdr And Dtls And Tree Sts //////////////
@RemoteMethod
public String delCstHdrRecDtlAjax(Long id){
	try{
	GimManager.	delCstHdrRecDtlAjaxImpl(id);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
////////////////////////// end //////////////////////////////////////////////////////
/////////////////////// Filter In Job Order Based On OrderTyp,OrderNo,TgtDt ///////////////////
@RemoteMethod
public List<Object[]> filterJobOrderAddInAjax(String ctgyTy,String ordNo,String pdtTyp,String pdtdptCd,
		String tgtDt,String cmycd,String waxNo,String prcsType,String qry,String waxtyp,String treeno,String ordtyp,String ordprty){
	List<Object[]> flt=null;
	try{
		flt=GimManager.filterJobOrderAddInAjaxImpl( ctgyTy, ordNo, pdtTyp, pdtdptCd, tgtDt, cmycd,waxNo,prcsType,qry,waxtyp,treeno,ordtyp,ordprty);
}catch(Exception e){
	e.printStackTrace();
}
	return flt;
}

@RemoteMethod
public List<Object[]> getBomDataByProductId(String qry){
	List<Object[]> flt=null;
	try{
		flt=GimManager.getBomDataByProductIdImpl(qry);
}catch(Exception e){
	e.printStackTrace();
}
	return flt;
}

////////////////// end //////////////////////////////////////////////////////////////////
///////////////////////////////////// save Job Order Hder Detail Rec In Data Base //////////////
@RemoteMethod
public String saveJobOrderHdrDetilinAjax(String jobOrdOnly,String jobOrdDtl,String[] primOrdNo,String bominjobcd,String[] bidQry, HttpSession session){
	Gson gsn=new Gson();
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	List<Job_Ord_Hdr_Dtl> jbDtl=gsn.fromJson(jobOrdDtl,  new TypeToken<List<Job_Ord_Hdr_Dtl>>(){}.getType());
	Job_Ord_Hdr jbOnly=gsn.fromJson(jobOrdOnly, Job_Ord_Hdr.class);
	List<Bom_Iss_Job_Dtl> bominjobcdlist=null;
	try{
	 bominjobcdlist=gsn.fromJson(bominjobcd, new TypeToken<List<Bom_Iss_Job_Dtl>>(){}.getType());
	}catch(Exception e){
		e.printStackTrace();
	}
	if(jbOnly!=null){
		jbOnly.setJoh_crt_dt(startDate);
		jbOnly.setJoh_crt_id(empDtls.getEm_emp_id());
		jbOnly.setJoh_updt_dt(startDate);
		jbOnly.setJoh_updt_id(empDtls.getEm_emp_id());
		try{
			GimManager.saveJobOrderHdrOnly(jbOnly);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	if(bominjobcdlist!=null&&!bominjobcdlist.isEmpty()){
		try{
			GimManager.saveJobCardInBomDetail(bominjobcdlist);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	if(jbDtl!=null&&!jbDtl.isEmpty()){
		for(Job_Ord_Hdr_Dtl jbD:jbDtl){
			jbD.setJohd_crt_dt(startDate);
			jbD.setJohd_crt_id(empDtls.getEm_emp_id());
			jbD.setJohd_updt_dt(startDate);
			jbD.setJohd_updt_id(empDtls.getEm_emp_id());
		}
		try{
		GimManager.saveAllJobOrdHdrDetailImpl(jbDtl);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(primOrdNo!=null&&primOrdNo.length>0){
		try{
		GimManager.updateJobOrdStsInOrderTableTrue(String.join(",", primOrdNo),jbOnly.getJoh_pdt_typ());
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	if(bidQry!=null&&bidQry.length>0){
		try{
			GimManager.InsertBidDetailInHouseMaking(String.join(" ", bidQry));
			}
			catch(Exception e){
				e.printStackTrace();
			}	
	}
	session.setAttribute("SaveJobOrdHdrRes", true);
	return "success";
}
@RemoteMethod
public String upddateMainProcessHderDetailStatus(String qry,HttpSession session){
	try{
		GimManager.upddateMainProcessHderDetailStatusImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
	}
	session.setAttribute("SaveJobOrdHdrRes", true);
	return "success";
}

@RemoteMethod
public String saveJobCardHdrDetilinAjax(String jobOrdOnly,String jobOrdHdrDtl,String stkMst,String itmMvt,HttpSession session){
	Gson gsn=new Gson();
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	Job_Ord_Hdr jbOnly=gsn.fromJson(jobOrdOnly, Job_Ord_Hdr.class);
	List<Job_Ord_Hdr_Dtl> jbDtl=gsn.fromJson(jobOrdHdrDtl,  new TypeToken<List<Job_Ord_Hdr_Dtl>>(){}.getType());
	List<Stk_Mst> stkMstList=gsn.fromJson(stkMst,  new TypeToken<List<Stk_Mst>>(){}.getType());
	List<Itm_Mv> itmMvtList=gsn.fromJson(itmMvt,  new TypeToken<List<Itm_Mv>>(){}.getType());
	if(jbOnly!=null){
		jbOnly.setJoh_crt_dt(startDate);
		jbOnly.setJoh_crt_id(empDtls.getEm_emp_id());
		jbOnly.setJoh_updt_dt(startDate);
		jbOnly.setJoh_updt_id(empDtls.getEm_emp_id());
		try{
			GimManager.saveJobOrderHdrOnly(jbOnly);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	if(jbDtl!=null&&!jbDtl.isEmpty()){
		for(Job_Ord_Hdr_Dtl jbD:jbDtl){
			jbD.setJohd_crt_dt(startDate);
			jbD.setJohd_crt_id(empDtls.getEm_emp_id());
			jbD.setJohd_updt_dt(startDate);
			jbD.setJohd_updt_id(empDtls.getEm_emp_id());
		}
		try{
		GimManager.saveAllJobOrdHdrDetailImpl(jbDtl);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(stkMstList!=null&&!stkMstList.isEmpty()){
		for(Stk_Mst stk:stkMstList){
			if(stk.getStm_stk_crt_id()==null)
				stk.setStm_stk_crt_id(empDtls.getEm_emp_id());
			if(stk.getStm_stk_crt_dt()==null)
				stk.setStm_stk_crt_dt(startDate);
			stk.setStm_stk_updt_id(empDtls.getEm_emp_id());
			stk.setStm_stk_updt_dt(startDate);
			
		}
		try{
			GimManager.saveStkMstDetailFromInward(stkMstList);	
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(itmMvtList!=null&&!itmMvtList.isEmpty()){
		for(Itm_Mv itm:itmMvtList){
			itm.setIm_crt_id(empDtls.getEm_emp_id());
			itm.setIm_crt_dt(startDate);
		}
		try{
			GimManager.saveItemMoventDetailFromInward(itmMvtList);	
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
	session.setAttribute("SaveJobOrdHdrRes", true);
	return "success";
}

///////////////////////////////// Delete Exist Job Order Hder Detail Is Non Auth //////////////////////////////
@RemoteMethod
public String delExistJobHdrDetailRecAjax(String[] primId,String jobHdr){
	Gson gsn=new Gson();
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	try{
		GimManager.delExistJobHdrDetailRecImpl(String.join(",", primId));
		Job_Ord_Hdr jbOnly=gsn.fromJson(jobHdr, Job_Ord_Hdr.class);
		if(jbOnly!=null){
			jbOnly.setJoh_updt_dt(startDate);
			jbOnly.setJoh_updt_id(empDtls.getEm_emp_id());
			try{
				GimManager.saveJobOrderHdrOnly(jbOnly);
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
/////////////////////////  end  ///////////////////////////////////////////////////////////////////////////////\

/////////////// delte Whole JobHder Detail record /////////////////////////////
@RemoteMethod
public String delJobOrdHdrRecDtlAjax(String id,String typ){
	try{
	GimManager.delJobOrdHdrRecDtlImpl(id,typ);	
	}catch(Exception e){
		e.printStackTrace();
	}return "success";
}

/////////////////////////// Job Order Issue In Casting Based On REceved Auth /////////////////////////////
@RemoteMethod
public String jobOrderIssueINCstHdrRecDtlAjax(String ordNo){
	try{
	GimManager.jobOrderIssueINCstHdrRecDtlAjax(ordNo);	
	}catch(Exception e){
		e.printStackTrace();
	}return "success";
}

@RemoteMethod
public String jobOrderIssueINCstHdrRecDtlAjaxCasting(String ordNo,Long id){
	try{
	GimManager.jobOrderIssueINCstHdrRecDtlAjaxCastingafter(id,ordNo);	
	}catch(Exception e){
		e.printStackTrace();
	}return "success";
}
////////////////// end /////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// Add Internal Transfer Data Recovery From DataBase //////////////////////
@RemoteMethod
public List<Object[]> getAddInternalTransferData(String dptCd,String trType,String cmyCd,String qryChce,String dpt,String filterDoc){
	try{
		return GimManager.getAddInternalTransferDataImpl(dptCd,trType,cmyCd,qryChce,dpt,filterDoc);
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public List<Object[]> getDataForMeltingProcess(String qry){
	try{
		return GimManager.getDataForMeltingProcessImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public List<Object[]> getAddInternalTransferDataBasedOrdNo(String dptCd,String trType,String[] itm,String cmycd,String qryTyp){
	try{
		return GimManager.getAddInternalTransferDataBasedOrdNo(dptCd,trType,String.join(",", itm),cmycd,qryTyp);
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
////////////////////////////////// end ////////////////////////////////////////////////////////////////
//////////////////////////// save Internal Transfer Hdr Detail TO the Database ////////////////////////
@RemoteMethod
public String saveInternalTransferDetailRecByAjax(String itrlHdr,String itrlHdrDet,String[] stkManageQry,String[] priIdJbHdrDt,String orderPriIds,HttpSession session){
	Gson gsn=new Gson();
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	Emp_Mst empDtls=GimManager.getEmplyeeDetailByEmail(usEml);
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd-MMM-yy");
	String startDate = formatter.format(date);
	List<Intl_Trf_Hdr_Dtl> itlHdrDetList=gsn.fromJson(itrlHdrDet, new TypeToken<List<Intl_Trf_Hdr_Dtl>>(){}.getType());
	Intl_Trf_Hdr itlHrOnly=gsn.fromJson(itrlHdr, Intl_Trf_Hdr.class);
	if(itlHdrDetList!=null&&!itlHdrDetList.isEmpty()){
		for(Intl_Trf_Hdr_Dtl itlD:itlHdrDetList){
			if(itlD.getIthd_crt_id()==null)
				itlD.setIthd_crt_id(empDtls.getEm_emp_id());
			if(itlD.getIthd_crt_dt()==null)
				itlD.setIthd_crt_dt(startDate);
			if(itlD.getIthd_trf_typ()!=null&&!itlD.getIthd_trf_typ().equalsIgnoreCase("Finished Pdt"))
			itlD.setIthd_updt_id(empDtls.getEm_emp_id());
			itlD.setIthd_updt_dt(startDate);	
		}
		try{
			GimManager.saveItnlHderDetailToDb(itlHdrDetList);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	if(itlHrOnly!=null){
		if(itlHrOnly.getIth_crt_dt()==null)
			itlHrOnly.setIth_crt_dt(startDate);
		if(itlHrOnly.getIth_crt_id()==null)
			itlHrOnly.setIth_crt_id(empDtls.getEm_emp_id());	
		itlHrOnly.setIth_updt_dt(startDate);
		itlHrOnly.setIth_updt_id(empDtls.getEm_emp_id());
		try{
		GimManager.saveItnlHdrRecOnlyToDb(itlHrOnly);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	if(priIdJbHdrDt.length>0){
		try{
		GimManager.updateStatusOfJobOrdHderDetail(String.join(",", priIdJbHdrDt));
	}catch(Exception e){
		e.printStackTrace();
	}
	}
	if(orderPriIds!=null&&!orderPriIds.equalsIgnoreCase("")){
		try{
			GimManager.updateOrdHderJobStsChangeDetail(orderPriIds);
		}catch(Exception e){
			e.printStackTrace();
		}	
	}
	if(stkManageQry!=null&&stkManageQry.length>0){
		try{
		GimManager.updateStkDetailFromInternalTrnsferProcess(String.join(" ",stkManageQry));
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	session.setAttribute("SaveResOfItlHdrDet", true);
	return "success";
}
 //////////////////////////////// end ///////////////////////////////////////////////////////////////
/////////////////// delete Internal hdr detail rec in databse ////////////////////////////////////////
@RemoteMethod
public String delExstIntrnlHdrDetalRecByid(String hdrIntl,String[] priId,String[] jbId){
	Gson gsn=new Gson();
	Intl_Trf_Hdr itlHrOnly=gsn.fromJson(hdrIntl, Intl_Trf_Hdr.class);
	try{
		GimManager.saveItnlHdrRecOnlyToDb(itlHrOnly);
		GimManager.delExstIntrnlHdrDetalRecByid(String.join(",", priId));
		if(jbId.length>0){
			GimManager.stsChangeInJobHdrDetailById(String.join(",", jbId));
		}
		}catch(Exception e){
			e.printStackTrace();
		}
	return "success";
	
}

@RemoteMethod
public String delIntlTrfRecDtlAjax(Long id,String docno,String typ){
	try{
	GimManager.deleteIntlTrfRecDtlImpl(id,docno,typ);	
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}

@RemoteMethod
public String checkbatchNoInOrder(){
	try{
	List<String> sts= GimManager.getAllExistActiveBacthNo();
	if(sts!=null){
		return new Gson().toJson(sts);
	}
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}

@RemoteMethod
public String getExstStkWithWrkAlwQty(String qry){
	try{
		String stklmtOfEmp=GimManager.getStkOfEmpl(qry);
		return stklmtOfEmp;
	}catch(Exception e){
		e.printStackTrace();
		return "";
	}
}

@RemoteMethod
public void updatercvdWgtOfCastingAjax(String prty,Long id,String treeNo){
	try{
		GimManager.updatercvdWgtOfCastingImpl(prty,id,treeNo);
	}catch(Exception e){
		e.printStackTrace();
	}
}

@RemoteMethod
public void updateRcvdPrtyOfAlyPrcsAjax(String qry){
	try{
		GimManager.updateRcvdPrtyOfAlyPrcsImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
	}
}

@RemoteMethod
public String updateRcvdPrtyOfCastingPrcs(String prty,String prtySmple,Long id,boolean isfilled,String isdmgd,String[] qryUpdate){
	try{
		GimManager.updateRcvdPrtyOfCastingPrcsImpl(prty,prtySmple,id,isfilled,isdmgd,qryUpdate);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}

@RemoteMethod
public String updateCancelledtreeProductsts(String qry){
	try{
		GimManager.updateCancelledtreeProductstsImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}


/////////////////////// end //////////////////////////////////////////////////////////////////////////
//////////////////// Filter in add sub process ////////////////////////////////////////////////////////

@RemoteMethod
public List<Object[]> filterInJobCardAndTreeForAjax(String trgtDt,String jbCardNo,String treNo,String cmyCd,String dptCd){
	try{
	return GimManager.filterInJobCardAndTreeForImpl(trgtDt,jbCardNo,treNo,cmyCd,dptCd);
	}catch(Exception e){
		e.printStackTrace();
		return null;
	}
	
}
/////////////////////// end ///////////////////////////////////////////////////////////////////////////
///////////////////// save SupProcessHdr Detail to DataBase //////////////////////////////////////////
@RemoteMethod
public String saveSupPrcsHdrDetailByAjax(String[] InsertOrUopdate,HttpSession session){
	try{
		if(InsertOrUopdate!=null&&InsertOrUopdate.length>0)
		
		GimManager.saveSubProcessRelatedDatas(String.join(" ",InsertOrUopdate));
	}catch(Exception e){
		e.printStackTrace();
	}
	session.setAttribute("savedResOfSupPrcs", true);
	return "success";
}
@RemoteMethod
public String saveDcPrcsHdrDetailByAjax(String[] InsertOrUopdate,HttpSession session){
	try{
		if(InsertOrUopdate!=null&&InsertOrUopdate.length>0){}
		GimManager.saveSubProcessRelatedDatas(String.join(" ",InsertOrUopdate));
	}catch(Exception e){
		e.printStackTrace();
	}
	session.setAttribute("savedResOfDcPrcs", true);
	return "success";
}
@RemoteMethod
public String saveFinshPdtPrcsHdrDetailByAjax(String[] InsertOrUopdate,HttpSession session){
	try{
		if(InsertOrUopdate!=null&&InsertOrUopdate.length>0)
		GimManager.saveFinshPdtPrcsHdrDetailByAjaxImpl(String.join(" ",InsertOrUopdate));
	}catch(Exception e){
		e.printStackTrace();
	}
	session.setAttribute("savedResOfFnshPrcs", true);
	return "success";
}
@RemoteMethod
public List<Object[]> getDateAndDescWiseFilterRecver(String qry){
	try{
		return GimManager.getDateAndDescWiseFilterRecverImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public List<Object[]> getDptandWrkcdWiseFilterRecver(String qry){
	try{
		return GimManager.getDptandWrkcdWiseFilterRecverImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public String saveRcveyPrcsHdrDetailByAjax(String[] InsertOrUopdate,HttpSession session){
	try{
		if(InsertOrUopdate!=null&&InsertOrUopdate.length>0)
		GimManager.saveRcveyPrcsHdrDetailByAjaxImpl(String.join(" ",InsertOrUopdate));
	}catch(Exception e){
		e.printStackTrace();
	}
	session.setAttribute("savedResOfRcvyPrcs", true);
	return "success";
}

///////////////////////  end / ///////////////////////////////////////////////////////////////////////
//////////////// delte supPrcsHdrDetaail  ///////////////////////////////////////////////////////////
@RemoteMethod
public String deletesubprcshdrDtlAjax(Long id,String docNo){
	try{
		GimManager.deletesubprcshdrDtlImpl(id,docNo);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
/////////////////////// end /////////////////////////////////////////////////////////////////////////

///////////////////// save MainPrcsHdr Detail to DataBase //////////////////////////////////////////
	@RemoteMethod
	public String saveMainPrcsHderWithDetailToDb(String mnPrcsHdr, String mnPrcsHdrDtls,String stkMvmnt, String itmMvmnt,
			HttpSession session) {
		String usEml = SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls = GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		Gson gsn = new Gson();
		List<Stk_Mst> stkItmsList = gsn.fromJson(stkMvmnt, new TypeToken<List<Stk_Mst>>() {
		}.getType());
		List<Itm_Mv> itmMvtList = gsn.fromJson(itmMvmnt, new TypeToken<List<Itm_Mv>>() {
		}.getType());
		List<Mn_Prcs_Hdr_Dtl> sbPrcsHdrDtlList = gsn.fromJson(mnPrcsHdrDtls, new TypeToken<List<Mn_Prcs_Hdr_Dtl>>() {
		}.getType());
		Mn_Prcs_Hdr sbPrcsHdr = gsn.fromJson(mnPrcsHdr, Mn_Prcs_Hdr.class);
		if (sbPrcsHdrDtlList != null && !sbPrcsHdrDtlList.isEmpty()) {
			for (Mn_Prcs_Hdr_Dtl sp : sbPrcsHdrDtlList) {
				if (sp.getMphd_crt_dt() == null||sp.getMphd_crt_dt().equalsIgnoreCase(""))
					sp.setMphd_crt_dt(startDate);
				if (sp.getMphd_crt_id() == null||sp.getMphd_crt_id().equalsIgnoreCase(""))
					sp.setMphd_crt_id(empDtls.getEm_emp_id());
				sp.setMphd_updt_dt(startDate);
	 			if (sp.getMphd_updt_id() == null||sp.getMphd_updt_id().equalsIgnoreCase(""))
					sp.setMphd_updt_id(empDtls.getEm_emp_id());
			}
			try {
				GimManager.saveMainPrcsHdrDtalTODb(sbPrcsHdrDtlList);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if (sbPrcsHdr != null) {
			try {
				if (sbPrcsHdr.getMph_crt_dt() == null)
					sbPrcsHdr.setMph_crt_dt(startDate);
				if(sbPrcsHdr.getMph_crt_id() == null||sbPrcsHdr.getMph_crt_id().equalsIgnoreCase(""))
					sbPrcsHdr.setMph_crt_id(empDtls.getEm_emp_id());
				sbPrcsHdr.setMph_updt_id(empDtls.getEm_emp_id());
				sbPrcsHdr.setMph_updt_dt(startDate);
				GimManager.saveMainPrcsHdOnlyTODb(sbPrcsHdr);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if (stkItmsList != null && !stkItmsList.isEmpty()) {
			for (Stk_Mst stk : stkItmsList) {
				if (stk.getStm_stk_crt_id() == null)
					stk.setStm_stk_crt_id(empDtls.getEm_emp_id());
				if (stk.getStm_stk_crt_dt() == null)
					stk.setStm_stk_crt_dt(startDate);
				if (stk.getStm_stk_updt_id() == null)
					stk.setStm_stk_updt_id(empDtls.getEm_emp_id());
				stk.setStm_stk_updt_dt(startDate);

			}
			try {
				GimManager.saveStkMstDetailFromInward(stkItmsList);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		if (itmMvtList != null && !itmMvtList.isEmpty()) {
			for (Itm_Mv itm : itmMvtList) {
				if (itm.getIm_crt_id() == null)
					itm.setIm_crt_id(empDtls.getEm_emp_id());
				itm.setIm_crt_dt(startDate);
			}
			try {
				GimManager.saveItemMoventDetailFromInward(itmMvtList);
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
		session.setAttribute("savedResOfMainPrcs", true);
		return "success";
	}
	
	
	////////////////////////////////////////////// end /////////////////////////////////////////
	@RemoteMethod
	public String saveMainPrcsHderWithDetailToDbNonDirect(String mainPrcsHdr,String mainPrcsHdrDetail,String primrIdOfItfh,String mnPrcsJbHdr,
			String mnPrcsJbDtl,String qry,String[] bomQry, HttpSession session){
		String usEml = SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls = GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		Gson gsn = new Gson();
		List<Mn_Prcs_Hdr_Dtl> sbPrcsHdrDtlList = gsn.fromJson(mainPrcsHdrDetail, new TypeToken<List<Mn_Prcs_Hdr_Dtl>>() {
		}.getType());
		Mn_Prcs_Hdr sbPrcsHdr = gsn.fromJson(mainPrcsHdr, Mn_Prcs_Hdr.class);
		if (sbPrcsHdrDtlList != null && !sbPrcsHdrDtlList.isEmpty()) {
			for (Mn_Prcs_Hdr_Dtl sp : sbPrcsHdrDtlList) {
				if (sp.getMphd_crt_dt() == null||sp.getMphd_crt_dt().equalsIgnoreCase(""))
					sp.setMphd_crt_dt(startDate);
				if (sp.getMphd_crt_id() == null||sp.getMphd_crt_id().equalsIgnoreCase(""))
					sp.setMphd_crt_id(empDtls.getEm_emp_id());
				sp.setMphd_updt_dt(startDate);
	 			if (sp.getMphd_updt_id() == null||sp.getMphd_updt_id().equalsIgnoreCase(""))
					sp.setMphd_updt_id(empDtls.getEm_emp_id());
			}
			try {
				GimManager.saveMainPrcsHdrDtalTODb(sbPrcsHdrDtlList);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if (sbPrcsHdr != null) {
			try {
				if (sbPrcsHdr.getMph_crt_dt() == null)
					sbPrcsHdr.setMph_crt_dt(startDate);
				if(sbPrcsHdr.getMph_crt_id() == null||sbPrcsHdr.getMph_crt_id().equalsIgnoreCase(""))
					sbPrcsHdr.setMph_crt_id(empDtls.getEm_emp_id());
				sbPrcsHdr.setMph_updt_id(empDtls.getEm_emp_id());
				sbPrcsHdr.setMph_updt_dt(startDate);
				GimManager.saveMainPrcsHdOnlyTODb(sbPrcsHdr);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(StringUtils.isNotBlank(primrIdOfItfh)){
			GimManager.	changeTheInternalTrfHdrDetailWithStatus(primrIdOfItfh);
		}
		if(!mnPrcsJbHdr.equalsIgnoreCase("[]")){
			try{
				GimManager.deleteMainPrcsJobHdrRecMatch(qry);
			List<Mn_Prcs_Job_Hdr> mnPrcsJobList=gsn.fromJson(mnPrcsJbHdr, new TypeToken<List<Mn_Prcs_Job_Hdr>>(){}.getType());
			if(mnPrcsJobList!=null&&!mnPrcsJobList.isEmpty()){
				GimManager.saveAllTheMnPrccJobHeaderWithWorker(mnPrcsJobList);
			}
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		if(!mnPrcsJbDtl.equalsIgnoreCase("[]")){
			try{
			List<Mn_Prcs_Job_Dtl> mnPrcsJobList=gsn.fromJson(mnPrcsJbDtl, new TypeToken<List<Mn_Prcs_Job_Dtl>>(){}.getType());
			if(mnPrcsJobList!=null&&!mnPrcsJobList.isEmpty()){
				GimManager.saveAllTheMnPrccJobDetailWithWorker(mnPrcsJobList);
			}
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		if(bomQry!=null&&bomQry.length>0){
			GimManager.saveAllBalanceBomWithJobCard(String.join(" ",bomQry));
		}
		session.setAttribute("savedResOfMainPrcs", true);
		return "success";	
	}
	
	@RemoteMethod
	public String deleteExstMainHdrWithDetAjax(String doc){
		try{
		GimManager.	deleteExstMainHdrWithDetImpl(doc);
		}catch(Exception e){
			e.printStackTrace();
		}
		return "success";
	}
	
	
	@RemoteMethod
	public List<Object[]>searchBasedOnDptAndJbCdInMainPrcs(String dpt,String jbCrd,String trgtDt){
		try{
			return GimManager.searchBasedOnDptAndJbCdInMainPrcsInmp(dpt,jbCrd,trgtDt);
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
		
	}
	@RemoteMethod
	public List<Object[]> searchBasedOnDptAndCmyCdInMainPrcs(String qry){
		try{
			return GimManager.searchBasedOnDptAndCmyCdInMainPrcsInmp(qry);
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}	
	}
	@RemoteMethod
	public List<Object[]> searchBasedOnDptAndCmyCdAndOtherFilterInMainPrcs(String dpt,String cmy,String trgtDt,String jbCard){
		try{
			return GimManager.searchBasedOnDptAndCmyCdAndOtherFilterInMainPrcsImpl(dpt,cmy,trgtDt,jbCard);
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}	
	}	
	
///////////////////////  end / ///////////////////////////////////////////////////////////////////////

////////////////// temp main prcs /////////////////////////
	@RemoteMethod
	public List<Object[]> getAllInwardedItemForMainPrcs(String val){
		try{
			return GimManager.getAllInwardedItemForMainPrcsStkImpl(val);
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	
	@RemoteMethod
	public String saveMainPrcsHdeTemprWithDetailToDb(String mnPrcsHdr,String mnPrcsHdrDtls,String[] stkMvmntUpdate,String rcvdDocHdr,String rcvdDocDtls,HttpSession session){

		String usEml = SecurityContextHolder.getContext().getAuthentication().getName();
		Emp_Mst empDtls = GimManager.getEmplyeeDetailByEmail(usEml);
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd-MMM-yy");
		String startDate = formatter.format(date);
		Gson gsn = new Gson();
		List<Mn_Prcs_Tmp_Dtl> sbPrcsHdrDtlList = gsn.fromJson(mnPrcsHdrDtls, new TypeToken<List<Mn_Prcs_Tmp_Dtl>>() {
		}.getType());
		Mn_Prcs_Tmp_Hdr sbPrcsHdr = gsn.fromJson(mnPrcsHdr, Mn_Prcs_Tmp_Hdr.class);
		List<Rcvd_Doc_Dtl> rcvdhdrDtail=null;Rcvd_Doc_Hdr rcvdHdrOnly=null;
		if(StringUtils.isNotBlank(rcvdDocDtls)){
		rcvdhdrDtail=gsn.fromJson(rcvdDocDtls, new TypeToken<List<Rcvd_Doc_Dtl>>(){}.getType());
		}
		if(StringUtils.isNotBlank(rcvdDocHdr)){
			rcvdHdrOnly=gsn.fromJson(rcvdDocHdr, Rcvd_Doc_Hdr.class);
		}
		if (sbPrcsHdrDtlList != null && !sbPrcsHdrDtlList.isEmpty()) {
			for (Mn_Prcs_Tmp_Dtl sp : sbPrcsHdrDtlList) {
				if (sp.getmptd_crt_dt() == null||sp.getmptd_crt_dt().equalsIgnoreCase(""))
					sp.setmptd_crt_dt(startDate);
				if (sp.getmptd_crt_id() == null||sp.getmptd_crt_id().equalsIgnoreCase(""))
					sp.setmptd_crt_id(empDtls.getEm_emp_id());
				sp.setmptd_updt_dt(startDate);
	 			if (sp.getmptd_updt_id() == null||sp.getmptd_updt_id().equalsIgnoreCase(""))
					sp.setmptd_updt_id(empDtls.getEm_emp_id());
			}
			try {
				GimManager.saveMainPrcsHdrTmpDtalTODb(sbPrcsHdrDtlList);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if (sbPrcsHdr != null) {
			boolean chkRcvdIs=false;
			try {
				
				try{
				 chkRcvdIs=GimManager.chkIsRcvdAuthrisedOrNot(sbPrcsHdr.getmpth_doc_no());
				}
				catch(Exception e){
					e.printStackTrace();
				}
				sbPrcsHdr.setmpth_rcvd_auth(chkRcvdIs);
				if (sbPrcsHdr.getmpth_crt_dt() == null)
					sbPrcsHdr.setmpth_crt_dt(startDate);
				if(sbPrcsHdr.getmpth_crt_id() == null||sbPrcsHdr.getmpth_crt_id().equalsIgnoreCase(""))
					sbPrcsHdr.setmpth_crt_id(empDtls.getEm_emp_id());
				sbPrcsHdr.setmpth_updt_id(empDtls.getEm_emp_id());
				sbPrcsHdr.setmpth_updt_dt(startDate);
				GimManager.saveMainPrcsTempHdOnlyTODb(sbPrcsHdr);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(stkMvmntUpdate!=null&&stkMvmntUpdate.length>0){
			try{
			GimManager.updateStkDetailFromTempMainnProcess(String.join(" ",stkMvmntUpdate));
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
	if(rcvdhdrDtail!=null&&!rcvdhdrDtail.isEmpty()){
		for (Rcvd_Doc_Dtl rd : rcvdhdrDtail) {
			if (rd.getRdd_crt_id() == null)
				rd.setRdd_crt_id(empDtls.getEm_emp_id());
				rd.setRdd_upt_id(rd.getRdd_crt_id());
				rd.setRdd_upt_dt(startDate);
				rd.setRdd_crt_dt(startDate);
		}
		try {
			GimManager.saveRcvdDocumtDetailToDb(rcvdhdrDtail);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	if(rcvdHdrOnly!=null){
		Rcvd_Doc_Hdr rcvdHDrChk=GimManager.chkRcvdDocuMntHdrByIsdDocNo(rcvdHdrOnly.getRdh_isd_doc_no());
		if(rcvdHDrChk!=null){
			Object[] exstRcvdDocDetal=GimManager.getExistRcvdDocuDetail(rcvdHDrChk.getRdh_isd_doc_no(),rcvdHDrChk.getRdh_trf_typ());
			if(exstRcvdDocDetal!=null){
				rcvdHDrChk.setRdh_rcvd_wgt(""+exstRcvdDocDetal[0]);
				rcvdHDrChk.setRdh_rcvd_doc_cnt(""+exstRcvdDocDetal[1]);
				rcvdHDrChk.setRdh_updt_dt(startDate);
				GimManager.saveOrUpdateRcvdDocHdr(rcvdHDrChk);
			}
		}
		else{
			rcvdHdrOnly.setRdh_crt_dt(startDate);
			rcvdHdrOnly.setRdh_updt_dt(startDate);
			rcvdHdrOnly.setRdh_upt_id(rcvdHdrOnly.getRdh_crt_id());
			GimManager.saveOrUpdateRcvdDocHdr(rcvdHdrOnly);
		}
	}
		session.setAttribute("savedResOfMainPrcs", true);
		return "success";
	
	}
	///////////////// end /////////////////////////////////////
	
	@RemoteMethod
	public List<Object[]> getExstingRcvdAllDocuments(String dptCd){
		try{
		return GimManager.getExstingRcvdAllDocumentsImpl(dptCd);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
	}
	
@RemoteMethod
public List<Object[]> getDeptWiseInternalProcessIssued(String qry){
	try{
	return GimManager.getDeptWiseInternalProcessIssuedImpl(qry);
	}catch(RuntimeException e){
		e.printStackTrace();
		return null;
	}
}
@RemoteMethod
public String checkTheInternalDocNO(String docNo){
	try{
		return GimManager.checkTheInternalDocNOImpl(docNo);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}
@RemoteMethod
public String checkMainPrcsTempDocNoin(String docNo){
	try{
		return GimManager.checkMainPrcsTempDocNoinOImpl(docNo);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}

@RemoteMethod
public String checkRcvdDocumentNoInMainPrcs(String DocNo){
	try{
		return GimManager.checkRcvdDocumentNoInMainPrcsImpl(DocNo);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}


@RemoteMethod
public List<Object[]>getTransactionDetailBy(String qry){
	try{
		return GimManager.getwaxDetailForPrintImpl(qry);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}


@RemoteMethod
public List<Object[]>getwaxDetailForPrint(String qry){
	try{
		return GimManager.getwaxDetailForPrintImpl(qry);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}

@RemoteMethod
public String deleteCaratMasterRec(Long id){
	try{
	GimManager.deleteCaratMasterRecImpl(id);
	return "success";
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public List<Stk_Mst>getStockBasedOnDeptMntInCasting(String dptCd,String trftyp){
	try{
		return GimManager.getStockBasedOnDeptMntInCastingImpl(dptCd,trftyp);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}

@RemoteMethod
public List<Object[]>getrequiredBomDetailOfJobCard(String joNo,String dpt){
	try{
		return GimManager.getrequiredBomDetailOfJobCardImpl(joNo,dpt);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}

@RemoteMethod
public List<Object[]>getrequiredBomDetailOfJobCardWrkerWise(String jobcrdno,String cmycd,String wrkcd,String dptCd,String mnprcsDocNo){
	try{
		return GimManager.getrequiredBomDetailOfJobCardWrkerWiseImpl(jobcrdno,cmycd,wrkcd,dptCd,mnprcsDocNo);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}
@RemoteMethod
public List<Object[]>getStockCalculationInFrontEnd(String qry){
	try{
		return GimManager.getStockCalculationInFrontEndImp(qry);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}
@RemoteMethod
public List<Object[]>getExstStkOfCstWithEmployee(String qry){
	try{
		return GimManager.getExstStkOfCstWithEmployeeImp(qry);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}
@RemoteMethod
public List<Object[]>checkDcbalStock(String qry){
	try{
		return GimManager.checkDcbalStockImp(qry);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}


@RemoteMethod
public List<String>getPendingJobCardFromJobOrdHdr(String dpt,String cmy){
	try{
		return GimManager.getPendingJobCardFromJobOrdHdr(dpt,cmy);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}
}
@RemoteMethod
public boolean checkIfJobCardDocNoIsPresentOrNot(String docNo){
	try{
		return GimManager.checkIfJobCardDocNoIsPresentOrNotImpl(docNo);
		}catch(RuntimeException e){
			e.printStackTrace();
			return true;
		}
}

@RemoteMethod
public List<Object[]> getPendingJobCardForMainPrcs(String qry){
	try{
		return GimManager.getPendingJobCardForMainPrcsImpl(qry);
		}catch(RuntimeException e){
			e.printStackTrace();
			return null;
		}	
}

@RemoteMethod
public String sabeTheAlowdPrtyOfAlloy(Long id,String isdPrty,String []testsmpqry){
	try{
		GimManager.sabeTheAlowdPrtyOfAlloyImpl(id,isdPrty,testsmpqry);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}
@RemoteMethod
public String saveTheCastdPrtyOfEdit(Long id,String isdPrty,String[] testsmlqry){
	try{
		GimManager.saveTheCastdPrtyOfEditImpl(id,isdPrty,testsmlqry);
	}catch(Exception e){
		e.printStackTrace();
	}
	return "success";
}

@RemoteMethod
public List<Object[]> getAddInternalTransferDataJobMaked(String qry){
	try{
	return	GimManager.getAddInternalTransferDataJobMakedImpl(qry);
	}catch(Exception e){
		e.printStackTrace();
	}
	return null;
}
@RemoteMethod
public String updatecastprcssDustAuthsts(String qry){
	try{
	GimManager.updatecastprcssDustAuthsts(qry);
		}catch(Exception e){
			e.printStackTrace();
		}
	return null;
}
@RemoteMethod
public List<Object[]> getPendingJobCardForWrkWithDpt(String qry){
	try{
	return GimManager.getPendingJobCardForWrkWithDptImpl(qry);
			}catch(Exception e){
				e.printStackTrace();
		}
	return null;
}
@RemoteMethod
public Auth_Mst getAuthenticationCheker(String email,String pwd,String cmycd){
	try{
		return GimManager.getAuthenticationChekerImpl(email,pwd,cmycd);
				}catch(Exception e){
					e.printStackTrace();
			}
		return null;
}
@RemoteMethod
public String delAuthMstRecImpl(Long id){
	try{
		 GimManager.delAuthMstRecImpl(id);
				}catch(Exception e){
					e.printStackTrace();
			}
		return "success";
}

@RemoteMethod
public List<Object[]> runDynamicQueriesFromJavaScript(String qery){
	try{
		return GimManager.runDynamicQueriesFromJavaScriptImpl(qery);
				}
	catch(Exception e){
			e.printStackTrace();
			return null;
			}
}
@RemoteMethod
public List<Object[]>getSearchedRemarksForFinsh(String srch){
	try{
		return GimManager.getSearchedRemarksForFinshImpl(srch);
				}
	catch(Exception e){
			e.printStackTrace();
			return null;
			}
}
@RemoteMethod
public String saveStoneDataInJobCard(String[] srch){
	try{
		if(srch!=null&&srch.length>0)
		return GimManager.saveStoneDataInJobCardImpl(String.join(" ", srch));
				}
	catch(Exception e){
			e.printStackTrace();
			return null;
			}
	return null;
}

@RemoteMethod
public String delTransactionBasedStockRecAjax(String qry){
	try{
		 GimManager.delTransactionBasedStockRecAjax(qry);
				}
	catch(Exception e){
			e.printStackTrace();
			}
	return "success";
}


@RemoteMethod
public String saveColumnstateInReports(String[] srch){
	try{
		if(srch!=null&&srch.length>0)
		 GimManager.saveStoneDataInJobCardImpl(String.join(" ", srch));
		}
	catch(Exception e){
			e.printStackTrace();
		}
	return "success";
}



@RemoteMethod
public List<Object[]>getSearchedRemarksForRecovery(String srch){
	try{
		return GimManager.getSearchedRemarksForRecoveryImpl(srch);
				}
	catch(Exception e){
			e.printStackTrace();
			return null;
			}
}

@RemoteMethod
public List<Object[]>getSearchedDescrptionForRecovery(String srch){
	try{
		return GimManager.getSearchedDescrptionForRecoveryImpl(srch);
				}
	catch(Exception e){
			e.printStackTrace();
			return null;
			}
}

@RemoteMethod
public String deletedcprcshdrDtlAjax(String qry){
	try{
	 GimManager.deletedcprcshdrDtlAjax(qry);
	}
	catch(Exception e){
	e.printStackTrace();}
	return "success";
}
@RemoteMethod
public String deletefnshprcshdrDtlAjax(String qry){
	try{
	 GimManager.deletefnshprcshdrDtlAjaxImpl(qry);
	}
	catch(Exception e){
	e.printStackTrace();}
	return "success";
}
@RemoteMethod
public String updateMainProcessDetailForEdit(String[] qry){
	try{
		if(qry!=null&&qry.length>0){
		 GimManager.updateMainProcessDetailForEditImpl(String.join(" ",qry));
		}
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}
@RemoteMethod
public List<Object[]> getDataForPintoutJOBCARD(String qry){
	try{
		return  GimManager.getDataForPintoutJOBCARDImpl(qry);
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}
@RemoteMethod
public List<Object[]> getDataForPintoutJOBCARDPOsitional(String qry,String qry2){
	List<Object[]> data=null;
	try{
		data=GimManager.getDataForPintoutJOBCARDImpl(qry);
		if(!(data!=null&&!data.isEmpty())){
			data=GimManager.getDataForPintoutJOBCARDImpl(qry2);	
		}
		}
		catch(Exception e){
		e.printStackTrace();}
	return data;
}

@RemoteMethod
public List<Object[]> getCompletedBomForIntrnalTransfer(String qry){
	try{
		return  GimManager.getCompletedBomForIntrnalTransferImpl(qry);
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}
@RemoteMethod
public List<Object[]> getProductDetail(String qry){
	try{
		return  GimManager.getProductDetailImpl(qry);
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}

@RemoteMethod
public List<Object[]> getBomDetailByPdtCd(Long pdtcd,String type){
	try{
		if(type.equalsIgnoreCase("BOM"))
		return  GimManager.getExistDgnBomWithDesignId(pdtcd);
		else if(type.equalsIgnoreCase("MOLD"))
			return  GimManager.getExistDgnMoldWithDesignId(pdtcd);
		else
			return  GimManager.getExistDgnStnWithDesignId(pdtcd);
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}


@RemoteMethod
public List<Object[]> getDetailOfDocumenBySearch(String qry){
	try{
		return  GimManager.getDetailOfDocumenBySearchImpl(qry);
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}
@RemoteMethod
public List<Object[]> getBomDetailByPdtCdForFnshPdt(String qry){
	try{
		return  GimManager.getBomDetailByPdtCdForFnshPdtImpl(qry);
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}
@RemoteMethod
public List<Object[]> getFilteredClosingStock(String qry){
	try{
		return  GimManager.getFilteredClosingStockImpl(qry);
		}
		catch(Exception e){
		e.printStackTrace();}
	return null;
}
@RemoteMethod
public List<Object[]> getthisRecords(String cmycd,String field){
		List<Object[]> exstDptStkWithPrty=GimManager.getDptStkWithPrtyOfCmyandDpt(cmycd,"","","","field");
		return exstDptStkWithPrty;
	}


	List<Object[]> getinwordrecordgloballist=new ArrayList<Object[]>();
	@RemoteMethod
	public List<Object[]> getInwardReport(String cmycd,String qry){
		List<Object[]> res=GimManager.getInwardReport(cmycd,qry);
		getinwordrecordgloballist.clear();
		if(res!=null && res.size()>0) getinwordrecordgloballist.addAll(res);
		return res;
	}
	@RemoteMethod
	public List<Object[]> searchInInwordrecordgloballist(String cmycd,String dept,String prty){
		List<Object[]> records=new ArrayList<Object[]>();
			for (Object[] obj : getinwordrecordgloballist) {
					if (StringUtils.containsIgnoreCase(obj[0].toString(), dept) && StringUtils.containsIgnoreCase(obj[2].toString(), prty)) records.add(obj);
			}
				return records;
	}
	List<Object[]> workergloballist=new ArrayList<Object[]>();
	@RemoteMethod
	public List<Object[]> getWorkerWiseReport(String cmycd,String qry){
		List<Object[]> res=GimManager.getWorkerWiseReport(cmycd,qry);
		workergloballist.clear();
		if(res!=null && !res.isEmpty())  workergloballist.addAll(res);
		List<Object[]> res1=new ArrayList<Object[]>();
		for (Object[] obj : res) {
			if(obj[2].toString().equalsIgnoreCase("ComWrker"))  res1.add(obj);
		}
		return res1;
	}
	@RemoteMethod
	public List<Object[]> getWorkerWiseReportOutSideWorker(String cmycd,String qry){
		List<Object[]> res=GimManager.getWorkerWiseReport(cmycd,qry);
		List<Object[]> res1=new ArrayList<Object[]>();
		for (Object[] obj : res) {
			if(obj[2].toString().equalsIgnoreCase("OutSideWrker"))  res1.add(obj);
		}
		return res1;
	}
	@RemoteMethod
	public List<Object[]> searchinworker(String cmycd,String wrkrtyp,String dept,String prty,String wrkrcd){
		List<Object[]> records=new ArrayList<Object[]>();
			for (Object[] obj : workergloballist) {
					if (StringUtils.containsIgnoreCase(obj[0].toString(), dept) && StringUtils.containsIgnoreCase(obj[1].toString(), wrkrcd) && StringUtils.containsIgnoreCase(obj[5].toString(), prty) && wrkrtyp.equalsIgnoreCase(obj[2].toString())) records.add(obj);
			}
		return records;
	}
	List<Object[]> puritylossgloballist=new ArrayList<Object[]>();
	@RemoteMethod
	public List<Object[]> getPurityLossDeptWise(String qry){
		List<Object[]> ptylos=GimManager.getPurityLossDeptWise(qry);
		puritylossgloballist.clear();
		if(ptylos!=null && !ptylos.isEmpty()) puritylossgloballist.addAll(ptylos);
		return ptylos;
	}
	@RemoteMethod
	public List<Object[]> searchInPurityLoss(String cmycd,String dept,String prty){
		List<Object[]> records=new ArrayList<Object[]>();
			for (Object[] obj : puritylossgloballist) {
					if (StringUtils.containsIgnoreCase(obj[0].toString(), dept) && StringUtils.containsIgnoreCase(obj[1].toString(), prty)) records.add(obj);
			}
		return records;
	}
	List<Object[]> closingStockgloballist=new ArrayList<Object[]>();
	@RemoteMethod
	public List<Object[]> getClosingStockReports(String qry){
		List<Object[]> clsstk=GimManager.getClosingStockReports(qry);
		closingStockgloballist.clear();
		if(clsstk!=null && !clsstk.isEmpty())  closingStockgloballist.addAll(clsstk);
		return clsstk;
	}
	@RemoteMethod
	public List<Object[]> searchinclosingstock(String cmycd,String dept,String prty){
		List<Object[]> records=new ArrayList<Object[]>();
			for (Object[] obj : closingStockgloballist) {
					if (StringUtils.containsIgnoreCase(obj[0].toString(), dept) && StringUtils.containsIgnoreCase(obj[5].toString(), prty)) records.add(obj);
			}
		return records;
	}
}