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
		if($("#isauthVal").val()=="1"){
			$("#saveBtnInIntlTrf").addClass("disabled");
			$("#saveBtnInIntlTrf").addClass("btn-circlesuc");
			AfterValidationOfSave();		
		}
		else{
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
			'<button type="button" onclick="AfterValidationOfSave()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#saveSuccesRes").html(" ")\'>No</button></div>');		
		}
}
function AfterValidationOfSave(){
	var findGC=$("#fromDptOfRcvyPrcs option").get().find(s=>(s.innerText.search(/gc/ig)>-1)).value||'10003',docDt=$("#dateINMainPrcs").val();
	var rc=new Recover(),totpure=$("#metalWeight").val(),torcvmtl=$("#rrcvdMtlWgt").val(),totbalwgt=$("#totalbalwgt").val(),isddauth=$("#isdauthVal").val()||1;
	if(rc.docno!=""&&rc.cmycd!=""&&rc.strcd!=""&&rc.wrkcd!=""&&rc.dptcd!=""&&$(".childCheckBox:checked").length>0){
		var isdTknGC=$("#istaknbygc")[0].checked?"YES":"NO";
		AjaxController.checkrecvryPrcsDocInDb(rc.docno,(data)=>{
			if(data&&data.length){
				$("#saveSuccesRes").html('<div class="alert alert-warning" id="Hider14">Entered Doc Number Already Used...</div>');$("#Hider14").fadeOut(3500);		
			}
			else{
				$("#saveBtnInIntlTrf").addClass("disabled");[date]=$("#dateINMainPrcs").val().split(" ");
				$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait..</div>');
				var InsetOrUpdate=[],isnew=false;
				 var InsertQery="INSERT INTO [rcvy_hdr_dtl] ([rhd_bal] ,[rhd_cmy_cd] ,[rhd_cnvt_rqd_pty] ,[rhd_crt_dt] ,[rhd_crt_id] ,[rhd_doc_no] ,[rhd_dpt_cd] ,[rhd_dscr] ,[rhd_end_dt] ,[rhd_iss_auth] ,[rhd_mtl_prty]" +
				 		" ,[rhd_rcvd_auth] ,[rhd_rcvy] ,[rhd_rcvy_bal] ,[rhd_rcvy_mtl] ,[rhd_rmrk] ,[rhd_rqd_prty] ,[rhd_str_cd] ,[rhd_strt_dt] ,[rhd_sts] ,[rhd_updt_dt] ,[rhd_wrk_cd] ,[rhd_pure_gold_wgt],rhd_rm_frm_rcvy,rhd_pg_rcvd,rhd_pg_bal,rhd_wrk_typ) VALUES ";
				var InsetQryOfEmpStk="INSERT INTO [rcvy_emp_stk] ([res_bal] ,[res_cmy_cd] ,[res_cnvt_rqd_pty] ,[res_crt_dt] ,[res_crt_id] ,[res_dpt_cd] ,[res_dscr] ,[res_end_dt] ,[res_mtl_prty] ,[res_pure_gold_wgt]" +
						" ,[res_rcvy] ,[res_rcvy_bal] ,[res_rcvy_mtl] ,[res_rmrk] ,[res_rqd_prty] ,[res_str_cd] ,[res_strt_dt] ,[res_updt_dt] ,[res_wrk_cd] ,[res_rm_frm_rcvy],res_pg_rcvd,res_pg_bal,res_wrk_typ) VALUES "	
				var totRCVFORINTL=0;
				$(".childCheckBox:checked").toArray().forEach(function(chek){
						var tr=$(chek).closest("tr"),primId=$(chek).val();
						var bal=tr.find(".balwgtoftr").html(),cnvtrqprty=tr.find(".convtprtyoftr").val(),dcsroftr=tr.find(".dcsroftr").val(),
						strtdt=tr.find(".startdateoftr").val(),enddt=tr.find(".enddatepoftr").val(),mtlprty=tr.find(".mtlprtyoftr").val()||0,rcvry=tr.find(".rvcyoftr").val(),rmvefrmrcvy=tr.find(".rmvefrmrcvyftr").val(),
						rcvybal=tr.find(".rcvybaloftr").val(),rcvrymtl=tr.find(".rvrymtloftr").val()||0,rqdprty=tr.find(".rqdprtyoftr").val(),rmrk=tr.find(".remarkoftr").val(),puregld=tr.find(".puregoldoftr").val(),
						rcvdpg=tr.find(".rcvdprtygoldoftr").val(),balpg=tr.find(".balprtygold").val(),oldrcvy=tr.find(".rvrymtloftr").attr("old")||0;
						totRCVFORINTL+=(+rcvrymtl||0);
						InsertQery+=" ('"+bal+"','"+rc.cmycd+"','"+cnvtrqprty+"','"+date+"','','"+rc.docno+"','"+rc.dptcd+"','"+dcsroftr+"','"+enddt+"'" +
						","+isddauth+",'"+mtlprty+"',0,'"+rcvry+"','"+rcvybal+"','"+rcvrymtl+"','"+rmrk+"','"+rqdprty+"','"+rc.strcd+"','"+strtdt+"',1,'"+date+"','"+rc.wrkcd+"','"+puregld+"','"+rmvefrmrcvy+"','"+rcvdpg+"','"+balpg+"','"+rc.wrktyp+"'),";
						if(!primId){
							isnew=true;
							InsetQryOfEmpStk+=" ('"+bal+"','"+rc.cmycd+"','"+cnvtrqprty+"','"+date+"','','"+rc.dptcd+"','"+dcsroftr+"','"+enddt+"'" +
							",'"+mtlprty+"','"+puregld+"','"+rcvry+"','"+rcvybal+"','"+rcvrymtl+"','"+rmrk+"','"+rqdprty+"','"+rc.strcd+"','"+strtdt+"','"+date+"','"+rc.wrkcd+"','"+rmvefrmrcvy+"','"+rcvdpg+"','"+balpg+"','"+rc.wrktyp+"'),";
							InsetOrUpdate.push("update TOP(1) stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+rcvry+"' as decimal(20,3))) where stm_stk_crt_id='"+rc.wrkcd+"' and stm_stk_trn_typ like '%MainProcess Issue%' and" +
									" stm_rcvd_stk_prty='"+rqdprty+"' and stm_dpt_cd='"+rc.dptcd+"' and stm_cmy_cd='"+rc.cmycd+"' and cast(stm_rcvd_stk_wgt as decimal(20,3))>0 ");
							
							InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvry+"' as decimal(20,3))) where stm_stk_crt_id='"+rc.wrkcd+"' and stm_stk_trn_typ='RecoveryIssue' and" +
									" stm_rcvd_stk_prty='"+rqdprty+"' and stm_dpt_cd='"+rc.dptcd+"' and stm_cmy_cd='"+rc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst" +
									"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
									" values ('"+rc.wrkcd+"','"+rc.wrkcd+"','"+date+"','"+date+"','"+rqdprty+"','RECOVERY','RecoveryIssue','"+rc.cmycd+"','"+rc.dptcd+"','"+rcvry+"')");
						}
						
						else{
							/*var crctRcvy=(+(((+rcvrymtl)*(+mtlprty))/rqdprty).toFixed(3))||0;
							var totrcvdfrmwrk=(+crctRcvy||0)+(+rmvefrmrcvy||0);
							InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+totrcvdfrmwrk+"' as decimal(20,3))) where stm_stk_crt_id='"+rc.wrkcd+"' and stm_stk_trn_typ='RecoveryIssue' and" +
									" stm_rcvd_stk_prty='"+rqdprty+"' and stm_dpt_cd='"+rc.dptcd+"' and stm_cmy_cd='"+rc.cmycd+"' ");
							var ExpPrty=rqdprty;
							if(+mtlprty&&((+mtlprty)<(+rqdprty)))ExpPrty=mtlprty;
							if(isdTknGC=="NO"){
							InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+crctRcvy+"' as decimal(20,3))) where stm_stk_trn_typ='RecoveryRecieved' and" +
									" stm_rcvd_stk_prty='"+ExpPrty+"' and stm_dpt_cd='"+rc.dptcd+"' and stm_cmy_cd='"+rc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst" +
									"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
									" values ('"+adminId+"','"+adminId+"','"+date+"','"+date+"','"+ExpPrty+"','Recovery','RecoveryRecieved','"+rc.cmycd+"','"+rc.dptcd+"','"+crctRcvy+"')");
							if(+rmvefrmrcvy){
							InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rmvefrmrcvy+"' as decimal(20,3))) where stm_stk_trn_typ='Non-Recovery' and" +
									" stm_rcvd_stk_prty='"+ExpPrty+"' and stm_dpt_cd='"+rc.dptcd+"' and stm_cmy_cd='"+rc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst" +
									"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
									" values ('"+adminId+"','"+adminId+"','"+date+"','"+date+"','"+ExpPrty+"','Recovery','Non-Recovery','"+rc.cmycd+"','"+rc.dptcd+"','"+rmvefrmrcvy+"')");
							}
						}*/
							if(+rcvry){
								InsetOrUpdate.push("update TOP(1) stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+rcvry+"' as decimal(20,3))) where stm_stk_crt_id='"+rc.wrkcd+"' and stm_stk_trn_typ like '%MainProcess Issue%' and" +
										" stm_rcvd_stk_prty='"+rqdprty+"' and stm_dpt_cd='"+rc.dptcd+"' and stm_cmy_cd='"+rc.cmycd+"' and cast(stm_rcvd_stk_wgt as decimal(20,3))>0 ");
								
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+rcvry+"' as decimal(20,3))) where stm_stk_crt_id='"+rc.wrkcd+"' and stm_stk_trn_typ='RecoveryIssue' and" +
										" stm_rcvd_stk_prty='"+rqdprty+"' and stm_dpt_cd='"+rc.dptcd+"' and stm_cmy_cd='"+rc.cmycd+"' if @@ROWCOUNT=0 insert into stk_mst" +
										"(stm_stk_crt_id,stm_stk_updt_id,stm_stk_updt_dt,stm_stk_crt_dt,stm_rcvd_stk_prty,stm_stk_itm_typ,[stm_stk_trn_typ] ,[stm_cmy_cd] ,[stm_dpt_cd],[stm_rcvd_stk_wgt]) " +
										" values ('"+rc.wrkcd+"','"+rc.wrkcd+"','"+date+"','"+date+"','"+rqdprty+"','RECOVERY','RecoveryIssue','"+rc.cmycd+"','"+rc.dptcd+"','"+rcvry+"')");
							
							}
							var totrcvyd=((+oldrcvy||0)+(+rcvrymtl||0)).toFixed(2);
						InsetOrUpdate.push("update rcvy_emp_stk set res_bal='"+bal+"',res_cnvt_rqd_pty='"+cnvtrqprty+"',res_dscr='"+dcsroftr+"',res_end_dt='"+enddt+"',res_mtl_prty='"+mtlprty+"',res_pure_gold_wgt='"+puregld+"'," +
									"res_rcvy='"+rcvry+"',res_rcvy_bal='"+rcvybal+"',res_rcvy_mtl='"+totrcvyd+"',res_rmrk='"+rmrk+"',res_rqd_prty='"+rqdprty+"',res_rm_frm_rcvy='"+rmvefrmrcvy+"',res_pg_rcvd='"+rcvdpg+"',res_pg_bal='"+balpg+"' where res_id="+primId+"");	
						}
						});
					if(isnew)
					InsetOrUpdate.push(InsetQryOfEmpStk.slice(0,-1));
					InsetOrUpdate.push(InsertQery.slice(0,-1));
					if(isdTknGC=="YES"){
						InsetOrUpdate.push("INSERT INTO [intl_trf_hdr] ([ith_crt_dt] ,[ith_crt_id] ,[ith_doc_no] ,[ith_frm_dpt_cd] ,[ith_iss_auth] ,[ith_to_dpt_cd] ,[ith_tot_iss_wgt] ,[ith_tot_rcvd_wgt] ,[ith_trf_sts] ,[ith_trf_typ] ,[ith_updt_dt] ,[ith_updt_id] ,[ith_bom_isd_wgt] ,[ith_cmy_cd]) VALUES " +
								" ('"+date+"','"+adminId+"','RCVY"+rc.docno+"','"+rc.dptcd+"',1,'"+findGC+"','"+totRCVFORINTL+"','"+totRCVFORINTL+"','1','Recovery','"+date+"','"+adminId+"','0','"+rc.cmycd+"')")	;	
					}
					
					InsetOrUpdate.push("INSERT INTO [dbo].[rcvy_hdr] (rh_is_tkn_by_gc,[rh_bal_stk] ,[rh_cmy_cd] ,[rh_crt_dt] ,[rh_crt_id] ,[rh_doc_no] ,[rh_dpt_cd] ,[rh_iss_auth] ,[rh_rcvd_auth] ,[rh_str_cd] ,[rh_sts] ,[rh_tot_cnvt_wgt] ,[rh_tot_rcvy_bal] ,[rh_tot_rcvy_mtl] ,[rh_tot_rcvy_wr] ,[rh_updt_dt] ,[rh_wrk_cd],rh_wrk_typ,[rh_doc_dt]) VALUES " +
						"('"+isdTknGC+"','"+totbalwgt+"','"+rc.cmycd+"','"+date+"','','"+rc.docno+"','"+rc.dptcd+"',"+isddauth+",0,'"+rc.strcd+"',1,'0','"+totpure+"','"+torcvmtl+"',0,'"+date+"','"+rc.wrkcd+"','"+rc.wrktyp+"','"+docDt+"') ")
						
				AjaxController.saveRcveyPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
				
			}
		})
			function rtnfunOfSaveRes(res){
			if(res=='success')window.location.href="recover.mm";
		}
	}
	
	else{
		//rc.docno!=""&&rc.cmycd!=""&&rc.strcd!=""&&rc.wrkcd!=""&&rc.dptcd!=""&&$(".childCheckBox:checked").length>0
		if(rc.dptcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="Hider12">Select From Department </div>');$("#Hider12").fadeOut(3500);
		}
		else if(rc.cmycd==""){
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="Hider2">Select Company </div>');$("#Hider2").fadeOut(3500);
		}
		else if(rc.wrkcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="Hider3">Select Worker Name </div>');$("#Hider3").fadeOut(3500);	
		}
		else if(rc.strcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="Hider13">Select Process </div>');$("#Hider13").fadeOut(3500);
		}
		else if(rc.docno==""){
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="Hider14">Enter Doc Number </div>');$("#Hider14").fadeOut(3500);	
		}
		else{
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="Hider124">Select Records </div>');$("#Hider124").fadeOut(3500);		
		}
		$("#saveBtnInIntlTrf").removeClass("disabled");
		$("#saveBtnInIntlTrf").removeClass("btn-circlesuc");
	}
	
}


//////////////////// edn ....//////////////////////////////
$(function(){
	
	///////////////// Data Recover Changer Input /////////////////
	
$("#fromDptOfRcvyPrcs,#wrkCdOfRcvyPrcs,#strtoEndDate,#dscrOfRecovry,#wrkTypOfDcPrcs").on("change",function(){
	var rc=new Recover(),crntIdd=this.id;
	if(crntIdd=='wrkCdOfRcvyPrcs'||crntIdd=='fromDptOfRcvyPrcs'){
		$("#strtoEndDate,#dscrOfRecovry").html('').selectpicker("refresh");	
	}
	if(rc.wrkcd&&rc.dptcd){
		var table = $('#recoveryTable').DataTable().clear();table.destroy();
	var wrknam=$("[id*=wrkCdOfRcvyPrcs]:visible option:selected").text()||'',dptnm=$("#fromDptOfRcvyPrcs option:selected").text()||'';	
	var trComan='<tr role="row" class="odd"> <td class="sorting_1"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes childCheckBox" value=""> <span></span> </label></td> <td id="dptcdoftr">'+dptnm+'</td> <td id="dptcdoftr">'+wrknam+'</td> <td><input class="form-control dcsroftr" value="" style="width: 130px;"></td> <td><input class="form-control puregoldoftr" value="" readonly></td> <td><input class="form-control rcvybaloftr" value="" readonly></td><td><input class="form-control rqdprtyoftr" value=""></td> <td><input class="form-control startdateoftr datepicker" value=""></td> <td><input class="form-control datepicker enddatepoftr" value=""></td> <td><input class="form-control rvcyoftr" value="" type="number" step="any" ></td> <td><input type="number" step="any" readonly class="form-control rvrymtloftr" value=""></td> <td><input class="form-control mtlprtyoftr" readonly type="number" step="any" value=""></td><td><input class="form-control rcvdprtygoldoftr" type="number" step="any" value="" readonly></td><td><input class="form-control balprtygold" type="number" step="any" value="" readonly></td><td><input class="form-control convtprtyoftr" readonly value=""></td> <td><input class="form-control remarkoftr" value="" style="width: 130px;"></td> <td class="balwgtoftr"></td><td><input type="number" step="any" readonly class="form-control rmvefrmrcvyftr" value=""></td> </tr>';
		if(rc.strttoend||rc.dscr){
		var strtqrt="";
		if(rc.strttoend){
		strtqrt=" and res_id in ("+rc.strttoend.join()+") ";	
		}
		var dscrqry="";
		if(rc.dscr){
			var data=rc.dscr.map(s=>"'"+s+"'").join();
			dscrqry=" and res_dscr in ("+data+") ";
			};
		var qry="select [res_dscr] ,[res_pure_gold_wgt] ,res_rcvy_bal,res_rqd_prty,res_strt_dt,res_end_dt,res_rcvy,res_rcvy_mtl,res_mtl_prty,[res_cnvt_rqd_pty] ,[res_rmrk],res_bal ,[res_rm_frm_rcvy],res_id,res_pg_rcvd,res_pg_bal from rcvy_emp_stk where res_dpt_cd='"+rc.dptcd+"' and res_wrk_cd='"+rc.wrkcd+"' "+strtqrt+dscrqry+"";
		AjaxController.getDateAndDescWiseFilterRecver(qry,(data)=>{
			var result='',dscrLidt=new Set();
			if(data&&data.length){
			data.forEach((res)=>{
				dscrLidt.add("<option>"+res[0]+"</option>");
				var rdOnly=(EmpTYp!='Admin')?"readonly":"";
				result+='<tr role="row" class="odd" oldcnvt="'+res[9]+'"> <td class="sorting_1"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes childCheckBox" value="'+res[13]+'"> <span></span> </label></td> <td id="dptcdoftr">'+dptnm+'</td> <td id="dptcdoftr">'+wrknam+'</td> <td><input class="form-control dcsroftr" value="'+res[0]+'" style="width: 130px;"></td> <td><input class="form-control puregoldoftr" value="'+res[1]+'" readonly></td> <td><input class="form-control rcvybaloftr" old="'+res[2]+'" value="'+res[2]+'" readonly></td><td><input class="form-control rqdprtyoftr" value="'+res[3]+'" readonly></td> <td><input class="form-control startdateoftr datepicker" value="'+res[4]+'" disabled></td> <td><input class="form-control datepicker enddatepoftr" value="'+res[5]+'" disabled></td> <td><input class="form-control rvcyoftr" old="'+res[6]+'" value="" type="number" step="any" ></td> <td><input type="number" step="any" class="form-control rvrymtloftr" placeholder="'+res[7]+'" value="" old="'+res[7]+'"></td> <td><input class="form-control mtlprtyoftr" type="number" step="any"  placeholder="'+res[8]+'" value=""></td><td><input class="form-control rcvdprtygoldoftr" readonly type="number" step="any" value="'+res[14]+'" old="'+res[14]+'"></td><td ><input type="number" step="any" value="'+res[15]+'" class="form-control balprtygold" old="'+res[15]+'" readonly></td> <td><input class="form-control convtprtyoftr" readonly value="'+res[9]+'"></td> <td><input class="form-control remarkoftr" value="'+res[10]+'" style="width: 130px;"></td> <td class="balwgtoftr" old="'+res[11]+'">'+res[11]+'</td><td><input type="number" step="any" '+rdOnly+' class="form-control rmvefrmrcvyftr" placeholder="'+res[12]+'" value=""></td> </tr>';	
				});
			}
			if(crntIdd=='strtoEndDate')	$("#dscrOfRecovry").html([...dscrLidt]).selectpicker("refresh");
			$("#newAddRecInTbdy").html(result);
			tablerefresh("recoveryTable");
			 $(".datepicker").datepicker();
		});
		}
		else{
			var qry="select [res_dscr] ,[res_pure_gold_wgt] ,res_rcvy_bal,res_rqd_prty,res_strt_dt,res_end_dt,res_rcvy,res_rcvy_mtl,res_mtl_prty,[res_cnvt_rqd_pty] ,[res_rmrk],res_bal ,[res_rm_frm_rcvy],res_id,res_pg_rcvd,res_pg_bal from rcvy_emp_stk where res_dpt_cd='"+rc.dptcd+"' and res_wrk_cd='"+rc.wrkcd+"' order by cast(res_strt_dt as date) asc";
			AjaxController.getDateAndDescWiseFilterRecver(qry,(data)=>{
				var result={date:new Set(),dscr:new Set(),stk:0};
				if(data&&data.length){
					result=data.reduce((old,ths)=>{
					old.date.add('<option value="'+ths[13]+'">'+ths[4]+' TO '+ths[5]+'</option>');
					if(ths[0])
					old.dscr.add('<option>'+ths[0]+'</option>');
					old.stk+=(+ths[15]||0);
					var rdOnly=(EmpTYp!='Admin')?"readonly":"";
					trComan+='<tr role="row" class="odd" oldcnvt="'+ths[9]+'"> <td class="sorting_1"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes childCheckBox" value="'+ths[13]+'"> <span></span> </label></td> <td id="dptcdoftr">'+dptnm+'</td> <td id="dptcdoftr">'+wrknam+'</td> <td><input class="form-control dcsroftr" value="'+ths[0]+'" style="width: 130px;"></td> <td><input class="form-control puregoldoftr" value="'+ths[1]+'" readonly></td> <td><input class="form-control rcvybaloftr" old="'+ths[2]+'" value="'+ths[2]+'" readonly></td><td><input class="form-control rqdprtyoftr" value="'+ths[3]+'" readonly></td> <td><input class="form-control startdateoftr datepicker" value="'+ths[4]+'" disabled></td> <td><input class="form-control datepicker enddatepoftr" value="'+ths[5]+'" disabled></td> <td><input class="form-control rvcyoftr" old="'+ths[6]+'" value="" type="number" step="any" ></td> <td><input type="number" step="any" class="form-control rvrymtloftr" placeholder="'+ths[7]+'" value="" old="'+ths[7]+'"></td> <td><input class="form-control mtlprtyoftr" type="number" step="any"  placeholder="'+ths[8]+'" value=""></td><td><input class="form-control rcvdprtygoldoftr" readonly type="number" step="any" value="'+ths[14]+'" old="'+ths[14]+'"></td><td ><input type="number" step="any" value="'+ths[15]+'" class="form-control balprtygold" old="'+ths[15]+'" readonly></td> <td><input class="form-control convtprtyoftr" readonly value="'+ths[9]+'"></td> <td><input class="form-control remarkoftr" value="'+ths[10]+'" style="width: 130px;"></td> <td class="balwgtoftr" old="'+ths[11]+'">'+ths[11]+'</td><td><input type="number" step="any" '+rdOnly+' class="form-control rmvefrmrcvyftr" placeholder="'+ths[12]+'" value=""></td> </tr>';	
					return old;
				},{date:new Set(["<option value=''>Select Date</option>"]),dscr:new Set(["<option value=''>Select Description</option>"]),stk:0})
				}
				$("#newAddRecInTbdy").html(trComan);	
				tablerefresh("recoveryTable");
				 $(".datepicker").datepicker();
				$("#strtoEndDate").html([...result.date]).selectpicker("refresh");
				
				$("#dscrOfRecovry").html([...result.dscr]).selectpicker("refresh");
				$("#balStkOfMainPrcs").val(result.stk.toFixed(2));
			});	
		}	
	}
});	
	
$("#newAddRecInTbdy").delegate(".rvcyoftr","keyup change",function(){
	var tr=$(this).closest("tr");var rcvy=tr.find(".rcvybaloftr").attr("old")||'',
	rqdprty=tr.find(".rqdprtyoftr").val()||'',ths=$(this).val();
	if(rqdprty){
		var oldrcvr=$(this).attr("old")||0;
		var req=((+rqdprty)*((+ths)+(+oldrcvr)))/100||0
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
	var tr=$(ths).closest("tr");var rcvymtl=tr.find(".rvrymtloftr").val()||'',rcvdbalrcvy=tr.find(".rcvybaloftr").val(),pregold=tr.find(".puregoldoftr").val()||'',
	mtlprty=(tr.find(".mtlprtyoftr").val()),rqdprty=tr.find(".rqdprtyoftr").val()||'',oldrcvymtl=tr.attr("oldcnvt")||'',oldpg=tr.find(".rcvdprtygoldoftr").attr("old")||'';
	if(rqdprty){
		var req=((((+rcvymtl)*(+mtlprty))/rqdprty)||0)+(+oldrcvymtl);
		var recvdpg=((((+rcvymtl)*(+mtlprty))/100)||0)+(+oldpg);
		tr.find(".convtprtyoftr").val(req.toFixed(2));
		tr.find(".rcvdprtygoldoftr").val(recvdpg.toFixed(2))
		var bal=((+rcvdbalrcvy)-req)||0;
		tr.find(".balwgtoftr").html(bal.toFixed(2));
		tr.find(".balwgtoftr").attr("old",bal.toFixed(2));
		var balpg=((+pregold)-(+recvdpg))||0;
		tr.find(".balprtygold").val(balpg);
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
	var rcvy=(+bal)-((+$(this).val()||0));
	tr.find(".balwgtoftr").html(rcvy.toFixed(2));
});	

	
	$("table").delegate(".rqdprtyoftr,.mtlprtyoftr","blur",function(){
		this.value=(+this.value)?(+this.value||0).toFixed(2):'';
	})
	
	
	
	
	
});



function authenticationChecker(evt){
	evt.preventDefault();
	var cmycd=$("#cmyCdOfRcvyProcs").val(),email=$("#Email1").val(),pwd=$("#password1").val();
	AjaxController.getAuthenticationCheker(email,pwd,cmycd,(data)=>{
		if(data){
			$("#loginModel").modal('hide');
			AfterValidationOfSave();
		}
		else{
		$("#logInEror").html('<div class="alert-danger" id="dtd"> Invalid Data Check..</div>');$("#dtd").fadeOut(4500);	
		}
	});
	return false;
}