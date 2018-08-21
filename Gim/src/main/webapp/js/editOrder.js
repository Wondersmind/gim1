/////////////////////////AutoComplete In Odd Order Page////////////////

function getAllDesignProduct(evt, val) {
	if (evt.keyCode == 92 || evt.keyCode == 39||evt.keyCode == 13) {
		return false;
	}
	if (evt.key != "ArrowDown" && evt.key != "ArrowUp"
			&& evt.key != "ArrowRight" && evt.key != "ArrowLeft") {
		if (evt.code == "Quote") {
			$('#srchInDesignPro').val('');
			val = '';
			$('#srchInDesignPro').focus();
		}
		if (val.length > 0) {
			AjaxController.getAllDesignProductSrchAjax(val, searchDgnProResult);
			function searchDgnProResult(res) {
				var collect =new Set();
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
						collect.add('' + res[i][0] +'-'+ res[i][1] + '');
					}
					$("#srchInDesignPro").autocomplete({
						source : [...collect]
				});
					
				}
			}
		}
	}
	
}
var tempOrdPro=[];
var tempOrdHdrOnly=[];
function prfomDgnProAdd(){
	if($("#ohd_ord_no").val()!=""){
	if($("#ohd_cst_cd").val()!=""){
	var gldId=$("#srchInDesignPro").val().split("-");
	if($("#srchInDesignPro").val()!=""&&gldId.length>0){
		var aloeproOrd=true;
		if($("#prowithOrdCmp").val()!=""&&$("#prowithOrdCmp").val()!=null){
			var Parent=JSON.parse($("#prowithOrdCmp").val());
			if(jQuery.inArray($("#ohd_ord_no").val()+"="+gldId[0],Parent)>-1){
				aloeproOrd=false;
			}	
		}
			if(aloeproOrd==true){
		var sts=true;
		if(tempOrdPro.length>0){
			$.grep(tempOrdPro,function(i){
				if(i.ohd_ord_no==$("#ohd_ord_no").val()&&i.ohd_ord_pdt_cd==gldId[0]){
					sts=false;
				}
			})
		}
		if(sts==true){
	AjaxController.getDgnProDetailForAddOrderAjax(gldId[0],retunOfDgnProRes);	
	function retunOfDgnProRes(res){
		if(res!=null){
			var stdWt="",crt="";
			res[1]!=null?stdWt=res[1]:stdWt="";res[2]!=null?crt=res[2]:crt="";
			tempOrdPro.push({ohd_ord_img:"",ohd_ord_no:$("#ohd_ord_no").val(),ohd_ord_typ:$("#ohd_ord_typ").val(),ohd_ord_jn_no:"",ohd_ord_jn_dt:"",ohd_ord_dt:$("#ohd_ord_dt").val(),ohd_ord_trgt_dt:"",
				ohd_ord_bch_no:"",ohd_ord_pdt_cd:gldId[0],ohd_ord_qty:1,ohd_ord_std_wt:stdWt,ohd_ord_rmk:"",ohd_cst_cd:$("#ohd_cst_cd").val(),ohd_cmy_cd:$("#ohd_cmy_cd").val(),
				ohd_str_cd:$("#ohd_str_cd").val(),ohd_ord_sts:true,ohd_ord_carat:crt,ohd_wax_sts:"Pending",ohd_iss_auth:false});
			 tempOrdHdrOnly.push({oh_ord_no:$("#ohd_ord_no").val(),oh_no_itm:1,oh_tot_qty:1,oh_ord_sts:true,oh_tot_std_wgt:stdWt});
			 $("#orderAddSuccSpan").html('<div class="alert alert-success" id="displsy12">Added SuccessFully....</div>');$("#displsy12").fadeOut(2500);
		}
		else{
			 $("#orderAddSuccSpan").html('<div class="alert alert-danger" id="displsyNot12">Item Is Invalid....</div>');$("#displsyNot12").fadeOut(3500);	
			 $("#srchInDesignPro").select(), $("#srchInDesignPro").focus();
		}
		totalOrderShower();
	}
		}
		else{
			 $("#orderAddSuccSpan").html('<div class="alert alert-danger" id="displsy134">Item Already Added For Same Order No</div>');$("#displsy134").fadeOut(3500);	
			 $("#srchInDesignPro").select();$("#srchInDesignPro").focus();
		}
		
	}
			else{
				 $("#orderAddSuccSpan").html('<div class="alert alert-danger" id="displsydf134">Item Already Added For Same Order No</div>');$("#displsydf134").fadeOut(3500);	
				 $("#srchInDesignPro").select();$("#srchInDesignPro").focus();		
			}
}
	else{
		 $("#orderAddSuccSpan").html('<div class="alert alert-danger" id="displsyNot344">Enter Valid Item....</div>');$("#displsyNot344").fadeOut(3500);	
		 $("#srchInDesignPro").select(), $("#srchInDesignPro").focus();
	}
	}
	else{
		 $("#orderAddSuccSpan").html('<div class="alert alert-danger" id="displsyNot3444">Select Customer....</div>');$("#displsyNot3444").fadeOut(3500);	
		
	}
	}
	else{
		 $("#orderAddSuccSpan").html('<div class="alert alert-danger" id="displsyNot13444">Enter Order No</div>');$("#displsyNot13444").fadeOut(3500);		
	}
	
}

function totalOrderShower(){
		$("#srchInDesignPro").val(""),$("#ohd_ord_qty").val(1);
	$("#srchInDesignPro").focus();
	var exstTr=$(".tableRecTr");
	$("#orderTableTbody").html("");var table = $('#myTable').DataTable().clear();table.destroy();
	var rowCnt=0,sumOfStd=0,sumQty=0;
	$.grep(tempOrdPro,function(i){
		var chkbox='<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childChkBox" value="'+rowCnt+'"> <span></span></label>';
		var tr='<tr value="'+rowCnt+'" class="TempRecTr"><td>'+chkbox+'</td><td>'+i.ohd_ord_no+'</td><td ondblclick="jointgtDateEditInAddOdr('+rowCnt+',this)">'+i.ohd_ord_trgt_dt+'</td><td>'+i.ohd_ord_typ+'</td><td ondblclick="batchNoEditInAddOdr('+rowCnt+',this)">'+i.ohd_ord_bch_no+'</td><td>'+i.ohd_ord_pdt_cd+'</td><td ondblclick="qtyEditInAddOdr('+rowCnt+',this)">'+i.ohd_ord_qty+'</td><td ondblclick="joinNoEditInAddOdr('+rowCnt+',this)">'+i.ohd_ord_jn_no+'</td><td ondblclick="joinDateEditInAddOdr('+rowCnt+',this)">'+i.ohd_ord_jn_dt+'</td><td>'+i.ohd_ord_std_wt+'</td><td ondblclick="rmksEditInAddOdr('+rowCnt+',this)">'+i.ohd_ord_rmk+'</td>  <td id="'+rowCnt+'">'
	       + '<div class="gal-container">  <div class="col-md-12 col-sm-12 co-xs-12 gal-item">   <div class="box"> <a href="javascript:void(0)" data-toggle="modal" data-target="#img'+rowCnt+'">'
		      +'  <img src="images/pro3.jpg" class="img-responsive"></a> <div class="modal fade" id="img'+rowCnt+'" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>'
		      +'  <div class="modal-body"> <img src="images/pro3.jpg" class="img-responsive"></div> <div class="col-md-12 description">  <input type="file">   </div>  </div> </div> </div> </div></div></div> </td></tr>';
		$("#orderTableTbody").append(tr);
		sumOfStd+=i.ohd_ord_qty!=""?Number(i.ohd_ord_std_wt)*Number(i.ohd_ord_qty):Number(i.ohd_ord_std_wt);
		sumQty+=Number(i.ohd_ord_qty);
		rowCnt++;
	});
	
	exstTr.each(function (){
		var Qtytd=$(this)["0"].cells[6].innerHTML,Stdtd=$(this)["0"].cells[9].innerHTML;
		sumOfStd+=Qtytd!=""?Number(Stdtd)*Number(Qtytd):Number(Stdtd);
		sumQty+=Number(Qtytd);rowCnt++;
	});
	$("#orderTableTbody").append(exstTr);
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
	$("#ohd_ord_no_itm").val(rowCnt);$("#ohd_ord_std_wt").val(sumOfStd.toFixed(2));$("#ohd_ord_qty").val(sumQty.toFixed(2));
	$(function (){
		$(".childChkBox").on("click",function(){
			if($(".childChkBox:checked").length==$(".childChkBox").length){
				$(".prntChkBox")["0"].checked=true;
			}
			else{
				$(".prntChkBox")["0"].checked=false;
			}
		})
	});
}

/////////////////////////////Select Box Handler////////////////////////////

function selectBoxHandlerInAddOrder(ths){
	if(ths.checked==true)
		{
		$(".childChkBox").each(function(){
			$(this)["0"].checked=true;
		})
		}
	else{
		$(".childChkBox").each(function(){
			$(this)["0"].checked=false;
		})
	}
}
$(function (){
	$(".childChkBox").on("click",function(){
		if($(".childChkBox:checked").length==$(".childChkBox").length){
			$(".prntChkBox")["0"].checked=true;
		}
		else{
			$(".prntChkBox")["0"].checked=false;
		}
	})
});
///////////////////////////////end//////////////////////////////////////


///////////////////////////delete function in addorder ///////////////////////
function delrecFromOdrArray(){
	if($(".TempRecTr .childChkBox:checked").length>0||$(".tableRecTr .childChkBox:checked").length){
	var removeValFromIndex=[];
	if($(".TempRecTr .childChkBox:checked").length>0){
	$(".TempRecTr .childChkBox:checked").each(function(){
			removeValFromIndex.push($(this).val());
		});
	for (var i = removeValFromIndex.length -1; i >= 0; i--)
		tempOrdPro.splice(removeValFromIndex[i],1);tempOrdHdrOnly.splice(removeValFromIndex[i],1);
		$("#orderFinalsavePro").html('<div class="alert alert-success" id="displsy3124">Record Deleted Success</div>');$("#displsy3124").fadeOut(2500);
		$(".prntChkBox")["0"].checked=false;
		totalOrderShower();
	}
	if($(".tableRecTr .childChkBox:checked").length>0){
		var delRecIdArray=[];
		$(".tableRecTr .childChkBox:checked").each(function(){
			delRecIdArray.push($(this).val());$(this).closest("tr").remove();
		});
		var Qtytd=0,Stdtd=0,noOfItm=0;
		var exstTr=$(".tableRecTr");exstTr.each(function (){
		 Qtytd+=Number($(this)["0"].cells[6].innerHTML),Stdtd+=Number($(this)["0"].cells[9].innerHTML);noOfItm++;
		});
		AjaxController.removeExistOrderMultilpe(delRecIdArray,noOfItm,Qtytd,Stdtd,$("#ohd_ord_no").val(),returnDelOrdRes);
		function returnDelOrdRes(res){
			if(res=="success"){
			$("#orderFinalsavePro").html('<div class="alert alert-success" id="displsy3124">Record Deleted Success</div>');$("#displsy3124").fadeOut(2500);
			$(".prntChkBox")["0"].checked=false;
			totalOrderShower();
			}
			else{
				$("#orderFinalsavePro").html('<div class="alert alert-warning" id="displsy3sf124">Sorry  Not Deleted Please Once Refresh Page</div>');$("#displsy3sf124").fadeOut(2500);	
			}
		}
	}
	}
	else{
		$("#orderFinalsavePro").html('<div class="alert alert-danger" id="displsy34">Please Select Atleast One Record ....</div>');$("#displsy34").fadeOut(3500);
	}
}

////////////////////////////////end////////////////////////////////////////////


///////////////////////////create Editable Tr in addOrder page///////////////////////
function joinNoEditInAddOdr(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='text' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='     height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditedjoinNo("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	}
function saveeditedjoinNo(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	tempOrdPro[index].ohd_ord_jn_no=valIn;
}
function joinDateEditInAddOdr(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='text' class='form-control datepicker' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='     height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditedjoinDate("+index+",this)'>SAVE</button></span>";
	 $(".datepicker").datepicker();
	$(ths).find("input")["0"].focus();
	}
function saveeditedjoinDate(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	tempOrdPro[index].ohd_ord_jn_dt=valIn;
}
function jointgtDateEditInAddOdr(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='text' class='form-control datepicker' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='     height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditedjointgtDate("+index+",this)'>SAVE</button></span>";
	 $(".datepicker").datepicker();
	$(ths).find("input")["0"].focus();
	}
function saveeditedjointgtDate(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	tempOrdPro[index].ohd_ord_trgt_dt=valIn;
}

function batchNoEditInAddOdr(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='text' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='     height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditedbatchNo("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	}
function saveeditedbatchNo(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	tempOrdPro[index].ohd_ord_bch_no=valIn;
}

function rmksEditInAddOdr(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='text' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='     height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditedrmks("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	}
function saveeditedrmks(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	tempOrdPro[index].ohd_ord_rmk=valIn;
}

function qtyEditInAddOdr(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' min='0' step='any' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style=''/> <span class='input-group-btn btc2'><button class='button button-5 button-5a icon-cart' style='     height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveqtyEditInAddOdr("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	}
function saveqtyEditInAddOdr(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	tempOrdPro[index].ohd_ord_qty=valIn;tempOrdHdrOnly[index].oh_tot_qty=valIn;
	var stdSum=0,sumQty=0;
	$.grep(tempOrdPro,function(i){
		stdSum+=i.ohd_ord_qty!=""?Number(i.ohd_ord_std_wt)*Number(i.ohd_ord_qty):Number(i.ohd_ord_std_wt);
		sumQty+=Number(i.ohd_ord_qty);
	});
	var exstTr=$(".tableRecTr");exstTr.each(function (){
		var Qtytd=$(this)["0"].cells[6].innerHTML,Stdtd=$(this)["0"].cells[9].innerHTML;
		stdSum+=Qtytd!=""?Number(Stdtd)*Number(Qtytd):Number(Stdtd);
		sumQty+=Number(Qtytd);
	});
	$("#ohd_ord_std_wt").val(stdSum.toFixed(2));	$("#ohd_ord_qty").val(sumQty.toFixed(2));
}
/////////////////////end..//////////////////////////////////////////////////

////////////////////////////final Save Addedd Import Order //////////////////////////////
function saveaddImportOrder(){
	if($('.childChkBox').length>0){
	$("#saveButtonTotOrder").addClass("disabled");
	$("#saveButtonTotOrder").prop("disabled",true);
	$("#orderFinalsavePro").html('<div class="alert alert-info">Processing Please Wait....</div>');
	var rowCnt=0,sumOfStd=0,sumQty=0;
	$.grep(tempOrdPro,function(i){
		sumOfStd+=i.ohd_ord_qty!=""?Number(i.ohd_ord_std_wt)*Number(i.ohd_ord_qty):Number(i.ohd_ord_std_wt);
		sumQty+=Number(i.ohd_ord_qty);
		rowCnt++;
	});

	var exstTr=$(".tableRecTr");exstTr.each(function (){
		var Qtytd=$(this)["0"].cells[6].innerHTML,Stdtd=$(this)["0"].cells[9].innerHTML;
		sumOfStd+=Qtytd!=""?Number(Stdtd)*Number(Qtytd):Number(Stdtd);
		sumQty+=Number(Qtytd);rowCnt++;
	});
	var primIdOfOrder=[],OrdHdrIssAuth='0';
	if($("#isauthVal").val()=='1'){
		$('.childChkBox:checked:not(:disabled)').each(function(){
			primIdOfOrder.push($(this).val());
		});
		if($('.childChkBox:checked:not(:disabled)').length==$('.childChkBox:not(:disabled)').length){
			OrdHdrIssAuth='1';
		}
	}
	var orderHdrDet={ohd_cst_cd:$("#ohd_cst_cd").val(),ohd_cmy_cd:$("#ohd_cmy_cd").val(),ohd_str_cd:$("#ohd_str_cd").val(),ohd_ord_typ:$("#ohd_ord_typ").val()};
	var reportRecipientsDuplicate = [],OnlyBatch=tempOrdPro.filter(btch=> btch.ohd_ord_bch_no!="").map((btch)=>{return btch.ohd_ord_bch_no});
	for (var i = 0; i < OnlyBatch.length - 1; i++) {
	    if (OnlyBatch[i + 1] == OnlyBatch[i]) {
	        reportRecipientsDuplicate.push(OnlyBatch[i]);
	    }
	}
	if(reportRecipientsDuplicate.length==0){
	var finBtchConst=[];
	AjaxController.checkbatchNoInOrder(resOfBatch);
	function resOfBatch(res){
	if(res!=null){	
		var ExistBatchNo=JSON.parse(res);
	var batchNos=tempOrdPro.filter(btch=> btch.ohd_ord_bch_no!="").map((btch)=>{return btch.ohd_ord_bch_no});
	finBtchConst=removeAll(batchNos,ExistBatchNo);
	if(finBtchConst.length==0){
		if($("#ExstOrdHdrDetSt").val()!=""){
			var exsterJsnOrd=JSON.parse($("#ExstOrdHdrDetSt").val());
			$('.tableRecTr .childChkBox:checked').each(function(){
				var piId=$(this).val(),imgPath=$(this).closest("tr")[0].cells[11].id;
				$.grep(exsterJsnOrd,function(or){
				if(or.ohd_id==piId){
					or.ohd_ord_img=imgPath;
					tempOrdPro.push(or);	
				}	
				})
			});
		}
	AjaxController.saveImportOrderDetailEdit(JSON.stringify(tempOrdPro),rowCnt,sumOfStd,sumQty,$("#ohd_ord_no").val(),OrdHdrIssAuth,JSON.stringify(orderHdrDet),primIdOfOrder.join(),returnResOfImpOrd);
	}
	else{
		$("#saveButtonTotOrder").removeClass("disabled");
		$("#saveButtonTotOrder").prop("disabled",false);
		$("#orderFinalsavePro").html('<div class="alert alert-danger" id="errorShow231">Batch No '+finBtchConst[0]+' Already Used</div>');	
		$("#errorShow231").fadeOut(4500);
	}
	}
	else{
		if($("#ExstOrdHdrDetSt").val()!=""){
			var exsterJsnOrd=JSON.parse($("#ExstOrdHdrDetSt").val());
			$('.tableRecTr .childChkBox:checked').each(function(){
				var piId=$(this).val(),imgPath=$(this).closest("tr")[0].cells[11].id;
				$.grep(exsterJsnOrd,function(or){
				if(or.ohd_id==piId){
					or.ohd_ord_img=imgPath;
					tempOrdPro.push(or);	
				}	
				})
			});
		}
		AjaxController.saveImportOrderDetailEdit(JSON.stringify(tempOrdPro),rowCnt,sumOfStd,sumQty,$("#ohd_ord_no").val(),OrdHdrIssAuth,JSON.stringify(orderHdrDet),primIdOfOrder.join(),returnResOfImpOrd);
	}
	}
	}else{
		$("#saveButtonTotOrder").removeClass("disabled");
		$("#saveButtonTotOrder").prop("disabled",false);
		$("#orderFinalsavePro").html('<div class="alert alert-danger" id="errorShow2131">Batch No '+reportRecipientsDuplicate[0]+' Already Added</div>');	
		$("#errorShow2131").fadeOut(4500);	
	}
	}
	else{
		$("#orderFinalsavePro").html('<div class="alert alert-danger" id="errorShow2Q1">Please Add Some Items.</div>');	
		$("#errorShow2Q1").fadeOut(3500);
	}
	}
function removeAll(a,b){
	var pusher=[];
   $.each(a, function(){
        var self = this.toString();

        if(b.indexOf(self)>-1){
        	pusher.push(self);
        }
    });
   return pusher;
}
function returnResOfImpOrd(res){
	if(res=="success"){
		$("#orderFinalsavePro").html('<div class="alert alert-success">Updated SuccessFully....</div>');
		var setTime=setTimeout(goBackDesignPage, 2000);
	}
	else{
		$("#orderFinalsavePro").html('<div class="alert alert-danger" id="errorShowdg21">'+res+'</div>');	
	$("#errorShowdg21").fadeOut(3500);
	}

}

function goBackDesignPage(){
	window.location.href="order.mm";
}

$(function(){
	$("#orderTableTbody").delegate("input:file","change",function(){
		var fileUpload = $(this)[0].files[0],whichTd=$(this).closest("td"),whichTr=$(this).closest("tr").hasClass("tableRecTr");tdOfImg=$(this).closest("td")[0].id,imgsOf=$($(this).closest("td")).find("img");
		 var formData = new FormData();
		formData.append("file", fileUpload);
		var sdt=window.location.origin+"/gim/filePathFinder.mm";
		$.ajax({dataType : 'text',
            url : sdt,
            data : formData,
            type : "POST",
            enctype: 'multipart/form-data',
            processData: false, 
            contentType:false,
            success : function(result) {
            	if(whichTr==false)
            	tempOrdPro[tdOfImg].ohd_ord_img=result;
            	else
            	$(whichTd).attr("id",result);	
            	 $(imgsOf).attr("src",result)
            },
            error : function(result){
            	if(whichTr==false)
            	tempOrdPro[tdOfImg].ohd_ord_img=result;
            	else
                	$(whichTd).attr("id",result);	
            	 $(imgsOf).attr("src",result);
            }
        });
	})
})

