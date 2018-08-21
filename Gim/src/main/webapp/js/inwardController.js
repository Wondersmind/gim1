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
			if($("#inwrdType").val()=="Raw Metrial"||$("#inwrdType").val()=="OutSide_Inward")
			AjaxController.getSearchRawMeterialResultAjax(val, searchRawMeterialResult);
			else if($("#inwrdType").val()=="BOM")
				AjaxController.getAllBomProductSrchAjax(val, searchBomResult);
			else
				AjaxController.getAllNonGoldProductSrchAjax(val, searchNonGoldResult);
			function searchBomResult(res) {
				var collect =new Set();
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
					collect .add('' + res[i][1]+ '-'+ res[i][0] + '-'+ res[i][2] + '-'+ res[i][3] + '- ['+ res[i][4] + ']');
					}
					$("#srchInInwardModel").autocomplete({
						source : [...collect]
					});
					
				}
			}
			function searchNonGoldResult(res) {
				var collect =new Set();
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
					collect .add('' + res[i][1]+ '-'+ res[i][0] + '-'+ res[i][2] + '-'+ res[i][3] + '- ['+ res[i][4] + ']');
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
		if(this.id!='qty')
		$(this).val(Number($(this).val()).toFixed(2));
	})
	
});

//////////////////////////////end////////////////////////////

////////////////////////////////add inward product /////////////////
var InwrdHdrDtl=[];
function prfomInwdMdlAdd(){
	var proId=$('#srchInInwardModel').val().split("-");
	if($("#inwrdType").val()=="Raw Metrial"||$("#inwrdType").val()=="OutSide_Inward"){
		var proDubDet;
		if(InwrdHdrDtl.length>0){
			proDubDet=InwrdHdrDtl.find(function(n, i){
				if($("#inwrdType").val()=="Raw Metrial")  return (n.ihd_mtl_wgt == '0' && n.ihd_pdt_cd == proId[0]&&n.ihd_iwd_typ=="Raw Metrial")?n:"";
				else  return (n.ihd_pdt_cd == proId[0]&&n.ihd_iwd_typ=="Raw Metrial")?n:"";
		    });	
		}
		if(!proDubDet){
		if($("#rwMtrlExistAll").val()!=""){
			var inwrd=JSON.parse($("#rwMtrlExistAll").val());
			var proDet=inwrd.find(function(n, i){
			      return n.rm_mst_pdt_id == proId[0]?n:"";
		    });
			if(proDet){
				var prtys=proDet.rm_mst_pdt_pty||'0';
				var obj=proDet,docNo=$("#iwdDocNo").val(),cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),
				vndrcd=$("#iwdvndrCd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val(),dptcd=$("#iwdDptcd").val();
				InwrdHdrDtl.push({ihd_pdt_qty:1,ihd_doc_no:docNo,ihd_cmy_cd:cmycd,ihd_str_cd:strcd,ihd_iwd_typ:typ,ihd_vndr_cd:vndrcd,ihd_vndr_inc_no:incno,ihd_vndr_inc_dt:incdt,ihd_dpt_cd:dptcd,ihd_pdt_cd:obj.rm_mst_pdt_id,
					ihd_mtl_wgt:0,ihd_rcvd_prty:prtys,ihd_doc_val:0,ihd_pgm_cal:0,ihd_pure_gld_wgt:0,ihd_iwd_sts:true,ihd_pdt_nm:obj.rm_mst_pdt_nm});	
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
			var obj=proDet,docNo=$("#iwdDocNo").val(),cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),
			vndrcd=$("#iwdvndrCd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val(),dptcd=$("#iwdDptcd").val(),
			pdtNm=obj.bm_bom_nm+"-"+obj.bm_bom_typ+"-"+obj.bm_bom_wip_typ+"-"+obj.bm_bom_sz;
			InwrdHdrDtl.push({ihd_pdt_qty:1,ihd_doc_no:docNo,ihd_cmy_cd:cmycd,ihd_str_cd:strcd,ihd_iwd_typ:typ,ihd_vndr_cd:vndrcd,ihd_vndr_inc_no:incno,ihd_vndr_inc_dt:incdt,ihd_dpt_cd:dptcd,ihd_pdt_cd:obj.bm_bom_cd,
				ihd_mtl_wgt:0,ihd_rcvd_prty:0,ihd_doc_val:0,ihd_pgm_cal:0,ihd_pure_gld_wgt:0,ihd_iwd_sts:true,ihd_pdt_nm:pdtNm,ihd_iss_auth:false});	
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
	else if($("#inwrdType").val()=="NON_GOLD"){
		var proDubDet;
		if(InwrdHdrDtl.length>0){
			proDubDet=InwrdHdrDtl.find( function(n, i){
			      return (n.ihd_pdt_cd == proId[0]&&n.ihd_iwd_typ=="NON_GOLD")?n:"";
		    });	
		}
		if(!proDubDet){
		if($("#stnExistAll").val()!=""){
		var inwrd=JSON.parse($("#stnExistAll").val());
		var proDet=inwrd.find(function(n, i){
		      return n.sm_stn_cd == proId[0]?n:"";
	    });
		if(proDet){
			var obj=proDet,docNo=$("#iwdDocNo").val(),cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),
			vndrcd=$("#iwdvndrCd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val(),dptcd=$("#iwdDptcd").val(),
			pdtNm=obj.sm_stn_nm+"-"+obj.sm_stn_clr+"-"+obj.sm_stn_shpe+"-"+obj.sm_stn_sz;
			InwrdHdrDtl.push({stn_wgt:obj.sm_stn_wgt,stn_qty:obj.sm_stn_qty,ihd_pdt_qty:1,ihd_doc_no:docNo,ihd_cmy_cd:cmycd,ihd_str_cd:strcd,ihd_iwd_typ:typ,ihd_vndr_cd:vndrcd,ihd_vndr_inc_no:incno,ihd_vndr_inc_dt:incdt,ihd_dpt_cd:dptcd,ihd_pdt_cd:obj.sm_stn_cd,
				ihd_mtl_wgt:1,ihd_rcvd_prty:0,ihd_doc_val:0,ihd_pgm_cal:0,ihd_pure_gld_wgt:0,ihd_iwd_sts:true,ihd_pdt_nm:pdtNm,ihd_iss_auth:false});	
		}
		else{
			$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd15" style="margin-top: 9px;">Entered STONE Code Is Not Present....</div>');$("#hideInwrd15").fadeOut(3000);		
		}
		}
		else{
			$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd16" style="margin-top: 9px;">Entered STONE Code Is Not Present....</div>');$("#hideInwrd16").fadeOut(3000);	
		}
		}
		else{
			$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd17" style="margin-top: 9px;">Entered STONE Code Already Added....</div>');$("#hideInwrd17").fadeOut(3000);		
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
       +'</label></td> <td>'+i.ihd_pdt_cd+'</td> <td>'+i.ihd_pdt_nm+'</td><td ondblclick="metalQtyEditInAddInw('+n+',this)" class="metalqtyTd">'+i.ihd_pdt_qty+'</td>  <td ondblclick="metalWgtEditInAddInw('+n+',this)" class="metalWgtTd">'+i.ihd_mtl_wgt+'</td>  <td ondblclick="rcvdprtyEditInAddInw('+n+',this)"  class="rcvdPrtyTd">'+i.ihd_rcvd_prty+'</td><td ondblclick="docvalEditInAddInw('+n+',this)"  class="docvalTd">'+i.ihd_doc_val+'</td> <td ondblclick="prgcalEditInAddInw('+n+',this)"  class="pgmCalTd">'+i.ihd_pgm_cal+'</td>  <td ondblclick="puregoldEditInAddInw('+n+',this)"  class="preGldWgtTd">'+i.ihd_pure_gld_wgt+'</td> </tr>'
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
	var MultiWgt=Number($(ths).closest("tr")["0"].cells[4].innerHTML)*Number($(ths).closest("tr")["0"].cells[5].innerHTML);
	var preGWgt=MultiWgt!=0?(MultiWgt)/100:"";
	$(ths).closest("tr")[0].cells[8].innerHTML=preGWgt!=""?preGWgt.toFixed(3):"";
	InwrdHdrDtl[index].ihd_pure_gld_wgt=$(ths).closest("tr")[0].cells[8].innerHTML;
	var pgmCl=((todayPrc[0]*preGWgt).toFixed(3)||0);
	InwrdHdrDtl[index].ihd_pgm_cal=pgmCl;
	$(ths).closest("tr")[0].cells[7].innerHTML=pgmCl;
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
function metalQtyEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' id='qty' class='form-control input-sm' value='"+$(ths).text()+"'  > <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style=' height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savemetalQtyEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function savemetalQtyEditInAddInw(index,ths){
	var exstCurTd=$(ths).closest("td");
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_pdt_qty=valIn;
}
function savemetalWgtEditInAddInw(index,ths){
	var exstCurTd=$(ths).closest("td");
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_mtl_wgt=valIn;
	var rvdWgt=0,crntObj=InwrdHdrDtl[index];
	$(".metalWgtTd").each(function(){
		rvdWgt+=Number($(this).html());
	});
	if(crntObj.ihd_iwd_typ=='NON_GOLD'){
		var {stn_wgt,stn_qty}=crntObj;
		stn_wgt=(+stn_wgt||1);stn_qty=(+stn_qty||1);
		var qty=Math.round(valIn/(stn_wgt/stn_qty))
		var tr=$(exstCurTd).closest("tr");$("td:eq(3)",tr).html(qty);
		InwrdHdrDtl[index].ihd_pdt_qty=qty;
	}
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
function saveinwardaddProductBefore(){
	if($("#isauthVal").val()=="1"){
		$("#saveButtonInIwd").addClass("disabled");
		$("#saveButtonInIwd").addClass("btn-circlesuc");
		saveinwardaddProduct();
	}
	else{
		$("#successResult").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="saveinwardaddProduct()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#successResult").html(" ")\'>No</button></div>');		
	}
}


function saveinwardaddProduct(){
	var docNo=$("#iwdDocNo").val();
	var gldPrty=$("#goldPrtyOfInwrd").val(),rcdprty=$("#rcvdPrtyOfInwrd").val(),mtlwgt=$("#rcvdWgtOfInwrd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val();
	var cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),incDate=$("#iwdvndrIncDt").val(),inocNo=$("#iwdvndrIncNo").val(),dptCd=$("#iwdDptcd").val(),vndrcd=$("#iwdvndrCd").val();
	var sts=false;
	
	if(!vndrcd){
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc313"> Select Vendor</div>');$("#hideInwrdSuc313").fadeOut(3000);		
		$("#saveButtonInIwd").removeClass("disabled");
		$("#saveButtonInIwd").removeClass("btn-circlesuc");
		return;
	}else if(!incno){
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc313"> Enter Vendor.INC No...</div>');$("#hideInwrdSuc313").fadeOut(3000);		
		$("#saveButtonInIwd").removeClass("disabled");
		$("#saveButtonInIwd").removeClass("btn-circlesuc");
		return;
	}else if(!incDate){
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc313"> Enter Vendor.INC Date...</div>');$("#hideInwrdSuc313").fadeOut(3000);		
		$("#saveButtonInIwd").removeClass("disabled");
		$("#saveButtonInIwd").removeClass("btn-circlesuc");
		return;
	}

	
	
	
//	if(typ!='OutSide_Inward')
	if(typ!='OutSide_Inward' && typ!='NON_GOLD')
	sts=InwrdHdrDtl.some(s=>(!(+s.ihd_rcvd_prty)||!(+s.ihd_mtl_wgt))?true:false);
	if($("#myTable tbody button").length==0&&(!sts)){
	if($(".childCheckBox").length>0&&cmycd&&dptCd&&strcd&&docNo){
		AjaxController.checkInwardDocNOInDb(docNo,(data)=>{
			if(data&&data.length){
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc313"> Entered DocNo Already Present...</div>');$("#hideInwrdSuc313").fadeOut(3000);		
			}
			else{
				$("#saveButtonInIwd").prop("disabled",true);
				$("#successResult").html('<div class="alert alert-info" >Saving Please Wait....</div>');
				var pgmCl=0,docVal=0,docNo=$("#iwdDocNo").val(),StkManager=[];
				$(".docvalTd").each(function(){
					docVal+=Number($(this).html())||0;
				});
				$(".pgmCalTd").each(function(){
					pgmCl+=Number($(this).html())||0;
				});
				var iwdHdrRec={ih_cmy_cd:cmycd,ih_doc_no:docNo,ih_vndr_inc_no:incno,ih_vndr_inc_dt:incdt,ih_tot_rcvd_wgt:mtlwgt,ih_tot_rcvd_prty:rcdprty,ih_tot_pure_gld_wgt:gldPrty,ih_tot_doc_val:docVal,ih_tot_pgm_cal:pgmCl,ih_iwd_sts:true,ih_iss_auth:false};
				
			$.grep(InwrdHdrDtl,function(gDt){
					gDt.ihd_dpt_cd=dptCd;gDt.ihd_cmy_cd=cmycd;gDt.ihd_str_cd=strcd;gDt.ihd_vndr_cd=vndrcd;gDt.ihd_vndr_inc_no=inocNo;gDt.ihd_vndr_inc_dt=incDate;
				if($("#isauthVal").val()=="1"){
					var preS=(+gDt.ihd_pure_gld_wgt||0),docS=(gDt.ihd_doc_val||0),pgmS=(+gDt.ihd_pgm_cal||0),stkS=(+gDt.ihd_mtl_wgt||0);
					gDt.ihd_iss_auth=true;
					if(gDt.ihd_iwd_typ=='Raw Metrial'){
						StkManager.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+stkS+" as decimal(20,3)))," +
								"stm_stk_pure_gld_wgt=(cast(stm_stk_pure_gld_wgt as decimal(20,3))+cast("+preS+" as decimal(20,3)))," +
										"stm_stk_pure_doc_val=(cast(stm_stk_pure_doc_val as decimal(20,3))+cast("+docS+" as decimal(20,3)))," +
												"stm_stk_pure_pgm_cal=(cast(stm_stk_pure_pgm_cal as decimal(20,3))+cast("+pgmS+" as decimal(20,3))) where stm_itm_cd='"+gDt.ihd_pdt_cd+"' and stm_rcvd_stk_prty='"+gDt.ihd_rcvd_prty+"' and stm_stk_itm_typ='"+gDt.ihd_iwd_typ+"' and stm_stk_trn_typ='Inward'  " +
								" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd,stm_stk_pure_gld_wgt,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal)" +
										" values ('"+cmycd+"','"+dptCd+"','"+gDt.ihd_pdt_cd+"','"+stkS+"','"+dateIN+"','"+adminIN+"','Inward','"+dateIN+"','"+adminIN+"','"+gDt.ihd_rcvd_prty+"','"+gDt.ihd_iwd_typ+"','"+strcd+"','"+preS+"','"+docS+"','"+pgmS+"')");
					}
					if(gDt.ihd_iwd_typ=='OutSide_Inward'){
						StkManager.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+stkS+" as decimal(20,3)))," +
								"stm_stk_pure_gld_wgt=(cast(stm_stk_pure_gld_wgt as decimal(20,3))+cast("+preS+" as decimal(20,3)))," +
										"stm_stk_pure_doc_val=(cast(stm_stk_pure_doc_val as decimal(20,3))+cast("+docS+" as decimal(20,3)))," +
												"stm_stk_pure_pgm_cal=(cast(stm_stk_pure_pgm_cal as decimal(20,3))+cast("+pgmS+" as decimal(20,3))) where stm_rcvd_stk_prty='"+gDt.ihd_rcvd_prty+"'  and stm_stk_trn_typ='OutSide_Inward'  " +
								" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd,stm_stk_pure_gld_wgt,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal)" +
										" values ('"+cmycd+"','"+dptCd+"','"+gDt.ihd_pdt_cd+"','"+stkS+"','"+dateIN+"','"+adminIN+"','OutSide_Inward','"+dateIN+"','"+adminIN+"','"+gDt.ihd_rcvd_prty+"','"+gDt.ihd_iwd_typ+"','"+strcd+"','"+preS+"','"+docS+"','"+pgmS+"')");
					}
					else if(gDt.ihd_iwd_typ=='BOM'){
						StkManager.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast("+stkS+" as decimal(20,3)))," +
								"stm_stk_pure_gld_wgt=(cast(stm_stk_pure_gld_wgt as decimal(20,3))+cast("+preS+" as decimal(20,3)))," +
										"stm_stk_pure_doc_val=(cast(stm_stk_pure_doc_val as decimal(20,3))+cast("+docS+" as decimal(20,3)))," +
												"stm_stk_pure_pgm_cal=(cast(stm_stk_pure_pgm_cal as decimal(20,3))+cast("+pgmS+" as decimal(20,3))) where stm_rcvd_stk_prty='"+gDt.ihd_rcvd_prty+"' and stm_stk_itm_typ='"+gDt.ihd_iwd_typ+"' and stm_stk_trn_typ='BomStock'  " +
								" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd,stm_stk_pure_gld_wgt,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal)" +
										" values ('"+cmycd+"','"+dptCd+"','"+gDt.ihd_pdt_cd+"','"+stkS+"','"+dateIN+"','"+adminIN+"','BomStock','"+dateIN+"','"+adminIN+"','"+gDt.ihd_rcvd_prty+"','"+gDt.ihd_iwd_typ+"','"+strcd+"','"+preS+"','"+docS+"','"+pgmS+"')");
						
					StkManager.push("update bom_stk set bs_bom_qty=(isnull(bs_bom_qty,0)+cast('"+gDt.ihd_pdt_qty+"' as decimal(20,3))) where bs_bom_cd='"+gDt.ihd_pdt_cd+"' and bs_bom_prty='"+gDt.ihd_rcvd_prty+"' and bs_dpt_cd='"+dptCd+"' and bs_cmy_cd='"+cmycd+"' if @@ROWCOUNT=0 INSERT INTO [bom_stk] " +
							"([bs_bom_cd] ,[bs_bom_prty] ,[bs_bom_qty] ,[bs_bom_wgt] ,[bs_cmy_cd] ,[bs_crt_dt] ,[bs_dpt_cd] ,[bs_updt_dt]) VALUES " +
							"('"+gDt.ihd_pdt_cd+"','"+gDt.ihd_rcvd_prty+"','"+gDt.ihd_pdt_qty+"','0','"+cmycd+"','"+dateIN+"','"+dptCd+"','"+dateIN+"')");
					}
					else{
						StkManager.push("update stone_stk set ss_stn_qty=(isnull(ss_stn_qty,0)+cast('"+gDt.ihd_pdt_qty+"' as decimal(20,3))) where ss_stn_cd='"+gDt.ihd_pdt_cd+"' and ss_stn_prty='"+gDt.ihd_rcvd_prty+"' and ss_dpt_cd='"+dptCd+"' and ss_cmy_cd='"+cmycd+"' if @@ROWCOUNT=0 INSERT INTO [stone_stk] " +
								"([ss_stn_cd] ,[ss_stn_prty] ,[ss_stn_qty] ,[ss_stn_wgt] ,[ss_cmy_cd] ,[ss_crt_dt] ,[ss_dpt_cd] ,[ss_updt_dt]) VALUES " +
								"('"+gDt.ihd_pdt_cd+"','"+gDt.ihd_rcvd_prty+"','"+gDt.ihd_pdt_qty+"','0','"+cmycd+"','"+dateIN+"','"+dptCd+"','"+dateIN+"')");	
					}
				}
			});
				if($("#isauthVal").val()=="1"){
				iwdHdrRec.ih_iss_auth=true;
				}
				/*var aaa=JSON.stringify(InwrdHdrDtl);
				var bbb=JSON.stringify(StkManager);
				var bbb=JSON.stringify(JSON.stringify(iwdHdrRec));
				//for checking purpose
*/				
				AjaxController.saveInwardAddProductInAjax(JSON.stringify(InwrdHdrDtl),StkManager,JSON.stringify(iwdHdrRec),false,sucResOfIwdDtl);	
						
			}
		});
		}
	else{
		if(!cmycd){
			$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc312"> Select Company</div>');$("#hideInwrdSuc312").fadeOut(3000);			
		}
		else if(!dptCd){
			$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc313"> Select DepartMent</div>');$("#hideInwrdSuc313").fadeOut(3000);		
		}
		else if(!docNo){
			$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc313"> Enter DocNo...</div>');$("#hideInwrdSuc313").fadeOut(3000);		
		}
		else
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc3"> Add Products ....</div>');$("#hideInwrdSuc3").fadeOut(3000);
			$("#saveButtonInIwd").removeClass("disabled");
			$("#saveButtonInIwd").removeClass("btn-circlesuc");
		}
	}
	else{
		if(sts){
			$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc123"> Please Enter Wgt Or Purity....</div>');$("#hideInwrdSuc123").fadeOut(3000);
		}
		else
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc13"> Please Save Entered Data....</div>');$("#hideInwrdSuc13").fadeOut(3000);
		
		$("#saveButtonInIwd").removeClass("disabled");
		$("#saveButtonInIwd").removeClass("btn-circlesuc");
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
/**
 * 
 */