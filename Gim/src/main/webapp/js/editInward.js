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
	var presentChk=[];
	$(".pdtIdCmp").each(function(){
		presentChk.push($(this)["0"].id);
	})
	if(presentChk.length>0&&$.inArray(""+proId[0]+"="+$("#inwrdType").val()+"",presentChk)>-1)
		{
		$("#addInwardResult").html('<div class="alert alert-danger" id="hideInwrd1s4" style="margin-top: 9px;">Entered Item Code Already Present In Db....</div>');$("#hideInwrd1s4").fadeOut(3000);	
		$('#srchInInwardModel').select();$('#srchInInwardModel').focus();
		return false;
		}
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
			proDubDet=InwrdHdrDtl.find(function(n, i){
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
			$("#addInwardResult").html('<div class="alert alert-success" id="hideInwrdDs15" style="margin-top: 9px;">Added Successfully</div>');$("#hideInwrdDs15").fadeOut(3000);		
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
$(".childCheckBox,.childCheckBoxExist").on("click",function(){ 
	var sumChkedchkBox=Number($(".childCheckBox:checked").length)+Number($(".childCheckBoxExist:checked").length);
	var totChkBox=Number($(".childCheckBox").length)+Number($(".childCheckBoxExist").length);
	if(sumChkedchkBox==totChkBox){
		$(".parentCheckBox")["0"].checked=true;
	}
	else{
		$(".parentCheckBox")["0"].checked=false;
	}
});
sumOfAllWihtField();
} 

//////////////////////////////edit In Table Row /////////////////////////
function calculatepureGoldWeigt(index,ths){
	console.log(ths);
	var MultiWgt=Number($(ths).closest("tr")["0"].cells[4].innerHTML)*Number($(ths).closest("tr")["0"].cells[5].innerHTML);
	var preGWgt=MultiWgt!=0?(MultiWgt)/100:"";
	$(ths).closest("tr")[0].cells[8].innerHTML=preGWgt!=""?preGWgt.toFixed(3):"";
	InwrdHdrDtl[index].ihd_pure_gld_wgt=$(ths).closest("tr")[0].cells[8].innerHTML;
	var someofPre=0;
	$('.preGldWgtTd').each(function(){
		someofPre+=Number($(this).html());
	});
	$("#goldPrtyOfInwrd").val(someofPre.toFixed(3));
}

function metalWgtEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savemetalWgtEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function savemetalWgtEditInAddInw(index,ths){
	var exstTd=$(ths).closest("td");
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_mtl_wgt=valIn;
	var rvdWgt=0;
	$(".metalWgtTd").each(function(){
		rvdWgt+=Number($(this).html());
	});
	$("#rcvdWgtOfInwrd").val(rvdWgt.toFixed(2));
	calculatepureGoldWeigt(index,exstTd);
	}
function rcvdprtyEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savercvdprtyEditInAddInw("+indx+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();	
}
function savercvdprtyEditInAddInw(index,ths){
	var exstTd=$(ths).closest("td");
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	InwrdHdrDtl[index].ihd_rcvd_prty=valIn;
	var rvdWgt=0;
	$(".rcvdPrtyTd").each(function(){
		rvdWgt+=Number($(this).html());
	});
	$("#rcvdPrtyOfInwrd").val(rvdWgt.toFixed(2));
	calculatepureGoldWeigt(index,exstTd);
	}
function docvalEditInAddInw(indx,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savedocvalEditInAddInw("+indx+",this)'>SAVE</button></span>";
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
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveprgcalEditInAddInw("+indx+",this)'>SAVE</button></span>";
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
	$(ths)[0].innerHTML="<input type='number' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='    height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savepuregoldEditInAddInw("+indx+",this)'>SAVE</button></span>";
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
function sumOfAllWihtField(){
	var rvdWgt=0;
	$(".rcvdPrtyTd").each(function(){
		rvdWgt+=Number($(this).html());
	});
	$("#rcvdPrtyOfInwrd").val(rvdWgt.toFixed(2));

var rvdWgt1=0;
	$(".metalWgtTd").each(function(){
		rvdWgt1+=Number($(this).html());
	});
	$("#rcvdWgtOfInwrd").val(rvdWgt1.toFixed(2));

var rvdWgt2=0;
	$(".preGldWgtTd").each(function(){
		rvdWgt2+=Number($(this).html());
	});
	$("#goldPrtyOfInwrd").val(rvdWgt2.toFixed(2));
}
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
}
$(function (){
	$(".childCheckBox,.childCheckBoxExist").on("click",function(){ 
		var sumChkedchkBox=Number($(".childCheckBox:checked").length)+Number($(".childCheckBoxExist:checked").length);
		var totChkBox=Number($(".childCheckBox").length)+Number($(".childCheckBoxExist").length);
		if(sumChkedchkBox==totChkBox){
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
	if($(".childCheckBox:checked").length>0||$(".childCheckBoxExist:checked").length>0){
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
		if($(".childCheckBoxExist:checked").length>0){
			var iwdPriId=[];
			$(".childCheckBoxExist:checked").each(function(){
				iwdPriId.push($(this).val());
			})
			AjaxController.delExistInwardHdrDetRecordInAjax(iwdPriId,retDelIwdDtlSucFun);
			function retDelIwdDtlSucFun(res){
				if(res=="success"){
					$(".childCheckBoxExist:checked").each(function(){
						$(this).closest("tr").remove();
					});
					$("#successResult").html('<div class="alert alert-success" id="hideInwrdSuc12">Record Deleted Success</div>');$("#hideInwrdSuc12").fadeOut(2500);
					$(".parentCheckBox")["0"].checked=false;
					tableshowOfInwrd();	
				}
			}
		}
		
	}
	else{
		$("#successResult").html('<div class="alert alert-danger" id="hideInwrdSuc1">Select Records ....</div>');$("#hideInwrdSuc1").fadeOut(3000);	
	}
}
///////////////end/////////////////////////////////////////////////
////////////////////////////save addinward product//////////////////////


function saveinwardaddProduct(){
	if($("#myTable tbody button").length==0){
	if($(".childCheckBox").length>0||$(".childCheckBoxExist:not(:disabled)").length>0){
		$("#saveButtonInIwd").prop("disabled",true);
		$("#successResult").html('<div class="alert alert-info" >Saving Please Wait....</div>');
		var pgmCl=0,docVal=0,docNo=$("#iwdDocNo").html(),StkManager=[];
		$(".docvalTd").each(function(){
			docVal+=Number($(this).html());
		});
		$(".pgmCalTd").each(function(){
			pgmCl+=Number($(this).html());
		});
		var crtIds=$("#crtIdOfIwrd").val(),crtDts=$("#crtDtOfIwrd").val();
		var primId=$("#inwrdPrimId").val(),gldPrty=$("#goldPrtyOfInwrd").val(),rcdprty=$("#rcvdPrtyOfInwrd").val(),mtlwgt=$("#rcvdWgtOfInwrd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val();
		var iwdHdrRec={ih_id:primId,ih_doc_no:docNo,ih_vndr_inc_no:incno,ih_vndr_inc_dt:incdt,ih_tot_rcvd_wgt:mtlwgt,ih_tot_rcvd_prty:rcdprty,ih_tot_pure_gld_wgt:gldPrty,ih_tot_doc_val:docVal,ih_tot_pgm_cal:pgmCl,ih_iwd_sts:true,ih_iss_auth:false,
				ih_crt_dt:crtDts,ih_crt_id:crtIds};
		var cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),incDate=$("#iwdvndrIncDt").val(),inocNo=$("#iwdvndrIncNo").val(),dptCd=$("#iwdDptcd").val(),vndrcd=$("#iwdvndrCd").val();
		$.grep(InwrdHdrDtl,function(gDt){
			gDt.ihd_dpt_cd=dptCd;gDt.ihd_cmy_cd=cmycd;gDt.ihd_str_cd=strcd;gDt.ihd_iwd_typ=typ;gDt.ihd_vndr_cd=vndrcd;gDt.ihd_vndr_inc_no=inocNo;gDt.ihd_vndr_inc_dt=incDate;
			if($("#isauthVal").val()=="1"){
				var preS=(+gDt.ihd_pure_gld_wgt||0),docS=(gDt.ihd_doc_val||0),pgmS=(+gDt.ihd_pgm_cal||0),stkS=(+gDt.ihd_mtl_wgt||0);
				gDt.ihd_iss_auth=true;
				StkManager.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+stkS+" as float))," +
						"stm_stk_pure_gld_wgt=(cast(stm_stk_pure_gld_wgt as float)+cast("+preS+" as float))," +
								"stm_stk_pure_doc_val=(cast(stm_stk_pure_doc_val as float)+cast("+docS+" as float))," +
										"stm_stk_pure_pgm_cal=(cast(stm_stk_pure_pgm_cal as float)+cast("+pgmS+" as float)) where stm_itm_cd='"+gDt.ihd_pdt_cd+"' and stm_rcvd_stk_prty='"+gDt.ihd_rcvd_prty+"' and stm_stk_itm_typ='"+gDt.ihd_iwd_typ+"' and stm_stk_trn_typ='Inward'  " +
						" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd,stm_stk_pure_gld_wgt,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal)" +
								" values ('"+cmycd+"','"+dptCd+"','"+gDt.ihd_pdt_cd+"','"+stkS+"','"+dateIN+"','"+adminIN+"','Inward','"+dateIN+"','"+adminIN+"','"+gDt.ihd_rcvd_prty+"','"+gDt.ihd_iwd_typ+"','"+strcd+"','"+preS+"','"+docS+"','"+pgmS+"')");
			
			}
		});
		if($("#isauthVal").val()=="1"){
			var InwrdHdrDtlExist=[];
			var docNo=$("#iwdDocNo").html(),cmycd=$("#iwdCmyCd").val(),strcd=$("#iwdStrCd").val(),typ=$("#inwrdType").val(),
			vndrcd=$("#iwdvndrCd").val(),incno=$("#iwdvndrIncNo").val(),incdt=$("#iwdvndrIncDt").val(),dptcd=$("#iwdDptcd").val();
			$(".childCheckBoxExist:checked:not(:disabled)").each(function (){
				var pdtCd=$(this).closest("tr")["0"].cells["1"].innerHTML,mtWgt=($(this).closest("tr")["0"].cells["3"].innerHTML),rvdPrty=$(this).closest("tr")["0"].cells["4"].innerHTML,docVal=$(this).closest("tr")["0"].cells["5"].innerHTML,
				pgmCl=$(this).closest("tr")["0"].cells["6"].innerHTML,pureGldWt=$(this).closest("tr")["0"].cells["7"].innerHTML,pdtName=$(this).closest("tr")["0"].cells["2"].innerHTML,typInw=$(this).closest("tr").attr("value");
				pureGldWt=(+pureGldWt||0);pgmCl=(+pgmCl||0);docVal=(+docVal||0);mtWgt=(+mtWgt||0);
				StkManager.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+mtWgt+" as float))," +
						"stm_stk_pure_gld_wgt=(cast(stm_stk_pure_gld_wgt as float)+cast("+pureGldWt+" as float))," +
								"stm_stk_pure_doc_val=(cast(stm_stk_pure_doc_val as float)+cast("+docVal+" as float))," +
										"stm_stk_pure_pgm_cal=(cast(stm_stk_pure_pgm_cal as float)+cast("+pgmCl+" as float)) where stm_itm_cd='"+pdtCd+"' and stm_rcvd_stk_prty='"+rvdPrty+"' and stm_stk_itm_typ='"+typInw+"' and stm_stk_trn_typ='Inward' and stm_stk_crt_id='"+adminIN+"' " +
						" and stm_dpt_cd='"+dptcd+"' and stm_cmy_cd='"+cmycd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd,stm_stk_pure_gld_wgt,stm_stk_pure_doc_val,stm_stk_pure_pgm_cal)" +
								" values ('"+cmycd+"','"+dptcd+"','"+pdtCd+"','"+mtWgt+"','"+dateIN+"','"+adminIN+"','Inward','"+dateIN+"','"+adminIN+"','"+rvdPrty+"','"+typInw+"','"+strcd+"','"+pureGldWt+"','"+docVal+"','"+pgmCl+"')");
			
			});
		
		if($('.childCheckBoxExist:checked:not(:disabled)').length==$('.childCheckBoxExist:not(:disabled)').length){
		iwdHdrRec.ih_iss_auth=true;}
		if($("#ExstGsonInwdDtl").val()!="")
			var exstTr=JSON.parse($("#ExstGsonInwdDtl").val());
			$(".childCheckBoxExist:checked:not(:disabled)").each(function(){
				var thesId=$(this).val();
				$.grep(exstTr,function(m){
					if(thesId==m.ihd_id){
						m.ihd_iss_auth=true;
						InwrdHdrDtl.push(m);	
					}
				})
				
			});
		}
		AjaxController.saveInwardAddProductInAjax(JSON.stringify(InwrdHdrDtl),StkManager,JSON.stringify(iwdHdrRec),true,sucResOfIwdDtl);	
		}
	else{
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

///////////////////////end/////////////////////