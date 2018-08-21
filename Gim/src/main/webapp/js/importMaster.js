/////////////////////////Import Degin Spliter Data

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
		$('.btn-change7').removeClass("Disabled");
		$('.btn-change7').prop("disabled",false);
}
var stonPro=[];
var bomPro=[];
var moldPro=[];
var designPro=[];
var Count=10;
function jsontoHtmlLoad(){
	return new Promise(function(resolve,reject){
		$("#myTable").html('<div> <p style="margin-left: 36%;" class="loadClass" id="LoadName"><b>Loading Please Wait...</b></p> <div class="loader loadClass" style="" id="loader"> </div> </div>');
	setTimeout(function(){
		resolve();
	}, 100);
	}).then(function(){
		jsontoHtmlLoader();
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

function jsontoHtmlLoader(){
	 stonPro=[];bomPro=[];moldPro=[];designPro=[];
	 var sellor=$("#selerOfDgn").val(),vendor=$("#vendorCd").val();
	if(JsonData!=undefined){
		
		  for (var i = 1; i < JsonData.length; i++) {
		    if(JsonData[i][11]!=undefined)
		    stonPro.push({sm_stn_cd:JsonData[i][5],sm_stn_nm:JsonData[i][11],sm_stn_shpe:JsonData[i][12],sm_stn_clr:JsonData[i][13],sm_stn_sz:JsonData[i][14],sm_stn_crt_dt:JsonData[i][15],sm_stn_crt_id:JsonData[i][0]});
		    if(JsonData[i][18]!=undefined)
		    bomPro.push({bm_bom_cd:JsonData[i][5],bm_bom_nm:JsonData[i][18],bm_bom_wip_typ:JsonData[i][19],bm_bom_sz:JsonData[i][20],bm_bom_typ:JsonData[i][21],bm_bom_crt_dt:JsonData[i][22],bm_bom_crt_id:JsonData[i][0]});
		    if(JsonData[i][16]!=undefined)
		    moldPro.push({mm_mold_no:JsonData[i][16],mm_mold_crt_dt:JsonData[i][17],mm_mold_crt_id:JsonData[i][0],mm_mold_updt_id:JsonData[i][5]});
		    if(JsonData[i][5]!=undefined){
		    var dgProod={dm_pdt_cd:JsonData[i][5],dm_pdt_nm:'',dm_dgn_carat:JsonData[i][23],dm_dgn_no:JsonData[i][4],dm_dgn_ctgy:JsonData[i][2],dm_dgn_dpt:JsonData[i][6],dm_dgn_typ:JsonData[i][7],dm_dgn_sz:JsonData[i][8],dm_dgn_std_wt:JsonData[i][3],
					dm_dgn_min_wt:JsonData[i][9],dm_dgn_max_wt:JsonData[i][10],dm_dgn_crt_id:JsonData[i][0],dm_dgn_sts:true,dm_dgn_img:JsonData[i][1],dm_dgn_cust_cd:sellor,dm_dgn_vn:vendor};
		    	if(JsonData[i][11]!=undefined)
		    		dgProod.dm_is_stn=true
		    	if(JsonData[i][18]!=undefined)
		    		dgProod.dm_is_bom=true
		    	if(JsonData[i][16]!=undefined)
		    		dgProod.dm_is_mold=true
		    	designPro.push(dgProod);
		    }
		 }
		  Count++;  
		  tableShower(JsonData);
		  $("#loadingTableSpan").html('');
	}	
	console.log(stonPro);
	console.log(bomPro);
	console.log(moldPro);
	console.log(designPro);


}


/////////////////////////////////////////////////////Save Import Design Pro////////////////////////////

function saveaddImportDegsin(){
	if(designPro&&designPro.length>0){
	$("#resrOut").addClass("disabled");
	$("#resrOut").prop("disabled",true);
	$("#successResult").html('<div class="alert alert-info">Processing Please Wait....</div>');
	$.grep(designPro,function(i){
		$.grep(stonPro,function(j){
			if(i.dm_dgn_crt_id==j.sm_stn_crt_id)
			j.sm_stn_cd=i.dm_pdt_cd;
		});
	});
	$.grep(designPro,function(i){
		$.grep(bomPro,function(j){
			if(i.dm_dgn_crt_id==j.bm_bom_crt_id)
			j.bm_bom_cd=i.dm_pdt_cd;
		});
	});
	$.grep(designPro,function(i){
		$.grep(moldPro,function(j){
			if(i.dm_dgn_crt_id==j.mm_mold_crt_id)
			j.mm_mold_updt_id=i.dm_pdt_cd;
		});
	});
	AjaxController.saveImportDesignProAjax(JSON.stringify(stonPro),JSON.stringify(bomPro),JSON.stringify(moldPro),JSON.stringify(designPro),returnResOfImpDgn)
	}
	else{
		$("#successResult").html('<div class="alert alert-danger" id="errorShow231">Please Import XLSX File Or Load Data</div>');	
		$("#errorShow231").fadeOut(4500);
	}
	}
function returnResOfImpDgn(res){
	$("#resrOut").removeClass("disabled");
	$("#resrOut").prop("disabled",false);
	if(res=="success"){
		$("#successResult").html('<div class="alert alert-success">Imported SuccessFully....</div>');
		var setTime=setTimeout(goBackDesignPage, 2000);
	}
	else{
		$("#successResult").html('<div class="alert alert-danger" id="errorShow21">'+res+'</div>');	
	$("#errorShow21").fadeOut(4500);
	}

}

function goBackDesignPage(){
	window.location.href="design.mm";
}