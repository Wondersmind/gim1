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
			$(this).closest("tr").find(".issuWgtByStk").prop("disabled",true).val("");;
	})
	
	$("#spanINModel").delegate(".issuWgtByStk","change keyup",function(){
		var stkMaxWgt=$(this).closest("tr")[0].cells[5].innerHTML,isedWgt=$(this).val();
		if(Number(stkMaxWgt)<Number(isedWgt)){
			$(this).val(stkMaxWgt);
		}
	});
	$("#myTable").delegate(".pdtWgtOfCst","change keyup",function(){
		var isedWgt=$(this).closest("tr").find(".issWgtInPdtQty").val(),rcvdWgt=$(this).val();
		if(Number(isedWgt)<Number(rcvdWgt)){
			$(this).val(isedWgt);
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
}
////////////////////////end/////////////////////////////////\

////////////////////search in dpt and treeNo and trgtDate/////////////////////////
var curntCastid=''
$(function (){
	var table=$("#castngTable").html();
	$("#treeNoInCst,#trgtDtInCst,#wrkCtgyOfCst").on("change",function (){
		curntCastid=this.id;
		var treNo=$("#treeNoInCst").val(),dptCd=$("#dptCdInCst").val(),tgtDt=$("#trgtDtInCst").val(),ctgy=$("#wrkCtgyOfCst").val();
		if((treNo==""||treNo==null)&&(dptCd==""||dptCd==null)&&tgtDt==""&&ctgy==null&&ctgy==""){
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
			    } );});
		}
		else{
			var treNo1=[];
			if(treNo!=""&&treNo!=null)
				$.grep(treNo,function (i){
					treNo1.push("'"+i+"'");
				})
		
			var ctgyCd="";
			if(ctgy!=null){
				ctgyCd=ctgy.map(ct=>"'"+ct+"'").join();	
			}
			AjaxController.srchInAddCastingDtlInAjax(treNo1,tgtDt,ctgyCd,returnResOfSrch);
			function returnResOfSrch(res){
				var result='';var table = $('#myTable').DataTable().clear();table.destroy();
			var ctgy=[],treeNo=new Set();
				if(res!=null){
					for(var i=0;i<res.length;i++){
						ctgy.push(res[i][1]);
						var expPrty=(res[i][9])||'',expWgt=res[i][5]||'',qty=res[i][11]?res[i][3]+'/'+res[i][11]:res[i][3];
						treeNo.add('<option>'+res[i][4]+'</option>')
						result+='<tr carat="'+res[i][10]+'"> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][6]+'" value="'+res[i][7]+'">'
                              +'<span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td class="pdtQtyIssCal">'+qty+'</td>'
							+'<td>'+res[i][4]+'</td><td>'+expPrty+'</td><td>'+expWgt+'</td><td><input type="number" class="form-control issWgtInPdtQty" style="width: 100px;"></td><td><input type="number" class="form-control pdtWgtOfCst" style="width: 100px;" onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td>'
+'<td><input type="number" class="form-control runWgtOfCst" style="width: 100px;" onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td><td ><input type="number" class="form-control smplWgtOfCst" style="width: 100px;"  onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()" onclick="openModelOfTestSample(this)"></td>'
+'<td><input type="number" class="form-control pwdrMtlOfCst" style="width: 100px;"  onkeyup="balanceWgtcalCulation(this)" onchange="balanceWgtcalCulation(this)"></td>'
+'<td><input type="number" class="form-control trePrtyOfCst" style="width: 100px;"  onkeyup="balanceWgtcalCulation(this)" onchange="balanceWgtcalCulation(this)"></td></tr>';
					}
				}
				
				if(curntCastid=='treeNoInCst'&&ctgy.length){
                    var ctgyList=new Set(ctgy.join().split(","));
					var ctgySingl=[...ctgyList].reduce(function(ctg,old){
						ctg.push('<option>'+old+'</option>');
						return ctg;
					},[]);
					$("#wrkCtgyOfCst").html(ctgySingl).selectpicker("refresh");
				}
				if(curntCastid=='trgtDtInCst'){
					if(ctgy.length){
					  var ctgyList=new Set(ctgy.join().split(","));
						var ctgySingl=[...ctgyList].reduce(function(ctg,old){
							ctg.push('<option>'+old+'</option>');
							return ctg;
						},[]);
						$("#wrkCtgyOfCst").html(ctgySingl).selectpicker("refresh");
					}
					$("#treeNoInCst").html([...treeNo]).selectpicker("refresh");
				}
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
		if($(this).val()!=""){
			var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as float)),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' and s.stm_stk_trn_typ like '%Issue%'"
			AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
		function retWrkAlwQty(res){
			$("#StkLmtOfEMployee").val(res);	
		}	
		}
		else{
			$("#StkLmtOfEMployee").val("");	}
	});
})
function beforesavingValidate(){
	if($("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
		var empStkExst=Number($("#StkLmtOfEMployee").val().split("-")[0])+Number($("#totissWgtOfCst").val());
		var empAlwQty=$("#StkLmtOfEMployee").val().split("-")[1];
		if(Number(empStkExst)>Number(empAlwQty)){
			$("#savesuccessRes").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
					'<button type="button" onclick="savefinalProOfCstDetail()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	
		}
		else{
			savefinalProOfCstDetail();		
		}
		}
	else{
		savefinalProOfCstDetail();	
	}
}
function hideDivInStkAdj() {
	$("#firstPrep").fadeOut(20);
}



	function savefinalProOfCstDetail(){
		var cmyCd=$("#cmyCdofCst").val(),strCd=$("#strCdofCst").val(),cstType=$("#cstTpeOfCst").val(),wrkCd=$("#wrkCdOfCst").val(),docNo=$("#docNoOfCst").val(),chklength=$(".childCheckBox:checked").length;
if(cmyCd!=""&&strCd!=""&&cstType!=""&&wrkCd!=""&&docNo!=""&&chklength>0){
	var sts=true;
	if($("#docNoExstForChk").val()!=""){
		var docExstNo=JSON.parse($("#docNoExstForChk").val());
		if(jQuery.inArray(docNo,docExstNo)>-1){
			sts=false;
		}
	}
	if(sts==true){
		$("#saveBtnInCast").addClass("disabled");$("#saveBtnInCast").prop("disabled",true);
		$("#savesuccessRes").html('<div class="alert alert-info" > Saving Please Wait... </div>');
	var castHdrDtl=[],iwdStkPro=[],iwdItmMv=[],castHdrRec={},treeOfPriChnge=[];
		$(".childCheckBox:checked").each(function(){
			var trOne=$(this).closest("tr");
			treeOfPriChnge.push($(trOne)[0].cells[5].innerHTML);
		var trgtDt=$(trOne)[0].cells[1].innerHTML,ctgy=$(trOne)[0].cells[2].innerHTML,isudCarat=$(trOne).attr("carat"),rqrdWgt=$(trOne)[0].cells[7].innerHTML,
		dpt=trOne.find(".issWgtInPdtQty").attr("deptised"),pdtQty=$(trOne)[0].cells[4].innerHTML,treNo=$(trOne)[0].cells[5].innerHTML,
		expPrty=$(trOne)[0].cells[6].innerHTML,rqWgt=$(trOne)[0].cells[7].innerHTML,pdtCd=$(this).val(),testSmplJson=$($(trOne)[0].cells[11]).attr("id");
		issWgt=$(trOne).find(".issWgtInPdtQty").val(),pdtWgt=$(trOne).find(".pdtWgtOfCst").val(),
		rnWgt=$(trOne).find(".runWgtOfCst").val(),tstSmpl=$(trOne).find(".smplWgtOfCst").val(),
		pwdrMtl=$(trOne).find(".pwdrMtlOfCst").val(),trePrty=$(trOne).find(".trePrtyOfCst").val(),itmExpPrty=$(trOne)[0].cells[6].innerHTML;
		var isauthdust=$(trOne).find(".pwdrMtlOfCst").attr("auth"),tstsmplPrty=$(trOne).find(".trePrtyOfCst").attr("id");
		var aphdIsdTstSmpl=$(trOne).find(".smplWgtOfCst").attr("aphd_isd_tst_smp");
		castHdrDtl.push({cphd_isd_tst_smp:aphdIsdTstSmpl,cphd_tst_smp_prty:tstsmplPrty,cphd_iss_cmpl_dust:isauthdust,cphd_tst_smpl_jsn:testSmplJson,cphd_cst_no:docNo,cphd_cmy_cd:cmyCd,cphd_str_cd:strCd,cphd_tght_dt:trgtDt,cphd_tree_no:treNo,cphd_cst_typ:cstType,itmexpprty:itmExpPrty,cphd_rqre_wgt:rqrdWgt,
			cphd_dpt_cd:dpt,cphd_wrk_cd:wrkCd,cphd_pdt_ctgy:ctgy,cphd_pdt_cd:pdtCd,cphd_pdt_qty:pdtQty,cphd_iss_wgt:issWgt,cphd_iss_carat:isudCarat,
			cphd_pdt_wgt:pdtWgt,cphd_run_wgt:rnWgt,cphd_tst_smp:tstSmpl,cphd_pwd_mtl:pwdrMtl,cphd_tree_prty:trePrty,cphd_iss_auth:false,cphd_rcvd_auth:false,cphd_cst_sts:true});
	});	
		var totisWgt=$("#totissWgtOfCst").val(),totPdtWgt=$("#totpdtWgtOfCst").val(),totRnWgt=$("#totrunWgtOfCst").val(),totBalWgt=$("#totPndingWgtCst").val();
		castHdrRec={cph_cst_no:docNo,cph_tot_iss_wgt:totisWgt,cph_tot_pdt_wgt:totPdtWgt,cph_tot_run_wgt:totRnWgt,cph_tot_bal_wgt:totBalWgt,cph_iss_auth:false,cph_cst_sts:true,cph_rcvd_auth:false};
	if($("#isdauthVal").val()=="1"){
		iwdStkPro=[],iwdItmMv=[];
		var exstStk=[];if($("#exstStkIssCst").val()){
			exstStk=JSON.parse($("#exstStkIssCst").val());
		}
		castHdrRec.cph_iss_auth=true;
		$.grep(castHdrDtl,function(i){
			i.cphd_iss_auth=true;
			
			if(exstStk.length){
				var findObj=exstStk.find(function(s){
					if(s.stm_stk_crt_id==i.cphd_wrk_cd&&s.stm_str_cd==i.cphd_str_cd&&s.stm_cmy_cd==i.cphd_cmy_cd&&s.stm_dpt_cd==i.cphd_dpt_cd&&s.stm_rcvd_stk_prty==i.itmexpprty){
						s.stm_rcvd_stk_wgt=Number(s.stm_rcvd_stk_wgt)+Number(i.cphd_iss_wgt);
						iwdStkPro.push(s);
						return s;
					}
				})
				if(!findObj){
					iwdStkPro.push({stm_stk_crt_id:i.cphd_wrk_cd,stm_stk_updt_id:i.cphd_wrk_cd,stm_str_cd:i.cphd_str_cd,stm_cmy_cd:i.cphd_cmy_cd,stm_itm_cd:i.cphd_tree_no,stm_stk_trn_typ:'CastingIssue',stm_stk_itm_typ:'',stm_rcvd_stk_wgt:i.cphd_iss_wgt,stm_rcvd_stk_prty:i.itmexpprty,
						stm_stk_pure_gld_wgt:0,stm_stk_pure_doc_val:'0',stm_stk_pure_pgm_cal:'0',stm_dpt_cd:i.cphd_dpt_cd});
				}
			}
			else{
			iwdStkPro.push({stm_stk_crt_id:i.cphd_wrk_cd,stm_stk_updt_id:i.cphd_wrk_cd,stm_str_cd:i.cphd_str_cd,stm_cmy_cd:i.cphd_cmy_cd,stm_itm_cd:i.cphd_tree_no,stm_stk_trn_typ:'CastingIssue',stm_stk_itm_typ:'',stm_rcvd_stk_wgt:i.cphd_iss_wgt,stm_rcvd_stk_prty:i.itmexpprty,
				stm_stk_pure_gld_wgt:0,stm_stk_pure_doc_val:'0',stm_stk_pure_pgm_cal:'0',stm_dpt_cd:i.cphd_dpt_cd});
			}
			iwdItmMv.push({im_crt_id:i.cphd_wrk_cd,im_cmy_cd:i.cphd_cmy_cd,im_str_cd:i.cphd_str_cd,im_trn_typ:'CastingIssue',im_trn_nmb:i.cphd_cst_no,im_itm_cd:i.cphd_pdt_cd,im_itm_wgt:i.cphd_iss_wgt
				,im_itm_prty:i.itmexpprty,im_itm_pure_gld_wgt:0,im_itm_typ:'',im_dpt_cd:i.cphd_dpt_cd}); 
		});
		}
	if($("#isdauthVal").val()=="1"){
	if($("#stkForIswgtDtlString").val()){
		var stkDtlList=JSON.parse($("#stkForIswgtDtlString").val());
/*	$(".chkBoxInIswgt:checked").each(function(){
		var stkExstId=$(this).val(),stkWgt=$(this).closest("tr").find(".issuWgtByStk").val();
		$.grep(stkDtlList,function(k){
		if(k.stm_id==stkExstId)	{
			k.stm_rcvd_stk_wgt=Number(k.stm_rcvd_stk_wgt)-Number(stkWgt);
			iwdStkPro.push(k);
		}
		})
	});*/
		var depositedStk=ShowStockWgtOfTd();
		if(stkDtlList){
			$.each(depositedStk,function(key,val,i){
				if(val>0){
				[prefix,id]=key.split("stkId_");
				stkDtlList.find((s)=>{
					if(s.stm_id==id){
						s.stm_rcvd_stk_wgt=Number(s.stm_rcvd_stk_wgt)-Number(val);
						iwdStkPro.push(s);
						return true;
					}
				});
				}
			})
		}
	}
	}
	if($("#isdauthVal").val()=="0")
		spclStk=[];
		AjaxController.saveFinalPdtInCastingHdrDtlAjax(JSON.stringify(castHdrDtl),JSON.stringify(castHdrRec),JSON.stringify(iwdStkPro),JSON.stringify(iwdItmMv),treeOfPriChnge,JSON.stringify(spclStk),returnResOfCstSave);
	function returnResOfCstSave(res){
		if(res=="success"){
			window.location.href="casting.mm";
		}
	}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6"> Entered Document No Already Present </div>');$("#hideCstAlrt6").fadeOut(3000);	
	}
}else{
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
}
}
	/////////////////////////// end ///////////////////////////////////////////

//////////////////////////// save Issuen Wgt Cntlr //////////////////////////////
function saveIssueWgtCntlr(){
	calculateIndvalIssWgt();
	$("#myModal"+$("#dptCdInCst").val()+"").modal("hide");
	sumOfweightInCastCal()
}

$("#cmyCdofCst").change(function(){
	$("#dptCdInCst").val("");
	$("#dptCdInCst").selectpicker("refresh");
});
var stkRepository=[]
function calculateIndvalIssWgt(){
	var jsonStr=$('.CurrentRecShower .issWgtInPdtQty').attr("stkConsmer");
	var JsON={};
	if(jsonStr){
	JsON=JSON.parse(jsonStr)	/// 
	$("#myModal"+$("#dptCdInCst").val()+" .issuWgtByStk:not(disabled)").toArray().reduce((sum,ths)=>{
		JsON[ths.id]=JsON[ths.id]?(Number(JsON[ths.id])+Number(ths.value)).toFixed(2):(0+Number(ths.value)).toFixed(2);
},0);	
	}
	else{
		var isWgt=$("#myModal"+$("#dptCdInCst").val()+" .issuWgtByStk:not(disabled)").toArray().reduce((sum,ths)=>{
			JsON[ths.id]=Number(ths.value).toFixed(2);
	},0);			
	}
	var isWgt=Object.values(JsON).reduce((isw,ths)=>{
		return isw+Number(ths);
	},0);
	var scrpMtlDpt=$("#myModal"+$("#dptCdInCst").val()+" .scrapmetalWiseDpt").val();
	var rtnMtlWgt=$("#myModal"+$("#dptCdInCst").val()+" .runnerwgtWiseDpt").val()
	 var curntIsWgtBox=$('.CurrentRecShower .issWgtInPdtQty');
	var sumOfRunWgt=Number(curntIsWgtBox.attr("isedRunWgt")||0)+Number(rtnMtlWgt);var sumOfScrp=Number(curntIsWgtBox.attr("isedScrpWgt")||0)+Number(scrpMtlDpt);
	isWgt+=sumOfRunWgt+sumOfScrp;
	curntIsWgtBox.val(isWgt).attr({"deptIsed":$("#dptCdInCst").val(),"stkConsmer":JSON.stringify(JsON),"isedRunWgt":sumOfRunWgt,"isedScrpWgt":sumOfScrp});
if(spclStk.length){
			spclStk.find(s=>{
				if(s.ssm_dpt_cd==$("#dptCdInCst").val()&&s.ssm_cmy_cd==$("#cmyCdofCst").val()){
					s.ssm_dust_mtl=Number(s.ssm_dust_mtl)-Number(scrpMtlDpt)
					s.ssm_rn_wgt=Number(s.ssm_rn_wgt)-Number(rtnMtlWgt)
					return s;
				}
			})
		}
}
///////////// end ///////////////////////////////////////////////////////////////
var spclStk=[];
if($("#SpclStkObjString").val()){
	spclStk=JSON.parse($("#SpclStkObjString").val());
}

function ShowStockWgtOfTd(){
	var result=$("[stkconsmer]").toArray().reduce((sum,ths)=>{
		if($(ths).closest("tr").find(".childCheckBox").prop("checked"))
		$(ths).attr("stkconsmer")&sum.push(JSON.parse($(ths).attr("stkconsmer")));
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
		$("#myModal"+$("#dptCdInCst").val()+" #stkshowId_"+id).html(stks.toFixed(2)||stks);
	})
	if(spclStk.length){
		var findObj=spclStk.find(s=>{
			if(s.ssm_dpt_cd==$("#dptCdInCst").val()&&s.ssm_cmy_cd==$("#cmyCdofCst").val()){
				return s;
			}
		})
		if(findObj){
			$(".runnerwgtWiseDpt").attr("max",findObj.ssm_rn_wgt).val("");$(".scrapmetalWiseDpt").attr("max",findObj.ssm_dust_mtl).val("");
			$(".runnerwgtWiseDptShow").html(findObj.ssm_rn_wgt);$(".scrapmetalWiseDptShow").html(findObj.ssm_dust_mtl)
		}
	}
	return m;
}

var set=new Set("");
$("#myTable").delegate(".issWgtInPdtQty","click",function(){
	var cmyCd=$("#cmyCdofCst").val();
	if(cmyCd){
	$("#myTable tr").removeClass("CurrentRecShower");
	$(this).closest("tr").addClass("CurrentRecShower");
	var trfType=' and (stm_stk_trn_typ=\'Inward\' or stm_stk_trn_typ=\'AlloyReceived\') and stm_cmy_cd=\''+cmyCd+'\'';
	var deptMent=$("#dptCdInCst").val();
	if($.inArray(deptMent,[...set])==-1){
	AjaxController.getStockBasedOnDeptMntInCasting(deptMent,trfType,returnResBopup);
	set.add(deptMent);
	$('#spanINModel').append('<div class="modal fade" id="myModal'+deptMent+'" role="dialog"> <div class="modal-dialog modal-md"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title"><small>Issued Weigt</small></h4> </div> <div class="modal-body"> <div class="form-group"> <div class="table-responsive"> <table class="table table-bordered table-striped"> <thead> <tr><th></th><th>TrnsType</th><th>Item Type</th><th>Item Code</th><th>Stk Prty</th><th>Stk Wgt</th><th>Iss Wgt</th></tr> </thead> <tbody id="isedWhtOfcStng"> </tbody> </table></div></div> </div> <div class="modal-footer">'
			+'<table class="table table-bordered table-striped"> <thead> <tr><th>WgtType</th><th>MetalWgt</th><th>IssMetalWgt</th></tr> </thead> <tbody><tr><td>RunnerWgt</td><td class="runnerwgtWiseDptShow"></td><td><input type="number" class="form-control runnerwgtWiseDpt" max="0"></td></tr> <tr><td>Scrapmetal</td><td class="scrapmetalWiseDptShow"></td><td><input type="number" class="form-control scrapmetalWiseDpt" max="0"></td></tr></tbody> </table> <button type="button" class="btn btn-success" onclick="saveIssueWgtCntlr()">Save</button> <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> </div> </div> </div> </div>')
//	$(".issWgtInPdtQty").val("");
	}
	else{
		ShowStockWgtOfTd();
		$("#myModal"+deptMent+"").modal('show');
	}
	function returnResBopup(res){
		var result='';
		if(res!=null){
			if($("#stkForIswgtDtlString").val()){
				var sted=JSON.parse($("#stkForIswgtDtlString").val());
				var st=sted.concat(res);
				$("#stkForIswgtDtlString").val(JSON.stringify(st))
			}else{
			$("#stkForIswgtDtlString").val(JSON.stringify(res))}
			var reslength=res.length;
			for(var i=0;i<reslength;i++){
				var stkswgt=Number(res[i].stm_rcvd_stk_wgt).toFixed(2)||'';
				result+='<tr> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes chkBoxInIswgt" value="'+res[i].stm_id+'"> <span></span> </label></td> <td>'+res[i].stm_stk_trn_typ+'</td> <td>'+res[i].stm_stk_itm_typ+'</td> <td>'+res[i].stm_itm_cd+'</td> <td>'+res[i].stm_rcvd_stk_prty+'</td><td id="stkshowId_'+res[i].stm_id+'" >'+stkswgt+'</td> <td><input type="number" id="stkId_'+res[i].stm_id+'" max="'+stkswgt+'" value="" class="form-control issuWgtByStk" style="width: 100px;" disabled></td> </tr>'	
			}
		}
		if(result=='')result='<tr><td  colspan="8" style="text-align:center">No Stock Found...</td></tr>'
		$("#myModal"+deptMent+" #isedWhtOfcStng").html(result);
		ShowStockWgtOfTd();
		$("#myModal"+deptMent+"").modal('show');
	}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="shoowClick">SELECT COMPANY AND DEPARTMENT</div>');$("#shoowClick").fadeOut(4000);
		
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
	$("#myModalSample").modal('show');
}

function saveTheJsonInTr(){
	var rcvdWgt=$($(CurntRes).closest("tr")[0].cells[11]).find("input").val();
	var isuedWgt=$(CurntRes).closest("tr").find(".issWgtInPdtQty").val();
	var totSamplWgt=Number($("#ta1Smpl").val())+Number($("#ta2Smpl").val())+Number($("#tb1Smpl").val())+Number($("#tb2Smpl").val());
	if(totSamplWgt+Number(rcvdWgt)<=Number(isuedWgt)){
	var Jsn={aphd_tst_smp1:$("#ta1Smpl").val(),aphd_tst_smp2:$("#ta2Smpl").val(),aphd_tst_smp3:$("#tb1Smpl").val(),aphd_tst_smp4:$("#tb2Smpl").val()};
	CurntRes[0].id=JSON.stringify(Jsn);
	$(CurntRes).find("input").val(totSamplWgt.toFixed(2));
	var isdSmplJson={"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$.each(isdSmplJson,(key,val)=>{
		isdSmplJson[key]=$("#myModalSample ["+key+"]").prop("checked");
	});
	$(CurntRes).find("input").attr("aphd_isd_tst_smp",JSON.stringify(isdSmplJson));
	$("#myModalSample").modal('hide');
	}
	else{
		$('.fooderAlert').html('<span><div class="alert alert-danger" id="hiderosSpan1"> Check Sample Wait Calculation... </div></span><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>')	
	$("#hiderosSpan1").fadeOut(2500);
	}
	sumOfweightInCastCal();
}

$("#spanINModel").delegate(".runnerwgtWiseDpt,.scrapmetalWiseDpt","change keyup",function(){
	if(Number($(this).val())>Number($(this).attr("max"))){
		$(this).val($(this).attr("max"));
	}
})

$(function (){
	var TreeNo=new Set(),ctgy=[],targetDate=new Set(['<option value=""> Select Target Date</option>']);
	$("#myTable tbody tr").toArray().forEach(function(ths){
		TreeNo.add('<option>'+$(ths).find("td:eq(5)").text()+'</option>');
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
