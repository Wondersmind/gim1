package com.gim.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;

import com.gim.dao.UserDAO;
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
import com.gim.entity.User_Permission;
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
public class GimManagerImpl implements GimManager {

	@Autowired
	UserDAO userDao;


	// ******************************************************************************************
	@Autowired(required = false)
	AuthenticationManager authManager;
	private Logger LOG = Logger.getLogger(GimManager.class);
	Session session = null;
	private static HibernateTemplate ht;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.ht = new HibernateTemplate(sessionFactory);
		session = sessionFactory.openSession();
	}

	@Override
	public User getUser() {
		// TODO Auto-generated method stub
		return null;
	}

	public User getUser(String username) {
		User user = null;
		List<Emp_Mst> users = ht.find("FROM Emp_Mst e WHERE (e.em_emp_eml = ? or e.em_emp_login_nm = ?)", username,username);

		if (users != null && !users.isEmpty()) {
			user=new User();
			if(users.get(0).getEm_emp_eml()!=null){
			user.setUserName(users.get(0).getEm_emp_eml());
			user.setEmailAddress(users.get(0).getEm_emp_eml());
			user.setPassword(""+users.get(0).getEm_emp_login_pwd());
			user.setActive(true);
			}
		}

		return user;
	}

	@Override
	public void saveCompanyDetail(Cmy_Mst companyDetail) {
	ht.save(companyDetail);
	}

	@Override
	public List<Cmy_Mst> getExistAddedCompany() {
	List<Cmy_Mst> exist=ht.find("from Cmy_Mst c where cm_cmy_cd='"+getCmy()+"' and c.cm_cmy_sts=1 order by cm_id desc");
	return exist;
	}

	@Override
	public void saveDepartMentDetail(Dpt_Mst dptDetail) {
	ht.save(dptDetail);
	}
	
	public String getCmy(){
		String username=SecurityContextHolder.getContext().getAuthentication().getName();
		List<Emp_Mst> users = ht.find("FROM Emp_Mst e WHERE (e.em_emp_eml = ? or e.em_emp_login_nm = ?)", username,username);	
		if(users!=null&&!users.isEmpty()){
			return	users.get(0).getEm_cmy_cd();
		}
		else{
			return "10000";		
		}
	}
	
	@Override
	public List<Object[]> getExistDepartmentDetail() {
		try{
		List<Object[]> exist=session.createSQLQuery("select c.cm_cmy_nm,d.dm_dpt_cd,d.dm_id,d.dm_dpt_nm,d.dm_dscr,d.dm_sts from dpt_mst d left join cmy_mst c on d.dm_cmy_cd=c.cm_cmy_cd where dm_cmy_cd='"+getCmy()+"' and d.dm_sts=1 and c.cm_cmy_sts=1 order by d.dm_id desc").list();
		return exist;
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public void saveBomDetail(Bom_Mst bomDetail) {
		ht.save(bomDetail);
	}

	@Override
	public List<Object[]> getExistBomDetail() {
		try{
			List<Object[]> exist=session.createSQLQuery("select c.cm_cmy_nm,b.bm_bom_cd,b.bm_bom_nm,b.bm_bom_wip_typ,b.bm_bom_sz,b.bm_bom_typ,b.bm_bom_sts,b.bm_id,b.bm_bom_wgt,b.bm_bom_qty from bom_mst b left join cmy_mst c on b.bm_cmy_cd=c.cm_cmy_cd where bm_cmy_cd='"+getCmy()+"' and b.bm_bom_sts=1 and c.cm_cmy_sts=1 order by b.bm_id desc").list();
			return exist;
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}

	@Override
	public void delCompanyMstRecImpl(Long id) {
		SQLQuery update=session.createSQLQuery("update cmy_mst set cm_cmy_sts=0 where cm_id="+id+"");
		update.executeUpdate();
	}

	@Override
	public void delDepartmentMstRecImpl(Long id) {
		SQLQuery update=session.createSQLQuery("update dpt_mst set dm_sts=0 where dm_id="+id+"");
		update.executeUpdate();
	}

	@Override
	public void delBomMstRecImpl(Long id) {
		SQLQuery update=session.createSQLQuery("update bom_mst set bm_bom_sts=0 where bm_id="+id+"");
		update.executeUpdate();
	}

	@Override
	public void saveStoreDetail(Str_Mst storeDetail) {
		ht.save(storeDetail);
	}

	@Override
	public List<Object[]> getExistStoreDetail() {
		try{
			List<Object[]> exist=session.createSQLQuery("select s.sm_str_cd,c.cm_cmy_nm,s.sm_str_nm,s.sm_str_ads1,s.sm_str_ads2,s.sm_str_cty,s.sm_str_st,s.sm_str_cy,s.sm_str_cny,s.sm_str_pin_cd,"
					+ " s.sm_str_ph_no,s.sm_str_mob_no,s.sm_str_eml,s.sm_id from str_mst s left join cmy_mst c on s.sm_cmy_cd=c.cm_cmy_cd where s.sm_cmy_cd='"+getCmy()+"' and s.sm_str_sts=1 and c.cm_cmy_sts=1 order by s.sm_id desc").list();
			return exist;
			}
			catch(Exception e){
				e.printStackTrace();
			}
		return null;
	}

	@Override
	public void delStoreMstRecImpl(Long id) {
		SQLQuery update=session.createSQLQuery("update str_mst set sm_str_sts=0 where sm_id="+id+"");
		update.executeUpdate();
	}

	@Override
	public void saveUomDetail(Uom_Mst uomDetail) {
		ht.save(uomDetail);
	}

	@Override
	public List<Object[]> getExistingUomDetail() {
		List<Object[]> exist=session.createSQLQuery("select c.cm_cmy_nm,u.um_uom_cd,u.um_uom_nm,u.um_uom_dscr,u.um_uom_sts,u.um_id from uom_mst u left join cmy_mst c on u.um_cmy_cd=c.cm_cmy_cd where u.um_uom_sts=1 and c.cm_cmy_sts=1 order by u.um_id desc").list();
		return exist;
	}

	@Override
	public void delUomMstRecImpl(Long id) {
		SQLQuery update=session.createSQLQuery("update uom_mst set um_uom_sts=0 where um_id="+id+"");
		update.executeUpdate();
	}

	@Override
	public void saveProcessDetail(Prcs_Mst prcDetail) {
	ht.save(prcDetail);
	}

	@Override
	public List<Dpt_Mst> getDepMntDetailInProcessPage() {
	List<Dpt_Mst>ext=ht.find("from Dpt_Mst d where dm_cmy_cd='"+getCmy()+"' and d.dm_sts=1 ");
	return ext;
	}

	@Override
	public List<Object[]> getExistProcessDetail() {
		List<Object[]> ext=session.createSQLQuery("select c.cm_cmy_nm,p.pm_prcs_cd,p.pm_prcs_nm,p.pm_prcs_dscr,p.pm_prcs_sts,p.pm_id,p.pm_prcs_typ,p.pm_dpt_cd from prcs_mst p left join cmy_mst c on p.pm_cmy_cd=c.cm_cmy_cd where pm_cmy_cd='"+getCmy()+"' and p.pm_prcs_sts=1 and c.cm_cmy_sts=1 order by p.pm_id desc").list();
		return ext;
	}

	@Override
	public void delProcessMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update prcs_mst set pm_prcs_sts=0 where pm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void saveProcessDetail(Stn_Mst stnDetail) {
		ht.save(stnDetail);
	}

	@Override
	public void delStoneMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update stn_mst set sm_stn_sts=0 where sm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public List<Object[]> getExistStoneDetail() {
		List<Object[]> ext=session.createSQLQuery("select c.cm_cmy_nm,s.sm_stn_nm,s.sm_stn_shpe,s.sm_stn_clr,s.sm_stn_sz,s.sm_stn_cd,s.sm_id from stn_mst s left join cmy_mst c on s.sm_cmy_cd=c.cm_cmy_cd where sm_cmy_cd='"+getCmy()+"' and s.sm_stn_sts=1 and c.cm_cmy_sts=1 order by s.sm_id desc").list();
		return ext;
	}

	@Override
	public void saveMoldDetail(Mold_Mst mldDetail) {
	ht.save(mldDetail);	
	}

	@Override
	public List<Object[]> getExistMoldDetail() {
		List<Object[]> ext=session.createSQLQuery("select c.cm_cmy_nm,m.mm_mold_no,m.mm_mold_dscr,m.mm_mold_sts,m.mm_id from mold_mst m left join cmy_mst c on m.mm_cmy_cd=c.cm_cmy_cd where mm_cmy_cd='"+getCmy()+"' and m.mm_mold_sts=1 and c.cm_cmy_sts=1 order by m.mm_id desc").list();
		return ext;
	}

	@Override
	public void delMoldMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update mold_mst set mm_mold_sts=0 where mm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void saveRawMaterialDetail(Raw_Mtr_Mst rawDetail) {
	ht.save(rawDetail);
	}

	@Override
	public List<Object[]> getExistRawMaterialDetail() {
		List<Object[]> ext=session.createSQLQuery("select c.cm_cmy_nm,m.rm_mst_pdt_id,m.rm_mst_pdt_nm,m.rm_mst_pdt_pty,m.rm_mst_sts,m.rm_mst_id from raw_mtr_mst m left join cmy_mst c on m.rm_mst_cmy_cd=c.cm_cmy_cd where rm_mst_cmy_cd='"+getCmy()+"' and m.rm_mst_sts=1 and c.cm_cmy_sts=1 order by m.rm_mst_id desc").list();
		return ext;
	}

	@Override
	public void delRawMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update raw_mtr_mst set rm_mst_sts=0 where rm_mst_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void delDayMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update daywise_prc_mst set dw_pm_sts=0 where dw_pm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void saveDayMaterialDetail(DayWise_Prc_Mst dayDetail) {
		ht.save(dayDetail);
	}

	@Override
	public List<Object[]> getExistDayWiseDetail() {
		List<Object[]> ext=session.createSQLQuery("select c.cm_cmy_nm,d.dw_pm_tdy_dt,d.dw_pm_gld_carat,d.dw_pm_pty,d.dw_pm_prc,d.dw_pm_id from daywise_prc_mst d left join cmy_mst c on d.dw_pm_cmy_cd=c.cm_cmy_cd where d.dw_pm_sts=1 and c.cm_cmy_sts=1 order by d.dw_pm_id desc").list();
		return ext;
	}

	@Override
	public List<Str_Mst> getStrDetailInProcessPage() {
	List<Str_Mst>ext=ht.find("from Str_Mst s where sm_cmy_cd='"+getCmy()+"' and s.sm_str_sts=1 order by s.sm_id desc");
		return ext;
	}

	@Override
	public void delEmpMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update emp_mst set em_emp_sts=0 where em_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public String getEmpIdForSavingDetail() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((em_emp_id)+1) from emp_mst c where Isnumeric(c.em_emp_id)=1 and c.em_emp_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	
	}

	@Override
	public void saveEmpMaterialDetail(Emp_Mst empDetail) {
		ht.save(empDetail);
	}

	@Override
	public List<Object[]> getExistEmpDetails() {
		List<Object[]> ext=session.createSQLQuery("select (select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=em_cmy_cd and cm_cmy_sts=1) as cmy,(select top 1 sm_str_nm from str_mst where sm_str_cd=em_str_cd and sm_str_sts=1) as str,em_dpt_cd as dpt,e.em_emp_nm,e.em_emp_mob,e.em_emp_eml,e.em_emp_login_nm,e.em_emp_login_pwd,e.em_emp_typ,e.em_emp_alw_qty,e.em_id from emp_mst e "
				+ " where em_cmy_cd='"+getCmy()+"' and e.em_emp_sts=1 order by e.em_id desc").list();
		return ext;
	}

	@Override
	public void delVendorMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update vn_ct_mst set vcm_vnct_sts=0 where vcm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void saveVendorMaterialDetail(Vn_Ct_Mst vcmDetail) {
	ht.save(vcmDetail);
	}

	@Override
	public List<Object[]> getExistVendorDetails() {
		List<Object[]> ext=session.createSQLQuery(" select c.cm_cmy_nm,v.vcm_vnct_cd,v.vcm_vnct_nm,v.vcm_vnct_ads1,v.vcm_vnct_ads2,v.vcm_vnct_cty,v.vcm_vnct_st,v.vcm_vnct_cny,v.vcm_vnct_pin_cd,v.vcm_alw_qty,v.vcm_vnct_mob_no,v.vcm_vnct_eml,v.vcm_id,v.vcm_vnct_sts,vcm_dpt_cd from vn_ct_mst v left join cmy_mst c on v.vcm_cmy_cd=c.cm_cmy_cd where vcm_cmy_cd='"+getCmy()+"' and v.vcm_vnct_sts=1 and c.cm_cmy_sts=1 order by v.vcm_id desc ").list();
		return ext;
	}

	@Override
	public List<Object[]> getAllNonGoldProductSrchImpl(String id) {
		try{
		List<Object[]> srch=session.createSQLQuery(" select top 50 sm_stn_nm,sm_stn_cd,sm_stn_clr,sm_stn_shpe,sm_stn_sz from stn_mst s where sm_cmy_cd='"+getCmy()+"' and (s.sm_stn_nm like '%"+id+"%' "
				+ "or s.sm_stn_cd like '%"+id+"%' or sm_stn_clr like '%"+id+"%' or sm_stn_shpe like '%"+id+"%' or sm_stn_sz like '%"+id+"%' ) and s.sm_stn_sts=1").list();
		return srch;
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public  List<Object[]> getAllBomProductSrchImpl(String id) {
		try{
			List<Object[]> srch=session.createSQLQuery(" select top 50 bm_bom_nm,bm_bom_cd,bm_bom_wip_typ,bm_bom_typ,bm_bom_sz from bom_mst b where bm_cmy_cd='"+getCmy()+"' and (b.bm_bom_nm like '%"+id+"%' "
					+ "or b.bm_bom_cd like '%"+id+"%' or bm_bom_sz like '%"+id+"%' or bm_bom_typ like '%"+id+"%' or bm_bom_wip_typ like '%"+id+"%') and b.bm_bom_sts=1").list();
			return srch;
		}catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}

	@Override
	public List<Object[]> getAllMoldProductSrchImpl(String id) {
		try{
			List<Object[]> srch=session.createSQLQuery(" select top 50 mm_mold_no from mold_mst m where m.mm_mold_no like '%"+id+"%' and m.mm_mold_sts=1").list();
			return srch;
			}catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}

	@Override
	public Stn_Mst getOneStoneProductDetImpl(String id) {
		List<Stn_Mst> stn=ht.find("from Stn_Mst s where sm_cmy_cd='"+getCmy()+"' and s.sm_stn_cd=? and s.sm_stn_sts=1",id);
		return stn!=null&&!stn.isEmpty()?stn.get(0):null;
	}

	@Override
	public Bom_Mst getOneBomProductDetImpl(String id) {
		List<Bom_Mst> stn=ht.find("from Bom_Mst s where  bm_cmy_cd='"+getCmy()+"' and s.bm_bom_cd=? and s.bm_bom_sts=1",id);
		return stn!=null&&!stn.isEmpty()?stn.get(0):null;
	}
		
	@Override
	public Mold_Mst getOneMoldProductDetImpl(String id) {
		List<Mold_Mst> stn=ht.find("from Mold_Mst s where  mm_cmy_cd='"+getCmy()+"' and s.mm_mold_no=? and s.mm_mold_sts=1",id);
		return stn!=null&&!stn.isEmpty()?stn.get(0):null;
	}

	@Override
	public List<Uom_Mst> getUomDetailInProcessPage() {
		List<Uom_Mst> stn=ht.find("from Uom_Mst s where s.um_uom_sts=1");
		return stn;
	}

	@Override
	public List<Vn_Ct_Mst> getVnCtDetailInProcessPage() {
		List<Vn_Ct_Mst> stn=ht.find("from Vn_Ct_Mst v where v.vcm_vnct_sts=1 and (v.vcm_vnct_typ=? or v.vcm_vnct_typ=?)","Vendor","Both");
		return stn;
	}

	@Override
	public void saveStoneDetail(Stn_Mst stnDetail) {
		ht.save(stnDetail);
	}

	@Override
	public void saveDesignStoneMstListDeatil(List<Dgn_Stn_Mst> listDsm) {
		ht.saveOrUpdateAll(listDsm);
	}

	@Override
	public void saveDesignBomMstListDeatil(List<Dgn_Bom_Mst> listDbm) {
		ht.saveOrUpdateAll(listDbm);
	}

	@Override
	public void saveDesignMoldMstListDeatil(List<Dgn_Mold_Mst> listDmm) {
		ht.saveOrUpdateAll(listDmm);
	}

	@Override
	public void saveDesignMstDetail(Dgn_Mst clicks) {
		ht.save(clicks);
	}

	@Override
	public void saveDesignCastMstDetail(Dgn_Cst_Mst dcstMst) {
		ht.save(dcstMst);
	}


	@Override
	public List<Object[]> getExistDesignDetails() {
		List<Object[]> ext=session.createSQLQuery("select c.cm_cmy_nm,d.dm_pdt_cd,d.dm_pdt_nm,d.dm_dgn_no,d.dm_dgn_ctgy,dpt.dm_dpt_nm,d.dm_dgn_sz,u.um_uom_nm,d.dm_dgn_std_wt,d.dm_dgn_min_wt,d.dm_dgn_max_wt,d.dm_dgn_img,d.dm_dgn_carat,c.cm_alt_cmy_nm,d.dm_id from "
				+ " dgn_mst d left join cmy_mst c on d.dm_cmy_cd=c.cm_cmy_cd left join dpt_mst dpt on d.dm_dgn_dpt=dpt.dm_dpt_cd left join uom_mst u on d.dm_dgn_uom=u.um_uom_cd where d.dm_cmy_cd='"+getCmy()+"' and d.dm_dgn_sts=1 and c.cm_cmy_sts=1 and (dpt.dm_sts=1 or dpt.dm_sts is null) and (u.um_uom_sts=1 or u.um_uom_sts is null) order by d.dm_id desc").list();
		return ext;
	}

	@Override
	public void delDesignMstRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update dgn_mst set dm_dgn_sts=0 where dm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public Cmy_Mst getExistCmyDetailForEdit(Long cmyId) {
		List<Cmy_Mst> cm=ht.find("from Cmy_Mst c where c.cm_id=?",cmyId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveCompanyDetailEdit(Cmy_Mst companyDetail) {
		ht.update(companyDetail);
	}

	@Override
	public Dpt_Mst getExistDeptMentDetailForEdit(Long dptId) {
		List<Dpt_Mst> cm=ht.find("from Dpt_Mst c where c.dm_id=?",dptId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveDepartMentDetailEdit(Dpt_Mst dptDetail) {
		ht.update(dptDetail);
	}

	@Override
	public Emp_Mst getExistEmpDetailForEdit(Long empId) {
		List<Emp_Mst> cm=ht.find("from Emp_Mst c where c.em_id=?",empId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveEmpMaterialDetailEdit(Emp_Mst empDetail) {
		ht.update(empDetail);
	}

	@Override
	public Bom_Mst getExistBomDetailForEdit(Long bomId) {
		List<Bom_Mst> cm=ht.find("from Bom_Mst c where c.bm_id=?",bomId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveBomDetailEdit(Bom_Mst bomDetail) {
		ht.update(bomDetail);
	}

	@Override
	public Uom_Mst getExistUomDetailForEdit(Long uomId) {
		List<Uom_Mst> cm=ht.find("from Uom_Mst c where c.um_id=?",uomId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveUomDetailEdit(Uom_Mst uomDetail) {
		ht.update(uomDetail);
	}

	@Override
	public DayWise_Prc_Mst getExistDayDetailEdit(Long dayId) {
		List<DayWise_Prc_Mst> cm=ht.find("from DayWise_Prc_Mst c where c.dw_pm_id=?",dayId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveDayMaterialDetailEdit(DayWise_Prc_Mst dayDetail) {
		ht.update(dayDetail);
	}

	@Override
	public Str_Mst getExistStrDetailForEdit(Long strId) {
		List<Str_Mst> cm=ht.find("from Str_Mst c where c.sm_id=?",strId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveStoreDetailEdit(Str_Mst storeDetail) {
		ht.update(storeDetail);
	}

	@Override
	public Prcs_Mst getExistProcessDetailForEdit(Long prcsId) {
		List<Prcs_Mst> cm=ht.find("from Prcs_Mst c where c.pm_id=?",prcsId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveProcessDetailEdit(Prcs_Mst prcDetail) {
		ht.update(prcDetail);
	}

	@Override
	public Vn_Ct_Mst getExistVntCstDetailForEdit(Long vntId) {
		List<Vn_Ct_Mst> cm=ht.find("from Vn_Ct_Mst c where c.vcm_id=?",vntId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveVendorMaterialDetailEdit(Vn_Ct_Mst vcmDetail) {
		ht.update(vcmDetail);
	}

	@Override
	public Stn_Mst getExistStoneDetailForEdit(Long stnId) {
		List<Stn_Mst> cm=ht.find("from Stn_Mst c where c.sm_id=?",stnId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveStoneDetailEdit(Stn_Mst stnDetail) {
		ht.update(stnDetail);
	}

	@Override
	public Mold_Mst getExistMoldDetailForEdit(Long mldId) {
		List<Mold_Mst> cm=ht.find("from Mold_Mst c where c.mm_id=?",mldId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveMoldDetailEdit(Mold_Mst mldDetail) {
		ht.update(mldDetail);
	}

	@Override
	public Raw_Mtr_Mst getExistRawDetailForEdit(Long rawId) {
		List<Raw_Mtr_Mst> cm=ht.find("from Raw_Mtr_Mst c where c.rm_mst_id=?",rawId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public void saveRawMaterialDetailEdit(Raw_Mtr_Mst rawDetail) {
		ht.update(rawDetail);
	}

	@Override
	public Dgn_Mst getExistDgnDetailForEdit(Long dgnId) {
		List<Dgn_Mst> cm=ht.find("from Dgn_Mst c where c.dm_id=?",dgnId);
		if(cm!=null&&!cm.isEmpty())return cm.get(0);
		return null;
	}

	@Override
	public List<Object[]> getExistDgnStnWithDesignId(Long dgnId) {
		List<Object[]> sql=session.createSQLQuery("select s.sm_stn_cd,s.sm_stn_nm,s.sm_stn_shpe,s.sm_stn_clr,s.sm_stn_sz,ds.dsm_stn_pcs,ds.dsm_id,s.sm_id from "
				+ "stn_mst s left join dgn_stn_mst ds on s.sm_stn_cd=ds.dsm_stn_cd and sm_cmy_cd=dsm_cmy_cd where ds.dsm_dgn_no=(select dm_pdt_cd from dgn_mst dm where dm.dm_id="+dgnId+") and dsm_cmy_cd='"+getCmy()+"' and "
						+ "s.sm_stn_sts=1 and ds.dsm_dgn_sts=1 order by ds.dsm_id desc").list();
		return sql;
	}

	@Override
	public List<Object[]> getExistDgnBomWithDesignId(Long dgnId) {
		List<Object[]> sql=session.createSQLQuery("select b.bm_bom_cd,b.bm_bom_nm,b.bm_bom_wip_typ,b.bm_bom_sz,b.bm_bom_typ,db.dbm_bom_pcs,db.dbm_id,b.bm_id from "
				+ "bom_mst b left join dgn_bom_mst db on b.bm_bom_cd=db.dbm_bom_cd and bm_cmy_cd=dbm_cmy_cd where db.dbm_dgn_no=(select dm_pdt_cd from dgn_mst dm where dm.dm_id="+dgnId+") and dbm_cmy_cd='"+getCmy()+"' and "
						+ " b.bm_bom_sts=1 and db.dbm_dgn_sts=1 order by db.dbm_id desc").list();
		return sql;
	}

	@Override
	public List<Object[]> getExistDgnMoldWithDesignId(Long dgnId) {
		List<Object[]> sql=session.createSQLQuery("select m.mm_mold_no,m.mm_mold_dscr,dm.dmm_mold_pcs,dm.dmm_id,m.mm_id from "
				+ "mold_mst m left join dgn_mold_mst dm on m.mm_mold_no=dm.dmm_mold_no and dmm_cmy_cd=mm_cmy_cd where dmm_cmy_cd='"+getCmy()+"' and dm.dmm_dgn_no=(select dm_pdt_cd from dgn_mst dm where dm.dm_id="+dgnId+") and "
						+ " dmm_cmy_cd='"+getCmy()+"' and m.mm_mold_sts=1 and dm.dmm_dgn_sts=1 order by dm.dmm_id desc").list();
		return sql;
	}

	@Override
	public Object getExistDgnCstWithDesignId(Long dgnId) {
		List<Object[]> sql=session.createSQLQuery("select dcm.cm_lbr_chg,dcm.cm_stn_chg,dcm.cm_dvpt_chg,dcm.cm_id from "
				+ " dgn_cst_mst dcm where dcm.cm_dgn_no=(select dm_pdt_cd from dgn_mst dm where dm.dm_id="+dgnId+") and dcm.cm_cst_sts=1 order by dcm.cm_id").list();
		
		return (sql!=null&&!sql.isEmpty())?sql.get(0):null;
	}

	@Override
	public void delExistNonGoldfromDgnAjaxImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update dgn_stn_mst set dsm_dgn_sts=0 where dsm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void delExistBomfromDgnAjaxImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update dgn_bom_mst set dbm_dgn_sts=0 where dbm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void delExistMoldfromDgnAjaxImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update dgn_mold_mst set dmm_dgn_sts=0 where dmm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void delExistCastfromDgnAjaxImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update dgn_cst_mst set cm_cst_sts=0 where cm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public Dgn_Stn_Mst checkStoneWithDgnNoForAddAjaxImpl(String stnId, String degId) {
		List<Dgn_Stn_Mst> stn=ht.find("from Dgn_Stn_Mst d where d.dsm_stn_cd=? and d.dsm_dgn_no=? and d.dsm_dgn_sts=1",stnId,degId);
		return stn!=null&&!stn.isEmpty()?stn.get(0):null;
	}
	
	@Override
	public Dgn_Bom_Mst checkBomDetailForAddDesignAjaxImpl(String bomId,String degId) {
		List<Dgn_Bom_Mst> stn=ht.find("from Dgn_Bom_Mst d where d.dbm_bom_cd=? and d.dbm_dgn_no=? and d.dbm_dgn_sts=1",bomId,degId);
		return stn!=null&&!stn.isEmpty()?stn.get(0):null;
	}

	@Override
	public Dgn_Mold_Mst checkMoldDetailForAddDesignAjaxImpl(String moldId,String degId) {
		List<Dgn_Mold_Mst> stn=ht.find("from Dgn_Mold_Mst d where d.dmm_mold_no=? and d.dmm_dgn_no=? and d.dmm_dgn_sts=1",moldId,degId);
		return stn!=null&&!stn.isEmpty()?stn.get(0):null;
	}

	@Override
	public void saveDesignMstDetailEdit(Dgn_Mst clicks) {
	ht.update(clicks);
	}

	@Override
	public void setStatusDisableInDgnCstMstForDgnID(String dm_dgn_no) {
		SQLQuery sql=session.createSQLQuery("update dgn_cst_mst set cm_cst_sts=0 where cm_dgn_no='"+dm_dgn_no+"'");
		sql.executeUpdate();
	}

	@Override
	public void updateQtyInDgnStnExistAjaxImpl(Long id,String qty) {
		SQLQuery sql=session.createSQLQuery("update dgn_stn_mst set dsm_stn_pcs="+qty+" where dsm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void updateQtyInDgnBomExistAjaxImpl(Long id, String qty) {
		SQLQuery sql=session.createSQLQuery("update dgn_bom_mst set dbm_bom_pcs="+qty+" where dbm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public void updateQtyInDgnMoldExistAjaxImpl(Long id, String qty) {
		SQLQuery sql=session.createSQLQuery("update dgn_mold_mst set dmm_mold_pcs="+qty+" where dmm_id="+id+"");
		sql.executeUpdate();
	}

	@Override
	public String takeAutGenIdForComyCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((cm_cmy_cd)+1) from cmy_mst c where Isnumeric(c.cm_cmy_cd)=1 and c.cm_cmy_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	
	}

	@Override
	public String chkThisCmyCdAlrdyPrsntOrNotImpl(String id) {
		List<Cmy_Mst> sts=ht.find("from Cmy_Mst c where c.cm_cmy_cd=? and c.cm_cmy_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForDptCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((dm_dpt_cd)+1) from dpt_mst c where Isnumeric(c.dm_dpt_cd)=1  and c.dm_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisDptCdAlrdyPrsntOrNotImpl(String id) {
		List<Dpt_Mst> sts=ht.find("from Dpt_Mst c where c.dm_dpt_cd=? and c.dm_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForBomCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((bm_bom_cd)+1) from bom_mst c where Isnumeric(c.bm_bom_cd)=1 and c.bm_bom_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisBomCdAlrdyPrsntOrNotImpl(String id) {
		List<Bom_Mst> sts=ht.find("from Bom_Mst c where c.bm_bom_cd=? and c.bm_bom_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForUomCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((um_uom_cd)+1) from uom_mst c where Isnumeric(c.um_uom_cd)=1 and c.um_uom_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisUomCdAlrdyPrsntOrNotImpl(String id) {
		List<Uom_Mst> sts=ht.find("from Uom_Mst c where c.um_uom_cd=? and c.um_uom_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForStrCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((sm_str_cd)+1) from str_mst c where Isnumeric(c.sm_str_cd)=1 and c.sm_str_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisStrCdAlrdyPrsntOrNotImpl(String id) {
		List<Str_Mst> sts=ht.find("from Str_Mst c where c.sm_str_cd=? and c.sm_str_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForPrcsCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((pm_prcs_cd)+1) from prcs_mst c where Isnumeric(c.pm_prcs_cd)=1 and c.pm_prcs_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisPrcsCdAlrdyPrsntOrNotImpl(String id) {
		List<Prcs_Mst> sts=ht.find("from Prcs_Mst c where c.pm_prcs_cd=? and c.pm_prcs_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForVnCtCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((vcm_vnct_cd)+1) from vn_ct_mst c where Isnumeric(c.vcm_vnct_cd)=1 and c.vcm_vnct_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+11110000;
		}
		else{
			return ""+11110000;
		}
		}
		catch(Exception e){
			return ""+11110000;
		}
	}

	@Override
	public String chkThisVnCtCdAlrdyPrsntOrNotImpl(String id) {
		List<Vn_Ct_Mst> sts=ht.find("from Vn_Ct_Mst c where c.vcm_vnct_cd=? and c.vcm_vnct_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForStnCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((sm_stn_cd)+1) from stn_mst c where Isnumeric(c.sm_stn_cd)=1 and c.sm_stn_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisStnCdAlrdyPrsntOrNotImpl(String id) {
		List<Stn_Mst> sts=ht.find("from Stn_Mst c where c.sm_stn_cd=? and c.sm_stn_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForMoldCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((mm_mold_no)+1) from mold_mst c where Isnumeric(c.mm_mold_no)=1 and c.mm_mold_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisMoldCdAlrdyPrsntOrNotImpl(String id) {
		List<Mold_Mst> sts=ht.find("from Mold_Mst c where c.mm_mold_no=? and c.mm_mold_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForrwMtrlCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((rm_mst_pdt_id)+1) from raw_mtr_mst c where Isnumeric(c.rm_mst_pdt_id)=1 and c.rm_mst_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisRwMtrCdAlrdyPrsntOrNotImpl(String id) {
		List<Raw_Mtr_Mst> sts=ht.find("from Raw_Mtr_Mst c where c.rm_mst_pdt_id=? and c.rm_mst_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String takeAutGenIdForDgnPdtCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((dm_pdt_cd)+1) from dgn_mst c where Isnumeric(c.dm_pdt_cd)=1 and c.dm_dgn_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String chkThisDgnPdtCdAlrdyPrsntOrNotImpl(String id) {
		List<Dgn_Mst> sts=ht.find("from Dgn_Mst c where c.dm_pdt_cd=? and dm_cmy_cd='"+getCmy()+"' and c.dm_dgn_sts=1",id);
		return (sts!=null&&!sts.isEmpty())?"dont":"allow";
	}

	@Override
	public String checkEmailandPasswordGIMLoginImp(String userName, String password) {
		String user = "";
		List<Emp_Mst> users = ht.find("FROM Emp_Mst e WHERE (e.em_emp_eml = ? or e.em_emp_login_nm =? ) and e.em_emp_login_pwd=? and (em_emp_typ='Admin' or em_emp_typ='Employee')", userName,userName, password);
		if (users != null && !users.isEmpty() && users.get(0).isEm_emp_sts() == false) {
			return "notActive";
		} else if (users != null && !users.isEmpty() && users.get(0).isEm_emp_sts() == true) {
			return "success";
		} else {
			return user;
		}
	}

	@Override
	public Emp_Mst getEmplyeeDetailByEmail(String usEml) {
	List<Emp_Mst> emp=ht.find("from Emp_Mst e where e.em_emp_eml=? or e.em_emp_login_nm=?",usEml,usEml);
	return (emp!=null&&!emp.isEmpty())?emp.get(0):null;
	}

	@Override
	public Dpt_Mst getDepCdFromDepNmImp(String dm_dgn_dpt) {
		List<Dpt_Mst> dpt=ht.find("from Dpt_Mst d where dm_cmy_cd='"+getCmy()+"' and d.dm_dpt_nm=? and d.dm_sts=1",dm_dgn_dpt);
		return dpt!=null&&!dpt.isEmpty()?dpt.get(0):null;
	}

	@Override
	public void saveImportedDesignDetailList(List<Dgn_Mst> dgMst) {
		ht.saveOrUpdateAll(dgMst);
	}
public Long countStnDub=(long)0;
	@Override
	public Stn_Mst getStoneCdByStoneNameImp(String sm_stn_nm,String shpe,String clr,String siz) {
		List<Stn_Mst> dpt=ht.find("from Stn_Mst a where a.sm_stn_nm=? and a.sm_stn_shpe=? and a.sm_stn_clr=? and a.sm_stn_sz=? and sm_cmy_cd='"+getCmy()+"' ",sm_stn_nm,shpe,clr,siz);
		Stn_Mst stn=new Stn_Mst();
		if(dpt!=null&&!dpt.isEmpty()){
			stn=dpt.get(0);
		}
		else{
			stn.setSm_stn_cd(""+Math.abs(Objects.hashCode(sm_stn_nm+shpe+clr+siz+getCmy())));
		}
		countStnDub++;
		return stn;
	}
public Long countBomDub=(long)0;
	@Override
	public Bom_Mst getBomCdByBomNameImp(String bm_bom_nm,String bmsize,String bmtyp,String bomwip) {
		List<Bom_Mst> dpt=ht.find("from Bom_Mst d where d.bm_bom_nm=? and d.bm_bom_sz=? and d.bm_bom_typ=? and d.bm_bom_wip_typ=? and bm_cmy_cd='"+getCmy()+"' ",bm_bom_nm,bmsize,bmtyp,bomwip);
		Bom_Mst stn=new Bom_Mst();
		if(dpt!=null&&!dpt.isEmpty()){
			stn=dpt.get(0);
		}
		else{
			stn.setBm_bom_cd(""+Math.abs(Objects.hashCode(bm_bom_nm+bmsize+bmtyp+bomwip+getCmy())));
		}
		countBomDub++;
		return stn;
	}

	@Override
	public List<Cmy_Mst> getExistCompanyDetailByEmpId(String em_emp_id) {
	List<Cmy_Mst> ext=ht.find("from Cmy_Mst c where cm_cmy_cd='"+getCmy()+"' and c.cm_cmy_sts=1 order by c.cm_id desc");
	return ext;
	}

	@Override
	public List<Str_Mst> getExistStroeDetailByEmpId(String em_emp_id) {
		List<Str_Mst> ext=ht.find("from Str_Mst c where sm_cmy_cd='"+getCmy()+"' and c.sm_str_sts=1 order by c.sm_id desc");
		return ext;
	}

	@Override
	public List<Vn_Ct_Mst> getExistVnCtDetailByEmpId(String em_emp_id) {
		List<Vn_Ct_Mst> ext=ht.find("from Vn_Ct_Mst c where vcm_cmy_cd='"+getCmy()+"' and c.vcm_vnct_sts=1 and (c.vcm_vnct_typ=? or c.vcm_vnct_typ=?) order by c.vcm_id desc","Both","Customer");
		return ext;
	}

	@Override
	public Ord_Hdr checkOrderNoIsPrsntOrNot(String oM) {
		List<Ord_Hdr> ord=ht.find("from Ord_Hdr o where o.oh_ord_no=? and o.oh_ord_sts=1",oM);
		return ord!=null&&!ord.isEmpty()?ord.get(0):null;
	}

	@Override
	public void saveImportOrderDetail(List<Ord_Hdr_Dtl> ordMst) {
	ht.saveOrUpdateAll(ordMst);
	}

	@Override
	public List<Object[]> getAllDesignProductSrchImpl(String id) {
		try{
			List<Object[]> srch=session.createSQLQuery("select top 50 dm_pdt_cd,dm_dgn_no,dm_pdt_nm from dgn_mst d where (d.dm_pdt_cd like '%"+id+"%' or d.dm_pdt_nm like '%"+id+"%' or d.dm_dgn_no like '%"+id+"%') and dm_cmy_cd='"+getCmy()+"' and d.dm_dgn_sts=1").list();
			return srch;
			}catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}

	@Override
	public String takeAutGenIdForOrderCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((oh_ord_no)+1) from Ord_Hdr c where Isnumeric(c.oh_ord_no)=1  and c.oh_ord_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public Object getDgnProDetailForAddOrderAjaxImpl(String pdtCd) {
	List<Object[]> sql=session.createSQLQuery("select d.dm_pdt_cd,d.dm_dgn_std_wt,d.dm_dgn_carat from dgn_mst d where d.dm_pdt_cd='"+pdtCd+"' and dm_cmy_cd='"+getCmy()+"'").list();
		return (sql!=null&&!sql.isEmpty())?sql.get(0):null;
	}

	@Override
	public void saveImportOrderHdrOnlyDetail(List<Ord_Hdr> ordHdrMst) {
		ht.saveOrUpdateAll(ordHdrMst);
	}

	@Override
	public List<Object[]> getExistOrderDetail(String empId) {
	List<Object[]> sql=session.createSQLQuery("select o.oh_ord_no,max(c.vcm_vnct_nm) as asas,max(od.ohd_ord_bch_no)as sd,cast(max(o.oh_no_itm) as decimal) as it,cast(max(o.oh_tot_qty) as decimal(10,0)) as dgsdg,cast (max(o.oh_tot_std_wgt) as decimal(10,3))as bfg,max(od.ohd_ord_trgt_dt)as fgfh,cast(max(o.oh_id) as decimal) as oh_id,max(o.oh_iss_auth) as auth,max(cm_cmy_nm) as cmynm,isnull(max(o.oh_ord_dt),max(o.oh_ord_crt_dt)) as orddate,max(o.oh_ord_crt_dt) as crddate,max(o.oh_ord_updt_dt) as updtdate,max(od.ohd_ord_jn_no) as jno ,"
			+"cast ((STUFF(( SELECT ',' + ohd_ord_carat FROM ord_hdr_dtl s WHERE oh_ord_no = s.ohd_ord_no group by ohd_ord_carat FOR XML PATH('') ), 1, 1, '' )) as varchar) carat "
			+ " from ord_hdr o left join ord_hdr_dtl od on o.oh_ord_no=od.ohd_ord_no left join cmy_mst on cm_cmy_cd=oh_cmy_cd left join vn_ct_mst c on  od.ohd_cst_cd=c.vcm_vnct_cd where oh_cmy_cd='"+getCmy()+"' and (c.vcm_vnct_sts=1 or c.vcm_vnct_sts is null)  and o.oh_ord_sts=1 and ohd_ord_sts=1 group by o.oh_ord_no order by max(o.oh_id) desc").list();
		return sql;
	}

	@Override
	public Ord_Hdr_Dtl eckOrderNoWihtPdtCdIsPrsentOrNotImpl(String pdtCd, String ordNo) {
		List<Ord_Hdr_Dtl> ord=null;
		try{
		ord=ht.find("from Ord_Hdr_Dtl o where o.ohd_ord_no=? and o.ohd_ord_pdt_cd=? and o.ohd_ord_sts=1",ordNo,pdtCd);
		}catch(Exception e){
			e.printStackTrace();
		}
		return ord!=null&&!ord.isEmpty()?ord.get(0):null;
	}

	@Override
	public void delOrderHdrRecAjaxImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update ord_hdr set oh_ord_sts=0 where oh_id="+id+" update ord_hdr_dtl set ohd_ord_sts=0 where ohd_ord_no=(select oh_ord_no from ord_hdr o where o.oh_id="+id+")");
		sql.executeUpdate();
	}

	@Override
	public Object getExistOrderHdrDetailForEdit(Long ohdId) {
		List<Object[]> exst=session.createSQLQuery("select o.ohd_cmy_cd,o.ohd_str_cd,o.ohd_cst_cd,o.ohd_ord_typ,o.ohd_ord_no,o.ohd_ord_dt,o.ohd_id from "
				+ " ord_hdr_dtl o where o.ohd_ord_no=(select oh_ord_no from ord_hdr oh where oh.oh_id="+ohdId+") and o.ohd_ord_sts=1").list();
		return exst!=null&&!exst.isEmpty()?exst.get(0):null;
	}

	@Override
	public Object getExistOrderHdrTableForTakingSum(Long ohdId) {
		List<Object[]> exst=session.createSQLQuery("select o.oh_no_itm,o.oh_tot_qty,o.oh_tot_std_wgt from ord_hdr o where o.oh_id="+ohdId+" and o.oh_ord_sts=1").list();
		return exst!=null&&!exst.isEmpty()?exst.get(0):null;
	}

	@Override
	public List<Object[]> getAllOrderHderDetalsFor(Long ohdId) {
		List<Object[]> exst=session.createSQLQuery("select o.ohd_ord_no,o.ohd_ord_trgt_dt,o.ohd_ord_typ,o.ohd_ord_bch_no,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_jn_no,o.ohd_ord_jn_dt,o.ohd_ord_std_wt,o.ohd_ord_rmk,o.ohd_id,o.ohd_iss_auth,(select top 1 dm_dgn_img from dgn_mst where dm_pdt_cd=ohd_ord_pdt_cd and ohd_cmy_cd=dm_cmy_cd and dm_dgn_sts=1) as img,o.ohd_ord_carat from "
				+ " ord_hdr_dtl o where o.ohd_ord_no=(select oh_ord_no from ord_hdr oh where oh.oh_id="+ohdId+") and o.ohd_ord_sts=1").list();
		return exst;
	}

	@Override
	public void removeExistOrderMultilpeImpl(String join, String noOf, String qty, String stdSum,String ordNo) {
		SQLQuery sql=session.createSQLQuery("update ord_hdr_dtl set ohd_ord_sts=0 where ohd_id in ("+join+") update ord_hdr set oh_no_itm="+noOf+",oh_tot_qty="+qty+",oh_tot_std_wgt="+stdSum+" where oh_ord_no='"+ordNo+"'");
		sql.executeUpdate();
	}

	@Override
	public void updateOrHdrAndOrdHdrDetailBothImpl(String rowCnt, String sumOfStd, String sumQty, String ordNo,String auth) {
		if(auth.equalsIgnoreCase("1")){
		SQLQuery sql=session.createSQLQuery("update ord_hdr set oh_no_itm="+rowCnt+",oh_tot_qty="+sumQty+",oh_tot_std_wgt="+sumOfStd+",oh_iss_auth=1 where oh_ord_no='"+ordNo+"'");
		sql.executeUpdate();
		}
		else{
			SQLQuery sql=session.createSQLQuery("update ord_hdr set oh_no_itm="+rowCnt+",oh_tot_qty="+sumQty+",oh_tot_std_wgt="+sumOfStd+",oh_iss_auth=0 where oh_ord_no='"+ordNo+"'");
			sql.executeUpdate();	
		}
	}

	@Override
	public String takeAutGenIdForWaxDocNo() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((wh_doc_no)+1) from wax_hdr c where Isnumeric(c.wh_doc_no)=1 and c.wh_wax_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public List<Object[]> getNeededProductAndOrderDetailForWax(String em_emp_id) {
		List<Object[]> exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptName,ohd_iss_ruse,d.dm_dgn_carat from ord_hdr_dtl o left join "
				+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where ohd_cmy_cd='"+getCmy()+"' and dm_dgn_sts=1 and 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_ord_sts=1 and o.ohd_wax_sts='Pending' and o.ohd_iss_auth=1 order by cast(ohd_ord_trgt_dt as date) asc").list();
		return exst;
	}

	@Override
	public List<Emp_Mst> getExistWorkerDetailByEmpId(String em_emp_id) {
		List<Emp_Mst> id=ht.find("from Emp_Mst e where em_cmy_cd='"+getCmy()+"' and e.em_emp_sts=1 and e.em_emp_typ=? order by em_id desc","Worker");
		return id;
	}

	@Override
	public List<Object[]> getNeededOrdNoDetailForWax(String em_emp_id) {
		List<Object[]> bomDtls=new ArrayList<Object[]>();
		List<Object[]> exstBomHse=session.createSQLQuery("select o.ohd_ord_no,dm_dgn_ctgy,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,dm_dgn_typ,ohd_ord_trgt_dt,dm_dgn_dpt from ord_hdr_dtl o left join dgn_mst on o.ohd_ord_pdt_cd=dm_pdt_cd and o.ohd_cmy_cd=dm_cmy_cd "
				+ " where o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and (ohd_iss_bom_mk_prcs='Pending' or ohd_iss_bom_mk_prcs is null) and 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and (dm_dgn_sts=1 or dm_dgn_sts is null) order by cast(ohd_ord_trgt_dt as date) asc").list();
		List<Object[]> exstBomJob=session.createSQLQuery("select o.ohd_ord_no,dm_dgn_ctgy,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,dm_dgn_typ,ohd_ord_trgt_dt,dm_dgn_dpt from ord_hdr_dtl o left join dgn_mst on ohd_ord_pdt_cd=dm_pdt_cd and o.ohd_cmy_cd=dm_cmy_cd "
				+ " where o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and (o.ohd_job_ord_prcs='Pending' or o.ohd_job_ord_prcs is null) and ohd_is_alw_job_ord=1 and 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and (dm_dgn_sts=1 or dm_dgn_sts is null) order by cast(ohd_ord_trgt_dt as date) asc").list();
		
		List<Object[]> exstjbCrd=session.createSQLQuery("select o.ohd_ord_no,dm_dgn_ctgy,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,dm_dgn_typ,ohd_ord_trgt_dt,dm_dgn_dpt from ord_hdr_dtl o left join dgn_mst on o.ohd_ord_pdt_cd=dm_pdt_cd and o.ohd_cmy_cd=dm_cmy_cd "
				+ " where o.ohd_ord_sts=1 and (o.ohd_job_ord_prcs='Pending' or ohd_iss_bom_mk_prcs='Pending') and 0=(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_iss_auth=1 and (dm_dgn_sts=1 or dm_dgn_sts is null) order by cast(ohd_ord_trgt_dt as date) asc").list();
		if(exstBomHse!=null&&!exstBomHse.isEmpty())bomDtls.addAll(exstBomHse);
		if(exstjbCrd!=null&&!exstjbCrd.isEmpty())bomDtls.addAll(exstjbCrd);
		if(exstBomJob!=null&&!exstBomJob.isEmpty())bomDtls.addAll(exstBomJob);
		return bomDtls;
	}
	@Override
	public List<Object[]> performSearchBasedOnTrgtAndOdrNoImpl(String trgtDt, String odNo,String dpt,String empId,String ordType,String cmycd,String ctgy,String reuse,String carat) {
		List<Object[]> exst=null;
		if(ordType.equalsIgnoreCase(""))ordType="select distinct ohd_ord_typ from ord_hdr_dtl";
		if(cmycd.equalsIgnoreCase(""))cmycd="select cm_cmy_cd from cmy_mst where cm_cmy_sts=1";
		if(!ctgy.equalsIgnoreCase(""))ctgy=" and dm_dgn_ctgy in ("+ctgy+")";
		if(!carat.equalsIgnoreCase(""))carat=" and dm_dgn_carat in ("+carat+")";
	if(StringUtils.isNotBlank(trgtDt)&&!odNo.equalsIgnoreCase("")){
		if(!dpt.equalsIgnoreCase("")){
		exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,ohd_iss_ruse,d.dm_dgn_carat  from ord_hdr_dtl o left join "
				+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and o.ohd_ord_sts=1 and  0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_wax_sts='Pending' and o.ohd_iss_auth=1 and o.ohd_ord_typ in("+ordType+") and cast(o.ohd_ord_trgt_dt as date)<=cast('"+trgtDt+"' as date) "+ctgy+" "+reuse+" "+carat+" and o.ohd_ord_jn_no in ("+odNo+") and d.dm_dgn_dpt in ("+dpt+") and o.ohd_cmy_cd in ("+cmycd+") order by cast(ohd_ord_trgt_dt as date) asc").list();
		}
		else{
			exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,ohd_iss_ruse,d.dm_dgn_carat  from ord_hdr_dtl o left join "
					+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and o.ohd_ord_sts=1 and  0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_wax_sts='Pending' and o.ohd_iss_auth=1 and o.ohd_ord_typ in("+ordType+") and cast(o.ohd_ord_trgt_dt as date)<=cast('"+trgtDt+"' as date) "+ctgy+" "+reuse+" "+carat+" and o.ohd_ord_jn_no in ("+odNo+") and o.ohd_cmy_cd in ("+cmycd+") order by cast(ohd_ord_trgt_dt as date) asc").list();
		}
		}
	else if(StringUtils.isNotBlank(trgtDt)){
		if(!dpt.equalsIgnoreCase("")){
		exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,ohd_iss_ruse,d.dm_dgn_carat  from ord_hdr_dtl o left join "
				+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and o.ohd_ord_sts=1 and  0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_wax_sts='Pending' and o.ohd_iss_auth=1 and o.ohd_ord_typ in("+ordType+") and cast(o.ohd_ord_trgt_dt as date)<=cast('"+trgtDt+"' as date) "+ctgy+" "+reuse+" "+carat+" and d.dm_dgn_dpt in ("+dpt+") and o.ohd_cmy_cd in ("+cmycd+") order by cast(ohd_ord_trgt_dt as date) asc").list();
		}
		else{
			exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,ohd_iss_ruse,d.dm_dgn_carat  from ord_hdr_dtl o left join "
					+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and o.ohd_ord_sts=1 and  0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_wax_sts='Pending' and o.ohd_ord_typ in("+ordType+") and o.ohd_iss_auth=1 and cast(o.ohd_ord_trgt_dt as date)<=cast('"+trgtDt+"' as date) "+ctgy+" "+reuse+" "+carat+" and o.ohd_cmy_cd in ("+cmycd+") order by cast(ohd_ord_trgt_dt as date) asc").list();
		}
		}
	else{
		if(!dpt.equalsIgnoreCase("")){
			exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,ohd_iss_ruse,d.dm_dgn_carat  from ord_hdr_dtl o left join "
					+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and o.ohd_ord_sts=1 and  0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_wax_sts='Pending' and o.ohd_ord_typ in("+ordType+") and o.ohd_iss_auth=1 and o.ohd_ord_jn_no in ("+odNo+") "+ctgy+" "+reuse+" "+carat+" and d.dm_dgn_dpt in ("+dpt+") and o.ohd_cmy_cd in ("+cmycd+") order by cast(ohd_ord_trgt_dt as date) asc").list();
		}else{
		exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,ohd_iss_ruse,d.dm_dgn_carat  from ord_hdr_dtl o left join "
				+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and o.ohd_ord_sts=1 and  0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_wax_sts='Pending' and o.ohd_ord_typ in("+ordType+") and o.ohd_iss_auth=1 and o.ohd_ord_jn_no in ("+odNo+") "+ctgy+" "+reuse+" "+carat+" and o.ohd_cmy_cd in ("+cmycd+") order by cast(ohd_ord_trgt_dt as date) asc").list();
	}
	}
		return exst;
	}

	@Override
	public void saveWaxHdrDataOnlyImpl(Wax_Hdr wxHdr) {
		ht.save(wxHdr);
	}

	@Override
	public void saveWaxHdrDetailImpl(List<Wax_Hdr_Dtl> wxHdtls) {
		ht.saveOrUpdateAll(wxHdtls);
	}

	@Override
	public void updateOrderHdrDetailRecFromPendingWaxTo(String join,String wrkcd) {
	SQLQuery sql=session.createSQLQuery("update ord_hdr_dtl set ohd_wax_sts='Sent',ohd_crnt_wrk_typ='ComWrker',ohd_crnt_wrk='"+wrkcd+"',ohd_crnt_prcs='Waxing' where ohd_id in("+join+")");
	sql.executeUpdate();
	}

	@Override
	public List<Object[]> getAllExistWaxDetailForUser(String em_emp_id) {
		/*List<Object[]> sql=session.createSQLQuery("  select w.wh_doc_no,w.wh_no_of_odr,w.wh_tot_qty,w.wh_tot_std_wgt,w.wh_no_of_pdt,w.wh_id,w.wh_iss_auth,(select top 1 whd_pdt_cd from wax_hdr_dtl where whd_doc_no=w.wh_doc_no) as whd_pdt_cd,em_emp_nm,"
				+ " (select top 1 cm_cmy_nm from cmy_mst left join wax_hdr_dtl on cm_cmy_cd=whd_cmy_cd where whd_doc_no=wh_doc_no and whd_wax_sts=1 ) as cmy,wh_iss_job_cd,isnull(wh_doc_dt,wh_crt_dt),wh_crt_dt,wh_updt_dt,(select top 1 dm_dpt_nm from wax_hdr_dtl left join dpt_mst on whd_dpt_cd=dm_dpt_cd where whd_doc_no=w.wh_doc_no) as dept from wax_hdr w "
				+ "left join emp_mst on w.wh_wrkr_cd=em_emp_id where wh_cmy_cd='"+getCmy()+"' and wh_wax_sts=1 and (em_emp_sts=1 or em_emp_sts is null) order by w.wh_id desc").list();
		*/
		List<Object[]> sql=session.createSQLQuery("  select w.wh_doc_no,w.wh_no_of_odr,w.wh_tot_qty,w.wh_tot_std_wgt,w.wh_no_of_pdt,w.wh_id,w.wh_iss_auth,(select top 1 whd_pdt_cd from wax_hdr_dtl where whd_doc_no=w.wh_doc_no) as whd_pdt_cd,em_emp_nm,"
				+ " (select top 1 cm_cmy_nm from cmy_mst left join wax_hdr_dtl on cm_cmy_cd=whd_cmy_cd where whd_doc_no=wh_doc_no and whd_wax_sts=1 ) as cmy,wh_iss_job_cd,isnull(wh_doc_dt,wh_crt_dt),wh_crt_dt,wh_updt_dt,(select top 1 dm_dpt_nm from wax_hdr_dtl left join dpt_mst on whd_dpt_cd=dm_dpt_cd where whd_doc_no=w.wh_doc_no) as dept,(select top 1 cast ((STUFF(( SELECT ',' + ohd_ord_carat from ord_hdr_dtl left join wax_hdr_dtl on ohd_cmy_cd=whd_cmy_cd  where ohd_ord_pdt_cd=whd_pdt_cd and whd_doc_no=w.wh_doc_no group by ohd_ord_carat FOR XML PATH('') ),1, 1, '' )) as varchar)) as prty from wax_hdr w "
				+ "left join emp_mst on w.wh_wrkr_cd=em_emp_id where wh_cmy_cd='"+getCmy()+"' and wh_wax_sts=1 and (em_emp_sts=1 or em_emp_sts is null) order by w.wh_id desc").list();
		
		return sql;
	}

	@Override
	public List<Object[]> performSearchBasedOnDptCodeImpl(String dptC, String em_emp_id,String orderId,String cmycd,String ctgy,String reuse,String carat) {
		if(orderId.equalsIgnoreCase(""))orderId="select distinct ohd_ord_typ from ord_hdr_dtl";
		if(dptC.equalsIgnoreCase(""))dptC="select distinct dm_dgn_dpt from dgn_mst where dm_dgn_sts=1";
		if(cmycd.equalsIgnoreCase(""))cmycd="select distinct cm_cmy_cd from cmy_mst where cm_cmy_sts=1";
		if(!ctgy.equalsIgnoreCase(""))ctgy=" and dm_dgn_ctgy in ("+ctgy+")";
		if(!carat.equalsIgnoreCase(""))carat=" and dm_dgn_carat in("+carat+")";
		List<Object[]>exst=session.createSQLQuery("select d.dm_dgn_sz,d.dm_dgn_ctgy,o.ohd_ord_trgt_dt,o.ohd_ord_pdt_cd,o.ohd_ord_qty,o.ohd_ord_std_wt,o.ohd_ord_no,o.ohd_id,d.dm_dgn_dpt,o.ohd_ord_typ,o.ohd_ord_jn_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnmae,ohd_iss_ruse,d.dm_dgn_carat  from ord_hdr_dtl o left join "
				+ " dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and o.ohd_ord_sts=1 and 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and o.ohd_wax_sts='Pending' and o.ohd_ord_typ in ("+orderId+") and o.ohd_iss_auth=1 and d.dm_dgn_dpt in ("+dptC+") "+ctgy+" "+carat+" "+reuse+" and o.ohd_cmy_cd in ("+cmycd+") order by cast(ohd_ord_trgt_dt as date) asc").list();
	return exst;
	}

	@Override
	public List<Object[]> editForWaxHdrDetailById(Long waxId) {
		List<Object[]>exst=session.createSQLQuery("select w.whd_ord_no,w.whd_trgt_dt,w.whd_pdt_cd,w.whd_dpt_cd,w.whd_pdt_qty,d.dm_dgn_std_wt,d.dm_dgn_sz,d.dm_dgn_ctgy,w.whd_id,w.whd_iss_auth,w.whd_ord_typ,(select top 1 ohd_ord_jn_no from ord_hdr_dtl where ohd_ord_no=w.whd_ord_no and ohd_ord_pdt_cd=whd_pdt_cd) as joNo,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=whd_dpt_cd and dm_sts=1) as dpt,whd_iss_ruse_ord from wax_hdr_dtl w left join "
				+ " dgn_mst d on w.whd_pdt_cd=d.dm_pdt_cd and whd_cmy_cd=d.dm_cmy_cd where dm_dgn_sts=1 and w.whd_wax_sts=1 and w.whd_doc_no=(select wo.wh_doc_no from wax_hdr wo where wo.wh_id="+waxId+")").list();
	return exst;
	}

	@Override
	public List<Object[]> getNeededOrdNoDetailForWaxEdit(Long waxId) {
		List<Object[]>exst=session.createSQLQuery("select w.whd_ord_no from wax_hdr_dtl w where w.whd_doc_no=(select wo.wh_doc_no from wax_hdr wo where wo.wh_id="+waxId+") and w.whd_wax_sts=1 group by w.whd_ord_no").list();
	return exst;
	}

	@Override
	public List<Object[]> getNeededDeptDetailForWaxEdit(Long waxId) {
		List<Object[]>exst=session.createSQLQuery("select w.whd_dpt_cd from wax_hdr_dtl w  where w.whd_doc_no=(select wo.wh_doc_no from wax_hdr wo where wo.wh_id="+waxId+") and w.whd_wax_sts=1 group by w.whd_dpt_cd").list();
		return exst;
	}

	@Override
	public Object editWaxHdrRecById(Long waxId) {
		List<Object[]>exst=session.createSQLQuery("select w.wh_doc_no,max(w.wh_crt_dt) as dt,max(w.wh_tot_qty) as qty,max(w.wh_no_of_odr) as noO,max(w.wh_tot_std_wgt) as std,max(w.wh_no_of_pdt) as pdt,max(wd.whd_cmy_cd) as cmy,max(wd.whd_str_cd) as str,max(wd.whd_wrkr_cd) as wrk,max(w.wh_id) as priId,max(w.wh_crt_id) as crtId,max(w.wh_iss_auth) as auth,max(isnull(wh_doc_dt,wh_crt_dt)) as date from wax_hdr w left join wax_hdr_dtl wd on w.wh_doc_no=wd.whd_doc_no where w.wh_id="+waxId+" and wh_wax_sts=1 and wd.whd_wax_sts=1 group by w.wh_doc_no").list();
		return exst!=null&&!exst.isEmpty()?exst.get(0):null;
	}

	@Override
	public void delWaxRelatedRecFromDataBase(Long id, String docNo) {
		SQLQuery sql=session.createSQLQuery("update wax_hdr set wh_wax_sts=0 where wh_id="+id+" update wax_hdr_dtl set whd_wax_sts=0 where whd_doc_no='"+docNo+"' "
				+ " UPDATE oh SET ohd_wax_sts = 'Pending' FROM ord_hdr_dtl oh JOIN wax_hdr_dtl wx ON oh.ohd_ord_no = wx.whd_ord_no and oh.ohd_ord_pdt_cd = wx.whd_pdt_cd  where wx.whd_doc_no='"+docNo+"'");
		sql.executeUpdate();
	}

	@Override
	public void updateWaxHdrDataOnlyImpl(Wax_Hdr wxHdr) {
	ht.update(wxHdr);
	}

	@Override
	public void delExistWaxHdrFromEditWaxInAjaxImpl(String join) {
		SQLQuery sql=session.createSQLQuery("update wax_hdr_dtl set whd_wax_sts=0 where whd_id in('"+join+"')"
				+ " UPDATE oh SET ohd_wax_sts = 'Pending' FROM ord_hdr_dtl oh JOIN wax_hdr_dtl wx ON oh.ohd_ord_no = wx.whd_ord_no and oh.ohd_ord_pdt_cd = wx.whd_pdt_cd  where wx.whd_id in('"+join+"')");
		sql.executeUpdate();
	}

	@Override
	public List<Wax_Hdr> getExistWaxNoDetailByEmpId(String em_emp_id) {
		List<Wax_Hdr> docno=ht.find("from Wax_Hdr w  where w.wh_wax_sts=1");
		return docno;
	}

	@Override
	public List<Object[]> getExistWaxHdrDetailForAddTree(String em_emp_id) {
		List<Object[]>wax=session.createSQLQuery("select w.whd_trgt_dt,w.whd_pdt_cd,dp.dm_dpt_nm,d.dm_dgn_ctgy,w.whd_pdt_qty,(select top 1 ohd_ord_std_wt from ord_hdr_dtl where ohd_id=whd_ord_prm_id) as stdwgt,w.whd_doc_no,w.whd_dpt_cd,w.whd_id,d.dm_dgn_carat,"
				+ "whd_wrkr_cd,(select top 1 em_emp_nm from emp_mst where em_emp_id=whd_wrkr_cd and em_emp_sts=1) as wrknm,whd_ord_typ,(select top 1 ohd_ord_jn_no from ord_hdr_dtl where ohd_id=whd_ord_prm_id) as jono,whd_ord_no,whd_ord_prm_id from "
				+ " wax_hdr_dtl w left join dgn_mst d on w.whd_pdt_cd=d.dm_pdt_cd and w.whd_cmy_cd=d.dm_cmy_cd  left join dpt_mst dp on w.whd_dpt_cd=dp.dm_dpt_cd where whd_cmy_cd='"+getCmy()+"' and w.whd_wax_sts=1 and w.whd_tree_gntr_sts='Pending'"
						+ "and w.whd_iss_auth=1 and (d.dm_dgn_sts=1 or d.dm_dgn_sts is null) and (dp.dm_sts=1 or dp.dm_sts is null) order by cast(whd_trgt_dt as date) asc").list();
		return wax;
	}

	@Override
	public List<Object[]> getExistCategoryInWaxHDrDtl() {
		List<Object []>cat=session.createSQLQuery("select d.dm_dgn_ctgy from dgn_mst d group by d.dm_dgn_ctgy").list();
		return cat;
	}

	@Override
	public String takeAutGenIdForTreeDocNo() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((tgh_doc_no)+1) from tree_gen_hdr c where Isnumeric(c.tgh_doc_no)=1 and c.tgh_tree_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public List<Object[]> getsearchForWaxHdrRecInTreeImpl(String tgtDt, String dpt, String wax, String ctgy,String empId,String cmycd,String wrkcd,String jo,String ordtyp,String carat) {
		List<Object[]>tree=null;
		if(dpt.equalsIgnoreCase(""))dpt="select wo.whd_dpt_cd from wax_hdr_dtl wo group by wo.whd_dpt_cd";
		if(wax.equalsIgnoreCase(""))wax="select wo.whd_doc_no from wax_hdr_dtl wo group by wo.whd_doc_no";
		if(ctgy.equalsIgnoreCase(""))ctgy="select d.dm_dgn_ctgy from dgn_mst d group by d.dm_dgn_ctgy";
		if(cmycd.equalsIgnoreCase(""))cmycd="select distinct cm_cmy_cd from cmy_mst where cm_cmy_sts=1";
		if(!wrkcd.equalsIgnoreCase(""))wrkcd=" and whd_wrkr_cd ='"+wrkcd+"'";
		else cmycd="'"+cmycd+"'";
		if(!jo.equalsIgnoreCase(""))jo=" where jono in ("+jo+")";
		if(!ordtyp.equalsIgnoreCase(""))ordtyp=" and whd_ord_typ in ("+ordtyp+")";
		if(!carat.equalsIgnoreCase(""))carat=" and dm_dgn_carat in ("+carat+")";
		if(StringUtils.isNotBlank(tgtDt)){
	tree=session.createSQLQuery("select * from (select w.whd_trgt_dt,w.whd_pdt_cd,dp.dm_dpt_nm,d.dm_dgn_ctgy,w.whd_pdt_qty,(select top 1 ohd_ord_std_wt from ord_hdr_dtl where ohd_id=whd_ord_prm_id) as stdwgt,w.whd_doc_no,w.whd_dpt_cd,w.whd_id,d.dm_dgn_carat,whd_wrkr_cd,(select top 1 em_emp_nm from emp_mst where em_emp_id=whd_wrkr_cd and em_emp_sts=1) as wrknm,"
			+ "whd_ord_typ,(select top 1 ohd_ord_jn_no from ord_hdr_dtl where ohd_id=whd_ord_prm_id) as jono,whd_ord_no,whd_ord_prm_id from "
				+ " wax_hdr_dtl w left join dgn_mst d on w.whd_pdt_cd=d.dm_pdt_cd and  w.whd_cmy_cd=d.dm_cmy_cd  left join dpt_mst dp on w.whd_dpt_cd=dp.dm_dpt_cd where w.whd_wax_sts=1 and w.whd_tree_gntr_sts='Pending' and w.whd_iss_auth=1 "
						+ " and (d.dm_dgn_sts=1 or d.dm_dgn_sts is null) and (dp.dm_sts=1 or dp.dm_sts is null) and cast(w.whd_trgt_dt as date)<=cast('"+tgtDt+"' as date) "+wrkcd+" "+ordtyp+" "+carat+" and w.whd_dpt_cd in ("+dpt+")"
								+ " and w.whd_doc_no in ("+wax+") and d.dm_dgn_ctgy in ("+ctgy+") and whd_cmy_cd in("+cmycd+") ) as tbl "+jo+"  order by cast(whd_trgt_dt as date) asc").list();
		}
		else{
			tree=session.createSQLQuery("select * from (select w.whd_trgt_dt,w.whd_pdt_cd,dp.dm_dpt_nm,d.dm_dgn_ctgy,w.whd_pdt_qty,(select top 1 ohd_ord_std_wt from ord_hdr_dtl where ohd_id=whd_ord_prm_id) as stdwgt,w.whd_doc_no,w.whd_dpt_cd,w.whd_id,d.dm_dgn_carat,whd_wrkr_cd,(select top 1 em_emp_nm from emp_mst where em_emp_id=whd_wrkr_cd and em_emp_sts=1) as wrknm,"
					+ "whd_ord_typ,(select top 1 ohd_ord_jn_no from ord_hdr_dtl where ohd_id=whd_ord_prm_id) as jono,whd_ord_no,whd_ord_prm_id from "
					+ " wax_hdr_dtl w left join dgn_mst d on w.whd_pdt_cd=d.dm_pdt_cd and  w.whd_cmy_cd=d.dm_cmy_cd  left join dpt_mst dp on w.whd_dpt_cd=dp.dm_dpt_cd where w.whd_wax_sts=1 and w.whd_tree_gntr_sts='Pending' and w.whd_iss_auth=1 "
							+ " and (d.dm_dgn_sts=1 or d.dm_dgn_sts is null) and (dp.dm_sts=1 or dp.dm_sts is null) and w.whd_dpt_cd in ("+dpt+") "+wrkcd+" "+ordtyp+" "+carat+" and w.whd_doc_no in ("+wax+")"
									+ " and d.dm_dgn_ctgy in ("+ctgy+") and whd_cmy_cd in("+cmycd+") ) as tbl "+jo+"  order by cast(whd_trgt_dt as date) asc ").list();
		}
		return tree;
	}

	@Override
	public List<String> findDubOrdNoWithProCdImpl() {
		List<String>Order=session.createSQLQuery("select (ohd_ord_no+'='+ohd_ord_pdt_cd) As test from ord_hdr_dtl where ohd_ord_sts=1").list();
		return Order;
	}

	@Override
	public List<String> getProCdForFindDubInImportOrder() {
		List<String>Order=session.createSQLQuery("select dm_pdt_cd from dgn_mst where dm_cmy_cd='"+getCmy()+"' and dm_dgn_sts=1").list();
		return Order;
	}

	@Override
	public void saveTreeGenHdrDetailInImpl(List<Tree_Gen_Hdr_Dtl> trGenHdrDtl) {
		ht.saveOrUpdateAll(trGenHdrDtl);
	}

	@Override
	public void saveTreeGenHdrOnlyInImpl(Tree_Gen_Hdr trGenHdr) {
		ht.saveOrUpdate(trGenHdr);
	}

	@Override
	public void updateWaxHdrDetailRecInImpl(String join) {
		SQLQuery sql=session.createSQLQuery("update wax_hdr_dtl set whd_tree_gntr_sts='Sent' where whd_id in("+join+") "
				+ "   update o set o.ohd_crnt_prcs='TreeGeneration' from ord_hdr_dtl o left join wax_hdr_dtl on ohd_id=whd_ord_prm_id where whd_id in ("+join+")");
		sql.executeUpdate();
	}

	@Override
	public List<Object[]> getExistTreeGenratorHdrOnly(String em_emp_id) {
		List<Object[]>exist=session.createSQLQuery("select t.tgh_doc_no,t.tgh_no_of_pdt,t.tgh_tot_std_wgt,t.tgh_no_of_tree,t.tgh_tree1_bse_wgt,t.tgh_tree2_bse_wgt"
				+ ",t.tgh_tree3_bse_wgt,t.tgh_tree1_bse_std_wgt,t.tgh_tree2_bse_std_wgt,t.tgh_tree3_bse_std_wgt,t.tgh_id,t.tgh_iss_auth,"
				+ " (select top 1 cm_cmy_nm from cmy_mst left join tree_gen_hdr_dtl on cm_cmy_cd=tghd_cmy_cd where tghd_doc_no=tgh_doc_no and tghd_tree_sts=1 ) as cmy,tgh_tree1_doc_no,tgh_tree2_doc_no,tgh_tree3_doc_no,isnull(tgh_doc_dt,tgh_crt_dt),tgh_crt_dt,tgh_updt_dt from tree_gen_hdr t where "
						+ " tgh_cmy_cd='"+getCmy()+"' and t.tgh_tree_sts=1 order by t.tgh_id desc").list();
		return exist;
	}

	@Override
	public List<Object[]> getExistTreeHdrDetailForEdit(Long tghId) {
	List<Object[]> edit=session.createSQLQuery("select t.tghd_trgt_dt,t.tghd_pdt_cd,d.dm_dpt_nm,t.tghd_ctgy_cd,t.tghd_pdt_qty,t.tghd_id,dp.dm_dgn_std_wt,t.tghd_doc_no,t.tghd_iss_auth,t.tghd_wax_no,t.tghd_dpt_cd,t.tghd_ord_jo_no,t.tghd_ord_typ from tree_gen_hdr_dtl t"
			+ " left join dpt_mst d on t.tghd_dpt_cd=d.dm_dpt_cd left join dgn_mst dp on t.tghd_pdt_cd=dp.dm_pdt_cd and tghd_cmy_cd=dp.dm_cmy_cd  where t.tghd_doc_no=(select tgh_doc_no from tree_gen_hdr where tgh_id="+tghId+") and t.tghd_tree_sts=1 and (d.dm_sts=1 or d.dm_sts is null) and  (dp.dm_dgn_sts=1 or dp.dm_dgn_sts is null)").list();
	return edit;
	}

	@Override
	public Object getExistTreeHdrOnlyForEdit(Long tghId) {
	List<Object[]> edit=session.createSQLQuery("select t.tgh_doc_no,t.tgh_crt_dt,t.tgh_no_of_pdt,t.tgh_tot_std_wgt,t.tgh_no_of_tree,t.tgh_tree1_bse_wgt,t.tgh_tree2_bse_wgt"
				+ ",t.tgh_tree3_bse_wgt,t.tgh_tree1_bse_std_wgt,t.tgh_tree2_bse_std_wgt,t.tgh_tree3_bse_std_wgt,td.tghd_cmy_cd,td.tghd_str_cd,td.tghd_wrk_cd,t.tgh_id,t.tgh_crt_dt,t.tgh_crt_id,t.tgh_iss_auth,"
				+ "t.tgh_tree1_doc_no,t.tgh_tree2_doc_no,t.tgh_tree3_doc_no,isnull(tgh_doc_dt,tgh_crt_dt) from tree_gen_hdr t"
				+ " left join tree_gen_hdr_dtl td on t.tgh_doc_no=td.tghd_doc_no where t.tgh_id="+tghId+" and td.tghd_tree_sts=1").list();
		return (edit!=null&&!edit.isEmpty())?edit.get(0):null;
	}

	@Override
	public List<String> getExistCateGoryForTreeHdrDetail(Long tghId) {
		List<String> edit=session.createSQLQuery("select DISTINCT t.tghd_ctgy_cd from tree_gen_hdr_dtl t where t.tghd_doc_no=(select tgh_doc_no from tree_gen_hdr where tgh_id="+tghId+") and t.tghd_tree_sts=1").list();
		return edit;
	}

	@Override
	public List<String> getExistDptForTreeHdrDetail(Long tghId) {
		List<String> edit=session.createSQLQuery("select DISTINCT t.tghd_dpt_cd from tree_gen_hdr_dtl t where t.tghd_doc_no=(select tgh_doc_no from tree_gen_hdr where tgh_id="+tghId+") and t.tghd_tree_sts=1").list();
		return edit;
	}

	@Override
	public List<String> getExistWaxForTreeHdrDetail(Long tghId) {
		List<String> edit=session.createSQLQuery("select DISTINCT t.tghd_wax_no from tree_gen_hdr_dtl t where t.tghd_doc_no=(select tgh_doc_no from tree_gen_hdr where tgh_id="+tghId+") and t.tghd_tree_sts=1").list();
		return edit;
	}

	@Override
	public List<String> getProDptNamForFindDubInImportOrder() {
		List<String> edit=session.createSQLQuery("select DISTINCT d.dm_dpt_nm from dpt_mst d where dm_cmy_cd='"+getCmy()+"' and d.dm_sts=1").list();
		return edit;
	}

	@Override
	public void removeRecOfTreeHdrdetailFromDb(String join) {
		SQLQuery sql=session.createSQLQuery("update tree_gen_hdr_dtl set tghd_tree_sts=0 where tghd_id in ("+join+")"
				+ " UPDATE wd SET whd_tree_gntr_sts = 'Pending' FROM wax_hdr_dtl wd JOIN tree_gen_hdr_dtl td ON wd.whd_doc_no = td.tghd_wax_no and wd.whd_pdt_cd = td.tghd_pdt_cd  where td.tghd_id in ("+join+")");
		sql.executeUpdate();
	}

	@Override
	public List<Raw_Mtr_Mst> getSearchRawMeterialResultImpl(String id) {
		try{
			List<Raw_Mtr_Mst> srch=ht.find(" from Raw_Mtr_Mst m where rm_mst_cmy_cd='"+getCmy()+"' and (m.rm_mst_pdt_id like ? or m.rm_mst_pdt_nm like ?) and m.rm_mst_sts=1","%"+id+"%","%"+id+"%");
			return srch;
			}catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}

	@Override
	public List<Raw_Mtr_Mst> getAllExistRawMeterialProId() {
		try{
			List<Raw_Mtr_Mst> srch=ht.find(" from Raw_Mtr_Mst m where  m.rm_mst_sts=1");
			return srch;
			}catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}

	@Override
	public List<Bom_Mst> getExistBomProIdForAddInwrd() {
		try{
			List<Bom_Mst> srch=ht.find("from Bom_Mst m where m.bm_bom_sts=1");
			return srch;
			}catch(Exception e){
				e.printStackTrace();
			}
			return null;
	}

	@Override
	public String takeAutGenIdForInwardCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((ih_doc_no)+1) from iwd_hdr c where Isnumeric(c.ih_doc_no)=1 and c.ih_iwd_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public void saveInwardHdrOnlyImpl(Iwd_Hdr iwHdr) {
		ht.saveOrUpdate(iwHdr);
	}

	@Override
	public void saveItemMoventDetailFromInward(List<Itm_Mv> itmMvDtlList) {
	ht.saveOrUpdateAll(itmMvDtlList);
	}

	@Override
	public void saveStkMstDetailFromInward(List<Stk_Mst> stkDtlList) {
		ht.saveOrUpdateAll(stkDtlList);
	}

	@Override
	public void saveIwdHdrDetailToDb(List<Iwd_Hdr_Dtl> iwdDtlList) {
		ht.saveOrUpdateAll(iwdDtlList);
	}

	@Override
	public List<Object[]> getAllExistInwardDetail(String em_emp_id) {
		String dept=(getLogEmpDpt().equals(""))?"":" and i.ih_doc_no in(select ihd_doc_no from iwd_hdr_dtl d where ihd_dpt_cd='"+getLogEmpDpt()+"')";
		
	/*List<Object[]> exst=session.createSQLQuery("select i.ih_doc_no,i.ih_vndr_inc_no,i.ih_vndr_inc_dt,i.ih_tot_rcvd_wgt,i.ih_tot_rcvd_prty,i.ih_tot_pure_gld_wgt,"
			+ " i.ih_tot_doc_val,i.ih_tot_pgm_cal,i.ih_id,i.ih_iss_auth, (select top 1 cm_cmy_nm from cmy_mst left join iwd_hdr_dtl on cm_cmy_cd=ihd_cmy_cd where ihd_doc_no=ih_doc_no and ihd_iwd_sts=1 ) as cmy,cast ((STUFF(( SELECT ',' + ihd_iwd_typ FROM iwd_hdr_dtl WHERE ihd_doc_no = ih_doc_no group by ihd_iwd_typ FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,(select sum(cast(ihd_pdt_qty as float)) from iwd_hdr_dtl d where d.ihd_doc_no=ih_doc_no) as qty,ih_vndr_inc_dt,ih_crt_dt,ih_updt_dt from iwd_hdr i where ih_cmy_cd='"+getCmy()+"' "+dept+" and i.ih_iwd_sts=1 order by ih_id desc").list();*/	
		List<Object[]> exst=session.createSQLQuery("select i.ih_doc_no,i.ih_vndr_inc_no,i.ih_vndr_inc_dt,i.ih_tot_rcvd_wgt,(select top 1 cast ((STUFF(( SELECT ',' + ihd_rcvd_prty from iwd_hdr_dtl where ihd_doc_no=ih_doc_no group by ihd_rcvd_prty FOR XML PATH('') ), 1, 1, '' )) as varchar)) as prty,i.ih_tot_pure_gld_wgt,"
			+ " i.ih_tot_doc_val,i.ih_tot_pgm_cal,i.ih_id,i.ih_iss_auth, (select top 1 cm_cmy_nm from cmy_mst left join iwd_hdr_dtl on cm_cmy_cd=ihd_cmy_cd where ihd_doc_no=ih_doc_no and ihd_iwd_sts=1 ) as cmy,cast ((STUFF(( SELECT ',' + ihd_iwd_typ FROM iwd_hdr_dtl WHERE ihd_doc_no = ih_doc_no group by ihd_iwd_typ FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,(select sum(cast(ihd_pdt_qty as float)) from iwd_hdr_dtl d where d.ihd_doc_no=ih_doc_no) as qty,ih_vndr_inc_dt,ih_crt_dt,ih_updt_dt from iwd_hdr i where ih_cmy_cd='"+getCmy()+"' "+dept+" and i.ih_iwd_sts=1 order by ih_id desc").list();
	
		return exst;
	}

	@Override
	public Ord_Hdr checkOrdAuthById(Long ohdId) {
		List<Ord_Hdr> ord=ht.find("from Ord_Hdr o where o.oh_id=?",ohdId);
		return (ord!=null&&!ord.isEmpty())?ord.get(0):null;
	}

	@Override
	public void updateOnlyAuthInOrdHdr(String auth, String auth2) {
		if(auth2.equalsIgnoreCase("1")){
		SQLQuery sql=session.createSQLQuery("update ord_hdr set oh_iss_auth=1 where oh_ord_no='"+auth+"'");
		sql.executeUpdate();	
		}
		else{
			SQLQuery sql=session.createSQLQuery("update ord_hdr set oh_iss_auth=0 where oh_ord_no='"+auth+"'");
			sql.executeUpdate();		
		}
	}

	@Override
	public void delExistTreeHdrRecOnly(Long id) {
		SQLQuery sql=session.createSQLQuery("update tree_gen_hdr set tgh_iss_auth=0,tgh_tree_sts=0 where tgh_id="+id+" "
				+ " update tree_gen_hdr_dtl set tghd_iss_auth=0,tghd_tree_sts=0 where tghd_doc_no=(select tgh_doc_no from tree_gen_hdr where tgh_id="+id+") "
						+ " UPDATE wd SET whd_tree_gntr_sts = 'Pending' FROM wax_hdr_dtl wd JOIN tree_gen_hdr_dtl td ON wd.whd_doc_no = td.tghd_wax_no and wd.whd_pdt_cd = td.tghd_pdt_cd  where td.tghd_doc_no =(select tgh_doc_no from tree_gen_hdr where tgh_id="+id+") ");
		sql.executeUpdate();	
	}

	@Override
	public List<Object[]> getExistInwardHdrDetail(Long iwd_id) {
		List<Object[]> sql=session.createSQLQuery("select i.ihd_pdt_cd,(case when ihd_iwd_typ='BOM' then (select top 1 concat(isnull(bm_bom_nm,''),'-',isnull(bm_bom_typ,''),'-',isnull(bm_bom_wip_typ,''),'-',isnull(bm_bom_sz,'')) from bom_mst where bm_bom_cd=ihd_pdt_cd and bm_bom_sts=1) when (ihd_iwd_typ='Raw Metrial' or ihd_iwd_typ='OutSide_Inward') then (select top 1 rm_mst_pdt_nm from raw_mtr_mst where rm_mst_pdt_id=ihd_pdt_cd and rm_mst_sts=1) else (select top 1 concat(isnull(sm_stn_nm,''),'-',isnull(sm_stn_clr,''),'-',isnull(sm_stn_shpe,''),'-',isnull(sm_stn_sz,'')) from stn_mst where sm_stn_cd=ihd_pdt_cd and sm_stn_sts=1) end) as bmnm,i.ihd_mtl_wgt,i.ihd_rcvd_prty,i.ihd_doc_val,i.ihd_pgm_cal,i.ihd_pure_gld_wgt,i.ihd_iwd_typ,i.ihd_id,i.ihd_iwd_typ,i.ihd_iss_auth,ihd_pdt_qty from iwd_hdr_dtl i left join "
				+ "bom_mst b on i.ihd_pdt_cd=b.bm_bom_cd where i.ihd_iwd_sts=1 and i.ihd_doc_no=(select top 1 ih_doc_no from iwd_hdr where ih_id="+iwd_id+") order by i.ihd_id desc").list();
		return sql;
	}

	@Override
	public Object[] getExistInwardHdrOnly(Long iwd_id) {
		List<Object[]> sql=session.createSQLQuery("select top 1 i.ihd_cmy_cd,i.ihd_str_cd,i.ihd_iwd_typ,i.ihd_vndr_cd,i.ihd_vndr_inc_no,i.ihd_vndr_inc_dt,i.ihd_dpt_cd,i.ihd_doc_no,io.ih_tot_rcvd_wgt,io.ih_tot_rcvd_prty,io.ih_tot_pure_gld_wgt,io.ih_iss_auth,io.ih_id,io.ih_crt_dt,io.ih_crt_id from iwd_hdr_dtl i left join "
				+ "iwd_hdr io on i.ihd_doc_no=io.ih_doc_no where i.ihd_iwd_sts=1 and io.ih_iwd_sts=1 and io.ih_id="+iwd_id+" order by i.ihd_id desc").list();
		return (sql!=null&&!sql.isEmpty())?sql.get(0):null;
	}

	@Override
	public void delExistInwardHdrDetRecordInImpl(String join) {
		SQLQuery sql=session.createSQLQuery("update iwd_hdr_dtl set ihd_iwd_sts=0,ihd_iss_auth=0 where ihd_id in("+join+")");
		sql.executeUpdate();	
	}

	@Override
	public String getAutoGnAlyMstCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((am_aly_cd)+1) from aly_mst c where Isnumeric(c.am_aly_cd)=1 and c.am_aly_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}
	@Override
	public void deleteInwardRecAjaxImpl(Long id,String docNo) {
	SQLQuery sql=session.createSQLQuery("update iwd_hdr set ih_iwd_sts=0,ih_iss_auth=0 where ih_id="+id+" update iwd_hdr_dtl set ihd_iwd_sts=0,ihd_iss_auth=0 "
			+ " where ihd_doc_no=(select ih_doc_no from iwd_hdr where ih_id="+id+")");
	sql.executeUpdate();
	}

	
	@Override
	public void saveAlloyMstDetInImpl(Aly_Mst aly) {
		ht.saveOrUpdate(aly);
	}

	@Override
	public List<Aly_Mst> getAllExistAlyMstDetail() {
	List<Aly_Mst> ext=ht.find("from Aly_Mst a where am_cmy_cd='"+getCmy()+"' and a.am_aly_sts=1 order by am_id desc");
		return ext;
	}

	@Override
	public Aly_Mst getExistAlyDetailOnlyById(Long alyCd) {
		List<Aly_Mst> ext=ht.find("from Aly_Mst a where a.am_id=?",alyCd);
		return ext!=null&&!ext.isEmpty()?ext.get(0):null;
	}

	@Override
	public void delAlloyMstRecFromDbImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update aly_mst set am_aly_sts=0 where am_id="+id+"");
		sql.executeUpdate();	
	}

	@Override
	public String getAutoGenIdOfAlyHdr() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((aph_aly_no)+1) from aly_prcs_hdr c where Isnumeric(c.aph_aly_no)=1 and c.aph_aly_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public List<Object[]> getInwardRecForAddAlloyImpl(String qry) {
		List<Object[]> sql1=session.createSQLQuery(qry).list();
		return sql1;
	}

	@Override
	public List<Object[]> seacrhBasedOnDptAndDateImpl(String dpt, String dt,String cmycd) {
		if(dpt.equalsIgnoreCase(""))dpt="select ihd_dpt_cd from iwd_hdr_dtl group by ihd_dpt_cd";
		List<Object[]> sql=null;List<Object[]> sql1=null;
		 sql=session.createSQLQuery("select s.stm_itm_cd,b.bm_bom_nm,s.stm_rcvd_stk_wgt,s.stm_rcvd_stk_prty,s.stm_stk_pure_gld_wgt,s.stm_id,s.stm_stk_itm_typ,stm_dpt_cd,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal,(select top 1 dm_dpt_nm from dpt_mst where dm_sts=1 and dm_dpt_cd=stm_dpt_cd) as dpt from stk_mst s left join bom_mst b on s.stm_itm_cd=b.bm_bom_cd where s.stm_stk_itm_typ='BOM' and "
						+ "(b.bm_bom_sts=1 or b.bm_bom_sts is null) and s.stm_itm_cd in (select ihd_pdt_cd from iwd_hdr_dtl where ihd_iss_auth=1 and ihd_iwd_sts=1 and ihd_iwd_typ='BOM' ) and cast(s.stm_rcvd_stk_wgt as float)>0 and s.stm_rcvd_stk_wgt is not null and s.stm_stk_trn_typ='Inward' and s.stm_cmy_cd='"+cmycd+"' and s.stm_dpt_cd in ("+dpt+")").list();
			 sql1=session.createSQLQuery("select s.stm_itm_cd,r.rm_mst_pdt_nm,s.stm_rcvd_stk_wgt,s.stm_rcvd_stk_prty,s.stm_stk_pure_gld_wgt,s.stm_id,s.stm_stk_itm_typ,stm_dpt_cd,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal,(select top 1 dm_dpt_nm from dpt_mst where dm_sts=1 and dm_dpt_cd=stm_dpt_cd) as dpt from stk_mst s left join raw_mtr_mst r on s.stm_itm_cd=r.rm_mst_pdt_id where s.stm_stk_itm_typ='Raw Metrial' and "
						+ "(r.rm_mst_sts=1 or r.rm_mst_sts is null) and s.stm_itm_cd in (select ihd_pdt_cd from iwd_hdr_dtl where ihd_iss_auth=1 and ihd_iwd_sts=1 and ihd_iwd_typ='Raw Metrial') and cast(s.stm_rcvd_stk_wgt as float)>0 and s.stm_rcvd_stk_wgt is not null and s.stm_stk_trn_typ='Inward' and s.stm_cmy_cd='"+cmycd+"' and s.stm_dpt_cd in ("+dpt+")").list();
		List<Object[]> cmp=new ArrayList<Object[]>();
		if(sql!=null&&!sql.isEmpty())cmp.addAll(sql);
		if(sql1!=null&&!sql1.isEmpty())cmp.addAll(sql1);
		return cmp;
	}

	@Override
	public void saveAlyPrcsHdrOnlyImpl(Aly_Prcs_Hdr alyOnly) {
		ht.saveOrUpdate(alyOnly);
	}

	@Override
	public void saveAlyPrcsHdrDetlImpl(List<Aly_Prcs_Hdr_Dtl> alyPrcDet) {
		ht.saveOrUpdateAll(alyPrcDet);
	}

	@Override
	public List<Stk_Mst> getExistDetailOfStkForUpdate(String join) {
	List<Stk_Mst> stk=ht.find("from Stk_Mst s where s.stm_id in ("+join+")");
	return stk;
	}

	@Override
	public List<Object[]> getAllExistAlyPrcHdrDetail() {
		/*String dept=(getLogEmpDpt().equals(""))?"":" and aph_aly_no in (select aphd_aly_no from aly_prcs_hdr_dtl where aphd_dpt_cd='"+getLogEmpDpt()+"')";
		List<Object[]>exst=session.createSQLQuery("select a.aph_aly_no,a.aph_tot_rcvd_wgt,a.aph_tot_rcvd_prty,aph_expt_prty,a.aph_iss_auth,"
				+ " a.aph_rcvd_auth,a.aph_id,(select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=aph_cmy_cd and cm_cmy_sts=1) as cmynm,aph_tot_isd_wgt,aph_tot_bal_wgt,aph_cnvt_prty,aph_iss_dmgd,isnull(aph_aly_dt,aph_crt_dt),aph_crt_dt,aph_updt_dt from "
				+ " aly_prcs_hdr a where aph_cmy_cd='"+getCmy()+"' "+dept+" and a.aph_aly_sts=1 order by a.aph_id desc").list();
		return exst;*/
		
		
		String dept=(getLogEmpDpt().equals(""))?"":" and aph_aly_no in (select aphd_aly_no from aly_prcs_hdr_dtl where aphd_dpt_cd='"+getLogEmpDpt()+"')";
		/*List<Object[]>exst=session.createSQLQuery("select a.aph_aly_no,a.aph_tot_rcvd_wgt,a.aph_tot_rcvd_prty,aph_expt_prty,a.aph_iss_auth,"
				+ " a.aph_rcvd_auth,a.aph_id,(select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=aph_cmy_cd and cm_cmy_sts=1) as cmynm,al.aphd_iss_aly,aph_tot_bal_wgt,aph_cnvt_prty,aph_iss_dmgd,isnull(aph_aly_dt,aph_crt_dt),aph_crt_dt,aph_updt_dt,al.aphd_iss_wgt,al.aphd_mtl_prty  from "
				+ " aly_prcs_hdr a inner join aly_prcs_hdr_dtl  al on al.aphd_aly_no=a.aph_aly_no where aph_cmy_cd='"+getCmy()+"' "+dept+" and a.aph_aly_sts=1 order by a.aph_id desc").list();*/
		 List<Object[]>exst=session.createSQLQuery("select a.aph_aly_no,a.aph_tot_rcvd_wgt,a.aph_tot_rcvd_prty,aph_expt_prty,a.aph_iss_auth,a.aph_rcvd_auth,"
                 + "a.aph_id,(select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=aph_cmy_cd and cm_cmy_sts=1) as cmynm,(select top 1 sum(cast(case when aphd_iss_aly<>'' then aphd_iss_aly else '0' end "
                 + "as decimal(20,3))) from aly_prcs_hdr_dtl where aphd_aly_no=aph_aly_no) as aphd_iss_aly,aph_tot_bal_wgt,aph_cnvt_prty,aph_iss_dmgd,"
                 + "isnull(aph_aly_dt,aph_crt_dt),aph_crt_dt,aph_updt_dt,(select top 1 sum(case when aphd_iss_wgt<>'' then cast(aphd_iss_wgt as decimal(20,3)) else 0 end  "
                 + ") from aly_prcs_hdr_dtl where aphd_aly_no=aph_aly_no) as aphd_iss_wgt,"
                 + "cast(STUFF((SELECT ',' + aphd_mtl_prty FROM aly_prcs_hdr_dtl z  WHERE aphd_aly_no = aph_aly_no "
                 + "group by aphd_mtl_prty FOR XML PATH('')), 1, 1, '') as varchar(max)) as purity  from  aly_prcs_hdr a where aph_cmy_cd='"+getCmy()+"' "+dept+" "
                 + "and a.aph_aly_sts=1 order by a.aph_id desc").list();
		return exst;
		
		
	}

	@Override
	public Object[] getExistAlyPrcsHtrAndDtls(Long alyId) {
	List<Object[]> exstEdt=session.createSQLQuery("select top 1 a.aph_aly_no,a.aph_tot_rcvd_wgt,a.aph_tot_rcvd_prty,a.aph_cnvt_prty,a.aph_iss_auth,a.aph_rcvd_auth,a.aph_crt_id,a.aph_crt_dt,a.aph_id,"
			+ "ad.aphd_aly_typ,ad.aphd_cmy_cd,ad.aphd_str_cd,ad.aphd_wrk_cd,a.aph_expt_prty,a.aph_tot_bal_wgt,a.aph_tot_isd_wgt,isnull(a.aph_aly_dt,a.aph_crt_dt) from aly_prcs_hdr a left join aly_prcs_hdr_dtl ad on a.aph_aly_no=ad.aphd_aly_no where a.aph_id="+alyId+"").list();
		return exstEdt!=null&&!exstEdt.isEmpty()?exstEdt.get(0):null;
	}

	@Override
	public List<Object[]> getExistAlyPrcsItmsDetl(Long alyId) {
		List<Object[]>exstRwAry=session.createSQLQuery("select a.aphd_pdt_cd,(case when [aphd_pdt_typ]='Raw Metrial' then (select top 1 rm_mst_pdt_nm from raw_mtr_mst where [aphd_pdt_cd]=rm_mst_pdt_id and [rm_mst_sts]=1) else [aphd_pdt_typ] end) as itmnmss,a.aphd_mtl_wgt,a.aphd_mtl_prty,a.aphd_expt_prty,a.aphd_cvt_prty,a.aphd_prty_ls,a.aphd_am_aly_typ_cd,"
				+ " a.aphd_iss_wgt,a.aphd_rcvd_wgt,'' as empty,a.aphd_bal_wgt,a.aphd_rcvd_prty,a.aphd_iss_auth,a.aphd_rcvd_auth,aphd_pdt_typ as typofpdt,a.aphd_id,a.aphd_dpt_cd,a.aphd_crt_dt,a.aphd_crt_id,'' as de,a.aphd_tot_tst_smp,isnull(a.aphd_tst_smp1,0) as t1,isnull(a.aphd_tst_smp2,0) as t2,isnull(a.aphd_tst_smp3,0) as t3,isnull(a.aphd_tst_smp4,0) as t4,a.aphd_iss_aly,a.aphd_dst_mtl,a.aphd_smpl_rcvd_prty,a.aphd_isd_tst_smp,0 as rcvdbalstk from aly_prcs_hdr_dtl a where a.aphd_aly_no"
				+ "=(select aph_aly_no from aly_prcs_hdr where aph_id="+alyId+") and a.aphd_aly_sts=1 ").list();
		return exstRwAry;
	}

	@Override
	public List<Stk_Mst> getExistAlyInPrcssForStk(String empid) {
		List<Stk_Mst> issAly=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='AlloyIssue'");
		return issAly;
	}

	@Override
	public List<Stk_Mst> getExistAlyInRecvdForStk(String empid) {
		List<Stk_Mst> issAly=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='AlloyReceived'");
		return issAly;
	}

	@Override
	public List<Object[]> getExistAlyPrcsItmsDetlWithoutAuth(Long alyId) {
		List<Object[]>exstBmAry=session.createSQLQuery("select a.aphd_pdt_cd,b.bm_bom_nm,a.aphd_mtl_wgt,a.aphd_mtl_prty,a.aphd_expt_prty,a.aphd_cvt_prty,a.aphd_prty_ls,a.aphd_am_aly_typ_cd,"
				+ " a.aphd_iss_wgt,a.aphd_rcvd_wgt,'' as empty,a.aphd_bal_wgt,a.aphd_rcvd_prty,a.aphd_iss_auth,a.aphd_rcvd_auth,'BOM',a.aphd_id,a.aphd_dpt_cd,a.aphd_crt_dt,a.aphd_crt_id,s.stm_rcvd_stk_wgt,a.aphd_tot_tst_smp,isnull(a.aphd_tst_smp1,0) as t1,isnull(a.aphd_tst_smp2,0) as t2 ,isnull(a.aphd_tst_smp3,0) as t3,isnull(a.aphd_tst_smp4,0) as t4,a.aphd_iss_aly,a.aphd_dst_mtl,a.aphd_smpl_rcvd_prty,a.aphd_isd_tst_smp from aly_prcs_hdr_dtl a left join bom_mst b on b.bm_bom_cd=a.aphd_pdt_cd left join stk_mst s on a.aphd_pdt_cd=s.stm_itm_cd and a.aphd_pdt_typ=s.stm_stk_itm_typ and a.aphd_str_cd=s.stm_str_cd and a.aphd_cmy_cd=s.stm_cmy_cd where a.aphd_aly_no"
				+ "=(select aph_aly_no from aly_prcs_hdr where aph_id="+alyId+") and a.aphd_pdt_typ='BOM' and a.aphd_aly_sts=1 and (s.stm_stk_trn_typ='Inward' or s.stm_stk_trn_typ is null) and (b.bm_bom_sts=1 or b.bm_bom_sts is null)").list();
		List<Object[]>exstRwAry=session.createSQLQuery("select a.aphd_pdt_cd,b.rm_mst_pdt_nm,a.aphd_mtl_wgt,a.aphd_mtl_prty,a.aphd_expt_prty,a.aphd_cvt_prty,a.aphd_prty_ls,a.aphd_am_aly_typ_cd,"
				+ " a.aphd_iss_wgt,a.aphd_rcvd_wgt,'' as empty,a.aphd_bal_wgt,a.aphd_rcvd_prty,a.aphd_iss_auth,a.aphd_rcvd_auth,'Raw Metrial',a.aphd_id,a.aphd_dpt_cd,a.aphd_crt_dt,a.aphd_crt_id,s.stm_rcvd_stk_wgt,a.aphd_tot_tst_smp,isnull(a.aphd_tst_smp1,0) as t1,isnull(a.aphd_tst_smp2,0) as t2 ,isnull(a.aphd_tst_smp3,0) as t3,isnull(a.aphd_tst_smp4,0) as t4,a.aphd_iss_aly,a.aphd_dst_mtl,a.aphd_smpl_rcvd_prty,a.aphd_isd_tst_smp from aly_prcs_hdr_dtl a left join raw_mtr_mst b on b.rm_mst_pdt_id=a.aphd_pdt_cd left join stk_mst s on a.aphd_pdt_cd=s.stm_itm_cd and a.aphd_pdt_typ=s.stm_stk_itm_typ and a.aphd_str_cd=s.stm_str_cd and a.aphd_cmy_cd=s.stm_cmy_cd where a.aphd_aly_no"
				+ "=(select aph_aly_no from aly_prcs_hdr where aph_id="+alyId+") and a.aphd_pdt_typ='Raw Metrial' and a.aphd_aly_sts=1 and (s.stm_stk_trn_typ='Inward' or s.stm_stk_trn_typ is null) and (b.rm_mst_sts=1 or b.rm_mst_sts is null)").list();
		List<Object[]> cmp=new ArrayList<Object[]>();
		if(exstBmAry!=null&&!exstBmAry.isEmpty())cmp.addAll(exstBmAry);
		if(exstRwAry!=null&&!exstRwAry.isEmpty())cmp.addAll(exstRwAry);
		return cmp;
	}

	@Override
	public List<Tree_Gen_Hdr_Dtl> getExistTreeGenHdrDtlForUpdate(String object) {
	List<Tree_Gen_Hdr_Dtl> ext=ht.find("from Tree_Gen_Hdr_Dtl t where t.tghd_doc_no=? and t.tghd_tree_sts=1",object);
	return ext;
	}

	@Override
	public void deleteAlyHdrRecInImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update aly_prcs_hdr set aph_aly_sts=0 where aph_id="+id+" update aly_prcs_hdr_dtl set aphd_aly_sts=0 "
				+ " where aphd_aly_no=(select aph_aly_no from aly_prcs_hdr where aph_id="+id+")");
		sql.executeUpdate();
	}

	@Override
	public List<Tree_Gen_Hdr> getExistTreeHdrRecOnlyAuth() {
		List<Tree_Gen_Hdr> exst=ht.find("from Tree_Gen_Hdr t where t.tgh_tree_sts=1 and t.tgh_iss_auth=1");
		return exst;
	}

	@Override
	public List<Object[]> getExistTreeHdrDetailNeedForCast() {
		List<Object[]> exst=session.createSQLQuery("select max(t.tghd_trgt_dt)as dt, cast ((STUFF(( SELECT ',' + tghd_ctgy_cd FROM tree_gen_hdr_dtl WHERE tghd_doc_no"
				+ " = max(t.tghd_doc_no) group by tghd_ctgy_cd FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,max(d.dm_dpt_nm)as dpt, sum(cast (t.tghd_pdt_qty as decimal))as qty,th.tgh_tree1_doc_no,max((cast(th.tgh_tree1_bse_std_wgt as float)-cast(th.tgh_tree1_bse_wgt as float))*crtm_carat_wgt)as bsewgt,t.tghd_dpt_cd,max(t.tghd_pdt_cd)as pdt,max(th.tgh_id)as id,max(crtm_carat_prty) as prty,max(tgh_iss_carat),max(tgh_no_of_tree) as noof,max(crtm_carat_clr) as clr from tree_gen_hdr th left join tree_gen_hdr_dtl t on th.tgh_doc_no=t.tghd_doc_no and tgh_cmy_cd=tghd_cmy_cd left join dpt_mst d on t.tghd_dpt_cd=d.dm_dpt_cd left join carat_mst on th.tgh_iss_carat=crtm_carat_nm and tgh_cmy_cd=crtm_cmy_cd where tgh_cmy_cd='"+getCmy()+"' and th.tgh_tree1_doc_no is not null and tgh_tree1_iss_cast=0 and t.tghd_iss_auth=1 and th.tgh_tree_sts=1 and t.tghd_tree_sts=1 and (crtm_carat_sts=1 or crtm_carat_sts is null) and (d.dm_sts=1 or d.dm_sts is null)  group by th.tgh_tree1_doc_no,t.tghd_dpt_cd union select max(t.tghd_trgt_dt)as dt, cast ((STUFF(( SELECT ',' + tghd_ctgy_cd FROM tree_gen_hdr_dtl WHERE tghd_doc_no"
				+ " = max(t.tghd_doc_no) group by tghd_ctgy_cd FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,max(d.dm_dpt_nm)as dpt, sum(cast (t.tghd_pdt_qty as decimal))as qty,th.tgh_tree2_doc_no,max((cast(th.tgh_tree2_bse_std_wgt as float)-cast(th.tgh_tree2_bse_wgt as float))*crtm_carat_wgt)as bsewgt,t.tghd_dpt_cd,max(t.tghd_pdt_cd)as pdt,max(th.tgh_id)as id,max(crtm_carat_prty) as prty,max(tgh_iss_carat),max(tgh_no_of_tree) as noof,max(crtm_carat_clr) as clr from tree_gen_hdr th left join tree_gen_hdr_dtl t on th.tgh_doc_no=t.tghd_doc_no and tgh_cmy_cd=tghd_cmy_cd left join dpt_mst d on t.tghd_dpt_cd=d.dm_dpt_cd left join carat_mst on th.tgh_iss_carat=crtm_carat_nm and tgh_cmy_cd=crtm_cmy_cd where tgh_cmy_cd='"+getCmy()+"' and th.tgh_tree2_doc_no is not null and tgh_tree2_iss_cast=0 and  t.tghd_iss_auth=1 and th.tgh_tree_sts=1 and (crtm_carat_sts=1 or crtm_carat_sts is null) and t.tghd_tree_sts=1 and (d.dm_sts=1 or d.dm_sts is null) group by th.tgh_tree2_doc_no,t.tghd_dpt_cd union select max(t.tghd_trgt_dt)as dt, cast ((STUFF(( SELECT ',' + tghd_ctgy_cd FROM tree_gen_hdr_dtl WHERE tghd_doc_no"
				+ " = max(t.tghd_doc_no) group by tghd_ctgy_cd FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy, max(d.dm_dpt_nm)as dpt,sum(cast (t.tghd_pdt_qty as decimal))as qty,th.tgh_tree3_doc_no, max((cast(th.tgh_tree3_bse_std_wgt as float)-cast(th.tgh_tree3_bse_wgt as float))*crtm_carat_wgt)as bsewgt,t.tghd_dpt_cd,max(t.tghd_pdt_cd)as pdt,max(th.tgh_id)as id,max(crtm_carat_prty) as prty,max(tgh_iss_carat),max(tgh_no_of_tree) as noof,max(crtm_carat_clr) as clr from tree_gen_hdr th left join tree_gen_hdr_dtl t on th.tgh_doc_no=t.tghd_doc_no and tgh_cmy_cd=tghd_cmy_cd left join dpt_mst d on t.tghd_dpt_cd=d.dm_dpt_cd left join carat_mst on th.tgh_iss_carat=crtm_carat_nm and tgh_cmy_cd=crtm_cmy_cd where tgh_cmy_cd='"+getCmy()+"' and th.tgh_tree3_doc_no is not null and tgh_tree3_iss_cast=0 and t.tghd_iss_auth=1 and (crtm_carat_sts=1 or crtm_carat_sts is null) and th.tgh_tree_sts=1 and t.tghd_tree_sts=1 and (d.dm_sts=1 or d.dm_sts is null)  group by th.tgh_tree3_doc_no,t.tghd_dpt_cd").list();
		return exst;
	}

	@Override
	public List<String> getExistDptCdForAlyEdit(Long alyId) {
		List<String> exDpt=session.createSQLQuery("select a.aphd_dpt_cd from aly_prcs_hdr_dtl a where a.aphd_aly_no=(select aph_aly_no from aly_prcs_hdr where aph_id="+alyId+") group by a.aphd_dpt_cd").list();
		return exDpt;
	}

	@Override
	public String getAutoGenIdOfCastHdr() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((cph_cst_no)+1) from cst_prcs_hdr c where Isnumeric(c.cph_cst_no)=1 and c.cph_cst_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public List<Object[]> srchInAddCastingDtlInImpl(String treNo,String tghtDt,String ctgy,String expprty) {
		String tr1="",tr2="",tr3="";
		if(StringUtils.isNotBlank(treNo)){
			tr1=" and tgh_tree1_doc_no in ("+treNo+") ";
			tr2=" and tgh_tree2_doc_no in ("+treNo+") ";
			tr3=" and tgh_tree3_doc_no in ("+treNo+") ";
		}
		if(StringUtils.isNotBlank(expprty))expprty=" and crtm_carat_prty in("+expprty+") ";
	if(StringUtils.isNotBlank(ctgy))ctgy=" and t.tghd_ctgy_cd in("+ctgy+") ";
	if(StringUtils.isNotBlank(tghtDt))tghtDt=" having cast(max(tghd_trgt_dt) as date)<=cast('"+tghtDt+"' as date) ";
	try{
			List<Object[]> srch=session.createSQLQuery("select max(t.tghd_trgt_dt)as dt,cast ((STUFF(( SELECT ',' + tghd_ctgy_cd FROM tree_gen_hdr_dtl WHERE tghd_doc_no = max(t.tghd_doc_no) group by tghd_ctgy_cd FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,max(d.dm_dpt_nm)as dpt, sum(cast (t.tghd_pdt_qty as decimal))as qty,th.tgh_tree1_doc_no,max((cast(th.tgh_tree1_bse_std_wgt as float)-cast(th.tgh_tree1_bse_wgt as float))*crtm_carat_wgt)as bsewgt,t.tghd_dpt_cd,max(t.tghd_pdt_cd)as pdt,max(th.tgh_id)as id,max(crtm_carat_prty) as prty,max(tgh_iss_carat),max(tgh_no_of_tree) as noof,max(crtm_carat_clr) as clr from tree_gen_hdr th left join tree_gen_hdr_dtl t on th.tgh_doc_no=t.tghd_doc_no left join dpt_mst d on t.tghd_dpt_cd=d.dm_dpt_cd left join carat_mst on th.tgh_iss_carat=crtm_carat_nm and tgh_cmy_cd=crtm_cmy_cd where tgh_cmy_cd='"+getCmy()+"' and th.tgh_tree1_doc_no is not null and tgh_tree1_iss_cast=0 and t.tghd_iss_auth=1 and th.tgh_tree_sts=1 and t.tghd_tree_sts=1 and (crtm_carat_sts=1 or crtm_carat_sts is null) and (d.dm_sts=1 or d.dm_sts is null)  "+tr1+" "+expprty+" "+ctgy+" group by th.tgh_tree1_doc_no,t.tghd_dpt_cd "+tghtDt+" union "
				+ " select max(t.tghd_trgt_dt)as dt,cast ((STUFF(( SELECT ',' + tghd_ctgy_cd FROM tree_gen_hdr_dtl WHERE tghd_doc_no = max(t.tghd_doc_no) group by tghd_ctgy_cd FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,max(d.dm_dpt_nm)as dpt, sum(cast (t.tghd_pdt_qty as decimal))as qty,th.tgh_tree2_doc_no,max((cast(th.tgh_tree2_bse_std_wgt as float)-cast(th.tgh_tree2_bse_wgt as float))*crtm_carat_wgt)as bsewgt,t.tghd_dpt_cd,max(t.tghd_pdt_cd)as pdt,max(th.tgh_id)as id,max(crtm_carat_prty) as prty,max(tgh_iss_carat),max(tgh_no_of_tree) as noof,max(crtm_carat_clr) as clr from tree_gen_hdr th left join tree_gen_hdr_dtl t on th.tgh_doc_no=t.tghd_doc_no left join dpt_mst d on t.tghd_dpt_cd=d.dm_dpt_cd left join carat_mst on th.tgh_iss_carat=crtm_carat_nm and tgh_cmy_cd=crtm_cmy_cd where tgh_cmy_cd='"+getCmy()+"' and th.tgh_tree2_doc_no is not null and tgh_tree2_iss_cast=0 and t.tghd_iss_auth=1 and th.tgh_tree_sts=1 and (crtm_carat_sts=1 or crtm_carat_sts is null) and t.tghd_tree_sts=1 and (d.dm_sts=1 or d.dm_sts is null) "+tr2+" "+expprty+" "+ctgy+" group by th.tgh_tree2_doc_no,t.tghd_dpt_cd "+tghtDt+" union "
						+ " select max(t.tghd_trgt_dt)as dt,cast ((STUFF(( SELECT ',' + tghd_ctgy_cd FROM tree_gen_hdr_dtl WHERE tghd_doc_no = max(t.tghd_doc_no) group by tghd_ctgy_cd FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy, max(d.dm_dpt_nm)as dpt,sum(cast (t.tghd_pdt_qty as decimal))as qty,th.tgh_tree3_doc_no, max((cast(th.tgh_tree3_bse_std_wgt as float)-cast(th.tgh_tree3_bse_wgt as float))*crtm_carat_wgt)as bsewgt,t.tghd_dpt_cd,max(t.tghd_pdt_cd)as pdt,max(th.tgh_id)as id,max(crtm_carat_prty) as prty,max(tgh_iss_carat),max(tgh_no_of_tree) as noof,max(crtm_carat_clr) as clr from tree_gen_hdr th left join tree_gen_hdr_dtl t on th.tgh_doc_no=t.tghd_doc_no left join dpt_mst d on t.tghd_dpt_cd=d.dm_dpt_cd left join carat_mst on th.tgh_iss_carat=crtm_carat_nm and tgh_cmy_cd=crtm_cmy_cd where tgh_cmy_cd='"+getCmy()+"' and th.tgh_tree3_doc_no is not null and tgh_tree3_iss_cast=0 and t.tghd_iss_auth=1 and (crtm_carat_sts=1 or crtm_carat_sts is null) and th.tgh_tree_sts=1 and t.tghd_tree_sts=1 and (d.dm_sts=1 or d.dm_sts is null)  "+tr3+" "+expprty+" "+ctgy+" "
				+ "  group by th.tgh_tree3_doc_no,t.tghd_dpt_cd "+tghtDt+" ").list();		
		return srch;	
	}catch(Exception e){
		e.printStackTrace();
		return null;
	}
	}

	@Override
	public List<Stk_Mst> getAllStackTotWeigtBasedOnCmpltPrcs(String empid) {
		List<Stk_Mst> stk =ht.find("from Stk_Mst s where s.stm_stk_trn_typ='AlloyReceived'");
		return stk;
	}

	@Override
	public List<String> checkExistDocNoInCasting() {
	List<String> cstno=session.createSQLQuery("select cph_cst_no from cst_prcs_hdr where cph_cst_sts=1").list();
		return cstno;
	}

	@Override
	public void saveCastHdrDtlListToDataBase(List<Cst_Prcs_Hdr_Dtl> cstHdrDtlList) {
	ht.saveOrUpdateAll(cstHdrDtlList);
	}

	@Override
	public void saveCstHdrOnlyImpl(Cst_Prcs_Hdr cstHdrOnly) {
	ht.saveOrUpdate(cstHdrOnly);
	}

	@Override
	public void updateTreeGtrHdrDtlStsChangeInCstSent(String join,String wrkcd) {
		SQLQuery sql=session.createSQLQuery(" update tree_gen_hdr set tgh_tree1_iss_cast=1 where tgh_tree1_doc_no in ("+join+") and tgh_cmy_cd='"+getCmy()+"'"
				+ " update tree_gen_hdr set tgh_tree2_iss_cast=1 where tgh_tree2_doc_no in ("+join+") and tgh_cmy_cd='"+getCmy()+"'"
						+ " update tree_gen_hdr set tgh_tree3_iss_cast=1 where tgh_tree3_doc_no in ("+join+") and tgh_cmy_cd='"+getCmy()+"' ");
		
		sql.executeUpdate();
	}

	@Override
	public List<Object[]> getAllExistCstHdrDetailList() {
		String dept=(getLogEmpDpt().equals(""))?"":" and c.cph_dpt_cd='"+getLogEmpDpt()+"'";
		
	/*List<Object[]> exst=session.createSQLQuery("select c.cph_cst_no,c.cph_tot_iss_wgt,c.cph_tot_pdt_wgt,c.cph_tot_run_wgt,c.cph_tot_bal_wgt,c.cph_iss_auth,c.cph_rcvd_auth,c.cph_cst_sts,c.cph_id,"
			+ " (select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=cph_cmy_cd and cm_cmy_sts=1) as cmy,c.cph_iss_job_card,cph_iss_dmgd,cph_iss_cncld,(select top 1 cphd_tree_no from cst_prcs_hdr_dtl where cphd_cst_no=cph_cst_no and cphd_cst_sts=1) as treeno"
			+ ",cast ((STUFF(( SELECT ',' + cphd_tree_no FROM cst_prcs_hdr_dtl WHERE cphd_cst_no=cph_cst_no group by cphd_tree_no FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=cph_dpt_cd and dm_sts=1) as dpt,"
			+ "(select top 1 em_emp_nm from emp_mst where em_emp_id=cph_wrk_cd and em_emp_sts=1) as wrk,isnull(c.cph_cst_dt,c.cph_crt_dt),c.cph_crt_dt,c.cph_updt_dt  from "
			+ " cst_prcs_hdr c where [cph_cmy_cd]='"+getCmy()+"' "+dept+" and c.cph_cst_sts=1 order by cph_id desc").list();*/
		/*List<Object[]> exst=session.createSQLQuery("select c.cph_cst_no,c.cph_tot_iss_wgt,c.cph_tot_pdt_wgt,c.cph_tot_run_wgt,c.cph_tot_bal_wgt,c.cph_iss_auth,c.cph_rcvd_auth,c.cph_cst_sts,c.cph_id,"
				+ " (select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=cph_cmy_cd and cm_cmy_sts=1) as cmy,c.cph_iss_job_card,cph_iss_dmgd,cph_iss_cncld,(select top 1 cphd_tree_no from cst_prcs_hdr_dtl where cphd_cst_no=cph_cst_no and cphd_cst_sts=1) as treeno"
				+ ",cast ((STUFF(( SELECT ',' + cphd_tree_no FROM cst_prcs_hdr_dtl WHERE cphd_cst_no=cph_cst_no group by cphd_tree_no FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=cph_dpt_cd and dm_sts=1) as dpt,"
				+ "(select top 1 em_emp_nm from emp_mst where em_emp_id=cph_wrk_cd and em_emp_sts=1) as wrk,isnull(c.cph_cst_dt,c.cph_crt_dt),c.cph_crt_dt,c.cph_updt_dt,cast ((STUFF(( SELECT ',' + crtm_carat_prty FROM carat_mst WHERE crtm_carat_cd=cph_crt_id group by crtm_carat_prty FOR XML PATH('') ), 1, 1, '' )) as varchar) prty  from "
				+ " cst_prcs_hdr c where [cph_cmy_cd]='"+getCmy()+"' "+dept+" and c.cph_cst_sts=1 order by cph_id desc").list();*/
		List<Object[]> exst=session.createSQLQuery("select c.cph_cst_no,c.cph_tot_iss_wgt,c.cph_tot_pdt_wgt,c.cph_tot_run_wgt,c.cph_tot_bal_wgt,c.cph_iss_auth,c.cph_rcvd_auth,c.cph_cst_sts,c.cph_id,"
				+ " (select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=cph_cmy_cd and cm_cmy_sts=1) as cmy,c.cph_iss_job_card,cph_iss_dmgd,cph_iss_cncld,(select top 1 cphd_tree_no from cst_prcs_hdr_dtl where cphd_cst_no=cph_cst_no and cphd_cst_sts=1) as treeno"
				+ ",cast ((STUFF(( SELECT ',' + cphd_tree_no FROM cst_prcs_hdr_dtl WHERE cphd_cst_no=cph_cst_no group by cphd_tree_no FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=cph_dpt_cd and dm_sts=1) as dpt,"
				+ "(select top 1 em_emp_nm from emp_mst where em_emp_id=cph_wrk_cd and em_emp_sts=1) as wrk,isnull(c.cph_cst_dt,c.cph_crt_dt),c.cph_crt_dt,c.cph_updt_dt,cast ((STUFF(( SELECT ',' + crtm_carat_prty FROM carat_mst WHERE crtm_carat_cd=cph_crt_id group by crtm_carat_prty FOR XML PATH('') ), 1, 1, '' )) as varchar) prty,"
				+ "cast ((STUFF(( SELECT ',' + cphd_tree_prty FROM cst_prcs_hdr_dtl WHERE cphd_cst_no=cph_cst_no and cphd_tree_prty<>'' group by cphd_tree_prty FOR XML PATH('') ), 1, 1, '' )) as varchar) as tree_prty from "
				+ " cst_prcs_hdr c where [cph_cmy_cd]='"+getCmy()+"' "+dept+" and c.cph_cst_sts=1 order by cph_id desc").list();
			return exst;
	}

	@Override
	public Object[] getExsitCstHdrOnlyByIdInImpl(Long cstId) {
		List<Object[]> exst=session.createSQLQuery("select top 1 c.cph_cst_no,c.cph_tot_iss_wgt,c.cph_tot_pdt_wgt,c.cph_tot_run_wgt,c.cph_tot_bal_wgt,c.cph_iss_auth,c.cph_rcvd_auth,c.cph_id,cd.cphd_cmy_cd,cd.cphd_str_cd"
				+ ",cd.cphd_tght_dt,cd.cphd_cst_typ,cd.cphd_wrk_cd,c.cph_crt_dt,c.cph_crt_id,isnull(c.cph_cst_dt,c.cph_crt_dt) from "
				+ " cst_prcs_hdr c left join cst_prcs_hdr_dtl cd on c.cph_cst_no=cd.cphd_cst_no where c.cph_id="+cstId+" and c.cph_cst_sts=1 and cd.cphd_cst_sts=1 order by cph_id desc").list();
			return exst!=null&&!exst.isEmpty()?exst.get(0):null;
	}

	@Override
	public List<Object[]> getExsitCstHdrDtlsByIdInImpl(Long cstId) {
		List<Object[]> exst=session.createSQLQuery("select c.cphd_tght_dt,c.cphd_pdt_ctgy,d.dm_dpt_nm,c.cphd_pdt_qty,c.cphd_tree_no,c.cphd_rqre_wgt,c.cphd_iss_wgt,c.cphd_pdt_wgt,c.cphd_run_wgt"
				+ ",c.cphd_tst_smp,c.cphd_pwd_mtl,c.cphd_tree_prty,c.cphd_iss_auth,c.cphd_rcvd_auth,c.cphd_id,c.cphd_pdt_cd,c.cphd_dpt_cd,(select top 1 (crtm_carat_prty) from carat_mst where crtm_carat_nm=cphd_iss_carat and cphd_cmy_cd=crtm_cmy_cd and (crtm_carat_sts=1 or crtm_carat_sts is null)) as prty,cphd_tst_smpl_jsn"
				+ ",c.cphd_tst_smp_prty,c.cphd_iss_cmpl_dust,cphd_isd_tst_smp,cphd_prty_all_rcvd from cst_prcs_hdr_dtl c left join dpt_mst d on c.cphd_pdt_dpt_cd=d.dm_dpt_cd where "
				+ "c.cphd_cst_sts=1 and c.cphd_cst_no=(select co.cph_cst_no from cst_prcs_hdr co where co.cph_id="+cstId+")").list();
			return exst;
	}

	@Override
	public List<String> getExsitDptFrmCstHdrDtlsByIdImpl(Long cstId) {
		List<String> exstd=session.createSQLQuery("select cphd_dpt_cd from cst_prcs_hdr_dtl c where c.cphd_cst_sts=1 and c.cphd_cst_no=(select co.cph_cst_no from cst_prcs_hdr co where co.cph_id="+cstId+") group by c.cphd_dpt_cd").list();
		return exstd;
	}

	@Override
	public List<String> getExsitTreNoFrmCstHdrDtlsByIdImpl(Long cstId) {
		List<String> exstd=session.createSQLQuery("select cphd_tree_no from cst_prcs_hdr_dtl c where c.cphd_cst_sts=1 and c.cphd_cst_no=(select co.cph_cst_no from cst_prcs_hdr co where co.cph_id="+cstId+")  group by c.cphd_tree_no").list();
		return exstd;
	}

	@Override
	public List<Stk_Mst> getExistStkDetailInCstIssd(String empid) {
	List<Stk_Mst> stk=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='CastingIssue'");
		return stk;
	}

	@Override
	public List<Cst_Prcs_Hdr_Dtl> getExistCstDetailForUpdte(String docNo) {
		List<Cst_Prcs_Hdr_Dtl> exxst=ht.find("from Cst_Prcs_Hdr_Dtl c where c.cphd_cst_no=? and c.cphd_cst_sts=1",docNo);
		return exxst;
	}

	@Override
	public List<Tree_Gen_Hdr_Dtl> getAllTreeInCstPrcsSts() {
		List<Tree_Gen_Hdr_Dtl> ts=ht.find("from Tree_Gen_Hdr_Dtl t where t.tghd_cst_prcs_sts=1 and t.tghd_tree_sts=1");
		return ts;
	}

	@Override
	public void deleteExstCstDtlRec(String join) {
		SQLQuery sql=session.createSQLQuery("update cst_prcs_hdr_dtl set cphd_cst_sts=0 where cphd_id in ("+join+")");
		sql.executeUpdate();
	}

	@Override
	public void delCstHdrRecDtlAjaxImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update cst_prcs_hdr_dtl set cphd_cst_sts=0 where cphd_cst_no=(select co.cph_cst_no from cst_prcs_hdr co where co.cph_id="+id+")"
				+ " update cst_prcs_hdr set cph_cst_sts=0 where cph_id="+id+" "
						+ "  UPDATE td SET tghd_cst_prcs_sts=0 FROM tree_gen_hdr_dtl td JOIN cst_prcs_hdr_dtl cd ON td.tghd_pdt_cd = cd.cphd_pdt_cd and td.tghd_doc_no = cd.cphd_tree_no  where"
						+ " cd.cphd_cst_no=(select co.cph_cst_no from cst_prcs_hdr co where co.cph_id="+id+")");
		sql.executeUpdate();
	}

	@Override
	public List<Object[]> filterJobOrderAddInAjaxImpl(String ctgyTy,String ordNo,String pdtTyp,String pdtdptCd,String tgtDt,String cmycd,String waxNo,String prcsTyp,String bominjobqry,String moldtyp,String treeno,String ordtyp,String ordprty) {
		if(!ctgyTy.equalsIgnoreCase(""))ctgyTy=" dm_dgn_ctgy in ("+ctgyTy+") and ";
		if(!ordNo.equalsIgnoreCase(""))ordNo=" o.ohd_ord_jn_no in ("+ordNo+") and ";
		if(!pdtTyp.equalsIgnoreCase(""))pdtTyp=" dm_dgn_typ in ("+pdtTyp+") and ";
		if(!ordprty.equalsIgnoreCase(""))ordprty=" crtm_carat_prty='"+ordprty+"' and ";
		if(!pdtdptCd.equalsIgnoreCase(""))pdtdptCd=" dm_dgn_dpt in ("+pdtdptCd+") and ";
		if(!waxNo.equalsIgnoreCase(""))waxNo=" ohd_id in (select distinct whd_ord_prm_id from wax_hdr_dtl where whd_wax_sts=1 and whd_doc_no in ("+waxNo+")) and ";
		if(!treeno.equalsIgnoreCase(""))treeno=" ohd_id in( select distinct tghd_ord_prm_id from tree_gen_hdr_dtl where tghd_doc_no in ("+treeno+")) and ";
		if(!ordtyp.equalsIgnoreCase(""))ordtyp=" ohd_ord_typ in ("+ordtyp+") and ";
		List<Object[]> exst=null;
		if(prcsTyp.equalsIgnoreCase("InhouseBomMaking")){
			List<Object[]>exstMold=null,exstWithoutMold=null;exst=new ArrayList<Object[]>();
			if(StringUtils.isNotBlank(tgtDt)){
				tgtDt=" cast(o.ohd_ord_trgt_dt as date)<=cast('"+tgtDt+"' as date) and ";
				}else tgtDt=""; 
			String moldty="";		
			if(moldtyp.contains("With Mold")||moldtyp.equalsIgnoreCase("")){
				moldty=" 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and ";
				exstMold=session.createSQLQuery("select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id) as waxno,crtm_carat_prty from "
						+ " ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd left join dpt_mst dp on d.dm_dgn_dpt=dp.dm_dpt_cd  left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd where ohd_cmy_cd='"+getCmy()+"' and 0<(select count(dbm_id) from dgn_bom_mst where dbm_dgn_no=ohd_ord_pdt_cd) and "
								+ " o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and ([ohd_crnt_prcs]!='ReturnForJobCard' or [ohd_crnt_prcs] is null) and "+moldty+" "+ordNo+" "+ordprty+" "+pdtTyp+" "+tgtDt+"  "+waxNo+" "+ordtyp+" "+pdtdptCd+" "+ctgyTy+" d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null)  and (ohd_iss_bom_mk_prcs!='Sent' or ohd_iss_bom_mk_prcs is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and ohd_cmy_cd='"+cmycd+"' order by cast(ohd_ord_trgt_dt as date) asc").list();
			}
			if(moldtyp.contains("Without Mold")||moldtyp.equalsIgnoreCase("")){
				moldty=" 0=(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and ";
				exstWithoutMold=session.createSQLQuery("select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id) as waxno,crtm_carat_prty from "
							+ " ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd left join dpt_mst dp on d.dm_dgn_dpt=dp.dm_dpt_cd  left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd where ohd_cmy_cd='"+getCmy()+"' and 0<(select count(dbm_id) from dgn_bom_mst where dbm_dgn_no=ohd_ord_pdt_cd) and  "
									+ " o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and ([ohd_crnt_prcs]!='ReturnForJobCard' or [ohd_crnt_prcs] is null) and "+moldty+"  "+tgtDt+" "+ordprty+" "+ordNo+" "+pdtTyp+" "+ordtyp+" "+pdtdptCd+" "+ctgyTy+" d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null) and (ohd_iss_bom_mk_prcs!='Sent' or ohd_iss_bom_mk_prcs is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and ohd_cmy_cd='"+cmycd+"' order by cast(ohd_ord_trgt_dt as date) asc").list();
				}
			if(exstMold!=null&&!exstMold.isEmpty())exst.addAll(exstMold);
			if(exstWithoutMold!=null&&!exstWithoutMold.isEmpty())exst.addAll(exstWithoutMold);
		
		}
		else if(prcsTyp.equalsIgnoreCase("JobCardMaking")){
			String rejobcrd="";
			if(prcsTyp.equalsIgnoreCase("ReJob Card"))rejobcrd=" [ohd_crnt_prcs]='ReturnForJobCard' and ";
			else rejobcrd="([ohd_crnt_prcs]!='ReturnForJobCard' or [ohd_crnt_prcs] is null) and ";
			List<Object[]>exstMold=null,exstWithoutMold=null;exst=new ArrayList<Object[]>();
			if(StringUtils.isNotBlank(tgtDt)){
				tgtDt=" cast(o.ohd_ord_trgt_dt as date)<=cast('"+tgtDt+"' as date) and ";
				}else tgtDt=""; 
			String moldty="";		
			if(moldtyp.contains("With Mold")||moldtyp.equalsIgnoreCase("")){
				moldty=" 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and ohd_is_alw_job_ord=1 and ";
				exstMold=session.createSQLQuery("select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id order by  whd_id desc) as waxno,"
						+ "'' as molder,(select top 1 tghd_doc_no from tree_gen_hdr_dtl where tghd_ord_prm_id=ohd_id order by tghd_id desc) as treedoc,ohd_ord_rmk,crtm_carat_prty from "
						+ " ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd left join dpt_mst dp on d.dm_dgn_dpt=dp.dm_dpt_cd left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd where "
								+ " ohd_cmy_cd='"+getCmy()+"' and o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and "+rejobcrd+" "+moldty+" "+tgtDt+" "+treeno+" "+ordprty+" "+waxNo+" "+ordNo+" "+pdtTyp+" "+ordtyp+" "+pdtdptCd+" "+ctgyTy+" d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null) and (ohd_job_ord_prcs!='Sent' or ohd_job_ord_prcs is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and ohd_cmy_cd='"+cmycd+"' order by cast(ohd_ord_trgt_dt as date) asc").list();
			}
			if(moldtyp.contains("Without Mold")||moldtyp.equalsIgnoreCase("")){
				moldty=" 0=(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and ";
				exstWithoutMold=session.createSQLQuery("select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id) as waxno,'NILL' as molder,'' as tredocno,ohd_ord_rmk,crtm_carat_prty from "
						+ " ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd left join dpt_mst dp on d.dm_dgn_dpt=dp.dm_dpt_cd left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd  where "
								+ " ohd_cmy_cd='"+getCmy()+"' and o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and "+rejobcrd+" "+moldty+" "+tgtDt+" "+ordNo+" "+ordprty+" "+pdtTyp+" "+ordtyp+" "+pdtdptCd+" "+ctgyTy+" d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and (ohd_job_ord_prcs!='Sent' or ohd_job_ord_prcs is null) and ohd_cmy_cd='"+cmycd+"' order by cast(ohd_ord_trgt_dt as date) asc").list();
		}
			if(exstMold!=null&&!exstMold.isEmpty())exst.addAll(exstMold);
			if(exstWithoutMold!=null&&!exstWithoutMold.isEmpty())exst.addAll(exstWithoutMold);
		}
		else if(prcsTyp.equalsIgnoreCase("ReJob Card")){
			String rejobcrd="";
			List<Object[]>exstMold=null,exstWithoutMold=null;exst=new ArrayList<Object[]>();
			if(StringUtils.isNotBlank(tgtDt)){
				tgtDt=" cast(o.ohd_ord_trgt_dt as date)<=cast('"+tgtDt+"' as date) and ";
				}else tgtDt=""; 
			String moldty="";	
			
//			String str="select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id order by  whd_id desc) as waxno,'' as molder, (select top 1 tghd_doc_no from tree_gen_hdr_dtl where tghd_ord_prm_id=ohd_id order by tghd_id desc) as treedoc,ohd_ord_rmk,crtm_carat_prty ,(select top 1 johd_doc_no from job_ord_hdr_dtl inner join ord_hdr_dtl on ohd_id=johd_ord_prim_id and johd_fnsh_pdt_sts='Reject' and johd_cmy_cd='10001' order by johd_id desc ) as jobodrno,(select top 1 fpd_acpt_rjct_wgt from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='10001' and johd_cmy_cd='10001'  order by johd_id desc) as jobcartrejwt,(select top 1 isnull((select top 1 em_emp_nm from emp_mst where em_emp_id='11110007' and em_cmy_cd='10001'),(select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd='11110007' and vcm_cmy_cd='10001')) from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='10001' and johd_cmy_cd='10001'  order by johd_id desc)  as jobrejwrknm,(select top 1 fpd_rmrk from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='10001' and johd_cmy_cd='10001' order by johd_id desc)  as jobrejwrkresion  from  ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd left join dpt_mst dp on  d.dm_dgn_dpt=dp.dm_dpt_cd left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd where  ohd_cmy_cd='10001' and o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and  [ohd_crnt_prcs]='ReturnForJobCard' and  0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and ohd_is_alw_job_ord=1 and   crtm_carat_prty='91.70' and        d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null) and (ohd_job_ord_prcs!='Sent' or ohd_job_ord_prcs is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and ohd_cmy_cd='10001' order by cast(ohd_ord_trgt_dt as date) asc";
/*			String str="select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,"
					+ "(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,"
					+ "(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,"
					+ "(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id order by  whd_id desc) as waxno,'' as molder, "
					+ "(select top 1 tghd_doc_no from tree_gen_hdr_dtl where tghd_ord_prm_id=ohd_id order by tghd_id desc) as treedoc,"
					+ "ohd_ord_rmk,crtm_carat_prty ,(select top 1 johd_doc_no from job_ord_hdr_dtl inner join ord_hdr_dtl on ohd_id=johd_ord_prim_id and johd_fnsh_pdt_sts='Reject' and johd_cmy_cd='"+getCmy()+"' order by johd_id desc ) as jobodrno,"
					+ "(select top 1 fpd_acpt_rjct_wgt from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='"+getCmy()+"' and johd_cmy_cd='"+getCmy()+"'  order by johd_id desc) as jobcartrejwt,"
					+ "(select top 1 isnull((select top 1 em_emp_nm from emp_mst where em_emp_id=fpd_wrk_cd and em_cmy_cd='"+getCmy()+"'),(select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=fpd_wrk_cd and vcm_cmy_cd='"+getCmy()+"')) from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='"+getCmy()+"' and johd_cmy_cd='"+getCmy()+"'  order by johd_id desc)  as jobrejwrknm,"
					+ "(select top 1 fpd_rmrk from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='"+getCmy()+"' and johd_cmy_cd='"+getCmy()+"' order by johd_id desc)  as jobrejwrkresion  "
					+ "from  ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd "
					+ "left join dpt_mst dp on  d.dm_dgn_dpt=dp.dm_dpt_cd left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd where  "
					+ " ohd_cmy_cd='"+getCmy()+"' and o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and [ohd_crnt_prcs]='ReturnForJobCard' and "+moldty+" "+tgtDt+" "+treeno+" "+ordprty+" "+waxNo+" "+ordNo+" "+pdtTyp+" "+ordtyp+" "+pdtdptCd+" "+ctgyTy+" d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null) and (ohd_job_ord_prcs!='Sent' or ohd_job_ord_prcs is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and ohd_cmy_cd='"+cmycd+"' order by cast(ohd_ord_trgt_dt as date) asc").list();
				*/
			
//			moldty=" 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and ohd_is_alw_job_ord=1 and "; //commented for rejobcart
			exstMold=session.createSQLQuery("select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,"
							+ "(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,"
							+ "(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,"
							+ "(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id order by  whd_id desc) as waxno,'' as molder, "
							+ "(select top 1 tghd_doc_no from tree_gen_hdr_dtl where tghd_ord_prm_id=ohd_id order by tghd_id desc) as treedoc,"
							+ "ohd_ord_rmk,crtm_carat_prty ,(select top 1 johd_doc_no from job_ord_hdr_dtl inner join ord_hdr_dtl on ohd_id=johd_ord_prim_id and johd_fnsh_pdt_sts='Reject' and johd_cmy_cd='"+getCmy()+"' order by johd_id desc ) as jobodrno,"
							+ "(select top 1 fpd_acpt_rjct_wgt from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='"+getCmy()+"' and johd_cmy_cd='"+getCmy()+"'  order by johd_id desc) as jobcartrejwt,"
							+ "(select top 1 isnull((select top 1 em_emp_nm from emp_mst where em_emp_id=fpd_wrk_cd and em_cmy_cd='"+getCmy()+"'),(select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=fpd_wrk_cd and vcm_cmy_cd='"+getCmy()+"')) from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='"+getCmy()+"' and johd_cmy_cd='"+getCmy()+"'  order by johd_id desc)  as jobrejwrknm,"
							+ "(select top 1 fpd_rmrk from job_ord_hdr_dtl inner join fnsh_pdt_dtl  on (johd_doc_no=fpd_jbcd_no and fpd_btch_no=johd_pdt_btch_no and johd_pdt_cd=fpd_pdt_cd) where johd_fnsh_pdt_sts='Reject' and johd_ord_prim_id=o.ohd_id and fpd_cmy_cd='"+getCmy()+"' and johd_cmy_cd='"+getCmy()+"' order by johd_id desc)  as jobrejwrkresion  "
							+ "from  ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd "
							+ "left join dpt_mst dp on  d.dm_dgn_dpt=dp.dm_dpt_cd left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd where  "
							+ " ohd_cmy_cd='"+getCmy()+"' and o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and [ohd_crnt_prcs]='ReturnForJobCard' and "+moldty+" "+tgtDt+" "+treeno+" "+ordprty+" "+waxNo+" "+ordNo+" "+pdtTyp+" "+ordtyp+" "+pdtdptCd+" "+ctgyTy+" d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null) and (ohd_job_ord_prcs!='Sent' or ohd_job_ord_prcs is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and ohd_cmy_cd='"+cmycd+"' order by cast(ohd_ord_trgt_dt as date) asc").list();
							
							
			
			
			
			
			
			
/*			
			moldty=" 0<(select count(dmm_id) from dgn_mold_mst where dmm_dgn_no=ohd_ord_pdt_cd) and ohd_is_alw_job_ord=1 and ";
				exstMold=session.createSQLQuery("select o.ohd_ord_jn_no,(o.ohd_ord_pdt_cd) as pdtcd,(d.dm_dgn_ctgy) as ctgy,(dp.dm_dpt_nm) as dptnm,(o.ohd_ord_typ) as ordtyp,(o.ohd_ord_trgt_dt) as tgtdt,(d.dm_dgn_no) as dgnno,(o.ohd_ord_qty) as qty,(o.ohd_ord_std_wt) as stdwgt,(o.ohd_id) as id,(dm_dgn_typ) as dgntyp,(dp.dm_dpt_cd) as pdtdptcd,o.ohd_ord_bch_no,(select top 1 whd_doc_no from wax_hdr_dtl where whd_ord_prm_id=ohd_id order by  whd_id desc) as waxno,"
						+ "'' as molder,(select top 1 tghd_doc_no from tree_gen_hdr_dtl where tghd_ord_prm_id=ohd_id order by tghd_id desc) as treedoc,ohd_ord_rmk,crtm_carat_prty from "
						+ " ord_hdr_dtl o left join dgn_mst d on o.ohd_ord_pdt_cd=d.dm_pdt_cd and o.ohd_cmy_cd=d.dm_cmy_cd left join dpt_mst dp on d.dm_dgn_dpt=dp.dm_dpt_cd left join carat_mst on crtm_carat_nm=dm_dgn_carat and ohd_cmy_cd=crtm_cmy_cd where "
								+ " ohd_cmy_cd='"+getCmy()+"' and o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and [ohd_crnt_prcs]='ReturnForJobCard' and "+moldty+" "+tgtDt+" "+treeno+" "+ordprty+" "+waxNo+" "+ordNo+" "+pdtTyp+" "+ordtyp+" "+pdtdptCd+" "+ctgyTy+" d.dm_dgn_sts=1 and (dp.dm_sts=1 or dp.dm_sts is null) and (ohd_job_ord_prcs!='Sent' or ohd_job_ord_prcs is null) and (crtm_carat_sts=1 or crtm_carat_sts is null) and ohd_cmy_cd='"+cmycd+"' order by cast(ohd_ord_trgt_dt as date) asc").list();
*/			
			exst.addAll(exstMold);
		}
		else{
			exst=session.createSQLQuery(bominjobqry).list();
		}
		return exst;
	}

	@Override
	public String takeAutGenIdForJobOrdDocNo() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((joh_doc_no)+1) from job_ord_hdr c where Isnumeric(c.joh_doc_no)=1 and c.joh_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public List<String> getAllExistJobOrdDocNoForCheck() {
		List<String> sts=session.createSQLQuery("select joh_doc_no from job_ord_hdr where joh_sts=1").list();
		return sts;
	}

	@Override
	public void saveJobOrderHdrOnly(Job_Ord_Hdr jbOnly) {
		ht.saveOrUpdate(jbOnly);
	}

	@Override
	public void saveAllJobOrdHdrDetailImpl(List<Job_Ord_Hdr_Dtl> jbDtl) {
	ht.saveOrUpdateAll(jbDtl);
	}

	@Override
	public List<Object[]> getAllExsitJobOrdeHdrRec() {
	String dept=(getLogEmpDpt().equals(""))?"":"and joh_dpt_cd='"+getLogEmpDpt()+"'";	
	List<Object[]> exst=session.createSQLQuery("select j.joh_doc_no,(select cm_cmy_nm from cmy_mst where cm_cmy_cd=j.joh_cmy_cd and cm_cmy_sts=1) as cmyname,j.joh_tot_wgt,j.joh_pdt_typ,j.joh_iss_auth,j.joh_id,(select dm_dpt_nm from dpt_mst where dm_dpt_cd=joh_dpt_cd and dm_sts=1) as dptname,joh_mold_typ,(select top 1 jd.joh_tot_wgt from job_card_dtl jd where jcd_doc_no=joh_doc_no) as totjdwgt,joh_tot_prty,isnull(joh_doc_dt,joh_crt_dt),joh_crt_dt,joh_updt_dt from "
			+ " job_ord_hdr j where [joh_cmy_cd]='"+getCmy()+"' and j.joh_sts=1 "+dept+" order by j.joh_id desc").list();
	return exst;
	}

	@Override
	public void updateJobOrdStsInOrderTableTrue(String join,String prcsTyp) {
		SQLQuery sql=null;
		if(prcsTyp!=null&&prcsTyp.equalsIgnoreCase("InhouseBomMaking"))
		sql=session.createSQLQuery("update ord_hdr_dtl set ohd_iss_bom_mk_prcs='Sent' where ohd_id in ("+join+")");
		else
		sql=session.createSQLQuery("update ord_hdr_dtl set ohd_job_ord_prcs='Sent',[ohd_crnt_prcs]='JOBCARD',[ohd_crnt_wrk]='',[ohd_crnt_wrk_typ]='' where ohd_id in ("+join+")");	
		sql.executeUpdate();
	}

	@Override
	public List<Object[]> getAllExistJobHdrDetailForEdit(String id,String prcstyp) {
		List<Object[]> exst=null;
		if(prcstyp.equalsIgnoreCase("InhouseBomMaking")){
		/*exst=session.createSQLQuery("select j.johd_ord_no,j.johd_pdt_cd,j.johd_pdt_ctgy,(select top 1 dm_dpt_nm from dpt_mst left join dgn_mst on dm_dgn_dpt=dm_dpt_cd where dm_sts=1 and dm_pdt_cd=j.johd_pdt_cd and dm_dgn_typ=j.johd_pdt_typ and johd_pdt_ctgy=dm_dgn_ctgy and dm_dgn_sts=1),j.johd_ord_typ,j.johd_trgt_dt,"
				+ "j.johd_dgn_no,j.johd_ord_wgt,j.johd_id,j.johd_ord_wgt,j.johd_pdt_typ,(select top 1 bm_bom_nm from bom_mst where bm_bom_cd=johd_bom_cd and bm_bom_sts=1) as bomName,(select top 1 bm_bom_wip_typ from bom_mst where bm_bom_cd=johd_bom_cd and bm_bom_sts=1) as bomWipsts from job_ord_hdr_dtl j where j.johd_doc_no="
				+ "'"+id+"' and j.johd_job_sts=1").list();
		*/
			exst=session.createSQLQuery("select j.johd_ord_no,j.johd_pdt_cd,j.johd_pdt_ctgy,(select top 1 dm_dpt_nm from dpt_mst left join dgn_mst d on dm_dgn_dpt=dm_dpt_cd where dm_sts=1 and dm_pdt_cd=j.johd_pdt_cd and d.dm_cmy_cd=johd_cmy_cd and dm_dgn_typ=j.johd_pdt_typ and johd_pdt_ctgy=dm_dgn_ctgy and dm_dgn_sts=1),j.johd_ord_typ,j.johd_trgt_dt,"
					+ "j.johd_dgn_no,j.johd_ord_wgt,j.johd_id,j.johd_ord_wgt,j.johd_pdt_typ,johd_ord_prty,(select top 1 ohd_ord_rmk from ord_hdr_dtl where ohd_id=johd_ord_prim_id) as rmk from job_ord_hdr_dtl j where j.johd_doc_no="
					+ "'"+id+"' and j.johd_job_sts=1").list();
			
		}
		else if(prcstyp.equalsIgnoreCase("JobCardMaking")||prcstyp.equalsIgnoreCase("ReJob Card")){
			exst=session.createSQLQuery("select j.johd_ord_no,j.johd_pdt_cd,j.johd_pdt_ctgy,(select top 1 dm_dpt_nm from dpt_mst left join dgn_mst d on dm_dgn_dpt=dm_dpt_cd where dm_sts=1 and dm_pdt_cd=j.johd_pdt_cd and d.dm_cmy_cd=johd_cmy_cd and dm_dgn_typ=j.johd_pdt_typ and johd_pdt_ctgy=dm_dgn_ctgy and dm_dgn_sts=1),j.johd_ord_typ,j.johd_trgt_dt,"
					+ "j.johd_dgn_no,j.johd_ord_wgt,j.johd_id,j.johd_ord_wgt,j.johd_pdt_typ,j.johd_tree_no,johd_ord_prty,(select top 1 ohd_ord_rmk from ord_hdr_dtl where ohd_id=johd_ord_prim_id) as rmk from job_ord_hdr_dtl j where j.johd_doc_no="
					+ "'"+id+"' and j.johd_job_sts=1").list();
		}
		else{
			exst=session.createSQLQuery("select johd_ord_no,johd_bom_cd,bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,johd_ord_wgt,johd_ord_prty,johd_ord_qty,johd_id,johd_pdt_cd,bm_bom_typ from job_ord_hdr_dtl left join bom_mst on johd_bom_cd=bm_bom_cd where johd_job_sts=1 and johd_doc_no='"+id+"' and (bm_bom_sts=1 or bm_bom_sts is null)").list();	
		}
		return exst;
	}

	@Override
	public Object[] getExistJobOrdHdrDetOnlyIn(Long jobOrdId) {
		List<Object[]> exst=session.createSQLQuery("select top 1 j.joh_doc_no,jd.johd_dpt_cd,j.joh_pdt_typ,j.joh_tot_wgt,j.joh_iss_wgt,j.joh_tot_prty,"
				+ "j.joh_iss_prty,j.joh_crt_dt,j.joh_crt_id,j.joh_iss_auth,j.joh_id,j.joh_cmy_cd,j.joh_mold_typ,isnull(joh_doc_dt,joh_crt_dt) from job_ord_hdr j left join job_ord_hdr_dtl jd on j.joh_doc_no=jd.johd_doc_no where j.joh_id="
				+ ""+jobOrdId+" and jd.johd_job_sts=1").list();
		return exst!=null&&!exst.isEmpty()?exst.get(0):null;
	}

	@Override
	public List<String> getOrdNoInJobOrdHdrDet(Long jobOrdId) {
		List<String> ordNo=session.createSQLQuery("select distinct j.johd_ord_no from job_ord_hdr_dtl j where j.johd_doc_no="
				+ "(select joh_doc_no from job_ord_hdr where joh_id="+jobOrdId+")").list();
		return ordNo;
	}

	@Override
	public List<String> getExsitOrdTypFromJobHdrDtl(Long jobOrdId) {
		List<String> ordNo=session.createSQLQuery("select distinct j.johd_ord_typ from job_ord_hdr_dtl j where j.johd_doc_no="
				+ "(select joh_doc_no from job_ord_hdr where joh_id="+jobOrdId+")").list();
		return ordNo;
	}

	@Override
	public void delExistJobHdrDetailRecImpl(String join) {
		SQLQuery sql=session.createSQLQuery("update oh set ohd_job_ord_prcs='Pending' from ord_hdr_dtl oh join job_ord_hdr_dtl j on oh.ohd_ord_pdt_cd=j.johd_pdt_cd"
				+ " and oh.ohd_ord_no=j.johd_ord_no where j.johd_id in ("+join+")"
						+ " update job_ord_hdr_dtl set johd_job_sts=0 where johd_id in ("+join+")");
		sql.executeUpdate();
	}

	@Override
	public void delJobOrdHdrRecDtlImpl(String id,String typ) {
		SQLQuery sql=session.createSQLQuery("update oh set ohd_job_ord_prcs=(case when '"+typ+"'='JobCardMaking' then 'Pending' else ohd_job_ord_prcs end),"
				+ "ohd_iss_bom_mk_prcs=(case when '"+typ+"'='InhouseBomMaking' then 'Pending' else ohd_iss_bom_mk_prcs end) from ord_hdr_dtl oh join job_ord_hdr_dtl j on oh.ohd_ord_pdt_cd=j.johd_pdt_cd"
				+ " and oh.ohd_ord_no=j.johd_ord_no where j.johd_doc_no ='"+id+"' "
				+ " update job_ord_hdr_dtl set johd_job_sts=0 where johd_doc_no='"+id+"'"
								+ " update job_ord_hdr set joh_sts=0 where joh_doc_no='"+id+"'");
		sql.executeUpdate();
	}

	@Override
	public void jobOrderIssueINCstHdrRecDtlAjax(String  ordno) {
		SQLQuery sql=session.createSQLQuery("update ord_hdr_dtl set ohd_alw_inhse_bm_mk=1 where ohd_id in (select ohd_id from ord_hdr_dtl inner join wax_hdr_dtl on ohd_ord_no=whd_ord_no and ohd_ord_pdt_cd=whd_pdt_cd and ohd_ord_typ=whd_ord_typ"
				+ " where whd_doc_no='"+ordno+"' and whd_wax_sts=1) update wax_hdr set wh_iss_job_cd=1 where wh_doc_no='"+ordno+"'");
		sql.executeUpdate();
	}

	  public void jobOrderIssueINCstHdrRecDtlAjaxCastingafter(Long ids, String id)
	  {
	    SQLQuery sql = session.createSQLQuery("update ord_hdr_dtl set ohd_is_alw_job_ord=1 where ohd_id in (select tghd_ord_prm_id from tree_gen_hdr_dtl where tghd_doc_no in "
	    		+"( select distinct tgh_doc_no from tree_gen_hdr left join cst_prcs_hdr_dtl on (cphd_tree_no=tgh_tree1_doc_no or cphd_tree_no=tgh_tree2_doc_no or cphd_tree_no=tgh_tree3_doc_no) where cphd_cst_no='"+id+"' and cphd_rcvd_auth=1 ) )   "
	    				+ " update cst_prcs_hdr set cph_iss_job_card=1 where cph_id=" + ids + "");
	     sql.executeUpdate();
	  }
	  
	
	@Override
	public List<Object[]> getAddInternalTransferDataImpl(String dptCd, String trType,String cmycd,String qryChoise,String dpt,String docfilter) {
		List<Object[]> ext=null;
		if(trType.equalsIgnoreCase("Tree No")){
			if(StringUtils.isNotBlank(docfilter))docfilter=" and stm_itm_cd in ("+docfilter+")";
			 ext=session.createSQLQuery("select s.stm_stk_trn_typ,s.stm_itm_cd,s.stm_rcvd_stk_wgt,s.stm_stk_updt_dt,s.stm_stk_itm_typ,s.stm_rcvd_stk_prty,s.stm_id,"
			 		+ "(select top 1 (cast(cphd_tst_smp as float)+cast(cphd_pwd_mtl as float))as dstmtl from cst_prcs_hdr_dtl where cphd_cst_sts=1 and cphd_tree_no=s.stm_itm_cd),stm_stk_crt_id from stk_mst s "
					+ " where s.stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' "+docfilter+" and s.stm_stk_trn_typ like '%CastingRecieved%' and cast(s.stm_rcvd_stk_wgt as float)>0").list();
		}
		else if(trType.equalsIgnoreCase("JobCard")){
		if(!dptCd.equalsIgnoreCase(""))	{
			if(StringUtils.isNotBlank(docfilter))docfilter=" and joh_doc_no in ("+docfilter+")";
			ext=session.createSQLQuery(" select 'JobCard' as trftyp,joh_doc_no,(select isnull(sum(bij_iss_wgt),'') from bom_iss_job_dtl where bij_job_crd_no=joh_doc_no) as wgt,min(cast(johd_trgt_dt as date)) as trgtdt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=max(johd_pdt_dpt_cd) and dm_sts=1) as pdtDptnm,"
				+ " max(johd_pdt_dpt_cd) as pdtdptcd,max(j.joh_tot_wgt) as qty,max(joh_id) as id,max(stm_rcvd_stk_wgt) as fnlwgt,max(stm_id) as primStkId from job_ord_hdr_dtl left join job_ord_hdr j on johd_doc_no=joh_doc_no left join stk_mst on joh_doc_no=stm_itm_cd and johd_dpt_cd=stm_dpt_cd where cast(stm_rcvd_stk_wgt as float)>0 and stm_stk_trn_typ='JobCardMaked' and johd_job_sts=1 and johd_iss_auth=1 and "
				+ "  joh_pdt_typ='JobCardMaking' and (joh_intf_prcs_sts='Pending' or joh_intf_prcs_sts is null) "+docfilter+" and johd_pdt_dpt_cd in ("+dptCd+") and johd_dpt_cd='"+dpt+"' and joh_cmy_cd='"+cmycd+"' group by joh_doc_no").list();
		for(Object[] ex:ext){
			if(ex[3]!=null){
				SimpleDateFormat sm=new SimpleDateFormat("dd-MMM-yy");
				String dt=sm.format(ex[3]);
				if(dt.split("-")[2].equalsIgnoreCase("00"))
				ex[3]="";
				else
					ex[3]=dt;	
			}
		}
		}
		}
		else{
			if(StringUtils.isNotBlank(docfilter))docfilter=" and stm_itm_cd in ("+docfilter+")";
			ext=session.createSQLQuery(" select s.stm_stk_trn_typ,s.stm_itm_cd,s.stm_rcvd_stk_wgt,s.stm_stk_updt_dt,s.stm_stk_itm_typ,s.stm_rcvd_stk_prty,s.stm_id from stk_mst s "
					+ " where s.stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and ("+qryChoise+") "+docfilter+" and cast(s.stm_rcvd_stk_wgt as float)>0").list();	
		}
		return ext;
	}

	@Override
	public List<Object[]> getAddInternalTransferDataBasedOrdNo(String dptCd, String trType, String join,String cmycd,String qryChoise) {
		List<Object[]> ext=null;
		if(trType.equalsIgnoreCase("Tree No")){
			 ext=session.createSQLQuery("select s.stm_stk_trn_typ,s.stm_itm_cd,s.stm_rcvd_stk_wgt,s.stm_stk_updt_dt,s.stm_stk_itm_typ,s.stm_rcvd_stk_prty,s.stm_id,"
				 		+ "(select top 1 (cast(cphd_tst_smp as float)+cast(cphd_pwd_mtl as float))as dstmtl from cst_prcs_hdr_dtl where cphd_cst_sts=1 and cphd_tree_no=s.stm_itm_cd),stm_stk_crt_id from stk_mst s "
						+ " where  s.stm_itm_cd in ("+join+") and s.stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and s.stm_stk_trn_typ like '%CastingRecieved%' and cast(s.stm_rcvd_stk_wgt as float)>0").list();
			}
		else if(trType.equalsIgnoreCase("JobCard")){
			ext=session.createSQLQuery(" select 'JobCard' as trftyp,joh_doc_no,(select sum(bij_tot_wgt) from bom_iss_job_dtl where bij_job_crd_no=joh_doc_no) as wgt,min(cast(johd_trgt_dt as date)) as trgtdt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=max(johd_pdt_dpt_cd) and dm_sts=1) as pdtDptnm,"
					+ " max(johd_pdt_dpt_cd) as pdtdptcd,max(joh_tot_wgt) as qty,max(joh_id) as id from job_ord_hdr_dtl left join job_ord_hdr on johd_doc_no=joh_doc_no where johd_job_sts=1 and johd_iss_auth=1 and "
					+ " joh_iss_pdng='Completed' and (joh_intf_prcs_sts='Pending' or joh_intf_prcs_sts is null) and joh_doc_no in ("+join+") and johd_pdt_dpt_cd in ("+dptCd+") and joh_cmy_cd='"+cmycd+"' group by joh_doc_no").list();
			for(Object[] ex:ext){
				if(ex[3]!=null){
					SimpleDateFormat sm=new SimpleDateFormat("dd-MMM-yy");
					String dt=sm.format(ex[3]);
					if(dt.split("-")[2].equalsIgnoreCase("00"))
					ex[3]="";
					else
						ex[3]=dt;	
				}
			}
			}
			else{
				ext=session.createSQLQuery(" select s.stm_stk_trn_typ,s.stm_itm_cd,s.stm_rcvd_stk_wgt,s.stm_stk_updt_dt,s.stm_stk_itm_typ,s.stm_rcvd_stk_prty,s.stm_id from stk_mst s "
						+ " where s.stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and ("+qryChoise+") and s.stm_itm_cd in ("+join+") and cast(s.stm_rcvd_stk_wgt as float)>0").list();	
			}
			return ext;
	}

	@Override
	public String takeAutGenIdForintlTrfCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((ith_doc_no)+1) from intl_trf_hdr c where Isnumeric(c.ith_doc_no)=1 and c.ith_trf_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+80000;
		}
		else{
			return ""+80000;
		}
		}
		catch(Exception e){
			return ""+80000;
		}
	}

	@Override
	public List<String> getAllExistIntrlTrfCd() {
	List<String> exst=session.createSQLQuery("select ith_doc_no from intl_trf_hdr where ith_trf_sts=1").list();
		return exst;
	}

	@Override
	public void saveItnlHdrRecOnlyToDb(Intl_Trf_Hdr itlHrOnly) {
	ht.saveOrUpdate(itlHrOnly);
	}

	@Override
	public void saveItnlHderDetailToDb(List<Intl_Trf_Hdr_Dtl> itlHdrDetList) {
	ht.saveOrUpdateAll(itlHdrDetList);
	}

	@Override
	public List<Stk_Mst> getAllStakForAddInternTrf(String empid) {
		List<Stk_Mst> stk=ht.find("from Stk_Mst s where (s.stm_stk_trn_typ like '%Inward%' or s.stm_stk_trn_typ like '%InternalProcess%' )");
		return stk;
	}

	@Override
	public void updateStatusOfJobOrdHderDetail(String join) {
		SQLQuery sql=session.createSQLQuery("update job_ord_hdr_dtl set johd_itnl_prcs_sts='Sent' where johd_id in("+join+")");
		sql.executeUpdate();
	}

	@Override
	public List<Object[]> getAllExistIntrnlTrfHdrDetail() {
		String dept=(getLogEmpDpt().equals(""))?"":"and (i.ith_frm_dpt_cd='"+getLogEmpDpt()+"' or i.ith_to_dpt_cd='"+getLogEmpDpt()+"')";	
//	case when i.ith_trf_typ='Finished Pdt' then ith_tot_iss_wgt else ith_tot_rcvd_wgt end as ith_tot_rcvd_wgt
		List<Object[]> exst=session.createSQLQuery(" select i.ith_doc_no,df.dm_dpt_nm as frmDpt,de.dm_dpt_nm as endDpt,i.ith_trf_typ,ith_tot_rcvd_wgt,"
				+ "i.ith_tot_iss_wgt,i.ith_iss_auth,i.ith_id,(select top 1 cm_cmy_nm from cmy_mst where ith_cmy_cd=cm_cmy_cd and cm_cmy_sts=1) as cmy "
				+ ",ith_bom_isd_wgt,(select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=ith_cstr_cd and vcm_vnct_sts=1) as cstmr,isnull(i.ith_doc_dt,i.ith_crt_dt) as docDt, "
				+ "cast(STUFF((SELECT ',' + ithd_itm_prty FROM intl_trf_hdr_dtl md WHERE ithd_doc_no=i.ith_doc_no group by ithd_itm_prty FOR XML PATH('')), 1, 1, '') as varchar(max)) as purity "
				+ " from intl_trf_hdr i left join dpt_mst df on i.ith_frm_dpt_cd=df.dm_dpt_cd left join dpt_mst de on i.ith_to_dpt_cd=de.dm_dpt_cd"
				+ " where ith_cmy_cd='"+getCmy()+"' and (de.dm_sts=1 or de.dm_sts is null) "+dept+" and (df.dm_sts=1 or df.dm_sts is null) and i.ith_trf_sts=1 order by ith_id desc").list();
		return exst;
	}

	@Override
	public List<Object[]> getAllExistIntrlHdrDetRecFor(String docNo, String trfTyp) {
		List<Object[]> ext=null;
		if(trfTyp.equalsIgnoreCase("Tree No")){
			ext=session.createSQLQuery(" select i.ithd_itm_trn_typ,i.ithd_tree_no,i.ithd_itm_iss_wgt,i.ithd_updt_dt,i.ithd_itm_typ,i.ithd_itm_prty,i.ithd_iss_auth,s.stm_id,i.ithd_id,i.ithd_itm_rcvd_wgt,s.stm_rcvd_stk_wgt from intl_trf_hdr_dtl i "
					+ "left join stk_mst s  on i.ithd_to_dpt_cd=s.stm_dpt_cd and s.stm_stk_trn_typ='JobCardMaking' and i.ithd_tree_no=s.stm_itm_cd and i.ithd_itm_prty=s.stm_rcvd_stk_prty where i.ithd_doc_no='"+docNo+"' and "
							+ " i.ithd_trf_sts=1").list();	
		}
		else if(trfTyp.equalsIgnoreCase("JobCard")){
			ext=session.createSQLQuery("select 'JobCard' as trtyf,ithd_ord_no,(select top 1 dm_dpt_nm from dpt_mst where dm_sts=1 and dm_dpt_cd=ithd_itm_cd) as dptnm,ithd_itm_rcvd_wgt,ithd_itm_iss_wgt,(select min(cast(johd_trgt_dt as date)) from job_ord_hdr_dtl where johd_doc_no=ithd_ord_no and johd_job_sts=1) as trgtdt,ithd_tree_no,ithd_id,ithd_iss_auth,"
					+ " (select joh_id from job_ord_hdr where joh_doc_no=ithd_ord_no and joh_sts=1) as primidjobcd,ithd_itm_cd as dptcd,ithd_itm_prty from intl_trf_hdr_dtl "
					+ " where ithd_doc_no='"+docNo+"' and ithd_trf_sts=1").list();
			for(Object[] ex:ext){
				if(ex[5]!=null){
					SimpleDateFormat sm=new SimpleDateFormat("dd-MMM-yy");
					String dt=sm.format(ex[5]);
					if(dt.split("-")[2].equalsIgnoreCase("00"))
					ex[5]="";
					else
						ex[5]=dt;	
				}
			}
		}
		else if(trfTyp.equalsIgnoreCase("Bom")){
//			ext=session.createSQLQuery(" select bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bm_bom_typ,ithd_itm_rcvd_wgt,ithd_itm_iss_wgt,ithd_itm_typ,ithd_itm_prty from intl_trf_hdr_dtl left join bom_mst bom_mst on bm_bom_cd=ithd_itm_cd where ithd_doc_no='"+docNo+"' and ithd_trf_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null )").list();
			ext=session.createSQLQuery(" select bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bm_bom_typ,ithd_itm_rcvd_wgt,ithd_pdt_qty,ithd_itm_typ,ithd_itm_prty from intl_trf_hdr_dtl left join bom_mst bom_mst on bm_bom_cd=ithd_itm_cd where ithd_doc_no='"+docNo+"' and ithd_trf_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null )").list();
		}
		else if(trfTyp.equalsIgnoreCase("Finished Pdt")){
			ext=session.createSQLQuery(" select ithd_ord_no,ithd_trgt_dt,ithd_updt_id,ithd_ord_typ,ithd_pdt_ctgy,ithd_itm_prty,ithd_pdt_qty,ithd_itm_trn_typ,ithd_itm_iss_wgt,ithd_id,ithd_itm_cd,ithd_itm_typ,ithd_tree_no from intl_trf_hdr_dtl  where ithd_doc_no='"+docNo+"' and ithd_trf_sts=1 ").list();	
		}
		else{
			ext=session.createSQLQuery(" select i.ithd_itm_trn_typ,i.ithd_itm_cd,i.ithd_itm_iss_wgt,i.ithd_updt_dt,i.ithd_itm_typ,i.ithd_itm_prty,i.ithd_iss_auth,s.stm_id,i.ithd_id,i.ithd_itm_rcvd_wgt,s.stm_rcvd_stk_wgt from intl_trf_hdr_dtl i "
					+ "left join stk_mst s  on i.ithd_to_dpt_cd=s.stm_dpt_cd and i.ithd_itm_trn_typ=s.stm_stk_trn_typ  and i.ithd_itm_typ=s.stm_stk_itm_typ and i.ithd_itm_cd=s.stm_itm_cd and i.ithd_itm_prty=s.stm_rcvd_stk_prty where i.ithd_doc_no='"+docNo+"' and "
							+ " i.ithd_trf_sts=1").list();	
		}
		return ext;
	}

	@Override
	public Object getExistIntrlHdrOnly(String docNo) {
		List<Object[]> exst =session.createSQLQuery("select i.ith_doc_no,i.ith_crt_dt,i.ith_frm_dpt_cd,i.ith_to_dpt_cd,i.ith_trf_typ,i.ith_iss_auth,i.ith_tot_iss_wgt,i.ith_tot_rcvd_wgt,id.ithd_cmy_cd,id.ithd_str_cd,i.ith_id,i.ith_crt_id,i.ith_bom_isd_wgt,ith_cstr_cd"
				+ ",isnull(i.ith_doc_dt,i.ith_crt_id) from intl_trf_hdr i left join intl_trf_hdr_dtl id on i.ith_doc_no=id.ithd_doc_no where i.ith_doc_no='"+docNo+"' and i.ith_trf_sts=1 and id.ithd_trf_sts=1").list();
		return exst!=null&&!exst.isEmpty()?exst.get(0):null;
	}

	@Override
	public Intl_Trf_Hdr getInternalTrfHdrRecById(Long itnlId) {
		List<Intl_Trf_Hdr> ext=ht.find("from Intl_Trf_Hdr i where i.ith_id=? and i.ith_trf_sts=1",itnlId);
		return ext!=null&&!ext.isEmpty()?ext.get(0):null;
	}

	@Override
	public void delExstIntrnlHdrDetalRecByid(String join) {
		SQLQuery sql=session.createSQLQuery("update intl_trf_hdr_dtl set ithd_trf_sts=0 where ithd_id in("+join+")");
		sql.executeUpdate();
	}

	@Override
	public void stsChangeInJobHdrDetailById(String join) {
		SQLQuery sql=session.createSQLQuery("update job_ord_hdr_dtl set johd_itnl_prcs_sts='Pending' where johd_id in("+join+")");
		sql.executeUpdate();
	}

	@Override
	public List<Intl_Trf_Hdr_Dtl> getAllExsitIntrlHdrDetailRecByImpl(String docNo) {
		List<Intl_Trf_Hdr_Dtl> exst=ht.find("from Intl_Trf_Hdr_Dtl i where i.ithd_doc_no=? and i.ithd_trf_sts=1",docNo);
		return exst;
	}

	@Override
	public void deleteIntlTrfRecDtlImpl(Long id, String docno,String typ) {
		SQLQuery sql=session.createSQLQuery("update intl_trf_hdr_dtl set ithd_trf_sts=0 where ithd_doc_no ='"+docno+"'"
				+ " update intl_trf_hdr set ith_trf_sts=0 where ith_id="+id+"");
		sql.executeUpdate();
		if(typ.equalsIgnoreCase("JobOrder")){
			SQLQuery sql2=session.createSQLQuery("update job_ord_hdr_dtl set johd_itnl_prcs_sts='Pending' where johd_id in(select ithd_job_prmy_id from"
					+ " intl_trf_hdr_dtl where ithd_doc_no ='"+docno+"')");
			sql2.executeUpdate();
		}
		else if(typ.equalsIgnoreCase("JobCard Making")){
			SQLQuery sql2=session.createSQLQuery("update oh set ohd_job_ord_prcs='Pending' from ord_hdr_dtl oh join intl_trf_hdr_dtl i on oh.ohd_ord_pdt_cd=i.ithd_itm_cd and oh.ohd_ord_no=i.ithd_ord_no where "
					+ "i.ithd_doc_no='"+docno+"'");
			sql2.executeUpdate();
		}
	}

	@Override
	public void updateWaxHdrDetailRecFromPendingWaxTo(String exstWax) {
		SQLQuery sql=session.createSQLQuery("update wax_hdr_dtl set whd_iss_auth=1 where whd_id in("+exstWax+")");
		sql.executeUpdate();
	}

	@Override
	public void updateWaxHdrOnlyRecFromPendingWaxTo(String docNo) {
		SQLQuery sql=session.createSQLQuery("update wax_hdr set wh_iss_auth=1 where wh_doc_no ='"+docNo+"'");
		sql.executeUpdate();
	}

	@Override
	public List<String> getAllExistEmployeeMoblie() {
	List<String> sql=session.createSQLQuery("select em_emp_mob from emp_mst where em_emp_sts=1").list();
		return sql;
	}

	@Override
	public List<String> getAllExistEmployeeEmail() {
		List<String> sql=session.createSQLQuery("select em_emp_eml from emp_mst where em_emp_sts=1").list();
		return sql;
	}

	@Override
	public List<String> getAllExistVendorMoblie() {
		List<String> sql=session.createSQLQuery("select vcm_vnct_mob_no from vn_ct_mst where vcm_vnct_sts=1").list();
		return sql;
	}

	@Override
	public List<String> getAllExistVendorEmail() {
		List<String> sql=session.createSQLQuery("select vcm_vnct_eml from vn_ct_mst where vcm_vnct_sts=1").list();
		return sql;
	}

	@Override
	public void updateOrderHdrDetailComAndStrChange(String ohd_cmy_cd, String ohd_cst_cd, String ohd_str_cd,
			String ohd_ord_typ,String ordNo) {
		SQLQuery sql=session.createSQLQuery("update ord_hdr_dtl set ohd_cmy_cd='"+ohd_cmy_cd+"',ohd_cst_cd='"+ohd_cst_cd+"',"
				+ " ohd_str_cd='"+ohd_str_cd+"',ohd_ord_typ='"+ohd_ord_typ+"' where ohd_ord_no ='"+ordNo+"'");
		sql.executeUpdate();
	}

	@Override
	public void updateOrderHdrDetailListAuthUpdate(String priIdOfHdrDtl) {
		SQLQuery sql=session.createSQLQuery("update ord_hdr_dtl set ohd_iss_auth=1 where ohd_id in ("+priIdOfHdrDtl+")");
		sql.executeUpdate();
	}

	@Override
	public List<Iwd_Hdr_Dtl> getAllExistInwdHdrDetailById(String string) {
	List<Iwd_Hdr_Dtl> exst=ht.find("from Iwd_Hdr_Dtl i where i.ihd_iwd_sts=1 and i.ihd_doc_no=?",string);
		return exst;
	}

	@Override
	public List<String> getAllExistActiveBacthNo() {
	List<String> exstStr=session.createSQLQuery("select distinct ohd_ord_bch_no from ord_hdr_dtl where ohd_cmy_cd='"+getCmy()+"' and ohd_ord_sts=1").list();
		return exstStr;
	}

	@Override
	public List<Job_Ord_Hdr_Dtl> getAllExstJobOrdDetByDocNo(String string) {
	List<Job_Ord_Hdr_Dtl> exst=ht.find("from Job_Ord_Hdr_Dtl j where johd_job_sts=1 and johd_doc_no='"+string+"'");
	return exst;
	}

	@Override
	public List<Stk_Mst> getExistStkDetailInward(String em_emp_id) {
		List<Stk_Mst> est=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='Inward'");
		return est;
	}

	@Override
	public String getStkOfEmpl(String qry) {
		List<Object[]> exstk=session.createSQLQuery(qry).list();
		return exstk!=null&&!exstk.isEmpty()?""+exstk.get(0)[0]+"-"+exstk.get(0)[1]:"0-10000";
	}

	@Override
	public List<Ord_Hdr_Dtl> getExsitingOrderHdrDtlById(String oh_ord_no) {
	List<Ord_Hdr_Dtl> exst=ht.find("from Ord_Hdr_Dtl o where o.ohd_ord_no='"+oh_ord_no+"' and ohd_ord_sts=1");
		return exst;
	}

	@Override
	public void updatercvdWgtOfCastingImpl(String prty, Long id,String treeNo) {
	SQLQuery sql=session.createSQLQuery("update cst_prcs_hdr_dtl set cphd_tree_prty='"+prty+"' where cphd_id="+id+" update stk_mst set stm_rcvd_stk_prty='"+prty+"' where stm_itm_cd='"+treeNo+"' and stm_stk_trn_typ='CastingRecieved'");
		//	+ " update sm set sm.stm_rcvd_stk_prty='"+prty+"' from stk_mst sm join cst_prcs_hdr_dtl c on sm.stm_stk_crt_id=c.cphd_wrk_cd and sm.stm_itm_cd=c.cphd_pdt_cd where c.cphd_id="+id+" and sm.stm_stk_trn_typ='CastingRecieved'");
	sql.executeUpdate();
	}

	@Override
	public void updateRcvdPrtyOfAlyPrcsImpl(String qry) {
		SQLQuery sql=session.createSQLQuery(qry);
		sql.executeUpdate();
	}

	@Override
	public void updateOrdHderJobStsChangeDetail(String orderPriIds) {
		SQLQuery sql=session.createSQLQuery("update job_ord_hdr set joh_intf_prcs_sts='Sent' where joh_id in ("+orderPriIds+")");
		sql.executeUpdate();
	}

	@Override
	public List<Stk_Mst> getAllExsitJobRcvdForTransfer() {
		List<Stk_Mst> stkList=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='JobCardRecieved'");
		return stkList;
	}

	@Override
	public List<Stk_Mst> getAllExsitJobCardRecvedList() {
		List<Stk_Mst> stkList=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='JobCard Received'");
		return stkList;
	}

	@Override
	public List<Stk_Mst> getAllExsitJobCardIsueGreaterThenZeroList() {
		List<Stk_Mst> stkList=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='JobCard Issue' and cast(s.stm_rcvd_stk_wgt as float)>0");
		return stkList;
	}

	@Override
	public String getExistingPrimaryIdOfSubProcess() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((sph_prcs_no)+1) from sub_prcs_hdr c where Isnumeric(c.sph_prcs_no)=1 and c.sph_prcs_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+70000;
		}
		else{
			return ""+70000;
		}
		}
		catch(Exception e){
			return ""+70000;
		}
	}

	@Override
	public List<Prcs_Mst> getExistProcessDetailInSubPrcs() {
		List<Prcs_Mst> prcs=ht.find(" from Prcs_Mst p where p.pm_prcs_sts=1 and pm_prcs_typ=?","mainprocess");
		return prcs;
	}

	@Override
	public List<Job_Ord_Hdr> getExistJobOrderNoInAddsubPrcs() {
	List<Job_Ord_Hdr> exst=ht.find("from Job_Ord_Hdr j where j.joh_sts=1");
	return exst;
	}

	@Override
	public List<Tree_Gen_Hdr> getAllExstTreeNoHder() {
	List<Tree_Gen_Hdr>exst=ht.find("from Tree_Gen_Hdr t where t.tgh_tree_sts=1");
		return exst;
	}

	@Override
	public List<Object[]> getExistingJobAndtreeDetail(String cmycd) {
			List<Object[]> exst=null;
		try{
		exst=session.createSQLQuery("exec getListForAddSubProcess @companyCd='"+cmycd+"',@Jobcard='',@TreeNo='',@Targetdte='',@Department=''").list();
		}catch(Exception e){
			e.printStackTrace();
		}
		return exst;
	}

	@Override
	public List<Object[]> filterInJobCardAndTreeForImpl(String trgtDt, String jbCardNo, String treNo,String cmyCd,String DptCd) {
		List<Object[]> exst=null;
		try{
		exst=session.createSQLQuery("exec getListForAddSubProcess @companyCd='"+cmyCd+"',@Jobcard='"+jbCardNo+"',@TreeNo='"+treNo+"',@Targetdte='"+trgtDt+"',@Department='"+DptCd+"'").list();
		}catch(Exception e){
			e.printStackTrace();
		}
		return exst;
		/*List<Object[]> exstjob=null,exsttre=null;
		if(jbCardNo.equalsIgnoreCase(""))jbCardNo="select distinct joh_doc_no from job_ord_hdr where joh_sts=1";
		if(treNo.equalsIgnoreCase(""))treNo="select distinct tgh_doc_no from tree_gen_hdr where tgh_tree_sts=1";
		if(StringUtils.isBlank(trgtDt)){
		 exstjob=session.createSQLQuery("select j.johd_trgt_dt,s.stm_dpt_cd,'JOB CARD' as dcTy,j.johd_doc_no,s.stm_itm_cd,s.stm_stk_itm_typ,"
				+ "s.stm_rcvd_stk_wgt,s.stm_id,s.stm_rcvd_stk_prty from job_ord_hdr_dtl j left join stk_mst s on j.johd_pdt_cd=s.stm_itm_cd and j.johd_ord_prty=s.stm_rcvd_stk_prty "
				+ " where s.stm_stk_trn_typ='JobCard Received' and j.johd_job_sts=1 and j.johd_doc_no in ("+jbCardNo+") and s.stm_rcvd_stk_wgt>'0.00'").list();
		exsttre=session.createSQLQuery("select t.tghd_trgt_dt,t.tghd_dpt_cd,'Tree Geneartor' as dcssTy,t.tghd_doc_no,t.tghd_pdt_cd,'' as itmtyp,th.tgh_tree_tot_bse_std_wgt,t.tghd_id,'' as prtys"
				+ " from tree_gen_hdr_dtl t left join tree_gen_hdr th on t.tghd_doc_no=th.tgh_doc_no where t.tghd_tree_sts=1 and th.tgh_tree_sts=1 and t.tghd_iss_auth=1 and t.tghd_doc_no in ("+treNo+")").list();
		}
		else{
			 exstjob=session.createSQLQuery("select j.johd_trgt_dt,s.stm_dpt_cd,'JOB CARD' as dcTy,j.johd_doc_no,s.stm_itm_cd,s.stm_stk_itm_typ,"
						+ "s.stm_rcvd_stk_wgt,s.stm_id,s.stm_rcvd_stk_prty from job_ord_hdr_dtl j left join stk_mst s on j.johd_pdt_cd=s.stm_itm_cd and j.johd_ord_prty=s.stm_rcvd_stk_prty "
						+ " where s.stm_stk_trn_typ='JobCard Received' and j.johd_job_sts=1 and j.johd_doc_no in ("+jbCardNo+") and cast(j.johd_trgt_dt as date)<=cast('"+trgtDt+"' as date) and s.stm_rcvd_stk_wgt>'0.00'").list();
				exsttre=session.createSQLQuery("select t.tghd_trgt_dt,t.tghd_dpt_cd,'Tree Geneartor' as dcssTy,t.tghd_doc_no,t.tghd_pdt_cd,'' as itmtyp,th.tgh_tree_tot_bse_std_wgt,t.tghd_id,'' as prtys"
						+ " from tree_gen_hdr_dtl t left join tree_gen_hdr th on t.tghd_doc_no=th.tgh_doc_no where t.tghd_tree_sts=1 and th.tgh_tree_sts=1 and t.tghd_iss_auth=1 and t.tghd_doc_no in ("+treNo+") and cast(t.tghd_trgt_dt as date)<=cast('"+trgtDt+"' as date)").list();
				
		}
		List<Object[]>addTreJob=new ArrayList<Object[]>();
		if(exstjob!=null&&!exstjob.isEmpty())addTreJob.addAll(exstjob);
		if(exsttre!=null&&!exsttre.isEmpty())addTreJob.addAll(exsttre);
		return addTreJob;*/
		
	}

	@Override
	public List<Stk_Mst> getAllExsitStkIssSubPrcsList() {
		List<Stk_Mst> exst=ht.find("from Stk_Mst s where s.stm_stk_trn_typ like ?","%SubProcess Issue%");
		return exst;
	}

	@Override
	public void saveSupPrcsHdrDtalTODb(List<Sub_Prcs_Hdr_Dtl> sbPrcsHdrDtlList) {
	ht.saveOrUpdateAll(sbPrcsHdrDtlList);
	}

	@Override
	public void saveSupPrcsHdOnlyTODb(Sub_Prcs_Hdr sbPrcsHdr) {
		ht.saveOrUpdate(sbPrcsHdr);
	}

	@Override
	public List<Object[]> getExstSubProcessHderDetalForShow() {
		String dept=(getLogEmpDpt().equals(""))?"":" sph_frm_dpt='"+getLogEmpDpt()+"' and ";		
	/*List<Object[]> exst=session.createSQLQuery("select d.dm_dpt_nm,s.sph_prcs_no,p.pm_prcs_nm,(case when sph_wrk_typ='OutSideWrker' then (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=sph_wrk_cd and vcm_vnct_sts=1) else (select top 1 em_emp_nm from emp_mst where em_emp_id=sph_wrk_cd and em_emp_sts=1) end) as wrkorempnm,s.sph_iss_wgt,s.sph_rcvd_wgt,s.sph_bal_wgt,s.sph_iss_auth,s.sph_rcvd_auth,s.sph_id,(select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=sph_cmy_cd and cm_cmy_sts=1) as cmyNm,sph_wrk_typ"
			+ ",isnull(sph_prcs_dt,sph_crt_dt),cast(STUFF((SELECT ',' + sphd_iss_stk_prty FROM sub_prcs_hdr_dtl md WHERE sphd_prcs_no=sph_prcs_no group by sphd_iss_stk_prty FOR XML PATH('')), 1, 1, '') as varchar(max)) as purity,sm.smd_rcvd_prty,sm.smd_mtl_prty from "
			+ "sub_prcs_hdr s left join dpt_mst d on s.sph_frm_dpt=d.dm_dpt_cd left join prcs_mst p on s.sph_prcs_typ=p.pm_prcs_cd  left join sub_melt_dtl sm on sm.smd_doc_no=s.sph_prcs_no where "
			+ " "+dept+" sph_prcs_sts=1 and sph_cmy_cd='"+getCmy()+"' and (d.dm_sts=1 or d.dm_sts is null)  order by sph_id desc").list();
	*/
		List<Object[]> exst=session.createSQLQuery("select d.dm_dpt_nm,s.sph_prcs_no,p.pm_prcs_nm,(case when sph_wrk_typ='OutSideWrker' then (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=sph_wrk_cd and vcm_vnct_sts=1) else (select top 1 em_emp_nm from emp_mst where em_emp_id=sph_wrk_cd and em_emp_sts=1) end) as wrkorempnm,s.sph_iss_wgt,s.sph_rcvd_wgt,s.sph_bal_wgt,s.sph_iss_auth,s.sph_rcvd_auth,s.sph_id,(select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=sph_cmy_cd and cm_cmy_sts=1) as cmyNm,sph_wrk_typ"
				+ ",isnull(sph_prcs_dt,sph_crt_dt),ISNULL(cast(STUFF((SELECT ',' + sphd_iss_stk_prty  FROM sub_prcs_hdr_dtl md WHERE sphd_prcs_no=sph_prcs_no group by sphd_iss_stk_prty FOR XML PATH('')), 1, 1, '') as varchar(max)), sm.smd_mtl_prty) as purity,sm.smd_rcvd_prty,sm.smd_mtl_prty from "
				+ "sub_prcs_hdr s left join dpt_mst d on s.sph_frm_dpt=d.dm_dpt_cd left join prcs_mst p on s.sph_prcs_typ=p.pm_prcs_cd  left join sub_melt_dtl sm on sm.smd_doc_no=s.sph_prcs_no where "
				+ " "+dept+" sph_prcs_sts=1 and sph_cmy_cd='"+getCmy()+"' and (d.dm_sts=1 or d.dm_sts is null)  order by sph_id desc").list();
		return exst;
	}

	@Override
	public Object[] getSubPrcsHderForEdit(Long sph_id) {
		List<Object[]> exst=session.createSQLQuery("select top 1 s.sph_prcs_no,s.sph_crt_dt,s.sph_frm_dpt,s.sph_prcs_typ,sph_cmy_cd,sph_str_cd,s.sph_wrk_cd,sd.sphd_trgt_dt,s.sph_iss_wgt,s.sph_rcvd_wgt,s.sph_iss_auth,s.sph_rcvd_auth,s.sph_id,s.sph_crt_id,s.sph_crt_dt,s.sph_bal_wgt"
				+ ",sph_wrk_typ,isnull(sph_prcs_dt,sph_crt_dt) from sub_prcs_hdr s left join sub_prcs_hdr_dtl sd on s.sph_prcs_no=sd.sphd_prcs_no where s.sph_id="+sph_id+" and s.sph_prcs_sts=1 and (sd.sphd_prcs_sts=1 or sphd_prcs_sts is null)").list();
		return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	}

	@Override
	public List<Object[]> getSubPrcsHdrDtlForEdit(String sph_doc_no,String trntype,boolean ismelt) {
		List<Object[]> exstJob=null;
		try{
			if(ismelt){
				exstJob=session.createSQLQuery("select smd_trf_typ,smd_mtl_prty,smd_exst_mtl_wgt,smd_isd_mtl_wgt,smd_rcvd_mtl_wgt,smd_test_smp_wgt"
						+ ",smd_test_smps_jsn,smd_dust_mtl,smd_dust_auth,smd_rcvd_prty,smd_rcvd_prty_jsn,smd_bal_wgt,smd_isd_auth,smd_rcvd_auth,smd_id from sub_melt_dtl"
						+ " where smd_doc_no='"+sph_doc_no+"' and smd_mlt_sts=1").list();
			}
			else{
				exstJob=session.createSQLQuery("select (select top 1 pm_prcs_nm from prcs_mst where pm_prcs_cd=sphd_iss_doc_typ),s.sphd_trgt_dt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=mphd_frm_dpt and dm_sts=1) as dpt,"
						+ "mphd_iss_doc_ctgy as ctgytyp,s.sphd_iss_doc_no,mphd_iss_doc_qty,s.sphd_itm_cd,s.sphd_iss_stk_wgt,s.sphd_rcvd_stk_wgt,s.sphd_bal_wgt,s.sphd_iss_auth,s.sphd_rcvd_auth,"
						+ " s.sphd_id,s.sphd_crt_dt,sphd_iss_doc_typ,mphd_frm_dpt,[sphd_iss_stk_prty] from sub_prcs_hdr_dtl s left join mn_prcs_hdr_dtl on sphd_itm_typ=mphd_id where s.sphd_prcs_no='"+sph_doc_no+"'").list();	
		}
			}
		catch(Exception e){
			e.printStackTrace();
		}
		return exstJob;
	}

	@Override
	public List<Stk_Mst> getAllExstStkRcvdInSubPrcsList() {
		List<Stk_Mst> exst=ht.find("from Stk_Mst s where s.stm_stk_trn_typ like ? ","%SubProcess Received%");
		return exst;
	}

	@Override
	public void deletesubprcshdrDtlImpl(Long id, String docNo) {
		SQLQuery sql=session.createSQLQuery("update sub_prcs_hdr set sph_prcs_sts=0 where sph_id="+id+" "
				+ " update sub_prcs_hdr_dtl set sphd_prcs_sts=0 where sphd_prcs_no='"+docNo+"'");
		sql.executeUpdate();
	}

	@Override
	public String getExistingPrimaryIdOfMainProcess() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((mph_doc_no)+1) from mn_prcs_hdr c where Isnumeric(c.mph_doc_no)=1 and c.mph_prcs_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+50000;
		}
		else{
			return ""+50000;
		}
		}
		catch(Exception e){
			return ""+50000;
		}
	}
	@Override
	public String getExistingPrimaryIdOfMainTempProcess() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((mpth_doc_no)+1) from mn_prcs_tmp_hdr c where Isnumeric(c.mpth_doc_no)=1 and c.mpth_prcs_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+40000;
		}
		else{
			return ""+40000;
		}
		}
		catch(Exception e){
			return ""+40000;
		}
	}
	@Override
	public List<Object[]> getExistingJobAndtreeDetailMnPrcs() {
		//List<Object[]> exstjob=session.createSQLQuery("select j.johd_trgt_dt,j.johd_ord_typ,j.johd_doc_no,j.johd_pdt_cd,j.johd_ord_wgt,'' as bmreq,'' as bmwgt from job_ord_hdr_dtl j "
			//	+ " where j.johd_job_sts=1 and j.johd_iss_auth=1").list();
		List<Object[]> exstjob=session.createSQLQuery("select j.johd_trgt_dt,j.johd_ord_typ,j.johd_doc_no,s.stm_itm_cd,"
				+ "j.johd_ord_qty,s.stm_rcvd_stk_wgt,'JOB CARD' as dcsTy,s.stm_dpt_cd,s.stm_stk_itm_typ,s.stm_id,s.stm_rcvd_stk_prty from job_ord_hdr_dtl j left join stk_mst s on j.johd_pdt_cd=s.stm_itm_cd and j.johd_ord_prty=s.stm_rcvd_stk_prty "
				+ " where s.stm_stk_trn_typ='JobCard Received' and j.johd_job_sts=1 and cast(s.stm_rcvd_stk_wgt as float)>0").list();
	/*	List<Object[]> exsttre=session.createSQLQuery("select t.tghd_trgt_dt,t.tghd_doc_no,'' as ordTYpe,t.tghd_pdt_cd,th.tgh_tree_tot_bse_std_wgt,'Tree Geneartor' as dcssTy,'' as itmtyp,"
				+ " t.tghd_id,'' as prtys from tree_gen_hdr_dtl t left join tree_gen_hdr th on t.tghd_doc_no=th.tgh_doc_no where t.tghd_tree_sts=1 and th.tgh_tree_sts=1 and t.tghd_iss_auth=1").list();
		*/List<Object[]>addTreJob=new ArrayList<Object[]>();
		if(exstjob!=null&&!exstjob.isEmpty())addTreJob.addAll(exstjob);
	//	if(exsttre!=null&&!exsttre.isEmpty())addTreJob.addAll(exsttre);
		return addTreJob;
	}

	@Override
	public void saveMainPrcsHdrDtalTODb(List<Mn_Prcs_Hdr_Dtl> sbPrcsHdrDtlList) {
		ht.saveOrUpdateAll(sbPrcsHdrDtlList);	
	}

	@Override
	public void saveMainPrcsHdOnlyTODb(Mn_Prcs_Hdr sbPrcsHdr) {
		ht.saveOrUpdate(sbPrcsHdr);
	}

	@Override
	public List<Object[]> getAllMainPrcsHdrDetail() {
	List<Object[]> exst=session.createSQLQuery("select m.mph_doc_no,d.dm_dpt_nm,m.mph_mtl_wgt,m.mph_mtl_prty,m.mph_wrk_typ,e.em_emp_nm,v.vcm_vnct_nm,"
			+ "mph_iss_auth,mph_rcvd_auth,p.pm_prcs_nm from mn_prcs_hdr m left join dpt_mst d on d.dm_dpt_cd=m.mph_frm_dpt left join emp_mst e on e.em_emp_id=m.mph_wrk_cd"
			+ " left join vn_ct_mst v on v.vcm_vnct_cd=m.mph_wrk_cd left join prcs_mst p on p.pm_prcs_cd=m.mph_prcs_typ where m.mph_prcs_sts=1 and (v.vcm_vnct_sts=1 or v.vcm_vnct_sts is null) and (e.em_emp_sts=1 or "
			+ " e.em_emp_sts is null) and (d.dm_sts=1 or d.dm_sts is null) and p.pm_prcs_sts=1 or (p.pm_prcs_sts is null)").list();
		return exst;
	}

	@Override
	public List<Object[]> getAllMainPrcsHdrDetailNewByRam() {
		String dept=(getLogEmpDpt().equals(""))?"":" mph_frm_dpt='"+getLogEmpDpt()+"' and ";	
	List<Object[]> exst=session.createSQLQuery("select (select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=mph_cmy_cd and cm_cmy_sts=1) as cmynm,mph_doc_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=mph_frm_dpt and dm_sts=1) as dptnm,mph_mtl_wgt,mph_smi_fnsh_wgt,"
			+ "mph_scrp_mtl_wgt,mph_rcvd_wgt,mph_bal_wgt,(select top 1 pm_prcs_nm from prcs_mst where pm_prcs_cd=mph_prcs_typ  and pm_prcs_sts=1) as prcsnm,mph_wrk_typ,"
			+ "(case mph_wrk_typ when 'OutSideWrker' then (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=mph_wrk_cd and vcm_vnct_sts=1) else (select top 1 em_emp_nm from emp_mst where em_emp_id=mph_wrk_cd and em_emp_sts=1) end) as wrknm,"
			+ " mph_iss_auth,mph_rcvd_auth,mph_id,cast ((STUFF(( SELECT ',' + mphd_iss_doc_no FROM mn_prcs_hdr_dtl WHERE mphd_doc_no=mph_doc_no group by mphd_iss_doc_no FOR XML PATH('') ), 1, 1, '' )) as varchar) ctgy,isnull(mph_doc_dt,mph_crt_dt),cast(STUFF((SELECT ',' + mphd_pdt_prty FROM mn_prcs_hdr_dtl md WHERE mphd_doc_no=mph_doc_no group by mphd_pdt_prty FOR XML PATH('')), 1, 1, '') as varchar(max)) as purity"
			+ " from mn_prcs_hdr where mph_cmy_cd='"+getCmy()+"' and "+dept+" mph_prcs_sts=1 order by mph_id desc").list();
		return exst;
	}
	
	@Override
	public Mn_Prcs_Hdr getAllExstMnHdrForEdit(Long docNo) {
		List<Mn_Prcs_Hdr> rs=ht.find("from Mn_Prcs_Hdr m where m.mph_id=? and m.mph_prcs_sts=1",docNo);
		return rs!=null&&!rs.isEmpty()?rs.get(0):null;
	}

	@Override
	public List<Object[]> getExsitMAinPrcsHdrDetailForEdit(String docNo,Long primid) {
		
		/*	List<Object[]> exstjob=session.createSQLQuery("select m.mphd_trgt_dt,m.mphd_iss_doc_no,m.mphd_iss_doc_ctgy,"
					+ "mphd_iss_doc_qty,mphd_iss_doc_wgt,mphd_rqd_bom,mphd_bom_wgt,mphd_tot_isd_sub_isd,mphd_tot_smi_sub_rcvd,mphd_rtn_scrp_mtl,mpdh_bal_wgt,m.mphd_iss_auth,"
					+ "m.mphd_rcvd_auth,m.mphd_id,(select top 1 ithd_id from intl_trf_hdr_dtl where ithd_ord_no=mphd_iss_doc_no and ithd_trf_typ='JobCard' and ithd_cmy_cd=mphd_cmy_cd and ithd_trf_sts=1) as ithdid,"
					+ "m.mphd_sub_prcs_cd,isnull(mpjh_isd_wgt,mphd_sub_iss_wgt) as isdsub,isnull(mpjh_rcvd_wgt,mphd_sub_rcvd_wgt) as rcvdsub ,mphd_pndg_bom,mphd_pdt_prty from mn_prcs_hdr_dtl m left join mn_prcs_job_hdr j on mphd_doc_no=mpjh_mnprcs_doc_no "
					+ " and mpjh_job_crd_no=mphd_iss_doc_no and m.mphd_sub_prcs_cd=j.mphd_sub_prcs_cd and mphd_frm_dpt=mpjh_dpt_cd and mphd_wrk_cd=mpjh_wrk_cd and mphd_cmy_cd=mpjh_cmy_cd where mphd_doc_no ='"+docNo+"' and m.mphd_prcs_sts=1").list();
			*/
			List<Object[]> exstjob=session.createSQLQuery("select m.mphd_trgt_dt,m.mphd_iss_doc_no,m.mphd_iss_doc_ctgy,"
					+ "mphd_iss_doc_qty,mphd_iss_doc_wgt,mphd_rqd_bom,mphd_bom_wgt,mphd_tot_isd_sub_isd,mphd_tot_smi_sub_rcvd,mphd_rtn_scrp_mtl,mpdh_bal_wgt,m.mphd_iss_auth,"
					+ "m.mphd_rcvd_auth,m.mphd_id,(select top 1 ithd_id from intl_trf_hdr_dtl where ithd_ord_no=mphd_iss_doc_no and ithd_trf_typ='JobCard' and ithd_cmy_cd=mphd_cmy_cd and ithd_trf_sts=1) as ithdid,"
					+ "m.mphd_sub_prcs_cd,isnull(mpjh_isd_wgt,mphd_sub_iss_wgt) as isdsub,isnull(mpjh_rcvd_wgt,mphd_sub_rcvd_wgt) as rcvdsub ,mphd_pndg_bom,mphd_pdt_prty,(select top 1 sph_rcvd_wgt from sub_prcs_hdr left join sub_prcs_hdr_dtl on sph_prcs_no=sphd_prcs_no where sphd_iss_doc_no=mphd_iss_doc_no) as recvdwgt  from mn_prcs_hdr_dtl m left join mn_prcs_job_hdr j on mphd_doc_no=mpjh_mnprcs_doc_no "
					+ " and mpjh_job_crd_no=mphd_iss_doc_no and m.mphd_sub_prcs_cd=j.mphd_sub_prcs_cd and mphd_frm_dpt=mpjh_dpt_cd and mphd_wrk_cd=mpjh_wrk_cd and mphd_cmy_cd=mpjh_cmy_cd where mphd_doc_no ='"+docNo+"' and m.mphd_prcs_sts=1").list();
			
			return exstjob;	
	}

	@Override
	public void deleteExstMainHdrWithDetImpl(String doc) {
		SQLQuery sql=session.createSQLQuery("update mn_prcs_tmp_hdr set mpth_prcs_sts=0 where mpth_doc_no='"+doc+"' "
				+ " update mn_prcs_tmp_dtl set mptd_prcs_sts=0 where mptd_doc_no='"+doc+"'");
		sql.executeUpdate();
	}

	@Override
	public List<Stk_Mst> getAllExsitStkIssMainPrcsList() {
		List<Stk_Mst> exst=ht.find("from Stk_Mst s where s.stm_stk_trn_typ like ?","%MainProcess Issue%");
		return exst;
	}

	@Override
	public List<Stk_Mst> getAllExstStkRcvdInMainPrcsList() {
		List<Stk_Mst> exst=ht.find("from Stk_Mst s where s.stm_stk_trn_typ like ?","%MainProcess Received%");
		return exst;
	}

	@Override
	public List<Object[]> searchBasedOnDptAndJbCdInMainPrcsInmp(String dpt, String jbCrd, String trgtDt) {
	if(dpt.equalsIgnoreCase(""))	dpt="select s.stm_dpt_cd from stk_mst s where s.stm_stk_trn_typ='JobCard Received'";
	if(jbCrd.equalsIgnoreCase(""))jbCrd="select distinct j.johd_doc_no from job_ord_hdr_dtl  j where j.johd_job_sts=1";
		if(StringUtils.isBlank(trgtDt)){
		List<Object[]> exstjob=session.createSQLQuery("select j.johd_trgt_dt,isnull(j.johd_ord_typ,''),j.johd_doc_no,s.stm_itm_cd,"
				+ "isnull(j.johd_ord_qty,''),s.stm_rcvd_stk_wgt,'JOB CARD' as dcsTy,s.stm_dpt_cd,s.stm_stk_itm_typ,s.stm_id,s.stm_rcvd_stk_prty from job_ord_hdr_dtl j left join stk_mst s on j.johd_pdt_cd=s.stm_itm_cd and j.johd_ord_prty=s.stm_rcvd_stk_prty "
				+ " where s.stm_stk_trn_typ='JobCard Received' and j.johd_job_sts=1 and cast(s.stm_rcvd_stk_wgt as float)>0 and stm_dpt_cd='"+dpt+"'"
						+ " and j.johd_doc_no in ("+jbCrd+")").list();
		return exstjob;
	}
	else{
		List<Object[]> exstjob=session.createSQLQuery("select j.johd_trgt_dt,isnull(j.johd_ord_typ,''),j.johd_doc_no,s.stm_itm_cd,"
				+ "isnull(j.johd_ord_qty,''),s.stm_rcvd_stk_wgt,'JOB CARD' as dcsTy,s.stm_dpt_cd,s.stm_stk_itm_typ,s.stm_id,s.stm_rcvd_stk_prty from job_ord_hdr_dtl j left join stk_mst s on j.johd_pdt_cd=s.stm_itm_cd and j.johd_ord_prty=s.stm_rcvd_stk_prty "
				+ " where s.stm_stk_trn_typ='JobCard Received' and j.johd_job_sts=1 and cast(s.stm_rcvd_stk_wgt as float)>0 and cast(j.johd_trgt_dt as date)<=cast('"+trgtDt+"' as date) and stm_dpt_cd='"+dpt+"'"
						+ " and j.johd_doc_no in ("+jbCrd+")").list();
		return exstjob;
	}
	}

	@Override
	public List<Object[]> getAllInwardedItemForMainPrcsStkImpl(String val) {
		List<Object[]> sql=session.createSQLQuery("select b.bm_bom_nm,s.stm_stk_itm_typ,s.stm_itm_cd,s.stm_dpt_cd,s.stm_rcvd_stk_prty,s.stm_rcvd_stk_wgt,stm_id,i.ihd_doc_no"
				+ " from stk_mst s left join "
				+ "bom_mst b on s.stm_itm_cd=b.bm_bom_cd left join iwd_hdr_dtl i on i.ihd_pdt_cd=s.stm_itm_cd and i.ihd_iwd_typ=s.stm_stk_itm_typ and i.ihd_dpt_cd=s.stm_dpt_cd where i.ihd_iss_auth=1 and i.ihd_iwd_sts=1 and (b.bm_bom_sts=1 or b.bm_bom_sts is null) and s.stm_stk_itm_typ='BOM' and s.stm_itm_cd like'%"+val+"%' or b.bm_bom_nm like '%"+val+"%' ").list();
		List<Object[]> sql1=session.createSQLQuery("select b.rm_mst_pdt_nm,s.stm_stk_itm_typ,s.stm_itm_cd,s.stm_dpt_cd,s.stm_rcvd_stk_prty,s.stm_rcvd_stk_wgt,s.stm_id,i.ihd_doc_no from stk_mst s left join "
				+ "raw_mtr_mst b on s.stm_itm_cd=b.rm_mst_pdt_id left join iwd_hdr_dtl i on i.ihd_pdt_cd=s.stm_itm_cd and i.ihd_iwd_typ=s.stm_stk_itm_typ and i.ihd_dpt_cd=s.stm_dpt_cd where i.ihd_iss_auth=1 and i.ihd_iwd_sts=1 and (b.rm_mst_sts=1 or b.rm_mst_sts is null) and s.stm_stk_itm_typ='Raw Metrial' and b.rm_mst_pdt_nm like '%"+val+"%' or s.stm_itm_cd like '%"+val+"%' ").list();
		List<Object[]> cmp=new ArrayList<Object[]>();
		if(sql!=null&&!sql.isEmpty())cmp.addAll(sql);
		if(sql1!=null&&!sql1.isEmpty())cmp.addAll(sql1);
		return cmp;
	}

	@Override
	public List<Stk_Mst> getAllExsitInwardRecvedList() {
		List<Stk_Mst> stkList=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='Inward'");
		return stkList;
	}

	@Override
	public void saveMainPrcsHdrTmpDtalTODb(List<Mn_Prcs_Tmp_Dtl> sbPrcsHdrDtlList) {
	ht.saveOrUpdateAll(sbPrcsHdrDtlList);
	}

	@Override
	public void saveMainPrcsTempHdOnlyTODb(Mn_Prcs_Tmp_Hdr sbPrcsHdr) {
	ht.saveOrUpdate(sbPrcsHdr);
	}

	@Override
	public List<Object[]> getAllMainPrcsHdrTempDetail() {
		String dept=(getLogEmpDpt().equals(""))?"":" and mpth_frm_dpt='"+getLogEmpDpt()+"'";	
		List<Object[]> exst=session.createSQLQuery("select m.mpth_doc_no,(d.dm_dpt_nm) as dept,m.mpth_mtl_wgt,m.mpth_mtl_prty,(m.mpth_wrk_typ) as wrkty"
				+ ",(case when mpth_wrk_typ='ComWrker' then (select top 1 em_emp_nm from emp_mst where em_emp_id=mpth_wrk_cd and em_emp_sts=1) else (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=mpth_wrk_cd and vcm_vnct_sts=1) end) as empnm, (null) as vntnm,mpth_iss_auth,mpth_rcvd_auth,(p.pm_prcs_nm) as prcs,"
				+ "(select sum(cast([mptd_semi_bom] as float)) from mn_prcs_tmp_dtl where mptd_doc_no=mpth_doc_no) as semibom,"
				+ "cast (STUFF(( SELECT ',' + rdd_rcvd_doc_no FROM rcvd_doc_dtl WHERE rdd_isd_doc_no = mpth_doc_no group by rdd_rcvd_doc_no FOR XML PATH('') ), 1, 1, '' ) as varchar(max)) as rcvddocno,(cm_cmy_nm),(select sum(cast([mptd_rtn_smi_fsh_pdt]as float)) from mn_prcs_tmp_dtl where mptd_doc_no=mpth_doc_no) as rtnfinsh,"
				+ "(select sum(cast([mptd_rtn_scrp_mtl] as float)) from mn_prcs_tmp_dtl where mptd_doc_no=mpth_doc_no) as rtnscrp,isnull(m.mpth_doc_dt,m.mpth_crt_dt) ,"
				+ "cast(STUFF((SELECT ',' + mptd_itm_prty FROM mn_prcs_tmp_dtl md WHERE mptd_doc_no= m.mpth_doc_no group by mptd_itm_prty FOR XML PATH('')), 1, 1, '') as varchar(max)) as purity"
				+ " from mn_prcs_tmp_hdr"
				+ " m left join cmy_mst on mpth_cmy_cd=cm_cmy_cd left join dpt_mst d on d.dm_dpt_cd=m.mpth_frm_dpt"
				+ " left join prcs_mst p on p.pm_prcs_cd=m.mpth_prcs_typ where mpth_cmy_cd='"+getCmy()+"' and m.mpth_prcs_sts=1 "+dept+" and (cm_cmy_sts=1 or cm_cmy_sts is null)"
				+ " and (d.dm_sts=1 or d.dm_sts is null) and (p.pm_prcs_sts=1 or p.pm_prcs_sts is null) order by mpth_id desc").list();
			return exst;
	}

	@Override
	public Mn_Prcs_Tmp_Hdr getAllExstMnHdrTempForEdit(String docNo) {
		List<Mn_Prcs_Tmp_Hdr> rs=ht.find("from Mn_Prcs_Tmp_Hdr m where m.mpth_doc_no=? and m.mpth_prcs_sts=1",docNo);
		return rs!=null&&!rs.isEmpty()?rs.get(0):null;
	}

	@Override
	public List<Object[]> getExsitMAinPrcsTempHdrDetailForEdit(String docNo, String prcsType, boolean ismpth_iss_auth) {
		List<Object[]> exstjob=session.createSQLQuery("select m.mptd_trgt_dt,m.mptd_ord_typ,m.mptd_iss_doc_no,m.mptd_itm_cd,"
					+ "m.mptd_ord_qty,m.mptd_shw_wgt_rcvd,'DIRECT' as dcsTy,m.mptd_frm_dpt,m.mptd_itm_typ,0 as id,mptd_itm_prty,m.mptd_iss_wgt,m.mptd_rqd_bom,m."
					+ "mptd_bom_wgt,m.mptd_rtn_smi_fsh_pdt,m.mptd_rtn_scrp_mtl,m.mptd_bal_wgt,m.mptd_iss_auth,m.mptd_rcvd_auth,m.mptd_id,m.mptd_semi_bom,m.mptd_dc_isd_sts from mn_prcs_tmp_dtl m where m.mptd_doc_no='"+docNo+"' and m.mptd_prcs_sts=1").list();
			return exstjob;
			
	}

	@Override
	public List<Object[]> getDeptWiseInternalProcessIssuedImpl(String qry) {
	List<Object[]> res=session.createSQLQuery(qry).list();
		return res;
	}

	@Override
	public List<Stk_Mst> getAllExsitInternalProcessRecvedList() {
	List<Stk_Mst> stk=ht.find("from Stk_Mst s where (s.stm_stk_trn_typ='InternalProcess' or s.stm_stk_trn_typ='Inward')");
	return stk;
	}

	@Override
	public List<Stk_Mst> getAllExsitInternalTransfer() {
		List<Stk_Mst> stk=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='InternalProcess' or s.stm_stk_trn_typ='Inward'");
		return stk;
	}

	@Override
	public String checkTheInternalDocNOImpl(String docNo) {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select ith_doc_no from intl_trf_hdr c where c.ith_trf_sts=1 and ith_doc_no='"+docNo+"'").list();
		if(sql!=null&&!sql.isEmpty()){
				return ""+sql.get(0);
		}
		return null;
		}	catch(Exception e){
			return null;
		}
	}

	@Override
	public String checkMainPrcsTempDocNoinOImpl(String docNo) {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select mpth_doc_no from mn_prcs_tmp_hdr where mpth_prcs_sts=1 and mpth_doc_no='"+docNo+"'").list();
		if(sql!=null&&!sql.isEmpty()){
				return ""+sql.get(0);
		}
		return null;
		}	catch(Exception e){
			return null;
		}
	}

	@Override
	public String getExistingPrimaryIdRcvdDocOfMainProcess() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((rdd_rcvd_doc_no)+1) from rcvd_doc_dtl c where Isnumeric(c.rdd_rcvd_doc_no)=1").list();
		if(sql!=null&&!sql.isEmpty()){
				return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public String checkRcvdDocumentNoInMainPrcsImpl(String docNo) {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select rdd_rcvd_doc_no from rcvd_doc_dtl where rdd_rcvd_doc_no='"+docNo+"'").list();
		if(sql!=null&&!sql.isEmpty()){
				return ""+sql.get(0);
		}
		return null;
		}	catch(Exception e){
			return null;
		}
	}

	@Override
	public void saveRcvdDocumtDetailToDb(List<Rcvd_Doc_Dtl> rcvdhdrDtail) {
		ht.saveOrUpdateAll(rcvdhdrDtail);
	}

	@Override
	public Rcvd_Doc_Hdr chkRcvdDocuMntHdrByIsdDocNo(String rdh_isd_doc_no) {
	List<Rcvd_Doc_Hdr> exst=ht.find("from Rcvd_Doc_Hdr r where r.rdh_isd_doc_no=? and rdh_trf_typ='MainProcess'",rdh_isd_doc_no);
	return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	}

	@Override
	public Object[] getExistRcvdDocuDetail(String rdh_isd_doc_no,String trfTyp) {
		List<Object[]> exst=session.createSQLQuery("select sum(cast(rdd_tot_rcvd_wgt as float)) as 'totwgt',count(rdd_id) as 'cnt' from rcvd_doc_dtl where rdd_isd_doc_no='"+rdh_isd_doc_no+"' and rdd_trf_typ='"+trfTyp+"'").list();
		return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	}

	@Override
	public void saveOrUpdateRcvdDocHdr(Rcvd_Doc_Hdr rcvdHDrChk) {
		ht.saveOrUpdate(rcvdHDrChk);
	}

	@Override
	public List<Object[]> getExstingRcvdAllDocumentsImpl(String dptCd) {
		List<Object[]> sql=session.createSQLQuery("select rdd_rcvd_doc_no,rdd_itm_typ,(case rdd_itm_typ when 'Raw Metrial' then (select top 1 rm_mst_pdt_nm from raw_mtr_mst where rdd_itm_cd=rm_mst_pdt_id and rm_mst_sts=1) else (select top 1 bm_bom_nm from bom_mst where rdd_itm_cd=bm_bom_cd and bm_bom_sts=1) end ) as 'ItemName',"
				+ "rdd_itm_prty,rdd_itm_rcvd_wgt,rdd_itm_dst_wgt,rdd_tot_rcvd_wgt,rdd_itm_semi_wgt from rcvd_doc_dtl where rdd_isd_doc_no='"+dptCd+"' ").list();
		return sql;
	}

	@Override
	public boolean chkIsRcvdAuthrisedOrNot(String getmpth_doc_no) {
		List<Object[]> sql=session.createSQLQuery("select 'ss' where (select count(mptd_doc_no) from mn_prcs_tmp_dtl where  mptd_prcs_sts=1 and mptd_doc_no='"+getmpth_doc_no+"' group by mptd_doc_no)=(select count(mptd_doc_no) from mn_prcs_tmp_dtl where mptd_rcvd_auth=1 and mptd_prcs_sts=1 and mptd_doc_no='"+getmpth_doc_no+"' group by mptd_doc_no)").list();
		return (sql!=null&&!sql.isEmpty())?true:false;
	}

	@Override
	public List<Object[]> getwaxDetailForPrintImpl(String qry) {
		List<Object[]>exst=session.createSQLQuery(qry).list();
	return exst;
	}

	@Override
	public String takeAutGenIdForCarattCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((crtm_carat_cd)+1) from carat_mst c where Isnumeric(c.crtm_carat_cd)=1 and c.crtm_carat_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+10000;
		}
		else{
			return ""+10000;
		}
		}
		catch(Exception e){
			return ""+10000;
		}
	}

	@Override
	public void saveCartDetail(Carat_Mst caratDetail) {
		ht.saveOrUpdate(caratDetail);
	}

	@Override
	public Carat_Mst getDetailsOfCaratMst(Long carat_id) {
		try{
			List<Carat_Mst>estlist=ht.find("from Carat_Mst where crtm_id=?",carat_id);
			return (estlist!=null&&!estlist.isEmpty())?estlist.get(0):null;
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Carat_Mst> getExistCaratMasterdetail() {
		List<Carat_Mst> est=ht.find("from Carat_Mst c where crtm_cmy_cd='"+getCmy()+"' and crtm_carat_sts=1");
		return est;
	}

	@Override
	public void deleteCaratMasterRecImpl(Long id) {
		SQLQuery sql=session.createSQLQuery("update carat_mst set crtm_carat_sts=0 where crtm_id="+id+"");
		sql.executeUpdate();	
	}

	@Override
	public String getTreeGenratorOfThreeItem() {
		//  
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select isnull(max(cast(tgh_tree1_doc_no as float)),0) from ( select tgh_tree1_doc_no from tree_gen_hdr"
				+ " union select tgh_tree2_doc_no from tree_gen_hdr union select tgh_tree3_doc_no from tree_gen_hdr ) as tree").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+0;
		}
		else{
			return ""+0;
		}
		}
		catch(Exception e){
			return ""+0;
		}
	}

	@Override
	public List<Object[]> getAllInOutBomHouseDetial() {
	List<Object[]> ses=session.createSQLQuery("select b.bm_bom_cd,b.bm_bom_nm,b.bm_bom_wip_typ,b.bm_bom_sz,b.bm_bom_typ,sum(cast(db.dbm_bom_pcs as float)) as qty,max(dbm_crt_dt) as createddate from "
			+ "bom_mst b left join dgn_bom_mst db on b.bm_bom_cd=db.dbm_bom_cd where dbm_cmy_cd='"+getCmy()+"' and b.bm_bom_sts=1 and db.dbm_dgn_sts=1 group by b.bm_bom_cd,b.bm_bom_nm,b.bm_bom_wip_typ,b.bm_bom_sz,b.bm_bom_typ").list();
		return ses;
	}

	@Override
	public List<Stk_Mst> getStockBasedOnDeptMntInCastingImpl(String dptCd,String typ) {
		List<Stk_Mst> res=ht.find("from Stk_Mst s where s.stm_dpt_cd=? "+typ+"",dptCd);
		return res;
	}

	@Override
	public List<Spcl_Stk_Mst> getSpclStockOfEmployee() {
		List<Spcl_Stk_Mst> stk=ht.find("from Spcl_Stk_Mst s");
		return stk;
	}

	@Override
	public void saveOrUpdateSpclStkInDb(List<Spcl_Stk_Mst> spcStkList) {
		ht.saveOrUpdateAll(spcStkList);
	}

	@Override
	public List<Stk_Mst> getExistStkDetailInCstRcvd() {
		List<Stk_Mst> stk=ht.find("from Stk_Mst s where s.stm_stk_trn_typ='CastingRecieved'");
		return stk;
	}

	@Override
	public List<String> getAllExstOrderType() {
		List<String> exst=session.createSQLQuery("select distinct ohd_ord_typ from ord_hdr_dtl where ohd_cmy_cd='"+getCmy()+"' ").list();
		return exst;
	}

	@Override
	public List<String> getWaxNoForAddjobrderDetailInProcessPage() {
		List<String> exst=session.createSQLQuery("select distinct whd_doc_no from wax_hdr_dtl left join ord_hdr_dtl o on ohd_ord_pdt_cd=whd_pdt_cd and whd_ord_no=ohd_ord_no "
				+ " where o.ohd_ord_sts=1 and o.ohd_iss_auth=1 and o.ohd_job_ord_prcs='Pending' and (whd_wax_sts=1 or whd_wax_sts is null)").list();
		return exst;
	}

	@Override
	public List<Object[]> getBomDataByProductIdImpl(String qry) {
		List<Object[]> exst=session.createSQLQuery(qry).list();
		return exst;
	}

	@Override
	public void saveJobCardInBomDetail(List<Bom_Iss_Job_Dtl> bominjobcdlist) {
	ht.saveOrUpdateAll(bominjobcdlist);
	}

	@Override
	public List<Stk_Mst> getCastingStackStakForAddInternTrf(String em_emp_id) {
	List<Stk_Mst> exst=ht.find("from Stk_Mst where stm_stk_trn_typ like '%CastingRecieved%'");
	return exst;
	}

	@Override
	public List<Stk_Mst> getIsuedJobCardMakingStackForAddInternTrf() {
		List<Stk_Mst> exst=ht.find("from Stk_Mst where stm_stk_trn_typ like '%JobCardMaking%'");
		return exst;
	}

	@Override
	public List<Bom_Iss_Job_Dtl> getExstBomIssedjobDetail() {
	List<Bom_Iss_Job_Dtl> est=ht.find("from Bom_Iss_Job_Dtl where bij_bal_prcs_typ=?","InhouseBomMaking");
		return est;
	}

	@Override
	public List<Object[]> getAllPdtDeptInJobIssPending() {
		List<Object[]>  exst=session.createSQLQuery("select distinct johd_pdt_dpt_cd,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=johd_pdt_dpt_cd and dm_sts=1) from job_ord_hdr_dtl left join job_ord_hdr on johd_doc_no=joh_doc_no where joh_pdt_typ='JobCardMaking'"
				+ " and (joh_intf_prcs_sts='Pending' or joh_intf_prcs_sts is null) and (johd_job_sts=1 or johd_job_sts is null) and johd_pdt_dpt_cd is not null").list();
		return exst;
	}

	@Override
	public List<Object[]> searchBasedOnDptAndCmyCdInMainPrcsInmp(String qry) {
		List<Object[]> exstjob=session.createSQLQuery(qry).list();
		for(Object[] ex:exstjob){
			if(ex[0]!=null){
				SimpleDateFormat sm=new SimpleDateFormat("dd-MMM-yy");
				String dt=sm.format(ex[0]);
				if(dt.split("-")[2].equalsIgnoreCase("00"))
				ex[0]="";
				else
					ex[0]=dt;	
			}
		}
		return exstjob;
	}

	@Override
	public List<Object[]> getrequiredBomDetailOfJobCardImpl(String joNo,String dpt) {
		List<Object[]> exst=session.createSQLQuery("select bm_bom_nm,bm_bom_wip_typ,bm_bom_sz,bij_iss_wgt,bij_bom_cd,bm_bom_typ,bij_tot_wgt,bij_bal_wgt,bij_id,bij_rcvd_bom_wgt,bm_bom_wgt,bm_bom_qty"
				+ ",(select top 1 bij_iss_wgt from bom_iss_job_dtl b where bij_dpt_cd='"+dpt+"' and b.bij_bom_cd=bo.bij_bom_cd and bij_bal_prcs_typ='InhouseBomMaking') as exststkqty from bom_iss_job_dtl bo left join bom_mst on bm_bom_cd=bij_bom_cd "
				+ "where bm_bom_sts=1 and bij_bal_prcs_typ='JobCardMaking' and bij_job_crd_no='"+joNo+"' ").list();
		return exst;
	}

	@Override
	public List<String> getPendingJobCardFromJobOrdHdr(String dpt,String cmy) {
	List<String> exst=session.createSQLQuery("select joh_doc_no from job_ord_hdr  where joh_doc_no in (select distinct bij_job_crd_no from bom_iss_job_dtl where bij_bal_prcs_typ='JobCardMaking' and bij_dpt_cd='"+dpt+"'"
			+ " and bij_cmy_cd='"+cmy+"') and joh_sts=1 and joh_iss_pdng='Not Complete' and "
			+ " joh_iss_auth=1 and joh_pdt_typ='JobCardMaking' and joh_cmy_cd='"+cmy+"'").list();
		
	String jobCd=takeAutGenIdForJobOrdDocNo();
	if(exst==null){
		exst=new ArrayList<String>();
		exst.add(jobCd);
	}
	else{
		exst.add(0,jobCd);	
	}
	return exst;
	}

	@Override
	public List<Object[]> getPendingJobCardForMainPrcsImpl(String qry) {
		List<Object[]> exst=session.createSQLQuery(qry).list();
			return exst;
		
	}

	@Override
	public boolean checkIfJobCardDocNoIsPresentOrNotImpl(String docno) {
		List<String> exst=session.createSQLQuery("select joh_doc_no from job_ord_hdr where joh_sts=1 and joh_doc_no='"+docno+"'").list();
		return (exst!=null&&!exst.isEmpty())?true:false;
		
	}

	@Override
	public List<Object[]> searchBasedOnDptAndCmyCdAndOtherFilterInMainPrcsImpl(String dpt, String cmy, String trgtDt,
			String jbCard) {
		if(StringUtils.isNotBlank(trgtDt))trgtDt=" trgtdt<=cast('"+trgtDt+"' as date) and ";
		else trgtDt="";
		List<Object[]> exstjob=session.createSQLQuery("select * from (select (select min(cast(johd_trgt_dt as date)) from job_ord_hdr_dtl where johd_doc_no=stm_itm_cd and johd_job_sts=1) as trgtdt,	"
				+ "stm_itm_cd,convert(varchar (max),STUFF(( SELECT ',' + johd_pdt_ctgy FROM job_ord_hdr_dtl WHERE johd_doc_no = stm_itm_cd group by johd_pdt_ctgy FOR XML PATH('') ), 1, 1, '' )) as ctgy,"
				+ "(select top 1 joh_tot_wgt from job_ord_hdr where joh_doc_no=stm_itm_cd and joh_pdt_typ='JobCardMaking' and joh_sts=1) qty,stm_rcvd_stk_wgt,(select isnull(sum(bij_tot_wgt),'') from bom_iss_job_dtl where bij_job_crd_no=stm_itm_cd and bij_bal_prcs_typ='JobCardMaking') as rqrdbom,stm_id,"
				+ "(select isnull(sum(bij_bal_wgt),0) from bom_iss_job_dtl where bij_job_crd_no=stm_itm_cd and bij_bal_prcs_typ='JobCardMaking') as isbal,joh_sts,joh_mn_prcs_sts,stm_rcvd_stk_prty from stk_mst left join job_ord_hdr on joh_doc_no=stm_itm_cd where stm_cmy_cd='"+cmy+"' and stm_dpt_cd='"+dpt+"' and "
						+ " stm_stk_trn_typ='JobCardRecieved' and stm_itm_cd in ("+jbCard+")) as tbl where "+trgtDt+" joh_sts=1 and (joh_mn_prcs_sts!='Sent' or joh_mn_prcs_sts is null)" ).list();
		if(exstjob!=null){
		for(Object[] gt:exstjob){
			if(gt[0]!=null){
				SimpleDateFormat sm=new SimpleDateFormat("dd-MMM-yy");
				String dt=sm.format(gt[0]);
				if(dt.split("-")[2].equalsIgnoreCase("00"))
					gt[0]="";
				else
					gt[0]=dt;	
			}
		}
		}
		return exstjob;
	}

	@Override
	public void changeTheInternalTrfHdrDetailWithStatus(String primrIdOfItfh) {
	SQLQuery sql=session.createSQLQuery("update intl_trf_hdr_dtl set ithd_mn_prcs_sts='Sent' where ithd_id in ("+primrIdOfItfh+")");
	sql.executeUpdate();
	}

	@Override
	public List<Object[]> getrequiredBomDetailOfJobCardWrkerWiseImpl(String jobcrdno, String cmycd, String wrkcd,
			String dptCd,String mnprcsDocNo) {
		List<Object[]> exst=null;
		 exst=session.createSQLQuery("select bm_bom_nm,bm_bom_wip_typ,bm_bom_sz,mpjd_isd_bm_qty,bm_bom_cd,mpjd_isd_bm_qty,mpjd_rjct_bm_qty,mpjd_rmrk,mpjd_id from mn_prcs_job_dtl left join bom_mst on bm_bom_cd=mpjd_bom_cd "
					+ "where bm_bom_sts=1 and mpjd_job_crd_no='"+jobcrdno+"' and mpjd_mnprcs_doc_no='"+mnprcsDocNo+"' and mpjd_cmy_cd='"+cmycd+"' and mpjd_dpt_cd='"+dptCd+"' and mpjd_wrk_cd='"+wrkcd+"' ").list();
		 if(!(exst!=null&&!exst.isEmpty())){
		 exst=session.createSQLQuery("select bm_bom_nm,bm_bom_wip_typ,bm_bom_sz,bij_iss_wgt,bij_bom_cd from bom_iss_job_dtl left join bom_mst on bm_bom_cd=bij_bom_cd "
				+ "where bm_bom_sts=1 and bij_bal_prcs_typ='JobCardMaking' and bij_job_crd_no='"+jobcrdno+"' ").list();
		 }
		return exst;
	}

	@Override
	public void saveAllTheMnPrccJobDetailWithWorker(List<Mn_Prcs_Job_Dtl> mnPrcsJobList) {
		ht.saveOrUpdateAll(mnPrcsJobList);
	}

	@Override
	public void saveAllTheMnPrccJobHeaderWithWorker(List<Mn_Prcs_Job_Hdr> mnPrcsJobList) {
		ht.saveOrUpdateAll(mnPrcsJobList);
	}

	@Override
	public void deleteMainPrcsJobHdrRecMatch(String qry) {
	try{
		session.createSQLQuery(qry).executeUpdate();
	}
	catch(Exception e){
		e.printStackTrace();
	}
	}

	@Override
	public void sabeTheAlowdPrtyOfAlloyImpl(Long id, String isdPrty,String[] qry) {
	session.createSQLQuery("update aly_prcs_hdr_dtl set aphd_isd_tst_smp='"+isdPrty+"' where aphd_id="+id+"").executeUpdate();
	if(qry!=null&&qry.length>0){
		String qrys=String.join(" ",qry);
		session.createSQLQuery(qrys).executeUpdate();	
	}
	}

	@Override
	public List<Object[]> getAddInternalTransferDataJobMakedImpl(String qry) {
	List<Object[]> exstjob=session.createSQLQuery(qry).list();
	if(exstjob!=null){
		for(Object[] gt:exstjob){
			if(gt[4]!=null){
				SimpleDateFormat sm=new SimpleDateFormat("dd-MMM-yy");
				String dt=sm.format(gt[4]);
				if(dt.split("-")[2].equalsIgnoreCase("00"))
					gt[4]="";
				else
					gt[4]=dt;	
			}
		}
		}
	return exstjob;
	}

	@Override
	public void saveTheCastdPrtyOfEditImpl(Long id, String isdPrty,String[] qry) {
		session.createSQLQuery("update cst_prcs_hdr_dtl set cphd_isd_tst_smp='"+isdPrty+"' where cphd_id="+id+"").executeUpdate();	
		if(qry!=null&&qry.length>0){
			String qrys=String.join(" ",qry);
			session.createSQLQuery(qrys).executeUpdate();	
		}
	}

	@Override
	public void updateRcvdPrtyOfCastingPrcsImpl(String prty, String prtySmple, Long id, boolean isfilled,String isdmgd,String[] qry) {
		String isfil=isfilled?"YES":"NO";
		SQLQuery sql=session.createSQLQuery("update cst_prcs_hdr set cph_prty_all_rcvd='"+isfil+"',cph_iss_dmgd='"+isdmgd+"' where cph_cst_no=(select top 1 cphd_cst_no from cst_prcs_hdr_dtl where cphd_id="+id+")  update cst_prcs_hdr_dtl set cphd_tree_prty='"+prty+"',cphd_prty_all_rcvd='"+isfil+"',cphd_iss_dmgd='"+isdmgd+"',cphd_tst_smp_prty='"+prtySmple+"' where cphd_id="+id+""
				+ " update stk_mst set stm_rcvd_stk_prty='"+prty+"' where stm_itm_cd=(select top 1 cphd_tree_no from cst_prcs_hdr_dtl where cphd_id="+id+") and stm_stk_trn_typ='CastingRecieved'");
		sql.executeUpdate();
		if(qry!=null&&qry.length>0){
			SQLQuery sqlexc=session.createSQLQuery(String.join(" ", qry));
			sqlexc.executeUpdate();
		}
	}

	@Override
	public void updatecastprcssDustAuthsts(String qry) {
	session.createSQLQuery(qry).executeUpdate();	
	}

	@Override
	public List<Prcs_Mst> getExistProcessDetailInSubPrcsNotMain() {
		List<Prcs_Mst> prcs=ht.find(" from Prcs_Mst p where p.pm_prcs_sts=1 and pm_prcs_typ=?","subprocess");
		return prcs;
	}

	@Override
	public void saveAllBalanceBomWithJobCard(String join) {
		session.createSQLQuery(join).executeUpdate();	
	}

	@Override
	public List<Object[]> getPendingJobCardForWrkWithDptImpl(String qry) {
		List<Object[]> sql=session.createSQLQuery(qry).list();
		return sql;
	}

	@Override
	public void saveSubProcessRelatedDatas(String join) {
		session.createSQLQuery(join).executeUpdate();	
	}

	@Override
	public List<Object[]> runDynamicQueriesFromJavaScriptImpl(String qery) {
		List<Object[]> sql=session.createSQLQuery(qery).list();
		return sql;
	}

	@Override
	public String getExistingPrimaryIdOfDcProcess() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((dh_isd_doc_no)+1) from dc_hdr c where Isnumeric(c.dh_isd_doc_no)=1 and c.dh_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+30000;
		}
		else{
			return ""+30000;
		}
		}
		catch(Exception e){
			return ""+30000;
		}
	}

	@Override
	public List<Object[]> getDcProcessDetail() {
		try{
	String dept=(getLogEmpDpt().equals(""))?"":" dh_dpt_cd='"+getLogEmpDpt()+"' and ";	
	List<Object[]> exts=session.createSQLQuery("select cm_cmy_nm,dm_dpt_nm,dh_trf_typ,dh_isd_doc_no,dh_rcvd_doc_no,(case when dh_wrk_typ='OutSideWrker' then vcm_vnct_nm else em_emp_nm end) as wrknm,dh_isd_wgt,(case when(select top 1 dhd_trf_typ dd from dc_hdr_dtl where dhd_isd_doc_no=dh_isd_doc_no and dhs_sts=1)='Recovery' then (select round(sum(cast(dhd_isd_prty as float)*cast(dhd_rcvd_wgt as float)/cast(rhd_rqd_prty as float)),2) "
			+ "from rcvy_hdr_dtl inner join dc_hdr_dtl on dhd_isd_itm_cd=rhd_doc_no where dhd_isd_doc_no=dh_isd_doc_no) else dh_rcvd_wgt end) as newrcvd,dh_bal_wgt,dh_iss_auth,dh_rcvd_auth,dh_wrk_typ,dh_fnsh_wgt,dh_scrp_wgt,"
			+ "(select top 1 dhd_trf_typ dd from dc_hdr_dtl where dhd_isd_doc_no=dh_isd_doc_no and dhs_sts=1) as trftyp,(select sum(cast (dhd_rcvd_wgt1 as float)) from dc_hdr_dtl where dhd_isd_doc_no=dh_isd_doc_no) as rcvdwight,isnull(dh_isd_doc_dt,dh_crt_dt),"
			+ "cast(STUFF((SELECT ',' + dhd_isd_prty FROM dc_hdr_dtl md WHERE dhd_isd_doc_no=dh_isd_doc_no group by dhd_isd_prty FOR XML PATH('')), 1, 1, '') as varchar(max)) as purity from "
			+ " dc_hdr left join cmy_mst on dh_cmy_cd=cm_cmy_cd left join dpt_mst on dh_dpt_cd=dm_dpt_cd left join emp_mst on dh_wrk_cd=em_emp_id left join vn_ct_mst on dh_wrk_cd=vcm_vnct_cd where dh_cmy_cd='"+getCmy()+"' and "+dept+" dh_sts=1 and (dm_sts=1 or dm_sts is null) "
			+ " and (cm_cmy_sts=1 or cm_cmy_sts is null) and (em_emp_sts=1 or em_emp_sts is null) and (vcm_vnct_sts is null or vcm_vnct_sts=1) order by dh_id desc").list();
		return exts;
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Object[]> getExsistDcForEdit(String dcdocno) {
List<Object[]> exst=session.createSQLQuery("select dhd_trf_typ,dhd_isd_trgt_dt,dhd_isd_job_cd,dhd_isd_itm_cd,dhd_isd_qty,dhd_isd_exst_wgt"+
					",dhd_isd_rqd_bom,dhd_isd_bom_wgt,dhd_isd_wgt,dhd_rcvd_wgt,dhd_bal_wgt,dhd_chld_id,'' as bom,dhd_iss_auth,dhd_rcvd_auth,dhd_id"+
					 ",dhd_fnsh_wgt,dhd_scrp_wgt,dhd_isd_prty,dhd_rcvd_prty1,dhd_rcvd_prty2,dhd_rcvd_wgt1,dhd_rcvd_wgt2,dhd_smpl_jsn from dc_hdr_dtl where dhd_isd_doc_no='"+dcdocno+"' and dhs_sts=1 ").list();
	return exst;
	}

	@Override
	public Dc_Hdr getExsistDcHeaderForEdit(String dcdocno) {
		List<Dc_Hdr> exst=ht.find("from Dc_Hdr where dh_isd_doc_no=? and dh_sts=1",dcdocno);
		return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	}

	@Override
	public void deletedcprcshdrDtlAjax(String qry) {
		session.createSQLQuery(qry).executeUpdate();		
	}

	@Override
	public List<Object[]> getDataForFinishPdt(String em_cmy_cd) {
	List<Object[]> exts=session.createSQLQuery("exec getListOfFinishProduct @Company='"+em_cmy_cd+"',@targetDate='',@jobcard='',@pdtcode='',@jono=''").list();
	return exts;
	}

	@Override
	public List<Object[]> getSearchedRemarksForFinshImpl(String srch) {
		List<Object[]> exts=session.createSQLQuery(srch).list();
		return exts;
	}

	@Override
	public void saveFinshPdtPrcsHdrDetailByAjaxImpl(String join) {
		session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public String getExistingPrimaryIdOfFnshProcess() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((fph_doc_no)+1) from fnsh_pdt_hdr c where Isnumeric(c.fph_doc_no)=1 and c.fph_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+60000;
		}
		else{
			return ""+60000;
		}
		}
		catch(Exception e){
			return ""+60000;
		}
	}

	@Override
	public List<Object[]> getAllExistFinishPdtDetail() {
		String dept=(getLogEmpDpt().equals(""))?"":" and fph_dpt_cd='"+getLogEmpDpt()+"'";	
		List<Object[]> xst=session.createSQLQuery("select cm_cmy_nm,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=[fph_dpt_cd]) as dpt,[fph_doc_no],(case when fph_wrk_typ='OutSideWrker' then (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=fph_wrk_cd and vcm_vnct_sts=1) else (select top 1 em_emp_nm from emp_mst where em_emp_id=fph_wrk_cd and em_emp_sts=1) end) as emp,fph_tot_qty,fph_tot_wgt,"
			  +"fph_iss_auth,fph_rcvd_auth,fph_tot_acpt,fph_tot_rjct,fph_id,fph_wrk_typ,isnull(fph_doc_dt,fph_crt_dt)"
			  + ",cast(stuff((select ','+fpd_ord_prty from fnsh_pdt_dtl where fpd_doc_no=fph_doc_no  group by fpd_ord_prty for xml path('')),1,1,'') as varchar(max)) as purity from [fnsh_pdt_hdr] left join cmy_mst on fph_cmy_cd=cm_cmy_cd  "
			  +"where fph_cmy_cd='"+getCmy()+"' and [fph_sts]=1 "+dept+" and (cm_cmy_sts=1 or cm_cmy_sts is null)  order by fph_id desc").list();
		return xst;	
	}

	@Override
	public void deletefnshprcshdrDtlAjaxImpl(String qry) {
	session.createSQLQuery(qry).executeUpdate();
	}

	@Override
	public List<Object[]> getExistFinishPdtDetail(String docno) {
		List<Object[]> exst=session.createSQLQuery("select fpd_tgt_dt,fpd_pdt_cd,fpd_jo_no,fpd_ord_typ,fpd_ord_ctgy,fpd_ord_prty,fpd_ord_qty,fpd_acpt_rjct,"
				+ "isnull(fpd_acpt_rjct_wgt,'') as rjctdwgt,fpd_rmrk,fpd_jbcd_no,fpd_chld_primid,fpd_iss_auth,fpd_rcvd_auth,fpd_id,isnull(fpd_cross_wgt,'') as cros,isnull(fpd_non_gold_wgt,'')as gold,fpd_btch_no from fnsh_pdt_dtl where fpd_doc_no='"+docno+"' and fpd_sts=1").list();
		return exst;
	}

	@Override
	public Fnsh_Pdt_Hdr getExistFinishPdtHeadr(String docno) {
	List<Fnsh_Pdt_Hdr> exst=ht.find("from Fnsh_Pdt_Hdr f where f.fph_doc_no=? and fph_sts=1",docno);
		return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	}

	@Override
	public void updateMainProcessDetailForEditImpl(String qry) {
		session.createSQLQuery(qry).executeUpdate();	
	}

	@Override
	public void upddateMainProcessHderDetailStatusImpl(String qry) {
		session.createSQLQuery(qry).executeUpdate();		
	}

	@Override
	public List<Object[]> getSearchedRemarksForRecoveryImpl(String srch) {
		List<Object[]> exts=session.createSQLQuery(srch).list();
		return exts;
	}

	@Override
	public String takeAutGenIdForRecoveryCd() {
		List<Object[]> sql=null;
		try{
		sql=session.createSQLQuery("select max((rh_doc_no)+1) from rcvy_hdr c where Isnumeric(c.rh_doc_no)=1 and c.rh_sts=1").list();
		if(sql!=null&&!sql.isEmpty()){
			return sql.get(0)!=null?""+sql.get(0):""+20000;
		}
		else{
			return ""+20000;
		}
		}
		catch(Exception e){
			return ""+20000;
		}
	}

	@Override
	public void saveRcveyPrcsHdrDetailByAjaxImpl(String join) {
	session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public List<Object[]> getDateAndDescWiseFilterRecverImpl(String qry) {
		List<Object[]> exts=session.createSQLQuery(qry).list();
		return exts;
	}

	@Override
	public List<Object[]> getDptandWrkcdWiseFilterRecverImpl(String qry) {
		List<Object[]> exts=session.createSQLQuery(qry).list();
		return exts;
	}

	@Override
	public List<Object[]> getSearchedDescrptionForRecoveryImpl(String srch) {
		List<Object[]> exts=session.createSQLQuery(srch).list();
		return exts;
	}

	@Override
	public List<Object[]> getRecoveryProcessDetail() {
		try{
			String dept=(getLogEmpDpt().equals(""))?"":" rh_dpt_cd='"+getLogEmpDpt()+"' and ";	
		List<Object[]> exst=session.createSQLQuery("select (select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=rh_cmy_cd and cm_cmy_sts=1) as cmynm,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=rh_dpt_cd and dm_sts=1) as dptnm,"
				+ " (case when rh_wrk_typ='OutSideWrker' then (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=rh_wrk_cd and vcm_vnct_sts=1) else (select top 1 em_emp_nm from emp_mst where em_emp_id=rh_wrk_cd and em_emp_sts=1) end) as empnm,rh_doc_no,rh_tot_rcvy_bal,(select round(sum(cast(rhd_mtl_prty as float)*cast(rhd_rcvy_mtl as float)/cast(rhd_rqd_prty as float)),2)  from rcvy_hdr_dtl where rhd_doc_no=rh_doc_no) as covertedweight,[rh_bal_stk],rh_wrk_typ,[rh_tot_rcvy_wr],rh_tot_cnvt_wgt,isnull(rh_doc_dt,rh_crt_dt)"
				+ ",cast(STUFF((SELECT ',' +rhd_mtl_prty  FROM rcvy_hdr_dtl md WHERE rhd_doc_no=rh_doc_no group by rhd_mtl_prty FOR XML PATH('')), 1, 1, '') as varchar(max)) as purity"
				+ " from rcvy_hdr where rh_cmy_cd='"+getCmy()+"' and "+dept+" rh_sts=1 order by rh_id desc").list();
		return exst;  
		}
		catch(Exception e){
			e.printStackTrace();
			return null;  
		}
	}

	@Override
	public List<Object[]> getRecoverExstDataForEdit(String docno) {
		try{
			List<Object[]> exst=session.createSQLQuery("select (select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=rhd_dpt_cd and dm_sts=1) as dptnm,(case when rhd_wrk_typ='OutSideWrker' then (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=rhd_wrk_cd and vcm_vnct_sts=1) else (select top 1 em_emp_nm from emp_mst where em_emp_id=rhd_wrk_cd and em_emp_sts=1) end) as empnm,[rhd_dscr] ,[rhd_pure_gold_wgt] ,rhd_rcvy_bal,rhd_rqd_prty,rhd_strt_dt,rhd_end_dt,rhd_rcvy,rhd_rcvy_mtl,rhd_mtl_prty,[rhd_cnvt_rqd_pty] ,[rhd_rmrk],rhd_bal ,[rhd_rm_frm_rcvy],rhd_dpt_cd,rhd_wrk_cd,rhd_id,rhd_pg_rcvd,rhd_pg_bal from rcvy_hdr_dtl where rhd_doc_no='"+docno+"' ").list();
				return exst;  
			}
			catch(Exception e){
				e.printStackTrace();
				return null;  
			}
	}

	@Override
	public Rcvy_Hdr getRecoverHdrDataForEdit(String docno) {
		List<Rcvy_Hdr> exst=ht.find("from Rcvy_Hdr f where f.rh_doc_no=? and rh_sts=1",docno);
		return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	
	}

	@Override
	public List<Object[]> getExistAuthenticationDetail() {
	List<Object[]> exst=session.createSQLQuery("select (select top 1 cm_cmy_nm from cmy_mst where cm_cmy_cd=auth_cmy_cd and cm_cmy_sts=1) as cmy,auth_usr_nm,auth_usr_pwd,auth_id from auth_mst where auth_sts=1").list();
	return exst;
	}

	@Override
	public void saveorupdatetheAuthDetail(Auth_Mst auth) {
	ht.saveOrUpdate(auth);
	}

	@Override
	public Auth_Mst getExstAuthForEdit(Long id) {
		List<Auth_Mst> exst=ht.find("from Auth_Mst f where f.auth_id=?",id);
		return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	}

	@Override
	public Auth_Mst getAuthenticationChekerImpl(String email, String pwd, String cmycd) {
		List<Auth_Mst> exst=ht.find("from Auth_Mst f where f.auth_usr_nm=? and auth_usr_pwd=? and auth_cmy_cd=? and auth_sts=1",email,  pwd,  cmycd);
		return (exst!=null&&!exst.isEmpty())?exst.get(0):null;
	}

	@Override
	public void delAuthMstRecImpl(Long id) {
		session.createSQLQuery("update auth_mst set auth_sts=0 where auth_id="+id+"").executeUpdate();
	}

	@Override
	public List<Object[]> getDashBordData(String em_cmy_cd) {
		List<Object[]> exst=session.createSQLQuery("exec getDashBoardData @CompanyCd='"+em_cmy_cd+"',@Type='Header',@Dept=''").list();
		return exst;
	}

	@Override
	public List<Object[]> getDashBordDataForTable(String em_cmy_cd) {
		List<Object[]> exst=session.createSQLQuery("exec getDashBoardData @CompanyCd='"+em_cmy_cd+"',@Type='',@Dept=''").list();
		return exst;
	}

	@Override
	public List<Object[]> getDataForPintoutJOBCARDImpl(String qry) {
		List<Object[]> exst=session.createSQLQuery(qry).list();
		return exst;
	}

	@Override
	public void updateStkDetailFromTempMainnProcess(String join) {
		session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public void updateStkDetailFromInternalTrnsferProcess(String join) {
		session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public void updateStkDetailFromAlloyProcess(String join) {
		session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public void updateStkMagerFormInward(String join) {
		session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public void updateSpclStkQryInDb(String join) {
		session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public void updateStkMangeQryFromCasting(String join) {
		session.createSQLQuery(join).executeUpdate();
	}

	@Override
	public void InsertBidDetailInHouseMaking(String join) {
		List<Job_Ord_Hdr> hdr=ht.find("from Job_Ord_Hdr where joh_pdt_typ=?","JobCardMaking");
		session.createSQLQuery(join).executeUpdate();
		ht.saveOrUpdateAll(hdr);
	}

	@Override
	public List<Object[]> getNonIsdJobCardTreeNo() {
		List<Object[]> exst=session.createSQLQuery(" select * from ( select [tgh_tree1_doc_no] as dcno,tgh_doc_no from [tree_gen_hdr] where  [tgh_tree1_doc_no] is not null union all" 
+"  select [tgh_tree2_doc_no]  as dcno,tgh_doc_no from [tree_gen_hdr] where  [tgh_tree2_doc_no] is not null union all"
+" select [tgh_tree3_doc_no]  as dcno,tgh_doc_no from [tree_gen_hdr] where  [tgh_tree3_doc_no] is not null ) as tbl order by tgh_doc_no,dcno asc").list();
		return exst;
	}

	@Override
	public List<Object[]> getCompletedBomForIntrnalTransferImpl(String qry) {
		List<Object[]> exts=session.createSQLQuery(qry).list();
		return exts;
	}

	@Override
	public void updateCancelledtreeProductstsImpl(String qry) {
		session.createSQLQuery(qry).executeUpdate();
	}

	@Override
	public String getImagePath(String pdtcd) {
		List<Object[]> sql=session.createSQLQuery("select top 1 dm_dgn_img from dgn_mst where dm_pdt_cd='"+pdtcd+"' and dm_cmy_cd='"+getCmy()+"'").list();
	return (sql!=null&&!sql.isEmpty())?""+sql.get(0):null;
	}

	@Override
	public List<Object[]> getProductDetailImpl(String qry) {
		List<Object[]> exts=session.createSQLQuery(qry).list();
		return exts;
	}

	@Override
	public List<Object[]> getDepartmentWiseWorker(String em_dpt_cd,String typ) {
		if(StringUtils.isBlank(em_dpt_cd))em_dpt_cd="10000";
		else{
			em_dpt_cd=em_dpt_cd.split(",")[0];
		}
		if(StringUtils.isNotBlank(typ)&&typ.equalsIgnoreCase("Admin")){
			List<Object[]> exts=session.createSQLQuery("select em_emp_id,em_emp_nm from emp_mst where em_cmy_cd='"+getCmy()+"' and em_emp_sts=1 and em_emp_typ='Worker'").list();
			return exts;	
		}
		else{
		List<Object[]> exts=session.createSQLQuery("select em_emp_id,em_emp_nm from emp_mst where em_cmy_cd='"+getCmy()+"' and em_emp_sts=1 and '"+em_dpt_cd+"' in (SELECT Item FROM dbo.SplitString(em_dpt_cd, ',')) and em_emp_typ='Worker'").list();
		return exts;
		}
	}

	@Override
	public List<Object[]> getDepartmentWisePrcs(String em_dpt_cd, String em_emp_typ,String prcstyp) {
		if(StringUtils.isBlank(em_dpt_cd))em_dpt_cd="10000";
		else{
			em_dpt_cd=em_dpt_cd.split(",")[0];
		}
		if(StringUtils.isNotBlank(em_emp_typ)&&em_emp_typ.equalsIgnoreCase("Admin")){
			List<Object[]> exts=session.createSQLQuery("select pm_prcs_cd,pm_prcs_nm from prcs_mst where pm_cmy_cd='"+getCmy()+"' and pm_prcs_typ='"+prcstyp+"' and pm_prcs_sts=1 ").list();
			return exts;	
		}
		else{
		List<Object[]> exts=session.createSQLQuery("select pm_prcs_cd,pm_prcs_nm from prcs_mst where pm_prcs_sts=1 and pm_cmy_cd='"+getCmy()+"' and pm_prcs_typ='"+prcstyp+"' and '"+em_dpt_cd+"' in (SELECT Item FROM dbo.SplitString(pm_dpt_cd, ','))").list();
		return exts;
		}
		/**/
	}

	@Override
	public List<Object[]> getDepartmentWiseVndr(String em_dpt_cd, String em_emp_typ) {
		if(StringUtils.isBlank(em_dpt_cd))em_dpt_cd="10000";
		else{
			em_dpt_cd=em_dpt_cd.split(",")[0];
		}
		if(StringUtils.isNotBlank(em_emp_typ)&&em_emp_typ.equalsIgnoreCase("Admin")){
			List<Object[]> exts=session.createSQLQuery("select vcm_vnct_cd,vcm_vnct_nm from vn_ct_mst where vcm_cmy_cd='"+getCmy()+"' and vcm_vnct_sts=1 ").list();
			return exts;	
		}
		else{
		List<Object[]> exts=session.createSQLQuery("select vcm_vnct_cd,vcm_vnct_nm from vn_ct_mst where vcm_cmy_cd='"+getCmy()+"' and vcm_vnct_sts=1 and '"+em_dpt_cd+"' in (SELECT Item FROM dbo.SplitString(vcm_dpt_cd, ','))").list();
		return exts;
		}
	}

	@Override
	public boolean isAllow(String page) {
		if (StringUtils.isNotBlank(SecurityContextHolder.getContext().getAuthentication().getName())
				&& !SecurityContextHolder.getContext().getAuthentication().getName().equals("anonymousUser")) {
			try{
				String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
				Emp_Mst empDtls=getEmplyeeDetailByEmail(usEml);
				if(empDtls.getEm_dpt_cd()==null||empDtls.getEm_emp_typ().equalsIgnoreCase("Admin")){
					return true;
				}
				else{
					String dpt=empDtls.getEm_dpt_cd().split(",")[0];
					List<User_Permission> res=ht.find("from User_Permission where up_dpt_cd='"+dpt+"' and '/'+up_pg_nm+'.mm'='"+page+"' and (up_pg_trn_typ='' or up_pg_trn_typ is null)");
					return (res!=null&&!res.isEmpty())?false:true;
				}
			}
			catch(Exception e){
				e.printStackTrace();
				return true;
			}
		}
		else{
			return true;
		}
	}
public String getLogEmpDpt(){
	String usEml=SecurityContextHolder.getContext().getAuthentication().getName();
	String dpt="";
	try{
	 Emp_Mst empDtls=getEmplyeeDetailByEmail(usEml);
	if(empDtls.getEm_emp_typ().equalsIgnoreCase("Admin")){
		return dpt;
	}
	else{
		return empDtls.getEm_dpt_cd().split(",")[0];
	}
	}
	catch(Exception e){
	return dpt;
	}
}

@Override
public List<Object[]> getUserPermissionList() {
	String qry=(getLogEmpDpt().equals(""))?"select 'JobCardMaking' as cel union select 'BalBomMaking' as cel union select 'InhouseBomMaking' as cel union select 'ReJob Card' as cel":"select up_pg_trn_typ from user_permission where up_dpt_cd='"+getLogEmpDpt()+"' and up_pg_nm='joborder'";	
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public String checkFnshPdtDocNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 fph_doc_no from fnsh_pdt_hdr where fph_doc_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkMainProcessDocNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 mph_doc_no from mn_prcs_hdr where mph_doc_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkSubProcessDocNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 sph_prcs_no from sub_prcs_hdr where sph_prcs_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkDocNoInDcFromDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 dh_isd_doc_no from dc_hdr where dh_isd_doc_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkrecvryPrcsDocInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 rh_doc_no from rcvy_hdr where rh_doc_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkInwardDocNOInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 ih_doc_no from iwd_hdr where ih_doc_no='"+docno+"' and ih_iwd_sts=1").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkAlloyDocNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 aph_aly_no from aly_prcs_hdr where aph_aly_no='"+docno+"' and aph_aly_sts=1").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkCastingDocNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 cph_cst_no from cst_prcs_hdr where cph_cst_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkJobcardNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 joh_doc_no from job_ord_hdr where joh_doc_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkWaxNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 wh_doc_no from wax_hdr where wh_doc_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public String checkTreeDocNoInDbImpl(String docno) {
	List<Object[]> res=session.createSQLQuery("select top 1 tgh_doc_no from tree_gen_hdr where tgh_doc_no='"+docno+"'").list();
	return (res!=null&&!res.isEmpty())?"Already":null;
}

@Override
public List<String> getexstTreeForAlwJobCrd() {
	List<String> res=session.createSQLQuery("select cphd_tree_no from cst_prcs_hdr_dtl where cphd_rcvd_auth=1").list();
	return res;
}

@Override
public List<Object[]> getExstDprtmentForSolveMltplDptNm() {
	List<Object[]> res=session.createSQLQuery("select dm_dpt_cd,dm_dpt_nm from dpt_mst where dm_cmy_cd='"+getCmy()+"' and dm_sts=1").list();
	return res;
}

@Override
public List<Object[]> getStockCalculationInFrontEndImp(String qry) {
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public List<Object[]> getExstStkOfCstWithEmployeeImp(String qry) {
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public List<Object[]> checkDcbalStockImp(String qry) {
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public List<Object[]> getBomDetailByPdtCdForFnshPdtImpl(String qry) {
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public String saveStoneDataInJobCardImpl(String join) {
	session.createSQLQuery(join).executeUpdate();
	return null;
}

@Override
public List<Stn_Mst> getExistStoneProIdForAddInwrd() {
	try{
		List<Stn_Mst> srch=ht.find("from Stn_Mst m where m.sm_stn_sts=1");
		return srch;
		}catch(Exception e){
			e.printStackTrace();
		}
	return null;
}

@Override
public List<Object[]> getDataForMeltingProcessImpl(String qry) {
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public List<Object[]> getDetailOfDocumenBySearchImpl(String qry) {
	qry=qry.replace("getCmy", getCmy());
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public List<String> gettodayPrice() {
	List<String> res=session.createSQLQuery("select top 1 dw_pm_prc from daywise_prc_mst where dw_pm_cmy_cd='"+getCmy()+"' order by cast(dw_pm_tdy_dt as date) desc").list();
	return res;
}

@Override
public List<Object[]> getBomStkOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
}


/*@Override
public List<Object[]> getDptStkWithPrtyOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("SELECT ihd_cmy_cd as cmycd,dm_dpt_nm as dpt,ihd_iwd_typ as iwdtyp,ihd_mtl_wgt as mtlwgt,ihd_rcvd_prty as rcvdprty,ihd_pure_gld_wgt as puregld,"
+"'''' as pdtwgt,'''' as runwgt,'''' as tstsmp,'''' as pwdmtl,'''' as isswgt,'''' as isdprty,'''' as issstock,'''' as itmisswgt FROM iwd_hdr_dtl inner join dpt_mst on dm_cmy_cd=\'"+em_cmy_cd+"\' and ihd_dpt_cd=dm_dpt_cd union all "
+"select cphd_cmy_cd as cmycd,dm_dpt_nm as dpt,'''' as iwdtyp,''''  as mtlwgt,cphd_iss_carat as rcvdprty,'''' as puregld,cphd_pdt_wgt as pdtwgt,cphd_run_wgt as runwgt,cphd_tst_smp as tstsmp,cphd_pwd_mtl as pwdmtl,'''' as isswgt,'''' as isdprty ,'''' as issstock,'''' as itmisswgt from cst_prcs_hdr_dtl "
+"inner join dpt_mst  on dm_cmy_cd=\'"+em_cmy_cd+"\' and cphd_dpt_cd=dm_dpt_cd union all "
+"SELECT aphd_cmy_cd as cmycd,dm_dpt_nm as dpt,aphd_pdt_typ as iwdtyp,''''  as mtlwgt,aphd_mtl_prty rcvdprty,'''' as puregld,'''' as pdtwgt,'''' as runwgt,'''' as tstsmp,'''' as pwdmtl,"
+"aphd_iss_wgt as isswgt,'''' as isdprty,'''' as issstock,'''' as itmisswgt FROM aly_prcs_hdr_dtl "
+"inner join dpt_mst  on dm_cmy_cd=\'"+em_cmy_cd+"\' and aphd_dpt_cd=dm_dpt_cd union all "
+"SELECT sphd_cmy_cd as cmycd,dm_dpt_nm as dpt,'''' as iwdtyp,''''  as mtlwgt,sphd_iss_stk_prty as rcvdprty,'''' as puregld,'''' as pdtwgt,"
+"'''' as runwgt,'''' as tstsmp,'''' as pwdmtl,'''' as isdprty,'''' as isswgt,"
+"sphd_iss_stk_wgt as issstock,'''' as itmisswgt FROM sub_prcs_hdr_dtl inner join dpt_mst  on dm_cmy_cd=\'"+em_cmy_cd+"\' and sphd_dpt_cd=dm_dpt_cd union all "   
+"SELECT  smd_cmy_cd as cmycd,dm_dpt_nm as dpt,'''' as iwdtyp,smd_isd_mtl_wgt as mtlwgt,smd_mtl_prty  as rcvdprty,'''' as puregld,'''' as pdtwgt,"
+"'''' as runwgt,'''' as tstsmp,'''' as pwdmtl,'''' as isdprty,'''' as isswgt,'''' as issstock,'''' as itmisswgt "
+"FROM sub_melt_dtl inner join dpt_mst on dm_cmy_cd=\'"+em_cmy_cd+"\' and smd_dpt_cd=dm_dpt_cd union all "
+"SELECT ithd_cmy_cd as cmycd,dm_dpt_nm as dpt,ithd_trf_typ as iwdtyp,'''' as mtlwgt,ithd_itm_prty  as rcvdprty,'''' as puregld,'''' as pdtwgt,"
+"'''' as runwgt,'''' as tstsmp,'''' as pwdmtl,'''' as isdprty,'''' as isswgt,'''' as issstock,"
+"ithd_itm_iss_wgt as itmisswgt FROM intl_trf_hdr_dtl inner join dpt_mst  on dm_cmy_cd=\'"+em_cmy_cd+"\' and ithd_to_dpt_cd=dm_dpt_cd").list();
	return res;
	
	
	
	
	}

*/


@Override
public List<Object[]> getDptStkWithPrtyOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
	}

@Override
public List<Object[]> getDptStkWithOutPrtyOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
	}
@Override
public List<Object[]> getCmyWrkStkWithPrtyOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
	}
@Override
public List<Object[]> getOutSideWrkStkWithPrtyOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
	}


@Override
public List<Object[]> getWrkStkNonPrtyOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
	}

@Override
public List<Object[]> getLossStkOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
}
@Override
public List<Object[]> getDptCloseStkOfCmyandDpt(String em_cmy_cd, String dpt, String date, String wrk,
		String hdr) {
	List<Object[]> res=session.createSQLQuery("exec closingstockreport @cmycd='"+getCmy()+"',@dptcd='"+dpt+"',@date='"+date+"',@workcd='"+wrk+"',@header='"+hdr+"',@prty='' ").list();
	return res;
}

@Override
public List<Object[]> getPurityDetailBy() {
	List<Object[]> res=session.createSQLQuery("select distinct stm_rcvd_stk_prty from stk_mst where stm_cmy_cd='"+getCmy()+"' union all select distinct crtm_carat_prty from carat_mst where crtm_carat_prty='"+getCmy()+"' ").list();
	return res;
}

@Override
public List<Object[]> getFilteredClosingStockImpl(String qry) {
	List<Object[]> res=session.createSQLQuery(qry).list();
	return res;
}

@Override
public List<Report_Details> getExstReportDetail(String string) {
	List<Report_Details> exst=ht.find("from Report_Details where rd_rpt_nm='"+string+"' and rd_cmy_cd='"+getCmy()+"'");
	return exst;
}

	@Override
	public void delTransactionBasedStockRecAjax(String qry) {
	session.createSQLQuery(qry).executeUpdate();
	}

	@Override
	public List<Object[]> getInwardReport(String cmycd, String qry) {
		try {
			List<Object[]> exst=session.createSQLQuery(qry).list();
			return exst;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Object[]> getWorkerWiseReport(String cmycd, String qry) {
		try {
			List<Object[]> exst=session.createSQLQuery(qry).list();
			return exst;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Object[]> getPurityLossDeptWise(String qry) {
		try {
			List<Object[]> exst=session.createSQLQuery(qry).list();
			return exst;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Object[]> getClosingStockReports(String qry) {
		try {
			List<Object[]> exst=session.createSQLQuery(qry).list();
			return exst;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
