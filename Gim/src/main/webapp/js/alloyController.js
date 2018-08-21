/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddTree(ths){
	if(ths.checked==true)
		{
		$(".childCheckBox").each(function(){
			$(this)["0"].checked=true;
		})
		 $(".childCheckBoxExist").prop("checked",true);
		}
	else{
		$(".childCheckBox").each(function(){
			$(this)["0"].checked=false;
		})
		 $(".childCheckBoxExist").prop("checked",false);
	}
	 calSumOfTotAlyWgt();
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
		 calSumOfTotAlyWgt();
	})
});

function calSumOfTotAlyWgt(){
	var rcvdWgt=0,rcvdPrty=0,isdwgt=0,convertPrty=0,exptprty=0;
	$(".childCheckBox:checked").each(function(){
		var trs=$(this).closest("tr");
		rcvdWgt+=Number(trs.find(".rcvdWgtOdMtl").val())+Number(trs.find(".testSmplMtl").val())+Number(trs.find(".dustSmplMtl").val());
		rcvdPrty+=Number($(trs["0"].cells[15]).find("input").val());
		isdwgt+=(Number(trs.find(".issuedMtelWght").val())+Number(trs.find(".issuessWgtOfAly").html()));
		convertPrty+=Number(trs.find(".covertedPrtys").val());
		exptprty+=Number(trs.find(".expectedprtyofaly").val());
	})
	var bal=(isdwgt-rcvdWgt).toFixed(2)||0;
	$("#rcvdWgtOfAly").val(rcvdWgt.toFixed(2));$("#rcvdPrtyOfAly").val(rcvdPrty.toFixed(2));
	$("#isdWgtOfAly").val(isdwgt.toFixed(2));$("#exptCnvtWgtOfAly").val(convertPrty.toFixed(2));
	$("#exptPrtyOfAly").val(exptprty.toFixed(2));$("#balWgtOfAly").val(bal);
}
////////////////////////end/////////////////////////////////\

/////////////////////// alloy alyTypeBaseAdd in addalloy Page/////////////////////
$("#alyCmyCd,#alyTypeBase").on("change",function(){
	var alytpe=$("#alyTypeBase").val(),alycmycd=$("#alyCmyCd").val();
	if(alytpe=="100"){
		
		var qry="select s.stm_itm_cd,(case when stm_stk_trn_typ='Inward' and stm_stk_itm_typ='Raw Metrial' then (select top 1 rm_mst_pdt_nm from raw_mtr_mst where stm_itm_cd=rm_mst_pdt_id and [rm_mst_sts]=1) else stm_stk_itm_typ end) as nmitm,s.stm_rcvd_stk_wgt,s.stm_rcvd_stk_prty,s.stm_stk_pure_gld_wgt,s.stm_id,s.stm_stk_itm_typ,stm_dpt_cd,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal,dm_dpt_nm as dpt from stk_mst s left join dpt_mst on dm_dpt_cd=stm_dpt_cd and dm_cmy_cd=stm_cmy_cd where dm_sts=1 and "
			+ " cast(s.stm_rcvd_stk_wgt as decimal(20,3))>0 and s.stm_stk_trn_typ in ('Inward','RecoveryRecieved','OutSide_Inward') and stm_rcvd_stk_prty <> '0' and stm_rcvd_stk_prty <> '0.00' and s.stm_cmy_cd='"+alycmycd+"' and (dm_iss_outwd!='YES' or dm_iss_outwd is null) "
		
		AjaxController.getInwardRecForAddAlloyAjax(qry,returnResOfaly)
	}
	else if(alytpe=="OutSide Process"){
		var qry="select s.stm_itm_cd,'' as nmitm,s.stm_rcvd_stk_wgt,s.stm_rcvd_stk_prty,s.stm_stk_pure_gld_wgt,s.stm_id,s.stm_stk_itm_typ,stm_dpt_cd,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal,(select top 1 dm_dpt_nm from dpt_mst where dm_sts=1 and dm_dpt_cd=stm_dpt_cd) as dpt from stk_mst s where "
			+ " cast(s.stm_rcvd_stk_wgt as decimal(20,3))>0 and s.stm_stk_trn_typ in ('ScrapMetal') and stm_rcvd_stk_prty='100' and s.stm_cmy_cd='"+alycmycd+"' "
		
		AjaxController.getInwardRecForAddAlloyAjax(qry,returnResOfaly)
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
var resultOfFilter='',getAvailableDate=new Set();
function available(date) {
	if([...getAvailableDate].length){
  	var yearNow=(new Date().getFullYear()+"").substring(0,2),mnths=["RL","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  	  var availableDates=[...getAvailableDate].map(d=>{
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
   }


function returnResOfaly(res){
	var result='';
	var table = $('#myTable').DataTable().clear();table.destroy();
	$(".parentCheckBox")["0"].checked=false;
	if(res!=null){
		var opt='<option value="" selected disabled>Select Type</option>';
		var option=new Set();
		option.add('<option value="">Select DepartMent</option>');
		$.grep(existAlyDetls,function(i){
			opt+='<option value=\''+JSON.stringify(i)+'\'>'+i.am_aly_nm+'</option>';
		})
		for(var i=0;i<res.length;i++){
			var style=getPurityColor(res[i][3]);
			option.add('<option value="'+res[i][7]+'">'+res[i][10]+'</option>');
			var mtlwgt=(res[i][2])&&Number((res[i][2])).toFixed(2);
			result+='<tr '+style+'><td id="'+res[i][8]+'" value="'+res[i][9]+'"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" id="'+res[i][7]+'" title="'+res[i][5]+'">'
		      +' <span></span></label></td> <td>'+res[i][0]+'</td><td>'+res[i][1]+'</td>  <td>'+mtlwgt+'</td> <td class="metlOrgPrty">'+res[i][3]+'</td><td><select class="selectpicker" data-live-search="true"  data-container="body" data-width="70px" onchange="takeAlyDetailFromSelectBox(this)">'+opt+'</select></td>  <td><input type="number" class="form-control issuedMtelWght" style=""></td> <td><input type="number" class="form-control covertedPrtys" style=""></td> <td class="regrdPrtyOfMtl"><input class="form-control expectedprtyofaly" type="number"></td><td class="purtyLossOfMetal"> </td>'
		     +'<td onclick="myModelOfShowForEachRow(this)" class="issuessWgtOfAly"></td>   <td><input type="number" class="form-control rcvdWgtOdMtl" style="" ></td>'
		       +' <td id=""><input type="number" class="form-control testSmplMtl" readonly aphd_isd_tst_smp style="" onclick="openModelOfTestSample(this)"></td><td><input type="number" class="form-control dustSmplMtl" style="" ></td> <td></td> <td><input type="number" class="form-control" style=""  readonly onclick="issPrtyCal(this)"></td></tr>';
		}
		
	}
	$("#dptOfInwrdRec").html([...option]).val(depty.split(",")[0]).selectpicker("refresh");
	$("#myTbodyAly").html(result);resultOfFilter=result;
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
//	$(".datepicker").datepicker({ beforeShowDay: available ,todayHighlight: false});
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
				var dpt="";
			var tempdept='';
			for(var i=0;i<dptSel.length;i++){
				if(i==0) tempdept=dptSel;
				else tempdept+=","+dptSel;
			}
				if(tempdept!="") dpt="and stm_dpt_cd in ("+tempdept+")";
				var qry="select s.stm_itm_cd,(case when stm_stk_trn_typ='Inward' and stm_stk_itm_typ='Raw Metrial' then (select top 1 rm_mst_pdt_nm from raw_mtr_mst where stm_itm_cd=rm_mst_pdt_id and [rm_mst_sts]=1) else stm_stk_itm_typ end) as nmitm,s.stm_rcvd_stk_wgt,s.stm_rcvd_stk_prty,s.stm_stk_pure_gld_wgt,s.stm_id,s.stm_stk_itm_typ,stm_dpt_cd,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal,dm_dpt_nm as dpt from stk_mst s left join dpt_mst on dm_dpt_cd=stm_dpt_cd and dm_cmy_cd=stm_cmy_cd where dm_sts=1 and "
					+ " cast(s.stm_rcvd_stk_wgt as decimal(20,3))>0 and s.stm_stk_trn_typ in ('Inward','RecoveryRecieved','OutSide_Inward') and stm_rcvd_stk_prty <> '0' and stm_rcvd_stk_prty <> '0.00' and s.stm_cmy_cd='"+alycmycd+"'  "+dpt+" and (dm_iss_outwd!='YES' or dm_iss_outwd is null) "
				AjaxController.getInwardRecForAddAlloyAjax(qry,returnResOfalyFilter);
//			AjaxController.seacrhBasedOnDptAndDateAjax(dptSel,date,alycmycd,returnResOfalyFilter);
		}
	})
});

function returnResOfalyFilter(res){
	var result='';	var table = $('#myTable').DataTable().clear();table.destroy();
	$(".parentCheckBox")["0"].checked=false;
	if(res!=null){
		var opt='<option value="" selected disabled>Select Type</option>';
		$.grep(existAlyDetls,function(i){
			opt+='<option value=\''+JSON.stringify(i)+'\'>'+i.am_aly_nm+'</option>';
		})
		for(var i=0;i<res.length;i++){
			var mtlwgt=(res[i][2])&&Number((res[i][2])).toFixed(2);
			var style='';
			if(caratList && caratList.length){
				var caratobj=caratList.find((a)=>(+a.crtm_carat_prty).toFixed(2)==(+res[i][3]).toFixed(2))	
				style=caratobj && 'style="background-color:'+caratobj.crtm_carat_clr+' !important"' || '';
			}
			result+='<tr '+style+'><td id="'+res[i][8]+'" value="'+res[i][9]+'"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][6]+'" id="'+res[i][7]+'" title="'+res[i][5]+'">'
		      +' <span></span></label></td> <td>'+res[i][0]+'</td><td>'+res[i][1]+'</td>  <td>'+mtlwgt+'</td> <td class="metlOrgPrty">'+res[i][3]+'</td><td><select class="selectpicker" data-live-search="true"  data-container="body" data-width="70px" onchange="takeAlyDetailFromSelectBox(this)">'+opt+'</select></td>  <td><input type="number" class="form-control issuedMtelWght" style=""></td> <td><input type="number" class="form-control covertedPrtys" style=""></td> <td class="regrdPrtyOfMtl"><input class="form-control expectedprtyofaly" type="number"></td><td class="purtyLossOfMetal"> </td>'
		     +'<td onclick="myModelOfShowForEachRow(this)" class="issuessWgtOfAly"></td>   <td><input type="number" class="form-control rcvdWgtOdMtl" style="" ></td>'
		       +' <td id=""><input type="number" class="form-control testSmplMtl" readonly aphd_isd_tst_smp style="" onclick="openModelOfTestSample(this)"></td><td><input type="number" class="form-control dustSmplMtl" style="" ></td> <td></td> <td><input type="number" class="form-control" style=""  readonly onclick="issPrtyCal(this)"></td></tr>';
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
var CurntRes;
function openModelOfTestSample(ths){
	$('.fooderAlert').html('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>')	
	CurntRes=$(ths).closest("td");var tdId=$(ths).closest("td")[0].id;
	var JsonStr=tdId!=undefined&&tdId!=""?JSON.parse(tdId):{aphd_tst_smp1:0,aphd_tst_smp2:0,aphd_tst_smp3:0,aphd_tst_smp4:0};
	$("#ta1Smpl").val(JsonStr.aphd_tst_smp1),$("#ta2Smpl").val(JsonStr.aphd_tst_smp2),$("#tb1Smpl").val(JsonStr.aphd_tst_smp3),$("#tb2Smpl").val(JsonStr.aphd_tst_smp4)
	var isdtstsmpl=$(ths).attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
	var isdSmplJson=JSON.parse(isdtstsmpl)||{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$.each(isdSmplJson,(key,val)=>{
		$("["+key+"]").prop("checked",val);
	});
	$("[tst_smpl_one],[tst_smpl_three]").prop("checked",true);
	$("#myModalSample").modal('show');
}
function saveTheJsonInTr(){
	var rcvdWgt=$($(CurntRes).closest("tr")[0].cells[11]).find("input").val();
	var isuedWgt=$(CurntRes).closest("tr").find(".issuedMtelWght").val();
	var isuedAlyWgt=$(CurntRes).closest("tr").find(".issuessWgtOfAly").html();
	var totSamplWgt=Number($("#ta1Smpl").val())+Number($("#ta2Smpl").val())+Number($("#tb1Smpl").val())+Number($("#tb2Smpl").val());
	var Jsn={aphd_tst_smp1:$("#ta1Smpl").val(),aphd_tst_smp2:$("#ta2Smpl").val(),aphd_tst_smp3:$("#tb1Smpl").val(),aphd_tst_smp4:$("#tb2Smpl").val()};
	CurntRes[0].id=JSON.stringify(Jsn);
	$(CurntRes).find("input").val(totSamplWgt.toFixed(2));
	var isdSmplJson={"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$.each(isdSmplJson,(key,val)=>{
		isdSmplJson[key]=$("#myModalSample ["+key+"]").prop("checked");
	});
	$(CurntRes).find("input").attr("aphd_isd_tst_smp",JSON.stringify(isdSmplJson));
	$("#myModalSample").modal('hide');
	
	$(CurntRes).find(".testSmplMtl").change();
}
/////////////////////////////takeAlyDetailFromSelectBox ////////////////////
function takeAlyDetailFromSelectBox(ths){
	if($(ths).val()!=""){
var aly=JSON.parse($(ths).val());
	if(aly!=null&&aly!=""){
	$($(ths).closest("tr")["0"].cells[10]).val($(ths).val());
	$(ths).attr("id",aly.am_aly_cd);
	}
	}
	else{
		$(ths).closest("tr")["0"].cells[10].innerHTML="";
	}
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
	res+='<div class="form-group"> <div class="col-md-2"><label class="control-label" style="color: #08c;">Total</label> </div><div class="col-md-4"><input type="text" class="form-control input-sm"  value="'+totAly.toFixed(2)+'" readonly="readonly"> </div><div class="col-md-2"><label class="control-label" style="color: #08c;">Total</label> </div><div class="col-md-4"><input type="text" class="form-control input-sm"  value="'+Number(total).toFixed(2)+'" readonly="readonly"> </div></div>';
		}
		}
			$("#CatWithValDisModel").html(res);
			/*$(".issWgtChge").on("keyup change",function (){
				var sum=0;
				$(".issWgtChge").each(function(){
					sum+=Number($(this).val());
				});
				var tot=Number($(ths).closest("tr")["0"].cells[3].innerHTML)+Number(sum);
				var bal=Number(tot)-Number($($(ths).closest("tr")["0"].cells[10]).find("input").val());
				$(ths).closest("tr")["0"].cells[9].innerHTML=tot.toFixed(2);
				$(ths).closest("tr")["0"].cells[12].innerHTML=bal.toFixed(2);
			})*/
	$("#myModal1").modal('show');
}
////////////////////////// end////////////////////////////////////////
	//////////////////balance weight calculate //////////////////////////'
	

	function balanceWgtcalCulation(ths){
	/*	var isuWgt=$(ths).closest("tr")["0"].cells[9].innerHTML,rcvdWgt=$($(ths).closest("tr")["0"].cells[10]).find("input").val()
		smplWgt=$($(ths).closest("tr")["0"].cells[11]).find("input").val();
		var sumOfSmplRcv=Number(rcvdWgt)+Number(smplWgt);
		if(sumOfSmplRcv<isuWgt){
		$(ths).closest("tr")["0"].cells[12].innerHTML=(Number(isuWgt)-sumOfSmplRcv).toFixed(2);}
		else{
			$(ths).closest("tr")["0"].cells[12].innerHTML=0;$($(ths).closest("tr")["0"].cells[10]).find("input").val(isuWgt);
			$($(ths).closest("tr")["0"].cells[11]).find("input").val(0);	
		}*/
	}
	//////////////////////// end ////////////////////////////////////////
	$(function (){
		$("#alyWrkCd").change(function(){
			if($(this).val()!=""){
				var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as decimal(20,3))),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' "
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
		if($("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
			var issWgts=0;
			$('.childCheckBox:checked').each(function(){
				issWgts+=Number($(this).closest("tr").find(".issuessWgtOfAly").html());
			});
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
		if($("#isdauthVal").val()=="1"){
			$("#saveButtonAly").addClass("disabled");
			$("#saveButtonAly").addClass("btn-circlesuc");
			saveFinalAlyPrcsDetailAfter();		
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
			'<button type="button" onclick="saveFinalAlyPrcsDetailAfter()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#savesuccessRes").html(" ")\'>No</button></div>');		
		}
}
	
	function saveFinalAlyPrcsDetailAfter(){
	var rcvdWgtOfAly=$("#rcvdWgtOfAly").val(),rcvdPrtyOfAly=$("#rcvdPrtyOfAly").val(),dateIn=$(".dateTimePick").val().split(" ")[0];
		var cmycd=$("#alyCmyCd").val(),strCd=$("#alyStrCd").val(),wrkCd=$("#alyWrkCd").val(),alyCd=$("#alyAlyCd").val(),alyTyp=$("#alyTypeBase").val(),alyDt=$("#alyAlyDt").val();
		
		var dpt=$("#dptOfInwrdRec").val();
		
		var isexpPrtyEmpty=0,isconPrtyEmpty=0,isIssueWgtEmpty=0,isAlyTyp=0;
		$(".childCheckBox:checked").each(function(){
			var TrOne=$(this).closest("tr");
			var expPrty=TrOne.find(".expectedprtyofaly").val();
			if(expPrty=='') isexpPrtyEmpty++;
		});
		$(".childCheckBox:checked").each(function(){
			var TrOne=$(this).closest("tr");
			var issmtlwgt=TrOne.find(".issuedMtelWght").val();
			if(issmtlwgt=='') isIssueWgtEmpty++;
			
		});
		$(".childCheckBox:checked").each(function(){
			var TrOne=$(this).closest("tr");
			var conPrty=$(TrOne["0"].cells[7]).find("input").val();
			if(conPrty=='') isconPrtyEmpty++;
			
		});
		$(".childCheckBox:checked").each(function(){
			var TrOne=$(this).closest("tr");
			var alytyp=$(TrOne["0"].cells[5]).find("select").attr("id");
			if(alytyp==undefined) isAlyTyp++;
			
		});
	
		if(cmycd!=""&&strCd!=""&&wrkCd!=""&&alyCd!="" && Number(isexpPrtyEmpty)==Number(0) && dpt!=null && Number(isconPrtyEmpty)==Number(0) && Number(isAlyTyp)==Number(0) && Number(isAlyTyp)==Number(0) ){
		if($(".childCheckBox:checked").length>0){
			AjaxController.checkAlloyDocNoInDb(alyCd,(data)=>{
				if(data&&data.length){
					$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd4"> Entered Alloy Number Already Used...</div>');$("#hidealyAlyCd4").fadeOut(3000);			
				}
				else{
					$("#saveButtonAly").addClass("disabled");$("#saveButtonAly").prop("disabled",true);
					$("#savesuccessRes").html('<div class="alert alert-info" > Saving Please Wait... </div>');$("#hidealyAlyCd5").fadeOut(3000);	
					var apHdrDtl=[],aphHdrOnly={};var stkManageQry=[],iwdStkHndle=[],stkPriAry=[];
					$(".childCheckBox:checked").each(function(){
						var TrOne=$(this).closest("tr");
						var alyTypeCd=$(TrOne["0"].cells[5]).find("select").attr("id"),expPrty=TrOne.find(".expectedprtyofaly").val(),tstSamplePrty=TrOne.find("td:eq(15)").attr("id");
						var rcvdStkCal=Number(TrOne["0"].cells[3].innerHTML),mtlPrty=TrOne["0"].cells[4].innerHTML;
						var doc=$(this).closest("td")["0"].id,Pval=$($(this).closest("td")["0"]).attr("value"),primId=$(this).attr("title")||0;
						var dptCd=$(this)["0"].id,pdtTyp=$(this).val(),pdtCd=TrOne["0"].cells[1].innerHTML,prtyLos=$(TrOne["0"].cells[9]).html(),
						conPrty=$(TrOne["0"].cells[7]).find("input").val(),isWgt=TrOne.find(".issuedMtelWght").val(),rcvdWgt=$(TrOne["0"].cells[11]).find("input").val(),
						blWgt=TrOne["0"].cells[14].innerHTML,rcvdPrty=$(TrOne["0"].cells[15]).find("input").val();
						var tstSmpl=TrOne.find("td:eq(12) input").val(),tstJson,tstSmplJsonN=TrOne.find("td:eq(12)").attr("id");
						var dustWgt=TrOne.find(".dustSmplMtl").val(),issuAly= TrOne.find(".issuessWgtOfAly").html();
						var isdtstsmplstr=TrOne.find(".testSmplMtl").attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
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
						var main={aphd_isd_tst_smp:isdtstsmplstr,aphd_smpl_rcvd_prty:tstSamplePrty,aphd_iss_aly:issuAly,aphd_dst_mtl:dustWgt,aphd_tot_tst_smp:tstSmpl,aphd_am_aly_typ_cd:alyTypeCd,aphd_expt_prty:expPrty,aphd_cmy_cd:cmycd,aphd_str_cd:strCd,aphd_aly_typ:alyTyp,aphd_aly_no:alyCd,aphd_dpt_cd:dptCd,aphd_wrk_cd:wrkCd,
								aphd_pdt_cd:pdtCd,aphd_pdt_typ:pdtTyp,aphd_prty_ls:prtyLos,aphd_cvt_prty:conPrty,aphd_iss_wgt:isWgt,aphd_rcvd_wgt:rcvdWgt,prm_IdStk:primId,stkWgtBal:Number(rcvdStkCal)-Number(isWgt),
								aphd_tst_smp:tstSmpl,aphd_bal_wgt:blWgt,aphd_rcvd_prty:rcvdPrty,aphd_iss_auth:false,aphd_rcvd_auth:false,aphd_aly_sts:true,doc_vl:doc,pg_val:Pval,aphd_mtl_wgt:rcvdStkCal,aphd_mtl_prty:mtlPrty};
						if($("#isdauthVal").val()=="1"){
							main.aphd_iss_auth=true;
							var totRcvdWdt=((+isWgt||0)+(+issuAly||0)).toFixed(2);
							stkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast("+isWgt+" as decimal(20,3))) where stm_id='"+primId+"'");
							stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+totRcvdWdt+" as decimal(20,3))) where stm_itm_cd='"+pdtCd+"' " +
									"and stm_stk_trn_typ='AlloyIssue' and stm_stk_crt_id='"+wrkCd+"' and stm_stk_itm_typ='"+pdtTyp+"' and stm_rcvd_stk_prty='"+expPrty+"' " +
									" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
											" values ('"+cmycd+"','"+dptCd+"','"+pdtCd+"','"+totRcvdWdt+"','"+dateIn+"','"+wrkCd+"','AlloyIssue','"+dateIn+"','"+wrkCd+"','"+expPrty+"','"+pdtTyp+"','"+strCd+"')");
						}
						apHdrDtl.push(Object.assign(main,tstJson));
					});
					var totExpCntWgt=$("#exptCnvtWgtOfAly").val();
					aphHdrOnly={};var totIsdWgt=$("#isdWgtOfAly").val(),balwgt=$("#balWgtOfAly").val(),exptprty=$("#exptPrtyOfAly").val();
					if($("#isdauthVal").val()=="1"){
				aphHdrOnly={aph_cmy_cd:cmycd,aph_str_cd:strCd,aph_aly_typ:alyTyp,aph_aly_no:alyCd,aph_aly_dt:alyDt,aph_tot_isd_wgt:totIsdWgt,aph_tot_bal_wgt:balwgt,aph_expt_prty:exptprty,aph_tot_rcvd_wgt:rcvdWgtOfAly,aph_tot_rcvd_prty:rcvdPrtyOfAly,aph_cnvt_prty:totExpCntWgt,aph_iss_auth:true,aph_rcvd_auth:false,aph_aly_sts:true};
				}

			if($("#isdauthVal").val()=="0"){
				aphHdrOnly={aph_cmy_cd:cmycd,aph_str_cd:strCd,aph_aly_typ:alyTyp,aph_aly_no:alyCd,aph_aly_dt:alyDt,aph_tot_isd_wgt:totIsdWgt,aph_tot_bal_wgt:balwgt,aph_expt_prty:exptprty,aph_tot_rcvd_wgt:rcvdWgtOfAly,aph_tot_rcvd_prty:rcvdPrtyOfAly,aph_cnvt_prty:totExpCntWgt,aph_iss_auth:false,aph_rcvd_auth:false,aph_aly_sts:true};
				}
					AjaxController.saveAlyPrcsHdrDetInAjax(JSON.stringify(apHdrDtl),JSON.stringify(aphHdrOnly),stkManageQry,false,sucResOfAlySave);
				
					
				}
				
			});
			
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
			}else if(dpt==null){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd2"> Select Department</div>');$("#hidealyAlyCd2").fadeOut(3000);
			}else if(wrkCd==""){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd3"> Select Worker Code </div>');$("#hidealyAlyCd3").fadeOut(3000);	
			}else if(Number(isexpPrtyEmpty)!=Number(0)){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd3">Please enter Exp.Prty</div>');$("#hidealyAlyCd3").fadeOut(3000);	
			}else if(Number(isconPrtyEmpty)!=Number(0)){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd3">Please enter Cnvt.Prty </div>');$("#hidealyAlyCd3").fadeOut(3000);	
			}else if(Number(isIssueWgtEmpty)!=Number(0)){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd3">Please enter Iss.Mtl.Wgt</div>');$("#hidealyAlyCd3").fadeOut(3000);	
			}else if(Number(isAlyTyp)!=Number(0)){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealyAlyCd3">Please Select Aly.Typ</div>');$("#hidealyAlyCd3").fadeOut(3000);	
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
			if(Number(rcvdWgtOdMtl)+Number(testSmplMtl)+Number(dustSmplMtl)>(Number(isuedMtlWgt)+Number(isuedAluWgt))){
				rcvdWgtOdMtl=(Number(isuedMtlWgt)+Number(isuedAluWgt));testSmplMtl=0;dustSmplMtl=0;
				$(this).closest("tr").find(".dustSmplMtl").val(dustSmplMtl);
				$(this).closest("tr").find(".testSmplMtl").val(testSmplMtl);
				$(this).closest("tr").find(".rcvdWgtOdMtl").val(rcvdWgtOdMtl);
			}
			var calcul=(Number(isuedMtlWgt)+Number(isuedAluWgt))-(Number(rcvdWgtOdMtl)+Number(testSmplMtl)+Number(dustSmplMtl)).toFixed(2);
			$(this).closest("tr")[0].cells[14].innerHTML=calcul.toFixed(2);
			calSumOfTotAlyWgt();
		})
	});
	

	////////////end /////////////////////////////////////////////////////////
	
	
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
	if(td.attr("id")){
		var json=JSON.parse(td.attr("id"));
		$("#ta1tstPrty").val(json.aphd_tstd_prty1);$("#tb1tstPrty").val(json.aphd_tstd_prty2);
		$("#ta2tstPrty").val(json.aphd_tstd_prty3);$("#tb2tstPrty").val(json.aphd_tstd_prty4);
	}
	else{
		$(".rtnPrtyies").val("")
		}
	$("#myPrtySample").modal('show');
	
}

function saveprityForBox(){
	var givenPrty={aphd_tstd_prty1:$("#ta1tstPrty").val(),aphd_tstd_prty2:$("#tb1tstPrty").val(),aphd_tstd_prty3:$("#ta2tstPrty").val(),
	aphd_tstd_prty4:$("#tb2tstPrty").val()};

	var collection=$(".rtnPrtyies").toArray().map(s=>Number($(s).val())||null).filter(s=>s!=null);
	var min=Math.min.apply(null,collection)||0;
	$(crntOfIsedPrtyTr).find("td:eq(15) input").val(min.toFixed(2));
	$(crntOfIsedPrtyTr).find("td:eq(15)").attr("id",JSON.stringify(givenPrty));
	calSumOfTotAlyWgt();
	$("#myPrtySample").modal('hide');
}
