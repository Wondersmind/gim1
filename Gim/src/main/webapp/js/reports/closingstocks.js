/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
////////////////////////////// End For DEBOUNSE JS ///////
var getColumnDef=function(col){
	return gridOptions.columnDefs.find(s=>s.field==col||s.headerName==col)||{};
}



var convertorCommanJSON=function(Aray){
	var colFrst=Aray[0],JSON=[] ;
	Aray.reduce((json,ths,i)=>{
	if(i!=0)  {
	var fin=ths.reduce((obj,colval,indx)=>{
		var key=colFrst[indx];
		obj[key]=isNaN(Number(colval))?colval:Number(colval);
		if(typeof obj[key] =="number"){
			obj[key]=((""+obj[key]).indexOf(".")>-1)?Number(obj[key].toFixed(2)):obj[key];
		}
	return obj;      
	},{});
	JSON.push(fin)
	}        
	});
	return JSON;
};

var totVALUE={};
convertorJSON=function(Aray){
	var colFrst=["DPT","ORDER TYPE","TARGET DATE","QTY","WORKER NAME","WRK_TYP","STATUS"],JSON=[] ;
	Aray.forEach((ths,i)=>{
		ths[6]=(ths[6]=="null"||ths[6]==null)?"ORDER":ths[6];
		if(totVALUE[""+ths[0]+ths[1]+ths[4]+ths[6]+""])
		totVALUE[""+ths[0]+ths[1]+ths[4]+ths[6]+""]+=(+ths[3]||0);
		else
			totVALUE[""+ths[0]+ths[1]+ths[4]+ths[6]+""]=(+ths[3]||0);	
	var fin=ths.reduce((obj,colval,indx)=>{
		var key=colFrst[indx];
		obj["TYPE"]="TARGET DATE";
		obj[key]=isNaN(Number(colval))?colval:Number(colval);
		if(typeof obj[key] =="number"){
			obj[key]=((""+obj[key]).indexOf(".")>-1)?Number(obj[key].toFixed(2)):obj[key];
		}
	return obj;      
	},{});
	JSON.push(fin)
	});
	return JSON;
};


var gridOptions = {
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwer();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwer();
		    }, onColumnResized: function(params) {
		    	toalColumnShwer();
		    },
		   onGridReady: function(params) {
       //params.api.sizeColumnsToFit();
		   }
		 
};

var gridOptionsBOM = {
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerBOM();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerBOM();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerBOM();
		    },
		   onGridReady: function(params) {
    //params.api.sizeColumnsToFit();
		   }
		 
};

var gridOptionsSTCKPRY = {
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerSTCKPRY();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerSTCKPRY();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerSTCKPRY();
		    },
		   onGridReady: function(params) {
 //params.api.sizeColumnsToFit();
		   }
		 
};
var gridOptionsSTCKNONPRY={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerSTCKNONPRY();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerSTCKNONPRY();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerSTCKNONPRY();
		    },
		   onGridReady: function(params) {
 //params.api.sizeColumnsToFit();
		   }
		 
};

var gridOptionsOUTWRK={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerOUTWRK();
		    },
		  
		    onDragStopped:function() {
			   toalColumnShwerOUTWRK();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerOUTWRK();
		    },
		   onGridReady: function(params) {
//params.api.sizeColumnsToFit();
		   }
		 
};
var gridOptionsCLOSESTK={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerCLOSESTK();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerCLOSESTK();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerCLOSESTK();
		    },
		   onGridReady: function(params) {
//params.api.sizeColumnsToFit();
		   }
		 
};
var gridOptionsCMYWRK={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerCMYWRK();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerCMYWRK();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerCMYWRK();
		    },
		   onGridReady: function(params) {
//params.api.sizeColumnsToFit();
		   }
		 
};
var gridOptionsWRKNP={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerWRKNP();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerWRKNP();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerWRKNP();
		    },
		   onGridReady: function(params) {
//params.api.sizeColumnsToFit();
		   }
};
var gridOptionsPHYSTK={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerPHYSTK();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerPHYSTK();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerPHYSTK();
		    },
		   onGridReady: function(params) {
//params.api.sizeColumnsToFit();
		   }		
}

var gridOptionsORDPTCH={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerORDPTCH();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerORDPTCH();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerORDPTCH();
		    },
		   onGridReady: function(params) {
//params.api.sizeColumnsToFit();
		   }		
}
var gridOptionsLOSSTK={
		   enableRangeSelection: false,
		   alwaysShowStatusBar: true,
		   suppressFieldDotNotation:true,
		   columnDefs: [],colWidth:120,
		   rowData: null,
		   groupHideOpenParents: true,
		   groupIncludeFooter:false,
		   animateRows: false,
		   pivotMode:true,
		  enableColResize: true,
		   enableSorting: true,
		   overlayNoRowsTemplate: '<span class="oveerLay">Processing Please Wait...<img src="images/loading.gif" style="height: 20px;"></span>',
		   groupDefaultExpanded: -1,
		   
		   enableFilter: true,
		   onModelUpdated: function() {
			   toalColumnShwerLOSSTK();
		    },
		  
		    onDragStopped:function() {
		    	toalColumnShwerLOSSTK();
		    }, onColumnResized: function(params) {
		    	toalColumnShwerLOSSTK();
		    },
		   onGridReady: function(params) {
//params.api.sizeColumnsToFit();
		   }		
}
var TotArray=[],TotArrayLOSSTK=[],TotArrayWRKNP=[],WrkStkNP=[],TotArrayORDPTCH=[],TotArrayPHYSTK=[],TotArrayBOM=[],TotArraySTKPRTY=[],TotArraySTKNONPRTY=[],TotArrayCMYWRK=[],TotArrayOUTWRK=[],TotArrayCLOSESTK=[];
$(function(){
	if(orderDtlData){
		var json=eval(orderDtlData);
		if(json.length>0){
			 totVALUE={};
			TotArray=convertorJSON(json);
			
			tableMakerOfOrderDetail();
		}
	}
	if(bomDtlData){
		var json=eval(bomDtlData);
		if(json.length>0){
			json.unshift(["DPT","NAME","TYP","SIZE","WIP_TYP","QTY"]);
			TotArrayBOM=convertorCommanJSON(json);
			tableMakerOfBomDetail();
		}	
	}
	if(dprStckWithPrty){
		var json=eval(dprStckWithPrty);
		if(json.length>0){
			json.unshift(["DPT","TRNS_TYP","PRTY","WGT"]);
			TotArraySTKPRTY=convertorCommanJSON(json);
			TotArraySTKPRTY.forEach(s=>{
				s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
				});
			tableMakerOfSTCKPRTYDetail();
		}	
	}
	if(dprStckWithOutPrty){
		var json=eval(dprStckWithOutPrty);
		if(json.length>0){
			json.unshift(["DPT","TRNS_TYP","PRTY","WGT"]);
			TotArraySTKNONPRTY=convertorCommanJSON(json);
			TotArraySTKNONPRTY.forEach(s=>{
				s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
				});
			tableMakerOfSTCKNONPRTYDetail();
		}	
	}
	if(cmyWrkStk){
		var json=eval(cmyWrkStk);
		if(json.length>0){
			/*json.forEach(dt=>{
				if(dt[5]=='ForReturn'||dt[5]=='ForIssue'){
				if(dt[5]=='ForReturn')dt[6]=0;
				if(dt[5]=='ForIssue')dt[4]=0;
			  }
			})*/
			json.unshift(["DPT","WRK_NM","TRNS_TYP","PRTY","WGT"]);
			TotArrayCMYWRK=convertorCommanJSON(json);
			TotArrayCMYWRK.forEach(s=>{
				s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
				});
			tableMakerOfCMYWRKDetail();
		}	
	}
	if(outWrkStk){
		var json=eval(outWrkStk);
		if(json.length>0){
			json.unshift(["DPT","WRK_NM","TRNS_TYP","PRTY","WGT"]);
			TotArrayOUTWRK=convertorCommanJSON(json);
			TotArrayOUTWRK=convertorCommanJSON(json);
			TotArrayOUTWRK.forEach(s=>{
				s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
				});
			tableMakerOfOUTWRKDetail();
		}	
	}
	
	if(WrkStkNP){
		var json=eval(WrkStkNP);
		if(json.length>0){
			json.unshift(["DPT","WRK_NM","TRNS_TYP","PRTY","WGT"]);
			TotArrayWRKNP=convertorCommanJSON(json);
			TotArrayWRKNP.forEach(s=>{
				s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
				});
			tableMakerOfWRKNPDetail();
		}		
	}
	if(LOSSTK){
		var json=eval(LOSSTK);
		if(json.length>0){
			json.unshift(["TRNS_TYP","DPT","PRTY","WGT"]);
			TotArrayLOSSTK=convertorCommanJSON(json);
			TotArrayLOSSTK.forEach(s=>{
				s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
				});
			tableMakerOfLOSSTKDetail();
		}	
	}
	if(closeDptStk){
		var json=eval(closeDptStk);
		if(json.length>0){
			json.unshift(["DPT","TRNS_TYP","PRTY","WGT","PG_WGT","LOAD","ORD_STK"]);
			TotArrayCLOSESTK=convertorCommanJSON(json);
				TotArrayCLOSESTK.forEach(dta=>{
				if((+dta.ORD_STK))
				dta.LOAD=(+((+dta.PG_WGT||0)/(+dta.ORD_STK||0)*100).toFixed(2)||0);
			});
		}
			tableMakerOfCLOSESTKDetail();
			
	}
	if(phyStkDpt){
		var json=eval(phyStkDpt);
		if(json.length>0){
			json.unshift(["TYPE","WGT"]);
			TotArrayPHYSTK=convertorCommanJSON(json);
			tableMakerOfPHYSTKDetail();
		}		
	}
	if(ordDISPTCH){
		var json=eval(ordDISPTCH);
		if(json.length>0){
			json.unshift(["TYPE","WGT","QTY"]);
			TotArrayORDPTCH=convertorCommanJSON(json);
			tableMakerOfORDPTCHDetail();
		}		
	}
	
})

function tableMakerOfLOSSTKDetail(){
	if(!reportDetail.length)
	{
		var columnSate=[{"colId":"TRNS_TYP","hide":false,"aggFunc":null,"width":190,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"DPT","hide":false,"aggFunc":null,"width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"PRTY","hide":false,"aggFunc":null,"width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"WGT","hide":false,"aggFunc":"sum","width":80,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [{headerName: "TRNS_TYP", field: "TRNS_TYP", width:190, enableRowGroup: true, enablePivot: true},
		                  {headerName: "DPT", field: "DPT", width:90, enableRowGroup: true, enablePivot: true},
		                  {headerName: "PRTY", field: "PRTY", width:90, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WGT", field: "WGT", width:80, enableValue: true, enablePivot: true},
		                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
		                  ];
		
	}
	else{
		var columnSate=eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='LOSSTK').rd_othr);	
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='LOSSTK').rd_bnd_state);	
	}
gridOptionsLOSSTK.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridLOSSTK');
                  new agGrid.Grid(gridDiv, gridOptionsLOSSTK);
                  gridOptionsLOSSTK.api.setRowData(TotArrayLOSSTK);
                gridOptionsLOSSTK.columnApi.setColumnState (columnSate);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerLOSSTK();
              });
  $('#myGridLOSSTK .ag-body-viewport').scroll(scrollEnded);
	
}

function tableMakerOfPHYSTKDetail(){
	if(!reportDetail.length)
	{
		var columnSate=[{"colId":"TYPE","hide":false,"aggFunc":null,"width":520,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"WGT","hide":false,"aggFunc":"sum","width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [{headerName: "TYPE", field: "TYPE", width:520, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WGT", field: "WGT", width:140, enableValue: true, enablePivot: true},
		                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
		                  ];
	}
	else{
		var columnSate= eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='PHYSTK').rd_othr);
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='PHYSTK').rd_bnd_state);	
	}
	gridOptionsPHYSTK.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridPHYSTK');
                  new agGrid.Grid(gridDiv, gridOptionsPHYSTK);
                  gridOptionsPHYSTK.api.setRowData(TotArrayPHYSTK);
                  gridOptionsPHYSTK.columnApi.setColumnState (columnSate);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerPHYSTK();
              });
  $('#myGridPHYSTK .ag-body-viewport').scroll(scrollEnded);
	
}
function tableMakerOfORDPTCHDetail(){
	if(!reportDetail.length)
	{
		var columnSate=[{"colId":"TYPE","hide":false,"aggFunc":null,"width":380,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"QTY","hide":false,"aggFunc":"sum","width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"WGT","hide":false,"aggFunc":"sum","width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [{headerName: "TYPE", field: "TYPE", width:380, enableRowGroup: true, enablePivot: true},
		                  {headerName: "QTY", field: "QTY", width:140, enableValue: true, enablePivot: true},
		                  {headerName: "WGT", field: "WGT", width:120, enableValue: true, enablePivot: true},
		                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
		                  ];
	}
	else{
		var columnSate = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='ORDPTCH').rd_othr);
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='ORDPTCH').rd_bnd_state);	
	}
	gridOptionsORDPTCH.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridORDPTCH');
                  new agGrid.Grid(gridDiv, gridOptionsORDPTCH);
                  gridOptionsORDPTCH.api.setRowData(TotArrayORDPTCH);
                  gridOptionsORDPTCH.columnApi.setColumnState (columnSate);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerORDPTCH();
              });
  $('#myGridORDPTCH .ag-body-viewport').scroll(scrollEnded);
	
}
function tableMakerOfWRKNPDetail(){
	var columnState=[{"colId":"DPT","hide":false,"aggFunc":null,"width":92,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"WRK_NM","hide":false,"aggFunc":null,"width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"TRNS_TYP","hide":false,"aggFunc":null,"width":155,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"PRTY","hide":true,"aggFunc":null,"width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"WGT","hide":false,"aggFunc":"sum","width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
	
	var columnDefs = [{headerName: "DPT", field: "DPT", width:100, enableRowGroup: true, enablePivot: true},
	                  {headerName: "WRK_NM", field: "WRK_NM", width:120, enableRowGroup: true, enablePivot: true},
	                  {headerName: "TRNS_TYP", field: "TRNS_TYP", width:130, enableRowGroup: true, enablePivot: true},
	                  {headerName: "PRTY", field: "PRTY", width:90, enableRowGroup: true, enablePivot: true},
	                  {headerName: "WGT", field: "WGT", width:90, enableValue: true, enablePivot: true},
	                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
	                  ];
	if(!reportDetail.length)
	{
		var colStat=eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='WRKNP').rd_othr);
		if(colStat&&colStat.length)
		columnState= colStat;
		var colDf= eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='WRKNP').rd_bnd_state);
		if(colDf&&colDf.length)
		columnDefs =colDf;	
	}
	gridOptionsWRKNP.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridWRKNP');
                  new agGrid.Grid(gridDiv, gridOptionsWRKNP);
                  gridOptionsWRKNP.api.setRowData(TotArrayWRKNP);
                 gridOptionsWRKNP.columnApi.setColumnState (columnState);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerWRKNP();
              });
  $('#myGridWRKNP .ag-body-viewport').scroll(scrollEnded);
	
}
function tableMakerOfCMYWRKDetail(){
	if(!reportDetail.length)
	{
		var columnState=[{"colId":"DPT","hide":false,"aggFunc":null,"width":92,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"WRK_NM","hide":false,"aggFunc":null,"width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"TRNS_TYP","hide":false,"aggFunc":null,"width":155,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"PRTY","hide":false,"aggFunc":null,"width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":3},{"colId":"WGT","hide":false,"aggFunc":"sum","width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [{headerName: "DPT", field: "DPT", width:75, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WRK_NM", field: "WRK_NM", width:95, enableRowGroup: true, enablePivot: true},
		                  {headerName: "TRNS_TYP", field: "TRNS_TYP", width:110, enableRowGroup: true, enablePivot: true},
		                  {headerName: "PRTY", field: "PRTY", width:72, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WGT", field: "WGT", width:80, enableValue: true, enablePivot: true},
		                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
		                  ];
		}
	else{
		var columnState= eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='CMYWRK').rd_othr);
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='CMYWRK').rd_bnd_state);	
	}
	gridOptionsCMYWRK.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridCMYWRK');
                  new agGrid.Grid(gridDiv, gridOptionsCMYWRK);
                  gridOptionsCMYWRK.api.setRowData(TotArrayCMYWRK);
                  gridOptionsCMYWRK.columnApi.setColumnState (columnState);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerCMYWRK();
              });
  $('#myGridCMYWRK .ag-body-viewport').scroll(scrollEnded);
	
}
function tableMakerOfCLOSESTKDetail(){
	if(!reportDetail.length)
	{
		var columnSate=[{"colId":"DPT","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"TRNS_TYP","hide":false,"aggFunc":null,"width":290,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"PRTY","hide":false,"aggFunc":null,"width":190,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"WGT","hide":false,"aggFunc":"sum","width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"PG_WGT","hide":false,"aggFunc":"sum","width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"LOAD","hide":false,"aggFunc":"sum","width":100,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"ORD_STK","hide":false,"aggFunc":"sum","width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [
		                  {headerName: "DPT", field: "DPT", width:200, enableRowGroup: true, enablePivot: true},
		                  {headerName: "TRNS_TYP", field: "TRNS_TYP", width:290, enableRowGroup: true, enablePivot: true},
		                  {headerName: "PRTY", field: "PRTY", width:190, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WGT", field: "WGT", width:200, enableValue: true, enablePivot: true},
		                  {headerName: "PG_WGT", field: "PG_WGT", width:140, enableValue: true, enablePivot: true},
		                  {headerName: "LOAD%", field: "LOAD", width:100, enableValue: true, enablePivot: true},
		                  {headerName: "ORD_STK", field: "ORD_STK", width:200, enableValue: true, enablePivot: true},
		                  ];
		}
	else{
		var columnSate= eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='CLOSESTK').rd_othr);	
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='CLOSESTK').rd_bnd_state);	
	}
	gridOptionsCLOSESTK.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridCLOSESTK');
                  new agGrid.Grid(gridDiv, gridOptionsCLOSESTK);
                  gridOptionsCLOSESTK.api.setRowData(TotArrayCLOSESTK);
                gridOptionsCLOSESTK.columnApi.setColumnState (columnSate);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerCLOSESTK();
              });
  $('#myGridCLOSESTK .ag-body-viewport').scroll(scrollEnded);
}

function tableMakerOfOUTWRKDetail(){
	if(!reportDetail.length)
	{
		var columnSate=[{"colId":"DPT","hide":false,"aggFunc":null,"width":92,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"WRK_NM","hide":false,"aggFunc":null,"width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"TRNS_TYP","hide":false,"aggFunc":null,"width":155,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"PRTY","hide":false,"aggFunc":null,"width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":3},{"colId":"WGT","hide":false,"aggFunc":"sum","width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [{headerName: "DPT", field: "DPT", width:75, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WRK_NM", field: "WRK_NM", width:95, enableRowGroup: true, enablePivot: true},
		                  {headerName: "TRNS_TYP", field: "TRNS_TYP", width:110, enableRowGroup: true, enablePivot: true},
		                  {headerName: "PRTY", field: "PRTY", width:72, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WGT", field: "WGT", width:80, enableValue: true, enablePivot: true},
		                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
		                  ];
		}
	else{
		var columnSate= eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='OUTWRK').rd_othr);
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='OUTWRK').rd_bnd_state);	
	}
	gridOptionsOUTWRK.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridOUTWRK');
                  new agGrid.Grid(gridDiv, gridOptionsOUTWRK);
                  gridOptionsOUTWRK.api.setRowData(TotArrayOUTWRK);
                  gridOptionsOUTWRK.columnApi.setColumnState (columnSate);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerOUTWRK();
              });
  $('#myGridOUTWRK .ag-body-viewport').scroll(scrollEnded);
	
}

function tableMakerOfSTCKPRTYDetail(){
	if(!reportDetail.length)
	{
		var columnState=[{"colId":"DPT","hide":false,"aggFunc":null,"width":92,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"TRNS_TYP","hide":false,"aggFunc":null,"width":155,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"PRTY","hide":false,"aggFunc":null,"width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"WGT","hide":false,"aggFunc":"sum","width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [{headerName: "DPT", field: "DPT", width:92, enableRowGroup: true, enablePivot: true},
		                  {headerName: "TRNS_TYP", field: "TRNS_TYP", width:155, enableRowGroup: true, enablePivot: true},
		                  {headerName: "PRTY", field: "PRTY", width:90, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WGT", field: "WGT", width:90, enableValue: true, enablePivot: true},
		                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
		                  ];
		}
	else{
		var columnState= eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='STCKPRY').rd_othr);	
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='STCKPRY').rd_bnd_state);	
	}
	gridOptionsSTCKPRY.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridStockPrty');
                  new agGrid.Grid(gridDiv, gridOptionsSTCKPRY);
                  gridOptionsSTCKPRY.api.setRowData(TotArraySTKPRTY);
                 gridOptionsSTCKPRY.columnApi.setColumnState (columnState);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerSTCKPRY();
              });
  $('#myGridStockPrty .ag-body-viewport').scroll(scrollEnded);
	
}
function tableMakerOfSTCKNONPRTYDetail(){
	var columnState=[{"colId":"DPT","hide":false,"aggFunc":null,"width":92,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"TRNS_TYP","hide":false,"aggFunc":null,"width":175,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"WGT","hide":false,"aggFunc":"sum","width":140,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
	var columnDefs = [{headerName: "DPT", field: "DPT", width:110, enableRowGroup: true, enablePivot: true},
	                  {headerName: "TRNS_TYP", field: "TRNS_TYP", width:170, enableRowGroup: true, enablePivot: true},
	                  {headerName: "WGT", field: "WGT", width:90, enableValue: true, enablePivot: true},
	                  {headerName: "PG", field: "PG", width:90, enableValue: true, enablePivot: true}
	                  ];

	if(!reportDetail.length)
	{
		var colStat=eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='STCKNONPRY').rd_othr);
		if(colStat&&colStat.length)
		columnState= colStat;
		var colDf= eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='STCKNONPRY').rd_bnd_state);
		if(colDf&&colDf.length)
		columnDefs =colDf;	
	}
	
	gridOptionsSTCKNONPRY.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridStockNONPrty');
                  new agGrid.Grid(gridDiv, gridOptionsSTCKNONPRY);
                  gridOptionsSTCKNONPRY.api.setRowData(TotArraySTKNONPRTY);
                 gridOptionsSTCKNONPRY.columnApi.setColumnState (columnState);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerSTCKNONPRY();
              });
  $('#myGridStockNONPrty .ag-body-viewport').scroll(scrollEnded);
	
}
function tableMakerOfOrderDetail(){
		var columnDefs = [{headerName: "DPT", field: "DPT", width:100, enableRowGroup: true, enablePivot: true},
		                  {headerName: "ORD TYP", field: "ORDER TYPE", width:120, enableRowGroup: true, enablePivot: true},
		                  {headerName: "TARGET DATE", field: "TARGET DATE", width: 125, enableRowGroup: true, enablePivot: true},
		                  {headerName: "TYPE", field: "TYPE", width: 125, enableRowGroup: true, enablePivot: true},
		                  {headerName: "STATUS", field: "STATUS", width: 135, enableRowGroup: true, enablePivot: true},
		                  {headerName: "WKR_NAME", field: "WORKER NAME", width: 135, enableRowGroup: true, enablePivot: true},
		                  {headerName: "QTY", field: "QTY", width: 55, enablePivot: true, enableValue: true},
		                  {headerName: "TOT",pinned: 'right', width:80, enablePivot: true, enableRowGroup: true, enableValue: true,valueGetter:function(params) {
		                	 var key=params.data["DPT"]+(params.data["ORDER TYPE"]||"")+(params.data["WORKER NAME"]||"")+(params.data["STATUS"]||"ORDER");
		                	  return totVALUE[key]||0;
		                  }
		                  }
		                  ];
	gridOptions.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGrid');
                  new agGrid.Grid(gridDiv, gridOptions);
                  gridOptions.api.setRowData(TotArray);
                 var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwer();
              });
                 gridOptions.columnApi.setColumnState([{"colId":"DPT","hide":false,"aggFunc":null,"width":70,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"ORDER TYPE","hide":false,"aggFunc":null,"width":100,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"STATUS","hide":false,"aggFunc":null,"width":100,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"TARGET DATE","hide":false,"aggFunc":null,"width":55,"pivotIndex":1,"pinned":null,"rowGroupIndex":null},{"colId":"TYPE","hide":true,"aggFunc":null,"width":125,"pivotIndex":0,"pinned":null,"rowGroupIndex":null},{"colId":"WORKER NAME","hide":true,"aggFunc":null,"width":125,"pivotIndex":null,"pinned":null,"rowGroupIndex":3},{"colId":"QTY","hide":false,"aggFunc":"sum","width":125,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"0","hide":true,"aggFunc":null,"width":55,"pivotIndex":null,"pinned":"right","rowGroupIndex":3}]);         
  $('#myGrid .ag-body-viewport').scroll(scrollEnded);
  }    
function tableMakerOfBomDetail(){
	if(!reportDetail.length)
	{
		var columState=[{"colId":"DPT","hide":false,"aggFunc":null,"width":69,"pivotIndex":null,"pinned":null,"rowGroupIndex":0},{"colId":"NAME","hide":false,"aggFunc":null,"width":87,"pivotIndex":null,"pinned":null,"rowGroupIndex":1},{"colId":"WIP_TYP","hide":true,"aggFunc":null,"width":73,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"PRTY","hide":true,"aggFunc":null,"width":72,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"TYP","hide":false,"aggFunc":null,"width":70,"pivotIndex":null,"pinned":null,"rowGroupIndex":2},{"colId":"SIZE","hide":false,"aggFunc":null,"width":90,"pivotIndex":null,"pinned":null,"rowGroupIndex":3},{"colId":"QTY","hide":false,"aggFunc":"sum","width":70,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}];
		var columnDefs = [{headerName: "DPT", field: "DPT", width:72, enableRowGroup: true, enablePivot: true},
	                  {headerName: "NAME", field: "NAME", width:100, enableRowGroup: true, enablePivot: true},
	                  {headerName: "WIP_TYP", field: "WIP_TYP", width:50, enableRowGroup: true, enablePivot: true},
	                  {headerName: "PRTY", field: "PRTY", width:10, enableRowGroup: true, enablePivot: true},
	                  {headerName: "TYP", field: "TYP", width: 92, enableRowGroup: true, enablePivot: true},
	                  {headerName: "SIZE", field: "SIZE", width: 94, enableRowGroup: true, enablePivot: true},
	                  {headerName: "QTY", field: "QTY", width: 70,enableValue: true, enablePivot: true}
	              	  ];
	}
	else{
		var columState=eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='BOM').rd_othr);	
		var columnDefs = eval(reportDetail.find(s=>s.rd_chld_rpt_nm=='BOM').rd_bnd_state);	
	}
	gridOptionsBOM.columnDefs=columnDefs;
	var gridDiv = document.querySelector('#myGridBomStock');
                  new agGrid.Grid(gridDiv, gridOptionsBOM);
                  gridOptionsBOM.api.setRowData(TotArrayBOM);
                  gridOptionsBOM.columnApi.setColumnState (columState);
                  var scrollEnded = $.debounce(500, false, function ()
              {
                toalColumnShwerBOM();
              });
  $('#myGridBomStock .ag-body-viewport').scroll(scrollEnded);
}
function toalColumnShwerORDPTCH(){

	 $("#myGridORDPTCH .TotalRowGrp").remove();$("#myGridORDPTCH .ag-status-bar-aggregations #_value").html(TotArraySTKPRTY.length);
		var container=$("#myGridORDPTCH .ag-body-viewport"),elements=$("#myGridORDPTCH .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsORDPTCH.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsORDPTCH.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridORDPTCH .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsORDPTCH.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridORDPTCH .TotalRowGrp").remove();
	$("#myGridORDPTCH .ag-body-container").append(sd);
	}	

}

function toalColumnShwerPHYSTK(){
	 $("#myGridPHYSTK .TotalRowGrp").remove();$("#myGridPHYSTK .ag-status-bar-aggregations #_value").html(TotArraySTKPRTY.length);
		var container=$("#myGridPHYSTK .ag-body-viewport"),elements=$("#myGridPHYSTK .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsPHYSTK.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsPHYSTK.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridPHYSTK .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsPHYSTK.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridPHYSTK .TotalRowGrp").remove();
	$("#myGridPHYSTK .ag-body-container").append(sd);
	}	
} 
function toalColumnShwerLOSSTK(){

	  $("#myGridLOSSTK .TotalRowGrp").remove();$("#myGridLOSSTK .ag-status-bar-aggregations #_value").html(TotArraySTKPRTY.length);
		var container=$("#myGridLOSSTK .ag-body-viewport"),elements=$("#myGridLOSSTK .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsLOSSTK.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsLOSSTK.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridLOSSTK .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsLOSSTK.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridLOSSTK .TotalRowGrp").remove();
	$("#myGridLOSSTK .ag-body-container").append(sd);
	}
	
}
function toalColumnShwerCLOSESTK(){

	  $("#myGridCLOSESTK .TotalRowGrp").remove();$("#myGridCLOSESTK .ag-status-bar-aggregations #_value").html(TotArraySTKPRTY.length);
		var container=$("#myGridCLOSESTK .ag-body-viewport"),elements=$("#myGridCLOSESTK .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsCLOSESTK.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsCLOSESTK.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridCLOSESTK .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsCLOSESTK.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridCLOSESTK .TotalRowGrp").remove();
	$("#myGridCLOSESTK .ag-body-container").append(sd);
	}
	

}
function toalColumnShwerSTCKPRY(){
	  $("#myGridStockPrty .TotalRowGrp").remove();$("#myGridStockPrty .ag-status-bar-aggregations #_value").html(TotArraySTKPRTY.length);
		var container=$("#myGridStockPrty .ag-body-viewport"),elements=$("#myGridStockPrty .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsSTCKPRY.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsSTCKPRY.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridStockPrty .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsSTCKPRY.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridStockPrty .TotalRowGrp").remove();
	$("#myGridStockPrty .ag-body-container").append(sd);
	}
	
}
function toalColumnShwerWRKNP(){

	  $("#myGridWRKNP .TotalRowGrp").remove();$("#myGridWRKNP .ag-status-bar-aggregations #_value").html(TotArrayWRKNP.length);
		var container=$("#myGridWRKNP .ag-body-viewport"),elements=$("#myGridWRKNP .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsWRKNP.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsWRKNP.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridWRKNP .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsWRKNP.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridWRKNP .TotalRowGrp").remove();
	$("#myGridWRKNP .ag-body-container").append(sd);
	}
		

}

function toalColumnShwerOUTWRK(){
	  $("#myGridOUTWRK .TotalRowGrp").remove();$("#myGridOUTWRK .ag-status-bar-aggregations #_value").html(TotArrayOUTWRK.length);
		var container=$("#myGridOUTWRK .ag-body-viewport"),elements=$("#myGridOUTWRK .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsOUTWRK.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsOUTWRK.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridOUTWRK .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsOUTWRK.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridOUTWRK .TotalRowGrp").remove();
	$("#myGridOUTWRK .ag-body-container").append(sd);
	}
		
}
function toalColumnShwerCMYWRK(){
	  $("#myGridCMYWRK .TotalRowGrp").remove();$("#myGridCMYWRK .ag-status-bar-aggregations #_value").html(TotArrayCMYWRK.length);
		var container=$("#myGridCMYWRK .ag-body-viewport"),elements=$("#myGridCMYWRK .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsCMYWRK.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsCMYWRK.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridCMYWRK .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsCMYWRK.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridCMYWRK .TotalRowGrp").remove();
	$("#myGridCMYWRK .ag-body-container").append(sd);
	}
	
}


function toalColumnShwerSTCKNONPRY(){
	  $("#myGridStockNONPrty .TotalRowGrp").remove();$("#myGridStockNONPrty .ag-status-bar-aggregations #_value").html(TotArraySTKNONPRTY.length);
		var container=$("#myGridStockNONPrty .ag-body-viewport"),elements=$("#myGridStockNONPrty .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
		/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
		if(elements.length){
		var sum={};
	  var count = gridOptionsSTCKNONPRY.api.getDisplayedRowCount();
	 for (var i = 0; i<count; i++) {
	      var rowNode = gridOptionsSTCKNONPRY.api.getDisplayedRowAtIndex(i);
	      $.each((rowNode.groupData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          if(!isNaN(Number(val)))	
	          sum[key]=(Number(sum[key])||0)+val;
	          else  sum[key]='';
	          });
	      $.each((rowNode.aggData),(key,val)=>{
	          if(typeof val =="object"){
	          	val=val?val.value:0;
	          	}
	          sum[key]=(Number(sum[key])||0)+val;
	          });
	  }
	 var element=elements;
	var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
	var style=sd.style;
	var top=$("#myGridStockNONPrty .ag-body-container").height();
	style.top=top+"px";
	$(sd).find('div').html('');
	var firstColumn=gridOptionsSTCKNONPRY.columnApi.getRowGroupColumns()[0].colId;
	$.each(sum,(key,val)=>{
		  if(val){
		if((""+val).indexOf(".")>-1)	  
		 val=val.toFixed(2)||0;
		else val=val;
		 }
		  else val='';
	$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
	});
	$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
	$("#myGridStockNONPrty .TotalRowGrp").remove();
	$("#myGridStockNONPrty .ag-body-container").append(sd);
	}
	
}
function toalColumnShwerBOM(){
	  $("#myGridBomStock .TotalRowGrp").remove();$("#myGridBomStock .ag-status-bar-aggregations #_value").html(TotArrayBOM.length);
	var container=$("#myGridBomStock .ag-body-viewport"),elements=$("#myGridBomStock .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
	/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
	if(elements.length){
	var sum={};
  var count = gridOptionsBOM.api.getDisplayedRowCount();
 for (var i = 0; i<count; i++) {
      var rowNode = gridOptionsBOM.api.getDisplayedRowAtIndex(i);
      $.each((rowNode.groupData),(key,val)=>{
          if(typeof val =="object"){
          	val=val?val.value:0;
          	}
          if(!isNaN(Number(val)))	
          sum[key]=(Number(sum[key])||0)+val;
          else  sum[key]='';
          });
      $.each((rowNode.aggData),(key,val)=>{
          if(typeof val =="object"){
          	val=val?val.value:0;
          	}
          sum[key]=(Number(sum[key])||0)+val;
          });
  }
 var element=elements;
var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
var style=sd.style;
var top=$("#myGridBomStock .ag-body-container").height();
style.top=top+"px";
$(sd).find('div').html('');
var firstColumn=gridOptionsBOM.columnApi.getRowGroupColumns()[0].colId;
$.each(sum,(key,val)=>{
	  if(val){
	if((""+val).indexOf(".")>-1)	  
	 val=val.toFixed(2)||0;
	else val=val;
	 }
	  else val='';
$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
});
$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
$("#myGridBomStock .TotalRowGrp").remove();
$("#myGridBomStock .ag-body-container").append(sd);
}
}

function toalColumnShwer(){
	  $("#myGrid .TotalRowGrp").remove();$("#myGrid .ag-status-bar-aggregations #_value").html(TotArray.length);
	var container=$("#myGrid .ag-body-viewport"),elements=$("#myGrid .ag-body-container .ag-row-group:not(.TotalRowGrp):last");
	/* container.scrollTop() + container.innerHeight() >= container[0].scrollHeight&&*/
	if(elements.length){
	var sum={};
  var count = gridOptions.api.getDisplayedRowCount();
 for (var i = 0; i<count; i++) {
      var rowNode = gridOptions.api.getDisplayedRowAtIndex(i);
      $.each((rowNode.groupData),(key,val)=>{
          if(typeof val =="object"){
          	val=val?val.value:0;
          	}
          if(!isNaN(Number(val)))	
          sum[key]=(Number(sum[key])||0)+val;
          else  sum[key]='';
          });
      $.each((rowNode.aggData),(key,val)=>{
          if(typeof val =="object"){
          	val=val?val.value:0;
          	}
          sum[key]=(Number(sum[key])||0)+val;
          });
  }
 var element=elements;
var sd=element.clone()[0];   $(sd).addClass("TotalRowGrp");
var style=sd.style;
var top=$("#myGrid .ag-body-container").height();
style.top=top+"px";
$(sd).find('div').html('');
var firstColumn=gridOptions.columnApi.getRowGroupColumns()[0].colId;
$.each(sum,(key,val)=>{
	  if(val){
	if((""+val).indexOf(".")>-1)	  
	 val=val.toFixed(2)||0;
	else val=val;
	 }
	  else val='';
$(sd).find(' [col-id='+CSS.escape(key)+']').html(val);
});
$(sd).find(' [col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
$("#myGrid .TotalRowGrp").remove();
$("#myGrid .ag-body-container").append(sd);
}
}

$(".wholesearchbox").on("keyup",function(){
	if(gridOptions.api){
		gridOptions.api.setQuickFilter(this.value);
	}
});

$("#iwdDptcd,.prtyFiler").change(function(){
	var dptcd=$("#iwdDptcd").val()||[],prty=$("select.prtyFiler").val()||[],cmyCd=$("#ohd_cmy_cd").val();
	dptcd="'"+dptcd.join()+"'";prty="'"+prty.join()+"'";
	var qry="exec getDashBoardData @CompanyCd='"+cmyCd+"',@Type='',@Dept="+dptcd+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptions.api)
			gridOptions.api.destroy();
		if(data&&data.length>0){
			 totVALUE={};
				TotArray=convertorJSON(data);
				tableMakerOfOrderDetail();
			}
		});
	var qry="exec closingstockreport @cmycd='"+cmyCd+"',@dptcd="+dptcd+",@date='',@workcd='',@header='BOM',@prty="+prty+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptionsBOM.api)
			gridOptionsBOM.api.destroy();
		if(data&&data.length>0){
				data.unshift(["DPT","NAME","TYP","SIZE","WIP_TYP","QTY"]);
				TotArrayBOM=convertorCommanJSON(data);
				tableMakerOfBomDetail();
			}	
			});
	var qry="exec closingstockreport @cmycd='"+cmyCd+"',@dptcd="+dptcd+",@date='',@workcd='',@header='STKWITHPRTY',@prty="+prty+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptionsSTCKPRY.api)
			gridOptionsSTCKPRY.api.destroy();
		if(data&&data.length>0){
				data.unshift(["DPT","TRNS_TYP","PRTY","WGT"]);
				TotArraySTKPRTY=convertorCommanJSON(data);
				TotArraySTKPRTY.forEach(s=>{
					s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
					});
				tableMakerOfSTCKPRTYDetail();
			}	
	});
	var qry="exec closingstockreport @cmycd='"+cmyCd+"',@dptcd="+dptcd+",@date='',@workcd='',@header='STKWITHOUTPRTY',@prty="+prty+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptionsSTCKNONPRY.api)
			gridOptionsSTCKNONPRY.api.destroy();
		if(data&&data.length>0){
				data.unshift(["DPT","TRNS_TYP","PRTY","WGT"]);
				TotArraySTKNONPRTY=convertorCommanJSON(data);
				TotArraySTKNONPRTY.forEach(s=>{
					s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
					});
				tableMakerOfSTCKNONPRTYDetail();
			}	
	});
	
	var qry="exec closingstockreport @cmycd='"+cmyCd+"',@dptcd="+dptcd+",@date='',@workcd='',@header='CMYWRKSTCK',@prty="+prty+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptionsCMYWRK.api)
			gridOptionsCMYWRK.api.destroy();
	if(data&&data.length>0){
				data.unshift(["DPT","WRK_NM","TRNS_TYP","PRTY","WGT"]);
				TotArrayCMYWRK=convertorCommanJSON(data);
				TotArrayCMYWRK.forEach(s=>{
					s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
					});
				tableMakerOfCMYWRKDetail();
			}	
		});
	var qry="exec closingstockreport @cmycd='"+cmyCd+"',@dptcd="+dptcd+",@date='',@workcd='',@header='OUTSIDEWRKSTCK',@prty="+prty+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptionsOUTWRK.api)
			gridOptionsOUTWRK.api.destroy();
		if(data&&data.length>0){
				data.unshift(["DPT","WRK_NM","TRNS_TYP","PRTY","WGT"]);
				TotArrayOUTWRK=convertorCommanJSON(data);
				TotArrayOUTWRK.forEach(s=>{
					s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
					});
				tableMakerOfOUTWRKDetail();
			}	
		});
	var qry="exec closingstockreport @cmycd='"+cmyCd+"',@dptcd="+dptcd+",@date='',@workcd='',@header='LOSSSTOK',@prty="+prty+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptionsLOSSTK.api)
			gridOptionsLOSSTK.api.destroy();
			if(data&&data.length>0){
					data.unshift(["TRNS_TYP","DPT","PRTY","WGT"]);
					TotArrayLOSSTK=convertorCommanJSON(data);
					TotArrayLOSSTK.forEach(s=>{
						s["PG"]=(+(((+s.PRTY||1)*(+s.WGT||0))/100).toFixed(3));
						});
					tableMakerOfLOSSTKDetail();
				}	
	});
		var qry="exec closingstockreport @cmycd='"+cmyCd+"',@dptcd="+dptcd+",@date='',@workcd='',@header='DPTCLOSESTK',@prty="+prty+"";
	AjaxController.getFilteredClosingStock(qry,(data)=>{
		if(gridOptionsCLOSESTK.api)
			gridOptionsCLOSESTK.api.destroy();
		if(data&&data.length){
			data.unshift(["DPT","TRNS_TYP","PRTY","WGT","PG_WGT","LOAD","ORD_STK"]);
				TotArrayCLOSESTK=convertorCommanJSON(data);;
				TotArrayCLOSESTK.forEach(dta=>{
					if((+dta.ORD_STK))
					dta.LOAD=(+((+dta.PG_WGT||0)/(+dta.ORD_STK||0)*100).toFixed(2)||0);
				});
				
				tableMakerOfCLOSESTKDetail();
		}
		});
	
})


$(function(){
	$(".headerfilter").change(function(){
		$("#myGrid,#myGridBomStock,#myGridStockPrty,#myGridPHYSTK,#myGridORDPTCH,#myGridStockNONPrty,#myGridCMYWRK,#myGridOUTWRK,#myGridWRKNP,#myGridCLOSESTK,#myGridLOSSTK").closest(".pdnf").hide();
		if($(this).val()){
			$(this).val().forEach(data=>{
				$("#"+data).closest(".pdnf").show();
			})
			}
		else{
			$("#myGrid,#myGridStockPrty,#myGridBomStock,#myGridPHYSTK,#myGridORDPTCH,#myGridStockNONPrty,#myGridCMYWRK,#myGridOUTWRK,#myGridWRKNP,#myGridCLOSESTK,#myGridLOSSTK").closest(".pdnf").show();
				
		}
	});
});

$("#printWhole").click(function(){
	var wholes=$(".wholestyler");
	var aglength=$("#myGrid:visible .ag-row").length+100;
	$("#myGrid:visible").height(aglength);
	wholes.find("div[id*=myGrid]").get().forEach(div=>{
		var hgt=($(".ag-row:visible",div).length*25+50);
		hgt=hgt>300?300:hgt;
		$(div).height(hgt);
	});
	setTimeout(()=>{
		printer(wholes.html()+($("#myGrid:visible").html()||''));
	},2000);
});

function printer(datahtml){
	
	  var frame1 = document.createElement('iframe');
      frame1.name = "frame1";
      frame1.style.position = "absolute";
      frame1.style.top = "-1000000px";
      document.body.appendChild(frame1);
      var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
      frameDoc.document.open();
      frameDoc.document.write('<html><head><title>CLOSING STOCK</title>');
      frameDoc.document
          .write('<link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="css/ag-grid.css"><link rel="stylesheet" href="css/ag-theme-fresh.css"><link rel="stylesheet" href="css/theme-fresh.css"><style>.ag-header-viewport { background: #fdb64b !important; font-size: 15px; color: black; } .ag-theme-fresh .ag-menu .ag-menu-option-active { background: #fdb64b; } .ag-theme-fresh .ag-column-select-panel .ag-column-select-column-group, .ag-theme-fresh .ag-column-select-panel .ag-column-select-column { height: 20px; line-height: 20px; width: max-content !important; } .ag-theme-fresh .ag-column-drop-vertical .ag-column-drop-cell { display: block; float: none; width: max-content; min-width: -webkit-fill-available; } .ag-theme-fresh .ag-header-cell-label .ag-header-cell-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: "Montserrat", sans-serif !important; } .ag-cell-value { font-family: "Montserrat", sans-serif !important; font-size: 13px !important; } .ag-layout-normal .ag-body-viewport { background: white !important; } .ag-theme-fresh .ag-status-bar { background: bisque !important; color: black !important; border: 1px solid #a9a9a9!important; display: flex; justify-content: flex-end; padding: 8px 16px; font-family: "Montserrat", sans-serif !important; } .ag-theme-fresh .ag-tool-panel .ag-column-select-panel { border-bottom: 1px solid darkgrey; padding: 4px 0; padding-bottom: 3px; max-height: 250px !important; overflow-y: auto !important; } .ag-tool-panel { width: 230px !important; } .ag-theme-fresh .ag-tool-panel .ag-column-drop { max-height: 110px !important; }.ag-cell,.ag-header-cell{ border: 1px solid #bbbbbb !important; }.ag-header-group-cell{border: 1px solid #bbbbbb !important; }.table { font-family: "Montserrat", sans-serif !important; margin-bottom: 0px; }.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding: 1px !important;}.boxtab { background: #fff; box-shadow: 3px 2px 2px 2px #ddd; text-align: center; border-radius: 1px; /* min-height: 200px; */ margin-bottom: 0%; } #chartdiv { width : 100%; height : 500px; } .ag-theme-fresh .ag-header { background-color: #004274 !important; color: #ffffff !important; font: 400 14px "Helvetica Neue", sans-serif; background-image: none !important; } .col-lg-3{ min-width:25%; } .row { margin-right: -15px; margin-left:0px !important; } .panel-body { padding: 0px; } .npdn{ padding: 2px; } .boxtab { background: #fff; box-shadow: 3px 2px 2px 2px #ddd; text-align: center; border-radius: 1px;margin-bottom: 0%; } .well{ background:#fff; margin-bottom: 0px; } .pdnf{ padding: 3px; border: 2px solid #004274; } </style>');
      frameDoc.document.write('</head><body>');
      try{
      frameDoc.document.write(datahtml);
      }
      catch(e){
      	console.log(e);
      }
      frameDoc.document.write('</body></html>');
      frameDoc.document.close();
      setTimeout(function() {
          window.frames["frame1"].focus();
          window.frames["frame1"].print();
          document.body.removeChild(frame1);
          $(".wholestyler").find("div[id*=myGrid]").get().forEach(div=>{
      		if(div.id=='myGridBomStock') $(div).height(960);
      		else
        	  $(div).height(300);
      	});
          $("#myGrid").height(300)
      }, 500);
      return false;
 
	
}







function saveColumnState(){
	var gridOpt={myGridBomStock:"gridOptionsBOM",myGridCLOSESTK:"gridOptionsCLOSESTK",myGridCMYWRK:"gridOptionsCMYWRK",
			myGridLOSSTK:"gridOptionsLOSSTK",myGridORDPTCH:"gridOptionsORDPTCH",myGridOUTWRK:"gridOptionsOUTWRK",
			myGridPHYSTK:"gridOptionsPHYSTK",myGridStockNONPrty:"gridOptionsSTCKNONPRY",myGridWRKNP:"gridOptionsWRKNP",myGridStockPrty:"gridOptionsSTCKPRY"};
	var isertQry=[];
	$.each(gridOpt,(key,val)=>{
		var colDefinition=eval(val).columnDefs;
		colDefinition.forEach((ths)=>{
  			var wdth=$("#"+key+" .ag-header-container [col-id=ag-Grid-AutoColumn-"+CSS.escape(ths.field||0)+"]").width()||$("#"+key+" .ag-header-container [col-id="+CSS.escape(ths.field)+"]").width();
   			if(wdth)ths.width=wdth+25;
  		});
		
		var columnStat2=(eval(val).columnApi)?JSON.stringify(eval(val).columnApi.getColumnState()):"[]";
		var columnState=JSON.stringify(colDefinition),reportName=val.split("gridOptions").pop()||"ORDER_DETAIL";
		isertQry.push("update report_details set rd_bnd_state='"+columnState+"',rd_othr='"+columnStat2+"' where rd_chld_rpt_nm='"+reportName+"' and rd_rpt_nm='CLOSING_STOCK' and" +
				" rd_cmy_cd='"+cmy+"' if @@ROWCOUNT=0 insert INTO [report_details] ([rd_bnd_state] ,[rd_chld_rpt_nm] ,[rd_cmy_cd] ,[rd_othr] ,[rd_rpt_nm])  VALUES" +
						" ('"+columnState+"','"+reportName+"','"+cmy+"','"+columnStat2+"','CLOSING_STOCK')");
	});
	AjaxController.saveColumnstateInReports(isertQry,(data)=>{
		if(data){
			alert("Saved Success");
		}
	})
}