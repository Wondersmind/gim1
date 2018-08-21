

/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddTree(ths){
	if(ths.checked==true)
		{
		$(".childCheckBox:not(:disabled)").each(function(){
			$(this)["0"].checked=true;
		})
		// $(".childCheckBoxExist").prop("checked",true);
		}
	else{
		$(".childCheckBox:not(:disabled)").each(function(){
			$(this)["0"].checked=false;
		})
		// $(".childCheckBoxExist").prop("checked",false);
	}
	 calSumOfTotAlyWgt();
}
$(function (){
	$(".childCheckBox").on("click",function(){ 
		var sumChkedchkBox=$(".childCheckBox:checked").length;
		var totChkBox=$(".childCheckBox:not(:disabled)").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		 calSumOfTotAlyWgt();
	})
});

function calSumOfTotAlyWgt(){
	var rcvdWgt=0,rcvdPrty=0,isdwgt=0,convertPrty=0,exptprty=0;
	$(".childCheckBox:checked,.alreadys:checked").each(function(){
		var trs=$(this).closest("tr");
		rcvdWgt+=Number(trs.find(".rcvdWgtOdMtl").val())+Number(trs.find(".testSmplMtl").val())+Number(trs.find(".dustSmplMtl").val());
		rcvdPrty+=Number($(trs["0"].cells[15]).find("input").val());
		isdwgt+=(Number(trs.find(".issuedMtelWght").val())+Number(trs.find(".issuessWgtOfAly").html()));
		convertPrty+=Number(trs.find(".covertedPrtys").val());
		exptprty+=Number(trs.find(".expectedprtyofaly").val());
	})
	$(".RecvedTr").each(function(){
		var trs=$(this).closest("tr");
		rcvdWgt+=Number(trs.find(".rcvdWgtOdMtl").val()||trs.find(".rcvdWgtOdMtl").html())+Number(trs.find(".testSmplMtl").val()||trs.find(".testSmplMtl").html())+Number(trs.find(".dustSmplMtl").val()||trs.find(".dustSmplMtl").html());
		rcvdPrty+=Number($(trs["0"].cells[15]).find("input").val());
		isdwgt+=(Number(trs.find(".issuedMtelWght").val())+Number(trs.find(".issuessWgtOfAly").html()));
		convertPrty+=Number(trs.find(".covertedPrtys").html());
		exptprty+=Number(trs.find(".expectedprtyofaly").val()||trs.find(".expectedprtyofaly").html());
	})
	var bal=(Number(isdwgt).toFixed(3)-Number(rcvdWgt).toFixed(3)).toFixed(3)||0;
	$("#rcvdWgtOfAly").val(rcvdWgt.toFixed(2));$("#rcvdPrtyOfAly").val(rcvdPrty.toFixed(2));
	$("#isdWgtOfAly").val(isdwgt.toFixed(2));$("#exptCnvtWgtOfAly").val(convertPrty.toFixed(2));
	$("#exptPrtyOfAly").val(exptprty.toFixed(2));$("#balWgtOfAly").val(bal);
}
////////////////////////end/////////////////////////////////\

/////////////////////// alloy alyTypeBaseAdd in addalloy Page/////////////////////
$("#alyCmyCd,#alyTypeBase").on("change",function(){
	var alytpe=$("#alyTypeBase").val(),alycmycd=$("#alyCmyCd").val();
	if(alytpe=="100"){
		AjaxController.getInwardRecForAddAlloyAjax(alycmycd,returnResOfaly)
	}
	else{
		var table = $('#myTable').DataTable().clear();table.destroy();
		$("#myTbodyAly").html('');
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
var resultOfFilter='';
function returnResOfaly(res){
	var result='';var table = $('#myTable').DataTable().clear();table.destroy();
	$(".parentCheckBox")["0"].checked=false;
	if(res!=null){
		var opt='<option value="">Select Type</option>';
		var option=new Set();
		option.add('<option value="">Select DepartMent</option>');
		$.grep(existAlyDetls,function(i){
			opt+='<option value=\''+JSON.stringify(i)+'\'>'+i.am_aly_nm+'</option>';
		})
		for(var i=0;i<res.length;i++){
			option.add('<option value="'+res[i][7]+'">'+res[i][10]+'</option>');
			var mtlwgt=(res[i][2])&&Number((res[i][2])).toFixed(2);
			result+='<tr><td id="'+res[i][8]+'" value="'+res[i][9]+'"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" id="'+res[i][7]+'" title="'+res[i][5]+'">'
		      +' <span></span></label></td> <td>'+res[i][0]+'</td><td>'+res[i][1]+'</td>  <td>'+mtlwgt+'</td> <td class="metlOrgPrty">'+res[i][3]+'</td><td><select class="selectpicker" data-live-search="true" data-width="70px" data-container="body" onchange="takeAlyDetailFromSelectBox(this)">'+opt+'</select></td>  <td><input type="number" class="form-control issuedMtelWght" ></td> <td><input type="number" class="form-control covertedPrtys" ></td> <td class="regrdPrtyOfMtl"><input class="form-control expectedprtyofaly" type="number"></td><td class="purtyLossOfMetal"> </td>'
		     +'<td onclick="myModelOfShowForEachRow(this)" class="issuessWgtOfAly"></td>   <td><input type="number" class="form-control rcvdWgtOdMtl"  ></td>'
		       +' <td id=""><input type="number" class="form-control testSmplMtl" aphd_isd_tst_smp onclick="openModelOfTestSample(this)"></td><td><input type="number" class="form-control dustSmplMtl"></td> <td></td> <td><input type="number" class="form-control" onclick="issPrtyCal(this)></td></tr>';
			}
	}
	$("#myTbodyAly").html(result);resultOfFilter=result;
	$("#dptOfInwrdRec").html([...option]).selectpicker("refresh");
	$(".selectpicker").selectpicker('refresh');
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
			 calSumOfTotAlyWgt();
		})
	});
}

////////////////////////existAly Variables////////////////////
var existAlyDetls=[];
//////////////////////////// end /////////////////////////////
/////////////////////filter function ///////////////////////////
$(function (){
	if($("#AlyMstExtDet").val()!="")
	existAlyDetls=JSON.parse($("#AlyMstExtDet").val());
	$("#dptOfInwrdRec,#dateOfInw").on("change",function(){
		var dpt=$("#dptOfInwrdRec").val(),date=$("#dateOfInw").val(),type=$("#alyTypeBase").val(),alycmycd=$("#alyCmyCd").val();
		if(dpt==""&&date==""){
			var table = $('#myTable').DataTable().clear();table.destroy();
			$("#myTbodyAly").html(resultOfFilter);
			$(".selectpicker").selectpicker('refresh');
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
		else{
			var dptSel=[];
			if(dpt!=null&&dpt!=undefined)
				{
				$.grep(dpt,function(i){
					dptSel.push("'"+i+"'");
				})
				}
			if(type=="100")
			AjaxController.seacrhBasedOnDptAndDateAjax(dptSel,date,alycmycd,returnResOfalyFilter);
		}
	})
});

var CurntRes;
function openModelOfTestSample(ths){
	 if($("#authRevdAuthForId").val()=="1"){
		 $("#myModalSample input:not(:checkbox)").attr("disabled","disabled");
	 }
	CurntRes=$(ths).closest("td");var tdId=$(ths).closest("td")[0].id;
	var JsonStr=tdId!=undefined&&tdId!=""?JSON.parse(tdId):{aphd_tst_smp1:0,aphd_tst_smp2:0,aphd_tst_smp3:0,aphd_tst_smp4:0};
	$("#ta1Smpl").val(JsonStr.aphd_tst_smp1),$("#ta2Smpl").val(JsonStr.aphd_tst_smp2),$("#tb1Smpl").val(JsonStr.aphd_tst_smp3),$("#tb2Smpl").val(JsonStr.aphd_tst_smp4)
	var isdtstsmpl=$(ths).attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
	var isdSmplJson=JSON.parse(isdtstsmpl)||{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$.each(isdSmplJson,(key,val)=>{
		 if($("#authRevdAuthForId").val()=="1"&&val){
				$("["+key+"]").prop("disabled",val);
		 }
		 else{
			  	 $("[tst_smpl_one],[tst_smpl_three]").prop("checked",true); 
			 $("["+key+"]").prop("disabled",false); 
		 }
		$("["+key+"]").prop("checked",val);
		
	});
	$("#myModalSample").modal('show');
}

function saveTheJsonInTr(){
	var rcvdWgt=$($(CurntRes).closest("tr")[0].cells[11]).find("input").val()||$($(CurntRes).closest("tr")[0].cells[11]).html();
	var isuedWgt=$(CurntRes).closest("tr").find(".issuedMtelWght").val();
	var isuedAluWgt= $(CurntRes).closest("tr").find(".issuessWgtOfAly").html();
	var totSamplWgt=Number($("#ta1Smpl").val())+Number($("#ta2Smpl").val())+Number($("#tb1Smpl").val())+Number($("#tb2Smpl").val());
	var Jsn={aphd_tst_smp1:$("#ta1Smpl").val(),aphd_tst_smp2:$("#ta2Smpl").val(),aphd_tst_smp3:$("#tb1Smpl").val(),aphd_tst_smp4:$("#tb2Smpl").val()};
	CurntRes[0].id=JSON.stringify(Jsn);
	$(CurntRes).find("input").val(totSamplWgt.toFixed(2));
	var isdSmplJson={"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$.each(isdSmplJson,(key,val)=>{
		isdSmplJson[key]=$("["+key+"]").prop("checked");
	});
	var jsonString=JSON.stringify(isdSmplJson);
	$(CurntRes).find("input").attr("aphd_isd_tst_smp",jsonString);
	$(CurntRes).attr("aphd_isd_tst_smp",jsonString);
	if($("#authRevdAuthForId").val()=="1"){
		
		var smpIsd={smp1:(isdSmplJson.tst_smpl_one?1:0),smp2:(isdSmplJson.tst_smpl_two?1:0),smp3:(isdSmplJson.tst_smpl_three?1:0),smp4:(isdSmplJson.tst_smpl_four?1:0)};
		var docNo=$("#alyAlyCd").val(),treeNos=$('td:eq(1)',$(CurntRes).closest("tr")).html()||'';
		var qryUpdater=[];
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp1+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='ALA1' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp2+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='ALA2' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp3+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='ALB1' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp4+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='ALB2' ")
	
		
		var id=$(CurntRes).closest("tr").find(":checkbox").val();
	AjaxController.sabeTheAlowdPrtyOfAlloy(id,jsonString,qryUpdater,rtnsvereesofaloy);	
		function rtnsvereesofaloy(res){
			if(res)
			$("#myModalSample").modal('hide');
		}
	   }
	else{
		$("#myModalSample").modal('hide');
	}
	$(CurntRes).find(".testSmplMtl").change();
}

function returnResOfalyFilter(res){
	var result='';var table = $('#myTable').DataTable().clear();table.destroy();
	$(".parentCheckBox")["0"].checked=false;
	if(res!=null){
		var opt='<option value="">Select Type</option>';
		$.grep(existAlyDetls,function(i){
			opt+='<option value=\''+JSON.stringify(i)+'\'>'+i.am_aly_nm+'</option>';
		})
		for(var i=0;i<res.length;i++){
			var mtlwgt=(res[i][2])&&Number((res[i][2])).toFixed(2);
			result+='<tr><td id="'+res[i][8]+'" value="'+res[i][9]+'"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" id="'+res[i][7]+'" title="'+res[i][5]+'">'
		      +' <span></span></label></td> <td>'+res[i][0]+'</td><td>'+res[i][1]+'</td>  <td>'+mtlwgt+'</td> <td class="metlOrgPrty">'+res[i][3]+'</td><td><select class="selectpicker" data-live-search="true" data-width="70px" data-container="body" onchange="takeAlyDetailFromSelectBox(this)">'+opt+'</select></td>  <td><input type="number" class="form-control issuedMtelWght" ></td> <td><input type="number" class="form-control covertedPrtys" ></td> <td class="regrdPrtyOfMtl"><input class="form-control expectedprtyofaly" type="number"></td><td class="purtyLossOfMetal"> </td>'
		     +'<td onclick="myModelOfShowForEachRow(this)" class="issuessWgtOfAly"></td>   <td><input type="number" class="form-control rcvdWgtOdMtl" ></td>'
		       +' <td id=""><input type="number" class="form-control testSmplMtl" aphd_isd_tst_smp onclick="openModelOfTestSample(this)"></td><td><input type="number" class="form-control dustSmplMtl"  ></td> <td></td> <td><input type="number" class="form-control" ></td></tr>';
			}
	}
	$("#myTbodyAly").html(result);
	
	$(".selectpicker").selectpicker('refresh');
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
			 calSumOfTotAlyWgt();
		})
	});
}
/////////////////////end////////////////////////////////////////

/////////////////////////////takeAlyDetailFromSelectBox ////////////////////
function takeAlyDetailFromSelectBox(ths){
	if($(ths).val()!=""){
		if($(ths).closest("tbody").attr("id")==="myTableExist"){
var alyList=JSON.parse($("#AlyMstExtDet").val());
	if(alyList!=null&&alyList!=""){
		$.grep(alyList,function(aly){
			if(aly.am_aly_cd==$(ths).val()){
		
	var valus=Number(aly.am_aly_val1)+Number(aly.am_aly_val2)+Number(aly.am_aly_val3)+Number(aly.am_aly_val4)+Number(aly.am_aly_val5)+Number(aly.am_aly_val6)+Number(aly.am_aly_val7);
	var sumOf=Number($(ths).closest("tr")["0"].cells[3].innerHTML)+valus;
	$(ths).closest("tr")["0"].cells[9].innerHTML=sumOf;
	$($(ths).closest("tr")["0"].cells[9]).val(JSON.stringify(aly));
	$(ths).attr("id",aly.am_aly_cd);
			}
	});
	}
	}
		else{
			var aly=JSON.parse($(ths).val());
			if(aly!=null&&aly!=""){
			var valus=Number(aly.am_aly_val1)+Number(aly.am_aly_val2)+Number(aly.am_aly_val3)+Number(aly.am_aly_val4)+Number(aly.am_aly_val5)+Number(aly.am_aly_val6)+Number(aly.am_aly_val7);
			var sumOf=Number($(ths).closest("tr")["0"].cells[3].innerHTML)+valus;
			$(ths).closest("tr")["0"].cells[9].innerHTML=sumOf;
			$($(ths).closest("tr")["0"].cells[9]).val($(ths).val());
			$(ths).attr("id",aly.am_aly_cd);
			}
		}
	}
	else{
		$(ths).closest("tr")["0"].cells[9].innerHTML="";
	}
	balanceWgtcalCulation(ths);
}
///////////////////end/////////////////////////////////////////////////////

////////////////////////// model Show Handler ///////////////////////
function myModelOfShowForEachRow(ths){
	var res='<div class="form-group"> <div class="col-md-6"><label class="control-label" style="color: #12ad8d;">Given(%)</label> </div><div class="col-md-6"><label class="control-label" style="color: #12ad8d;">Calculated Wgt</label> </div><div class="col-md-4"> </div></div>';
	if($(ths).val()!=""){
	var aly=JSON.parse($(ths).val());
	var isAlyVal=Number($(ths).html());
	if(aly!=""&&aly!=undefined){var total=0,totAly=0;
		var catgry={};catgry[aly.am_aly_ctgy1]=aly.am_aly_val1,catgry[aly.am_aly_ctgy2]=aly.am_aly_val2
		,catgry[aly.am_aly_ctgy3]=aly.am_aly_val3,catgry[aly.am_aly_ctgy4]=aly.am_aly_val4,catgry[aly.am_aly_ctgy5]=aly.am_aly_val5,
		catgry[aly.am_aly_ctgy6]=aly.am_aly_val6,catgry[aly.am_aly_ctgy7]=aly.am_aly_val7;
	$.each(catgry,function(key,val){
		if(key!=""){
			var keyval=Number((val*isAlyVal)/100).toFixed(2)||0;
	res+='  <div class="form-group"> <div class="col-md-2"><label class="control-label">'+key+'</label> </div> <div class="col-md-4">  <input type="text" class="form-control input-sm" placeholder="'+key+'" value="'+val+'" readonly="readonly">'
       +' </div><div class="col-md-2"><label class="control-label">'+key+'</label> </div> <div class="col-md-4">  <input type="number" class="form-control input-sm issWgtChge" placeholder="'+key+'" value="'+keyval+'" readonly="readonly">'
       +' </div></div>';total+=Number(keyval);totAly+=Number(val)||0;
		}
});
res+='<div class="form-group"> <div class="col-md-2"><label class="control-label" style="color: #08c;">Total</label> </div><div class="col-md-4"><input type="text" class="form-control input-sm"  value="'+totAly.toFixed(2)+'" readonly="readonly"> </div><div class="col-md-2"><label class="control-label" style="color: #08c;">Total</label> </div><div class="col-md-4"><input type="text" class="form-control input-sm"  value="'+total.toFixed(2)+'" readonly="readonly"> </div></div>';
	}
	}
		$("#CatWithValDisModel").html(res);
$("#myModal1").modal('show');
}
////////////////////////// end////////////////////////////////////////
	//////////////////balance weight calculate //////////////////////////'
	function calculateBalWgt(ths){
		balanceWgtcalCulation(ths);
		if($(ths).closest("tr").find(".childCheckBox:checked").length>0){
			var rcvdWgt=0;
			$(".childCheckBox:checked").each(function(){
				var sa=Number($($(this).closest("tr")["0"].cells[10]).find("input").val());
				rcvdWgt+=!isNaN(sa)?sa:0;
			});
			$(".RecvedTr").each(function(){
				rcvdWgt+=Number($($(this)["0"].cells[10]).html());
			})
			$("#rcvdWgtOfAly").val(rcvdWgt.toFixed(2));
		}
		
	}
	
	function calculateRcvdPrty(ths){
		balanceWgtcalCulation(ths);
		if($(ths).closest("tr").find(".childCheckBox:checked").length>0){
			var rcvdPrty=0;
			$(".childCheckBox:checked").each(function(){
				var prty=Number($($(this).closest("tr")["0"].cells[13]).find("input").val());
				rcvdPrty+=!isNaN(prty)?prty:0;
			})
			$(".RecvedTr").each(function(){
		rcvdPrty+=Number($($(this)["0"].cells[13]).html());
	})
			$("#rcvdPrtyOfAly").val(rcvdPrty.toFixed(2));
		}
	}
	
	function balanceWgtcalCulation(ths){
		var isuWgt=$(ths).closest("tr")["0"].cells[9].innerHTML,rcvdWgt=$($(ths).closest("tr")["0"].cells[10]).find("input").val()
		smplWgt=$($(ths).closest("tr")["0"].cells[11]).find("input").val();
		var sumOfSmplRcv=Number(rcvdWgt)+Number(smplWgt);
		if(sumOfSmplRcv<isuWgt){
		$(ths).closest("tr")["0"].cells[12].innerHTML=(Number(isuWgt)-sumOfSmplRcv).toFixed(2);}
		else{
			$(ths).closest("tr")["0"].cells[12].innerHTML=0;$($(ths).closest("tr")["0"].cells[10]).find("input").val(isuWgt);
			$($(ths).closest("tr")["0"].cells[11]).find("input").val(0);	
		}
	}
	//////////////////////// end ////////////////////////////////////////
	$(function (){
		$("#alyWrkCd").change(function(){
			if($(this).val()!=""){
				var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as decimal(20,3))),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' and s.stm_stk_trn_typ like '%Issue%'"
				AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
			function retWrkAlwQty(res){
				$("#StkLmtOfEMployee").val(res);	
			}	
			}
			else{
				$("#StkLmtOfEMployee").val("");	}
		});
	})
	function beforesavingValidate(){
		$("#saveButtonAly").addClass("disabled");
		$("#saveButtonAly").addClass("btn-circlesuc");
		
		if($("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
			var issWgts=0;
			$('.childCheckBox:checked').each(function(){
				issWgts+=Number($(this).closest("tr").find(".issuessWgtOfAly").html());
			});
			$('#myTableExist .issuessWgtOfAly').each(function(){
				issWgts+=Number($(this).html());
			})
			var empStkExst=Number($("#StkLmtOfEMployee").val().split("-")[0])+Number(issWgts);
			var empAlwQty=$("#StkLmtOfEMployee").val().split("-")[1];
			if(Number(empStkExst)>Number(empAlwQty)){
				$("#savesuccessRes").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
						'<button type="button" onclick="saveFinalAlyPrcsDetail()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	
			}
			else{
				saveFinalAlyPrcsDetail();		
			}
			}
		else{
			saveFinalAlyPrcsDetail();	
		}
	}
	function hideDivInStkAdj() {
		$("#firstPrep").fadeOut(20);
	}
		
	////////////Saving Final Alloy Process deatil////////////////////////////
	function saveFinalAlyPrcsDetail(){
		var cmycd=$("#alyCmyCd").val(),strCd=$("#alyStrCd").val(),wrkCd=$("#alyWrkCd").val(),alyCd=$("#alyAlyCd").val(),alyTyp=$('#alyTypeBase').val(),dateIn=$(".dateTimePick").val().split(" ")[0];
		if(cmycd!=""&&strCd!=""&&wrkCd!=""&&alyCd!=""){
		if($(".childCheckBox:checked").length>0){
			var priIdHdr=$("#pryIdOfExst").val(),crtIdHdr=$("#crtIdOfExst").val(),crtDtHdr=$("#crtDtOfExst").val();
			$("#saveButtonAly").addClass("disabled");$("#saveButtonAly").prop("disabled",true);
			$("#savesuccessRes").html('<div class="alert alert-info" > Saving Please Wait... </div>');$("#hidealyAlyCd5").fadeOut(3000);	
			var apHdrDtl=[],aphHdrOnly={};var totExpCntWgt=$("#exptCnvtWgtOfAly").val();
			aphHdrOnly={};var totIsdWgt=$("#isdWgtOfAly").val(),balwgt=$("#balWgtOfAly").val(),exptprty=$("#exptPrtyOfAly").val();
			if($("#authIssAuthForId").val()!="1"){
			$(".childCheckBox:not(.alreadys):checked").each(function(){
				var trOne=$(this).closest("tr");
				var alyTypeCd=$(trOne["0"].cells[5]).find("select").attr("id"),expPrty=trOne.find(".expectedprtyofaly").val();
				var rcvdStkCal=Number(trOne["0"].cells[3].innerHTML),mtlPrty=trOne["0"].cells[4].innerHTML;
				var doc=$(this).closest("td")["0"].id,Pval=$($(this).closest("td")["0"]).attr("value"),primId=$(this).attr("title")||0;
				var dptCd=$(this)["0"].id,pdtTyp=$(this).val(),pdtCd=trOne["0"].cells[1].innerHTML,prtyLos=$(trOne["0"].cells[9]).html(),
				conPrty=$(trOne["0"].cells[7]).find("input").val(),isWgt=$(trOne["0"].cells[6]).find("input").val(),rcvdWgt=$(trOne["0"].cells[11]).find("input").val(),
				blWgt=trOne["0"].cells[14].innerHTML,rcvdPrty=$(trOne["0"].cells[15]).find("input").val();
				var dstMtl=trOne.find(".dustSmplMtl").val(),issuedAlyWgt=trOne.find(".issuessWgtOfAly").html();
				var tstSmpl=trOne.find("td:eq(12) input").val(),tstJson,tstSmplJsonN=trOne.find("td:eq(12)").attr("id");
				var isdtstsmplstr=trOne.find(".testSmplMtl").attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
				if(tstSmplJsonN){
					tstJson=JSON.parse(tstSmplJsonN);
				}
				else{
					if(tstSmpl){
						tstSmpl=Number(tstSmpl)/4;
					tstJson={aphd_tst_smpl1:tstSmpl,aphd_tst_smpl2:tstSmpl,aphd_tst_smpl3:tstSmpl,aphd_tst_smpl4:tstSmpl}
					}
					else{
						tstJson={aphd_tst_smpl1:tstSmpl,aphd_tst_smpl2:tstSmpl,aphd_tst_smpl3:tstSmpl,aphd_tst_smpl4:tstSmpl}	
					}
				}
				var tstSamplePrty=trOne.find("td:eq(15)").attr("id")||trOne.find("td:eq(15) input").attr("id");
				var main={aphd_isd_tst_smp:isdtstsmplstr,aphd_smpl_rcvd_prty:tstSamplePrty,aphd_iss_aly:issuedAlyWgt,aphd_dst_mtl:dstMtl,aphd_tot_tst_smp:tstSmpl,aphd_am_aly_typ_cd:alyTypeCd,aphd_expt_prty:expPrty,aphd_cmy_cd:cmycd,aphd_str_cd:strCd,aphd_aly_typ:alyTyp,aphd_aly_no:alyCd,aphd_dpt_cd:dptCd,aphd_wrk_cd:wrkCd,
						aphd_pdt_cd:pdtCd,aphd_pdt_typ:pdtTyp,aphd_prty_ls:prtyLos,aphd_cvt_prty:conPrty,aphd_iss_wgt:isWgt,aphd_rcvd_wgt:rcvdWgt,prm_IdStk:primId,stkWgtBal:Number(rcvdStkCal)-Number(isWgt),
						aphd_tst_smp:tstSmpl,aphd_bal_wgt:blWgt,aphd_rcvd_prty:rcvdPrty,aphd_iss_auth:false,aphd_rcvd_auth:false,aphd_aly_sts:true,doc_vl:doc,pg_val:Pval,aphd_mtl_wgt:rcvdStkCal,aphd_mtl_prty:mtlPrty};
				apHdrDtl.push(Object.assign(main,tstJson));
			});
			$(".alreadys:checked").each(function(){
				var trTwo=$(this).closest("tr");
				var alyTypeCd=$(trTwo["0"].cells[5]).find("select").val(),expPrty=trTwo.find(".expectedprtyofaly").val();
				var rcvdStkCal=Number(trTwo["0"].cells[3].innerHTML),mtlPrty=trTwo["0"].cells[4].innerHTML;
				var pdtTyp=$(this)["0"].id,PrimId=$(this)["0"].value,dptCd=$(this)["0"].title,crtId=$($(this).closest("td")).attr("id"),crtDt=$($(this).closest("td")).attr("value");
				var pdtCd=trTwo["0"].cells[1].innerHTML,prtyLos=$(trTwo["0"].cells[9]).html(),
				conPrty=$(trTwo["0"].cells[7]).find("input").val(),isWgt=$(trTwo["0"].cells[6]).find("input").val(),rcvdWgt=$(trTwo["0"].cells[11]).find("input").val(),
				blWgt=trTwo["0"].cells[14].innerHTML,rcvdPrty=$(trTwo["0"].cells[15]).find("input").val(),issuedAlyWgt=trTwo.find(".issuessWgtOfAly").html();
				var dstMtl=trTwo.find(".dustSmplMtl").val(),tstJson;var totSmpl=$(trTwo["0"].cells[12]).find("input").val();
				var tstSmpl=trTwo.find("td:eq(12) input").val(),tstJson,tstSmplJsonN=trTwo.find("td:eq(12)").attr("id");
				var isdtstsmplstr=trTwo.find(".testSmplMtl").attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
				if(tstSmplJsonN){
					tstJson=JSON.parse(tstSmplJsonN);
				}
				else{
					if(tstSmpl){
						tstSmpl=Number(tstSmpl)/4;
					tstJson={aphd_tst_smpl1:tstSmpl,aphd_tst_smpl2:tstSmpl,aphd_tst_smpl3:tstSmpl,aphd_tst_smpl4:tstSmpl}
					}
					else{
						tstJson={aphd_tst_smpl1:tstSmpl,aphd_tst_smpl2:tstSmpl,aphd_tst_smpl3:tstSmpl,aphd_tst_smpl4:tstSmpl}	
					}
				}
				var tstSamplePrty=trTwo.find("td:eq(15)").attr("id")||trTwo.find("td:eq(15) input").attr("id");
				var main={aphd_isd_tst_smp:isdtstsmplstr,aphd_smpl_rcvd_prty:tstSamplePrty,aphd_iss_aly:issuedAlyWgt,aphd_dst_mtl:dstMtl,aphd_tot_tst_smp:tstSmpl,aphd_id:PrimId,aphd_am_aly_typ_cd:alyTypeCd,aphd_expt_prty:expPrty,aphd_cmy_cd:cmycd,aphd_str_cd:strCd,aphd_aly_typ:alyTyp,aphd_aly_no:alyCd,aphd_dpt_cd:dptCd,aphd_wrk_cd:wrkCd,
						aphd_pdt_cd:pdtCd,aphd_pdt_typ:pdtTyp,aphd_prty_ls:prtyLos,aphd_cvt_prty:conPrty,aphd_iss_wgt:isWgt,aphd_rcvd_wgt:rcvdWgt,prm_IdStk:PrimId,stkWgtBal:Number(rcvdStkCal)-Number(isWgt),
						aphd_tst_smp:tstSmpl,aphd_bal_wgt:blWgt,aphd_rcvd_prty:rcvdPrty,aphd_iss_auth:false,aphd_rcvd_auth:false,aphd_aly_sts:true,doc_vl:0,pg_val:0,aphd_mtl_wgt:rcvdStkCal,aphd_mtl_prty:mtlPrty,aphd_crt_dt:crtDt,aphd_crt_id:crtId};
				apHdrDtl.push(Object.assign(main,tstJson));
			});
			}
			var totRcWgt=$("#rcvdWgtOfAly").val(),totRcPrty=$("#rcvdPrtyOfAly").val(),totExpCntWgt=$("#exptCnvtWgtOfAly").val();
			aphHdrOnly={};
		var stkManageQry=[],iwdStkHndle=[],stkPriAry=[];
			if($("#authIssAuthForId").val()!="1"&&$("#isdauthVal").val()=="1"){
			$.grep(apHdrDtl,function(i){
				i.aphd_iss_auth=true;var isWgt=(+i.aphd_iss_wgt||0).toFixed(2);
				if($("#isdauthVal").val()=="1"){
					var totRcvdWdt=((+i.aphd_iss_wgt||0)+(+i.aphd_iss_aly||0)).toFixed(2);
					stkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+isWgt+" as decimal(20,3))) where stm_id='"+primId+"'");
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+totRcvdWdt+" as decimal(20,3))) where stm_itm_cd='"+i.aphd_pdt_cd+"' " +
							"and stm_stk_trn_typ='AlloyIssue' and stm_stk_crt_id='"+wrkCd+"' and stm_stk_itm_typ='"+i.aphd_pdt_typ+"' and stm_rcvd_stk_prty='"+i.aphd_expt_prty+"' " +
							" and stm_dpt_cd='"+i.aphd_dpt_cd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+cmycd+"','"+i.aphd_dpt_cd+"','"+i.aphd_pdt_cd+"','"+totRcvdWdt+"','"+dateIn+"','"+wrkCd+"','AlloyIssue','"+dateIn+"','"+wrkCd+"','"+i.aphd_expt_prty+"','"+i.aphd_pdt_typ+"','"+i.aphd_str_cd+"')");
				}
				/*	iwdStkHndle.push({stm_id:i.prm_IdStk,stm_rcvd_stk_wgt:i.stkWgtBal});
				stkPriAry.push(i.prm_IdStk);
			*/});
			aphHdrOnly={aph_id:priIdHdr,aph_crt_id:crtIdHdr,aph_crt_dt:crtDtHdr,aph_cmy_cd:cmycd,aph_str_cd:strCd,aph_aly_typ:alyTyp,aph_aly_no:alyCd,aph_tot_isd_wgt:totIsdWgt,aph_tot_bal_wgt:balwgt,aph_expt_prty:exptprty,aph_tot_rcvd_wgt:totRcWgt,aph_tot_rcvd_prty:totRcPrty,aph_cnvt_prty:totExpCntWgt,aph_iss_auth:true,aph_rcvd_auth:false,aph_aly_sts:true};
			}
	
		if($("#authIssAuthForId").val()=="1"&&$("#rcvdauthVal").val()=="1"){
			var priIdHdr=$("#pryIdOfExst").val(),crtIdHdr=$("#crtIdOfExst").val(),crtDtHdr=$("#crtDtOfExst").val();
			if($(".parentCheckBox:checked").length>0){
				aphHdrOnly={aph_id:priIdHdr,aph_crt_id:crtIdHdr,aph_crt_dt:crtDtHdr,aph_cmy_cd:cmycd,aph_str_cd:strCd,aph_aly_typ:alyTyp,aph_aly_no:alyCd,aph_tot_isd_wgt:totIsdWgt,aph_tot_bal_wgt:balwgt,aph_expt_prty:exptprty,aph_tot_rcvd_wgt:totRcWgt,aph_tot_rcvd_prty:totRcPrty,aph_cnvt_prty:totExpCntWgt,aph_iss_auth:true,aph_rcvd_auth:true,aph_aly_sts:true};
				
			}
			else{
				aphHdrOnly={aph_id:priIdHdr,aph_crt_id:crtIdHdr,aph_crt_dt:crtDtHdr,aph_cmy_cd:cmycd,aph_str_cd:strCd,aph_aly_typ:alyTyp,aph_aly_no:alyCd,aph_tot_isd_wgt:totIsdWgt,aph_tot_bal_wgt:balwgt,aph_expt_prty:exptprty,aph_tot_rcvd_wgt:totRcWgt,aph_tot_rcvd_prty:totRcPrty,aph_cnvt_prty:totExpCntWgt,aph_iss_auth:true,aph_rcvd_auth:false,aph_aly_sts:true};
		}apHdrDtl=[];
			$(".alreadys:checked").each(function(){
				var trThree=$(this).closest("tr");
				var alyTypeCd=$(trThree["0"].cells[5]).find("select").val(),expPrty=trThree.find(".expectedprtyofaly").val();
				var rcvdStkCal=Number(trThree["0"].cells[3].innerHTML),mtlPrty=trThree["0"].cells[4].innerHTML;
				var pdtTyp=$(this)["0"].id,PrimId=$(this)["0"].value,dptCd=$(this)["0"].title,crtId=$($(this).closest("td")).attr("id"),crtDt=$($(this).closest("td")).attr("value");
				var pdtCd=trThree["0"].cells[1].innerHTML,prtyLos=$(trThree["0"].cells[9]).html(),
				conPrty=$(trThree["0"].cells[7]).find("input").val(),isWgt=$(trThree["0"].cells[6]).find("input").val(),rcvdWgt=$(trThree["0"].cells[11]).find("input").val(),
				blWgt=trThree["0"].cells[14].innerHTML,rcvdPrty=$(trThree["0"].cells[15]).find("input").val();
				rcvdWgt=!isNaN(Number(rcvdWgt))?rcvdWgt:$(trThree["0"].cells[11]).html();
				rcvdPrty=!isNaN(Number(rcvdPrty))?rcvdPrty:$(trThree["0"].cells[15]).find("input").val();
				var dstMtl=trThree.find(".dustSmplMtl").val(),issuedAlyWgt=trThree.find(".issuessWgtOfAly").html();
				var tstSmpl=trThree.find("td:eq(12) input").val(),tstJson,tstSmplJsonN=trThree.find("td:eq(12)").attr("id");
				var isdtstsmplstr=trThree.find(".testSmplMtl").attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
				if(tstSmplJsonN){
					tstJson=JSON.parse(tstSmplJsonN);
				}
				else{
					if(tstSmpl){
						tstSmpl=Number(tstSmpl)/4;
					tstJson={aphd_tst_smpl1:tstSmpl,aphd_tst_smpl2:tstSmpl,aphd_tst_smpl3:tstSmpl,aphd_tst_smpl4:tstSmpl}
					}
					else{
						tstJson={aphd_tst_smpl1:tstSmpl,aphd_tst_smpl2:tstSmpl,aphd_tst_smpl3:tstSmpl,aphd_tst_smpl4:tstSmpl}	
					}
				}
				var tstSamplePrty=trThree.find("td:eq(15)").attr("id")||trThree.find("td:eq(15) input").attr("id");

				if(tstSmplJsonN&&eval('('+tstSmplJsonN+')')){
					var json=eval('('+tstSmplJsonN+')')
				$.each(json,(key,val)=>{
					var isdSmpls=eval('('+isdtstsmplstr+')');
					var isd=0,smpno="",isdprty="",smplNm="ALA1";
					if(key=='aphd_tst_smp1'){isd=(isdSmpls["tst_smpl_one"]?1:0);smpno=1;
					smplNm="ALA1";
					if(tstSamplePrty){
						isdprty=eval("("+tstSamplePrty+")").aphd_tstd_prty1;
					}
					};
					if(key=='aphd_tst_smp2'){isd=(isdSmpls["tst_smpl_two"]?1:0);smpno=2;
					smplNm="ALA2";
					if(tstSamplePrty){
						isdprty=eval("("+tstSamplePrty+")").aphd_tstd_prty2;
					}
					};
					if(key=='aphd_tst_smp3'){isd=(isdSmpls["tst_smpl_three"]?1:0);smpno=3;
					smplNm="ALB1";
					if(tstSamplePrty){
						isdprty=eval("("+tstSamplePrty+")").aphd_tstd_prty3;
					}
					};
					if(key=='aphd_tst_smp4'){isd=(isdSmpls["tst_smpl_four"]?1:0);smpno=4;
					smplNm="ALB2";
					if(tstSamplePrty){
						isdprty=eval("("+tstSamplePrty+")").aphd_tstd_prty4;
					}
					};
					var isdPrtySmpl="";
					if((+rcvdPrty)){
						isdPrtySmpl=((+rcvdPrty)>=(+expPrty))?expPrty:rcvdPrty;
					}
					else{
						isdPrtySmpl=expPrty;
					}
					stkManageQry.push(" INSERT INTO [test_samples] (ts_chld_primid,ts_chld_isd_wgt,ts_trf_typ,ts_smp_no,[ts_cst_doc_no] ,[ts_isd_prty] ,[ts_rcvd_prty1] ,[ts_rcvd_prty2] ,[ts_rcvd_wgt1]" +
							" ,[ts_rcvd_wgt2] ,[ts_smp_dc_isd] ,[ts_smp_dc_rcvd] ,[ts_smp_isd] ,[ts_smp_wgt] ,[ts_tot_wgt] ,[ts_tree_no]) VALUES" +
							" ("+PrimId+",'"+rcvdWgt+"','ALLOY','"+smplNm+"','"+alyCd+"','"+isdPrtySmpl+"','','','','','NO','NO',"+isd+",'"+val+"','','"+pdtCd+"')");
						
				});
				}
				
				var main={aphd_isd_tst_smp:isdtstsmplstr,aphd_smpl_rcvd_prty:tstSamplePrty,aphd_iss_aly:issuedAlyWgt,aphd_dst_mtl:dstMtl,aphd_tot_tst_smp:tstSmpl,aphd_id:PrimId,aphd_am_aly_typ_cd:alyTypeCd,aphd_expt_prty:expPrty,aphd_cmy_cd:cmycd,aphd_str_cd:strCd,aphd_aly_typ:alyTyp,aphd_aly_no:alyCd,aphd_dpt_cd:dptCd,aphd_wrk_cd:wrkCd,
						aphd_pdt_cd:pdtCd,aphd_pdt_typ:pdtTyp,aphd_prty_ls:prtyLos,aphd_cvt_prty:conPrty,aphd_iss_wgt:isWgt,aphd_rcvd_wgt:rcvdWgt,stkWgtBal:Number(rcvdWgt),
						aphd_tst_smp:tstSmpl,aphd_bal_wgt:blWgt,aphd_rcvd_prty:rcvdPrty,aphd_iss_auth:true,aphd_rcvd_auth:true,aphd_aly_sts:true,aphd_mtl_wgt:rcvdStkCal,aphd_mtl_prty:mtlPrty,
						aphd_crt_dt:crtDt,aphd_crt_id:crtId};
				apHdrDtl.push(Object.assign(main,tstJson));
				var totRcvd=((+tstSmpl||0)+(+rcvdWgt||0)+(+dstMtl||0)).toFixed(2);
				stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+totRcvd+" as decimal(20,3))) where stm_itm_cd='"+pdtCd+"' and stm_stk_crt_id='"+wrkCd+"'" +
						" and stm_stk_itm_typ='"+pdtTyp+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and stm_rcvd_stk_prty='"+expPrty+"' and stm_stk_trn_typ='AlloyIssue'");
				var cntSPrty="";
				if((+rcvdPrty)){
					cntSPrty=((+rcvdPrty)>=(+expPrty))?expPrty:rcvdPrty;
				}
				else{
					cntSPrty=expPrty;
				}
				if(+rcvdWgt){
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+rcvdWgt+" as decimal(20,3))) where " +
						" stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and stm_rcvd_stk_prty='"+cntSPrty+"' and stm_stk_trn_typ='AlloyReceived' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+cmycd+"','"+dptCd+"','"+pdtCd+"','"+rcvdWgt+"','"+dateIn+"','"+adMinID+"','AlloyReceived','"+dateIn+"','"+adMinID+"','"+cntSPrty+"','"+pdtTyp+"','"+strCd+"')");
				}
				if(+tstSmpl){
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+tstSmpl+" as decimal(20,3))) where " +
							" stm_rcvd_stk_prty='"+cntSPrty+"' and stm_stk_trn_typ='TestSample' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+cmycd+"','"+dptCd+"','','"+tstSmpl+"','"+dateIn+"','"+adMinID+"','TestSample','"+dateIn+"','"+adMinID+"','"+cntSPrty+"','Sample','"+strCd+"')");
						
				}
				if(+dstMtl){
					stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+dstMtl+" as decimal(20,3))) where " +
							" stm_rcvd_stk_prty='"+cntSPrty+"' and stm_stk_trn_typ='PowderMetal' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+cmycd+"','"+dptCd+"','','"+dstMtl+"','"+dateIn+"','"+adMinID+"','PowderMetal','"+dateIn+"','"+adMinID+"','"+cntSPrty+"','Powder','"+strCd+"')");
				}
					
			});	
			
			iwdStkHndle=[],stkPriAry=[];
			
			AjaxController.saveAlyPrcsHdrDetInAjax(JSON.stringify(apHdrDtl),JSON.stringify(aphHdrOnly),stkManageQry,true,sucResOfAlySave);
		}
		else if($("#authIsst6tAuthForId").val()=="1"&&$("#rcvdauthVal").val()=="0"){
			$("#savesuccessRe=-s").html('<div class="alert alert-success"> Saved Successfully.... </div>');			
			window.location.href="alloying.mm";	
		}
		else{
			AjaxController.saveAlyPrcsHdrDetInAjax(JSON.stringify(apHdrDtl),JSON.stringify(aphHdrOnly),stkManageQry,false,sucResOfAlySave);
		}
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd5"> Select Records </div>');$("#hidealyAlyCd5").fadeOut(3000);
			$("#saveButtonAly").removeClass("disabled");
			$("#saveButtonAly").removeClass("btn-circlesuc");
			}
		}
		else{
			if(cmycd==""){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd1"> Select Company Code </div>');$("#hidealyAlyCd1").fadeOut(3000);
			}else if(strCd==""){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd2"> Select Store Code </div>');$("#hidealyAlyCd2").fadeOut(3000);
			}else if(wrkCd==""){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd3"> Select Worker Code </div>');$("#hidealyAlyCd3").fadeOut(3000);	
			}
			else{
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd4"> Enter Alloy Number </div>');$("#hidealyAlyCd4").fadeOut(3000);		
			}
			$("#saveButtonAly").removeClass("disabled");
			$("#saveButtonAly").removeClass("btn-circlesuc");
		}
	}
	
	function sucResOfAlySave(res){
		if(res=="success"){
			$("#savesuccessRes").html('<div class="alert alert-success"> Saved Successfully.... </div>');			
		window.location.href="alloying.mm";
		}
	}
	////////////end /////////////////////////////////////////////////////////
	
	function updateRcvdPrtyOfAlyPrcs(value,prty,id,isfill,tr){
		var chkBOX=$(tr).find(":checkbox")[0],cmycd=$("#alyCmyCd").val(),alycds=$("#alyAlyCd").val(),dateIn=$(".dateTimePick").val().split(" ")[0];
		var pdtTyp=chkBOX.id,dptCd=chkBOX.title,pdtCd=tr["0"].cells[1].innerHTML,rcvdWgt=$(tr["0"].cells[11]).text(),expprtyofaly=tr.find(".expectedprtyofaly").text()||'',covPrtys=tr.find(".covertedPrtys").text()||'';
		var dstMtl=tr.find(".dustSmplMtl").text(),tstSmpl=tr.find(".testSmplMtl input").val(),strCd=$("#alyStrCd").val();
		var treeNos=$('td:eq(1)',tr).html()||'';
		isfill=isfill?1:0;
		var prtyBox=$(tr).find("td:eq(15) input");
		if(!$(tr).attr("exstbalstk")){
		var totRcvd=((+tstSmpl||0)+(+rcvdWgt||0)+(+dstMtl||0)).toFixed(2);}
		else{
			var totRcvd=$(tr).attr("exstbalstk")||0;	
		}
		var oldPrty=prtyBox.attr("oldPrty");
		var ary="update aly_prcs_hdr set aph_iss_dmgd="+isfill+",aph_tot_rcvd_prty='"+value+"' where aph_aly_no=(select top 1 aphd_aly_no from aly_prcs_hdr_dtl where aphd_id="+id+"); update aly_prcs_hdr_dtl set aphd_rcvd_prty='"+value+"',aphd_smpl_rcvd_prty='"+prty+"' where aphd_id="+id+"";
		if((!oldPrty)&&(+value)){
			value=((+value)>=(+expprtyofaly))?expprtyofaly:value;
			ary+=(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvdWgt+" as decimal(20,3)') where " +
					" stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and stm_rcvd_stk_prty='"+value+"' and stm_stk_trn_typ='AlloyReceived' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd) " +
								" values ('"+cmycd+"','"+dptCd+"','"+pdtCd+"','"+rcvdWgt+"','"+dateIn+"','"+adMinID+"','AlloyReceived','"+dateIn+"','"+adMinID+"','"+value+"','"+pdtTyp+"','"+strCd+"') ");
			}
		else{
			if(oldPrty){
				value=(value>=expprtyofaly)?expprtyofaly:value;
				if(oldPrty!=value){
					ary+=(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+totRcvd+" as decimal(20,3))) where stm_itm_cd='"+pdtCd+"' " +
							" and stm_stk_itm_typ='"+pdtTyp+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and stm_rcvd_stk_prty='"+oldPrty+"' and stm_stk_trn_typ='Inward'; update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+totRcvd+" as decimal(20,3))) where stm_itm_cd='"+pdtCd+"' " +
							" and stm_stk_itm_typ='"+pdtTyp+"' and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' and stm_rcvd_stk_prty='"+value+"' and stm_stk_trn_typ='Inward' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
							" values ('"+cmycd+"','"+dptCd+"','"+pdtCd+"','"+totRcvd+"','"+dateIn+"','"+adMinID+"','Inward','"+dateIn+"','"+adMinID+"','"+value+"','"+pdtTyp+"','"+strCd+"')");	
				}
			}
		}
		AjaxController.updateRcvdPrtyOfAlyPrcsAjax(ary);
	}
	
	function myModelOfShowForEachRowExst(ths){
		var res='<div class="form-group"> <div class="col-md-6"><label class="control-label" style="color: #12ad8d;">Given(%)</label> </div><div class="col-md-6"><label class="control-label" style="color: #12ad8d;">Calculated Wgt</label> </div><div class="col-md-4"> </div></div>';
		if($(ths).closest("tr").find(".selectpicker").val()!=""){
		var aly=existAlyDetls.find(x=>{
			return x.am_aly_cd==$(ths).closest("tr").find(".selectpicker").val()
			});
		var isAlyVal=Number($(ths).html());
		if(aly!=""&&aly!=undefined){var total=0,totAly=0;
			var catgry={};catgry[aly.am_aly_ctgy1]=aly.am_aly_val1,catgry[aly.am_aly_ctgy2]=aly.am_aly_val2
			,catgry[aly.am_aly_ctgy3]=aly.am_aly_val3,catgry[aly.am_aly_ctgy4]=aly.am_aly_val4,catgry[aly.am_aly_ctgy5]=aly.am_aly_val5,
			catgry[aly.am_aly_ctgy6]=aly.am_aly_val6,catgry[aly.am_aly_ctgy7]=aly.am_aly_val7;
		$.each(catgry,function(key,val){
			if(key!=""){
				var keyval=Number((val*isAlyVal)/100).toFixed(2)||0;
		res+='  <div class="form-group"> <div class="col-md-2"><label class="control-label">'+key+'</label> </div> <div class="col-md-4">  <input type="text" class="form-control input-sm" placeholder="'+key+'" value="'+val+'" readonly="readonly">'
	       +' </div><div class="col-md-2"><label class="control-label">'+key+'</label> </div> <div class="col-md-4">  <input type="number" class="form-control input-sm issWgtChge" placeholder="'+key+'" value="'+keyval+'" readonly="readonly">'
	       +' </div></div>';total+=Number(keyval);totAly+=Number(val);
			}
	});
	res+='<div class="form-group"> <div class="col-md-2"><label class="control-label" style="color: #08c;">Total</label> </div><div class="col-md-4"><input type="text" class="form-control input-sm"  value="'+totAly.toFixed(2)+'" readonly="readonly"> </div><div class="col-md-2"><label class="control-label" style="color: #08c;">Total</label> </div><div class="col-md-4"><input type="text" class="form-control input-sm"  value="'+total.toFixed(2)+'" readonly="readonly"> </div></div>';
		}
		}
			$("#CatWithValDisModel").html(res);
	$("#myModal1").modal('show');
	}
	
	
	
	$(function (){
		$("#myTable").delegate(".covertedPrtys,.issuedMtelWght,.expectedprtyofaly","keyup change",function(){
			var trOne=$(this).closest("tr");
			var isuedMtlWgt=trOne.find(".issuedMtelWght").val()||0;
			var convertedWgt=trOne.find(".covertedPrtys").val()||0;
			var reqPrtyOfMtl=trOne.find(".expectedprtyofaly").val()||0;
			var mtlPrty=trOne.find(".metlOrgPrty").html()||0;
			if(Number(isuedMtlWgt)>Number(trOne[0].cells[3].innerHTML)){
				isuedMtlWgt=trOne[0].cells[3].innerHTML||0;
				trOne.find(".issuedMtelWght").val(isuedMtlWgt);
			}
			var prtyLoss=((Number(isuedMtlWgt)*Number(mtlPrty))/Number(reqPrtyOfMtl))-((Number(isuedMtlWgt)*Number(mtlPrty))/Number(convertedWgt));
			prtyLoss=/(NaN|infinity|-infinity)/i.test(prtyLoss)?prtyLoss="":prtyLoss.toFixed(2);
			trOne.find(".purtyLossOfMetal").html(prtyLoss);
			var issuAly=((Number(isuedMtlWgt)*Number(mtlPrty))/Number(convertedWgt))-Number(isuedMtlWgt);
			issuAly=/(NaN|infinity|-infinity)/i.test(issuAly)?issuAly="":issuAly.toFixed(2);
			 $(this).closest("tr").find(".issuessWgtOfAly").html(issuAly);
				calSumOfTotAlyWgt();	 
		});
		$("#myTable").delegate(".rcvdWgtOdMtl,.testSmplMtl,.dustSmplMtl","keyup change",function(){
			var rcvdWgtOdMtl=$(this).closest("tr").find(".rcvdWgtOdMtl").val();
			var testSmplMtl=$(this).closest("tr").find(".testSmplMtl").val();
			var dustSmplMtl=$(this).closest("tr").find(".dustSmplMtl").val();	
			var isuedMtlWgt=$(this).closest("tr").find(".issuedMtelWght").val();
			var isuedAluWgt= $(this).closest("tr").find(".issuessWgtOfAly").html();
			var calcul=(Number(isuedMtlWgt)+Number(isuedAluWgt))-(Number(rcvdWgtOdMtl)+Number(testSmplMtl)+Number(dustSmplMtl)).toFixed(3);
			$(this).closest("tr")[0].cells[14].innerHTML=calcul.toFixed(3);
			calSumOfTotAlyWgt();
		})
	});
	
	
	
	
	
	
	////////////// recvied weight calculation ///////////////////////////////////
	var crntOfIsedPrtyTr;
function issPrtyCal(ths){
	var tr=$(ths).closest("tr");
	crntOfIsedPrtyTr=tr;
	var jsonOfIsedAly=$(tr).find("td:eq(12)").attr("id");
	if(jsonOfIsedAly){
		var json=JSON.parse(jsonOfIsedAly);
		$("#ta1tstIssedSmpe").html(json.aphd_tst_smp1);$("#tb1tstIssedSmpe").html(json.aphd_tst_smp3);$("#ta2tstIssedSmpe").html(json.aphd_tst_smp2);
		$("#tb2tstIssedSmpe").html(json.aphd_tst_smp4);
	}
	else{
		$("#ta1tstIssedSmpe,#tb1tstIssedSmpe,#ta2tstIssedSmpe,#tb2tstIssedSmpe").html("");
	}
	var td=$(ths).closest("td");
	var jstn=td.attr("id")||$(ths).attr("id");
	if(jstn){
		var json=JSON.parse(jstn);
		$("#ta1tstPrty").val(json.aphd_tstd_prty1);$("#tb1tstPrty").val(json.aphd_tstd_prty3);
		$("#ta2tstPrty").val(json.aphd_tstd_prty2);$("#tb2tstPrty").val(json.aphd_tstd_prty4);
		var ind=0;
		  if($("#authRevdAuthForId").val()=="1"){
		$.each(json,(key,val)=>{
			if(val)
			$("#myPrtySample input:eq("+ind+")").prop("disabled",true);
			ind++;
		})
		  }
		  else{
			  $("#myPrtySample input").prop("disabled",false);
		  }
	}
	else{
		 $("#myPrtySample input").prop("disabled",false);
		$(".rtnPrtyies").val("")
		}
	$("#myPrtySample").modal('show');
	
}

function saveprityForBox(){
	var givenPrty={aphd_tstd_prty1:$("#ta1tstPrty").val(),aphd_tstd_prty2:$("#tb1tstPrty").val(),aphd_tstd_prty3:$("#ta2tstPrty").val(),
	aphd_tstd_prty4:$("#tb2tstPrty").val()};

	var collection=$(".rtnPrtyies").toArray().map(s=>Number($(s).val())||null).filter(s=>s!=null);
	var min=Math.min.apply(null,collection)||0;
	var prtyBox=$(crntOfIsedPrtyTr).find("td:eq(15) input");
	prtyBox.attr("oldPrty",prtyBox.val());
	prtyBox.val(min.toFixed(2));
	prtyBox.attr("id",JSON.stringify(givenPrty));
	calSumOfTotAlyWgt();
	var id=prtyBox.attr("onchangeFunction");
	if(id){
		var val=Object.values(givenPrty);
		var isdamaged=val.some(s=>{if(!s||Number(s)==0)
		{return true;}});
	//	updateRcvdPrtyOfAlyPrcs(min,JSON.stringify(givenPrty),id,!isdamaged,$(crntOfIsedPrtyTr));
	}
	$("#myPrtySample").modal('hide');
}
	