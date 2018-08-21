var tooltipOption={
		placement:'top',	
		btnOkLabel:'Auth',
		btnOkClass:'btn btn-sm btn-primary',
		title:'Do You Authorize..?',
		onConfirm : function(evt,ths) {
			  $(ths).closest("td").css({background:'#004274'});
			  $(ths).prop("readonly",true);
			  if( $(ths).closest("tr").hasClass("danger")&& $(ths).attr("auth")!="1"){
				  saveorAuthDustSmpl($(ths),1);
				  }
			  $(ths).attr("auth","1");
		  },
			onCancel : function(evt,ths) {
				 if(!$(ths).closest("tr").hasClass("danger")){
				 $(ths).attr("auth","0");	
				  $(ths).closest("td").css({background:''});
				 $(ths).prop("readonly",false);
				 }
				 else{
					 if($(ths).attr("auth")!="1")
					saveorAuthDustSmpl($(ths),0) ;
				 }
			}
		};

function saveorAuthDustSmpl(ths,sts){
	var date=$("#dateInCasting").val().split(" ")[0];strCd=$("#strCdofCst").val(),wrkCd=$("#wrkCdOfCst").val();
	if(+ths.val()){
	 var tr=ths.closest("tr"),cmycd=$("#cmyCdofCst").val(),dptcd=tr.attr("value")||'10003';
		var id=tr.find(":checkbox").attr("id");
	  var totDust=((+ths.attr("exist")||0)+(+ths.val()||0)).toFixed(2),trNo=ths.closest("tr").find("td:eq(5)").html();
	  val=ths.val(),prtyExpt=$(".expPrtyss",tr).text()||'91.70',rcvdprty=$(".trePrtyOfCst",tr).val();
	 var prty=prtyExpt;
	  if(+rcvdprty){
		  prty= (+rcvdprty)>=(+prtyExpt)?prtyExpt:rcvdprty;
	  }
	  ths.attr({"exist":totDust,"placeholder":totDust,"data-original-title":"Exist Amount=("+totDust+")"});
	  var updteeqry='update cst_prcs_hdr_dtl set cphd_pwd_mtl=\''+totDust+'\',cphd_iss_cmpl_dust='+sts+' where cphd_id='+id+' '
	  +' update cst_prcs_hdr set cph_tot_bal_wgt=\''+$("#totPndingWgtCst").val()+'\'  where cph_cst_no=(select top 1 cphd_cst_no from cst_prcs_hdr_dtl where cphd_id='+id+') '
	  +' update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast('+val+' as float)) where stm_itm_cd=\''+trNo+'\' '
	  +' and stm_stk_trn_typ=\'CastingIssue\' update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast('+val+' as float)) where [stm_rcvd_stk_prty]=\''+prty+'\' '
	  +' and stm_stk_trn_typ=\'PowderMetal\' and [stm_dpt_cd]=\''+dptcd+'\' and [stm_cmy_cd]=\''+cmycd+'\' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)'
	  +' values (\''+cmycd+'\',\''+dptcd+'\',\'\',\''+val+'\',\''+date+'\',\''+adminID+'\',\'PowderMetal\',\''+date+'\',\''+adminID+'\',\''+prty+'\',\'Powder\',\''+strCd+'\')';
//	  alert(updteeqry);
	  AjaxController.updatecastprcssDustAuthsts(updteeqry);
	  ths.val('');
	}
}
var spclStk=[];
if($("#SpclStkObjString").val()){
	spclStk=JSON.parse($("#SpclStkObjString").val());
}



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
	sumOfweightInCastCal();
	
}
$(function (){
	$(".childCheckBox,.childCheckBoxExist").on("click",function(){ 
		var sumChkedchkBox=$(".childCheckBox:checked,.childCheckBoxExist:checked").length;
		var totChkBox=$(".childCheckBox,.childCheckBoxExist").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		sumOfweightInCastCal();
	});
	$(".chkBoxInIswgt").on("change",function(){
		if($(this).prop("checked")==true)
		$(this).closest("tr").find(".issuWgtByStk").prop("disabled",false);
		else
			$(this).closest("tr").find(".issuWgtByStk").prop("disabled",true);
	})
	$("#isedWhtOfcStng").delegate(".issuWgtByStk","change keyup",function(){
		var stkMaxWgt=$(this).closest("tr")[0].cells[3].innerHTML,isedWgt=$(this).val();
		if(Number(stkMaxWgt)<Number(isedWgt)){
			$(this).val(stkMaxWgt);
		}
	});
	$("#myTable").delegate(".pdtWgtOfCst","change keyup",function(){
		/*var isedWgt=$(this).closest("tr").find(".issWgtInPdtQty").html(),rcvdWgt=$(this).val();
		if(Number(isedWgt)<Number(rcvdWgt)){
			$(this).val(isedWgt);
		}*/
	});
	
});

function sumOfweightInCastCal(){
	var pdtWgt=0,rnWgt=0,issWgt=0,tst=0,dust=0;
	$(".childCheckBoxExist,.childCheckBoxDontTuchExist").each(function (){
		var trOne=$(this).closest("tr");
		issWgt+=Number($(trOne).find(".issWgtInPdtQty").val());
	});
	$(".childCheckBox:checked,.childCheckBoxExist:checked,.childCheckBoxDontTuchExist").each(function (){
		var trOne=$(this).closest("tr");
		pdtWgt+=Number($(trOne).find(".pdtWgtOfCst").val());
		rnWgt+=Number($(trOne).find(".runWgtOfCst").val());
		tst+=Number($(trOne).find(".smplWgtOfCst").val());
		dust+=(+$(trOne).find(".pwdrMtlOfCst").val()||0)+(+$(".pwdrMtlOfCst",trOne).attr("exist")||0);
	});
	$("#totissWgtOfCst").val(issWgt.toFixed(2));$("#totPndingWgtCst").val((issWgt-(pdtWgt+rnWgt+tst+dust)).toFixed(2));
	$("#totpdtWgtOfCst").val(pdtWgt.toFixed(2));$("#totrunWgtOfCst").val(rnWgt.toFixed(2));
}
////////////////////////end/////////////////////////////////\

////////////////////search in dpt and treeNo and trgtDate/////////////////////////
$(function (){
	var table=$("#castngTable").html();
	$("#treeNoInCst,#trgtDtInCst,#wrkCtgyOfCst").on("change",function (){
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
				if(res!=null){
					for(var i=0;i<res.length;i++){
						var expPrty=(res[i][9])||'',expWgt=res[i][5]||'',qty=res[i][11]?res[i][3]+'/'+res[i][11]:res[i][3];
						result+='<tr> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" id="'+res[i][6]+'" value="'+res[i][7]+'">'
                              +'<span></span></label></td><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][2]+'</td><td class="pdtQtyIssCal">'+qty+'</td>'
							+'<td>'+res[i][4]+'</td><td>'+expPrty+'</td><td>'+expWgt+'</td><td><input type="number" class="form-control issWgtInPdtQty" style="width: 100px;"></td><td><input type="number" class="form-control pdtWgtOfCst" style="width: 100px;" onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td>'
+'<td><input type="number" class="form-control runWgtOfCst" style="width: 100px;" onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td><td ><input type="number" class="form-control smplWgtOfCst" style="width: 100px;"  onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td>'
+'<td><input type="number" class="form-control pwdrMtlOfCst" style="width: 100px;"  onkeyup="balanceWgtcalCulation(this)" onchange="balanceWgtcalCulation(this)"></td>'
+'<td><input type="number" class="form-control trePrtyOfCst" style="width: 100px;"  onkeyup="balanceWgtcalCulation(this)" onchange="balanceWgtcalCulation(this)"></td></tr>';
					}
				}
				$("#castngTable").html(result);
				$(".pwdrMtlOfCst").confirmation(tooltipOption);	
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
						var sumChkedchkBox=$(".childCheckBox:checked,.childCheckBoxExist:checked").length;
						var totChkBox=$(".childCheckBox,.childCheckBoxExist").length;
						if(sumChkedchkBox==totChkBox){
							$(".parentCheckBox")["0"].checked=true;
						}
						else{
							$(".parentCheckBox")["0"].checked=false;
						}
						sumOfweightInCastCal();
						calculateIndvalIssWgt();
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
	$("#saveBtnInCast").addClass("disabled");
	$("#saveBtnInCast").addClass("btn-circlesuc");
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
////////////////////////final Save Of Casting in Ajax//////////////////////
	function savefinalProOfCstDetail(){
		var cmyCd=$("#cmyCdofCst").val(),strCd=$("#strCdofCst").val(),cstType=$("#cstTpeOfCst").val(),wrkCd=$("#wrkCdOfCst").val()
		,docNo=$("#docNoOfCst").val(),chklength=$(".childCheckBox:checked,.childCheckBoxExist:checked").length,dptcds=$("#dptCdInCst").val();;
if(cmyCd!=""&&strCd!=""&&cstType!=""&&wrkCd!=""&&docNo!=""&&chklength>0){
	var sts=true;var dateIn=$("#dateInCasting").val().split(" ")[0];
	if(sts==true){
		$("#saveBtnInCast").addClass("disabled");$("#saveBtnInCast").prop("disabled",true);
		$("#savesuccessRes").html('<div class="alert alert-info" > Saving Please Wait... </div>');
	var castHdrDtl=[],stkManageQry=[],spclStkManageQry=[],castHdrRec={},treeOfPriChnge=[];
	var priOFCrtHdrOny=$("#primIdOfCstHdrOnly").val(),crtDtOfcstHdrOny=$("#crtDtOfCstHdrOnly").val(),crtIdOfCstHdrOny=$("#crtIdOfCstHdrOnly").val();
	if($("#isAuthIdExst").val()!="1"){	
	$(".childCheckBox:checked").each(function(){
		var trOne=$(this).closest("tr"),pdtDptsCd=this.id||'';
		treeOfPriChnge.push($(trOne).attr("value"));
		var trgtDt=$(trOne)[0].cells[1].innerHTML,ctgy=$(trOne)[0].cells[2].innerHTML,
		dpt=$(this)["0"].id,pdtQty=$(trOne)[0].cells[4].innerHTML,treNo=$(trOne)[0].cells[5].innerHTML,
		expPrty=$(trOne)[0].cells[6].innerHTML,rqWgt=$(trOne)[0].cells[7].innerHTML,pdtCd=$(this).val(),
		issWgt=$(trOne).find(".issWgtInPdtQty").val(),pdtWgt=$(trOne).find(".pdtWgtOfCst").val(),testSmplJson=$($(trOne)[0].cells[11]).attr("id"),
		rnWgt=$(trOne).find(".runWgtOfCst").val(),tstSmpl=$(trOne).find(".smplWgtOfCst").val(),
		pwdrMtl=$(trOne).find(".pwdrMtlOfCst").val(),trePrty=$(trOne).find(".trePrtyOfCst").val();
		var isauthdust=$(trOne).find(".pwdrMtlOfCst").attr("auth"),aphdIsdTstSmpl=$(trOne).find(".smplWgtOfCst").attr("aphd_isd_tst_smp"),tstsmplPrty=$(trOne).find(".trePrtyOfCst").attr("id");;
		castHdrDtl.push({cphd_pdt_dpt_cd:pdtDptsCd,cphd_isd_tst_smp:aphdIsdTstSmpl,cphd_tst_smp_prty:tstsmplPrty,cphd_iss_cmpl_dust:isauthdust,cphd_tst_smpl_jsn:testSmplJson,cphd_cst_no:docNo,cphd_cmy_cd:cmyCd,cphd_str_cd:strCd,cphd_tght_dt:trgtDt,cphd_tree_no:treNo,cphd_cst_typ:cstType,
			cphd_dpt_cd:dpt,cphd_wrk_cd:wrkCd,cphd_pdt_ctgy:ctgy,cphd_pdt_cd:pdtCd,cphd_pdt_qty:pdtQty,cphd_iss_wgt:issWgt,itmexpprty:expPrty,
			cphd_pdt_wgt:pdtWgt,cphd_run_wgt:rnWgt,cphd_tst_smp:tstSmpl,cphd_pwd_mtl:pwdrMtl,cphd_tree_prty:trePrty,cphd_iss_auth:false,cphd_rcvd_auth:false,cphd_cst_sts:true});
	});	
	if($(".childCheckBoxExist:checked").length>0){
	var exstCstO=[];
	if($("#exstCstHdrDtl").val()!=""){
		exstCstO=JSON.parse($("#exstCstHdrDtl").val());	
	}
	$(".childCheckBoxExist:checked").each(function(){
		var issWgt=$(this).closest("tr").find(".issWgtInPdtQty").val(),id=this.id;
		if(exstCstO.length>0){
			$.grep(exstCstO,function(ki){
				if(id==ki.cphd_id){
					ki.cphd_iss_wgt=issWgt;
				castHdrDtl.push(ki);
				}
			})
		}
	});
	}
		var totisWgt=$("#totissWgtOfCst").val(),totPdtWgt=$("#totpdtWgtOfCst").val(),totRnWgt=$("#totrunWgtOfCst").val(),totBalWgt=$("#totPndingWgtCst").val();
		castHdrRec={cph_dpt_cd:dptcds,cph_wrk_cd:wrkCd,cph_cmy_cd:cmyCd,cph_id:priOFCrtHdrOny,cph_crt_dt:crtDtOfcstHdrOny,cph_crt_id:crtIdOfCstHdrOny,cph_cst_no:docNo,cph_tot_iss_wgt:totisWgt,cph_tot_pdt_wgt:totPdtWgt,cph_tot_run_wgt:totRnWgt,cph_tot_bal_wgt:totBalWgt,cph_iss_auth:false,cph_cst_sts:true,cph_rcvd_auth:false};
	if($("#isdauthVal").val()=="1"){
		iwdStkPro=[],iwdItmMv=[];
		castHdrRec.cph_iss_auth=true;
		$.grep(castHdrDtl,function(i){
			i.cphd_iss_auth=true;var isWgt=(+i.cphd_iss_wgt||0);
			stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+isWgt+" as float)) where stm_itm_cd='"+i.cphd_tree_no+"' " +
					"and stm_stk_trn_typ='CastingIssue' and stm_stk_crt_id='"+wrkCd+"' and stm_rcvd_stk_prty='"+i.itmexpprty+"' " +
					" and stm_dpt_cd='"+i.cphd_dpt_cd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
							" values ('"+cmyCd+"','"+i.cphd_dpt_cd+"','"+i.cphd_tree_no+"','"+isWgt+"','"+dateIn+"','"+wrkCd+"','CastingIssue','"+dateIn+"','"+wrkCd+"','"+i.itmexpprty+"','','"+strCd+"')");
		});
		}
	}
	else{
		if($("#rcvdauthVal").val()=="1"){ 
			
		var exstCst=[],exstStk=[],castHdrDtl=[],castHdrRec={},treeOfPriChnge=[],exstRcvdCast=[];
		if($("#exstCstHdrDtl").val()!=""){
			exstCst=JSON.parse($("#exstCstHdrDtl").val());	
		}
		$(".childCheckBoxExist:checked").each(function(){
			var trOne=$(this).closest("tr");
			var dpt=$(trOne).attr("value"),pdtCd=$(this).val(),priId=$(this)["0"].id,pdtWgt=$(trOne).find(".pdtWgtOfCst").val(),treeNo=trOne.find("td:eq(5)").html(),
			rnWgt=$(trOne).find(".runWgtOfCst").val(),tstSmpl=$(trOne).find(".smplWgtOfCst").val(),jsonStr=$(trOne)[0].cells[11].id;
			pwdrMtl=$(trOne).find(".pwdrMtlOfCst").val(),trePrty=$(trOne).find(".trePrtyOfCst").val(),isdtrePrty=$(trOne)[0].cells[6].innerHTML;
			var isauthdust=$(trOne).find(".pwdrMtlOfCst").attr("auth"),tstsmplPrty=$(trOne).find(".trePrtyOfCst").attr("id");
			var aphdIsdTstSmpl=$(trOne).find(".smplWgtOfCst").attr("aphd_isd_tst_smp"),testSmplJson=$($(trOne)[0].cells[11]).attr("id");
			rnWgt=(+rnWgt||0);
			if(testSmplJson&&eval('('+testSmplJson+')')){
				var json=eval('('+testSmplJson+')')
			$.each(json,(key,val)=>{
				var smpNm="TA1";
				var isdSmpls=eval('('+aphdIsdTstSmpl+')');
				var isd=0,smpno="";
				if(key=='aphd_tst_smp1'){smpNm="TA1";isd=(isdSmpls["tst_smpl_one"]?1:0);smpno=1};
				if(key=='aphd_tst_smp2'){smpNm="TA2";isd=(isdSmpls["tst_smpl_two"]?1:0);smpno=2};
				if(key=='aphd_tst_smp3'){smpNm="TB1";isd=(isdSmpls["tst_smpl_three"]?1:0);smpno=3};
				if(key=='aphd_tst_smp4'){smpNm="TB2";isd=(isdSmpls["tst_smpl_four"]?1:0);smpno=4};
				var isdPrtySmpl="";
				if(+trePrty){
					isdPrtySmpl=((+trePrty)>=(+isdtrePrty))?isdtrePrty:trePrty;	
				}
				else{
					isdPrtySmpl=isdtrePrty;
				}
				stkManageQry.push(" INSERT INTO [test_samples] (ts_chld_primid,ts_chld_isd_wgt,ts_trf_typ,ts_smp_no,[ts_cst_doc_no] ,[ts_isd_prty] ,[ts_rcvd_prty1] ,[ts_rcvd_prty2] ,[ts_rcvd_wgt1]" +
						" ,[ts_rcvd_wgt2] ,[ts_smp_dc_isd] ,[ts_smp_dc_rcvd] ,[ts_smp_isd] ,[ts_smp_wgt] ,[ts_tot_wgt] ,[ts_tree_no]) VALUES" +
						" ('"+priId+"','"+rnWgt+"','CASTING','"+smpNm+"','"+docNo+"','"+isdPrtySmpl+"','','','','','NO','NO',"+isd+",'"+val+"','','"+treeNo+"')")
					
			});
			}
			pdtWgt=(+pdtWgt||0);pwdrMtl=(+pwdrMtl||0);tstSmpl=(+tstSmpl||0);
			exstCst.find(function(i){
				if(i.cphd_id==priId){
					i.cphd_tst_smpl_jsn=jsonStr;
					i.cphd_isd_tst_smp=aphdIsdTstSmpl;i.cphd_tst_smp_prty=tstsmplPrty;
					i.cphd_iss_cmpl_dust=isauthdust;i.cphd_tst_smpl_jsn=testSmplJson;
					i.cphd_rcvd_auth=true,i.cphd_pdt_wgt=pdtWgt,i.cphd_run_wgt=rnWgt,i.cphd_tst_smp=tstSmpl,i.cphd_pwd_mtl=pwdrMtl,i.cphd_tree_prty=trePrty;
					castHdrDtl.push(i);
					return true;
				}	
				});
			if(+trePrty){
				trePrty=((+trePrty)>=(+isdtrePrty))?isdtrePrty:trePrty;	
			}
			else{
				trePrty=isdtrePrty;
			}
			if(+rnWgt){
			spclStkManageQry.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+rnWgt+" as float)) where stm_stk_trn_typ='RunnerMetal' and stm_dpt_cd='"+dpt+"' and stm_cmy_cd='"+cmyCd+"' and stm_rcvd_stk_prty='"+trePrty+"' and stm_itm_cd='"+treeNo+"' IF @@ROWCOUNT=0 insert into stk_mst" +
					" ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_rcvd_stk_prty] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_stk_itm_typ,stm_str_cd,stm_itm_cd)" +
							" values ('"+cmyCd+"','"+dpt+"','"+trePrty+"','"+rnWgt+"','"+dateIn+"','"+adminID+"','RunnerMetal','"+dateIn+"','"+adminID+"','RunnerWgt','"+strCd+"','"+treeNo+"')");
			}
			var isdstkWgt=(pdtWgt+(+rnWgt||0)+pwdrMtl+tstSmpl).toFixed(2);
			var rcvdstkWgt=(pdtWgt+pwdrMtl+tstSmpl).toFixed(2);
			
			stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)-cast("+isdstkWgt+" as float)) where stm_itm_cd='"+treeNo+"' " +
					"and stm_stk_trn_typ='CastingIssue' and stm_stk_crt_id='"+wrkCd+"' and stm_dpt_cd='"+dpt+"' and stm_cmy_cd='"+cmyCd+"' ");
			if(pdtWgt){
			stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+pdtWgt+" as float)) where stm_itm_cd='"+treeNo+"' " +
					"and stm_stk_trn_typ='CastingRecieved' and stm_dpt_cd='"+dpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into" +
							" stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
							" values ('"+cmyCd+"','"+dpt+"','"+treeNo+"','"+pdtWgt+"','"+dateIn+"','"+adminID+"','CastingRecieved','"+dateIn+"','"+adminID+"','"+trePrty+"','Tree','"+strCd+"')");
			}
			if(pwdrMtl){
				stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+pwdrMtl+" as float)) where stm_rcvd_stk_prty='"+trePrty+"' " +
						"and stm_stk_trn_typ='PowderMetal' and stm_dpt_cd='"+dpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into" +
								" stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
								" values ('"+cmyCd+"','"+dpt+"','"+treeNo+"','"+pwdrMtl+"','"+dateIn+"','"+adminID+"','PowderMetal','"+dateIn+"','"+adminID+"','"+trePrty+"','Powder','"+strCd+"')");
			}
			if(tstSmpl){
				stkManageQry.push(" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as float)+cast("+tstSmpl+" as float)) where stm_rcvd_stk_prty='"+trePrty+"' " +
						"and stm_stk_trn_typ='TestSample' and stm_dpt_cd='"+dpt+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into" +
								" stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
								" values ('"+cmyCd+"','"+dpt+"','"+treeNo+"','"+tstSmpl+"','"+dateIn+"','"+adminID+"','TestSample','"+dateIn+"','"+adminID+"','"+trePrty+"','Sample','"+strCd+"')");
			}
		});
		var totisWgt=$("#totissWgtOfCst").val(),totPdtWgt=$("#totpdtWgtOfCst").val(),totRnWgt=$("#totrunWgtOfCst").val(),totBalWgt=$("#totPndingWgtCst").val();
		if($(".parentCheckBox").prop("checked")==true)
		castHdrRec={cph_dpt_cd:dptcds,cph_wrk_cd:wrkCd,cph_cmy_cd:cmyCd,cph_id:priOFCrtHdrOny,cph_crt_dt:crtDtOfcstHdrOny,cph_crt_id:crtIdOfCstHdrOny,cph_cst_no:docNo,cph_tot_iss_wgt:totisWgt,cph_tot_pdt_wgt:totPdtWgt,cph_tot_run_wgt:totRnWgt,cph_tot_bal_wgt:totBalWgt,cph_iss_auth:true,cph_cst_sts:true,cph_rcvd_auth:true};
		else
		castHdrRec={cph_dpt_cd:dptcds,cph_wrk_cd:wrkCd,cph_cmy_cd:cmyCd,cph_id:priOFCrtHdrOny,cph_crt_dt:crtDtOfcstHdrOny,cph_crt_id:crtIdOfCstHdrOny,cph_cst_no:docNo,cph_tot_iss_wgt:totisWgt,cph_tot_pdt_wgt:totPdtWgt,cph_tot_run_wgt:totRnWgt,cph_tot_bal_wgt:totBalWgt,cph_iss_auth:true,cph_cst_sts:true,cph_rcvd_auth:false};
	}
		else{
			$("#savesuccessRes").html('<div class="alert alert-suucess" id="hideCstAlrt612"> Updated Successfully </div>');$("#hideCstAlrt612").fadeOut(3000);		
		}
	}
//	alert(stkManageQry);
		AjaxController.saveFinalPdtInCastingHdrDtlAjax(JSON.stringify(castHdrDtl),JSON.stringify(castHdrRec),stkManageQry,treeOfPriChnge,(spclStkManageQry),returnResOfCstSave);
	function returnResOfCstSave(res){
		if(res=="success"){
			window.location.href="casting.mm";
		}
	}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6"> Entered Document No Already Present </div>');$("#hideCstAlrt6").fadeOut(3000);
		$("#saveBtnInCast").removeClass("disabled");
		$("#saveBtnInCast").removeClass("btn-circlesuc");
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
	$("#saveBtnInCast").removeClass("disabled");
	$("#saveBtnInCast").removeClass("btn-circlesuc");
}
}
	/////////////////////////// end ///////////////////////////////////////////

//////////////////////////// save Issuen Wgt Cntlr //////////////////////////////
function saveIssueWgtCntlr(){
	calculateIndvalIssWgt();
	$("#myModal").modal("hide");
}
function calculateIndvalIssWgt(){
	var isWgt=0,qtyCal=0;
	$(".chkBoxInIswgt:checked").each(function(){
		isWgt+=Number($(this).closest("tr").find(".issuWgtByStk").val());
	})
	if($("#isAuthIdExst").val()!="1")
	$("#totissWgtOfCst").val(isWgt.toFixed(2));
	$(".childCheckBox:checked,.childCheckBoxExist:checked").each(function(){
		qtyCal+=Number($(this).closest("tr").find(".pdtQtyIssCal").html());	
	});
	var balIss=isWgt.toFixed(2)/qtyCal;
	/*$(".childCheckBox,.childCheckBoxExist:checked").each(function(){
		$(this).closest("tr").find(".issWgtInPdtQty").html("");
	});*/
	/*$(".childCheckBox:checked,.childCheckBoxExist:checked").each(function(){
		var isswgts=Number($(this).closest("tr").find(".pdtQtyIssCal").html())*balIss;
		$(this).closest("tr").find(".issWgtInPdtQty").html(isswgts.toFixed(2));
	})*/
}
///////////// end ///////////////////////////////////////////////////////////////

//////////////////////delete AAdded Casting From DataBase And Tree //////////////////
function delteAddedCstAndTree(){
	if($(".childCheckBoxExist:checked").length>0){
		$("#savesuccessRes").html('<div class="alert alert-info"> Deleting Records Please Wait</div>');	
	var exstTre=[],exstTreeDel=[],cstPriId=[],castHdrRec={},issWgt=0,pdtWgt=0,rnWgt=0;
	if($("#ExstTreeDtl").val()!=""){
		exstTre=JSON.parse($("#ExstTreeDtl").val());
	}
	$(".childCheckBoxExist:checked").each(function(){
		var trOne=$(this).closest("tr");
		var treNo=$(trOne)[0].cells[5].innerHTML,pdtId=$(this).val();cstPriId.push($(this)["0"].id),
		issWgt+=Number($(trOne)[0].cells[8].innerHTML),pdtWgt+=Number($(trOne).find(".pdtWgtOfCst").val()),
		rnWgt+=$(trOne)[0].cells[10].innerHTML;
		$.grep(exstTre,function(k){
			if(k.tghd_pdt_cd==pdtId&&k.tghd_doc_no==treNo){
				k.tghd_cst_prcs_sts=false;
				exstTreeDel.push(k)	
			}
		})
	});
	var cmyCd=$("#cmyCdofCst").val(),strCd=$("#strCdofCst").val(),cstType=$("#cstTpeOfCst").val(),wrkCd=$("#wrkCdOfCst").val(),docNo=$("#docNoOfCst").val();
	var priOFCrtHdrOny=$("#primIdOfCstHdrOnly").val(),crtDtOfcstHdrOny=$("#crtDtOfCstHdrOnly").val(),crtIdOfCstHdrOny=$("#crtIdOfCstHdrOnly").val();
	var totisWgt=Number($("#totissWgtOfCst").val())-Number(issWgt),totPdtWgt=Number($("#totpdtWgtOfCst").val())-Number(pdtWgt),totRnWgt=Number($("#totrunWgtOfCst").val())-Number(rnWgt),totBalWgt=$("#totPndingWgtCst").val();
	castHdrRec={cph_id:priOFCrtHdrOny,cph_crt_dt:crtDtOfcstHdrOny,cph_crt_id:crtIdOfCstHdrOny,cph_cst_no:docNo,cph_tot_iss_wgt:totisWgt,cph_tot_pdt_wgt:totPdtWgt,cph_tot_run_wgt:totRnWgt,cph_tot_bal_wgt:totBalWgt,cph_iss_auth:false,cph_cst_sts:true,cph_rcvd_auth:false};
	AjaxController.updateTreeGenHdrDtlListSts(JSON.stringify(exstTreeDel),JSON.stringify(castHdrRec),cstPriId,returnresDelTree);
	function returnresDelTree(res){
		$("#savesuccessRes").html('<div class="alert alert-success"> Deleted Success</div>');	
		if(res=="success"){
			setTimeout(function(){
			location.reload();
			}, 1500);
		}
	}
	}
	else{
		$("#savesuccessRes").html('<div class="alert alert-danger" id="hideCstAlrt6127"> Select Exist Records </div>');$("#hideCstAlrt6127").fadeOut(3000);		
	}
}
///////////////////////////////// end //////////////////////////////////////////////

function updatercvdWgtOfCasting(ths,id){
	var treeNo=$(ths).closest("tr").find("td:eq(5)").html();
	AjaxController.updatercvdWgtOfCastingAjax(ths.value,id,treeNo);
}

////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////save Issuen Wgt Cntlr //////////////////////////////
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
$("#myModal"+$("#dptCdInCst").val()+" #stkshowId_"+id).html(stks);
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
$("#myTable").delegate(".issWgtInPdtQty:not([readonly])","click",function(){
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
//$(".issWgtInPdtQty").val("");
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




///////////////////////////////////// end                           ../////////////////




/////////////////// test sample /////////////

var CurntRes;
var treenoforedit;
function openModelOfTestSample(ths){
	treenoforedit=ths.lang;
	var isRcvdAuth=$(ths).closest("tr").hasClass("danger");
	 if(isRcvdAuth){
		 $("#myModalSample input:not(:checkbox)").prop("disabled",true);
	 }
	 else{
		
		 $("#myModalSample input:not(:checkbox)").attr("disabled",false); 
	 }
	CurntRes=$(ths).closest("td");var tdId=$(ths).closest("td")[0].id;
	var JsonStr=tdId!=undefined&&tdId!=""?JSON.parse(tdId):{aphd_tst_smp1:0,aphd_tst_smp2:0,aphd_tst_smp3:0,aphd_tst_smp4:0};
	$("#ta1Smpl").val(JsonStr.aphd_tst_smp1),$("#ta2Smpl").val(JsonStr.aphd_tst_smp2),$("#tb1Smpl").val(JsonStr.aphd_tst_smp3),$("#tb2Smpl").val(JsonStr.aphd_tst_smp4)
	var isdtstsmpl=$(ths).attr("aphd_isd_tst_smp")||'{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false}';
	var isdSmplJson=JSON.parse(isdtstsmpl)||{"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$.each(isdSmplJson,(key,val)=>{
		 if(isRcvdAuth&&val){
				$("["+key+"]").prop("disabled",val);
		 }
		 else{
				$("["+key+"]").prop("disabled",false);	 
		 }
		$("["+key+"]").prop("checked",val);
	});
	if(!isRcvdAuth)
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
	if($(CurntRes).closest("tr").hasClass("danger")){
		var smpIsd={smp1:(isdSmplJson.tst_smpl_one?1:0),smp2:(isdSmplJson.tst_smpl_two?1:0),smp3:(isdSmplJson.tst_smpl_three?1:0),smp4:(isdSmplJson.tst_smpl_four?1:0)};
		var docNo=$("#docNoOfCst").val(),treeNos=$('td:eq(5)',crntOfIsedPrtyTr).html()||'';;
		var qryUpdater=[];
//		alert(treeNos);
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp1+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treenoforedit+"' and [ts_smp_no]='TA1' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp2+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treenoforedit+"' and [ts_smp_no]='TA2' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp3+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treenoforedit+"' and [ts_smp_no]='TB3' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp4+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treenoforedit+"' and [ts_smp_no]='TB4' ")
		
		var id=$(CurntRes).closest("tr").find(":checkbox").attr("id");
	AjaxController.saveTheCastdPrtyOfEdit(id,JSON.stringify(isdSmplJson),qryUpdater,rtnsvereesofaloy);	
		function rtnsvereesofaloy(res){
			if(res)
			$("#myModalSample").modal('hide');
		}
	   }
	else{
		$("#myModalSample").modal('hide');
	}
	sumOfweightInCastCal();
}
$("#spanINModel").delegate(".runnerwgtWiseDpt,.scrapmetalWiseDpt","change keyup",function(){
if(Number($(this).val())>Number($(this).attr("max"))){
$(this).val($(this).attr("max"));
}
});




$(function (){
	var TreeNo=new Set(),ctgry=new Set();
	$("#castngTable tr").toArray().forEach(function(ths){
		TreeNo.add('<option>'+$(ths).find("td:eq(5)").text()+'</option>');
		ctgry.add('<option>'+$(ths).find("td:eq(2)").text()+'</option>');
	});
	var TreeNoExst=new Set(),ctgryExst=new Set();
	$("#castngTableExstBy tr").toArray().forEach(function(ths){
		var treeVal=$(ths).find("td:eq(5)").text(),vatgyVal=$(ths).find("td:eq(2)").text();
		if(![...TreeNo].find(s=>s==treeVal))
		TreeNo.add('<option>'+treeVal+'</option>');
		if(![...ctgry].find(s=>s==vatgyVal))
		ctgry.add('<option>'+vatgyVal+'</option>');
		TreeNoExst.add(treeVal);
		ctgryExst.add(vatgyVal);
	});
	$("#treeNoInCst").html([...TreeNo]).val([...TreeNoExst]).selectpicker("refresh");
	$("#wrkCtgyOfCst").html([...ctgry]).val([...ctgryExst]).selectpicker('refresh');
	});



$(function(){
	$("#myTable").delegate(".trePrtyOfCst","click",function(){
		issPrtyCal(this);
	});
	$(".pwdrMtlOfCst").confirmation(tooltipOption);	
});
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
		$("#ta1tstPrty").val(json.aphd_tstd_prty1);$("#tb1tstPrty").val(json.aphd_tstd_prty3);
		$("#ta2tstPrty").val(json.aphd_tstd_prty2);$("#tb2tstPrty").val(json.aphd_tstd_prty4);
		var ind=0;
		  if(tr.hasClass("danger")){
		$.each(json,(key,val)=>{
			if(val)
			$("#myPrtySample input:eq("+ind+")").prop("disabled",true);
			ind++;
		  })
		  }
		  else{
			  $("#myPrtySample input").prop("disabled",false);
		  }
	}
	else{
		  $("#myPrtySample input").prop("disabled",false);
		$(".rtnPrtyies").val("")
		}
	$("#myPrtySample").modal('show');
	
}

function saveprityForBox(){
	var givenPrty={aphd_tstd_prty1:$("#ta1tstPrty").val(),aphd_tstd_prty2:$("#tb1tstPrty").val(),aphd_tstd_prty3:$("#ta2tstPrty").val(),
	aphd_tstd_prty4:$("#tb2tstPrty").val()};
	var docNo=$("#docNoOfCst").val();
	var collection=$(".rtnPrtyies").toArray().map(s=>Number($(s).val())||null).filter(s=>s!=null);
	var min=Math.min.apply(null,collection)||0;
	$(crntOfIsedPrtyTr).find(".trePrtyOfCst").val(min.toFixed(2));
	$(crntOfIsedPrtyTr).find(".trePrtyOfCst").attr("id",JSON.stringify(givenPrty));
	var treeNos=$('td:eq(5)',crntOfIsedPrtyTr).html()||'';
	if($(crntOfIsedPrtyTr).hasClass("danger")){
		var qryUpdater=[];
		var id=$(crntOfIsedPrtyTr).find(":checkbox").attr("id");
		var val=Object.values(givenPrty);
		var isdamaged=val.some(s=>{if(!s||Number(s)==0)
		{return true;}});
		var expprty=(+$(crntOfIsedPrtyTr).find(".expPrtyss").html()||0);
		var isdmdg=((+min||0)>=expprty)?'NO':'YES';
		AjaxController.updateRcvdPrtyOfCastingPrcs(min,JSON.stringify(givenPrty),id,!isdamaged,isdmdg,qryUpdater,rtnOfPrtyVsSmpl);
		function rtnOfPrtyVsSmpl(res){
			if(res)	$("#myPrtySample").modal('hide');
		}
	}
	else{
	$("#myPrtySample").modal('hide');
	}
}
$(function(){
	$("#reusetreeproduct").click(function(){
	
	})
})
