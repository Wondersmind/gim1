function Finish(){
	this.cmycd=$("#cmyCdOfFnshPrcs").val();
	this.strcd=$("#strCdOfFnshPrcs").val();
	this.dptcd=$("#dptCdOfFinshPrcs").val();
	this.trgtdate=$("#targetDtOfFnshPrcs").val()||'';
	this.docno=$("#DocNoInFnshPrcs").val();
	this.wrkcd=$("[id*=wrkCdOfFnshPrcs]:visible").val()||"''";
	this.wrktyp=$("#wrkTypOfDcPrcs").val()||'';
	this.batchno=JSON.parse($("#batchNoFnshPrcs").val()||'[]');
}
var currentInput;
function totvaluecalculator(){
	var total=$(".childCheckBox:checked").toArray().reduce((old,nw)=>{
		var tr=$(nw).closest("tr");
		old.wgt+=(+tr.find("#rjctoracptwgt").val()||0);
		old.qty+=(+tr.find("#qtyoftr").html()||0);
		(tr.find("#rjctoracpt").val()=='Accept')?old.acpt+=1:old.rcjt+=1;
		return old;
	},{wgt:0,qty:0,rcjt:0,acpt:0});
	$("#totwgtofFinsh").val(total.wgt.toFixed(2));$("#totqtyofFinsh").val(total.qty);
	$("#totacptofFinsh").val(total.acpt);$("#totrjctdofFinsh").val(total.rcjt);
}
$(function(){
	
	/////////////////////////// Worker Code /////////////////////////////////
	$("#targetDtOfFnshPrcs,#jbcrdnoOfFnshPrcs,#pdtcdDtOfSubFnshPrcs,#dptCdOfFinshPrcs,#JonoDtOfSubFnshPrcs,#wrkTypOfDcPrcs,#wrkCdOfFnshPrcs,#batchNoFnshPrcs").change(function(){
		var dc=new Finish(),curntid=this.id,jbcard=$("#jbcrdnoOfFnshPrcs").val()||[],pdt=$("#pdtcdDtOfSubFnshPrcs").val()||[],jo=$("#JonoDtOfSubFnshPrcs").val()||[],
		batchno=(dc.batchno.length)?dc.batchno[1]:"";
			var qry="exec getListOfFinishProduct @Company='"+dc.cmycd+"',@worker="+dc.wrkcd+",@targetDate='"+dc.trgtdate+"',@jobcard='"+jbcard.join()+"'" +
					",@pdtcode='"+pdt.join()+"',@jono='"+jo.join()+"',@batchno='"+batchno+"',@wrktyp='"+dc.wrktyp+"',@dept='"+dc.dptcd+"'";
		var btchNotPdt=(batchno)?dc.batchno[9]:"";
		AjaxController.runDynamicQueriesFromJavaScript(qry,(data)=>{
			var result='',opt;
			if(data&&data.length){
				opt= data.reduce((old,tr)=>{
					var disble="";
					//disble=(tr[9]==btchNotPdt)?"disabled":"";
					if(tr[9]&&tr[9]!='null')
					old.batch.add('<option value=\''+JSON.stringify(tr)+'\'>'+tr[9]+'</option>');
					else
						tr[9]="";	
					old.target.add('<option>'+tr[0]+'</option>');
					old.jbcrd.add('<option>'+tr[6]+'</option>');
					old.pdtcd.add('<option>'+tr[1]+'</option>');
					old.Jono.add('<option>'+tr[2]+'</option>');
					tr[11]=tr[11]||0;tr[12]=tr[12]||'';tr[15]=tr[15]||'';tr[13]=tr[13]||'';tr[14]=tr[14]||'';
					var trCls="",style='';
					if((+tr[16])){
						trCls="success";
						if(+tr[16]<(+tr[5]))trCls="danger";
					}else{
						style=getPurityColor(tr[5]);
					}
					
					result+='<tr class="'+trCls+'" jobCard="'+tr[6]+'" img="'+tr[14]+'" dptnm="'+tr[13]+'" '+style+'> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'
						+' <input type="checkbox" class="checkboxes childCheckBox" '+disble+' ordcrntprcs="'+tr[15]+'" ohdprimid="'+tr[10]+'" value="'+tr[8]+'"> <span></span> </label></td> '+
						'<td id="trgtDateoftr">'+tr[0]+'</td> <td id="pdtCdoftr" title="'+tr[12]+'">'+tr[1]+'</td> <td id="JobCardNooftr">'+tr[2]+'</td> '+
						'<td id="OrdertypeOfTr">'+tr[3]+'</td> <td id="ctgyoftr">'+tr[4]+'</td> <td id="prtyoftr">'+tr[5]+'</td> '+
						'<td id="qtyoftr">'+tr[7]+'</td><td id="batchnooftr">'+tr[9]+'</td> <td > <select id="rjctoracpt" class="form-control"> <option>Accept</option>'+
						' <option>Reject</option> </select> </td> <td><input type="number" readonly class="form-control" data-toggle="tooltip" pdtcd="'+tr[1]+'" stdwgt="'+tr[11]+'" title="MIN_MAX WGT ['+tr[11]+']" id="rjctoracptwgt"></input></td>'+
						'<td><input type="text" class="form-control remarksofrject" style="width: 200px;" readonly="readonly"></input></td> <td><button onclick="takeLablePrinter(this)" type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Print"><i class="icon-printer"></i></button></td></tr>';	
					return old;
				},{target:new Set(['<option value="">Select Target Date</option>']),jbcrd:new Set(),pdtcd:new Set(),Jono:new Set(),batch:new Set(['<option value="">Select Batch No</option>'])})
			}
			opt=opt||{target:'',jbcrd:'',pdtcd:'',Jono:'',batch:''};
			if(curntid=='wrkCdOfFnshPrcs'||curntid=='wrkTypOfDcPrcs'||curntid=='dptCdOfFinshPrcs'){
				$("#jbcrdnoOfFnshPrcs").html([...opt.jbcrd]).selectpicker("refresh");
				$("#pdtcdDtOfSubFnshPrcs").html([...opt.pdtcd]).selectpicker("refresh");
				$("#JonoDtOfSubFnshPrcs").html([...opt.Jono]).selectpicker("refresh");
				$("#targetDtOfFnshPrcs").html([...opt.target]).selectpicker("refresh");
				$("#batchNoFnshPrcs").html([...opt.batch]).selectpicker("refresh");
			}
			else{
				$("#jbcrdnoOfFnshPrcs").val()||$("#jbcrdnoOfFnshPrcs").html([...opt.jbcrd]).selectpicker("refresh");
				$("#pdtcdDtOfSubFnshPrcs").val()||$("#pdtcdDtOfSubFnshPrcs").html([...opt.pdtcd]).selectpicker("refresh");
				$("#JonoDtOfSubFnshPrcs").val()||$("#JonoDtOfSubFnshPrcs").html([...opt.Jono]).selectpicker("refresh");
				$("#targetDtOfFnshPrcs").val()||$("#targetDtOfFnshPrcs").html([...opt.target]).selectpicker("refresh");
				$("#batchNoFnshPrcs").val()||$("#batchNoFnshPrcs").html([...opt.batch]).selectpicker("refresh");	
			}
			var table = $('#tableoffinsh').DataTable().clear();table.destroy();
			$("#tbodyoffinsh").html(result);
			tablerefresh("tableoffinsh");
			$("[data-toggle]").tooltip();
		});
	});
	
	///////////////// Select Box ///////////////////////////
	
	$(".parentCheckBox").on("change",function(){
		this.checked?$(".childCheckBox:not(:disabled)").prop("checked",true):$(".childCheckBox:not(:disabled)").prop("checked",false);
		totvaluecalculator();
	});
	$("#tbodyoffinsh").delegate(".childCheckBox","change",function(){
		$(".childCheckBox:not(:checked)").length?$(".parentCheckBox").prop("checked",false):$(".parentCheckBox").prop("checked",true);
		totvaluecalculator();
	});
	$("#crosswgtoftr,#nongoldwgtoftr,#netwgtOfTr").on("keyup change",function(evt){
		var croswgt=$("#crosswgtoftr").val()||0,nongld=$("#nongoldwgtoftr").val()||0,net=$("#netwgtOfTr").val()|0;
		if(this.id=='netwgtOfTr'){
			$("#crosswgtoftr").val(net);$("#nongoldwgtoftr").val(0)
		}else{
		var netWgt=(+croswgt)-(+nongld);
		$("#netwgtOfTr").val((netWgt.toFixed(2)||0));
		}
	});

	$("#tbodyoffinsh").delegate("#rjctoracptwgt","click",function(){
		currentInput=$(this);var pdtCd=$(this).attr("pdtcd")||0;
		var JSONInp=currentInput.attr("wgtJson")?JSON.parse(currentInput.attr("wgtJson")):{crosswgtoftr:'',nongoldwgtoftr:'',netwgtOfTr:''};
		$.each(JSONInp,(key,val)=>{
			$("#"+key).val(val);
		});
		var jobcard=$(this).closest("tr").attr("jobcard")||'1';
		var qry="select s.sm_stn_cd,s.sm_stn_nm,s.sm_stn_shpe,s.sm_stn_clr,s.sm_stn_sz,ds.dsm_stn_pcs,ds.dsm_id,s.sm_id,s.sm_stn_qty,s.sm_stn_wgt,(select top 1 jcsd_isd_stn from job_card_stn_dtls where jcsd_jbcd_no='"+jobcard+"' and jcsd_stn_cd=sm_stn_cd)as exstStk from "
			+ "stn_mst s left join dgn_stn_mst ds on s.sm_stn_cd=ds.dsm_stn_cd where ds.dsm_dgn_no='"+pdtCd+"' and "
			+ "s.sm_stn_sts=1 and ds.dsm_dgn_sts=1 order by ds.dsm_id desc";
		AjaxController.getBomDetailByPdtCdForFnshPdt(qry,(data)=>{
			var html='';
			if(data&&data.length){
			data.forEach(tr=>{
				tr[8]=tr[8]||0;tr[9]=tr[9]||0;tr[10]=tr[10]||0;
				html+='<tr><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childStonBox" ><span></span></label>'+
				'</td><td>'+tr[0]+'</td><td>'+tr[1]+'</td><td>'+tr[2]+'</td><td>'+tr[3]+'</td><td>'+tr[4]+'</td><td>'+tr[5]+'</td><td><input type="number" class="form-control" title="Exst_Stk-['+tr[10]+']" data-toggle="tooltip" qty="'+tr[8]+'" wgt="'+tr[9]+'" id="stneisdqty"></td><td id="stneisdwgt"></td></tr>';
			})	
			}
			$("#StoneWithPdtTable").html(html);
			$("#myModalSample").modal('show');
			$("[ data-toggle]").tooltip();
		});
		
	});
	
	$("#tbodyoffinsh").delegate(".remarksofrject","keypress",function(evt){
			var qry="select distinct top 50 fpd_rmrk from fnsh_pdt_dtl where fpd_rmrk like '%"+this.value+"%' "
		AjaxController.getSearchedRemarksForFinsh(qry,(data)=>{
			if(data&&data.length){
				$(this).autocomplete({
					source : data
					});		
			}
		});
});
	$("#tbodyoffinsh").delegate("#rjctoracpt","change",function(){
		if(this.value=='Accept')
		$(this).closest("tr").find(".remarksofrject").prop("readonly",true).val('');
		else
			$(this).closest("tr").find(".remarksofrject").prop("readonly",false);	
		totvaluecalculator();
	})
	
});
function saveTheJsonInTr(){
	var croswgt=$("#crosswgtoftr").val()||'',nongld=$("#nongoldwgtoftr").val()||'',net=$("#netwgtOfTr").val()||'';
	var obj={crosswgtoftr:croswgt,nongoldwgtoftr:nongld,netwgtOfTr:net};
	currentInput.attr("wgtJson",JSON.stringify(obj));
	currentInput.val(net);
	var stdWGT=(currentInput.attr("stdwgt")||"").split("-");
	var ssel=currentInput.closest("tr").find("#rjctoracpt");
	var min=(+stdWGT[0]||0),max=(+stdWGT[1]||0);
	if(net>=min&&net<=max){
		ssel.val("Accept");	
	}
	else{
	ssel.val("Reject");
	}
	ssel.change();
	totvaluecalculator();
	$("#myModalSample").modal('hide');
}

function saveFinalFinishProduct(){
	if($("#isdauthVal").val()=="1"){
		$("#saveButttonFnsh").addClass("disabled");
		$("#saveButttonFnsh").addClass("btn-circlesuc");
		saveFinalFinishProductAfter();		
	}
	else{
		$("#saveSuccesRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="saveFinalFinishProductAfter()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#saveSuccesRes").html(" ")\'>No</button></div>');		
	}
}

function saveFinalFinishProductAfter(){
	var fnsh=new Finish(),totqty=$("#totqtyofFinsh").val(),totwgt=$("#totwgtofFinsh").val(),isddauth=$("#isdauthVal").val(),docDt=$("#dateofFnshProcess").val();
	var lengthofbtch=(fnsh.batchno.length)?$(".childCheckBox:checked").length:1;
	var btchNotPdt=(fnsh.batchno.length)?fnsh.batchno[9]:"";
	var frmBtchPimId="",toPrimId="",toPrcs="",frombacth="",toBatch="",trnTyp="FNSHPDT-TRANSFER";
	if(fnsh.docno!=""&&fnsh.cmycd!=""&&fnsh.strcd!=""&&fnsh.wrkcd!=""&&fnsh.dptcd!=""&&$(".childCheckBox:checked").length>0&&lengthofbtch==1){
		AjaxController.checkFnshPdtDocNoInDb(fnsh.docno,(data)=>{
			if(data&&data.length){
				$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Entered Document Number Already used</div>');$("#hider12").fadeOut(3500);		
			}
			else{
				$("#saveButttonFnsh").addClass("disabled");[date]=$("#dateofFnshProcess").val().split(" ");
				$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait</div>');
				var InsetOrUpdate=[];
				 var InsertQery="INSERT INTO [dbo].[fnsh_pdt_dtl] (fpd_mov_doc_no,fpd_ord_crnt_sts,fpd_ord_prm_id,fpd_pdt_mvd,fpd_btch_no,[fpd_acpt_rjct] ,[fpd_acpt_rjct_wgt] ,[fpd_cmy_cd] ,[fpd_crt_dt] ,[fpd_crt_id] ,[fpd_doc_no] ,[fpd_dpt_cd]" +
				 		" ,[fpd_iss_auth] ,[fpd_jbcd_no] ,[fpd_jo_no] ,[fpd_ord_ctgy] ,[fpd_ord_prty] ,[fpd_ord_qty] ,[fpd_ord_typ] ,[fpd_pdt_cd] ,[fpd_rcvd_auth] ,[fpd_rmrk]" +
				 		" ,[fpd_str_cd] ,[fpd_sts] ,[fpd_tgt_dt] ,[fpd_updt_dt] ,[fpd_wrk_cd] ,[fpd_chld_primid],fpd_cross_wgt,fpd_non_gold_wgt,fpd_wrk_typ) VALUES ";
			 $(".childCheckBox:checked").toArray().forEach(function(chek){
						var tr=$(chek).closest("tr"),primId=$(chek).val(),ohdprim=$(chek).attr("ohdprimid")||0,ordCrntPrcs=$(chek).attr("ordcrntprcs");
						var trgtdt=tr.find("#trgtDateoftr").html(),pdtcd=tr.find("#pdtCdoftr").html(),jono=tr.find("#JobCardNooftr").html(),tobatchs=tr.find("#batchnooftr").html(),
						ordtyp=tr.find("#OrdertypeOfTr").html(),jbcdoftr=tr.attr("jobcard"),ctgy=tr.find("#ctgyoftr").html(),prty=tr.find("#prtyoftr").html()
						qty=tr.find("#qtyoftr").html(),rjctacc=tr.find("#rjctoracpt").val(),wgt=tr.find("#rjctoracptwgt").val(),rmrk=tr.find(".remarksofrject").val();
						var {crosswgtoftr,nongoldwgtoftr}=tr.find("#rjctoracptwgt").attr("wgtjson")?JSON.parse(tr.find("#rjctoracptwgt").attr("wgtjson")):{crosswgtoftr:'',nongoldwgtoftr:'',netwgtOfTr:''};
						
						var ordPmId=(fnsh.batchno.length)?fnsh.batchno[10]:ohdprim;
						InsertQery+=" ('"+fnsh.docno+"','Pending','"+ordPmId+"','"+fnsh.dptcd+"','"+tobatchs+"','"+rjctacc+"','"+wgt+"','"+fnsh.cmycd+"','"+date+"','','"+fnsh.docno+"','"+fnsh.dptcd+"',"+isddauth+",'"+jbcdoftr+"'" +
								",'"+jono+"','"+ctgy+"','"+prty+"','"+qty+"','"+ordtyp+"','"+pdtcd+"',0,'"+rmrk+"','"+fnsh.strcd+"',1,'"+trgtdt+"','"+date+"','"+fnsh.wrkcd+"','"+primId+"','"+crosswgtoftr+"','"+nongoldwgtoftr+"','"+fnsh.wrktyp+"'),";
						
						if(isddauth=="1"){
							if(!fnsh.batchno.length){
							InsetOrUpdate.push(" update job_ord_hdr_dtl set johd_fnsh_pdt_sts='"+rjctacc+"' where johd_id="+primId+" ");
							InsetOrUpdate.push(" update ord_hdr_dtl set ohd_crnt_prcs='FinishProduct',ohd_crnt_wrk='"+fnsh.wrkcd+"',ohd_crnt_wrk_typ='"+fnsh.wrktyp+"' where ohd_id="+ohdprim+" ");
						}
							else{
								frmBtchPimId=fnsh.batchno[10];
								toPrimId=ohdprim;
								toPrcs=ordCrntPrcs;
								frombacth=fnsh.batchno[9];
								toBatch=tobatchs;
								trnTyp="BATCH_TRANSFER";
								InsetOrUpdate.push(" update job_ord_hdr_dtl set johd_fnsh_pdt_sts='"+rjctacc+"' where johd_ord_prim_id="+frmBtchPimId+" and johd_doc_no='"+fnsh.batchno[6]+"' ");
								InsetOrUpdate.push(" update ord_hdr_dtl set ohd_ord_trgt_dt='"+trgtdt+"',ohd_ord_bch_no='"+toBatch+"',ohd_crnt_prcs='FinishProduct',ohd_crnt_wrk='"+fnsh.wrkcd+"',ohd_crnt_wrk_typ='"+fnsh.wrktyp+"' where ohd_id="+frmBtchPimId+" ");
								InsetOrUpdate.push(" update ord_hdr_dtl set ohd_ord_trgt_dt='"+fnsh.batchno[0]+"',ohd_ord_bch_no='"+frombacth+"' where ohd_id="+ohdprim+" ");
							}
						}
					});
					InsetOrUpdate.push(InsertQery.slice(0,-1));
				var totacpt=$("#totacptofFinsh").val()||0,totrcjt=$("#totrjctdofFinsh").val()||0;
				InsetOrUpdate.push("INSERT INTO [dbo].[fnsh_pdt_hdr] (fph_trn_typ,fph_frm_btch,fph_to_btch,fph_from_ord_primid,fph_to_ord_primid,fph_to_prcs_mvd,[fph_cmy_cd] ,[fph_crt_dt] ,[fph_crt_id] ,[fph_doc_no] ,[fph_dpt_cd] ,[fph_iss_auth] ,[fph_rcvd_auth] ,[fph_str_cd] ,[fph_sts] ,[fph_tot_qty] ,[fph_tot_wgt] ,[fph_updt_dt] ,[fph_wrk_cd],fph_tot_acpt,fph_tot_rjct,fph_wrk_typ,[fph_doc_dt]) VALUES " +
						"('"+trnTyp+"','"+frombacth+"','"+toBatch+"','"+frmBtchPimId+"','"+toPrimId+"','"+toPrcs+"','"+fnsh.cmycd+"','"+date+"','','"+fnsh.docno+"','"+fnsh.dptcd+"',"+isddauth+",0,'"+fnsh.strcd+"',1,'"+totqty+"','"+totwgt+"','"+date+"','"+fnsh.wrkcd+"','"+totacpt+"','"+totrcjt+"','"+fnsh.wrktyp+"','"+docDt+"') ")
						
				AjaxController.saveFinshPdtPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
						
			}
		});
		function rtnfunOfSaveRes(res){
			if(res=='success')window.location.href="finishproducts.mm";
		}
	}
	else{

		if(fnsh.docno==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Enter Document Number</div>');$("#hider12").fadeOut(3500);	
		}
		else if(fnsh.dptcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select DepartMent</div>');$("#hider12").fadeOut(3500);		
		}
		else if(fnsh.wrkcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Worker Name</div>');$("#hider12").fadeOut(3500);		
		}
		else if(fnsh.cmycd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Company</div>');$("#hider12").fadeOut(3500);		
		}
		else if(fnsh.strcd==""){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Store</div>');$("#hider12").fadeOut(3500);		
		}
		else if(lengthofbtch!=1){
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Only One Batch</div>');$("#hider12").fadeOut(3500);		
		}
		else{
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Records</div>');$("#hider12").fadeOut(3500);	
		}
		$("#saveButttonFnsh").removeClass("disabled");
		$("#saveButttonFnsh").removeClass("btn-circlesuc");
		
	}
}


$(".ParentStonBox").on("change",function(){
	this.checked?$(".childStonBox").prop("checked",true):$(".childStonBox").prop("checked",false);
	totnogoldcalculator();
});
$("#StoneWithPdtTable").delegate(".childStonBox","change",function(){
	$(".childStonBox:not(:checked)").length?$(".ParentStonBox").prop("checked",false):$(".ParentStonBox").prop("checked",true);
	totnogoldcalculator();
});
$("#StoneWithPdtTable").delegate("#stneisdqty","click keyup",function(e){
	var qty=(+$(this).attr("qty")||0),wgt=(+$(this).attr("wgt")||0);
	var calwgt=(qty&&wgt)?((wgt/qty)*(+$(this).val())).toFixed(2):$(this).val();
	$(this).closest("tr").find("#stneisdwgt").html(calwgt);
	totnogoldcalculator();
});
function totnogoldcalculator(){
	var wgts=$("tr:has(.childStonBox:checked)").toArray().reduce((old,tr)=>{
		tr=$(tr);var stnwgt=$("#stneisdwgt",tr).html()||'';
		old.ngwgt+=(+stnwgt||0);
		return old;
	},{ngwgt:0});
	$("#nongoldwgtoftr").val(wgts.ngwgt.toFixed(2));
	$("#crosswgtoftr").change();
}


function takeLablePrinter(ths){
	var tr=$(ths).closest("tr"),jbcrd=tr.attr("jobcard")||'',trgt=$("#trgtDateoftr",tr).text(),pdtcd=$("#pdtCdoftr",tr).text(),
	btch=$("#batchnooftr",tr).text(),minmax=$("#rjctoracptwgt",tr).attr("stdwgt")||'',ordtyp=$("#OrdertypeOfTr",tr).text()
	,wgtjsn=JSON.parse($("#rjctoracptwgt",tr).attr("wgtjson")||'{"crosswgtoftr":"0","nongoldwgtoftr":"","netwgtOfTr":"0"}'),
	dptnm=tr.attr("dptnm")||'',img=tr.attr("img")||'';
	var html='<div class="col-md-4"><div class="col-md-12"><p class="txt" >TGT DT: '+trgt+'</p><p class="txt">JCD NO: '
	+jbcrd+'</p></div><div class="col-md-12 tct" style="position: absolute;margin: 0% 60% 0%;"><span class="barcodeTarget" id="barcodeTarget'
	+'" ><img src="showImageUrl.mm?path='+1+'" width="100px" height="100px"/></span></div><div class="col-md-12 prc"><p class="txt">MIN_MAX: '
	+minmax+'</p> <p class="txt">PDT CD: '+pdtcd+'</p></div><div class="col-md-12 prc"><p class="txt">BATCH NO:<b> '
	+btch+' </b>&nbsp; NON-GLD WGT:&nbsp;'+wgtjsn.nongoldwgtoftr+'</p> <p class="txt">CROSS WGT: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+wgtjsn.crosswgtoftr+' NET WGT: &nbsp; '+wgtjsn.netwgtOfTr+'</p>'
	+'  <p class="txt">ORD TYP: '+ordtyp+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PDT DPT: &nbsp;'+dptnm+' </p></div></div>';

printer(html);
	
}