/**
 * 
 */
var tbodyAfterPgeLoad=$("#tbodyOfTable").html(),cuurentChanger;
$(function(){
	$("#tbodyOfTable").delegate(".isdWgtInMelt","keyup",function(){
		var tr=$(this).closest("tr");
		$(".blwgtInMelt",tr).val(this.value);
		calculationOfSubPrcs();
	})
	
	$("#targetDtOfSubPrcs,#jbCardOfSubPrcs,#treNoOfSubPrcs,#dptCdOfSubPrcs,#prcsTypOfSubPrcs").on("change",function(){
		var prcsnm=$("#prcsTypOfSubPrcs option:selected").text()
		if(prcsnm.search(/\melt/gi)==-1){
			$("#MeltFilterPrty").html("Tree No")	
		cuurentChanger=this.id;
		if(!$("#targetDtOfSubPrcs").val()&&!$("#jbCardOfSubPrcs").val()&&!$("#treNoOfSubPrcs").val()&&!$("#dptCdOfSubPrcs").val()){
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
		jbCardFilter=$("#jbCardOfSubPrcs").val().join();
	}	
	if($("#treNoOfSubPrcs").val()!=null){
		treeNoFilter=$("#treNoOfSubPrcs").val().join();
	}
	var trgtDate=$("#targetDtOfSubPrcs").val()||'',cmyCd=$("#cmyCdOfSupPrcs").val()||'',dptCd=$("#dptCdOfSubPrcs").val()||'';
	AjaxController.filterInJobCardAndTreeForAjax(trgtDate,jbCardFilter,treeNoFilter,cmyCd,dptCd,retrnResOfFiltrTreJob);
		}
		}
		else{
			$("#MeltFilterPrty").html("Purity")
			MeltingPrcs();		
		}
	});

$("#dptCdOfSubPrcs").change();

});
function MeltingPrcs(){
	var cmyCd=$("#cmyCdOfSupPrcs").val()||'',dptCd=$("#dptCdOfSubPrcs").val()||'';
		var prtyFil=$("#treNoOfSubPrcs").val()||[];
		prtyFil=prtyFil.map(s=>"'"+s+"'").join();
		if(prtyFil)prtyFil=" and stm_rcvd_stk_prty in("+prtyFil+") ";
		var qry=" select stm_stk_trn_typ,stm_rcvd_stk_prty,stm_rcvd_stk_wgt from stk_mst where stm_stk_trn_typ in ('RunnerMetal','ScrapMetal','OutSide_Inward','Inward','PowderMetal') and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' and cast(stm_rcvd_stk_wgt as decimal(20,3))>0 "+prtyFil+" ";
		AjaxController.getDataForMeltingProcess(qry,(data)=>{
			var table = $('#myTableTable').DataTable().clear();table.destroy();
			var thead='<tr><th><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes parentCheckBox" > <span></span> </label></th><th>TRANS_TYP<input type="text" class="form-control"></th><th>MTL_PRTY<input type="text" class="form-control"></th><th>MTL_WGT<input type="text" class="form-control"></th><th>ISD_WGT<input type="text" class="form-control"></th><th>RCVD WGT<input type="text" class="form-control"></th><th>SAMPLE<input type="text" class="form-control"></th><th>PWDR MTL<input type="text" class="form-control"></th><th>PRTY<input type="text" class="form-control"></th><th>BAL WGT<input type="text" class="form-control"></th></tr>'
			$("#myTableTable thead").html(thead);
			var html='',prtyFiltr=new Set();
			if(data&&data.length){
			data.forEach(tr=>{
				tr[2]=(+(+tr[2]||0).toFixed(2));
				prtyFiltr.add('<option>'+tr[1]+'</option>');
				var style=getPurityColor(tr[1]);
			html+='<tr '+style+'><td ><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" > <span></span> </label></td><td class="trfTypInMelt">'+tr[0]+'</td><td class="prtyInMelt">'+tr[1]+'</td><td class="exstMtlWgtInMelt">'+tr[2]+'</td><td><input type="number" class="form-control isdWgtInMelt" value="'+tr[2]+'"></td><td><input type="number" class="form-control rcvdMtlWgt" value="" readonly></td><td><input type="number" class="form-control tstSmpllInMelt" value="" readonly></td><td><input type="number" class="form-control pwdrmtlInMelt" value="" readonly></td><td><input type="number" class="form-control prtyTcvdInMelt" value="" readonly></td><td><input type="number" class="form-control blwgtInMelt" value="'+tr[2]+'" readonly></td></tr>'	
			})	
		}
			$("#treNoOfSubPrcs").val()||$("#treNoOfSubPrcs").html([...prtyFiltr]).selectpicker("refresh");
			$('#myTableTable tbody').html(html);
			var table = $('#myTableTable').DataTable({
				   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
				   "iDisplayLength": -1,
				});
		table.columns().eq( 0 ).each( function ( colIdx ) {
			    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
			        table
			            .column( colIdx )
			            .search( this.value )
			            .draw();
			    } );});
		});
}
function retrnResOfFiltrTreJob(res){
var result='';	var table = $('#myTableTable').DataTable().clear();table.destroy();
	$("#myTableTable thead").html('<tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="parentCheckBox checkboxes" value="1"> <span></span> </label> </th> <th>Trns Type<input class="form-control input-sm"></th> <th>Trgt Dt<input class="form-control input-sm"></th> <th>Dept<input class="form-control input-sm"></th> <th>Ctgy<input class="form-control input-sm"></th> <th>Doc No<input class="form-control input-sm"></th> <th>Prty<input class="form-control input-sm"></th> <th>Qty<input class="form-control input-sm"></th> <th>Stk Wgt<input class="form-control input-sm"></th> <th>Isd Wgt<input class="form-control input-sm"></th> <th>Rcvd Wgt<input class="form-control input-sm"></th> <th>Bal Wgt<input class="form-control input-sm"></th> </tr>')
	var jobCard=new Set(),treeNo=new Set(),tgtDate=new Set(['<option value="">Select Target Date</option>']);
	if(res!=null){
		for(var i=0;i<res.length;i++){
			res[i][8]=(+res[i][8]||0).toFixed(2);
			var style=getPurityColor(res[i][12]);
			result+='<tr '+style+'><td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes childCheckBox" value="'+res[i][7]+'" trfCode="'+res[i][10]+'" isdPrimyId="'+res[i][11]+'">'
            +'<span></span></label></td><td class="trnsctyp">'+res[i][6]+'</td><td class="trgtDtOfTr">'+res[i][0]+'</td><td class="isdDeptOfTr">'+res[i][1]+'</td><td  class="ctgyOfTr">'+res[i][2]+'</td><td class="docNoInTr">'+res[i][3]+'</td><td class="prtyInTr">'+res[i][12]+'</td><td class="qtyOfTr">'+res[i][4]+'</td><td class="stkWgtOfSubPrcs">'+res[i][8]+'</td>'
            +'<td><input type="number" class="form-control issWgtOfSubPrcs" max="'+res[i][8]+'" value="'+res[i][8]+'"></td><td><input type="number" class="form-control rcvdWgtOfSubPrcs" readonly></td> <td class="balwgtOfSupPrcs"></td> </tr>';	
		
			if(res[i][6]=='Casting Recieved')
				treeNo.add('<option>'+res[i][3]+'</option>');
			else jobCard.add('<option>'+res[i][3]+'</option>'); 
		}
	}
	if(cuurentChanger!='jbCardOfSubPrcs'&&cuurentChanger!='treNoOfSubPrcs'){
	$("#jbCardOfSubPrcs").html([...jobCard]).selectpicker("refresh");
	$("#treNoOfSubPrcs").html([...treeNo]).selectpicker("refresh");
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
		var totChkBox=$(".childCheckBox").length;
		if(sumChkedchkBox==totChkBox){
			$(".parentCheckBox")["0"].checked=true;
		}
		else{
			$(".parentCheckBox")["0"].checked=false;
		}
		calculationOfSubPrcs();balWgtCalSubPrcs(this);
	});

});

function calculationOfSubPrcs(){
	var issWgt=0,rcvdWgt=0;
	var prcsnm=$("#prcsTypOfSubPrcs option:selected").text()
	if(prcsnm.search(/\melt/gi)>-1){
$(".childCheckBox:checked").each(function(){
	issWgt+=Number($(this).closest("tr").find(".isdWgtInMelt").val())||0;
	rcvdWgt+=0;
});
	}
	else{
		$(".childCheckBox:checked").each(function(){
			issWgt+=Number($(this).closest("tr").find(".issWgtOfSubPrcs").val())||0;
			rcvdWgt+=Number($(this).closest("tr").find(".rcvdWgtOfSubPrcs").val())||0;
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
		var tr=$(this).closest("tr");
		var isWgt=tr.find(".issWgtOfSubPrcs").val();
		var rcvdWgt=tr.find(".rcvdWgtOfSubPrcs").val();
		if(Number(rcvdWgt)>Number(isWgt)){
			tr.find(".rcvdWgtOfSubPrcs").val(isWgt);
		}
		calculationOfSubPrcs();	balWgtCalSubPrcs(this);
	});
});
$(function (){

	$("[id*=wrkCdOfSubPrcs]").change(function(){
		var wrCd=$(this).val();
		if($(this).val()!=""){
	var qry="select isnull(sum(cast(s.stm_rcvd_stk_wgt as decimal(20,3))),0) as stkwgt,max(e.em_emp_alw_qty) as alwqty from stk_mst s left join emp_mst e on s.stm_stk_crt_id=e.em_emp_id where s.stm_stk_crt_id='"+$(this).val()+"' and s.stm_stk_trn_typ like '%Issue%'"
		AjaxController.getExstStkWithWrkAlwQty(qry,retWrkAlwQty);
	function retWrkAlwQty(res){
		$("#StkLmtOfEMployee").val(res);
		var qry="select top 1 sum(cast([sph_rcvd_wgt]as decimal(20,3))) as  pdt,sum(cast([sph_bal_wgt] as decimal(20,3))) as bal from [sub_prcs_hdr] where sph_wrk_cd='"+wrCd+"'";
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
	}
		}
		else{
			$("#balStkOfMainPrcs,#StkLmtOfEMployee").val("");	}
	});
	
})

function beforeAuthChecker(){

	if($("#isdauthVal").val()=="1"){
		$("#saveButtonSupPrcs").addClass("disabled");
		$("#saveButtonSupPrcs").addClass("btn-circlesuc");
		saveFinalSubPrcessDetail();		
	}
	else{
		$("#saveSuccesRes").html('<div class="alert alert-warning" id="firstPrep">Do You Want To Allow Without Auth...?'+
		'<button type="button" onclick="saveFinalSubPrcessDetail()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick=\'$("#saveSuccesRes").html(" ")\'>No</button></div>');		
	}
}


function beforesavingValidate(){
	if($("#StkLmtOfEMployee").val()!=""&&$(".childCheckBox:checked").length>0){
		var empStkExst=Number($("#StkLmtOfEMployee").val().split("-")[0])+Number($("#isedtotWgtOfSubPrcs").val());
		var empAlwQty=$("#StkLmtOfEMployee").val().split("-")[1];
		if(Number(empStkExst)>Number(empAlwQty)){
			$("#saveSuccesRes").html('<div class="alert alert-warning" id="firstPrep">Added IssueWgt > Worker Allow Qty So Do You Want To Allow....'+
					'<button type="button" onclick="beforeAuthChecker()" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	
		}
		else{
			beforeAuthChecker();		
		}
		}
	else{
		beforeAuthChecker();	
	}
}
function hideDivInStkAdj() {
	$("#firstPrep").fadeOut(20);
}
	

function saveFinalSubPrcessDetail(){
	var docNo=$("#DocNoInSupPrcs").val(),dptCd=$("#dptCdOfSubPrcs").val(),prcsType=$("#prcsTypOfSubPrcs").val(),prcsTypeName=$("#prcsTypOfSubPrcs option:selected").text();
	wrkCd=$("[id*=wrkCdOfSubPrcs]:visible").val(),wrkerTyp=$("#wrkTypOfDcPrcs").val(),tgrtDt=$("#targetDtOfSubPrcs"),totIsWgt=$("#isedtotWgtOfSubPrcs").val(),
	totRcvdWgt=$("#rcvdtotWgtOfSubPrcs").val(),cmyCd=$("#cmyCdOfSupPrcs").val(),strCd=$("#strCdOfSupPrcs").val(),date=$("#dateofSubProcess").val().split(" ")[0],docDt=$("#dateofSubProcess").val();
	if(docNo!=""&&dptCd!=""&&prcsType!=""&&wrkCd!=""&&cmyCd!=""&&strCd!=""&&$(".childCheckBox:checked").length>0){
		AjaxController.checkSubProcessDocNoInDb(docNo,(data)=>{
			if(data&&data.length){
				$("#saveSuccesRes").html('<div class="alert alert-danger" id="hider12">Entered Document Number Already Used..</div>');$("#hider12").fadeOut(3500);			
			}else{

				$("#saveButtonSupPrcs").addClass("disabled");$("#saveButtonSupPrcs").prop("disabled",true);
				$("#saveSuccesRes").html('<div class="alert alert-info" id="hider12">Saving Please Wait....</div>');
			var InsetOrUpdate=[];
			var InsertDetail='';
			 var isauth=$("#isdauthVal").val(),totBalWgt=$("#rbalWgtOfSubPrcs").val();
				var prcsnm=$("#prcsTypOfSubPrcs option:selected").text()
				if(prcsnm.search(/\melt/gi)==-1){
				InsertDetail='insert into sub_prcs_hdr_dtl(sphd_iss_stk_prty,[sphd_bal_wgt] ,[sphd_cmy_cd] ,[sphd_crt_dt] ,[sphd_crt_id] ,[sphd_dpt_cd] ,[sphd_iss_auth] ,[sphd_iss_doc_no] ,[sphd_iss_doc_typ] ,[sphd_iss_stk_wgt] ,[sphd_prcs_no] ,[sphd_prcs_sts] ,[sphd_prcs_typ] ,[sphd_rcvd_auth] ,[sphd_rcvd_stk_wgt] ,[sphd_str_cd] ,[sphd_trgt_dt] ,[sphd_updt_dt] ,[sphd_updt_id] ,[sphd_wrk_cd],sphd_itm_cd,sphd_itm_typ,[sphd_wrk_typ],[sphd_dc_isd_sts]) VALUES ';	
			 $(".childCheckBox:checked").each(function(){
					var tr=$(this).closest("tr"),trgtDts=tr.find(".trgtDtOfTr").html(),trnTyp=tr.find(".trnTypeOfTr").html(),primId=$(this).val();
					docNoInTr=tr.find(".docNoInTr").html(),isedStkWgt=tr.find(".issWgtOfSubPrcs").val(),rcvdWgtOfTr=tr.find(".rcvdWgtOfSubPrcs").val(),balWgtOfTr=tr.find(".balwgtOfSupPrcs").html(),
					trfcode=$(this).attr("trfCode"),itmstkWgt=tr.find(".stkWgtOfSubPrcs").html(),isdPrimId=$(this).attr("isdPrimyId"),prtyTR=$(".prtyInTr",tr).text();
					InsertDetail+='(\''+prtyTR+'\',\''+balWgtOfTr+'\' ,\''+cmyCd+'\',\''+date+'\' ,\' \' ,\''+dptCd+'\' ,'+isauth+' ,\''+docNoInTr+'\',\''+trfcode+'\',\''+isedStkWgt+'\',\''+docNo+'\',1,\''+prcsType+'\',0,\''+rcvdWgtOfTr+'\',\''+strCd+'\' ,\''+trgtDts+'\' ,\''+date+'\',\' \',\''+wrkCd+'\',\''+itmstkWgt+'\',\''+isdPrimId+'\',\''+wrkerTyp+'\',\'Sent\'),';
					if(isauth=="1"){
						if(trfcode=="Casting Recieved"){
						InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+isedStkWgt+"' as decimal(20,3))) where stm_id="+primId+"");
						}
						else{
							InsetOrUpdate.push('UPDATE [mn_prcs_job_hdr] SET [mpjh_rcvd_wgt] =(cast(mpjh_rcvd_wgt as decimal(20,3))-cast(\''+isedStkWgt+'\' as decimal(20,3))) WHERE mpjh_id='+primId+'');
							InsetOrUpdate.push('UPDATE [stk_mst] SET [stm_rcvd_stk_wgt] =(cast([stm_rcvd_stk_wgt] as decimal(20,3))-cast(\''+isedStkWgt+'\' as decimal(20,3))) WHERE stm_dpt_cd=\''+dptCd+'\' and stm_itm_cd=\''+docNoInTr+'\' and stm_stk_trn_typ like \'%NotMainProcess Recieved%\' ');
						}
						InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+isedStkWgt+"' as decimal(20,3))) where stm_itm_cd='"+docNoInTr+"' and stm_stk_trn_typ='"+prcsTypeName+"SubProcess Issue' and stm_stk_crt_id='"+wrkCd+"' " +
							" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' and stm_rcvd_stk_prty='"+prtyTR+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
							" values ('"+cmyCd+"','"+dptCd+"','"+docNoInTr+"','"+isedStkWgt+"','"+date+"','"+wrkCd+"','"+prcsTypeName+"SubProcess Issue','"+date+"','"+wrkCd+"','"+prtyTR+"','','"+strCd+"')");
//						prtyTR prity
					}
					if(trfcode!="Casting Recieved"){
						InsetOrUpdate.push(" update o set o.[ohd_crnt_prcs]='Sub-"+prcsTypeName+"',[ohd_crnt_wrk]='"+wrkCd+"',[ohd_crnt_wrk_typ]='"+wrkerTyp+"' from ord_hdr_dtl o left join job_ord_hdr_dtl on ohd_id=johd_ord_prim_id where johd_doc_no='"+docNoInTr+"'");
					}
				});
			}
				else{
					InsertDetail='INSERT INTO [sub_melt_dtl] (smd_bal_wgt,[smd_cmy_cd] ,[smd_crt_dt] ,[smd_crt_id] ,[smd_dc_isd] ,[smd_dc_rcvd] ,[smd_doc_no] ,[smd_dpt_cd] ,[smd_dust_auth] '+
					',[smd_dust_mtl] ,[smd_exst_mtl_wgt] ,[smd_isd_auth] ,[smd_isd_mtl_wgt] ,[smd_mlt_sts] ,[smd_mtl_prty] ,[smd_prcs_no] ,[smd_rcvd_auth] ,[smd_rcvd_mtl_wgt] ,[smd_rcvd_prty] ,[smd_rcvd_prty_jsn] ,[smd_test_smp_wgt] ,[smd_test_smps_jsn] ,[smd_trf_typ] ,[smd_updt_dt] ,[smd_wrk_cd] ,[smd_wrk_typ]) VALUES ';		
					 $("tr:has(.childCheckBox:checked)").toArray().forEach(function(tr){	
						 var trfTyp=$(".trfTypInMelt",tr).text()||'',prty=$('.prtyInMelt',tr).text()||'',exstShwWgt=$(".exstMtlWgtInMelt",tr).text()||'',
						 isdWgt=$(".isdWgtInMelt",tr).val()||'0',balwgt=$(".blwgtInMelt",tr).val()||'0';
						 InsertDetail+="('"+balwgt+"','"+cmyCd+"','"+date+"','"+wrkCd+"','Sent','Pending','"+docNo+"','"+dptCd+"','0','0','"+exstShwWgt+"',"+isauth+",'"+isdWgt+"',"+1+",'"+prty+"','"+prcsType+"',"+0+",'0','','','','','"+trfTyp+"','"+date+"','"+wrkCd+"','"+wrkerTyp+"'),";
						 if(isauth=="1"){
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))-cast('"+isdWgt+"' as decimal(20,3))) where stm_stk_trn_typ='"+trfTyp+"' and stm_rcvd_stk_prty='"+prty+"' and stm_cmy_cd='"+cmyCd+"' and stm_dpt_cd='"+dptCd+"'");
								InsetOrUpdate.push("update stk_mst set stm_rcvd_stk_wgt=(cast(stm_rcvd_stk_wgt as decimal(20,3))+cast('"+isdWgt+"' as decimal(20,3))) where stm_rcvd_stk_prty='"+prty+"' and stm_stk_trn_typ='Melting Issue' and stm_stk_crt_id='"+wrkCd+"' " +
										" and stm_dpt_cd='"+dptCd+"' and stm_cmy_cd='"+cmyCd+"' IF @@ROWCOUNT=0 insert into stk_mst ([stm_cmy_cd] ,[stm_dpt_cd] ,[stm_itm_cd] ,[stm_rcvd_stk_wgt] ,[stm_stk_crt_dt] ,[stm_stk_crt_id] ,[stm_stk_trn_typ],[stm_stk_updt_dt],[stm_stk_updt_id],stm_rcvd_stk_prty,stm_stk_itm_typ,stm_str_cd)" +
										" values ('"+cmyCd+"','"+dptCd+"','','"+isdWgt+"','"+date+"','"+wrkCd+"','Melting Issue','"+date+"','"+wrkCd+"','"+prty+"','Melt','"+strCd+"')");	
						 }
					 
					 });
					
				}
				InsetOrUpdate.push('INSERT INTO [sub_prcs_hdr] (sph_cmy_cd,sph_str_cd,[sph_crt_dt] ,[sph_crt_id] ,[sph_frm_dpt] ,[sph_iss_auth] ,[sph_iss_wgt] ,[sph_prcs_no] ,[sph_prcs_sts] ,[sph_prcs_typ] ,[sph_rcvd_auth] ,[sph_rcvd_wgt] ,[sph_updt_dt] ,[sph_updt_id] ,[sph_wrk_cd] ,[sph_bal_wgt],[sph_wrk_typ],[sph_prcs_dt] ) values '
						+'(\''+cmyCd+'\',\''+strCd+'\',\''+date+'\',\' \',\''+dptCd+'\','+isauth+'  ,\''+totIsWgt+'\',\''+docNo+'\',1 ,\''+prcsType+'\' ,0,\''+totRcvdWgt+'\',\''+date+'\',\' \',\''+wrkCd+'\' ,\''+totBalWgt+'\',\''+wrkerTyp+'\',\''+docDt+'\')');
				InsetOrUpdate.push(InsertDetail.slice(0,-1));
				AjaxController.saveSupPrcsHdrDetailByAjax(InsetOrUpdate,rtnfunOfSaveRes);
			
			}
		})
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
