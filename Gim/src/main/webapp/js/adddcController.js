var  mp=new Map();
function DC(){
	this.cmycd=$("#fromCmpnyOfDcPrcs").val();
	this.strcd=$("#strCdOfDcProcsTmp").val();
	this.dptcd=$("#dptCdOfDcPrcs").val();
	this.trgtdate=$("#targetDtOfSubPrcs").val()||'';
	this.docno=$("#dcNumberINDcPrcs").val();
	this.wrkcd=$("[id*=wrkCdOfSubPrcs]:visible").val()||'';
	this.trftyp=$("#trfTypOfDcPrcs").val();
	this.wrktyp=$("#wrkTypOfDcPrcs").val();
}
$("table").delegate("[name=smprcvdprty]","blur",function(){
	this.value=(+this.value)?(+this.value||0).toFixed(2):'';
	})
$(function(){
	
	/////////////////////////// Worker Code /////////////////////////////////
	
	$("#wrkCdOfSubPrcs,#targetDtOfSubPrcs,#trfTypOfDcPrcs,#dptCdOfDcPrcs").change(function(){
		var dc=new DC(),curntid=this.id;
		if(dc.wrkcd||(dc.trftyp=='ForSamplesIssue'||dc.trftyp=='ForSamplesReturn')){
			var qry="exec getDcprocessList @company='"+dc.cmycd+"',@worker='"+dc.wrkcd+"',@trgtDate='"+dc.trgtdate+"',@trnsType='"+dc.trftyp+"',@wrktyp='"+dc.wrktyp+"',@deptmnt='"+dc.dptcd+"'";
			AjaxController.runDynamicQueriesFromJavaScript(qry,(data)=>{
			var result='',trgtDt=new Set(['<option value="">Select Target Date</option>']);
			if(data&&data.length){
				data.forEach((tr)=>{
					mp.set(tr[0]+tr[2]+tr[3],0);
//					alert(tr[0]+tr[2]+tr[3]);
					var cvtprtywgt='';
					if(dc.trftyp=='ForReturn'||dc.trftyp=='ForIssue'){
					trgtDt.add('<option>'+tr[1]+'</option>');
					tr[9]=(+tr[9]||0);tr[8]=(+tr[8]||0);tr[10]=(+tr[10]||0)
					if(tr[0]=='Direct')tr[8]=((tr[8])+(+tr[13]||0)).toFixed(2);
					if(tr[0]=='SubProcess'){tr[7]=tr[9]=tr[10]='';}
					if(tr[0].search(/Main-/ig)>-1){
						if(tr[0].search(/SCRAP/ig)>-1)
						{tr[10]=tr[9];
						tr[9]="";}
						else if(tr[0].search(/FNSHPDT/ig)>-1){
							tr[10]="";	
						}
					}
					if(tr[0]=='FinishPdt')tr[10]="";
						tr[5]=(+(+tr[5]||0).toFixed(2));
						tr[8]=(+tr[8]).toFixed(2);
						tr[16]=tr[16]||'',tr[17]=tr[17]||'',tr[18]=tr[18]||'';
					if(tr[0]=='Non-Direct')	{tr[8]=((+tr[5]||0)+(+tr[7]||0)).toFixed(2);}
					if(dc.trftyp=='ForReturn'){
						tr[14]=tr[14]||'';	tr[15]=tr[15]||'';
					if(tr[0]=='Recovery'){
						if(+tr[9])
						var cvtprtywgt=(((+tr[14]||0)*(+tr[9]||0)/(+tr[7]||0)).toFixed(2)||0);
						tr[7]='';
					}	
					var totrcvd=((+tr[9])+(+tr[10])+(+tr[15]||0)).toFixed(2);	
					var style=getPurityColor(tr[14]);
					result+='<tr '+style+' cvntprty=\''+cvtprtywgt+'\' itmtyp=\''+tr[18]+'\'  itmcd=\''+tr[17]+'\' prcstype=\''+tr[16]+'\'> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="'+tr[0]+'" value="'+tr[12]+'"> <span></span> </label></td> <td style=" white-space: nowrap; " id="trftypoftr">'+tr[0]+'</td> '+
					'<td id="trgtdateoftr">'+tr[1]+'</td> <td id="jbcdoftr">'+tr[2]+'</td> <td id="itmcdftr">'+tr[3]+'</td> <td id="prtyftr">'+tr[14]+'</td> <td id="qtyoftr">'+tr[4]+'</td> <td id="wgtoftr">'+tr[5]+'</td> <td id="rqdbomoftr">'+tr[6]+'</td> <td id="bmwgtoftr">'+tr[7]+'</td>'
					+' <td id="isdwgtoftr">'+tr[8]+'</td> <td id="totfnsh">'+tr[9]+'</td> <td id="totscrp">'+tr[10]+'</td><td id="totsmipdt">'+tr[15]+'</td> <td id="totrcvd">'+totrcvd+'</td> </tr>';	
					}
					else{
				 var style=getPurityColor(tr[14]);		
						tr[14]=tr[14]||'';tr[15]=tr[15]||'';
						result+='<tr '+style+' itmtyp=\''+tr[18]+'\'  itmcd=\''+tr[17]+'\' prcstype=\''+tr[16]+'\'> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="'+tr[0]+'" value="'+tr[12]+'"> <span></span> </label></td> <td style=" white-space: nowrap; " id="trftypoftr">'+tr[0]+'</td> '+
						'<td id="trgtdateoftr">'+tr[1]+'</td> <td id="jbcdoftr">'+tr[2]+'</td> <td id="itmcdftr">'+tr[3]+'</td> <td id="prtyftr">'+tr[14]+'</td> <td id="qtyoftr">'+tr[4]+'</td> <td id="wgtoftr">'+tr[5]+'</td> <td id="rqdbomoftr">'+tr[6]+'</td> <td id="bmwgtoftr">'+tr[7]+'</td>'
						+' <td id="isdwgtoftr">'+tr[8]+'</td></tr>';	
					}
					}
					else{
						tr[11]=tr[11]||0;tr[12]=tr[12]||0;
						if(dc.trftyp=='ForSamplesIssue'){
							if((tr[0]+"").search(/cast/ig)>-1)tr[8]=tr[8]
							if((tr[0]+"").search(/alloy/ig)>-1)tr[8]=tr[8]
							if((tr[0]+"").search(/melt/ig)>-1)tr[8]=tr[8]
							var isdwgt=(tr[0]=='ScrapMetal'||tr[0]=='OutSide_Inward')?'':tr[6];
							var style=getPurityColor(tr[5]);
							result+='<tr '+style+' '+tr[0]+' smpprimid='+tr[10]+' smpisdwgt='+tr[11]+'  issueprty='+tr[12]+' rcvprtyjsn=\''+tr[9]+'\' > <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="'+tr[0]+'" value="'+tr[7]+'"> <span></span> </label></td> <td style=" white-space: nowrap; " id="trftypoftr">'+tr[0]+'</td> '+
							'<td id="jbcdoftr">'+tr[3]+'</td> <td id="itmcdftr">'+tr[2]+'</td>  <td id="smpnoftr">'+tr[8]+'</td> <td id="qtyoftr">'+tr[4]+'</td> <td id="prtyoftr">'+tr[5]+'</td> <td id="showextwgtoftr" old="'+tr[6]+'" >'+tr[6]+'</td> <td><input type="number" value="'+isdwgt+'" readonly class="form-control" id="isdwgtoftr"></td></tr>';	
									
						}
						else{
							var disabled=(tr[0]=='ScrapMetal'||tr[0]=='OutSide_Inward')?"readonly":"";
							tr[9]=(!tr[9]||tr[9]=='[]')?'':tr[9];
							var style=getPurityColor(tr[5]);
							result+='<tr '+style+' '+tr[0]+'  smpprimid='+tr[11]+' smpisdwgt='+tr[12]+' rcvprtyjsn=\''+tr[9]+'\'  issueprty='+tr[13]+'> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="'+tr[0]+'"  value="'+tr[8]+'"> <span></span> </label></td> <td style=" white-space: nowrap; " id="trftypoftr">'+tr[0]+'</td> '+
							'<td id="jbcdoftr">'+tr[3]+'</td> <td id="itmcdftr">'+tr[2]+'</td><td id="smpnoftr">'+tr[7]+'</td> <td id="qtyoftr">'+tr[4]+'</td> <td id="prtyoftr">'+tr[5]+'</td><td id="showextwgtoftr" old="'+tr[10]+'" >'+tr[10]+'</td>  <td><input type="number" value="'+tr[6]+'" readonly class="form-control" isdsmpljsn=\''+tr[9]+'\' id="isdwgtoftr"></td><td ><input class="form-control" '+disabled+' id="mtlrcvdwgt" type="number" value=""></td>'
							+'<td ><input class="form-control" id="smprcvdprty" type="number" '+disabled+'  value=""></td> <td ><input id="mtlrcvdpurgold" class="form-control" type="number" value=""></td>  <td ><input class="form-control" id="totrcvd" type="number" readonly value=""></td> <td id="balwgt"></td> </tr>';	
								
						}
					}
					})
			}
			if(curntid!='targetDtOfSubPrcs');
			$("#targetDtOfSubPrcs").html([...trgtDt]).selectpicker("refresh");
			var table = $('#tableofdc').DataTable().clear();table.destroy();
			if(dc.trftyp=='ForReturn')
			var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>TrfType<input class="form-control input-sm search"></th> <th>Trgt Date<input class="form-control input-sm search"></th> <th>JobCd/ Tree<input class="form-control input-sm search"></th> <th>Doc No<input class="form-control input-sm search"></th> <th>Prty<input class="form-control input-sm search"></th> <th>Qty<input class="form-control input-sm search"></th> <th>Wgt<input class="form-control input-sm search"></th> <th>Rqrd BOM <input class="form-control input-sm search"></th> <th>BOM Wgt<input class="form-control input-sm search"> </th> <th>Iss Wgt<input class="form-control input-sm search"> </th>  <th>Fnsh / Rcvy Wgt<input class="form-control input-sm search"> </th><th>Scrp / RmveRcvy Wgt<input class="form-control input-sm search"> </th><th>Semi Fnsh<input class="form-control input-sm search"> </th> <th>Rcvd Wgt<input class="form-control input-sm search"> </th>  </tr>';
			else if(dc.trftyp=='ForIssue')
			var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>TrfType<input class="form-control input-sm search"></th> <th>Trgt Date<input class="form-control input-sm search"></th> <th>JobCd/ Tree<input class="form-control input-sm search"></th> <th>Doc No<input class="form-control input-sm search"></th> <th>Prty<input class="form-control input-sm search"></th> <th>Qty<input class="form-control input-sm search"></th> <th>Wgt<input class="form-control input-sm search"></th> <th>Rqrd BOM <input class="form-control input-sm search"></th> <th>BOM Wgt<input class="form-control input-sm search"> </th> <th>Iss Wgt<input class="form-control input-sm search"> </th>  </tr>';
			else if(dc.trftyp=='ForSamplesIssue'){
				var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>TrfType<input class="form-control input-sm search"></th> <th>Doc No<input class="form-control input-sm search"></th> <th>Itm/ Tree<input class="form-control input-sm search"></th> <th>Smpl No<input class="form-control input-sm search"></th> <th>Qty<input class="form-control input-sm search"></th> <th>Isd Prty<input class="form-control input-sm search"></th> <th>Wgt<input class="form-control input-sm search"></th><th>IsdWgt<input class="form-control input-sm search"></th> </tr>';
					
			}
			else{
				var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>TRF TYP<input class="form-control input-sm search"></th> <th>DOC NO<input class="form-control input-sm search"></th> <th>ITM/ TREE<input class="form-control input-sm search"></th> <th>SMPL NO<input class="form-control input-sm search"></th> <th>QTY<input class="form-control input-sm search"></th> <th>ISD PRTY<input class="form-control input-sm search"></th> <th>WGT<input class="form-control input-sm search"></th> <th>ISDWGT<input class="form-control input-sm search"></th><th>MTL RCVD<input class="form-control input-sm search"> </th>   <th>RCVD PRTY<input class="form-control input-sm search"> <th>RCVD PG<input class="form-control input-sm search"> </th></th><th>TOT RCVD WGT<input class="form-control input-sm search"> </th> <th>BAL<input class="form-control input-sm search"> </th>  </tr>';
					
			}
			$("#tableofdc thead").html(thead);
			$("#tbodyofdc").html(result);
			tablerefresh("tableofdc");
			var qry="  select sum(cast(dh_isd_wgt as decimal(20,3))) from [dc_hdr] where dh_trf_typ like '%Issue%'  and dh_cmy_cd='"+dc.cmycd+"' and dh_wrk_cd='"+dc.wrkcd+"' and dh_wrk_typ='"+dc.wrktyp+"'  union all  select sum(cast(dh_rcvd_wgt as decimal(20,3)))"
				+" from [dc_hdr] where dh_trf_typ like '%Return%' and dh_cmy_cd='"+dc.cmycd+"' and dh_wrk_cd='"+dc.wrkcd+"' and dh_wrk_typ='"+dc.wrktyp+"'" ;
			AjaxController.checkDcbalStock(qry,(data)=>{
				$("#balStockWrkInDc").val("");
				if(data){
					var bal=(+data[0]||0)-((+data[1]||0))
					$("#balStockWrkInDc").val((+bal).toFixed(2));
				}
			});
		});
		}else{
			var table = $('#tableofdc').DataTable().clear();table.destroy();
			$("#tbodyofdc").html('');
			tablerefresh("tableofdc");
			
		}
	});
	
	///////////////// Select Box ///////////////////////////
	
	$("table").delegate(".parentCheckBox","change",function(){
		this.checked?$(".childCheckBox").prop("checked",true):$(".childCheckBox").prop("checked",false);
		totvaluecalculator();
	});
	$("#tbodyofdc").delegate(".childCheckBox","change",function(){
		$(".childCheckBox:not(:checked)").length?$(".parentCheckBox").prop("checked",false):$(".parentCheckBox").prop("checked",true);
		totvaluecalculator();
	});
	
	
})

function SaveFinalDcDetail(){
	var dc=new DC()
	if($("#isdauthVal").val()=="1"){
		$("#saveButttonDc").addClass("disabled");
		$("#saveButttonDc").addClass("btn-circlesuc");
		if(dc.trftyp.search(/\issue/gi)!=-1){
			var qry="";
			if(dc.wrktyp=='ComWrker')
			qry="select e.em_emp_alw_qty as alwqty from emp_mst e where e.em_emp_id='"+dc.wrkcd+"' ";
			else
				qry="select vcm_alw_qty from vn_ct_mst where vcm_vnct_cd='"+dc.wrkcd+"' ";
							
			AjaxController.checkDcbalStock(qry,(data)=>{
				if(data&&data[0]){
				var wrkstk=(+$("#balStockWrkInDc").val()||0)+(+$("#IsdWgtOfDc").val()||0),wrkalwqty=(+data||0);
				if(wrkstk>wrkalwqty){
					$("#saveSuccesRes").html('<div class="alert alert-warning" id="firstPrep">Sorry Worker/Vendor Stock Exceed With His Allowed Qty</div>');	$("#firstPrep").fadeOut(6000)	
				}
				else{
					SaveFinalDcDetailAfter();	
				}
				}
				else{
				SaveFinalDcDetailAfter();
				}
			});
		}
		else{
			SaveFinalDcDetailAfter();
		}
	}
	else{
		$("#saveSuccesRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="SaveFinalDcDetailAfter()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#saveSuccesRes").html(" ")\'>No</button></div>');		
	}
	
}


function SaveFinalDcDetailAfter(){
	var dc=new DC(),totrcvdwgt=$("#rcvdWgtOfDc").val()||0,totisdwgt=$("#IsdWgtOfDc").val()||0,totbalwgt=$("#balWgtOfDc").val()||0,isddauth=$("#isdauthVal").val();
	var isEmpty=false,docDt=$("#dateINDcPrcs").val();
	if(dc.trftyp=='ForSamplesIssue')
	isEmpty=$("#tbodyofdc tr:has(:checked)").toArray().some(s=>!($("#isdwgtoftr",s).val()));
	if(dc.docno!=""&&dc.cmycd!=""&&dc.strcd!=""&&dc.wrkcd!=""&&dc.dptcd!=""&&$(".childCheckBox:checked").length>0&&isddauth=="1"&&!isEmpty){
		AjaxController.checkDocNoInDcFromDb(dc.docno,(data)=>{
			if(data&&data.length){
				$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Entered Document Number Already Used..</div>');$("#hider12").fadeOut(3500);			
			}
			else{
				var totScrpWgt=$("#scrpWgtOfDc").val()||0,totFnshWgt=$("#fnshWgtOfDc").val()||0;
				$("#saveButttonDc").addClass("disabled");[date]=$("#dateINDcPrcs").val().split(" ");
				$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait</div>');
				var InsetOrUpdate=[],afterDcInsertQryUpdt=[];
				 var InsertQery="INSERT INTO [dbo].[dc_hdr_dtl] (dhd_tst_smp_primid,[dhd_tst_smp_rcvd_wgt],dhd_smpl_jsn,dhd_isd_job_cd,[dhd_bal_wgt] ,[dhd_chld_id] ,[dhd_cmy_cd] ,[dhd_crt_dt] ,[dhd_crt_id] ,[dhd_dpt_cd] ," +
				 		"[dhd_isd_doc_no] ,[dhd_isd_wgt] ,[dhd_iss_auth] ,[dhd_rcvd_auth] ,[dhd_rcvd_doc_no] ,[dhd_rcvd_wgt] ,[dhd_str_cd] ,[dhd_trf_typ] ,[dhd_upd_dt] ,[dhd_wrk_cd] ,[dhs_sts],dhd_isd_trgt_dt"
			+",dhd_isd_itm_cd,dhd_isd_qty,dhd_isd_exst_wgt,dhd_isd_rqd_bom,dhd_isd_bom_wgt,dhd_wrk_typ,dhd_scrp_wgt,dhd_fnsh_wgt,dhd_isd_prty,dhd_rcvd_prty1,dhd_rcvd_prty2,dhd_rcvd_wgt1,dhd_rcvd_wgt2) VALUES";
				 var prtyrcvdJsn='';
					$(".childCheckBox:checked").toArray().forEach(function(chek){
						if(dc.trftyp=='ForSamplesIssue'||dc.trftyp=='ForSamplesReturn'){
							var tr=$(chek).closest("tr"),smpPrimId=tr.attr("smpprimid")||0,primId=$(chek).val(),smplJsn=tr.find("#isdwgtoftr").attr("isdsmpljsn")||'[]';
							var isedStkWgt=(+tr.find("#isdwgtoftr").val()||0),exstshowwgt=tr.find("#showextwgtoftr").html()||0,
							trftyp=$(chek).attr("trftyf"),smprtnwgt=tr.attr("smpisdwgt")||0,jbcdoftr=tr.find("#jbcdoftr").html(),itmcd=tr.find("#itmcdftr").html(),qtytr=tr.find("#qtyoftr").html(),prtyoftr=tr.find("#prtyoftr").html(),
							smpno=tr.find("#smpnoftr").html(),rcvdprty1=Number(tr.find("#smprcvdprty").val()).toFixed(2)||0,rcvdwgt1=tr.find("#mtlrcvdwgt").val()||0,rcvdwgt2=tr.find("#mtlrcvdpurgold").val()||0,issueprty=tr.attr("issueprty")||0
							trgttr='',totrcvdwgt=(+$("#totrcvd",tr).val()||0),baal=$("#balwgt",tr).html()||'0';
//							alert(issueprty);
							if(trftyp=='AlloyTestSmp' && mp.get(trftyp+itmcd+jbcdoftr)==0){
								prtyrcvdJsn=tr.attr("rcvprtyjsn")||'[]';
								mp.set(trftyp+itmcd+jbcdoftr,1);
							}else if(trftyp!='AlloyTestSmp') prtyrcvdJsn==tr.attr("rcvprtyjsn")||'[]';
							
							var rcvdauht=(dc.trftyp=='ForSamplesIssue')?0:1;
//							alert(mp.get(trftyp+itmcd+jbcdoftr));
						var jsn=(trftyp=='ScrapMetal'||trftyp=='OutSide_Inward')?smplJsn:prtyrcvdJsn;
							InsertQery+=" ('"+smpPrimId+"','"+smprtnwgt+"','"+jsn+"','"+jbcdoftr+"','"+baal+"','"+primId+"','"+dc.cmycd+"','"+date+"',' ','"+dc.dptcd+"','"+dc.docno+"','"+isedStkWgt+"'" +
							","+isddauth+","+rcvdauht+",' ','"+totrcvdwgt+"','"+dc.strcd+"','"+trftyp+"','"+date+"','"+dc.wrkcd+"',1,' ','"+itmcd+"','"+qtytr+"'," +
									"'"+exstshowwgt+"','"+smpno+"',' ','"+dc.wrktyp+"','0','0','"+prtyoftr+"','"+rcvdprty1+"','"+100+"','"+rcvdwgt1+"','"+rcvdwgt2+"'),";		
						if(isddauth=="1"){
						if(dc.trftyp=='ForSamplesIssue'){
							if(trftyp=='ScrapMetal'||trftyp=='OutSide_Inward'){
								var scrptmetal=((+exstshowwgt||0)-(+isedStkWgt)).toFixed(2);
								if(trftyp=='ScrapMetal'){
								InsetOrUpdate.push("update stk_mst set [stm_rcvd_stk_wgt]=(cast([stm_rcvd_stk_wgt] as decimal(20,3))-cast('"+exstshowwgt+"' as decimal(20,3))) where [stm_stk_trn_typ]='ScrapMetal' and [stm_rcvd_stk_prty]='"+prtyoftr+"' and [stm_dpt_cd]='"+dc.dptcd+"' and [stm_cmy_cd]='"+dc.cmycd+"'");		
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+scrptmetal+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prtyoftr+"' and stm_stk_trn_typ='DcSrcapMetalIssue' " +
										"  and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+scrptmetal+"','"+date+"','"+adminId+"','DcSrcapMetalIssue','"+date+"','"+adminId+"','"+prtyoftr+"','Scrap','"+dc.strcd+"')");	
								}
								else{
									InsetOrUpdate.push("update [iwd_hdr_dtl] set [ihd_dc_isd]='Sent' where ihd_id='"+smpPrimId+"'");	
								InsetOrUpdate.push("update stk_mst set [stm_rcvd_stk_wgt]=(cast([stm_rcvd_stk_wgt] as decimal(20,3))-cast('"+isedStkWgt+"' as decimal(20,3))) where [stm_stk_trn_typ]='OutSide_Inward' and ([stm_rcvd_stk_prty]='' or cast([stm_rcvd_stk_prty] as decimal(20,3))=0) and [stm_dpt_cd]='"+dc.dptcd+"' and [stm_cmy_cd]='"+dc.cmycd+"'");		
								}
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+isedStkWgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prtyoftr+"' and stm_stk_trn_typ='DcSampleIssue' " +
										"and stm_stk_crt_id='"+dc.wrkcd+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+isedStkWgt+"','"+date+"','"+dc.wrkcd+"','DcSampleIssue','"+date+"','"+dc.wrkcd+"','"+prtyoftr+"','Sample','"+dc.strcd+"')");	
								
								var json=eval(smplJsn);
								var addtionInserQry="INSERT INTO [dc_scrp_isd_dtl] ([dsid_dc_no] ,[dsid_isd_doc_no] ,[dsid_isd_exst_wgt] ,[dsid_isd_prty] ,[dsid_isd_wgt] ,[dsid_qty] ,[dsid_smpl_isd_mtl_wgt] ,[dsid_smpl_isd_wgt] ,[dsid_smpl_no] ,[dsid_smpl_rcvd_prty] ,[dsid_smpl_rcvd_wgt] ,[dsid_trf_typ] ,[dsid_wrk_nm]) VALUES";
								if(json.length){
									json.forEach(data=>{
										addtionInserQry+="('"+dc.docno+"','"+jbcdoftr+"','"+exstshowwgt+"','"+prtyoftr+"','"+isedStkWgt+"','"+qtytr+"','"+data.mtlissdwgt+"','"+data.splisswgt+"','"+data.splissdno+"','"+data.smprcvdprty+"','"+data.smprcvdwgt+"','"+trftyp+"','"+itmcd+"'),"	;
									})
									InsetOrUpdate.push(addtionInserQry.slice(0,-1));	
								}
							}
							else{
							InsetOrUpdate.push("update test_samples set ts_smp_dc_isd='YES',[ts_smp_wgt]=(cast([ts_smp_wgt] as decimal(20,3))-cast('"+isedStkWgt+"' as decimal(20,3))) where ts_id="+primId+"");
							if(trftyp=='CastingTestSmp') InsetOrUpdate.push("update stk_mst set [stm_rcvd_stk_wgt]=(cast([stm_rcvd_stk_wgt] as decimal(20,3))-cast('"+isedStkWgt+"' as decimal(20,3))) where [stm_stk_trn_typ]='TestSample' and [stm_rcvd_stk_prty]='"+Number(issueprty).toFixed(2)+"' and [stm_dpt_cd]='"+dc.dptcd+"' and [stm_cmy_cd]='"+dc.cmycd+"'");
							else InsetOrUpdate.push("update stk_mst set [stm_rcvd_stk_wgt]=(cast([stm_rcvd_stk_wgt] as decimal(20,3))-cast('"+isedStkWgt+"' as decimal(20,3))) where [stm_stk_trn_typ]='TestSample' and [stm_rcvd_stk_prty]='"+prtyoftr+"' and [stm_dpt_cd]='"+dc.dptcd+"' and [stm_cmy_cd]='"+dc.cmycd+"'");
							if(trftyp=='CastingTestSmp') InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+isedStkWgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+Number(issueprty).toFixed(2)+"' and stm_stk_trn_typ='DcSampleIssue' " +
									" and stm_stk_crt_id='"+dc.wrkcd+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+isedStkWgt+"','"+date+"','"+dc.wrkcd+"','DcSampleIssue','"+date+"','"+dc.wrkcd+"','"+Number(issueprty).toFixed(2)+"','Sample','"+dc.strcd+"')");	
							else InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+isedStkWgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prtyoftr+"' and stm_stk_trn_typ='DcSampleIssue' " +
									" and stm_stk_crt_id='"+dc.wrkcd+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+isedStkWgt+"','"+date+"','"+dc.wrkcd+"','DcSampleIssue','"+date+"','"+dc.wrkcd+"','"+prtyoftr+"','Sample','"+dc.strcd+"')");	
							}
						}
						else{
							InsetOrUpdate.push("update [dc_hdr_dtl] set [dhd_rcvd_auth]=1 where dhd_id="+primId+"");
							if(trftyp=='ScrapMetal'||trftyp=='OutSide_Inward'){
								var scrptmetal=((+exstshowwgt||0)-(+isedStkWgt)).toFixed(2);
								if(trftyp=='ScrapMetal'){
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+scrptmetal+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prtyoftr+"' and stm_stk_trn_typ='DcSrcapMetalIssue' " +
										"  and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' ");	
								}
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+totrcvdwgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prtyoftr+"' and stm_stk_trn_typ='DcSampleIssue' " +
										"and stm_stk_crt_id='"+dc.wrkcd+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"'");
								var json=eval(smplJsn);
								if(json.length){
									json.forEach(data=>{
										var rcvdwgt=(+data.smprcvdwgt||0),isdwgt=(+data.mtlissdwgt||0),expprtySS;
										var totwgts=((+isdwgt)+(+rcvdwgt)).toFixed(2);
										if(trftyp=='OutSide_Inward'){
											expprtySS=data.smprcvdprty;
											var pureGD=(((exstshowwgt*data.smprcvdprty)/100)||0).toFixed(2);
											InsetOrUpdate.push("update [iwd_hdr_dtl] set [ihd_rcvd_prty]='"+expprtySS+"',[ihd_pure_gld_wgt]='"+pureGD+"' where ihd_id='"+smpPrimId+"'");
											InsetOrUpdate.push("update [iwd_hdr] set [ih_tot_rcvd_prty]='"+expprtySS+"',[ih_tot_pure_gld_wgt]='"+pureGD+"' where ih_doc_no=(select top 1 [ihd_doc_no] from iwd_hdr_dtl where ihd_id='"+smpPrimId+"') and [ih_cmy_cd]='"+dc.cmycd+"'");
											InsetOrUpdate.push("update stk_mst set [stm_rcvd_stk_wgt]=(cast([stm_rcvd_stk_wgt] as decimal(20,3))-cast('"+isdwgt+"' as decimal(20,3))) where [stm_stk_trn_typ]='OutSide_Inward' and ([stm_rcvd_stk_prty]='' or cast([stm_rcvd_stk_prty] as decimal(20,3))=0) and [stm_dpt_cd]='"+dc.dptcd+"' and [stm_cmy_cd]='"+dc.cmycd+"'");		
										}
										else{
											if(+data.smprcvdprty){
												expprtySS=((+data.smprcvdprty)>=(+prtyoftr))?prtyoftr:data.smprcvdprty;
											}
										}
						
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+totwgts+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+expprtySS+"' and stm_stk_trn_typ='ScrapMetal' " +
										"  and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+totwgts+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+expprtySS+"','Scrap','"+dc.strcd+"')");	
								InsetOrUpdate.push(" update dc_scrp_isd_dtl set dsid_smpl_rcvd_prty='"+data.smprcvdprty+"',[dsid_smpl_rcvd_wgt]='"+rcvdwgt+"' where dsid_dc_no='"+dc.docno+"' and dsid_trf_typ='"+trftyp+"' and dsid_isd_prty='"+prtyoftr+"'")			
									});
								}
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvdwgt2+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+100+"' and stm_stk_trn_typ='ScrapMetal' " +
										" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+rcvdwgt2+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+100+"','Scrap','"+dc.strcd+"')");	
							}
							else{
							if(trftyp=='CastingTestSmp')
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+totrcvdwgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='DcSampleIssue' " +
									" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_stk_crt_id='"+dc.wrkcd+"' ");	
							else 
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+totrcvdwgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prtyoftr+"' and stm_stk_trn_typ='DcSampleIssue' " +
									" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_stk_crt_id='"+dc.wrkcd+"' ");	
							var rcvdprtyEXP="";
							if(+rcvdprty1){
								rcvdprtyEXP=((+rcvdprty1)>=(+prtyoftr))?prtyoftr:rcvdprty1;
							}
							
							else{
								rcvdprtyEXP=prtyoftr;
							}
							smprtnwgt=(+smprtnwgt)||0;jsn=(jsn=='[]'||jsn=='null')?'':jsn;
							if(trftyp=='CastingTestSmp'){
								var jsnCnt=JSON.parse(jsn||'{"aphd_tstd_prty1":"","aphd_tstd_prty2":"","aphd_tstd_prty3":"","aphd_tstd_prty4":""}');
								jsnCnt["aphd_tstd_prty"+smpno.match(/\d/)[0]]=rcvdprty1;
								jsn=JSON.stringify(jsnCnt);
								var minPrty=Math.max.apply(null,Object.values(jsnCnt).filter(Number))||prtyoftr;
								InsetOrUpdate.push("update cst_prcs_hdr_dtl set cphd_tst_smp_prty='"+jsn+"',cphd_tree_prty='"+rcvdprty1+"' where cphd_id='"+smpPrimId+"'");
								if(+prtyoftr!=(+rcvdprtyEXP)){
									
									
									
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast((select cast(case when joh_tree1_no='"+itmcd+"' then joh_tree1_wgt else (case when joh_tree2_no='"+itmcd+"' then joh_tree2_wgt else joh_tree3_wgt end) end as float) from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') as float)) where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardRecieved' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and cast(stm_rcvd_stk_wgt as float)>0 if 0=0  update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast((select cast(case when joh_tree1_no='"+itmcd+"' then joh_tree1_wgt else (case when joh_tree2_no='"+itmcd+"' then joh_tree2_wgt else joh_tree3_wgt end) end as float) from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') as float)) where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardMaked' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and cast(stm_rcvd_stk_wgt as float)>0 if 0=0 update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast((select cast(case when joh_tree1_no='"+itmcd+"' then joh_tree1_wgt else (case when joh_tree2_no='"+itmcd+"' then joh_tree2_wgt else joh_tree3_wgt end) end as float) from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') as float)) where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardMaking' and stm_cmy_cd='"+dc.cmycd+"' and stm_itm_cd='"+itmcd+"' and cast(stm_rcvd_stk_wgt as float)>0");
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast((select cast(case when joh_tree1_no='"+itmcd+"' then joh_tree1_wgt else (case when joh_tree2_no='"+itmcd+"' then joh_tree2_wgt else joh_tree3_wgt end) end as float) from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') as float)) where stm_rcvd_stk_prty='"+rcvdprtyEXP+"' and stm_stk_trn_typ='JobCardRecieved' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and  cast(stm_rcvd_stk_wgt as float)>0 if 0=0 select stm_id from  stk_mst  where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardRecieved' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and  cast(stm_rcvd_stk_wgt as float)=0 IF @@ROWCOUNT<>0 insert into stk_mst (stm_cmy_cd,stm_dpt_cd,stm_itm_cd,stm_rcvd_stk_prty,stm_rcvd_stk_wgt,stm_stk_crt_dt,stm_stk_crt_id,stm_stk_itm_typ,stm_stk_trn_typ,stm_stk_updt_dt,stm_stk_updt_id,stm_str_cd) select top 1 stm_cmy_cd,stm_dpt_cd,stm_itm_cd,stm_rcvd_stk_prty,stm_rcvd_stk_wgt,stm_stk_crt_dt,stm_stk_crt_id,stm_stk_itm_typ,stm_stk_trn_typ,stm_stk_updt_dt,stm_stk_updt_id,stm_str_cd from stk_mst where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardRecieved' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and  cast(stm_rcvd_stk_wgt as float)=0 if 0=0 update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast((select cast(case when joh_tree1_no='"+itmcd+"' then joh_tree1_wgt else (case when joh_tree2_no='"+itmcd+"' then joh_tree2_wgt else joh_tree3_wgt end) end as float) from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') as float)) where stm_rcvd_stk_prty='"+rcvdprtyEXP+"' and stm_stk_trn_typ='JobCardMaked' and stm_cmy_cd='"+dc.cmycd+"' and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and cast(stm_rcvd_stk_wgt as float)>0 if 0=0 select stm_id from  stk_mst  where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardMaked' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and  cast(stm_rcvd_stk_wgt as float)=0 IF @@ROWCOUNT<>0 insert into stk_mst (stm_cmy_cd,stm_dpt_cd,stm_itm_cd,stm_rcvd_stk_prty,stm_rcvd_stk_wgt,stm_stk_crt_dt,stm_stk_crt_id,stm_stk_itm_typ,stm_stk_trn_typ,stm_stk_updt_dt,stm_stk_updt_id,stm_str_cd) select top 1 stm_cmy_cd,stm_dpt_cd,stm_itm_cd,stm_rcvd_stk_prty,stm_rcvd_stk_wgt,stm_stk_crt_dt,stm_stk_crt_id,stm_stk_itm_typ,stm_stk_trn_typ,stm_stk_updt_dt,stm_stk_updt_id,stm_str_cd from stk_mst where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardMaked' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd=(select jcd_doc_no from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') and  cast(stm_rcvd_stk_wgt as float)=0 if 0=0 update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast((select cast(case when joh_tree1_no='"+itmcd+"' then joh_tree1_wgt else (case when joh_tree2_no='"+itmcd+"' then joh_tree2_wgt else joh_tree3_wgt end) end as float) from job_card_dtl where joh_tree1_no='"+itmcd+"' or joh_tree2_no='"+itmcd+"' or joh_tree3_no='"+itmcd+"') as float)) where stm_rcvd_stk_prty='"+rcvdprtyEXP+"' and stm_stk_trn_typ='JobCardMaking' and stm_cmy_cd='"+dc.cmycd+"' and stm_itm_cd='"+itmcd+"' and cast(stm_rcvd_stk_wgt as float)>0 select stm_id from  stk_mst where stm_rcvd_stk_prty='"+issueprty+"' and stm_stk_trn_typ='JobCardMaking' and stm_cmy_cd='"+dc.cmycd+"'  and stm_itm_cd='"+itmcd+"' and  cast(stm_rcvd_stk_wgt as float)=0 IF @@ROWCOUNT<>0 insert into stk_mst (stm_cmy_cd,stm_dpt_cd,stm_itm_cd,stm_rcvd_stk_prty,stm_rcvd_stk_wgt,stm_stk_crt_dt,stm_stk_crt_id,stm_stk_itm_typ,stm_stk_trn_typ,stm_stk_updt_dt,stm_stk_updt_id,stm_str_cd)  select top 1 stm_cmy_cd,stm_dpt_cd,stm_itm_cd,stm_rcvd_stk_prty,stm_rcvd_stk_wgt,stm_stk_crt_dt,stm_stk_crt_id,stm_stk_itm_typ, stm_stk_trn_typ,stm_stk_updt_dt,stm_stk_updt_id,stm_str_cd from stk_mst where stm_rcvd_stk_prty='"+issueprty+"'  and stm_stk_trn_typ='JobCardMaking' and stm_cmy_cd='"+dc.cmycd+"' and stm_itm_cd='"+itmcd+"' and  cast(stm_rcvd_stk_wgt as float)=0");									
									
									
									
		
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_prty='"+rcvdprtyEXP+"' where [stm_stk_trn_typ]='CastingRecieved' and [stm_itm_cd]='"+itmcd+"'");
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+smprtnwgt+" as decimal(20,3))) where stm_stk_trn_typ='RunnerMetal' and stm_itm_cd='"+itmcd+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_rcvd_stk_prty='"+issueprty+"'")
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+smprtnwgt+" as decimal(20,3))) where stm_stk_trn_typ='RunnerMetal' and stm_dpt_cd='"+dc.dptcd+"' and stm_itm_cd='"+itmcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_rcvd_stk_prty='"+rcvdprtyEXP+"' IF @@ROWCOUNT=0 insert into stk_mst" +
											" ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_rcvd_stk_prty] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],[stm_stk_itm_typ],[stm_str_cd],[stm_itm_cd])" +
													" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+rcvdprtyEXP+"','"+smprtnwgt+"','"+date+"','"+adminId+"','RunnerMetal','"+date+"','"+adminId+"','RunnerWgt','"+dc.strcd+"','"+itmcd+"')");
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 sum(cast(case when ts_smp_wgt<>'' then ts_smp_wgt else '0' end as decimal(20,3))) from test_samples inner join dc_hdr_dtl on (ts_tree_no=dhd_isd_itm_cd and dhd_isd_job_cd=ts_cst_doc_no) where dhd_isd_itm_cd='"+itmcd+"' and  ts_trf_typ='CASTING' and dhd_isd_job_cd='"+jbcdoftr+"'),0)) where stm_stk_trn_typ='TestSample' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_rcvd_stk_prty='"+issueprty+"'")
									if(issueprty!=prtyoftr) {
										InsetOrUpdate.push("update stk_mst set [stm_rcvd_stk_wgt]=(cast([stm_rcvd_stk_wgt] as decimal(20,3))-cast('"+rcvdwgt1+"' as decimal(20,3))) where [stm_stk_trn_typ]='ScrapMetal' and [stm_rcvd_stk_prty]='"+issueprty+"' and [stm_dpt_cd]='"+dc.dptcd+"' and [stm_cmy_cd]='"+dc.cmycd+"'");
										InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvdwgt1+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+rcvdprtyEXP+"' and stm_stk_trn_typ='ScrapMetal' " +
												" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
												" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+rcvdwgt1+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+rcvdprtyEXP+"','Scrap','"+dc.strcd+"')");
									}
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 sum(cast(case when ts_smp_wgt<>'' then ts_smp_wgt else '0' end as decimal(20,3))) from test_samples inner join dc_hdr_dtl on (ts_tree_no=dhd_isd_itm_cd and dhd_isd_job_cd=ts_cst_doc_no) where dhd_isd_itm_cd='"+itmcd+"' and  ts_trf_typ='CASTING' and dhd_isd_job_cd='"+jbcdoftr+"'),0)) where stm_stk_trn_typ='TestSample' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_rcvd_stk_prty='"+rcvdprtyEXP+"' IF @@ROWCOUNT=0 insert into stk_mst" +
											" ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_rcvd_stk_prty] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_stk_itm_typ,stm_str_cd)" +
											" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+rcvdprtyEXP+"',isnull((select top 1 sum(cast(case when ts_smp_wgt<>'' then ts_smp_wgt else '0' end as decimal(20,3))) from test_samples inner join dc_hdr_dtl on (ts_tree_no=dhd_isd_itm_cd and dhd_isd_job_cd=ts_cst_doc_no) where dhd_isd_itm_cd='"+itmcd+"' and  ts_trf_typ='CASTING' and dhd_isd_job_cd='"+jbcdoftr+"'),0),'"+date+"','"+adminId+"','TestSample','"+date+"','"+adminId+"','Sample','"+dc.strcd+"')");
								}
								afterDcInsertQryUpdt.push("update [dc_hdr_dtl] set [dhd_smpl_jsn]='"+jsn+"' where [dhd_tst_smp_primid]='"+smpPrimId+"' and [dhd_trf_typ]='CastingTestSmp'");
							}
							else if(trftyp=='AlloyTestSmp'){
								var jsnCnt=JSON.parse(jsn||'{"aphd_tstd_prty1":"","aphd_tstd_prty2":"","aphd_tstd_prty3":"","aphd_tstd_prty4":""}');
								if(smpno=='ALA1')jsnCnt["aphd_tstd_prty1"]=rcvdprty1;
								if(smpno=='ALA2')jsnCnt["aphd_tstd_prty2"]=rcvdprty1;
								if(smpno=='ALB1')jsnCnt["aphd_tstd_prty3"]=rcvdprty1;
								if(smpno=='ALB2')jsnCnt["aphd_tstd_prty4"]=rcvdprty1;
								jsn=JSON.stringify(jsnCnt);
								prtyrcvdJsn=jsn;
								var minPrty=0;
								if(smpno=='ALA2' || smpno=='ALB2'){
									var crntprty=JSON.parse('{"aphd_tstd_prty2":"'+jsnCnt["aphd_tstd_prty2"]+'","aphd_tstd_prty4":"'+jsnCnt["aphd_tstd_prty4"]+'"}');
									minPrty=Math.min.apply(null,Object.values(crntprty).filter(Number))||prtyoftr;
								}else {
									minPrty=Math.min.apply(null,Object.values(jsnCnt).filter(Number))||prtyoftr;
								}
								
								InsetOrUpdate.push("update [aly_prcs_hdr_dtl] set [aphd_smpl_rcvd_prty]='"+jsn+"',aphd_rcvd_prty='"+minPrty+"' where [aphd_id]='"+smpPrimId+"' ");
								if(+prtyoftr!=(+rcvdprtyEXP)){
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+smprtnwgt+"' as decimal(20,3))) where [stm_stk_trn_typ]='AlloyReceived' and stm_rcvd_stk_prty='"+prtyoftr+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' ");
									InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+smprtnwgt+" as decimal(20,3))) where " +
											" stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_rcvd_stk_prty='"+rcvdprtyEXP+"' and stm_stk_trn_typ='AlloyReceived' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
														" values ('"+dc.cmycd+"','"+dc.dptcd+"','10000','"+smprtnwgt+"','"+date+"','"+adminId+"','AlloyReceived','"+date+"','"+adminId+"','"+rcvdprtyEXP+"','Raw Metrial','"+dc.strcd+"')");
									}
								afterDcInsertQryUpdt.push("update [dc_hdr_dtl] set [dhd_smpl_jsn]='"+jsn+"' where [dhd_tst_smp_primid]='"+smpPrimId+"' and [dhd_trf_typ]='AlloyTestSmp'");
							}
							else if(trftyp=='MeltingTestSmp'){
								var jsnCnt=JSON.parse(jsn||'{"aphd_tstd_prty1":"","aphd_tstd_prty2":"","aphd_tstd_prty3":"","aphd_tstd_prty4":""}');
								jsnCnt["aphd_tstd_prty"+smpno.match(/\d/)[0]]=rcvdprty1;
								jsn=JSON.stringify(jsnCnt);
								var minPrty=Math.min.apply(null,Object.values(jsnCnt).filter(Number))||prtyoftr;
								InsetOrUpdate.push("update [sub_melt_dtl] set [smd_rcvd_prty_jsn]='"+jsn+"',[smd_rcvd_prty]='"+minPrty+"' where [smd_id]='"+smpPrimId+"' ");
								if(+prtyoftr!=(+rcvdprtyEXP)){
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+smprtnwgt+"' as decimal(20,3)) where [stm_stk_trn_typ]='Melting Received' and stm_rcvd_stk_prty='"+prtyoftr+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' ");
									InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+smprtnwgt+" as decimal(20,3))) where " +
											" stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_rcvd_stk_prty='"+rcvdprtyEXP+"' and stm_stk_trn_typ='Melting Received' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
														" values ('"+dc.cmycd+"','"+dc.dptcd+"','10000','"+smprtnwgt+"','"+date+"','"+adminId+"','Melting Received','"+date+"','"+adminId+"','"+rcvdprtyEXP+"','Melt','"+dc.strcd+"')");
									}
								afterDcInsertQryUpdt.push("update [dc_hdr_dtl] set [dhd_smpl_jsn]='"+jsn+"' where [dhd_tst_smp_primid]='"+smpPrimId+"' and [dhd_trf_typ]='MeltingTestSmp'");
							}
							InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvdwgt1+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+rcvdprtyEXP+"' and stm_stk_trn_typ='ScrapMetal' " +
									" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+rcvdwgt1+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+rcvdprtyEXP+"','Scrap','"+dc.strcd+"')");	
							
							InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvdwgt2+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+100+"' and stm_stk_trn_typ='ScrapMetal' " +
									" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+rcvdwgt2+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+100+"','Scrap','"+dc.strcd+"')");	
							
							InsetOrUpdate.push("update test_samples set ts_smp_dc_rcvd='YES',ts_rcvd_prty1='"+rcvdprtyEXP+"',ts_rcvd_prty2='"+100+"'" +
									",ts_rcvd_wgt1='"+rcvdwgt1+"',ts_rcvd_wgt2='"+rcvdwgt2+"',ts_tot_wgt='"+totrcvdwgt+"' where [ts_isd_prty]='"+prtyoftr+"' and ts_cst_doc_no='"+jbcdoftr+"' and [ts_tree_no]='"+itmcd+"'");	
						}
					}
							}
						}
						else{
						var tr=$(chek).closest("tr"),primId=$(chek).val();
						var isedStkWgt=tr.find("#isdwgtoftr").html(),rcvdWgtOfTr=(+tr.find("#totrcvd").html()||0),balWgtOfTr=0,prcsnm=tr.attr("prcstype")||'',itmcds=tr.attr("itmcd")||'',itmtyps=tr.attr("itmtyp")||'';
						trftyp=$(chek).attr("trftyf"),jbcdoftr=tr.find("#jbcdoftr").html(),itmcd=tr.find("#itmcdftr").html(),qtytr=tr.find("#qtyoftr").html(),wgtoftr=tr.find("#wgtoftr").html(),
						rqdbom=tr.find("#rqdbomoftr").html(),bomwgtOftr=tr.find("#bmwgtoftr").html(),fnshtr=tr.find("#totfnsh").html()||0,scrptr=tr.find("#totscrp").html()||0,
						trgttr=tr.find("#trgtdateoftr").html(),prtyMtl=$("#prtyftr",tr).text()||'',semiPdtgt=(+$("#totsmipdt",tr).text()||0);
						InsertQery+=" ('0','0','[]','"+jbcdoftr+"','"+balWgtOfTr+"','"+primId+"','"+dc.cmycd+"','"+date+"',' ','"+dc.dptcd+"','"+dc.docno+"','"+isedStkWgt+"'" +
						","+isddauth+",0,' ','"+rcvdWgtOfTr+"','"+dc.strcd+"','"+trftyp+"','"+date+"','"+dc.wrkcd+"',1,'"+trgttr+"','"+itmcd+"','"+qtytr+"'," +
								"'"+wgtoftr+"','"+rqdbom+"','"+bomwgtOftr+"','"+dc.wrktyp+"','"+scrptr+"','"+fnshtr+"','"+prtyMtl+"','0','0','"+semiPdtgt+"','0'),";
			
							if(isddauth=="1"&&dc.trftyp=='ForIssue'){
								isedStkWgt=(+isedStkWgt||0)	;rcvdWgtOfTr=(+rcvdWgtOfTr||0);fnshtr=(+fnshtr||0);scrptr=(+scrptr||0);bomwgtOftr=(+bomwgtOftr||0);wgtoftr=(+wgtoftr||0);
						if(trftyp=='Direct'){
							if(+bomwgtOftr){
								InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as  decimal(20,3))-cast("+bomwgtOftr+" as decimal(20,3))) where stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_stk_itm_typ='Bom' and stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+prtyMtl+"' ");
							}
							if(+wgtoftr){
							InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as  decimal(20,3))-cast("+wgtoftr+" as decimal(20,3))) where stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and (stm_itm_cd='"+itmcds+"' or stm_itm_cd IS NULL)  and stm_stk_itm_typ='"+itmtyps+"' and stm_stk_trn_typ='"+jbcdoftr+"' and stm_rcvd_stk_prty='"+prtyMtl+"' ");
							}
							InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+isedStkWgt+" as decimal(20,3))) where (stm_itm_cd='"+itmcds+"'  or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"MainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"' and stm_stk_itm_typ='"+itmtyps+"' and stm_rcvd_stk_prty='"+prtyMtl+"' " +
									" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
											" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+itmcds+"','"+isedStkWgt+"','"+date+"','"+dc.wrkcd+"','"+prcsnm+"MainProcess Issue','"+date+"','"+dc.wrkcd+"','"+prtyMtl+"','"+itmtyps+"','"+dc.strcd+"') ");
							
							InsetOrUpdate.push("update mn_prcs_tmp_dtl set mptd_dc_isd_sts='Sent' where mptd_id="+primId+"");
						}
						else if(trftyp=='Non-Direct'){
							if(+bomwgtOftr){
								InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as  decimal(20,3))-cast("+bomwgtOftr+" as decimal(20,3))) where stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_stk_itm_typ='Bom' and stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+prtyMtl+"' ");
								}
							if(+wgtoftr){
								InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as  decimal(20,3))-cast("+wgtoftr+" as decimal(20,3))) where stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and (stm_itm_cd='"+jbcdoftr+"'  or stm_itm_cd IS NULL) and stm_stk_trn_typ='JobCardRecieved' and stm_rcvd_stk_prty='"+prtyMtl+"' ");
								}
							InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+isedStkWgt+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"' " +
									" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
											" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"','"+isedStkWgt+"','"+date+"','"+dc.wrkcd+"','"+prcsnm+"NotMainProcess Issue','"+date+"','"+dc.wrkcd+"','"+prtyMtl+"','','"+dc.strcd+"') ");
							
						InsetOrUpdate.push("update mn_prcs_hdr_dtl set mphd_dc_isd_sts='Sent' where mphd_id="+primId+"");
						InsetOrUpdate.push(" update o set o.[ohd_crnt_prcs]='DC-ISSUE',[ohd_crnt_wrk]='"+dc.wrkcd+"',[ohd_crnt_wrk_typ]='"+dc.wrktyp+"' from ord_hdr_dtl o left join job_ord_hdr_dtl on ohd_id=johd_ord_prim_id where johd_doc_no='"+jbcdoftr+"'");
						
						}
						else if(trftyp.search(/Main-/ig)>-1){
								/////subprocess Isd
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+cast("+isedStkWgt+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"'");
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-cast("+isedStkWgt+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+itmtyps+"SubProcess Recieved' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"'");
							InsetOrUpdate.push(" update [mn_prcs_job_dtl] set mpjd_dc_isd='Sent' where mpjd_id="+primId+" ");	
						}
						else if(trftyp=='SubProcess'){
							InsetOrUpdate.push("update sub_prcs_hdr_dtl set sphd_dc_isd_sts='Sent' where sphd_id="+primId+"");	
						}
						else if(trftyp=='Recovery'){
							InsetOrUpdate.push("update rcvy_hdr_dtl set rhd_dc_isd='Sent' where rhd_id="+primId+"");
						}
						else{
							InsetOrUpdate.push("update [sub_melt_dtl] set [smd_dc_isd]='Sent' where [smd_id]="+primId+"");		
						}	
						}
						if(isddauth=="1"&&dc.trftyp=='ForReturn'){
							if(trftyp=='Direct'){
								InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as  decimal(20,3))-cast("+rcvdWgtOfTr+" as decimal(20,3))) where stm_stk_crt_id='"+dc.wrkcd+"' and stm_dpt_cd='"+dc.dptcd+"' and (stm_itm_cd='"+itmcds+"' or stm_itm_cd IS NULL) and stm_stk_itm_typ='"+itmtyps+"' and stm_stk_trn_typ='"+prcsnm+"MainProcess Issue' and stm_rcvd_stk_prty='"+prtyMtl+"' ");
								
								if(+fnshtr){
									InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+fnshtr+" as decimal(20,3))) where " +
											" stm_stk_trn_typ='"+prcsnm+"-DMainReceived' and stm_rcvd_stk_prty='"+prtyMtl+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
													" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+itmcds+"','"+fnshtr+"','"+date+"','"+adminId+"','"+prcsnm+"-DMainReceived','"+date+"','"+adminId+"','"+prtyMtl+"','"+itmtyps+"','"+dc.strcd+"')");
								}
								if(+scrptr){
									InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+scrptr+" as decimal(20,3))) where " +
											" stm_stk_trn_typ='ScrapMetal' and stm_rcvd_stk_prty='"+prtyMtl+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
													" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+itmcds+"','"+scrptr+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+prtyMtl+"','Scrap','"+dc.strcd+"')");
								}
								if(+semiPdtgt){
									InsetOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+semiPdtgt+" as decimal(20,3))) where " +
											" stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+prtyMtl+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
													" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+itmcds+"','"+semiPdtgt+"','"+date+"','"+adminId+"','BomStock','"+date+"','"+adminId+"','"+prtyMtl+"','Bom','"+dc.strcd+"')");
								}
								
								InsetOrUpdate.push("update rcvd_doc_dtl set rdd_dc_rcvd='Sent' where rdd_id="+primId+"");
							}
							else if(trftyp.search(/Main-/gi)>-1){
								var val=(+rcvdWgtOfTr||0);
								if(trftyp=='Main-FNSHPDT RCVD'){
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-cast("+val+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"'");
									
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+cast("+val+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Recieved' " +
										" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
												" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"','"+val+"','"+date+"','"+adminId+"','"+prcsnm+"NotMainProcess Recieved','"+date+"','"+adminId+"','"+prtyMtl+"','','"+dc.strcd+"')");
								}
								else if(trftyp=='Main-SCRAP RCVD'){
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-cast("+val+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"'");
									
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+cast("+val+" as decimal(20,3))) where stm_stk_trn_typ='ScrapMetal' and stm_rcvd_stk_prty='"+prtyMtl+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
													" values ('"+dc.cmycd+"','"+dc.dptcd+"','','"+val+"','"+date+"','"+adminId+"','ScrapMetal','"+date+"','"+adminId+"','"+prtyMtl+"','Scrap','"+dc.strcd+"')");
									
								}
								else if(trftyp=='Main-SUPPRCS RCVD'){
									
									/////////// Subprocess Rcvd
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-cast("+val+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"' " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"'");
									InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+cast("+val+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Recieved'  " +
											" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
													" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"','"+val+"','"+date+"','"+adminId+"','"+prcsnm+"NotMainProcess Recieved','"+date+"','"+adminId+"','"+prtyMtl+"','','"+dc.strcd+"')");
								
								}
								
								InsetOrUpdate.push("update mn_prcs_hdr_dtl set mphd_dc_rcvd_sts='Sent' where mphd_id="+primId+"");
								InsetOrUpdate.push(" update [mn_prcs_job_dtl] set mpjd_dc_rcvd='Sent' where mpjd_id="+primId+" ");	
								
								InsetOrUpdate.push(" update o set o.[ohd_crnt_prcs]='DC-RETURN',[ohd_crnt_wrk]='"+dc.wrkcd+"',[ohd_crnt_wrk_typ]='"+dc.wrktyp+"' from ord_hdr_dtl o left join job_ord_hdr_dtl on ohd_id=johd_ord_prim_id where johd_doc_no='"+jbcdoftr+"'");
							}
							else if(trftyp=='FinishPdt'){
								var loginid=$("#loginempcd").val();
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='"+primId+"' and fpd_acpt_rjct='Reject' group by fpd_doc_no),0)) where stm_stk_trn_typ='JOB WORKNotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"'  and stm_dpt_cd='"+dc.dptcd+"' and stm_itm_cd='"+jbcdoftr+"' and stm_cmy_cd='"+dc.cmycd+"'");
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='"+primId+"' and fpd_acpt_rjct='Accept' group by fpd_doc_no),0)) where  stm_stk_trn_typ='JOB WORKNotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"'  and stm_dpt_cd='"+dc.dptcd+"' and stm_itm_cd='"+jbcdoftr+"' and stm_cmy_cd='"+dc.cmycd+"'");
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='"+primId+"' and fpd_acpt_rjct='Reject' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductReject'   and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' and stm_itm_cd='"+jbcdoftr+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										"values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"',isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='"+primId+"' and fpd_acpt_rjct='Reject' group by fpd_doc_no),0),'"+date+"','"+loginid+"','FinishedProductReject','"+date+"','"+loginid+"','"+prtyMtl+"','','"+dc.strcd+"')");
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+primId+" and fpd_acpt_rjct='Accept' group by fpd_doc_no),0)) where stm_stk_trn_typ='FinishedProductAccept'   and stm_dpt_cd="+dc.dptcd+" and stm_cmy_cd="+dc.cmycd+" and stm_itm_cd="+jbcdoftr+" IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										"values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"',isnull((select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='"+primId+"' and fpd_acpt_rjct='Accept' group by fpd_doc_no),0),'"+date+"','"+loginid+"','FinishedProductAccept','"+date+"','"+loginid+"','"+prtyMtl+"','','"+dc.strcd+"')");
								
								/*//chandu code start 
							update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-(select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+primId+" and fpd_acpt_rjct='Reject' group by fpd_doc_no)) where (stm_itm_cd='' or stm_itm_cd IS NULL) and stm_stk_trn_typ='NotMainProcess Issue' and stm_stk_crt_id='11110007'  and stm_dpt_cd='10002' and stm_cmy_cd='10002'
							update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-(select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+primId+" and fpd_acpt_rjct='Accept' group by fpd_doc_no)) where (stm_itm_cd='' or stm_itm_cd IS NULL) and stm_stk_trn_typ='NotMainProcess Issue' and stm_stk_crt_id='11110007'  and stm_dpt_cd='10002' and stm_cmy_cd='10002'
							update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+(select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+primId+" and fpd_acpt_rjct='Reject' group by fpd_doc_no)) where (stm_itm_cd='' or stm_itm_cd IS NULL) and stm_stk_trn_typ='FinishedProductReject'   and stm_dpt_cd='10002' and stm_cmy_cd='10001' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd) values ('10001','10002','',(select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='5' and fpd_acpt_rjct='Reject' group by fpd_doc_no),'12-Jun-18','10000','FinishedProductReject','12-Jun-18','10000','91.70','','10000')
							update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+(select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id="+primId+" and fpd_acpt_rjct='Accept' group by fpd_doc_no)) where (stm_itm_cd='' or stm_itm_cd IS NULL) and stm_stk_trn_typ='FinishedProductAccept'   and stm_dpt_cd='10002' and stm_cmy_cd='10001' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd) values ('10001','10002','',(select top 1 sum(cast(isnull(fpd_acpt_rjct_wgt,0) as decimal(20,3))) from fnsh_pdt_hdr inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_cmy_cd=fph_cmy_cd and  fpd_sts='1' and fph_sts='1' and  fpd_id='5' and fpd_acpt_rjct='Accept' group by fpd_doc_no),'12-Jun-18','10000','FinishedProductAccept','12-Jun-18','10000','91.70','','10000')

								
								
								
								
								
								
								
								
								
								
								
								
								
								
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))-cast("+totrcvdwgt+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Issue' and stm_stk_crt_id='"+dc.wrkcd+"' " +
										" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"'");
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast (stm_rcvd_stk_wgt as decimal(20,3))+cast("+totrcvdwgt+" as decimal(20,3))) where (stm_itm_cd='"+jbcdoftr+"' or stm_itm_cd IS NULL) and stm_stk_trn_typ='"+prcsnm+"NotMainProcess Recieved'  " +
										" and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
												" values ('"+dc.cmycd+"','"+dc.dptcd+"','"+jbcdoftr+"','"+totrcvdwgt+"','"+date+"','"+adminId+"','"+prcsnm+"NotMainProcess Recieved','"+date+"','"+adminId+"','"+prtyMtl+"','','"+dc.strcd+"')");
								// chandu code end 
*/								
								InsetOrUpdate.push("update fnsh_pdt_hdr set fph_dc_isd='Sent' where fph_id=(select top 1 fph_id from  fnsh_pdt_hdr  inner join fnsh_pdt_dtl on fph_doc_no=fpd_doc_no where fpd_id="+primId+")");	
							}
							else if(trftyp=='SubProcess'){
								InsetOrUpdate.push("update sub_prcs_hdr_dtl set sphd_dc_rcvd_sts='Sent' where sphd_id="+primId+"");
							}
							else if(trftyp=='Recovery'){
								var cvntprtyWgts=tr.attr("cvntprty")||0;
								var crctRcvy=rcvdWgtOfTr;
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+cvntprtyWgts+"' as decimal(20,3))) where stm_stk_crt_id='"+dc.wrkcd+"' and stm_stk_trn_typ='RecoveryIssue' and" +
										" stm_rcvd_stk_prty='"+itmcds+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' ");
								if(+fnshtr){
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+fnshtr+"' as decimal(20,3))) where stm_stk_trn_typ='RecoveryRecieved' and" +
										" stm_rcvd_stk_prty='"+prtyMtl+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst" +
										"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
										" values ('"+adminId+"','"+adminId+"','"+date+"','"+date+"','"+prtyMtl+"','Recovery','RecoveryRecieved','"+dc.cmycd+"','"+dc.dptcd+"','"+fnshtr+"')");
								}
								if(+scrptr){
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+scrptr+"' as decimal(20,3))) where stm_stk_trn_typ='Non-Recovery' and" +
										" stm_rcvd_stk_prty='"+prtyMtl+"' and stm_dpt_cd='"+dc.dptcd+"' and stm_cmy_cd='"+dc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst" +
										"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
										" values ('"+adminId+"','"+adminId+"','"+date+"','"+date+"','"+prtyMtl+"','Recovery','Non-Recovery','"+dc.cmycd+"','"+dc.dptcd+"','"+scrptr+"')");
								}

								InsetOrUpdate.push("update rcvy_hdr_dtl set rhd_dc_rcvd='Sent' where rhd_id="+primId+"");
							}
							else
								{
								InsetOrUpdate.push("update [sub_melt_dtl] set [smd_dc_rcvd]='Sent' where [smd_id]="+primId+"");			
								}
							}
						
						}
					});
					InsetOrUpdate.push(InsertQery.slice(0,-1));
					[].push.apply(InsetOrUpdate,afterDcInsertQryUpdt);
				InsetOrUpdate.push(" INSERT INTO [dbo].[dc_hdr] ([dh_bal_wgt] ,[dh_cmy_cd] ,[dh_crt_dt] ,[dh_crt_id] ,[dh_dpt_cd] ,[dh_isd_doc_no] ,[dh_isd_wgt] ,[dh_iss_auth] ,[dh_rcvd_auth] ,[dh_rcvd_doc_no] ,[dh_rcvd_wgt] ,[dh_str_cd] ,[dh_sts] ,[dh_trf_typ] ,[dh_upd_dt] ,[dh_wrk_cd],dh_wrk_typ,dh_fnsh_wgt,dh_scrp_wgt,[dh_isd_doc_dt]) VALUES " +
						"('0','"+dc.cmycd+"','"+date+"',' ','"+dc.dptcd+"','"+dc.docno+"','"+totisdwgt+"',"+isddauth+",0,' ','"+totrcvdwgt+"','"+dc.strcd+"',1,'"+dc.trftyp+"','"+date+"','"+dc.wrkcd+"','"+dc.wrktyp+"','"+totFnshWgt+"','"+totScrpWgt+"','"+docDt+"') ")
//						alert(InsetOrUpdate);
				AjaxController.saveDcPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
				
			}
		});
			function rtnfunOfSaveRes(res){
			if(res=='success')window.location.href="dc.mm";
		}
	}
	else{
		if(dc.docno==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Enter Document Number</div>');$("#hider12").fadeOut(3500);
		}
		else if(dc.dptcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select DepartMent</div>');$("#hider12").fadeOut(3500);
		}
		else if(dc.wrkcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Worker Name</div>');$("#hider12").fadeOut(3500);
		}
		else if(dc.cmycd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Company</div>');$("#hider12").fadeOut(3500);
		}
		else if(dc.strcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Store</div>');$("#hider12").fadeOut(3500);
		}
		else if(isddauth!="1"){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Authorize Please...</div>');$("#hider12").fadeOut(3500);
		}
		else if(isEmpty){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Enter Data In Selected List...</div>');$("#hider12").fadeOut(3500);
		}
		else{
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Records</div>');$("#hider12").fadeOut(3500);
			}
		$("#saveButttonDc").removeClass("disabled");
		$("#saveButttonDc").removeClass("btn-circlesuc");
	}
}

function totvaluecalculator(){
	var total=$(".childCheckBox:checked").toArray().reduce((old,nw)=>{
		var tr=$(nw).closest("tr");
		if($("#trfTypOfDcPrcs").val().search(/samp/gi)>-1){
			old.isd+=(+tr.find("#isdwgtoftr").val()||0);
			old.rcvd+=(+tr.find("#totrcvd").val()||0);
		}
		else{
			old.isd+=(+tr.find("#isdwgtoftr").html()||0);	
			old.rcvd+=(+tr.find("#totrcvd").html()||0);
		}
		old.fnsh+=(+tr.find("#totfnsh").html()||0);
		old.scrp+=(+tr.find("#totscrp").html()||0);
		return old;
	},{isd:0,rcvd:0,fnsh:0,scrp:0});
	$("#rcvdWgtOfDc").val(total.rcvd.toFixed(2));$("#IsdWgtOfDc").val(total.isd.toFixed(2));$("#scrpWgtOfDc").val(total.scrp.toFixed(2));
	$("#fnshWgtOfDc").val(total.fnsh.toFixed(2));
	$(".balWGtOfHdr").val((total.isd-total.rcvd).toFixed(2));
}

$("table").delegate("#mtlrcvdwgt,#isdwgtoftr,#mtlrcvdpurgold","keyup",function(){
	var tr=$(this).closest("tr"),isdwgt=+$("#isdwgtoftr",tr).val()||0;
	var rcvdWgt1=(+$("#mtlrcvdwgt",tr).val()||0),rcvdWgt2=(+$("#mtlrcvdpurgold",tr).val()||0);
	var isdPrty=(+$("#prtyoftr",tr).html()||1);
	var rcvd1prty=(+$("#smprcvdprty",tr).val()||''),expprty='';
	if(+rcvd1prty)expprty=(+rcvd1prty)>=(+isdPrty)?isdPrty:rcvd1prty;
	else expprty=isdPrty;
	if(isdPrty==1)expprty=rcvd1prty;
	var totrcvd=(rcvdWgt1+(((rcvdWgt2)*100)/expprty));
	$("#totrcvd",tr).val(totrcvd.toFixed(2));
	$("#balwgt",tr).html((isdwgt-totrcvd).toFixed(2));
	totvaluecalculator()
});
$("table").delegate("#smprcvdprty","change",function(){
	var tr=$(this).closest("tr");
	$("#smprcvdprty",tr).val(Number($("#smprcvdprty",tr).val()).toFixed(2));
});
var crntIsdSmplTr,currentId;
$("table").delegate("[scrapmetal] #isdwgtoftr,[outside_inward] #isdwgtoftr,[scrapmetal] #mtlrcvdwgt,[outside_inward] #mtlrcvdwgt,[scrapmetal] #smprcvdprty,[outside_inward] #smprcvdprty","click",function(){
	crntIsdSmplTr=$(this).closest("tr");
	var isdsmpljson=$("#isdwgtoftr",crntIsdSmplTr).attr("isdsmpljsn");
	var html='';$("#qtyControllerDc").val(""),readonly=($("#trfTypOfDcPrcs").val()=='ForSamplesReturn')?true:false;
	currentId=this.id;
	if(isdsmpljson){
		var trJsn=eval(isdsmpljson);
		$("#qtyControllerDc").val(trJsn.length);
		trJsn.forEach((data)=>{
			html+='<tr><td><input class="form-control" type="number" value="'+data.mtlissdwgt+'" name="mtlissdwgt"/></td><td><input class="form-control" type="text" name="splissdno" value="'+data.splissdno+'"/></td><td>'+
		'<input class="form-control" type="number" name="splisswgt" value="'+data.splisswgt+'" /></td><td><input class="form-control" type="number" value="'+data.smprcvdwgt+'" name="smprcvdwgt"/></td><td><input class="form-control" type="number" value="'+data.smprcvdprty+'" name="smprcvdprty"/></td></tr>'	
		});
	}
	$("#IsdSampleTbody").html(html);
	if(readonly){
	if(this.id=='isdwgtoftr')
	$("#sampleIssuerForDc .form-control").prop("disabled",true);
	else if(this.id=='mtlrcvdwgt')
		$("#sampleIssuerForDc .form-control:not([name=smprcvdwgt])").prop("disabled",true);	
	else if(this.id=='smprcvdprty')
		$("#sampleIssuerForDc .form-control:not([name=smprcvdprty])").prop("disabled",true);	
	}else{
		$("#sampleIssuerForDc").find("[name=smprcvdwgt],[name=smprcvdprty]").prop("disabled",true);		
	}
	$("#sampleIssuerForDc").modal('show');
});

$("#qtyControllerDc").keyup(function(){
	var qty=this.value||0,html='',TYpe=crntIsdSmplTr.attr("outside_inward")==undefined?"S":"O";
	for(var i=0;i<qty;i++){
		html+='<tr><td><input class="form-control" type="number" name="mtlissdwgt"/></td><td><input class="form-control" type="text" name="splissdno" value="'+TYpe+(i+1)+'"/></td><td>'+
		'<input class="form-control" type="number" name="splisswgt" value=""/></td><td><input class="form-control" readonly type="number" value="" name="smprcvdwgt"/></td><td><input class="form-control" type="number" value="" readonly name="smprcvdprty"/></td></tr>';
	}
	$("#IsdSampleTbody").html(html);
})


$("#saveDctestSmplIsud").click(function(){
	var check=$("#IsdSampleTbody :input:not(:disabled,[readonly])").toArray().some(s=>!(s.value));
	if(check||!$("#qtyControllerDc").val()){
		$(this).addClass("btn-danger").html("Enter Data");
		setTimeout(()=>{
			$(this).removeClass("btn-danger").html("Save");
		},1500)
	}
	else{
		var aryVal=$("#IsdSampleTbody tr").toArray().reduce(function(old,tr){
			tr=$(tr);
			var isdwgt=$("[name=mtlissdwgt]",tr).val(),smplno=$("[name=splissdno]",tr).val(),smplwgt=$("[name=splisswgt]",tr).val(),
			smprcvdwgt=$("[name=smprcvdwgt]",tr).val(),smrcvdprty=$("[name=smprcvdprty]",tr).val();
			old.totisd+=(+isdwgt||0);old.totsmpl+=(+smplwgt||0);
			old.totrcvd+=(+smprcvdwgt||0);old.totrcvdprty.push(smrcvdprty);
			old.html.push({mtlissdwgt:isdwgt,splissdno:smplno,splisswgt:smplwgt,smprcvdprty:smrcvdprty,smprcvdwgt:smprcvdwgt});return old;
		},{html:[],totisd:0,totsmpl:0,totrcvd:0,totrcvdprty:[]});
		var isdStkWgt=(aryVal.totisd+aryVal.totsmpl).toFixed(2);
		$("#isdwgtoftr",crntIsdSmplTr).attr("isdsmpljsn",JSON.stringify(aryVal.html));
		if(currentId=='mtlrcvdwgt'){
			$("#mtlrcvdwgt",crntIsdSmplTr).val(aryVal.totrcvd.toFixed(2))
		}
		else if(currentId=='smprcvdprty'){
			var min=Math.min.apply(null,aryVal.totrcvdprty);
			$("#smprcvdprty",crntIsdSmplTr).val(min);
		}
		else{
			$("#isdwgtoftr",crntIsdSmplTr).val(aryVal.totsmpl);$("#showextwgtoftr",crntIsdSmplTr).html(isdStkWgt);	
			$("#qtyoftr",crntIsdSmplTr).html(aryVal.html.length);
		}
		$("#sampleIssuerForDc").modal('hide');
	}
	totvaluecalculator();
});

$("#getTransactionIntrn").click(function(){
	var wrkcd=$("[id*=wrkCdOfSubPrcs]:visible").val()||'';
	if(wrkcd){
		var qry=" select [dhd_isd_doc_no],(select dm_dpt_nm from dpt_mst where dm_dpt_cd=[dhd_dpt_cd] and dm_sts=1) as dptnm,[dhd_trf_typ],[dhd_isd_prty],"+
  "[dhd_isd_wgt],'0' as rcvdwgt,'0' as [dhd_rcvd_wgt1],'0' as [dhd_rcvd_wgt2],'0' as [dhd_fnsh_wgt],'0' as [dhd_scrp_wgt],dh_trf_typ from dc_hdr_dtl left join dc_hdr on dh_isd_doc_no=dhd_isd_doc_no where dh_trf_typ in ('ForIssue','ForSamplesIssue') and [dhd_wrk_cd]='"+wrkcd+"' "+
" union all   select [dhd_isd_doc_no],(select dm_dpt_nm from dpt_mst where dm_dpt_cd=[dhd_dpt_cd] and dm_sts=1) as dptnm,[dhd_trf_typ],[dhd_isd_prty],"+
" '0' as isdwgt,[dhd_rcvd_wgt] as rcvdwgt,[dhd_rcvd_wgt1],[dhd_rcvd_wgt2],[dhd_fnsh_wgt],[dhd_scrp_wgt],dh_trf_typ from dc_hdr_dtl left join dc_hdr on dh_isd_doc_no=dhd_isd_doc_no where dh_trf_typ in ('ForReturn','ForSamplesReturn') and [dhd_wrk_cd]='"+wrkcd+"'";
		AjaxController.getTransactionDetailBy(qry,(data)=>{
		var html='',TOT={isd:0,rcvd:0,bal:0};
			if(data&&data.length){
				data.forEach((tr)=>{
					TOT.isd+=(+tr[4]||0)
					TOT.rcvd+=(+tr[5]||0)
					TOT.bal+=(+((+tr[4]||0)-(+tr[5]||0)).toFixed(2));
				var	smiWgt=0;
				if(tr[10]=='ForReturn'){
					smiWgt=(+tr[6]||0);tr[6]=0;
				}
				tr[6]=(+tr[6]||0);tr[7]=(+tr[7]||0);
				html+='<tr><td>'+tr[0]+'</td><td>'+tr[2]+'</td><td>'+tr[1]+'</td><td>'+tr[3]+'</td><td>'+tr[4]+'</td><td>'+tr[8]+'</td><td>'+tr[9]+'</td><td>'+smiWgt+'</td><td>'+tr[6]+'</td><td>'+tr[7]+'</td><td>'+tr[5]+'</td></tr>';		
				});
			}
		$("#tranThead").html('<tr><th colspan="2">TOT_ISD</th><th colspan="2">'+TOT.isd+'</th><th colspan="2">TOT_RCVD</th><th>'+TOT.rcvd+'</th><th colspan="2">TOT_BAL</th><th colspan="2">'+TOT.bal+'</th></tr><tr><th>TRNS_NO</th><th>TRNS_TYP</th><th>FROM_DPT</th><th>PRTY</th><th>ISDWGT</th><th>FNSH_PDT</th><th>SCRP MTL</th><th>SEMI PDT</th><th>MTL RCVD</th><th>PG WGT</th><th>TOT_RCVD</th></tr>');
			$("#tranTbody").html(html);	
		$("#tranModel").modal('show');
		});
	}
});