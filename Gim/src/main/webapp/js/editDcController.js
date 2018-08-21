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

$(function(){
	
	/////////////////////////// Worker Code /////////////////////////////////
	
	$("#wrkCdOfSubPrcs,#targetDtOfSubPrcs,#trfTypOfDcPrcs").change(function(){
		var dc=new DC(),curntid=this.id;
		if(dc.wrkcd){
			var qry="exec getDcprocessList @company='"+dc.cmycd+"',@worker='"+dc.wrkcd+"',@trgtDate='"+dc.trgtdate+"',@trnsType='"+dc.trftyp+"',@wrktyp='"+dc.wrktyp+"'";
		AjaxController.runDynamicQueriesFromJavaScript(qry,(data)=>{
			var result='',trgtDt=new Set(['<option value="">Select Target Date</option>']);
			if(data&&data.length){
				data.forEach((tr)=>{
					trgtDt.add('<option>'+tr[1]+'</option>');
					tr[9]=(+tr[9]||0);tr[8]=(+tr[8]||0);tr[10]=(+tr[10]||0)
					var totrcvd=((tr[9])+(tr[10])).toFixed(2);
					if(tr[0]=='Direct')tr[8]=((tr[8])+(+tr[13]||0)).toFixed(2);
				/*	if(tr[0]=='SubProcess'&&tr[7]=='Casting Recieved'){
						tr[2]='';tr[7]='';
							}
					else if(tr[0]=='SubProcess'){tr[3]='';tr[7]='';
						};*/
					if(tr[0]=='SubProcess'){tr[7]=tr[9]=tr[10]='';}
						tr[5]=(+(+tr[5]||0).toFixed(2));
						tr[8]=(+tr[8]).toFixed(2);
					if(dc.trftyp=='For Return'){
					result+='<tr> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="'+tr[0]+'" value="'+tr[12]+'"> <span></span> </label></td> <td id="trftypoftr">'+tr[0]+'</td> '+
					'<td id="trgtdateoftr">'+tr[1]+'</td> <td id="jbcdoftr">'+tr[2]+'</td> <td id="itmcdftr">'+tr[3]+'</td> <td id="qtyoftr">'+tr[4]+'</td> <td id="wgtoftr">'+tr[5]+'</td> <td id="rqdbomoftr">'+tr[6]+'</td> <td id="bmwgtoftr">'+tr[7]+'</td>'
					+' <td id="isdwgtoftr">'+tr[8]+'</td> <td id="totfnsh">'+tr[9]+'</td> <td id="totscrp">'+tr[10]+'</td> <td id="totrcvd">'+totrcvd+'</td> </tr>';	
					}
					else{
						result+='<tr> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="'+tr[0]+'" value="'+tr[12]+'"> <span></span> </label></td> <td id="trftypoftr">'+tr[0]+'</td> '+
						'<td id="trgtdateoftr">'+tr[1]+'</td> <td id="jbcdoftr">'+tr[2]+'</td> <td id="itmcdftr">'+tr[3]+'</td> <td id="qtyoftr">'+tr[4]+'</td> <td id="wgtoftr">'+tr[5]+'</td> <td id="rqdbomoftr">'+tr[6]+'</td> <td id="bmwgtoftr">'+tr[7]+'</td>'
						+' <td id="isdwgtoftr">'+tr[8]+'</td></tr>';	
					}
					})
			}
			if(curntid!='targetDtOfSubPrcs');
			$("#targetDtOfSubPrcs").html([...trgtDt]).selectpicker("refresh");
			var table = $('#tableofdc').DataTable().clear();table.destroy();
			if(dc.trftyp=='For Return')
			var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>TrfType<input class="form-control input-sm search"></th> <th>Trgt Date<input class="form-control input-sm search"></th> <th>JobCd/ Tree<input class="form-control input-sm search"></th> <th>Doc No<input class="form-control input-sm search"></th> <th>Qty<input class="form-control input-sm search"></th> <th>Wgt<input class="form-control input-sm search"></th> <th>Rqrd BOM <input class="form-control input-sm search"></th> <th>BOM Wgt<input class="form-control input-sm search"> </th> <th>Iss Wgt<input class="form-control input-sm search"> </th>  <th>Fnsh Pdt Wgt<input class="form-control input-sm search"> </th><th>Rtn Srcp Wgt<input class="form-control input-sm search"> </th> <th>Rcvd Wgt<input class="form-control input-sm search"> </th>  </tr>';
			else
			var thead='<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>TrfType<input class="form-control input-sm search"></th> <th>Trgt Date<input class="form-control input-sm search"></th> <th>JobCd/ Tree<input class="form-control input-sm search"></th> <th>Doc No<input class="form-control input-sm search"></th> <th>Qty<input class="form-control input-sm search"></th> <th>Wgt<input class="form-control input-sm search"></th> <th>Rqrd BOM <input class="form-control input-sm search"></th> <th>BOM Wgt<input class="form-control input-sm search"> </th> <th>Iss Wgt<input class="form-control input-sm search"> </th>  </tr>';
			$("#tableofdc thead").html(thead);
			$("#tbodyofdc").html(result);
			tablerefresh("tableofdc");
		});
		}else{
			var table = $('#tableofdc').DataTable().clear();table.destroy();
			$("#tbodyofdc").html('');
			tablerefresh("tableofdc");
			
		}
	});
	
	///////////////// Select Box ///////////////////////////
	
	$(".parentCheckBox").on("change",function(){
		this.checked?$(".childCheckBox").prop("checked",true):$(".childCheckBox").prop("checked",false);
	});
	$("#tbodyofdc").delegate(".childCheckBox","change",function(){
		$(".childCheckBox:not(:checked)").length?$(".parentCheckBox").prop("checked",false):$(".parentCheckBox").prop("checked",true);
	});
	
	
})
 
function SaveFinalDcDetail(){
	var dc=new DC(),totrcvdwgt=$("#rcvdWgtOfDc").val(),totisdwgt=$("#IsdWgtOfDc").val(),totbalwgt=$("#balWgtOfDc").val(),isddauth=$("#isdauthVal").val();
	if(dc.docno!=""&&dc.cmycd!=""&&dc.strcd!=""&&dc.wrkcd!=""&&dc.dptcd!=""&&$(".childCheckBox:checked").length>0){
		$("#saveButttonDc").addClass("disabled");[date]=$("#dateINDcPrcs").val().split(" ");
		$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait</div>');
		var InsetOrUpdate=[],isddauth=$("#isdauthVal").val()
			if(isddauth=="1"){
				var dcPrimIdList=[];
		$(".childCheckBox:checked").toArray().forEach(function(chek){
				var primId=$(chek).val(),dcPrimId=$(chek).attr("dcprimid"),trftyp=$(chek).closest("tr").find("#trftypoftr").html();
				dcPrimIdList.push(dcPrimId);
				if(isddauth=="1"&&dc.trftyp=='For Issue'){
				if(trftyp=='Direct')
				InsetOrUpdate.push("update mn_prcs_tmp_dtl set mptd_dc_isd_sts='Sent' where mptd_id="+primId+"");
				else if(trftyp=='Non-Direct')
				InsetOrUpdate.push("update mn_prcs_hdr_dtl set mphd_dc_isd_sts='Sent' where mphd_id="+primId+"");
				else
					InsetOrUpdate.push("update sub_prcs_hdr_dtl set sphd_dc_isd_sts='Sent' where sphd_id="+primId+"");
				}
				if(isddauth=="1"&&dc.trftyp=='For Return'){
					if(trftyp=='Direct')
					InsetOrUpdate.push("update mn_prcs_tmp_dtl set mptd_dc_rcvd_sts='Sent' where mptd_id="+primId+"");
					else if(trftyp=='Non-Direct')
					InsetOrUpdate.push("update mn_prcs_hdr_dtl set mphd_dc_rcvd_sts='Sent' where mphd_id="+primId+"");
					else
						InsetOrUpdate.push("update sub_prcs_hdr_dtl set sphd_dc_rcvd_sts='Sent' where sphd_id="+primId+"");
					}
			});
		InsetOrUpdate.push("update dc_hdr_dtl set dhd_iss_auth=1 where dhd_id in ("+dcPrimIdList.join()+") update dc_hdr set dh_iss_auth=1 where 0=(select count(dhd_id) from dc_hdr_dtl where dhd_iss_auth=0 and dhd_isd_doc_no='"+dc.docno+"' and dhs_sts=1) and dh_id="+isPrimHdrId+"")
			AjaxController.saveDcPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
			}
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
		else{
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Records</div>');$("#hider12").fadeOut(3500);	
			}
	}
}

function totvaluecalculator(){
	function totvaluecalculator(){
		var total=$(".childCheckBox:checked").toArray().reduce((old,nw)=>{
			var tr=$(nw).closest("tr");
			old.isd+=(+tr.find("#isdwgtoftr").html()||0);
			old.rcvd+=(+tr.find("#totrcvd").html()||0);
			old.fnsh+=(+tr.find("#totfnsh").html()||0);
			old.scrp+=(+tr.find("#totscrp").html()||0);
			return old;
		},{isd:0,rcvd:0,fnsh:0,scrp:0});
		$("#rcvdWgtOfDc").val(total.rcvd.toFixed(2));$("#IsdWgtOfDc").val(total.isd.toFixed(2));$("#scrpWgtOfDc").val(total.scrp.toFixed(2));
		$("#fnshWgtOfDc").val(total.fnsh.toFixed(2));
	}}


$("table").delegate("[scrapmetal] #isdwgtoftr,#mtlrcvdwgt,#smprcvdprty","click",function(){
	var isdsmpljson=$("#isdwgtoftr").attr("isdsmpljsn");
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
	$("#IsdSampleTbody").html(html);crntIsdSmplTr=$(this).closest("tr");
	$("#sampleIssuerForDc .form-control").prop("disabled",true);
	$("#sampleIssuerForDc").modal('show');
});
