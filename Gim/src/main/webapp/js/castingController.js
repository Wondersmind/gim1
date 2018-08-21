var globaltreeno='';
var tooltipOption={
		placement:'top',	
		btnOkLabel:'Auth',
		btnOkClass:'btn btn-sm btn-primary',
		title:'Do You Authorize..?',
		onConfirm : function(evt,ths) {
			  $(ths).attr("auth","1");
			  $(ths).closest("td").css({background:'#004274'});
			  $(ths).prop("readonly",true);
		  },
			onCancel : function(evt,ths) {
				 $(ths).attr("auth","0");	
				  $(ths).closest("td").css({background:''});
				 $(ths).prop("readonly",false);
			}
		};

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
	sumOfweightInCastCal();
}




$(function (){
	$(".treewisrunnermtl").on("click",function(){ 
		var sumChkedchkBox=$(".treewisrunnermtl:checked").length;
		var totChkBox=$(".treewisrunnermtl").length;
		if(sumChkedchkBox==totChkBox){
			$(".treewiseparentcheckbox")["0"].checked=true;
		}
		else{
			$(".treewiseparentcheckbox")["0"].checked=false;
		}
	});
	$(".childCheckBox").on("click",function(){ 
		var sumChkedchkBox=$(".childCheckBox:checked").length;
		var totChkBox=$(".childCheckBox").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		sumOfweightInCastCal();
	});
	$("#spanINModel").delegate(".chkBoxInIswgt","change",function(){
		if($(this).prop("checked")==true)
		$(this).closest("tr").find(".issuWgtByStk").prop("disabled",false).val("");
		else
			$(this).closest("tr").find(".issuWgtByStk").prop("disabled",true).val("");
	});
	$("#spanINModel").delegate(".issuWgtByStk","change keyup",function(){
		var stkMaxWgt=$(this).closest("tr")[0].cells[5].innerHTML,isedWgt=$(this).val();
		if(Number(stkMaxWgt)<Number(isedWgt)){
			$(this).val(stkMaxWgt);
		}
	});
	$("#myTable").delegate(".pdtWgtOfCst","change keyup",function(){
		var isedWgt=(+$(this).closest("tr").find(".issWgtInPdtQty").val()||0),rcvdWgt=$(this).val();
		if((isedWgt)<Number(rcvdWgt)){
			$(this).val(isedWgt.toFixed(3));
		}
	});
});

function sumOfweightInCastCal(){
	var pdtWgt=0,rnWgt=0,issWgt=0,tst=0,dust=0;
	$(".childCheckBox:checked").each(function (){
		var trOne=$(this).closest("tr");
		issWgt+=Number($(trOne).find(".issWgtInPdtQty").val());
		pdtWgt+=Number($(trOne).find(".pdtWgtOfCst").val());
		rnWgt+=Number($(trOne).find(".runWgtOfCst").val());

		tst+=Number($(trOne).find(".smplWgtOfCst").val());
		dust+=Number($(trOne).find(".pwdrMtlOfCst").val());
	});
	$("#totissWgtOfCst").val(issWgt.toFixed(2));$("#totPndingWgtCst").val((issWgt-(pdtWgt+rnWgt+tst+dust)).toFixed(2));
	$("#totpdtWgtOfCst").val(pdtWgt.toFixed(2));$("#totrunWgtOfCst").val(rnWgt.toFixed(2));
	$(".issuWgtByStk").val(0);
}
////////////////////////end/////////////////////////////////\

////////////////////search in dpt and treeNo and trgtDate/////////////////////////
var curntCastid=''
$(function (){
	var table=$("#castngTable").html();
	$("#treeNoInCst,#trgtDtInCst,#wrkCtgyOfCst,#expPrtFlterInCst").on("change",function (){
		curntCastid=this.id;
		var treNo=$("#treeNoInCst").val()||[],dptCd=$("#dptCdInCst").val(),tgtDt=$("#trgtDtInCst").val(),ctgy=$("#wrkCtgyOfCst").val()||[];
		var expPrty=$("#expPrtFlterInCst").val()||[];
		if((!treNo)&&(!dptCd)&&(!tgtDt)&&(!ctgy)){
			var table = $('#myTable').DataTable().clear();table.destroy();
			$("#castngTable").html(table);
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
			        sumOfweightInCastCal();
			    } );});
		}
		else{
			treNo=treNo.map(ct=>"'"+ct+"'").join();	
			ctgyCd=ctgy.map(ct=>"'"+ct+"'").join();	
			expPrty=expPrty.map(exp=>"'"+exp+"'").join();
			AjaxController.srchInAddCastingDtlInAjax(treNo,tgtDt,ctgyCd,expPrty,returnResOfSrch);
			function returnResOfSrch(res){
				var result='';var table = $('#myTable').DataTable().clear();table.destroy();
			var ctgy=[],treeNo=new Set(),exptPrtyList=new Set(),trgtDt=new Set(['<option value="">Select Trgt Date</option>']);
				if(res!=null){
					for(var i=0;i<res.length;i++){
						ctgy.push(res[i][1]);
						var expPrty=(res[i][9])||'',expWgt=(+res[i][5]||0).toFixed(2),qty=res[i][11]?res[i][3]+'/'+res[i][11]:res[i][3];
						treeNo.add('<option>'+res[i][4]+'</option>');
						exptPrtyList.add('<option>'+expPrty+'</option>');
						trgtDt.add('<option>'+res[i][0]+'</option>');
						result+='<tr value="'+res[i][8]+'" carat="'+res[i][10]+'" style="background-color:'+res[i][12]+'"> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][6]+'" value="'+res[i][7]+'">'
                              	+'<span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td class="pdtQtyIssCal">'+qty+'</td>'
								+'<td>'+res[i][4]+'</td><td>'+expPrty+'</td><td>'+expWgt+'</td><td><input type="number" class="form-control issWgtInPdtQty" readonly style="width: 100px;"></td><td><input type="number" class="form-control pdtWgtOfCst" style="width: 100px;" onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td>'
								+'<td><input type="number" class="form-control runWgtOfCst" style="width: 100px;" onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td><td ><input type="number" class="form-control smplWgtOfCst" readonly style="width: 100px;"  onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()" onclick="openModelOfTestSample(this)"></td>'
								+'<td><input type="number" class="form-control pwdrMtlOfCst" style="width: 100px;"  onkeyup="balanceWgtcalCulation(this)" onchange="balanceWgtcalCulation(this)"></td>'
								+'<td><input type="number" class="form-control trePrtyOfCst" style="width: 100px;" readonly onkeyup="balanceWgtcalCulation(this)" onchange="balanceWgtcalCulation(this)"></td></tr>';
					}
				}
				if(ctgy.length){
                    var ctgyList=new Set(ctgy.join().split(","));
					var ctgySingl=[...ctgyList].reduce(function(ctg,old){
						ctg.push('<option>'+old+'</option>');
						return ctg;
					},[]);
					$("#wrkCtgyOfCst").val()||$("#wrkCtgyOfCst").html(ctgySingl).selectpicker("refresh");
				}
				$("#expPrtFlterInCst").val()||$("#expPrtFlterInCst").html([...exptPrtyList]).selectpicker("refresh");
				$("#trgtDtInCst").val()||$("#trgtDtInCst").html([...trgtDt]).selectpicker("refresh");
				$("#treeNoInCst").val()||$("#treeNoInCst").html([...treeNo]).selectpicker("refresh");
				$("#castngTable").html(result);
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
				        sumOfweightInCastCal();
				    } );});
				$(".pwdrMtlOfCst").confirmation(tooltipOption);	
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
						sumOfweightInCastCal();
					});
					
				});
			}
		}
	})
})
/////////////////////////end /////////////////////////////////////////////////////
///////////////////////////casting type based on data showing in /////////////////////
$(function (){
	$("#cstTpeOfCst").on("change",function(){
	});
})
//////////////////////// end /////////////////////////////////////////////////////////
////////////////////////final Save Of Casting in Ajax//////////////////////
$(function (){
	$("#wrkCdOfCst").change(function(){
		var wrCd=$(this).val();
		if($(this).val()!=""){
			var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as float)),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' and s.stm_stk_trn_typ like '%Issue%'"
			AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
		function retWrkAlwQty(res){
		var qry="select top 1 sum(cast([cph_tot_pdt_wgt]as float)) as  pdt,sum(cast([cph_tot_bal_wgt] as float)) as bal from [cst_prcs_hdr] where cph_wrk_cd='"+wrCd+"'";
		AjaxController.getExstStkOfCstWithEmployee(qry,(data)=>{
			$(".exstinfoShpwer").html("");
			if(data){
				var per=((+data[0][1]||0)/(+data[0][0]||0))*100;per=(+per).toFixed(2);
				if(data[0][1]||data[0][0]){
					if(per=="Infinity"){
						per=(!data[0][1])&&0;
						per=(!data[0][0])&&100;
					}
					data[0][0]=(+(+data[0][0]||0).toFixed(2));data[0][1]=(+(+data[0][1]||0).toFixed(2));
					$(".exstinfoShpwer").html("<b>RCVDPDT : "+data[0][0]+" </b><b>TOTAL BALWGT : "+data[0][1]+" </b><b>TOTAL-% : "+per+" </b>");		
				}
			}
		});	
			$("#StkLmtOfEMployee").val(res);	
		}	
		}
		else{
			$("#StkLmtOfEMployee").val("");	}
	});
})
function saveFinalCstPrcsDetail(){
	$("#saveBtnInCast").addClass("disabled");
	$("#saveBtnInCast").addClass("btn-circlesuc");
		if($("#isdauthVal").val()=="1"){
			savefinalProOfCstDetail();		
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
			'<button type="button" onclick="savefinalProOfCstDetail()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#savesuccessRes").html(" ")\'>No</button></div>');
			$("#saveBtnInCast").removeClass("disabled");
			$("#saveBtnInCast").removeClass("btn-circlesuc");
		}
}
function beforesavingValidate(){
	if($("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
		var empStkExst=Number($("#StkLmtOfEMployee").val().split("-")[0])+Number($("#totissWgtOfCst").val());
		var empAlwQty=$("#StkLmtOfEMployee").val().split("-")[1];
		if(Number(empStkExst)>Number(empAlwQty)){
			$("#savesuccessRes").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
					'<button type="button" onclick="saveFinalCstPrcsDetail()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#savesuccessRes").html(" ")\'>No</button></div>');	
		}
		else{
			saveFinalCstPrcsDetail();		
		}
		}
	else{
		saveFinalCstPrcsDetail();	
	}
}
function hideDivInStkAdj() {
	$("#firstPrep").fadeOut(20);
}



	function savefinalProOfCstDetail(){
		var cmyCd=$("#cmyCdofCst").val(),strCd=$("#strCdofCst").val(),cstType=$("#cstTpeOfCst").val(),wrkCd=$("#wrkCdOfCst").val(),docNo=$("#docNoOfCst").val(),chklength=$(".childCheckBox:checked").length;
var dateIn=$("#dateInCasting").val().split(" ")[0],dptcds=$("#dptCdInCst").val(),docDt=$("#dateInCasting").val();
		if(cmyCd!=""&&strCd!=""&&cstType!=""&&wrkCd!=""&&docNo!=""&&chklength>0){
	AjaxController.checkCastingDocNoInDb(docNo,(data)=>{
		if(data&&data.length){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6"> Entered Document No Already Present </div>');$("#hideCstAlrt6").fadeOut(3000);
			$("#saveBtnInCast").removeClass("disabled");
			$("#saveBtnInCast").removeClass("btn-circlesuc");
		}
		else{
			$("#saveBtnInCast").addClass("disabled");$("#saveBtnInCast").prop("disabled",true);
			$("#savesuccessRes").html('<div class="alert alert-info" > Saving Please Wait... </div>');
		var castHdrDtl=[],stkManageQry=[],castHdrRec={},treeOfPriChnge=[],treIdOrdUpdate=[];
			$(".childCheckBox:checked").each(function(){
				var trOne=$(this).closest("tr"),pdtDptsCd=this.id||'';
				treIdOrdUpdate.push(trOne.attr("value")||0);
				treeOfPriChnge.push($(trOne)[0].cells[5].innerHTML);
				var treewiserunnermtlwt=$(trOne["0"].cells[14]).find("input").val();//chandu
			var trgtDt=$(trOne)[0].cells[1].innerHTML,ctgy=$(trOne)[0].cells[2].innerHTML,isudCarat=$(trOne).attr("carat"),rqrdWgt=$(trOne)[0].cells[7].innerHTML,
			dpt=trOne.find(".issWgtInPdtQty").attr("deptised"),pdtQty=$(trOne)[0].cells[4].innerHTML,treNo=$(trOne)[0].cells[5].innerHTML,
			expPrty=$(trOne)[0].cells[6].innerHTML,rqWgt=$(trOne)[0].cells[7].innerHTML,pdtCd=$(this).val(),testSmplJson=$($(trOne)[0].cells[11]).attr("id");
			issWgt=$(trOne).find(".issWgtInPdtQty").val(),pdtWgt=$(trOne).find(".pdtWgtOfCst").val(),
			rnWgt=$(trOne).find(".runWgtOfCst").val(),tstSmpl=$(trOne).find(".smplWgtOfCst").val(),
			pwdrMtl=$(trOne).find(".pwdrMtlOfCst").val(),trePrty=$(trOne).find(".trePrtyOfCst").val(),itmExpPrty=$(trOne)[0].cells[6].innerHTML;
			var isauthdust=$(trOne).find(".pwdrMtlOfCst").attr("auth"),tstsmplPrty=$(trOne).find(".trePrtyOfCst").attr("id");
			var aphdIsdTstSmpl=$(trOne).find(".smplWgtOfCst").attr("aphd_isd_tst_smp");
			castHdrDtl.push({cphd_pdt_dpt_cd:pdtDptsCd,cphd_isd_tst_smp:aphdIsdTstSmpl,cphd_tst_smp_prty:tstsmplPrty,cphd_iss_cmpl_dust:isauthdust,cphd_tst_smpl_jsn:testSmplJson,cphd_cst_no:docNo,cphd_cmy_cd:cmyCd,cphd_str_cd:strCd,cphd_tght_dt:trgtDt,cphd_tree_no:treNo,cphd_cst_typ:cstType,itmexpprty:itmExpPrty,cphd_rqre_wgt:rqrdWgt,
				cphd_dpt_cd:dpt,cphd_wrk_cd:wrkCd,cphd_pdt_ctgy:ctgy,cphd_pdt_cd:pdtCd,cphd_pdt_qty:pdtQty,cphd_iss_wgt:issWgt,cphd_iss_carat:isudCarat,
				cphd_pdt_wgt:pdtWgt,cphd_run_wgt:rnWgt,cphd_tst_smp:tstSmpl,cphd_pwd_mtl:pwdrMtl,cphd_tree_prty:trePrty,cphd_iss_auth:false,cphd_rcvd_auth:false,cphd_cst_sts:true});
		if(treewiserunnermtlwt.split(",").length>0){
//			alert(treewiserunnermtlwt.split(",").length);
			for(var j=0;j<treewiserunnermtlwt.split(",").length;j++){
//				alert(treewiserunnermtlwt.split(",")[j].split("-")[1]);
//				alert(treewiserunnermtlwt.split(",")[j].split("-")[0]);
//				alert(dpt);
//				alert(wrkCd);
//				alert(expPrty);
				stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast('"+treewiserunnermtlwt.split(",")[j].split("-")[1]+"' as decimal(20,3))) where stm_itm_cd='"+treewiserunnermtlwt.split(",")[j].split("-")[0]+"' " +
						" and stm_stk_trn_typ='RunnerMetal'  and stm_rcvd_stk_prty='"+expPrty+"' and stm_dpt_cd='"+dpt+"' and stm_cmy_cd='"+cmyCd+"'");
			}
		}
			
			
			});	
			var totisWgt=$("#totissWgtOfCst").val(),totPdtWgt=$("#totpdtWgtOfCst").val(),totRnWgt=$("#totrunWgtOfCst").val(),totBalWgt=$("#totPndingWgtCst").val();
			castHdrRec={cph_dpt_cd:dptcds,cph_wrk_cd:wrkCd,cph_cmy_cd:cmyCd,cph_cst_no:docNo,cph_cst_dt:docDt,cph_tot_iss_wgt:totisWgt,cph_tot_pdt_wgt:totPdtWgt,cph_tot_run_wgt:totRnWgt,cph_tot_bal_wgt:totBalWgt,cph_iss_auth:false,cph_cst_sts:true,cph_rcvd_auth:false};
		if($("#isdauthVal").val()=="1"){
			castHdrRec.cph_iss_auth=true;
			$.grep(castHdrDtl,function(i){
				i.cphd_iss_auth=true;var isWgt=(+i.cphd_iss_wgt||0);
				stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+isWgt+" as decimal(20,3))) where stm_itm_cd='"+i.cphd_tree_no+"' " +
						" and stm_stk_trn_typ='CastingIssue' and stm_stk_crt_id='"+wrkCd+"' and stm_rcvd_stk_prty='"+i.itmexpprty+"' " +
						" and stm_dpt_cd='"+i.cphd_dpt_cd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
								" values ('"+cmyCd+"','"+i.cphd_dpt_cd+"','"+i.cphd_tree_no+"','"+isWgt+"','"+dateIn+"','"+wrkCd+"','CastingIssue','"+dateIn+"','"+wrkCd+"','"+i.itmexpprty+"','Tree','"+strCd+"')");
			});
			}
		if($("#isdauthVal").val()=="1"){
			var depositedStk=ShowStockWgtOfTd();
			$.each(depositedStk,function(key,val,i){
					if(val>0){
					[prefix,id]=key.split("stkId_");
					stkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+val+" as decimal(20,3))) where stm_id="+id+"");
					stkManageQry.push("insert into itm_mv ([im_cmy_cd],[im_crt_dt],[im_crt_id],[im_dpt_cd] ,[im_itm_wgt],[im_trn_nmb],[im_trn_typ],im_itm_cd) values" +
							"('"+cmyCd+"','"+dateIn+"','"+wrkCd+"','','"+val+"','"+$("#docNoOfCst").val()+"','For Casting',"+id+")");
					}
				})
		}
		if(treIdOrdUpdate.length){
			var join=treIdOrdUpdate.join();
			stkManageQry.push("  update o set o.ohd_crnt_prcs='Casting',o.[ohd_crnt_wrk]='"+wrkCd+"' from ord_hdr_dtl o left join tree_gen_hdr_dtl on ohd_id=tghd_ord_prm_id where tghd_doc_no in (select tgh_doc_no from tree_gen_hdr where tgh_id in ("+join+")) ")
		}
		if($("#isdauthVal").val()=="0")	spclStkManageQry=[];
			AjaxController.saveFinalPdtInCastingHdrDtlAjax(JSON.stringify(castHdrDtl),JSON.stringify(castHdrRec),stkManageQry,treeOfPriChnge,(spclStkManageQry),returnResOfCstSave);
		function returnResOfCstSave(res){
			if(res=="success"){
				window.location.href="casting.mm";
			}
		}
		
		}
	})
	
		}
		else{
				if(cmyCd==""){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt1"> Select Company Code </div>');$("#hideCstAlrt1").fadeOut(3000);}
				else if(strCd==""){
					$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt2"> Select Store Code </div>');$("#hideCstAlrt2").fadeOut(3000);}
				else if(cstType==""){
					$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt3"> Select Casting Type </div>');$("#hideCstAlrt3").fadeOut(3000);}	
				else if(wrkCd==""){
				$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt4"> Select Worker Code </div>');$("#hideCstAlrt4").fadeOut(3000);}	
				else if(docNo==""){
					$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt5"> Enter Document No </div>');$("#hideCstAlrt5").fadeOut(3000);}	
				else if(chklength==0){
					$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt67"> Select Records </div>');$("#hideCstAlrt67").fadeOut(3000);	
				}
				$("#saveBtnInCast").removeClass("disabled");
				$("#saveBtnInCast").removeClass("btn-circlesuc");
			}
}
	/////////////////////////// end ///////////////////////////////////////////

//////////////////////////// save Issuen Wgt Cntlr //////////////////////////////
function saveIssueWgtCntlr(){
	var exporty=$(".CurrentRecShower td:eq(6)").text()||'';
	calculateIndvalIssWgt();
	$("#myModal"+CSS.escape($("#dptCdInCst").val()+exporty)+"").modal("hide");
	sumOfweightInCastCal()
}

$("#cmyCdofCst").change(function(){
	$("#dptCdInCst").val("");
	$("#dptCdInCst").selectpicker("refresh");
});
var stkRepository=[],spclStkManageQry=[];
function calculateIndvalIssWgt(){
	var exporty=$(".CurrentRecShower td:eq(6)").text()||'';
	var jsonStr=$('.CurrentRecShower .issWgtInPdtQty').attr("stkConsmer");
	var JsON={};
	if(jsonStr){
	JsON=JSON.parse(jsonStr)	/// 
	$("#myModal"+CSS.escape($("#dptCdInCst").val()+exporty)+" .issuWgtByStk:not(disabled)").toArray().reduce((sum,ths)=>{
		JsON[ths.id]=JsON[ths.id]?(Number(JsON[ths.id])+Number(ths.value)).toFixed(2):(0+Number(ths.value)).toFixed(2);
},0);	
	}
	else{
		var isWgt=$("#myModal"+CSS.escape($("#dptCdInCst").val()+exporty)+" .issuWgtByStk:not(disabled)").toArray().reduce((sum,ths)=>{
			JsON[ths.id]=Number(ths.value).toFixed(2);
	},0);			
	}
	var isWgt=Object.values(JsON).reduce((isw,ths)=>{
		return isw+Number(ths);
	},0);
	var scrpMtlDpt=$("#myModal"+CSS.escape($("#dptCdInCst").val()+exporty)+" .scrapmetalWiseDpt").val();
	var rtnMtlWgt=$("#myModal"+CSS.escape($("#dptCdInCst").val()+exporty)+" .runnerwgtWiseDpt").val()
	 var curntIsWgtBox=$('.CurrentRecShower .issWgtInPdtQty');
	scrpMtlDpt=(+scrpMtlDpt||0);rtnMtlWgt=(+rtnMtlWgt||0);
	var sumOfRunWgt=Number(curntIsWgtBox.attr("isedRunWgt")||0)+(rtnMtlWgt);var sumOfScrp=Number(curntIsWgtBox.attr("isedScrpWgt")||0)+(scrpMtlDpt);
	isWgt+=sumOfRunWgt+sumOfScrp;
	curntIsWgtBox.val(isWgt).attr({"deptIsed":$("#dptCdInCst").val(),"stkConsmer":JSON.stringify(JsON),"isedRunWgt":sumOfRunWgt,"isedScrpWgt":sumOfScrp});
	var wrkCd=$("#wrkCdOfCst").val(),dateIn=$("#dateInCasting").val().split(" ")[0]||'';
	
		if(rtnMtlWgt){
//		spclStkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+rtnMtlWgt+" as float)) where stm_stk_trn_typ='RunnerMetal' and stm_rcvd_stk_prty='"+exporty+"' and stm_dpt_cd='"+$("#dptCdInCst").val()+"' and stm_cmy_cd='"+$("#cmyCdofCst").val()+"' ");	
		spclStkManageQry.push("insert into itm_mv ([im_cmy_cd],[im_crt_dt],[im_crt_id],[im_dpt_cd] ,[im_itm_wgt],[im_trn_nmb],[im_trn_typ],im_itm_typ,im_itm_prty) values" +
						"('"+$("#cmyCdofCst").val()+"','"+dateIn+"','"+wrkCd+"','"+$("#dptCdInCst").val()+"','"+rtnMtlWgt+"','"+$("#docNoOfCst").val()+"','For Casting','RunningPdt','"+exporty+"')");
		}
		if(scrpMtlDpt){
		spclStkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+scrpMtlDpt+" as float)) where stm_stk_trn_typ='ScrapMetal' and stm_dpt_cd='"+$("#dptCdInCst").val()+"' and stm_cmy_cd='"+$("#cmyCdofCst").val()+"' ");	
		spclStkManageQry.push("insert into itm_mv ([im_cmy_cd],[im_crt_dt],[im_crt_id],[im_dpt_cd] ,[im_itm_wgt],[im_trn_nmb],[im_trn_typ],im_itm_typ,im_itm_prty) values" +
				"('"+$("#cmyCdofCst").val()+"','"+dateIn+"','"+wrkCd+"','"+$("#dptCdInCst").val()+"','"+scrpMtlDpt+"','"+$("#docNoOfCst").val()+"','For Casting','ScrpMtlWgt','"+exporty+"')");
		}
}
///////////// end ///////////////////////////////////////////////////////////////
var spclStk=[];
if($("#SpclStkObjString").val()){
	spclStk=JSON.parse($("#SpclStkObjString").val());
}

function ShowStockWgtOfTd(prty){
	var result=$("[stkconsmer]").toArray().reduce((sum,ths)=>{
		if($(ths).closest("tr").find(".childCheckBox").prop("checked"))
		$(ths).attr("stkconsmer")&&sum.push(JSON.parse($(ths).attr("stkconsmer")));
		return sum;
	},[]);
	var m = _.reduce((_.uniq(_.flattenDeep(_.map(result, i => _.keys(i))))), function (s, v) {
	    s[v] = _.sumBy(result, function (o) {
	        return o[v]?Number(o[v]):0;
	    });
	    return s
	}, {});
	
	$.each(m,(key,val,ind)=>{
		var stks=Number($("#"+key).attr("max"))-Number(val);
		[prefix,id]=key.split("stkId_");
		$("#myModal"+CSS.escape($("#dptCdInCst").val()+prty)+" #stkshowId_"+id).html(stks.toFixed(2)||stks);
	})
	var ScrpRuner=$("tr:has(.childCheckBox:checked)").toArray().reduce(function(old,tr){
		var scrpwgt=$(".issWgtInPdtQty",tr).attr("isedscrpwgt")||0,
		run=$(".issWgtInPdtQty",tr).attr("isedrunwgt")||0,prtyOftr=$("td:eq(6)",tr).html()||'';
		old.srp+=(+scrpwgt);
		if(prty==prtyOftr)old.runer+=(+run);
		return old;
	},{srp:0,runer:0});
	var deptMent=$("#dptCdInCst").val()
	var oldWgtOfRun=$("#myModal"+CSS.escape(deptMent+prty)+" .runnerwgtWiseDpt").attr("oldwgt")||0,oldWgtOfSrcp=$("#myModal"+CSS.escape(deptMent+prty)+" .scrapmetalWiseDpt").attr("oldwgt")||0;;
	var balOfSrp=((+oldWgtOfSrcp)-(ScrpRuner.srp)).toFixed(2);
	var balOfRun=((+oldWgtOfRun)-(ScrpRuner.runer)).toFixed(2);
	$("#myModal"+CSS.escape(deptMent+prty)+" .scrapmetalWiseDptShow").html(balOfSrp);
	$("#myModal"+CSS.escape(deptMent+prty)+" .runnerwgtWiseDptShow").html(balOfRun);
	return m;
}

var set=new Set("");
$("#myTable").delegate(".issWgtInPdtQty","click",function(){
	var cmyCd=$("#cmyCdofCst").val();var deptMent=$("#dptCdInCst").val();
	if(cmyCd&&deptMent){
	$("#myTable tr").removeClass("CurrentRecShower");
	$(this).closest("tr").addClass("CurrentRecShower");
	var exptprty=$(this).closest("tr").find("td:eq(6)").text()||'0';
	var treeno=$(this).closest("tr").find("td:eq(5)").text();
	globaltreeno=treeno;
	var trfType=' and (stm_stk_trn_typ=\'Inward\' or stm_stk_trn_typ=\'AlloyReceived\' or stm_stk_trn_typ=\'RunnerMetal\' or stm_stk_trn_typ=\'ScrapMetal\') and stm_cmy_cd=\''+cmyCd+'\' and cast(stm_rcvd_stk_wgt as float)>0 and (stm_rcvd_stk_prty=\''+exptprty+'\' or stm_rcvd_stk_prty=\'\' or stm_rcvd_stk_prty is null) ';
	if($.inArray((deptMent+exptprty),[...set])==-1){
	AjaxController.getStockBasedOnDeptMntInCasting(deptMent,trfType,returnResBopup);
	set.add((deptMent+exptprty));
	$('#treerunnerpopup').append('<div class="modal fade in" id="myModaltxt'+deptMent+exptprty.replace(".", "")+'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="table-responsive"><table class="table table-bordered"><tr><th><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes treewiseparentcheckbox"> <span></span> </label></th><th>WgtType</th><th>TreeNo</th><th>MetalPrty</th><th>MetalWgt</th><th>IssMetalWgt</th></tr><tbody id="treewiserunnermetal'+deptMent+exptprty.replace(".", "")+'"></tbody></table></div></div><div class="modal-footer"><button type="button" class="btn btn-success" data-dismiss="modal" onclick="addtreewiserunnermetal()">Save</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
	$('#spanINModel').append('<div class="modal fade" id="myModal'+deptMent+exptprty+'" role="dialog"> <div class="modal-dialog modal-md"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title"><small>Issued Weigt</small></h4> </div> <div class="modal-body"> <div class="form-group"> <div class="table-responsive"> <table class="table table-bordered table-striped"> <thead> <tr><th></th><th>TrnsType</th><th>Item Type</th><th>Item/Alloy Code</th><th>Stk Prty</th><th>Stk Wgt</th><th>Iss Wgt</th></tr> </thead> <tbody id="isedWhtOfcStng"> </tbody> </table></div></div> </div> <div class="modal-footer">'
			+'<table class="table table-bordered table-striped"> <thead> <tr><th>WgtType</th><th>MetalPrty</th><th>MetalWgt</th><th>IssMetalWgt</th></tr> </thead> <tbody><tr><td>RunnerWgt</td><td id="prtyOfRuner"></td><td class="runnerwgtWiseDptShow"></td><td><input type="number" class="form-control runnerwgtWiseDpt" max="0" data-toggle="modal" data-target="#myModaltxt'+deptMent+exptprty.replace(".", "")+'"></td></tr> <tr><td>Scrapmetal</td><td id="prtyOfScrp"></td><td class="scrapmetalWiseDptShow"></td><td><input type="number" class="form-control scrapmetalWiseDpt" max="0"></td></tr></tbody> </table> <button type="button" class="btn btn-success" id="saveIssueWgt" onclick="saveIssueWgtCntlr()">Save</button> <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> </div> </div> </div> </div>');
	}
	else{
		ShowStockWgtOfTd(exptprty);
		$("#myModal"+CSS.escape(deptMent+exptprty)+"").modal('show');
	}
	var treerunnermtl=new Map();
	function returnResBopup(res){
		var result='';
		var treewiserunnermtl="";
		if(res!=null){
			var reslength=res.length;
			var runnerwgtstock=Number(0);
			for(var i=0;i<reslength;i++){
				var stkswgt=Number(res[i].stm_rcvd_stk_wgt).toFixed(2)||'';
				if(res[i].stm_stk_trn_typ!='RunnerMetal'&&res[i].stm_stk_trn_typ!='ScrapMetal'){
				var docval=res[i].stm_stk_pure_doc_val;
				res[i].stm_itm_cd=(docval&&(""+docval).search(/\ALY/)>-1)?docval:res[i].stm_itm_cd;
				if(res[i].stm_stk_itm_typ!='BOM')
				result+='<tr> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes chkBoxInIswgt" onclick=enabletextfield(this) value="'+res[i].stm_id+'"> <span></span> </label></td> <td>'+res[i].stm_stk_trn_typ+'</td> <td>'+res[i].stm_stk_itm_typ+'</td> <td>'+res[i].stm_itm_cd+'</td> <td>'+res[i].stm_rcvd_stk_prty+'</td><td id="stkshowId_'+res[i].stm_id+'" >'+stkswgt+'</td> <td><input type="number" id="stkId_'+res[i].stm_id+'" max="'+stkswgt+'" value="" class="form-control issuWgtByStk" style="width: 100px;" disabled></td> </tr>'
					
				}
				else{
					if(res[i].stm_stk_trn_typ=='RunnerMetal')	{
						runnerwgtstock+=Number(stkswgt);
						treewiserunnermtl+='<tr> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes treewisrunnermtl" value="'+res[i].stm_id+'"> <span></span> </label></td> <td>'+res[i].stm_stk_trn_typ+'</td><td>'+res[i].stm_itm_cd+'</td> <td>'+res[i].stm_rcvd_stk_prty+'</td><td id="stkshowId_'+res[i].stm_id+'" >'+stkswgt+'</td> <td><input type="number" id="stkId_'+res[i].stm_id+'" max="'+stkswgt+'" value="" class="form-control issuWgtByStk" onkeyup="dontallowmorethanpendwgt(this)" style="width: 100px;"></td> </tr>'
						$("#myModal"+CSS.escape(deptMent+exptprty)+" #prtyOfRuner").html(res[i].stm_rcvd_stk_prty||'');
						$("#myModal"+CSS.escape(deptMent+exptprty)+" .runnerwgtWiseDpt").attr({"max":runnerwgtstock,"oldwgt":runnerwgtstock}).val("");
						$("#myModal"+CSS.escape(deptMent+exptprty)+" .runnerwgtWiseDptShow").html((+stkswgt||0).toFixed(2));
					}
					else{
						$("#myModal"+CSS.escape(deptMent+exptprty)+" #prtyOfScrp").html(res[i].stm_rcvd_stk_prty||'');
						$("#myModal"+CSS.escape(deptMent+exptprty)+" .scrapmetalWiseDpt").attr({"max":stkswgt,"oldwgt":stkswgt}).val("");
						$("#myModal"+CSS.escape(deptMent+exptprty)+" .scrapmetalWiseDptShow").html((+stkswgt||0).toFixed(2));
						}
					}
				}
		}
		if(result=='')result='<tr><td  colspan="8" style="text-align:center">No Stock Found...</td></tr>'
		$("#myModal"+CSS.escape(deptMent+exptprty)+" #isedWhtOfcStng").html(result);
		$("#treewiserunnermetal"+deptMent+exptprty.replace(".", "")).html(treewiserunnermtl);
		ShowStockWgtOfTd(exptprty);
		$("#myModal"+CSS.escape(deptMent+exptprty)+"").modal('show');
	}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="shoowClick">SELECT COMPANY AND DEPARTMENT</div>');$("#shoowClick").fadeOut(4000);
		$("#saveBtnInCast").removeClass("disabled");
		$("#saveBtnInCast").removeClass("btn-circlesuc");
		
	}
});







/////////////////// test sample /////////////

var CurntRes;
function openModelOfTestSample(ths){
	CurntRes=$(ths).closest("td");var tdId=$(ths).closest("td")[0].id;
	var JsonStr=tdId!=undefined&&tdId!=""?JSON.parse(tdId):{aphd_tst_smp1:0,aphd_tst_smp2:0,aphd_tst_smp3:0,aphd_tst_smp4:0};
	$("#ta1Smpl").val(JsonStr.aphd_tst_smp1),$("#ta2Smpl").val(JsonStr.aphd_tst_smp2),$("#tb1Smpl").val(JsonStr.aphd_tst_smp3),$("#tb2Smpl").val(JsonStr.aphd_tst_smp4)
	var isdtstsmpl=$(ths).attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
	var isdSmplJson=JSON.parse(isdtstsmpl)||{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$.each(isdSmplJson,(key,val)=>{
		$("["+key+"]").prop("checked",val);
	});
	$("#myModalSample [tst_smpl_one]").prop("checked",true);
	$("#myModalSample").modal('show');
}

function saveTheJsonInTr(){
	var rcvdWgt=$($(CurntRes).closest("tr")[0].cells[11]).find("input").val();
	var isuedWgt=$(CurntRes).closest("tr").find(".issWgtInPdtQty").val();
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
	sumOfweightInCastCal();
}

$("#spanINModel").delegate(".runnerwgtWiseDpt,.scrapmetalWiseDpt","change keyup",function(){
	if(Number($(this).val())>Number($(this).attr("max"))){
		$(this).val($(this).attr("max"));
	}
})

$(function (){
	var TreeNo=new Set(),exptPrtyList=new Set(),ctgy=[],targetDate=new Set(['<option value=""> Select Target Date</option>']);
	$("#myTable tbody tr").toArray().forEach(function(ths){
		TreeNo.add('<option>'+$(ths).find("td:eq(5)").text()+'</option>');
		exptPrtyList.add('<option>'+$(ths).find("td:eq(6)").text()+'</option>');
		ctgy.push($(ths).find("td:eq(2)").text());
		targetDate.add('<option>'+$(ths).find("td:eq(1)").text()+'</option>')
	});
	if(ctgy.length){
	ctgyset=new Set(ctgy.join().split(","))
	var ctgySingl=[...ctgyset].reduce(function(ctg,old){
		ctg.push('<option>'+old+'</option>');
		return ctg;
	},[]);
	$("#wrkCtgyOfCst").html(ctgySingl).selectpicker("refresh");
	}
	$("#expPrtFlterInCst").html([...exptPrtyList]).selectpicker("refresh");
	$("#treeNoInCst").html([...TreeNo]).selectpicker("refresh");
	$("#trgtDtInCst").html([...targetDate]).selectpicker("refresh");
	});




///////////////////////////// cal calPopUpForAuthorize() while saving dustmetal ///////////////

$(function(){
	$("#myTable").delegate(".trePrtyOfCst","click",function(){
		issPrtyCal(this);
	});
	$(".pwdrMtlOfCst").confirmation(tooltipOption);	
})


////////////////////// test sample against purity /////////////
	var crntOfIsedPrtyTr;
function issPrtyCal(ths){
	var tr=$(ths).closest("tr");
	crntOfIsedPrtyTr=tr;
	var jsonOfIsedAly=$(tr).find("td:eq(11)").attr("id");
	if(jsonOfIsedAly){
		var json=JSON.parse(jsonOfIsedAly);
		$("#ta1tstIssedSmpe").html(json.aphd_tst_smp1);$("#tb1tstIssedSmpe").html(json.aphd_tst_smp3);$("#ta2tstIssedSmpe").html(json.aphd_tst_smp2);
		$("#tb2tstIssedSmpe").html(json.aphd_tst_smp4);
	}
	else{
		$("#ta1tstIssedSmpe,#tb1tstIssedSmpe,#ta2tstIssedSmpe,#tb2tstIssedSmpe").html("");
	}
	var td=$(ths).attr("id");
	if(td){
		var json=JSON.parse(td);
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
	$(crntOfIsedPrtyTr).find(".trePrtyOfCst").val(min.toFixed(2));
	$(crntOfIsedPrtyTr).find(".trePrtyOfCst").attr("id",JSON.stringify(givenPrty));
	$("#myPrtySample").modal('hide');
}

function addtreewiserunnermetal(){
	var totwt=0;
	var map=new Map();
	var tree="";
	$(".treewisrunnermtl:checked").each(function(){
		var TrOne=$(this).closest("tr");
		$(TrOne)[0].cells[4].innerHTML=Number(Number($(TrOne)[0].cells[4].innerHTML).toFixed(3)-Number($(TrOne["0"].cells[5]).find("input").val())||0).toFixed(3);
		if(tree=="") tree=$(TrOne)[0].cells[2].innerHTML+"-"+Number($(TrOne["0"].cells[5]).find("input").val())||0;
		else tree+=","+$(TrOne)[0].cells[2].innerHTML+"-"+Number($(TrOne["0"].cells[5]).find("input").val())||0;
		totwt+=Number($(TrOne["0"].cells[5]).find("input").val())||0;
		$(this).prop("checked", false);
	});
	$("#"+globaltreeno).val(tree);
	$(".runnerwgtWiseDpt").val(totwt);
	$("#saveIssueWgt").click();
}
function enabletextfield(ths){
	if($(ths).prop("checked")==true)
		$(ths).closest("tr").find(".issuWgtByStk").prop("disabled",false).val("");
		else
			$(ths).closest("tr").find(".issuWgtByStk").prop("disabled",true).val("");
}
function dontallowmorethanpendwgt(ths){
	var TrOne=$(ths).closest("tr");
	if(Number($(TrOne)[0].cells[4].innerHTML).toFixed(3)<=(Number($(TrOne["0"].cells[5]).find("input").val())))
	$(TrOne["0"].cells[5]).find("input").val(Number($(TrOne)[0].cells[4].innerHTML).toFixed(3));
}