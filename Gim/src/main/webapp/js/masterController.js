/**
 * 
 */
 $("[name=crtm_carat_prty]").change(function(){
	 this.value=this.value?(+this.value||0).toFixed(2):'';  
   })
function saveaddCompany(){
	document.getElementById("submitterCompanyForm").click();
}

function saveaddCompanyEdit(){
	document.getElementById("submitterCompanyEditForm").click();
}

function saveaddDepartMent(){
	document.getElementById("submiterDepartMentForm").click();	
}
function saveaddDepartMentEdit(){
	document.getElementById("submiterDepartMentEditForm").click();	
}
function saveaddBom(){
	document.getElementById("submiterBomForm").click();	
}
function saveaddBomEdit(){
	document.getElementById("submiterBomEditForm").click();	
}

function saveaddStore(){
	document.getElementById("submiterStoreForm").click();	
}
function saveaddStoreEdit(){
	document.getElementById("submiterStoreEditForm").click();	
}
function saveaddUom(){
	document.getElementById("submitterUomForm").click();	
}
function saveaddUomEdit(){
	document.getElementById("submitterUomEditForm").click();	
}


function saveaddProcess(){
	document.getElementById("submitterProcessForm").click();	
}

function saveaddProcessEdit(){
	document.getElementById("submitterProcessEditForm").click();	
}
function saveaddStone(){
	document.getElementById("submitterStoneForm").click();	
}
function saveaddStoneEdit(){
	document.getElementById("submitterStoneEditForm").click();	
}

function saveaddMold(){
	document.getElementById("submitterMoldForm").click();	
}
function saveaddMoldEdit(){
	document.getElementById("submitterMoldEditForm").click();	
}
function saveaddRaw(){
	document.getElementById("submitterRawForm").click();	
}
function saveaddRawEdit(){
	document.getElementById("submitterRawEditForm").click();	
}
function saveaddDay(){ 
	document.getElementById("submitterDayForm").click();	
	}

function saveaddDayEdit(){ 
	document.getElementById("submitterDayEditForm").click();	
	}
function saveaddEmp(){ 
	document.getElementById("submitterEmpForm").click();

	}
function saveaddEmpEdit(){ 
	document.getElementById("submitterEmpEditForm").submit();	
	}

function saveaddVendor(){ 
	document.getElementById("submitterVendorForm").click();	
	}
function saveaddVendorEdit(){ 
	document.getElementById("submitterVendorEditForm").click();	
	}
function delCompanyMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delCompanyMstRecAjax(id,delResOfCmyMst);
	function delResOfCmyMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delDepartmentMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delDepartmentMstRecAjax(id,delResOfDepMst);
	function delResOfDepMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delBomMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delBomMstRecAjax(id,delResOfBomMst);
	function delResOfBomMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delStoreMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delStoreMstRecAjax(id,delResOfStoreMst);
	function delResOfStoreMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delUomMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delUomMstRecAjax(id,delResOfUomMst);
	function delResOfUomMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delProcessMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delProcessMstRecAjax(id,delResOfProcessMst);
	function delResOfProcessMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delStoneMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delStoneMstRecAjax(id,delResOfStoneMst);
	function delResOfStoneMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delMoldMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delMoldMstRecAjax(id,delResOfMoldMst);
	function delResOfMoldMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delRawMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delRawMstRecAjax(id,delResOfRawMst);
	function delResOfRawMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delDayMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delDayMstRecAjax(id,delResOfDayMst);
	function delResOfDayMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delEmpMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delEmpMstRecAjax(id,delResOfEmpMst);
	function delResOfEmpMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delVendorMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delVendorMstRecAjax(id,delResOfVendorMst);
	function delResOfVendorMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delDesignMstRec(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delDesignMstRecAjax(id,delResOfDesignMst);
	function delResOfDesignMst(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}


////////////////AutoComplete//////////////////////////////////

function getAllNonGoldProduct(evt, val) {
	if (evt.keyCode == 92 || evt.keyCode == 39||evt.keyCode == 13) {
		return false;
	}
	if (evt.key != "ArrowDown" && evt.key != "ArrowUp"
			&& evt.key != "ArrowRight" && evt.key != "ArrowLeft") {
		if (evt.code == "Quote") {
			$('#srchInNonGold').val('');
			val = '';
			$('#srchInNonGold').focus();
		}
		if (val.length >= 0) {
			AjaxController.getAllNonGoldProductSrchAjax(val, searchNonGoldResult);
			function searchNonGoldResult(res) {
				var collect = new Set();
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
					collect.add(''+ res[i][0] + '-'+ res[i][1] +'-'+ res[i][2] +'-'+ res[i][3] +'-'+ res[i][4] +'');
					}
					$("#srchInNonGold").autocomplete({
						source : [...collect]
					});
					
				}
			}
		}
	}
	
}

function prfomNonGold(){
	var gldId=$("#srchInNonGold").val().split("-");
	if($("#srchInNonGold").val()!=""&&gldId.length>0){
	AjaxController.getNonGOldDetailForAddDesignAjax(gldId[1],retunOfNonGoldRes);	
	function retunOfNonGoldRes(res){
		if(res!=null){
			$("#srchInNonGold").val(res.sm_stn_cd),$("#nonGoldName").val(res.sm_stn_nm),$("#nonGoldShape").val(res.sm_stn_shpe),$("#nonGoldColor").val(res.sm_stn_clr),$("#nonGoldSize").val(res.sm_stn_sz),$("#nonGoldPcs").val(1);
		}
		else{
			$("#nonGoldName").val(""),$("#nonGoldShape").val(""),$("#nonGoldColor").val(""),$("#nonGoldSize").val(""),$("#nonGoldPcs").val("");
		}
	}
	}
}


function getAllBomProduct(evt, val) {
	if (evt.keyCode == 92 || evt.keyCode == 39||evt.keyCode == 13) {
		return false;
	}
	if (evt.key != "ArrowDown" && evt.key != "ArrowUp"
			&& evt.key != "ArrowRight" && evt.key != "ArrowLeft") {
		if (evt.code == "Quote") {
			$('#srchInBomBox').val('');
			val = '';
			$('#srchInBomBox').focus();
		}
		if (val.length >= 0) {
			AjaxController.getAllBomProductSrchAjax(val, searchBomResult);
			function searchBomResult(res) {
				var collect = new Set();
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
						collect .add('' + res[i][1]+ '-'+ res[i][0] + '-'+ res[i][2] + '-'+ res[i][3] + '- ['+ res[i][4] + ']');
					}
					$("#srchInBomBox").autocomplete({
						source :[...collect]

					});
					
				}
			}
		}
	}
}

function prfomBom(){
	var gldId=$("#srchInBomBox").val().split("-");
	if($("#srchInBomBox").val()!=""&&gldId.length>0){
	AjaxController.getBomDetailForAddDesignAjax(gldId[0],retunOfBomRes);	
	function retunOfBomRes(res){
		if(res!=null){
			$("#srchInBomBox").val(res.bm_bom_cd),$("#bomName").val(res.bm_bom_nm),$("#bomWip").val(res.bm_bom_wip_typ),$("#bomSize").val(res.bm_bom_sz),$("#bomType").val(res.bm_bom_typ),$("#bomPcs").val(1);
		}
		else{
			$("#bomName").val(""),$("#bomWip").val(""),$("#bomSize").val(""),$("#bomType").val(""),$("#bomPcs").val("");
		}
	}
	}
}


function getAllMoldProduct(evt, val) {
	if (evt.keyCode == 92 || evt.keyCode == 39||evt.keyCode == 13) {
		return false;
	}
	if (evt.key != "ArrowDown" && evt.key != "ArrowUp"
			&& evt.key != "ArrowRight" && evt.key != "ArrowLeft") {
		if (evt.code == "Quote") {
			$('#srchInMold').val('');
			val = '';
			$('#srchInMold').focus();
		}
		if (val.length >= 0) {
			AjaxController.getAllMoldProductSrchAjax(val, searchMoldResult);
			function searchMoldResult(res) {
				var collect =new Set();
				if (res != null) {
					for (var i = 0; i < res.length; i++) {
					collect .add(res[i]);
					}
					$("#srchInMold").autocomplete({
						source : [...collect]
					});
					
				}
			}
		}
	}
}

function prfomMold(){
	var gldId=$("#srchInMold").val();
	if($("#srchInMold").val()!=""){
	AjaxController.getMoldDetailForAddDesignAjax(gldId,retunOfMoldRes);	
	function retunOfMoldRes(res){
		if(res!=null){
			$("#srchInMold").val(res.mm_mold_no);
			$("#moldPcs").val(1);
			$("#moldDcrs").val(res.mm_mold_dscr);
		}
	}
}
	
}


///////////////////////Change Searched Product Handle///////////////////////

$(function (){
$(".bomChanger").on("change",function (){
	$("#srchInBomBox").val("");
})
$(".nonGoldChanger").on("change",function (){
	$("#srchInNonGold").val("");
})

})

/////////////////////Add Product to Design//////////////////////////////
var nonGoldProd=[];
function addNonGoldForDesing(evn){
	if($("#srchInNonGold").val()!=""){
		$("#successResultInGold").html("");
		var isdub=false;
	$.grep(nonGoldProd,function(i){
		if(i.sm_stn_cd==$("#srchInNonGold").val()&&i.sm_cmy_cd==$("#companyCode").val()){
			isdub=true;
		}
	})
	if(isdub==false){
		var prod={sm_stn_cd:$("#srchInNonGold").val(),sm_stn_nm:$("#nonGoldName").val(),sm_stn_shpe:$("#nonGoldShape").val(),sm_stn_clr:$("#nonGoldColor").val(),sm_stn_sz:$("#nonGoldSize").val(),sm_stn_crt_dt:$("#nonGoldPcs").val()}
		nonGoldProd.push(prod);
		tableOfNonGoldShow();
		$("#successResultInGold").html('<div class="alert alert-success" id="ngsuccecc1">Added Success</div>'),$("#ngsuccecc1").fadeOut(2500);
		$(".nonGoldChanger,#srchInNonGold,#nonGoldPcs").each(function(){
			$(this).val("");
		})
	}
	else{
		$("#successResultInGold").html('<div class="alert alert-danger" id="ngsuccecc2">Already Added</div>'),$("#ngsuccecc2").fadeOut(2500);
	}
	}else{
		$("#successResultInGold").focus();
		$("#successResultInGold").html('<div class="alert alert-danger" id="ngsuccecc3">Enter Code</div>'),$("#ngsuccecc3").fadeOut(2500);
	}
	
}

function tableOfNonGoldShow(){
	var table='';
	var cnt=0;
	$.grep(nonGoldProd,function(i){
		table+='<tr><td>'+i.sm_stn_cd+'</td><td>'+i.sm_stn_nm+'</td><td>'+i.sm_stn_shpe+'</td><td>'+i.sm_stn_clr+'</td><td>'+i.sm_stn_sz+'</td><td ondblclick="designStnQtyArrayRec('+cnt+',this)">'+i.sm_stn_crt_dt+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedNonGoldIndex('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#NonGoldTable").html(table);
} 

var bomProd=[];
function addBomForDesing(){
	if($("#srchInBomBox").val()!=""){
		$("#successResultBom").html("")
		var isdub=false;
	$.grep(bomProd,function(i){
		if(i.bm_bom_cd==$("#srchInBomBox").val()){
			isdub=true;
		}
	})
	if(isdub==false){
		var prod={bm_bom_cd:$("#srchInBomBox").val(),bm_bom_nm:$("#bomName").val(),bm_bom_wip_typ:$("#bomWip").val(),bm_bom_sz:$("#bomSize").val(),bm_bom_typ:$("#bomType").val(),bm_bom_crt_dt:$("#bomPcs").val()}
		bomProd.push(prod);
		tableOfBomShow();
		$("#successResultInBom").html('<div class="alert alert-success" id="successBom1">Added Success</div>'),$("#successBom1").fadeOut(2500);
		$(".bomChanger,#srchInBomBox,#bomPcs").each(function(){
			$(this).val("");
		})
	}
	else{
		$("#successResultInBom").html('<div class="alert alert-danger" id="successBom2">Already Added</div>'),$("#successBom2").fadeOut(2500);
	}
	}else{
		$("#srchInBomBox").focus();
		$("#successResultInBom").html('<div class="alert alert-danger" id="successBom3">Enter Code</div>'),$("#successBom3").fadeOut(2500);
	}
}

function tableOfBomShow(){
	var table='';
	var cnt=0;
	$.grep(bomProd,function(i){
		table+='<tr><td>'+i.bm_bom_cd+'</td><td>'+i.bm_bom_nm+'</td><td>'+i.bm_bom_wip_typ+'</td><td>'+i.bm_bom_sz+'</td><td>'+i.bm_bom_typ+'</td><td ondblclick="designBomQtyArrayRec('+cnt+',this)">'+i.bm_bom_crt_dt+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedBomIndex('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#bomTable").html(table);
} 

var moldProd=[];
function addMoldForDesing(){
	if($("#srchInMold").val()!=""){
		$("#successResultMold").html("");
		var isdub=false;
	$.grep(moldProd,function(i){
		if(i.mm_mold_no==$("#srchInMold").val()&&i.mm_cmy_cd==$("#companyCode").val()){
			isdub=true;
		}
	})
	if(isdub==false){
		var prod={mm_mold_no:$("#srchInMold").val(),mm_mold_dscr:$("#moldDcrs").val(),mm_mold_crt_dt:$("#moldPcs").val()}
		moldProd.push(prod);
		tableOfMoldShow();
		$("#successResultInMold").html('<div class="alert alert-success" id="successMold4">Added Success</div>'),$("#successMold4").fadeOut(2500);
		$(".moldChanger,#srchInMold,#moldPcs").each(function(){
			$(this).val("");
		})
	}
	else{
		$("#successResultInMold").html('<div class="alert alert-danger" id="successMold5">Already Added</div>'),$("#successMold5").fadeOut(2500);
	
	}
	}else{
		$("#successResultInMold").html('<div class="alert alert-danger" id="successMold6">Enter Code</div>'),$("#successMold6").fadeOut(2500);
		
	}
}

function tableOfMoldShow(){
	var table='';
	var cnt=0;
	$.grep(moldProd,function(i){
		table+='<tr><td>'+i.mm_mold_no+'</td><td>'+i.mm_mold_dscr+'</td><td ondblclick="designMoldQtyArrayRec('+cnt+',this)">'+i.mm_mold_crt_dt+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedMoldIndex('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#moldTable").html(table);
} 
var castProd=[];
function addCastingForDesing(){
	var emptyAry=[];
	var alow=true;
	$(".castChanger").each(function(){
		if($(this).val()!="")alow=false;
	})
	if(alow==false){
	var prod={cm_lbr_chg:$("#lbChge").val(),cm_stn_chg:$("#stnChge").val(),cm_dvpt_chg:$("#dptChge").val()};
	emptyAry.push(prod);
	castProd=emptyAry;
	tableOfCastingShow();
	$("#successResultInCast").html('<div class="alert alert-success" id="successcst4">Added Success</div>'),$("#successcst4").fadeOut(2500);
	$(".castChanger").each(function(){
		$(this).val("");
	})
}
	else{
		$("#successResultInCast").html('<div class="alert alert-danger" id="successcst5">Fill Atleast One Amount </div>'),$("#successcst5").fadeOut(2500);
		$("#lbChge").focus();
	}
}
function tableOfCastingShow(){
	var table='';
	var cnt=0;
	$.grep(castProd,function(i){
		table+='<tr><td>'+i.cm_lbr_chg+'</td><td>'+i.cm_stn_chg+'</td><td>'+i.cm_dvpt_chg+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row"  onclick="addDesignCastQtyMstRec(this)"><i class="fa fa-pencil"></i></button><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedCastIndex('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#castingTable").html(table);
} 
/////////////Delete Product///////////////////
function delAddedMoldIndex(id){
	moldProd.splice(id, 1);
	tableOfMoldShow();
	$("#successResultInMold").html('<div class="alert alert-success" id="successMld15">Deleted Success </div>'),$("#successMld15").fadeOut(2500);
}

function delAddedBomIndex(id){
	bomProd.splice(id, 1);
	tableOfBomShow();
	$("#successResultInBom").html('<div class="alert alert-success" id="successBm15">Deleted Success </div>'),$("#successBm15").fadeOut(2500);
}

function delAddedNonGoldIndex(id){
	nonGoldProd.splice(id, 1);
	tableOfNonGoldShow();
	$("#successResultInGold").html('<div class="alert alert-success" id="successNg15">Deleted Success </div>'),$("#successNg15").fadeOut(2500);
}

function delAddedCastIndex(id){
	castProd.splice(id, 1);
	tableOfCastingShow();
	$("#successResultInCast").html('<div class="alert alert-success" id="successCst15">Deleted Success </div>'),$("#successCst15").fadeOut(2500);
}
////////////Save Finaly For//////////////

function adddesignProduct(){
	document.getElementById("submitterDesignForm").click();
}
function adddesignProductEdit(){
	document.getElementById("submitterDesignEditForm").click();
}
function saveaddedProDesignControl(){
	var vfyPdtId=$("#productCode").val();
	AjaxController.chkThisDgnPdtCdAlrdyPrsntOrNot(vfyPdtId,rstFun);
	function rstFun(res){
		if(res=="allow"){
			var min=$("#minWieght").val(),max=$("#maxWeigth").val();
			if(min!=""&&max!=""){
				if(Number(min)>Number(max)){
					$("#finalSaveDesinAlert").html('<div class="alert alert-danger" id="successfnl15">Enter Valid Minimum Amount</div>'),$("#successfnl15").fadeOut(2500);
		
					$("#minWieght").select();
					$("#minWieght").focus();
				}
				else{
					$("#saveButtonInDesignPro").prop("disabled",true);$("#saveButtonInDesignPro").addClass("disabled");
					$("#finalSaveDesinAlert").html('<div class="alert alert-info" id="successfnl25">Wait Saving Data..</div>'),$("#successfnl25").fadeOut(2500);			
	var fileUpload = document.getElementById("fileImage").files[0];
	 var formData = new FormData();
	formData.append("file", fileUpload);
	var sdt=window.location.origin+"/gim/fileSender.mm";
	var cmycd=$("#companyCode").val(),pdtCd=$("#productCode").val(),pdtNm=$("#productName").val(),designNo=$("#designNo").val(),catyName=$("#categoryName").val(),
	deptCd=$("#departMentCd").val(),typeOfPro=$("#typeOfProduct").val(),dgnSz=$("#designSize").val(),uomCode=$("#uomCode").val(),stdWgt=$("#stdWeigth").val(),
	minWgt=$("#minWieght").val(),maxWgt=$("#maxWeigth").val(),vndrCd=($("#vendorCd").val()||''),sellerCd=($("#selerOfDgn").val()||''),ohter2Nm=$("#ohter2Nm").val(),ohter1Nm=$("#ohter1Nm").val(),crtDgn=$("#caratDgn").val();
	var clasObj={dm_cmy_cd:cmycd,dm_pdt_cd:pdtCd,dm_pdt_nm:pdtNm,dm_dgn_no:designNo,dm_dgn_ctgy:catyName,dm_dgn_dpt:deptCd,dm_dgn_typ:typeOfPro,dm_dgn_sz:dgnSz,dm_dgn_uom:uomCode,dm_dgn_std_wt:stdWgt,
			dm_dgn_min_wt:minWgt,dm_dgn_max_wt:maxWgt,dm_dgn_vn:vndrCd,dm_oth1:ohter1Nm,dm_oth2:ohter2Nm,dm_dgn_carat:crtDgn,dm_dgn_cust_cd:sellerCd};
	var clsStn=JSON.stringify(clasObj);
	var castPro="{}";
	if(castProd.length>0){
		castPro=JSON.stringify(castProd[0]);
	}
	var NgProd=JSON.stringify(nonGoldProd),BmProd=JSON.stringify(bomProd),MdProd=JSON.stringify(moldProd);
	if(fileUpload!=undefined){
		$.ajax({dataType : 'json',
	             url : sdt,
	             data : formData,
	             type : "POST",
	             enctype: 'multipart/form-data',
	             processData: false, 
	             contentType:false,
	             success : function(result) {
	            	 AjaxController.saveDesignProductsAjax(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSuc); 
	          		  },
	             error : function(result){
	            	 AjaxController.saveDesignProductsAjax(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSuc);
	          		 }
	         });
		 }
	else{
	AjaxController.saveDesignProductsAjax(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSuc);
	}
	}
		}
			else{
				$("#saveButtonInDesignPro").prop("disabled",true);$("#saveButtonInDesignPro").addClass("disabled");
				$("#finalSaveDesinAlert").html('<div class="alert alert-info" id="successfnl125">Wait Saving Data..</div>'),$("#successfnl125").fadeOut(2500);			
				var fileUpload = document.getElementById("fileImage").files[0];
				 var formData = new FormData();
				formData.append("file", fileUpload);
				var sdt=window.location.origin+"/gim/fileSender.mm";
				var cmycd=$("#companyCode").val(),pdtCd=$("#productCode").val(),pdtNm=$("#productName").val(),designNo=$("#designNo").val(),catyName=$("#categoryName").val(),
				deptCd=$("#departMentCd").val(),typeOfPro=$("#typeOfProduct").val(),dgnSz=$("#designSize").val(),uomCode=$("#uomCode").val(),stdWgt=$("#stdWeigth").val(),
				minWgt=$("#minWieght").val(),maxWgt=$("#maxWeigth").val(),vndrCd=$("#vendorCd").val(),ohter2Nm=$("#ohter2Nm").val(),ohter1Nm=$("#ohter1Nm").val(),crtDgn=$("#caratDgn").val();
				var clasObj={dm_cmy_cd:cmycd,dm_pdt_cd:pdtCd,dm_pdt_nm:pdtNm,dm_dgn_no:designNo,dm_dgn_ctgy:catyName,dm_dgn_dpt:deptCd,dm_dgn_typ:typeOfPro,dm_dgn_sz:dgnSz,dm_dgn_uom:uomCode,dm_dgn_std_wt:stdWgt,
						dm_dgn_min_wt:minWgt,dm_dgn_max_wt:maxWgt,dm_dgn_vn:vndrCd,dm_oth1:ohter1Nm,dm_oth2:ohter2Nm,dm_dgn_carat:crtDgn};
				var clsStn=JSON.stringify(clasObj);
				var castPro="{}";
				if(castProd.length>0){
					castPro=JSON.stringify(castProd[0]);
				}
				var NgProd=JSON.stringify(nonGoldProd),BmProd=JSON.stringify(bomProd),MdProd=JSON.stringify(moldProd);
				if(fileUpload!=undefined){
					$.ajax({dataType : 'json',
				             url : sdt,
				             data : formData,
				             type : "POST",
				             enctype: 'multipart/form-data',
				             processData: false, 
				             contentType:false,
				             success : function(result) {
				            	 AjaxController.saveDesignProductsAjax(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSuc); 
				          		  },
				             error : function(result){
				            	 AjaxController.saveDesignProductsAjax(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSuc);
				          		 }
				         });
					 }
				else{
				AjaxController.saveDesignProductsAjax(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSuc);
				}
					
			}
	}
		else{
			$("#finalSaveDesinAlert").html('<div class="alert alert-danger" id="successfnd25">ProductCode Already Used...</div>'),$("#successfnd25").fadeOut(2500);			
	$("#productCode").select();
			$("#productCode").focus();	
		}
	}
	
}


function successResOfDesignSuc(res){
	if(res=="success"){
		window.location.href="adddesign.mm";
	}
}





////////////////////////Edit Master Detail/////////////////////////////

function editCompanyMstRec(id){
	window.location.href="editcompany.mm?cmyId="+id+"";
}
function editDepartmentMstRec(id){
	window.location.href="editdepartment.mm?dptId="+id+"";
}
function editEmpMstRec(id){
	window.location.href="editemployee.mm?empId="+id+"";
}
function editBomMstRec(id){
	window.location.href="editbom.mm?bomId="+id+"";
}

function editUomMstRec(id){
	window.location.href="edituom.mm?uomId="+id+"";
}

function editDayMstRec(id){
	window.location.href="editdaywiseprice.mm?dayId="+id+"";
}

function editStoreMstRec(id){
	window.location.href="editstore.mm?strId="+id+"";
}
function editProcessMstRec(id){
	window.location.href="editprocess.mm?prcsId="+id+"";
}

function editVendorMstRec(id){
	window.location.href="editvendor.mm?vntId="+id+"";	
}
function editStoneMstRec(id){
	window.location.href="editstone.mm?stnId="+id+"";	
}
function editMoldMstRec(id){
	window.location.href="editmold.mm?mldId="+id+"";	
}
function editRawMstRec(id){
	window.location.href="editrawmetrial.mm?rawId="+id+"";	
}

function editDesignMstRec(id){
	window.location.href="editdesign.mm?dgnId="+id+"";	
}

///////////////////////////////////////Deleted Added Design Product In Edit Design Page/////////////////////
function delExistNonGoldfromDgn(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delExistNonGoldfromDgnAjax(id,delExitOfDgnStnMstRes);
	function delExitOfDgnStnMstRes(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}
function delExistBomfromDgn(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delExistBomfromDgnAjax(id,delExitOfDgnBomMstRes);
	function delExitOfDgnBomMstRes(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}
function delExistMoldfromDgn(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delExistMoldfromDgnAjax(id,delExitOfDgnMoldMstRes);
	function delExitOfDgnMoldMstRes(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function delExistCastfromDgn(id,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delExistCastfromDgnAjax(id,delExitOfDgnCastMstRes);
	function delExitOfDgnCastMstRes(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

/////////////////////////////////////////end////////////////////////////////////////////////////////////////

////////////Edit Design Based Add Product//////////////////////////
var nonGoldProdEdit=[];
function addNonGoldForDesingEdit(){
	var smnm=$("#nonGoldName").val(),smshpe=$("#nonGoldShape").val(),smclr=$("#nonGoldColor").val(),
	smsz=$("#nonGoldSize").val(),smdt=$("#nonGoldPcs").val();
	$("#successResultInGold").html("");
	AjaxController.checkStoneWithDgnNoForAddAjax($("#srchInNonGold").val(),$("#productCode").val(),retResChkStn);
	function retResChkStn(res){
		if(res==null){
		var isdub=nonGoldProdEdit.find(function(i){
		if(i.sm_stn_nm==smnm&&smshpe==i.sm_stn_shpe&&i.sm_stn_sz==smsz&&i.sm_stn_clr==smclr){
			return true;
		}
	})
	if(!isdub){
		var prod={sm_stn_cd:$("#srchInNonGold").val(),sm_stn_nm:$("#nonGoldName").val(),sm_stn_shpe:$("#nonGoldShape").val(),sm_stn_clr:$("#nonGoldColor").val(),sm_stn_sz:$("#nonGoldSize").val(),sm_stn_crt_dt:$("#nonGoldPcs").val()}
		nonGoldProdEdit.push(prod);
		tableOfNonGoldShowEdit();
		$("#successResultInGold").html('<div class="alert alert-success" id="successNg25">Added Success</div>'),$("#successNg25").fadeOut(2500);			
		$(".nonGoldChanger,#srchInNonGold,#nonGoldPcs").each(function(){
			$(this).val("");
		})
	}
	else{
		$("#successResultInGold").html('<div class="alert alert-danger" id="successNg251">Already Added</div>'),$("#successNg251").fadeOut(2500);			

	}
	}
			else{
				$("#successResultInGold").html('<div class="alert alert-danger" id="successNg215">Already Added</div>'),$("#successNg215").fadeOut(2500);
				
			}
		}
}

function tableOfNonGoldShowEdit(){
	var table='';
	var cnt=0;
	$.grep(nonGoldProdEdit,function(i){
		table+='<tr><td>'+i.sm_stn_cd+'</td><td>'+i.sm_stn_nm+'</td><td>'+i.sm_stn_shpe+'</td><td>'+i.sm_stn_clr+'</td><td>'+i.sm_stn_sz+'</td><td ondblclick="editDesignStnQtyArrayRec('+cnt+',this)">'+i.sm_stn_crt_dt+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedNonGoldIndexEdit('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#NonGoldTable").html(table);
} 

var bomProdEdit=[];
function addBomForDesingEdit(){
	var bm_nm=$("#bomName").val(),bm_wip=$("#bomWip").val(),bm_sz=$("#bomSize").val(),bm_typ=$("#bomType").val();
		$("#successResultBom").html("");
		AjaxController.checkBomWithDgnNoForAddAjax($("#srchInBomBox").val(),$("#productCode").val(),retResChkBom);
		function retResChkBom(res){
			if(res==null){
		var isdub=bomProdEdit.find(function(i){
		if(i.bm_bom_nm==bm_nm&&i.bm_bom_wip_typ==bm_wip&&bm_sz==i.bm_bom_sz&&i.bm_bom_typ==bm_typ){
			return true;
		}
	})
	if(!isdub){
		var prod={bm_bom_cd:$("#srchInBomBox").val(),bm_bom_wip_typ:bm_wip,bm_bom_nm:bm_nm,bm_bom_wip:bm_wip,bm_bom_sz:bm_sz,bm_bom_typ:bm_typ,bm_bom_crt_dt:$("#bomPcs").val()}
		bomProdEdit.push(prod);
		tableOfBomShowEdit();
		$("#successResultInBom").html('<div class="alert alert-success" id="successBm2E15">Added Success</div>'),$("#successBm2E15").fadeOut(2500);
		$(".bomChanger,#srchInBomBox,#bomPcs").each(function(){
			$(this).val("");
		})
	}
	else{
		$("#successResultInBom").html('<div class="alert alert-danger" id="successBm2d15">Already Added</div>'),$("#successBm2d15").fadeOut(2500);
	
	}
			}
			else{
				$("#successResultInBom").html('<div class="alert alert-danger" id="successBm2d25">Already Added</div>'),$("#successBm2d25").fadeOut(2500);
		
			}
		}

}

function tableOfBomShowEdit(){
	var table='';
	var cnt=0;
	$.grep(bomProdEdit,function(i){
		table+='<tr><td>'+i.bm_bom_cd+'</td><td>'+i.bm_bom_nm+'</td><td>'+i.bm_bom_wip_typ+'</td><td>'+i.bm_bom_sz+'</td><td>'+i.bm_bom_typ+'</td><td ondblclick="editDesignBomQtyArrayRec('+cnt+',this)">'+i.bm_bom_crt_dt+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedBomIndexEdit('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#bomTable").html(table);
} 

var moldProdEdit=[];
function addMoldForDesingEdit(){
	if($("#srchInMold").val()!=""){
		$("#successResultMold").html("");
		AjaxController.checkMoldWithDgnNoForAddAjax($("#srchInMold").val(),$("#productCode").val(),retResChkMold);
		function retResChkMold(res){
			if(res==null){
		var isdub=moldProdEdit.find(function(i){
		if(i.mm_mold_no==$("#srchInMold").val()){
			return true;
		}
	})
	if(!isdub){
		var prod={mm_mold_no:$("#srchInMold").val(),mm_mold_dscr:$("#moldDcrs").val(),mm_mold_crt_dt:$("#moldPcs").val()}
		moldProdEdit.push(prod);
		tableOfMoldShowEdit();
		$("#successResultInMold").html('<div class="alert alert-success" id="successMM2d35">Added Success</div>'),$("#successMM2d35").fadeOut(2500);
	
		$(".moldChanger,#srchInMold,#moldPcs").each(function(){
			$(this).val("");
		})
	}
	else{
		$("#successResultInMold").html('<div class="alert alert-danger" id="successMM2d36">Already Added</div>'),$("#successMM2d36").fadeOut(2500);
	}
			}
			else{
				$("#successResultInMold").html('<div class="alert alert-danger" id="successMM2d37">Already Added</div>'),$("#successMM2d37").fadeOut(2500);
			
			}
		}
	}else{
		$("#successResultInMold").html('<div class="alert alert-danger" id="successMM2d38">Enter Code</div>'),$("#successMM2d38").fadeOut(2500);

	}
}

function tableOfMoldShowEdit(){
	var table='';
	var cnt=0;
	$.grep(moldProdEdit,function(i){
		table+='<tr><td>'+i.mm_mold_no+'</td><td>'+i.mm_mold_dscr+'</td><td ondblclick="editDesignMoldQtyArrayRec('+cnt+',this)">'+i.mm_mold_crt_dt+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedMoldIndexEdit('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#moldTable").html(table);
} 
var castProdEdit=[];
function addCastingForDesingEdit(){
	var emptyAry=[];
	var alow=true;
	$(".castChanger").each(function(){
		if($(this).val()!="")alow=false;
	})
	if(alow==false){
	var prod={cm_lbr_chg:$("#lbChge").val(),cm_stn_chg:$("#stnChge").val(),cm_dvpt_chg:$("#dptChge").val()};
	emptyAry.push(prod);
	castProdEdit=emptyAry;
	tableOfCastingShowEdit();
	$("#successResultInCast").html('<div class="alert alert-success" id="successCst2u38">Updated Success</div>'),$("#successCst2u38").fadeOut(2500);
	$(".castChanger").each(function(){
		$(this).val("");
	})
}
	else{
		$("#successResultInCast").html('<div class="alert alert-danger" id="successCst2u68">Fill Atleast One Amount</div>'),$("#successCst2u68").fadeOut(2500);
	$("#lbChge").focus();
	}
}
function tableOfCastingShowEdit(){
	var table='';
	var cnt=0;
	$.grep(castProdEdit,function(i){
		table+='<tr><td>'+i.cm_lbr_chg+'</td><td>'+i.cm_stn_chg+'</td><td>'+i.cm_dvpt_chg+'</td><td><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row"  onclick="editDesignCastQtyMstRec(this)"><i class="fa fa-pencil"></i></button><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAddedCastIndexEdit('+cnt+')"><i class="fa fa-trash-o"></i></button></td></tr>'
	cnt++;
	})	
	$("#castingTable").html(table);
} 

function delAddedMoldIndexEdit(id){
	moldProdEdit.splice(id, 1);
	tableOfMoldShowEdit();
	$("#successResultInMold").html('<div class="alert alert-success" id="successCst2del68">Deleted Success</div>'),$("#successCst2del68").fadeOut(2500);

}

function delAddedBomIndexEdit(id){
	bomProdEdit.splice(id, 1);
	tableOfBomShowEdit();
	$("#successResultInBom").html('<div class="alert alert-success" id="succesBm2del68">Deleted Success</div>'),$("#succesBm2del68").fadeOut(2500);

}

function delAddedNonGoldIndexEdit(id){
	nonGoldProdEdit.splice(id, 1);
	tableOfNonGoldShowEdit();
	$("#successResultInGold").html('<div class="alert alert-success" id="succesMnm2del68">Deleted Success</div>'),$("#succesMnm2del68").fadeOut(2500);
}

function delAddedCastIndexEdit(id){
	castProdEdit.splice(id, 1);
	tableOfCastingShowEdit();
	$("#successResultInCast").html('<div class="alert alert-success" id="succesCst12del68">Deleted Success</div>'),$("#succesCst12del68").fadeOut(2500);
}

function saveaddedProDesignControlEdit(){
	var min=$("#minWieght").val(),max=$("#maxWeigth").val();
	if(min!=""&&max!=""){
		if(Number(min)>Number(max)){
			$("#finalSaveDesinAlert").html('<div class="alert alert-danger" id="succesFnsv12del68">Enter Valid Minimum Amount</div>'),$("#succesFnsv12del68").fadeOut(2500);
			$("#minWieght").select();
			$("#minWieght").focus();
		}
		else{
			$("#saveButtonInDesignPro").prop("disabled",true);$("#saveButtonInDesignPro").addClass("disabled");
			$("#finalSaveDesinAlert").html('<div class="alert alert-info" id="succesFnsv12del69">Wait Saving Data..</div>'),$("#succesFnsv12del69").fadeOut(2500);
	var fileUpload = document.getElementById("fileImage").files[0];
	 var formData = new FormData();
	formData.append("file", fileUpload);
	var sdt=window.location.origin+"/gim/fileSender.mm";
	var crtdt=$("#dm_dgn_crt_dt").val(), crtId=$("#dm_dgn_crt_id").val(),cmycd=$("#companyCode").val(),dgnMstIn=$("#dgn_mst_id").val(),pdtCd=$("#productCode").val(),pdtNm=$("#productName").val(),designNo=$("#designNo").val(),catyName=$("#categoryName").val(),
	deptCd=$("#departMentCd").val(),typeOfPro=$("#typeOfProduct").val(),dgnSz=$("#designSize").val(),uomCode=$("#uomCode").val(),stdWgt=$("#stdWeigth").val(),
	minWgt=$("#minWieght").val(),maxWgt=$("#maxWeigth").val(),ohter2Nm=$("#ohter2Nm").val(),ohter1Nm=$("#ohter1Nm").val(),crtDgn=$("#caratDgn").val();
	var vndrCd='',sellerCd='';
	if($("#vendorCd").val()){
		vndrCd=$("#vendorCd").val();
	}if($("#selerOfDgn").val()){
		sellerCd=$("#selerOfDgn").val();
	}
	var clasObj={dm_id:dgnMstIn,dm_cmy_cd:cmycd,dm_pdt_cd:pdtCd,dm_pdt_nm:pdtNm,dm_dgn_no:designNo,dm_dgn_ctgy:catyName,dm_dgn_dpt:deptCd,dm_dgn_typ:typeOfPro,dm_dgn_sz:dgnSz,dm_dgn_uom:uomCode,dm_dgn_std_wt:stdWgt,
			dm_dgn_min_wt:minWgt,dm_dgn_max_wt:maxWgt,dm_dgn_vn:vndrCd,dm_oth1:ohter1Nm,dm_oth2:ohter2Nm,dm_dgn_carat:crtDgn,dm_dgn_crt_dt:crtdt,dm_dgn_crt_id:crtId,dm_dgn_img:$("#dm_dgn_img").val(),dm_dgn_cust_cd:sellerCd};
	var clsStn=JSON.stringify(clasObj);
	var castPro="{}";
	if(castProdEdit.length>0){
		castPro=JSON.stringify(castProdEdit[0]);
	}
	var NgProd=JSON.stringify(nonGoldProdEdit),BmProd=JSON.stringify(bomProdEdit),MdProd=JSON.stringify(moldProdEdit);
	if(fileUpload!=undefined){
		$.ajax({dataType : 'json',
	             url : sdt,
	             data : formData,
	             type : "POST",
	             enctype: 'multipart/form-data',
	             processData: false, 
	             contentType:false,
	             success : function(result) {
	            	 AjaxController.saveDesignProductsAjaxEdit(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSucEdit); 
	          		  },
	             error : function(result){
	            	 AjaxController.saveDesignProductsAjaxEdit(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSucEdit);
	          		 }
	         });
		 }
	else{
	AjaxController.saveDesignProductsAjaxEdit(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSucEdit);
	}
		}
	}
	else{
		$("#saveButtonInDesignPro").prop("disabled",true);$("#saveButtonInDesignPro").addClass("disabled");
		$("#finalSaveDesinAlert").html('<div class="alert alert-info" id="succesFnsv12del343">Wait Saving Data..</div>'),$("#succesFnsv12del343").fadeOut(2500);
		var fileUpload = document.getElementById("fileImage").files[0];
		 var formData = new FormData();
		formData.append("file", fileUpload);
		var sdt=window.location.origin+"/gim/fileSender.mm";
		var crtdt=$("#dm_dgn_crt_dt").val(), sellerCd=($("#selerOfDgn").val()||''),crtId=$("#dm_dgn_crt_id").val(),cmycd=$("#companyCode").val(),dgnMstIn=$("#dgn_mst_id").val(),pdtCd=$("#productCode").val(),pdtNm=$("#productName").val(),designNo=$("#designNo").val(),catyName=$("#categoryName").val(),
		deptCd=$("#departMentCd").val(),typeOfPro=$("#typeOfProduct").val(),dgnSz=$("#designSize").val(),uomCode=$("#uomCode").val(),stdWgt=$("#stdWeigth").val(),
		minWgt=$("#minWieght").val(),maxWgt=$("#maxWeigth").val(),vndrCd=$("#vendorCd").val(),ohter2Nm=$("#ohter2Nm").val(),ohter1Nm=$("#ohter1Nm").val(),crtDgn=$("#caratDgn").val();
		var clasObj={dm_id:dgnMstIn,dm_cmy_cd:cmycd,dm_pdt_cd:pdtCd,dm_pdt_nm:pdtNm,dm_dgn_no:designNo,dm_dgn_ctgy:catyName,dm_dgn_dpt:deptCd,dm_dgn_typ:typeOfPro,dm_dgn_sz:dgnSz,dm_dgn_uom:uomCode,dm_dgn_std_wt:stdWgt,
				dm_dgn_min_wt:minWgt,dm_dgn_max_wt:maxWgt,dm_dgn_vn:vndrCd,dm_oth1:ohter1Nm,dm_oth2:ohter2Nm,dm_dgn_carat:crtDgn,dm_dgn_crt_dt:crtdt,dm_dgn_crt_id:crtId,dm_dgn_cust_cd:sellerCd};
		var clsStn=JSON.stringify(clasObj);
		var castPro="{}";
		if(castProdEdit.length>0){
			castPro=JSON.stringify(castProdEdit[0]);
		}
		var NgProd=JSON.stringify(nonGoldProdEdit),BmProd=JSON.stringify(bomProdEdit),MdProd=JSON.stringify(moldProdEdit);
		if(fileUpload!=undefined){
			$.ajax({dataType : 'json',
		             url : sdt,
		             data : formData,
		             type : "POST",
		             enctype: 'multipart/form-data',
		             processData: false, 
		             contentType:false,
		             success : function(result) {
		            	 AjaxController.saveDesignProductsAjaxEdit(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSucEdit); 
		          		  },
		             error : function(result){
		            	 AjaxController.saveDesignProductsAjaxEdit(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSucEdit);
		          		 }
		         });
			 }
		else{
		AjaxController.saveDesignProductsAjaxEdit(NgProd,BmProd,MdProd,clsStn,castPro,successResOfDesignSucEdit);
		}
				
	}
}


function successResOfDesignSucEdit(res){
	if(res=="success"){
		window.location.href="design.mm";
	}
}

/////////////////////end/////////////////////////////////////////

/////////////////Add Design Page  Qty Changer For AAll////////////

function designStnQtyArrayRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savedesignStnQtyArrayRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function savedesignStnQtyArrayRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	nonGoldProd[index].sm_stn_crt_dt=valIn;
}
function designBomQtyArrayRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savedesignBomQtyArrayRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function savedesignBomQtyArrayRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	bomProd[index].bm_bom_crt_dt=valIn;
}

function designMoldQtyArrayRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='savedesignMoldQtyArrayRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function savedesignMoldQtyArrayRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	moldProd[index].mm_mold_crt_dt=valIn;
}

///////////////end///////////////////////////



//////////////////Update Qty In DesignProduct///////////////////

function editDesignStnQtyArrayRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditDesignStnQtyArrayRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function saveeditDesignStnQtyArrayRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	nonGoldProdEdit[index].sm_stn_crt_dt=valIn;
}

function editDesignBomQtyArrayRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditDesignBomQtyArrayRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function saveeditDesignBomQtyArrayRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	bomProdEdit[index].bm_bom_crt_dt=valIn;
}

function editDesignMoldQtyArrayRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditDesignMoldQtyArrayRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function saveeditDesignMoldQtyArrayRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	$(ths).closest("td").html(valIn);
	moldProdEdit[index].mm_mold_crt_dt=valIn;
}

/////////////////Array Data Qty Update end/////////////////////

function editDesignStnQtyMstRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditDesignStnQtyMstRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function saveeditDesignStnQtyMstRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	AjaxController.updateQtyInDgnStnExistAjax(index,valIn,updtDgStRes);
	function updtDgStRes(res){
		$(ths).closest("td").html(valIn);
	}
}
function editDesignBomQtyMstRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditDesignBomQtyMstRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function saveeditDesignBomQtyMstRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	AjaxController.updateQtyInDgnBomExistAjax(index,valIn,updtDgStRes);
	function updtDgStRes(res){
		$(ths).closest("td").html(valIn);
	}
}
function editDesignMoldQtyMstRec(index,ths){
	if($(ths)[0].innerText=="SAVE")	return false;
	$(ths)[0].innerHTML="<input type='number' step='any' min='0' class='form-control input-sm' value='"+$(ths)[0].innerText+"'  style='width: 100px;'/> <span class='input-group-btn btc2'><button type='button' class='button button-5 button-5a icon-cart' style='    width: 100px; height: 25px; padding: 1px;text-align: -webkit-center;top: 1px;' onclick='saveeditDesignMoldQtyMstRec("+index+",this)'>SAVE</button></span>";
	$(ths).find("input")["0"].select();
	$(ths).find("input")["0"].focus();
	$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
		if(event.keyCode==13)
		return false;
	});
	}
function saveeditDesignMoldQtyMstRec(index,ths){
	var valIn=$(ths).closest("td").find("input").val();
	AjaxController.updateQtyInDgnMoldExistAjax(index,valIn,updtDgStRes);
	function updtDgStRes(res){
		$(ths).closest("td").html(valIn);
	}
}

function editDesignCastQtyMstRec(ths){
	var Tds=$(ths).closest("tr").children();
	$("#lbChge").val($(Tds[0]).html());
	$("#stnChge").val($(Tds[1]).html());
	$("#dptChge").val($(Tds[2]).html());
	$("#lbChge").focus();
}

function addDesignCastQtyMstRec(ths){
	var Tds=$(ths).closest("tr").children();
	$("#lbChge").val($(Tds[0]).html());
	$("#stnChge").val($(Tds[1]).html());
	$("#dptChge").val($(Tds[2]).html());
	$("#lbChge").focus();
}
/////////////////////edit/////////////////////////////