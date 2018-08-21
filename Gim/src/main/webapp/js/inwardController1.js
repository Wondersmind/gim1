/////////////////////////AutoComplete In Odd Order Page////////////////

function getAllInwordModelPro(evt, val) {
	if($("#inwrdType").val()!=""){
	if (evt.keyCode == 92 || evt.keyCode == 39||evt.keyCode == 13) {
		return false;
	}
	if (evt.key != "ArrowDown" && evt.key != "ArrowUp"
			&& evt.key != "ArrowRight" && evt.key != "ArrowLeft") {
		if (evt.code == "Quote") {
			$('#srchInInwardModel').val('');
			val = '';
			$('#srchInInwardModel').focus();
		}
		if (val.length >= 0) {
			if($("#inwrdType").val()=="Raw Metrial")
			AjaxController.getSearchRawMeterialResultAjax(val, searchRawMeterialResult);
			else if($("#inwrdType").val()=="BOM")
				AjaxController.getAllBomProductSrchAjax(val, searchBomResult);
			function searchBomResult(res) {
				var collect =new Set();
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
					collect .add('' + res[i][1]+ '-'+ res[i][0] + '');
					}
					$("#srchInInwardModel").autocomplete({
						source : [...collect]
					});
					
				}
			}
			function searchRawMeterialResult(res) {
				var result = "";
				var collect = "";
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
					collect += '' + res[i].rm_mst_pdt_id + '-'
									+ res[i].rm_mst_pdt_nm + ',';
					
					}
					result += collect;
					var resultAuto = result.split(",");
					$("#srchInInwardModel").autocomplete({
						source : resultAuto

					});
					
				}
			}
		}
	}
	}else{
		$("#srchInInwardModel").autocomplete({
			source : []
		});
	$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd1" style="margin-top: 9px;">Please Select Inward Type....</div>');$("#hideInwrd1").fadeOut(3000);
	return false;
	}
}

$(function (){
	$("#inwrdType").on("change",function (){
		$("#srchInInwardModel").val("");
		$("#srchInInwardModel").autocomplete({
			source : []
		});
	});
	$("#myTable tbody").delegate("input","change",function(){
		$(this).val(Number($(this).val()).toFixed(2));
	})
	
});

//////////////////////////////end////////////////////////////

////////////////////////////////add inward product /////////////////
var InwrdHdrDtl=[];
function prfomInwdMdlAdd(){
	var proId=$('#srchInInwardModel').val().split("-");
	if($("#inwrdType").val()=="Raw Metrial"){
		var proDubDet;
		if(InwrdHdrDtl.length>0){
			proDubDet=InwrdHdrDtl.find(function(n, i){
			      return (n.ihd_pdt_cd == proId[0]&&n.ihd_iwd_typ=="Raw Metrial")?n:"";
		    });	
		}
		if(!proDubDet){
		if($("#rwMtrlExistAll").val()!=""){
			var inwrd=JSON.parse($("#rwMtrlExistAll").val());
			var proDet=inwrd.find(function(n, i){
			      return n.rm_mst_pdt_id == proId[0]?n:"";
		    });
			if(proDet){
				var obj=proDet,docNo=$("#iwdDocNo").html(),cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),
				vndrcd=$("#iwdvndrCd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val(),dptcd=$("#iwdDptcd").val();
				InwrdHdrDtl.push({ihd_doc_no:docNo,ihd_cmy_cd:cmycd,ihd_str_cd:strcd,ihd_iwd_typ:typ,ihd_vndr_cd:vndrcd,ihd_vndr_inc_no:incno,ihd_vndr_inc_dt:incdt,ihd_dpt_cd:dptcd,ihd_pdt_cd:obj.rm_mst_pdt_id,
					ihd_mtl_wgt:0,ihd_rcvd_prty:0,ihd_doc_val:0,ihd_pgm_cal:0,ihd_pure_gld_wgt:0,ihd_iwd_sts:true,ihd_pdt_nm:obj.rm_mst_pdt_nm});	
			}
			else{
				$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd9" style="margin-top: 9px;">Entered Raw Metrial Code Is Not Present....</div>');$("#hideInwrd9").fadeOut(3000);		
			}
			}
			else{
				$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd11" style="margin-top: 9px;">Entered Raw Metrial Code Is Not Present....</div>');$("#hideInwrd11").fadeOut(3000);	
			}
		}
		else{
			$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd14" style="margin-top: 9px;">Entered Raw Metrial Code Already Added....</div>');$("#hideInwrd14").fadeOut(3000);	
			
		}
	}
	else if($("#inwrdType").val()=="BOM"){
		var proDubDet;
		if(InwrdHdrDtl.length>0){
			proDubDet=InwrdHdrDtl.find( function(n, i){
			      return (n.ihd_pdt_cd == proId[0]&&n.ihd_iwd_typ=="BOM")?n:"";
		    });	
		}
		if(!proDubDet){
		if($("#bomExistAll").val()!=""){
		var inwrd=JSON.parse($("#bomExistAll").val());
		var proDet=inwrd.find(function(n, i){
		      return n.bm_bom_cd == proId[0]?n:"";
	    });
		if(proDet){
			var obj=proDet,docNo=$("#iwdDocNo").html(),cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),
			vndrcd=$("#iwdvndrCd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val(),dptcd=$("#iwdDptcd").val();
			InwrdHdrDtl.push({ihd_doc_no:docNo,ihd_cmy_cd:cmycd,ihd_str_cd:strcd,ihd_iwd_typ:typ,ihd_vndr_cd:vndrcd,ihd_vndr_inc_no:incno,ihd_vndr_inc_dt:incdt,ihd_dpt_cd:dptcd,ihd_pdt_cd:obj.bm_bom_cd,
				ihd_mtl_wgt:0,ihd_rcvd_prty:0,ihd_doc_val:0,ihd_pgm_cal:0,ihd_pure_gld_wgt:0,ihd_iwd_sts:true,ihd_pdt_nm:obj.bm_bom_nm,ihd_iss_auth:false});	
		}
		else{
			$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd15" style="margin-top: 9px;">Entered Bom Code Is Not Present....</div>');$("#hideInwrd15").fadeOut(3000);		
		}
		}
		else{
			$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd16" style="margin-top: 9px;">Entered Bom Code Is Not Present....</div>');$("#hideInwrd16").fadeOut(3000);	
		}
		}
		else{
			$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd17" style="margin-top: 9px;">Entered Bom Code Already Added....</div>');$("#hideInwrd17").fadeOut(3000);		
		}
		
	}

	$('#srchInInwardModel').select();
	$('#srchInInwardModel').focus();
	tableshowOfInwrd();
}

function tableshowOfInwrd(){
var result='';
var table = $('#myTable').DataTable().clear();table.destroy();
if(InwrdHdrDtl.length>0){
	$.grep(InwrdHdrDtl,function (i,n){
		result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" value="'+n+'"><span></span>'
       +'</label></td> <td>'+i.ihd_pdt_cd+'</td> <td>'+i.ihd_pdt_nm+'</td> <td ondblclick="metalWgtEditInAddInw('+n+',this)" class="metalWgtTd">'+i.ihd_mtl_wgt+'</td>  <td ondblclick="rcvdprtyEditInAddInw('+n+',this)"  class="rcvdPrtyTd">'+i.ihd_rcvd_prty+'</td><td ondblclick="docvalEditInAddInw('+n+',this)"  class="docvalTd">'+i.ihd_doc_val+'</td> <td ondblclick="prgcalEditInAddInw('+n+',this)"  class="pgmCalTd">'+i.ihd_pgm_cal+'</td>  <td ondblclick="puregoldEditInAddInw('+n+',this)"  class="preGldWgtTd">'+i.ihd_pure_gld_wgt+'</td> </tr>'
	})
}

$("#myInwrdBody").html(result);
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
		if($(".childCheckBox:checked").length==$(".childCheckBox").length){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
	})
});
} 

//////////////////////////////edit In Table Row /////////////////////////
function calculatepureGoldWeigt(index,ths){
	console.log(ths);
	var MultiWgt=Number($(ths).closest("tr")["0"].cells[3].innerHTML)*Number($(ths).closest("tr")["0"].cells[4].innerHTML);
	var preGWgt=MultiWgt!=0?(MultiWgt)/100:"";
	$(ths).closest("tr")[0].cells[7].innerHTML=preGWgt!=""?preGWgt.toFixed(3):"";
	InwrdHdrDtl[index].ihd_pure_gld_wgt=$(ths).closest("tr")[0].cells[7].innerHTML;
	var someofPre=0;
	$('.preGldWgtTd').each(function(){
		someofPre+=Number($(this).html());
	});
	$("#goldPrtyOfInwrd").val(someofPre.toFixed(3));
}

function metalWgtEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  > <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style=' height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savemetalWgtEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function savemetalWgtEditInAddInw(index,ths){
	var exstCurTd=$(ths).closest("td");
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_mtl_wgt=valIn;
	var rvdWgt=0;
	$(".metalWgtTd").each(function(){
		rvdWgt+=Number($(this).html());
	});
	$("#rcvdWgtOfInwrd").val(rvdWgt.toFixed(2));
	calculatepureGoldWeigt(index,exstCurTd);
	}
function rcvdprtyEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"' > <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savercvdprtyEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function savercvdprtyEditInAddInw(index,ths){
	var exstCurTd=$(ths).closest("td");
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_rcvd_prty=valIn;
	var rvdWgt=0;
	$(".rcvdPrtyTd").each(function(){
		rvdWgt+=Number($(this).html());
	});
	$("#rcvdPrtyOfInwrd").val(rvdWgt.toFixed(2));
	calculatepureGoldWeigt(index,exstCurTd)
	}
function docvalEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  > <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savedocvalEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function savedocvalEditInAddInw(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_doc_val=valIn;
	}
function prgcalEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  > <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveprgcalEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function saveprgcalEditInAddInw(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_pgm_cal=valIn;
	}
function puregoldEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"' > <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savepuregoldEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function savepuregoldEditInAddInw(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_pure_gld_wgt=valIn;
	var rvdWgt=0;
	$(".preGldWgtTd").each(function(){
		rvdWgt+=Number($(this).html());
	});
	$("#goldPrtyOfInwrd").val(rvdWgt.toFixed(2));
	}
///////////////////////end./////////////////////////////////

/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddTree(ths){
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
}
$(function (){
	$(".childCheckBox").on("click",function(){
		if($(".childCheckBox:checked").length==$(".childCheckBox").length){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
	})
});
////////////////////////end/////////////////////////////////\

//////////////////////delete Added Inword Rec In Array//////////////
function delAddedIwdHdrDetInAry(){
	if($(".childCheckBox:checked").length>0){
		var indx=[];
		$(".childCheckBox:checked").each(function(){
			indx.push($(this).val());
		});
		for (var i = indx.length -1; i >= 0; i--)
			InwrdHdrDtl.splice(indx[i],1);
		$("#successResult").html('<div class="alert alert-success" id="hideInwrdSuc12">Record Deleted Success</div>');$("#hideInwrdSuc12").fadeOut(2500);
		$(".parentCheckBox")["0"].checked=false;
		tableshowOfInwrd();
	}
	else{
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc1">Select Records ....</div>');$("#hideInwrdSuc1").fadeOut(3000);	
	}
}
///////////////end/////////////////////////////////////////////////
////////////////////////////save addinward product//////////////////////

function saveinwardaddProduct(){
	var docNo=$("#iwdDocNo").html();
	var gldPrty=$("#goldPrtyOfInwrd").val(),rcdprty=$("#rcvdPrtyOfInwrd").val(),mtlwgt=$("#rcvdWgtOfInwrd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val();
	var cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),incDate=$("#iwdvndrIncDt").val(),inocNo=$("#iwdvndrIncNo").val(),dptCd=$("#iwdDptcd").val(),vndrcd=$("#iwdvndrCd").val();
	
	if($("#myTable tbody button").length==0){
	if($(".childCheckBox").length>0&&cmycd&&dptCd&&strcd){
		$("#saveButtonInIwd").prop("disabled",true);
		$("#successResult").html('<div class="alert alert-info" >Saving Please Wait....</div>');
		var pgmCl=0,docVal=0,docNo=$("#iwdDocNo").html(),iwdStkPro=[],iwdItmMv=[];
		$(".docvalTd").each(function(){
			docVal+=Number($(this).html())||0;
		});
		$(".pgmCalTd").each(function(){
			pgmCl+=Number($(this).html())||0;
		});
		var iwdHdrRec={ih_doc_no:docNo,ih_vndr_inc_no:incno,ih_vndr_inc_dt:incdt,ih_tot_rcvd_wgt:mtlwgt,ih_tot_rcvd_prty:rcdprty,ih_tot_pure_gld_wgt:gldPrty,ih_tot_doc_val:docVal,ih_tot_pgm_cal:pgmCl,ih_iwd_sts:true,ih_iss_auth:false};
		
	$.grep(InwrdHdrDtl,function(gDt){
			gDt.ihd_dpt_cd=dptCd;gDt.ihd_cmy_cd=cmycd;gDt.ihd_str_cd=strcd;gDt.ihd_iwd_typ=typ;gDt.ihd_vndr_cd=vndrcd;gDt.ihd_vndr_inc_no=inocNo;gDt.ihd_vndr_inc_dt=incDate;
		});
		if($("#isauthVal").val()=="1"){
			var stkJson=[];
			if($("#ExstStkInInward").val()!=""){
				stkJson=JSON.parse($("#ExstStkInInward").val());
			}
		$.grep(InwrdHdrDtl,function(i){
			i.ihd_iss_auth=true;
			iwdItmMv.push({im_cmy_cd:i.ihd_cmy_cd,im_str_cd:i.ihd_str_cd,im_trn_typ:'Inward',im_trn_nmb:i.ihd_doc_no,im_itm_cd:i.ihd_pdt_cd,im_itm_wgt:i.ihd_mtl_wgt
				,im_itm_prty:i.ihd_rcvd_prty,im_itm_pure_gld_wgt:i.ihd_pure_gld_wgt,im_itm_typ:i.ihd_iwd_typ,im_dpt_cd:dptCd}); 
			if(stkJson.length>0){
			var newStk=stkJson.find(function(stk){
				if(stk.stm_cmy_cd==cmycd&&stk.stm_dpt_cd==dptCd&&stk.stm_itm_cd==i.ihd_pdt_cd&&stk.stm_stk_itm_typ==i.ihd_iwd_typ&&stk.stm_rcvd_stk_prty==i.ihd_rcvd_prty){
				return true;
				}
				});
			if(newStk!=null&&newStk!=undefined){
				newStk.stm_rcvd_stk_wgt=Number(newStk.stm_rcvd_stk_wgt)+Number(i.ihd_mtl_wgt);
				newStk.stm_stk_pure_gld_wgt=Number(newStk.stm_stk_pure_gld_wgt)+Number(i.ihd_pure_gld_wgt);
				newStk.stm_stk_pure_doc_val=Number(newStk.stm_stk_pure_doc_val)+Number(i.ihd_doc_val);
				newStk.stm_stk_pure_pgm_cal=Number(newStk.stm_stk_pure_pgm_cal)+Number(i.ihd_pgm_cal);
				iwdStkPro.push(newStk)	
			}
				else{
					iwdStkPro.push({stm_str_cd:i.ihd_str_cd,stm_cmy_cd:i.ihd_cmy_cd,stm_itm_cd:i.ihd_pdt_cd,stm_stk_trn_typ:'Inward',stm_stk_itm_typ:i.ihd_iwd_typ,stm_rcvd_stk_wgt:i.ihd_mtl_wgt,stm_rcvd_stk_prty:i.ihd_rcvd_prty,
						stm_stk_pure_gld_wgt:i.ihd_pure_gld_wgt,stm_stk_pure_doc_val:i.ihd_doc_val,stm_stk_pure_pgm_cal:i.ihd_pgm_cal,stm_dpt_cd:dptCd});	
				}
				
			}
			else{
			iwdStkPro.push({stm_str_cd:i.ihd_str_cd,stm_cmy_cd:i.ihd_cmy_cd,stm_itm_cd:i.ihd_pdt_cd,stm_stk_trn_typ:'Inward',stm_stk_itm_typ:i.ihd_iwd_typ,stm_rcvd_stk_wgt:i.ihd_mtl_wgt,stm_rcvd_stk_prty:i.ihd_rcvd_prty,
				stm_stk_pure_gld_wgt:i.ihd_pure_gld_wgt,stm_stk_pure_doc_val:i.ihd_doc_val,stm_stk_pure_pgm_cal:i.ihd_pgm_cal,stm_dpt_cd:dptCd});	
			}
			})
		
		iwdHdrRec.ih_iss_auth=true;
		}
		AjaxController.saveInwardAddProductInAjax(JSON.stringify(InwrdHdrDtl),JSON.stringify(iwdStkPro),JSON.stringify(iwdItmMv),JSON.stringify(iwdHdrRec),false,sucResOfIwdDtl);	
		}
	else{
		if(!cmycd){
			$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc312"> Select Company</div>');$("#hideInwrdSuc312").fadeOut(3000);			
		}
		else if(!dptCd){
			$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc313"> Select DepartMent</div>');$("#hideInwrdSuc313").fadeOut(3000);		
		}
		else
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc3"> Add Products ....</div>');$("#hideInwrdSuc3").fadeOut(3000);	
	}
	}
	else{
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc13"> Please Save Entered Data....</div>');$("#hideInwrdSuc13").fadeOut(3000);	
	}
}

function sucResOfIwdDtl(res){
	if(res=="success"){
		window.location.href="inward.mm";
	}
}
///////////////////////////end//////////////////////////////////////////

/////////////edit inward controller/////////////////
function editinwardRec(id){
	window.location.href="editinward.mm?iwd_id="+id+"";
}
function deleteInwardRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.deleteInwardRecAjax(id,returnResOfDelInwrd);
	function returnResOfDelInwrd(res){
		if(res!=null){
			$(ths).closest("tr").remove();
		}
	}
}
///////////////////////end/////////////////////
