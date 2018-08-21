	var gridOptions = {
			   suppressFieldDotNotation:true,
			   rowData: null,
			   groupHideOpenParents: true,
			   groupIncludeFooter:false,
			   enableColResize: true,
			   groupDefaultExpanded: -1,
			   domLayout:"forPrint",
			   rowHeight: 34,
			   pivotMode:true
	};
function printInAggrid(json,coldf,colstate,qty){
	gridOptions.columnDefs=coldf;
		var gridDiv = document.querySelector('#myGridPrint');
              new agGrid.Grid(gridDiv, gridOptions);
              gridOptions.api.setRowData(json);	
         if(colstate.length)
              gridOptions.columnApi.setColumnState(colstate);
              var count = gridOptions.api.getDisplayedRowCount(),sum={};
              for (var i = 0; i<count; i++) {
                   var rowNode = gridOptions.api.getDisplayedRowAtIndex(i);
                   $.each((rowNode.aggData),(key,val)=>{
                       if(typeof val =="object"){
                       	val=val?val.value:0;
                       	}
                       sum[key]=(Number(sum[key])||0)+val;
                       });
                   $.each((rowNode.groupData),(key,val)=>{
                       if(typeof val =="object"){
                       	val=val?val.value:0;
                       	}
                       sum[key]=(Number(sum[key])||0)+val;
                       });
               }
              var element=$("#myGridPrint .ag-row-group:last");
             var sd=element.clone()[0];
            $(sd).find('div').html('');
             $.each(sum,(key,val)=>{
           	if((+val)&&!isNaN(Number(val))){
            	 val=((+val||0).toFixed(2))||0;
             $(sd).find('[col-id='+CSS.escape(key)+']').html(+val);
           	 }
             });
             $(sd).find('div:first').html('Total');
            $("#myGridPrint .ag-body-container").append(sd);
            var PivotedFormat={html:$("#myGridPrint").html(),width:$("#myGridPrint .ag-header-container .ag-header-row").width()};
            gridOptions.api.destroy();
            return PivotedFormat;
             
}