var oFileIn;

$(function() {
    oFileIn = document.getElementById('files');
    if(oFileIn.addEventListener) {
        oFileIn.addEventListener('change', filePicked, false);
    }
});

var JsonData;
function filePicked(e) {
	 var files = e.target.files;
	  var i,f;
	  if(/\.(xls|xlsx)/i.test(files[0].name)){
	  for (i = 0, f = files[i]; i != files.length; ++i) {
	    var reader = new FileReader();
	    var name = f.name;
	    reader.onload = function(e) {
	      var data = e.target.result;

	      var workbook = XLSX.read(data, {type: 'binary'});

	      /* DO SOMETHING WITH workbook HERE */
	      /* DO SOMETHING WITH workbook HERE */
	      
	      var first_sheet_name = workbook.SheetNames[0];
	    var address_of_cell = 'A1';

	    /* Get worksheet */
	    var worksheet = workbook.Sheets[first_sheet_name];
	    JsonData=XLSX.utils.sheet_to_json(worksheet,{header:1});
	    console.log(XLSX.utils.sheet_to_json(worksheet,{header:1}));
	    };
	    reader.readAsBinaryString(f);
	  }
	  }
	  else if(/\.(txt)/i.test(files[0].name)){
		  var reader = new FileReader();
		  reader.onload=function(e){
			 var data= e.target.result;
			 var line=data.split("\n");
			JsonData=[];var reqrdColIndx=[0,1,3,4,5,9,21,22,29];
			 $.grep(line,function(li,idx){
				if(idx>1&&li!=""&&li!=null){
				var filteredOrd=$.grep(li.split(","),function(val,indx){
				if($.inArray(indx,reqrdColIndx)>-1)return val;
				})
				var rmks="",carat="";
				if(li.split(",")[6]!=null){
					carat=li.split(",")[6].split("-")[0]
					if(carat=="Description"){carat="Caret";}
					else {
						var ct=carat.match(/\d[0-9]kt/i);
						if(ct!=null)
						carat=ct[0];
						else
							carat="";
						}
					};
				if(li.split(",")[54]!=null)rmks=li.split(",")[54];
				filteredOrd.push(carat);
				filteredOrd.push(rmks);
				JsonData.push(filteredOrd);
				}
			 });
			 
		  };
		  reader.readAsText(files[0]);
	  }
		$('.btn-change7').removeClass("Disabled");
		$('.btn-change7').prop("disabled",false);
}
var Count=10;
var ordPro=[];
var ordHder=[];
var proIdOrdNoCmp=[];
var proCodChk=[];
function htmlLOader(ths){
	var thss=ths;
	return new Promise(function(resolve,reject){
		 $("#loadingInfo").html('<div class="alert alert-info">Loading Please Wait...</div');
			setTimeout(function(){
				resolve();
			}, 100);
			
	}).then(function (res){
		jsontoHtmlLoad();
	})
}

function tableShower(res){
	 if(res !=null && res.length>0){
		 res.forEach((obj,index)=>{if(index!=0)obj['recid']=index});
			$("#myTable").html('<div id="grid" style="width: 100%; height: 500px;"></div>');
			var columns=res[0].reduce((ary,ths,ind)=>{
				 ary.push({ field: ""+ind, caption: ths,type:'text', sortable: true});return ary;
			},[])
			if(w2ui.hasOwnProperty('grid')){
				  w2ui['grid'].destroy();
				}
			res.splice(0,1);
		    $('#grid').w2grid({ 
		        name: 'grid', 
		        show: {
		        	toolbarSave: true,
		        	lineNumbers: true,
		            header     : false,
		            toolbar    : true,
		            footer     : true
		        }, 
		        reorderColumns: true,
		        columns: columns,
		        recordHeight:30,
		        searches: columns,
		        onExpand: function (event) {
		            $('#'+event.box_id).html('<div style="padding: 10px; height: 100px">Expanded content</div>');
		        },	       
		        records:res
		    }); 
		  }
}


function jsontoHtmlLoad(){
	ordPro=[],ordHder=[],proIdOrdNoCmp=[],proCodChk=[];;
	if(JsonData!=undefined){
	 for (var i = 1; i < JsonData.length; i++) {
		    ordPro.push({ohd_ord_typ:JsonData[i][2],ohd_ord_qty:JsonData[i][5],ohd_ord_bch_no:JsonData[i][3],ohd_ord_jn_no:JsonData[i][6],ohd_ord_jn_dt:JsonData[i][7],ohd_ord_std_wt:JsonData[i][8],ohd_ord_carat:JsonData[i][9],
		    	ohd_ord_rmk:JsonData[i][10],ohd_ord_no:JsonData[i][0],ohd_ord_trgt_dt:JsonData[i][1],ohd_ord_pdt_cd:JsonData[i][4],ohd_ord_sts:true,ohd_wax_sts:'Pending',ohd_iss_auth:false,ohd_job_ord_prcs:'Pending',ohd_is_alw_job_ord:false})
		  ordHder.push({oh_ord_no:JsonData[i][0],oh_no_itm:1,oh_tot_qty:JsonData[i][5],oh_ord_sts:true,oh_tot_std_wgt:JsonData[i][8],oh_iss_auth:false,oh_job_ord_prcs:'Pending',oh_is_alw_job_ord:false});
		    proIdOrdNoCmp.push(JsonData[i][3]);proCodChk.push(JsonData[i][4]);
		  }
	}	
	  tableShower(JsonData);
	 $("#loadingInfo").html('');

}


function saveaddImportOrder(toChk){
	var cstmmecd=$("#customercode").val()||'';
	if(ordHder&&ordHder.length>0&&cstmmecd){
	$("#resrOut").addClass("disabled");
	$("#resrOut").prop("disabled",true);
	$("#successResult").html('<div class="alert alert-info">Processing Please Wait....</div>');
	if($("#isauthVal").val()=="1"){
	$.grep(ordPro,function(i){
			i.ohd_iss_auth=true;
			i.ohd_cst_cd=cstmmecd;
	});
	}
	var reportRecipientsDuplicate = [],OnlyBatch=ordPro.map((btch)=>{return btch.ohd_ord_bch_no});;
	for (var i = 0; i < OnlyBatch.length - 1; i++) {
	    if (OnlyBatch[i + 1] == OnlyBatch[i]) {
	        reportRecipientsDuplicate.push(OnlyBatch[i]);
	    }
	}
	if(reportRecipientsDuplicate.length==0){
	var finBtchConst=[];
	if(finBtchConst.length==0){
		toChk=toChk||false;	
	AjaxController.saveImportOrderDetail(JSON.stringify(ordPro),true,proIdOrdNoCmp,proCodChk,toChk,returnResOfImpOrd);

	function returnResOfImpOrd(res){
		$("#resrOut").removeClass("disabled");
		$("#resrOut").prop("disabled",false);
		if(res=="success"){
			$("#successResult").html('<div class="alert alert-success">Imported SuccessFully....</div>');
			var setTime=setTimeout(goBackDesignPage, 2000);
		}
		else{
			if(res.indexOf("ProductCodes Are Not In DataBase")>-1){
				$("#successResult").html('<div class="alert alert-warning" id="firstPrep">'+res+' Do You Want to Allow ?'+
				'<button type="button" onclick="saveaddImportOrder(true)" class="btn btn-success btn-xs">Yes</button><button type="button" class="btn btn-danger btn-xs" onclick="hideDivInStkAdj()">No</button></div>');	

			}
			else{
			$("#successResult").html('<div class="alert alert-danger" id="errorShow21">'+res+'</div>');	
		$("#errorShow21").fadeOut(5000);
			}
		}

	}

	}else{
		$("#resrOut").removeClass("disabled");
		$("#resrOut").prop("disabled",false);
		$("#successResult").html('<div class="alert alert-danger" id="errorShow231">Batch No '+finBtchConst[0]+' Already Used</div>');	
		$("#errorShow231").fadeOut(4500);	
	}
	}
	else{
		$("#resrOut").removeClass("disabled");
		$("#resrOut").prop("disabled",false);$("#successResult").html('<div class="alert alert-danger" id="errorShow2311">Batch No '+reportRecipientsDuplicate[0]+' Already Added</div>');	
		$("#errorShow2311").fadeOut(4500);		
	}
	}
	else{
		$("#resrOut").removeClass("disabled");
		$("#resrOut").prop("disabled",false);
		if(!cstmmecd){
			$("#successResult").html('<div class="alert alert-danger" id="errorShow231">Select Customer</div>');	
		}
		else
		$("#successResult").html('<div class="alert alert-danger" id="errorShow231">Please Import XLSX File Or Load Data</div>');	
		$("#errorShow231").fadeOut(4500);
	}
	
	
	}

function goBackDesignPage(){
	window.location.href="order.mm";
}

function removeAll(a,b){
	var pusher=[];
   $.each(a, function(){
        var self = this.toString();

        if(b.indexOf(self)>-1){
        	pusher.push(self);
        }
    });
   return pusher;
}