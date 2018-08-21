function Finish(){
	this.cmycd=$("#cmyCdOfFnshPrcs").val();
	this.strcd=$("#strCdOfFnshPrcs").val();
	this.dptcd=$("#dptCdOfFinshPrcs").val();
	this.trgtdate=$("#targetDtOfFnshPrcs").val()||'';
	this.docno=$("#DocNoInFnshPrcs").val();
	this.wrkcd=$("[id*=wrkCdOfFnshPrcs]:visible").val()||"''";
	this.wrktyp=$("#wrkTypOfDcPrcs").val()||'';
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
		batchno=$("#batchNoFnshPrcs").val()||[];
			var qry="exec getListOfFinishProduct @Company='"+dc.cmycd+"',@worker="+dc.wrkcd+",@targetDate='"+dc.trgtdate+"',@jobcard='"+jbcard.join()+"'" +
					",@pdtcode='"+pdt.join()+"',@jono='"+jo.join()+"',@batchno='"+batchno+"',@wrktyp='"+dc.wrktyp+"',@dept='"+dc.dptcd+"'";
		AjaxController.runDynamicQueriesFromJavaScript(qry,(data)=>{
			var result='',opt;
			if(data&&data.length){
				opt= data.reduce((old,tr)=>{
					if(tr[9]&&tr[9]!='null')
					old.batch.add('<option>'+tr[9]+'</option>');
					old.target.add('<option>'+tr[0]+'</option>');
					old.jbcrd.add('<option>'+tr[6]+'</option>');
					old.pdtcd.add('<option>'+tr[1]+'</option>');
					old.Jono.add('<option>'+tr[2]+'</option>');
					var totrcvd=(+tr[9]||0)+(+tr[10]||0);
					if(tr[0]=='Direct')tr[8]=(+tr[8]||0)+(+tr[13]||0);
					result+='<tr jobCard="'+tr[6]+'"> <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'
						+' <input type="checkbox" class="checkboxes childCheckBox" value="'+tr[8]+'"> <span></span> </label></td> '+
						'<td id="trgtDateoftr">'+tr[0]+'</td> <td id="pdtCdoftr">'+tr[1]+'</td> <td id="JobCardNooftr">'+tr[2]+'</td> '+
						'<td id="OrdertypeOfTr">'+tr[3]+'</td> <td id="ctgyoftr">'+tr[4]+'</td> <td id="prtyoftr">'+tr[5]+'</td> '+
						'<td id="qtyoftr">'+tr[7]+'</td> <td > <select id="rjctoracpt" class="form-control"> <option>Accept</option>'+
						' <option>Reject</option> </select> </td> <td><input type="number" class="form-control" id="rjctoracptwgt"></input></td>'+
						'<td><input type="text" class="form-control remarksofrject" style="width: 350px;" readonly="readonly"></input></td> </tr>';	
					return old;
				},{target:new Set(['<option value="">Select Target Date</option>']),jbcrd:new Set(),pdtcd:new Set(),Jono:new Set(),batch:new Set()})
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
		});
	});
	
	///////////////// Select Box ///////////////////////////
	
	$(".parentCheckBox").on("change",function(){
		this.checked?$(".childCheckBox").prop("checked",true):$(".childCheckBox").prop("checked",false);
		totvaluecalculator();
	});
	$("#tbodyoffinsh").delegate(".childCheckBox","change",function(){
		$(".childCheckBox:not(:checked)").length?$(".parentCheckBox").prop("checked",false):$(".parentCheckBox").prop("checked",true);
		totvaluecalculator();
	});
	$("#crosswgtoftr,#nongoldwgtoftr,#netwgtOfTr").on("keyup change",function(evt){
		var croswgt=$("#crosswgtoftr").val()||0,nongld=$("#nongoldwgtoftr").val()||0,net=$("#netwgtOfTr").val()|0;
		if(this.id=='netwgtOfTr'&&evt.type=="change"){
			$("#crosswgtoftr").val(net);$("#nongoldwgtoftr").val(0)
		}else{
		var netWgt=(+croswgt)-(+nongld);
		$("#netwgtOfTr").val((netWgt.toFixed(2)||0));
		}
	});

	$("#tbodyoffinsh").delegate("#rjctoracptwgt","click",function(){
		currentInput=$(this);
		var JSONInp=currentInput.attr("wgtJson")?JSON.parse(currentInput.attr("wgtJson")):{crosswgtoftr:'',nongoldwgtoftr:'',netwgtOfTr:''};
		$.each(JSONInp,(key,val)=>{
			$("#"+key).val(val);
		});
		$("#myModalSample").modal('show');
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
	totvaluecalculator();
	$("#myModalSample").modal('hide');
}
function saveFinalFinishProduct(){
	var fnsh=new Finish(),totqty=$("#totqtyofFinsh").val(),totwgt=$("#totwgtofFinsh").val(),isddauth=$("#isdauthVal").val();
	if(fnsh.docno!=""&&fnsh.cmycd!=""&&fnsh.strcd!=""&&fnsh.wrkcd!=""&&fnsh.dptcd!=""&&$(".childCheckBox:checked").length>0){
		$("#saveButttonFnsh").addClass("disabled");[date]=$("#dateofFnshProcess").val().split(" ");
		$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait</div>');
		var InsetOrUpdate=[];
		if(isAuthExst!='true'){
			$(".childCheckBox:checked").toArray().forEach(function(chek){
				var tr=$(chek).closest("tr"),primId=$(chek).attr("fnshprimid");
				rjctacc=tr.find("#rjctoracpt").val(),wgt=tr.find("#rjctoracptwgt").val(),rmrk=tr.find(".remarksofrject").val();
				var {crosswgtoftr,nongoldwgtoftr}=tr.find("#rjctoracptwgt").attr("wgtjson")?JSON.parse(tr.find("#rjctoracptwgt").attr("wgtjson")):{crosswgtoftr:'',nongoldwgtoftr:'',netwgtOfTr:''};
				if(isddauth=="1"){
					InsetOrUpdate.push("update fnsh_pdt_dtl set fpd_acpt_rjct='"+rjctacc+"',fpd_acpt_rjct_wgt='"+wgt+"',fpd_rmrk='"+rmrk+"',fpd_iss_auth=1,fpd_cross_wgt='"+crosswgtoftr+"',fpd_non_gold_wgt='"+nongoldwgtoftr+"' where fpd_id="+primId+"");
					InsetOrUpdate.push("update job_ord_hdr_dtl set johd_fnsh_pdt_sts='"+rjctacc+"' where johd_id="+primId+"");
				}
			});
		var totacpt=$("#totacptofFinsh").val()||0,totrcjt=$("#totrjctdofFinsh").val()||0;	
		if(isddauth=="1")
		InsetOrUpdate.push("update fnsh_pdt_hdr set fph_tot_rjct='"+totrcjt+"',fph_tot_acpt='"+totacpt+"',fph_tot_qty='"+totqty+"',fph_tot_wgt='"+totwgt+"',fph_iss_auth=1 where fph_id="+PrimidHdr+"");
		AjaxController.saveFinshPdtPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
		}
		else{
			var primId=$(".childCheckBox:checked").toArray().reduce(function(old,chek){
			old.push($(chek).attr("fnshprimid"));return old;
			},[]);
			InsetOrUpdate.push("update fnsh_pdt_dtl set fpd_rcvd_auth=1 where fpd_id in ("+primId.join()+") update fnsh_pdt_hdr set fph_rcvd_auth=1 where 0=(select count(fpd_id) from fnsh_pdt_dtl where fpd_doc_no='"+fnsh.docno+"' and fpd_rcvd_auth=0) and fph_id="+PrimidHdr+"");
			AjaxController.saveFinshPdtPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
		}
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
		else{
			$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Select Records</div>');$("#hider12").fadeOut(3500);	
			}
	}
}