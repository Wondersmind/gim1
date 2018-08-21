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


var totVALUE={};
convertorJSON=function(Aray){
	var colFrst=["DPT","ORDER TYPE","TARGET DATE","QTY","WORKER NAME","WRK_TYP","STATUS"],JSON=[] ;
	Aray.forEach((ths,i)=>{
		ths[6]=(ths[6]==0||ths[6]==null)?"ORDER":ths[6];
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
		   enableStatusBar: true,
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
var TotArray=[]
$(function(){
	if(tableData){
		var json=eval(tableData);
		if(json.length>0){
			TotArray=convertorJSON(json);
			tableMaker();
		}
	}
})
function tableMaker(){
	var columnDefs = [{headerName: "DPT", field: "DPT", width:100, enableRowGroup: true, enablePivot: true},
	                  {headerName: "ORD TYP", field: "ORDER TYPE", width:120, enableRowGroup: true, enablePivot: true},
	                  {headerName: "TARGET DATE", field: "TARGET DATE", width: 125, enableRowGroup: true, enablePivot: true},
	                  {headerName: "TYPE", field: "TYPE", width: 125, enableRowGroup: true, enablePivot: true},
	                  {headerName: "STATUS", field: "STATUS", width: 135, enableRowGroup: true, enablePivot: true},
	                  {headerName: "WKR_NAME", field: "WORKER NAME", width: 135, enableRowGroup: true, enablePivot: true},
	                  {headerName: "QTY", field: "QTY", width: 55, enablePivot: true, enableValue: true},
	                  {headerName: "TOT",pinned: 'right', width:70, enablePivot: true, enableRowGroup: true, enableValue: true,valueGetter:function(params) {
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
  $('.ag-body-viewport').scroll(scrollEnded);
  }    

function toalColumnShwer(){
	  $(".TotalRowGrp").remove();$(".ag-status-bar-aggregations #_value").html(TotArray.length);
	var container=$(".ag-body-viewport"),elements=$(".ag-body-container .ag-row-group:not(.TotalRowGrp):last");
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
var top=$(".ag-body-container").height();
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
$(sd).find('[col-id='+CSS.escape(key)+']').html(val);
});
$(sd).find('[col-id=ag-Grid-AutoColumn-'+CSS.escape(firstColumn)+']').html('Total');
$(".TotalRowGrp").remove();
$(".ag-body-container").append(sd);
}
}

$(".wholesearchbox").on("keyup",function(){
	if(gridOptions.api){
		gridOptions.api.setQuickFilter(this.value);
	}
});