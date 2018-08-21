/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddJobOrd(ths){
	if(ths.checked==true)
		{
		$(".childCheckBox,.childCheckBoxExst").each(function(){
			$(this)["0"].checked=true;
		})
		}
	else{
		$(".childCheckBox,.childCheckBoxExst").each(function(){
			$(this)["0"].checked=false;
		})
	}
}
$(function (){
	$(".childCheckBox,.childCheckBoxExst").on("click",function(){ 
		var sumChkedchkBox=$(".childCheckBox:checked,.childCheckBoxExst:checked").length;
		var totChkBox=$(".childCheckBox,.childCheckBoxExst").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
	})
});

function calSumOfTotJobOrdQty(){
	var rcvdWgt=0,processTypeOfJobOrd=$("#processTypeOfJobOrd").val();
	if(processTypeOfJobOrd=='InhouseBomMaking')
	$(".childCheckBox:checked,.childCheckBoxExst").each(function(){
		rcvdWgt+=Number($(this).val());
	})
	else if(processTypeOfJobOrd=='JobCardMaking')
		$(".childCheckBox:checked,.childCheckBoxExst").each(function(){
			rcvdWgt+=Number($(this).closest("tr").find("td:eq(8)").html());
		})
	else{
		$(".childCheckBox:checked,.childCheckBoxExst").each(function(){
			var tr=$(this).closest("tr");
			rcvdWgt+=Number(tr.find(".issqtyinbalbom").val()||tr.find("td:eq(8)").html());
		})
		}
	$("#WgtOfJobOrd").val(rcvdWgt?rcvdWgt.toFixed(2):'');
}
////////////////////////end/////////////////////////////////

//////////////////////// filter By Job Order //////////////////////////////
var currentChager='';
$(function(){
	$(".selectpicker,#tghtDtOfJobOrd,#processTypeOfJobOrd").on("change",function(evt){
		currentChager=evt.target.id;
	var tgtDt=$("#tghtDtOfJobOrd").val(),ctgyTy=$("#ctgyTypOfJobOrd").val()||[],ordNo=$("#ordNoOfJobOrd").val()||[],pdtTyp=$("#pdtTypOfJobOrd").val()||[],
	pdtdptCd=$("#pdtdptCdOfJobOrd").val()||[],cmycd=$("#cmycdOfJobOrd").val(),waxNo=$("#waxNoOfJobOrd").val()||[],prcsType=$("#processTypeOfJobOrd").val();
		if(this.id=='processTypeOfJobOrd'){
			if(prcsType=='JobCardMaking'){
				$(".bomIssuedInDirectJob").show();
			}else{
				$(".bomIssuedInDirectJob").hide();	
			}
		}
		if(ctgyTy.length)ctgyTy=ctgyTy.map(s=>"'"+s+"'");
		if(ordNo.length)ordNo=ordNo.map(s=>"'"+s+"'");
		if(pdtTyp.length)pdtTyp=pdtTyp.map(s=>"'"+s+"'");
		if(pdtdptCd.length)pdtdptCd=pdtdptCd.map(s=>"'"+s+"'");
		if(waxNo.length)waxNo=waxNo.map(s=>"'"+s+"'");
		var dptjb=$("#dptCdOfJobOrd").val()||'';
		var qry='select bij_job_crd_no,bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bij_tot_wgt,bij_iss_wgt,bij_bal_wgt,bij_bom_cd,bij_id,bm_bom_typ,bm_bom_wgt,bm_bom_qty,bij_rcvd_bom_wgt from bom_iss_job_dtl left join bom_mst on bm_bom_cd=bij_bom_cd where cast(bij_bal_wgt as float)>0 and bij_cmy_cd=\''+cmycd+'\' and bij_dpt_cd=\''+dptjb+'\' and (bm_bom_sts=1 or bm_bom_sts is null)';
		if(prcsType)
		AjaxController.filterJobOrderAddInAjax(ctgyTy.join(),ordNo.join(),pdtTyp.join(),pdtdptCd.join(),tgtDt,cmycd,waxNo.join(),prcsType,qry,returnResOfFilterJobOrd);
	});
});
var BomDetail=[];
function returnResOfFilterJobOrd(res){
	var result='',prcsType=$("#processTypeOfJobOrd").val();var table = $('#myTable').DataTable().clear();table.destroy();
	var pdtDept=new Set(),pdtCategry=new Set(),pdtType=new Set(),ordNo=new Set(),trgtDt=new Set();
	BomDetail=[];
	if(res!=null){
		for(var i=0;i<res.length;i++){
			trgtDt.add('<option value="'+res[i][5]+'">'+res[i][5]+'</option>');
			pdtDept.add('<option value="'+res[i][11]+'">'+res[i][3]+'</option>');
			pdtCategry.add('<option value="'+res[i][2]+'">'+res[i][2]+'</option>');
			pdtType.add('<option value="'+res[i][10]+'">'+res[i][10]+'</option>');
			ordNo.add('<option value="'+res[i][0]+'">'+res[i][0]+'</option>');
			if(prcsType=='InhouseBomMaking'){
			$("#thOfJobCard").html('<tr > <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)"> <span></span> </label> </th> <th>J.O No<input class="form-control input-sm"></th> <th>Pdt.cd<input class="form-control input-sm"></th> <th>Ctgy<input class="form-control input-sm"></th> <th>Dept<input class="form-control input-sm"></th> <th>Ord.Typ<input class="form-control input-sm"></th> <th>Tgt.Dt<input class="form-control input-sm"></th> <th>Dgn.No<input class="form-control input-sm"></th> <th>Qty<input class="form-control input-sm"></th> <th>Pdt.Typ<input class="form-control input-sm"></th> </tr>');	
				result+='<tr value="" pdtdptcd="'+res[i][11]+'" pdtbatchno="'+res[i][12]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][9]+'" value="'+res[i][7]+'">'
		        +'<span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
					+'<td>'+res[i][6]+'</td><td>'+res[i][7]+'</td><td>'+res[i][10]+'</td></tr>';
			}else if(prcsType=='JobCardMaking'||prcsType=='processTypeOfJobOrd'){
				$("#thOfJobCard").html('<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)"> <span></span> </label> </th> <th>J.O No<input class="form-control input-sm"></th> <th>Pdt.cd<input class="form-control input-sm"></th> <th>Ctgy<input class="form-control input-sm"></th> <th>Dept<input class="form-control input-sm"></th> <th>Ord.Typ<input class="form-control input-sm"></th> <th>Tgt.Dt<input class="form-control input-sm"></th> <th>Dgn.No<input class="form-control input-sm"></th> <th>Qty<input class="form-control input-sm"></th> <th>Pdt.Typ<input class="form-control input-sm"></th> </tr>');	
				result+='<tr value="" pdtdptcd="'+res[i][11]+'" pdtbatchno="'+res[i][12]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][9]+'" value="'+res[i][7]+'">'
		        +'<span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
					+'<td>'+res[i][6]+'</td><td>'+res[i][7]+'</td><td>'+res[i][10]+'</td></tr>';
			}
			else{
				if(res[i][7])
				BomDetail[res[i][7]]={bom_wgt:res[i][10],bom_qty:res[i][11]};
				$("#thOfJobCard").html('<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)"> <span></span> </label> </th> <th style="display:none">Job.Card.No<input class="form-control input-sm"></th> <th>Bom.Nm<input class="form-control input-sm"></th> <th>Bom.Sz<input class="form-control input-sm"></th> <th>BomWrk.Typ<input class="form-control input-sm"></th><th>Bom.Typ<input class="form-control input-sm"></th> <th>Req.Qty<input class="form-control input-sm"></th> <th>Stk.Qty<input class="form-control input-sm"></th> <th>Rcvd.Qty<input class="form-control input-sm"></th><th>Rcvd.Wgt<input class="form-control input-sm"></th> <th>Bal.Qty<input class="form-control input-sm"></th> </tr>');	
				result+='<tr value=""><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][8]+'" value="'+res[i][7]+'" oldrcvdwgt="'+res[i][12]+'">'
		        +'<span></span></label></td><td style="display:none">'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][9]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
					+'<td><input type="number" class="form-control issqtyinbalbom" value=""></td><td><input type="number" class="form-control isswgtinbalbom" value=""></td><td>'+res[i][6]+'</td></tr>';
				
			}
				}	
		}
	if(prcsType!='BalBomMaking'){
	if(currentChager=='cmycdOfJobOrd'||currentChager=='processTypeOfJobOrd'){
		$("#tghtDtOfJobOrd").html([...trgtDt]).selectpicker('refresh');
		$("#pdtdptCdOfJobOrd").html([...pdtDept]).selectpicker('refresh');
		$("#ctgyTypOfJobOrd").html([...pdtCategry]).selectpicker('refresh');
		$("#pdtTypOfJobOrd").html([...pdtType]).selectpicker('refresh');
		$("#ordNoOfJobOrd").html([...ordNo]).selectpicker('refresh');
	}
	else if(currentChager=='tghtDtOfJobOrd'){
		$("#pdtdptCdOfJobOrd").html([...pdtDept]).selectpicker('refresh');
		$("#ctgyTypOfJobOrd").html([...pdtCategry]).selectpicker('refresh');
		$("#pdtTypOfJobOrd").html([...pdtType]).selectpicker('refresh');
		$("#ordNoOfJobOrd").html([...ordNo]).selectpicker('refresh');
	}
	else if(currentChager=='pdtdptCdOfJobOrd'){
		$("#ctgyTypOfJobOrd").html([...pdtCategry]).selectpicker('refresh');
		$("#pdtTypOfJobOrd").html([...pdtType]).selectpicker('refresh');
		$("#ordNoOfJobOrd").html([...ordNo]).selectpicker('refresh');
	}
	else if(currentChager=='ctgyTypOfJobOrd'){
		$("#pdtTypOfJobOrd").html([...pdtType]).selectpicker('refresh');
		$("#ordNoOfJobOrd").html([...ordNo]).selectpicker('refresh');	
	}
	else if(currentChager=='pdtTypOfJobOrd'){
		$("#ordNoOfJobOrd").html([...ordNo]).selectpicker('refresh');	
	}
	}
	else{
		$("#tghtDtOfJobOrd").html("").selectpicker('refresh');
		$("#pdtdptCdOfJobOrd").html("").selectpicker('refresh');
		$("#ctgyTypOfJobOrd").html("").selectpicker('refresh');
		$("#pdtTypOfJobOrd").html("").selectpicker('refresh');
		$("#ordNoOfJobOrd").html("").selectpicker('refresh');
	}
	$("#myTbodyJob").html(result);
	var table = $('#myTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 6}]
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( ':text', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
	$(function (){
		$(".childCheckBox").on("click",function(){ 
			var sumChkedchkBox=$(".childCheckBox:checked").length;
			var totChkBox=$(".childCheckBox").length;
			if(sumChkedchkBox==totChkBox){
				$(".parentCheckBox")["0"].checked=true;
			}
			else{
				$(".parentCheckBox")["0"].checked=false;
			}
			calSumOfTotJobOrdQty();
		})
	});
}
////////////////////// end ////////////////////////////////////////////////
function saveBeforeJobOrderDet(){
	if($("#processTypeOfJobOrd").val()=='InhouseBomMaking'){
	$("#savesuccessRes").html('<div class="alert alert-info" > Please Wait .... </div>');
	var pdtList=$(".childCheckBox:checked");
	if(pdtList.length){
		var pdtId=new Set();
		pdtList.toArray().forEach(s=>{
			var tr=$(s).closest("tr");
			pdtId.add("'"+tr.find("td:eq(2)").html()+"'")
		});
		var qry='select max(bm_bom_nm) as bmnm,max(bm_bom_wip_typ) as wiptyp,sum(cast (dbm_bom_pcs as float)) as pcs,bm_bom_cd,max(bm_bom_sz) from dgn_bom_mst left join bom_mst on bm_bom_cd=dbm_bom_cd where dbm_dgn_no in ('+[...pdtId].join()+') and dbm_dgn_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null) group by bm_bom_cd';
			
		AjaxController.getBomDataByProductId(qry,returnresOfBomByPdtBeforeSave);
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlsrt8"> Select Product List.... </div>');
	$("#hideJobtAlsrt8").fadeOut(4500);	
	}
	}
	else{
		saveJobOrderDet();		
	}
}
function returnresOfBomByPdtBeforeSave(res){
	var result='';
	if(res!=null&&res.length){
		var reslen=res.length;
		for(var i=0;i<reslen;i++){
			if($("#processTypeOfJobOrd").val()=='JobCardMaking'){
		result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
			+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[i][3]+'" checked> <span></span> </label></td>'
			+'<td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value="'+res[i][2]+'"></td></tr>';	
			}
			else{
				if(res[i][1].search(/In House/i)==-1){
				result+='<tr style="display:none;"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
					+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[i][3]+'" style="display:none;" checked> <span></span> </label></td>'
					+'<td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
				else{
					result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
						+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[i][3]+'" checked> <span></span> </label></td>'
						+'<td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
			}
		}
	}
	$("#bomMetalDetailTbody").html(result);
	saveJobOrderDet();
}
///////////////////////////////// save job order hder detail to the data bases ////////////////////
function saveJobOrderDet(){
	var cmyCd=$("#cmycdOfJobOrd").val(),docNo=$("#docNoOfJobOrd").val(),dptCd=$("#dptCdOfJobOrd").val(),chkLength=$(".childCheckBox:checked,.childCheckBoxExst:checked").length,pdtTyp=$("#pdtTypOfJobOrd").val();
	if(cmyCd!=""&&docNo!=""&&dptCd!=""&&chkLength>0){
		var sts=true;
		if($("#ExstJobNoChk").val()!=""){
			var docExstNo=JSON.parse($("#ExstJobNoChk").val());
			if(jQuery.inArray(docNo,docExstNo)>-1){
				sts=false;
			}
		}
		if(sts==true){
			$("#saveBtnOfJobOrd").addClass("disabled");$("#saveBtnOfJobOrd").prop("disabled",true);
			$("#savesuccessRes").html('<div class="alert alert-info" id="hideJobtAlrt8"> Please Wait Saving.... </div>');
			var jobHdrOnly={},jobHdrDtl=[],primOrdId=[];
			$(".childCheckBox:checked").each(function(){
				var trOne=$(this).closest("tr");
				if(pdtTypeInHouse!='BalBomMaking'){
					var ordNO=trOne["0"].cells[1].innerHTML,pdtCd=trOne["0"].cells[2].innerHTML,pdtdptCd=trOne.attr("pdtdptcd"),
				ctgy=trOne["0"].cells[3].innerHTML,ordTyp=trOne["0"].cells[5].innerHTML,
				tgtDt=trOne["0"].cells[6].innerHTML,dgnNO=trOne["0"].cells[7].innerHTML,pdtbatchNo=trOne.attr("pdtbatchno"),
				qty=trOne["0"].cells[8].innerHTML,wgtOfOrd=Number($(this).val()),pdtTyp=$(trOne).find("td:eq(9)").html(),bomCd=trOne.attr("value");
				jobHdrDtl.push({johd_itnl_prcs_sts:'Pending',johd_doc_no:docNo,johd_dpt_cd:dptCd,johd_trgt_dt:tgtDt,johd_ord_typ:ordTyp,johd_ord_no:ordNO,
					johd_ord_wgt:wgtOfOrd,johd_ord_prty:'0',johd_pdt_typ:pdtTyp,johd_pdt_cd:pdtCd,johd_pdt_ctgy:ctgy,johd_dgn_no:dgnNO,
					johd_ord_qty:qty,johd_iss_auth:false,johd_job_sts:true,johd_bom_cd:bomCd,johd_pdt_dpt_cd:pdtdptCd,johd_pdt_btch_no:pdtbatchNo});
				primOrdId.push($(this)["0"].id);
				}
				else{
					var ordNO=trOne["0"].cells[1].innerHTML,wgtOfOrd=trOne["0"].cells[6].innerHTML,balwgt=trOne.find("td:eq(10)").html(),bomcd=$(this).val(),oldisdqty=trOne.find("td:eq(7)").html(),nowisdqty=trOne.find(".issqtyinbalbom").val(),
					primid=$(this).attr("id"),totwgt=trOne.find("td:eq(6)").html(),qty=Number(trOne.find("td:eq(7)").html())+Number(trOne.find(".issqtyinbalbom").val()),
					rcvdBomWgt=(+trOne.find(".isswgtinbalbom").val()||0),oldrcvdBomWgt=(+$(this).attr("oldrcvdwgt"))||0;
					jobHdrDtl.push({johd_pdt_cd:rcvdBomWgt,johd_itnl_prcs_sts:'Pending',johd_doc_no:docNo,johd_dpt_cd:dptCd,johd_trgt_dt:'',johd_ord_typ:'',johd_ord_no:ordNO,
						johd_ord_wgt:wgtOfOrd,johd_ord_prty:oldisdqty,johd_pdt_typ:'',johd_pdt_cd:'',johd_pdt_ctgy:'',johd_dgn_no:'',
						johd_ord_qty:nowisdqty,johd_iss_auth:false,johd_job_sts:true,johd_bom_cd:bomcd});	
					var totrcvdbomwgt=Number(rcvdBomWgt)+Number(oldrcvdBomWgt);
					Bom_Iss_Job_Dtl.push({bij_rcvd_bom_wgt:totrcvdbomwgt,bij_id:primid,bij_bal_wgt:balwgt,bij_bom_cd:bomcd,bij_cmy_cd:cmyCd,bij_dpt_cd:dptCd,bij_iss_wgt:qty,bij_tot_wgt:totwgt,
						bij_job_crd_no:ordNO,bij_bal_prcs_typ:'InhouseBomMaking'});
				}
			})
			
			if($("#ExstJbOrdHdrDtlStr").val()!=""){
			var exstJobHdrDtlsA=JSON.parse($("#ExstJbOrdHdrDtlStr").val());
			$(".childCheckBoxExst:checked").each(function(){
				var id=this.id;
			$.grep(exstJobHdrDtlsA,function(a){
				if(id==a.johd_id){
					jobHdrDtl.push(a);
				}	
			});
				})
			}
			var priId=$("#priIdOfJobHdr").val(),crtId=$("#crtIdOfJobHdr").val(),crtDt=$("#crtDtOfJobHdr").val();
			var totWgt=$("#WgtOfJobOrd").val(),totPrty=$("#totPrtyOfJobOrd").val(),issWgt=$("#IssWgtOfJobOrd").val(),issPrty=$("#IssPrtyOfJobOrd").val();
			jobHdrOnly={joh_id:priId,joh_crt_dt:crtDt,joh_cmy_cd:cmyCd,joh_dpt_cd:dptCd,joh_crt_id:crtId,joh_doc_no:docNo,joh_pdt_typ:'',joh_tot_wgt:totWgt,joh_tot_prty:totPrty,joh_iss_wgt:issWgt,joh_iss_prty:issPrty,joh_sts:true,joh_iss_auth:false};
			if($("#isdauthVal").val()=="1"){
				jobHdrOnly.joh_iss_auth=true;
				$.grep(jobHdrDtl,function(i){
					i.johd_iss_auth=true;
				})
				if(pdtTypeInHouse!='BalBomMaking'){
					var pdtDptsCode=$(".childCheckBox:checked").closest("tr").attr("pdtdptcd")||"121212";
					pdtDptsCode=pdtDptsCode[0];
					$(".childBomCheckBox:checked").toArray().forEach(s=>{
						var tr=$(s).closest("tr");
						var bomcd=$(s).val(),totwgt=tr.find("td:eq(5)").html()||0.0,isswgt=tr.find(".isswgtofbomperjbcd").val()||0.0;
						var balwgt=(Number(totwgt)-Number(isswgt))||0.0;
						if(pdtTypeInHouse=='InhouseBomMaking'){
							var exstBomInHuse=$("#ExstBomDetailbyStr").val();
							if(exstBomInHuse){
								exstBomInHuse=JSON.parse(exstBomInHuse);
							}
							var findedObj=null;
							if(exstBomInHuse){
								findedObj=exstBomInHuse.find(bm=>{
									if(bm.bij_bom_cd==bomcd&&pdtDptsCode==bm.bij_dpt_cd&&cmyCd==bm.bij_cmy_cd){
										return true;
									}
								});
							}
							if(!findedObj)
							{
								Bom_Iss_Job_Dtl.push({bij_bal_wgt:balwgt,bij_bom_cd:bomcd,bij_cmy_cd:cmyCd,bij_dpt_cd:pdtDptsCode,bij_iss_wgt:isswgt,bij_tot_wgt:totwgt,
									bij_job_crd_no:docNo,bij_bal_prcs_typ:pdtTypeInHouse});
							}
							else{
								findedObj.bij_bal_wgt=Number(balwgt)+Number(findedObj.bij_bal_wgt);
								findedObj.bij_iss_wgt=Number(isswgt)+Number(findedObj.bij_iss_wgt);
								findedObj.bij_tot_wgt=Number(totwgt)+Number(findedObj.bij_tot_wgt);
								Bom_Iss_Job_Dtl.push(findedObj);
							}
						}
						else{
						Bom_Iss_Job_Dtl.push({bij_bal_wgt:balwgt,bij_bom_cd:bomcd,bij_cmy_cd:cmyCd,bij_dpt_cd:pdtDptsCode,bij_iss_wgt:isswgt,bij_tot_wgt:totwgt,
							bij_job_crd_no:docNo,bij_bal_prcs_typ:pdtTypeInHouse});
						}
					});
					}
			}
			if(jobisbalorwhat>0)jobHdrOnly.joh_iss_pdng='Not Complete';
			else jobHdrOnly.joh_iss_pdng='Completed';
			jobHdrOnly.joh_mold_typ=$("#moldtyppOfJbcrd").val();
			jobHdrOnly.joh_intf_prcs_sts="Pending";
			AjaxController.saveJobOrderHdrDetilinAjax(JSON.stringify(jobHdrOnly),JSON.stringify(jobHdrDtl),primOrdId,"",[],rtnResOfSucSave);
			function rtnResOfSucSave(res){
				if(res=="success"){
				window.location.href="joborder.mm";
				}
			}
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt8"> Entered Document No Alredy Present </div>');$("#hideJobtAlrt8").fadeOut(3000);		
		}
	}
	else{
		if(cmyCd==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt23"> Select Company</div>');$("#hideJobtAlrt23").fadeOut(3000);
			}
	else if(docNo==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt2"> Enter Document No </div>');$("#hideJobtAlrt2").fadeOut(3000);
		}
		else if(dptCd==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt3"> Select DepartMent </div>');$("#hideJobtAlrt3").fadeOut(3000);	
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt4"> Select Records </div>');$("#hideJobtAlrt4").fadeOut(3000);
		}
	}
}
////////////////////////// end ///////////////////////////////////////////////////////////

/////////////////////// del Exsit Edit job OrdHder Detail In NonAuth ///////////////////////////
function delExistJobHdrDetailRecInDb(ths){
	var cmyCd=$("#cmycdOfJobOrd").val(),docNo=$("#docNoOfJobOrd").val(),dptCd=$("#dptCdOfJobOrd").val();
	if($(".childCheckBoxExst:checked").length>0){
		$(ths).addClass("disabled");
		$("#savesuccessRes").html('<div class="alert alert-info" id="hideJobtAlrtEs14"> Please Wait Deleting ...</div>');
	var primary=[];
	$(".childCheckBoxExst:checked").each(function(){
		primary.push($(this)["0"].id);$(this).closest("tr").css("background-color","orangered");
	});
	var rcvdWgt=0,rcvdPrty=0;
	$(".childCheckBoxExst").not(":checked").each(function(){
		rcvdWgt+=Number($(this).val())!=0?Number($($(this).closest("tr")["0"].cells[8]).html())*Number($(this).val()):Number($($(this).closest("tr")["0"].cells[8]).html());
	});
	$("#WgtOfJobOrd").val(rcvdWgt.toFixed(2));
	var priId=$("#priIdOfJobHdr").val(),crtId=$("#crtIdOfJobHdr").val(),crtDt=$("#crtDtOfJobHdr").val();
	var docNo=$("#docNoOfJobOrd").val(),dptCd=$("#dptCdOfJobOrd").val(),pdtTyp=$("#pdtTypOfJobOrd").val();
	var totWgt=$("#WgtOfJobOrd").val(),totPrty=$("#totPrtyOfJobOrd").val(),issWgt=$("#IssWgtOfJobOrd").val(),issPrty=$("#IssPrtyOfJobOrd").val();
	var jobHdrOnly={joh_id:priId,joh_crt_dt:crtDt,joh_cmy_cd:cmyCd,joh_dpt_cd:dptCd,joh_crt_id:crtId,joh_doc_no:docNo,joh_pdt_typ:'',joh_tot_wgt:totWgt,joh_tot_prty:totPrty,joh_iss_wgt:issWgt,joh_iss_prty:issPrty,joh_sts:true,joh_iss_auth:false};
	AjaxController.delExistJobHdrDetailRecAjax(primary,JSON.stringify(jobHdrOnly),retDelResOfJobOrd);
	function retDelResOfJobOrd(res){
		if(res=="success"){
			$(".childCheckBoxExst:checked").each(function(){
				$(this).closest("tr").remove();
			});	
			$("#hideJobtAlrtEs14").fadeOut(2000);	
		}
	}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrtEs4"> Select Exist Records </div>');$("#hideJobtAlrtEs4").fadeOut(3000);	
	}
}
///////////////////////  end  //////////////////////////////////////////////////////////////////

$(function(){
var processTypeOfJobOrd=$("#processTypeOfJobOrd").attr("selector");	
if(processTypeOfJobOrd=='BalBomMaking'){
	$("#myTbodyJobExsit tr").toArray().forEach(s=>{
		var tot=Number($(s).find("td:eq(6)").html()),oldisdqty=Number($(s).find("td:eq(7)").html()),nowisdqty=Number($(s).find("td:eq(8)").html());
		var bal=tot-(oldisdqty+nowisdqty);
		$(s).find("td:eq(10)").html(bal);
		
	})
}
else if(processTypeOfJobOrd=='BalanceJobCardMaking'){
	$("#myTbodyJobExsit tr").toArray().forEach(s=>{
		var tot=Number($(s).find("td:eq(6)").html()),oldisdqty=Number($(s).find("td:eq(7)").html()),nowisdqty=Number($(s).find("td:eq(8)").html());
		var bal=tot-(oldisdqty+nowisdqty);
		$(s).find("td:eq(10)").html(bal);
			
		})
}
})
//////////////////////////  new Changes //////////////

$(function(){
	$("#myTbodyJob").delegate(".isuedstkWgtOfJobCd","keyup change",function(){
		var stkWgt=$(this).closest("tr").find(".stkWgtOfJobCd").html();
		var isedStkWgt=$(this).closest("tr").find(".isuedstkWgtOfJobCd").val();
		if(Number(stkWgt)<Number(isedStkWgt)){
			$(this).closest("tr").find(".isuedstkWgtOfJobCd").val(stkWgt);
		}
		calSumOfTotJobOrdQty();
	});
})

$("#reqrdBomDtals").on("click",function(){
	getReequiredBoms();
});


function getReequiredBoms(){
	
	var pdtList=$(".childCheckBox:checked");
	if(pdtList.length){
		var pdtId=new Set();
		pdtList.toArray().forEach(s=>{
			var tr=$(s).closest("tr");
			pdtId.add("'"+tr.find("td:eq(2)").html()+"'")
		});
		var qry='select max(bm_bom_nm) as bmnm,max(bm_bom_wip_typ) as wiptyp,sum(cast (dbm_bom_pcs as float)) as pcs,bm_bom_cd,max(bm_bom_sz),max(bm_bom_typ) as bmTy from dgn_bom_mst left join bom_mst on bm_bom_cd=dbm_bom_cd where dbm_dgn_no in ('+[...pdtId].join()+') and dbm_dgn_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null) group by bm_bom_cd';
			
		AjaxController.getBomDataByProductId(qry,returnresOfBomByPdt);
	}
	else{
		$("#reqrdBomDtals").removeClass('btn-primary').addClass('btn-danger').html('Select Item From Records');
		setTimeout(()=>{
			$("#reqrdBomDtals").removeClass('btn-danger').addClass('btn-primary').html('Pdts.Required Bom Detail');	
		},2500);
	}
}
function returnresOfBomByPdt(res){
	var result='';var table = $('#myBomTable').DataTable().clear();table.destroy();
	if(res!=null&&res.length){
		var reslen=res.length;
		for(var i=0;i<reslen;i++){
			if($("#processTypeOfJobOrd").val()=='JobCardMaking'){
		result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
			+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[i][3]+'" checked> <span></span> </label></td>'
			+'<td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value="'+res[i][2]+'"></td></tr>';	
			}
			else{
				if(res[i][1].search(/In House/i)==-1){
				result+='<tr style="display:none;"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
					+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[i][3]+'" style="display:none;" checked> <span></span> </label></td>'
					+'<td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
				else{
					result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
						+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[i][3]+'" checked> <span></span> </label></td>'
						+'<td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][5]+'</td><td>'+res[i][4]+'</td><td>'+res[i][2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
			}
		}
	}
	$("#bomMetalDetailTbody").html(result);
	var table = $('#myBomTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   "aaSorting": [[1, "asc"]]
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( ':text', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
	$("#myModal").modal('show');
}



$("#myTbodyJob").delegate(".issqtyinbalbom","keyup",function(){
	var tr=$(this).closest("tr"),balwgt=0;
	var totisswgt=Number(tr.find("td:eq(6)").html())||0,altyisdqty=Number(tr.find("td:eq(7)").html())||0,issqty=Number(tr.find(".issqtyinbalbom").val())||0;
	balwgt=(totisswgt)-(issqty+altyisdqty);
		tr.find("td:eq(10)").html(balwgt);
	 calSumOfTotJobOrdQty();
});

$("#myTbodyJob").delegate(".isswgtinbalbom","keyup",function(){
	var tr=$(this).closest("tr"),balwgt=0;
	var qty=0,bmObj=BomDetail?BomDetail["RL"+tr.find(".childCheckBox").val()]:null;
	if(bmObj){
		qty=(+bmObj.bom_qty||1)*(+bmObj.bom_wgt||0);
		qty=Math.round(($(this).val()/qty)||0);
		tr.find(".issqtyinbalbom").val(qty)
	}
	var totisswgt=Number(tr.find("td:eq(6)").html())||0,altyisdqty=Number(tr.find("td:eq(7)").html())||0,issqty=Number(tr.find(".issqtyinbalbom").val())||0;
	balwgt=(totisswgt)-(issqty+altyisdqty);
		tr.find("td:eq(10)").html(balwgt);
	 calSumOfTotJobOrdQty();
});

$("#reqrdStnDtals").on("click",function(){
	getReequiredStone();
});
var PdtWithQty;
function getReequiredStone(){
	var jbcrd=$("#docNoOfJobOrd").val(),cmyCd=$("#cmycdOfJobOrd").val();
	var pdtList=$("tr:has(.childCheckBoxExst:checked)");
	if(pdtList.length){
		var pdtId=new Set();
		PdtWithQty= pdtList.toArray().reduce((old,tr)=>{
			var pdtCd=$("td:eq(2)",tr).text()||'';
			pdtId.add("'"+pdtCd+"'");
			old[pdtCd]=(old[pdtCd]||0)+1;
			return old;
		},{});
		var qry="select max(sm_stn_nm) as bmnm,max(sm_stn_clr) as wiptyp,max(sm_stn_shpe) as shp,max(sm_stn_sz) as sz,sum(cast (dsm_stn_pcs as float)) as pcs,sm_stn_cd,dsm_dgn_no,(select top 1 concat(jcsd_isd_stn,'-',jcsd_iss_auth) from job_card_stn_dtls where jcsd_jbcd_no='"+jbcrd+"' and jcsd_stn_cd=sm_stn_cd)as stkqty,(select sum(ss_stn_qty) from stone_stk where sm_stn_cd=ss_stn_cd and ss_cmy_cd='"+cmyCd+"' ) as exstStk from dgn_stn_mst left join stn_mst on sm_stn_cd=dsm_stn_cd where dsm_dgn_no in ("+[...pdtId].join()+") and (sm_stn_sts=1 or sm_stn_sts is null) group by sm_stn_cd,dsm_dgn_no";
			
		AjaxController.getBomDataByProductId(qry,returnresOfStoneByPdt);
	}
	else{
		$("#reqrdStnDtals").removeClass('btn-primary').addClass('btn-danger').html('Select Item From Records');
		setTimeout(()=>{
			$("#reqrdStnDtals").removeClass('btn-danger').addClass('btn-primary').html('REQUIRED NON_GOLD');	
		},2500);
	}
}


function returnresOfStoneByPdt(res){

	var result='';var table = $('#myStoneTable').DataTable().clear();table.destroy();
	if(res!=null&&res.length){
		var reslen=res.length;
		$(".parentbomCheckBox").prop("checked",true);
		var  mp=new Map(),bomqty={};
		for(var i=0;i<reslen;i++){
			bomqty[res[i][5]]=(bomqty[res[i][5]]||0)+(+PdtWithQty[res[i][6]]||0)*(+res[i][4]||0);
			mp.set(res[i][5],res[i]);
				}
		var i=0;
		mp.forEach((res,key)=>{
			res[4]=bomqty[res[5]];
			[stk,isd]=(res[7]||'').split("-");
			res[8]=res[8]||0;
			stk=(+stk||0);isd=(isd==(+1))?"disabled":"";var bal=((+res[4]||0)-stk);
			result+="<tr><td><label class='mt-checkbox mt-checkbox-single mt-checkbox-outline'> <input type='checkbox' class='checkboxes childStnCheckBox' value='1'> <span></span> </label></td><td>"+res[5]+"</td><td>"+res[0]+"</td><td>"+res[1]+"</td><td>"+res[2]+"</td><td>"+res[3]+"</td><td>"+res[4]+"</td><td old='"+stk+"'>"+stk+"</td><td><input type='number' title='Exst_Stk-["+res[8]+"]' data-toggle='tooltip' "+isd+" class='form-control isdQtyStn' vlaue=''></td><td>"+bal+"</td></tr>";	
		});
	}
	$("#stnMetalDetailTbody").html(result);
	$(".isdQtyStn").tooltip();
	var table = $('#myStoneTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   "aaSorting": [[1, "asc"]],
		  
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( ':text', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
	$("#myModalStone").modal('show');

}

$("#stnMetalDetailTbody").delegate(".isdQtyStn","keyup",function(){
	var tr=$(this).closest("tr");var oldstk=$("td:eq(7)",tr).attr("old")||0,reqqty=(+$("td:eq(6)",tr).text()||0);
	var tot=(+oldstk||0)+(+this.value),balqty=(reqqty-tot);
	$("td:eq(7)",tr).html(tot);	$("td:eq(9)",tr).html(balqty);
});

$(function (){
	$("#myStoneTable").delegate(".childStnCheckBox","click",function(){ 
	var chkedChld=$(".childStnCheckBox:not(:checked)").length;
	$(".parentCheckBoxStn")["0"].checked=!(chkedChld);
	});
});
$(".parentCheckBoxStn").click(function(){
	$(".childStnCheckBox").prop("checked",this.checked);
});

$("#SaveInIsuedStn,#SaveAuthInIsuedStn").click(function(){
	var isAuth=(this.id=='SaveAuthInIsuedStn')?1:0;
	var qryUpdation=[];var jbcrd=$("#docNoOfJobOrd").val(),
	cmyCd=$("#cmycdOfJobOrd").val(),today=$("<input/>").datepicker("setDate",new Date()).val(),dptCd=$("#dptCdOfJobOrd").val();
	$("tr:has(.childStnCheckBox:checked)").toArray().forEach(function(tr){
		tr=$(tr);var stncd=$("td:eq(1)",tr).text(),reqqty=(+$("td:eq(6)",tr).text()||0),stkQty=(+$("td:eq(7)",tr).text()||0);
		blaQty=(+$("td:eq(9)",tr).text()||0),isdqty=$(".isdQtyStn",tr).val();
		qryUpdation.push("update stone_stk set ss_stn_qty=(isnull(ss_stn_qty,0)-cast('"+isdqty+"' as float)) where ss_stn_cd='"+stncd+"' and ss_cmy_cd='"+cmyCd+"'")
		qryUpdation.push(" update job_card_stn_dtls set jcsd_isd_stn='"+stkQty+"',jcsd_bal_stn='"+blaQty+"',jcsd_iss_auth="+isAuth+" where  jcsd_jbcd_no='"+jbcrd+"' and jcsd_stn_cd='"+stncd+"' if @@ROWCOUNT=0 insert into job_card_stn_dtls" +
				" ([jcsd_bal_stn] ,[jcsd_cmy_cd] ,[jcsd_dpt_cd] ,[jcsd_isd_dt] ,[jcsd_isd_stn] ,[jcsd_isd_wgt] ,[jcsd_iss_auth] ,[jcsd_jbcd_no] ,[jcsd_rqrd_stn] ,[jcsd_stn_cd]) " +
				" VALUES('"+blaQty+"','"+cmyCd+"','"+dptCd+"','"+today+"','"+stkQty+"','"+0+"',"+isAuth+",'"+jbcrd+"','"+reqqty+"','"+stncd+"')");
	});
	AjaxController.saveStoneDataInJobCard(qryUpdation,(data)=>{
		location.reload();
	});
});