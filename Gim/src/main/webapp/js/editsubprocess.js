/**
 * 
 */
var tbodyAfterPgeLoad=$("#tbodyOfTable").html();
$(function(){
	$("#targetDtOfSubPrcs,#jbCardOfSubPrcs,#treNoOfSubPrcs").on("change",function(){
		if($("#targetDtOfSubPrcs").val()==""&&$("#jbCardOfSubPrcs").val()==null&&$("#treNoOfSubPrcs").val()==null){
			var table = $('#myTableTable').DataTable().clear();table.destroy();
			$("#tbodyOfTable").html(tbodyAfterPgeLoad);
		var table = $('#myTableTable').DataTable({
				   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
				   "iDisplayLength": -1,
				   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 2}]
				});
		table.columns().eq( 0 ).each( function ( colIdx ) {
			    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
			        table
			            .column( colIdx )
			            .search( this.value )
			            .draw();
			    } );});
		}else{
var jbCardFilter="",treeNoFilter="";
	if($("#jbCardOfSubPrcs").val()!=null){
		jbCardFilter=$("#jbCardOfSubPrcs").val().map(function(jb){
			return "'"+jb+"'"
		}).join();
	}	
	if($("#treNoOfSubPrcs").val()!=null){
		treeNoFilter=$("#treNoOfSubPrcs").val().map(function(tr){
			return "'"+tr+"'"
		}).join();
	}
	AjaxController.filterInJobCardAndTreeForAjax($("#targetDtOfSubPrcs").val(),jbCardFilter,treeNoFilter,retrnResOfFiltrTreJob);
		}
	});
});

function retrnResOfFiltrTreJob(res){
var result='';	var table = $('#myTableTable').DataTable().clear();table.destroy();
	if(res!=null){
		for(var i=0;i<res.length;i++){
			result+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][7]+'">'
            +'<span></span></label></td><td class="trgtDtOfTr">'+res[i][0]+'</td><td>'+res[i][1]+'</td><td  class="trnTypeOfTr">'+res[i][2]+'</td><td class="docNoInTr">'+res[i][3]+'</td><td class="itmCdOfTr">'+res[i][4]+'</td><td  class="itmTypOftr">'+res[i][5]+'</td><td class="subPrcsStkPrty">'+res[i][8]+'</td><td class="stkWgtOfSubPrcs">'+res[i][6]+'</td>'
            +'<td><input type="number" class="form-control issWgtOfSubPrcs" max="'+res[i][6]+'" value="'+res[i][6]+'"></td><td><input type="number" class="form-control rcvdWgtOfSubPrcs"></td> <td class="balwgtOfSupPrcs"></td> </tr>';	
		}
	}
	$("#tbodyOfTable").html(result);

	var table = $('#myTableTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 2}]
		});
table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
}


/////////////////// select box hanler ///////////////////////////
$(function(){
	$("#myTableTable").delegate(".parentCheckBox","change",function(){
		if($(this).prop("checked")==true)
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
		calculationOfSubPrcs();	$(".childCheckBox").each(function(){
			balWgtCalSubPrcs(this);
		});
	});
	$("#myTableTable").delegate(".childCheckBox","change",function(){ 
		var sumChkedchkBox=$(".childCheckBox:checked").length;
		var totChkBox=$(".childCheckBox:not(:disabled)").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		calculationOfSubPrcs();balWgtCalSubPrcs(this);
	});

});

$("table").delegate(".rcvdMtlWgt,.pwdrmtlInMelt","keyup",calculationOfSubPrcs);

function calculationOfSubPrcs(){
	var issWgt=0,rcvdWgt=0;
	var prcsnm=$("#prcsTypOfSubPrcs option:selected").text()
	if(prcsnm.search(/\melt/gi)>-1){	
		$(".childCheckBox:checked,.rcvdChk1").each(function(){
			var tr=$(this).closest("tr");
			rcvdWgt+=(+$(".tstSmpllInMelt",tr).val()||0)+(+$(".pwdrmtlInMelt",tr).val()||0)+(+$(".pwdrmtlInMelt",tr).attr("placeholder")||0)+(+$(".rcvdMtlWgt",tr).val()||0);
			issWgt +=(+$(".isdWgtInMelt",tr).val()||0);
			$(".blwgtInMelt",tr).val((issWgt-rcvdWgt).toFixed(2));
		});
	}
	else{
$("#tbodyOfTableExist .childCheckBox,.rcvdChk1").each(function(){
	issWgt+=Number($(this).closest("tr").find(".issWgtOfSubPrcs").val());
	rcvdWgt+=Number($(this).closest("tr").find(".rcvdWgtOfSubPrcs").val());
});
	}
$("#isedtotWgtOfSubPrcs").val(issWgt.toFixed(2));$("#rcvdtotWgtOfSubPrcs").val(rcvdWgt.toFixed(2));
$("#rbalWgtOfSubPrcs").val((issWgt-rcvdWgt).toFixed(2))
}
function balWgtCalSubPrcs(ths){
	var tr=$(ths).closest("tr");
	var isedWgt=tr.find(".issWgtOfSubPrcs").val();
	var rcvdWgt=tr.find(".rcvdWgtOfSubPrcs").val();
	tr.find(".balwgtOfSupPrcs").html((Number(isedWgt)-Number(rcvdWgt)).toFixed(2));
}
$(function(){
	$("#myTableTable").delegate(".issWgtOfSubPrcs","keyup change",function(){ 
		var tr=$(this).closest("tr");
		var isWgt=tr.find(".issWgtOfSubPrcs").val();
		var stkWgt=tr.find(".stkWgtOfSubPrcs").html();
		if(Number(isWgt)>Number(stkWgt)){
			tr.find(".issWgtOfSubPrcs").val(stkWgt);
		}
		calculationOfSubPrcs();	balWgtCalSubPrcs(this);
	});
	$("#myTableTable").delegate(".rcvdWgtOfSubPrcs","keyup change",function(){ 
		/*var tr=$(this).closest("tr");
		var isWgt=tr.find(".issWgtOfSubPrcs").val();
		var rcvdWgt=tr.find(".rcvdWgtOfSubPrcs").val();
		if(Number(rcvdWgt)>Number(isWgt)){
			tr.find(".rcvdWgtOfSubPrcs").val(isWgt);
		}
		*/calculationOfSubPrcs();	balWgtCalSubPrcs(this);
	});
});
$(function (){
	$("#wrkCdOfSubPrcs").change(function(){
		if($(this).val()!=""){
	var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as decimal(20,3))),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' and s.stm_stk_trn_typ like '%Issue%'"
		AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
	function retWrkAlwQty(res){
	[wrkWgt,avlWgt]=res.split("-");
		if(avlWgt!=null&&avlWgt!='null'&&avlWgt!="")
		$("#balStkOfMainPrcs").val(Number(wrkWgt).toFixed(2));	
		else
		$("#balStkOfMainPrcs").val(Number(wrkWgt).toFixed(2));
		$("#StkLmtOfEMployee").val(res);
	}
		}
		else{
			$("#balStkOfMainPrcs,#StkLmtOfEMployee").val("");	}
	});
})
function beforesavingValidate(){
	$("#saveButtonSupPrcs").addClass("disabled");
	$("#saveButtonSupPrcs").addClass("btn-circlesuc");
	if($("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
		var empStkExst=Number($("#StkLmtOfEMployee").val().split("-")[0])+Number($("#isedtotWgtOfSubPrcs").val());
		var empAlwQty=$("#StkLmtOfEMployee").val().split("-")[1];
		if(Number(empStkExst)>Number(empAlwQty)){
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
					'<button type="button" onclick="saveFinalSubPrcessDetail()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	
		}
		else{
			saveFinalSubPrcessDetail();		
		}
		}
	else{
		saveFinalSubPrcessDetail();	
	}
}
function hideDivInStkAdj() {
	$("#firstPrep").fadeOut(20);
}
	

function saveFinalSubPrcessDetail(){
	var docNo=$("#DocNoInSupPrcs").val(),dptCd=$("#dptCdOfSubPrcs").val(),prcsType=$("#prcsTypOfSubPrcs").val(),prcsTypeName=$("#prcsTypOfSubPrcs option:selected").text();
	wrkCd=$("[id*=wrkCdOfSubPrcs]:visible").val(),wrkerTyp=$("#wrkTypOfDcPrcs").val(),tgrtDt=$("#targetDtOfSubPrcs"),totIsWgt=$("#isedtotWgtOfSubPrcs").val(),
	totRcvdWgt=$("#rcvdtotWgtOfSubPrcs").val(),cmyCd=$("#cmyCdOfSupPrcs").val(),strCd=$("#strCdOfSupPrcs").val(),date=$("#dateofSubProcess").html().split(" ")[0];
	if(docNo!=""&&dptCd!=""&&prcsType!=""&&wrkCd!=""&&cmyCd!=""&&strCd!=""&&$(".childCheckBox:checked").length>0){
		$("#saveButtonSupPrcs").addClass("disabled");$("#saveButtonSupPrcs").prop("disabled",true);
		$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait....</div>');
	var InsetOrUpdate=[];
	 var rcvdauth=$("#rcvdauthVal").val(),totBalWgt=$("#rbalWgtOfSubPrcs").val();
	 var prcsnm=$("#prcsTypOfSubPrcs option:selected").text()
		if(prcsnm.search(/\melt/gi)==-1){	
	 $(".childCheckBox:checked").each(function(){
			var tr=$(this).closest("tr"),trgtDts=tr.find(".trgtDtOfTr").html(),trnTyp=tr.find(".trnsctyp").html(),primId=$(this).val();
			docNoInTr=tr.find(".docNoInTr").html(),isedStkWgt=tr.find(".issWgtOfSubPrcs").val(),rcvdWgtOfTr=tr.find(".rcvdWgtOfSubPrcs").val(),balWgtOfTr=tr.find(".balwgtOfSupPrcs").html(),
			trfcode=$(this).attr("trfCode"),isdDptCd=$(this).attr("isddptcd"),prtyTR=$(".prtyInTr",tr).text();
			var loginid=document.getElementById("loginid").value;
			if(rcvdauth=="1"){
			InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+rcvdWgtOfTr+"' as decimal(20,3))) where stm_itm_cd='"+docNoInTr+"' and stm_stk_trn_typ='"+prcsTypeName+"SubProcess Issue' and stm_stk_crt_id='"+wrkCd+"' " +
					" and stm_dpt_cd='"+dptCd+"' and stm_rcvd_stk_prty='"+prtyTR+"' and stm_cmy_cd='"+cmyCd+"'");
				InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvdWgtOfTr+"' as decimal(20,3))) where stm_itm_cd='"+docNoInTr+"' and stm_stk_trn_typ='"+prcsTypeName+"SubProcess Recieved' and stm_stk_crt_id='"+loginid+"' " +
					" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' and stm_rcvd_stk_prty='"+prtyTR+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
					" values ('"+cmyCd+"','"+dptCd+"','"+docNoInTr+"','"+rcvdWgtOfTr+"','"+date+"','"+loginid+"','"+prcsTypeName+"SubProcess Recieved','"+date+"','"+loginid+"','"+prtyTR+"','','"+strCd+"')");	
				InsetOrUpdate.push('update [sub_prcs_hdr_dtl] set [sphd_rcvd_auth]='+rcvdauth+' ,[sphd_rcvd_stk_wgt]=\''+rcvdWgtOfTr+'\' ,[sphd_updt_dt]=\''+date+'\' ,[sphd_bal_wgt]=\''+balWgtOfTr+'\' where sphd_id=\''+primId+'\'');
			}
		});
		}
		else{
		 $("tr:has(.childCheckBox:checked)").toArray().forEach(function(tr){	
			 var spPrimId=$(tr).attr("supprimid")||0;
				 var trfTyp=$(".trfTypInMelt",tr).text()||'',prty=$('.prtyInMelt',tr).text()||'',exstShwWgt=$(".exstMtlWgtInMelt",tr).text()||'',
				 isdWgt=$(".isdWgtInMelt",tr).val()||'0',balwgt=$(".blwgtInMelt",tr).val()||'0',rcvdWGt=$(".rcvdMtlWgt",tr).val(),testsmpl=$(".tstSmpllInMelt",tr).val(),
				 pwdrmtl=(+$(".pwdrmtlInMelt",tr).val()||0),dustauth=$(".pwdrmtlInMelt",tr).attr("auth")||'0',prtyrcvd=$(".prtyTcvdInMelt",tr).val(),testsmpljsn=$("td:has(.tstSmpllInMelt)",tr).attr("testsmpl")||'',prtysmpljsn=$(".prtyTcvdInMelt",tr).attr("spmlprty")||'';
				var totrcvdwgt=(+rcvdWGt||0)+(+pwdrmtl||0)+(+testsmpl||0);
				
				var exptPrty="";
				if(+prtyrcvd){
					exptPrty=((+prtyrcvd)>=(+prty))?prty:prtyrcvd;
				}
				else{
					exptPrty=prty;
				}
				 if(rcvdauth=="1"){
						InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+totrcvdwgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prty+"' and stm_stk_trn_typ='Melting Issue' and stm_stk_crt_id='"+wrkCd+"' " +
								" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' ");	
						InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvdWGt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+exptPrty+"' and stm_stk_trn_typ='Melting Received' " +
								" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
								" values ('"+cmyCd+"','"+dptCd+"','','"+rcvdWGt+"','"+date+"','"+adminId+"','Melting Received','"+date+"','"+adminId+"','"+exptPrty+"','Melt','"+strCd+"')");	
						if(+testsmpl){
							InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+testsmpl+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+exptPrty+"' and stm_stk_trn_typ='TestSample' " +
									" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
									" values ('"+cmyCd+"','"+dptCd+"','','"+testsmpl+"','"+date+"','"+adminId+"','TestSample','"+date+"','"+adminId+"','"+exptPrty+"','Smpl','"+strCd+"')");	
								
						}
						if(pwdrmtl){
						InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+pwdrmtl+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+exptPrty+"' and stm_stk_trn_typ='PowderMetal' " +
								" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
								" values ('"+cmyCd+"','"+dptCd+"','','"+pwdrmtl+"','"+date+"','"+adminId+"','PowderMetal','"+date+"','"+adminId+"','"+exptPrty+"','Powder','"+strCd+"')");	
						}
				 }
				 if(testsmpljsn&&eval('('+testsmpljsn+')')){
						var json=eval('('+testsmpljsn+')')
					$.each(json,(key,val)=>{
						if(typeof val!='boolean'){
						var isd=0,smpno="";
						if(key=='aphd_tst_smp1'){isd=(json["tst_smpl_one"]?1:0);smpno="M1"};
						if(key=='aphd_tst_smp2'){isd=(json["tst_smpl_two"]?1:0);smpno="M2"};
						if(key=='aphd_tst_smp3'){isd=(json["tst_smpl_three"]?1:0);smpno="M3"};
						if(key=='aphd_tst_smp4'){isd=(json["tst_smpl_four"]?1:0);smpno="M4"};
						InsetOrUpdate.push(" INSERT INTO [test_samples] (ts_chld_primid,ts_chld_isd_wgt,ts_trf_typ,ts_smp_no,[ts_cst_doc_no] ,[ts_isd_prty] ,[ts_rcvd_prty1] ,[ts_rcvd_prty2] ,[ts_rcvd_wgt1]" +
								" ,[ts_rcvd_wgt2] ,[ts_smp_dc_isd] ,[ts_smp_dc_rcvd] ,[ts_smp_isd] ,[ts_smp_wgt] ,[ts_tot_wgt] ,[ts_tree_no]) VALUES" +
								" ('"+spPrimId+"','"+rcvdWGt+"','MELTING','"+smpno+"','"+docNo+"','"+exptPrty+"','','','','','NO','NO',"+isd+",'"+val+"','','"+trfTyp+"')");
						}	
					});
					}
				 var totpwdrMtl=(pwdrmtl+(+$(".pwdrmtlInMelt",tr).attr("placeholder")||0)).toFixed(2);
					InsetOrUpdate.push('update [sub_melt_dtl] set [smd_rcvd_auth]='+rcvdauth+',smd_rcvd_prty_jsn=\''+prtysmpljsn+'\',smd_test_smp_wgt=\''+testsmpl+'\',smd_test_smps_jsn=\''+testsmpljsn+'\',smd_rcvd_prty=\''+prtyrcvd+'\' ,[smd_rcvd_mtl_wgt]=\''+rcvdWGt+'\' ,[smd_updt_dt]=\''+date+'\' ,smd_dust_auth=\''+dustauth+'\',[smd_dust_mtl]=\''+pwdrmtl+'\',[smd_bal_wgt]=\''+balwgt+'\' where smd_id=\''+spPrimId+'\'');
					
			 });
			
		}
		var finalrcvdauth=(rcvdauth=="1"&&$(".parentCheckBox:checked").length)?1:0;
		InsetOrUpdate.push('update [sub_prcs_hdr] set [sph_rcvd_auth]='+finalrcvdauth+' ,[sph_rcvd_wgt]=\''+totRcvdWgt+'\' ,[sph_updt_dt]=\''+date+'\' ,[sph_bal_wgt]=\''+totBalWgt+'\' where sph_prcs_no=\''+docNo+'\'');
		AjaxController.saveSupPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
	}
	else{
		if(docNo==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Enter Document Number</div>');$("#hider12").fadeOut(3500);	
		}
		else if(dptCd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select DepartMent Number</div>');$("#hider12").fadeOut(3500);		
		}
		else if(prcsType==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Process Type</div>');$("#hider12").fadeOut(3500);		
		}
		else if(wrkCd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Worker Name</div>');$("#hider12").fadeOut(3500);		
		}
		else if(cmyCd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Company</div>');$("#hider12").fadeOut(3500);		
		}
		else if(strCd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Store</div>');$("#hider12").fadeOut(3500);		
		}
		else{
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Records</div>');$("#hider12").fadeOut(3500);	
			}
		$("#saveButtonSupPrcs").removeClass("disabled");
		$("#saveButtonSupPrcs").removeClass("btn-circlesuc");
		
	}
}


function Sub_Prcs_Hdr_Dtl(stkPry,cmyCd,strCd,primId,dptCd,wrkCd,docNo,prcsType,trgtDts,trnTyp,docNoInTr,itmCdTr,itmTypOfTr,isedStkWgt,rcvdWgtOfTr,balWgtOfTr){
	this.primId=primId;
	this.sphd_prcs_no = docNo;
	this.sphd_dpt_cd = dptCd;
	this.sphd_prcs_typ = prcsType;
	this.sphd_wrk_cd = wrkCd;
	this.sphd_trgt_dt = trgtDts;
	this.sphd_iss_doc_no = docNoInTr;
	this.sphd_iss_doc_typ = trnTyp;
	this.sphd_itm_typ = itmTypOfTr;
	this.sphd_itm_cd = itmCdTr;
	this.sphd_iss_stk_wgt = isedStkWgt;
	this.sphd_rcvd_stk_wgt = rcvdWgtOfTr;
	this.sphd_bal_wgt = balWgtOfTr;
	this.sphd_iss_auth = false;
	this.sphd_rcvd_auth = false;
	this.sphd_prcs_sts = true;
	this.sphd_crt_id = wrkCd;
	this.sphd_updt_id = wrkCd;
	this.sphd_cmy_cd=cmyCd;
	this.sphd_str_cd=strCd;
	this.sphd_iss_stk_prty=stkPry;
}

function Sub_Prcs_Hdr(dptCd,wrkCd,docNo,prcsType,docNoInTr,totIsWgt,totRcvdWgt) {
	this.sph_prcs_no = docNo;
	this.sph_frm_dpt = dptCd;
	this.sph_prcs_typ = prcsType;
	this.sph_wrk_cd = wrkCd;
	this.sph_iss_wgt = totIsWgt;
	this.sph_rcvd_wgt = totRcvdWgt;
	this.sph_crt_id = wrkCd;
	this.sph_updt_id = wrkCd;
	this.sph_prcs_sts = true;
	this.sph_iss_auth = false;
	this.sph_rcvd_auth = false;
}

function rtnfunOfSaveRes(res){
	if(res=="success"){
		window.location.href="subprocess.mm";
	}
}

var CurntRes;
$("table").delegate(".tstSmpllInMelt","click",function(){
	openModelOfTestSample(this);
});

function openModelOfTestSample(ths){
	var isRcvdAuth=(+$(ths).closest("tr").attr("rcvdauth")||0);
	 if(isRcvdAuth){
		 $("#myModalSample input:not(:checkbox)").prop("disabled",true);
	 }
	 else{
		 $("#myModalSample input:not(:checkbox)").attr("disabled",false); 
	 }
	CurntRes=$(ths).closest("td");var tdId=$(ths).closest("td").attr("testsmpl")||'';
	var JsonStr=tdId?JSON.parse(tdId):{aphd_tst_smp1:0,aphd_tst_smp2:0,aphd_tst_smp3:0,aphd_tst_smp4:0,"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false};
	$("#ta1Smpl").val(JsonStr.aphd_tst_smp1),$("#ta2Smpl").val(JsonStr.aphd_tst_smp2),$("#tb1Smpl").val(JsonStr.aphd_tst_smp3),$("#tb2Smpl").val(JsonStr.aphd_tst_smp4)
	$.each(JsonStr,(key,val)=>{
		if(typeof val=="boolean"){ 
		if(isRcvdAuth&&val){
				$("["+key+"]").prop("disabled",val);
		 }
		 else{
				$("["+key+"]").prop("disabled",false);	 
		 }
		$("["+key+"]").prop("checked",val);
		}
	});
	if(!isRcvdAuth)
	 $("#myModalSample [tst_smpl_one]").prop("checked",true);
	$("#myModalSample").modal('show');
}


function saveTheJsonInTr(){
	var isRcvdAuth=(+$(CurntRes).closest("tr").attr("rcvdauth")||0);
	var totSamplWgt=Number($("#ta1Smpl").val())+Number($("#ta2Smpl").val())+Number($("#tb1Smpl").val())+Number($("#tb2Smpl").val());
	var Jsn={"tst_smpl_one":false,"tst_smpl_two":false,"tst_smpl_three":false,"tst_smpl_four":false,aphd_tst_smp1:$("#ta1Smpl").val(),aphd_tst_smp2:$("#ta2Smpl").val(),aphd_tst_smp3:$("#tb1Smpl").val(),aphd_tst_smp4:$("#tb2Smpl").val()};
	$(CurntRes).find("input").val(totSamplWgt.toFixed(2));
	$.each(Jsn,(key,val)=>{
		if(typeof val=="boolean"){ 
			Jsn[key]=$("#myModalSample ["+key+"]").prop("checked");
		}
	});
	CurntRes.attr("testsmpl",JSON.stringify(Jsn));
	if(isRcvdAuth){
		var smpIsd={smp1:(Jsn.tst_smpl_one?1:0),smp2:(Jsn.tst_smpl_two?1:0),smp3:(Jsn.tst_smpl_three?1:0),smp4:(Jsn.tst_smpl_four?1:0)};
		var docNo=$("#docNoOfCst").val(),treeNos=$('td:eq(5)',crntOfIsedPrtyTr).html()||'';;
		var qryUpdater=[];
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp1+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='1' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp2+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='2' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp3+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='3' ")
		qryUpdater.push("update [test_samples] set [ts_smp_isd]='"+smpIsd.smp4+"' where [ts_cst_doc_no]='"+docNo+"' and [ts_tree_no]='"+treeNos+"' and [ts_smp_no]='4' ")
		
		var id=$(CurntRes).closest("tr").find(":checkbox").attr("supprimid")||0;
	AjaxController.saveTheCastdPrtyOfEdit(id,JSON.stringify(Jsn),qryUpdater,rtnsvereesofaloy);	
		function rtnsvereesofaloy(res){
			if(res)
			$("#myModalSample").modal('hide');
		}
	   }
	else{
		$("#myModalSample").modal('hide');
	}
	calculationOfSubPrcs();
}

var tooltipOption={
		placement:'top',	
		btnOkLabel:'Auth',
		btnOkClass:'btn btn-sm btn-primary',
		btnCancelLabel:'Save',
		btnCancelClass:'btn btn-sm btn-success',
		title:'Do You Authorize..?',
		onConfirm : function(evt,ths) {
			  $(ths).closest("td").css({background:'#004274'});
			  $(ths).prop("readonly",true);
			  if(+$(ths).closest("tr").attr("rcvdauth")&& $(ths).attr("auth")!="1"){
				  saveorAuthDustSmpl($(ths),1);
				  }
			  $(ths).attr("auth","1");
		  },
			onCancel : function(evt,ths) {
				 if(!(+$(ths).closest("tr").attr("rcvdauth"))){
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
$(function(){
	$("table").delegate(".prtyTcvdInMelt","click",function(){
		issPrtyCal(this);
	});
	$(".pwdrmtlInMelt").confirmation(tooltipOption);	
});

var crntOfIsedPrtyTr;
function issPrtyCal(ths){
	var tr=$(ths).closest("tr");
	var isRcvdAuth=(+tr.attr("rcvdauth")||0);
	crntOfIsedPrtyTr=tr;
	var jsonOfIsedAly=$("td:has(.tstSmpllInMelt)",tr).attr("testsmpl");
	if(jsonOfIsedAly){
		var json=JSON.parse(jsonOfIsedAly);
		$("#ta1tstIssedSmpe").html(json.aphd_tst_smp1);$("#tb1tstIssedSmpe").html(json.aphd_tst_smp3);$("#ta2tstIssedSmpe").html(json.aphd_tst_smp2);
		$("#tb2tstIssedSmpe").html(json.aphd_tst_smp4);
	}
	else{
		$("#ta1tstIssedSmpe,#tb1tstIssedSmpe,#ta2tstIssedSmpe,#tb2tstIssedSmpe").html("");
	}
	var td=$(ths).attr("spmlprty");
	if(td){
		var json=JSON.parse(td);
		$("#ta1tstPrty").val(json.aphd_tstd_prty1);$("#tb1tstPrty").val(json.aphd_tstd_prty2);
		$("#ta2tstPrty").val(json.aphd_tstd_prty3);$("#tb2tstPrty").val(json.aphd_tstd_prty4);
		var ind=0;
		  if(isRcvdAuth){
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
	var isRcvdAuth=(+crntOfIsedPrtyTr.attr("rcvdauth")||0);
	var givenPrty={aphd_tstd_prty1:$("#ta1tstPrty").val(),aphd_tstd_prty2:$("#tb1tstPrty").val(),aphd_tstd_prty3:$("#ta2tstPrty").val(),
	aphd_tstd_prty4:$("#tb2tstPrty").val()};
	var docNo=$("#DocNoInSupPrcs").val();
	var collection=$(".rtnPrtyies").toArray().map(s=>Number($(s).val())||null).filter(s=>s!=null);
	var min=Math.min.apply(null,collection)||0;
	$(crntOfIsedPrtyTr).find(".prtyTcvdInMelt").val(min.toFixed(2));
	$(crntOfIsedPrtyTr).find(".prtyTcvdInMelt").attr("spmlprty",JSON.stringify(givenPrty));
	var treeNos=$('.trfTypInMelt',crntOfIsedPrtyTr).text()||'',isdPrty=$(".prtyInMelt",crntOfIsedPrtyTr).text()||'91.70';
	if(isRcvdAuth){
		var qryUpdater=[];
		var primid=crntOfIsedPrtyTr.attr("supprimid")||0;
		qryUpdater.push("update sub_melt_dtl set [smd_rcvd_prty]='"+min+"',[smd_rcvd_prty_jsn]='"+JSON.stringify(givenPrty)+"' where smd_id="+primid+" ");
		AjaxController.updatecastprcssDustAuthsts(qryUpdater.join(" "),()=>{
		$("#myPrtySample").modal('hide');	
		});
	
	}
	else{
	$("#myPrtySample").modal('hide');
	}
}

function saveorAuthDustSmpl(ths,auth){

	var tr=$(ths).closest("tr"),wrkCd=$("[id*=wrkCdOfSubPrcs]:visible").val();
	var primId=tr.attr("supprimid")||0,prty=$('.prtyInMelt',tr).text()||'',prtyrcvd=$(".prtyTcvdInMelt",tr).val()||'',docno=$("#DocNoInSupPrcs").val(),balwgt=$(".blwgtInMelt",tr).val();
	var pwdr=(+ths.val()||0),totRcvdWgt=$("#rcvdtotWgtOfSubPrcs").val(),totBalWgt=$("#rbalWgtOfSubPrcs").val(),date=$("#dateofSubProcess").html().split(" ")[0];
	var totPwdr=((+ths.val()||0)+(+ths.attr("placeholder")||0)).toFixed(2),dptCd=$("#dptCdOfSubPrcs").val(),cmyCd=$("#cmyCdOfSupPrcs").val(),strCd=$("#strCdOfSupPrcs").val();
	exptPrty=prtyrcvd||prty;
	var qry="update [sub_prcs_hdr] set [sph_rcvd_wgt]='"+totRcvdWgt+"' ,[sph_bal_wgt]='"+totBalWgt+"' where sph_prcs_no='"+docno+"' " +
	" update sub_melt_dtl set [smd_bal_wgt]='"+balwgt+"',[smd_dust_mtl]='"+totPwdr+"',[smd_dust_auth]="+auth+" where smd_id="+primId+" " ;
	if(+ths.val()){
		qry+="update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+pwdr+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prty+"' and stm_stk_trn_typ='Melting Issue' and stm_stk_crt_id='"+wrkCd+"' " +
								" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' " +
				" update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+pwdr+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+exptPrty+"' and stm_stk_trn_typ='PowderMetal' " +
		" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
		" values ('"+cmyCd+"','"+dptCd+"','','"+pwdr+"','"+date+"','"+adminId+"','PowderMetal','"+date+"','"+adminId+"','"+exptPrty+"','Powder','"+strCd+"')";
	}
	AjaxController.updatecastprcssDustAuthsts(qry,()=>{
		location.reload();
	});
}