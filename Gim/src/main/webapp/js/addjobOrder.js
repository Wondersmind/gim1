
/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddJobOrd(ths){
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
	$("#bomMetalDetailTbody").html('');
	 calSumOfTotJobOrdQty();
}
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
		$("#bomMetalDetailTbody").html('');
		calSumOfTotJobOrdQty();
	})
});
$(".parentbomCheckBox").click(function(){
	if(this.checked){
		$(".childBomCheckBox:visible").prop("checked",true);
	}
	else{
		$(".childBomCheckBox:visible").prop("checked",false);	
	}
});

$(function (){
	$("#myBomTable").delegate(".childBomCheckBox","click",function(){ 
		var sumChkedchkBox=$(".childBomCheckBox:visible:checked").length;
		var totChkBox=$(".childBomCheckBox:visible").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentbomCheckBox")["0"].checked=true;
		}
		else{
			$(".parentbomCheckBox")["0"].checked=false;
		}
	})
});
function calSumOfTotJobOrdQty(){
	var rcvdWgt=0,srwgt=0,processTypeOfJobOrd=$("#processTypeOfJobOrd").val();
	if(processTypeOfJobOrd=='InhouseBomMaking')
		$(".childCheckBox:checked").each(function(){
			rcvdWgt+=Number($(this).closest("tr").find("td:eq(8)").html());
			srwgt+=Number($(this).closest("tr").find("td:eq(11)").html());
		})
/*	$(".childCheckBox:checked").each(function(){
		rcvdWgt+=Number($(this).val())||0;
	})*/
	/*else if(processTypeOfJobOrd=='JobCardMaking'||processTypeOfJobOrd=='ReJob Card')
		$(".childCheckBox:checked").each(function(){
			rcvdWgt+=Number($(this).closest("tr").find("td:eq(9)").html());
		})*/
		else if(processTypeOfJobOrd=='ReJob Card')
			$(".childCheckBox:checked").each(function(){
				rcvdWgt+=Number($(this).closest("tr").find("td:eq(9)").html());
			})
			else if(processTypeOfJobOrd=='JobCardMaking'){
				var wgt=0;
				$(".childCheckBox:checked").each(function(){
					rcvdWgt+=Number($(this).closest("tr").find("td:eq(9)").html());
					wgt+=Number($(this).closest("tr").find("td:eq(12)").html())||0;
				})
				$("#totPrtyOfJobOrd").val(wgt.toFixed(2));
			}
	else{
		var wgt=0;
		$(".childCheckBox:checked").each(function(){
			rcvdWgt+=Number($(this).closest("tr").find(".issqtyinbalbom").val());
			wgt+=(+$(this).closest("tr").find(".isswgtinbalbom").val()||0);	
		})
		$("#totPrtyOfJobOrd").val(wgt.toFixed(2));
		}
	$("#WgtOfJobOrd").val((+rcvdWgt));
	$("#totPrtyOfJobOrd").val((+srwgt.toFixed(3)));
}
////////////////////////end/////////////////////////////////\

//////////////////////// filter By Job Order //////////////////////////////
var currentChager='';
$(function(){
	$(".treeNoIsdJobCd").hide();
	$(".selectpicker,#tghtDtOfJobOrd,#processTypeOfJobOrd").on("change",function(evt){
		currentChager=evt.target.id;
	if(currentChager=='processTypeOfJobOrd'){
		$("#ordTypOfJobOrd,#ordPrtyOfJobOrd").html("").selectpicker('refresh');
		$("#tghtDtOfJobOrd,#TreeNoOfJobOrd").html("").selectpicker('refresh');
		$("#pdtdptCdOfJobOrd,#waxNoOfJobOrd").html("").selectpicker('refresh');
		$("#ctgyTypOfJobOrd").html("").selectpicker('refresh');
		$("#pdtTypOfJobOrd").html("").selectpicker('refresh');
		$("#ordNoOfJobOrd").html("").selectpicker('refresh');
	}	
	var tgtDt=$("#tghtDtOfJobOrd").val(),ctgyTy=$("#ctgyTypOfJobOrd").val()||[],ordNo=$("#ordNoOfJobOrd").val()||[],pdtTyp=$("#pdtTypOfJobOrd").val()||[],
	pdtdptCd=$("#pdtdptCdOfJobOrd").val()||[],cmycd=$("#cmycdOfJobOrd").val(),waxNo=$("#waxNoOfJobOrd").val()||[],prcsType=$("#processTypeOfJobOrd").val(),
	moldtyppOfJbcrd=$("#moldtyppOfJbcrd").val(),treeno=$("#TreeNoOfJobOrd").val()||[],orderTyp=$("#ordTypOfJobOrd").val()||[],
	ordPrtyOfJobOrd=$("#ordPrtyOfJobOrd").val()||"";	
	if(this.id=='processTypeOfJobOrd'){
			if(prcsType!='BalBomMaking'){
				(prcsType=='JobCardMaking')?$(".treeNoIsdJobCd").show():$(".treeNoIsdJobCd").hide();
				$(".bomIssuedInDirectJob").show();
			}else{
				$(".bomIssuedInDirectJob,.treeNoIsdJobCd").hide();	
			}
		}
	moldtyppOfJbcrd=moldtyppOfJbcrd?moldtyppOfJbcrd.length>1?[]:moldtyppOfJbcrd:[];
	treeno.length&&treeno.forEach(s=>"'"+s+"'");	
	if(ctgyTy.length)ctgyTy=ctgyTy.map(s=>"'"+s+"'");
		if(ordNo.length)ordNo=ordNo.map(s=>"'"+s+"'");
		if(pdtTyp.length)pdtTyp=pdtTyp.map(s=>"'"+s+"'");
		if(pdtdptCd.length)pdtdptCd=pdtdptCd.map(s=>"'"+s+"'");
		if(waxNo.length)waxNo=waxNo.map(s=>"'"+s+"'");
		if(orderTyp.length)orderTyp=orderTyp.map(s=>"'"+s+"'");
		var dptjb=$("#dptCdOfJobOrd").val()||'',prtyFilter=ordPrtyOfJobOrd?" and bij_pdt_prty='"+ordPrtyOfJobOrd+"' ":"";
		var typwisedpt=($("#dptCdOfJobOrd option:selected").text().match(/gc/gi))?'bm_bom_wip_typ not like \'%IN HOUSE%\' and ':' bij_dpt_cd=\''+dptjb+'\' and bm_bom_wip_typ like \'%IN HOUSE%\' and';
		var qry='select bij_job_crd_no,bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bij_tot_wgt,bij_iss_wgt,bij_bal_wgt,bij_bom_cd,bij_id,bm_bom_typ,bm_bom_wgt,bm_bom_qty,bij_rcvd_bom_wgt,isnull(bij_pdt_prty,\'\') from bom_iss_job_dtl left join bom_mst on bm_bom_cd=bij_bom_cd and bm_cmy_cd=bij_cmy_cd where cast(bij_bal_wgt as float)>0 and bij_bal_prcs_typ=\'InhouseBomMaking\' and bij_cmy_cd=\''+cmycd+'\' '+prtyFilter+' and  '+typwisedpt+' (bm_bom_sts=1 or bm_bom_sts is null)';
		if(prcsType)
		AjaxController.filterJobOrderAddInAjax(ctgyTy.join(),ordNo.join(),pdtTyp.join(),pdtdptCd.join(),tgtDt,cmycd,waxNo.join(),prcsType,qry,moldtyppOfJbcrd.join(),treeno.join(),orderTyp.join(),ordPrtyOfJobOrd,returnResOfFilterJobOrd);
	});
});
var BomDetail=[];
function returnResOfFilterJobOrd(res){
	var result='',prcsType=$("#processTypeOfJobOrd").val();var table = $('#myTable').DataTable().clear();table.destroy();
	var pdtDept=new Set(),prty=new Set(['<option value="">Select Prty</option>']),treedoc=new Set(),orderTyp=new Set(),pdtCategry=new Set(),pdtType=new Set(),waxNo=new Set(),ordNo=new Set(),trgtDt=new Set(['<option value="">Select TargetDate</option>']);
	BomDetail=[];
	var valu='<option>NILL</option>';
	if($("#TreeNoOfJobOrd").val()){
		$("#TreeNoOfJobOrd option:selected").toArray().forEach((s,i)=>{
			if($("#TreeNoOfJobOrd").val().length==1)
			valu+="<option selected>"+$(s).text()+"</option>";
			else
			valu+="<option>"+$(s).text()+"</option>";	
			});
	}
	if(res!=null){
		for(var i=0;i<res.length;i++){
			if(res[i][15]){
			treeList.forEach(s=>{
				if(s[1]==res[i][15]&&$.inArray(s[0],treeAlwJobList)>-1){
					treedoc.add('<option value="'+s[1]+'" data-subtext="'+s[1]+'">'+s[0]+'</option>');
					}
			});
			}
			orderTyp.add('<option value="'+res[i][4]+'">'+res[i][4]+'</option>');
			trgtDt.add('<option value="'+res[i][5]+'">'+res[i][5]+'</option>');
			pdtDept.add('<option value="'+res[i][11]+'">'+res[i][3]+'</option>');
			pdtCategry.add('<option value="'+res[i][2]+'">'+res[i][2]+'</option>');
			pdtType.add('<option value="'+res[i][10]+'">'+res[i][10]+'</option>');
			ordNo.add('<option value="'+res[i][0]+'">'+res[i][0]+'</option>');
			if(res[i][13])
			waxNo.add('<option value="'+res[i][13]+'">'+res[i][13]+'</option>');
			if(prcsType=='InhouseBomMaking'){
				var style=getPurityColor(res[i][14]);
				prty.add('<option value="'+res[i][14]+'">'+res[i][14]+'</option>')
				$("#thOfJobCard").html('<tr > <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)"> <span></span> </label> </th> <th>J.O No<input class="form-control input-sm"></th> <th>Pdt.cd<input class="form-control input-sm"></th> <th>Ctgy<input class="form-control input-sm"></th> <th>Dept<input class="form-control input-sm"></th> <th>Ord.Typ<input class="form-control input-sm"></th> <th>Tgt.Dt<input class="form-control input-sm"></th> <th>Dgn.No<input class="form-control input-sm"></th> <th>Qty<input class="form-control input-sm"></th> <th>Pdt.Typ<input class="form-control input-sm"></th><th>Prty<input class="form-control input-sm"></th><th>Std.Wgt<input class="form-control input-sm"></th> </tr>');	
				result+='<tr '+style+' value="" pdtdptcd="'+res[i][11]+'" pdtbatchno="'+res[i][12]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][9]+'" value="'+res[i][7]+'">'
		        +'<span></span></label></td><td>'+res[i][0]+'</td><td class="pdtInfo">'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
					+'<td>'+res[i][6]+'</td><td>'+res[i][7]+'</td><td>'+res[i][10]+'</td><td class="prtyOfIsdJobCrd">'+res[i][14]+'</td><td>'+res[i][8]+'</td></tr>';
			}else if(prcsType=='JobCardMaking'||prcsType=='processTypeOfJobOrd'||prcsType=='ReJob Card'){
				var option="",buton="";res[i][16]=res[i][16]||'';
				if(res[i][14]){
					option="<option>NILL</option>";
					buton='';
				}
				else{
				option=valu;
				buton='<button onclick="canceldamgedPdt(\''+res[i][9]+'\',this)" type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Do You Want Cancel This Order"><i class="fa fa-ban"></i></button>';
				};
				prty.add('<option value="'+res[i][17]+'">'+res[i][17]+'</option>')
						var style=getPurityColor(res[i][17]);
				
				if(prcsType=='ReJob Card'){
					$("#thOfJobCard").html('<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)"> <span></span> </label> </th> <th>J.O No<input class="form-control input-sm"></th> <th>Pdt.cd<input class="form-control input-sm"></th><th>Tree / Nill<input class="form-control input-sm"></th> <th>Ctgy<input class="form-control input-sm"></th> <th>Dept<input class="form-control input-sm"></th> <th>Ord.Typ<input class="form-control input-sm"></th> <th>Tgt.Dt<input class="form-control input-sm"></th> <th>Dgn.No<input class="form-control input-sm"></th> <th>Qty<input class="form-control input-sm"></th> <th>Pdt.Typ<input class="form-control input-sm"></th><th>Prty<input class="form-control input-sm"></th><th>JOBNO<input class="form-control input-sm"></th><th>Rej.Wt<input class="form-control input-sm"></th><th>Wrk.Nm<input class="form-control input-sm"></th><th>Resion<input class="form-control input-sm"></th><th>Action </tr>');	
					result+='<tr '+style+' value="" jobcartno="'+res[i][18]+'" jobwt="'+res[i][19]+'" pdtdptcd="'+res[i][11]+'" pdtbatchno="'+res[i][12]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][9]+'" value="'+res[i][7]+'">'
					+'<span></span></label></td><td>'+res[i][0]+'</td><td class="pdtInfo mousetitle"  title="'+res[i][16]+'">'+res[i][1]+'</td><td><select class="form-control treeornill '+res[i][14]+'">'+option+'</select></td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
					+'<td>'+res[i][6]+'</td><td>'+res[i][7]+'</td><td>'+res[i][10]+'</td><td class="prtyOfIsdJobCrd">'+res[i][17]+'</td><td>'+res[i][18]+'</td><td>'+res[i][19]+'</td><td>'+res[i][20]+'</td><td>'+res[i][21]+'</td><td>'+buton+'</td><input type="hidden" id="del'+res[i][12]+'" value="'+res[i][8]+'"></input></tr>';
				}else{
					$("#thOfJobCard").html('<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)"> <span></span> </label> </th> <th>J.O No<input class="form-control input-sm"></th> <th>Pdt.cd<input class="form-control input-sm"></th><th>Tree / Nill<input class="form-control input-sm"></th> <th>Ctgy<input class="form-control input-sm"></th> <th>Dept<input class="form-control input-sm"></th> <th>Ord.Typ<input class="form-control input-sm"></th> <th>Tgt.Dt<input class="form-control input-sm"></th> <th>Dgn.No<input class="form-control input-sm"></th> <th>Qty<input class="form-control input-sm"></th> <th>Pdt.Typ<input class="form-control input-sm"></th><th>Prty<input class="form-control input-sm"></th><th>Std.Wgt<input class="form-control input-sm"></th><th>Action </tr>');	
					result+='<tr '+style+' value="" pdtdptcd="'+res[i][11]+'" pdtbatchno="'+res[i][12]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][9]+'" value="'+res[i][7]+'">'
					+'<span></span></label></td><td>'+res[i][0]+'</td><td class="pdtInfo mousetitle"  title="'+res[i][16]+'">'+res[i][1]+'</td><td><select class="form-control treeornill '+res[i][14]+'">'+option+'</select></td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
					+'<td>'+res[i][6]+'</td><td>'+res[i][7]+'</td><td>'+res[i][10]+'</td><td class="prtyOfIsdJobCrd">'+res[i][17]+'</td><td>'+res[i][8]+'</td><td>'+buton+'</td><input type="hidden" id="del'+res[i][12]+'" value="'+res[i][8]+'"></input></tr>';
				}
			}
			else{
				if(res[i][7])
					BomDetail["RL"+res[i][7]]={bom_wgt:res[i][10],bom_qty:res[i][11]};
				prty.add('<option value="'+res[i][13]+'">'+res[i][13]+'</option>');
				res[i][12]=res[i][12]||'';
				var style=getPurityColor(res[i][13]);
				$("#thOfJobCard").html('<tr '+style+'> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)"> <span></span> </label> </th> <th style="display:none">Job.Card.No<input class="form-control input-sm"></th> <th>Bom.Nm<input class="form-control input-sm"></th> <th>Bom.Sz<input class="form-control input-sm"></th> <th>BomWrk.Typ<input class="form-control input-sm"></th><th>Bom.Typ<input class="form-control input-sm"></th> <th>Req.Qty<input class="form-control input-sm"></th> <th>Stk.Qty<input class="form-control input-sm"></th> <th>Rcvd.Qty<input class="form-control input-sm"></th><th>Rcvd.Wgt<input class="form-control input-sm"></th> <th>Bal.Qty<input class="form-control input-sm"></th><th>Prty<input class="form-control input-sm"></th> </tr>');	
				result+='<tr value=""><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][8]+'" value="'+res[i][7]+'"  oldrcvdwgt="'+res[i][12]+'">'
		        +'<span></span></label></td><td style="display:none">'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][9]+'</td><td>'+res[i][4]+'</td><td>'+res[i][5]+'</td>'
					+'<td><input type="number" class="form-control issqtyinbalbom" value="'+res[i][4]+'"></td><td><input type="number" class="form-control isswgtinbalbom" value=""></td><td>0</td><td>'+res[i][13]+'</td></tr>';
				
			}
				}	
		}
	if(prcsType!='BalBomMaking'){
		$("#tghtDtOfJobOrd").val()||$("#tghtDtOfJobOrd").html([...trgtDt]).selectpicker('refresh');
		$("#pdtdptCdOfJobOrd").val()||$("#pdtdptCdOfJobOrd").html([...pdtDept]).selectpicker('refresh');
		$("#ctgyTypOfJobOrd").val()||$("#ctgyTypOfJobOrd").html([...pdtCategry]).selectpicker('refresh');
		$("#pdtTypOfJobOrd").val()||$("#pdtTypOfJobOrd").html([...pdtType]).selectpicker('refresh');
		$("#ordNoOfJobOrd").val()||$("#ordNoOfJobOrd").html([...ordNo]).selectpicker('refresh');
		$("#waxNoOfJobOrd").val()||$("#waxNoOfJobOrd").html([...waxNo]).selectpicker('refresh');
		$("#TreeNoOfJobOrd").val()||$("#TreeNoOfJobOrd").html([...treedoc]).selectpicker('refresh');
		$("#ordTypOfJobOrd").val()||$("#ordTypOfJobOrd").html([...orderTyp]).selectpicker('refresh');
	}
	else{
		$("#ordTypOfJobOrd").html("").selectpicker('refresh');
		$("#tghtDtOfJobOrd,#TreeNoOfJobOrd").html("").selectpicker('refresh');
		$("#pdtdptCdOfJobOrd,#waxNoOfJobOrd").html("").selectpicker('refresh');
		$("#ctgyTypOfJobOrd").html("").selectpicker('refresh');
		$("#pdtTypOfJobOrd").html("").selectpicker('refresh');
		$("#ordNoOfJobOrd").html("").selectpicker('refresh');
	}
	$("#ordPrtyOfJobOrd").val()||$("#ordPrtyOfJobOrd").html([...prty]).selectpicker('refresh');
	var coldef=(prcsType=='JobCardMaking'||prcsType=='ReJob Card')?[{ type: 'date-dd-mmm-yyyy', targets:7}]:[{ type: 'date-dd-mmm-yyyy', targets: 6}];
	$("#myTbodyJob").html(result);
	var table = $('#myTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   columnDefs:coldef
	});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( ':text', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	        $(".parentCheckBox").prop("checked",false);
	        calSumOfTotJobOrdQty();
	    } );});
	$("[data-toggle]").tooltip();
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
	var cmyCd=$("#cmycdOfJobOrd").val(),dptCd=$("#dptCdOfJobOrd").val();
	if($("#processTypeOfJobOrd").val()!='BalBomMaking'){
	$("#savesuccessRes").html('<div class="alert alert-info" > Please Wait .... </div>');
	var pdtList=$(".childCheckBox:checked");
	if(pdtList.length){
		var pdtId=new Set();
		PdtWithQty= pdtList.toArray().reduce((old,s)=>{
			var tr=$(s).closest("tr");
			var pdtCd=tr.find("td:eq(2)").html()||'';
			pdtId.add("'"+pdtCd+"'");
			old[pdtCd]=(old[pdtCd]||0)+1;
			return old;
		},{});
//		var qry=" select max(bm_bom_nm) as bmnm,max(bm_bom_wip_typ) as wptyp,sum(cast(dbm_bom_pcs as float)) as pcs,max(bm_bom_cd) as cd,max(bm_bom_typ) as typ,max(bm_bom_sz) as sz,(select top 1 bij_iss_wgt from bom_iss_job_dtl where bij_bom_cd=bm_bom_cd and bij_dpt_cd='"+dptCd+"' and bij_cmy_cd='"+cmyCd+"')as stk,max(dbm_dgn_no) as dgn from dgn_bom_mst left join bom_mst on bm_bom_cd=dbm_bom_cd and bm_cmy_cd=dbm_cmy_cd where dbm_cmy_cd='"+cmyCd+"' and dbm_dgn_no in ("+[...pdtId].join()+") and dbm_dgn_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null) group by  bm_bom_cd,dbm_dgn_no";
		var qry=" select max(bm_bom_nm) as bmnm,max(bm_bom_wip_typ) as wptyp,sum(cast(dbm_bom_pcs as float)) as pcs,max(bm_bom_cd) as cd,max(bm_bom_typ) as typ,max(bm_bom_sz) as sz,(select top 1 bij_iss_wgt from bom_iss_job_dtl where bij_bom_cd=bm_bom_cd and bij_dpt_cd='"+dptCd+"' and bij_cmy_cd='"+cmyCd+"')as stk,max(dbm_dgn_no) as dgn,dm_dgn_dpt from dgn_bom_mst left join bom_mst on bm_bom_cd=dbm_bom_cd and bm_cmy_cd=dbm_cmy_cd left join dgn_mst on (dbm_dgn_no=dm_pdt_cd and dm_cmy_cd='"+cmyCd+"') where dbm_cmy_cd='"+cmyCd+"' and dbm_dgn_no in ("+[...pdtId].join()+") and dbm_dgn_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null) group by  bm_bom_cd,dbm_dgn_no,dm_dgn_dpt";
		if(!$.trim($("#bomMetalDetailTbody").html())){
		AjaxController.getBomDataByProductId(qry,returnresOfBomByPdtBeforeSave);
		}
		else{
			if($("#processTypeOfJobOrd").val()=='JobCardMaking'||$("#processTypeOfJobOrd").val()=='ReJob Card')
			{showtreeornill();$("#treenillpopup").modal('show');$("#savesuccessRes").html('')}
				else
				saveJobOrderDet();			
		}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlsrt8"> Select Product List.... </div>');
	$("#hideJobtAlsrt8").fadeOut(4500);	
	}
	}
	else{
		if($("#processTypeOfJobOrd").val()=='JobCardMaking'||$("#processTypeOfJobOrd").val()=='ReJob Card')
			{showtreeornill();$("#treenillpopup").modal('show');$("#savesuccessRes").html('')}
				else
				saveJobOrderDet();			
	}
}

function returnresOfBomByPdtBeforeSave(res){
	var result='';
	if(res!=null&&res.length){
		var reslen=res.length;$(".parentbomCheckBox").prop("checked",true);
		var  mp=new Map(),bomqty={};
		for(var i=0;i<reslen;i++){
			bomqty[res[i][3]+res[i][8]]=(bomqty[res[i][3]+res[i][8]]||0)+(+PdtWithQty[res[i][7]]||0)*(+res[i][2]||0);
			mp.set(res[i][3]+res[i][8],res[i]);
				}
		var i=0;
		mp.forEach((res,key)=>{
			res[2]=bomqty[res[3]+res[8]]
			if($("#processTypeOfJobOrd").val()=='JobCardMaking'||$("#processTypeOfJobOrd").val()=='ReJob Card'){
		result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
			+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[3]+'" checked> <span></span> </label></td>'
			+'<td>'+res[0]+'</td><td>'+res[1]+'</td><td>'+res[5]+'</td><td>'+res[4]+'</td><td>'+res[2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
			}
			else{
				if(res[1].search(/In House/i)==-1){
				result+='<tr id="'+res[8]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
					+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[3]+'" checked> <span></span> </label></td>'
					+'<td>'+res[0]+'</td><td>'+res[1]+'</td><td>'+res[5]+'</td><td>'+res[4]+'</td><td>'+res[2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
				else{
					result+='<tr id="'+res[8]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
						+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[3]+'" checked> <span></span> </label></td>'
						+'<td>'+res[0]+'</td><td>'+res[1]+'</td><td>'+res[5]+'</td><td>'+res[4]+'</td><td>'+res[2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
			}
		});
	}
	$("#bomMetalDetailTbody").html(result);
	if($("#processTypeOfJobOrd").val()=='JobCardMaking')
		{
		if($("#processTypeOfJobOrd").val()=='ReJob Card'){
			if($("#isdauthVal").val()=="1")		saveJobOrderDetAfter();
		}
		else	showtreeornill();$("#treenillpopup").modal('show');$("#savesuccessRes").html('')
		}
		else	saveJobOrderDet();	
}

///////////////////////////////// save job order hder detail to the data bases ////////////////////
function saveJobOrderDet(){
	if($("#isdauthVal").val()=="1"){
		saveJobOrderDetAfter();
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="saveJobOrderDetAfter()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#savesuccessRes").html(" ")\'>No</button></div>');		
	}
}


function saveJobOrderDetAfter(){
	$("#treenillpopup").modal('hide');
	var cmyCd=$("#cmycdOfJobOrd").val(),docDt=$("#docDtOfJobOrd").val(),docNo=$("#docNoOfJobOrd").val(),dptCd=$("#dptCdOfJobOrd").val(),chkLength=$(".childCheckBox:checked").length;
	var jobHdrOnly={},jobHdrDtl=[],tgtDt=$("#tghtDtOfJobOrd").val(),today=$("<input/>").datepicker("setDate",new Date()).val()||'';
	var pdtTypeInHouse=$("#processTypeOfJobOrd").val(),treenoUpdates=[];
	var ordPrty=$("#ordPrtyOfJobOrd").val();	var prtyS=$("#ordPrtyOfJobOrd").val()||'';
	if(docNo!=""&&dptCd!=""&&chkLength>0&&ordPrty){
		AjaxController.checkJobcardNoInDb(docNo,(data)=>{
			if(data&&data.length){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt2"> Entered Document No Already Used..</div>');$("#hideJobtAlrt2").fadeOut(3000);
				}
			else{
				var rejbobcartqty=0;
				$("#saveBtnOfJobOrd").addClass("disabled");$("#saveBtnOfJobOrd").prop("disabled",true);
				$("#savesuccessRes").html('<div class="alert alert-info" id="hideJobtAlrt8"> Please Wait Saving.... </div>');
				var jobHdrOnly={},jobHdrDtl=[],primOrdId=[],Bom_Iss_Job_Dtl=[];
				var BidInsertOrUpdate=[];
				$(".childCheckBox:checked").each(function(){
					var trOne=$(this).closest("tr");
					if(pdtTypeInHouse!='BalBomMaking'){
						if(pdtTypeInHouse=='InhouseBomMaking'){
						var ordNO=trOne["0"].cells[1].innerHTML,pdtCd=trOne["0"].cells[2].innerHTML,pdtdptCd=trOne.attr("pdtdptcd"),
					ctgy=trOne["0"].cells[3].innerHTML,ordTyp=trOne["0"].cells[5].innerHTML,treeornill='',prty=$("td:eq(10)",trOne).html()||'',
					tgtDt=trOne["0"].cells[6].innerHTML,dgnNO=trOne["0"].cells[7].innerHTML,pdtbatchNo=trOne.attr("pdtbatchno"),
					qty=trOne["0"].cells[8].innerHTML,wgtOfOrd=Number($(this).val()),pdtTyp=$(trOne).find("td:eq(9)").html(),bomCd=trOne.attr("value");
						}
						else if(pdtTypeInHouse=='ReJob Card'){
							var ordNO=trOne["0"].cells[1].innerHTML,pdtCd=trOne["0"].cells[2].innerHTML,pdtdptCd=trOne.attr("pdtdptcd"),
							ctgy=trOne["0"].cells[4].innerHTML,ordTyp=trOne["0"].cells[6].innerHTML,treeornill=trOne.find(".treeornill").val(),prty=$("td:eq(11)",trOne).html()||'',
							tgtDt=trOne["0"].cells[7].innerHTML,dgnNO=trOne["0"].cells[8].innerHTML,pdtbatchNo=trOne.attr("pdtbatchno"),
							qty=trOne["0"].cells[9].innerHTML,wgtOfOrd=Number($(this).val()),pdtTyp=$(trOne).find("td:eq(10)").html(),bomCd=trOne.attr("value");
							rejbobcartqty+=Number(trOne.attr("jobwt"));
							BidInsertOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+trOne.attr("jobwt")+" as float)) where stm_stk_trn_typ='FinishedProductReject' and stm_itm_cd='"+trOne.attr("jobcartno")+"' and stm_rcvd_stk_prty='"+prtyS+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' ");
							if(treeornill!='NILL')
							treenoUpdates.push(treeornill);		
						
						}
						else{
							var ordNO=trOne["0"].cells[1].innerHTML,pdtCd=trOne["0"].cells[2].innerHTML,pdtdptCd=trOne.attr("pdtdptcd"),
							ctgy=trOne["0"].cells[4].innerHTML,ordTyp=trOne["0"].cells[6].innerHTML,treeornill=trOne.find(".treeornill").val(),prty=$("td:eq(11)",trOne).html()||'',
							tgtDt=trOne["0"].cells[7].innerHTML,dgnNO=trOne["0"].cells[8].innerHTML,pdtbatchNo=trOne.attr("pdtbatchno"),
							qty=trOne["0"].cells[9].innerHTML,wgtOfOrd=Number($(this).val()),pdtTyp=$(trOne).find("td:eq(10)").html(),bomCd=trOne.attr("value");
							if(treeornill!='NILL')
							treenoUpdates.push(treeornill);		
						}
						var ordPrimId=$(this)["0"].id||0;
						jobHdrDtl.push({johd_cmy_cd:cmyCd,johd_ord_prim_id:ordPrimId,johd_tree_no:treeornill,johd_itnl_prcs_sts:'Pending',johd_doc_no:docNo,johd_dpt_cd:dptCd,johd_trgt_dt:tgtDt,johd_ord_typ:ordTyp,johd_ord_no:ordNO,
						johd_ord_wgt:wgtOfOrd,johd_ord_prty:prty,johd_pdt_typ:pdtTyp,johd_pdt_cd:pdtCd,johd_pdt_ctgy:ctgy,johd_dgn_no:dgnNO,
						johd_ord_qty:qty,johd_iss_auth:false,johd_job_sts:true,johd_bom_cd:bomCd,johd_pdt_dpt_cd:pdtdptCd,johd_pdt_btch_no:pdtbatchNo});
					primOrdId.push($(this)["0"].id);
					}
					else{
						var ordNO=trOne["0"].cells[1].innerHTML,wgtOfOrd=trOne["0"].cells[6].innerHTML,balwgt=trOne.find("td:eq(10)").html(),bomcd=$(this).val(),oldisdqty=trOne.find("td:eq(7)").html(),nowisdqty=trOne.find(".issqtyinbalbom").val(),
						primid=$(this).attr("id"),totwgt=trOne.find("td:eq(6)").html(),qty=Number(trOne.find("td:eq(7)").html())+Number(trOne.find(".issqtyinbalbom").val()),prty=$("td:eq(11)",trOne).html()||'',
						rcvdBomWgt=(+trOne.find(".isswgtinbalbom").val()||0),oldrcvdBomWgt=(+$(this).attr("oldrcvdwgt"))||0;
						jobHdrDtl.push({johd_cmy_cd:cmyCd,johd_pdt_cd:rcvdBomWgt,johd_itnl_prcs_sts:'Pending',johd_doc_no:docNo,johd_dpt_cd:dptCd,johd_trgt_dt:'',johd_ord_typ:'',johd_ord_no:ordNO,
							johd_ord_wgt:wgtOfOrd,johd_ord_prty:prty,johd_pdt_typ:'',johd_pdt_ctgy:'',johd_dgn_no:'',
							johd_ord_qty:nowisdqty,johd_iss_auth:false,johd_job_sts:true,johd_bom_cd:bomcd});	
						var totrcvdbomwgt=Number(rcvdBomWgt)+Number(oldrcvdBomWgt);
						Bom_Iss_Job_Dtl.push({bij_rcvd_bom_wgt:totrcvdbomwgt,bij_id:primid,bij_bal_wgt:balwgt,bij_bom_cd:bomcd,bij_cmy_cd:cmyCd,bij_dpt_cd:dptCd,bij_iss_wgt:qty,bij_tot_wgt:Number(totwgt).toFixed(3),
							bij_job_crd_no:ordNO,bij_bal_prcs_typ:'InhouseBomMaking',bij_pdt_prty:prty});
					}
				})
				var totWgt=$("#WgtOfJobOrd").val(),totPrty=$("#totPrtyOfJobOrd").val(),issWgt=$("#IssWgtOfJobOrd").val()||'',issPrty=$("#IssPrtyOfJobOrd").val()||'';
				jobHdrOnly={joh_doc_no:docNo,joh_doc_dt:docDt,joh_pdt_typ:pdtTypeInHouse,joh_cmy_cd:cmyCd,joh_dpt_cd:dptCd,joh_tot_wgt:Number(totWgt).toFixed(3),joh_tot_prty:totPrty,joh_iss_wgt:issWgt,joh_iss_prty:issPrty,joh_sts:true,joh_iss_auth:false};
				var jobisbalorwhat=0,BidInsertQry="INSERT INTO [dbo].[bom_inhse_dtl] ([bid_bal_prcs_typ] ,[bid_bal_wgt] ,[bid_bom_cd] ,[bid_cmy_cd] ,[bid_dpt_cd] ,[bid_iss_wgt] ,[bid_job_crd_no] ,[bid_rcvd_bom_wgt] ,[bid_tot_wgt]) VALUES ";
				
				if($("#isdauthVal").val()=="1"){
					jobHdrOnly.joh_iss_auth=true;
					$.grep(jobHdrDtl,function(i){
						i.johd_iss_auth=true;
					})
					if(pdtTypeInHouse!='BalBomMaking'){
						var pdtDptsCode="10003";
					$(".childBomCheckBox:checked").toArray().forEach(s=>{
						var tr=$(s).closest("tr");
						pdtDptsCode=tr[0].id;
//						pdtDptsCode=tr[0].attr("pdtdptcd");
						var bomcd=$(s).val(),totwgt=(+tr.find("td:eq(5)").html()||0.0),isswgt=(+tr.find(".isswgtofbomperjbcd").val()||0.0);
						var balwgt=(Number(totwgt)-Number(isswgt))||0.0;
						jobisbalorwhat+=Number(balwgt);
						BidInsertQry+="('InhouseBomMaking','"+balwgt+"','"+bomcd+"','"+cmyCd+"','"+pdtDptsCode+"','"+isswgt+"','"+docNo+"','','"+Number(totwgt).toFixed(3)+"'),";
						if(pdtTypeInHouse=='InhouseBomMaking'){
							BidInsertOrUpdate.push("update bom_iss_job_dtl set bij_bal_wgt=(isnull(bij_bal_wgt,0)+cast('"+balwgt+"' as float))," +
									"bij_iss_wgt=(isnull(bij_iss_wgt,0)+cast('"+isswgt+"' as float)),bij_tot_wgt=(isnull(bij_tot_wgt,0)+cast('"+Number(totwgt).toFixed(3)+"' as float)) where " +
											"bij_bom_cd='"+bomcd+"' and bij_dpt_cd='"+pdtDptsCode+"' and bij_job_crd_no='"+docNo+"' and bij_cmy_cd='"+cmyCd+"' and bij_pdt_prty='"+prtyS+"' if @@ROWCOUNT=0 INSERT INTO [bom_iss_job_dtl] " +
													"([bij_bal_prcs_typ] ,[bij_bal_wgt] ,[bij_bom_cd] ,[bij_cmy_cd] ,[bij_dpt_cd] ,[bij_iss_wgt] ,[bij_job_crd_no] ,[bij_rcvd_bom_wgt] ,[bij_tot_wgt] ,[bij_pdt_prty]) VALUES " +
													"('InhouseBomMaking','"+balwgt+"','"+bomcd+"','"+cmyCd+"','"+pdtDptsCode+"','"+isswgt+"','"+docNo+"','"+0+"','"+Number(totwgt).toFixed(3)+"','"+prtyS+"')");		
							}
						else{	
						Bom_Iss_Job_Dtl.push({bij_bal_wgt:balwgt,bij_bom_cd:bomcd,bij_cmy_cd:cmyCd,bij_dpt_cd:pdtDptsCode,bij_iss_wgt:isswgt,bij_tot_wgt:Number(totwgt).toFixed(3),
							bij_job_crd_no:docNo,bij_bal_prcs_typ:'JobCardMaking',bij_pdt_prty:prtyS});
						if(+isswgt){
						BidInsertOrUpdate.push(" update bom_iss_job_dtl set bij_iss_wgt=(cast(bij_iss_wgt as float)-cast("+isswgt+" as float)) where bij_bal_prcs_typ='InhouseBomMaking'" +
								" and bij_bom_cd='"+bomcd+"' and bij_pdt_prty='"+prtyS+"' and bij_dpt_cd='"+dptCd+"' and bij_cmy_cd='"+cmyCd+"' ");
						}
						}
					});
					}
				}
//				if(jobisbalorwhat>0)jobHdrOnly.joh_iss_pdng='Completed';
//				else jobHdrOnly.joh_iss_pdng='Not Complete';
				jobHdrOnly.joh_iss_pdng='Not Complete';
				var moldtyppOfJbcrd=$("#moldtyppOfJbcrd").val()||[];
				jobHdrOnly.joh_mold_typ=moldtyppOfJbcrd.join();
				jobHdrOnly.joh_intf_prcs_sts="Pending";
				if(pdtTypeInHouse=='InhouseBomMaking'&&$(".childBomCheckBox:checked").length){
					BidInsertOrUpdate.push(BidInsertQry.slice(0,-1));
				}
				if(pdtTypeInHouse=='JobCardMaking'||pdtTypeInHouse=='ReJob Card'){
				var join=treenoUpdates.join()||'';
				var tree1wgt=$("#tree0wgt").val()||'',tree2wgt=$("#tree1wgt").val()||'',tree3wgt=$("#tree2wgt").val()||'',bomWgt=$("#bomWgt").val()||''
				var tree1no=$("#tree0no").html()||'',tree2no=$("#tree1no").html()||'',tree3no=$("#tree2no").html()||'';
				if(pdtTypeInHouse=='ReJob Card') bomWgt=Number(rejbobcartqty).toFixed(3);
				var totwgt=(+tree1wgt)+(+tree2wgt)+(+tree3wgt)+(+bomWgt);
				if(bomWgt){
					BidInsertOrUpdate.push(" insert into itm_mv (im_itm_prty,[im_cmy_cd],[im_crt_dt],[im_dpt_cd],[im_itm_wgt],[im_trn_nmb],[im_trn_typ]) values" +
							"('"+prtyS+"','"+cmyCd+"','"+today+"','"+dptCd+"','"+bomWgt+"','"+docNo+"','BomIssueForJobCard')");
					
					if(pdtTypeInHouse=='JobCardMaking')
						BidInsertOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+bomWgt+" as float)) where stm_stk_trn_typ='BomStock' and stm_rcvd_stk_prty='"+prtyS+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' ");
				}
				if(tree1no){
					BidInsertOrUpdate.push(" insert into itm_mv ([im_cmy_cd],[im_crt_dt],[im_dpt_cd],[im_itm_wgt],[im_trn_nmb],[im_trn_typ],im_itm_cd) values" +
							"('"+cmyCd+"','"+today+"','"+dptCd+"','"+tree1wgt+"','"+docNo+"','TreeWgtIssue','"+tree1no+"')");
					BidInsertOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+tree1wgt+" as float)) where stm_stk_trn_typ='JobCardMaking' and stm_itm_cd='"+tree1no+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' ");
				}
				if(tree2no){
					BidInsertOrUpdate.push(" insert into itm_mv ([im_cmy_cd],[im_crt_dt],[im_dpt_cd],[im_itm_wgt],[im_trn_nmb],[im_trn_typ],im_itm_cd) values" +
							"('"+cmyCd+"','"+today+"','"+dptCd+"','"+tree2wgt+"','"+docNo+"','TreeWgtIssue','"+tree2no+"')");
					BidInsertOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+tree2wgt+" as float)) where stm_stk_trn_typ='JobCardMaking' and stm_itm_cd='"+tree2no+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' ");
				}
				if(tree3no){
					BidInsertOrUpdate.push(" insert into itm_mv ([im_cmy_cd],[im_crt_dt],[im_dpt_cd],[im_itm_wgt],[im_trn_nmb],[im_trn_typ],im_itm_cd) values" +
							"('"+cmyCd+"','"+today+"','"+dptCd+"','"+tree3wgt+"','"+docNo+"','TreeWgtIssue','"+tree3no+"')");
					BidInsertOrUpdate.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+tree3wgt+" as float)) where stm_stk_trn_typ='JobCardMaking' and stm_itm_cd='"+tree3no+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' ");
				}
				if(pdtTypeInHouse!='ReJob Card'){
					BidInsertOrUpdate.push(" INSERT INTO [dbo].[job_card_dtl] ([jcd_bom_wgt] ,[jcd_cmy_cd] ,[jcd_doc_no] ,[jcd_dpt_cd] ,[joh_tot_wgt] ,[joh_tree1_wgt] ,[joh_tree2_wgt] ,[joh_tree3_wgt] ,[joh_wrk_cd],joh_tree1_no,joh_tree2_no,joh_tree3_no,joh_bal_wgt,jcd_pdt_prty) " +
							" VALUES ('"+bomWgt+"','"+cmyCd+"','"+docNo+"','"+dptCd+"','"+Number(totwgt).toFixed(3)+"','"+tree1wgt+"','"+tree2wgt+"','"+tree3wgt+"','','"+tree1no+"','"+tree2no+"','"+tree3no+"','"+Number(totwgt).toFixed(3)+"','"+prtyS+"') ")
					BidInsertOrUpdate.push("insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ)" +
							" values ('"+cmyCd+"','"+dptCd+"','"+docNo+"','"+Number(totwgt).toFixed(3)+"','"+today+"','"+adminId+"','JobCardMaked','"+today+"','"+adminId+"','"+prtyS+"','')")
				}else{
					rejbobcartqty=Number(rejbobcartqty).toFixed(3);
					BidInsertOrUpdate.push(" INSERT INTO [dbo].[job_card_dtl] ([jcd_bom_wgt] ,[jcd_cmy_cd] ,[jcd_doc_no] ,[jcd_dpt_cd] ,[joh_tot_wgt] ,[joh_tree1_wgt] ,[joh_tree2_wgt] ,[joh_tree3_wgt] ,[joh_wrk_cd],joh_tree1_no,joh_tree2_no,joh_tree3_no,joh_bal_wgt,jcd_pdt_prty) " +
							" VALUES ('"+bomWgt+"','"+cmyCd+"','"+docNo+"','"+dptCd+"','"+Number(totwgt).toFixed(3)+"','"+tree1wgt+"','"+tree2wgt+"','"+tree3wgt+"','','"+tree1no+"','"+tree2no+"','"+tree3no+"','"+Number(totwgt).toFixed(3)+"','"+prtyS+"') ")
					BidInsertOrUpdate.push("insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ)" +
							" values ('"+cmyCd+"','"+dptCd+"','"+docNo+"','"+rejbobcartqty+"','"+today+"','"+adminId+"','JobCardMaked','"+today+"','"+adminId+"','"+prtyS+"','')")
				}
				}
			/*	alert(JSON.stringify(jobHdrOnly));
				alert(JSON.stringify(jobHdrDtl));
				alert(primOrdId);
				alert(JSON.stringify(Bom_Iss_Job_Dtl));
				alert(BidInsertOrUpdate);*/
				
				AjaxController.saveJobOrderHdrDetilinAjax(JSON.stringify(jobHdrOnly),JSON.stringify(jobHdrDtl),primOrdId,JSON.stringify(Bom_Iss_Job_Dtl),BidInsertOrUpdate,rtnResOfSucSave);
			}
		});
		function rtnResOfSucSave(res){
			if(res=="success"){
			window.location.href="joborder.mm";
			}
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
		else if(!ordPrty){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt3"> Select Purity </div>');$("#hideJobtAlrt3").fadeOut(3000);
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideJobtAlrt4"> Select Records </div>');$("#hideJobtAlrt4").fadeOut(3000);
		}
	}
}
////////////////////////// end ///////////////////////////////////////////////////////////
$(function(){
	$("#myTbodyJob").delegate(".isuedstkWgtOfJobCd","keyup change",function(){
		var stkWgt=$(this).closest("tr").find(".stkWgtOfJobCd").html();
		var isedStkWgt=$(this).closest("tr").find(".isuedstkWgtOfJobCd").val();
		if(Number(stkWgt)<Number(isedStkWgt)){
			$(this).closest("tr").find(".isuedstkWgtOfJobCd").val(stkWgt);
		}
		calSumOfTotJobOrdQty();
	});
});


$("#reqrdBomDtals").on("click",function(){
	getReequiredBoms();
});

var PdtWithQty;
function getReequiredBoms(){
	var cmyCd=$("#cmycdOfJobOrd").val(),dptCd=$("#dptCdOfJobOrd").val();
	var pdtList=$(".childCheckBox:checked");
	if(pdtList.length){
		var pdtId=new Set();
		PdtWithQty= pdtList.toArray().reduce((old,s)=>{
			var tr=$(s).closest("tr");
			var pdtCd=tr.find("td:eq(2)").html()||'';
			pdtId.add("'"+pdtCd+"'");
			old[pdtCd]=(old[pdtCd]||0)+1;
			return old;
		},{});
//		var qry=" select max(bm_bom_nm) as bmnm,max(bm_bom_wip_typ) as wptyp,sum(cast(dbm_bom_pcs as float)) as pcs,max(bm_bom_cd) as cd,max(bm_bom_typ) as typ,max(bm_bom_sz) as sz,(select top 1 bij_iss_wgt from bom_iss_job_dtl where bij_bom_cd=bm_bom_cd and bij_dpt_cd='"+dptCd+"' and bij_cmy_cd='"+cmyCd+"')as stk,max(dbm_dgn_no) as dgn from dgn_bom_mst left join bom_mst on bm_bom_cd=dbm_bom_cd and bm_cmy_cd=dbm_cmy_cd where dbm_cmy_cd='"+cmyCd+"' and dbm_dgn_no in ("+[...pdtId].join()+") and dbm_dgn_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null) group by  bm_bom_cd,dbm_dgn_no";
		var qry=" select max(bm_bom_nm) as bmnm,max(bm_bom_wip_typ) as wptyp,sum(cast(dbm_bom_pcs as float)) as pcs,max(bm_bom_cd) as cd,max(bm_bom_typ) as typ,max(bm_bom_sz) as sz,(select top 1 bij_iss_wgt from bom_iss_job_dtl where bij_bom_cd=bm_bom_cd and bij_dpt_cd='"+dptCd+"' and bij_cmy_cd='"+cmyCd+"')as stk,max(dbm_dgn_no) as dgn,dm_dgn_dpt from dgn_bom_mst left join bom_mst on bm_bom_cd=dbm_bom_cd and bm_cmy_cd=dbm_cmy_cd left join dgn_mst on (dbm_dgn_no=dm_pdt_cd and dm_cmy_cd='"+cmyCd+"') where dbm_cmy_cd='"+cmyCd+"' and dbm_dgn_no in ("+[...pdtId].join()+") and dbm_dgn_sts=1 and (bm_bom_sts=1 or bm_bom_sts is null) group by  bm_bom_cd,dbm_dgn_no,dm_dgn_dpt";
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
		$(".parentbomCheckBox").prop("checked",true);
		var  mp=new Map(),bomqty={};
		for(var i=0;i<reslen;i++){
			bomqty[res[i][3]]=(bomqty[res[i][3]]||0)+(+PdtWithQty[res[i][7]]||0)*(+res[i][2]||0);
			mp.set(res[i][3],res[i]);
				}
		var i=0;
		mp.forEach((res,key)=>{
			res[2]=bomqty[res[3]];
			if($("#processTypeOfJobOrd").val()=='JobCardMaking'||$("#processTypeOfJobOrd").val()=='ReJob Card'){
				res[6]=res[6]||0;
		result+='<tr id="'+res[8]+'"><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
			+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[3]+'" checked> <span></span> </label></td>'
			+'<td>'+res[0]+'</td><td>'+res[1]+'</td><td>'+res[5]+'</td><td>'+res[4]+'</td><td>'+res[2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" title="ExstStk-('+res[6]+')" value=""></td></tr>';	
			}
			else{
				if(res[1].search(/In House/i)==-1){
				result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
					+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[3]+'" checked> <span></span> </label></td>'
					+'<td>'+res[0]+'</td><td>'+res[1]+'</td><td>'+res[5]+'</td><td>'+res[4]+'</td><td>'+res[2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
				else{
					result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" '
						+'data-original-title="Select All"> <input type="checkbox" class="checkboxes childBomCheckBox" value="'+res[3]+'" checked> <span></span> </label></td>'
						+'<td>'+res[0]+'</td><td>'+res[1]+'</td><td>'+res[5]+'</td><td>'+res[4]+'</td><td>'+res[2]+'</td><td><input type="number" class="form-control isswgtofbomperjbcd" value=""></td></tr>';	
				}
			}
		i++;
		});
	}
	$("#bomMetalDetailTbody").html(result);
	$(".isswgtofbomperjbcd").tooltip();
	var table = $('#myBomTable').DataTable({
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
		qty=(+bmObj.bom_wgt||1)/(+bmObj.bom_qty||1);
		qty=Math.round(($(this).val()/qty)||0);
		tr.find(".issqtyinbalbom").val(qty)
	}
	var totisswgt=Number(tr.find("td:eq(6)").html())||0,altyisdqty=Number(tr.find("td:eq(7)").html())||0,issqty=Number(tr.find(".issqtyinbalbom").val())||0;
	balwgt=(totisswgt)-(issqty+altyisdqty);
		tr.find("td:eq(10)").html(balwgt);
	 calSumOfTotJobOrdQty();
});

function showtreeornill(){
	var trees=$("#myTbodyJob .childCheckBox:checked").toArray().reduce(function(old,ths){
		var data=$(ths).closest("tr").find(".treeornill").val()
		if(data!='NILL')
		old.add(data)
		return old;
	},new Set());
	var html=[...trees].reduce((old,ths,ind)=>{
		if(ind<3)
		old+='<tr><td style=" text-align: right; " id="tree'+ind+'no">'+ths+'</td><td><input type="number" class="form-control"  id="tree'+ind+'wgt"></td></tr> ';
		return old;
	},'');
	$("#treeboxtbody").html(html);
}


function canceldamgedPdt(id,ths){
	var cmyCd=$("#cmycdOfJobOrd").val(),docDt=$("#docDtOfJobOrd").val().split(" ")[0],docNo=$("#docNoOfJobOrd").val(),dptCd=$("#dptCdOfJobOrd").val(),wgt=$("#del"+id).val(),empid=$("#empid").val();
	var prty=$(ths).closest("tr")["0"].cells[11].innerHTML;
	prty=Number(prty).toFixed(2);
	var qry="update ord_hdr_dtl set ohd_iss_ruse='YES',[ohd_crnt_prcs]='',[ohd_crnt_wrk]='',[ohd_crnt_wrk_typ]='',ohd_alw_inhse_bm_mk=0,ohd_is_alw_job_ord=0,ohd_wax_sts='Pending',ohd_job_ord_prcs='Pending',ohd_iss_bom_mk_prcs='Pending' where ohd_id='"+id+"'";
	
	qry+=" "+"update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-isnull((select top 1 cast(fpd_acpt_rjct_wgt as decimal(20,3)) from job_ord_hdr_dtl inner join ord_hdr_dtl on (ohd_ord_jn_no=johd_ord_no and johd_pdt_cd=ohd_ord_pdt_cd) inner join fnsh_pdt_dtl on fpd_pdt_cd=johd_pdt_cd and ohd_ord_jn_no=fpd_jo_no and fpd_pdt_mvd='"+dptCd+"'  and ohd_id='"+id+"' order by fpd_id desc),0))	where stm_rcvd_stk_prty='"+prty+"' and stm_stk_trn_typ='FinishedProductReject'  and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' and stm_itm_cd=(select top 1 fpd_jbcd_no from job_ord_hdr_dtl inner join ord_hdr_dtl on (ohd_ord_jn_no=johd_ord_no and johd_pdt_cd=ohd_ord_pdt_cd) inner join fnsh_pdt_dtl on fpd_pdt_cd=johd_pdt_cd and ohd_ord_jn_no=fpd_jo_no and fpd_pdt_mvd='"+dptCd+"'  and ohd_id='"+id+"' order by fpd_id desc)"
	qry+=" "+" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+isnull((select top 1 cast(fpd_acpt_rjct_wgt as decimal(20,3)) from job_ord_hdr_dtl inner join ord_hdr_dtl on (ohd_ord_jn_no=johd_ord_no and johd_pdt_cd=ohd_ord_pdt_cd) inner join fnsh_pdt_dtl on fpd_pdt_cd=johd_pdt_cd and ohd_ord_jn_no=fpd_jo_no and fpd_pdt_mvd='"+dptCd+"'  and ohd_id='"+id+"' order by fpd_id desc),0))	where stm_rcvd_stk_prty='"+prty+"' and stm_stk_trn_typ='ScrapMetal'  and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id],[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd) " +
			"values ('"+cmyCd+"','"+dptCd+"','',(isnull((select top 1 cast(fpd_acpt_rjct_wgt as decimal(20,3)) from job_ord_hdr_dtl inner join ord_hdr_dtl on (ohd_ord_jn_no=johd_ord_no and johd_pdt_cd=ohd_ord_pdt_cd) inner join fnsh_pdt_dtl on fpd_pdt_cd=johd_pdt_cd and ohd_ord_jn_no=fpd_jo_no and fpd_pdt_mvd='"+dptCd+"'  and ohd_id='"+id+"' order by fpd_id desc),0)),'"+docDt+"','"+empid+"','ScrapMetal','"+docDt+"','"+empid+"','"+prty+"','Scrap','')";
	AjaxController.updateCancelledtreeProductsts(qry,function(res){
		if(res){
			//$(ths).closest("tr").removeClass('test2');
			$(ths).closest("tr").find(".childCheckBox").removeClass('childCheckBox');
			$(ths).closest("tr").css("display","none")
			$(ths).closest("tr").remove();
		}
	})	
}