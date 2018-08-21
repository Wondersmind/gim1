/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddOrder(ths){
	if(ths.checked==true)
		{
		$(".childCheckBox,.childCheckBoxExist:not(:disabled)").each(function(){
			$(this)["0"].checked=true;
		})
		}
	else{
		$(".childCheckBox,.childCheckBoxExist:not(:disabled)").each(function(){
			$(this)["0"].checked=false;
		})
	}
	totalSumOfQtyStdWghtHandler();
}
$(function (){
	$(".childCheckBox,.childCheckBoxExist:not(:disabled)").on("click",function(){
		if($(".childCheckBox:checked,.childCheckBoxExist:checked:not(:disabled)").length==$(".childCheckBox,.childCheckBoxExist:not(:disabled)").length){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		totalSumOfQtyStdWghtHandler();
	})
});

function totalSumOfQtyStdWghtHandler(){
	var trPrsnt=$("#myTbody tr"),qtySum=0,sumStdWht=0,order={},ordCount=0;
	$(".childCheckBox:checked").each(function(i){
		order[$(this).val()]=i
		qtySum+=Number($(this).closest("tr").find(".sumQty").html());
		sumStdWht+=Number($(this).closest("tr").find(".sumStdWgt").html());
	});
	$(".childCheckBoxExist").each(function(i){
		order[$(this).val()]=i
		qtySum+=Number($(this).closest("tr").find(".sumQty").html());
		sumStdWht+=Number($(this).closest("tr").find(".sumStdWgt").html());
	});
	var noOfProSum=Number($(".childCheckBoxExist").length)+Number($(".childCheckBox:checked").length);
	$("#noOfOrdWax").val(Object.keys(order).length);	
	$("#sumOfNoPdts").val(noOfProSum);$("#noOfQtyWax").val(qtySum.toFixed(2));$("#sumOfStdWgtWax").val(sumStdWht.toFixed(2));
}
///////////////////////////////end//////////////////////////////////////


///////////////////////////////

$(function (){
	var trPrsnt=$("#myTbody tr");
	$("#trgtdtId,#orderNoId,#dptCdWax,#ohdtypWax,#companyCdWax").on("change",function(){
		$(".parentCheckBox")["0"].checked=false;var cmycd=$("#companyCdWax").val()&&"'"+$("#companyCdWax").val()+"'";
		if($("#trgtdtId").val()==""&&$("#orderNoId").val()==null){
			if($("#dptCdWax").val()==null&$("#ohdtypWax").val()==null&&cmycd==""){
				var table = $('#myTable').DataTable().clear();table.destroy();
			$("#myTbody").html("");$("#myTbody").append(trPrsnt);
			var table = $('#myTable').DataTable({
				   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
				   "iDisplayLength": -1,
				   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
				});
			table.columns().eq( 0 ).each( function ( colIdx ) {
			    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
			        table
			            .column( colIdx )
			            .search( this.value )
			            .draw();
			    } );});
			$(".childCheckBox:checked").each(function(){
				$(this).attr("checked",false);
			});
			$(function (){
				$(".childCheckBox,.childCheckBoxExist").on("click",function(){
					if($(".childCheckBox:checked,.childCheckBoxExist:checked:not(:disabled)").length==$(".childCheckBox,.childCheckBoxExist:not(:disabled)").length){
						$(".parentCheckBox")["0"].checked=true;
					}
					else{
						$(".parentCheckBox")["0"].checked=false;
					}
					totalSumOfQtyStdWghtHandler();
				})
			});
			}
			else{
				var dptCd=[]
				if(	$("#dptCdWax").val())
				$("#dptCdWax").val().forEach(s=>dptCd.push("'"+s+"'"));
			AjaxController.performSearchBasedOnDptCode(dptCd.join(),ordTypes,cmycd,srchedOrdTgtForWaxRes);	
			}
		}
		else{
			var dptCd=[]
			if(	$("#dptCdWax").val())
			$("#dptCdWax").val().forEach(s=>dptCd.push("'"+s+"'"));
			AjaxController.performSearchBasedOnTrgtAndOdrNo($("#trgtdtId").val(),$("#orderNoId").val(),dptCd.join(),ordTypes,cmycd,srchedOrdTgtForWaxRes);
		}
	})
})

function srchedOrdTgtForWaxRes(res){
	var result='';
	var table = $('#myTable').DataTable().clear();table.destroy();
	if(res!=null){
		for(var i=0;i<res.length;i++){
			var sumChk=res[i][4]!=null&&res[i][4]!=""?(res[i][5])*(res[i][4]):(res[i][5]);
	result+=' <tr> <td value="'+res[i][8]+'"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">  <input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][7]+'" value="'+res[i][6]+'">'
         +' <span></span>  </label></td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td class="sumQty">'+res[i][4]+'</td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td>'
+'<td>'+res[i][5]+'</td><td class="sumStdWgt">'+sumChk+'</td><td>'+res[i][9]+'</td></tr>';	
		}
	}
	$("#myTbody").html(result);
	var table = $('#myTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
	$(function (){
		$(".childCheckBox,.childCheckBoxExist").on("click",function(){
			if($(".childCheckBox:checked,.childCheckBoxExist:checked:not(:disabled)").length==$(".childCheckBox,.childCheckBoxExist:not(:disabled)").length){
				$(".parentCheckBox")["0"].checked=true;
			}
			else{
				$(".parentCheckBox")["0"].checked=false;
			}
			totalSumOfQtyStdWghtHandler();
		})
	});
}

/////////////////////////end/////////////////////////////////////////////

/////////////////////////edit Wax ///////////////////////////////

function editwaxdetail(id){
	window.location.href="editwax.mm?wax_hdr_id="+id+"";
}

function delWaxRecFromTable(id,docno,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delWaxRecFromTableAjax(id,docno,delResOfWaxHdr);
	function delResOfWaxHdr(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function totalfinalsaveWaxOrderUpdate(){
	var docNo=$("#docNoWax").html(),cmyCd=$("#companyCdWax").val(),strCd=$("#storeCdWax").val(),tgtDt=$("#trgtdtId").val(),wrkCd=$("#workCdWax").val()
	,qty=$("#noOfQtyWax").val(),noOfOrd=$("#noOfOrdWax").val(),sumOfStd=$("#sumOfStdWgtWax").val(),noOdPro=$("#sumOfNoPdts").val();
		if(cmyCd!=""&&strCd!=""&&wrkCd!=""){
			if($(".childCheckBox:checked").length>0||$(".childCheckBoxExist:checked").length>0){
				$("#updateWaxButton").addClass("disabled");	$("#updateWaxButton").prop("disabled",true);
				$("#successResult").html('<div class="alert alert-info">Updating Please Wait</div>');
				var waxHdrPro={},waxHdrDtlsPro=[],ordPriId=[];
				$(".childCheckBox:checked").each(function(){
					ordPriId.push($(this)["0"].id)
					var pdtQty=$(this).closest("tr")["0"].cells[3].innerHTML,ordType=$(this).closest("tr")[0].cells[8].innerHTML;;
					var pdtId=$(this).closest("tr")["0"].cells[2].innerHTML,tgDt=$(this).closest("tr")["0"].cells[1].innerHTML,dptCdd=$(this).closest("td").attr("value");
					waxHdrDtlsPro.push({whd_doc_no:docNo,whd_cmy_cd:cmyCd,whd_str_cd:strCd,whd_wrkr_cd:wrkCd,whd_trgt_dt:tgDt,whd_ord_no:$(this).val(),
						whd_tree_gntr_sts:"Pending",whd_wax_sts:true,whd_pdt_cd:pdtId,whd_dpt_cd:dptCdd,whd_pdt_qty:pdtQty,whd_ord_typ:ordType});
					
				});
				waxHdrPro={wh_id:$("#primKeyOfWaxHdr").val(),wh_crt_dt:$("#crtDtWaxHdr").val(),wh_crt_id:$("#crtIdfWaxHdr").val(),wh_doc_no:docNo,wh_no_of_odr:noOfOrd,wh_tot_qty:qty,wh_tot_std_wgt:sumOfStd,wh_no_of_pdt:noOdPro,wh_wax_sts:true,wh_wrkr_cd:wrkCd};
				var waxExistPriId=[];
				$(".childCheckBoxExist:checked").each(function(){
					waxExistPriId.push($(this)[0].id);
				});
				var auth=false;
				if($(".parentCheckBox:checked").length>0){
				auth=true;
				}
				if($("#myTbodyExist .childCheckBoxExist:not(:disabled)").length==$("#myTbodyExist .childCheckBoxExist:checked:not(:disabled)").length){
				auth=true;	
				}
				AjaxController.updateWaxDetailForAddAjax(JSON.stringify(waxHdrPro),JSON.stringify(waxHdrDtlsPro),ordPriId,waxExistPriId.join(),auth,docNo,returnSucWaxSave);
				function returnSucWaxSave(res){
					if(res=="success"){
					window.location.href="wax.mm";
					}
				}
			}
			else{
				$("#successResult").html('<div class="alert alert-danger" id="sucResHid9">Select Orders</div>');$("#sucResHid9").fadeOut(3500);
			}
		}else{
			if(cmyCd==""){
				$("#successResult").html('<div class="alert alert-danger" id="sucResHid10">Select Company</div>');$("#sucResHid10").fadeOut(3500);
				$("#companyCdWax").focus();
			}
			else if(strCd==""){
				$("#successResult").html('<div class="alert alert-danger" id="sucResHid11">Select Location</div>');$("#sucResHid11").fadeOut(3500);	
				$("#storeCdWax").focus();
			}
			else{
				$("#successResult").html('<div class="alert alert-danger" id="sucResHid12">Select Worker</div>');$("#sucResHid12").fadeOut(3500);
				$("#workCdWax").focus();
			}
		}
}



function deleteExistWaxHdrRec(){
	if($(".childCheckBoxExist:checked:not(:disabled)").length>0){
		$("#successResult").html('<div class="alert alert-info" id="sucResHidEd13">Deleting Please Wait..</div>');
		
	var ids=[];
		$(".childCheckBoxExist:checked:not(:disabled)").each(function(i){
			ids.push($(this)["0"].id);$(this).closest("tr").remove();
	});
		totalSumOfQtyStdWghtHandler();
		var docNo=$("#docNoWax").html(),cmyCd=$("#companyCdWax").val(),strCd=$("#storeCdWax").val(),tgtDt=$("#trgtdtId").val(),wrkCd=$("#workCdWax").val()
		,qty=$("#noOfQtyWax").val(),noOfOrd=$("#noOfOrdWax").val(),sumOfStd=$("#sumOfStdWgtWax").val(),noOdPro=$("#sumOfNoPdts").val();
		var waxHdrPro={wh_id:$("#primKeyOfWaxHdr").val(),wh_crt_dt:$("#crtDtWaxHdr").val(),wh_crt_id:$("#crtIdfWaxHdr").val(),wh_doc_no:docNo,wh_no_of_odr:noOfOrd,wh_tot_qty:qty,wh_tot_std_wgt:sumOfStd,wh_no_of_pdt:noOdPro,wh_wax_sts:true};
		AjaxController.delExistWaxHdrFromEditWaxInAjax(ids,JSON.stringify(waxHdrPro),returnDelWxsResEdit);
		function returnDelWxsResEdit(res){
			if(res=="success"){
				$("#successResult").html('<div class="alert alert-success" id="sucResHidEd13">Deleted Success</div>');$("#sucResHidEd13").fadeOut(3500);	
				  location.reload();
			}
		}
	}
	else{
		$("#successResult").html('<div class="alert alert-danger" id="sucResHidEd12">Select Existing Record</div>');$("#sucResHidEd12").fadeOut(3500);
	}
}





//////////////////////////query for usage purpose /////////////////////////
var waxDetailPrint ="U2FsdGVkX1+3FohGJsmE40rb0orjqu76Ae0Njctgu9V0PN6BwD5TObLoRSlICsefD9vDbzluTC+AsQLaZifqchAN2njzBNfYanyDDFAiUbgqbfsQnnaRFp+KkK8QAkT2iYJZts0kGrXxF4W3xr2jpQ+r82lMhcN21Dlqkd2QUA9BBAHKX41dHKlVDunTK+NsLYGLuyVkgLZfqGHaVC+QFxK10vbUBPPfcSP3rx0bPFWS3FyAHwuD9ltikkQo/ygrg0C6TuRbCr3WZmpjtQbRN7yAdIgWlWxD/+/1PQ3LASJ2kuJcD1EFqZfqPDi27XQdyVf09l0kM3zrwCek7xHkmnd0q9oWBcs/FrCrOKijBpsGxW4OjSYhGN75cFIOdPsl";

////////////////////////end ///////////////////////////////////////////////
	
	
	(function (){
		var joNO=new Set(),type=new Set(),dpt=new Set(),ctgy=new Set();
		$("#myTbody tr").toArray().forEach(function(ths){
			joNO.add('<option>'+$(ths).attr("joNo")+'</option>');
			type.add('<option>'+$(ths).find("td:eq(8)").text()+'</option>');
			ctgy.add('<option>'+$(ths).find("td:eq(5)").text()+'</option>');
			dpt.add('<option value="'+$(ths).find("td:eq(0)").attr("value")+'">'+$(ths).attr("dptName")+'</option>');
		});
		var joNOVal=new Set(),typeVal=new Set(),dptVal=new Set(),ctgyVal=new Set();
		$("#myTbodyExist tr").toArray().forEach(function(ths){
		var jordNoV=$(ths).attr("joNo"),dptV=$(ths).attr("dptName"),typeV=$(ths).find("td:eq(8)").text(),ctgyV=$(ths).find("td:eq(5)").text();
			if(![...joNO].find(s=>s==jordNoV))
			joNO.add('<option>'+jordNoV+'</option>');
			if(![...type].find(s=>s==typeV))
			type.add('<option>'+typeV+'</option>');
			if(![...ctgy].find(s=>s==ctgyV))
				ctgy.add('<option>'+ctgyV+'</option>');
			if(![...dpt].find(s=>s==dptV))
			dpt.add('<option value="'+$(ths).find("td:eq(0)").attr("value")+'">'+dptV+'</option>');
			joNOVal.add(jordNoV);
			ctgyVal.add(ctgyV);
			typeVal.add(typeV);
		dptVal.add($(ths).find("td:eq(0)").attr("value"));
		});
		$("#dptCdWax").html([...dpt]).val([...dptVal]).selectpicker("refresh");
		$("#orderNoId").html([...joNO]).val([...joNOVal]).selectpicker("refresh");
		$("#ohdtypWax").html([...type]).val([...typeVal]).selectpicker("refresh");
		$("#ctgyOfWax").html([...ctgy]).val([...ctgyVal]).selectpicker("refresh");
		})();