/**
 * 
 */
var trnTypOfControl="";
$(function (){
	$("#frmDptOfIntTrns,#transTypeOfIntTrns,#cmyCdOfIntlTrf,#filterOfPdtDeptInJobCd").on("change",function(){
		var frmDpt=$("#frmDptOfIntTrns").val(),trnTyp=$("#transTypeOfIntTrns").val(),cmyCd=$("#cmyCdOfIntlTrf").val();
		var pdtDptCd=$("#filterOfPdtDeptInJobCd").val();
		if(frmDpt!=""){
			$('#toDptOfIntTrns option').css("display","block");
			  $('#toDptOfIntTrns').find('[value='+frmDpt+']').css("display","none");
			  $('#toDptOfIntTrns').selectpicker('refresh');
		}
		$("#docnotypeshower").html(trnTyp);
		var qrychce='s.stm_stk_trn_typ like \'%Inward%\' or s.stm_stk_trn_typ like \'%InternalProcess%\'';
		if(frmDpt!=""&&trnTyp!=""&&cmyCd!="" && trnTyp!='JobCard'){
			$(".pdtDptInjbCdHde").hide();
			trnTypOfControl=trnTyp;
			AjaxController.getAddInternalTransferData(frmDpt,trnTyp,cmyCd,qrychce,retResOFIntTran);
		}
		else if(trnTyp=='JobCard'){
			$(".pdtDptInjbCdHde:not(:visible)").show();
				var pdtDpt=""; 
				if(pdtDptCd){
					pdtDpt= pdtDptCd.map(s=>"'"+s+"'").join(); 
				 }
				else{
					pdtDpt=$("#filterOfPdtDeptInJobCd option").toArray().filter(s=>$(s).val()!='').map(s=>"'"+s.value+"'").join();
				}
				if(this.id=='filterOfPdtDeptInJobCd')
					AjaxController.getAddInternalTransferData(pdtDpt,'JobCard',cmyCd,qrychce,retResOFIntTran);
					else{
					if($("#frmDptOfIntTrns").val()){	
					var qry="select 'JobCard' as trftyp,stm_itm_cd,stm_dpt_cd,stm_rcvd_stk_wgt,(select top 1 min(cast(johd_trgt_dt as date)) from job_ord_hdr_dtl where johd_doc_no=stm_itm_cd) as trgtdt," +
							"(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=stm_dpt_cd and dm_sts=1) as Dptnm,(select top 1 joh_tot_wgt from job_ord_hdr where joh_doc_no=stm_itm_cd and joh_sts=1) as totwgt" +
							",stm_id from stk_mst where stm_stk_trn_typ='JobCardRecieved' and stm_dpt_cd=\'"+$("#frmDptOfIntTrns").val()+"\' and stm_cmy_cd=\'"+cmyCd+"\' and cast(stm_rcvd_stk_wgt as float)>0";
						AjaxController.getAddInternalTransferDataJobMaked(qry,returnJobCrdMaked);
						function returnJobCrdMaked(res){
							var result='',drpDown={};	var table = $('#myTable').DataTable().clear();table.destroy();
							var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
						           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label><th>Transaction.Type<input class="form-control input-sm"></th><th>JobCardNo<input class="form-control input-sm"></th><th>Dept.Nm<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Isd.Wgt<input class="form-control input-sm"></th><th>Tgt.Dt<input class="form-control input-sm"></th>'
						        +'<th>Qty<input class="form-control input-sm"></th> </tr>';
							$("#TheadBody").html(thead);
							if(res){
							for(var i=0;i<res.length;i++){
								result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
							           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][7]+'" dptcd="'+res[i][2]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][3]+'</td>'
							           +'<td><input type="number" class="form-control input-sm" id="isdWgtOfJbCdInIntf" value="'+res[i][3]+'"></td><td>'+res[i][4]+'</td><td>'+res[i][6]+'</td></tr>';
								drpDown[res[i][1]]=res[i][1];
							}
							}
							var drpDwns='';
							$.each(drpDown,function(i,val){
								drpDwns+='<option value="'+i+'">'+i+'</option>';
							})
							$("#filterOfIntTrns").html(drpDwns).selectpicker("refresh");
							$("#IntTansTable").html(result);  $('[data-toggle="tooltip"]').tooltip();
							var table = $('#myTable').DataTable({
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
					}
					}
				
			}
		else{
			$(".pdtDptInjbCdHde").hide();
			var table = $('#myTable').DataTable().clear();table.destroy();
			$("#IntTansTable").html("");
			var table = $('#myTable').DataTable({
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
	});
})

function retResOFIntTran(res){
	var table = $('#myTable').DataTable().clear();table.destroy();
var result='',drpDown={};$("#filterOfIntTrns").html("");
trnTypOfControl=$("#transTypeOfIntTrns").val();
	if(res!=null){
		if(trnTypOfControl=='Tree No'){
			var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
		           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm"></th><th>Tree No<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Issued Wt<input class="form-control input-sm"></th> <th>Issued Prty<input class="form-control input-sm"></th><th>Target Date<input class="form-control input-sm"></th>'
		        +'</tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				var isdwgt=Number(res[i][2])||0,dstwgt=Number(res[i][7])||0;
				var balwgt=(isdwgt-dstwgt).toFixed(2)||0;
				if(balwgt>0){
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
			           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" stk_crt_id="'+res[i][8]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+balwgt+'</td><td><input type="number" class="form-control smplIssWgtOfCst" style=""   max="'+balwgt+'" value="'+balwgt+'"></td><td class="itemPurityNew">'+res[i][5]+'</td>'
			           +'<td>'+res[i][3]+'</td></tr>'	;
				drpDown[res[i][1]]=res[i][1];
				}
			}
			}
		else if(trnTypOfControl=='JobCard'){
		var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
	           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label><th>Transaction.Type<input class="form-control input-sm"></th><th>JobCardNo<input class="form-control input-sm"></th><th>Dept.Nm<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Isd.Wgt<input class="form-control input-sm"></th><th>Tgt.Dt<input class="form-control input-sm"></th>'
	        +'<th>Qty<input class="form-control input-sm"></th> </tr>';
		$("#TheadBody").html(thead);
		for(var i=0;i<res.length;i++){
			var qty=Math.round(res[i][6]||0);
			result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
		           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][7]+'"  pdtdeptcd="'+res[i][5]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td>'
		           +'<td><input type="number" class="form-control input-sm" id="isdWgtOfJbCdInIntf"></td><td>'+res[i][3]+'</td><td>'+qty+'</td></tr>';
			drpDown[res[i][1]]=res[i][1];
		}
			}
		else{
			var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
		           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm"></th><th>Item Type<input class="form-control input-sm"></th><th>Item Code<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Issued Wt<input class="form-control input-sm"></th> <th>Issued Prty<input class="form-control input-sm"></th><th>Target Date<input class="form-control input-sm"></th>'
		        +'</tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
			           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][4]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control smplIssWgtOfCst" style=""   max="'+res[i][2]+'" value="'+res[i][2]+'"></td><td class="itemPurityNew">'+res[i][5]+'</td>'
			           +'<td>'+res[i][3]+'</td></tr>'	;
				drpDown[res[i][1]]=res[i][1];
			}	
		}
	}
	var drpDwns='';
	$.each(drpDown,function(i,val){
		drpDwns+='<option value="'+i+'">'+i+'</option>';
	})
	$("#filterOfIntTrns").html(drpDwns);
	$("#filterOfIntTrns").selectpicker("refresh");
	$("#IntTansTable").html(result);  $('[data-toggle="tooltip"]').tooltip();
	var table = $('#myTable').DataTable({
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

$(function (){
	$("#filterOfIntTrns").on("change",function(){
		if($("#filterOfIntTrns").val()!=""&&$("#filterOfIntTrns").val()!=null){
			var itmCd=[];
			$.grep($("#filterOfIntTrns").val(),function(i){
				itmCd.push("'"+i+"'");
			});
			var qrychce='s.stm_stk_trn_typ like \'%Inward%\' or s.stm_stk_trn_typ like \'%InternalProcess%\'';
			var frmDpt=$("#frmDptOfIntTrns").val(),trnTyp=$("#transTypeOfIntTrns").val(),cmycd=$("#cmyCdOfIntlTrf").val();	
			if(trnTyp=='JobCard'){
				var pdtDptCd=$("#filterOfPdtDeptInJobCd").val();
				$(".pdtDptInjbCdHde:not(:visible)").show();
					var frmDpt=""; 
					if(pdtDptCd){
						frmDpt= pdtDptCd.map(s=>"'"+s+"'").join(); 
					 }
					else{
						frmDpt=$("#filterOfPdtDeptInJobCd option").toArray().filter(s=>$(s).val()!='').map(s=>"'"+s.value+"'").join();
					}
				}
			AjaxController.getAddInternalTransferDataBasedOrdNo(frmDpt,trnTyp,itmCd,cmycd,qrychce,retResOFIntTranOrdNo);
		}
		else{
		$("#frmDptOfIntTrns").change();
		}
	});
});
function retResOFIntTranOrdNo(res){
	var result='';var table = $('#myTable').DataTable().clear();table.destroy();
	if(res!=null){
		if(trnTypOfControl=='Tree No'){
			var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
		           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm"></th><th>Tree No<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Issued Wt<input class="form-control input-sm"></th> <th>Issued Prty<input class="form-control input-sm"></th><th>Target Date<input class="form-control input-sm"></th>'
		        +'</tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				var isdwgt=Number(res[i][2])||0,dstwgt=Number(res[i][7])||0;
				var balwgt=(isdwgt-dstwgt).toFixed(2)||0;
				if(balwgt>=0){
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
			           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" stk_crt_id="'+res[i][8]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+balwgt+'</td><td><input type="number" class="form-control smplIssWgtOfCst" style=""   max="'+balwgt+'" value="'+balwgt+'"></td><td class="itemPurityNew">'+res[i][5]+'</td>'
			           +'<td>'+res[i][3]+'</td></tr>'	;
		
				}
			}
			}
		else if(trnTypOfControl=='JobCard'){
			var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
		           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label><th>Transaction.Type<input class="form-control input-sm"></th><th>JobCardNo<input class="form-control input-sm"></th><th>Dept.Nm<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Isd.Wgt<input class="form-control input-sm"></th><th>Tgt.Dt<input class="form-control input-sm"></th>'
		        +'<th>Qty<input class="form-control input-sm"></th> </tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
			           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][7]+'" pdtdeptcd="'+res[i][5]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td>'
			           +'<td><input type="number" class="form-control input-sm " id="isdWgtOfJbCdInIntf"></td><td>'+res[i][3]+'</td><td>'+res[i][6]+'</td></tr>';
			}
				}
		else{
			var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
		           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm"></th><th>Item Type<input class="form-control input-sm"></th><th>Item Code<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Issued Wt<input class="form-control input-sm"></th> <th>Issued Prty<input class="form-control input-sm"></th><th>Target Date<input class="form-control input-sm"></th>'
		        +'</tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'
			           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'"  onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][4]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control smplIssWgtOfCst" style=""   max="'+res[i][2]+'" value="'+res[i][2]+'"></td><td class="itemPurityNew">'+res[i][5]+'</td>'
			           +'<td>'+res[i][3]+'</td></tr>'	;
			}	
		}
	}
	$("#IntTansTable").html(result);  $('[data-toggle="tooltip"]').tooltip(); 
	var table = $('#myTable').DataTable({
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
//////////////////////////////// end .//////////////////////////////////////////////////////////////// 


//////////////////////////////////// Check Box Handler In AddInternal Transfer Jsp ///////////////////
/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddInternal(ths){
	if(ths.checked==true)
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
	sumOfFunctionInAddInternalTransfer();
}
function childCkeckBoxChecked(){ 
		var sumChkedchkBox=$(".childCheckBox:checked").length;
		var totChkBox=$(".childCheckBox").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		sumOfFunctionInAddInternalTransfer();
	}

function sumOfFunctionInAddInternalTransfer(){
	var totWgt=0,totIssWgt=0;
if($("#transTypeOfIntTrns").val()=='Direct'){
	$("#IntTansTable .childCheckBox:checked,#myTableExist .childCheckBox").each(function (){
		totWgt+=Number($(this).closest("tr")[0].cells[4].innerHTML);
			totIssWgt+=Number($(this).closest("tr").find(".smplIssWgtOfCst").val());
	})
	$("#totissWgtOfIntTrns").val(totIssWgt.toFixed(2))
}
else if($("#transTypeOfIntTrns").val()=='Tree No'){
	$("#IntTansTable .childCheckBox:checked,#myTableExist .childCheckBox").each(function (){
		totWgt+=Number($(this).closest("tr")[0].cells[3].innerHTML);
			totIssWgt+=Number($(this).closest("tr").find(".smplIssWgtOfCst").val());
	})
	$("#totissWgtOfIntTrns").val(totIssWgt.toFixed(2))
}

else{
	$("#IntTansTable .childCheckBox:checked,#myTableExist .childCheckBox").each(function (){
		var tr=$(this).closest("tr");
			var tot=Number(tr.find("#isdWgtOfJbCdInIntf").val())||0,wgt=Number(tr.find("td:eq(4)").html())||0;
			totWgt+=wgt;
			totIssWgt+=tot;
			});		
	$("#totissWgtOfIntTrns").val(totIssWgt.toFixed(2))
}
$("#totWgtOfIntTrns").val(totWgt.toFixed(2));
}
///////////////////////////////////// end //////////////////////////////////////////

////////////////// onclick in total wgt issue ///////////////////////////////////////////
function saveIseWgtHndl(){
	var totWgt=0;
	$(".chkBoxInIswgt:checked").each(function (){
		totWgt+=Number($(this).closest("tr").find(".issuWgtByStk").val());
	});
	$("#totissWgtOfIntTrns").val(totWgt.toFixed(2));	$("#myModal").modal('hide');
}


$(function (){
	$(".issuWgtByStk").prop("disabled",true);
	$("#totissWgtOfIntTrns").on("click",function(){
		if(/(JobCard|Tree No)/.test($("#transTypeOfIntTrns").val())){
			$("#myModal").modal('show');
		}
	});
	$(".issuWgtByStk").on("keyup",function(){
		var totWgt=Number($(this).closest("tr")[0].cells[3].innerHTML);
		if(this.value>totWgt){
			this.value=totWgt;
		}
	})
})
$(".chkBoxInIswgt").on("change",function(){
		if($(this).prop("checked")==true)
		$(this).closest("tr").find(".issuWgtByStk").prop("disabled",false);
		else
			$(this).closest("tr").find(".issuWgtByStk").prop("disabled",true);
	});
	
	
/////////////////////  end /////////////////////////////////////////////////////////////
function saveInternalTrfHdr(){
	var docno=$("#docNoOfIntTrf").val(),cmyCd=$("#cmyCdOfIntlTrf").val(),strCd=$("#strCdOfItlTrf").val(),
	frmDpt=$("#frmDptOfIntTrns").val(),toDpt=$("#toDptOfIntTrns").val(),chklgth=$(".childCheckBox:checked").length;
	if(docno!=""&&cmyCd!=""&&strCd!=""&&frmDpt!=""&&toDpt!=""&&chklgth>0){
		var sts=true;
	
		if(sts==true){
			$("#saveBtnInIntlTrf").addClass("disabled");
			$("#savesuccessRes").html('<div class="alert alert-info"> Updating Please Wait.....</div>');		
			var priHdOnlyId=$("#primIdOfIntlHdr").val(),crtId=$("#crtIdOfIntlHdr").val(),crtDt=$("#crtDtOfIntlHdr").val()
			var intlTrfHdrDtl=[],iwdStkPro=[],trType=$("#transTypeOfIntTrns").val(),totrcvdWgt=$("#totWgtOfIntTrns").val(),totIsdWgt=$("#totissWgtOfIntTrns").val();
			var itlTrfHdr={ith_id:priHdOnlyId,ith_crt_id:crtId,ith_doc_dt:crtDt,ith_crt_dt:crtDt,ith_doc_no:docno,ith_frm_dpt_cd:frmDpt,ith_to_dpt_cd:toDpt,ith_trf_typ:trType,ith_tot_rcvd_wgt:totrcvdWgt,ith_tot_iss_wgt:totIsdWgt,ith_iss_auth:false,ith_trf_sts:true}; 
			var jobOrdPriIds=[];var iwdItmMv=[],ordHderDetailIds=[];
			if(trType=='Tree No'){
				$(".childCheckBox:checked").each(function(){
					var trOne=$(this).closest("tr");
					var tresNo=trOne[0].cells[2].innerHTML,rcvdwgt=trOne[0].cells[3].innerHTML,primIdOfintf=$(this).attr("id"),
					isswgt=trOne.find(".smplIssWgtOfCst").val(),trnTyp=trOne[0].cells[1].innerHTML,itmStkPrty=trOne.find(".itemPurityNew").html();
					intlTrfHdrDtl.push({ithd_id:primIdOfintf,ithd_crt_id:crtId,ithd_crt_dt:crtDt,ithd_tree_no:tresNo,ithd_itm_rcvd_wgt:rcvdwgt,ithd_itm_typ:'',ithd_itm_trn_typ:trnTyp,ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
						ithd_trf_typ:trType,ithd_itm_cd:'',ithd_itm_iss_wgt:isswgt,ithd_iss_auth:false,ithd_trf_sts:true,ithd_itm_prty:itmStkPrty});
					});
				if($("#CstingstkForEdit").val()!=""&&$("#isdauthVal").val()=="1"){
					var stkDtlList=JSON.parse($("#CstingstkForEdit").val());
				var exstJobCrdIssdStkStr=$("#IsuedJobCardMakingForEdit").val();
					var exstJbCdIsdStk=[];
				if(exstJobCrdIssdStkStr!=""){
					exstJbCdIsdStk=JSON.parse(exstJobCrdIssdStkStr);
				}
				$(".childCheckBox:checked").each(function(){
					var trRow=$(this).closest("tr");
					var stkExstId=$(this).val(),stkWgt=trRow.find(".smplIssWgtOfCst").val(),
					issedPrty=trRow.find(".itemPurityNew").html(),pdtcod=trRow.find("td:eq(2)").html();
					var findObj=stkDtlList.find((itrf)=>{
						if(itrf.stm_cmy_cd==cmyCd&&itrf.stm_itm_cd==pdtcod&&itrf.stm_dpt_cd==frmDpt&&itrf.stm_rcvd_stk_prty==issedPrty){
							itrf.stm_rcvd_stk_wgt=Number(itrf.stm_rcvd_stk_wgt)-Number(stkWgt);
							iwdStkPro.push(itrf);
							return true;
						}
					});
					 if(findObj){
						var findExsJobCd= exstJbCdIsdStk.find((exsj)=>{
							if(exsj.stm_cmy_cd==findObj.stm_cmy_cd&& exsj.stm_itm_cd==findObj.stm_itm_cd&& exsj.stm_dpt_cd==toDpt&& exsj.stm_rcvd_stk_prty==findObj.stm_rcvd_stk_prty){
								return true;
							}
						});
						if(!findExsJobCd){
							var cpy=Object.assign({},findObj);
							cpy.stm_id=null;
							cpy.stm_rcvd_stk_wgt=Number(stkWgt);
							cpy.stm_dpt_cd=toDpt;
							cpy.stm_stk_trn_typ='JobCardMaking';
							cpy.stm_stk_crt_id=null;
							iwdStkPro.push(cpy);
						}
						else{
							findExsJobCd.stm_rcvd_stk_wgt=Number(findExsJobCd.stm_rcvd_stk_wgt)+Number(stkWgt);
							iwdStkPro.push(findExsJobCd);
						}
					 }
				});
				$.grep(intlTrfHdrDtl,function(i){
					iwdItmMv.push({im_cmy_cd:cmyCd,im_str_cd:strCd,im_trn_typ:'JobCardMaking',im_trn_nmb:docno,im_itm_cd:i.ithd_itm_cd,im_itm_wgt:i.ithd_itm_iss_wgt
						,im_itm_prty:i.ithd_itm_prty,im_itm_pure_gld_wgt:0,im_itm_typ:i.ithd_itm_typ,im_dpt_cd:toDpt});
				});
				}
				
			}
			else if(trType=='JobCard'){
				$(".childCheckBox:checked").each(function(){
					if(!$(this).closest("tr").hasClass("warning")){
					ordHderDetailIds.push($(this).val());
					var trOne=$(this).closest("tr").find("td");var primIdRcvd=$(this).val();
					var OrdNo=$(trOne[2]).html(),bmwgt=$(trOne[4]).html(),isdWgt=$(trOne[5]).find("input").val()
				,treeNo=$(trOne[7]).html();
					var primidOfIntf=$(this).attr("primidofintf")||null;
				intlTrfHdrDtl.push({ithd_id:primidOfIntf,ithd_itm_trn_typ:'JobCard',ithd_itm_rcvd_wgt:bmwgt,ithd_itm_iss_wgt:isdWgt,ithd_ord_no:OrdNo,ithd_tree_no:treeNo,ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
					ithd_trf_typ:'JobCard',ithd_itm_cd:$(this).attr("pdtdeptcd"),ithd_iss_auth:false,ithd_trf_sts:true});
				if($("#isdauthVal").val()=="1"){
					if(!$("#filterOfPdtDeptInJobCd").val()){
						var JobCardRecieved=$("#ExstStkInJobCrdIseStr").val()||"[]";
						var exstJobCardList=JSON.parse(JobCardRecieved);
						var findObj=exstJobCardList.find((ths)=>{
							if(ths.stm_id==primIdRcvd){
								ths.stm_rcvd_stk_wgt=Number(ths.stm_rcvd_stk_wgt)-Number(isdWgt);
								iwdStkPro.push(ths);
								return true;
							}
						});
						var updateObj=exstJobCardList.find((ths)=>{
							if(ths.stm_itm_cd==OrdNo&&ths.stm_dpt_cd==toDpt&&ths.stm_cmy_cd==cmyCd){
								ths.stm_rcvd_stk_wgt=Number(ths.stm_rcvd_stk_wgt)+Number(isdWgt);
								iwdStkPro.push(ths);
								return true;
							}
						});
						if(!updateObj){
							iwdStkPro.push({stm_str_cd:strCd,stm_cmy_cd:cmyCd,stm_itm_cd:OrdNo,stm_stk_trn_typ:'JobCardRecieved',stm_stk_itm_typ:'',stm_rcvd_stk_wgt:isdWgt,stm_rcvd_stk_prty:'',
								stm_stk_pure_gld_wgt:0,stm_stk_pure_doc_val:'0',stm_stk_pure_pgm_cal:'0',stm_dpt_cd:toDpt});
						}
						ordHderDetailIds=[];
					}
					else{
					iwdStkPro.push({stm_str_cd:strCd,stm_cmy_cd:cmyCd,stm_itm_cd:OrdNo,stm_stk_trn_typ:'JobCardRecieved',stm_stk_itm_typ:'',stm_rcvd_stk_wgt:isdWgt,stm_rcvd_stk_prty:'',
						stm_stk_pure_gld_wgt:0,stm_stk_pure_doc_val:'0',stm_stk_pure_pgm_cal:'0',stm_dpt_cd:toDpt});
					}
					iwdItmMv.push({im_cmy_cd:cmyCd,im_str_cd:strCd,im_trn_typ:'JobCardRecieved',im_trn_nmb:docno,im_itm_cd:OrdNo,im_itm_wgt:isdWgt
						,im_itm_prty:'',im_itm_pure_gld_wgt:0,im_itm_typ:'',im_dpt_cd:toDpt});
				}
					}
				});
				
			}
			
			else{
				$("#IntTansTable .childCheckBox:checked").each(function(){
					var itmCd=$(this).closest("tr")[0].cells[3].innerHTML,itmTyp=$(this).closest("tr")[0].cells[2].innerHTML,rcvdwgt=$(this).closest("tr")[0].cells[4].innerHTML,
					isswgt=$(this).closest("tr").find(".smplIssWgtOfCst").val(),trnTyp=$(this).closest("tr")[0].cells[1].innerHTML,itmStkPrty=$(this).closest("tr").find(".itemPurityNew").html();;
					intlTrfHdrDtl.push({ithd_itm_rcvd_wgt:rcvdwgt,ithd_itm_typ:itmTyp,ithd_itm_trn_typ:trnTyp,ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
						ithd_trf_typ:trType,ithd_itm_cd:itmCd,ithd_itm_iss_wgt:isswgt,ithd_iss_auth:false,ithd_trf_sts:true,ithd_itm_prty:itmStkPrty});
					});
				if($("#ExsitStkDtlStr").val()!=""&&$("#isdauthVal").val()=="1"){
					var stkDtlList=JSON.parse($("#ExsitStkDtlStr").val());
					var exstIseIntlTrfStr=$("#stkForIsuedIntTrf").val(),exstInwardsStkStr=$("#ExstStkInInward").val();
					var exstIseIntlTrf=[],exstInwardsStk=[];
				if(exstIseIntlTrfStr!=""){
					exstIseIntlTrf=JSON.parse(exstIseIntlTrfStr);
					}
				if(exstInwardsStkStr!=""){
					exstInwardsStk=JSON.parse(exstInwardsStkStr);
				}
				$("#IntTansTable .childCheckBox:checked,#myTableExist .childCheckBox:checked:not(:disabled)").each(function(){
					var stkExstId=$(this).val(),stkWgt=$(this).closest("tr").find(".smplIssWgtOfCst").val(),
					issedPrty=$(this).closest("tr")[0].cells[6].innerHTML;;
					
					$.grep(stkDtlList,function(k){
					if(k.stm_id==stkExstId)	{

						k.stm_rcvd_stk_wgt=Number(k.stm_rcvd_stk_wgt)-Number(stkWgt);
						iwdStkPro.push(k);
						if($("#isRtrnOfInward").prop("checked")){
							var findedStk=exstInwardsStk.find(function (iwd){
								if(iwd.stm_cmy_cd==k.stm_cmy_cd&&iwd.stm_itm_cd==k.stm_itm_cd&&iwd.stm_dpt_cd==toDpt&&iwd.stm_stk_itm_typ==k.stm_stk_itm_typ&&iwd.stm_rcvd_stk_prty==k.stm_rcvd_stk_prty){
									return true;
								}
							});
							if(findedStk!=undefined){
								findedStk.stm_rcvd_stk_wgt=Number(findedStk.stm_rcvd_stk_wgt)+Number(stkWgt);
								iwdStkPro.push(findedStk);
							}	
						}
						else{
						var findedStk=exstIseIntlTrf.find(function (itrf){
							if(itrf.stm_cmy_cd==k.stm_cmy_cd&&itrf.stm_itm_cd==k.stm_itm_cd&&itrf.stm_dpt_cd==toDpt&&itrf.stm_stk_itm_typ==k.stm_stk_itm_typ&&itrf.stm_rcvd_stk_prty==k.stm_rcvd_stk_prty){
								return true;
							}
						});
						if(findedStk!=undefined){
							findedStk.stm_rcvd_stk_wgt=Number(findedStk.stm_rcvd_stk_wgt)+Number(stkWgt);
							iwdStkPro.push(findedStk);
						}
						else{
						var cpy=Object.assign({},k);
						cpy.stm_id=null;
						cpy.stm_rcvd_stk_wgt=Number(stkWgt);
						cpy.stm_dpt_cd=toDpt;
						cpy.stm_rcvd_stk_prty=issedPrty;
						cpy.stm_stk_trn_typ='InternalProcess';
						iwdStkPro.push(cpy);
						}
					}
					}
					})
				});
				if($("#ExstIntlDetJson").val()!=""){
					var jsn=JSON.parse($("#ExstIntlDetJson").val());
					$("#myTableExist .childCheckBox:checked").each(function(){
					var thsId=$(this)["0"].id,rcvdwgt=$(this).closest("tr")[0].cells[4].innerHTML,
					isswgt=$(this).closest("tr").find(".smplIssWgtOfCst").val();
					$.grep(jsn,function(j){
					if(j.ithd_id==thsId){
						j.ithd_itm_rcvd_wgt=rcvdwgt;
						j.ithd_itm_iss_wgt=isswgt;
						j.ithd_iss_auth=true;
						intlTrfHdrDtl.push(j);	
					}
					});
					});
					}
				$.grep(intlTrfHdrDtl,function(i){
					iwdItmMv.push({im_cmy_cd:cmyCd,im_str_cd:strCd,im_trn_typ:'InternalProcess',im_trn_nmb:docno,im_itm_cd:i.ithd_itm_cd,im_itm_wgt:i.ithd_itm_iss_wgt
						,im_itm_prty:i.ithd_itm_prty,im_itm_pure_gld_wgt:0,im_itm_typ:i.ithd_itm_typ,im_dpt_cd:toDpt});
				});
				}
			
			}
			if($("#isdauthVal").val()=="1"){
				if($(".parentCheckBox:checked").length>0)
				itlTrfHdr.ith_iss_auth=true;
				else
				itlTrfHdr.ith_iss_auth=false;
				$.grep(intlTrfHdrDtl,function(u){
					u.ithd_iss_auth=true;
				});
			}
			AjaxController.saveInternalTransferDetailRecByAjax(JSON.stringify(itlTrfHdr),JSON.stringify(intlTrfHdrDtl),JSON.stringify(iwdStkPro),jobOrdPriIds,JSON.stringify(iwdItmMv),ordHderDetailIds.join(),retuenSucResOfsaveIntrlTrf);
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6347"> Entered Document No Already Present</div>');$("#hideCstAlrt6347").fadeOut(3000);		
		}
	}else{
		if(docno==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt617"> Enter Document No </div>');$("#hideCstAlrt617").fadeOut(3000);	
		}
		else if(cmyCd==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt627"> Select Company  </div>');$("#hideCstAlrt627").fadeOut(3000);	
		}
		else if(strCd==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt637"> Select Store  </div>');$("#hideCstAlrt637").fadeOut(3000);	
		}
		else if(frmDpt==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt647"> Select From Department </div>');$("#hideCstAlrt647").fadeOut(3000);
		}
		else if(toDpt==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt657"> Select To Department </div>');$("#hideCstAlrt657").fadeOut(3000);
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6546"> Select Records </div>');$("#hideCstAlrt6546").fadeOut(3000);
		}
	}
}

function retuenSucResOfsaveIntrlTrf(res){
	if(res=="success"){
		window.location.href="internaltransfer.mm";
	}
}
////////////////////// save InternalTrfHdr Detail TO The Data Base /////////////////
	/////////////////////// issued Weiht Calculation sumOfIssweightInStkCal ////////////

function sumOfIssweightInStkCal(){
	var totIssWgt=0;
	$("#IntTansTable .childCheckBox:checked,#myTableExist .childCheckBox").each(function (){
		totIssWgt+=Number($(this).closest("tr").find(".smplIssWgtOfCst").val());
	})
	 $("#totissWgtOfIntTrns").val(totIssWgt.toFixed(2));
}
$("#myTable").delegate(".smplIssWgtOfCst","keypress change",function(evt){
	var totWgtt=0;var typ=$("#transTypeOfIntTrns").val();
	if(typ=='Direct')totWgtt=Number($(this).closest("tr")[0].cells[4].innerHTML);
	if(typ=='Tree No')totWgtt=Number($(this).closest("tr")[0].cells[3].innerHTML);
	if(totWgtt<Number($(this).val())){
		$(this).val(totWgtt.toFixed(2));
	}
	if(evt.type=="change")
		$(this).val(Number($(this).val()).toFixed(2));
	
	sumOfIssweightInStkCal();
});

/////////////////////// delete internal  trf Hdr detail rec by id /////////////////////////////
function deleteInternalTrfHdrDtlRec(){
	if($("#myTableExist .childCheckBox:checked").length>0){
		$("#delBtnIdOfItnl").addClass("disabled");
		$("#savesuccessRes").html('<div class="alert alert-info"> Deleting Please Wait.....</div>');
		var itnlHdrOnly={},totRecWgt=0,totIssWgt=0,priId=[];var jobPriId=[];
		if($("#transTypeOfIntTrns").val()=='Direct'){
	$("#myTableExist .childCheckBox:checked").each(function(){
		priId.push($(this)[0].id);totIssWgt+=Number($(this).closest("tr").find(".smplIssWgtOfCst").val());
		totRecWgt+=Number($(this).closest("tr")[0].cells[4].innerHTML);
	});
	}
		else{
			$("#myTableExist .childCheckBox:checked").each(function(){
				priId.push($(this)[0].id);$(this).closest("tr").css("background-color","orangered");jobPriId.push($(this).val());
				var qty=Number($(this).closest("tr")[0].cells[5].innerHTML),wgt=Number($(this).closest("tr")[0].cells[3].innerHTML);
				totIssWgt+=qty!=0?wgt*qty:wgt;
			});	
			totIssWgt=totRecWgt;
		}
	if($("#ExxstIntlObj").val()!=""){
		itnlHdrOnly=JSON.parse($("#ExxstIntlObj").val());
		itnlHdrOnly.ith_tot_rcvd_wgt=Number(itnlHdrOnly.ith_tot_rcvd_wgt)-Number(totRecWgt),itnlHdrOnly.ith_tot_iss_wgt=Number(itnlHdrOnly.ith_tot_iss_wgt)-Number(totIssWgt);
	}
	AjaxController.delExstIntrnlHdrDetalRecByid(JSON.stringify(itnlHdrOnly),priId,jobPriId,returnDelResOfIntlHdrDtl);
	function returnDelResOfIntlHdrDtl(res){
		if(res=="success"){
			$("#savesuccessRes").html('<div class="alert alert-success" id="hideCstAlrtE88"> Deleted Records Successfully</div>');$("#hideCstAlrtE88").fadeOut(3000);
			if($("#myTableExist .childCheckBox:checked").each(function(){
				$(this).closest("tr").remove();
			}));	
			location.reload();
		}
	}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrtE77"> Select Exist Records </div>');$("#hideCstAlrtE77").fadeOut(3000);
	}
}

/////////////////////////// end //////////////////////////////////////////////////////////////