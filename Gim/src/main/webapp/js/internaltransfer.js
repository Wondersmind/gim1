/**
 * 
 */
/////////////////////////// filter or Data Recovery from DataBases ///////////////////////////////////
var trnTypOfControl="",CurrentIdFilter="";
$(function (){
	$("#frmDptOfIntTrns,#transTypeOfIntTrns,#cmyCdOfIntlTrf,#pdtRejbCrdBtch,#pdtAcptRctjbCrdBtch,#filterOfPdtDeptInJobCd,#filterOfIntTrns,#pdtPrtyInBom,#pdtPrtyInJobCrd").on("change",function(){
		if(this.id=='transTypeOfIntTrns'||this.id=='filterOfPdtDeptInJobCd'){
			$("#filterOfIntTrns,#pdtRejbCrdBtch,#pdtAcptRctjbCrdBtch").html('').selectpicker("refresh");
		}
		customerboxcontroller();
		if(this.id!='pdtRejbCrdBtch')$(".RejbCrdBtch").hide();
		$(".stkoftodpt,.stkoffromdpt").html('');
		var frmDpt=$("#frmDptOfIntTrns").val(),trnTyp=$("#transTypeOfIntTrns").val(),cmyCd=$("#cmyCdOfIntlTrf").val();
		var pdtDptCd=$("#filterOfPdtDeptInJobCd").val(),docnoFilter=$("#filterOfIntTrns").val()||[],pdtPrtyInBom=$("#pdtPrtyInBom").val(),
		pdtPrtyInJobcrd=$("#pdtPrtyInJobCrd").val()||[],btchInRjCard=$("#pdtRejbCrdBtch").val()||[],acptorrjct=$("#pdtAcptRctjbCrdBtch").val()||[];
		var FIlterDOc="";CurrentIdFilter=this.id;
		if(this.id=='frmDptOfIntTrns'){
			$('#toDptOfIntTrns option').show();
				  $("#toDptOfIntTrns option[value='"+frmDpt+"']").hide();
				  $('#toDptOfIntTrns').val('').selectpicker('refresh');
		}
		if(docnoFilter.length){
			FIlterDOc=docnoFilter.map((s)=>"'"+s+"'").join();
		}
		if(trnTyp&&frmDpt){
		(trnTyp=='Bom'||trnTyp=='Finished Pdt')?$(".bomwgtcolm").html("Tot Qty"):$(".bomwgtcolm").html("Tot Wgt");	
		$("#docnotypeshower").html(trnTyp);
		var qrychce="s.stm_stk_trn_typ in('Inward','InternalProcess','JobCardMaking','BomStock','ScrapMetal','AlloyReceived','Melting Received','RecoveryRecieved') or stm_stk_trn_typ like '%MainReceived' or stm_stk_trn_typ like '%NotMainProcess Recieved%'";
		if(frmDpt!=""&&trnTyp!=""&&cmyCd!="" && trnTyp!='JobCard'&& trnTyp!='Bom'&&trnTyp!='Finished Pdt'){
			$(".pdtDptInjbCdHde,.bomWgtEnterBox,.jbCrdPtyBox").hide();$(".stkoftodpt").html(+$(".stkoftodpt").attr("old")||'');
			trnTypOfControl=trnTyp;
			AjaxController.getAddInternalTransferData(frmDpt,trnTyp,cmyCd,qrychce,frmDpt,FIlterDOc,retResOFIntTran);
		}
		else if(trnTyp=='JobCard'){
			$(".bomWgtEnterBox").hide();
			$(".pdtDptInjbCdHde:not(:visible),.jbCrdPtyBox").show();
				var pdtDpt=""; 
				if(pdtDptCd){
					pdtDpt= pdtDptCd.map(s=>"'"+s+"'").join(); 
				 }
				if(frmDpt){
					var filter='',docfilter='',itmfilter='';
					if(pdtDptCd){
						filter=" and Dptnm in ("+$("#filterOfPdtDeptInJobCd option:selected").toArray().map(s=>"'"+s.innerText+"'").join()+")";
					}
					if(FIlterDOc){
						itmfilter=" and stm_itm_cd in ("+FIlterDOc+")";
						docfilter=" and joh_doc_no in ("+FIlterDOc+")";
					}
					pdtPrtyInJobcrd=pdtPrtyInJobcrd.map(s=>"'"+s+"'").join();
					if(pdtPrtyInJobcrd)pdtPrtyInJobcrd=" and stm_rcvd_stk_prty in ("+pdtPrtyInJobcrd+")";
					
					var completedsats="";
					if($("#transTypeOfIntTrns").val()=="JobCard" && $("#frmDptOfIntTrns").val()=="10004"){
						completedsats=" and joh_iss_pdng !='Completed'  and joh_mn_prcs_sts is null ";
					}
					
				var qry="select * from (select 'JobCard' as trftyp,stm_itm_cd,stm_dpt_cd,stm_rcvd_stk_wgt,(select top 1 min(cast(johd_trgt_dt as date)) from job_ord_hdr_dtl" +
						" where johd_doc_no=stm_itm_cd) as trgtdt,(select top 1 dm_dpt_nm from dpt_mst left join job_ord_hdr_dtl on johd_pdt_dpt_cd=dm_dpt_cd where " +
						"johd_doc_no=stm_itm_cd and johd_job_sts=1 and dm_sts=1) as Dptnm,(select top 1 joh_tot_wgt from job_ord_hdr where joh_doc_no=stm_itm_cd and joh_sts=1) as " +
						" totwgt,stm_id,(select top 1 johd_pdt_dpt_cd from job_ord_hdr_dtl where johd_doc_no=stm_itm_cd and johd_job_sts=1) as pdtcddpt ,'0' as finlwgt" +
						",0 as primid,'JobCardRcvd' as stkTrf,stm_rcvd_stk_prty from stk_mst where stm_stk_trn_typ='JobCardRecieved' and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmyCd+"' and cast(stm_rcvd_stk_wgt as decimal(20,3))>=0)   as tb" +
						" where 1=1 "+itmfilter+" "+filter+" "+pdtPrtyInJobcrd+" union select * from (select 'JobCard' as trftyp,joh_doc_no,stm_dpt_cd,(select isnull(sum(bij_iss_wgt),'') from bom_iss_job_dtl where" +
						" bij_job_crd_no=joh_doc_no) as wgt,(select top 1 min(cast(johd_trgt_dt as date)) from job_ord_hdr_dtl where johd_doc_no=joh_doc_no) as trgtdt," +
						"(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=((select top 1 johd_pdt_dpt_cd from job_ord_hdr_dtl where johd_doc_no=joh_doc_no)) and dm_sts=1)" +
						" as Dptnm,(j.joh_tot_wgt) as qty,joh_id as id,(select top 1 johd_pdt_dpt_cd from job_ord_hdr_dtl where johd_doc_no=joh_doc_no) as pdtdptcd," +
						" (stm_rcvd_stk_wgt) as fnlwgt,(stm_id) as primStkId,'JobCardMaked' as stkTrf,stm_rcvd_stk_prty from job_ord_hdr j left join stk_mst on joh_doc_no=stm_itm_cd and stm_dpt_cd=joh_dpt_cd where" +
						" cast(stm_rcvd_stk_wgt as decimal(20,3))>=0 and stm_stk_trn_typ='JobCardMaked' and joh_pdt_typ in ('JobCardMaking','ReJob Card') and joh_cmy_cd='"+cmyCd+"' and joh_dpt_cd='"+frmDpt+"' "+completedsats+") as tbdf" +
						" where 1=1 "+docfilter+" "+filter+" "+pdtPrtyInJobcrd+" ";
					AjaxController.getAddInternalTransferDataJobMaked(qry,returnJobCrdMaked);
					function returnJobCrdMaked(res){
						if(CurrentIdFilter=='transTypeOfIntTrns'||CurrentIdFilter=='frmDptOfIntTrns'){
							$("#filterOfIntTrns,#filterOfPdtDeptInJobCd").html("").selectpicker("refresh");	
							$("#pdtPrtyInJobCrd").html("").selectpicker("refresh");
						}
						var result='',drpDown=new Set(),drpDownPdtDpt=new Set(),prtyjb=new Set();	var table = $('#myTable').DataTable().clear();table.destroy();
						var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
					           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label><th>Transaction.Type<input class="form-control input-sm"></th><th>JobCardNo<input class="form-control input-sm"></th><th>Dept.Nm<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Isd.Wgt<input class="form-control input-sm"></th><th>Tgt.Dt<input class="form-control input-sm"></th>'
					        +'<th>Qty<input class="form-control input-sm"></th><th>Prty<input class="form-control input-sm"></th> </tr>';
						$("#TheadBody").html(thead);
						if(res&&res.length){
						for(var i=0;i<res.length;i++){
							var isaulwgt=0;res[i][12]=res[i][12]||'';
							prtyjb.add('<option value="'+res[i][12]+'">'+res[i][12]+'</option>');
							if(res[i][11]=='JobCardMaked'){
							isaulwgt=(+res[i][9]||0).toFixed(2);
							}
							else{
								res[i][10]=res[i][7];res[i][7]=0;
								isaulwgt=(+res[i][3]||0).toFixed(2);	
							}
							res[i][6]=Math.round(+res[i][6]||0);
							drpDown.add('<option value="'+res[i][1]+'">'+res[i][1]+'</option>');
							drpDownPdtDpt.add('<option>'+res[i][5]+'</option>')
							var style=getPurityColor(res[i][12]);
							result+='<tr '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
						           +'<input type="checkbox" class="checkboxes childCheckBox" trf="'+res[i][11]+'" stkprim="'+res[i][10]+'" jobprim="'+res[i][7]+'" pdtdeptcd="'+res[i][8]+'" dptcd="'+res[i][2]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+isaulwgt+'</td>'
						           +'<td><input type="number" class="form-control input-sm" id="isdWgtOfJbCdInIntf" value="'+isaulwgt+'"></td><td>'+res[i][4]+'</td><td>'+res[i][6]+'</td><td class="jbcrdPrty">'+res[i][12]+'</td></tr>';
						}
						}
						$("#pdtPrtyInJobCrd").val()||$("#pdtPrtyInJobCrd").html([...prtyjb]).selectpicker("refresh");
						$("#filterOfPdtDeptInJobCd").val()||$("#filterOfPdtDeptInJobCd").html([...drpDownPdtDpt]).selectpicker("refresh");
						$("#filterOfIntTrns").val()||$("#filterOfIntTrns").html([...drpDown]).selectpicker("refresh");
						$("#IntTansTable").html(result);  $('[data-toggle="tooltip"]').tooltip();
						var optiosn={
								   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
								   "iDisplayLength": -1,
								   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 6}]
								};
						if(trnTyp=='Direct'){
							optiosn.columnDefs=[{ type: 'date-dd-mmm-yyyy', targets: 7}]
						}
						var table = $('#myTable').DataTable(optiosn);
						table.columns().eq( 0 ).each( function ( colIdx ) {
						    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
						        table
						            .column( colIdx )
						            .search( this.value )
						            .draw();
						        $(".parentCheckBox").prop("checked",false);
						        sumOfFunctionInAddInternalTransfer();
						    } );});
					}
				}
				
			}
		else if(trnTyp=='Finished Pdt'){
			$(".pdtDptInjbCdHde,.bomWgtEnterBox,.jbCrdPtyBox").hide();
			$(".RejbCrdBtch").show();
			if(frmDpt!=""){
				if(FIlterDOc){
					FIlterDOc=" and fpd_mov_doc_no in ("+FIlterDOc+")";
				}
				acptorrjct=acptorrjct.map(s=>"'"+s+"'").join();
				btchInRjCard=btchInRjCard.map(s=>"'"+s+"'").join();
			if(btchInRjCard)btchInRjCard=" and fpd_btch_no in ("+btchInRjCard+") ";
			if(acptorrjct)acptorrjct=" and fpd_acpt_rjct in ("+acptorrjct+") ";
				var qry="select fpd_tgt_dt,fpd_pdt_cd,fpd_ord_typ,fpd_ord_ctgy,fpd_ord_prty,fpd_ord_qty,fpd_acpt_rjct,"
				+ "isnull(fpd_acpt_rjct_wgt,'') as rjctdwgt,fpd_rmrk,fpd_ord_prm_id,fpd_id,fpd_btch_no,fpd_mov_doc_no,(case when (fpd_wrk_typ)='OutSideWrker' then " +
						"(select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=(fpd_wrk_cd) and vcm_vnct_sts=1) else " +
						"(select top 1 em_emp_nm from emp_mst where em_emp_id=(fpd_wrk_cd) and em_emp_sts=1) end) as emp,(select top 1 ohd_cst_cd from ord_hdr_dtl where ohd_id=fpd_ord_prm_id) as cstmrcd,fpd_jbcd_no from fnsh_pdt_dtl" +
						" fo where fpd_sts=1 and fpd_cmy_cd='"+cmyCd+"'  and fpd_pdt_mvd='"+frmDpt+"' "+acptorrjct+" "+FIlterDOc+" "+btchInRjCard+" ";
			AjaxController.getCompletedBomForIntrnalTransfer(qry,retResOFIntTran);	
			}
		}
		else if(trnTyp=='Bom'){
			$(".pdtDptInjbCdHde,.jbCrdPtyBox").hide();
			$(".bomWgtEnterBox").show();
			$(".stkoftodpt").html(+$(".stkoftodpt").attr("old")||'');
			if(frmDpt!=""){
				if(FIlterDOc){
					FIlterDOc=" and bm_bom_nm in ("+FIlterDOc+")";
				}
				pdtPrtyInBom=pdtPrtyInBom?" and bij_pdt_prty='"+pdtPrtyInBom+"' ":"";
				var qry='select bij_job_crd_no,bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bij_tot_wgt,bij_iss_wgt,bij_bal_wgt,bij_bom_cd,bij_id,bm_bom_typ,bm_bom_wgt,bm_bom_qty,bij_rcvd_bom_wgt,isnull(bij_pdt_prty,\'\')as prty from bom_iss_job_dtl left join bom_mst on bm_bom_cd=bij_bom_cd where cast(bij_bal_wgt as decimal(20,3))<=0 and cast(bij_iss_wgt as decimal(20,3))>0 and bij_bal_prcs_typ=\'InhouseBomMaking\' and bij_cmy_cd=\''+cmyCd+'\' and  bij_dpt_cd=\''+frmDpt+'\' '+FIlterDOc+' '+pdtPrtyInBom+' and (bm_bom_sts=1 or bm_bom_sts is null)';
			AjaxController.getCompletedBomForIntrnalTransfer(qry,retResOFIntTran);	
			}
		
		}
		else{
			$(".pdtDptInjbCdHde,.bomWgtEnterBox,.jbCrdPtyBox").hide();
			var table = $('#myTable').DataTable().clear();table.destroy();
			$("#IntTansTable").html("");
			var optiosn={
					   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
					   "iDisplayLength": -1,
				};
		var table = $('#myTable').DataTable(optiosn);
			table.columns().eq( 0 ).each( function ( colIdx ) {
			    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
			        table
			            .column( colIdx )
			            .search( this.value )
			            .draw();
			        $(".parentCheckBox").prop("checked",false);
			        sumOfFunctionInAddInternalTransfer();
			    } );});
		}
		}
		else{
				$(".pdtDptInjbCdHde,.bomWgtEnterBox,.jbCrdPtyBox").hide();
				var table = $('#myTable').DataTable().clear();table.destroy();
				$("#IntTansTable").html("");
				var optiosn={
						   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
						   "iDisplayLength": -1,
						};
			var table = $('#myTable').DataTable(optiosn);
				table.columns().eq( 0 ).each( function ( colIdx ) {
				    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
				        table
				            .column( colIdx )
				            .search( this.value )
				            .draw();
				        $(".parentCheckBox").prop("checked",false);
				        sumOfFunctionInAddInternalTransfer();
				    } );});
		}
	});
})
var BomDetail=[];
function retResOFIntTran(res){
	var table = $('#myTable').DataTable().clear();table.destroy();
var result='',drpDown={},btchNoInReJb=new Set(),acptRcjt=new Set(),fromDptAllStk=0,prtYList=new Set(['<option value="">Select Purity</option>']);
trnTypOfControl=$("#transTypeOfIntTrns").val();
if(CurrentIdFilter=='transTypeOfIntTrns'||CurrentIdFilter=='frmDptOfIntTrns'){
	$("#filterOfIntTrns,#filterOfPdtDeptInJobCd").html("").selectpicker("refresh");	
	$("#pdtPrtyInBom").html("").selectpicker("refresh");
}
	if(res!=null){
		if(trnTypOfControl=='Tree No'){
			var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
		           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm"></th><th>Tree No<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Issued Wt<input class="form-control input-sm"></th> <th>Issued Prty<input class="form-control input-sm"></th><th>Target Date<input class="form-control input-sm"></th>'
		        +'</tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				fromDptAllStk+=(+res[i][2]);
				var isdwgt=(+res[i][2]||0);
				var balwgt=isdwgt.toFixed(2);
				if(balwgt>0){
					var style=getPurityColor(res[i][5]);	
				result+='<tr '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
			           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" stk_crt_id="'+res[i][8]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+balwgt+'</td><td><input type="number" class="form-control smplIssWgtOfCst" style=""   max="'+balwgt+'" value="'+balwgt+'"></td><td class="itemPurityNew">'+res[i][5]+'</td>'
			           +'<td>'+res[i][3]+'</td></tr>'	;
				drpDown[res[i][1]]=res[i][1];
				}
			}
			$(".stkoffromdpt").attr("old",fromDptAllStk).html(Number(fromDptAllStk).toFixed(3)||'');
			}
		else if(trnTypOfControl=='Bom'){BomDetail=[];
			var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th>  <th>Bom.Nm<input class="form-control input-sm"></th> <th>Bom.Sz<input class="form-control input-sm"></th> <th>BomWrk.Typ<input class="form-control input-sm"></th><th>Bom.Typ<input class="form-control input-sm"></th> <th>Stk.Qty<input class="form-control input-sm"></th> <th>Isd.Qty<input class="form-control input-sm"></th><th>Isd.Wgt<input class="form-control input-sm"></th> <th>Bal.Qty<input class="form-control input-sm"></th><th>Prty<input class="form-control input-sm"></th> </tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				fromDptAllStk+=(+res[i][4]);
				if(res[i][7])
					BomDetail["RL"+res[i][7]]={bom_wgt:res[i][10],bom_qty:res[i][11]};
				res[i][13]=res[i][13]||'';
				prtYList.add("<option value='"+res[i][13]+"'>"+res[i][13]+"</option>");
				var style=getPurityColor(res[i][13]);	
				result+='<tr value="'+res[i][0]+'" '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][8]+'" value="'+res[i][7]+'"  oldrcvdwgt="'+res[i][12]+'" onchange="childCkeckBoxChecked()">'
	        +'<span></span></label></td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][9]+'</td><td class="rcvdbomqty">'+res[i][5]+'</td>'
				+'<td><input type="number" class="form-control issqtyinbalbom" value="'+res[i][5]+'" onkeyup="sumOfIssweightInBom()"></td><td><input type="number" class="form-control isswgtinbalbom" value=""></td><td class="balbomqty">0</td><td class="bomprty">'+res[i][13]+'</td></tr>';
				drpDown[res[i][1]]=res[i][1];
			}
			$(".stkoffromdpt").attr("old",fromDptAllStk).html(Number(fromDptAllStk).toFixed(3)||'');
		}	
		else if(trnTypOfControl=='Finished Pdt'){
			var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th> <th>Doc No<input class="form-control input-sm search"></th><th>Wrker<input class="form-control input-sm search"></th><th>Tgt Date<input class="form-control input-sm search"></th> <th>Pdt Cd<input class="form-control input-sm search"></th>  <th>Order Typ<input class="form-control input-sm search"></th> <th>Ctgy<input class="form-control input-sm search"></th> <th>Prty<input class="form-control input-sm search"></th> <th>Qty<input class="form-control input-sm search"></th> <th>Batch No<input class="form-control input-sm search"></th> <th>Acc/Rjt<input class="form-control input-sm search"></th> <th>Wgt<input class="form-control input-sm search"></th> <th>Remark</th> </tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				fromDptAllStk+=(+res[i][7]);
				btchNoInReJb.add('<option value="'+res[i][11]+'">'+res[i][11]+'</option>');
				acptRcjt.add('<option value="'+res[i][6]+'">'+res[i][6]+'</option>');
				var fromDptIsFnsh=eval($("#frmDptOfIntTrns option:selected").attr("isfinsh"))?"":"disabled";
				var style=getPurityColor(res[i][4]);	
				result+='<tr value="" customercd=\''+res[i][14]+'\' '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" ordprimid="'+res[i][9]+'" value="'+res[i][10]+'"  oldrcvdwgt="'+res[i][12]+'" onchange="childCkeckBoxChecked()">'
				+'<span></span></label></td><td id="docnooftr">'+res[i][12]+'</td><td id="wrkeroftr">'+res[i][13]+'</td><td id="trgtDateoftr">'+res[i][0]+'</td> <td id="pdtCdoftr">'+res[i][1]+'</td> <td id="OrdertypeOfTr">'+res[i][2]+'</td> <td id="ctgyoftr">'+res[i][3]+'</td> <td id="prtyoftr">'+res[i][4]+'</td> <td id="qtyoftr">'+res[i][5]+'</td> <td id="batchnooftr">'+res[i][11]+'</td><td> <select id="rjctoracpt" '+fromDptIsFnsh+' class="form-control">';
				result+=(res[i][6]=='Accept')?'<option selected="selected">Accept</option>':'<option>Accept</option>';
				result+=(res[i][6]=='Reject')?'<option selected="selected">Reject</option>':'<option>Reject</option>';
				result+="</select><td><input type='number' readonly class='form-control' id='rjctoracptwgt' value="+res[i][7]+" ></input></td> <td><input type='text' "+fromDptIsFnsh+" class='form-control remarksofrject' style='width: 350px;' value='"+res[i][8]+"'></input></td><input type='hidden' class='form-control' id='"+res[i][10]+"' value='"+res[i][15]+"'></input></tr>";
				drpDown[res[i][12]]=res[i][12];
			}
			$(".stkoffromdpt").attr("old",fromDptAllStk).html(Number(fromDptAllStk).toFixed(3)||'');
		}
		else if(trnTypOfControl=='JobCard'){
		var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
	           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label><th>Transaction.Type<input class="form-control input-sm"></th><th>JobCardNo<input class="form-control input-sm"></th><th>Dept.Nm<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Isd.Wgt<input class="form-control input-sm"></th><th>Tgt.Dt<input class="form-control input-sm"></th>'
	        +'<th>Qty<input class="form-control input-sm"></th> </tr>';
		$("#TheadBody").html(thead);
		for(var i=0;i<res.length;i++){
			var qty=Math.round(res[i][6]||0);
			res[i][2]=(+res[i][2]||0).toFixed(2);res[i][8]=(+res[i][8]||0);res[i][9]=res[i][9]||0;
			result+='<tr ><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
		           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][7]+'" stkPrimId="'+res[i][9]+'" pdtdeptcd="'+res[i][5]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td>'
		           +'<td><input type="number" class="form-control input-sm" id="isdWgtOfJbCdInIntf" value="'+res[i][8]+'"></td><td>'+res[i][3]+'</td><td>'+qty+'</td></tr>';
			drpDown[res[i][1]]=res[i][1];
		}
			}
		else{
			var thead='  <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">'
		           +'<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm"></th><th>Item Type<input class="form-control input-sm"></th><th>Item Code<input class="form-control input-sm"></th> <th>Total Wt<input class="form-control input-sm"></th><th>Issued Wt<input class="form-control input-sm"></th> <th>Issued Prty<input class="form-control input-sm"></th><th>Target Date<input class="form-control input-sm"></th>'
		        +'</tr>';
			$("#TheadBody").html(thead);
			for(var i=0;i<res.length;i++){
				res[i][2]=(+res[i][2]||0).toFixed(2);res[i][4]=res[i][4]||'';res[i][5]=res[i][5]||'';res[i][3]=res[i][3]||'';res[i][1]=res[i][1]||'';
				fromDptAllStk+=(+res[i][2]);
				var style=getPurityColor(res[i][5]);
				result+='<tr '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >'
			           +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td>'+res[i][0]+'</td><td>'+res[i][4]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control smplIssWgtOfCst" style=""   max="'+res[i][2]+'" value="'+res[i][2]+'"></td><td class="itemPurityNew">'+res[i][5]+'</td>'
			           +'<td>'+res[i][3]+'</td></tr>'	;
				drpDown[res[i][1]]=res[i][1];
			}	
			
		}
	}
	$(".stkoffromdpt").attr("old",fromDptAllStk).html(Number(fromDptAllStk).toFixed(3)||'');
	if(CurrentIdFilter!='filterOfIntTrns'){
	var drpDwns='';
	$.each(drpDown,function(i,val){
		drpDwns+='<option value="'+i+'">'+i+'</option>';
	})
	}
	$("#filterOfIntTrns").val()||$("#filterOfIntTrns").html(drpDwns).selectpicker("refresh");	
	$("#pdtPrtyInBom").val()||$("#pdtPrtyInBom").html([...prtYList]).selectpicker("refresh");
	$("#pdtRejbCrdBtch").val()||$("#pdtRejbCrdBtch").html([...btchNoInReJb]).selectpicker("refresh");
	$("#pdtAcptRctjbCrdBtch").val()||$("#pdtAcptRctjbCrdBtch").html([...acptRcjt]).selectpicker("refresh");
	$("#IntTansTable").html(result);  $('[data-toggle="tooltip"]').tooltip();
	var optiosn={
			   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
			   "iDisplayLength": -1,
			   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 6}]
			};
	if(trnTypOfControl=='Direct'){
		optiosn.columnDefs=[{ type: 'date-dd-mmm-yyyy', targets: 7}]
	}
	if(trnTypOfControl=='Finished Pdt'){
		optiosn.columnDefs=[{ type: 'date-dd-mmm-yyyy', targets: 1}]
	}
	var table = $('#myTable').DataTable(optiosn);
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	        $(".parentCheckBox").prop("checked",false);
	        sumOfFunctionInAddInternalTransfer();
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
	$(".childCheckBox:checked").each(function (){
		totWgt+=Number($(this).closest("tr")[0].cells[4].innerHTML);
			totIssWgt+=Number($(this).closest("tr").find(".smplIssWgtOfCst").val());
	});
	showesxtStkInlabel(totIssWgt);
}
else if($("#transTypeOfIntTrns").val()=='Tree No'){
	$(".childCheckBox:checked").each(function (){
		totWgt+=Number($(this).closest("tr")[0].cells[3].innerHTML);
			totIssWgt+=Number($(this).closest("tr").find(".smplIssWgtOfCst").val());
	});
	showesxtStkInlabel(totIssWgt)
}
	else if($("#transTypeOfIntTrns").val()=='Bom'){
		$(".childCheckBox:checked").each(function (){
			totWgt+=Number($(this).closest("tr")[0].cells[5].innerHTML);
				totIssWgt+=Number($(this).closest("tr").find(".issqtyinbalbom").val());
		});
		showesxtStkInlabel(totIssWgt);
		
	sumOfIssweightInBom();
	return;
	}

	else if($("#transTypeOfIntTrns").val()=='Finished Pdt'){
		$("tr:has(.childCheckBox:checked)").toArray().map(function (ths){
			totWgt+=(+$("#rjctoracptwgt",ths).val()||0);
				totIssWgt+=(+$("#qtyoftr",ths).text()||0);
		});
		$("#totWgtOfIntTrns").val(totIssWgt);
		$("#totissWgtOfIntTrns").val(totWgt.toFixed(2));
		return;
		}

else{
	$(".childCheckBox:checked").each(function (){
	var tr=$(this).closest("tr");
		var tot=Number(tr.find("#isdWgtOfJbCdInIntf").val())||0,wgt=Number(tr.find("td:eq(4)").html())||0;
		totWgt+=wgt;
		totIssWgt+=tot;
		});		
}
$("#totWgtOfIntTrns").val(totWgt.toFixed(2));
$("#totissWgtOfIntTrns").val(totIssWgt.toFixed(2));
}
///////////////////////////////////// end //////////////////////////////////////////

////////////////// onclick in total wgt issue ///////////////////////////////////////////
function saveIseWgtHndl(){
	var totWgt=0;
	/*if($("#transTypeOfIntTrns").val()=='JobOrder'){
		$(".childCheckBox:checked").each(function (){
			var qty=Number($(this).closest("tr")[0].cells[5].innerHTML),wgt=Number($(this).closest("tr")[0].cells[3].innerHTML);
			totWgt+=qty!=0?wgt*qty:wgt;
			});	
		}
		else if($("#transTypeOfIntTrns").val()=='Tree No'){
			$(".childCheckBox:checked").each(function (){
				var qty=Number($(this).closest("tr").find(".QtyOfIntTrfCls").html()),wgt=Number($(this).closest("tr").find(".stdWgtsOfIntTrfCls").html());
				totWgt+=qty!=0?wgt*qty:wgt;
				});		
		}	*/
	$(".chkBoxInIswgt:checked").each(function (){
		totWgt+=Number($(this).closest("tr").find(".issuWgtByStk").val());
	});
	$("#totissWgtOfIntTrns").val(totWgt.toFixed(2));	$("#myModal").modal('hide');
}

$(function (){
	$(".issuWgtByStk").prop("disabled",true);
	$("#totissWgtOfIntTrns").on("click",function(){
		if(/(JobOrder|Tree No)/.test($("#transTypeOfIntTrns").val())){
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
	if($("#isdauthVal").val()=="1"){
		$("#saveBtnInIntlTrf").addClass("disabled");
		$("#saveBtnInIntlTrf").addClass("btn-circlesuc");
		saveInternalTrfHdrAfter();		
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="saveInternalTrfHdrAfter()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#savesuccessRes").html(" ")\'>No</button></div>');		
	}
}



function saveInternalTrfHdrAfter(){
	var docno=$("#docNoOfIntTrf").val(),cmyCd=$("#cmyCdOfIntlTrf").val(),strCd=$("#strCdOfItlTrf").val(),dateIn=$(".dcment").html(),adminId=$("#EmployeDet").val(),
	frmDpt=$("#frmDptOfIntTrns").val(),docDt=$("#docDtOfIntTrf").val(),toDpt=$("#toDptOfIntTrns").val(),chklgth=$(".childCheckBox:checked").length,trType=$("#transTypeOfIntTrns").val();
	var prtyS=(trType=='Bom')?$("#pdtPrtyInBom").val():'91.75';var cstmrisneed=customerboxcontroller(),customercd=$("#ohd_cst_cd").val()||'';
	if(docno!=""&&cmyCd!=""&&strCd!=""&&frmDpt!=""&&toDpt!=""&&chklgth>0&&prtyS&&cstmrisneed){
	AjaxController.checkTheInternalDocNO(docno,functionRetCheck);
		function functionRetCheck(res){
	if(res==null){
			$("#saveBtnInIntlTrf").addClass("disabled");
			$("#savesuccessRes").html('<div class="alert alert-info"> Saving Please Wait.....</div>');		
			var intlTrfHdrDtl=[],stkManageQry=[],totrcvdWgt=$("#totWgtOfIntTrns").val(),totIsdWgt=$("#totissWgtOfIntTrns").val(),isdbomWgt=$("#bomWgtCalculator").val()||'';
			var itlTrfHdr='';
			if(trType=='Bom') itlTrfHdr={ith_cstr_cd:customercd,ith_cmy_cd:cmyCd,ith_doc_no:docno,ith_doc_dt:docDt,ith_frm_dpt_cd:frmDpt,ith_to_dpt_cd:toDpt,ith_trf_typ:trType,ith_tot_rcvd_wgt:isdbomWgt,ith_tot_iss_wgt:isdbomWgt,ith_iss_auth:false,ith_trf_sts:true,ith_bom_isd_wgt:isdbomWgt};
			else if(trType=='Finished Pdt'){
				var totstk=Number($(".stkoffromdpt").attr("old")).toFixed(3);
				itlTrfHdr={ith_cstr_cd:customercd,ith_cmy_cd:cmyCd,ith_doc_no:docno,ith_doc_dt:docDt,ith_frm_dpt_cd:frmDpt,ith_to_dpt_cd:toDpt,ith_trf_typ:trType,ith_tot_rcvd_wgt:totstk,ith_tot_iss_wgt:totIsdWgt,ith_iss_auth:false,ith_trf_sts:true,ith_bom_isd_wgt:isdbomWgt,ith_tot_rcvd_qty:totrcvdWgt};
			}
			else itlTrfHdr={ith_cstr_cd:customercd,ith_cmy_cd:cmyCd,ith_doc_no:docno,ith_doc_dt:docDt,ith_frm_dpt_cd:frmDpt,ith_to_dpt_cd:toDpt,ith_trf_typ:trType,ith_tot_rcvd_wgt:totrcvdWgt,ith_tot_iss_wgt:totIsdWgt,ith_iss_auth:false,ith_trf_sts:true,ith_bom_isd_wgt:isdbomWgt};
			var jobOrdPriIds=[];var ordHderDetailIds=[];
			if(trType=='Tree No'){
				$(".childCheckBox:checked").each(function(){
					var trOne=$(this).closest("tr");
					var tresNo=trOne[0].cells[2].innerHTML,rcvdwgt=trOne[0].cells[3].innerHTML,
					isswgt=trOne.find(".smplIssWgtOfCst").val(),trnTyp=trOne[0].cells[1].innerHTML,itmStkPrty=trOne.find(".itemPurityNew").html();
					intlTrfHdrDtl.push({ithd_cstr_cd:customercd,ithd_tree_no:tresNo,ithd_itm_rcvd_wgt:rcvdwgt,ithd_itm_typ:'',ithd_itm_trn_typ:trnTyp,ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
						ithd_trf_typ:trType,ithd_itm_cd:'',ithd_itm_iss_wgt:isswgt,ithd_iss_auth:false,ithd_trf_sts:true,ithd_itm_prty:itmStkPrty});
					if($("#isdauthVal").val()=="1"){
						var trRow=$(this).closest("tr");
						var stkExstId=$(this).val(),stkWgt=(+trRow.find(".smplIssWgtOfCst").val()||0).toFixed(2),crtId=$(this).attr("stk_crt_id")||'10001';
						issedPrty=trRow.find(".itemPurityNew").html(),pdtcod=trRow.find("td:eq(2)").html();
						stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+stkWgt+" as decimal(20,3))) where stm_itm_cd='"+pdtcod+"' and (stm_stk_trn_typ like '%CastingRecieved%') and stm_rcvd_stk_prty='"+issedPrty+"' " +
									" and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmyCd+"' ");
						stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+stkWgt+" as decimal(20,3))) where stm_itm_cd='"+pdtcod+"' and (stm_stk_trn_typ='JobCardMaking') and stm_rcvd_stk_prty='"+issedPrty+"' " +
								" and stm_dpt_cd='"+toDpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+cmyCd+"','"+toDpt+"','"+pdtcod+"','"+stkWgt+"','"+dateIn+"','"+crtId+"','JobCardMaking','"+dateIn+"','"+crtId+"','"+issedPrty+"','Tree','"+strCd+"')");
				
					}
				});
			}
			else if(trType=='Bom'){
				$(".childCheckBox:checked").each(function(){
					var trOne=$(this).closest("tr"),bomcd=$(this).val(),primid=this.id,prtyTr=$("td:eq(9)",trOne).text();
//					alert(trOne.attr("value"));
					var previousjobcartno=trOne.attr("value");
					var rcvdqty=trOne.find(".rcvdbomqty").html(),isdqty=trOne.find(".issqtyinbalbom").val(),isdbomwgt=trOne.find(".isswgtinbalbom").val();
					intlTrfHdrDtl.push({ithd_cstr_cd:customercd,ithd_itm_cd:bomcd,ithd_itm_rcvd_wgt:rcvdqty,ithd_itm_typ:isdbomwgt,ithd_itm_trn_typ:'Bom',ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
						ithd_trf_typ:trType,ithd_itm_iss_wgt:isdbomWgt,ithd_iss_auth:false,ithd_trf_sts:true,ithd_itm_prty:prtyTr,ithd_pdt_qty:isdqty});
					if($("#isdauthVal").val()=="1"){
						stkManageQry.push(" update bom_iss_job_dtl set bij_iss_wgt=(cast(bij_iss_wgt as decimal(20,3))-cast("+isdqty+" as decimal(20,3))) where bij_id='"+primid+"' " +
								" select * from  bom_iss_job_dtl where bij_bal_prcs_typ='InhouseBomMaking' and bij_job_crd_no='"+docno+"' and bij_bom_cd='"+bomcd+"' and bij_pdt_prty='"+prtyS+"' and bij_dpt_cd='"+toDpt+"' and bij_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into bom_iss_job_dtl " +
										"(bij_pdt_prty,[bij_bal_prcs_typ] ,[bij_bal_wgt] ,[bij_bom_cd] ,[bij_cmy_cd] ,[bij_dpt_cd] ,[bij_iss_wgt] ,[bij_job_crd_no] ,[bij_rcvd_bom_wgt] ,[bij_tot_wgt]) " +
										" values ('"+prtyS+"','InhouseBomMaking','0','"+bomcd+"','"+cmyCd+"','"+toDpt+"','0','"+docno+"','0','0')" +
								"update bom_iss_job_dtl set bij_iss_wgt=(cast(bij_iss_wgt as decimal(20,3))+cast("+isdqty+" as decimal(20,3))) where bij_bal_prcs_typ='InhouseBomMaking' and bij_job_crd_no='"+previousjobcartno+"' and bij_bom_cd='"+bomcd+"' and bij_pdt_prty='"+prtyS+"' and bij_dpt_cd='"+toDpt+"' and bij_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 " +
										"update bom_iss_job_dtl set bij_iss_wgt=(cast(bij_iss_wgt as decimal(20,3))+cast("+isdqty+" as decimal(20,3))),bij_tot_wgt=(cast(bij_tot_wgt as decimal(20,3))+cast("+isdqty+" as decimal(20,3))) where bij_bal_prcs_typ='InhouseBomMaking' and bij_job_crd_no='"+docno+"' and bij_bom_cd='"+bomcd+"' and bij_pdt_prty='"+prtyS+"' and bij_dpt_cd='"+toDpt+"' and bij_cmy_cd='"+cmyCd+"' ");
				}
				});
				var isdtotbom=$("#bomWgtCalculator").val()||'';
				if($("#isdauthVal").val()=="1"&&isdtotbom){
					stkManageQry.push(" insert into itm_mv (im_crt_id,im_itm_prty,im_itm_typ,[im_cmy_cd],[im_crt_dt],[im_dpt_cd],[im_itm_wgt],[im_trn_nmb],[im_trn_typ]) values" +
							"('"+adminId+"','"+prtyS+"','BOM','"+cmyCd+"','"+dateIn+"','"+toDpt+"','"+isdtotbom+"','"+docno+"','BomIssuedFromInternalTransfer')");
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+isdtotbom+" as decimal(20,3))) where stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+prtyS+"' and stm_dpt_cd='"+toDpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0  insert into stk_mst " +
							"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
						" values ('"+adminId+"','"+adminId+"','"+dateIn+"','"+dateIn+"','"+prtyS+"','BOM','BomStock','"+cmyCd+"','"+toDpt+"','"+isdtotbom+"')");
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+isdtotbom+" as decimal(20,3))) where stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+prtyS+"' and stm_dpt_cd='"+frmDpt+"' and stm_cmy_cd='"+cmyCd+"' ");
				}
			}
			
			else if(trType=='Finished Pdt'){
				itlTrfHdr.ith_trf_typ='Finished Pdt';var toDptIsFnsh=eval($("#toDptOfIntTrns option:selected").attr("isfinsh")),
				fromDptIsFnsh=eval($("#frmDptOfIntTrns option:selected").attr("isfinsh"));
				$("tr:has(.childCheckBox:checked)").toArray().forEach(function(tr){
					var fpdId=$(".childCheckBox",tr).val()||'0',ordPrimId=$(".childCheckBox",tr).attr("ordprimid"),
					customercds=$(tr).attr("customercd")||'';
					var wgt=$("#rjctoracptwgt",tr).val()||'',fnshdoc=$("#docnooftr",tr).text()||'',trgtdt=$("#trgtDateoftr",tr).text()||'',batch=$("#batchnooftr",tr).text()||'';
					wrk=$("#wrkeroftr",tr).text()||'',ordtyp=$("#OrdertypeOfTr",tr).text()||'',ctgy=$("#ctgyoftr",tr).text()||'',prty=$("#prtyoftr",tr).text()||'',rmrk=$(".remarksofrject",tr).val()||'',
					jono=$("#JobCardNooftr",tr).text()||'',qty=$("#qtyoftr",tr).text()||'',acpt=$("#rjctoracpt",tr).val()||'',pdtCd=$("#pdtCdoftr",tr).text()||'';
					intlTrfHdrDtl.push({ithd_cstr_cd:customercds,ithd_itm_typ:rmrk,ithd_itm_cd:pdtCd,ithd_itm_prty:prty,ithd_updt_id:wrk,ithd_itm_trn_typ:acpt,ithd_itm_rcvd_wgt:wgt,ithd_tree_no:batch,ithd_itm_iss_wgt:wgt,ithd_ord_no:fnshdoc,ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
						ithd_trf_typ:'Finished Pdt',ithd_pdt_qty:qty,ithd_pdt_ctgy:ctgy,ithd_ord_typ:ordtyp,ithd_trgt_dt:trgtdt,ithd_iss_auth:false,ithd_trf_sts:true});
					if($("#isdauthVal").val()=="1"){
						
						
						
						// cahndu 

//						update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='6' and fpd_acpt_rjct='Reject' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductReject' and stm_dpt_cd='10003'and stm_itm_cd='10004' and stm_cmy_cd='10001'
//						update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='6' and fpd_acpt_rjct='Accept' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductAccept' and stm_dpt_cd='10003'and stm_itm_cd='10004' and stm_cmy_cd='10001'
//						update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='6' and fpd_acpt_rjct='Reject' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductReject'   and stm_dpt_cd='10003' and stm_cmy_cd='10001' and stm_itm_cd='10004' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd) values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"',isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='6' and fpd_acpt_rjct='Reject' group by fpd_doc_no),0),'"+date+"','"+dc.wrkcd+"','FinishedProductReject','"+date+"','"+loginid+"','"+prtyMtl+"','','"+dc.strcd+"')
//						update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='6' and fpd_acpt_rjct='Accept' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductAccept'   and stm_dpt_cd='10003' and stm_cmy_cd='10001' and stm_itm_cd='10004' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd) values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"',isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='6' and fpd_acpt_rjct='Accept' group by fpd_doc_no),0),'"+date+"','"+dc.wrkcd+"','FinishedProductAccept','"+date+"','"+loginid+"','"+prtyMtl+"','','"+dc.strcd+"')

						var jobcartitmcode=document.getElementById(fpdId).value;
			stkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+fpdId+" and fpd_acpt_rjct='Reject' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductReject' and  stm_dpt_cd="+frmDpt+" and stm_itm_cd="+jobcartitmcode+" and stm_cmy_cd="+cmyCd+"");
			stkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+fpdId+" and fpd_acpt_rjct='Accept' group by fpd_doc_no),0)) where  stm_stk_trn_typ='FinishedProductAccept' and stm_dpt_cd="+frmDpt+" and stm_itm_cd="+jobcartitmcode+" and stm_cmy_cd="+cmyCd+"");
			stkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+fpdId+" and fpd_acpt_rjct='Reject' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductReject'  and stm_dpt_cd="+toDpt+" and stm_cmy_cd="+cmyCd+" and stm_itm_cd="+jobcartitmcode+" IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
											"values ('"+cmyCd+"','"+toDpt+"','"+jobcartitmcode+"',isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+fpdId+" and fpd_acpt_rjct='Reject' group by fpd_doc_no),0),'"+dateIn+"','"+adminId+"','FinishedProductReject','"+dateIn+"','"+adminId+"','"+prty+"','','')");
			stkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+fpdId+" and fpd_acpt_rjct='Accept' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductAccept'   and stm_dpt_cd="+toDpt+" and stm_cmy_cd="+cmyCd+" and stm_itm_cd="+jobcartitmcode+" IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
											"values ('"+cmyCd+"','"+toDpt+"','"+jobcartitmcode+"',isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+fpdId+" and fpd_acpt_rjct='Accept' group by fpd_doc_no),0),'"+dateIn+"','"+adminId+"','FinishedProductAccept','"+dateIn+"','"+adminId+"','"+prty+"','','')");
									
									
						
						
						
						
						
						if(toDptIsFnsh){
							stkManageQry.push(" update fnsh_pdt_dtl set fpd_ord_crnt_sts='Dispatched',fpd_pdt_mvd='"+toDpt+"' where fpd_id="+fpdId+"");
							stkManageQry.push("update ord_hdr_dtl set ohd_crnt_prcs='Dispatched' where ohd_id='"+ordPrimId+"'");	
						}
						else if(fromDptIsFnsh){
							stkManageQry.push(" update fnsh_pdt_dtl set fpd_rmrk='"+rmrk+"',fpd_acpt_rjct='"+acpt+"',fpd_ord_crnt_sts='RetrunIssue',fpd_pdt_mvd='"+toDpt+"',fpd_mov_doc_no='"+docno+"' where fpd_id="+fpdId+"");	
							stkManageQry.push("update ord_hdr_dtl set ohd_crnt_wrk='',ohd_crnt_wrk_typ='',ohd_crnt_prcs='ReturnIssue' where ohd_id='"+ordPrimId+"'");	
						}
						else{
							var toDp=$("#toDptOfIntTrns option:selected").text()||'';
						if(toDp.search(/\plan/gi)>-1&&acpt=='Reject'){
							stkManageQry.push("update ord_hdr_dtl set ohd_crnt_wrk='',ohd_job_ord_prcs='Pending',ohd_crnt_wrk_typ='',ohd_crnt_prcs='ReturnForJobCard' where ohd_id='"+ordPrimId+"'");	
						}
						stkManageQry.push(" update fnsh_pdt_dtl set fpd_ord_crnt_sts='InterTransfer',fpd_pdt_mvd='"+toDpt+"' where fpd_id="+fpdId+"");
						}
					}			
				})
			}
			else if(trType=='JobCard'){
			
				itlTrfHdr.ith_trf_typ='JobCard';
				$(".childCheckBox:checked").each(function(){
					var stkprim=$(this).attr("stkprim")||0;
					var jobprimId=$(this).attr("jobprim")||0;
					var trOne=$(this).closest("tr").find("td");
					var OrdNo=$(trOne[2]).html(),bmwgt=$(trOne[4]).html(),isdWgt=$(trOne[5]).find("input").val()
				,treeNo=$(trOne[7]).html(),trnTypofJbCrd=$(this).attr("trf")||'',prtyTr=$(trOne[8]).text()||'';
				intlTrfHdrDtl.push({ithd_cstr_cd:customercd,ithd_itm_trn_typ:'JobCard',ithd_itm_rcvd_wgt:bmwgt,ithd_itm_iss_wgt:isdWgt,ithd_ord_no:OrdNo,ithd_tree_no:treeNo,ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
					ithd_trf_typ:'JobCard',ithd_itm_cd:$(this).attr("pdtdeptcd"),ithd_iss_auth:false,ithd_trf_sts:true,ithd_itm_prty:prtyTr});
				if($("#isdauthVal").val()=="1"){
					if(trnTypofJbCrd=='JobCardMaked'){
						stkManageQry.push(" update job_card_dtl set joh_bal_wgt=(cast(isnull(joh_bal_wgt,0) as decimal(20,3))-cast("+isdWgt+" as decimal(20,3))),joh_isd_wgt=(cast(isnull(joh_isd_wgt,0) as decimal(20,3))+cast("+isdWgt+" as decimal(20,3))) where jcd_doc_no='"+OrdNo+"' and jcd_cmy_cd='"+cmyCd+"' ");
						stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+isdWgt+" as decimal(20,3))) where stm_id="+stkprim+"");
						stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+isdWgt+" as decimal(20,3))) where stm_itm_cd='"+OrdNo+"' and (stm_stk_trn_typ='JobCardRecieved') " +
								" and stm_dpt_cd='"+toDpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+cmyCd+"','"+toDpt+"','"+OrdNo+"','"+isdWgt+"','"+dateIn+"','"+adminId+"','JobCardRecieved','"+dateIn+"','"+adminId+"','"+prtyTr+"','','"+strCd+"')");
						}
					else{
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+isdWgt+" as decimal(20,3))) where stm_id="+stkprim+" ");
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+isdWgt+" as decimal(20,3))) where stm_itm_cd='"+OrdNo+"' and (stm_stk_trn_typ='JobCardRecieved') " +
							" and stm_dpt_cd='"+toDpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+cmyCd+"','"+toDpt+"','"+OrdNo+"','"+isdWgt+"','"+dateIn+"','"+adminId+"','JobCardRecieved','"+dateIn+"','"+adminId+"','"+prtyTr+"','','"+strCd+"')");
					}
				}
				});
				ordHderDetailIds=[];
				
			}
			else{
				$(".childCheckBox:checked").each(function(){
					var itmCd=$(this).closest("tr")[0].cells[3].innerHTML,itmTyp=$(this).closest("tr")[0].cells[2].innerHTML,rcvdwgt=$(this).closest("tr")[0].cells[4].innerHTML,
					isswgt=$(this).closest("tr").find(".smplIssWgtOfCst").val(),trnTyp=$(this).closest("tr")[0].cells[1].innerHTML,itmStkPrty=$(this).closest("tr").find(".itemPurityNew").html();
					intlTrfHdrDtl.push({ithd_cstr_cd:customercd,ithd_itm_rcvd_wgt:rcvdwgt,ithd_itm_typ:itmTyp,ithd_itm_trn_typ:trnTyp,ithd_doc_no:docno,ithd_cmy_cd:cmyCd,ithd_str_cd:strCd,ithd_frm_dpt_cd:frmDpt,ithd_to_dpt_cd:toDpt,
						ithd_trf_typ:trType,ithd_itm_cd:itmCd,ithd_itm_iss_wgt:isswgt,ithd_iss_auth:false,ithd_trf_sts:true,ithd_itm_prty:itmStkPrty});
					if($("#isdauthVal").val()=="1"){
						var stkExstId=$(this).val(),stkWgt=($(this).closest("tr").find(".smplIssWgtOfCst").val()||0),
						issedPrty=$(this).closest("tr")[0].cells[6].innerHTML;
						stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+stkWgt+" as decimal(20,3))) where stm_id="+stkExstId+" ");
						var frmDptChk=$("#frmDptOfIntTrns option:selected").text().search(/\gc/gi);
						if(frmDptChk==-1&&(trnTyp=='JobCardMaking'||trnTyp=='BomStock')){
							stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+stkWgt+" as decimal(20,3))) where stm_stk_trn_typ='ScrapMetal' and stm_rcvd_stk_prty='"+itmStkPrty+"' and stm_dpt_cd='"+toDpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst" +
									" ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+cmyCd+"','"+toDpt+"','','"+stkWgt+"','"+dateIn+"','','ScrapMetal','"+dateIn+"','','"+itmStkPrty+"','Scrap','"+strCd+"')");
							/*
							stkManageQry.push("insert into [btw_mst] ([btw_aly_typ],[btw_bom_wgt],[btw_cmy_cd],[btw_cnvt_prty],[btw_dept],[btw_doc_dt],[btw_doc_no],[btw_emp_cd],[btw_expt_prty],[btw_expt_wt],[btw_fnsh_pdt],[btw_iss_aly],[btw_iss_pg],[btw_iss_prty],[btw_iss_wgt],[btw_itm_cd],[btw_itm_typ],[btw_pdt_wgt],[btw_prcs_typ],[btw_prty_los],[btw_pwdr_mtl],[btw_rcv_pg],[btw_rcv_prty],[btw_rcv_wgt],[btw_rcvy_wgt],[btw_rmve_rcvy_wgt],[btw_rnr_wgt],[btw_scrn],[btw_scrp_mtl],[btw_semi_pdt],[btw_smpl_no],[btw_smpl_wgt],[btw_str_cd],[btw_tree_no],[btw_tree_wgt],[btw_trf_typ],[btw_wrkr_cd])" +
									" values ('','','"+cmyCd+"','','"+toDpt+"','"+dateIn+"','"+docno+"','"+adminId+"','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37')");
							*/
							
							
						}
						else if(frmDptChk>-1&&trnTyp=='BomStock'){
							stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+stkWgt+" as decimal(20,3))) where stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+itmStkPrty+"' and stm_dpt_cd='"+toDpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0  insert into stk_mst " +
									"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
								" values ('"+adminId+"','"+adminId+"','"+dateIn+"','"+dateIn+"','"+itmStkPrty+"','BOM','BomStock','"+cmyCd+"','"+toDpt+"','"+stkWgt+"')");
							stkManageQry.push(" insert into itm_mv (im_crt_id,im_itm_prty,im_itm_typ,[im_cmy_cd],[im_crt_dt],[im_dpt_cd],[im_itm_wgt],[im_trn_nmb],[im_trn_typ]) values" +
									"('"+adminId+"','"+itmStkPrty+"','BOM','"+cmyCd+"','"+dateIn+"','"+toDpt+"','"+stkWgt+"','"+docno+"','BomIssuedFromInternalTransfer')");
						}
						else{
						stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+stkWgt+" as decimal(20,3))) where stm_stk_trn_typ='"+trnTyp+"' and stm_rcvd_stk_prty='"+itmStkPrty+"' " +
									" and stm_dpt_cd='"+toDpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+cmyCd+"','"+toDpt+"','"+itmCd+"','"+stkWgt+"','"+dateIn+"','"+adminId+"','"+trnTyp+"','"+dateIn+"','"+adminId+"','"+itmStkPrty+"','"+itmTyp+"','"+strCd+"')");
						}
					
					}
				});
				
			}
			if($("#isdauthVal").val()=="1"){
				$.grep(intlTrfHdrDtl,function(u){
					u.ithd_iss_auth=true;
				});
			}
			if($("#isdauthVal").val()=="1"){
				itlTrfHdr.ith_iss_auth=true;
			}
			AjaxController.saveInternalTransferDetailRecByAjax(JSON.stringify(itlTrfHdr),JSON.stringify(intlTrfHdrDtl),stkManageQry,jobOrdPriIds,ordHderDetailIds.join(),retuenSucResOfsaveIntrlTrf);
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6347"> Entered Document No Already Present</div>');$("#hideCstAlrt6347").fadeOut(3000);		
		}
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
		if(!cstmrisneed){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6677"> Select Customer </div>');$("#hideCstAlrt6677").fadeOut(3000);
		}
		else if(!prtyS){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6677"> Select Purity </div>');$("#hideCstAlrt6677").fadeOut(3000);
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6677"> Select Records </div>');$("#hideCstAlrt6677").fadeOut(3000);	
		}
		$("#saveBtnInIntlTrf").removeClass("disabled");
		$("#saveBtnInIntlTrf").removeClass("btn-circlesuc");
		
	}
}

function retuenSucResOfsaveIntrlTrf(res){
	if(res=="success"){
		window.location.href="internaltransfer.mm";
	}
}
////////////////////// save InternalTrfHdr Detail TO The Data Base /////////////////
	/////////////////////// issued Weiht Calculation sumOfIssweightInStkCal ////////////
function showesxtStkInlabel(totIssWgt){
	$(".stkoftodpt").html(((+$(".stkoftodpt").attr("old")||0)+totIssWgt).toFixed(2));
	var fromstk=((+$(".stkoffromdpt").attr("old")||0)-(totIssWgt)).toFixed(2);
	$(".stkoffromdpt").html(fromstk);
}
function sumOfIssweightInStkCal(){
	var totIssWgt=0;
	$(".childCheckBox:checked").each(function (){
		totIssWgt+=Number($(this).closest("tr").find(".smplIssWgtOfCst").val());
	})
	showesxtStkInlabel(totIssWgt);
	 $("#totissWgtOfIntTrns").val(totIssWgt.toFixed(2));
}
$("#myTable").delegate(".smplIssWgtOfCst","keypress keyup change",function(evt){
	var totWgtt=0;var typ=$("#transTypeOfIntTrns").val();
	if(typ=='Direct')totWgtt=Number($(this).closest("tr")[0].cells[4].innerHTML);
	if(typ=='Tree No')totWgtt=Number($(this).closest("tr")[0].cells[3].innerHTML);
	if(totWgtt<Number($(this).val())){
		$(this).val(totWgtt.toFixed(2));
	}
	if(evt.type=="change"){
		$(this).val(Number($(this).val()).toFixed(2));
	}	
	sumOfIssweightInStkCal();
});


$("#IntTansTable").delegate("#isdWgtOfJbCdInIntf","keyup",function(){
	sumOfFunctionInAddInternalTransfer();
});


$("#IntTansTable").delegate(".isswgtinbalbom","keyup",function(){
	var tr=$(this).closest("tr"),balwgt=0;
	var qty=0,bmObj=BomDetail?BomDetail["RL"+tr.find(".childCheckBox").val()]:null;
	if(bmObj){
		qty=(+bmObj.bom_wgt||1)/(+bmObj.bom_qty||1);
		qty=Math.round(($(this).val()/qty)||0);
		tr.find(".issqtyinbalbom").val(qty)
	}
	var totisswgt=Number(tr.find("td:eq(6)").html())||0,altyisdqty=Number(tr.find("td:eq(7)").html())||0,issqty=Number(tr.find(".issqtyinbalbom").val())||0;
	balwgt=(totisswgt)-(issqty+altyisdqty);
		tr.find("td:eq(10)").html(balwgt);
		sumOfIssweightInBom();
});

function sumOfIssweightInBom(){
	var cal=$(".childCheckBox:checked").toArray().reduce(function (old,ths,ind){
		var tr=$(ths).closest("tr"), wgt=(+tr.find(".isswgtinbalbom").val()||0), isd=(+tr.find(".issqtyinbalbom").val()||0),rcvd=(+tr.find(".rcvdbomqty").html()||0);
		old.wgt+=wgt;
		old.qty+=isd;
		tr.find(".balbomqty").html((rcvd-isd)||0);
		return old;
	},{qty:0,wgt:0});
	$("#totWgtOfIntTrns").val(cal.qty);
	 $("#totissWgtOfIntTrns").val(cal.wgt.toFixed(2));
}

$("#bomWgtCalculator").keypress(function(evt){
	if(evt.keyCode==13){
	var data=this.value;
	if(data){
		try{
		data=eval(data)||'';
		this.value=(data);
		}
		catch(e){
		this.value='';
		}
	}
	}
});

$("#toDptOfIntTrns").change(function(){
	if(this.value){
	var qry="select sum(cast(stm_rcvd_stk_wgt as decimal(20,3))) from stk_mst where (stm_stk_trn_typ in ('ScrapMetal','InternalProcess','Inward','BomStock') or stm_stk_trn_typ like '%NotMainProcess Recieved%' or stm_stk_trn_typ like '%MainReceived%') and stm_dpt_cd='"+this.value+"' and stm_cmy_cd='"+$("#cmyCdOfIntlTrf").val()+"' "
	AjaxController.getStockCalculationInFrontEnd(qry,(data)=>{
		if(data){
			data=(+data||0).toFixed(2);
			$(".stkoftodpt").attr("old",data);
			if($("#transTypeOfIntTrns").val()=='Direct')$(".stkoftodpt").html((+Number(data).toFixed(3))||'');
		}
	})
	}
	customerboxcontroller();
});

function customerboxcontroller(){
	var trfType=$("#transTypeOfIntTrns").val()||'';$(".customersoption").hide()
	if(($("#frmDptOfIntTrns option:selected").attr("isoutwrd")=='YES'||$("#toDptOfIntTrns option:selected").attr("isoutwrd")=='YES')&&(trfType=='Direct'||trfType=='Bom')){
	$(".customersoption").show();	
	return $("#ohd_cst_cd").val()?true:false;
	}
	return true;
}
$("#getTransactionIntrn").click(function(){
	var frmDpt=$("#frmDptOfIntTrns").val(),toDpt=$("#toDptOfIntTrns").val();
	var frmNm=$("#frmDptOfIntTrns option:selected").text(),toNm=$("#toDptOfIntTrns option:selected").text();
	if(frmDpt&&toDpt){
		var qry="select [ithd_doc_no],[ithd_trf_typ],ithd_itm_prty,[ithd_itm_iss_wgt] as wgt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=[ithd_frm_dpt_cd] and dm_sts=1) as frmdpt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=[ithd_to_dpt_cd] and dm_sts=1) as todpt from [intl_trf_hdr_dtl] where [ithd_frm_dpt_cd] in ('"+frmDpt+"','"+toDpt+"') and [ithd_to_dpt_cd] in ('"+frmDpt+"','"+toDpt+"') and ithd_trf_typ!='Bom'";
		qry+=" union all select ith_doc_no,ith_trf_typ,(select top 1 ithd_itm_prty from intl_trf_hdr_dtl where ithd_doc_no=[ith_doc_no]) as prty,[ith_bom_isd_wgt],(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=[ith_frm_dpt_cd] and dm_sts=1) as frmdpt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=[ith_to_dpt_cd] and dm_sts=1) as todpt from intl_trf_hdr where [ith_frm_dpt_cd] in ('"+frmDpt+"','"+toDpt+"') and [ith_to_dpt_cd] in ('"+frmDpt+"','"+toDpt+"') and ith_trf_typ='Bom'"
		AjaxController.getTransactionDetailBy(qry,(data)=>{
		var html='';var ISDRCVD={};
			if(data&&data.length){
				data.forEach((tr)=>{
					ISDRCVD[tr[4]+"_"+tr[5]]=(+ISDRCVD[tr[4]+"_"+tr[5]]||0)+(+tr[3]||0);
					html+='<tr><td>'+tr[0]+'</td><td>'+tr[1]+'</td><td>'+tr[4]+'</td><td>'+tr[5]+'</td><td>'+tr[2]+'</td><td>'+tr[3]+'</td><td>'+tr[3]+'</td></tr>';		
				});
			}
			var totfrm=ISDRCVD[frmNm+"_"+toNm]||0,totto=ISDRCVD[toNm+"_"+frmNm]||0;
			var thead='<tr><th colspan="4">'+frmNm+"_"+toNm+'</th><th colspan="4">'+totfrm+'</th></tr><tr><th colspan="4">'+toNm+"_"+frmNm+'</th><th colspan="4">'+totto+'</th></tr><tr><th colspan="4">BAL_WGT</th><th colspan="4">'+(totfrm-totto)+'</th></tr>';
		thead+='<tr><th>TRNS_NO</th><th>TRNS_TYP</th><th>FROM_DPT</th><th>TO_DPT</th><th>PRTY</th><th>ISD WGT</th><th>TOT_WGT</th></tr>';
		$("#tranThead").html(thead);
		$("#tranTbody").html(html);	
		$("#tranModel").modal('show');
		});
	}
})






