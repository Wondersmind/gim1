$(function (){
	$(".wrkCdOfMainPrcs").change(function(){
		var wrkcd=$(this).val();
		if(wrkcd!=""){
			var qry=" select sum(cast(mph_bal_wgt as float)) as stkwgt,'0' as emp from mn_prcs_hdr where mph_wrk_cd='"+wrkcd+"' "
			AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
		function retWrkAlwQty(res){	
			var jobCrdNo='<option value="">Select Pndg.JobCard</option>';
		if(wrkcd&&$("#fromDptOfMainPrcs").val()){	
			var qry='select distinct mphd_iss_doc_no from mn_prcs_hdr_dtl where mphd_wrk_cd=\''+wrkcd+'\' and mphd_frm_dpt=\''+$("#fromDptOfMainPrcs").val()+'\' and cast(mphd_pndg_bom as float)>0 and mphd_prcs_sts=1';
		AjaxController.getPendingJobCardForWrkWithDpt(qry,(res)=>{
			if(res){
				res.forEach((data,i)=>{
					jobCrdNo+='<option value="'+data+'">'+data+'</option>';
				})
			}
			$("#pndingPrcsOfJobcd").html(jobCrdNo).selectpicker("refresh");
		});	
		}
		else{
			$("#pndingPrcsOfJobcd").html(jobCrdNo).selectpicker("refresh");	
		}
			if(res)res=res.split("-")[0]
			$("#balStkOfMainPrcs").val((+res||0).toFixed(2));
			$("#StkLmtOfEMployee").val("");
		}	
		}
		else{
			$("#balStkOfMainPrcs,#StkLmtOfEMployee").val("");
		$("#pndingPrcsOfJobcd").html('').selectpicker("refresh");	
		}
	});

	
	///////////////////// wrker type based employee ///////////////
	$("#wrkerOutSide").hide();
	$("#employeeTypes").change(function(){
		if(this.value=="ComWrker"){
			$("#wrkerOutSide").hide();	$("#wrkerInSide").show();	
		}else{
			$("#wrkerOutSide").show();	$("#wrkerInSide").hide();	
		}
	})
	$("#fromDptOfMainPrcs,#fromCmpnyOfMainPrcs,#trgtDtOfMainPrcs,#jbCardOfSubPrcs,#prtyOfJobCrd").change(function(){
		if(this.id=='fromDptOfMainPrcs'||this.id=='fromCmpnyOfMainPrcs'){
			$("#prtyOfJobCrd").html('').selectpicker("refresh");
			$("#jbCardOfSubPrcs").html('').selectpicker("refresh");
			$("#trgtDtOfMainPrcs").html('').selectpicker("refresh");	
		}
		changeofcmycdanddept();
		$(".col-md-4:visible").find("#wrkCdOfMainPrcs").change();
	})
	
	if(depty)$("#fromDptOfMainPrcs").val(depty.split(",")[0]);
	changeofcmycdanddept();
});	

function changeofcmycdanddept(){
	var dpt=$("#fromDptOfMainPrcs").val(),jbCard=$("#jbCardOfSubPrcs").val()||[],trgtDt=$("#trgtDtOfMainPrcs").val()||'';;
	var cmycd=$("#fromCmpnyOfMainPrcs").val(),prty=$("#prtyOfJobCrd").val()||[];
	jbCard=jbCard.map(s=>"'"+s+"'").join();prty=prty.map(s=>"'"+s+"'").join();
if(cmycd&&dpt){
	if(trgtDt)trgtDt=" where trgtdt<=cast('"+trgtDt+"' as date) ";
	if(jbCard)jbCard=" and stm_itm_cd in ("+jbCard+") ";
	if(prty)prty=" and stm_rcvd_stk_prty in ("+prty+") ";
	var Qry="select * from (select (select min(cast(johd_trgt_dt as date)) from job_ord_hdr_dtl where johd_doc_no=stm_itm_cd and johd_job_sts=1) as trgtdt,	"
		+ "stm_itm_cd,convert(varchar (max),STUFF(( SELECT ',' + johd_pdt_ctgy FROM job_ord_hdr_dtl WHERE johd_doc_no = stm_itm_cd group by johd_pdt_ctgy FOR XML PATH('') ), 1, 1, '' )) as ctgy,"
		+ "(select top 1 joh_tot_wgt from job_ord_hdr where joh_doc_no=stm_itm_cd and joh_pdt_typ='JobCardMaking' and joh_sts=1) qty,stm_rcvd_stk_wgt,(select isnull(sum(bij_tot_wgt),'') from bom_iss_job_dtl where bij_job_crd_no=stm_itm_cd and bij_bal_prcs_typ='JobCardMaking') as rqrdbom,stm_id,"
		+ "(select isnull(sum(bij_bal_wgt),0) from bom_iss_job_dtl where bij_job_crd_no=stm_itm_cd and bij_bal_prcs_typ='JobCardMaking') as isbal,joh_sts,joh_mn_prcs_sts,stm_rcvd_stk_prty from stk_mst left join job_ord_hdr on joh_doc_no=stm_itm_cd  where stm_cmy_cd='"+cmycd+"' "+prty+" "+jbCard+" and stm_dpt_cd='"+dpt+"' and "
				+ " stm_stk_trn_typ='JobCardRecieved' and joh_sts=1 and (joh_mn_prcs_sts!='Sent' or joh_mn_prcs_sts is null)) as tbl "+trgtDt+" ";
	AjaxController.searchBasedOnDptAndCmyCdInMainPrcs(Qry,resultFunctionSrch);
}

}


function resultFunctionSrch(res){
	var dpt=$("#fromDptOfMainPrcs").val();
	var cmycd=$("#fromCmpnyOfMainPrcs").val();
	var result='';
	var joNos='';
	$('#thOfMainPrcss').html('<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>Tgt.Dt<input class="form-control input-sm"></th> <th>JbCd No<input class="form-control input-sm"></th><th>Prty<input class="form-control input-sm"></th> <th>Ctgy<input class="form-control input-sm"></th> <th>Qty<input class="form-control input-sm"></th> <th>Wgt<input class="form-control input-sm"></th> <th>Reqd BOM<input class="form-control input-sm"></th> <th>BOM Wgt<input class="form-control input-sm"> </th> <th>Tot Ised Wgt<input class="form-control input-sm"> </th> <th>Rtn Smi Fnsh Pdt<input class="form-control input-sm"> </th> <th>Rtn Scrp Mtl<input class="form-control input-sm"> </th> <th>Sub Prcs Isd<input class="form-control input-sm"> </th> <th>Sub Prcs<input class="form-control input-sm"> </th> <th>Sub Prcs Rcvd<input class="form-control input-sm"> </th>  <th>Bal.Wgt<input class="form-control input-sm"></th> </tr>');
	var dateofAvailable=new Set(['<option value="">Select Target Date</option>']),PdtPrty=new Set();	
	if(res!=null){
			for(var i=0;i<res.length;i++){
				dateofAvailable.add('<option value="'+res[i][0]+'">'+res[i][0]+'</option>');
				joNos+='<option>'+res[i][1]+'</option>';
				var qty=Math.round(res[i][3]||0);res[i][10]=res[i][10]||'';
				PdtPrty.add('<option value="'+res[i][10]+'">'+res[i][10]+'</option>');
				var style=getPurityColor(res[i][10]);
				result+='<tr balancebom="'+res[i][7]+'" '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'"> <span></span> </label></td>'
					+'<td class="trgtDtTr">'+res[i][0]+'</td><td class="jobCrdNoTr">'+res[i][1]+'</td><td class="jobCrdPrtyTr">'+res[i][10]+'</td><td class="ctgyNoTr">'+res[i][2]+'</td><td class="qtyTr">'+qty+'</td><td class="wgtOfTr">'+res[i][4]+'</td>'
					+'<td id="rqrdBomjofbcd" jobcardno="'+res[i][1]+'">'+res[i][5]+'</td><td><input type="text" class="form-control isdBomwgtofTr" value=""></td><td><input type="text" class="form-control isdStkWgtTr" readonly value="'+res[i][4]+'"></td>'
					+'<td><input type="text" class="form-control semiFinsPdtTr" value=""></td><td><input type="text" class="form-control srcpMtlTr" value=""></td><td><input type="text" class="form-control subPrcsisdTr" value=""></td>'
					+'<td><select class="form-control subPrcsTr">'+subProcessList+'</select></td><td><input type="text" class="form-control subPrcsrcvdTr" value=""></td><td><input type="text" class="form-control balwgtTr" value="'+res[i][4]+'" readonly="true"></td></tr>'	
			}
		}
		$("#prtyOfJobCrd").val()||$("#prtyOfJobCrd").html([...PdtPrty]).selectpicker("refresh");
		$("#jbCardOfSubPrcs").val()||$("#jbCardOfSubPrcs").html(joNos).selectpicker("refresh");
		$("#trgtDtOfMainPrcs").val()||$("#trgtDtOfMainPrcs").html([...dateofAvailable]).selectpicker("refresh");
		$("#newAddRecInTbdy").html(result);
		$(".subPrcsTr").selectpicker();
		var table = $('#myTableTable').DataTable().clear();table.destroy();
		$("#newAddRecInTbdy").html(result);
	var table = $('#myTableTable').DataTable({
			   "alengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
			   "iDisplaylength": -1,
			   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
			});
	table.columns().eq( 0 ).each( function ( colIdx ) {
		    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
		        table
		            .column( colIdx )
		            .search( this.value )
		            .draw();
		        $("table .parentCheckBox").prop("checked",false);
		        sumOfTotalIssueWeight();
		    } );});
	}

////////////////////////////// end ////////////////////////////////////

/////////////////// select box hanler ///////////////////////////
$(function(){
	$(".parentBomCheckBox").on("change",function(){
		this.checked?$(".childBomCheckBox").prop("checked",true):$(".childBomCheckBox").prop("checked",false);
	});
	$("#bomMetalDetailTbody").delegate(".childBomCheckBox","change",function(){
		$(".childBomCheckBox:not(:checked)").length?$(".parentBomCheckBox").prop("checked",false):$(".parentBomCheckBox").prop("checked",true);
	});
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
		sumOfTotalIssueWeight();
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
		sumOfTotalIssueWeight();
	});

});

function beforeAuthChecker(){
	if($("#isauthVal").val()=="1"){
		$("#saveButton").addClass("disabled");
		$("#saveButton").addClass("btn-circlesuc");
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
		if(Number(empStkExst)>Number(empAlwQty)){
			$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
					'<button type="button" onclick="beforeAuthChecker()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	
		}
		else{
			beforeAuthChecker();		
		}
		}
	else{
		beforeAuthChecker();	
	}
}
function hideDivInStkAdj() {
	$("#firstPrep").fadeOut(20);
}
	


function saveMainPrcsHderDetailToDb(){
	[companyCd,storeCd]=$("#CompanyStoreDet").val().split("-");
	var storeCode=$("#strCdOfMainProcsTmp").val();
	var prcsTypeName=$("#prcsCdOfMain option:selected").text(),rcvdMtlWgt=$("#isdMtlWgtOfMainPrcs").val(),balwgt=$("#balwgtOfMainPrcs").val();
var frmDpt=$("#fromDptOfMainPrcs").val(),cmycd=$("#fromCmpnyOfMainPrcs").val(),wrkTyp=$("#employeeTypes").val(),workerCd=$(".col-md-4:visible").find("#wrkCdOfMainPrcs").val(),
prcsCd=$("#prcsCdOfMain").val(),dcNo=$("#dcNumberINMainPrcs").val(),trgtDt=$("#trgtDtOfMainPrcs").val(),mtlWgt=$("#metalWeight").val();	
if(frmDpt!=""&&wrkTyp!=""&&workerCd!=""&&prcsCd!=""&&dcNo!=""&&$(".childCheckBox:checked").length>0){
	AjaxController.checkMainProcessDocNoInDb(dcNo,(data)=>{
		if(data&&data.length){
			$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider12">Entered DocNo Already Present...</div>');$("#Hider12").fadeOut(3500);	
		}
		else{
			$("#mainPrcsErrorShower").html('<div class="alert alert-info" id="Hider12">Saving Please Wait... </div>');	

			var mph_iss_auth=$("#isauthVal").val()=="1"?true:false;var Date=$("#dateINMainPrcs").val().split(" ")[0];
					var mainPrcsHdrDetail=[],primrIdOfItfh=[],rtnScrptmtl=0,rtnFnshPdt=0,bijBomUpdateList=[];
						$(".childCheckBox:checked").each(function(){
				var tr=$(this).closest("tr");
				if(tr.attr("updateqry"))bijBomUpdateList.push(tr.attr("updateqry"));
				var trgtDtTR=$(tr).find(".trgtDtTr").html(),jobCrdNo=$(tr).find(".jobCrdNoTr").html(),prtyJbCd=$(tr).find(".jobCrdPrtyTr").text()||'';
				cateGry=$(tr).find(".ctgyNoTr").html(),qtyOfTr=$(tr).find(".qtyTr").html(),isdDocWgt=$(tr).find(".wgtOfTr").html()||0,issWgt=$(tr).find(".isdStkWgtTr").val()||0,rqrdBomTr=$(tr).find("#rqrdBomjofbcd").html(),
				bomWgtTr=$(tr).find(".isdBomwgtofTr").val()||0,semiFnshPdt=$(tr).find(".semiFinsPdtTr").val(),srcpMtlTr=$(tr).find(".srcpMtlTr").val(),balWgt=$(tr).find(".balwgtTr").val();
				rtnScrptmtl+=Number(srcpMtlTr)||0,rtnFnshPdt+=Number(semiFnshPdt)||0;
				var subPrcsIsdWgt=$(tr).find(".subPrcsisdTr").val()||0,subPrcsTr=$(tr).find(".subPrcsTr").val(),subPrcsrcvdTr=$(tr).find(".subPrcsrcvdTr").val()||0;
				if(mph_iss_auth){
					bijBomUpdateList.push(" update job_ord_hdr set joh_mn_prcs_sts='Sent' where joh_doc_no='"+jobCrdNo+"'");
					bijBomUpdateList.push(" update job_card_dtl set joh_wrk_cd='"+workerCd+"',joh_wrk_typ='"+wrkTyp+"',joh_prcs_typ='"+prcsTypeName+"' where jcd_doc_no='"+jobCrdNo+"'");
					/*	if(!$("#pndingPrcsOfJobcd").val()){
					bijBomUpdateList.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+isdDocWgt+" as float)) where stm_id="+$(this).val()+"");
					bijBomUpdateList.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+isdDocWgt+" as float)) where stm_itm_cd='"+jobCrdNo+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Issue' and stm_stk_crt_id='"+workerCd+"' " +
							" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+cmycd+"','"+frmDpt+"','"+jobCrdNo+"','"+issWgt+"','"+Date+"','"+workerCd+"','"+prcsTypeName+"NotMainProcess Issue','"+Date+"','"+workerCd+"','"+prtyJbCd+"','','"+storeCode+"')");
					}
					else{
						bijBomUpdateList.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+bomWgtTr+" as float)) where stm_itm_cd='"+jobCrdNo+"' and stm_stk_trn_typ='JobCardRecieved' " +
							" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");
						bijBomUpdateList.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+bomWgtTr+" as float)) where stm_itm_cd='"+jobCrdNo+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Issue' and stm_stk_crt_id='"+workerCd+"' " +
								" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");
							
					}
					if(+bomWgtTr){
						bijBomUpdateList.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+bomWgtTr+" as float)) where stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+prtyJbCd+"'" +
								" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");	
						bijBomUpdateList.push(" insert into itm_mv (im_crt_id,im_itm_prty,im_itm_typ,[im_cmy_cd],[im_crt_dt],[im_dpt_cd],[im_itm_wgt],[im_trn_nmb],[im_trn_typ]) values" +
								"('"+workerCd+"','"+prtyJbCd+"','BOM','"+cmycd+"','"+Date+"','"+frmDpt+"','"+bomWgtTr+"','"+dcNo+"','BomIssuedFromMainPrcs')");
					
					}
					*/};
					bijBomUpdateList.push(" update o set o.[ohd_crnt_prcs]='Main-"+prcsTypeName+"',[ohd_crnt_wrk]='"+workerCd+"',[ohd_crnt_wrk_typ]='"+wrkTyp+"' from ord_hdr_dtl o left join job_ord_hdr_dtl on ohd_id=johd_ord_prim_id where johd_doc_no='"+jobCrdNo+"'");
							
				var Mn_Prcs_HdrDetail=new Mn_Prcs_Hdr_Dtl(null,dcNo,frmDpt,prcsCd,workerCd,
						 cmycd,wrkTyp,trgtDtTR,jobCrdNo,cateGry,qtyOfTr,isdDocWgt,rqrdBomTr,bomWgtTr,
						 issWgt,semiFnshPdt,srcpMtlTr,balWgt,mph_iss_auth,false,null,null,null,null,true);
				Mn_Prcs_HdrDetail.mphd_pndg_bom=tr.attr("balancebom")||0;
				Mn_Prcs_HdrDetail.mphd_pdt_prty=prtyJbCd;
				Object.assign(Mn_Prcs_HdrDetail,{mphd_sub_prcs_cd:subPrcsTr,mphd_sub_iss_wgt:subPrcsIsdWgt,mphd_sub_rcvd_wgt:subPrcsrcvdTr,mphd_tot_isd_sub_isd:issWgt});
				mainPrcsHdrDetail.push(Mn_Prcs_HdrDetail);
			});
						var mainPrcsHdr=new Mn_Prcs_Hdr(null, dcNo, frmDpt, cmycd, trgtDt,
								prcsCd, workerCd, wrkTyp, mtlWgt, '',
								null, null, null, null, mph_iss_auth,
								false, true, rcvdMtlWgt,balwgt,rtnFnshPdt,rtnScrptmtl);
						mainPrcsHdr.mph_str_cd=storeCode;
			AjaxController.saveMainPrcsHderWithDetailToDbNonDirect(JSON.stringify(mainPrcsHdr),JSON.stringify(mainPrcsHdrDetail),primrIdOfItfh.join(),"[]","[]","",bijBomUpdateList,null,returnResOfMainPrcsSv);
			
		}
	})
		
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
		$("#saveButton").removeClass("disabled");
		$("#saveButton").removeClass("btn-circlesuc");
	}

}
	
	function returnResOfMainPrcsSv(res){
	if(res=="success"){
		window.location.href="mainprocess.mm";
	}
}
	function rtnResOfSucSave(res){
		if(res=="success"){
			window.location.href="joborder.mm";
		}
	}



 ///////////////////////////// end   //////////////////////////////

/////////////////// constructor ///////////////////////////////
function Mn_Prcs_Hdr_Dtl( mphd_id,mphd_doc_no,mphd_frm_dpt,mphd_prcs_typ,mphd_wrk_cd,
		 mphd_cmy_cd,mphd_wrk_typ,mphd_trgt_dt,mphd_iss_doc_no,mphd_iss_doc_ctgy,
		 mphd_iss_doc_qty,mphd_iss_doc_wgt,mphd_rqd_bom,mphd_bom_wgt,
		 mphd_iss_wgt,mphd_rtn_smi_fsh_pdt,mphd_rtn_scrp_mtl,mpdh_bal_wgt,
		 mphd_iss_auth,mphd_rcvd_auth,mphd_crt_id,mphd_crt_dt,mphd_updt_id,
		 mphd_updt_dt,mphd_prcs_sts) {
	this.mphd_id = mphd_id;
	this.mphd_doc_no = mphd_doc_no;
	this.mphd_frm_dpt = mphd_frm_dpt;
	this.mphd_prcs_typ = mphd_prcs_typ;
	this.mphd_wrk_cd = mphd_wrk_cd;
	this.mphd_cmy_cd = mphd_cmy_cd;
	this.mphd_wrk_typ = mphd_wrk_typ;
	this.mphd_trgt_dt = mphd_trgt_dt;
	this.mphd_iss_doc_no = mphd_iss_doc_no;
	this.mphd_iss_doc_ctgy = mphd_iss_doc_ctgy;
	this.mphd_iss_doc_qty = mphd_iss_doc_qty;
	this.mphd_iss_doc_wgt = mphd_iss_doc_wgt;
	this.mphd_rqd_bom = mphd_rqd_bom;
	this.mphd_bom_wgt = mphd_bom_wgt;
	this.mphd_iss_wgt = mphd_iss_wgt;
	this.mphd_rtn_smi_fsh_pdt = mphd_rtn_smi_fsh_pdt;
	this.mphd_rtn_scrp_mtl = mphd_rtn_scrp_mtl;
	this.mpdh_bal_wgt = mpdh_bal_wgt;
	this.mphd_iss_auth = mphd_iss_auth;
	this.mphd_rcvd_auth = mphd_rcvd_auth;
	this.mphd_crt_id = mphd_crt_id;
	this.mphd_crt_dt = mphd_crt_dt;
	this.mphd_updt_id = mphd_updt_id;
	this.mphd_updt_dt = mphd_updt_dt;
	this.mphd_prcs_sts = mphd_prcs_sts;
}



function Mn_Prcs_Hdr(mph_id, mph_doc_no, mph_frm_dpt, mph_cmy_cd, mph_trgt_dt,
		mph_prcs_typ, mph_wrk_cd, mph_wrk_typ, mph_mtl_wgt, mph_mtl_prty,
		mph_crt_id, mph_crt_dt, mph_updt_id, mph_updt_dt, mph_iss_auth,
		mph_rcvd_auth, mph_prcs_sts, mph_rcvd_wgt,mph_bal_wgt,mph_smi_fnsh_wgt,mph_scrp_mtl_wgt) {
	this.mph_id = mph_id;
	this.mph_doc_no = mph_doc_no;
	this.mph_doc_dt = $("#dateINMainPrcs").val();
	this.mph_frm_dpt = mph_frm_dpt;
	this.mph_cmy_cd = mph_cmy_cd;
	this.mph_trgt_dt = mph_trgt_dt;
	this.mph_prcs_typ = mph_prcs_typ;
	this.mph_wrk_cd = mph_wrk_cd;
	this.mph_wrk_typ = mph_wrk_typ;
	this.mph_mtl_wgt = mph_mtl_wgt||'0.0';
	this.mph_mtl_prty = mph_mtl_prty;
	this.mph_crt_id = mph_crt_id;
	this.mph_crt_dt = mph_crt_dt;
	this.mph_updt_id = mph_updt_id;
	this.mph_updt_dt = mph_updt_dt;
	this.mph_iss_auth = mph_iss_auth;
	this.mph_rcvd_auth = mph_rcvd_auth;
	this.mph_prcs_sts = mph_prcs_sts;
	this.mph_rcvd_wgt = mph_rcvd_wgt||'0.0';
	this.mph_bal_wgt = mph_bal_wgt||'0.0';
	this.mph_smi_fnsh_wgt = mph_smi_fnsh_wgt||'0.0';
	this.mph_scrp_mtl_wgt = mph_scrp_mtl_wgt||'0.0';
}

/////////////////////// end ///////////////////////////////////

//////////////////// calculation /////////////////

$(function (){
	$("#myTableTable").delegate(".isswgtOfTr","change",function(){
		sumOfTotalIssueWeight();
	});
});

function sumOfTotalIssueWeight(){
var iseWgt=0,totWgt=0,balwgt=0;
	$(".childCheckBox:checked").each(function(){
	var tr=$(this).closest("tr");
	var semiFinsPdtTr=tr.find(".semiFinsPdtTr").val(),srcpMtlTr=tr.find(".srcpMtlTr").val(),isdWgt=tr.find(".isdStkWgtTr").val();
	iseWgt+=Number(isdWgt),totWgt+=(Number(semiFinsPdtTr)+Number(srcpMtlTr))||0;
	balwgt+=Number(tr.find(".balwgtTr").val())||0;
	});
	$("#isdMtlWgtOfMainPrcs").val(totWgt.toFixed(2));$("#balwgtOfMainPrcs").val(balwgt.toFixed(2));
	$("#metalWeight").val(iseWgt.toFixed(2));
	
}


var  currenttrInWhileBomIse,prepopBomList=[];
$("#newAddRecInTbdy").delegate("#rqrdBomjofbcd","click",function(){
	var jobcrdno=$(this).attr("jobcardno");currenttrInWhileBomIse=$(this).closest("tr");
	var prepopList=prepopBomList,dptcd=$("#fromDptOfMainPrcs").val();
	AjaxController.getrequiredBomDetailOfJobCard(jobcrdno,dptcd,retnresofbominjbcard);
	function retnresofbominjbcard(res){
		var result='';BomDetail=[];
		if(res){
			var length=res.length,sumofisdbom=0,rqdbomsum=0,balbom=0;
			for(var i=0;i<length;i++){
				sumofisdbom+=Number(res[i][3])||0;
				rqdbomsum+=(+res[i][6])||0;	var isdQty='',rcvdbomwgt='',balBom=res[i][7],chked='';
				balbom+=(+res[i][7])||0;//{bij_bal_wgt:balwgt,isdbom:trOne.find(".issqtyinbalbom").val(),rcvdbomwgt:rcvdBomWgt};	
				if(prepopList["B"+res[i][8]]){
					 isdQty=prepopList["B"+res[i][8]].isdbom;
					rcvdbomwgt=prepopList["B"+res[i][8]].rcvdbomwgt;
					 balBom=prepopList["B"+res[i][8]].bij_bal_wgt;
					 chked='checked';
				}
				if(res[i][4])BomDetail["RL"+res[i][4]]={bom_wgt:res[i][10],bom_qty:res[i][11]};
				if(+res[i][7]){
					res[i][12]=(res[i][12]||0);
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childBomCheckBox" '+chked+' oldrcvdwgt="'+res[i][9]+'" id="'+res[i][8]+'" value="'+res[i][4]+'"><span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][2]+'</td>'
				+'<td>'+res[i][6]+'</td><td>'+res[i][3]+'</td><td><input type="number" data-toggle="tooltip" class="form-control issqtyinbalbom" value="'+isdQty+'" title="ExstStk-('+res[i][12]+')"></td><td><input type="number" class="form-control isswgtinbalbom" value="'+rcvdbomwgt+'"></td><td>'+balBom+'</td></tr>';		
				}
			}
			if(!result){
			result+='<tr class="success" style="color: black;"><td style="text-align:center" colspan="11" >All Boms Are Recieved</td></tr>';	
			}
			}
		else{
			result+='<tr class="success" style="color: black;"><td colspan="6" style="text-align:center">All Boms Are Recieved</td></tr>';	
		}
		$("#bomMetalDetailTbody").html(result);
		$(".issqtyinbalbom").tooltip();
		$("#myModal").modal('show');
	}
});


$("#newAddRecInTbdy").delegate(".isdBomwgtofTr,.subPrcsisdTr","keyup",function(){
	var tr=$(this).closest("tr");
	totalIsdWgtCal(tr);
});

function totalIsdWgtCal(tr){
	var wgtOfJbCd=tr.find(".wgtOfTr").html(),bomwgt=tr.find(".isdBomwgtofTr").val(),subPrcsisdTr=tr.find(".subPrcsisdTr").val();
	var tot=(Number(wgtOfJbCd)+Number(bomwgt)+Number(subPrcsisdTr))||0;
	tr.find(".isdStkWgtTr").val(tot.toFixed(2));
	var totrcvd=(+tr.find(".semiFinsPdtTr").val()||0)+(+tr.find(".srcpMtlTr").val()||0);
	tr.find(".balwgtTr").val((tot-totrcvd).toFixed(2));
	sumOfTotalIssueWeight();
}
$("#pndingPrcsOfJobcd").on("change",function(){
	var jobOrdNo=$(this).val();	var dpt=$("#fromDptOfMainPrcs").val();
	var cmycd=$("#fromCmpnyOfMainPrcs").val(),wrkCd=$(".col-md-4:visible").find("#wrkCdOfMainPrcs").val();
	
	if(jobOrdNo){
		jobOrdNo=jobOrdNo.map(s=>"'"+s+"'").join();
		var qry='select mphd_trgt_dt,mphd_iss_doc_no,mphd_iss_doc_ctgy,mphd_iss_doc_qty,(select top 1 stm_rcvd_stk_wgt from stk_mst where stm_itm_cd=mphd_iss_doc_no and stm_stk_trn_typ=\'JobCardRecieved\') as rvdwgts,mphd_rqd_bom,mphd_bom_wgt,'+
		'mphd_iss_wgt,mphd_rtn_smi_fsh_pdt,mphd_rtn_scrp_mtl,mpdh_bal_wgt,mphd_sub_prcs_cd,mphd_sub_iss_wgt,mphd_sub_rcvd_wgt,mphd_pndg_bom,mphd_pdt_prty from mn_prcs_hdr_dtl where mphd_cmy_cd=\''+cmycd+'\' and mphd_frm_dpt=\''+dpt+'\' and mphd_wrk_cd=\''+wrkCd+'\' and mphd_iss_doc_no in ('+jobOrdNo+')';
		AjaxController.getPendingJobCardForMainPrcs(qry,rtnResofPendingJobCard);
	}
	else{
		$("#dcNumberINMainPrcs").val(mainprscsdocno);
		changeofcmycdanddept();
	}
});
function rtnResofPendingJobCard(res){
	if(res){
		var result='';
		var aryJobCrdDub=[];
		for(var i=0;i<res.length;i++){
			if($.inArray(res[i][5],aryJobCrdDub)){
				aryJobCrdDub.push(res[i][5]);res[i][15]=res[i][15]||'';
			var qty=Math.round(res[i][3]||0),isdSbPrcsWgt=res[i][12]||'',rcvdSbPrcsWgt=res[i][13]||'';
			result+='<tr balancebom="'+res[i][14]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'"> <span></span> </label></td>'
			+'<td class="trgtDtTr">'+res[i][0]+'</td><td class="jobCrdNoTr">'+res[i][1]+'</td><td class="jobCrdPrtyTr">'+res[i][15]+'</td><td class="ctgyNoTr">'+res[i][2]+'</td><td class="qtyTr">'+qty+'</td><td class="wgtOfTr">'+res[i][4]+'</td>'
			+'<td id="rqrdBomjofbcd" jobcardno="'+res[i][1]+'">'+res[i][5]+'</td><td><input type="number" class="form-control isdBomwgtofTr" value=""></td><td><input type="number" class="form-control isdStkWgtTr" readonly value="'+res[i][4]+'"></td>'
			+'<td><input type="number" class="form-control semiFinsPdtTr" value=""></td><td><input type="number" class="form-control srcpMtlTr" value=""></td><td><input type="number" class="form-control subPrcsisdTr" value=""></td>'
			+'<td><select class="form-control subPrcsTr" value="">'+subProcessList+'</select></td><td><input type="number" class="form-control subPrcsrcvdTr" value=""></td><td><input type="number" class="form-control balwgtTr" value="'+res[i][4]+'" readonly="true"></td></tr>'	
	}
		}
		var table = $('#myTableTable').DataTable().clear();table.destroy();
		$("#newAddRecInTbdy").html(result);
	var table = $('#myTableTable').DataTable({
			   "alengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
			   "iDisplaylength": -1,
			   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
			});
	table.columns().eq( 0 ).each( function ( colIdx ) {
		    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
		        table
		            .column( colIdx )
		            .search( this.value )
		            .draw();
		        $("table .parentCheckBox").prop("checked",false);
		        sumOfTotalIssueWeight();
		    } );});
	}
}

var BomDetail=[];


$("#newAddRecInTbdy").delegate(".srcpMtlTr,.semiFinsPdtTr","keyup",function(){
	var tr=$(this).closest("tr");
	var semiFinsPdtTr=tr.find(".semiFinsPdtTr").val(),srcpMtlTr=tr.find(".srcpMtlTr").val(),isdWgt=tr.find(".isdStkWgtTr").val();
	var balwgt=(Number(isdWgt)-(Number(semiFinsPdtTr)+Number(srcpMtlTr)))||0;
	tr.find(".balwgtTr").val(balwgt);
	sumOfTotalIssueWeight();
});

$("#bomMetalDetailTbody").delegate(".isswgtinbalbom","keyup",function(){
	var tr=$(this).closest("tr"),balwgt=0;
	var qty=0,bmObj=BomDetail?BomDetail["RL"+tr.find(".childBomCheckBox").val()]:null;
	if(bmObj){
		qty=(+bmObj.bom_wgt||1)/(+bmObj.bom_qty||1);
		qty=Math.round(($(this).val()/qty)||0);
		tr.find(".issqtyinbalbom").val(qty)
	}
	var totisswgt=Number(tr.find("td:eq(5)").html())||0,altyisdqty=Number(tr.find("td:eq(6)").html())||0,issqty=Number(tr.find(".issqtyinbalbom").val())||0;
	balwgt=(totisswgt)-(issqty+altyisdqty);
		tr.find("td:eq(9)").html(balwgt);
});


$("#bomMetalDetailTbody").delegate(".issqtyinbalbom","keyup",function(){
	var tr=$(this).closest("tr"),balwgt=0;
	var totisswgt=Number(tr.find("td:eq(5)").html())||0,altyisdqty=Number(tr.find("td:eq(6)").html())||0,issqty=Number(tr.find(".issqtyinbalbom").val())||0;
	balwgt=(totisswgt)-(issqty+altyisdqty);
	tr.find("td:eq(9)").html(balwgt);
});

$("#savebomtoTheDtailList").on("click",function(){
    updateList=[],totQty=0,prepop=[],balancebom=0,rcvdBom=0;
    $(".childBomCheckBox").toArray().forEach((tr)=>{
    	var bm=$(tr).closest("tr").find("td:eq(9)").html()
    	balancebom+=(+bm)||0});
 $(".childBomCheckBox:checked").toArray().forEach((list)=>{
     var trOne=$(list).closest("tr"),balwgt=trOne.find("td:eq(9)").html();
     var primid=$(list).attr("id"),totwgt=trOne.find("td:eq(5)").html(),qty=Number(trOne.find("td:eq(6)").html())+Number(trOne.find(".issqtyinbalbom").val()),
			rcvdBomWgt=(+trOne.find(".isswgtinbalbom").val()||0),oldrcvdBomWgt=(+$(list).attr("oldrcvdwgt"))||0;
			var totrcvdbomwgt=Number(rcvdBomWgt)+Number(oldrcvdBomWgt);
			rcvdBom+=(+trOne.find(".isswgtinbalbom").val()||0);
			totQty+=(+trOne.find(".issqtyinbalbom").val())||0;
			prepopBomList["B"+primid]={bij_bal_wgt:balwgt,isdbom:trOne.find(".issqtyinbalbom").val(),rcvdbomwgt:rcvdBomWgt};	
     updateList.push('update bom_iss_job_dtl set bij_bal_wgt=\''+balwgt+'\',bij_iss_wgt=\''+qty+'\',bij_rcvd_bom_wgt=\''+totrcvdbomwgt+'\' where bij_id='+primid+'');
});
 if(!$("#pndingPrcsOfJobcd").val()){
 currenttrInWhileBomIse.find(".isdBomwgtofTr").val(rcvdBom);
 }
 else{
	 currenttrInWhileBomIse.find(".isdBomwgtofTr").val(rcvdBom); 
 }
 currenttrInWhileBomIse.attr({"updateQry":updateList.join(" "),"balancebom":balancebom});
 totalIsdWgtCal(currenttrInWhileBomIse);
$("#myModal").modal('hide');
});


