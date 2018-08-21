
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
	totalSumOfQtyStdWghtHandler();
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

function totalSumOfQtyStdWghtHandler(){
	var sumStdWht=0
	$(".childCheckBox:checked").each(function(i){
		var qty=$(this).closest("tr")["0"].cells["5"].innerHTML,std=$(this).closest("td")["0"].id;
		sumStdWht+=Number(qty)!=0?Number(qty)*Number(std):Number(std);
	});
	$("#noOfProInTree").val($(".childCheckBox:checked").length);$("#sumStdWgtsInTree").val(sumStdWht.toFixed(2));
/*	var stdWgt=$("#sumStdWgtsInTree").val();
	if($("#baseStdwght2Tree").attr("readonly")!="readonly")
	$("#baseStdwght2Tree").val((Number(stdWgt)+Number($("#basewght2Tree").val())).toFixed(2));
	if($("#baseStdwght1Tree").attr("readonly")!="readonly")
	$("#baseStdwght1Tree").val((Number(stdWgt)+Number($("#basewght1Tree").val())).toFixed(2));
	if($("#baseStdwght3Tree").attr("readonly")!="readonly")
	$("#baseStdwght3Tree").val((Number(stdWgt)+Number($("#basewght3Tree").val())).toFixed(2));*/
}
///////////////////////////end//////////////////////////////

//////////////////////////////filter waxRecFor add Tree Gen Page/////////////////////
var changerId='';
$(function (){
	var tableRw=$("#myTable tr");
$("#trgtDtOftree,#deptOfTrees,#waxNoOfTrees,#ctgyOfTrees,#cmyOftree,#workOfTrees,#joNoOfTrees,#ordTypOfTrees,#caratdisplay").on("change",function(){
	var trgtDt=$("#trgtDtOftree").val(),dptCd=$("#deptOfTrees").val(),wxNo=$("#waxNoOfTrees").val(),ctgy=$("#ctgyOfTrees").val();
	var cmyCd=$("#cmyOftree").val(),wrkCd=$("#workOfTrees").val(),ordtyp=$("#ordTypOfTrees").val(), jono=$("#joNoOfTrees").val();
	var carat=$("#caratdisplay").val();
	changerId=this.id;
	if(trgtDt==""&&dptCd==null&&wxNo==null&&ctgy==null&&cmyCd==""&&!wrkCd&&!ordtyp&&!jono &&!carat){
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
		        $(".parentCheckBox").prop("checked",false);
		        totalSumOfQtyStdWghtHandler();
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
		jono=jono||'';ordtyp=ordtyp||''; carat=carat||'';
		if(jono){
			jono=jono.map(s=>"'"+s+"'").join();	
		}
		if(ordtyp){
			ordtyp=ordtyp.map(s=>"'"+s+"'").join();	
		}
		if(carat)
			{
			carat=carat.map(c=>"'"+c+"'").join();
			}
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
		AjaxController.searchForWaxHdrRecInTreeAjax(trgtDt,fnlDpt,fnlWxNo,fnlCty,cmyCd,wrkCd,jono,ordtyp,carat,returnSrchResOfTree);
	}
})
});

function returnSrchResOfTree(res){
	var result='';var deptmnt=new Set(),jo=new Set(),ordtyp=new Set(),waxNo=new Set(),ctgyOf=new Set(),trgtList=new Set(['<option value="">Select TargetDate</option>']),wrklist=new Set(['<option value="">Select Worker</option>']),carat=new Set();
	var table = $('#myTableTable').DataTable().clear();table.destroy();
	if(res!=null){
		for(var i=0;i<res.length;i++){
			res[i][12]=res[i][12]||'';res[i][13]=res[i][13]||'';
			ordtyp.add('<option value="'+res[i][12]+'">'+res[i][12]+'</option>');
			trgtList.add('<option value="'+res[i][0]+'">'+res[i][0]+'</option>');
			jo.add('<option value="'+res[i][13]+'">'+res[i][13]+'</option>');
			deptmnt.add('<option value="'+res[i][7]+'">'+res[i][2]+'</option>');
			waxNo.add('<option value="'+res[i][6]+'">'+res[i][6]+'</option>');
			ctgyOf.add('<option value="'+res[i][3]+'">'+res[i][3]+'</option>');
			wrklist.add('<option value="'+res[i][10]+'">'+res[i][11]+'</option>');
			carat.add('<option value="'+res[i][9]+'">'+res[i][9]+'</option>');
			
		result+=' <tr jono="'+res[i][13]+'" ordtyp="'+res[i][12]+'" ordno="'+res[i][14]+'"><td id="'+res[i][5]+'" value="'+res[i][7]+'" ><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'
              +'<input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][8]+'" ordprimid="'+res[i][15]+'" id="'+res[i][6]+'" carat="'+res[i][9]+'"><span></span> </label></td>'
              +'<td>'+res[i][0]+'</td><td class="pdtInfo">'+res[i][1]+'</td><td>'+res[i][2]+'</td><td>'+res[i][3]+'</td><td>'+res[i][4]+'</td></tr>';
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
	        $(".parentCheckBox").prop("checked",false);
	        totalSumOfQtyStdWghtHandler();
	    } );});

	 if(changerId=='workOfTrees'){
		$("#deptOfTrees").html([...deptmnt]).selectpicker("refresh");
		$("#waxNoOfTrees").html([...waxNo]).selectpicker("refresh");
		$("#ctgyOfTrees").html([...ctgyOf]).selectpicker("refresh");
		$("#trgtDtOftree").html([...trgtList]).selectpicker("refresh");
		 $("#joNoOfTrees").html([...jo]).selectpicker("refresh");
		 $("#ordTypOfTrees").html([...ordtyp]).selectpicker("refresh");
		$("#caratdisplay").html([...carat]).selectpicker("refresh"); 
		
	}
	 else{
		 $("#deptOfTrees").val()||$("#deptOfTrees").html([...deptmnt]).selectpicker("refresh");
		 $("#waxNoOfTrees").val()||$("#waxNoOfTrees").html([...waxNo]).selectpicker("refresh");
		 $("#ctgyOfTrees").val()||$("#ctgyOfTrees").html([...ctgyOf]).selectpicker("refresh");
		 $("#trgtDtOftree").val()||$("#trgtDtOftree").html([...trgtList]).selectpicker("refresh");
		 $("#joNoOfTrees").val()||$("#joNoOfTrees").html([...jo]).selectpicker("refresh");
		 $("#ordTypOfTrees").val()|| $("#ordTypOfTrees").html([...ordtyp]).selectpicker("refresh"); 
		 $("#caratdisplay").val()|| $("#caratdisplay").html([...carat]).selectpicker("refresh"); 
	
		 
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
			$(this).val("");
			$(this).prop("readonly",true);
		})	
	}
	else{
		$(".secondTreeCheck").prop("checked",false);
		$(".thirdTreeCheck").prop("checked",false);
		$(".tree1Bse,.tree2Bse,.tree3Bse").each(function(){
			$(this).val("");
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
			$(this).val("");
			$(this).prop("readonly",true);
		})	
	}
	else{
		$(".thirdTreeCheck").prop("checked",false);
		$(".tree2Bse,.tree3Bse").each(function(){
			$(this).val("");
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
			$(this).val("");
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
function sucOfTreeSaveRes(res){
	if(res=="success"){
		window.location.href="treegenerator.mm";
	}
}

function finalsaveOfAddTreeGenDetail(){
	if($("#isauthVal").val()=="1"){
		finalsaveOfAddTreeGenDetailAfter();
	}
	else{
		$("#successResult").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="finalsaveOfAddTreeGenDetailAfter()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#successResult").html(" ")\'>No</button></div>');		
	}
}



function finalsaveOfAddTreeGenDetailAfter(){
	var noOfTree=$(".secondTreeCheck:checked,.firstTreeCheck:checked,.thirdTreeCheck:checked").length,docNo=$("#treeDocNo").val();
	var cmy=$("#cmyOftree").val(),str=$("#strOftree").val(),work=$("#workOfTrees").val(),chkBx=$(".childCheckBox:checked").length,docDt=$("#treeDocDt").val();
	
	var bse1=$("#basewght1Tree").val(),bsStd1=$("#baseStdwght1Tree").val();
	
	if(cmy!=""&&str!=""&&work!=""&&chkBx>0&&docNo &&bse1!=''&& bsStd1!=''){
		AjaxController.checkTreeDocNoInDb(docNo,(data)=>{
			if(data&&data.length){
		$("#successResult").html('<div class="alert alert-danger" id="sucResHid1">Entered Document No Already Preseent</div>');$("#sucResHid1").fadeOut(3500);		
			}
			else{
				$("#saveNewButton").prop("disabled",true);
				$("#saveNewButton").addClass("disabled");
				$("#successResult").html('<div class="alert alert-info">Updating Please Wait...</div>');
				var treeHdrDtl=[],treeHdr,pryWaxId=[],stdWgt=$("#sumStdWgtsInTree").val();
				var isdTreeCarat="";
				$(".childCheckBox:checked").each(function(){
					pryWaxId.push($(this).val());var primordId=$(this).attr("ordprimid")||0;
					var dptCd=$(this).closest("td").attr("value"),waxNo=$(this)["0"].id,pdtCd=$(this).closest("tr")["0"].cells["2"].innerHTML,
					qty=$(this).closest("tr")["0"].cells["5"].innerHTML,ctgy=$(this).closest("tr")["0"].cells["4"].innerHTML,
					tgtdt=$(this).closest("tr")["0"].cells["1"].innerHTML,jono=$(this).closest("tr").attr("jono")||'',ordtyp=$(this).closest("tr").attr("ordtyp")||'',ordno=$(this).closest("tr").attr("ordno")||'';;
					if(!isdTreeCarat)isdTreeCarat=$(this).attr("carat");
					treeHdrDtl.push({tghd_ord_prm_id:primordId,tghd_ord_no:ordno,tghd_ord_jo_no:jono,tghd_ord_typ:ordtyp,tghd_doc_no:docNo,tghd_cmy_cd:cmy,tghd_str_cd:str,tghd_dpt_cd:dptCd,tghd_wrk_cd:work,tghd_wax_no:waxNo,
						tghd_pdt_cd:pdtCd,tghd_pdt_qty:qty,tghd_ctgy_cd:ctgy,tghd_trgt_dt:tgtdt,tghd_tree_sts:true,tghd_iss_auth:false,tghd_cst_prcs_sts:false});
				});
				var bse1=$("#basewght1Tree").val(),bse2=$("#basewght2Tree").val(),bse3=$("#basewght3Tree").val(),
				bsStd1=$("#baseStdwght1Tree").val(),bsStd2=$("#baseStdwght2Tree").val(),bsStd3=$("#baseStdwght3Tree").val();
				var treeNo1Doc,treeNo2Doc,treeNo3Doc;
				if($(".firstTreeCheck:checked").length)treeNo1Doc=$.trim($(".treeNoOneDocNo").text());
				if($(".secondTreeCheck:checked").length)treeNo2Doc=$.trim($(".treeNoTwoDocNo").text());
				if($(".thirdTreeCheck:checked").length)treeNo3Doc=$.trim($(".treeNoThreeDocNo").text());
				var sumOfAllBseStdWgt=Number(bsStd1||0)+Number(bsStd2||0)+Number(bsStd3||0);
				treeHdr={tgh_cmy_cd:cmy,tgh_doc_no:docNo,tgh_doc_dt:docDt,tgh_no_of_pdt:chkBx,tgh_tot_std_wgt:stdWgt,tgh_no_of_tree:noOfTree,tgh_tree1_bse_wgt:bse1,tgh_iss_carat:isdTreeCarat,tgh_tree1_iss_cast:false,tgh_tree2_iss_cast:false,tgh_tree3_iss_cast:false,
						tgh_tree2_bse_wgt:bse2,tgh_tree3_bse_wgt:bse3,tgh_tree1_bse_std_wgt:bsStd1,tgh_tree2_bse_std_wgt:bsStd2,tgh_tree3_bse_std_wgt:bsStd3,
						tgh_tree_sts:true,tgh_iss_auth:false,tgh_tree_tot_bse_std_wgt:sumOfAllBseStdWgt,tgh_tree1_doc_no:treeNo1Doc,tgh_tree2_doc_no:treeNo2Doc,tgh_tree3_doc_no:treeNo3Doc};
				if($("#isauthVal").val()=="1"){
					treeHdr.tgh_iss_auth=true;
					$.grep(treeHdrDtl,function(i){
						i.tghd_iss_auth=true;
					});
				}
				AjaxController.savetreeGenHdrAndDtlInAjax(JSON.stringify(treeHdrDtl),JSON.stringify(treeHdr),pryWaxId,false,sucOfTreeSaveRes);
					
			}
		});
			
	}
	else{
		if(cmy==""){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid1">Select Company</div>');$("#sucResHid1").fadeOut(3500);
		}
		else if(!docNo){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid1">Enter Document No</div>');$("#sucResHid1").fadeOut(3500);		
		}
		else if(bse1==''){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid1">Enter base weight</div>');$("#sucResHid1").fadeOut(3500);		
		}
		else if(bsStd1==''){
			$("#successResult").html('<div class="alert alert-danger" id="sucResHid1">Enter base and wax weight</div>');$("#sucResHid1").fadeOut(3500);		
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


(function (){
	var trgtdt=new Set();var deptmnt=new Set(),waxNo=new Set(),ctgyOf=new Set();
	trgtdt.add('<option value="">Select TargetDate</option>');
	$("#myTable tr").toArray().forEach(function(ths){
		trgtdt.add('<option>'+$(ths).find("td:eq(1)").text()+'</option>');
		deptmnt.add('<option value="'+$(ths).find("td:eq(0)").attr("value")+'">'+$(ths).find("td:eq(3)").html()+'</option>');
	waxNo.add('<option>'+$(ths).find(":checkbox").attr("id")+'</option>');
	ctgyOf.add('<option>'+$(ths).find("td:eq(4)").html()+'</option>');
	});
		$("#deptOfTrees").html([...deptmnt]).selectpicker("refresh");
		$("#waxNoOfTrees").html([...waxNo]).selectpicker("refresh");
		$("#ctgyOfTrees").html([...ctgyOf]).selectpicker("refresh");
	$("#trgtDtOftree").html([...trgtdt]).selectpicker('refresh');
	})();