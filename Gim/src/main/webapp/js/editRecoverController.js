/**
 * 
 */
function Recover(){
	this.cmycd=$("#cmyCdOfRcvyProcs").val();
	this.strcd=$("#strCdOfRcvyProcs").val();
	this.dptcd=$("#fromDptOfRcvyPrcs").val();
	this.strttoend=$("#strtoEndDate").val()||'';
	this.docno=$("#dcNumberINRcvyPrcs").val();
	this.wrkcd=$("[id*=wrkCdOfRcvyPrcs]:visible").val()||'';
	this.dscr=$("#dscrOfRecovry").val()||"";
	this.wrktyp=$("#wrkTypOfDcPrcs").val();
}

function totvaluecalculator(){
	var total=$(".childCheckBox:checked").toArray().reduce((old,nw)=>{
		var tr=$(nw).closest("tr");
		old.pure+=(+tr.find(".puregoldoftr").val()||0);
		old.rcvymtl+=(+tr.find(".rvrymtloftr").val()||0);
		old.bal+=(+tr.find(".balwgtoftr").html()||0);
		return old;
	},{pure:0,rcvymtl:0,bal:0});
	$("#metalWeight").val(total.pure.toFixed(2));$("#rrcvdMtlWgt").val(total.rcvymtl.toFixed(2));
	$("#totalbalwgt").val(total.bal.toFixed(2));
}
/////////////////////////// Saving Detail Process ////////////////////////////////
function beforesavingValidate(){
	var rc=new Recover();
	if(rc.docno!=""&&rc.cmycd!=""&&rc.strcd!=""&&rc.wrkcd!=""&&rc.dptcd!=""&&$(".childCheckBox:checked").length>0){
		AfterValidationOfSave();
	}
	else{
		if(rc.docno==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Enter Document Number</div>');$("#hider12").fadeOut(3500);	
		}
		else if(rc.dptcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select DepartMent</div>');$("#hider12").fadeOut(3500);		
		}
		else if(rc.wrkcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Worker Name</div>');$("#hider12").fadeOut(3500);		
		}
		else if(rc.cmycd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Company</div>');$("#hider12").fadeOut(3500);		
		}
		else if(rc.strcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Store</div>');$("#hider12").fadeOut(3500);		
		}
		else{
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Records</div>');$("#hider12").fadeOut(3500);	
			}
	}
}
function AfterValidationOfSave(){
	var rc=new Recover(),totpure=$("#metalWeight").val(),torcvmtl=$("#rrcvdMtlWgt").val(),totbalwgt=$("#totalbalwgt").val(),isddauth=$("#isdauthVal").val()||1;
	if(rc.docno!=""&&rc.cmycd!=""&&rc.strcd!=""&&rc.wrkcd!=""&&rc.dptcd!=""&&$(".childCheckBox:checked").length>0){
		$("#saveBtnInIntlTrf").addClass("disabled");[date]=$("#dateINMainPrcs").val().split(" ");
		$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait..</div>');
		var InsetOrUpdate=[],isnew=false;
		 var InsertQery="INSERT INTO [rcvy_hdr_dtl] ([rhd_bal] ,[rhd_cmy_cd] ,[rhd_cnvt_rqd_pty] ,[rhd_crt_dt] ,[rhd_crt_id] ,[rhd_doc_no] ,[rhd_dpt_cd] ,[rhd_dscr] ,[rhd_end_dt] ,[rhd_iss_auth] ,[rhd_mtl_prty]" +
		 		" ,[rhd_rcvd_auth] ,[rhd_rcvy] ,[rhd_rcvy_bal] ,[rhd_rcvy_mtl] ,[rhd_rmrk] ,[rhd_rqd_prty] ,[rhd_str_cd] ,[rhd_strt_dt] ,[rhd_sts] ,[rhd_updt_dt] ,[rhd_wrk_cd] ,[rhd_pure_gold_wgt],rhd_rm_frm_rcvy,rhd_pg_rcvd,rhd_pg_bal,rhd_wrk_typ) VALUES ";
		var InsetQryOfEmpStk="INSERT INTO [rcvy_emp_stk] ([res_bal] ,[res_cmy_cd] ,[res_cnvt_rqd_pty] ,[res_crt_dt] ,[res_crt_id] ,[res_dpt_cd] ,[res_dscr] ,[res_end_dt] ,[res_mtl_prty] ,[res_pure_gold_wgt]" +
				" ,[res_rcvy] ,[res_rcvy_bal] ,[res_rcvy_mtl] ,[res_rmrk] ,[res_rqd_prty] ,[res_str_cd] ,[res_strt_dt] ,[res_updt_dt] ,[res_wrk_cd] ,[res_rm_frm_rcvy],res_pg_rcvd,res_pg_bal,res_wrk_typ) VALUES "	
		 $(".childCheckBox:checked").toArray().forEach(function(chek){
				var tr=$(chek).closest("tr"),primId=$(chek).val();
				var bal=tr.find(".balwgtoftr").html(),cnvtrqprty=tr.find(".convtprtyoftr").val(),dcsroftr=tr.find(".dcsroftr").val(),
				strtdt=tr.find(".startdateoftr").val(),enddt=tr.find(".enddatepoftr").val(),mtlprty=tr.find(".mtlprtyoftr").val(),rcvry=tr.find(".rvcyoftr").val(),rmvefrmrcvy=tr.find(".rmvefrmrcvyftr").val(),
				rcvybal=tr.find(".rcvybaloftr").val(),rcvrymtl=tr.find(".rvrymtloftr").val(),rqdprty=tr.find(".rqdprtyoftr").val(),rmrk=tr.find(".remarkoftr").val(),puregld=tr.find(".puregoldoftr").val(),
				rcvdpg=tr.find(".rcvdprtygoldoftr").val(),balpg=tr.find(".balprtygold").val();
				
				InsertQery+=" ('"+bal+"','"+rc.cmycd+"','"+cnvtrqprty+"','"+date+"','','"+rc.docno+"','"+rc	.dptcd+"','"+dcsroftr+"','"+enddt+"'" +
				","+isddauth+",'"+mtlprty+"',0,'"+rcvry+"','"+rcvybal+"','"+rcvrymtl+"','"+rmrk+"','"+rqdprty+"','"+rc.strcd+"','"+strtdt+"',1,'"+date+"','"+rc.wrkcd+"','"+puregld+"','"+rmvefrmrcvy+"','"+rcvdpg+"','"+balpg+"','"+rc.wrktyp+"'),";
				if(!primId){
					isnew=true;
					InsetQryOfEmpStk+=" ('"+bal+"','"+rc.cmycd+"','"+cnvtrqprty+"','"+date+"','','"+rc.dptcd+"','"+dcsroftr+"','"+enddt+"'" +
					",'"+mtlprty+"','"+puregld+"','"+rcvry+"','"+rcvybal+"','"+rcvrymtl+"','"+rmrk+"','"+rqdprty+"','"+rc.strcd+"','"+strtdt+"','"+date+"','"+rc.wrkcd+"','"+rmvefrmrcvy+"','"+rcvdpg+"','"+balpg+"','"+rc.wrktyp+"'),";
				}
				
				else{
					InsetOrUpdate.push("update rcvy_emp_stk set res_bal='"+bal+"',res_cnvt_rqd_pty='"+cnvtrqprty+"',res_dscr='"+dcsroftr+"',res_end_dt='"+enddt+"',res_mtl_prty='"+mtlprty+"',res_pure_gold_wgt='"+puregld+"'," +
							"res_rcvy='"+rcvry+"',res_rcvy_bal='"+rcvybal+"',res_rcvy_mtl='"+rcvrymtl+"',res_rmrk='"+rmrk+"',res_rqd_prty='"+rqdprty+"',res_rm_frm_rcvy='"+rmvefrmrcvy+"',res_pg_rcvd='"+rcvdpg+"',res_pg_bal='"+balpg+"' where res_id="+primId+"");	
				}
				});
			if(isnew)
			InsetOrUpdate.push(InsetQryOfEmpStk.slice(0,-1));
			InsetOrUpdate.push(InsertQery.slice(0,-1));
			InsetOrUpdate.push("INSERT INTO [dbo].[rcvy_hdr] ([rh_bal_stk] ,[rh_cmy_cd] ,[rh_crt_dt] ,[rh_crt_id] ,[rh_doc_no] ,[rh_dpt_cd] ,[rh_iss_auth] ,[rh_rcvd_auth] ,[rh_str_cd] ,[rh_sts] ,[rh_tot_cnvt_wgt] ,[rh_tot_rcvy_bal] ,[rh_tot_rcvy_mtl] ,[rh_tot_rcvy_wr] ,[rh_updt_dt] ,[rh_wrk_cd],rh_wrk_typ) VALUES " +
				"('"+totbalwgt+"','"+rc.cmycd+"','"+date+"','','"+rc.docno+"','"+rc.dptcd+"',"+isddauth+",0,'"+rc.strcd+"',1,'0','"+totpure+"','"+torcvmtl+"',0,'"+date+"','"+rc.wrkcd+"','"+rc.wrktyp+"') ")
				
		AjaxController.saveRcveyPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
		function rtnfunOfSaveRes(res){
			if(res=='success')window.location.href="recover.mm";
		}
	}
	

	
}


//////////////////// edn ....//////////////////////////////
$(function(){
	
	///////////////// Data Recover Changer Input /////////////////
	
$("#fromDptOfRcvyPrcs,#wrkCdOfRcvyPrcs,#strtoEndDate,#dscrOfRecovry,#wrkTypOfDcPrcs").on("change",function(){
	var rc=new Recover();
	if(this.id=='wrkCdOfRcvyPrcs'||this.id=='fromDptOfRcvyPrcs'){
		$("#strtoEndDate,#dscrOfRecovry").html('').selectpicker("refresh");	
	}
	if(rc.wrkcd&&rc.dptcd){
		var table = $('#recoveryTable').DataTable().clear();table.destroy();
	var wrknam=$("[id*=wrkCdOfRcvyPrcs]:visible option:selected").text()||'',dptnm=$("#fromDptOfRcvyPrcs option:selected").text()||'';	
	var trComan='<tr role="row" class="odd"> <td class="sorting_1"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes childCheckBox" value=""> <span></span> </label></td> <td id="dptcdoftr">'+dptnm+'</td> <td id="dptcdoftr">'+wrknam+'</td> <td><input class="form-control dcsroftr" value="" style="width: 130px;"></td> <td><input class="form-control puregoldoftr" value="" readonly></td> <td><input class="form-control rcvybaloftr" value="" readonly></td><td><input class="form-control rqdprtyoftr" value=""></td> <td><input class="form-control startdateoftr datepicker" value=""></td> <td><input class="form-control datepicker enddatepoftr" value=""></td> <td><input class="form-control rvcyoftr" value="" type="number" ></td> <td><input type="number" class="form-control rvrymtloftr" value=""></td> <td><input class="form-control mtlprtyoftr" type="number" value=""></td> <td><input class="form-control convtprtyoftr" readonly value=""></td> <td><input class="form-control remarkoftr" value="" style="width: 130px;"></td> <td class="balwgtoftr"></td><td><input type="number" class="form-control rmvefrmrcvyftr" value=""></td> </tr>';
		if(rc.strttoend||rc.dscr){
		var strtqrt="";
		if(rc.strttoend){
	
			[strtdate,enddate]=rc.strttoend.split(" TO ");
			strtqrt=" and res_strt_dt='"+strtdate+"' and res_end_dt='"+enddate+"'";	
		}
		var dscrqry=(rc.dscr)?" and res_dscr='"+rc.dscr+"' ":"";
		var qry="select [res_dscr] ,[res_pure_gold_wgt] ,res_rcvy_bal,res_rqd_prty,res_strt_dt,res_end_dt,res_rcvy,res_rcvy_mtl,res_mtl_prty,[res_cnvt_rqd_pty] ,[res_rmrk],res_bal ,[res_rm_frm_rcvy],res_id from rcvy_emp_stk where res_dpt_cd='"+rc.dptcd+"' and res_wrk_cd='"+rc.wrkcd+"' "+strtqrt+dscrqry+"";
		AjaxController.getDateAndDescWiseFilterRecver(qry,(data)=>{
			var result='';
			if(data&&data.length){
			data.forEach((res)=>{
				result+='<tr role="row" class="odd"> <td class="sorting_1"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes childCheckBox" value="1"> <span></span> </label></td> <td id="dptcdoftr">'+dptnm+'</td> <td id="dptcdoftr">'+wrknam+'</td> <td><input class="form-control dcsroftr" value="'+res[0]+'" style="width: 130px;"></td> <td><input class="form-control puregoldoftr" value="'+res[1]+'" readonly></td> <td><input class="form-control rcvybaloftr" old="'+res[2]+'" value="'+res[2]+'" readonly></td><td><input class="form-control rqdprtyoftr" value="'+res[3]+'" readonly></td> <td><input class="form-control startdateoftr datepicker" value="'+res[4]+'" disabled></td> <td><input class="form-control datepicker enddatepoftr" value="'+res[5]+'" disabled></td> <td><input class="form-control rvcyoftr" old="'+res[6]+'" value="" type="number" ></td> <td><input type="number" class="form-control rvrymtloftr" value="'+res[7]+'"></td> <td><input class="form-control mtlprtyoftr" type="number" value="'+res[8]+'"></td> <td><input class="form-control convtprtyoftr" readonly value="'+res[9]+'"></td> <td><input class="form-control remarkoftr" value="'+res[10]+'" style="width: 130px;"></td> <td class="balwgtoftr" old="'+res[11]+'">'+res[11]+'</td><td><input type="number" class="form-control rmvefrmrcvyftr" value="'+res[12]+'"></td> </tr>';	
			})
			}
			$("#newAddRecInTbdy").html(result);
			tablerefresh("recoveryTable");
			 $(".datepicker").datepicker();
		});
		}
		else{
			var qry="select [res_dscr] ,[res_pure_gold_wgt] ,res_strt_dt,res_end_dt from rcvy_emp_stk where res_dpt_cd='"+rc.dptcd+"' and res_wrk_cd='"+rc.wrkcd+"' order by cast(res_strt_dt as date) asc";
			AjaxController.getDateAndDescWiseFilterRecver(qry,(data)=>{
				var result={date:new Set(),dscr:new Set(),stk:0};
				if(data&&data.length){
					result=data.reduce((old,ths)=>{
					old.date.add('<option>'+ths[2]+' TO '+ths[3]+'</option>');
					if(ths[0])
					old.dscr.add('<option>'+ths[0]+'</option>');
					old.stk+=ths[1]||0;
					return old;
				},{date:new Set(["<option value=''>Select Date</option>"]),dscr:new Set(["<option value=''>Select Description</option>"]),stk:0})
				}
				$("#strtoEndDate").html([...result.date]).selectpicker("refresh");$("#dscrOfRecovry").html([...result.dscr]).selectpicker("refresh");
				$("#balStkOfMainPrcs").val(result.stk.toFixed(2));
			});	
	$("#newAddRecInTbdy").html(trComan);	
	tablerefresh("recoveryTable");
	 $(".datepicker").datepicker();
		}	
	}
});	
	
$("#newAddRecInTbdy").delegate(".rvcyoftr","keyup change",function(){
	var tr=$(this).closest("tr");var rcvy=tr.find(".rcvybaloftr").attr("old")||'',
	rqdprty=tr.find(".rqdprtyoftr").val()||'',ths=$(this).val();
	if(rqdprty){
		var oldrcvr=$(this).attr("old")||0;
		var req=((+rqdprty)*((+ths)+(+oldrcvr)))||0
		tr.find(".puregoldoftr").val(req.toFixed(2));
		}
	var rcvbal=((+rcvy)+(+ths)||0).toFixed(2);
	tr.find(".rcvybaloftr").val(rcvbal);
	balwgtCalculation(this);
	totvaluecalculator();
});	
$("#newAddRecInTbdy").delegate(".rvrymtloftr,.mtlprtyoftr","keyup change",function(){
	balwgtCalculation(this);
});		

function balwgtCalculation(ths){
	var tr=$(ths).closest("tr");var rcvymtl=tr.find(".rvrymtloftr").val()||'',rcvdbalrcvy=tr.find(".rcvybaloftr").val(),
	mtlprty=tr.find(".mtlprtyoftr").val()||'',rqdprty=tr.find(".rqdprtyoftr").val()||'';
	if(rqdprty){
		var req=(((+rcvymtl)*(+mtlprty))/rqdprty)||0;
		tr.find(".convtprtyoftr").val(req.toFixed(2));
		var bal=((+rcvdbalrcvy)-req)||0
		tr.find(".balwgtoftr").html(bal.toFixed(2));
		tr.find(".balwgtoftr").attr("old",bal.toFixed(2));
		totvaluecalculator();
		}
}
$(".parentCheckBox").on("change",function(){
	this.checked?$(".childCheckBox").prop("checked",true):$(".childCheckBox").prop("checked",false);
	totvaluecalculator();
});
$("#newAddRecInTbdy").delegate(".childCheckBox","change",function(){
	$(".childCheckBox:not(:checked)").length?$(".parentCheckBox").prop("checked",false):$(".parentCheckBox").prop("checked",true);
	totvaluecalculator();
});
	
$("#newAddRecInTbdy").delegate(".dcsroftr","keypress",function(evt){
	var qry="select distinct top 50 rhd_dscr from rcvy_hdr_dtl where rhd_dscr like '%"+this.value+"%' "
AjaxController.getSearchedDescrptionForRecovery(qry,(data)=>{
	if(data&&data.length){
		$(this).autocomplete({
			source : data
			});		
	}
});
});	
	
$("#newAddRecInTbdy").delegate(".remarkoftr","keypress",function(evt){
	var qry="select distinct top 50 rhd_rmrk from rcvy_hdr_dtl where rhd_rmrk like '%"+this.value+"%' "
AjaxController.getSearchedRemarksForRecovery(qry,(data)=>{
	if(data&&data.length){
		$(this).autocomplete({
			source : data
			});		
	}
});
});	

$("#newAddRecInTbdy").delegate(".rmvefrmrcvyftr","keyup change",function(evt){
	var tr=$(this).closest("tr"),bal=tr.find(".balwgtoftr").attr("old")||0;
	var rcvy=(+bal)-($(this).val());
	tr.find(".balwgtoftr").html(rcvy.toFixed(2));
});	

	
	
	
	
	
	
	
})