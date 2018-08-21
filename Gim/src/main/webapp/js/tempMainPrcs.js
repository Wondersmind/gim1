var dubProFind=[],dubSrchAry=[];
function getAllDesignProduct(evt, val) {
	if (evt.keyCode == 92 || evt.keyCode == 39||evt.keyCode == 13) {
		return false;
	}
	if (evt.key != "ArrowDown" && evt.key != "ArrowUp"
			&& evt.key != "ArrowRight" && evt.key != "ArrowLeft") {
		if (evt.code == "Quote") {
			$('#srchInDesignPro').val('');
			val = '';
			$('#srchInDesignPro').focus();
		}
		if (val.length > 0) {dubSrchAry=[];
			AjaxController.getAllInwardedItemForMainPrcs(val, searchDgnProResult);
			function searchDgnProResult(res) {
				var result = "";
				var collect = [];
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
					if($.inArray(''+res[i][0]+'-'+res[i][2]+'-'+res[i][1]+'',dubSrchAry)==-1){
				collect .push({label:''+res[i][0]+'-'+res[i][2]+'-'+res[i][1]+'',val:res[i]});	
				dubSrchAry.push(''+res[i][0]+'-'+res[i][2]+'-'+res[i][1]+'');
					}
				}
					$("#srchInDesignPro").autocomplete({
						source : collect,
						select:function(lable,val){
							
							if(dubProFind.length==0||$.inArray(val.item.label,dubProFind)==-1){
								dubProFind.push(val.item.label);
								resultshowermainTemp(val);
						
							}
							else{
								$("#mainPrcsErrorShowerSavedTemp").html('<div class="alert alert-danger" id="21sfsjk">Already Added </div>');$("#21sfsjk").fadeOut(2500);		
							}
						}

					});
					
				}
			}
		}
	}
	
}

var mainTempPrcsHdrDetail=[];/*
function resultshowermainTemp(res){
	var prcsTypeName=$("#prcsCdOfMain option:selected").text();
var frmDpt=$("#fromDptOfMainPrcs").val(),wrkTyp=$("#employeeTypes").val(),workerCd=$(".wrkCdOfMainPrcs:visible select").val(),
prcsCd=$("#prcsCdOfMain").val(),dcNo=$("#dcNumberINMainPrcs").val(),trgtDt=$("#trgtDtOfMainPrcs").val(),mtlWgt=$("#metalWeight").val();	
	if(res!=null){
		var mnPrcs=new Mn_Prcs_Tmp_Dtl( null,  dcNo,  frmDpt,  prcsCd,  workerCd,
				 wrkTyp,  trgtDt,  res.item.val[7],  res.item.val[2], res.item.val[1],
				 '',  '',  res.item.val[4],  res.item.val[5],
				 '',  '',  '',  false,
				 false,  '',  '',  '',  '',
				 true,res.item.val[6]);
		mainTempPrcsHdrDetail.push(mnPrcs);	
	}
	var result='';
	$.grep(mainTempPrcsHdrDetail,function(i){
	result+='<tr itemType="'+i.mptd_itm_typ+'" itemPurty="'+i.mptd_itm_prty+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+i.primId+'"> <span></span> </label></td><td class=""><input type="number" class="form-control datepicker trgtDtTr" value=""></td><td class=""><input type="number" class="form-control orderTypeTr" value=""></td><td class="IssDocumentNoTr">'+i.mptd_iss_doc_no+'</td><td class="itmCdTr">'+i.mptd_itm_cd+'</td><td class=""><input type="number" class="form-control qtyTr" value=""  ></td><td class="wgtOfTr">'+i.mptd_iss_wgt+'</td><td><input type="number" class="form-control isswgtOfTr" value="" max="'+i.mptd_iss_wgt+'" ></td><td><input type="number" class="form-control rqrdBomTr" value=""></td><td><input type="number" class="form-control bomWgtTr" value=""></td><td><input type="number" class="form-control semiFinsPdtTr" value=""></td><td><input type="number" class="form-control srcpMtlTr" value=""></td><td><input type="number" class="form-control balwgtTr" value=""></td></tr>'
	});
	
	var table = $('#myTableTable').DataTable().clear();table.destroy();
	$("#newAddRecInTbdy").html(result);
var table = $('#myTableTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1
		});
table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
$("#srchInDesignPro").autocomplete("close");
$("#srchInDesignPro").val("");	$("#srchInDesignPro").focus();
$(".datepicker").datepicker();
	$("#mainPrcsErrorShowerSavedTemp").html('<div class="alert alert-success" id="2sfsjk">Added Successfully </div>');$("#2sfsjk").fadeOut(2500);
	
}
*/
$(function (){
	$(".wrkCdOfMainPrcs").change(function(){
		if($(this).val()!=""){
			var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as float)),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' and s.stm_stk_trn_typ like '%Issue%'"
			//var qry="  select isnull(sum(cast(s.mptd_bal_wgt as float)),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from mn_prcs_tmp_dtl s left join emp_mst e on s.mptd_wrk_cd=e.em_emp_id where s.mptd_wrk_cd='"+$(this).val()+"'";
			AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
		function retWrkAlwQty(res){
		[wrkWgt,avlWgt]=res.split("-");
			$("#balStkOfMainPrcs").val((+wrkWgt||0).toFixed(2));	
			$("#StkLmtOfEMployee").val(res);
		}	
		}
		else{
			$("#balStkOfMainPrcs,#StkLmtOfEMployee").val("");	}
	});

	$("#fromDptOfMainPrcs,#cmyCdOfMainProcsTmp").change(function (){
		var dptCd=$("#fromDptOfMainPrcs").val(),cmyCd=$("#cmyCdOfMainProcsTmp").val();
		if(dptCd==""&&cmyCd==""){
			var table = $('#myTableTable').DataTable().clear();table.destroy();
			$("#newAddRecInTbdy").html('');
		var table = $('#myTableTable').DataTable({
				   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
				   "iDisplayLength": -1
				});
		table.columns().eq( 0 ).each( function ( colIdx ) {
			    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
			        table
			            .column( colIdx )
			            .search( this.value )
			            .draw();
			    } );});	
		}
		else{
			if(cmyCd&&dptCd){
				var qry="select s.stm_stk_itm_typ,s.stm_rcvd_stk_wgt,s.stm_rcvd_stk_prty,s.stm_itm_cd,s.stm_id,stm_stk_trn_typ as docno "
					+ " from stk_mst s where (s.stm_stk_trn_typ in ('InternalProcess','AlloyReceived','ScrapMetal','BomStock','Melting Received','Inward') or stm_stk_trn_typ like '%Received%' or  stm_stk_trn_typ like '%Recieved%') and stm_stk_trn_typ not like '%JobCard%' and s.stm_dpt_cd='"+dptCd+"' and s.stm_cmy_cd='"+cmyCd+"' and cast(s.stm_rcvd_stk_wgt as float)>0"
					AjaxController.getDeptWiseInternalProcessIssued(qry,resOfIntnlPrcs);
			}
			function resOfIntnlPrcs(res){
				var result='';
				if(res!=null){
					for(var i=0;i<res.length;i++){
				var stk=(+res[i][1]||0).toFixed(2);res[i][3]=res[i][3]||'';
				var style=getPurityColor(res[i][2]);
				if((+stk)>0)
						result+='<tr itemType="'+res[i][0]+'" itemPurty="'+res[i][2]+'" '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][4]+'"> <span></span> </label></td><td class=""><input type="text" class="form-control datepicker trgtDtTr" value=""></td><td class=""><input type="text" class="form-control orderTypeTr" value=""></td><td class="IssDocumentNoTr">'+res[i][5]+'</td><td class="itmCdTr">'+res[i][3]+'</td><td>'+res[i][2]+'</td><td class=""><input type="number" class="form-control qtyTr" value=""  ></td><td class="wgtOfTr">'+stk+'</td><td><input type="number" style="width: 100px;" class="form-control isswgtOfTr" value="" max="'+res[i][1]+'" ></td><td><input type="number" class="form-control rqrdBomTr" value=""></td><td><input type="number" class="form-control bomWgtTr" value=""></td><td><input type="number" style="width: 100px;" class="form-control semiFinsPdtTr" value=""></td><td><input type="number" class="form-control srcpMtlTr" style="width:100px !important;" value=""></td><td><input type="number" style="padding:0px !important;" class="form-control balwgtTr" value="" readonly></td></tr>'
				}
				}
				var table = $('#myTableTable').DataTable().clear();table.destroy();
				$("#newAddRecInTbdy").html(result);
			var table = $('#myTableTable').DataTable({
					   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
					   "iDisplayLength": -1
					});
			table.columns().eq( 0 ).each( function ( colIdx ) {
				    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
				        table
				            .column( colIdx )
				            .search( this.value )
				            .draw();
				    } );});
			$(".datepicker").datepicker();
			}
		}
	});
	$("#wrkerOutSide").hide();
	$("#employeeTypes").change(function(){
		if(this.value=="ComWrker"){
			$("#wrkerOutSide").hide();	$("#wrkerInSide").show();	
		}else{
			$("#wrkerOutSide").show();	$("#wrkerInSide").hide();	
			$("#balStkOfMainPrcs").val();
		}
	})
	
	$("#myTableTable tbody").delegate("input:not(.trgtDtTr,.orderTypeTr)","change",function(){
	$(this).val(Number($(this).val()).toFixed(2));	
	})
	
	/////Trigger///////r
	if(depty)$("#fromDptOfMainPrcs").val(depty.split(",")[0]);
	$("#fromDptOfMainPrcs").change();
});	
function Mn_Prcs_Tmp_Dtl( mptd_id,  mptd_doc_no,  mptd_frm_dpt,  mptd_prcs_typ,  mptd_wrk_cd,
		 mptd_wrk_typ,  mptd_trgt_dt,  mptd_iss_doc_no,  mptd_itm_cd,  mptd_itm_typ,
		 mptd_rqd_bom,  mptd_bom_wgt,  mptd_itm_prty,  mptd_iss_wgt,
		 mptd_rtn_smi_fsh_pdt,  mptd_rtn_scrp_mtl,  mptd_bal_wgt,  mptd_iss_auth,
		 mptd_rcvd_auth,  mptd_crt_id,  mptd_crt_dt,  mptd_updt_id,  mptd_updt_dt,
		 mptd_prcs_sts,primId,mptd_ord_typ,mptd_ord_qty) {
	this.mptd_id = mptd_id;
	this.primId=primId;
	this.mptd_ord_typ=mptd_ord_typ;
	this.mptd_ord_qty=mptd_ord_qty;
	this.mptd_doc_no = mptd_doc_no;
	this.mptd_frm_dpt = mptd_frm_dpt;
	this.mptd_prcs_typ = mptd_prcs_typ;
	this.mptd_wrk_cd = mptd_wrk_cd;
	this.mptd_wrk_typ = mptd_wrk_typ;
	this.mptd_trgt_dt = mptd_trgt_dt;
	this.mptd_iss_doc_no = mptd_iss_doc_no;
	this.mptd_itm_cd = mptd_itm_cd;
	this.mptd_itm_typ = mptd_itm_typ;
	this.mptd_rqd_bom = mptd_rqd_bom;
	this.mptd_bom_wgt = mptd_bom_wgt;
	this.mptd_itm_prty = mptd_itm_prty;
	this.mptd_iss_wgt = mptd_iss_wgt;
	this.mptd_rtn_smi_fsh_pdt = mptd_rtn_smi_fsh_pdt;
	this.mptd_rtn_scrp_mtl = mptd_rtn_scrp_mtl;
	this.mptd_bal_wgt = mptd_bal_wgt;
	this.mptd_iss_auth = mptd_iss_auth;
	this.mptd_rcvd_auth = mptd_rcvd_auth;
	this.mptd_crt_id = mptd_crt_id;
	this.mptd_crt_dt = mptd_crt_dt;
	this.mptd_updt_id = mptd_updt_id;
	this.mptd_updt_dt = mptd_updt_dt;
	this.mptd_prcs_sts = mptd_prcs_sts;
	this.mptd_semi_bom='0.0';
}
$(function (){
	$("#myTableTable").delegate(".isswgtOfTr,.bomWgtTr","keyup",function(){
		sumOfTotalIssueWeight(this);
		sumOfBalWeightCal(this);		
	});
	$("#myTableTable").delegate(".semiFinsPdtTr,.srcpMtlTr","keyup",function(){
		sumOfBalWeightCal(this);
	});
});

function sumOfBalWeightCal(ths){
	var tr=$(ths).closest("tr");
	var IsuedWgt=Number($(tr).find(".isswgtOfTr").val())+Number($(tr).find(".bomWgtTr").val());
	var RtnWgts=Number($(tr).find(".semiFinsPdtTr").val())+Number($(tr).find(".srcpMtlTr").val());
	
	$(tr).find(".balwgtTr").val((IsuedWgt-RtnWgts).toFixed(2));
}

function Mn_Prcs_Tmp_Hdr( mpth_id,  mpth_doc_no,  mpth_frm_dpt,  mpth_trgt_dt,
		 mpth_prcs_typ,  mpth_wrk_cd,  mpth_wrk_typ,  mpth_mtl_wgt,  mpth_mtl_prty,
		 mpth_crt_id,  mpth_crt_dt,  mpth_updt_id,  mpth_updt_dt,  mpth_iss_auth,
		 mpth_rcvd_auth,  mpth_prcs_sts,  mptd_iss_rtn_prcs,cmyCode) {
	this.mpth_cmy_cd=cmyCode;
	this.mpth_id = mpth_id;
	this.mpth_doc_no = mpth_doc_no;
	this.mpth_doc_dt = $("#dateINMainPrcs").val();
	this.mpth_frm_dpt = mpth_frm_dpt;
	this.mpth_trgt_dt = mpth_trgt_dt;
	this.mpth_prcs_typ = mpth_prcs_typ;
	this.mpth_wrk_cd = mpth_wrk_cd;
	this.mpth_wrk_typ = mpth_wrk_typ;
	this.mpth_mtl_wgt = mpth_mtl_wgt;
	this.mpth_mtl_prty = mpth_mtl_prty;
	this.mpth_crt_id = mpth_crt_id;
	this.mpth_crt_dt = mpth_crt_dt;
	this.mpth_updt_id = mpth_updt_id;
	this.mpth_updt_dt = mpth_updt_dt;
	this.mpth_iss_auth = mpth_iss_auth;
	this.mpth_rcvd_auth = mpth_rcvd_auth;
	this.mpth_prcs_sts = mpth_prcs_sts;
	this.mptd_iss_rtn_prcs = mptd_iss_rtn_prcs;
}


///////////////////// ass asasas ///////////////////////////////////////////////

$(function(){
	$("#myTableTable").delegate(".parentCheckBox","change",function(){
		if($(this).prop("checked")==true)
		{
		$(".childCheckBox").each(function(){
			$(this)["0"].checked=true;
		})
		}
	else{
		$(".childCheckBox").each(function(){
			$(this)["0"].checked=false;
		})
	}
		sumOfTotalIssueWeight(this);
	});
	$("#myTableTable").delegate(".childCheckBox","change",function(){ 
		var sumChkedchkBox=$(".childCheckBox:checked").length;
		var totChkBox=$(".childCheckBox").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		sumOfTotalIssueWeight(this);
	});

});
function saveMainPrcsHderDetailToDbBefore(){
		$("#saveBtnInIntlTrf").addClass("disabled");
		$("#saveBtnInIntlTrf").addClass("btn-circlesuc");
		if($("#isauthVal").val()=="1"){
			saveMainPrcsHderDetailToDb();		
		}
		else{
			$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
			'<button type="button" onclick="saveMainPrcsHderDetailToDb()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#mainPrcsErrorShower").html(" ")\'>No</button></div>');		
		}
}

function beforesavingValidate(){
	if($("#emyeeTypes").val()!="OutSideWrker"&&$("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
		var empStkExst=Number($("#StkLmtOfEMployee").val().split("-")[0])+Number($("#metalWeight").val());
		var empAlwQty=$("#StkLmtOfEMployee").val().split("-")[1];
		if(empAlwQty!='null'&&empAlwQty!=''&&Number(empStkExst)>Number(empAlwQty)){
			$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
					'<button type="button" onclick="saveMainPrcsHderDetailToDbBefore()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	
		}
		else{
				saveMainPrcsHderDetailToDbBefore();		
			}
		}
	else{
		saveMainPrcsHderDetailToDbBefore();
	}
}
function hideDivInStkAdj() {
	$("#firstPrep").fadeOut(20);
}
	


function sumOfTotalIssueWeight(ths){
var iseWgt='',tr=$(ths).closest("tr");
var IsuedWgt=Number($(tr).find(".isswgtOfTr").val())+Number($(tr).find(".bomWgtTr").val());
var maxIsWgt=Number($(tr).find(".wgtOfTr").html());
if(maxIsWgt<IsuedWgt){
	$(tr).find(".isswgtOfTr").val(maxIsWgt);$(tr).find(".bomWgtTr").val('0.0')
}

$(".childCheckBox:checked").each(function(){
	iseWgt=Number(iseWgt)+Number($(this).closest("tr").find(".isswgtOfTr").val())+Number($(this).closest("tr").find(".bomWgtTr").val());	
	});
	$("#metalWeight").val((+iseWgt||0).toFixed(3));
}
function saveMainPrcsHderDetailToDb(){
	[companysCd,storeCd]=$("#CompanyStoreDet").val().split("-");
	var strCode=$("#strCdOfMainProcsTmp").val();
	var prcsTypeName=$("#prcsCdOfMain option:selected").text(),companyCd=$("#cmyCdOfMainProcsTmp").val(),dateIn=$("#dateINMainPrcs").val().split(" ")[0];
var frmDpt=$("#fromDptOfMainPrcs").val(),wrkTyp=$("#employeeTypes").val(),workerCd=$(".wrkCdOfMainPrcs:visible select").val(),
prcsCd=$("#prcsCdOfMain").val(),dcNo=$("#dcNumberINMainPrcs").val(),trgtDt=$("#trgtDtOfMainPrcs").val(),mtlWgt=$("#metalWeight").val();	
if(frmDpt!=""&&wrkTyp!=""&&workerCd!=""&&prcsCd!=""&&dcNo!=""&&$(".childCheckBox:checked").length>0){
	AjaxController.checkMainPrcsTempDocNoin(dcNo,retnchekFunction);
	function retnchekFunction(res){
		if(res==null){
			$("#saveBtnInIntlTrf").addClass("disabled");
			$("#mainPrcsErrorShower").html('<div class="alert alert-info"> Saving Please Wait.....</div>');	
var mph_iss_auth=$("#isauthVal").val()=="1"?true:false;
	var mainPrcsHdr=new Mn_Prcs_Tmp_Hdr( null,  dcNo,  frmDpt,  '',
			 prcsCd,  workerCd,  wrkTyp,  mtlWgt,  '',
			 '',  '',  '',  '',  mph_iss_auth,
			 false,  true,  true,companyCd);
	mainPrcsHdr.mpth_str_cd=strCode;
	var mainPrcsHdrDetail=[],stkManageQry=[];
	$(".childCheckBox:checked").each(function(){
		var tr=$(this).closest("tr");var primId=(+$(this).val()),wgtOfTr=$(tr).find(".wgtOfTr").html();
		var trgtDtTR=$(tr).find(".trgtDtTr").val(),ordType=$(tr).find(".orderTypeTr").val(),jobCrdNo=$(tr).find(".IssDocumentNoTr").html(),
		itmCd=$(tr).find(".itmCdTr").html(),qtyOfTr=$(tr).find(".qtyTr").val(),issWgt=Number($(tr).find(".isswgtOfTr").val()),rqrdBomTr=$(tr).find(".rqrdBomTr").val(),
		bomWgtTr=$(tr).find(".bomWgtTr").val(),semiFnshPdt=$(tr).find(".semiFinsPdtTr").val(),srcpMtlTr=$(tr).find(".srcpMtlTr").val(),balWgt=$(tr).find(".balwgtTr").val();
		var itmsOfTYp=$(tr).attr("itemType")||'',itmsOfPrty=$(tr).attr("itemPurty")||'';
		var Mn_Prcs_HdrDetail=new Mn_Prcs_Tmp_Dtl( null,  dcNo,  frmDpt,  prcsCd,  workerCd,
				 wrkTyp,  trgtDtTR,  jobCrdNo,  itmCd,  itmsOfTYp,
				 rqrdBomTr,  bomWgtTr, itmsOfPrty,  issWgt,
				 semiFnshPdt,  srcpMtlTr,  balWgt,  mph_iss_auth,
				 false,  '',  '',  '',  '',
				 true,primId,ordType,qtyOfTr);	
		Mn_Prcs_HdrDetail.mptd_shw_wgt_rcvd=wgtOfTr;
		Mn_Prcs_HdrDetail.mptd_cmy_cd=companyCd;
		mainPrcsHdrDetail.push(Mn_Prcs_HdrDetail);
		if(mph_iss_auth==true){
			/*var isdCal=((+issWgt||0)+(+bomWgtTr||0)).toFixed(2);
			stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as  float)-cast("+isdCal+" as float)) where stm_id="+primId+"");
			stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+isdCal+" as float)) where stm_itm_cd='"+itmCd+"' and stm_stk_trn_typ='"+prcsTypeName+"MainProcess Issue' and stm_stk_crt_id='"+workerCd+"' and stm_stk_itm_typ='"+itmsOfTYp+"' and stm_rcvd_stk_prty='"+itmsOfPrty+"' " +
					" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+companyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
							" values ('"+companyCd+"','"+frmDpt+"','"+itmCd+"','"+isdCal+"','"+dateIn+"','"+workerCd+"','"+prcsTypeName+"MainProcess Issue','"+dateIn+"','"+workerCd+"','"+itmsOfPrty+"','"+itmsOfTYp+"','"+strCode+"')");
		*/}
	});
	AjaxController.saveMainPrcsHdeTemprWithDetailToDb(JSON.stringify(mainPrcsHdr),JSON.stringify(mainPrcsHdrDetail),stkManageQry,null,null,returnResOfMainPrcsSv);
function returnResOfMainPrcsSv(res){
	if(res=="success"){
		window.location.href="directmainprocess.mm";
	}
}
	}
	else{
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hiderd12">Document No Already Added..</div>');$("#Hiderd12").fadeOut(3500);	
	}
}

}
else{
	if(frmDpt==""){
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider12">Select From Department </div>');$("#Hider12").fadeOut(3500);
	}
	else if(wrkTyp==""){
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider2">Select Worker Type </div>');$("#Hider2").fadeOut(3500);
	}
	else if(workerCd==""){
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider3">Select Worker Name </div>');$("#Hider3").fadeOut(3500);	
	}
	else if(prcsCd==""){
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider13">Select Process </div>');$("#Hider13").fadeOut(3500);
	}
	else if(dcNo==""){
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider14">Enter Dc Number </div>');$("#Hider14").fadeOut(3500);	
	}
	else{
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider124">Select Records </div>');$("#Hider124").fadeOut(3500);		
	}
	$("#saveBtnInIntlTrf").removeClass("disabled");
	$("#saveBtnInIntlTrf").removeClass("btn-circlesuc");
}
}






