	[companysCd,storeCd]=companyStore.split("-");
	if(companysCd)$("#companyCdWax").val(companysCd);
	if(storeCd)$("#storeCdWax").val(storeCd);
	$("#companyCdWax,#storeCdWax").selectpicker("refresh");
/////////////////////////////Select Box Handler////////////////////////////
function selectBoxHandlerInAddOrder(ths){
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
	var trPrsnt=$("#myTbody tr"),qtySum=0,sumStdWht=0,order={},ordCount=0;
	$(".childCheckBox:checked").each(function(i){
		order[$(this).val()]=i
		qtySum+=Number($(this).closest("tr").find(".sumQty").html());
		sumStdWht+=Number($(this).closest("tr").find(".sumStdWgt").html());
	});
	$("#noOfOrdWax").val(Object.keys(order).length);	
	$("#sumOfNoPdts").val($(".childCheckBox:checked").length);$("#noOfQtyWax").val(qtySum);$("#sumOfStdWgtWax").val(sumStdWht.toFixed(2));
}
///////////////////////////////end//////////////////////////////////////


///////////////////////////////
var currntChanger='';
$(function (){
	var trPrsnt=$("#myTbody tr");
	$("#trgtdtId,#orderNoId,#dptCdWax,#ohdtypWax,#companyCdWax,#ctgyOfWax,#reuseorder,#caratdisplay").on("change",function(){
		currntChanger=this.id;
		$(".parentCheckBox")["0"].checked=false;var cmycd=$("#companyCdWax").val()&&"'"+$("#companyCdWax").val()+"'";
		$("#noOfOrdWax").val("");	
		$("#sumOfNoPdts").val("");$("#noOfQtyWax").val("");$("#sumOfStdWgtWax").val("");
		var ordTypes=$("#ohdtypWax").val()!=null?$("#ohdtypWax").val().map(tp=>{return "'"+tp+"'"}).join():"";
		var ctgyWax=$("#ctgyOfWax").val()?$("#ctgyOfWax").val().map(dt=>"'"+dt+"'").join():"";
		var carat=$("#caratdisplay").val()?$("#caratdisplay").val().map(c=>"'"+c+"'").join():"";
		var reusebx=$("#reuseorder").val();
		if(reusebx&&reusebx.length==1){
			reusebx=(reusebx[0]=='Reuse')?" and ohd_iss_ruse='YES' ":" and (ohd_iss_ruse!='YES' or ohd_iss_ruse is null) ";
		}
		else{
			reusebx="";
		}
		if($("#trgtdtId").val()==""&&$("#orderNoId").val()==null){
		if($("#dptCdWax").val()==null&&$("#ohdtypWax").val()==null&&cmycd==""){
				var table = $('#myTable').DataTable().clear();table.destroy();
			$("#myTbody").html("");$("#myTbody").append(trPrsnt);
			var table = $('#myTable').DataTable({
				   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
				   "iDisplayLength": -1
				   ,   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
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
			$(".childCheckBox:checked").each(function(){
				$(this).attr("checked",false);
			});
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
				var dptCd=[]
				if(	$("#dptCdWax").val())
				$("#dptCdWax").val().forEach(s=>dptCd.push("'"+s+"'"));
			AjaxController.performSearchBasedOnDptCode(dptCd.join(),ordTypes,cmycd,ctgyWax,reusebx,carat,srchedOrdTgtForWaxRes);	
			}
		}
		else{
			var dptCd=[]
		
			if(	$("#dptCdWax").val())
			$("#dptCdWax").val().forEach(s=>dptCd.push("'"+s+"'"));
			AjaxController.performSearchBasedOnTrgtAndOdrNo($("#trgtdtId").val(),$("#orderNoId").val(),dptCd.join(),ordTypes,cmycd,ctgyWax,reusebx,carat,srchedOrdTgtForWaxRes);
		}
		
	})
})

function srchedOrdTgtForWaxRes(res){
	var result='';
	var table = $('#myTable').DataTable().clear();table.destroy();
	var joNO=new Set(),type=new Set(),dpt=new Set(),ctgy=new Set(),trgtDt=new Set(['<option value=""> Select Target Date</option>']),carat=new Set();
	if(res!=null){
		for(var i=0;i<res.length;i++){
			var sumChk=res[i][4]!=null&&res[i][4]!=""?(res[i][5])*(res[i][4]):(res[i][5]);
	result+=' <tr '+res[i][12]+'> <td value="'+res[i][8]+'"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">  <input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][7]+'" value="'+res[i][6]+'">'
         +' <span></span>  </label></td><td>'+res[i][2]+'</td><td class="pdtInfo">'+res[i][3]+'</td><td class="sumQty">'+res[i][4]+'</td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td>'
+'<td>'+res[i][5]+'</td><td class="sumStdWgt">'+sumChk+'</td><td>'+res[i][9]+'</td></tr>';
	joNO.add('<option value="'+res[i][10]+'">'+res[i][10]+'</option>');
	type.add('<option value="'+res[i][9]+'">'+res[i][9]+'</option>');
	dpt.add('<option value="'+res[i][8]+'">'+res[i][11]+'</option>');
	ctgy.add('<option value="'+res[i][1]+'">'+res[i][1]+'</option>');
	trgtDt.add('<option value="'+res[i][2]+'">'+res[i][2]+'</option>');
	carat.add('<option value="'+res[i][13]+'">'+res[i][13]+'</option>');
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
	 $("#trgtdtId").val()||$("#trgtdtId").html([...trgtDt]).selectpicker("refresh");
	 $("#dptCdWax").val()||$("#dptCdWax").html([...dpt]).selectpicker("refresh");
		$("#orderNoId").val()||$("#orderNoId").html([...joNO]).selectpicker('refresh');
		$("#ohdtypWax").val()||$("#ohdtypWax").html([...type]).selectpicker('refresh');
		$("#ctgyOfWax").val()||$("#ctgyOfWax").html([...ctgy]).selectpicker('refresh');
		$("#caratdisplay").val()||$("#caratdisplay").html([...carat]).selectpicker('refresh');
	
}

/////////////////////////end/////////////////////////////////////////////
function returnSucWaxSave(res){
	if(res=="success"){
		   window.location.href="wax.mm";
	}
}
/////////////////////final Save Wax Product In Java//////////////////////////
function totalfinalsaveWaxOrder(){
	if($("#isauthVal").val()=="1"){
		totalfinalsaveWaxOrderAfter();
	}
	else{
		$("#successResult").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="totalfinalsaveWaxOrderAfter()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#successResult").html(" ")\'>No</button></div>');		
	}
}



function totalfinalsaveWaxOrderAfter(){
	var docNo=$("#docNoWax").val(),docDt=$("#docDtWax").val(),cmyCd=$("#companyCdWax").val(),strCd=$("#storeCdWax").val(),tgtDt=$("#trgtdtId").val(),wrkCd=$("#workCdWax").val()
	,qty=$("#noOfQtyWax").val(),noOfOrd=$("#noOfOrdWax").val(),sumOfStd=$("#sumOfStdWgtWax").val(),noOdPro=$("#sumOfNoPdts").val();
		if(cmyCd!=""&&strCd!=""&&wrkCd!=""&&docNo){
			if($(".childCheckBox:checked").length>0){
				AjaxController.checkWaxNoInDb(docNo,(data)=>{
					if(data&&data.length){
						$("#successResult").html('<div class="alert alert-danger" id="sucResHid9">Entered DocumentNo Already Used..</div>');$("#sucResHid9").fadeOut(3500);
					}
					else{
						$("#saveWaxButton").addClass("disabled");	$("#saveWaxButton").prop("disabled",true);
						$("#successResult").html('<div class="alert alert-info">Saving Please Wait</div>');
						var waxHdrPro,waxHdrDtlsPro=[],ordPriId=[];
						$(".childCheckBox:checked").each(function(){
							var primord=$(this)["0"].id||0;
							ordPriId.push(primord);var isreuse=($(this).closest("tr")[0].hasAttribute("yes"))?"YES":"NO";
							var pdtQty=$(this).closest("tr")["0"].cells[3].innerHTML,ordType=$(this).closest("tr")[0].cells[8].innerHTML;
							var pdtId=$(this).closest("tr")["0"].cells[2].innerHTML,tgDt=$(this).closest("tr")["0"].cells[1].innerHTML,dptCdd=$(this).closest("td").attr("value");
							waxHdrDtlsPro.push({whd_ord_prm_id:primord,whd_iss_ruse_ord:isreuse,whd_doc_no:docNo,whd_cmy_cd:cmyCd,whd_str_cd:strCd,whd_wrkr_cd:wrkCd,whd_trgt_dt:tgDt,whd_ord_no:$(this).val(),
								whd_tree_gntr_sts:"Pending",whd_iss_auth:false,whd_wax_sts:true,whd_pdt_cd:pdtId,whd_dpt_cd:dptCdd,whd_pdt_qty:pdtQty,whd_ord_typ:ordType});
							waxHdrPro={wh_cmy_cd:cmyCd,wh_doc_no:docNo,wh_doc_dt:docDt,wh_no_of_odr:noOfOrd,wh_tot_qty:qty,wh_tot_std_wgt:sumOfStd,wh_no_of_pdt:noOdPro,wh_wax_sts:true,wh_iss_auth:false,wh_wrkr_cd:wrkCd};
						});
						if($("#isauthVal").val()=="1"){
							$.grep(waxHdrDtlsPro,function(i){
								i.whd_iss_auth=true;
							});
							waxHdrPro.wh_iss_auth=true;
						}
						AjaxController.saveWaxDetailForAdd(JSON.stringify(waxHdrPro),JSON.stringify(waxHdrDtlsPro),ordPriId,returnSucWaxSave);
							
					}
				});
					
			}
			else{
				$("#successResult").html('<div class="alert alert-danger" id="sucResHid9">Select Orders</div>');$("#sucResHid9").fadeOut(3500);
			}
		}else{
			if(cmyCd==""){
				$("#successResult").html('<div class="alert alert-danger" id="sucResHid10">Select Company</div>');$("#sucResHid10").fadeOut(3500);
				$("#companyCdWax").focus();
			}
			else if(!docNo){
				$("#successResult").html('<div class="alert alert-danger" id="sucResHid9">Enter DocNo...</div>');$("#sucResHid9").fadeOut(3500);
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
//////////////////////////end///////////////////////////////////////////////

/////////////////////////edit Wax ///////////////////////////////


function totalfinalsaveWaxOrderUpdate(){
	var docNo=$("#docNoWax").val(),cmyCd=$("#companyCdWax").val(),strCd=$("#storeCdWax").val(),tgtDt=$("#trgtdtId").val(),wrkCd=$("#workCdWax").val()
	,qty=$("#noOfQtyWax").val(),noOfOrd=$("#noOfOrdWax").val(),sumOfStd=$("#sumOfStdWgtWax").val(),noOdPro=$("#sumOfNoPdts").val();
		if(cmyCd!=""&&strCd!=""&&wrkCd!=""){
			if($(".childCheckBox:checked").length>0){
				$("#saveWaxButton").addClass("disabled");	$("#saveWaxButton").prop("disabled",true);
				$("#successResult").html('<div class="alert alert-info">Saving Please Wait</div>');
				var waxHdrPro,waxHdrDtlsPro=[],ordPriId=[];
				$(".childCheckBox:checked").each(function(){
					var primord=$(this)["0"].id||0;
					ordPriId.push(primord)
					var pdtQty=$(this).closest("tr")["0"].cells[3].innerHTML;
					var pdtId=$(this).closest("tr")["0"].cells[2].innerHTML,tgDt=$(this).closest("tr")["0"].cells[1].innerHTML,dptCdd=$(this).closest("td").attr("value");
					waxHdrDtlsPro.push({whd_ord_prm_id:primord,whd_doc_no:docNo,whd_cmy_cd:cmyCd,whd_str_cd:strCd,whd_wrkr_cd:wrkCd,whd_trgt_dt:tgDt,whd_ord_no:$(this).val(),
						whd_tree_gntr_sts:"Pending",whd_wax_sts:true,whd_pdt_cd:pdtId,whd_dpt_cd:dptCdd,whd_pdt_qty:pdtQty});
					waxHdrPro={wh_cmy_cd:cmyCd,wh_id:$("#primKeyOfWaxHdr").val(),wh_crt_dt:$("#crtDtWaxHdr").val(),wh_crt_id:$("#crtIdfWaxHdr").val(),wh_doc_no:docNo,wh_no_of_odr:noOfOrd,wh_tot_qty:qty,wh_tot_std_wgt:sumOfStd,wh_no_of_pdt:noOdPro,wh_wax_sts:true};
				});
				AjaxController.updateWaxDetailForAddAjax(JSON.stringify(waxHdrPro),JSON.stringify(waxHdrDtlsPro),ordPriId,returnSucWaxSave);
				
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




//////////////////////////query for usage purpose /////////////////////////
var waxDetailPrint ='select w.wh_doc_no,em_emp_nm,w.wh_no_of_pdt,w.wh_no_of_odr,w.wh_tot_qty,w.wh_tot_std_wgt,'
+'(select top 1 whd_pdt_cd from wax_hdr_dtl where whd_doc_no=w.wh_doc_no) as whd_pdt_cd from wax_hdr'
+' w left join emp_mst on w.wh_wrkr_cd=em_emp_id where wh_wax_sts=1 and (em_emp_sts=1 or em_emp_sts is null) order by w.wh_id desc';

////////////////////////end ///////////////////////////////////////////////


(function (){
	var joNO=new Set(),type=new Set(),dpt=new Set(),targetDate=new Set(),ctgy=new Set(),carat=new Set();
	targetDate.add('<option value="">Select TargetDate</option>');
	$("#myTbody tr").toArray().forEach(function(ths){
		joNO.add('<option>'+$(ths).attr("joNo")+'</option>');
		targetDate.add('<option>'+$(ths).find("td:eq(1)").html()+'</option>')
		type.add('<option>'+$(ths).find("td:eq(8)").text()+'</option>');
		ctgy.add('<option>'+$(ths).find("td:eq(5)").text()+'</option>');
		dpt.add('<option value="'+$(ths).find("td:eq(0)").attr("value")+'">'+$(ths).attr("dptName")+'</option>');
		carat.add('<option>'+$(ths).attr("carat")+'</option>');
		
	});
	$("#dptCdWax").html([...dpt]).selectpicker("refresh");
	$("#orderNoId").html([...joNO]).selectpicker('refresh');
	$("#ohdtypWax").html([...type]).selectpicker('refresh');
	$("#trgtdtId").html([...targetDate]).selectpicker('refresh');
	$("#ctgyOfWax").html([...ctgy]).selectpicker('refresh');
	$("#caratdisplay").html([...carat]).selectpicker('refresh');

	})();



////////////////// print Functionality /////////////////

function AfterSavingPrint(){/*
	var docNo=$("#docNoWax").text();
	const qery='select whd_doc_no,em_emp_nm,whd_pdt_cd,(select sum(cast(whd_pdt_qty as float)) from wax_hdr_dtl w where whd_doc_no=\''+docNo+'\' and w.whd_pdt_cd=dm_pdt_cd and whd_wax_sts=1) as qty,dm_dgn_min_wt, dm_dgn_max_wt,dmm_mold_no,dmm_mold_pcs from wax_hdr_dtl left join dgn_mst on whd_pdt_cd=dm_pdt_cd left join emp_mst on'
	+' whd_wrkr_cd=em_emp_id left join dgn_mold_mst on whd_pdt_cd=dmm_dgn_no where whd_doc_no=\''+docNo+'\' and whd_wax_sts=1 and (dm_dgn_sts is null or dm_dgn_sts=1)';
	AjaxController.getwaxDetailForPrint(qery,returnOfWaxDtls);
	function returnOfWaxDtls(res){
		if(res!=null){
			var reslength=res.length,jsonList=[],colDefList,colstate=[{"colId":"ProductId","hide":false,"aggFunc":null,"width":25,"pivotIndex":null,"rowGroupIndex":0},{"colId":"Qty","hide":false,"aggFunc":null,"width":10,"pivotIndex":null,"rowGroupIndex":1},{"colId":"MinWgt","hide":false,"aggFunc":null,"width":10,"pivotIndex":null,"rowGroupIndex":2},{"colId":"MaxWgt","hide":false,"aggFunc":null,"width":54,"pivotIndex":null,"rowGroupIndex":3},{"colId":"MoldNo","hide":false,"aggFunc":null,"width":10,"pivotIndex":null,"rowGroupIndex":4},{"colId":"MoldQty","hide":false,"aggFunc":"sum","width":125,"pivotIndex":null,"rowGroupIndex":null}];
			for(var i=0;i<reslength;i++){
				jsonList.push({ProductId:res[i][2],Qty:Number(res[i][3])||0,MinWgt:Number(res[i][4])||0,MaxWgt:Number(res[i][5])||0,MoldNo:res[i][6],MoldQty:Number(res[i][7])||0})
			}
			colDefList=[{headerName: 'ProductId', field: 'ProductId', width: 160, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'Qty', field: 'Qty', width: 60, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'MinWgt', field: 'MinWgt', width: 90, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'MaxWgt', field: 'MaxWgt', width: 90, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'MoldNo', field: 'MoldNo', width: 400, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'MoldQty', field: 'MoldQty', width: 100, enableRowGroup: true, enablePivot: true, enableValue: true}]
			var pivotObj=printInAggrid(jsonList,colDefList,colstate,0);
			var result='<table class="table table-bordered table stripped" style="width:'+pivotObj.width+';margin-bottom: 0px;"><thead><tr style="height: 1px !important;"><th style="text-align:center" colspan="6">Wax_Order</th></tr>';
			result+='<tr style="height: 1px !important;"><th colspan="2">CmyName</th><th colspan="1">'+$("#companyCdWax option:selected").text()+'</th><th colspan="2">DocNo</th><th colspan="1">'+$("#docNoWax").html()+'</th></tr>';
			result+='<tr style="height: 1px !important;"><th colspan="2">WorkName</th><th colspan="1">'+$("#workCdWax option:selected").text()+'</th><th colspan="2">Tot.Pdt.Qty</th><th colspan="1">'+totpdtqty+'</th></tr>';
			result+='<tr style="height: 1px !important;"><th colspan="2">No.Of.Pdt</th><th colspan="1">'+$("#sumOfNoPdts").val()+'</th><th colspan="2">Sum.Of.StdWgt</th><th colspan="1">'+$("#sumOfStdWgtWax").val()+'</th></tr>';
			result+='</thead></table>';
			var frame1 = document.createElement('iframe');
	        frame1.name = "frame1";
	        frame1.style.position = "absolute";
	        frame1.style.top = "-1000000px";
	        document.body.appendChild(frame1);
	        var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
	        frameDoc.document.open();
	        frameDoc.document.write('<html><head>');
	        frameDoc.document
            .write('<link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="css/ag-grid.css"><link rel="stylesheet" href="css/ag-theme-fresh.css"><link href="css/customefonts.css" rel="stylesheet"><link rel="stylesheet" href="css/theme-fresh.css"><style>.ag-header-viewport { background: #fdb64b !important; font-size: 15px; color: black; } .ag-theme-fresh .ag-menu .ag-menu-option-active { background: #fdb64b; } .ag-theme-fresh .ag-column-select-panel .ag-column-select-column-group, .ag-theme-fresh .ag-column-select-panel .ag-column-select-column { height: 20px; line-height: 20px; width: max-content !important; } .ag-theme-fresh .ag-column-drop-vertical .ag-column-drop-cell { display: block; float: none; width: max-content; min-width: -webkit-fill-available; } .ag-theme-fresh .ag-header-cell-label .ag-header-cell-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: "Montserrat", sans-serif !important; } .ag-cell-value { font-family: "Montserrat", sans-serif !important; font-size: 13px !important; } .TotalRowGrp{ background: bisque !important; font-weight: bold !important; } .ag-layout-normal .ag-body-viewport { background: white !important; } .ag-theme-fresh .ag-status-bar { background: bisque !important; color: black !important; border: 1px solid #a9a9a9!important; display: flex; justify-content: flex-end; padding: 8px 16px; font-family: "Montserrat", sans-serif !important; } .ag-theme-fresh .ag-tool-panel .ag-column-select-panel { border-bottom: 1px solid darkgrey; padding: 4px 0; padding-bottom: 3px; max-height: 250px !important; overflow-y: auto !important; } .ag-tool-panel { width: 230px !important; } .ag-theme-fresh .ag-tool-panel .ag-column-drop { max-height: 110px !important; }.ag-cell,.ag-header-cell{ border: 1px solid #bbbbbb !important; }.ag-header-group-cell{border: 1px solid #bbbbbb !important; }.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding: 8px; line-height: 1 !important; vertical-align: top; border-top: 1px solid #ddd; } .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding-bottom: 0px !important; padding-top: 0px !important; } th { text-align: left; font-weight: 500 !important; } .table{    font-family: "Montserrat", sans-serif !important;}.ag-header-cell,.ag-cell{text-align: center !important;}</style>');
	        frameDoc.document.write('</head><body>');
	        frameDoc.document.write(result+pivotObj.html);
	        frameDoc.document.write('</body></html>');
	        frameDoc.document.close();
	        setTimeout(function() {
	            window.frames["frame1"].focus();
	            window.frames["frame1"].print();
	            document.body.removeChild(frame1);
	            window.location.href="wax.mm";
	        }, 500);
	       
		}
	}
	
*/}
