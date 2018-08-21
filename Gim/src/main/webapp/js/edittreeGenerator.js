/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddTree(ths){
	if(ths.checked==true)
		{
		$(".childCheckBox,.childCheckBoxExist").each(function(){
			$(this)["0"].checked=true;
		})
		}
	else{
		$(".childCheckBox,.childCheckBoxExist").each(function(){
			$(this)["0"].checked=false;
		})
	}
	totalSumOfQtyStdWghtHandler();
}
$(function (){
	$(".childCheckBox,.childCheckBoxExist").on("click",function(){
		if($(".childCheckBox:checked,.childCheckBoxExist:checked").length==$(".childCheckBox,.childCheckBoxExist").length){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		totalSumOfQtyStdWghtHandler();
	})
});

function totalSumOfQtyStdWghtHandler(){
	var sumStdWht=0
	$(".childCheckBox:checked").each(function(i){
		var qty=$(this).closest("tr")["0"].cells["5"].innerHTML,std=$(this).closest("td")["0"].id;
		sumStdWht+=Number(qty)!=0?Number(qty)*Number(std):Number(std);
	});
	$(".childCheckBoxExist").each(function(){
		sumStdWht+=Number($(this)["0"].id);
	})
	var noOfPro=$(".childCheckBoxExist").length+$(".childCheckBox:checked").length;
	$("#noOfProInTree").val(noOfPro);$("#sumStdWgtsInTree").val(sumStdWht.toFixed(2));
/*	if($("#baseStdwght1Tree").attr("readonly")!="readonly")
	$("#baseStdwght1Tree").val((Number($("#basewght1Tree").val())+sumStdWht).toFixed(2));
	if($("#baseStdwght2Tree").attr("readonly")!="readonly")
	$("#baseStdwght2Tree").val((Number($("#basewght2Tree").val())+sumStdWht).toFixed(2));
	if($("#baseStdwght3Tree").attr("readonly")!="readonly")
	$("#baseStdwght3Tree").val((Number($("#basewght3Tree").val())+sumStdWht).toFixed(2));*/
}
///////////////////////////end//////////////////////////////

//////////////////////////////filter waxRecFor add Tree Gen Page/////////////////////
var changerId='';
$(function (){
	var tableRw=$("#myTable tr");
$("#trgtDtOftree,#deptOfTrees,#waxNoOfTrees,#ctgyOfTrees,#cmyOftree").on("change",function(){
	var trgtDt=$("#trgtDtOftree").val(),dptCd=$("#deptOfTrees").val(),wxNo=$("#waxNoOfTrees").val(),ctgy=$("#ctgyOfTrees").val();
	var cmyCd=$("#cmyOftree").val();
	changerId=this.id;
	if(trgtDt==""&&dptCd==null&&wxNo==null&&ctgy==null&&cmyCd==""){
		var table = $('#myTableTable').DataTable().clear();table.destroy();
		$("#myTable").html("");$("#myTable").append(tableRw);
		var table = $('#myTableTable').DataTable({
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
			$(".childCheckBox").on("click",function(){
				if($(".childCheckBox:checked").length==$(".childCheckBox").length){
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
		var fnlDpt=[],fnlWxNo=[],fnlCty=[];
		if(dptCd!=null){
			$.grep(dptCd,function(i){
				fnlDpt.push("'"+i+"'");
			})
		}
		if(wxNo!=null){
			$.grep(wxNo,function(i){
				fnlWxNo.push("'"+i+"'");
			})
		}
		if(ctgy!=null){
			$.grep(ctgy,function(i){
				fnlCty.push("'"+i+"'");
			})
		}
		AjaxController.searchForWaxHdrRecInTreeAjax(trgtDt,fnlDpt,fnlWxNo,fnlCty,cmyCd,returnSrchResOfTree);
	}
})
});

function returnSrchResOfTree(res){
	var result='';var deptmnt=new Set(),waxNo=new Set(),ctgyOf=new Set();
	var table = $('#myTableTable').DataTable().clear();table.destroy();
	if(res!=null){
		for(var i=0;i<res.length;i++){
			deptmnt.add('<option value="'+res[i][7]+'">'+res[i][2]+'</option>');
			waxNo.add('<option value="'+res[i][6]+'">'+res[i][6]+'</option>');
			ctgyOf.add('<option value="'+res[i][3]+'">'+res[i][3]+'</option>');
		result+=' <tr><td id="'+res[i][5]+'" value="'+res[i][7]+'"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'
              +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][8]+'" id="'+res[i][6]+'" carat="'+res[i][9]+'"><span></span> </label></td>'
              +'<td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td></tr>';
		}
		}
	$("#myTable").html(result);
	var table = $('#myTableTable').DataTable({
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
	if(changerId=='trgtDtOftree'){
		$("#deptOfTrees").html([...deptmnt]).selectpicker("refresh");
		$("#waxNoOfTrees").html([...waxNo]).selectpicker("refresh");
		$("#ctgyOfTrees").html([...ctgyOf]).selectpicker("refresh");
	}
	else if(changerId=='deptOfTrees'){
		$("#waxNoOfTrees").html([...waxNo]).selectpicker("refresh");
		$("#ctgyOfTrees").html([...ctgyOf]).selectpicker("refresh");
	}
	else if(changerId=='waxNoOfTrees'){
		$("#ctgyOfTrees").html([...ctgyOf]).selectpicker("refresh");
	}
	$(function (){
		$(".childCheckBox").on("click",function(){
			if($(".childCheckBox:checked").length==$(".childCheckBox").length){
				$(".parentCheckBox")["0"].checked=true;
			}
			else{
				$(".parentCheckBox")["0"].checked=false;
			}
			totalSumOfQtyStdWghtHandler();
		})
	});
	//waxDocNoDropDown();
	}
//////////////////////////////end/////////////////////////////////////

/////////////base Weigth Box Handler In Tree add Page///////////////
function firstCheckChange(ths){
	if(ths.checked==true){
		$(".secondTreeCheck").prop("checked",false);
		$(".thirdTreeCheck").prop("checked",false);
		$(".tree1Bse").each(function(){
			$(this).prop("readonly",false);
		})
		$(".tree2Bse,.tree3Bse").each(function(){
			$(this).prop("readonly",true);
		})	
	}
	else{
		$(".secondTreeCheck").prop("checked",false);
		$(".thirdTreeCheck").prop("checked",false);
		$(".tree1Bse,.tree2Bse,.tree3Bse").each(function(){
			$(this).prop("readonly",true);
		})	
	}
}
function secondCheckChange(ths){
	if($(".firstTreeCheck").prop("checked")==true){
	if(ths.checked==true){
		$(".tree2Bse").each(function(){
			$(this).prop("readonly",false);
		})
		$(".thirdTreeCheck").prop("checked",false);
		$(".tree3Bse").each(function(){
			$(this).prop("readonly",true);
		})	
	}
	else{
		$(".thirdTreeCheck").prop("checked",false);
		$(".tree2Bse,.tree3Bse").each(function(){
			$(this).prop("readonly",true);
		})	
	}
	}
	else{
		
	}
}
function thirdCheckChange(ths){
	if($(".secondTreeCheck").prop("checked")==true&&$(".firstTreeCheck").prop("checked")==true){
	if(ths.checked==true){
		$(".tree3Bse").each(function(){
			$(this).prop("readonly",false);
		})
	}
	else{
		$(".tree3Bse").each(function(){
			$(this).prop("readonly",true);
		})	
	}
	}
	else{
		
	}
}
////////////////////////end /////////////////////////////

/////////////////Sum Hanhle In Base + Wax Weight/////////////////////
/*$(function(){
	$("#basewght1Tree").on("keyup",function(){
		$("#baseStdwght1Tree").val((Number($("#sumStdWgtsInTree").val())+Number($(this).val())).toFixed(2));
	})	
	$("#basewght2Tree").on("keyup",function(){
		$("#baseStdwght2Tree").val((Number($("#sumStdWgtsInTree").val())+Number($(this).val())).toFixed(2));
	})
	$("#basewght3Tree").on("keyup",function(){
		$("#baseStdwght3Tree").val((Number($("#sumStdWgtsInTree").val())+Number($(this).val())).toFixed(2));
	})	
	})*/
//////////////////////////////// end /////////////////////////////

//////////////////finaly Save Tree Gen Hdr And Detail////////////////////////////
function finalsaveOfAddTreeGenDetail(){
	var noOfTree=$(".secondTreeCheck:checked,.firstTreeCheck:checked,.thirdTreeCheck:checked").length;
	var cmy=$("#cmyOftree").val(),str=$("#strOftree").val(),work=$("#workOfTrees").val(),chkBx=$(".childCheckBox:checked,.childCheckBoxExist:checked").length;
	if(cmy!=""&&str!=""&&work!=""&&chkBx>0){
		$("#updateButton").prop("disabled",true);
		$("#successResult").html('<div class="alert alert-info">Updating Please Wait...</div>');
		var treeHdrDtl=[],treeHdr,pryWaxId=[],docNo=$("#treeDocNo").html(),stdWgt=$("#sumStdWgtsInTree").val(),chkBx=$("#noOfProInTree").val();
		var isdTreeCarat="";
		$(".childCheckBox:checked").each(function(){
			pryWaxId.push($(this).val());
			var dptCd=$(this).closest("td").attr("value"),waxNo=$(this)["0"].id,pdtCd=$(this).closest("tr")["0"].cells["2"].innerHTML,
			qty=$(this).closest("tr")["0"].cells["5"].innerHTML,ctgy=$(this).closest("tr")["0"].cells["4"].innerHTML,
			tgtdt=$(this).closest("tr")["0"].cells["1"].innerHTML;
			if(!isdTreeCarat)isdTreeCarat=$(this).attr("carat");
			treeHdrDtl.push({tghd_doc_no:docNo,tghd_cmy_cd:cmy,tghd_str_cd:str,tghd_dpt_cd:dptCd,tghd_wrk_cd:work,tghd_wax_no:waxNo,
				tghd_pdt_cd:pdtCd,tghd_pdt_qty:qty,tghd_ctgy_cd:ctgy,tghd_trgt_dt:tgtdt,tghd_tree_sts:true,tghd_iss_auth:false,tghd_cst_prcs_sts:false});
		});
		if($("#ExstGsonTreeDtl").val()!="")
		var exstTr=JSON.parse($("#ExstGsonTreeDtl").val());
		$(".childCheckBoxExist:checked:not(:disabled)").each(function(){
			var thesId=$(this).val();
			$.grep(exstTr,function(m){
				if(thesId==m.tghd_id){
					treeHdrDtl.push(m);	
				}
			})
			
		});
		var bse1=$("#basewght1Tree").val(),bse2=$("#basewght2Tree").val(),bse3=$("#basewght3Tree").val(),primaryOfTreeId=$("#primaryIdOftree").val(),
		bsStd1=$("#baseStdwght1Tree").val(),bsStd2=$("#baseStdwght2Tree").val(),bsStd3=$("#baseStdwght3Tree").val(),crtId=$("#crtedIdOftree").val(),crtDt=$("#crtedDtOftree").val();
		var treeNo1Doc,treeNo2Doc,treeNo3Doc;
		if($(".firstTreeCheck:checked").length)treeNo1Doc=$(".treeNoOneDocNo").text();
		if($(".secondTreeCheck:checked").length)treeNo2Doc=$(".treeNoTwoDocNo").text();
		if($(".thirdTreeCheck:checked").length)treeNo3Doc=$(".treeNoThreeDocNo").text();
		var sumOfAllBseStdWgt=Number(bsStd1)+Number(bsStd2)+Number(bsStd3);
		treeHdr={tgh_id:primaryOfTreeId,tgh_doc_no:docNo,tgh_no_of_pdt:chkBx,tgh_tot_std_wgt:stdWgt,tgh_no_of_tree:noOfTree,tgh_tree1_bse_wgt:bse1,tgh_iss_carat:isdTreeCarat,
				tgh_tree2_bse_wgt:bse2,tgh_tree3_bse_wgt:bse3,tgh_tree1_bse_std_wgt:bsStd1,tgh_tree2_bse_std_wgt:bsStd2,tgh_tree3_bse_std_wgt:bsStd3,tgh_tree2_iss_cast:false,tgh_tree3_iss_cast:false,tgh_tree1_iss_cast:false,
				tgh_tree_sts:true,tgh_crt_id:crtId,tgh_crt_dt:crtDt,tgh_iss_auth:false,tgh_tree_tot_bse_std_wgt:sumOfAllBseStdWgt,tgh_tree1_doc_no:treeNo1Doc,tgh_tree2_doc_no:treeNo2Doc,tgh_tree3_doc_no:treeNo3Doc};
		if($("#isauthVal").val()=="1"){
			$.grep(treeHdrDtl,function(i){
				i.tghd_iss_auth=true;
			});
			if($(".childCheckBoxExist:checked:not(:disabled)").length==$(".childCheckBoxExist:not(:disabled)").length){
				treeHdr.tgh_iss_auth=true;
			}
		}
		AjaxController.savetreeGenHdrAndDtlInAjax(JSON.stringify(treeHdrDtl),JSON.stringify(treeHdr),pryWaxId,true,sucOfTreeSaveRes);
		function sucOfTreeSaveRes(res){
			if(res=="success"){
				window.location.href="treegenerator.mm";
			}
		}
	}
	else{
		if(cmy==""){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid1">Select Company</div>');$("#sucResHid1").fadeOut(3500);
		}
		else if(str==""){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid2">Select Location</div>');$("#sucResHid2").fadeOut(3500);	
		}
		else if(work==""){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid3">Select Worker</div>');$("#sucResHid3").fadeOut(3500);	
		}
		else if(chkBx==0){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid4">Select Records</div>');$("#sucResHid4").fadeOut(3500);	
		}
	}
}
////////////////////////////end/////////////////////////////////

//////////////edit function tree gen hdr/////////////////

function editTreeHdrRec(id){
	window.location.href="edittreegenerator.mm?tgh_id="+id+"";
}

//////////////////delete exist tree rec detail from database////////////////////
function delExistTreeHdrDetailrecFromDp(){
	if($(".childCheckBoxExist:checked").length>0){
		  $("#deleteButton").prop("disabled",true);
			$("#successResult").html('<div class="alert alert-info">Deleting Please Wait...</div>');
	var delPriId=[],treeHdr;
	$(".childCheckBoxExist:checked").each(function(){
		delPriId.push($(this).val());$(this).closest("tr").remove();
	});
	totalSumOfQtyStdWghtHandler();
	var noOfTree=$(".secondTreeCheck:checked,.firstTreeCheck:checked,.thirdTreeCheck:checked").length;
	var cmy=$("#cmyOftree").val(),str=$("#strOftree").val(),work=$("#workOfTrees").val(),chkBx=$("#noOfProInTree").val();
	var bse1=$("#basewght1Tree").val(),bse2=$("#basewght2Tree").val(),bse3=$("#basewght3Tree").val(),primaryOfTreeId=$("#primaryIdOftree").val(),docNo=$("#treeDocNo").html(),stdWgt=$("#sumStdWgtsInTree").val(),
	bsStd1=$("#baseStdwght1Tree").val(),bsStd2=$("#baseStdwght2Tree").val(),bsStd3=$("#baseStdwght3Tree").val(),crtId=$("#crtedIdOftree").val(),crtDt=$("#crtedDtOftree").val();
	var treeNo1Doc,treeNo2Doc,treeNo3Doc;
	if($(".firstTreeCheck:checked").length)treeNo1Doc=$(".treeNoOneDocNo").text();
	if($(".secondTreeCheck:checked").length)treeNo2Doc=$(".treeNoTwoDocNo").text();
	if($(".thirdTreeCheck:checked").length)treeNo3Doc=$(".treeNoThreeDocNo").text();
	var sumOfAllBseStdWgt=Number(bsStd1)+Number(bsStd2)+Number(bsStd3);
	
	treeHdr={tgh_id:primaryOfTreeId,tgh_doc_no:docNo,tgh_no_of_pdt:chkBx,tgh_tot_std_wgt:stdWgt,tgh_no_of_tree:noOfTree,tgh_tree1_bse_wgt:bse1,
			tgh_tree2_bse_wgt:bse2,tgh_tree3_bse_wgt:bse3,tgh_tree1_bse_std_wgt:bsStd1,tgh_tree2_bse_std_wgt:bsStd2,tgh_tree3_bse_std_wgt:bsStd3,tgh_tree2_iss_cast:false,tgh_tree3_iss_cast:false,tgh_tree1_iss_cast:false,
			tgh_tree_sts:true,tgh_crt_id:crtId,tgh_crt_dt:crtDt,tgh_tree_tot_bse_std_wgt:sumOfAllBseStdWgt,tgh_tree1_doc_no:treeNo1Doc,tgh_tree2_doc_no:treeNo2Doc,tgh_tree3_doc_no:treeNo3Doc};
	AjaxController.delRecFromTreeHdrDetailInAjax(JSON.stringify(treeHdr),delPriId,sucOfDelDetRes);
	function sucOfDelDetRes(res){
		if(res=="success"){
			$("#successResult").html('<div class="alert alert-success" id="sucResHidDel4">Deletd Records SuccessFully</div>');$("#sucResHidDel4").fadeOut(3500);	
			location.reload();
		}
	}
	}else{
		$("#successResult").html('<div class="alert alert-danger" id="sucResHidDel4">Select Exist Records</div>');$("#sucResHidDel4").fadeOut(3500);		
	}
}

(function (){
	var waxDocNoDropDown=new Set(),ctgry=new Set(),dpt=new Set(),joNo=new Set(),ordTyp=new Set();
	$("#myTable tr").toArray().forEach(function(ths){
		waxDocNoDropDown.add('<option>'+$(ths).find(":checkbox").attr("id")+'</option>');
		ctgry.add('<option>'+$(ths).find("td:eq(4)").text()+'</option>');
		dpt.add('<option value="'+$(ths).find("td:eq(0)").attr("value")+'">'+$(ths).find("td:eq(3)").text()+'</option>');
	});
	
	waxDocNoDropDownVal=new Set(),ctgryVal=new Set(),dptVal=new Set();
	$("#myTableExist tr").toArray().forEach(function(ths){
		var waxNoV=$(ths).find(":checkbox").attr("waxNo"),dptV=$(ths).find("td:eq(3)").text(),ctgyV=$(ths).find("td:eq(4)").text();
		if(![...waxDocNoDropDown].find(s=>s==waxNoV))
		waxDocNoDropDown.add('<option>'+waxNoV+'</option>');
		if(![...ctgry].find(s=>s==ctgyV))
		ctgry.add('<option>'+ctgyV+'</option>');
		if(![...dpt].find(s=>$(s).text()==dptV))
		dpt.add('<option value="'+$(ths).attr("dptCd")+'">'+dptV+'</option>');
		waxDocNoDropDownVal.add($(ths).find(":checkbox").attr("waxNo"));
		ctgryVal.add($(ths).find("td:eq(4)").text());
		dptVal.add($(ths).attr("dptCd"));
		joNo.add('<option selected>'+$(ths).attr("jono")+'</option>');
		ordTyp.add('<option selected>'+$(ths).attr("ordtyp")+'</option>');
		
	});
	 $("#joNoOfTrees").html([...joNo]).selectpicker("refresh");
	  $("#ordTypOfTrees").html([...ordTyp]).selectpicker("refresh");
	$("#deptOfTrees").html([...dpt]).val([...dptVal]).selectpicker("refresh");
	$("#waxNoOfTrees").html([...waxDocNoDropDown]).val([...waxDocNoDropDownVal]).selectpicker('refresh');
	$("#ctgyOfTrees").html([...ctgry]).val([...ctgryVal]).selectpicker('refresh');
	})();