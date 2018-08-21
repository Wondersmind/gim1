$(function (){
	$("#wrkCdOfMainPrcs").change(function(){
		if($(this).val()!=""){
	var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as float)),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' and s.stm_stk_trn_typ like '%Issue%'"
		AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
	function retWrkAlwQty(res){
	[wrkWgt,avlWgt]=res.split("-");
		if(avlWgt!=null&&avlWgt!='null'&&avlWgt!="")
		$("#balStkOfMainPrcs").val(Number(wrkWgt).toFixed(2));	
		else
		$("#balStkOfMainPrcs").val(Number(wrkWgt).toFixed(2));
		$("#StkLmtOfEMployee").val(res);
	}
		}
		else{
			$("#balStkOfMainPrcs,#StkLmtOfEMployee").val("");	}
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
	if($("#employeeTypes").val()=="ComWrker"){
		$("#wrkerOutSide").hide();	$("#wrkerInSide").show();	
	}else{
		$("#wrkerOutSide").show();	$("#wrkerInSide").hide();	
	}
	
	$("#fromDptOfMainPrcs,#jbCardOfSubPrcs").change(function(){
		var dpt=$("#fromDptOfMainPrcs").val(),jbCard=$("#jbCardOfSubPrcs").val(),trgtDt=$("#trgtDtOfMainPrcs").val();
		var jnCrdMulti='';
		if(jbCard!=null){
			jnCrdMulti=jbCard.map(function(jb){
				return "'"+jb+"'";
			}).join();
		}
	if(jbCard!=null||dpt!="")
		AjaxController.searchBasedOnDptAndJbCdInMainPrcs(dpt,jnCrdMulti,trgtDt,resultFunctionSrch);
	else{
		
		var table = $('#myTableTable').DataTable().clear();table.destroy();
		$("#newTrForTable").html('');
	var table = $('#myTableTable').DataTable({
			   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
			   "iDisplayLength": -1,
			   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
			});
	table.columns().eq( 0 ).each( function ( colIdx ) {
		    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
		        table
		            .column( colIdx )
		            .search( this.value )
		            .draw();
		    } );});	
	}
		function resultFunctionSrch(res){
		var result='';
			if(res!=null){
		
				for(var i=0;i<res.length;i++){
					result+='<tr docType="'+res[i][6]+'" dptCd="'+res[i][7]+'" itemType="'+res[i][8]+'" itemPurty="'+res[i][10]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][9]+'"> <span></span> </label></td><td class="trgtDtTr">'+res[i][0]+'</td><td class="orderTypeTr">'+res[i][1]+'</td><td class="jobCrdNoTr">'+res[i][2]+'</td><td class="itmCdTr">'+res[i][3]+'</td><td class="qtyTr">'+res[i][4]+'</td><td class="wgtOfTr">'+res[i][5]+'</td><td><input type="number" class="form-control isswgtOfTr" value="" max="'+res[i][5]+'" ></td><td><input type="text" class="form-control rqrdBomTr" value=""></td><td><input type="text" class="form-control bomWgtTr" value=""></td><td><input type="text" class="form-control semiFinsPdtTr" value=""></td><td><input type="text" class="form-control srcpMtlTr" value=""></td><td><input type="text" class="form-control balwgtTr" value=""></td></tr>'	
				}
			}
			$("#newTrForTable").html(result);
			var table = $('#myTableTable').DataTable().clear();table.destroy();
			$("#newTrForTable").html(result);
		var table = $('#myTableTable').DataTable({
				   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
				   "iDisplayLength": -1,
				   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
				});
		table.columns().eq( 0 ).each( function ( colIdx ) {
			    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
			        table
			            .column( colIdx )
			            .search( this.value )
			            .draw();
			    } );});
		}
	})
	
})


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
		$(".childCheckBox:not(:disabled)").each(function(){
			$(this)["0"].checked=true;
		})
		}
	else{
		$(".childCheckBox:not(:disabled)").each(function(){
			$(this)["0"].checked=false;
		})
	}
		sumOfTotalIssueWeight();
	});
	$("#myTableTable").delegate(".childCheckBox","change",function(){ 
		var sumChkedchkBox=$(".childCheckBox:checked,.childCheckBox:disabled").length;
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


function beforesavingValidate(){
	if($("#emyeeTypes").val()!="OutSideWrker"&&$("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
		var empStkExst=Number($("#StkLmtOfEMployee").val().split("-")[0])+Number($("#metalWeight").val());
		var empAlwQty=$("#StkLmtOfEMployee").val().split("-")[1];
		if(Number(empStkExst)>Number(empAlwQty)){
			$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
					'<button type="button" onclick="saveMainPrcsHderDetailToDb()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	
		}
		else{
			saveMainPrcsHderDetailToDb();		
		}
		}
	else{
		saveMainPrcsHderDetailToDb();	
	}
}
function hideDivInStkAdj() {
	$("#firstPrep").fadeOut(20);
}
	


function saveMainPrcsHderDetailToDb(){
		$("#saveBtnInIntlTrf").addClass("disabled");
		$("#saveBtnInIntlTrf").addClass("btn-circlesuc");
	var primaryIds=[],docNo=$("#dcNumberINMainPrcs").val(),PrimIdOfHdr=$("#primaryId").val();
	if($(".childCheckBox:checked").length&&$("#rcvdauthVal").val()=="1"){
	$(".childCheckBox:checked").toArray().forEach(function(chk){
		primaryIds.push($(chk).attr("mphdid"));	
	});
	var qry="update mn_prcs_hdr_dtl set mphd_rcvd_auth=1 where mphd_id in ("+primaryIds+") update mn_prcs_hdr set mph_rcvd_auth=1 where 0=(select count(mphd_id) from mn_prcs_hdr_dtl where mphd_rcvd_auth=0 and mphd_doc_no='"+docNo+"') and mph_id="+PrimIdOfHdr+"";
	AjaxController.upddateMainProcessHderDetailStatus(qry,returnResOfMainPrcsSv);
	}
	else{
		if($("#rcvdauthVal").val()=="0"){
			$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider2124">Give Authorization..</div>');$("#Hider2124").fadeOut(3500);
		}
		else{
		$("#mainPrcsErrorShower").html('<div class="alert alert-warning" id="Hider124">Select Records.. </div>');$("#Hider124").fadeOut(3500);
		}
	}
}

function returnResOfMainPrcsSv(res){
	if(res=='success'){
		window.location.href="mainprocess.mm";
	}
}
 ///////////////////////////// end   //////////////////////////////

// ///////////////// constructor ///////////////////////////////
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

// ///////////////////// end ///////////////////////////////////

// //////////////////calculation /////////////////

$(function (){
$("#myTableTable").delegate(".isswgtOfTr","change",function(){
sumOfTotalIssueWeight();
});
});

function sumOfTotalIssueWeight(){
var iseWgt=0,totWgt=0,balwgt=0;
if(!$("#pndingPrcsOfJobcd").val()){
$(".childCheckBox").each(function(){
var tr=$(this).closest("tr");
var semiFinsPdtTr=tr.find(".semiFinsPdtTr").val(),srcpMtlTr=tr.find(".srcpMtlTr").val(),isdWgt=tr.find(".isdStkWgtTr").val();
var semiOld=tr.find(".semiFinsPdtTr").attr("placeholder"),scrpOld=tr.find(".srcpMtlTr").attr("placeholder");
var totrcvd=((+semiFinsPdtTr||0)+(+srcpMtlTr||0)+(+semiOld||0)+(+scrpOld||0));
balwgt+=((+isdWgt||0)-totrcvd);
iseWgt+=Number(isdWgt),totWgt+=(+totrcvd)||0;
});
$("#isdMtlWgtOfMainPrcs").val(totWgt.toFixed(2));$("#balwgtOfMainPrcs").val((balwgt).toFixed(2));
$("#metalWeight").val(iseWgt.toFixed(2));
}
else{
$(".childCheckBox:checked").each(function(){
var tr=$(this).closest("tr");
iseWgt+=Number(tr.find(".issqtyinbalbom").val());
totWgt+=Number(tr.find("td:eq(5)").html())
});
$("#metalWeight").val(totWgt);
$("#isdMtlWgtOfMainPrcs").val(iseWgt);
}

}




var  currenttrInWhileBomIse,prepopBomList=[];
$("#myTableTable").delegate("#rqrdBomjofbcd","click",function(){
	var jobcrdno=$(this).attr("jobcardno");currenttrInWhileBomIse=$(this).closest("tr");
	var prepopList=prepopBomList;
	AjaxController.getrequiredBomDetailOfJobCard(jobcrdno,retnresofbominjbcard);
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
				if(+res[i][7])
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childBomCheckBox" '+chked+' oldrcvdwgt="'+res[i][9]+'" id="'+res[i][8]+'" value="'+res[i][4]+'"><span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][2]+'</td>'
				+'<td>'+res[i][6]+'</td><td>'+res[i][3]+'</td><td><input type="number" class="form-control issqtyinbalbom" value="'+isdQty+'"></td><td><input type="number" class="form-control isswgtinbalbom" value="'+rcvdbomwgt+'"></td><td>'+balBom+'</td></tr>';		
			}
			if(!result){
			result+='<tr class="success" style="color: black;"><td style="text-align:center" colspan="11" >All Boms Are Recieved</td></tr>';	
			}
			}
		else{
			result+='<tr class="success" style="color: black;"><td colspan="6" style="text-align:center">All Boms Are Recieved</td></tr>';	
		}
		$("#bomMetalDetailTbody").html(result);
		$("#myModal").modal('show');
	}
});

$("#myTableTable").delegate(".isdBomwgtofTr","keyup",function(){
var tr=$(this).closest("tr");
var wgtOfJbCd=tr.find(".wgtOfTr").html(),bomwgt=$(this).val();
var tot=(Number(wgtOfJbCd)+Number(bomwgt))||0;
tr.find(".isdStkWgtTr").val(tot.toFixed(2));
sumOfTotalIssueWeight();
});

$("#pndingPrcsOfJobcd").on("change",function(){
var jobOrdNo=$(this).val();	var dpt=$("#fromDptOfMainPrcs").val();
var cmycd=$("#fromCmpnyOfMainPrcs").val();

if(jobOrdNo){
$("#dcNumberINMainPrcs").val(mainprcsOrgid);
jobOrdNo=jobOrdNo.map(s=>"'"+s+"'").join();
var qry='select bij_job_crd_no,bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bij_tot_wgt,bij_iss_wgt,bij_bal_wgt,bij_bom_cd,bij_id from bom_iss_job_dtl left join bom_mst on bm_bom_cd=bij_bom_cd where bij_bal_wgt!=\'0.0\' and bij_bal_prcs_typ=\'JobCardMaking\' and bij_cmy_cd=\''+cmycd+'\' and bij_dpt_cd=\''+dpt+'\' and (bm_bom_sts=1 or bm_bom_sts is null) and bij_job_crd_no in ('+jobOrdNo+')';
AjaxController.getPendingJobCardForMainPrcs(qry,rtnResofPendingJobCard);
}
else{
$("#dcNumberINMainPrcs").val(mainprscsdocno);
changeofcmycdanddept();
}
});
function rtnResofPendingJobCard(res){
var table = $('#myTableTable').DataTable().clear();table.destroy();
$("#thOfMainPrcss").html('<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" > <span></span> </label> </th> <th>Job.Card.No<input class="form-control input-sm"></th> <th>Bom.Nm<input class="form-control input-sm"></th> <th>Bom.Sz<input class="form-control input-sm"></th> <th>Bom.Typ<input class="form-control input-sm"></th> <th>Req.Qty<input class="form-control input-sm"></th> <th>Stk.Qty<input class="form-control input-sm"></th> <th>Iss.Qty<input class="form-control input-sm"></th> <th>Bal.Qty<input class="form-control input-sm"></th> </tr>');	
var result='';
if(res){
var length=res.length;
for(var i=0;i<length;i++){
result+='<tr value=""><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][8]+'" value="'+res[i][7]+'">'
+'<span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
+'<td><input type="number" class="form-control issqtyinbalbom" value=""></td><td>'+res[i][6]+'</td></tr>';
}
}
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
} );});
}




$("#myTableTable").delegate(".issqtyinbalbom","keyup",function(){
var tr=$(this).closest("tr"),balwgt=0;
var totisswgt=Number(tr.find("td:eq(5)").html())||0,altyisdqty=Number(tr.find("td:eq(6)").html())||0,issqty=Number(tr.find(".issqtyinbalbom").val())||0;
balwgt=(totisswgt)-(issqty+altyisdqty);
tr.find("td:eq(8)").html(balwgt);
sumOfTotalIssueWeight();
});

window.dateofAvailable=[];
function available(date) {
var yearNow=(new Date().getFullYear()+"").substring(0,2),mnths=["RL","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var availableDates=dateofAvailable.map(d=>{
var dTble=d.split("-");
if(dTble.length>2)
return ~~dTble[0]+"-"+mnths.indexOf(dTble[1])+"-"+yearNow+dTble[2];
});
var dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
if ($.inArray(dmy, availableDates) != -1) {
console.log(dmy);
return true;
} else {
return false;
}
}



$("#myTableTable").delegate(".srcpMtlTr,.semiFinsPdtTr","keyup",function(){
var tr=$(this).closest("tr");
var semiFinsPdtTr=tr.find(".semiFinsPdtTr").val(),srcpMtlTr=tr.find(".srcpMtlTr").val(),isdWgt=tr.find(".isdStkWgtTr").val();
var semiOld=tr.find(".semiFinsPdtTr").attr("placeholder"),scrpOld=tr.find(".srcpMtlTr").attr("placeholder");
var balwgt=((+isdWgt||0)-((+semiFinsPdtTr||0)+(+srcpMtlTr||0)+(+semiOld||0)+(+scrpOld||0)));
tr.find(".balwgtTr").val(balwgt.toFixed(2));
sumOfTotalIssueWeight();
});
$("#myTableTable").delegate(".subPrcsisdTr,.subPrcsrcvdTr","keyup",function(){
	var tr=$(this).closest("tr");
	var isdWgt=tr.find(".isdStkWgtTr").attr("old"),srcpMtlTr=tr.find(".srcpMtlTr").val();
	if($(this).hasClass("subPrcsisdTr")){
		isdWgt=(+isdWgt||0)+(+this.value||0);
		tr.find(".isdStkWgtTr").val(isdWgt);
		}
	else{
	tr.find(".semiFinsPdtTr").val(this.value);
	}
	var semiFinsPdtTr=tr.find(".semiFinsPdtTr").val(),srcpMtlTr=tr.find(".srcpMtlTr").val();
	var semiOld=tr.find(".semiFinsPdtTr").attr("placeholder"),scrpOld=tr.find(".srcpMtlTr").attr("placeholder");
	var balwgt=((+isdWgt||0)-((+semiFinsPdtTr||0)+(+srcpMtlTr||0)+(+semiOld||0)+(+scrpOld||0)));
	tr.find(".balwgtTr").val(balwgt.toFixed(2));
	sumOfTotalIssueWeight();
	});

$("#saveOfbomDetailToTheRecord").on("click",function(){
	var jobcrdno=thisOfRqrdBom.closest("tr").find("td:eq(2)").html(),wrkcd=$(".col-md-4:visible").find("#wrkCdOfMainPrcs").val();
	var MnPrcsHdrDtlList=[],cmycd=$("#fromCmpnyOfMainPrcs").val(),dptcd=$("#fromDptOfMainPrcs").val(),docno=$("#dcNumberINMainPrcs").val();
	var totalIsdQty=0,totRcjetdQty=0;
	$("#bomMetalDetailTbodyRtnFnsh tr:not(.success)").toArray().forEach(tr=>{
		var tds=$(tr).find("td");
		var bomcd=$(tr).attr("bomcd"),primid=$(tr).attr("primid"),isdBom=tds[3].innerHTML,rjctdqty=$(tr).find("#rejectedqtybom").val(),rmrk=$(tr).find("#remarksofbom").val();
		var bmnam=tds[0].innerHTML,bmty=tds[1].innerHTML,bmsz=tds[2].innerHTML;
		totalIsdQty+=Number(isdBom),totRcjetdQty+=Number(rjctdqty)||0;
		var Mn_Prcs =new Mn_Prcs_Job_Dtl(primid,jobcrdno,bomcd,isdBom,rjctdqty,rmrk,cmycd,dptcd,wrkcd,docno,bmnam,bmty,bmsz);
		MnPrcsHdrDtlList.push(Mn_Prcs);	
	})
	if(MnPrcsHdrDtlList.length>0){
		thisOfRqrdBom.attr({"totalIsdBom":totalIsdQty,"totalrjctedBom":totRcjetdQty,"alreadySaved":JSON.stringify(MnPrcsHdrDtlList)});
	}
	$("#myModalRtnFnsh").modal('hide');
});



function Mn_Prcs_Job_Dtl(mpjd_id,mpjd_job_crd_no,mpjd_bom_cd,mpjd_isd_bm_qty,
		mpjd_rjct_bm_qty,mpjd_rmrk,mpjd_cmy_cd,mpjd_dpt_cd,mpjd_wrk_cd,mpjd_mnprcs_doc_no,bmnam,bmty,bmsz) {
	this.mpjd_id = mpjd_id||null;
	this.mpjd_job_crd_no = mpjd_job_crd_no;
	this.mpjd_bom_cd = mpjd_bom_cd;
	this.mpjd_isd_bm_qty = mpjd_isd_bm_qty||'0.0';
	this.mpjd_rjct_bm_qty = mpjd_rjct_bm_qty||'0.0';
	this.mpjd_rmrk = mpjd_rmrk;
	this.mpjd_cmy_cd = mpjd_cmy_cd;
	this.mpjd_dpt_cd = mpjd_dpt_cd;
	this.mpjd_wrk_cd = mpjd_wrk_cd;
	this.mpjd_mnprcs_doc_no = mpjd_mnprcs_doc_no;
	this.bmnam=bmnam;
	this.bmty=bmty;
	this.bmsz=bmsz;
}


function Mn_Prcs_Job_Hdr( mpjh_id, mpjh_job_crd_no, mpjh_isd_bm_qty, mpjh_rjct_bm_qty,
		mpjh_cmy_cd, mpjh_dpt_cd, mpjh_wrk_cd, mpjh_mnprcs_doc_no) {
	this.mpjh_id = mpjh_id;
	this.mpjh_job_crd_no = mpjh_job_crd_no;
	this.mpjh_isd_bm_qty = mpjh_isd_bm_qty||'0.0';
	this.mpjh_rjct_bm_qty = mpjh_rjct_bm_qty||'0.0';
	this.mpjh_cmy_cd = mpjh_cmy_cd;
	this.mpjh_dpt_cd = mpjh_dpt_cd;
	this.mpjh_wrk_cd = mpjh_wrk_cd;
	this.mpjh_mnprcs_doc_no = mpjh_mnprcs_doc_no;
}


$("#bomMetalDetailTbodyRtnFnsh").delegate("#rejectedqtybom","keyup",function(){
var sumofrjctdBom=	$("[id*=rejectedqtybom]").toArray().reduce((init,curnt)=>{
	return init+=Number(curnt.value)||0;
},0);
$("#rjectedBomOfCurntRoe").html(sumofrjctdBom);
});

$("#ExstTbodyTrs").delegate(".subPrcsTr","change",function(){
	var docNo=$("#dcNumberINMainPrcs").val(),dptCd=$("#fromDptOfMainPrcs").val(),wrkCd=$(".col-md-4:visible").find("#wrkCdOfMainPrcs").val(),cmyCd=$("#fromCmpnyOfMainPrcs").val();
	var subProcsCode=$(this).val(),tr=$(this).closest("tr");
	var jobcard=tr.find(".jobCrdNoTr").html();
	var qry="select mpjh_rcvd_wgt,mpjh_isd_wgt from mn_prcs_job_hdr where mpjh_mnprcs_doc_no='"+docNo+"' "
					+ " and mpjh_job_crd_no='"+jobcard+"' and mphd_sub_prcs_cd='"+subProcsCode+"' and mpjh_dpt_cd='"+dptCd+"' and mpjh_wrk_cd='"+wrkCd+"' and mpjh_cmy_cd='"+cmyCd+"'"
	AjaxController.runDynamicQueriesFromJavaScript(qry,(data)=>{
		if(data&&data.length){
			tr.find(".subPrcsisdTr").val(data[0][1]);
			tr.find(".subPrcsrcvdTr").val(data[0][0]);
			$(".subPrcsrcvdTr").prop("disabled",false);
		}
		else{
			tr.find(".subPrcsisdTr").val("");
			tr.find(".subPrcsrcvdTr").val("");
			$(".subPrcsrcvdTr").prop("disabled",false);
		}
	});
});




function UpdateController(ths){
	var tr=$(ths).closest("tr"),chkbx=tr.find(".childCheckBox"),prcsTypeName=$("#prcsCdOfMain option:selected").text(),PrimIdOfHdr=$("#primaryId").val();
	mphd_primId=chkbx.attr("mphdid"),jbcrd=tr.find(".jobCrdNoTr").html(),workerCd=$(".col-md-4:visible").find("#wrkCdOfMainPrcs").val(),
	 frmDpt=$("#fromDptOfMainPrcs").val(),cmycd=$("#fromCmpnyOfMainPrcs").val(),[date]=datpicker.split(" "),storeCode=$("#strCdOfMainProcsTmp").val();
	var bijBomUpdateList=[],val=$(ths).val()||0,dcNo=$("#dcNumberINMainPrcs").val(),balWgtofTr=tr.find(".balwgtTr").val(),prtyOfTr=$(".prtyOfTr",tr).text();
	var trnsTyp="";	
	if(ths.hasClass("semiFinsPdtTr")||ths.hasClass("srcpMtlTr")){
		/*	bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)-cast("+val+" as float)) where stm_itm_cd='"+jbcrd+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Issue' and stm_stk_crt_id='"+workerCd+"' " +
				" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");
	if(ths.hasClass("semiFinsPdtTr")){
			bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)+cast("+val+" as float)) where stm_itm_cd='"+jbcrd+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Recieved' " +
				" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
						" values ('"+cmycd+"','"+frmDpt+"','"+jbcrd+"','"+val+"','"+date+"','"+adminId+"','"+prcsTypeName+"NotMainProcess Recieved','"+date+"','"+adminId+"','"+prtyOfTr+"','','"+storeCode+"')");
		}
		else{
			bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)+cast("+val+" as float)) where stm_stk_trn_typ='ScrapMetal' and stm_rcvd_stk_prty='"+prtyOfTr+"' " +
					" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
							" values ('"+cmycd+"','"+frmDpt+"','','"+val+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+prtyOfTr+"','Scrap','"+storeCode+"')");
			
		}*/
		var smi=tr.find(".semiFinsPdtTr").val(),scrp=tr.find(".srcpMtlTr").val();
		if(ths.hasClass("semiFinsPdtTr")){
			trnsTyp="FNSHPDT RCVD";
		bijBomUpdateList.push("update mn_prcs_hdr_dtl set mphd_tot_smi_sub_rcvd=(isnull(mphd_tot_smi_sub_rcvd,0)+cast('"+smi+"' as float)),mphd_rtn_smi_fsh_pdt='"+smi+"',mpdh_bal_wgt='"+balWgtofTr+"' where mphd_id="+mphd_primId+"");
		}else{
			bijBomUpdateList.push("update mn_prcs_hdr_dtl set mphd_rtn_scrp_mtl=(isnull(cast(mphd_rtn_scrp_mtl as float),0)+cast('"+scrp+"' as float)),mpdh_bal_wgt='"+balWgtofTr+"' where mphd_id="+mphd_primId+"");
		trnsTyp="SCRAP RCVD";
		}
	}
	else{
		var subPrcsTr=tr.find(".subPrcsTr").val(),isdWgt=tr.find(".subPrcsisdTr").val(),rcvdWgt=tr.find(".subPrcsrcvdTr").val();
		if(ths.hasClass("subPrcsisdTr")){
			trnsTyp="SUPPRCS ISD";	
			var subPrcsName=tr.find(".subPrcsTr option:selected").text();
			bijBomUpdateList.push('UPDATE [mn_prcs_job_hdr] SET [mpjh_isd_wgt] =(cast(isnull([mpjh_isd_wgt],0) as float)+ cast(\''+isdWgt+'\' as float)) '
					+'WHERE mpjh_job_crd_no=\''+jbcrd+'\' and mpjh_mnprcs_doc_no=\''+dcNo+'\' and mphd_sub_prcs_cd=\''+subPrcsTr+'\' and mpjh_wrk_cd=\''+workerCd+'\' and mpjh_dpt_cd= \''+frmDpt+'\' and '
					+'mpjh_cmy_cd=\''+cmycd+'\' IF @@ROWCOUNT=0 insert into mn_prcs_job_hdr([mphd_sub_prcs_cd] ,[mpjh_cmy_cd] ,[mpjh_dpt_cd] ,[mpjh_isd_wgt] ,[mpjh_job_crd_no] ,[mpjh_mnprcs_doc_no] ,[mpjh_wrk_cd])'
					+' values(\''+subPrcsTr+'\',\''+cmycd+'\',\''+frmDpt+'\',\''+isdWgt+'\',\''+jbcrd+'\',\''+dcNo+'\',\''+workerCd+'\')');
	/*			
		bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)+cast("+val+" as float)) where stm_itm_cd='"+jbcrd+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Issue' and stm_stk_crt_id='"+workerCd+"' " +
				" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");
		bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)-cast("+val+" as float)) where stm_itm_cd='"+jbcrd+"' and stm_stk_trn_typ='"+subPrcsName+"SubProcess Recieved' " +
				" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");
		*/bijBomUpdateList.push("update mn_prcs_hdr_dtl set mphd_sub_prcs_cd='"+subPrcsTr+"',mphd_sub_rcvd_wgt='"+rcvdWgt+"',mphd_sub_iss_wgt='"+isdWgt+"',mphd_tot_isd_sub_isd=(isnull(mphd_tot_isd_sub_isd,0)+cast('"+val+"' as float)),mpdh_bal_wgt='"+balWgtofTr+"' where mphd_id="+mphd_primId+"");
	}
	else{
		trnsTyp="SUPPRCS RCVD";	
		bijBomUpdateList.push('UPDATE [mn_prcs_job_hdr] SET [mpjh_rcvd_wgt] =(cast(isnull([mpjh_rcvd_wgt],0) as float)+ cast(\''+rcvdWgt+'\' as float)) '
				+'WHERE mpjh_job_crd_no=\''+jbcrd+'\' and mpjh_mnprcs_doc_no=\''+dcNo+'\' and mphd_sub_prcs_cd=\''+subPrcsTr+'\' and mpjh_wrk_cd=\''+workerCd+'\' and mpjh_dpt_cd= \''+frmDpt+'\' and '
				+'mpjh_cmy_cd=\''+cmycd+'\' IF @@ROWCOUNT=0 insert into mn_prcs_job_hdr([mphd_sub_prcs_cd] ,[mpjh_cmy_cd] ,[mpjh_dpt_cd] ,[mpjh_rcvd_wgt] ,[mpjh_job_crd_no] ,[mpjh_mnprcs_doc_no] ,[mpjh_wrk_cd])'
				+' values(\''+subPrcsTr+'\',\''+cmycd+'\',\''+frmDpt+'\',\''+rcvdWgt+'\',\''+jbcrd+'\',\''+dcNo+'\',\''+workerCd+'\')');
		/*bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)-cast("+val+" as float)) where stm_itm_cd='"+jbcrd+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Issue' and stm_stk_crt_id='"+workerCd+"' " +
				" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");
		bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)+cast("+val+" as float)) where stm_itm_cd='"+jbcrd+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Recieved'  " +
				" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
						" values ('"+cmycd+"','"+frmDpt+"','"+jbcrd+"','"+val+"','"+date+"','"+adminId+"','"+prcsTypeName+"NotMainProcess Recieved','"+date+"','"+adminId+"','"+prtyOfTr+"','','"+storeCode+"')");
		*/bijBomUpdateList.push("update mn_prcs_hdr_dtl set mphd_sub_prcs_cd='"+subPrcsTr+"',mphd_sub_rcvd_wgt='"+rcvdWgt+"',mphd_sub_iss_wgt='"+isdWgt+"',mphd_tot_smi_sub_rcvd=(isnull(mphd_tot_smi_sub_rcvd,0)+cast('"+val+"' as float)),mpdh_bal_wgt='"+balWgtofTr+"' where mphd_id="+mphd_primId+"");
	}
	}
	var rcvdMtlWgt=$("#isdMtlWgtOfMainPrcs").val(),balwgt=$("#balwgtOfMainPrcs").val(),issd=$("#metalWeight").val();
	var totfnscrp=$("#ExstTbodyTrs tr").toArray().reduce((old,tr)=>{
		tr=$(tr);
		var semiFinsPdtTr=tr.find(".semiFinsPdtTr").val(),srcpMtlTr=tr.find(".srcpMtlTr").val(),isdWgt=tr.find(".isdStkWgtTr").val();
		var semiOld=tr.find(".semiFinsPdtTr").attr("placeholder"),scrpOld=tr.find(".srcpMtlTr").attr("placeholder");
		old.fnsh=((+semiFinsPdtTr||0)+(+semiOld||0));
		old.scrp=((+srcpMtlTr||0)+(+scrpOld||0));
		return old;
	},{fnsh:0,scrp:0});
	var subPrcsTr=tr.find(".subPrcsTr").val()||'';
	bijBomUpdateList.push("insert into mn_prcs_job_dtl([mphd_sub_prcs_cd] ,[mpjd_cmy_cd] ,[mpjd_crt_dt] ,[mpjd_dpt_cd] ,[mpjd_job_crd_no] ,[mpjd_mnprcs_doc_no],[mpjd_wrk_cd] ,[mpjh_isd_wgt],mphd_trn_typ,mpjd_dc_rcvd,mpjd_dc_isd)"+
			" VALUES ('"+subPrcsTr+"','"+cmycd+"','"+date+"','"+frmDpt+"','"+jbcrd+"','"+dcNo+"','"+workerCd+"','"+val+"','"+trnsTyp+"','NO','NO')");		
	bijBomUpdateList.push("update mn_prcs_hdr set mph_smi_fnsh_wgt='"+totfnscrp.fnsh+"',mph_scrp_mtl_wgt='"+totfnscrp.scrp+"',mph_mtl_wgt='"+issd+"',mph_rcvd_wgt='"+rcvdMtlWgt+"',mph_bal_wgt='"+balwgt+"' where mph_id="+PrimIdOfHdr+"");
	AjaxController.updateMainProcessDetailForEdit(bijBomUpdateList,()=>{
		location.reload();
	});
}


/////////////////////////Old Deprecated Save Maethod ////////////////////////////////////////
/*Start
 * 
 * 
	[companyCd,storeCd]=$("#CompanyStoreDet").val().split("-");
	var storeCode=$("#strCdOfMainProcsTmp").val();
	var prcsTypeName=$("#prcsCdOfMain option:selected").text(),rcvdMtlWgt=$("#isdMtlWgtOfMainPrcs").val(),balwgt=$("#balwgtOfMainPrcs").val();
var frmDpt=$("#fromDptOfMainPrcs").val(),cmycd=$("#fromCmpnyOfMainPrcs").val(),wrkTyp=$("#employeeTypes").val(),workerCd=$(".col-md-4:visible").find("#wrkCdOfMainPrcs").val(),
prcsCd=$("#prcsCdOfMain").val(),dcNo=$("#dcNumberINMainPrcs").val(),trgtDt=$("#trgtDtOfMainPrcs").val(),mtlWgt=$("#metalWeight").val();
var cretdid=$("#createdId").val(),cretddt=$("#createdDate").val(),PrimIdOfHdr=$("#primaryId").val();
if(frmDpt!=""&&wrkTyp!=""&&workerCd!=""&&prcsCd!=""&&dcNo!=""&&$(".childCheckBox:checked").length>0){
	$("#mainPrcsErrorShower").html('<div class="alert alert-info" id="Hider12">Saving Please Wait... </div>');	
	if(!$("#pndingPrcsOfJobcd").val()){
		var date=$("#dateINMainPrcs").val().split(" ")[0];
	var mph_rcvd_auth=$("#rcvdauthVal").val()=="1"?true:false;
			var mainPrcsHdrDetail=[],primrIdOfItfh=[],rtnScrptmtl=0,rtnFnshPdt=0,bijBomUpdateList=[];
			var InsertQry='insert into mn_prcs_job_dtl([mphd_sub_prcs_cd] ,[mpjd_cmy_cd] ,[mpjd_crt_dt] ,[mpjd_dpt_cd] ,[mpjd_job_crd_no] ,[mpjd_mnprcs_doc_no] ,[mpjd_updt_dt] ,[mpjd_wrk_cd] ,[mpjh_isd_wgt] ,[mpjh_rcvd_wgt]) VALUES ';
			var isPresentSubPrcsCd=false;
			$(".childCheckBox:checked").each(function(i){
		var tr=$(this).closest("tr"),primId=$(this).attr("mphdid");
		if(tr.attr("updateqry"))bijBomUpdateList.push(tr.attr("updateqry"));
		var trgtDtTR=$(tr).find(".trgtDtTr").html(),jobCrdNo=$(tr).find(".jobCrdNoTr").html(),
		cateGry=$(tr).find(".ctgyNoTr").html(),qtyOfTr=$(tr).find(".qtyTr").html(),isdDocWgt=$(tr).find(".wgtOfTr").html(),issWgt=$(tr).find(".isdStkWgtTr").val(),rqrdBomTr=$(tr).find("#rqrdBomjofbcd").html(),
		bomWgtTr=$(tr).find(".isdBomwgtofTr").val(),semiFnshPdt=$(tr).find(".semiFinsPdtTr").val(),srcpMtlTr=$(tr).find(".srcpMtlTr").val(),balWgt=$(tr).find(".balwgtTr").val();
		rtnScrptmtl+=Number(srcpMtlTr)||0,rtnFnshPdt+=Number(semiFnshPdt)||0;
		var totrcvdMtl=(Number(srcpMtlTr)||0)+(Number(semiFnshPdt)||0);
		var subPrcsIsdWgt=$(tr).find(".subPrcsisdTr").val()||0,subPrcsTr=$(tr).find(".subPrcsTr").val(),subPrcsrcvdTr=$(tr).find(".subPrcsrcvdTr").val()||0;
		if(subPrcsTr&&mph_rcvd_auth){
			isPresentSubPrcsCd=true;
			InsertQry+='(\''+subPrcsTr+'\',\''+cmycd+'\',\''+date+'\',\''+frmDpt+'\',\''+jobCrdNo+'\',\''+dcNo+'\',\''+date+'\',\''+workerCd+'\',\''+subPrcsIsdWgt+'\',\''+subPrcsrcvdTr+'\'),';
			bijBomUpdateList.push('UPDATE [mn_prcs_job_hdr] SET [mpjh_isd_wgt] =(cast([mpjh_isd_wgt] as float)+ cast(\''+subPrcsIsdWgt+'\' as float)) ,[mpjh_rcvd_wgt] =(cast([mpjh_rcvd_wgt] as float)+cast(\''+subPrcsrcvdTr+'\' as float)) '
					+'WHERE mpjh_job_crd_no=\''+jobCrdNo+'\' and mpjh_mnprcs_doc_no=\''+dcNo+'\' and mphd_sub_prcs_cd=\''+subPrcsTr+'\' and mpjh_wrk_cd=\''+workerCd+'\' and mpjh_dpt_cd= \''+frmDpt+'\' and '
					+'mpjh_cmy_cd=\''+cmycd+'\' IF @@ROWCOUNT=0 insert into mn_prcs_job_hdr([mphd_sub_prcs_cd] ,[mpjh_cmy_cd] ,[mpjh_dpt_cd] ,[mpjh_isd_wgt] ,[mpjh_job_crd_no] ,[mpjh_mnprcs_doc_no] ,[mpjh_rcvd_wgt] ,[mpjh_wrk_cd])'
					+' values(\''+subPrcsTr+'\',\''+cmycd+'\',\''+frmDpt+'\',\''+subPrcsIsdWgt+'\',\''+jobCrdNo+'\',\''+dcNo+'\',\''+subPrcsrcvdTr+'\',\''+workerCd+'\')');
		}
		if(mph_rcvd_auth){
			bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)-cast("+totrcvdMtl+" as float)) where stm_itm_cd='"+jobCrdNo+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Issue' and stm_stk_crt_id='"+workerCd+"' " +
					" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"'");
			bijBomUpdateList.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as float)+cast("+totrcvdMtl+" as float)) where stm_itm_cd='"+jobCrdNo+"' and stm_stk_trn_typ='"+prcsTypeName+"NotMainProcess Recieved' and stm_stk_crt_id='"+workerCd+"' " +
					" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
							" values ('"+cmycd+"','"+frmDpt+"','"+jobCrdNo+"','"+totrcvdMtl+"','"+date+"','"+workerCd+"','"+prcsTypeName+"NotMainProcess Recieved','"+date+"','"+workerCd+"','','','"+storeCode+"')");
			
		}
		var Mn_Prcs_HdrDetail=new Mn_Prcs_Hdr_Dtl(primId,dcNo,frmDpt,prcsCd,workerCd,
				 cmycd,wrkTyp,trgtDtTR,jobCrdNo,cateGry,qtyOfTr,isdDocWgt,rqrdBomTr,bomWgtTr,
				 issWgt,semiFnshPdt,srcpMtlTr,balWgt,true,mph_rcvd_auth,cretdid,cretddt,null,null,true);
		Mn_Prcs_HdrDetail.mphd_pndg_bom=tr.attr("balancebom")||0;
		Object.assign(Mn_Prcs_HdrDetail,{mphd_sub_prcs_cd:subPrcsTr,mphd_sub_iss_wgt:subPrcsIsdWgt,mphd_sub_rcvd_wgt:subPrcsrcvdTr});
		mainPrcsHdrDetail.push(Mn_Prcs_HdrDetail);
	});
			if(isPresentSubPrcsCd)bijBomUpdateList.push(InsertQry.slice(0,-1));
				var isrcvd=($(".parentCheckBox")[0].checked&&mph_rcvd_auth);
				var mainPrcsHdr=new Mn_Prcs_Hdr(PrimIdOfHdr, dcNo, frmDpt, cmycd, trgtDt,
						prcsCd, workerCd, wrkTyp, mtlWgt, '',
						cretdid, cretddt, null, null, true,
						isrcvd, true, rcvdMtlWgt,balwgt,rtnFnshPdt,rtnScrptmtl);
				mainPrcsHdr.mph_str_cd=storeCode;
	AjaxController.saveMainPrcsHderWithDetailToDbNonDirect(JSON.stringify(mainPrcsHdr),JSON.stringify(mainPrcsHdrDetail),primrIdOfItfh.join(),"[]","[]","",bijBomUpdateList,null,returnResOfMainPrcsSv);
		}
		else{
			var mainPrcsHdrDetail=[],primrIdOfItfh=[],rtnScrptmtl=0,rtnFnshPdt=0,bijBomUpdateList=[];
			$(".childCheckBox:checked").each(function(){
	var tr=$(this).closest("tr");
	if(tr.attr("updateqry"))bijBomUpdateList.push(tr.attr("updateqry"));
	var issWgt=$(tr).find(".isdStkWgtTr").val(),rqrdBomTr=$(tr).find("#rqrdBomjofbcd").html(),
	bomWgtTr=$(tr).find(".isdBomwgtofTr").val(),semiFnshPdt=$(tr).find(".semiFinsPdtTr").val(),srcpMtlTr=$(tr).find(".srcpMtlTr").val(),balWgt=$(tr).find(".balwgtTr").val();
	rtnScrptmtl+=Number(srcpMtlTr)||0,rtnFnshPdt+=Number(semiFnshPdt)||0;
	var subPrcsIsdWgt=$(tr).find(".subPrcsisdTr").val(),subPrcsTr=$(tr).find(".subPrcsisdTr").val(),subPrcsrcvdTr=$(tr).find(".subPrcsrcvdTr").val();
	});
		AjaxController.saveJobOrderHdrDetilinAjax(JSON.stringify(jobHdrOnly),JSON.stringify(jobHdrDtl),[],JSON.stringify(Bom_Iss_Job_Dtl),rtnResOfSucSave);
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
}
*/
